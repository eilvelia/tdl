import type {
  Invoke,
  Execute,
  Update as Td$Update,
  setTdlibParameters as Td$setTdlibParameters
} from 'tdlib-types'

export type TDLibParameters = Omit<Td$setTdlibParameters, '_'>

export type TDLibConfiguration = {
  /**
   * The path to libtdjson. Defaults to `'tdjson.dll'` on Windows,
   * `'libtdjson.dylib'` on macOS, or `'libtdjson.so'` on a different OS.
   */
  tdjson?: string,
  /**
   * The path to the directory with libtdjson. Defaults to `''`. Can be set to,
   * for example, `'/usr/local/lib'` or `__dirname` while keeping the `tdjson`
   * option unchanged.
   */
  libdir?: string,
  /**
   * Set the verbosity level of TDLib. Defaults to `1`. From the TDLib
   * documentation:
   * - 0 corresponds to fatal errors,
   * - 1 corresponds to errors,
   * - 2 corresponds to warnings and debug warnings,
   * - 3 corresponds to informational,
   * - 4 corresponds to debug,
   * - 5 corresponds to verbose deubg,
   * - value greater than 5 and up to 1024 can be used to enable even more
   *   logging.
   *
   * Another possible option is `'default'`, `tdl` then won't send any
   * verbosity level to TDLib.
   */
  verbosityLevel?: number | 'default',
  /**
   * Advanced option. Use the old tdjson interface (`td_json_client_create`,
   * etc.) instead of the one that was added in TDLib v1.7.0
   * (`td_create_client_id`, etc). Defaults to `false`. */
  useOldTdjsonInterface?: boolean,
  /**
   * Advanced option. Configures the delay for the `receive` tdjson function.
   * Defaults to `10.0` seconds.
   */
  receiveTimeout?: number,
}

/**
 * Configure options such as path to the tdjson library or the verbosity level.
 * Only options passed in the object are set; can be called none or multiple
 * times. The shared library will be loaded using `path.join(libdir, tdjson)` as
 * `filename`. Should be called before `createClient`, `execute`, `init`, etc.
 */
export function configure(cfg: TDLibConfiguration): void

/**
 * Call a TDLib method synchronously. Can be used only with the methods
 * marked as "can be called synchronously" in the TDLib documentation.
 */
export const execute: Execute

/**
 * The `td_set_log_message_callback` tdjson function, sets the callback that
 * will be called when a message is added to the internal TDLib log. Note that
 * setting a callback overrides the previous callback. Pass null to remove the
 * callback.
 */
export function setLogMessageCallback(
  maxVerbosityLevel: number,
  callback: null | ((verbosityLevel: number, message: string) => void)
): void

/** Create a TDLib client. */
export function createClient(opts: ClientOptions): Client

export interface Client {
  /**
   * Set up an update handler that will log you in to your Telegram account. The
   * promise resolves in case the account is successfully authenticated. By
   * default, this asks for the credentials in the console; that can be
   * overrided by passing the callbacks. If a function is passed as
   * `loginDetails`, it will not be called unless any of the handlers trigger.
   * `login` supports only a subset of available authentication methods.
   */
  login(loginDetails?: LoginDetails | (() => LoginDetails)): Promise<void>;
  /**
   * Log in as a bot. You can get the token from `@BotFather`.
   * If the client is already logged in as a user, it will not be relogged
   * as a bot. In case a function is passed instead of string, it will not be
   * called if you are already logged in.
   * This function is short for
   * ```
   * client.login({
   *   type: 'bot',
   *   getToken: retry => retry
   *     ? Promise.reject(new Error('Invalid bot token'))
   *     : Promise.resolve(typeof token === 'string' ? token : token())
   * })
   * ```
   */
  loginAsBot(token: string | (() => string | Promise<string>)): Promise<void>;
  /**
   * Call a TDLib method. Example:
   * ```
   * const me = await client.invoke({ _: 'getMe' })
   * console.log(`I am ${me.first_name}`)
   * ```
   */
  invoke: Invoke;
  /**
   * Attach an event listener. This function can be used to iterate through
   * updates. Possible events: `update`, `error`, `close`.
   *
   * The `error` event fires in case an exception is thrown in the `update` or
   * `close` handlers, an error occured during the initialization
   * `setTdlibParameters` phase (e.g. if some of the client options are
   * incorrect), or potentially in case of some internal tdl error.
   */
  on: On;
  /**
   * Same as `client.on`, but attaches a one-time event listener instead. The
   * listener is removed after it is called. A single function cannot be reused
   * for both `on` and `once`.
   */
  once: On;
  /**
   * Remove an event listener. Returns `true` if the listener has been
   * successfully removed, `false` otherwise.
   */
  off: Off;
  /** Alias for `client.on`. */
  addListener: On;
  /** Alias for `client.off`. */
  removeListener: Off;
  /**
   * Iterate received updates using JavaScript async iterators. This is an
   * alternative to `client.on('update', ...)`, one can use either. Example:
   * ```
   * for await (const update of client.iterUpdates()) {
   *   if (update._ === 'updateOption' && update.name === 'my_id') {
   *     console.log(`My ID is ${update.value.value}!`)
   *     break
   *   }
   * }
   * ```
   */
  iterUpdates(): AsyncIterableIterator<Td$Update>;
  /** Alias for `tdl.execute`. */
  execute: Execute;
  /**
   * Close the client. This sends `{ _: 'close' }` and waits for
   * `authorizationStateClosed`.
   *
   * There are also other methods to close the TDLib instance, namely
   * `client.invoke({ _: 'logOut' })` and `client.invoke({ _: 'destroy' })`.
   */
  close(): Promise<void>;
  /**
   * Get the TDLib version in the `major.minor.patch` format. Can throw an
   * exception if the version (the `updateOption` update) is not (yet) received.
   */
  getVersion(): string;
  /**
   * Test whether the client is closed (that is, `authorizationStateClosed` has
   * been received, and the TDLib client does not exist anymore). When true,
   * it is no longer possible to send requests or receive updates.
   */
  isClosed(): boolean;
  /** Emit an event. For advanced use only. */
  emit: Emit;
}

