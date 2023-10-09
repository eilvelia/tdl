// @flow

import { resolve as resolvePath } from 'path'
import EventEmitter from 'eventemitter3'
import Debug from 'debug'
import { deepRenameKey, mergeDeepRight } from './util'
import * as prompt from './prompt'
import { Version } from './version'

import type {
  Update as Td$Update,
  updateAuthorizationState as Td$updateAuthorizationState,
  // updateOption as Td$updateOption,
  error as Td$error,
  ConnectionState as Td$ConnectionState,
  setTdlibParameters as Td$setTdlibParameters,
  Invoke,
  Execute
} from 'tdlib-types'

// NOTE: if needed, this client can be abstracted into a different package later

const debug = Debug('tdl:client')
const debugEmitter = Debug('tdl:client:emitter')
const debugReceive = Debug('tdl:client:receive')
const debugReq = Debug('tdl:client:request')

// export type TdjsonClient = { +_TdjsonClientBrand: void }
export opaque type TdjsonClient = mixed

export type TdjsonNew = {|
  init(receiveTimeout: number): void,
  createClientId(): number,
  send(clientId: number, request: string): string | null,
  /** Do not call receive again until the promise is completed. */
  receive(): Promise<string | null>,
  execute(request: string): string | null
|}

export type Tdjson = {|
  create(receiveTimeout: number): TdjsonClient,
  destroy(client: TdjsonClient): void,
  execute(client: null | TdjsonClient, request: string): string | null,
  /** Do not call receive again until the promise is completed. */
  receive(client: TdjsonClient): Promise<string | null>,
  send(client: TdjsonClient, request: string): void,
  /** td_set_log_fatal_error_callback is deprecated in TDLib v1.8.0. */
  setLogFatalErrorCallback(fn: null | ((errorMessage: string) => void)): void,
  setLogMessageCallback(
    maxVerbosityLevel: number,
    callback: null | ((verbosityLevel: number, message: string) => void)
  ): void,
  tdn: TdjsonNew
|}

export type TdjsonTdlTdlibAddon = {|
  getName(): void,
  create(): TdjsonClient,
  destroy(client: TdjsonClient): void,
  execute(client: null | TdjsonClient, request: {...}): {...} | null,
  receive(client: TdjsonClient, timeout: number): Promise<{...} | null>,
  send(client: TdjsonClient, request: {...}): void,
  setLogFatalErrorCallback(fn: null | ((errorMessage: string) => void)): void,
|}

type TdjsonCompat = {|
  /** `true` if runs in compatibility with the tdl-tdlib-addon package */
  compat?: boolean,
  create(receiveTimeout: number): TdjsonClient,
  destroy(client: TdjsonClient): void,
  execute(client: null | TdjsonClient, request: {...}): {...} | null,
  receive(client: TdjsonClient): Promise<{...} | null>,
  send(client: TdjsonClient, request: {...}): void,
  setLogFatalErrorCallback(fn: null | ((errorMessage: string) => void)): void,
  setLogMessageCallback(
    maxVerbosityLevel: number,
    callback: null | ((verbosityLevel: number, message: string) => void)
  ): void,
  tdn: TdjsonNew
|}

