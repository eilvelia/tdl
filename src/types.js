// @flow

export type EventType =
  | 'update'
  | 'error'

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

export type ConfigType = {
  apiId?: number,
  apiHash?: string,
  phoneNumber?: string,
  getAuthCode?: (retry?: boolean) => Promise<string>,
  getPassword?: (passwordHint: string, retry?: boolean) => Promise<string>,
  binaryPath?: string,
  databaseDirectory?: string,
  filesDirectory?: string,
  logFilePath?: string,
  verbosityLevel?: number,
  tdlibParameters?: TDLibParameters
}

export type StrictConfigType = {
  apiId?: number,
  apiHash?: string,
  phoneNumber?: string,
  getAuthCode: (retry?: boolean) => Promise<string>,
  getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
  binaryPath: string,
  databaseDirectory: string,
  filesDirectory: string,
  logFilePath: string,
  verbosityLevel: number,
  tdlibParameters: TDLibParameters
}
