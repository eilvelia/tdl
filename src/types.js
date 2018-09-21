// @flow

import type { TDLib } from './tdlib-ffi'

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

export type LoginDetails = $Shape<LoginUser> | $Shape<LoginBot>
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

type _Client = any

export type TDLibInterface = {
  create(libraryFile?: string): Promise<_Client>;
  destroy(client: _Client): void;
  execute(client: _Client, query: Object): Object | null;
  receive(client: _Client, timeout: number): Promise<Object | null>;
  send(client: _Client, query: Object): Promise<void>;
  setLogFilePath(path: string): number;
  setLogMaxFileSize(maxFileSize: number | string): void;
  setLogVerbosityLevel(verbosity: number): void;
  setLogFatalErrorCallback(fn: (errorMessage: string) => void): void;
}
