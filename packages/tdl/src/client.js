// @flow

import { resolve as resolvePath } from 'path'
import EventEmitter from 'eventemitter3'
import Debug from 'debug'
import { tryP } from './fluture'
import uuidv4 from '../vendor/uuidv4'
import { deepRenameKey, deepRenameKey_, mergeDeepRight } from './util'
import {
  getPhoneNumber as defaultGetPhoneNumber,
  getAuthCode as defaultGetAuthCode,
  getPassword as defaultGetPassword,
  getName as defaultGetName
} from './prompt'

import type { TDLibClient, ITDLibJSON } from 'tdl-shared'

import type {
  ConfigType,
  StrictConfigType,
  LoginDetails,
  StrictLoginDetails,
  LoginUser,
  LoginBot
} from './types'

import type {
  TDFunction,
  // TDObject,
  Update,
  updateAuthorizationState,
  error as Td$error,
  ConnectionState,
  Invoke,
  InvokeFuture,
  Execute
} from '../types/tdlib'

const debug = Debug('tdl:client')
const debugEmitter = Debug('tdl:client:emitter')
const debugRes = Debug('tdl:client:response')
const debugReq = Debug('tdl:client:request')

const defaultLoginDetails: StrictLoginDetails = {
  type: 'user',
  getPhoneNumber: defaultGetPhoneNumber,
  getAuthCode: defaultGetAuthCode,
  getPassword: defaultGetPassword,
  getName: defaultGetName
}

const defaultOptions: $Exact<StrictConfigType> = {
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  databaseEncryptionKey: '',
  verbosityLevel: 2,
  receiveTimeout: 10,
  skipOldUpdates: false,
  useTestDc: false,
  useMutableRename: false,
  useDefaultVerbosityLevel: false,
  disableAuth: false,
  tdlibParameters: {
    use_message_database: true,
    use_secret_chats: false,
    system_language_code: 'en',
    application_version: '1.0',
    device_model: 'Unknown device',
    system_version: 'Unknown',
    enable_storage_optimizer: true
  }
}

type DeferredPromise = {
  resolve: (result: Object/* TDObject */) => void,
  reject: (error: Td$error) => void
}

export class TdlError extends Error {
  +err: any
  constructor (err: any) {
    super()
    this.err = err
  }
}

export type On =
  & ((event: 'update', listener: (update: Update) => void) => Client)
  & ((event: 'error', listener: (err: Td$error | TdlError) => void) => Client)
  & ((event: 'destroy', listener: () => void) => Client)
  & ((event: 'auth-needed', listener: () => void) => Client)
  & ((event: 'auth-not-needed', listener: () => void) => Client)
  & ((event: 'response', listener: (res: any) => void) => Client)

export type Emit =
  & ((event: 'update', update: Update) => void)
  & ((event: 'error', err: Td$error | TdlError) => void)
  & ((event: 'destroy') => void)
  & ((event: 'auth-needed') => void)
  & ((event: 'auth-not-needed') => void)
  & ((event: 'response', res: any) => void)

export type Off =
  & ((event: 'update', listener: Function, once?: boolean) => void)
  & ((event: 'error', listener: Function, once?: boolean) => void)
  & ((event: 'destroy', listener: Function, once?: boolean) => void)
  & ((event: 'auth-needed', listener: Function, once?: boolean) => void)
  & ((event: 'auth-not-needed', listener: Function, once?: boolean) => void)
  & ((event: 'response', listener: Function, once?: boolean) => void)

const noop = () => {}
const empty = () => ({})

const TDL_MAGIC = '6c47e6b71ea'

export class Client {
  +_options: StrictConfigType;
  +_emitter = new EventEmitter();
  +_fetching: Map<string, DeferredPromise> = new Map();
  +_tdlib: ITDLibJSON;
  _client: ?TDLibClient;
  _connectionState: ConnectionState = { _: 'connectionStateConnecting' };

  _connectResolver: (result: void) => void = noop;
  _connectRejector: null | (error: any) => void = null;

  _authNeeded: boolean = false;

  _loginDetails: StrictLoginDetails;

  _loginResolver: null | (result: void) => void = null;
  _loginRejector: null | (error: any) => void = null;

  _paused = false;

  constructor (tdlibInstance: ITDLibJSON, options: ConfigType = {}) {
    this._options = (mergeDeepRight(defaultOptions, options): StrictConfigType)

    if (!options.apiId)
      throw new TypeError('Valid api_id must be provided.')

    if (!options.apiHash)
      throw new TypeError('Valid api_hash must be provided.')

    this._tdlib = tdlibInstance
  }

  static create (tdlibInstance: ITDLibJSON, options: ConfigType = {}): Client {
    return new Client(tdlibInstance, options)
  }

  async _init (): Promise<void> {
    try {
      if (!this._options.useDefaultVerbosityLevel) {
        debug('setLogVerbosityLevel', this._options.verbosityLevel)
        this._tdlib.execute(null, {
          '@type': 'setLogVerbosityLevel',
          new_verbosity_level: this._options.verbosityLevel
        })
      }

      this._client = await this._tdlib.create()
    } catch (err) {
      if (this._connectRejector)
        this._connectRejector(`Error while creating client: ${err}`)
    }

    this._loop()
  }

