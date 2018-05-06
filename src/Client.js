// @flow

import path from 'path'
import EventEmitter from 'events'
import { prompt, type QuestionKindT } from 'inquirer'
import Debug from 'debug'
import { TDLib } from './TDLib'
import uuidv4 from '../vendor/uuidv4'

import type {
  EventType,
  ConfigType,
  StrictConfigType
} from './types'

import type { TDLibClient } from './TDLib'

const debug = Debug('tdl')

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

const defaultOptions = {
  apiId: null,
  apiHash: null,
  getAuthCode,
  getPassword,
  binaryPath: 'libtdjson',
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  logFilePath: '',
  verbosityLevel: 2,
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

type P = { resolve: (result: any) => void, reject: (error: any) => void }

export class Client {
; +options: StrictConfigType
; +emitter = new EventEmitter()
; +fetching: Map<string, P> = new Map()
; +tdlib: TDLib
  client: TDLibClient | null
  resolver: Function
  rejector: Function

  connect: () => Promise<void> =
    () => new Promise((resolve, reject) => {
      this.resolver = resolve
      this.rejector = reject
      this._init()
    })

  constructor (options: ConfigType = {}) {
    this.options = {
      ...defaultOptions,
      ...options
    }

    this.tdlib = new TDLib(path.resolve(cwd, this.options.binaryPath))
  }

  async _init (): Promise<void> {
    try {
      this.setLogVerbosityLevel(this.options.verbosityLevel)

      if (this.options.logFilePath)
        this.setLogFilePath(path.resolve(cwd, this.options.logFilePath))

      this.client = await this.tdlib.create()

      this._loop()
    } catch (err) {
      this.rejector(`Error while creating client: ${err}`)
    }
  }

  on = (eventName: EventType, listener: (arg: any) => void) => {
    this.emitter.on(eventName, listener)
    return this
  }

  emit = (eventName: EventType, value: any) => {
    return this.emitter.emit(eventName, value)
  }

  invoke = async (query: Object): Promise<Object> => {
    const id = uuidv4()
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

  destroy = (): void => {
    if (!this.client) return
    this.tdlib.destroy(this.client)
    this.client = null
  }

  setLogFilePath (path: string): number | any {
    return this.tdlib.setLogFilePath(path)
  }

  setLogVerbosityLevel (verbosity: number): void {
    this.tdlib.setLogVerbosityLevel(verbosity)
  }

  async _loop (): Promise<void> {
    const update = await this._receive()

    if (!update) {
      debug('Current update is empty.')
      return this._loop()
    }

    switch (update['@type']) {
      case 'updateAuthorizationState':
        await this._handleAuth(update)
        break

      case 'error':
        await this._handleError(update)
        break

      default:
        await this._handleUpdate(update)
    }

    this._loop()
  }

  async _handleAuth (update: Object): Promise<void> {
    switch (update.authorization_state['@type']) {
      case 'authorizationStateWaitTdlibParameters':
        await this._send({
          '@type': 'setTdlibParameters',
          'parameters': {
            ...this.options.tdlibParameters,
            '@type': 'tdlibParameters',
            'database_directory': path.resolve(cwd, this.options.databaseDirectory),
            'files_directory': path.resolve(cwd, this.options.filesDirectory),
            'api_id': this.options.apiId,
            'api_hash': this.options.apiHash,
          },
        })
        break

      case 'authorizationStateWaitEncryptionKey':
        await this._send({
          '@type': 'checkDatabaseEncryptionKey',
        })
        break

      case 'authorizationStateWaitPhoneNumber':
        await this._send({
          '@type': 'setAuthenticationPhoneNumber',
          'phone_number': this.options.phoneNumber,
        })
        break

      case 'authorizationStateWaitCode':
        const code = await this.options.getAuthCode(false)
        await this._send({
          '@type': 'checkAuthenticationCode',
          'code': code,
        })
        break

      case 'authorizationStateWaitPassword':
        const passwordHint = update.authorization_state['password_hint']
        const password = await this.options.getPassword(passwordHint, false)
        await this._send({
          '@type': 'checkAuthenticationPassword',
          'password': password,
        })
        break

      case 'authorizationStateReady':
        this.resolver()
    }
  }

  async _handleError (update: Object) {
    switch (update['message']) {
      case 'PHONE_CODE_EMPTY':
      case 'PHONE_CODE_INVALID':
        const code = await this.options.getAuthCode(true)
        await this._send({
          '@type': 'checkAuthenticationCode',
          'code': code,
        })
        break

      case 'PASSWORD_HASH_INVALID':
        const password = await this.options.getPassword('', true)
        await this._send({
          '@type': 'checkAuthenticationPassword',
          'password': password,
        })
        break

      default:
        const id = update['@extra']
        const p = this.fetching.get(id)

        if (p) {
          delete update['@extra']
          p.reject(update)
          this.fetching.delete(id)
        } else {
          this.emit('error', update)
        }
    }
  }

  async _handleUpdate (update: Object) {
    const id = update['@extra']
    const p = this.fetching.get(id)

    if (p) {
      delete update['@extra']
      p.resolve(update)
      this.fetching.delete(id)
    } else {
      this.emit('update', update)
    }
  }

  _send (query: Object): Promise<Object | null> {
    if (!this.client) return Promise.resolve(null)
    return this.tdlib.send(this.client, query)
  }

  _receive (timeout: number = 10): Promise<Object | null> {
    if (!this.client) return Promise.resolve(null)
    return this.tdlib.receive(this.client, timeout)
  }
}
