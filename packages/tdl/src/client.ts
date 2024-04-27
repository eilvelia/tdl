import { resolve as resolvePath } from 'node:path'
import Debug from 'debug'
import { deepRenameKey, mergeDeepRight } from './util'
import * as prompt from './prompt'
import { Version } from './version'
import { Queue } from './queue'
import type { Tdjson, TdjsonOldClient } from './addon'
import type * as Td from 'tdlib-types'

// NOTE: if needed, this client can be abstracted into a different package later

const debug = Debug('tdl:client')
const debugReceive = Debug('tdl:client:receive')
const debugReq = Debug('tdl:client:request')

export type TDLibParameters = Omit<Td.setTdlibParameters, '_'>

type StrictClientOptions = {
  apiId?: number,
  apiHash?: string,
  databaseDirectory: string,
  filesDirectory: string,
  databaseEncryptionKey: string,
  useTestDc: boolean,
  tdlibParameters: TDLibParameters,
  skipOldUpdates: boolean,
}

export type ClientOptions = Partial<StrictClientOptions>

const defaultOptions: StrictClientOptions = {
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  databaseEncryptionKey: '',
  useTestDc: false,
  skipOldUpdates: false,
  tdlibParameters: {
    use_message_database: true,
    use_secret_chats: false,
    system_language_code: 'en',
    application_version: '1.0',
    device_model: 'Unknown device',
    system_version: 'Unknown'
  }
}

export type LoginUser = {
  type: 'user',
  getPhoneNumber: (retry?: boolean) => Promise<string>,
  getEmailAddress: () => Promise<string>,
  getEmailCode: () => Promise<string>,
  confirmOnAnotherDevice: (link: string) => void,
  getAuthCode: (retry?: boolean) => Promise<string>,
  getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
  getName: () => Promise<{ firstName: string, lastName?: string }>
}

export type LoginBot = {
  type: 'bot',
  getToken: (retry?: boolean) => Promise<string>,
}

export type LoginDetails = Partial<LoginUser> | LoginBot
type StrictLoginDetails = LoginUser | LoginBot

const defaultLoginDetails: StrictLoginDetails = {
  type: 'user',
  getPhoneNumber: prompt.getPhoneNumber,
  getEmailAddress: prompt.getEmailAddress,
  getEmailCode: prompt.getEmailCode,
  confirmOnAnotherDevice: prompt.confirmOnAnotherDevice,
  getAuthCode: prompt.getAuthCode,
  getPassword: prompt.getPassword,
  getName: prompt.getName
}

export class TDLibError extends Error {
  readonly _ = 'error' as const
  readonly code: number
  constructor (code: number, message: string) {
    super(message)
    this.code = code
    this.name = 'TDLibError'
  }
  toString(): string {
    return `TDLibError: ${this.code} ${this.message}`
  }
}

export class UnknownError extends Error {
  readonly err: any
  constructor (err: unknown) {
    if (typeof err === 'string') super(err)
    else super()
    this.err = err
    this.name = 'UnknownError'
  }
}

type DeferredPromise<R, E> = {
  resolve: (result: R) => void,
  reject: (error: E) => void
}

type PendingRequest = DeferredPromise<unknown, TDLibError>

type On =
  & ((event: 'update', listener: (update: Td.Update) => void) => Client)
  & ((event: 'error', listener: (err: Error) => void) => Client)
  & ((event: 'close', listener: () => void) => Client)
  & ((event: '_init', listener: () => void) => Client)

type Emit =
  & ((event: 'update', update: Td.Update) => void)
  & ((event: 'error', err: Error) => void)
  & ((event: 'close') => void)
  & ((event: '_init') => void)

type Off =
  & ((event: 'update', listener: (...args: any[]) => any) => boolean)
  & ((event: 'error', listener: (...args: any[]) => any) => boolean)
  & ((event: 'close', listener: (...args: any[]) => any) => boolean)
  & ((event: '_init', listener: (...args: any[]) => any) => boolean)

export type ManagingOptions = {
  useOldTdjsonInterface: boolean,
  receiveTimeout: number,
  bare: boolean,
  executeFunc: Td.Execute
}

const TDLIB_1_8_6 = new Version('1.8.6')
const TDLIB_DEFAULT = new Version('1.8.27')

const TDL_MAGIC = '-tdl-'

