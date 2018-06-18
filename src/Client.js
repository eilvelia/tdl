// @flow

import path from 'path'
import EventEmitter from 'eventemitter3'
import { mergeDeepRight } from 'ramda'
import * as Future from 'fluture'
import Debug from 'debug'
import uuidv4 from '../vendor/uuidv4'
import { TDLib } from './TDLib'
import { deepRenameKey, deepRenameKey_ } from './util'
import { getAuthCode, getPassword, getName } from './prompt'

import type {
  ConfigType,
  StrictConfigType
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

import type { TDLibClient } from './TDLib'

const debug = Debug('tdl:client')

const cwd = process.cwd()

const resolvePath = (relativePath: string): string =>
  path.resolve(cwd, relativePath)

const defaultOptions: StrictConfigType = {
  loginDetails: {
    type: 'user',
    getAuthCode,
    getPassword,
    getName
  },
  binaryPath: 'libtdjson',
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  logFilePath: '',
  verbosityLevel: 2,
  skipOldUpdates: false,
  dev: false,
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
  & ((event: 'error', listener: (err: TDError) => void) => Client)
  & ((event: 'destroy', listener: () => void) => Client)
  & ((event: 'auth-needed', listener: () => void) => Client)

export type Emit =
  & ((event: 'update', update: Update) => void)
  & ((event: 'error', err: TDError) => void)
  & ((event: 'destroy') => void)
  & ((event: 'auth-needed') => void)

export class Client {
  +options: StrictConfigType
; +emitter = new EventEmitter()
; +fetching: Map<string, FetchingPromiseCallback> = new Map()
; +tdlib: TDLib
  client: ?TDLibClient
  connectionState: ConnectionState = { _: 'connectionStateConnecting' }
  resolver: (result: void) => void
  rejector: (error: any) => void

  constructor (options: ConfigType = {}) {
    this.options = (mergeDeepRight(defaultOptions, options): StrictConfigType)

    this.tdlib = this.options.tdlibInstance
      || new TDLib(resolvePath(this.options.binaryPath))
  }

  async _init (): Promise<void> {
    try {
      this.setLogVerbosityLevel(this.options.verbosityLevel)

      if (this.options.logFilePath)
        this.setLogFilePath(resolvePath(this.options.logFilePath))

      this.client = await this.tdlib.create()

      this._loop()
    } catch (err) {
      this.rejector(`Error while creating client: ${err}`)
    }
  }

  connect: () => Promise<void> =
    () => new Promise((resolve, reject) => {
      this.resolver = resolve
      this.rejector = reject
      this._init()
    })

  on: On = (event, listener) => {
    this.emitter.on(event, listener)
    return this
  }

  once: On = (event, listener) => {
    this.emitter.once(event, listener)
    return this
  }

  emit: Emit = (event, value) => {
    debug('emit', event, value)
    this.emitter.emit(event, value)
  }

  invoke: Invoke = async query => {
    const id = uuidv4()
    // $FlowFixMe
    query['@extra'] = id
    const receiveUpdate = new Promise((resolve, reject) => {
      this.fetching.set(id, { resolve, reject })
      // timeout after 10 seconds
      // setTimeout(() => {
      //   delete this.fetching[id]
      //   reject('Query timed out after 10 seconds.')
      // }, 1000 * 10)
    })
    await this._send(query)

    return receiveUpdate
  }

  invokeFuture: InvokeFuture =
    (Future.encaseP(this.invoke): any)

  destroy = (): void => {
    if (!this.client) return
    this.tdlib.destroy(this.client)
    this.client = null
    this.emit('destroy')
  }

  setLogFilePath = (path: string): number =>
    this.tdlib.setLogFilePath(path)

  setLogVerbosityLevel = (verbosity: number): void => {
    this.tdlib.setLogVerbosityLevel(verbosity)
  }

  execute: Execute = query => {
    if (!this.client) return null
    const { client } = this
    const tdQuery = deepRenameKey('_', '@type', query)
    const tdResponse = this.tdlib.execute(client, tdQuery)
    return tdResponse && deepRenameKey('@type', '_', tdResponse)
  }

  _send (query: TDFunction): Promise<null> {
    if (!this.client) return Promise.resolve(null)
    const { client } = this
    const tdQuery = deepRenameKey('_', '@type', query)
    return this.tdlib.send(client, tdQuery)
  }

  async _receive (timeout: number = 10): Promise<TDObject | null> {
    if (!this.client) return Promise.resolve(null)
    const tdResponse = await this.tdlib.receive(this.client, timeout)
    return tdResponse && (this.options.useMutableRename
      ? deepRenameKey_('@type', '_', tdResponse)
      : deepRenameKey('@type', '_', tdResponse))
  }

  async _loop (): Promise<void> {
    const response = await this._receive()

    if (!this.client) return

    if (!response) {
      debug('Response is empty.')
      return this._loop()
    }

    await this._handleResponse(response)

    this._loop()
  }

  async _handleResponse (res: TDObject): Promise<mixed> {
    if (res._ === 'error')
      return this._handleError(res)

    // $FlowFixMe
    const id = res['@extra']
    const promise = this.fetching.get(id)

    if (promise) {
      // $FlowFixMe
      delete res['@extra']
      promise.resolve(res)
      this.fetching.delete(id)
    } else if (id !== null) {
      // $FlowFixMe
      await this._handleUpdate(res)
    }
  }

  async _handleUpdate (update: Update): Promise<mixed> {
    switch (update._) {
      case 'updateAuthorizationState':
        return this._handleAuth(update)

      case 'updateConnectionState':
        debug('updateConnectionState', update.state)
        this.connectionState = update.state
        return

      default:
        if (this.options.skipOldUpdates && this.connectionState._ !== 'connectionStateReady')
          return
        this.emit('update', update)
    }
  }

  async _handleAuth (update: updateAuthorizationState) {
    const { loginDetails } = this.options
    const authorizationState = update.authorization_state

    switch (authorizationState._) {
      case 'authorizationStateWaitTdlibParameters':
        return this._send({
          _: 'setTdlibParameters',
          'parameters': {
            ...this.options.tdlibParameters,
            _: 'tdlibParameters',
            database_directory: resolvePath(this.options.databaseDirectory),
            files_directory: resolvePath(this.options.filesDirectory),
            api_id: this.options.apiId,
            api_hash: this.options.apiHash,
            use_test_dc: this.options.dev
          }
        })

      case 'authorizationStateWaitEncryptionKey':
        return this._send({
          _: 'checkDatabaseEncryptionKey'
        })

      case 'authorizationStateWaitPhoneNumber':
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
        return this.resolver()

      case 'authorizationStateClosed':
        this.destroy()
    }
  }

  async _handleError (error: TDError) {
    const { loginDetails } = this.options

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
        // $FlowFixMe
        const id = error['@extra']
        const promise = this.fetching.get(id)

        if (promise) {
          // $FlowFixMe
          delete error['@extra']
          promise.reject(error)
          this.fetching.delete(id)
        } else {
          this.emit('error', error)
        }
      }
    }
  }
}