// Compatibility with tdl-tdlib-addon
function tdjsonCompat (td: TdjsonTdlTdlibAddon | Tdjson): TdjsonCompat {
  const foundTdlTdlibAddon = (td: any).getName?.() === 'addon'
  if (!foundTdlTdlibAddon) {
    const tdjson: Tdjson = (td: any)
    return {
      ...tdjson,
      execute (client, request) {
        const response = tdjson.execute(client, JSON.stringify(request))
        if (response == null) return null
        return JSON.parse(response)
      },
      send (client, request) {
        tdjson.send(client, JSON.stringify(request))
      },
      async receive (client) {
        const response = await tdjson.receive(client)
        if (response == null) return null
        return JSON.parse(response)
      }
    }
  }
  function unvailable (name: string) {
    throw new Error(`${name} is not available in tdl-tdlib-addon`)
  }
  const tdjsonOld: TdjsonTdlTdlibAddon = (td: any)
  let receiveTimeout = 10
  return {
    compat: true,
    create (timeout) {
      receiveTimeout = timeout
      return tdjsonOld.create()
    },
    destroy: tdjsonOld.destroy.bind(tdjsonOld),
    execute: tdjsonOld.execute.bind(tdjsonOld),
    async receive (client) {
      const response = await tdjsonOld.receive(client, receiveTimeout)
      if (response == null) return null
      return response
    },
    send: tdjsonOld.send.bind(tdjsonOld),
    setLogFatalErrorCallback: tdjsonOld.setLogFatalErrorCallback.bind(tdjsonOld),
    setLogMessageCallback: () => unvailable('setLogMessageCallback'),
    tdn: {
      init: () => unvailable('tdn.init'),
      createClientId: () => unvailable('tdn.createClientId'),
      send: () => unvailable('tdn.send'),
      receive: () => unvailable('tdn.receive'),
      execute: () => unvailable('tdn.execute')
    }
  }
}

export type TDLibParameters = $Rest<Td$setTdlibParameters, {| _: 'setTdlibParameters' |}>

export type LoginUser = {|
  type: 'user',
  getPhoneNumber: (retry?: boolean) => Promise<string>,
  getEmailAddress: () => Promise<string>,
  getEmailCode: () => Promise<string>,
  confirmOnAnotherDevice: (link: string) => void,
  getAuthCode: (retry?: boolean) => Promise<string>,
  getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
  getName: () => Promise<{ firstName: string, lastName?: string }>
|}

export type LoginBot = {|
  type: 'bot',
  getToken: (retry?: boolean) => Promise<string>,
|}

export type LoginDetails = $Rest<LoginUser, {}> | LoginBot
export type StrictLoginDetails = LoginUser | LoginBot

export type ClientOptions = $Rest<StrictClientOptions, {}>

export type StrictClientOptions = {
  apiId?: number,
  apiHash?: string,
  databaseDirectory: string,
  filesDirectory: string,
  databaseEncryptionKey: string,
  verbosityLevel: number | 'default',
  useTestDc: boolean,
  tdlibParameters: TDLibParameters,
  skipOldUpdates: boolean,
  bare: boolean,
  receiveTimeout: number,
  useMutableRename: boolean,
  useDefaultVerbosityLevel: boolean,
  disableAuth: boolean
}

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

