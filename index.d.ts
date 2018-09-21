import {
  Update,
  error as Td$error,
  Invoke,
  InvokeFuture,
  Execute,
  tdlibParameters
} from './types/tdlib'

import { TDLibClient, ITDLibJSON } from 'tdl-shared'

export { TDLibClient, ITDLibJSON }

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

export class Client {
  constructor(options?: ConfigType)
  static create(options?: ConfigType): Client
  static fromTDLib(tdlibInstance: ITDLibJSON, options?: ConfigType): Client
  connect: () => Promise<undefined>
  login: (getLoginDetails: () => LoginDetails) => Promise<undefined>
  on: On
  once: On
  emit: Emit
  removeListener: RemoveListener
  invoke: Invoke
  invokeFuture: InvokeFuture
  destroy: () => undefined
  setLogFilePath: (path: string) => number
  setLogMaxFileSize: (maxFileSize: number | string) => undefined
  setLogVerbosityLevel: (verbosity: number) => undefined
  setLogFatalErrorCallback: (fn: (errorMessage: string) => void) => undefined
  execute: Execute
}

export {
  Client as TDL,
  Client as Tdl
}

export default Client

// ---

export class TDLib implements ITDLibJSON {
  constructor(libraryFile?: string)
  create(): Promise<TDLibClient>
  destroy(client: TDLibClient): undefined
  execute(client: TDLibClient, query: Object): Object | null
  receive(client: TDLibClient, timeout: number): Promise<Object | null>
  send(client: TDLibClient, query: Object): Promise<undefined>
  setLogFilePath(path: string): number
  setLogMaxFileSize(maxFileSize: number | string): undefined
  setLogVerbosityLevel(verbosity: number): undefined
  setLogFatalErrorCallback(fn: (errorMessage: string) => void): undefined
}

// ---

export type TDLibParameters = {
  use_test_dc?: boolean,
  database_directory?: string,
  files_directory?: string,
  use_file_database?: boolean,
  use_chat_info_database?: boolean,
  use_message_database?: boolean,
  use_secret_chats?: boolean,
  api_id?: number,
  api_hash?: string,
  system_language_code?: string,
  device_model?: string,
  system_version?: string,
  application_version?: string,
  enable_storage_optimizer?: boolean,
  ignore_file_names?: boolean
}

export type LoginUser = {
  type: 'user',
  phoneNumber: string,
  getAuthCode: (retry?: boolean) => Promise<string>,
  getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
  getName: () => Promise<{ firstName: string, lastName?: string }>
}

export type LoginBot = {
  type: 'bot',
  token: string
}

export type LoginDetails = Partial<LoginUser> | Partial<LoginBot>
export type StrictLoginDetails = LoginUser | LoginBot

export type ConfigType = {
  apiId?: number,
  apiHash?: string,
  binaryPath?: string,
  databaseDirectory?: string,
  filesDirectory?: string,
  databaseEncryptionKey?: string,
  verbosityLevel?: number,
  skipOldUpdates?: boolean,
  useTestDc?: boolean,
  useMutableRename?: boolean,
  tdlibParameters?: TDLibParameters,
  tdlibInstance?: TDLib
}

export type StrictConfigType = {
  apiId?: number,
  apiHash?: string,
  binaryPath: string,
  databaseDirectory: string,
  filesDirectory: string,
  databaseEncryptionKey: string,
  verbosityLevel: number,
  skipOldUpdates: boolean,
  useTestDc: boolean,
  useMutableRename: boolean,
  tdlibParameters: TDLibParameters,
  tdlibInstance?: TDLib
}