type EventListener = ((arg: any) => any) & { once?: boolean }
type Events = {
  [key: string]: Set<EventListener> | undefined
}

type TdjsonAnyClient =
  | { isTdn: true, val: number | null }
  | { isTdn: false, val: TdjsonOldClient | null }

// All package-public methods in the Client class are meant to be defined as
// properties.
export class Client {
  private readonly _tdjson: Tdjson
  private readonly _options: StrictClientOptions
  private readonly _pending: Map<number, PendingRequest> = new Map()
  private _client: TdjsonAnyClient
  private _requestId: number = 0
  private _initialized: boolean = false
  private _version: Version = TDLIB_DEFAULT
  private _connectionStateName: Td.ConnectionState['_'] = 'connectionStateWaitingForNetwork'
  private _authorizationState: Td.AuthorizationState | null = null
  private _events: Events = {
    update: new Set(),
    error: new Set(),
    close: new Set(),
    _init: new Set()
  }

  public execute: Td.Execute

  constructor (
    tdjson: Tdjson,
    managing: ManagingOptions,
    options: ClientOptions = {},
  ) {
    this._options = mergeDeepRight(defaultOptions, options)
    this._tdjson = tdjson
    this._client = { isTdn: !managing.useOldTdjsonInterface, val: null }
    this.execute = managing.executeFunc

    if (managing.bare) {
      this._initialized = true
    } else {
      if (!options.apiId && !options.tdlibParameters?.api_id)
        throw new TypeError('Valid api_id must be provided.')

      if (!options.apiHash && !options.tdlibParameters?.api_hash)
        throw new TypeError('Valid api_hash must be provided.')
    }

    if ((options as any).verbosityLevel != null) {
      throw new TypeError('Set verbosityLevel in tdl.configure instead')
    }

    if (!this._client.isTdn) {
      this._client.val = this._tdjson.tdold.create(managing.receiveTimeout)

      if (this._client.val == null)
        throw new Error('Failed to create a TDLib client')

      // Note: To allow defining listeners before the first update, we must
      // ensure that emit is not executed in the current tick. process.nextTick
      // or queueMicrotask are redundant here because of await in the _loop
      // function.
      this._loop()
    } else {
      this._client.val = this._tdjson.tdnew.createClientId()
      // The new tdjson interface requires to send a dummy request first
      this._sendTdl({ _: 'getOption', name: 'version' })
    }
  }

  // Called by the client manager in case the new interface is used
  getClientId (): number {
    if (!this._client.isTdn)
      throw new Error('Cannot get id of a client in the old tdjson interface')
    if (this._client.val == null)
      throw new Error('Cannot get id of a closed client')
    return this._client.val
  }

  getVersion = (): string => {
    if (this._version === TDLIB_DEFAULT)
      throw new Error('Unknown TDLib version')
    return this._version.toString()
  }

  on: On = (event, fn) => {
    let listeners = this._events[event]
    if (listeners == null)
      listeners = this._events[event] = new Set()
    listeners.add(fn)
    return this
  }

  once: On = (event, fn: EventListener) => {
    let listeners = this._events[event]
    if (listeners == null)
      listeners = this._events[event] = new Set()
    fn.once = true
    listeners.add(fn)
    return this
  }

  off: Off = (event, fn) => {
    const listeners = this._events[event]
    if (listeners == null) return false
    return listeners.delete(fn)
  }

  emit: Emit = (event, value?: any) => {
    const listeners = this._events[event]
    if (event === 'error' && (listeners == null || listeners.size === 0)) {
      // Creating unhandled promise rejection if no error handlers are set
      Promise.reject(value)
    }
    if (listeners == null) return
    for (const listener of listeners) {
      listener(value)
      if (listener.once === true)
        listeners.delete(listener)
    }
  }

  addListener: On = this.on

  removeListener: Off = this.off

