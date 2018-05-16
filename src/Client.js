// @flow

import path from 'path'
import EventEmitter from 'events'
import { mergeDeepRight } from 'ramda'
import { prompt, type QuestionKindT } from 'inquirer'
import Debug from 'debug'
import { TDLib } from './TDLib'
import uuidv4 from '../vendor/uuidv4'
import { deepRenameKey/*, deepRenameKey_ */ } from './util'

import type {
  ConfigType,
  StrictConfigType
} from './types'

import type {
  TDFunctionOptional,
  TDObject,
  Update,
  updateAuthorizationState,
  error as TDError,
  Invoke,
  Execute
} from './tdlib-types'

import type { TDLibClient } from './TDLib'

const debug = Debug('tdl:client')

const getInput = (type: QuestionKindT, message: string): Promise<string> =>
  prompt([{ type, name: 'input', message }])
    .then(result => typeof result.input === 'string' ? result.input : '')
    .then(input => input.length === 0 ? getInput(type, message) : input)

const getAuthCode = (retry?: boolean): Promise<string> =>
  getInput('input', retry
    ? 'Wrong auth code, please re-enter: '
    : 'Please enter auth code: ')

const getPassword = (passwordHint: string, retry?: boolean): Promise<string> =>
  getInput('password', retry
    ? 'Wrong password, please re-enter: '
    : `Please enter password (${passwordHint}): `)

const cwd = process.cwd()

const resolvePath = (relativePath: string): string =>
  path.resolve(cwd, relativePath)

const defaultOptions: StrictConfigType = {
  loginDetails: {
    type: 'user',
    getAuthCode,
    getPassword
  },
  binaryPath: 'libtdjson',
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  logFilePath: '',
  verbosityLevel: 2,
  dev: false,
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

type P = {
  resolve: (result: Object/* TDObject */) => void,
  reject: (error: TDError) => void
}

type On =
  & ((event: 'update', listener: (update: Update) => void) => Client)
  & ((event: 'error', listener: (err: TDError) => void) => Client)
  & ((event: 'destroy', listener: () => void) => Client)

type Emit =
  & ((event: 'update', update: Update) => boolean)
  & ((event: 'error', err: TDError) => boolean)
  & ((event: 'destroy') => boolean)

export class Client {
; +options: StrictConfigType
; +emitter = new EventEmitter()
; +fetching: Map<string, P> = new Map()
; +tdlib: TDLib
  client: ?TDLibClient
  resolver: (result: any) => void
  rejector: (error: any) => void

  connect: () => Promise<void> =
    () => new Promise((resolve, reject) => {
      this.resolver = resolve
      this.rejector = reject
      this._init()
    })

  constructor (options: ConfigType = {}) {
    this.options = (mergeDeepRight(defaultOptions, options): StrictConfigType)

    this.tdlib = new TDLib(resolvePath(this.options.binaryPath))
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
    return this.emitter.emit(event, value)
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

    // $FlowFixMe
    return receiveUpdate
  }

  destroy = (): void => {
    if (!this.client) return
    this.tdlib.destroy(this.client)
    this.client = null
    this.emit('destroy')
  }

  setLogFilePath = (path: string): number | any =>
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

  _send (query: TDFunctionOptional): Promise<Object | null> {
    if (!this.client) return Promise.resolve(null)
    const { client } = this
    const tdQuery = deepRenameKey('_', '@type', query)
    return this.tdlib.send(client, tdQuery)
  }

  async _receive (timeout: number = 10): Promise<TDObject | Update | null> {
    if (!this.client) return Promise.resolve(null)
    const tdResponse = await this.tdlib.receive(this.client, timeout)
    return tdResponse && deepRenameKey/* _ */('@type', '_', tdResponse)
  }

  async _loop (): Promise<void> {
    const nullableEvent = await this._receive()

    if (!this.client) return

    if (!nullableEvent) {
      // debug('Current update is empty.')
      return this._loop()
    }

    const event = (nullableEvent: TDObject | Update)

    switch (event._) {
      case 'updateAuthorizationState':
        await this._handleAuth(event)
        break

      case 'error':
        await this._handleError(event)
        break

      default: {
        // $FlowFixMe
        const id = event['@extra']
        const p = this.fetching.get(id)

        if (p)
          // $FlowFixMe
          this._handleResponse(event, id, p)
        else
          // $FlowFixMe
          this._handleUpdate(event)
      }
    }

    this._loop()
  }

  _handleResponse (res: TDObject, id: string, p: P) {
    // $FlowFixMe
    delete res['@extra']
    p.resolve(res)
    this.fetching.delete(id)
  }

  _handleUpdate (update: Update) {
    this.emit('update', update)
  }

  async _handleAuth (update: updateAuthorizationState) {
    const { loginDetails } = this.options

    switch (update.authorization_state._) {
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
        const code = await getAuthCode(false)
        return this._send({
          _: 'checkAuthenticationCode',
          code: code
        })
      }

      case 'authorizationStateWaitPassword': {
        const passwordHint = update.authorization_state.password_hint
        const password = await getPassword(passwordHint, false)
        return this._send({
          _: 'checkAuthenticationPassword',
          password: password
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
          code: code
        })
      }

      case 'PASSWORD_HASH_INVALID': {
        if (loginDetails.type !== 'user') return
        const password = await loginDetails.getPassword('', true)
        return this._send({
          _: 'checkAuthenticationPassword',
          password: password
        })
      }

      default: {
        // $FlowFixMe
        const id = error['@extra']
        const p = this.fetching.get(id)

        if (p) {
          // $FlowFixMe
          delete error['@extra']
          p.reject(error)
          this.fetching.delete(id)
        } else {
          this.emit('error', error)
        }
      }
    }
  }
}