  connect = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      this._connectResolver = resolve
      this._connectRejector = reject
      this._init()
    })
  }

  login = (getLoginDetails: () => LoginDetails = empty): Promise<void> => {
    debug('client.login()')
    this._emitter.once('auth-needed', () => {
      this._loginDetails = (mergeDeepRight(
        defaultLoginDetails, getLoginDetails()): $FlowOff)
    })
    return new Promise((resolve, reject) => {
      this._loginResolver = resolve
      this._loginRejector = reject
      this._emitter.emit('_login')
    })
  }

  _waitLogin (): Promise<void> {
    debug('waitLogin.', this._loginResolver)
    return new Promise(resolve => {
      if (this._loginResolver) return resolve()
      this._emitter.once('_login', () => resolve())
    })
  }

  connectAndLogin = async (fn: () => LoginDetails = empty): Promise<void> => {
    await this.connect()
    return this.login(fn)
  }

  pause = (): void => {
    debug('pause')
    if (this._paused === false)
      this._paused = true
  }

  resume = (): void => {
    debug('resume')
    if (this._paused === true) {
      this._emitter.emit('_resume')
      this._paused = false
    }
  }

  _waitResume (): Promise<void> {
    return new Promise(resolve => {
      if (this._paused === false) resolve()
      this._emitter.once('_resume', () => resolve())
    })
  }

  on: On = (event, listener) => {
    this._emitter.on(event, listener)
    return this
  }

  once: On = (event, listener) => {
    this._emitter.once(event, listener)
    return this
  }

  off: Off = (event, listener, once = false) => {
    this._emitter.removeListener(event, listener, undefined, once)
  }

  addListener: On = this.on

  removeListener: Off = this.off

  emit: Emit = (event, value) => {
    debugEmitter('emit', event, value)
    this._emitter.emit(event, value)
  }

  invoke: Invoke = async query => {
    const id = uuidv4()
    // $FlowOff
    query['@extra'] = id
    const receiveResponse = new Promise((resolve, reject) => {
      try {
        const defer = { resolve, reject }
        this._fetching.set(id, defer)
        // // timeout after 10 seconds
        // setTimeout(() => {
        //   delete this._fetching.delete(id)
        //   reject('Query timed out after 10 seconds.')
        // }, 1000 * 10)
      } catch (e) {
        this._catchError(e)
      }
    })
    await this._send(query)

    return receiveResponse
  }

  invokeFuture: InvokeFuture =
    (query => tryP(() => this.invoke(query)): $FlowOff)

  destroy = (): void => {
    if (!this._client) return
    this._tdlib.destroy(this._client)
    this._client = null
    this.emit('destroy')
  }

  setLogFatalErrorCallback = (fn: null | (errorMessage: string) => void): void => {
    this._tdlib.setLogFatalErrorCallback(fn)
  }

  execute: Execute = query => {
    debugReq('execute', query)
    if (!this._client) return null
    const { _client: client } = this
    const tdQuery = deepRenameKey('_', '@type', query)
    const tdResponse = this._tdlib.execute(client, tdQuery)
    return tdResponse && deepRenameKey('@type', '_', tdResponse)
  }

  _send (query: TDFunction): void {
    debugReq('send', query)
    if (!this._client) return
    const { _client: client } = this
    const tdQuery = deepRenameKey('_', '@type', query)
    this._tdlib.send(client, tdQuery)
  }

  _sendTdl (query: TDFunction): void {
    // $FlowOff
    this._send({ ...query, '@extra': TDL_MAGIC })
  }

  async _receive (timeout: number = this._options.receiveTimeout): Promise<Object/*TDObject*/ | null> {
    if (!this._client) return Promise.resolve(null)
    const tdResponse = await this._tdlib.receive(this._client, timeout)
    return tdResponse && (this._options.useMutableRename
      ? deepRenameKey_('@type', '_', tdResponse)
      : deepRenameKey('@type', '_', tdResponse))
  }

  _catchError (err: mixed): void {
    debug('catchError', err)

    this.emit('error', new TdlError(err))

    if (this._connectRejector)
      this._connectRejector(err)

    if (this._loginRejector)
      this._loginRejector(err)
  }

  _authRequired (): StrictLoginDetails {
    this._authNeeded = true
    this.emit('auth-needed')
    return this._loginDetails
  }

  async _loop (): Promise<void> {
    while (true) {
      try {
        const response = await this._receive()

        if (!this._client) return

        if (this._paused === true)
          await this._waitResume()

        if (response)
          await this._handleResponse(response)
        else
          debug('Response is empty.')
      } catch (e) {
        this._catchError(e)
      }
    }
    debug('_loop end')
  }

  async _handleResponse (res: Object/*TDObject*/): Promise<void> {
    this.emit('response', res)
    debugRes(res)

    if (res._ === 'error')
      return this._handleError(res)

    const id = res['@extra']
    const defer = this._fetching.get(id)

    if (defer) {
      delete res['@extra']
      defer.resolve(res)
      this._fetching.delete(id)
    } else if (id !== TDL_MAGIC) {
      return this._handleUpdate(res)
    }
  }

  async _handleUpdate (update: Update): Promise<void> {
    switch (update._) {
      case 'updateAuthorizationState':
        debug('New authorization state:', update.authorization_state._)
        this.emit('update', update)
        if (!this._options.disableAuth)
          this._handleAuth(update).catch(e => this._catchError(e))
        return

      case 'updateConnectionState':
        debug('New connection state:', update.state)
        this._connectionState = update.state
        this.emit('update', update)
        return

      default:
        if (this._options.skipOldUpdates && this._connectionState._ !== 'connectionStateReady')
          return
        this.emit('update', update)
    }
  }

  async _handleAuth (update: updateAuthorizationState): Promise<void> {
    const authorizationState = update.authorization_state

    switch (authorizationState._) {
      case 'authorizationStateWaitTdlibParameters':
        return this._sendTdl({
          _: 'setTdlibParameters',
          'parameters': {
            ...this._options.tdlibParameters,
            _: 'tdlibParameters',
            database_directory: resolvePath(this._options.databaseDirectory),
            files_directory: resolvePath(this._options.filesDirectory),
            api_id: this._options.apiId,
            api_hash: this._options.apiHash,
            use_test_dc: this._options.useTestDc
          }
        })

      case 'authorizationStateWaitEncryptionKey':
        await this._sendTdl({
          _: 'checkDatabaseEncryptionKey',
          encryption_key: this._options.databaseEncryptionKey
        })

        this._connectRejector = null
        return this._connectResolver()

      case 'authorizationStateClosed':
        return this.destroy()

      case 'authorizationStateReady':
        if (this._authNeeded === false) this.emit('auth-not-needed')
    }

    await this._waitLogin()
    debug('waitLogin end.', authorizationState._)

    switch (authorizationState._) {
      case 'authorizationStateWaitPhoneNumber': {
        const loginDetails = this._authRequired()

        return loginDetails.type === 'user'
          ? this._sendTdl({
            _: 'setAuthenticationPhoneNumber',
            phone_number: await loginDetails.getPhoneNumber(false)
          })
          : this._sendTdl({
            _: 'checkAuthenticationBotToken',
            token: await loginDetails.getToken(false)
          })
      }

      case 'authorizationStateWaitCode': {
        const loginDetails = this._authRequired()
        if (loginDetails.type !== 'user') return

        const code = await loginDetails.getAuthCode(false)

        if (authorizationState.is_registered === false) {
          const { firstName, lastName = '' } = await loginDetails.getName()
          return this._sendTdl({
            _: 'checkAuthenticationCode',
            code,
            first_name: firstName,
            last_name: lastName
          })
        }

        return this._sendTdl({
          _: 'checkAuthenticationCode',
          code
        })
      }

      case 'authorizationStateWaitPassword': {
        const loginDetails = this._authRequired()
        if (loginDetails.type !== 'user') return

        const passwordHint = authorizationState.password_hint
        const password = await loginDetails.getPassword(passwordHint, false)
        return this._sendTdl({
          _: 'checkAuthenticationPassword',
          password
        })
      }

      case 'authorizationStateReady':
        const loginResolver = this._loginResolver || noop
        this._loginRejector = null
        return loginResolver()
    }
  }

  async _handleError (error: Td$error): Promise<void> {
    // $FlowOff
    const id = error['@extra']
    const defer = this._fetching.get(id)

    if (defer) {
      // $FlowOff
      delete error['@extra']
      defer.reject(error)
      this._fetching.delete(id)
    } else if (id !== TDL_MAGIC) {
      this.emit('error', error)
    }

    const loginDetails = this._loginDetails

    if (!loginDetails) return

    switch (loginDetails.type) {
      case 'user': return this._handleUserError(error, loginDetails)
      case 'bot': return this._handleBotError(error, loginDetails)
    }
  }

  async _handleUserError (error: Td$error, loginDetails: LoginUser): Promise<void> {
    switch (error.message) {
      case 'PHONE_CODE_EMPTY':
      case 'PHONE_CODE_INVALID':
        return this._sendTdl({
          _: 'checkAuthenticationCode',
          code: await loginDetails.getAuthCode(true)
        })

      case 'PHONE_NUMBER_INVALID':
        return this._sendTdl({
          _: 'setAuthenticationPhoneNumber',
          phone_number: await loginDetails.getPhoneNumber(true)
        })

      case 'PASSWORD_HASH_INVALID':
        return this._sendTdl({
          _: 'checkAuthenticationPassword',
          password: await loginDetails.getPassword('', true)
        })
    }
  }

  async _handleBotError (error: Td$error, loginDetails: LoginBot): Promise<void> {
    switch (error.message) {
      case 'ACCESS_TOKEN_INVALID':
        return this._sendTdl({
          _: 'checkAuthenticationBotToken',
          token: await loginDetails.getToken(true)
        })
    }
  }
}