  iterUpdates = (): AsyncIterableIterator<Td.Update> => {
    if (this._client.val == null) throw new Error('The client is closed')

    const unconsumedEvents = new Queue<Td.Update>()
    let defer: DeferredPromise<IteratorResult<Td.Update>, Error> | null = null
    let finished = false

    const finish = () => {
      this.off('update', onUpdate)
      finished = true
      debug('Finished async iterator')
    }

    function onUpdate (update: Td.Update) {
      if (update._ === 'updateAuthorizationState' &&
          update.authorization_state._ == 'authorizationStateClosed') {
        finish()
      }
      if (defer != null) {
        defer.resolve({ done: false, value: update })
        defer = null
      } else {
        unconsumedEvents.push(update)
      }
    }

    this.on('update', onUpdate)

    const iterator: AsyncIterableIterator<Td.Update> = {
      next () {
        if (!unconsumedEvents.isEmpty()) {
          const update = unconsumedEvents.shift()!
          return Promise.resolve({ done: false, value: update })
        }
        if (finished)
          return Promise.resolve({ done: true, value: undefined })
        if (defer != null) {
          finish()
          throw new Error('Cannot call next() twice in succession')
        }
        return new Promise((resolve, reject) => {
          defer = { resolve, reject }
        })
      },

      return () {
        finish()
        return Promise.resolve({ done: true, value: undefined })
      },

      [Symbol.asyncIterator]() {
        return iterator
      }
    }

    return iterator
  }

  private _waitInit (): Promise<void> {
    debug('Waiting for initialization')
    if (this._initialized) return Promise.resolve()
    return new Promise(resolve => this.once('_init', () => resolve()))
  }

  private _finishInit (): void {
    debug('Finished initialization')
    this._initialized = true
    this.emit('_init')
  }

  invoke: Td.Invoke = async (request: any): Promise<any> => {
    if (!this._initialized)
      await this._waitInit()
    const id = this._requestId
    this._requestId++
    if (this._requestId >= Number.MAX_SAFE_INTEGER)
      throw new Error('Too large request id')
    request['@extra'] = id
    const responsePromise = new Promise((resolve, reject) => {
      this._pending.set(id, { resolve, reject })
    })
    this._send(request)
    return responsePromise
  }

  // Sends { _: 'close' } and waits until the client gets destroyed
  close = (): Promise<void> => {
    debug('close')
    return new Promise(resolve => {
      if (this._client.val == null) return resolve()
      this._sendTdl({ _: 'close' })
      this.once('close', () => resolve())
    })
  }

  // There's a bit of history behind this renaming of @type to _ in tdl.
  // Initially, it was because this code was written in Flow which had a bug
  // with disjoint unions (https://flow.org/en/docs/lang/refinements/)
  // not working if the tag is referenced via square brackets. _ has been chosen
  // because it is already an old convention in JS MTProto libraries and
  // webogram. The bug in Flow was later fixed, however the renaming is kept,
  // since it is more convenient to write  if (o._ === '...')  instead of
  // if (o['@type'] === '...'). Funny, other JS TDLib libraries also followed
  // with this renaming to _.

  private _send (request: { readonly _: string, readonly [key: string]: any }): void {
    debugReq('send', request)
    const tdRequest = JSON.stringify(deepRenameKey('_', '@type', request))
    if (this._client.val == null)
      throw new Error('A closed client cannot be reused, create a new client')
    this._client.isTdn
      ? this._tdjson.tdnew.send(this._client.val, tdRequest)
      : this._tdjson.tdold.send(this._client.val, tdRequest)
  }

  private _sendTdl (request: Td.$Function): void {
    this._send({ ...request, '@extra': TDL_MAGIC })
  }

  private _handleClose (): void {
    if (this._client.val == null) {
      debug('Trying to close an already closed client')
      return
    }
    if (!this._client.isTdn)
      this._tdjson.tdold.destroy(this._client.val)
    this._client.val = null
    this.emit('close')
    debug('closed')
  }

  // Used with the old tdjson interface
  private async _loop (): Promise<void> {
    if (this._client.isTdn)
      throw new Error('Can start the loop in the old tdjson interface only')
    while (true) {
      if (this._client.val === null) {
        debug('receive loop: destroyed client')
        break
      }
      const responseString = await this._tdjson.tdold.receive(this._client.val)
      if (responseString == null) {
        debug('receive loop: response is empty')
        continue
      }
      const res = JSON.parse(responseString)
      this.handleReceive(res)
    }
  }

  // Can be called by the client manager in case the new interface is used
  handleReceive (res: object): void {
    try {
      this._handleReceive(deepRenameKey('@type', '_', res))
    } catch (e: unknown) {
      debug('Catched error', e)
      const error = e instanceof Error ? e : new UnknownError(e)
      this.emit('error', error)
    }
  }

