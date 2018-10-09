// @flow

import { resolve as resolvePath } from 'path'
import EventEmitter from 'eventemitter3'
import { mergeDeepRight } from 'ramda'
import { encaseP } from 'fluture'
import Debug from 'debug'
import uuidv4 from '../vendor/uuidv4'
import { TDLib } from './tdlib-ffi'
import { deepRenameKey, deepRenameKey_ } from './util'
import {
  getAuthCode as defaultGetAuthCode,
  getPassword as defaultGetPassword,
  getName as defaultGetName
} from './prompt'

import type { TDLibClient, ITDLibJSON } from 'tdl-shared'

import type {
  ConfigType,
  StrictConfigType,
  LoginDetails,
  StrictLoginDetails
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
  phoneNumber: '',
  getAuthCode: defaultGetAuthCode,
  getPassword: defaultGetPassword,
  getName: defaultGetName
}

const defaultOptions: $Exact<StrictConfigType> = {
  binaryPath: '',
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  databaseEncryptionKey: '',
  verbosityLevel: 2,
  skipOldUpdates: false,
  useTestDc: false,
  useMutableRename: false,
  useDefaultVerbosityLevel: false,
  tdlibParameters: {
    use_message_database: true,
    use_secret_chats: false,
    system_language_code: 'en',
    application_version: '1.0',
    device_model: 'tdlib',
    system_version: 'node',
    enable_storage_optimizer: true
  }
}

type FetchingPromiseCallback = {
  resolve: (result: Object/* TDObject */) => void,
  reject: (error: Td$error) => void
}

export type On =
  & ((event: 'update', listener: (update: Update) => void) => Client)
  & ((event: 'error', listener: (err: Td$error | Error) => void) => Client)
  & ((event: 'destroy', listener: () => void) => Client)
  & ((event: 'auth-needed', listener: () => void) => Client)
  & ((event: 'auth-not-needed', listener: () => void) => Client)
  & ((event: 'response', listener: (res: any) => void) => Client)

export type Emit =
  & ((event: 'update', update: Update) => void)
  & ((event: 'error', err: Td$error | Error) => void)
  & ((event: 'destroy') => void)
  & ((event: 'auth-needed') => void)
  & ((event: 'auth-not-needed') => void)
  & ((event: 'response', res: any) => void)

export type RemoveListener =
  & ((event: 'update', listener: Function, once?: boolean) => void)
  & ((event: 'error', listener: Function, once?: boolean) => void)
  & ((event: 'destroy', listener: Function, once?: boolean) => void)
  & ((event: 'auth-needed', listener: Function, once?: boolean) => void)
  & ((event: 'auth-not-needed', listener: Function, once?: boolean) => void)
  & ((event: 'response', listener: Function, once?: boolean) => void)

const noop = () => {}

export class Client {
  +_options: StrictConfigType;
  +_emitter = new EventEmitter();
  +_fetching: Map<string, FetchingPromiseCallback> = new Map();
  +_tdlib: ITDLibJSON;
  _client: ?TDLibClient;
  _connectionState: ConnectionState = { _: 'connectionStateConnecting' };

  _connectResolver: (result: void) => void = noop;
  _connectRejector: null | (error: any) => void = null;

  _authNeeded: boolean = false;

  _loginDetails: StrictLoginDetails;

  _loginResolver: null | (result: void) => void = null;

  constructor (options: ConfigType = {}) {
    this._options = (mergeDeepRight(defaultOptions, options): StrictConfigType)

    if (!options.apiId)
      throw new TypeError('Valid api_id must be provided.')

    if (!options.apiHash)
      throw new TypeError('Valid api_hash must be provided.')

    this._tdlib = this._options.tdlibInstance
      || new TDLib(this._options.binaryPath || undefined)
  }

  static create (options: ConfigType = {}): Client {
    return new Client(options)
  }

  static fromTDLib (tdlibInstance: ITDLibJSON, options: ConfigType = {}): Client {
    return new Client({
      ...options,
      tdlibInstance
    })
  }

