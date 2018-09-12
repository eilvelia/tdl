// @flow

import path from 'path'
import EventEmitter from 'eventemitter3'
import { mergeDeepRight } from 'ramda'
import * as Future from 'fluture'
import Debug from 'debug'
import uuidv4 from '../vendor/uuidv4'
import { TDLib } from './tdlib'
import { deepRenameKey, deepRenameKey_ } from './util'
import {
  getAuthCode as defaultGetAuthCode,
  getPassword as defaultGetPassword,
  getName as defaultGetName
} from './prompt'

import type {
  ConfigType,
  StrictConfigType,
  TDLibInterface
} from './types'

import type {
  TDFunction,
  TDObject,
  Update,
  updateAuthorizationState,
  error as TDError,
  ConnectionState,
  Invoke,
  InvokeFuture,
  Execute
} from '../types/tdlib'

import type { TDLibClient } from './tdlib'

const debug = Debug('tdl:client')

const cwd = process.cwd()

const resolvePath = (relativePath: string): string =>
  path.resolve(cwd, relativePath)

const defaultOptions: StrictConfigType = {
  loginDetails: {
    type: 'user',
    getAuthCode: defaultGetAuthCode,
    getPassword: defaultGetPassword,
    getName: defaultGetName
  },
  binaryPath: process.platform === 'win32' ? 'tdjson' : 'libtdjson',
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  verbosityLevel: 2,
  skipOldUpdates: false,
  useTestDc: false,
  useMutableRename: false,
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
  reject: (error: TDError) => void
}

export type On =
  & ((event: 'update', listener: (update: Update) => void) => Client)
  & ((event: 'error', listener: (err: TDError | Error) => void) => Client)
  & ((event: 'destroy', listener: () => void) => Client)
  & ((event: 'auth-needed', listener: () => void) => Client)
  & ((event: 'auth-not-needed', listener: () => void) => Client)
  & ((event: 'response', listener: (res: any) => void) => Client)

export type Emit =
  & ((event: 'update', update: Update) => void)
  & ((event: 'error', err: TDError | Error) => void)
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

const defaultBeforeAuth = () => Promise.resolve()

export class Client {
  +_options: StrictConfigType;
  +_emitter = new EventEmitter();
  +_fetching: Map<string, FetchingPromiseCallback> = new Map();
  +_tdlib: TDLib;
  _client: ?TDLibClient;
  _connectionState: ConnectionState = { _: 'connectionStateConnecting' };

  _beforeAuth: () => Promise<mixed> = defaultBeforeAuth;

  _connectResolver: (result: void) => void = () => undefined;
  _connectRejector: null | (error: any) => void = null;

  _authNeeded: boolean = false;

  constructor (options: ConfigType = {}) {
    this._options = (mergeDeepRight(defaultOptions, options): StrictConfigType)

    this._tdlib = this._options.tdlibInstance
      || new TDLib(resolvePath(this._options.binaryPath))
  }

  static create (options: ConfigType = {}): Client {
    return new Client(options)
  }

  static fromTDLib (tdlibInstance: TDLib, options: ConfigType = {}): Client {
    return new Client({
      ...options,
      tdlibInstance
    })
  }

  // experimental
  static fromAbstractTd (tdlibInstance: TDLibInterface, options: ConfigType = {}): Client {
    return new Client({
      ...options,
      tdlibInstance: ((tdlibInstance: $FlowTodo): TDLib)
    })
  }

  async _init (): Promise<void> {
    try {
      this.setLogVerbosityLevel(this._options.verbosityLevel)

      this._client = await this._tdlib.create()
    } catch (err) {
      if (this._connectRejector)
        this._connectRejector(`Error while creating client: ${err}`)
    }

    this._loop()
  }