  // This function can be called with any TDLib object
  private _handleReceive (res: any): void {
    debugReceive(res)

    const isError = res._ === 'error'

    const id = res['@extra']
    const defer = id != null ? this._pending.get(id) : undefined

    if (defer != null) {
      // a response to a request made by client.invoke
      delete res['@extra']
      this._pending.delete(id)
      if (isError)
        defer.reject(new TDLibError(res.code, res.message))
      else
        defer.resolve(res)
      return
    }

    if (isError) {
      // error not connected to any request. we'll emit it
      // the error may still potentially have @extra and it's good to save that
      const resError: Td.error = res
      const error = new TDLibError(resError.code, resError.message)
      if (id != null) (error as any)['@extra'] = id
      throw error
    }

    if (id === TDL_MAGIC) {
      // a response to a request sent by tdl itself
      // it's irrelevant, just ignoring it (it's most likely `{ _: 'ok' }`)
      debug('(TDL_MAGIC) Not emitting response', res)
      return
    }

    // if the object is not connected to any known request, we treat it as an
    // update. note that in a weird case (maybe if the @extra was manually set)
    // it still can contain the @extra field, this is intended and we want to
    // pass it further to client.on('update')
    this._handleUpdate(res)
  }

  private _handleUpdate (update: Td.Update): void {
    // updateOption, updateConnectionState, updateAuthorizationState
    // are always emitted, even with skipOldUpdates set to true
    switch (update._) {
      case 'updateOption':
        debug('New option:', update)
        if (update.name === 'version' && update.value._ === 'optionValueString')
          this._version = new Version(update.value.value)
        break

      case 'updateConnectionState':
        debug('New connection state:', update.state)
        this._connectionStateName = update.state._
        break

      case 'updateAuthorizationState':
        debug('New authorization state:', update.authorization_state._)
        this._authorizationState = update.authorization_state
        if (update.authorization_state._ === 'authorizationStateClosed')
          this._handleClose()
        else if (!this._initialized)
          this._handleAuthInit(update.authorization_state)
        break

      default:
        const shouldSkip = this._options.skipOldUpdates
          && this._connectionStateName === 'connectionStateUpdating'
        if (shouldSkip) return
    }
    this.emit('update', update)
  }

  private _handleAuthInit (authState: Td.AuthorizationState): void {
    // Note: pre-initialization requests should not call client.invoke
    switch (authState._) {
      case 'authorizationStateWaitTdlibParameters':
        if (this._version.lt(TDLIB_1_8_6)) {
          this._sendTdl({
            _: 'setTdlibParameters',
            parameters: {
              database_directory: resolvePath(this._options.databaseDirectory),
              files_directory: resolvePath(this._options.filesDirectory),
              api_id: this._options.apiId,
              api_hash: this._options.apiHash,
              use_test_dc: this._options.useTestDc,
              ...this._options.tdlibParameters,
              _: 'tdlibParameters'
            }
          } as any)
        } else {
          this._sendTdl({
            database_directory: resolvePath(this._options.databaseDirectory),
            files_directory: resolvePath(this._options.filesDirectory),
            api_id: this._options.apiId,
            api_hash: this._options.apiHash,
            use_test_dc: this._options.useTestDc,
            database_encryption_key: this._options.databaseEncryptionKey,
            ...this._options.tdlibParameters,
            _: 'setTdlibParameters'
          })
          this._finishInit()
        }
        return

      // @ts-expect-error: This update can be received in TDLib <= v1.8.5 only
      case 'authorizationStateWaitEncryptionKey':
        this._sendTdl({
          _: 'checkDatabaseEncryptionKey',
          encryption_key: this._options.databaseEncryptionKey
        } as any)
        this._finishInit()
    }
  }