  async _init (): Promise<void> {
    try {
      if (!this._options.useDefaultVerbosityLevel)
        this.setLogVerbosityLevel(this._options.verbosityLevel)

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

  login = (getLoginDetails: () => LoginDetails): Promise<void> => {
    debug('client.login()')
    this._emitter.once('auth-needed', () => {
      this._loginDetails = mergeDeepRight(
        defaultLoginDetails, getLoginDetails())
    })
    return new Promise(resolve => {
      this._loginResolver = resolve
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

  on: On = (event, listener) => {
    this._emitter.on(event, listener)
    return this
  }

  once: On = (event, listener) => {
    this._emitter.once(event, listener)
    return this
  }

  emit: Emit = (event, value) => {
    debugEmitter('emit', event, value)
    this._emitter.emit(event, value)
  }

  removeListener: RemoveListener = (event, listener, once = false) => {
    this._emitter.removeListener(event, listener, undefined, once)
  }

  invoke: Invoke = async query => {
    const id = uuidv4()
    // $FlowOff
    query['@extra'] = id
    const receiveResponse = new Promise((resolve, reject) => {
      try {
        this._fetching.set(id, { resolve, reject })
        // // timeout after 10 seconds
        // setTimeout(() => {
        //   delete this._fetching[id]
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
    (encaseP(this.invoke): $FlowOff)

  destroy = (): void => {
    if (!this._client) return
    this._tdlib.destroy(this._client)
    this._client = null
    this.emit('destroy')
  }

  setLogMaxFileSize = (maxFileSize: number | string): void => {
    this._tdlib.setLogMaxFileSize(maxFileSize)
  }

  setLogFilePath = (path: string): number =>
    this._tdlib.setLogFilePath(path)

  setLogVerbosityLevel = (verbosity: number): void => {
    this._tdlib.setLogVerbosityLevel(verbosity)
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

  async _send (query: TDFunction): Promise<void> {
    debugReq('send', query)
    if (!this._client) return
    const { _client: client } = this
    const tdQuery = deepRenameKey('_', '@type', query)
    this._tdlib.send(client, tdQuery)
  }

  async _receive (timeout: number = 10): Promise<Object/*TDObject*/ | null> {
    if (!this._client) return Promise.resolve(null)
    const tdResponse = await this._tdlib.receive(this._client, timeout)
    return tdResponse && (this._options.useMutableRename
      ? deepRenameKey_('@type', '_', tdResponse)
      : deepRenameKey('@type', '_', tdResponse))
  }

  _catchError (err: mixed): void {
    debug('catchError', err)

    const message = (err && typeof err === 'object' && err.message) || err

    this.emit('error', new Error(message))

    if (this._connectRejector)
      this._connectRejector(err)
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

        if (response)
          await this._handleResponse(response)
        else
          debug('Response is empty.')
      } catch (e) {
        this._catchError(e)
      }
    }
  }

  async _handleResponse (res: Object/*TDObject*/): Promise<void> {
    this.emit('response', res)
    debugRes(res)

    if (res._ === 'error')
      return this._handleError(res)

    // $Flow//Off
    const id = res['@extra']
    const promise = this._fetching.get(id)

    if (promise) {
      // $Flow//Off
      delete res['@extra']
      promise.resolve(res)
      this._fetching.delete(id)
    } else if (id !== null && res._ !== 'ok') {
      // $Flow//Off
      return this._handleUpdate(res)
    }
  }

  async _handleUpdate (update: Update): Promise<void> {
    switch (update._) {
      case 'updateAuthorizationState':
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

  async _handleAuth (update: updateAuthorizationState) {
    const authorizationState = update.authorization_state

    debug('New authorization state:', authorizationState._)

    switch (authorizationState._) {
      case 'authorizationStateWaitTdlibParameters':
        return this._send({
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
        await this._send({
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
          ? this._send({
            _: 'setAuthenticationPhoneNumber',
            phone_number: loginDetails.phoneNumber
          })
          : this._send({
            _: 'checkAuthenticationBotToken',
            token: loginDetails.token
          })
      }

      case 'authorizationStateWaitCode': {
        const loginDetails = this._authRequired()
        if (loginDetails.type !== 'user') return

        const code = await loginDetails.getAuthCode(false)

        if (authorizationState.is_registered === false) {
          const { firstName, lastName = '' } = await loginDetails.getName()
          return this._send({
            _: 'checkAuthenticationCode',
            code,
            first_name: firstName,
            last_name: lastName
          })
        }

        return this._send({
          _: 'checkAuthenticationCode',
          code
        })
      }

      case 'authorizationStateWaitPassword': {
        const loginDetails = this._authRequired()
        if (loginDetails.type !== 'user') return

        const passwordHint = authorizationState.password_hint
        const password = await loginDetails.getPassword(passwordHint, false)
        return this._send({
          _: 'checkAuthenticationPassword',
          password
        })
      }

      case 'authorizationStateReady':
        const loginResolver = this._loginResolver || noop
        return loginResolver()
    }
  }

  async _handleError (error: Td$error): Promise<void> {
    const loginDetails = this._loginDetails

    switch (error.message) {
      case 'PHONE_CODE_EMPTY':
      case 'PHONE_CODE_INVALID': {
        if (loginDetails.type !== 'user') return
        const code = await loginDetails.getAuthCode(true)
        return this._send({
          _: 'checkAuthenticationCode',
          code
        })
      }

      case 'PASSWORD_HASH_INVALID': {
        if (loginDetails.type !== 'user') return
        const password = await loginDetails.getPassword('', true)
        return this._send({
          _: 'checkAuthenticationPassword',
          password
        })
      }

      default: {
        // $FlowOff
        const id = error['@extra']
        const promise = this._fetching.get(id)

        if (promise) {
          // $FlowOff
          delete error['@extra']
          promise.reject(error)
          this._fetching.delete(id)
        } else {
          this.emit('error', error)
        }
      }
    }
  }
}
