// @flow

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

export type LoginUser = {|
  type: 'user',
  getPhoneNumber: (retry?: boolean) => Promise<string>,
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

export type ConfigType = $Rest<StrictConfigType, {}>

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
  useDefaultVerbosityLevel: boolean,
  tdlibParameters: TDLibParameters
}