  login = (arg: LoginDetails | (() => LoginDetails) = {}): Promise<void> => {
    return new Promise((resolve, reject) => {
      let loginDetails: StrictLoginDetails | null = null
      function needLoginDetails (l: StrictLoginDetails | null): asserts l is StrictLoginDetails {
        if (l == null && loginDetails == null) {
          loginDetails = mergeDeepRight(
            defaultLoginDetails,
            typeof arg === 'function' ? arg() : arg
          )
          l = loginDetails
        }
        if (l == null) throw new Error('Invariant violation: loginDetails is null')
      }
      function needUserLogin (l: StrictLoginDetails | null): asserts l is LoginUser {
        if (l == null) needLoginDetails(l)
        if (l.type !== 'user')
          throw new Error('Expected to log in as a bot, received user auth update')
      }
      const processAuthorizationState = async (authState: Td.AuthorizationState) => {
        // Note: authorizationStateWaitPhoneNumber may not be the first update
        // in the login flow in case of a previous incomplete login attempt
        try {
          switch (authState._) {
            case 'authorizationStateReady': {
              // Finished (this may be the first update if already logged in)
              this.off('update', onUpdate)
              resolve(undefined)
              return
            }

            case 'authorizationStateClosed': {
              throw new Error('Received authorizationStateClosed')
            }

            case 'authorizationStateWaitPhoneNumber': {
              needLoginDetails(loginDetails)
              let retry = false
              if (loginDetails.type === 'user') {
                while (true) {
                  const phoneNumber = await loginDetails.getPhoneNumber(retry)
                  try {
                    await this.invoke({
                      _: 'setAuthenticationPhoneNumber',
                      phone_number: phoneNumber
                    })
                    return
                  } catch (e: any) {
                    if (e?.message === 'PHONE_NUMBER_INVALID') retry = true
                    else throw e
                  }
                }
              } else {
                while (true) {
                  const token = await loginDetails.getToken(retry)
                  try {
                    await this.invoke({
                      _: 'checkAuthenticationBotToken',
                      token
                    })
                    return
                  } catch (e: any) {
                    if (e?.message === 'ACCESS_TOKEN_INVALID') retry = true
                    else throw e
                  }
                }
              }
            }

            // TDLib >= v1.8.6 only
            case 'authorizationStateWaitEmailAddress': {
              needUserLogin(loginDetails)
              await this.invoke({
                _: 'setAuthenticationEmailAddress',
                email_address: await loginDetails.getEmailAddress()
              })
              return
            }

            // TDLib >= v1.8.6 only
            case 'authorizationStateWaitEmailCode': {
              needUserLogin(loginDetails)
              await this.invoke({
                _: 'checkAuthenticationEmailCode',
                code: {
                  // Apple ID and Google ID are not supported
                  _: 'emailAddressAuthenticationCode',
                  code: await loginDetails.getEmailCode()
                }
              })
              return
            }

            case 'authorizationStateWaitOtherDeviceConfirmation': {
              needUserLogin(loginDetails)
              loginDetails.confirmOnAnotherDevice(authState.link)
              return
            }

            case 'authorizationStateWaitCode': {
              needUserLogin(loginDetails)
              let retry = false
              while (true) {
                const code = await loginDetails.getAuthCode(retry)
                try {
                  await this.invoke({
                    _: 'checkAuthenticationCode',
                    code
                  })
                  return
                } catch (e: any) {
                  if (e?.message === 'PHONE_CODE_EMPTY' || e?.message === 'PHONE_CODE_INVALID')
                    retry = true
                  else
                    throw e
                }
              }
            }

            case 'authorizationStateWaitRegistration': {
              needUserLogin(loginDetails)
              const { firstName, lastName = '' } = await loginDetails.getName()
              await this.invoke({
                _: 'registerUser',
                first_name: firstName,
                last_name: lastName
              })
              return
            }

            case 'authorizationStateWaitPassword': {
              needUserLogin(loginDetails)
              const passwordHint = authState.password_hint
              let retry = false
              while (true) {
                const password = await loginDetails.getPassword(passwordHint, retry)
                try {
                  await this.invoke({
                    _: 'checkAuthenticationPassword',
                    password
                  })
                  return
                } catch (e: any) {
                  if (e?.message === 'PASSWORD_HASH_INVALID') retry = true
                  else throw e
                }
              }
            }
          }
        } catch (e) {
          this.off('update', onUpdate)
          reject(e)
        }
      }
      function onUpdate (update: Td.Update): void {
        if (update._ !== 'updateAuthorizationState') return
        processAuthorizationState(update.authorization_state)
      }
      // Process last received authorization state first
      if (this._authorizationState != null)
        processAuthorizationState(this._authorizationState)
      this.on('update', onUpdate)
    })
  }

  loginAsBot = (token: string | (() => string | Promise<string>)): Promise<void> => {
    return this.login({
      type: 'bot',
      getToken: retry => retry
        ? Promise.reject(new Error('Invalid bot token'))
        : Promise.resolve(typeof token === 'string' ? token : token())
    })
  }
}