export type ClientOptions = {
  /** Required. Can be obtained at https://my.telegram.org/ */
  apiId: number,
  /** Required. Can be obtained at https://my.telegram.org/ */
  apiHash: string,
  /**
   * Path to the TDLib's database directory (relative to the current working
   * directory). Defaults to `'_td_database'`.
   */
  databaseDirectory?: string,
  /**
   * Path to the TDLib's files directory (relative to the current working
   * directory). Defaults to `'_td_files'`.
   */
  filesDirectory?: string,
  /** An optional key for database encryption. */
  databaseEncryptionKey?: string,
  /** Use test telegram server. */
  useTestDc?: boolean,
  /**
   * Raw TDLib parameters. These contain fields like application_version,
   * device_model, etc. Defaults to:
   * ```
   * { use_message_database: true
   * , use_secret_chats: false
   * , system_language_code: 'en'
   * , application_version: '1.0'
   * , device_model: 'Unknown device'
   * , system_version: 'Unknown' }
   * ```
   */
  tdlibParameters?: TDLibParameters,
  /**
   * Advanced option. When set to true, the client does not emit updates if
   * `connectionState` equals to `connectionStateUpdating`. See also the
   * `ignore_background_updates` option in TDLib.
   */
  skipOldUpdates?: boolean,
}

/**
 * Advanced function. Create a client without handling the initialization auth*
 * updates. You will need to handle the `authorizationStateWaitTdlibParameters`
 * update and send parameters manually. A client created by `createClient`
 * allows invoking requests only after the client options have been sent to
 * TDLib; this disables that.
 */
export function createBareClient(): Client

export type LoginUser = {
  type: 'user',
  /** Handler for `authorizationStateWaitPhoneNumber`, will be recalled on error. */
  getPhoneNumber: (retry?: boolean) => Promise<string>,
  /** Handler for `authorizationStateWaitEmailAddress`, TDLib v1.8.6+ only. */
  getEmailAddress: () => Promise<string>,
  /** Handler for `authorizationStateWaitEmailCode`, TDLib v1.8.6+ only. */
  getEmailCode: () => Promise<string>,
  /** Handler for `authorizationStateWaitOtherDeviceConfirmation`, sends nothing. */
  confirmOnAnotherDevice: (link: string) => void,
  /** Handler for `authorizationStateWaitCode`, will be recalled on error. */
  getAuthCode: (retry?: boolean) => Promise<string>,
  /** Handler for `authorizationStateWaitPassword`, will be recalled on error. */
  getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
  /** Handler for `authorizationStateWaitRegistration`. */
  getName: () => Promise<{ firstName: string, lastName?: string }>
}

export type LoginBot = {
  /** You will be logged in as a bot. */
  type: 'bot',
  /**
   * Handler for `authorizationStateWaitPhoneNumber`,
   * sends `checkAuthenticationBotToken`, will be recalled on error.
   */
  getToken: (retry?: boolean) => Promise<string>
}

export type LoginDetails = Partial<LoginUser> | LoginBot

/**
 * Error that is sent by TDLib as an `("error", code, message)` triple.
 *
 * A `client.invoke` promise can be rejected with an instance of this class;
 * if the received error is not connected to any request, it is passed to the
 * `client.on('error', ...)` handler.
 */
export class TDLibError extends Error {
  readonly _: 'error';
  readonly code: number;
  constructor(code: number, message: string);
}

/**
 * Wraps any non-Error exceptions that were about to be emitted as the
 * `error` event.
 */
export class UnknownError extends Error {
  readonly err: any;
  private constructor(err: unknown);
}

export type On =
  & ((event: 'update', listener: (update: Td$Update) => void) => Client)
  & ((event: 'error', listener: (err: Error) => void) => Client)
  & ((event: 'close', listener: () => void) => Client)

export type Emit =
  & ((event: 'update', update: Td$Update) => void)
  & ((event: 'error', err: Error) => void)
  & ((event: 'close') => void)

export type Off =
  & ((event: 'update', listener: (...args: any[]) => any) => boolean)
  & ((event: 'error', listener: (...args: any[]) => any) => boolean)
  & ((event: 'close', listener: (...args: any[]) => any) => boolean)

/**
 * Initialize the node addon explicitly. This function is entirely optional to
 * call, TDLib will be initialized automatically on the first call of
 * `createClient`, `execute`, `setLogMessageCallback`, or `createBareClient`.
 */
export function init(): void
