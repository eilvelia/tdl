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
  EventType,
  ConfigType,
  StrictConfigType
} from './types'

import type {
  TDFunction,
  Update,
  updateAuthorizationState,
  error as TDError
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
    this.options = mergeDeepRight(defaultOptions, options)

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

  on = (eventName: EventType, listener: (arg: any) => void) => {
    this.emitter.on(eventName, listener)
    return this
  }

  emit = (eventName: EventType, value: any): boolean => {
    debug('emit', eventName, value)
    return this.emitter.emit(eventName, value)
  }

  invoke = async (query: TDFunction): Promise<Object> => {
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

  execute = (query: TDFunction): Object | null =>
    this._execute(query)

  destroy = (): void => {
    if (!this.client) return
    this.tdlib.destroy(this.client)
    this.client = null
  }

  setLogFilePath = (path: string): number | any =>
    this.tdlib.setLogFilePath(path)

  setLogVerbosityLevel = (verbosity: number): void => {
    this.tdlib.setLogVerbosityLevel(verbosity)
  }

  async _loop (): Promise<void> {
    const update = await this._receive()

    if (!update) {
      debug('Current update is empty.')
      return this._loop()
    }

    switch (update._) {
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

  async _handleAuth (update: updateAuthorizationState): Promise<void> {
    const { loginDetails } = this.options

    switch (update.authorization_state._) {
      case 'authorizationStateWaitTdlibParameters':
        await this._send({
          _: 'setTdlibParameters',
          'parameters': {
            ...this.options.tdlibParameters,
            _: 'tdlibParameters',
            database_directory: resolvePath(this.options.databaseDirectory),
            files_directory: resolvePath(this.options.filesDirectory),
            api_id: this.options.apiId,
            api_hash: this.options.apiHash,
          },
        })
        break

      case 'authorizationStateWaitEncryptionKey':
        await this._send({
          _: 'checkDatabaseEncryptionKey',
        })
        break

      case 'authorizationStateWaitPhoneNumber': {
        if (loginDetails.type === 'user') {
          await this._send({
            _: 'setAuthenticationPhoneNumber',
            phone_number: loginDetails.phoneNumber,
          })
        } else {
          await this._send({
            _: 'checkAuthenticationBotToken',
            token: loginDetails.token
          })
        }
        break
      }

      case 'authorizationStateWaitCode': {
        const code = await getAuthCode(false)
        await this._send({
          _: 'checkAuthenticationCode',
          code: code
        })
        break
      }

      case 'authorizationStateWaitPassword': {
        const passwordHint = update.authorization_state.password_hint
        const password = await getPassword(passwordHint, false)
        await this._send({
          _: 'checkAuthenticationPassword',
          password: password
        })
        break
      }

      case 'authorizationStateReady':
        this.resolver()
    }
  }

  async _handleError (update: TDError) {
    const { loginDetails } = this.options

    switch (update['message']) {
      case 'PHONE_CODE_EMPTY':
      case 'PHONE_CODE_INVALID':
        if (loginDetails.type !== 'user') return
        const code = await loginDetails.getAuthCode(true)
        await this._send({
          _: 'checkAuthenticationCode',
          'code': code
        })
        break

      case 'PASSWORD_HASH_INVALID':
        if (loginDetails.type !== 'user') return
        const password = await loginDetails.getPassword('', true)
        await this._send({
          _: 'checkAuthenticationPassword',
          'password': password,
        })
        break

      default:
        // $FlowFixMe
        const id = update['@extra']
        const p = this.fetching.get(id)

        if (p) {
          // $FlowFixMe
          delete update['@extra']
          p.reject(update)
          this.fetching.delete(id)
        } else {
          this.emit('error', update)
        }
    }
  }

  async _handleUpdate (update: Update) {
    // $FlowFixMe
    const id = update['@extra']
    const p = this.fetching.get(id)

    if (p) {
      // $FlowFixMe
      delete update['@extra']
      p.resolve(update)
      this.fetching.delete(id)
    } else {
      this.emit('update', update)
    }
  }

  _send (query: TDFunction): Promise<Object | null> {
    if (!this.client) return Promise.resolve(null)
    const { client } = this
    const tdQuery = deepRenameKey('_', '@type', query)
    return this.tdlib.send(client, tdQuery)
  }

  async _receive (timeout: number = 10): Promise<Update | null> {
    if (!this.client) return Promise.resolve(null)
    const tdResponse = await this.tdlib.receive(this.client, timeout)
    return tdResponse && deepRenameKey('@type', '_', tdResponse)
  }

  _execute (query: TDFunction): Object | null {
    if (!this.client) return null
    const { client } = this
    const tdQuery = deepRenameKey('_', '@type', query)
    const tdResponse = this.tdlib.execute(client, tdQuery)
    return tdResponse && deepRenameKey('@type', '_', tdResponse)
  }
}
