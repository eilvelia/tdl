// @flow

import path from 'path'
import EventEmitter from 'events'
import ffi from 'ffi-napi'
import ref from 'ref-napi'
import { prompt, type QuestionKindT } from 'inquirer'
import Debug from 'debug'
import uuidv4 from '../vendor/uuidv4'

import type {
  EventType,
  ConfigType,
  StrictConfigType
} from './types'

const debug = Debug('tdl')

const noop = () => {}

const buildQuery = query => {
  const buffer = Buffer.from(JSON.stringify(query) + '\0', 'utf-8')
  // $FlowFixMe
  buffer.type = ref.types.CString
  return buffer
}

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
; +tdlib: Object
  client: Object | null
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

    this.tdlib = ffi.Library(
      path.resolve(cwd, this.options.binaryPath),
      {
        'td_json_client_create'          : ['pointer', []],
        'td_json_client_send'            : ['void'   , ['pointer', 'string']],
        'td_json_client_receive'         : ['string' , ['pointer', 'double']],
        'td_json_client_execute'         : ['string' , ['pointer', 'string']],
        'td_json_client_destroy'         : ['void'   , ['pointer']],
        'td_set_log_file_path'           : ['int'    , ['string']],
        'td_set_log_verbosity_level'     : ['void'   , ['int']],
      })
  }

  async _init (): Promise<void> {
    try {
      this._setLogVerbosityLevel(this.options.verbosityLevel)

      if (this.options.logFilePath)
        this._setLogFilePath(path.resolve(cwd, this.options.logFilePath))

      this.client = await this._create()

      this._loop()
    } catch (error) {
      this.rejector(`Error while creating client: ${error}`)
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

    this.tdlib.td_json_client_destroy(this.client)
    this.client = null
  }

  async _loop (): Promise<void> {
    const update = await this._receive()

    if (!update) {
      debug('Current update is empty.')
      return this._loop()
    }

    switch (update['@type']) {
      case 'updateAuthorizationState': {
        await this._handleAuth(update)
        break
      }
      case 'error': {
        await this._handleError(update)
        break
      }
      default:
        await this._handleUpdate(update)
    }

    this._loop()
  }

  async _handleAuth (update: Object): Promise<void> {
    switch (update.authorization_state['@type']) {
      case 'authorizationStateWaitTdlibParameters': {
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
      }
      case 'authorizationStateWaitEncryptionKey': {
        await this._send({
          '@type': 'checkDatabaseEncryptionKey',
        })
        break
      }
      case 'authorizationStateWaitPhoneNumber': {
        await this._send({
          '@type': 'setAuthenticationPhoneNumber',
          'phone_number': this.options.phoneNumber,
        })
        break
      }
      case 'authorizationStateWaitCode': {
        const code = await this.options.getAuthCode(false)
        await this._send({
          '@type': 'checkAuthenticationCode',
          'code': code,
        })
        break
      }
      case 'authorizationStateWaitPassword': {
        const passwordHint = update.authorization_state['password_hint']
        const password = await this.options.getPassword(passwordHint, false)
        await this._send({
          '@type': 'checkAuthenticationPassword',
          'password': password,
        })
        break
      }
      case 'authorizationStateReady': {
        this.resolver()
        break
      }
      default:
        break
    }
  }

  async _handleError (update: Object) {
    switch (update['message']) {
      case 'PHONE_CODE_EMPTY':
      case 'PHONE_CODE_INVALID': {
        const code = await this.options.getAuthCode(true)
        await this._send({
          '@type': 'checkAuthenticationCode',
          'code': code,
        })
        break
      }
      case 'PASSWORD_HASH_INVALID': {
        const password = await this.options.getPassword('', true)
        await this._send({
          '@type': 'checkAuthenticationPassword',
          'password': password,
        })
        break
      }
      default:
        const id = update['@extra']
        const el = this.fetching.get(id)

        if (el) {
          delete update['@extra']
          el.reject(update)
          this.fetching.delete(id)
        } else {
          this.emit('error', update)
        }
    }
  }

  async _handleUpdate (update: Object) {
    const id = update['@extra']
    const el = this.fetching.get(id)

    if (el) {
      delete update['@extra']
      el.resolve(update)
      this.fetching.delete(id)
    } else {
      this.emit('update', update)
    }
  }

  _create = (): Promise<Object> =>
    new Promise((resolve, reject) => {
      this.tdlib.td_json_client_create.async((err, client) => {
        if (err) return reject(err)
        resolve(client)
      })
    })

  _send = (query: Object): Promise<Object | null> =>
    new Promise((resolve, reject) => {
      this.tdlib.td_json_client_send.async(this.client, buildQuery(query), (err, response) => {
        if (err) return reject(err)
        if (!response) return resolve(null)
        resolve(JSON.parse(response))
      })
    })

  _receive = (timeout: number = 10): Promise<Object | null> =>
    new Promise((resolve, reject) => {
      this.tdlib.td_json_client_receive.async(this.client, timeout, (err, response) => {
        if (err) return reject(err)
        if (!response) return resolve(null)
        resolve(JSON.parse(response))
      })
    })

  _execute (query: Object): Object | null {
    const response = this.tdlib.td_json_client_execute(this.client, buildQuery(query))
    if (!response) return null
    return JSON.parse(response)
  }

  _setLogFilePath (path: string): number | any {
    return this.tdlib.td_set_log_file_path(path)
  }

  _setLogVerbosityLevel (verbosity: number): void {
    this.tdlib.td_set_log_verbosity_level(verbosity)
  }
}