  connect = (beforeAuth?: () => Promise<mixed>): Promise<void> => {
    if (beforeAuth) this._beforeAuth = beforeAuth

    return new Promise((resolve, reject) => {
      this._connectResolver = resolve
      this._connectRejector = reject
      this._init()
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
    debug('emit', event, value)
    this._emitter.emit(event, value)
  }

  removeListener: RemoveListener = (event, listener, once = false) => {
    this._emitter.removeListener(event, listener, undefined, once)
  }

  invoke: Invoke = async query => {
    const id = uuidv4()
    // $FlowOff
    query['@extra'] = id
    const receiveUpdate = new Promise((resolve, reject) => {
      try {
        this._fetching.set(id, { resolve, reject })
        // // timeout after 10 seconds
        // setTimeout(() => {
        //   delete this._fetching[id]
        //   reject('Query timed out after 10 seconds.')
        // }, 1000 * 10)
      } catch (e) {
        console.error(e)
      }
    })
    await this._send(query)

    return receiveUpdate
  }

  invokeFuture: InvokeFuture =
    (Future.encaseP(this.invoke): $FlowOff)

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

  setLogFatalErrorCallback = (fn: (errorMessage: string) => void): void => {
    this._tdlib.setLogFatalErrorCallback(fn)
  }

  execute: Execute = query => {
    if (!this._client) return null
    const { _client: client } = this
    const tdQuery = deepRenameKey('_', '@type', query)
    const tdResponse = this._tdlib.execute(client, tdQuery)
    return tdResponse && deepRenameKey('@type', '_', tdResponse)
  }

  async _send (query: TDFunction): Promise<void> {
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
        const err: mixed = e
        const message = (err && typeof err === 'object' && err.message) || err

        this.emit('error', new Error(message))
        if (this._connectRejector)
          this._connectRejector(err)
      }
    }
  }

  async _handleResponse (res: TDObject): Promise<mixed> {
    this.emit('response', res)

    if (res._ === 'error')
      return this._handleError(res)

    // $FlowOff
    const id = res['@extra']
    const promise = this._fetching.get(id)

    if (promise) {
      // $FlowOff
      delete res['@extra']
      promise.resolve(res)
      this._fetching.delete(id)
    } else if (id !== null) {
      // $FlowOff
      await this._handleUpdate(res)
    }
  }

  async _handleUpdate (update: Update): Promise<mixed> {
    switch (update._) {
      case 'updateAuthorizationState':
        return this._handleAuth(update)

      case 'updateConnectionState':
        debug('New connection state', update.state)
        this._connectionState = update.state
        return

      default:
        if (this._options.skipOldUpdates && this._connectionState._ !== 'connectionStateReady')
          return
        this.emit('update', update)
    }
  }

  async _handleAuth (update: updateAuthorizationState) {
    const { loginDetails } = this._options
    const authorizationState = update.authorization_state

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
        await this._send({ _: 'checkDatabaseEncryptionKey' })

        await this._beforeAuth()
          .catch(() => {})

        break

      case 'authorizationStateWaitPhoneNumber':
        this._authNeeded = true
        this.emit('auth-needed')

        return loginDetails.type === 'user'
          ? this._send({
            _: 'setAuthenticationPhoneNumber',
            phone_number: loginDetails.phoneNumber
          })
          : this._send({
            _: 'checkAuthenticationBotToken',
            token: loginDetails.token
          })

      case 'authorizationStateWaitCode': {
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
        if (loginDetails.type !== 'user') return
        const passwordHint = authorizationState.password_hint
        const password = await loginDetails.getPassword(passwordHint, false)
        return this._send({
          _: 'checkAuthenticationPassword',
          password
        })
      }

      case 'authorizationStateReady':
        if (this._authNeeded === false) this.emit('auth-not-needed')
        this._connectRejector = null
        return this._connectResolver()

      case 'authorizationStateClosed':
        debug('authorizationStateClosed')
        this.destroy()
    }
  }

  async _handleError (error: TDError) {
    const { loginDetails } = this._options

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