const defaultOptions: $Exact<StrictClientOptions> = {
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  databaseEncryptionKey: '',
  verbosityLevel: 'default',
  receiveTimeout: 10,
  skipOldUpdates: false,
  useTestDc: false,
  useMutableRename: false,
  useDefaultVerbosityLevel: false,
  bare: false,
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

type DeferredPromise<R, E> = {
  resolve: (result: R) => void,
  reject: (error: E) => void
}

type PendingPromise = DeferredPromise<any, Td$error>

class TdlDeferred<R, E> {
  _innerDefer: ?DeferredPromise<R, E>
  _done: boolean = false

  // Not done or defer not set
  isPending (): boolean {
    return !this._done
  }

  isDone (): boolean {
    return this._done
  }

  isDeferSet (): boolean {
    return this._innerDefer != null
  }

  setDefer (defer: DeferredPromise<R, E>): void {
    this._innerDefer = defer
  }

  resolve (result: R): void {
    if (this._done || !this._innerDefer) return
    this._done = true
    this._innerDefer.resolve(result)
  }

  reject (error: E): void {
    if (this._done || !this._innerDefer) return
    this._done = true
    this._innerDefer.reject(error)
  }
}

export class TdlError extends Error {
  +err: any
  constructor (err: any, msg?: string) {
    super(msg)
    this.err = err
  }
}

export type On =
  & ((event: 'update', listener: (update: Td$Update) => void) => Client)
  & ((event: 'error', listener: (err: Td$error | TdlError) => void) => Client)
  & ((event: 'destroy', listener: () => void) => Client)
  & ((event: 'auth-needed', listener: () => void) => Client)
  & ((event: 'auth-not-needed', listener: () => void) => Client)
  & ((event: 'response', listener: (res: any) => void) => Client)

export type Emit =
  & ((event: 'update', update: Td$Update) => void)
  & ((event: 'error', err: Td$error | TdlError) => void)
  & ((event: 'destroy') => void)
  & ((event: 'auth-needed') => void)
  & ((event: 'auth-not-needed') => void)
  & ((event: 'response', res: any) => void)

export type Off =
  & ((event: 'update', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'error', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'destroy', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'auth-needed', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'auth-not-needed', listener: (...args: any[]) => any, once?: boolean) => void)
  & ((event: 'response', listener: (...args: any[]) => any, once?: boolean) => void)

const emptyDetails = () => Object.freeze({})

function invariant (cond: boolean, msg: string = 'Invariant violation') {
  if (!cond) throw new Error(msg)
}

export type ManagingOptions = {
  useTdn: boolean,
  onClose: () => void
}

const TDLIB_1_8_6 = new Version('1.8.6')
const TDLIB_DEFAULT = new Version('1.8.19')

const TDL_MAGIC = '6c47e6b71ea'

// All public methods in the Client class are meant to be defined as properties.

// Some of the Client functions contain a bit of complicated control flow,
// but it should be fine on a small scale.

// To simplify, Client has three states:
// 1. Created, awaiting initialization (handling of tdlibParameters)
//    - if bare is set to true, go to 3
//    - once authorizationStateWaitTdlibParameters is received and replied with
//      setTdlibParameters, go to 2
//    - what if setTdlibParameters is responded with an error? there is no
//      promise that can be rejected. currently, it is passed to
//      client.login (if it is called) or client.on('error')
//    - on TDLib <= v1.8.5, this also handles authorizationStateWaitEncryptionKey
// 2. Initialized, awaiting client.login (not a real state actually)
//    - arbitrary client.invoke calls are allowed now
//    - if client.login is never called, go to 3
//    - once authorizationStateReady is received, go to 3
// 3. Ready

export class Client {
  +_tdlib: TdjsonCompat;
  +_options: StrictClientOptions;
  +_emitter: EventEmitter = new EventEmitter();
  +_pending: Map<number, PendingPromise> = new Map();
  _requestId: number = 0
  _client: TdjsonClient | null = null
  _initialized: boolean = false
  _paused: boolean = false
  _connectionState: Td$ConnectionState = { _: 'connectionStateConnecting' }
  _authNeeded: boolean = false
  _loginDetails: ?StrictLoginDetails
  _loginDefer: TdlDeferred<void, any> = new TdlDeferred()
  _version: Version = TDLIB_DEFAULT
  _tdn: boolean = false
  _onClose: (() => void) = (() => {})
  _clientId: number = -1

  constructor (
    tdlibInstance: TdjsonTdlTdlibAddon | Tdjson,
    options: ClientOptions = {},
    managing?: ManagingOptions
  ) {
    this._options = (mergeDeepRight(defaultOptions, options): StrictClientOptions)
    this._tdlib = tdjsonCompat(tdlibInstance)

    if (managing && managing.useTdn) {
      this._tdn = true
      this._onClose = managing.onClose
    }

    // Backward compatibility
    if (this._options.useDefaultVerbosityLevel)
      this._options.verbosityLevel = 'default'
    if (this._options.disableAuth)
      this._options.bare = true

    if (!this._options.bare) {
      if (!options.apiId && !options.tdlibParameters?.api_id)
        throw new TypeError('Valid api_id must be provided.')

      if (!options.apiHash && !options.tdlibParameters?.api_hash)
        throw new TypeError('Valid api_hash must be provided.')
    }

    // Backward compatibility
    if (this._options.verbosityLevel != null && this._options.verbosityLevel !== 'default') {
      debug('Executing setLogVerbosityLevel', this._options.verbosityLevel)
      this.execute({
        _: 'setLogVerbosityLevel',
        new_verbosity_level: parseInt(this._options.verbosityLevel)
      })
    } else if (this._tdlib.compat) {
      debug('Executing setLogVerbosityLevel (tdl-tdlib-addon found)', this._options.verbosityLevel)
      this.execute({
        _: 'setLogVerbosityLevel',
        new_verbosity_level: 2
      })
    }

    if (this._options.bare)
      this._initialized = true

    if (!this._tdn) {
      this._client = this._tdlib.create(this._options.receiveTimeout)

      if (!this._client) throw new Error('Failed to create a TDLib client')

      // Note: To allow defining listeners before the first update, we must
      // ensure that emit is not executed in the current tick. process.nextTick
      // or queueMicrotask are redundant here because of await in the _loop
      // function.
      this._loop().catch(e => this._catchError(new TdlError(e)))
    } else {
      this._clientId = this._tdlib.tdn.createClientId()
      // The new tdjson interface requires to send a dummy request first
      this._sendTdl({ _: 'getOption', name: 'version' })
    }
  }

  getClientId (): number {
    return this._clientId
  }

  /** @deprecated */
  static create (tdlibInstance: TdjsonTdlTdlibAddon, options: ClientOptions = {}): Client {
    return new Client(tdlibInstance, options)
  }

  getVersion: () => string = () => {
    if (this._version === TDLIB_DEFAULT)
      throw new Error('Unknown TDLib version')
    return this._version.toString()
  }

  _waitInit (): Promise<void> {
    debug('Waiting for initialization')
    if (this._initialized) return Promise.resolve()
    return new Promise(resolve => this._emitter.once('_init', () => resolve()))
  }

  _finishInit (): void {
    debug('Finished initialization')
    this._initialized = true
    this._emitter.emit('_init')
  }

  // Wait until the 'login' function is called
  // After the promise is resolved, the client may or may not be logged in.
  _waitLogin (): Promise<void> {
    debug('waitLogin', this._loginDefer)
    return new Promise(resolve => {
      if (this._loginDefer.isDeferSet()) return resolve()
      this._emitter.once('_login', () => resolve())
    })
  }

  _needLoginDetails (): StrictLoginDetails {
    if (this._authNeeded) {
      invariant(this._loginDetails != null)
      return this._loginDetails
    }
    this._authNeeded = true
    this.emit('auth-needed')
    // The auth-needed listener has just set this._loginDetails synchronously
    invariant(this._loginDetails != null)
    return this._loginDetails
  }

  _needUserLogin (): LoginUser {
    const loginDetails = this._needLoginDetails()
    if (loginDetails.type !== 'user')
      throw new Error(`Expected user login details, got ${loginDetails.type}`)
    return loginDetails
  }

  _catchError (err: Td$error | TdlError): void {
    debug('catchError', err)
    if (this._loginDefer.isPending())
      this._loginDefer.reject(err)
    else
      this.emit('error', err)
  }

  login: (getLoginDetails?: () => LoginDetails) => Promise<void> = (getLoginDetails = emptyDetails) => {
    debug('client.login()')
    this._emitter.once('auth-needed', () => {
      this._loginDetails = (mergeDeepRight(
        defaultLoginDetails, getLoginDetails()): any)
      debug('set _loginDetails to', this._loginDetails)
    })
    return new Promise((resolve, reject) => {
      this._loginDefer.setDefer({ resolve, reject })
      this._emitter.emit('_login')
    })
  }

  loginAsBot: (string | () => (string | Promise<string>)) => Promise<void> = token => {
    return this.login(() => ({
      type: 'bot',
      getToken: retry => retry
        ? Promise.reject('Invalid bot token')
        : Promise.resolve(typeof token === 'string' ? token : token())
    }))
  }

  /** @deprecated */
  connect: () => Promise<void> = () => Promise.resolve()
  /** @deprecated */
  connectAndLogin: (fn?: () => LoginDetails) => Promise<void> = (fn = emptyDetails) => {
    return this.login(fn)
  }
  /** @deprecated */
  getBackendName: () => string = () => 'addon'
  /** @deprecated */
  pause: () => void = () => {
    if (!this._paused) {
      debug('pause')
      this._paused = true
    } else {
      debug('pause (no-op)')
    }
  }
  /** @deprecated */
  resume: () => void = () => {
    if (this._paused) {
      debug('resume')
      this._paused = false
      this._emitter.emit('_resume')
    } else {
      debug('resume (no-op)')
    }
  }
  /** @deprecated */
  destroy: () => void = () => {
    debug('destroy')
    // Force close
    this._handleClose()
  }

  _waitResume (): Promise<void> {
    return new Promise(resolve => {
      if (!this._paused) resolve()
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

  invoke: Invoke = async request => {
    if (!this._initialized)
      await this._waitInit()
    const id = this._requestId
    this._requestId++
    if (this._requestId >= Number.MAX_SAFE_INTEGER)
      this._requestId = 0
    // $FlowIgnore[prop-missing]
    request['@extra'] = id
    const receiveResponse = new Promise((resolve, reject) => {
      const defer = { resolve, reject }
      this._pending.set(id, defer)
    })
    this._send(request)
    return receiveResponse
  }

  _handleClose (): void {
    if (this._tdn) {
      this._onClose()
      this._clientId = -1
    } else {
      if (this._client === null) return
      this._tdlib.destroy(this._client)
      this._client = null
      this.resume()
    }
    debug('closed')
    this.emit('destroy') // TODO: rename to closed?
  }

  // Sends { _: 'close' } and waits until the client gets destroyed
  close: () => Promise<void> = () => {
    debug('close')
    return new Promise(resolve => {
      if (this._client === null && this._clientId === -1) return resolve()
      // TODO: call this.resume() here?
      // If the client is paused, we can't receive authorizationStateClosed
      // and destroy won't be called
      this._sendTdl({ _: 'close' })
      this._emitter.once('destroy', () => resolve())
    })
  }

  setLogFatalErrorCallback: (null | (msg: string) => void) => void = fn => {
    this._tdlib.setLogFatalErrorCallback(fn)
  }

  // tdl renames '@type' to '_'. Initially, it was because Flow didn't support
  // disjoint unions if the tag is referenced via square brackets.
  // (https://flow.org/en/docs/lang/refinements/)
  // It was fixed, but the renaming was kept, since it's more convenient
  // to write `if (o._ === '...')` instead of `if (o['@type'] === '...')`

  execute: Execute = request => {
    debugReq('execute', request)
    const tdRequest = deepRenameKey('_', '@type', request)
    if (this._tdn) {
      const tdResponse = this._tdlib.tdn.execute(JSON.stringify(tdRequest))
      if (tdResponse == null) return null
      return deepRenameKey('@type', '_', JSON.parse(tdResponse))
    }
    // the client can be null, it's fine
    const tdResponse = this._tdlib.execute(this._client, tdRequest)
    if (tdResponse == null) return null
    return deepRenameKey('@type', '_', tdResponse)
  }

  _send (request: { +_: string, +[k: any]: any }): void {
    debugReq('send', request)
    const tdRequest = deepRenameKey('_', '@type', request)
    if (this._client === null && this._clientId === -1)
      throw new Error('A closed client cannot be reused, create a new Client')
    if (this._tdn)
      this._tdlib.tdn.send(this._clientId, JSON.stringify(tdRequest))
    else
      this._tdlib.send(this._client, tdRequest)
  }

  _sendTdl (request: { +_: string, +[k: any]: any }): void {
    this._send({ ...request, '@extra': TDL_MAGIC })
  }

  // Used with the old tdjson interface only
  async _loop (): Promise<void> {
    while (true) {
      if (this._paused) {
        debug('receive loop: waiting for resume')
        await this._waitResume()
        debug('receive loop: resumed')
      }

      if (this._client === null) {
        debug('receive loop: destroyed client')
        break
      }

      const res = await this._tdlib.receive(this._client)

      if (res == null) {
        debug('receive loop: response is empty')
        continue
      }

      try {
        this._handleReceive(deepRenameKey('@type', '_', res))
      } catch (e) {
        this._catchError(new TdlError(e))
      }
    }
  }

  // Can be called by the client manager in case the new interface is used
  handleReceive (res: any): void {
    try {
      this._handleReceive(deepRenameKey('@type', '_', res))
    } catch (e) {
      this._catchError(new TdlError(e))
    }
  }

  // This function can be called with any TDLib object
  _handleReceive (res: any): void {
    this.emit('response', res) // TODO: rename or remove this event
    debugReceive(res)

    const error = res._ === 'error'

    const id = res['@extra']
    const defer = id != null ? this._pending.get(id) : undefined

    if (defer != null) {
      // a response to a request made by client.invoke
      delete res['@extra']
      if (error)
        defer.reject(res)
      else
        defer.resolve(res)
      this._pending.delete(id)
      return
    }

    if (error) {
      if (id === TDL_MAGIC) {
        // an error to a request sent by tdl itself
        // (i.e., the error should be caused by client.login)
        delete res['@extra']
        const loginDetails = this._loginDetails
        if (!loginDetails) return this._catchError(res)
        switch (loginDetails.type) {
          case 'user':
            this._handleUserError(res, loginDetails)
              .catch(e => this._catchError(new TdlError(e)))
            return
          case 'bot':
            this._handleBotError(res, loginDetails)
              .catch(e => this._catchError(new TdlError(e)))
            return
        }
      } else {
        // we can't find any request connected to @extra, just emit the error
        // as is. the error can be with or without @extra
        this.emit('error', res)
      }
      return
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

  _handleUpdate (update: Td$Update): void {
    // updateOption, updateConnectionState, updateAuthorizationState
    // are always emitted, even with skipOldUpdates set to true
    switch (update._) {
      case 'updateOption':
        debug('New option:', update)
        this.emit('update', update)
        if (update.name === 'version' && update.value._ === 'optionValueString')
          this._version = new Version(update.value.value)
        return

      case 'updateConnectionState':
        debug('New connection state:', update.state)
        this._connectionState = update.state
        this.emit('update', update)
        return

      case 'updateAuthorizationState':
        debug('New authorization state:', update.authorization_state._)
        this.emit('update', update)
        if (update.authorization_state._ === 'authorizationStateClosed') {
          this._loginDefer.reject(Error('Received authorizationStateClosed'))
          this._handleClose()
        } else if (!this._options.bare) {
          this._handleAuth(update).catch(e => this._catchError(new TdlError(e)))
        }
        return

      default:
        const shouldSkip = this._options.skipOldUpdates
          && this._connectionState._ === 'connectionStateUpdating'
        if (shouldSkip) return
        this.emit('update', update)
    }
  }

  async _handleAuth (update: Td$updateAuthorizationState): Promise<void> {
    const authorizationState = update.authorization_state

    switch (authorizationState._) {
      case 'authorizationStateWaitTdlibParameters':
        if (this._version.gte(TDLIB_1_8_6)) {
          if ((this._options.tdlibParameters: any)._ != null)
            throw new Error('tdlibParameters must not contain the _ property')
          this._sendTdl({
            _: 'setTdlibParameters',
            database_directory: resolvePath(this._options.databaseDirectory),
            files_directory: resolvePath(this._options.filesDirectory),
            api_id: this._options.apiId,
            api_hash: this._options.apiHash,
            use_test_dc: this._options.useTestDc,
            database_encryption_key: this._options.databaseEncryptionKey,
            ...this._options.tdlibParameters
          })
          return this._finishInit()
        }
        // $Flow__Ignore[prop-missing]
        return this._sendTdl({
          _: 'setTdlibParameters',
          'parameters': {
            database_directory: resolvePath(this._options.databaseDirectory),
            files_directory: resolvePath(this._options.filesDirectory),
            api_id: this._options.apiId,
            api_hash: this._options.apiHash,
            use_test_dc: this._options.useTestDc,
            ...this._options.tdlibParameters,
            _: 'tdlibParameters'
          }
        })

      // This update can be received in TDLib <= v1.8.5 only
      // $FlowIgnore[incompatible-type]
      case 'authorizationStateWaitEncryptionKey':
        // $Flow__Ignore[incompatible-call]
        this._sendTdl({
          _: 'checkDatabaseEncryptionKey',
          encryption_key: this._options.databaseEncryptionKey
        })
        return this._finishInit()

      case 'authorizationStateReady':
        // TODO: This will emit even if the login process was manually handled
        if (!this._authNeeded) this.emit('auth-not-needed')
    }

    // Wait until client.login is called (it may never happen)
    await this._waitLogin()
    debug('waitLogin end', authorizationState._)

    // Note that authorizationStateWaitPhoneNumber may not be the first update
    // in the login flow in case of a previous incomplete login attempt

    switch (authorizationState._) {
      case 'authorizationStateReady':
        return this._loginDefer.resolve()

      case 'authorizationStateWaitPhoneNumber': {
        const loginDetails = this._needLoginDetails()
        switch (loginDetails.type) {
          case 'user':
            return this._sendTdl({
              _: 'setAuthenticationPhoneNumber',
              phone_number: await loginDetails.getPhoneNumber(false)
            })
          case 'bot':
            return this._sendTdl({
              _: 'checkAuthenticationBotToken',
              token: await loginDetails.getToken(false)
            })
        }
      }

      // TDLib >= v1.8.6 only
      case 'authorizationStateWaitEmailAddress': {
        const loginDetails = this._needUserLogin()
        return this._sendTdl({
          _: 'setAuthenticationEmailAddress',
          email_address: await loginDetails.getEmailAddress()
        })
      }

      // TDLib >= v1.8.6 only
      case 'authorizationStateWaitEmailCode': {
        const loginDetails = this._needUserLogin()
        return this._sendTdl({
          _: 'checkAuthenticationEmailCode',
          code: {
            // Apple ID and Google ID are not supported
            _: 'emailAddressAuthenticationCode',
            code: await loginDetails.getEmailCode()
          }
        })
      }

      case 'authorizationStateWaitOtherDeviceConfirmation': {
        const loginDetails = this._needUserLogin()
        loginDetails.confirmOnAnotherDevice(authorizationState.link)
        return
      }

      case 'authorizationStateWaitCode': {
        const loginDetails = this._needUserLogin()
        const code = await loginDetails.getAuthCode(false)
        return this._sendTdl({
          _: 'checkAuthenticationCode',
          code
        })
      }

      case 'authorizationStateWaitRegistration': {
        const loginDetails = this._needUserLogin()
        const { firstName, lastName = '' } = await loginDetails.getName()
        return this._sendTdl({
          _: 'registerUser',
          first_name: firstName,
          last_name: lastName
        })
      }

      case 'authorizationStateWaitPassword': {
        const loginDetails = this._needUserLogin()
        const passwordHint = authorizationState.password_hint
        const password = await loginDetails.getPassword(passwordHint, false)
        return this._sendTdl({
          _: 'checkAuthenticationPassword',
          password
        })
      }
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

      default: this._catchError(error)
    }
  }

  async _handleBotError (error: Td$error, loginDetails: LoginBot): Promise<void> {
    switch (error.message) {
      case 'ACCESS_TOKEN_INVALID':
        return this._sendTdl({
          _: 'checkAuthenticationBotToken',
          token: await loginDetails.getToken(true)
        })

      default: this._catchError(error)
    }
  }
}
