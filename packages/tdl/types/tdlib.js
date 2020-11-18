// @flow

// TDLib 1.6.0

/** An object of this type can be returned on every function call, in case of an error */
export type error = {|
  _: 'error',
  /**
   * Error code; subject to future changes. If the error code is 406, the error message
   * must not be processed in any way and must not be displayed to the user
   */
  code: number,
  /** Error message; subject to future changes */
  message: string,
|}

/** An object of this type can be returned on every function call, in case of an error */
export type error$Input = {|
  +_: 'error',
  /**
   * Error code; subject to future changes. If the error code is 406, the error message
   * must not be processed in any way and must not be displayed to the user
   */
  +code?: number,
  /** Error message; subject to future changes */
  +message?: string,
|}

/** An object of this type is returned on a successful function call for certain functions */
export type ok = {|
  _: 'ok',
|}

/** An object of this type is returned on a successful function call for certain functions */
export type ok$Input = {|
  +_: 'ok',
|}

/** Contains parameters for TDLib initialization */
export type tdlibParameters = {|
  _: 'tdlibParameters',
  /**
   * If set to true, the Telegram test environment will be used instead of the production
   * environment
   */
  use_test_dc: boolean,
  /**
   * The path to the directory for the persistent database; if empty, the current working
   * directory will be used
   */
  database_directory: string,
  /**
   * The path to the directory for storing files; if empty, database_directory will be
   * used
   */
  files_directory: string,
  /**
   * If set to true, information about downloaded and uploaded files will be saved between
   * application restarts
   */
  use_file_database: boolean,
  /**
   * If set to true, the library will maintain a cache of users, basic groups, supergroups,
   * channels and secret chats. Implies use_file_database
   */
  use_chat_info_database: boolean,
  /**
   * If set to true, the library will maintain a cache of chats and messages. Implies
   * use_chat_info_database
   */
  use_message_database: boolean,
  /** If set to true, support for secret chats will be enabled */
  use_secret_chats: boolean,
  /** Application identifier for Telegram API access, which can be obtained at https://my.telegram.org */
  api_id: number,
  /** Application identifier hash for Telegram API access, which can be obtained at https://my.telegram.org */
  api_hash: string,
  /** IETF language tag of the user's operating system language; must be non-empty */
  system_language_code: string,
  /** Model of the device the application is being run on; must be non-empty */
  device_model: string,
  /** Version of the operating system the application is being run on; must be non-empty */
  system_version: string,
  /** Application version; must be non-empty */
  application_version: string,
  /** If set to true, old files will automatically be deleted */
  enable_storage_optimizer: boolean,
  /**
   * If set to true, original file names will be ignored. Otherwise, downloaded files
   * will be saved under names as close as possible to the original name
   */
  ignore_file_names: boolean,
|}

/** Contains parameters for TDLib initialization */
export type tdlibParameters$Input = {|
  +_: 'tdlibParameters',
  /**
   * If set to true, the Telegram test environment will be used instead of the production
   * environment
   */
  +use_test_dc?: boolean,
  /**
   * The path to the directory for the persistent database; if empty, the current working
   * directory will be used
   */
  +database_directory?: string,
  /**
   * The path to the directory for storing files; if empty, database_directory will be
   * used
   */
  +files_directory?: string,
  /**
   * If set to true, information about downloaded and uploaded files will be saved between
   * application restarts
   */
  +use_file_database?: boolean,
  /**
   * If set to true, the library will maintain a cache of users, basic groups, supergroups,
   * channels and secret chats. Implies use_file_database
   */
  +use_chat_info_database?: boolean,
  /**
   * If set to true, the library will maintain a cache of chats and messages. Implies
   * use_chat_info_database
   */
  +use_message_database?: boolean,
  /** If set to true, support for secret chats will be enabled */
  +use_secret_chats?: boolean,
  /** Application identifier for Telegram API access, which can be obtained at https://my.telegram.org */
  +api_id?: number,
  /** Application identifier hash for Telegram API access, which can be obtained at https://my.telegram.org */
  +api_hash?: string,
  /** IETF language tag of the user's operating system language; must be non-empty */
  +system_language_code?: string,
  /** Model of the device the application is being run on; must be non-empty */
  +device_model?: string,
  /** Version of the operating system the application is being run on; must be non-empty */
  +system_version?: string,
  /** Application version; must be non-empty */
  +application_version?: string,
  /** If set to true, old files will automatically be deleted */
  +enable_storage_optimizer?: boolean,
  /**
   * If set to true, original file names will be ignored. Otherwise, downloaded files
   * will be saved under names as close as possible to the original name
   */
  +ignore_file_names?: boolean,
|}

/**
 * An authentication code is delivered via a private Telegram message, which can be
 * viewed in another client
 */
export type authenticationCodeTypeTelegramMessage = {|
  _: 'authenticationCodeTypeTelegramMessage',
  /** Length of the code */
  length: number,
|}

/**
 * An authentication code is delivered via a private Telegram message, which can be
 * viewed in another client
 */
export type authenticationCodeTypeTelegramMessage$Input = {|
  +_: 'authenticationCodeTypeTelegramMessage',
  /** Length of the code */
  +length?: number,
|}

/** An authentication code is delivered via an SMS message to the specified phone number */
export type authenticationCodeTypeSms = {|
  _: 'authenticationCodeTypeSms',
  /** Length of the code */
  length: number,
|}

/** An authentication code is delivered via an SMS message to the specified phone number */
export type authenticationCodeTypeSms$Input = {|
  +_: 'authenticationCodeTypeSms',
  /** Length of the code */
  +length?: number,
|}

/** An authentication code is delivered via a phone call to the specified phone number */
export type authenticationCodeTypeCall = {|
  _: 'authenticationCodeTypeCall',
  /** Length of the code */
  length: number,
|}

/** An authentication code is delivered via a phone call to the specified phone number */
export type authenticationCodeTypeCall$Input = {|
  +_: 'authenticationCodeTypeCall',
  /** Length of the code */
  +length?: number,
|}

/**
 * An authentication code is delivered by an immediately cancelled call to the specified
 * phone number. The number from which the call was made is the code
 */
export type authenticationCodeTypeFlashCall = {|
  _: 'authenticationCodeTypeFlashCall',
  /** Pattern of the phone number from which the call will be made */
  pattern: string,
|}

/**
 * An authentication code is delivered by an immediately cancelled call to the specified
 * phone number. The number from which the call was made is the code
 */
export type authenticationCodeTypeFlashCall$Input = {|
  +_: 'authenticationCodeTypeFlashCall',
  /** Pattern of the phone number from which the call will be made */
  +pattern?: string,
|}

/** Information about the authentication code that was sent */
export type authenticationCodeInfo = {|
  _: 'authenticationCodeInfo',
  /** A phone number that is being authenticated */
  phone_number: string,
  /** Describes the way the code was sent to the user */
  type: AuthenticationCodeType,
  /** Describes the way the next code will be sent to the user; may be null */
  next_type: AuthenticationCodeType,
  /** Timeout before the code should be re-sent, in seconds */
  timeout: number,
|}

/** Information about the authentication code that was sent */
export type authenticationCodeInfo$Input = {|
  +_: 'authenticationCodeInfo',
  /** A phone number that is being authenticated */
  +phone_number?: string,
  /** Describes the way the code was sent to the user */
  +type?: AuthenticationCodeType$Input,
  /** Describes the way the next code will be sent to the user; may be null */
  +next_type?: AuthenticationCodeType$Input,
  /** Timeout before the code should be re-sent, in seconds */
  +timeout?: number,
|}

/** Information about the email address authentication code that was sent */
export type emailAddressAuthenticationCodeInfo = {|
  _: 'emailAddressAuthenticationCodeInfo',
  /** Pattern of the email address to which an authentication code was sent */
  email_address_pattern: string,
  /** Length of the code; 0 if unknown */
  length: number,
|}

/** Information about the email address authentication code that was sent */
export type emailAddressAuthenticationCodeInfo$Input = {|
  +_: 'emailAddressAuthenticationCodeInfo',
  /** Pattern of the email address to which an authentication code was sent */
  +email_address_pattern?: string,
  /** Length of the code; 0 if unknown */
  +length?: number,
|}

/** Represents a part of the text that needs to be formatted in some unusual way */
export type textEntity = {|
  _: 'textEntity',
  /** Offset of the entity in UTF-16 code units */
  offset: number,
  /** Length of the entity, in UTF-16 code units */
  length: number,
  /** Type of the entity */
  type: TextEntityType,
|}

/** Represents a part of the text that needs to be formatted in some unusual way */
export type textEntity$Input = {|
  +_: 'textEntity',
  /** Offset of the entity in UTF-16 code units */
  +offset?: number,
  /** Length of the entity, in UTF-16 code units */
  +length?: number,
  /** Type of the entity */
  +type?: TextEntityType$Input,
|}

/** Contains a list of text entities */
export type textEntities = {|
  _: 'textEntities',
  /** List of text entities */
  entities: Array<textEntity>,
|}

/** Contains a list of text entities */
export type textEntities$Input = {|
  +_: 'textEntities',
  /** List of text entities */
  +entities?: $ReadOnlyArray<textEntity$Input>,
|}

/** A text with some entities */
export type formattedText = {|
  _: 'formattedText',
  /** The text */
  text: string,
  /**
   * Entities contained in the text. Entities can be nested, but must not mutually intersect
   * with each other. Pre, Code and PreCode entities can't contain other entities. Bold,
   * Italic, Underline and Strikethrough entities can contain and to be contained in all
   * other entities. All other entities can't contain each other
   */
  entities: Array<textEntity>,
|}

/** A text with some entities */
export type formattedText$Input = {|
  +_: 'formattedText',
  /** The text */
  +text?: string,
  /**
   * Entities contained in the text. Entities can be nested, but must not mutually intersect
   * with each other. Pre, Code and PreCode entities can't contain other entities. Bold,
   * Italic, Underline and Strikethrough entities can contain and to be contained in all
   * other entities. All other entities can't contain each other
   */
  +entities?: $ReadOnlyArray<textEntity$Input>,
|}

/** Contains Telegram terms of service */
export type termsOfService = {|
  _: 'termsOfService',
  /** Text of the terms of service */
  text: formattedText,
  /** The minimum age of a user to be able to accept the terms; 0 if any */
  min_user_age: number,
  /** True, if a blocking popup with terms of service must be shown to the user */
  show_popup: boolean,
|}

/** Contains Telegram terms of service */
export type termsOfService$Input = {|
  +_: 'termsOfService',
  /** Text of the terms of service */
  +text?: formattedText$Input,
  /** The minimum age of a user to be able to accept the terms; 0 if any */
  +min_user_age?: number,
  /** True, if a blocking popup with terms of service must be shown to the user */
  +show_popup?: boolean,
|}

/** TDLib needs TdlibParameters for initialization */
export type authorizationStateWaitTdlibParameters = {|
  _: 'authorizationStateWaitTdlibParameters',
|}

/** TDLib needs TdlibParameters for initialization */
export type authorizationStateWaitTdlibParameters$Input = {|
  +_: 'authorizationStateWaitTdlibParameters',
|}

/** TDLib needs an encryption key to decrypt the local database */
export type authorizationStateWaitEncryptionKey = {|
  _: 'authorizationStateWaitEncryptionKey',
  /** True, if the database is currently encrypted */
  is_encrypted: boolean,
|}

/** TDLib needs an encryption key to decrypt the local database */
export type authorizationStateWaitEncryptionKey$Input = {|
  +_: 'authorizationStateWaitEncryptionKey',
  /** True, if the database is currently encrypted */
  +is_encrypted?: boolean,
|}

/**
 * TDLib needs the user's phone number to authorize. Call `setAuthenticationPhoneNumber`
 * to provide the phone number, or use `requestQrCodeAuthentication`, or `checkAuthenticationBotToken`
 * for other authentication options
 */
export type authorizationStateWaitPhoneNumber = {|
  _: 'authorizationStateWaitPhoneNumber',
|}

/**
 * TDLib needs the user's phone number to authorize. Call `setAuthenticationPhoneNumber`
 * to provide the phone number, or use `requestQrCodeAuthentication`, or `checkAuthenticationBotToken`
 * for other authentication options
 */
export type authorizationStateWaitPhoneNumber$Input = {|
  +_: 'authorizationStateWaitPhoneNumber',
|}

/** TDLib needs the user's authentication code to authorize */
export type authorizationStateWaitCode = {|
  _: 'authorizationStateWaitCode',
  /** Information about the authorization code that was sent */
  code_info: authenticationCodeInfo,
|}

/** TDLib needs the user's authentication code to authorize */
export type authorizationStateWaitCode$Input = {|
  +_: 'authorizationStateWaitCode',
  /** Information about the authorization code that was sent */
  +code_info?: authenticationCodeInfo$Input,
|}

/**
 * The user needs to confirm authorization on another logged in device by scanning a
 * QR code with the provided link
 */
export type authorizationStateWaitOtherDeviceConfirmation = {|
  _: 'authorizationStateWaitOtherDeviceConfirmation',
  /** A tg:// URL for the QR code. The link will be updated frequently */
  link: string,
|}

/**
 * The user needs to confirm authorization on another logged in device by scanning a
 * QR code with the provided link
 */
export type authorizationStateWaitOtherDeviceConfirmation$Input = {|
  +_: 'authorizationStateWaitOtherDeviceConfirmation',
  /** A tg:// URL for the QR code. The link will be updated frequently */
  +link?: string,
|}

/**
 * The user is unregistered and need to accept terms of service and enter their first
 * name and last name to finish registration
 */
export type authorizationStateWaitRegistration = {|
  _: 'authorizationStateWaitRegistration',
  /** Telegram terms of service */
  terms_of_service: termsOfService,
|}

/**
 * The user is unregistered and need to accept terms of service and enter their first
 * name and last name to finish registration
 */
export type authorizationStateWaitRegistration$Input = {|
  +_: 'authorizationStateWaitRegistration',
  /** Telegram terms of service */
  +terms_of_service?: termsOfService$Input,
|}

/** The user has been authorized, but needs to enter a password to start using the application */
export type authorizationStateWaitPassword = {|
  _: 'authorizationStateWaitPassword',
  /** Hint for the password; may be empty */
  password_hint: string,
  /** True, if a recovery email address has been set up */
  has_recovery_email_address: boolean,
  /**
   * Pattern of the email address to which the recovery email was sent; empty until a
   * recovery email has been sent
   */
  recovery_email_address_pattern: string,
|}

/** The user has been authorized, but needs to enter a password to start using the application */
export type authorizationStateWaitPassword$Input = {|
  +_: 'authorizationStateWaitPassword',
  /** Hint for the password; may be empty */
  +password_hint?: string,
  /** True, if a recovery email address has been set up */
  +has_recovery_email_address?: boolean,
  /**
   * Pattern of the email address to which the recovery email was sent; empty until a
   * recovery email has been sent
   */
  +recovery_email_address_pattern?: string,
|}

/** The user has been successfully authorized. TDLib is now ready to answer queries */
export type authorizationStateReady = {|
  _: 'authorizationStateReady',
|}

/** The user has been successfully authorized. TDLib is now ready to answer queries */
export type authorizationStateReady$Input = {|
  +_: 'authorizationStateReady',
|}

/** The user is currently logging out */
export type authorizationStateLoggingOut = {|
  _: 'authorizationStateLoggingOut',
|}

/** The user is currently logging out */
export type authorizationStateLoggingOut$Input = {|
  +_: 'authorizationStateLoggingOut',
|}

/**
 * TDLib is closing, all subsequent queries will be answered with the error 500. Note
 * that closing TDLib can take a while. All resources will be freed only after authorizationStateClosed
 * has been received
 */
export type authorizationStateClosing = {|
  _: 'authorizationStateClosing',
|}

/**
 * TDLib is closing, all subsequent queries will be answered with the error 500. Note
 * that closing TDLib can take a while. All resources will be freed only after authorizationStateClosed
 * has been received
 */
export type authorizationStateClosing$Input = {|
  +_: 'authorizationStateClosing',
|}

/**
 * TDLib client is in its final state. All databases are closed and all resources are
 * released. No other updates will be received after this. All queries will be responded
 * to with error code 500. To continue working, one should create a new instance of
 * the TDLib client
 */
export type authorizationStateClosed = {|
  _: 'authorizationStateClosed',
|}

/**
 * TDLib client is in its final state. All databases are closed and all resources are
 * released. No other updates will be received after this. All queries will be responded
 * to with error code 500. To continue working, one should create a new instance of
 * the TDLib client
 */
export type authorizationStateClosed$Input = {|
  +_: 'authorizationStateClosed',
|}

/** Represents the current state of 2-step verification */
export type passwordState = {|
  _: 'passwordState',
  /** True, if a 2-step verification password is set */
  has_password: boolean,
  /** Hint for the password; may be empty */
  password_hint: string,
  /** True, if a recovery email is set */
  has_recovery_email_address: boolean,
  /** True, if some Telegram Passport elements were saved */
  has_passport_data: boolean,
  /**
   * Information about the recovery email address to which the confirmation email was
   * sent; may be null
   */
  recovery_email_address_code_info: emailAddressAuthenticationCodeInfo,
|}

/** Represents the current state of 2-step verification */
export type passwordState$Input = {|
  +_: 'passwordState',
  /** True, if a 2-step verification password is set */
  +has_password?: boolean,
  /** Hint for the password; may be empty */
  +password_hint?: string,
  /** True, if a recovery email is set */
  +has_recovery_email_address?: boolean,
  /** True, if some Telegram Passport elements were saved */
  +has_passport_data?: boolean,
  /**
   * Information about the recovery email address to which the confirmation email was
   * sent; may be null
   */
  +recovery_email_address_code_info?: emailAddressAuthenticationCodeInfo$Input,
|}

/** Contains information about the current recovery email address */
export type recoveryEmailAddress = {|
  _: 'recoveryEmailAddress',
  /** Recovery email address */
  recovery_email_address: string,
|}

/** Contains information about the current recovery email address */
export type recoveryEmailAddress$Input = {|
  +_: 'recoveryEmailAddress',
  /** Recovery email address */
  +recovery_email_address?: string,
|}

/**
 * Returns information about the availability of a temporary password, which can be
 * used for payments
 */
export type temporaryPasswordState = {|
  _: 'temporaryPasswordState',
  /** True, if a temporary password is available */
  has_password: boolean,
  /** Time left before the temporary password expires, in seconds */
  valid_for: number,
|}

/**
 * Returns information about the availability of a temporary password, which can be
 * used for payments
 */
export type temporaryPasswordState$Input = {|
  +_: 'temporaryPasswordState',
  /** True, if a temporary password is available */
  +has_password?: boolean,
  /** Time left before the temporary password expires, in seconds */
  +valid_for?: number,
|}

/** Represents a local file */
export type localFile = {|
  _: 'localFile',
  /** Local path to the locally available file part; may be empty */
  path: string,
  /** True, if it is possible to try to download or generate the file */
  can_be_downloaded: boolean,
  /** True, if the file can be deleted */
  can_be_deleted: boolean,
  /**
   * True, if the file is currently being downloaded (or a local copy is being generated
   * by some other means)
   */
  is_downloading_active: boolean,
  /** True, if the local copy is fully available */
  is_downloading_completed: boolean,
  /**
   * Download will be started from this offset. downloaded_prefix_size is calculated from
   * this offset
   */
  download_offset: number,
  /**
   * If is_downloading_completed is false, then only some prefix of the file starting
   * from download_offset is ready to be read. downloaded_prefix_size is the size of that
   * prefix
   */
  downloaded_prefix_size: number,
  /**
   * Total downloaded file bytes. Should be used only for calculating download progress.
   * The actual file size may be bigger, and some parts of it may contain garbage
   */
  downloaded_size: number,
|}

/** Represents a local file */
export type localFile$Input = {|
  +_: 'localFile',
  /** Local path to the locally available file part; may be empty */
  +path?: string,
  /** True, if it is possible to try to download or generate the file */
  +can_be_downloaded?: boolean,
  /** True, if the file can be deleted */
  +can_be_deleted?: boolean,
  /**
   * True, if the file is currently being downloaded (or a local copy is being generated
   * by some other means)
   */
  +is_downloading_active?: boolean,
  /** True, if the local copy is fully available */
  +is_downloading_completed?: boolean,
  /**
   * Download will be started from this offset. downloaded_prefix_size is calculated from
   * this offset
   */
  +download_offset?: number,
  /**
   * If is_downloading_completed is false, then only some prefix of the file starting
   * from download_offset is ready to be read. downloaded_prefix_size is the size of that
   * prefix
   */
  +downloaded_prefix_size?: number,
  /**
   * Total downloaded file bytes. Should be used only for calculating download progress.
   * The actual file size may be bigger, and some parts of it may contain garbage
   */
  +downloaded_size?: number,
|}

/** Represents a remote file */
export type remoteFile = {|
  _: 'remoteFile',
  /**
   * Remote file identifier; may be empty. Can be used across application restarts or
   * even from other devices for the current user. Uniquely identifies a file, but a file
   * can have a lot of different valid identifiers. If the ID starts with "http://" or
   * "https://", it represents the HTTP URL of the file. TDLib is currently unable to
   * download files if only their URL is known. If downloadFile is called on such a file
   * or if it is sent to a secret chat, TDLib starts a file generation process by sending
   * updateFileGenerationStart to the client with the HTTP URL in the original_path and
   * "#url#" as the conversion string. Clients should generate the file by downloading
   * it to the specified location
   */
  id: string,
  /**
   * Unique file identifier; may be empty if unknown. The unique file identifier which
   * is the same for the same file even for different users and is persistent over time
   */
  unique_id: string,
  /**
   * True, if the file is currently being uploaded (or a remote copy is being generated
   * by some other means)
   */
  is_uploading_active: boolean,
  /** True, if a remote copy is fully available */
  is_uploading_completed: boolean,
  /** Size of the remote available part of the file; 0 if unknown */
  uploaded_size: number,
|}

/** Represents a remote file */
export type remoteFile$Input = {|
  +_: 'remoteFile',
  /**
   * Remote file identifier; may be empty. Can be used across application restarts or
   * even from other devices for the current user. Uniquely identifies a file, but a file
   * can have a lot of different valid identifiers. If the ID starts with "http://" or
   * "https://", it represents the HTTP URL of the file. TDLib is currently unable to
   * download files if only their URL is known. If downloadFile is called on such a file
   * or if it is sent to a secret chat, TDLib starts a file generation process by sending
   * updateFileGenerationStart to the client with the HTTP URL in the original_path and
   * "#url#" as the conversion string. Clients should generate the file by downloading
   * it to the specified location
   */
  +id?: string,
  /**
   * Unique file identifier; may be empty if unknown. The unique file identifier which
   * is the same for the same file even for different users and is persistent over time
   */
  +unique_id?: string,
  /**
   * True, if the file is currently being uploaded (or a remote copy is being generated
   * by some other means)
   */
  +is_uploading_active?: boolean,
  /** True, if a remote copy is fully available */
  +is_uploading_completed?: boolean,
  /** Size of the remote available part of the file; 0 if unknown */
  +uploaded_size?: number,
|}

/** Represents a file */
export type file = {|
  _: 'file',
  /** Unique file identifier */
  id: number,
  /** File size; 0 if unknown */
  size: number,
  /**
   * Expected file size in case the exact file size is unknown, but an approximate size
   * is known. Can be used to show download/upload progress
   */
  expected_size: number,
  /** Information about the local copy of the file */
  local: localFile,
  /** Information about the remote copy of the file */
  remote: remoteFile,
|}

/** Represents a file */
export type file$Input = {|
  +_: 'file',
  /** Unique file identifier */
  +id?: number,
  /** File size; 0 if unknown */
  +size?: number,
  /**
   * Expected file size in case the exact file size is unknown, but an approximate size
   * is known. Can be used to show download/upload progress
   */
  +expected_size?: number,
  /** Information about the local copy of the file */
  +local?: localFile$Input,
  /** Information about the remote copy of the file */
  +remote?: remoteFile$Input,
|}

/** A file defined by its unique ID */
export type inputFileId = {|
  _: 'inputFileId',
  /** Unique file identifier */
  id: number,
|}

/** A file defined by its unique ID */
export type inputFileId$Input = {|
  +_: 'inputFileId',
  /** Unique file identifier */
  +id?: number,
|}

/**
 * A file defined by its remote ID. The remote ID is guaranteed to be usable only if
 * the corresponding file is still accessible to the user and known to TDLib. For example,
 * if the file is from a message, then the message must be not deleted and accessible
 * to the user. If the file database is disabled, then the corresponding object with
 * the file must be preloaded by the client
 */
export type inputFileRemote = {|
  _: 'inputFileRemote',
  /** Remote file identifier */
  id: string,
|}

/**
 * A file defined by its remote ID. The remote ID is guaranteed to be usable only if
 * the corresponding file is still accessible to the user and known to TDLib. For example,
 * if the file is from a message, then the message must be not deleted and accessible
 * to the user. If the file database is disabled, then the corresponding object with
 * the file must be preloaded by the client
 */
export type inputFileRemote$Input = {|
  +_: 'inputFileRemote',
  /** Remote file identifier */
  +id?: string,
|}

/** A file defined by a local path */
export type inputFileLocal = {|
  _: 'inputFileLocal',
  /** Local path to the file */
  path: string,
|}

/** A file defined by a local path */
export type inputFileLocal$Input = {|
  +_: 'inputFileLocal',
  /** Local path to the file */
  +path?: string,
|}

/** A file generated by the client */
export type inputFileGenerated = {|
  _: 'inputFileGenerated',
  /**
   * Local path to a file from which the file is generated; may be empty if there is no
   * such file
   */
  original_path: string,
  /**
   * String specifying the conversion applied to the original file; should be persistent
   * across application restarts. Conversions beginning with '#' are reserved for internal
   * TDLib usage
   */
  conversion: string,
  /** Expected size of the generated file; 0 if unknown */
  expected_size: number,
|}

/** A file generated by the client */
export type inputFileGenerated$Input = {|
  +_: 'inputFileGenerated',
  /**
   * Local path to a file from which the file is generated; may be empty if there is no
   * such file
   */
  +original_path?: string,
  /**
   * String specifying the conversion applied to the original file; should be persistent
   * across application restarts. Conversions beginning with '#' are reserved for internal
   * TDLib usage
   */
  +conversion?: string,
  /** Expected size of the generated file; 0 if unknown */
  +expected_size?: number,
|}

/** Photo description */
export type photoSize = {|
  _: 'photoSize',
  /** Thumbnail type (see https://core.telegram.org/constructor/photoSize) */
  type: string,
  /** Information about the photo file */
  photo: file,
  /** Photo width */
  width: number,
  /** Photo height */
  height: number,
|}

/** Photo description */
export type photoSize$Input = {|
  +_: 'photoSize',
  /** Thumbnail type (see https://core.telegram.org/constructor/photoSize) */
  +type?: string,
  /** Information about the photo file */
  +photo?: file$Input,
  /** Photo width */
  +width?: number,
  /** Photo height */
  +height?: number,
|}

/** Thumbnail image of a very poor quality and low resolution */
export type minithumbnail = {|
  _: 'minithumbnail',
  /** Thumbnail width, usually doesn't exceed 40 */
  width: number,
  /** Thumbnail height, usually doesn't exceed 40 */
  height: number,
  /** The thumbnail in JPEG format */
  data: string,
|}

/** Thumbnail image of a very poor quality and low resolution */
export type minithumbnail$Input = {|
  +_: 'minithumbnail',
  /** Thumbnail width, usually doesn't exceed 40 */
  +width?: number,
  /** Thumbnail height, usually doesn't exceed 40 */
  +height?: number,
  /** The thumbnail in JPEG format */
  +data?: string,
|}

/** A mask should be placed relatively to the forehead */
export type maskPointForehead = {|
  _: 'maskPointForehead',
|}

/** A mask should be placed relatively to the forehead */
export type maskPointForehead$Input = {|
  +_: 'maskPointForehead',
|}

/** A mask should be placed relatively to the eyes */
export type maskPointEyes = {|
  _: 'maskPointEyes',
|}

/** A mask should be placed relatively to the eyes */
export type maskPointEyes$Input = {|
  +_: 'maskPointEyes',
|}

/** A mask should be placed relatively to the mouth */
export type maskPointMouth = {|
  _: 'maskPointMouth',
|}

/** A mask should be placed relatively to the mouth */
export type maskPointMouth$Input = {|
  +_: 'maskPointMouth',
|}

/** A mask should be placed relatively to the chin */
export type maskPointChin = {|
  _: 'maskPointChin',
|}

/** A mask should be placed relatively to the chin */
export type maskPointChin$Input = {|
  +_: 'maskPointChin',
|}

/** Position on a photo where a mask should be placed */
export type maskPosition = {|
  _: 'maskPosition',
  /** Part of the face, relative to which the mask should be placed */
  point: MaskPoint,
  /**
   * Shift by X-axis measured in widths of the mask scaled to the face size, from left
   * to right. (For example, -1.0 will place the mask just to the left of the default
   * mask position)
   */
  x_shift: number,
  /**
   * Shift by Y-axis measured in heights of the mask scaled to the face size, from top
   * to bottom. (For example, 1.0 will place the mask just below the default mask position)
   */
  y_shift: number,
  /** Mask scaling coefficient. (For example, 2.0 means a doubled size) */
  scale: number,
|}

/** Position on a photo where a mask should be placed */
export type maskPosition$Input = {|
  +_: 'maskPosition',
  /** Part of the face, relative to which the mask should be placed */
  +point?: MaskPoint$Input,
  /**
   * Shift by X-axis measured in widths of the mask scaled to the face size, from left
   * to right. (For example, -1.0 will place the mask just to the left of the default
   * mask position)
   */
  +x_shift?: number,
  /**
   * Shift by Y-axis measured in heights of the mask scaled to the face size, from top
   * to bottom. (For example, 1.0 will place the mask just below the default mask position)
   */
  +y_shift?: number,
  /** Mask scaling coefficient. (For example, 2.0 means a doubled size) */
  +scale?: number,
|}

/** Describes one answer option of a poll */
export type pollOption = {|
  _: 'pollOption',
  /** Option text, 1-100 characters */
  text: string,
  /** Number of voters for this option, available only for closed or voted polls */
  voter_count: number,
  /** The percentage of votes for this option, 0-100 */
  vote_percentage: number,
  /** True, if the option was chosen by the user */
  is_chosen: boolean,
  /** True, if the option is being chosen by a pending setPollAnswer request */
  is_being_chosen: boolean,
|}

/** Describes one answer option of a poll */
export type pollOption$Input = {|
  +_: 'pollOption',
  /** Option text, 1-100 characters */
  +text?: string,
  /** Number of voters for this option, available only for closed or voted polls */
  +voter_count?: number,
  /** The percentage of votes for this option, 0-100 */
  +vote_percentage?: number,
  /** True, if the option was chosen by the user */
  +is_chosen?: boolean,
  /** True, if the option is being chosen by a pending setPollAnswer request */
  +is_being_chosen?: boolean,
|}

/** A regular poll */
export type pollTypeRegular = {|
  _: 'pollTypeRegular',
  /** True, if multiple answer options can be chosen simultaneously */
  allow_multiple_answers: boolean,
|}

/** A regular poll */
export type pollTypeRegular$Input = {|
  +_: 'pollTypeRegular',
  /** True, if multiple answer options can be chosen simultaneously */
  +allow_multiple_answers?: boolean,
|}

/**
 * A poll in quiz mode, which has exactly one correct answer option and can be answered
 * only once
 */
export type pollTypeQuiz = {|
  _: 'pollTypeQuiz',
  /** 0-based identifier of the correct answer option; -1 for a yet unanswered poll */
  correct_option_id: number,
|}

/**
 * A poll in quiz mode, which has exactly one correct answer option and can be answered
 * only once
 */
export type pollTypeQuiz$Input = {|
  +_: 'pollTypeQuiz',
  /** 0-based identifier of the correct answer option; -1 for a yet unanswered poll */
  +correct_option_id?: number,
|}

/** Describes an animation file. The animation must be encoded in GIF or MPEG4 format */
export type animation = {|
  _: 'animation',
  /** Duration of the animation, in seconds; as defined by the sender */
  duration: number,
  /** Width of the animation */
  width: number,
  /** Height of the animation */
  height: number,
  /** Original name of the file; as defined by the sender */
  file_name: string,
  /** MIME type of the file, usually "image/gif" or "video/mp4" */
  mime_type: string,
  /** Animation minithumbnail; may be null */
  minithumbnail: minithumbnail,
  /** Animation thumbnail; may be null */
  thumbnail: photoSize,
  /** File containing the animation */
  animation: file,
|}

/** Describes an animation file. The animation must be encoded in GIF or MPEG4 format */
export type animation$Input = {|
  +_: 'animation',
  /** Duration of the animation, in seconds; as defined by the sender */
  +duration?: number,
  /** Width of the animation */
  +width?: number,
  /** Height of the animation */
  +height?: number,
  /** Original name of the file; as defined by the sender */
  +file_name?: string,
  /** MIME type of the file, usually "image/gif" or "video/mp4" */
  +mime_type?: string,
  /** Animation minithumbnail; may be null */
  +minithumbnail?: minithumbnail$Input,
  /** Animation thumbnail; may be null */
  +thumbnail?: photoSize$Input,
  /** File containing the animation */
  +animation?: file$Input,
|}

/** Describes an audio file. Audio is usually in MP3 or M4A format */
export type audio = {|
  _: 'audio',
  /** Duration of the audio, in seconds; as defined by the sender */
  duration: number,
  /** Title of the audio; as defined by the sender */
  title: string,
  /** Performer of the audio; as defined by the sender */
  performer: string,
  /** Original name of the file; as defined by the sender */
  file_name: string,
  /** The MIME type of the file; as defined by the sender */
  mime_type: string,
  /** The minithumbnail of the album cover; may be null */
  album_cover_minithumbnail: minithumbnail,
  /**
   * The thumbnail of the album cover; as defined by the sender. The full size thumbnail
   * should be extracted from the downloaded file; may be null
   */
  album_cover_thumbnail: photoSize,
  /** File containing the audio */
  audio: file,
|}

/** Describes an audio file. Audio is usually in MP3 or M4A format */
export type audio$Input = {|
  +_: 'audio',
  /** Duration of the audio, in seconds; as defined by the sender */
  +duration?: number,
  /** Title of the audio; as defined by the sender */
  +title?: string,
  /** Performer of the audio; as defined by the sender */
  +performer?: string,
  /** Original name of the file; as defined by the sender */
  +file_name?: string,
  /** The MIME type of the file; as defined by the sender */
  +mime_type?: string,
  /** The minithumbnail of the album cover; may be null */
  +album_cover_minithumbnail?: minithumbnail$Input,
  /**
   * The thumbnail of the album cover; as defined by the sender. The full size thumbnail
   * should be extracted from the downloaded file; may be null
   */
  +album_cover_thumbnail?: photoSize$Input,
  /** File containing the audio */
  +audio?: file$Input,
|}

/** Describes a document of any type */
export type document = {|
  _: 'document',
  /** Original name of the file; as defined by the sender */
  file_name: string,
  /** MIME type of the file; as defined by the sender */
  mime_type: string,
  /** Document minithumbnail; may be null */
  minithumbnail: minithumbnail,
  /**
   * Document thumbnail in JPEG or PNG format (PNG will be used only for background patterns);
   * as defined by the sender; may be null
   */
  thumbnail: photoSize,
  /** File containing the document */
  document: file,
|}

/** Describes a document of any type */
export type document$Input = {|
  +_: 'document',
  /** Original name of the file; as defined by the sender */
  +file_name?: string,
  /** MIME type of the file; as defined by the sender */
  +mime_type?: string,
  /** Document minithumbnail; may be null */
  +minithumbnail?: minithumbnail$Input,
  /**
   * Document thumbnail in JPEG or PNG format (PNG will be used only for background patterns);
   * as defined by the sender; may be null
   */
  +thumbnail?: photoSize$Input,
  /** File containing the document */
  +document?: file$Input,
|}

/** Describes a photo */
export type photo = {|
  _: 'photo',
  /** True, if stickers were added to the photo */
  has_stickers: boolean,
  /** Photo minithumbnail; may be null */
  minithumbnail: minithumbnail,
  /** Available variants of the photo, in different sizes */
  sizes: Array<photoSize>,
|}

/** Describes a photo */
export type photo$Input = {|
  +_: 'photo',
  /** True, if stickers were added to the photo */
  +has_stickers?: boolean,
  /** Photo minithumbnail; may be null */
  +minithumbnail?: minithumbnail$Input,
  /** Available variants of the photo, in different sizes */
  +sizes?: $ReadOnlyArray<photoSize$Input>,
|}

/** Describes a sticker */
export type sticker = {|
  _: 'sticker',
  /** The identifier of the sticker set to which the sticker belongs; 0 if none */
  set_id: number | string,
  /** Sticker width; as defined by the sender */
  width: number,
  /** Sticker height; as defined by the sender */
  height: number,
  /** Emoji corresponding to the sticker */
  emoji: string,
  /** True, if the sticker is an animated sticker in TGS format */
  is_animated: boolean,
  /** True, if the sticker is a mask */
  is_mask: boolean,
  /** Position where the mask should be placed; may be null */
  mask_position: maskPosition,
  /** Sticker thumbnail in WEBP or JPEG format; may be null */
  thumbnail: photoSize,
  /** File containing the sticker */
  sticker: file,
|}

/** Describes a sticker */
export type sticker$Input = {|
  +_: 'sticker',
  /** The identifier of the sticker set to which the sticker belongs; 0 if none */
  +set_id?: number | string,
  /** Sticker width; as defined by the sender */
  +width?: number,
  /** Sticker height; as defined by the sender */
  +height?: number,
  /** Emoji corresponding to the sticker */
  +emoji?: string,
  /** True, if the sticker is an animated sticker in TGS format */
  +is_animated?: boolean,
  /** True, if the sticker is a mask */
  +is_mask?: boolean,
  /** Position where the mask should be placed; may be null */
  +mask_position?: maskPosition$Input,
  /** Sticker thumbnail in WEBP or JPEG format; may be null */
  +thumbnail?: photoSize$Input,
  /** File containing the sticker */
  +sticker?: file$Input,
|}

/** Describes a video file */
export type video = {|
  _: 'video',
  /** Duration of the video, in seconds; as defined by the sender */
  duration: number,
  /** Video width; as defined by the sender */
  width: number,
  /** Video height; as defined by the sender */
  height: number,
  /** Original name of the file; as defined by the sender */
  file_name: string,
  /** MIME type of the file; as defined by the sender */
  mime_type: string,
  /** True, if stickers were added to the video */
  has_stickers: boolean,
  /** True, if the video should be tried to be streamed */
  supports_streaming: boolean,
  /** Video minithumbnail; may be null */
  minithumbnail: minithumbnail,
  /** Video thumbnail; as defined by the sender; may be null */
  thumbnail: photoSize,
  /** File containing the video */
  video: file,
|}

/** Describes a video file */
export type video$Input = {|
  +_: 'video',
  /** Duration of the video, in seconds; as defined by the sender */
  +duration?: number,
  /** Video width; as defined by the sender */
  +width?: number,
  /** Video height; as defined by the sender */
  +height?: number,
  /** Original name of the file; as defined by the sender */
  +file_name?: string,
  /** MIME type of the file; as defined by the sender */
  +mime_type?: string,
  /** True, if stickers were added to the video */
  +has_stickers?: boolean,
  /** True, if the video should be tried to be streamed */
  +supports_streaming?: boolean,
  /** Video minithumbnail; may be null */
  +minithumbnail?: minithumbnail$Input,
  /** Video thumbnail; as defined by the sender; may be null */
  +thumbnail?: photoSize$Input,
  /** File containing the video */
  +video?: file$Input,
|}

/**
 * Describes a video note. The video must be equal in width and height, cropped to a
 * circle, and stored in MPEG4 format
 */
export type videoNote = {|
  _: 'videoNote',
  /** Duration of the video, in seconds; as defined by the sender */
  duration: number,
  /** Video width and height; as defined by the sender */
  length: number,
  /** Video minithumbnail; may be null */
  minithumbnail: minithumbnail,
  /** Video thumbnail; as defined by the sender; may be null */
  thumbnail: photoSize,
  /** File containing the video */
  video: file,
|}

/**
 * Describes a video note. The video must be equal in width and height, cropped to a
 * circle, and stored in MPEG4 format
 */
export type videoNote$Input = {|
  +_: 'videoNote',
  /** Duration of the video, in seconds; as defined by the sender */
  +duration?: number,
  /** Video width and height; as defined by the sender */
  +length?: number,
  /** Video minithumbnail; may be null */
  +minithumbnail?: minithumbnail$Input,
  /** Video thumbnail; as defined by the sender; may be null */
  +thumbnail?: photoSize$Input,
  /** File containing the video */
  +video?: file$Input,
|}

/**
 * Describes a voice note. The voice note must be encoded with the Opus codec, and stored
 * inside an OGG container. Voice notes can have only a single audio channel
 */
export type voiceNote = {|
  _: 'voiceNote',
  /** Duration of the voice note, in seconds; as defined by the sender */
  duration: number,
  /** A waveform representation of the voice note in 5-bit format */
  waveform: string,
  /** MIME type of the file; as defined by the sender */
  mime_type: string,
  /** File containing the voice note */
  voice: file,
|}

/**
 * Describes a voice note. The voice note must be encoded with the Opus codec, and stored
 * inside an OGG container. Voice notes can have only a single audio channel
 */
export type voiceNote$Input = {|
  +_: 'voiceNote',
  /** Duration of the voice note, in seconds; as defined by the sender */
  +duration?: number,
  /** A waveform representation of the voice note in 5-bit format */
  +waveform?: string,
  /** MIME type of the file; as defined by the sender */
  +mime_type?: string,
  /** File containing the voice note */
  +voice?: file$Input,
|}

/** Describes a user contact */
export type contact = {|
  _: 'contact',
  /** Phone number of the user */
  phone_number: string,
  /** First name of the user; 1-255 characters in length */
  first_name: string,
  /** Last name of the user */
  last_name: string,
  /** Additional data about the user in a form of vCard; 0-2048 bytes in length */
  vcard: string,
  /** Identifier of the user, if known; otherwise 0 */
  user_id: number,
|}

/** Describes a user contact */
export type contact$Input = {|
  +_: 'contact',
  /** Phone number of the user */
  +phone_number?: string,
  /** First name of the user; 1-255 characters in length */
  +first_name?: string,
  /** Last name of the user */
  +last_name?: string,
  /** Additional data about the user in a form of vCard; 0-2048 bytes in length */
  +vcard?: string,
  /** Identifier of the user, if known; otherwise 0 */
  +user_id?: number,
|}

/** Describes a location on planet Earth */
export type location = {|
  _: 'location',
  /** Latitude of the location in degrees; as defined by the sender */
  latitude: number,
  /** Longitude of the location, in degrees; as defined by the sender */
  longitude: number,
|}

/** Describes a location on planet Earth */
export type location$Input = {|
  +_: 'location',
  /** Latitude of the location in degrees; as defined by the sender */
  +latitude?: number,
  /** Longitude of the location, in degrees; as defined by the sender */
  +longitude?: number,
|}

/** Describes a venue */
export type venue = {|
  _: 'venue',
  /** Venue location; as defined by the sender */
  location: location,
  /** Venue name; as defined by the sender */
  title: string,
  /** Venue address; as defined by the sender */
  address: string,
  /**
   * Provider of the venue database; as defined by the sender. Currently only "foursquare"
   * needs to be supported
   */
  provider: string,
  /** Identifier of the venue in the provider database; as defined by the sender */
  id: string,
  /** Type of the venue in the provider database; as defined by the sender */
  type: string,
|}

/** Describes a venue */
export type venue$Input = {|
  +_: 'venue',
  /** Venue location; as defined by the sender */
  +location?: location$Input,
  /** Venue name; as defined by the sender */
  +title?: string,
  /** Venue address; as defined by the sender */
  +address?: string,
  /**
   * Provider of the venue database; as defined by the sender. Currently only "foursquare"
   * needs to be supported
   */
  +provider?: string,
  /** Identifier of the venue in the provider database; as defined by the sender */
  +id?: string,
  /** Type of the venue in the provider database; as defined by the sender */
  +type?: string,
|}

/** Describes a game */
export type game = {|
  _: 'game',
  /** Game ID */
  id: number | string,
  /** Game short name. To share a game use the URL https://t.me/{bot_username}?game={game_short_name} */
  short_name: string,
  /** Game title */
  title: string,
  /** Game text, usually containing scoreboards for a game */
  text: formattedText,
  /** Game description */
  description: string,
  /** Game photo */
  photo: photo,
  /** Game animation; may be null */
  animation: animation,
|}

/** Describes a game */
export type game$Input = {|
  +_: 'game',
  /** Game ID */
  +id?: number | string,
  /** Game short name. To share a game use the URL https://t.me/{bot_username}?game={game_short_name} */
  +short_name?: string,
  /** Game title */
  +title?: string,
  /** Game text, usually containing scoreboards for a game */
  +text?: formattedText$Input,
  /** Game description */
  +description?: string,
  /** Game photo */
  +photo?: photo$Input,
  /** Game animation; may be null */
  +animation?: animation$Input,
|}

/** Describes a poll */
export type poll = {|
  _: 'poll',
  /** Unique poll identifier */
  id: number | string,
  /** Poll question, 1-255 characters */
  question: string,
  /** List of poll answer options */
  options: Array<pollOption>,
  /** Total number of voters, participating in the poll */
  total_voter_count: number,
  /** User identifiers of recent voters, if the poll is non-anonymous */
  recent_voter_user_ids: Array<number>,
  /** True, if the poll is anonymous */
  is_anonymous: boolean,
  /** Type of the poll */
  type: PollType,
  /** True, if the poll is closed */
  is_closed: boolean,
|}

/** Describes a poll */
export type poll$Input = {|
  +_: 'poll',
  /** Unique poll identifier */
  +id?: number | string,
  /** Poll question, 1-255 characters */
  +question?: string,
  /** List of poll answer options */
  +options?: $ReadOnlyArray<pollOption$Input>,
  /** Total number of voters, participating in the poll */
  +total_voter_count?: number,
  /** User identifiers of recent voters, if the poll is non-anonymous */
  +recent_voter_user_ids?: $ReadOnlyArray<number>,
  /** True, if the poll is anonymous */
  +is_anonymous?: boolean,
  /** Type of the poll */
  +type?: PollType$Input,
  /** True, if the poll is closed */
  +is_closed?: boolean,
|}

/** Describes a user profile photo */
export type profilePhoto = {|
  _: 'profilePhoto',
  /**
   * Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of
   * userProfilePhotos
   */
  id: number | string,
  /**
   * A small (160x160) user profile photo. The file can be downloaded only before the
   * photo is changed
   */
  small: file,
  /**
   * A big (640x640) user profile photo. The file can be downloaded only before the photo
   * is changed
   */
  big: file,
|}

/** Describes a user profile photo */
export type profilePhoto$Input = {|
  +_: 'profilePhoto',
  /**
   * Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of
   * userProfilePhotos
   */
  +id?: number | string,
  /**
   * A small (160x160) user profile photo. The file can be downloaded only before the
   * photo is changed
   */
  +small?: file$Input,
  /**
   * A big (640x640) user profile photo. The file can be downloaded only before the photo
   * is changed
   */
  +big?: file$Input,
|}

/** Describes the photo of a chat */
export type chatPhoto = {|
  _: 'chatPhoto',
  /**
   * A small (160x160) chat photo. The file can be downloaded only before the photo is
   * changed
   */
  small: file,
  /** A big (640x640) chat photo. The file can be downloaded only before the photo is changed */
  big: file,
|}

/** Describes the photo of a chat */
export type chatPhoto$Input = {|
  +_: 'chatPhoto',
  /**
   * A small (160x160) chat photo. The file can be downloaded only before the photo is
   * changed
   */
  +small?: file$Input,
  /** A big (640x640) chat photo. The file can be downloaded only before the photo is changed */
  +big?: file$Input,
|}

/** A regular user */
export type userTypeRegular = {|
  _: 'userTypeRegular',
|}

/** A regular user */
export type userTypeRegular$Input = {|
  +_: 'userTypeRegular',
|}

/**
 * A deleted user or deleted bot. No information on the user besides the user identifier
 * is available. It is not possible to perform any active actions on this type of user
 */
export type userTypeDeleted = {|
  _: 'userTypeDeleted',
|}

/**
 * A deleted user or deleted bot. No information on the user besides the user identifier
 * is available. It is not possible to perform any active actions on this type of user
 */
export type userTypeDeleted$Input = {|
  +_: 'userTypeDeleted',
|}

/** A bot (see https://core.telegram.org/bots) */
export type userTypeBot = {|
  _: 'userTypeBot',
  /** True, if the bot can be invited to basic group and supergroup chats */
  can_join_groups: boolean,
  /**
   * True, if the bot can read all messages in basic group or supergroup chats and not
   * just those addressed to the bot. In private and channel chats a bot can always read
   * all messages
   */
  can_read_all_group_messages: boolean,
  /** True, if the bot supports inline queries */
  is_inline: boolean,
  /** Placeholder for inline queries (displayed on the client input field) */
  inline_query_placeholder: string,
  /**
   * True, if the location of the user should be sent with every inline query to this
   * bot
   */
  need_location: boolean,
|}

/** A bot (see https://core.telegram.org/bots) */
export type userTypeBot$Input = {|
  +_: 'userTypeBot',
  /** True, if the bot can be invited to basic group and supergroup chats */
  +can_join_groups?: boolean,
  /**
   * True, if the bot can read all messages in basic group or supergroup chats and not
   * just those addressed to the bot. In private and channel chats a bot can always read
   * all messages
   */
  +can_read_all_group_messages?: boolean,
  /** True, if the bot supports inline queries */
  +is_inline?: boolean,
  /** Placeholder for inline queries (displayed on the client input field) */
  +inline_query_placeholder?: string,
  /**
   * True, if the location of the user should be sent with every inline query to this
   * bot
   */
  +need_location?: boolean,
|}

/**
 * No information on the user besides the user identifier is available, yet this user
 * has not been deleted. This object is extremely rare and must be handled like a deleted
 * user. It is not possible to perform any actions on users of this type
 */
export type userTypeUnknown = {|
  _: 'userTypeUnknown',
|}

/**
 * No information on the user besides the user identifier is available, yet this user
 * has not been deleted. This object is extremely rare and must be handled like a deleted
 * user. It is not possible to perform any actions on users of this type
 */
export type userTypeUnknown$Input = {|
  +_: 'userTypeUnknown',
|}

/** Represents commands supported by a bot */
export type botCommand = {|
  _: 'botCommand',
  /** Text of the bot command */
  command: string,
  /** Description of the bot command */
  description: string,
|}

/** Represents commands supported by a bot */
export type botCommand$Input = {|
  +_: 'botCommand',
  /** Text of the bot command */
  +command?: string,
  /** Description of the bot command */
  +description?: string,
|}

/** Provides information about a bot and its supported commands */
export type botInfo = {|
  _: 'botInfo',
  /** Long description shown on the user info page */
  description: string,
  /** A list of commands supported by the bot */
  commands: Array<botCommand>,
|}

/** Provides information about a bot and its supported commands */
export type botInfo$Input = {|
  +_: 'botInfo',
  /** Long description shown on the user info page */
  +description?: string,
  /** A list of commands supported by the bot */
  +commands?: $ReadOnlyArray<botCommand$Input>,
|}

/** Represents a location to which a chat is connected */
export type chatLocation = {|
  _: 'chatLocation',
  /** The location */
  location: location,
  /** Location address; 1-64 characters, as defined by the chat owner */
  address: string,
|}

/** Represents a location to which a chat is connected */
export type chatLocation$Input = {|
  +_: 'chatLocation',
  /** The location */
  +location?: location$Input,
  /** Location address; 1-64 characters, as defined by the chat owner */
  +address?: string,
|}

/** Represents a user */
export type user = {|
  _: 'user',
  /** User identifier */
  id: number,
  /** First name of the user */
  first_name: string,
  /** Last name of the user */
  last_name: string,
  /** Username of the user */
  username: string,
  /** Phone number of the user */
  phone_number: string,
  /** Current online status of the user */
  status: UserStatus,
  /** Profile photo of the user; may be null */
  profile_photo: profilePhoto,
  /** The user is a contact of the current user */
  is_contact: boolean,
  /**
   * The user is a contact of the current user and the current user is a contact of the
   * user
   */
  is_mutual_contact: boolean,
  /** True, if the user is verified */
  is_verified: boolean,
  /** True, if the user is Telegram support account */
  is_support: boolean,
  /**
   * If non-empty, it contains a human-readable description of the reason why access to
   * this user must be restricted
   */
  restriction_reason: string,
  /** True, if many users reported this user as a scam */
  is_scam: boolean,
  /**
   * If false, the user is inaccessible, and the only information known about the user
   * is inside this class. It can't be passed to any method except GetUser
   */
  have_access: boolean,
  /** Type of the user */
  type: UserType,
  /** IETF language tag of the user's language; only available to bots */
  language_code: string,
|}

/** Represents a user */
export type user$Input = {|
  +_: 'user',
  /** User identifier */
  +id?: number,
  /** First name of the user */
  +first_name?: string,
  /** Last name of the user */
  +last_name?: string,
  /** Username of the user */
  +username?: string,
  /** Phone number of the user */
  +phone_number?: string,
  /** Current online status of the user */
  +status?: UserStatus$Input,
  /** Profile photo of the user; may be null */
  +profile_photo?: profilePhoto$Input,
  /** The user is a contact of the current user */
  +is_contact?: boolean,
  /**
   * The user is a contact of the current user and the current user is a contact of the
   * user
   */
  +is_mutual_contact?: boolean,
  /** True, if the user is verified */
  +is_verified?: boolean,
  /** True, if the user is Telegram support account */
  +is_support?: boolean,
  /**
   * If non-empty, it contains a human-readable description of the reason why access to
   * this user must be restricted
   */
  +restriction_reason?: string,
  /** True, if many users reported this user as a scam */
  +is_scam?: boolean,
  /**
   * If false, the user is inaccessible, and the only information known about the user
   * is inside this class. It can't be passed to any method except GetUser
   */
  +have_access?: boolean,
  /** Type of the user */
  +type?: UserType$Input,
  /** IETF language tag of the user's language; only available to bots */
  +language_code?: string,
|}

/** Contains full information about a user (except the full list of profile photos) */
export type userFullInfo = {|
  _: 'userFullInfo',
  /** True, if the user is blacklisted by the current user */
  is_blocked: boolean,
  /** True, if the user can be called */
  can_be_called: boolean,
  /** True, if the user can't be called due to their privacy settings */
  has_private_calls: boolean,
  /**
   * True, if the current user needs to explicitly allow to share their phone number with
   * the user when the method addContact is used
   */
  need_phone_number_privacy_exception: boolean,
  /** A short user bio */
  bio: string,
  /** For bots, the text that is included with the link when users share the bot */
  share_text: string,
  /**
   * Number of group chats where both the other user and the current user are a member;
   * 0 for the current user
   */
  group_in_common_count: number,
  /** If the user is a bot, information about the bot; may be null */
  bot_info: botInfo,
|}

/** Contains full information about a user (except the full list of profile photos) */
export type userFullInfo$Input = {|
  +_: 'userFullInfo',
  /** True, if the user is blacklisted by the current user */
  +is_blocked?: boolean,
  /** True, if the user can be called */
  +can_be_called?: boolean,
  /** True, if the user can't be called due to their privacy settings */
  +has_private_calls?: boolean,
  /**
   * True, if the current user needs to explicitly allow to share their phone number with
   * the user when the method addContact is used
   */
  +need_phone_number_privacy_exception?: boolean,
  /** A short user bio */
  +bio?: string,
  /** For bots, the text that is included with the link when users share the bot */
  +share_text?: string,
  /**
   * Number of group chats where both the other user and the current user are a member;
   * 0 for the current user
   */
  +group_in_common_count?: number,
  /** If the user is a bot, information about the bot; may be null */
  +bot_info?: botInfo$Input,
|}

/** Contains full information about a user profile photo */
export type userProfilePhoto = {|
  _: 'userProfilePhoto',
  /** Unique user profile photo identifier */
  id: number | string,
  /** Point in time (Unix timestamp) when the photo has been added */
  added_date: number,
  /** Available variants of the user photo, in different sizes */
  sizes: Array<photoSize>,
|}

/** Contains full information about a user profile photo */
export type userProfilePhoto$Input = {|
  +_: 'userProfilePhoto',
  /** Unique user profile photo identifier */
  +id?: number | string,
  /** Point in time (Unix timestamp) when the photo has been added */
  +added_date?: number,
  /** Available variants of the user photo, in different sizes */
  +sizes?: $ReadOnlyArray<photoSize$Input>,
|}

/** Contains part of the list of user photos */
export type userProfilePhotos = {|
  _: 'userProfilePhotos',
  /** Total number of user profile photos */
  total_count: number,
  /** A list of photos */
  photos: Array<userProfilePhoto>,
|}

/** Contains part of the list of user photos */
export type userProfilePhotos$Input = {|
  +_: 'userProfilePhotos',
  /** Total number of user profile photos */
  +total_count?: number,
  /** A list of photos */
  +photos?: $ReadOnlyArray<userProfilePhoto$Input>,
|}

/** Represents a list of users */
export type users = {|
  _: 'users',
  /** Approximate total count of users found */
  total_count: number,
  /** A list of user identifiers */
  user_ids: Array<number>,
|}

/** Represents a list of users */
export type users$Input = {|
  +_: 'users',
  /** Approximate total count of users found */
  +total_count?: number,
  /** A list of user identifiers */
  +user_ids?: $ReadOnlyArray<number>,
|}

/** Contains information about a chat administrator */
export type chatAdministrator = {|
  _: 'chatAdministrator',
  /** User identifier of the administrator */
  user_id: number,
  /** Custom title of the administrator */
  custom_title: string,
  /** True, if the user is the owner of the chat */
  is_owner: boolean,
|}

/** Contains information about a chat administrator */
export type chatAdministrator$Input = {|
  +_: 'chatAdministrator',
  /** User identifier of the administrator */
  +user_id?: number,
  /** Custom title of the administrator */
  +custom_title?: string,
  /** True, if the user is the owner of the chat */
  +is_owner?: boolean,
|}

/** Represents a list of chat administrators */
export type chatAdministrators = {|
  _: 'chatAdministrators',
  /** A list of chat administrators */
  administrators: Array<chatAdministrator>,
|}

/** Represents a list of chat administrators */
export type chatAdministrators$Input = {|
  +_: 'chatAdministrators',
  /** A list of chat administrators */
  +administrators?: $ReadOnlyArray<chatAdministrator$Input>,
|}

/** Describes actions that a user is allowed to take in a chat */
export type chatPermissions = {|
  _: 'chatPermissions',
  /** True, if the user can send text messages, contacts, locations, and venues */
  can_send_messages: boolean,
  /**
   * True, if the user can send audio files, documents, photos, videos, video notes, and
   * voice notes. Implies can_send_messages permissions
   */
  can_send_media_messages: boolean,
  /** True, if the user can send polls. Implies can_send_messages permissions */
  can_send_polls: boolean,
  /**
   * True, if the user can send animations, games, and stickers and use inline bots. Implies
   * can_send_messages permissions
   */
  can_send_other_messages: boolean,
  /**
   * True, if the user may add a web page preview to their messages. Implies can_send_messages
   * permissions
   */
  can_add_web_page_previews: boolean,
  /** True, if the user can change the chat title, photo, and other settings */
  can_change_info: boolean,
  /** True, if the user can invite new users to the chat */
  can_invite_users: boolean,
  /** True, if the user can pin messages */
  can_pin_messages: boolean,
|}

/** Describes actions that a user is allowed to take in a chat */
export type chatPermissions$Input = {|
  +_: 'chatPermissions',
  /** True, if the user can send text messages, contacts, locations, and venues */
  +can_send_messages?: boolean,
  /**
   * True, if the user can send audio files, documents, photos, videos, video notes, and
   * voice notes. Implies can_send_messages permissions
   */
  +can_send_media_messages?: boolean,
  /** True, if the user can send polls. Implies can_send_messages permissions */
  +can_send_polls?: boolean,
  /**
   * True, if the user can send animations, games, and stickers and use inline bots. Implies
   * can_send_messages permissions
   */
  +can_send_other_messages?: boolean,
  /**
   * True, if the user may add a web page preview to their messages. Implies can_send_messages
   * permissions
   */
  +can_add_web_page_previews?: boolean,
  /** True, if the user can change the chat title, photo, and other settings */
  +can_change_info?: boolean,
  /** True, if the user can invite new users to the chat */
  +can_invite_users?: boolean,
  /** True, if the user can pin messages */
  +can_pin_messages?: boolean,
|}

/** The user is the owner of a chat and has all the administrator privileges */
export type chatMemberStatusCreator = {|
  _: 'chatMemberStatusCreator',
  /**
   * A custom title of the owner; 0-16 characters without emojis; applicable to supergroups
   * only
   */
  custom_title: string,
  /** True, if the user is a member of the chat */
  is_member: boolean,
|}

/** The user is the owner of a chat and has all the administrator privileges */
export type chatMemberStatusCreator$Input = {|
  +_: 'chatMemberStatusCreator',
  /**
   * A custom title of the owner; 0-16 characters without emojis; applicable to supergroups
   * only
   */
  +custom_title?: string,
  /** True, if the user is a member of the chat */
  +is_member?: boolean,
|}

/**
 * The user is a member of a chat and has some additional privileges. In basic groups,
 * administrators can edit and delete messages sent by others, add new members, and
 * ban unprivileged members. In supergroups and channels, there are more detailed options
 * for administrator privileges
 */
export type chatMemberStatusAdministrator = {|
  _: 'chatMemberStatusAdministrator',
  /**
   * A custom title of the administrator; 0-16 characters without emojis; applicable to
   * supergroups only
   */
  custom_title: string,
  /** True, if the current user can edit the administrator privileges for the called user */
  can_be_edited: boolean,
  /** True, if the administrator can change the chat title, photo, and other settings */
  can_change_info: boolean,
  /** True, if the administrator can create channel posts; applicable to channels only */
  can_post_messages: boolean,
  /**
   * True, if the administrator can edit messages of other users and pin messages; applicable
   * to channels only
   */
  can_edit_messages: boolean,
  /** True, if the administrator can delete messages of other users */
  can_delete_messages: boolean,
  /** True, if the administrator can invite new users to the chat */
  can_invite_users: boolean,
  /** True, if the administrator can restrict, ban, or unban chat members */
  can_restrict_members: boolean,
  /** True, if the administrator can pin messages; applicable to groups only */
  can_pin_messages: boolean,
  /**
   * True, if the administrator can add new administrators with a subset of their own
   * privileges or demote administrators that were directly or indirectly promoted by
   * them
   */
  can_promote_members: boolean,
|}

/**
 * The user is a member of a chat and has some additional privileges. In basic groups,
 * administrators can edit and delete messages sent by others, add new members, and
 * ban unprivileged members. In supergroups and channels, there are more detailed options
 * for administrator privileges
 */
export type chatMemberStatusAdministrator$Input = {|
  +_: 'chatMemberStatusAdministrator',
  /**
   * A custom title of the administrator; 0-16 characters without emojis; applicable to
   * supergroups only
   */
  +custom_title?: string,
  /** True, if the current user can edit the administrator privileges for the called user */
  +can_be_edited?: boolean,
  /** True, if the administrator can change the chat title, photo, and other settings */
  +can_change_info?: boolean,
  /** True, if the administrator can create channel posts; applicable to channels only */
  +can_post_messages?: boolean,
  /**
   * True, if the administrator can edit messages of other users and pin messages; applicable
   * to channels only
   */
  +can_edit_messages?: boolean,
  /** True, if the administrator can delete messages of other users */
  +can_delete_messages?: boolean,
  /** True, if the administrator can invite new users to the chat */
  +can_invite_users?: boolean,
  /** True, if the administrator can restrict, ban, or unban chat members */
  +can_restrict_members?: boolean,
  /** True, if the administrator can pin messages; applicable to groups only */
  +can_pin_messages?: boolean,
  /**
   * True, if the administrator can add new administrators with a subset of their own
   * privileges or demote administrators that were directly or indirectly promoted by
   * them
   */
  +can_promote_members?: boolean,
|}

/** The user is a member of a chat, without any additional privileges or restrictions */
export type chatMemberStatusMember = {|
  _: 'chatMemberStatusMember',
|}

/** The user is a member of a chat, without any additional privileges or restrictions */
export type chatMemberStatusMember$Input = {|
  +_: 'chatMemberStatusMember',
|}

/**
 * The user is under certain restrictions in the chat. Not supported in basic groups
 * and channels
 */
export type chatMemberStatusRestricted = {|
  _: 'chatMemberStatusRestricted',
  /** True, if the user is a member of the chat */
  is_member: boolean,
  /**
   * Point in time (Unix timestamp) when restrictions will be lifted from the user; 0
   * if never. If the user is restricted for more than 366 days or for less than 30 seconds
   * from the current time, the user is considered to be restricted forever
   */
  restricted_until_date: number,
  /** User permissions in the chat */
  permissions: chatPermissions,
|}

/**
 * The user is under certain restrictions in the chat. Not supported in basic groups
 * and channels
 */
export type chatMemberStatusRestricted$Input = {|
  +_: 'chatMemberStatusRestricted',
  /** True, if the user is a member of the chat */
  +is_member?: boolean,
  /**
   * Point in time (Unix timestamp) when restrictions will be lifted from the user; 0
   * if never. If the user is restricted for more than 366 days or for less than 30 seconds
   * from the current time, the user is considered to be restricted forever
   */
  +restricted_until_date?: number,
  /** User permissions in the chat */
  +permissions?: chatPermissions$Input,
|}

/** The user is not a chat member */
export type chatMemberStatusLeft = {|
  _: 'chatMemberStatusLeft',
|}

/** The user is not a chat member */
export type chatMemberStatusLeft$Input = {|
  +_: 'chatMemberStatusLeft',
|}

/**
 * The user was banned (and hence is not a member of the chat). Implies the user can't
 * return to the chat or view messages
 */
export type chatMemberStatusBanned = {|
  _: 'chatMemberStatusBanned',
  /**
   * Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the
   * user is banned for more than 366 days or for less than 30 seconds from the current
   * time, the user is considered to be banned forever
   */
  banned_until_date: number,
|}

/**
 * The user was banned (and hence is not a member of the chat). Implies the user can't
 * return to the chat or view messages
 */
export type chatMemberStatusBanned$Input = {|
  +_: 'chatMemberStatusBanned',
  /**
   * Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the
   * user is banned for more than 366 days or for less than 30 seconds from the current
   * time, the user is considered to be banned forever
   */
  +banned_until_date?: number,
|}

/** A user with information about joining/leaving a chat */
export type chatMember = {|
  _: 'chatMember',
  /** User identifier of the chat member */
  user_id: number,
  /** Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown */
  inviter_user_id: number,
  /** Point in time (Unix timestamp) when the user joined a chat */
  joined_chat_date: number,
  /** Status of the member in the chat */
  status: ChatMemberStatus,
  /**
   * If the user is a bot, information about the bot; may be null. Can be null even for
   * a bot if the bot is not a chat member
   */
  bot_info: botInfo,
|}

/** A user with information about joining/leaving a chat */
export type chatMember$Input = {|
  +_: 'chatMember',
  /** User identifier of the chat member */
  +user_id?: number,
  /** Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown */
  +inviter_user_id?: number,
  /** Point in time (Unix timestamp) when the user joined a chat */
  +joined_chat_date?: number,
  /** Status of the member in the chat */
  +status?: ChatMemberStatus$Input,
  /**
   * If the user is a bot, information about the bot; may be null. Can be null even for
   * a bot if the bot is not a chat member
   */
  +bot_info?: botInfo$Input,
|}

/** Contains a list of chat members */
export type chatMembers = {|
  _: 'chatMembers',
  /** Approximate total count of chat members found */
  total_count: number,
  /** A list of chat members */
  members: Array<chatMember>,
|}

/** Contains a list of chat members */
export type chatMembers$Input = {|
  +_: 'chatMembers',
  /** Approximate total count of chat members found */
  +total_count?: number,
  /** A list of chat members */
  +members?: $ReadOnlyArray<chatMember$Input>,
|}

/** Returns contacts of the user */
export type chatMembersFilterContacts = {|
  _: 'chatMembersFilterContacts',
|}

/** Returns contacts of the user */
export type chatMembersFilterContacts$Input = {|
  +_: 'chatMembersFilterContacts',
|}

/** Returns the owner and administrators */
export type chatMembersFilterAdministrators = {|
  _: 'chatMembersFilterAdministrators',
|}

/** Returns the owner and administrators */
export type chatMembersFilterAdministrators$Input = {|
  +_: 'chatMembersFilterAdministrators',
|}

/** Returns all chat members, including restricted chat members */
export type chatMembersFilterMembers = {|
  _: 'chatMembersFilterMembers',
|}

/** Returns all chat members, including restricted chat members */
export type chatMembersFilterMembers$Input = {|
  +_: 'chatMembersFilterMembers',
|}

/**
 * Returns users under certain restrictions in the chat; can be used only by administrators
 * in a supergroup
 */
export type chatMembersFilterRestricted = {|
  _: 'chatMembersFilterRestricted',
|}

/**
 * Returns users under certain restrictions in the chat; can be used only by administrators
 * in a supergroup
 */
export type chatMembersFilterRestricted$Input = {|
  +_: 'chatMembersFilterRestricted',
|}

/**
 * Returns users banned from the chat; can be used only by administrators in a supergroup
 * or in a channel
 */
export type chatMembersFilterBanned = {|
  _: 'chatMembersFilterBanned',
|}

/**
 * Returns users banned from the chat; can be used only by administrators in a supergroup
 * or in a channel
 */
export type chatMembersFilterBanned$Input = {|
  +_: 'chatMembersFilterBanned',
|}

/** Returns bot members of the chat */
export type chatMembersFilterBots = {|
  _: 'chatMembersFilterBots',
|}

/** Returns bot members of the chat */
export type chatMembersFilterBots$Input = {|
  +_: 'chatMembersFilterBots',
|}

/** Returns recently active users in reverse chronological order */
export type supergroupMembersFilterRecent = {|
  _: 'supergroupMembersFilterRecent',
|}

/** Returns recently active users in reverse chronological order */
export type supergroupMembersFilterRecent$Input = {|
  +_: 'supergroupMembersFilterRecent',
|}

/** Returns contacts of the user, which are members of the supergroup or channel */
export type supergroupMembersFilterContacts = {|
  _: 'supergroupMembersFilterContacts',
  /** Query to search for */
  query: string,
|}

/** Returns contacts of the user, which are members of the supergroup or channel */
export type supergroupMembersFilterContacts$Input = {|
  +_: 'supergroupMembersFilterContacts',
  /** Query to search for */
  +query?: string,
|}

/** Returns the owner and administrators */
export type supergroupMembersFilterAdministrators = {|
  _: 'supergroupMembersFilterAdministrators',
|}

/** Returns the owner and administrators */
export type supergroupMembersFilterAdministrators$Input = {|
  +_: 'supergroupMembersFilterAdministrators',
|}

/** Used to search for supergroup or channel members via a (string) query */
export type supergroupMembersFilterSearch = {|
  _: 'supergroupMembersFilterSearch',
  /** Query to search for */
  query: string,
|}

/** Used to search for supergroup or channel members via a (string) query */
export type supergroupMembersFilterSearch$Input = {|
  +_: 'supergroupMembersFilterSearch',
  /** Query to search for */
  +query?: string,
|}

/** Returns restricted supergroup members; can be used only by administrators */
export type supergroupMembersFilterRestricted = {|
  _: 'supergroupMembersFilterRestricted',
  /** Query to search for */
  query: string,
|}

/** Returns restricted supergroup members; can be used only by administrators */
export type supergroupMembersFilterRestricted$Input = {|
  +_: 'supergroupMembersFilterRestricted',
  /** Query to search for */
  +query?: string,
|}

/** Returns users banned from the supergroup or channel; can be used only by administrators */
export type supergroupMembersFilterBanned = {|
  _: 'supergroupMembersFilterBanned',
  /** Query to search for */
  query: string,
|}

/** Returns users banned from the supergroup or channel; can be used only by administrators */
export type supergroupMembersFilterBanned$Input = {|
  +_: 'supergroupMembersFilterBanned',
  /** Query to search for */
  +query?: string,
|}

/** Returns bot members of the supergroup or channel */
export type supergroupMembersFilterBots = {|
  _: 'supergroupMembersFilterBots',
|}

/** Returns bot members of the supergroup or channel */
export type supergroupMembersFilterBots$Input = {|
  +_: 'supergroupMembersFilterBots',
|}

/**
 * Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate
 * more than 200 users)
 */
export type basicGroup = {|
  _: 'basicGroup',
  /** Group identifier */
  id: number,
  /** Number of members in the group */
  member_count: number,
  /** Status of the current user in the group */
  status: ChatMemberStatus,
  /** True, if the group is active */
  is_active: boolean,
  /** Identifier of the supergroup to which this group was upgraded; 0 if none */
  upgraded_to_supergroup_id: number,
|}

/**
 * Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate
 * more than 200 users)
 */
export type basicGroup$Input = {|
  +_: 'basicGroup',
  /** Group identifier */
  +id?: number,
  /** Number of members in the group */
  +member_count?: number,
  /** Status of the current user in the group */
  +status?: ChatMemberStatus$Input,
  /** True, if the group is active */
  +is_active?: boolean,
  /** Identifier of the supergroup to which this group was upgraded; 0 if none */
  +upgraded_to_supergroup_id?: number,
|}

/** Contains full information about a basic group */
export type basicGroupFullInfo = {|
  _: 'basicGroupFullInfo',
  /** Group description */
  description: string,
  /** User identifier of the creator of the group; 0 if unknown */
  creator_user_id: number,
  /** Group members */
  members: Array<chatMember>,
  /**
   * Invite link for this group; available only after it has been generated at least once
   * and only for the group creator
   */
  invite_link: string,
|}

/** Contains full information about a basic group */
export type basicGroupFullInfo$Input = {|
  +_: 'basicGroupFullInfo',
  /** Group description */
  +description?: string,
  /** User identifier of the creator of the group; 0 if unknown */
  +creator_user_id?: number,
  /** Group members */
  +members?: $ReadOnlyArray<chatMember$Input>,
  /**
   * Invite link for this group; available only after it has been generated at least once
   * and only for the group creator
   */
  +invite_link?: string,
|}

/**
 * Represents a supergroup or channel with zero or more members (subscribers in the
 * case of channels). From the point of view of the system, a channel is a special kind
 * of a supergroup: only administrators can post and see the list of members, and posts
 * from all administrators use the name and photo of the channel instead of individual
 * names and profile photos. Unlike supergroups, channels can have an unlimited number
 * of subscribers
 */
export type supergroup = {|
  _: 'supergroup',
  /** Supergroup or channel identifier */
  id: number,
  /** Username of the supergroup or channel; empty for private supergroups or channels */
  username: string,
  /**
   * Point in time (Unix timestamp) when the current user joined, or the point in time
   * when the supergroup or channel was created, in case the user is not a member
   */
  date: number,
  /**
   * Status of the current user in the supergroup or channel; custom title will be always
   * empty
   */
  status: ChatMemberStatus,
  /**
   * Member count; 0 if unknown. Currently it is guaranteed to be known only if the supergroup
   * or channel was found through SearchPublicChats
   */
  member_count: number,
  /**
   * True, if the channel has a discussion group, or the supergroup is the designated
   * discussion group for a channel
   */
  has_linked_chat: boolean,
  /**
   * True, if the supergroup is connected to a location, i.e. the supergroup is a location-based
   * supergroup
   */
  has_location: boolean,
  /**
   * True, if messages sent to the channel should contain information about the sender.
   * This field is only applicable to channels
   */
  sign_messages: boolean,
  /** True, if the slow mode is enabled in the supergroup */
  is_slow_mode_enabled: boolean,
  /** True, if the supergroup is a channel */
  is_channel: boolean,
  /** True, if the supergroup or channel is verified */
  is_verified: boolean,
  /**
   * If non-empty, contains a human-readable description of the reason why access to this
   * supergroup or channel must be restricted
   */
  restriction_reason: string,
  /** True, if many users reported this supergroup as a scam */
  is_scam: boolean,
|}

/**
 * Represents a supergroup or channel with zero or more members (subscribers in the
 * case of channels). From the point of view of the system, a channel is a special kind
 * of a supergroup: only administrators can post and see the list of members, and posts
 * from all administrators use the name and photo of the channel instead of individual
 * names and profile photos. Unlike supergroups, channels can have an unlimited number
 * of subscribers
 */
export type supergroup$Input = {|
  +_: 'supergroup',
  /** Supergroup or channel identifier */
  +id?: number,
  /** Username of the supergroup or channel; empty for private supergroups or channels */
  +username?: string,
  /**
   * Point in time (Unix timestamp) when the current user joined, or the point in time
   * when the supergroup or channel was created, in case the user is not a member
   */
  +date?: number,
  /**
   * Status of the current user in the supergroup or channel; custom title will be always
   * empty
   */
  +status?: ChatMemberStatus$Input,
  /**
   * Member count; 0 if unknown. Currently it is guaranteed to be known only if the supergroup
   * or channel was found through SearchPublicChats
   */
  +member_count?: number,
  /**
   * True, if the channel has a discussion group, or the supergroup is the designated
   * discussion group for a channel
   */
  +has_linked_chat?: boolean,
  /**
   * True, if the supergroup is connected to a location, i.e. the supergroup is a location-based
   * supergroup
   */
  +has_location?: boolean,
  /**
   * True, if messages sent to the channel should contain information about the sender.
   * This field is only applicable to channels
   */
  +sign_messages?: boolean,
  /** True, if the slow mode is enabled in the supergroup */
  +is_slow_mode_enabled?: boolean,
  /** True, if the supergroup is a channel */
  +is_channel?: boolean,
  /** True, if the supergroup or channel is verified */
  +is_verified?: boolean,
  /**
   * If non-empty, contains a human-readable description of the reason why access to this
   * supergroup or channel must be restricted
   */
  +restriction_reason?: string,
  /** True, if many users reported this supergroup as a scam */
  +is_scam?: boolean,
|}

/** Contains full information about a supergroup or channel */
export type supergroupFullInfo = {|
  _: 'supergroupFullInfo',
  /** Supergroup or channel description */
  description: string,
  /** Number of members in the supergroup or channel; 0 if unknown */
  member_count: number,
  /** Number of privileged users in the supergroup or channel; 0 if unknown */
  administrator_count: number,
  /** Number of restricted users in the supergroup; 0 if unknown */
  restricted_count: number,
  /** Number of users banned from chat; 0 if unknown */
  banned_count: number,
  /**
   * Chat identifier of a discussion group for the channel, or a channel, for which the
   * supergroup is the designated discussion group; 0 if none or unknown
   */
  linked_chat_id: number,
  /**
   * Delay between consecutive sent messages for non-administrator supergroup members,
   * in seconds
   */
  slow_mode_delay: number,
  /**
   * Time left before next message can be sent in the supergroup, in seconds. An updateSupergroupFullInfo
   * update is not triggered when value of this field changes, but both new and old values
   * are non-zero
   */
  slow_mode_delay_expires_in: number,
  /** True, if members of the chat can be retrieved */
  can_get_members: boolean,
  /** True, if the chat username can be changed */
  can_set_username: boolean,
  /** True, if the supergroup sticker set can be changed */
  can_set_sticker_set: boolean,
  /** True, if the supergroup location can be changed */
  can_set_location: boolean,
  /** True, if the channel statistics is available through getChatStatisticsUrl */
  can_view_statistics: boolean,
  /**
   * True, if new chat members will have access to old messages. In public or discussion
   * groups and both public and private channels, old messages are always available, so
   * this option affects only private supergroups without a linked chat. The value of
   * this field is only available for chat administrators
   */
  is_all_history_available: boolean,
  /** Identifier of the supergroup sticker set; 0 if none */
  sticker_set_id: number | string,
  /** Location to which the supergroup is connected; may be null */
  location: chatLocation,
  /** Invite link for this chat */
  invite_link: string,
  /** Identifier of the basic group from which supergroup was upgraded; 0 if none */
  upgraded_from_basic_group_id: number,
  /**
   * Identifier of the last message in the basic group from which supergroup was upgraded;
   * 0 if none
   */
  upgraded_from_max_message_id: number,
|}

/** Contains full information about a supergroup or channel */
export type supergroupFullInfo$Input = {|
  +_: 'supergroupFullInfo',
  /** Supergroup or channel description */
  +description?: string,
  /** Number of members in the supergroup or channel; 0 if unknown */
  +member_count?: number,
  /** Number of privileged users in the supergroup or channel; 0 if unknown */
  +administrator_count?: number,
  /** Number of restricted users in the supergroup; 0 if unknown */
  +restricted_count?: number,
  /** Number of users banned from chat; 0 if unknown */
  +banned_count?: number,
  /**
   * Chat identifier of a discussion group for the channel, or a channel, for which the
   * supergroup is the designated discussion group; 0 if none or unknown
   */
  +linked_chat_id?: number,
  /**
   * Delay between consecutive sent messages for non-administrator supergroup members,
   * in seconds
   */
  +slow_mode_delay?: number,
  /**
   * Time left before next message can be sent in the supergroup, in seconds. An updateSupergroupFullInfo
   * update is not triggered when value of this field changes, but both new and old values
   * are non-zero
   */
  +slow_mode_delay_expires_in?: number,
  /** True, if members of the chat can be retrieved */
  +can_get_members?: boolean,
  /** True, if the chat username can be changed */
  +can_set_username?: boolean,
  /** True, if the supergroup sticker set can be changed */
  +can_set_sticker_set?: boolean,
  /** True, if the supergroup location can be changed */
  +can_set_location?: boolean,
  /** True, if the channel statistics is available through getChatStatisticsUrl */
  +can_view_statistics?: boolean,
  /**
   * True, if new chat members will have access to old messages. In public or discussion
   * groups and both public and private channels, old messages are always available, so
   * this option affects only private supergroups without a linked chat. The value of
   * this field is only available for chat administrators
   */
  +is_all_history_available?: boolean,
  /** Identifier of the supergroup sticker set; 0 if none */
  +sticker_set_id?: number | string,
  /** Location to which the supergroup is connected; may be null */
  +location?: chatLocation$Input,
  /** Invite link for this chat */
  +invite_link?: string,
  /** Identifier of the basic group from which supergroup was upgraded; 0 if none */
  +upgraded_from_basic_group_id?: number,
  /**
   * Identifier of the last message in the basic group from which supergroup was upgraded;
   * 0 if none
   */
  +upgraded_from_max_message_id?: number,
|}

/** The secret chat is not yet created; waiting for the other user to get online */
export type secretChatStatePending = {|
  _: 'secretChatStatePending',
|}

/** The secret chat is not yet created; waiting for the other user to get online */
export type secretChatStatePending$Input = {|
  +_: 'secretChatStatePending',
|}

/** The secret chat is ready to use */
export type secretChatStateReady = {|
  _: 'secretChatStateReady',
|}

/** The secret chat is ready to use */
export type secretChatStateReady$Input = {|
  +_: 'secretChatStateReady',
|}

/** The secret chat is closed */
export type secretChatStateClosed = {|
  _: 'secretChatStateClosed',
|}

/** The secret chat is closed */
export type secretChatStateClosed$Input = {|
  +_: 'secretChatStateClosed',
|}

/** Represents a secret chat */
export type secretChat = {|
  _: 'secretChat',
  /** Secret chat identifier */
  id: number,
  /** Identifier of the chat partner */
  user_id: number,
  /** State of the secret chat */
  state: SecretChatState,
  /** True, if the chat was created by the current user; otherwise false */
  is_outbound: boolean,
  /** Current message Time To Live setting (self-destruct timer) for the chat, in seconds */
  ttl: number,
  /**
   * Hash of the currently used key for comparison with the hash of the chat partner's
   * key. This is a string of 36 little-endian bytes, which must be split into groups
   * of 2 bits, each denoting a pixel of one of 4 colors FFFFFF, D5E6F3, 2D5775, and 2F99C9.
   * The pixels must be used to make a 12x12 square image filled from left to right, top
   * to bottom. Alternatively, the first 32 bytes of the hash can be converted to the
   * hexadecimal format and printed as 32 2-digit hex numbers
   */
  key_hash: string,
  /**
   * Secret chat layer; determines features supported by the other client. Video notes
   * are supported if the layer >= 66; nested text entities and underline and strikethrough
   * entities are supported if the layer >= 101
   */
  layer: number,
|}

/** Represents a secret chat */
export type secretChat$Input = {|
  +_: 'secretChat',
  /** Secret chat identifier */
  +id?: number,
  /** Identifier of the chat partner */
  +user_id?: number,
  /** State of the secret chat */
  +state?: SecretChatState$Input,
  /** True, if the chat was created by the current user; otherwise false */
  +is_outbound?: boolean,
  /** Current message Time To Live setting (self-destruct timer) for the chat, in seconds */
  +ttl?: number,
  /**
   * Hash of the currently used key for comparison with the hash of the chat partner's
   * key. This is a string of 36 little-endian bytes, which must be split into groups
   * of 2 bits, each denoting a pixel of one of 4 colors FFFFFF, D5E6F3, 2D5775, and 2F99C9.
   * The pixels must be used to make a 12x12 square image filled from left to right, top
   * to bottom. Alternatively, the first 32 bytes of the hash can be converted to the
   * hexadecimal format and printed as 32 2-digit hex numbers
   */
  +key_hash?: string,
  /**
   * Secret chat layer; determines features supported by the other client. Video notes
   * are supported if the layer >= 66; nested text entities and underline and strikethrough
   * entities are supported if the layer >= 101
   */
  +layer?: number,
|}

/** The message was originally written by a known user */
export type messageForwardOriginUser = {|
  _: 'messageForwardOriginUser',
  /** Identifier of the user that originally sent the message */
  sender_user_id: number,
|}

/** The message was originally written by a known user */
export type messageForwardOriginUser$Input = {|
  +_: 'messageForwardOriginUser',
  /** Identifier of the user that originally sent the message */
  +sender_user_id?: number,
|}

/** The message was originally written by a user, which is hidden by their privacy settings */
export type messageForwardOriginHiddenUser = {|
  _: 'messageForwardOriginHiddenUser',
  /** Name of the sender */
  sender_name: string,
|}

/** The message was originally written by a user, which is hidden by their privacy settings */
export type messageForwardOriginHiddenUser$Input = {|
  +_: 'messageForwardOriginHiddenUser',
  /** Name of the sender */
  +sender_name?: string,
|}

/** The message was originally a post in a channel */
export type messageForwardOriginChannel = {|
  _: 'messageForwardOriginChannel',
  /** Identifier of the chat from which the message was originally forwarded */
  chat_id: number,
  /** Message identifier of the original message; 0 if unknown */
  message_id: number,
  /** Original post author signature */
  author_signature: string,
|}

/** The message was originally a post in a channel */
export type messageForwardOriginChannel$Input = {|
  +_: 'messageForwardOriginChannel',
  /** Identifier of the chat from which the message was originally forwarded */
  +chat_id?: number,
  /** Message identifier of the original message; 0 if unknown */
  +message_id?: number,
  /** Original post author signature */
  +author_signature?: string,
|}

/** Contains information about a forwarded message */
export type messageForwardInfo = {|
  _: 'messageForwardInfo',
  /** Origin of a forwarded message */
  origin: MessageForwardOrigin,
  /** Point in time (Unix timestamp) when the message was originally sent */
  date: number,
  /**
   * For messages forwarded to the chat with the current user (Saved Messages) or to the
   * channel's discussion group, the identifier of the chat from which the message was
   * forwarded last time; 0 if unknown
   */
  from_chat_id: number,
  /**
   * For messages forwarded to the chat with the current user (Saved Messages) or to the
   * channel's discussion group, the identifier of the original message from which the
   * new message was forwarded last time; 0 if unknown
   */
  from_message_id: number,
|}

/** Contains information about a forwarded message */
export type messageForwardInfo$Input = {|
  +_: 'messageForwardInfo',
  /** Origin of a forwarded message */
  +origin?: MessageForwardOrigin$Input,
  /** Point in time (Unix timestamp) when the message was originally sent */
  +date?: number,
  /**
   * For messages forwarded to the chat with the current user (Saved Messages) or to the
   * channel's discussion group, the identifier of the chat from which the message was
   * forwarded last time; 0 if unknown
   */
  +from_chat_id?: number,
  /**
   * For messages forwarded to the chat with the current user (Saved Messages) or to the
   * channel's discussion group, the identifier of the original message from which the
   * new message was forwarded last time; 0 if unknown
   */
  +from_message_id?: number,
|}

/** The message is being sent now, but has not yet been delivered to the server */
export type messageSendingStatePending = {|
  _: 'messageSendingStatePending',
|}

/** The message is being sent now, but has not yet been delivered to the server */
export type messageSendingStatePending$Input = {|
  +_: 'messageSendingStatePending',
|}

/** The message failed to be sent */
export type messageSendingStateFailed = {|
  _: 'messageSendingStateFailed',
  /** An error code; 0 if unknown */
  error_code: number,
  /** Error message */
  error_message: string,
  /** True, if the message can be re-sent */
  can_retry: boolean,
  /**
   * Time left before the message can be re-sent, in seconds. No update is sent when this
   * field changes
   */
  retry_after: number,
|}

/** The message failed to be sent */
export type messageSendingStateFailed$Input = {|
  +_: 'messageSendingStateFailed',
  /** An error code; 0 if unknown */
  +error_code?: number,
  /** Error message */
  +error_message?: string,
  /** True, if the message can be re-sent */
  +can_retry?: boolean,
  /**
   * Time left before the message can be re-sent, in seconds. No update is sent when this
   * field changes
   */
  +retry_after?: number,
|}

/** Describes a message */
export type message = {|
  _: 'message',
  /** Message identifier, unique for the chat to which the message belongs */
  id: number,
  /**
   * Identifier of the user who sent the message; 0 if unknown. Currently, it is unknown
   * for channel posts and for channel posts automatically forwarded to discussion group
   */
  sender_user_id: number,
  /** Chat identifier */
  chat_id: number,
  /** Information about the sending state of the message; may be null */
  sending_state: MessageSendingState,
  /** Information about the scheduling state of the message; may be null */
  scheduling_state: MessageSchedulingState,
  /** True, if the message is outgoing */
  is_outgoing: boolean,
  /**
   * True, if the message can be edited. For live location and poll messages this fields
   * shows whether editMessageLiveLocation or stopPoll can be used with this message by
   * the client
   */
  can_be_edited: boolean,
  /** True, if the message can be forwarded */
  can_be_forwarded: boolean,
  /**
   * True, if the message can be deleted only for the current user while other users will
   * continue to see it
   */
  can_be_deleted_only_for_self: boolean,
  /** True, if the message can be deleted for all users */
  can_be_deleted_for_all_users: boolean,
  /**
   * True, if the message is a channel post. All messages to channels are channel posts,
   * all other messages are not channel posts
   */
  is_channel_post: boolean,
  /** True, if the message contains an unread mention for the current user */
  contains_unread_mention: boolean,
  /** Point in time (Unix timestamp) when the message was sent */
  date: number,
  /** Point in time (Unix timestamp) when the message was last edited */
  edit_date: number,
  /** Information about the initial message sender; may be null */
  forward_info: messageForwardInfo,
  /**
   * If non-zero, the identifier of the message this message is replying to; can be the
   * identifier of a deleted message
   */
  reply_to_message_id: number,
  /**
   * For self-destructing messages, the message's TTL (Time To Live), in seconds; 0 if
   * none. TDLib will send updateDeleteMessages or updateMessageContent once the TTL expires
   */
  ttl: number,
  /** Time left before the message expires, in seconds */
  ttl_expires_in: number,
  /** If non-zero, the user identifier of the bot through which this message was sent */
  via_bot_user_id: number,
  /** For channel posts, optional author signature */
  author_signature: string,
  /** Number of times this message was viewed */
  views: number,
  /**
   * Unique identifier of an album this message belongs to. Only photos and videos can
   * be grouped together in albums
   */
  media_album_id: number | string,
  /**
   * If non-empty, contains a human-readable description of the reason why access to this
   * message must be restricted
   */
  restriction_reason: string,
  /** Content of the message */
  content: MessageContent,
  /** Reply markup for the message; may be null */
  reply_markup: ReplyMarkup,
|}

/** Describes a message */
export type message$Input = {|
  +_: 'message',
  /** Message identifier, unique for the chat to which the message belongs */
  +id?: number,
  /**
   * Identifier of the user who sent the message; 0 if unknown. Currently, it is unknown
   * for channel posts and for channel posts automatically forwarded to discussion group
   */
  +sender_user_id?: number,
  /** Chat identifier */
  +chat_id?: number,
  /** Information about the sending state of the message; may be null */
  +sending_state?: MessageSendingState$Input,
  /** Information about the scheduling state of the message; may be null */
  +scheduling_state?: MessageSchedulingState$Input,
  /** True, if the message is outgoing */
  +is_outgoing?: boolean,
  /**
   * True, if the message can be edited. For live location and poll messages this fields
   * shows whether editMessageLiveLocation or stopPoll can be used with this message by
   * the client
   */
  +can_be_edited?: boolean,
  /** True, if the message can be forwarded */
  +can_be_forwarded?: boolean,
  /**
   * True, if the message can be deleted only for the current user while other users will
   * continue to see it
   */
  +can_be_deleted_only_for_self?: boolean,
  /** True, if the message can be deleted for all users */
  +can_be_deleted_for_all_users?: boolean,
  /**
   * True, if the message is a channel post. All messages to channels are channel posts,
   * all other messages are not channel posts
   */
  +is_channel_post?: boolean,
  /** True, if the message contains an unread mention for the current user */
  +contains_unread_mention?: boolean,
  /** Point in time (Unix timestamp) when the message was sent */
  +date?: number,
  /** Point in time (Unix timestamp) when the message was last edited */
  +edit_date?: number,
  /** Information about the initial message sender; may be null */
  +forward_info?: messageForwardInfo$Input,
  /**
   * If non-zero, the identifier of the message this message is replying to; can be the
   * identifier of a deleted message
   */
  +reply_to_message_id?: number,
  /**
   * For self-destructing messages, the message's TTL (Time To Live), in seconds; 0 if
   * none. TDLib will send updateDeleteMessages or updateMessageContent once the TTL expires
   */
  +ttl?: number,
  /** Time left before the message expires, in seconds */
  +ttl_expires_in?: number,
  /** If non-zero, the user identifier of the bot through which this message was sent */
  +via_bot_user_id?: number,
  /** For channel posts, optional author signature */
  +author_signature?: string,
  /** Number of times this message was viewed */
  +views?: number,
  /**
   * Unique identifier of an album this message belongs to. Only photos and videos can
   * be grouped together in albums
   */
  +media_album_id?: number | string,
  /**
   * If non-empty, contains a human-readable description of the reason why access to this
   * message must be restricted
   */
  +restriction_reason?: string,
  /** Content of the message */
  +content?: MessageContent$Input,
  /** Reply markup for the message; may be null */
  +reply_markup?: ReplyMarkup$Input,
|}

/** Contains a list of messages */
export type messages = {|
  _: 'messages',
  /** Approximate total count of messages found */
  total_count: number,
  /** List of messages; messages may be null */
  messages: Array<message>,
|}

/** Contains a list of messages */
export type messages$Input = {|
  +_: 'messages',
  /** Approximate total count of messages found */
  +total_count?: number,
  /** List of messages; messages may be null */
  +messages?: $ReadOnlyArray<message$Input>,
|}

/** Contains a list of messages found by a search */
export type foundMessages = {|
  _: 'foundMessages',
  /** List of messages */
  messages: Array<message>,
  /** Value to pass as from_search_id to get more results */
  next_from_search_id: number | string,
|}

/** Contains a list of messages found by a search */
export type foundMessages$Input = {|
  +_: 'foundMessages',
  /** List of messages */
  +messages?: $ReadOnlyArray<message$Input>,
  /** Value to pass as from_search_id to get more results */
  +next_from_search_id?: number | string,
|}

/**
 * Notification settings applied to all private and secret chats when the corresponding
 * chat setting has a default value
 */
export type notificationSettingsScopePrivateChats = {|
  _: 'notificationSettingsScopePrivateChats',
|}

/**
 * Notification settings applied to all private and secret chats when the corresponding
 * chat setting has a default value
 */
export type notificationSettingsScopePrivateChats$Input = {|
  +_: 'notificationSettingsScopePrivateChats',
|}

/**
 * Notification settings applied to all basic groups and supergroups when the corresponding
 * chat setting has a default value
 */
export type notificationSettingsScopeGroupChats = {|
  _: 'notificationSettingsScopeGroupChats',
|}

/**
 * Notification settings applied to all basic groups and supergroups when the corresponding
 * chat setting has a default value
 */
export type notificationSettingsScopeGroupChats$Input = {|
  +_: 'notificationSettingsScopeGroupChats',
|}

/**
 * Notification settings applied to all channels when the corresponding chat setting
 * has a default value
 */
export type notificationSettingsScopeChannelChats = {|
  _: 'notificationSettingsScopeChannelChats',
|}

/**
 * Notification settings applied to all channels when the corresponding chat setting
 * has a default value
 */
export type notificationSettingsScopeChannelChats$Input = {|
  +_: 'notificationSettingsScopeChannelChats',
|}

/** Contains information about notification settings for a chat */
export type chatNotificationSettings = {|
  _: 'chatNotificationSettings',
  /**
   * If true, mute_for is ignored and the value for the relevant type of chat is used
   * instead
   */
  use_default_mute_for: boolean,
  /** Time left before notifications will be unmuted, in seconds */
  mute_for: number,
  /** If true, sound is ignored and the value for the relevant type of chat is used instead */
  use_default_sound: boolean,
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  sound: string,
  /**
   * If true, show_preview is ignored and the value for the relevant type of chat is used
   * instead
   */
  use_default_show_preview: boolean,
  /** True, if message content should be displayed in notifications */
  show_preview: boolean,
  /**
   * If true, disable_pinned_message_notifications is ignored and the value for the relevant
   * type of chat is used instead
   */
  use_default_disable_pinned_message_notifications: boolean,
  /**
   * If true, notifications for incoming pinned messages will be created as for an ordinary
   * unread message
   */
  disable_pinned_message_notifications: boolean,
  /**
   * If true, disable_mention_notifications is ignored and the value for the relevant
   * type of chat is used instead
   */
  use_default_disable_mention_notifications: boolean,
  /**
   * If true, notifications for messages with mentions will be created as for an ordinary
   * unread message
   */
  disable_mention_notifications: boolean,
|}

/** Contains information about notification settings for a chat */
export type chatNotificationSettings$Input = {|
  +_: 'chatNotificationSettings',
  /**
   * If true, mute_for is ignored and the value for the relevant type of chat is used
   * instead
   */
  +use_default_mute_for?: boolean,
  /** Time left before notifications will be unmuted, in seconds */
  +mute_for?: number,
  /** If true, sound is ignored and the value for the relevant type of chat is used instead */
  +use_default_sound?: boolean,
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  +sound?: string,
  /**
   * If true, show_preview is ignored and the value for the relevant type of chat is used
   * instead
   */
  +use_default_show_preview?: boolean,
  /** True, if message content should be displayed in notifications */
  +show_preview?: boolean,
  /**
   * If true, disable_pinned_message_notifications is ignored and the value for the relevant
   * type of chat is used instead
   */
  +use_default_disable_pinned_message_notifications?: boolean,
  /**
   * If true, notifications for incoming pinned messages will be created as for an ordinary
   * unread message
   */
  +disable_pinned_message_notifications?: boolean,
  /**
   * If true, disable_mention_notifications is ignored and the value for the relevant
   * type of chat is used instead
   */
  +use_default_disable_mention_notifications?: boolean,
  /**
   * If true, notifications for messages with mentions will be created as for an ordinary
   * unread message
   */
  +disable_mention_notifications?: boolean,
|}

/** Contains information about notification settings for several chats */
export type scopeNotificationSettings = {|
  _: 'scopeNotificationSettings',
  /** Time left before notifications will be unmuted, in seconds */
  mute_for: number,
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  sound: string,
  /** True, if message content should be displayed in notifications */
  show_preview: boolean,
  /**
   * True, if notifications for incoming pinned messages will be created as for an ordinary
   * unread message
   */
  disable_pinned_message_notifications: boolean,
  /**
   * True, if notifications for messages with mentions will be created as for an ordinary
   * unread message
   */
  disable_mention_notifications: boolean,
|}

/** Contains information about notification settings for several chats */
export type scopeNotificationSettings$Input = {|
  +_: 'scopeNotificationSettings',
  /** Time left before notifications will be unmuted, in seconds */
  +mute_for?: number,
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  +sound?: string,
  /** True, if message content should be displayed in notifications */
  +show_preview?: boolean,
  /**
   * True, if notifications for incoming pinned messages will be created as for an ordinary
   * unread message
   */
  +disable_pinned_message_notifications?: boolean,
  /**
   * True, if notifications for messages with mentions will be created as for an ordinary
   * unread message
   */
  +disable_mention_notifications?: boolean,
|}

/** Contains information about a message draft */
export type draftMessage = {|
  _: 'draftMessage',
  /** Identifier of the message to reply to; 0 if none */
  reply_to_message_id: number,
  /** Content of the message draft; this should always be of type inputMessageText */
  input_message_text: InputMessageContent,
|}

/** Contains information about a message draft */
export type draftMessage$Input = {|
  +_: 'draftMessage',
  /** Identifier of the message to reply to; 0 if none */
  +reply_to_message_id?: number,
  /** Content of the message draft; this should always be of type inputMessageText */
  +input_message_text?: InputMessageContent$Input,
|}

/** An ordinary chat with a user */
export type chatTypePrivate = {|
  _: 'chatTypePrivate',
  /** User identifier */
  user_id: number,
|}

/** An ordinary chat with a user */
export type chatTypePrivate$Input = {|
  +_: 'chatTypePrivate',
  /** User identifier */
  +user_id?: number,
|}

/** A basic group (i.e., a chat with 0-200 other users) */
export type chatTypeBasicGroup = {|
  _: 'chatTypeBasicGroup',
  /** Basic group identifier */
  basic_group_id: number,
|}

/** A basic group (i.e., a chat with 0-200 other users) */
export type chatTypeBasicGroup$Input = {|
  +_: 'chatTypeBasicGroup',
  /** Basic group identifier */
  +basic_group_id?: number,
|}

/**
 * A supergroup (i.e. a chat with up to GetOption("supergroup_max_size") other users),
 * or channel (with unlimited members)
 */
export type chatTypeSupergroup = {|
  _: 'chatTypeSupergroup',
  /** Supergroup or channel identifier */
  supergroup_id: number,
  /** True, if the supergroup is a channel */
  is_channel: boolean,
|}

/**
 * A supergroup (i.e. a chat with up to GetOption("supergroup_max_size") other users),
 * or channel (with unlimited members)
 */
export type chatTypeSupergroup$Input = {|
  +_: 'chatTypeSupergroup',
  /** Supergroup or channel identifier */
  +supergroup_id?: number,
  /** True, if the supergroup is a channel */
  +is_channel?: boolean,
|}

/** A secret chat with a user */
export type chatTypeSecret = {|
  _: 'chatTypeSecret',
  /** Secret chat identifier */
  secret_chat_id: number,
  /** User identifier of the secret chat peer */
  user_id: number,
|}

/** A secret chat with a user */
export type chatTypeSecret$Input = {|
  +_: 'chatTypeSecret',
  /** Secret chat identifier */
  +secret_chat_id?: number,
  /** User identifier of the secret chat peer */
  +user_id?: number,
|}

/** A main list of chats */
export type chatListMain = {|
  _: 'chatListMain',
|}

/** A main list of chats */
export type chatListMain$Input = {|
  +_: 'chatListMain',
|}

/**
 * A list of chats usually located at the top of the main chat list. Unmuted chats are
 * automatically moved from the Archive to the Main chat list when a new message arrives
 */
export type chatListArchive = {|
  _: 'chatListArchive',
|}

/**
 * A list of chats usually located at the top of the main chat list. Unmuted chats are
 * automatically moved from the Archive to the Main chat list when a new message arrives
 */
export type chatListArchive$Input = {|
  +_: 'chatListArchive',
|}

/** A chat. (Can be a private chat, basic group, supergroup, or secret chat) */
export type chat = {|
  _: 'chat',
  /** Chat unique identifier */
  id: number,
  /** Type of the chat */
  type: ChatType,
  /** A chat list to which the chat belongs; may be null */
  chat_list: ChatList,
  /** Chat title */
  title: string,
  /** Chat photo; may be null */
  photo: chatPhoto,
  /** Actions that non-administrator chat members are allowed to take in the chat */
  permissions: chatPermissions,
  /** Last message in the chat; may be null */
  last_message: message,
  /**
   * Descending parameter by which chats are sorted in the main chat list. If the order
   * number of two chats is the same, they must be sorted in descending order by ID. If
   * 0, the position of the chat in the list is undetermined
   */
  order: number | string,
  /** True, if the chat is pinned */
  is_pinned: boolean,
  /** True, if the chat is marked as unread */
  is_marked_as_unread: boolean,
  /** True, if the chat is sponsored by the user's MTProxy server */
  is_sponsored: boolean,
  /** True, if the chat has scheduled messages */
  has_scheduled_messages: boolean,
  /**
   * True, if the chat messages can be deleted only for the current user while other users
   * will continue to see the messages
   */
  can_be_deleted_only_for_self: boolean,
  /** True, if the chat messages can be deleted for all users */
  can_be_deleted_for_all_users: boolean,
  /** True, if the chat can be reported to Telegram moderators through reportChat */
  can_be_reported: boolean,
  /**
   * Default value of the disable_notification parameter, used when a message is sent
   * to the chat
   */
  default_disable_notification: boolean,
  /** Number of unread messages in the chat */
  unread_count: number,
  /** Identifier of the last read incoming message */
  last_read_inbox_message_id: number,
  /** Identifier of the last read outgoing message */
  last_read_outbox_message_id: number,
  /** Number of unread messages with a mention/reply in the chat */
  unread_mention_count: number,
  /** Notification settings for this chat */
  notification_settings: chatNotificationSettings,
  /**
   * Describes actions which should be possible to do through a chat action bar; may be
   * null
   */
  action_bar: ChatActionBar,
  /** Identifier of the pinned message in the chat; 0 if none */
  pinned_message_id: number,
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  reply_markup_message_id: number,
  /** A draft of a message in the chat; may be null */
  draft_message: draftMessage,
  /**
   * Contains client-specific data associated with the chat. (For example, the chat position
   * or local chat notification settings can be stored here.) Persistent if the message
   * database is used
   */
  client_data: string,
|}

/** A chat. (Can be a private chat, basic group, supergroup, or secret chat) */
export type chat$Input = {|
  +_: 'chat',
  /** Chat unique identifier */
  +id?: number,
  /** Type of the chat */
  +type?: ChatType$Input,
  /** A chat list to which the chat belongs; may be null */
  +chat_list?: ChatList$Input,
  /** Chat title */
  +title?: string,
  /** Chat photo; may be null */
  +photo?: chatPhoto$Input,
  /** Actions that non-administrator chat members are allowed to take in the chat */
  +permissions?: chatPermissions$Input,
  /** Last message in the chat; may be null */
  +last_message?: message$Input,
  /**
   * Descending parameter by which chats are sorted in the main chat list. If the order
   * number of two chats is the same, they must be sorted in descending order by ID. If
   * 0, the position of the chat in the list is undetermined
   */
  +order?: number | string,
  /** True, if the chat is pinned */
  +is_pinned?: boolean,
  /** True, if the chat is marked as unread */
  +is_marked_as_unread?: boolean,
  /** True, if the chat is sponsored by the user's MTProxy server */
  +is_sponsored?: boolean,
  /** True, if the chat has scheduled messages */
  +has_scheduled_messages?: boolean,
  /**
   * True, if the chat messages can be deleted only for the current user while other users
   * will continue to see the messages
   */
  +can_be_deleted_only_for_self?: boolean,
  /** True, if the chat messages can be deleted for all users */
  +can_be_deleted_for_all_users?: boolean,
  /** True, if the chat can be reported to Telegram moderators through reportChat */
  +can_be_reported?: boolean,
  /**
   * Default value of the disable_notification parameter, used when a message is sent
   * to the chat
   */
  +default_disable_notification?: boolean,
  /** Number of unread messages in the chat */
  +unread_count?: number,
  /** Identifier of the last read incoming message */
  +last_read_inbox_message_id?: number,
  /** Identifier of the last read outgoing message */
  +last_read_outbox_message_id?: number,
  /** Number of unread messages with a mention/reply in the chat */
  +unread_mention_count?: number,
  /** Notification settings for this chat */
  +notification_settings?: chatNotificationSettings$Input,
  /**
   * Describes actions which should be possible to do through a chat action bar; may be
   * null
   */
  +action_bar?: ChatActionBar$Input,
  /** Identifier of the pinned message in the chat; 0 if none */
  +pinned_message_id?: number,
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  +reply_markup_message_id?: number,
  /** A draft of a message in the chat; may be null */
  +draft_message?: draftMessage$Input,
  /**
   * Contains client-specific data associated with the chat. (For example, the chat position
   * or local chat notification settings can be stored here.) Persistent if the message
   * database is used
   */
  +client_data?: string,
|}

/** Represents a list of chats */
export type chats = {|
  _: 'chats',
  /** List of chat identifiers */
  chat_ids: Array<number>,
|}

/** Represents a list of chats */
export type chats$Input = {|
  +_: 'chats',
  /** List of chat identifiers */
  +chat_ids?: $ReadOnlyArray<number>,
|}

/** Describes a chat located nearby */
export type chatNearby = {|
  _: 'chatNearby',
  /** Chat identifier */
  chat_id: number,
  /** Distance to the chat location in meters */
  distance: number,
|}

/** Describes a chat located nearby */
export type chatNearby$Input = {|
  +_: 'chatNearby',
  /** Chat identifier */
  +chat_id?: number,
  /** Distance to the chat location in meters */
  +distance?: number,
|}

/** Represents a list of chats located nearby */
export type chatsNearby = {|
  _: 'chatsNearby',
  /** List of users nearby */
  users_nearby: Array<chatNearby>,
  /** List of location-based supergroups nearby */
  supergroups_nearby: Array<chatNearby>,
|}

/** Represents a list of chats located nearby */
export type chatsNearby$Input = {|
  +_: 'chatsNearby',
  /** List of users nearby */
  +users_nearby?: $ReadOnlyArray<chatNearby$Input>,
  /** List of location-based supergroups nearby */
  +supergroups_nearby?: $ReadOnlyArray<chatNearby$Input>,
|}

/** Contains a chat invite link */
export type chatInviteLink = {|
  _: 'chatInviteLink',
  /** Chat invite link */
  invite_link: string,
|}

/** Contains a chat invite link */
export type chatInviteLink$Input = {|
  +_: 'chatInviteLink',
  /** Chat invite link */
  +invite_link?: string,
|}

/** Contains information about a chat invite link */
export type chatInviteLinkInfo = {|
  _: 'chatInviteLinkInfo',
  /** Chat identifier of the invite link; 0 if the user is not a member of this chat */
  chat_id: number,
  /** Contains information about the type of the chat */
  type: ChatType,
  /** Title of the chat */
  title: string,
  /** Chat photo; may be null */
  photo: chatPhoto,
  /** Number of members */
  member_count: number,
  /** User identifiers of some chat members that may be known to the current user */
  member_user_ids: Array<number>,
  /**
   * True, if the chat is a public supergroup or channel, i.e. it has a username or it
   * is a location-based supergroup
   */
  is_public: boolean,
|}

/** Contains information about a chat invite link */
export type chatInviteLinkInfo$Input = {|
  +_: 'chatInviteLinkInfo',
  /** Chat identifier of the invite link; 0 if the user is not a member of this chat */
  +chat_id?: number,
  /** Contains information about the type of the chat */
  +type?: ChatType$Input,
  /** Title of the chat */
  +title?: string,
  /** Chat photo; may be null */
  +photo?: chatPhoto$Input,
  /** Number of members */
  +member_count?: number,
  /** User identifiers of some chat members that may be known to the current user */
  +member_user_ids?: $ReadOnlyArray<number>,
  /**
   * True, if the chat is a public supergroup or channel, i.e. it has a username or it
   * is a location-based supergroup
   */
  +is_public?: boolean,
|}

/** The chat is public, because it has username */
export type publicChatTypeHasUsername = {|
  _: 'publicChatTypeHasUsername',
|}

/** The chat is public, because it has username */
export type publicChatTypeHasUsername$Input = {|
  +_: 'publicChatTypeHasUsername',
|}

/** The chat is public, because it is a location-based supergroup */
export type publicChatTypeIsLocationBased = {|
  _: 'publicChatTypeIsLocationBased',
|}

/** The chat is public, because it is a location-based supergroup */
export type publicChatTypeIsLocationBased$Input = {|
  +_: 'publicChatTypeIsLocationBased',
|}

/** The chat can be reported as spam using the method reportChat with the reason chatReportReasonSpam */
export type chatActionBarReportSpam = {|
  _: 'chatActionBarReportSpam',
|}

/** The chat can be reported as spam using the method reportChat with the reason chatReportReasonSpam */
export type chatActionBarReportSpam$Input = {|
  +_: 'chatActionBarReportSpam',
|}

/**
 * The chat is a location-based supergroup, which can be reported as having unrelated
 * location using the method reportChat with the reason chatReportReasonUnrelatedLocation
 */
export type chatActionBarReportUnrelatedLocation = {|
  _: 'chatActionBarReportUnrelatedLocation',
|}

/**
 * The chat is a location-based supergroup, which can be reported as having unrelated
 * location using the method reportChat with the reason chatReportReasonUnrelatedLocation
 */
export type chatActionBarReportUnrelatedLocation$Input = {|
  +_: 'chatActionBarReportUnrelatedLocation',
|}

/**
 * The chat is a private or secret chat, which can be reported using the method reportChat,
 * or the other user can be added to the contact list using the method addContact, or
 * the other user can be blocked using the method blockUser
 */
export type chatActionBarReportAddBlock = {|
  _: 'chatActionBarReportAddBlock',
|}

/**
 * The chat is a private or secret chat, which can be reported using the method reportChat,
 * or the other user can be added to the contact list using the method addContact, or
 * the other user can be blocked using the method blockUser
 */
export type chatActionBarReportAddBlock$Input = {|
  +_: 'chatActionBarReportAddBlock',
|}

/**
 * The chat is a private or secret chat and the other user can be added to the contact
 * list using the method addContact
 */
export type chatActionBarAddContact = {|
  _: 'chatActionBarAddContact',
|}

/**
 * The chat is a private or secret chat and the other user can be added to the contact
 * list using the method addContact
 */
export type chatActionBarAddContact$Input = {|
  +_: 'chatActionBarAddContact',
|}

/**
 * The chat is a private or secret chat with a mutual contact and the user's phone number
 * can be shared with the other user using the method sharePhoneNumber
 */
export type chatActionBarSharePhoneNumber = {|
  _: 'chatActionBarSharePhoneNumber',
|}

/**
 * The chat is a private or secret chat with a mutual contact and the user's phone number
 * can be shared with the other user using the method sharePhoneNumber
 */
export type chatActionBarSharePhoneNumber$Input = {|
  +_: 'chatActionBarSharePhoneNumber',
|}

/** A simple button, with text that should be sent when the button is pressed */
export type keyboardButtonTypeText = {|
  _: 'keyboardButtonTypeText',
|}

/** A simple button, with text that should be sent when the button is pressed */
export type keyboardButtonTypeText$Input = {|
  +_: 'keyboardButtonTypeText',
|}

/**
 * A button that sends the user's phone number when pressed; available only in private
 * chats
 */
export type keyboardButtonTypeRequestPhoneNumber = {|
  _: 'keyboardButtonTypeRequestPhoneNumber',
|}

/**
 * A button that sends the user's phone number when pressed; available only in private
 * chats
 */
export type keyboardButtonTypeRequestPhoneNumber$Input = {|
  +_: 'keyboardButtonTypeRequestPhoneNumber',
|}

/** A button that sends the user's location when pressed; available only in private chats */
export type keyboardButtonTypeRequestLocation = {|
  _: 'keyboardButtonTypeRequestLocation',
|}

/** A button that sends the user's location when pressed; available only in private chats */
export type keyboardButtonTypeRequestLocation$Input = {|
  +_: 'keyboardButtonTypeRequestLocation',
|}

/**
 * A button that allows the user to create and send a poll when pressed; available only
 * in private chats
 */
export type keyboardButtonTypeRequestPoll = {|
  _: 'keyboardButtonTypeRequestPoll',
  /** If true, only regular polls must be allowed to create */
  force_regular: boolean,
  /** If true, only polls in quiz mode must be allowed to create */
  force_quiz: boolean,
|}

/**
 * A button that allows the user to create and send a poll when pressed; available only
 * in private chats
 */
export type keyboardButtonTypeRequestPoll$Input = {|
  +_: 'keyboardButtonTypeRequestPoll',
  /** If true, only regular polls must be allowed to create */
  +force_regular?: boolean,
  /** If true, only polls in quiz mode must be allowed to create */
  +force_quiz?: boolean,
|}

/** Represents a single button in a bot keyboard */
export type keyboardButton = {|
  _: 'keyboardButton',
  /** Text of the button */
  text: string,
  /** Type of the button */
  type: KeyboardButtonType,
|}

/** Represents a single button in a bot keyboard */
export type keyboardButton$Input = {|
  +_: 'keyboardButton',
  /** Text of the button */
  +text?: string,
  /** Type of the button */
  +type?: KeyboardButtonType$Input,
|}

/** A button that opens a specified URL */
export type inlineKeyboardButtonTypeUrl = {|
  _: 'inlineKeyboardButtonTypeUrl',
  /** HTTP or tg:// URL to open */
  url: string,
|}

/** A button that opens a specified URL */
export type inlineKeyboardButtonTypeUrl$Input = {|
  +_: 'inlineKeyboardButtonTypeUrl',
  /** HTTP or tg:// URL to open */
  +url?: string,
|}

/**
 * A button that opens a specified URL and automatically logs in in current user if
 * they allowed to do that
 */
export type inlineKeyboardButtonTypeLoginUrl = {|
  _: 'inlineKeyboardButtonTypeLoginUrl',
  /** An HTTP URL to open */
  url: string,
  /** Unique button identifier */
  id: number,
  /** If non-empty, new text of the button in forwarded messages */
  forward_text: string,
|}

/**
 * A button that opens a specified URL and automatically logs in in current user if
 * they allowed to do that
 */
export type inlineKeyboardButtonTypeLoginUrl$Input = {|
  +_: 'inlineKeyboardButtonTypeLoginUrl',
  /** An HTTP URL to open */
  +url?: string,
  /** Unique button identifier */
  +id?: number,
  /** If non-empty, new text of the button in forwarded messages */
  +forward_text?: string,
|}

/** A button that sends a special callback query to a bot */
export type inlineKeyboardButtonTypeCallback = {|
  _: 'inlineKeyboardButtonTypeCallback',
  /** Data to be sent to the bot via a callback query */
  data: string,
|}

/** A button that sends a special callback query to a bot */
export type inlineKeyboardButtonTypeCallback$Input = {|
  +_: 'inlineKeyboardButtonTypeCallback',
  /** Data to be sent to the bot via a callback query */
  +data?: string,
|}

/**
 * A button with a game that sends a special callback query to a bot. This button must
 * be in the first column and row of the keyboard and can be attached only to a message
 * with content of the type messageGame
 */
export type inlineKeyboardButtonTypeCallbackGame = {|
  _: 'inlineKeyboardButtonTypeCallbackGame',
|}

/**
 * A button with a game that sends a special callback query to a bot. This button must
 * be in the first column and row of the keyboard and can be attached only to a message
 * with content of the type messageGame
 */
export type inlineKeyboardButtonTypeCallbackGame$Input = {|
  +_: 'inlineKeyboardButtonTypeCallbackGame',
|}

/** A button that forces an inline query to the bot to be inserted in the input field */
export type inlineKeyboardButtonTypeSwitchInline = {|
  _: 'inlineKeyboardButtonTypeSwitchInline',
  /** Inline query to be sent to the bot */
  query: string,
  /** True, if the inline query should be sent from the current chat */
  in_current_chat: boolean,
|}

/** A button that forces an inline query to the bot to be inserted in the input field */
export type inlineKeyboardButtonTypeSwitchInline$Input = {|
  +_: 'inlineKeyboardButtonTypeSwitchInline',
  /** Inline query to be sent to the bot */
  +query?: string,
  /** True, if the inline query should be sent from the current chat */
  +in_current_chat?: boolean,
|}

/**
 * A button to buy something. This button must be in the first column and row of the
 * keyboard and can be attached only to a message with content of the type messageInvoice
 */
export type inlineKeyboardButtonTypeBuy = {|
  _: 'inlineKeyboardButtonTypeBuy',
|}

/**
 * A button to buy something. This button must be in the first column and row of the
 * keyboard and can be attached only to a message with content of the type messageInvoice
 */
export type inlineKeyboardButtonTypeBuy$Input = {|
  +_: 'inlineKeyboardButtonTypeBuy',
|}

/** Represents a single button in an inline keyboard */
export type inlineKeyboardButton = {|
  _: 'inlineKeyboardButton',
  /** Text of the button */
  text: string,
  /** Type of the button */
  type: InlineKeyboardButtonType,
|}

/** Represents a single button in an inline keyboard */
export type inlineKeyboardButton$Input = {|
  +_: 'inlineKeyboardButton',
  /** Text of the button */
  +text?: string,
  /** Type of the button */
  +type?: InlineKeyboardButtonType$Input,
|}

/**
 * Instructs clients to remove the keyboard once this message has been received. This
 * kind of keyboard can't be received in an incoming message; instead, UpdateChatReplyMarkup
 * with message_id == 0 will be sent
 */
export type replyMarkupRemoveKeyboard = {|
  _: 'replyMarkupRemoveKeyboard',
  /**
   * True, if the keyboard is removed only for the mentioned users or the target user
   * of a reply
   */
  is_personal: boolean,
|}

/**
 * Instructs clients to remove the keyboard once this message has been received. This
 * kind of keyboard can't be received in an incoming message; instead, UpdateChatReplyMarkup
 * with message_id == 0 will be sent
 */
export type replyMarkupRemoveKeyboard$Input = {|
  +_: 'replyMarkupRemoveKeyboard',
  /**
   * True, if the keyboard is removed only for the mentioned users or the target user
   * of a reply
   */
  +is_personal?: boolean,
|}

/** Instructs clients to force a reply to this message */
export type replyMarkupForceReply = {|
  _: 'replyMarkupForceReply',
  /**
   * True, if a forced reply must automatically be shown to the current user. For outgoing
   * messages, specify true to show the forced reply only for the mentioned users and
   * for the target user of a reply
   */
  is_personal: boolean,
|}

/** Instructs clients to force a reply to this message */
export type replyMarkupForceReply$Input = {|
  +_: 'replyMarkupForceReply',
  /**
   * True, if a forced reply must automatically be shown to the current user. For outgoing
   * messages, specify true to show the forced reply only for the mentioned users and
   * for the target user of a reply
   */
  +is_personal?: boolean,
|}

/** Contains a custom keyboard layout to quickly reply to bots */
export type replyMarkupShowKeyboard = {|
  _: 'replyMarkupShowKeyboard',
  /** A list of rows of bot keyboard buttons */
  rows: Array<Array<keyboardButton>>,
  /** True, if the client needs to resize the keyboard vertically */
  resize_keyboard: boolean,
  /** True, if the client needs to hide the keyboard after use */
  one_time: boolean,
  /**
   * True, if the keyboard must automatically be shown to the current user. For outgoing
   * messages, specify true to show the keyboard only for the mentioned users and for
   * the target user of a reply
   */
  is_personal: boolean,
|}

/** Contains a custom keyboard layout to quickly reply to bots */
export type replyMarkupShowKeyboard$Input = {|
  +_: 'replyMarkupShowKeyboard',
  /** A list of rows of bot keyboard buttons */
  +rows?: $ReadOnlyArray<$ReadOnlyArray<keyboardButton$Input>>,
  /** True, if the client needs to resize the keyboard vertically */
  +resize_keyboard?: boolean,
  /** True, if the client needs to hide the keyboard after use */
  +one_time?: boolean,
  /**
   * True, if the keyboard must automatically be shown to the current user. For outgoing
   * messages, specify true to show the keyboard only for the mentioned users and for
   * the target user of a reply
   */
  +is_personal?: boolean,
|}

/** Contains an inline keyboard layout */
export type replyMarkupInlineKeyboard = {|
  _: 'replyMarkupInlineKeyboard',
  /** A list of rows of inline keyboard buttons */
  rows: Array<Array<inlineKeyboardButton>>,
|}

/** Contains an inline keyboard layout */
export type replyMarkupInlineKeyboard$Input = {|
  +_: 'replyMarkupInlineKeyboard',
  /** A list of rows of inline keyboard buttons */
  +rows?: $ReadOnlyArray<$ReadOnlyArray<inlineKeyboardButton$Input>>,
|}

/** An HTTP url needs to be open */
export type loginUrlInfoOpen = {|
  _: 'loginUrlInfoOpen',
  /** The URL to open */
  url: string,
  /** True, if there is no need to show an ordinary open URL confirm */
  skip_confirm: boolean,
|}

/** An HTTP url needs to be open */
export type loginUrlInfoOpen$Input = {|
  +_: 'loginUrlInfoOpen',
  /** The URL to open */
  +url?: string,
  /** True, if there is no need to show an ordinary open URL confirm */
  +skip_confirm?: boolean,
|}

/** An authorization confirmation dialog needs to be shown to the user */
export type loginUrlInfoRequestConfirmation = {|
  _: 'loginUrlInfoRequestConfirmation',
  /** An HTTP URL to be opened */
  url: string,
  /** A domain of the URL */
  domain: string,
  /** User identifier of a bot linked with the website */
  bot_user_id: number,
  /**
   * True, if the user needs to be requested to give the permission to the bot to send
   * them messages
   */
  request_write_access: boolean,
|}

/** An authorization confirmation dialog needs to be shown to the user */
export type loginUrlInfoRequestConfirmation$Input = {|
  +_: 'loginUrlInfoRequestConfirmation',
  /** An HTTP URL to be opened */
  +url?: string,
  /** A domain of the URL */
  +domain?: string,
  /** User identifier of a bot linked with the website */
  +bot_user_id?: number,
  /**
   * True, if the user needs to be requested to give the permission to the bot to send
   * them messages
   */
  +request_write_access?: boolean,
|}

/** A plain text */
export type richTextPlain = {|
  _: 'richTextPlain',
  /** Text */
  text: string,
|}

/** A plain text */
export type richTextPlain$Input = {|
  +_: 'richTextPlain',
  /** Text */
  +text?: string,
|}

/** A bold rich text */
export type richTextBold = {|
  _: 'richTextBold',
  /** Text */
  text: RichText,
|}

/** A bold rich text */
export type richTextBold$Input = {|
  +_: 'richTextBold',
  /** Text */
  +text?: RichText$Input,
|}

/** An italicized rich text */
export type richTextItalic = {|
  _: 'richTextItalic',
  /** Text */
  text: RichText,
|}

/** An italicized rich text */
export type richTextItalic$Input = {|
  +_: 'richTextItalic',
  /** Text */
  +text?: RichText$Input,
|}

/** An underlined rich text */
export type richTextUnderline = {|
  _: 'richTextUnderline',
  /** Text */
  text: RichText,
|}

/** An underlined rich text */
export type richTextUnderline$Input = {|
  +_: 'richTextUnderline',
  /** Text */
  +text?: RichText$Input,
|}

/** A strikethrough rich text */
export type richTextStrikethrough = {|
  _: 'richTextStrikethrough',
  /** Text */
  text: RichText,
|}

/** A strikethrough rich text */
export type richTextStrikethrough$Input = {|
  +_: 'richTextStrikethrough',
  /** Text */
  +text?: RichText$Input,
|}

/** A fixed-width rich text */
export type richTextFixed = {|
  _: 'richTextFixed',
  /** Text */
  text: RichText,
|}

/** A fixed-width rich text */
export type richTextFixed$Input = {|
  +_: 'richTextFixed',
  /** Text */
  +text?: RichText$Input,
|}

/** A rich text URL link */
export type richTextUrl = {|
  _: 'richTextUrl',
  /** Text */
  text: RichText,
  /** URL */
  url: string,
  /** True, if the URL has cached instant view server-side */
  is_cached: boolean,
|}

/** A rich text URL link */
export type richTextUrl$Input = {|
  +_: 'richTextUrl',
  /** Text */
  +text?: RichText$Input,
  /** URL */
  +url?: string,
  /** True, if the URL has cached instant view server-side */
  +is_cached?: boolean,
|}

/** A rich text email link */
export type richTextEmailAddress = {|
  _: 'richTextEmailAddress',
  /** Text */
  text: RichText,
  /** Email address */
  email_address: string,
|}

/** A rich text email link */
export type richTextEmailAddress$Input = {|
  +_: 'richTextEmailAddress',
  /** Text */
  +text?: RichText$Input,
  /** Email address */
  +email_address?: string,
|}

/** A subscript rich text */
export type richTextSubscript = {|
  _: 'richTextSubscript',
  /** Text */
  text: RichText,
|}

/** A subscript rich text */
export type richTextSubscript$Input = {|
  +_: 'richTextSubscript',
  /** Text */
  +text?: RichText$Input,
|}

/** A superscript rich text */
export type richTextSuperscript = {|
  _: 'richTextSuperscript',
  /** Text */
  text: RichText,
|}

/** A superscript rich text */
export type richTextSuperscript$Input = {|
  +_: 'richTextSuperscript',
  /** Text */
  +text?: RichText$Input,
|}

/** A marked rich text */
export type richTextMarked = {|
  _: 'richTextMarked',
  /** Text */
  text: RichText,
|}

/** A marked rich text */
export type richTextMarked$Input = {|
  +_: 'richTextMarked',
  /** Text */
  +text?: RichText$Input,
|}

/** A rich text phone number */
export type richTextPhoneNumber = {|
  _: 'richTextPhoneNumber',
  /** Text */
  text: RichText,
  /** Phone number */
  phone_number: string,
|}

/** A rich text phone number */
export type richTextPhoneNumber$Input = {|
  +_: 'richTextPhoneNumber',
  /** Text */
  +text?: RichText$Input,
  /** Phone number */
  +phone_number?: string,
|}

/** A small image inside the text */
export type richTextIcon = {|
  _: 'richTextIcon',
  /** The image represented as a document. The image can be in GIF, JPEG or PNG format */
  document: document,
  /** Width of a bounding box in which the image should be shown; 0 if unknown */
  width: number,
  /** Height of a bounding box in which the image should be shown; 0 if unknown */
  height: number,
|}

/** A small image inside the text */
export type richTextIcon$Input = {|
  +_: 'richTextIcon',
  /** The image represented as a document. The image can be in GIF, JPEG or PNG format */
  +document?: document$Input,
  /** Width of a bounding box in which the image should be shown; 0 if unknown */
  +width?: number,
  /** Height of a bounding box in which the image should be shown; 0 if unknown */
  +height?: number,
|}

/** A rich text anchor */
export type richTextAnchor = {|
  _: 'richTextAnchor',
  /** Text */
  text: RichText,
  /** Anchor name */
  name: string,
|}

/** A rich text anchor */
export type richTextAnchor$Input = {|
  +_: 'richTextAnchor',
  /** Text */
  +text?: RichText$Input,
  /** Anchor name */
  +name?: string,
|}

/** A concatenation of rich texts */
export type richTexts = {|
  _: 'richTexts',
  /** Texts */
  texts: Array<RichText>,
|}

/** A concatenation of rich texts */
export type richTexts$Input = {|
  +_: 'richTexts',
  /** Texts */
  +texts?: $ReadOnlyArray<RichText$Input>,
|}

/**
 * Contains a caption of an instant view web page block, consisting of a text and a
 * trailing credit
 */
export type pageBlockCaption = {|
  _: 'pageBlockCaption',
  /** Content of the caption */
  text: RichText,
  /** Block credit (like HTML tag <cite>) */
  credit: RichText,
|}

/**
 * Contains a caption of an instant view web page block, consisting of a text and a
 * trailing credit
 */
export type pageBlockCaption$Input = {|
  +_: 'pageBlockCaption',
  /** Content of the caption */
  +text?: RichText$Input,
  /** Block credit (like HTML tag <cite>) */
  +credit?: RichText$Input,
|}

/** Describes an item of a list page block */
export type pageBlockListItem = {|
  _: 'pageBlockListItem',
  /** Item label */
  label: string,
  /** Item blocks */
  page_blocks: Array<PageBlock>,
|}

/** Describes an item of a list page block */
export type pageBlockListItem$Input = {|
  +_: 'pageBlockListItem',
  /** Item label */
  +label?: string,
  /** Item blocks */
  +page_blocks?: $ReadOnlyArray<PageBlock$Input>,
|}

/** The content should be left-aligned */
export type pageBlockHorizontalAlignmentLeft = {|
  _: 'pageBlockHorizontalAlignmentLeft',
|}

/** The content should be left-aligned */
export type pageBlockHorizontalAlignmentLeft$Input = {|
  +_: 'pageBlockHorizontalAlignmentLeft',
|}

/** The content should be center-aligned */
export type pageBlockHorizontalAlignmentCenter = {|
  _: 'pageBlockHorizontalAlignmentCenter',
|}

/** The content should be center-aligned */
export type pageBlockHorizontalAlignmentCenter$Input = {|
  +_: 'pageBlockHorizontalAlignmentCenter',
|}

/** The content should be right-aligned */
export type pageBlockHorizontalAlignmentRight = {|
  _: 'pageBlockHorizontalAlignmentRight',
|}

/** The content should be right-aligned */
export type pageBlockHorizontalAlignmentRight$Input = {|
  +_: 'pageBlockHorizontalAlignmentRight',
|}

/** The content should be top-aligned */
export type pageBlockVerticalAlignmentTop = {|
  _: 'pageBlockVerticalAlignmentTop',
|}

/** The content should be top-aligned */
export type pageBlockVerticalAlignmentTop$Input = {|
  +_: 'pageBlockVerticalAlignmentTop',
|}

/** The content should be middle-aligned */
export type pageBlockVerticalAlignmentMiddle = {|
  _: 'pageBlockVerticalAlignmentMiddle',
|}

/** The content should be middle-aligned */
export type pageBlockVerticalAlignmentMiddle$Input = {|
  +_: 'pageBlockVerticalAlignmentMiddle',
|}

/** The content should be bottom-aligned */
export type pageBlockVerticalAlignmentBottom = {|
  _: 'pageBlockVerticalAlignmentBottom',
|}

/** The content should be bottom-aligned */
export type pageBlockVerticalAlignmentBottom$Input = {|
  +_: 'pageBlockVerticalAlignmentBottom',
|}

/** Represents a cell of a table */
export type pageBlockTableCell = {|
  _: 'pageBlockTableCell',
  /** Cell text; may be null. If the text is null, then the cell should be invisible */
  text: RichText,
  /** True, if it is a header cell */
  is_header: boolean,
  /** The number of columns the cell should span */
  colspan: number,
  /** The number of rows the cell should span */
  rowspan: number,
  /** Horizontal cell content alignment */
  align: PageBlockHorizontalAlignment,
  /** Vertical cell content alignment */
  valign: PageBlockVerticalAlignment,
|}

/** Represents a cell of a table */
export type pageBlockTableCell$Input = {|
  +_: 'pageBlockTableCell',
  /** Cell text; may be null. If the text is null, then the cell should be invisible */
  +text?: RichText$Input,
  /** True, if it is a header cell */
  +is_header?: boolean,
  /** The number of columns the cell should span */
  +colspan?: number,
  /** The number of rows the cell should span */
  +rowspan?: number,
  /** Horizontal cell content alignment */
  +align?: PageBlockHorizontalAlignment$Input,
  /** Vertical cell content alignment */
  +valign?: PageBlockVerticalAlignment$Input,
|}

/** Contains information about a related article */
export type pageBlockRelatedArticle = {|
  _: 'pageBlockRelatedArticle',
  /** Related article URL */
  url: string,
  /** Article title; may be empty */
  title: string,
  /** Article description; may be empty */
  description: string,
  /** Article photo; may be null */
  photo: photo,
  /** Article author; may be empty */
  author: string,
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  publish_date: number,
|}

/** Contains information about a related article */
export type pageBlockRelatedArticle$Input = {|
  +_: 'pageBlockRelatedArticle',
  /** Related article URL */
  +url?: string,
  /** Article title; may be empty */
  +title?: string,
  /** Article description; may be empty */
  +description?: string,
  /** Article photo; may be null */
  +photo?: photo$Input,
  /** Article author; may be empty */
  +author?: string,
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  +publish_date?: number,
|}

/** The title of a page */
export type pageBlockTitle = {|
  _: 'pageBlockTitle',
  /** Title */
  title: RichText,
|}

/** The title of a page */
export type pageBlockTitle$Input = {|
  +_: 'pageBlockTitle',
  /** Title */
  +title?: RichText$Input,
|}

/** The subtitle of a page */
export type pageBlockSubtitle = {|
  _: 'pageBlockSubtitle',
  /** Subtitle */
  subtitle: RichText,
|}

/** The subtitle of a page */
export type pageBlockSubtitle$Input = {|
  +_: 'pageBlockSubtitle',
  /** Subtitle */
  +subtitle?: RichText$Input,
|}

/** The author and publishing date of a page */
export type pageBlockAuthorDate = {|
  _: 'pageBlockAuthorDate',
  /** Author */
  author: RichText,
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  publish_date: number,
|}

/** The author and publishing date of a page */
export type pageBlockAuthorDate$Input = {|
  +_: 'pageBlockAuthorDate',
  /** Author */
  +author?: RichText$Input,
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  +publish_date?: number,
|}

/** A header */
export type pageBlockHeader = {|
  _: 'pageBlockHeader',
  /** Header */
  header: RichText,
|}

/** A header */
export type pageBlockHeader$Input = {|
  +_: 'pageBlockHeader',
  /** Header */
  +header?: RichText$Input,
|}

/** A subheader */
export type pageBlockSubheader = {|
  _: 'pageBlockSubheader',
  /** Subheader */
  subheader: RichText,
|}

/** A subheader */
export type pageBlockSubheader$Input = {|
  +_: 'pageBlockSubheader',
  /** Subheader */
  +subheader?: RichText$Input,
|}

/** A kicker */
export type pageBlockKicker = {|
  _: 'pageBlockKicker',
  /** Kicker */
  kicker: RichText,
|}

/** A kicker */
export type pageBlockKicker$Input = {|
  +_: 'pageBlockKicker',
  /** Kicker */
  +kicker?: RichText$Input,
|}

/** A text paragraph */
export type pageBlockParagraph = {|
  _: 'pageBlockParagraph',
  /** Paragraph text */
  text: RichText,
|}

/** A text paragraph */
export type pageBlockParagraph$Input = {|
  +_: 'pageBlockParagraph',
  /** Paragraph text */
  +text?: RichText$Input,
|}

/** A preformatted text paragraph */
export type pageBlockPreformatted = {|
  _: 'pageBlockPreformatted',
  /** Paragraph text */
  text: RichText,
  /** Programming language for which the text should be formatted */
  language: string,
|}

/** A preformatted text paragraph */
export type pageBlockPreformatted$Input = {|
  +_: 'pageBlockPreformatted',
  /** Paragraph text */
  +text?: RichText$Input,
  /** Programming language for which the text should be formatted */
  +language?: string,
|}

/** The footer of a page */
export type pageBlockFooter = {|
  _: 'pageBlockFooter',
  /** Footer */
  footer: RichText,
|}

/** The footer of a page */
export type pageBlockFooter$Input = {|
  +_: 'pageBlockFooter',
  /** Footer */
  +footer?: RichText$Input,
|}

/** An empty block separating a page */
export type pageBlockDivider = {|
  _: 'pageBlockDivider',
|}

/** An empty block separating a page */
export type pageBlockDivider$Input = {|
  +_: 'pageBlockDivider',
|}

/**
 * An invisible anchor on a page, which can be used in a URL to open the page from the
 * specified anchor
 */
export type pageBlockAnchor = {|
  _: 'pageBlockAnchor',
  /** Name of the anchor */
  name: string,
|}

/**
 * An invisible anchor on a page, which can be used in a URL to open the page from the
 * specified anchor
 */
export type pageBlockAnchor$Input = {|
  +_: 'pageBlockAnchor',
  /** Name of the anchor */
  +name?: string,
|}

/** A list of data blocks */
export type pageBlockList = {|
  _: 'pageBlockList',
  /** The items of the list */
  items: Array<pageBlockListItem>,
|}

/** A list of data blocks */
export type pageBlockList$Input = {|
  +_: 'pageBlockList',
  /** The items of the list */
  +items?: $ReadOnlyArray<pageBlockListItem$Input>,
|}

/** A block quote */
export type pageBlockBlockQuote = {|
  _: 'pageBlockBlockQuote',
  /** Quote text */
  text: RichText,
  /** Quote credit */
  credit: RichText,
|}

/** A block quote */
export type pageBlockBlockQuote$Input = {|
  +_: 'pageBlockBlockQuote',
  /** Quote text */
  +text?: RichText$Input,
  /** Quote credit */
  +credit?: RichText$Input,
|}

/** A pull quote */
export type pageBlockPullQuote = {|
  _: 'pageBlockPullQuote',
  /** Quote text */
  text: RichText,
  /** Quote credit */
  credit: RichText,
|}

/** A pull quote */
export type pageBlockPullQuote$Input = {|
  +_: 'pageBlockPullQuote',
  /** Quote text */
  +text?: RichText$Input,
  /** Quote credit */
  +credit?: RichText$Input,
|}

/** An animation */
export type pageBlockAnimation = {|
  _: 'pageBlockAnimation',
  /** Animation file; may be null */
  animation: animation,
  /** Animation caption */
  caption: pageBlockCaption,
  /** True, if the animation should be played automatically */
  need_autoplay: boolean,
|}

/** An animation */
export type pageBlockAnimation$Input = {|
  +_: 'pageBlockAnimation',
  /** Animation file; may be null */
  +animation?: animation$Input,
  /** Animation caption */
  +caption?: pageBlockCaption$Input,
  /** True, if the animation should be played automatically */
  +need_autoplay?: boolean,
|}

/** An audio file */
export type pageBlockAudio = {|
  _: 'pageBlockAudio',
  /** Audio file; may be null */
  audio: audio,
  /** Audio file caption */
  caption: pageBlockCaption,
|}

/** An audio file */
export type pageBlockAudio$Input = {|
  +_: 'pageBlockAudio',
  /** Audio file; may be null */
  +audio?: audio$Input,
  /** Audio file caption */
  +caption?: pageBlockCaption$Input,
|}

/** A photo */
export type pageBlockPhoto = {|
  _: 'pageBlockPhoto',
  /** Photo file; may be null */
  photo: photo,
  /** Photo caption */
  caption: pageBlockCaption,
  /** URL that needs to be opened when the photo is clicked */
  url: string,
|}

/** A photo */
export type pageBlockPhoto$Input = {|
  +_: 'pageBlockPhoto',
  /** Photo file; may be null */
  +photo?: photo$Input,
  /** Photo caption */
  +caption?: pageBlockCaption$Input,
  /** URL that needs to be opened when the photo is clicked */
  +url?: string,
|}

/** A video */
export type pageBlockVideo = {|
  _: 'pageBlockVideo',
  /** Video file; may be null */
  video: video,
  /** Video caption */
  caption: pageBlockCaption,
  /** True, if the video should be played automatically */
  need_autoplay: boolean,
  /** True, if the video should be looped */
  is_looped: boolean,
|}

/** A video */
export type pageBlockVideo$Input = {|
  +_: 'pageBlockVideo',
  /** Video file; may be null */
  +video?: video$Input,
  /** Video caption */
  +caption?: pageBlockCaption$Input,
  /** True, if the video should be played automatically */
  +need_autoplay?: boolean,
  /** True, if the video should be looped */
  +is_looped?: boolean,
|}

/** A voice note */
export type pageBlockVoiceNote = {|
  _: 'pageBlockVoiceNote',
  /** Voice note; may be null */
  voice_note: voiceNote,
  /** Voice note caption */
  caption: pageBlockCaption,
|}

/** A voice note */
export type pageBlockVoiceNote$Input = {|
  +_: 'pageBlockVoiceNote',
  /** Voice note; may be null */
  +voice_note?: voiceNote$Input,
  /** Voice note caption */
  +caption?: pageBlockCaption$Input,
|}

/** A page cover */
export type pageBlockCover = {|
  _: 'pageBlockCover',
  /** Cover */
  cover: PageBlock,
|}

/** A page cover */
export type pageBlockCover$Input = {|
  +_: 'pageBlockCover',
  /** Cover */
  +cover?: PageBlock$Input,
|}

/** An embedded web page */
export type pageBlockEmbedded = {|
  _: 'pageBlockEmbedded',
  /** Web page URL, if available */
  url: string,
  /** HTML-markup of the embedded page */
  html: string,
  /** Poster photo, if available; may be null */
  poster_photo: photo,
  /** Block width; 0 if unknown */
  width: number,
  /** Block height; 0 if unknown */
  height: number,
  /** Block caption */
  caption: pageBlockCaption,
  /** True, if the block should be full width */
  is_full_width: boolean,
  /** True, if scrolling should be allowed */
  allow_scrolling: boolean,
|}

/** An embedded web page */
export type pageBlockEmbedded$Input = {|
  +_: 'pageBlockEmbedded',
  /** Web page URL, if available */
  +url?: string,
  /** HTML-markup of the embedded page */
  +html?: string,
  /** Poster photo, if available; may be null */
  +poster_photo?: photo$Input,
  /** Block width; 0 if unknown */
  +width?: number,
  /** Block height; 0 if unknown */
  +height?: number,
  /** Block caption */
  +caption?: pageBlockCaption$Input,
  /** True, if the block should be full width */
  +is_full_width?: boolean,
  /** True, if scrolling should be allowed */
  +allow_scrolling?: boolean,
|}

/** An embedded post */
export type pageBlockEmbeddedPost = {|
  _: 'pageBlockEmbeddedPost',
  /** Web page URL */
  url: string,
  /** Post author */
  author: string,
  /** Post author photo; may be null */
  author_photo: photo,
  /** Point in time (Unix timestamp) when the post was created; 0 if unknown */
  date: number,
  /** Post content */
  page_blocks: Array<PageBlock>,
  /** Post caption */
  caption: pageBlockCaption,
|}

/** An embedded post */
export type pageBlockEmbeddedPost$Input = {|
  +_: 'pageBlockEmbeddedPost',
  /** Web page URL */
  +url?: string,
  /** Post author */
  +author?: string,
  /** Post author photo; may be null */
  +author_photo?: photo$Input,
  /** Point in time (Unix timestamp) when the post was created; 0 if unknown */
  +date?: number,
  /** Post content */
  +page_blocks?: $ReadOnlyArray<PageBlock$Input>,
  /** Post caption */
  +caption?: pageBlockCaption$Input,
|}

/** A collage */
export type pageBlockCollage = {|
  _: 'pageBlockCollage',
  /** Collage item contents */
  page_blocks: Array<PageBlock>,
  /** Block caption */
  caption: pageBlockCaption,
|}

/** A collage */
export type pageBlockCollage$Input = {|
  +_: 'pageBlockCollage',
  /** Collage item contents */
  +page_blocks?: $ReadOnlyArray<PageBlock$Input>,
  /** Block caption */
  +caption?: pageBlockCaption$Input,
|}

/** A slideshow */
export type pageBlockSlideshow = {|
  _: 'pageBlockSlideshow',
  /** Slideshow item contents */
  page_blocks: Array<PageBlock>,
  /** Block caption */
  caption: pageBlockCaption,
|}

/** A slideshow */
export type pageBlockSlideshow$Input = {|
  +_: 'pageBlockSlideshow',
  /** Slideshow item contents */
  +page_blocks?: $ReadOnlyArray<PageBlock$Input>,
  /** Block caption */
  +caption?: pageBlockCaption$Input,
|}

/** A link to a chat */
export type pageBlockChatLink = {|
  _: 'pageBlockChatLink',
  /** Chat title */
  title: string,
  /** Chat photo; may be null */
  photo: chatPhoto,
  /** Chat username, by which all other information about the chat should be resolved */
  username: string,
|}

/** A link to a chat */
export type pageBlockChatLink$Input = {|
  +_: 'pageBlockChatLink',
  /** Chat title */
  +title?: string,
  /** Chat photo; may be null */
  +photo?: chatPhoto$Input,
  /** Chat username, by which all other information about the chat should be resolved */
  +username?: string,
|}

/** A table */
export type pageBlockTable = {|
  _: 'pageBlockTable',
  /** Table caption */
  caption: RichText,
  /** Table cells */
  cells: Array<Array<pageBlockTableCell>>,
  /** True, if the table is bordered */
  is_bordered: boolean,
  /** True, if the table is striped */
  is_striped: boolean,
|}

/** A table */
export type pageBlockTable$Input = {|
  +_: 'pageBlockTable',
  /** Table caption */
  +caption?: RichText$Input,
  /** Table cells */
  +cells?: $ReadOnlyArray<$ReadOnlyArray<pageBlockTableCell$Input>>,
  /** True, if the table is bordered */
  +is_bordered?: boolean,
  /** True, if the table is striped */
  +is_striped?: boolean,
|}

/** A collapsible block */
export type pageBlockDetails = {|
  _: 'pageBlockDetails',
  /** Always visible heading for the block */
  header: RichText,
  /** Block contents */
  page_blocks: Array<PageBlock>,
  /** True, if the block is open by default */
  is_open: boolean,
|}

/** A collapsible block */
export type pageBlockDetails$Input = {|
  +_: 'pageBlockDetails',
  /** Always visible heading for the block */
  +header?: RichText$Input,
  /** Block contents */
  +page_blocks?: $ReadOnlyArray<PageBlock$Input>,
  /** True, if the block is open by default */
  +is_open?: boolean,
|}

/** Related articles */
export type pageBlockRelatedArticles = {|
  _: 'pageBlockRelatedArticles',
  /** Block header */
  header: RichText,
  /** List of related articles */
  articles: Array<pageBlockRelatedArticle>,
|}

/** Related articles */
export type pageBlockRelatedArticles$Input = {|
  +_: 'pageBlockRelatedArticles',
  /** Block header */
  +header?: RichText$Input,
  /** List of related articles */
  +articles?: $ReadOnlyArray<pageBlockRelatedArticle$Input>,
|}

/** A map */
export type pageBlockMap = {|
  _: 'pageBlockMap',
  /** Location of the map center */
  location: location,
  /** Map zoom level */
  zoom: number,
  /** Map width */
  width: number,
  /** Map height */
  height: number,
  /** Block caption */
  caption: pageBlockCaption,
|}

/** A map */
export type pageBlockMap$Input = {|
  +_: 'pageBlockMap',
  /** Location of the map center */
  +location?: location$Input,
  /** Map zoom level */
  +zoom?: number,
  /** Map width */
  +width?: number,
  /** Map height */
  +height?: number,
  /** Block caption */
  +caption?: pageBlockCaption$Input,
|}

/** Describes an instant view page for a web page */
export type webPageInstantView = {|
  _: 'webPageInstantView',
  /** Content of the web page */
  page_blocks: Array<PageBlock>,
  /** Version of the instant view, currently can be 1 or 2 */
  version: number,
  /**
   * Instant view URL; may be different from WebPage.url and must be used for the correct
   * anchors handling
   */
  url: string,
  /** True, if the instant view must be shown from right to left */
  is_rtl: boolean,
  /**
   * True, if the instant view contains the full page. A network request might be needed
   * to get the full web page instant view
   */
  is_full: boolean,
|}

/** Describes an instant view page for a web page */
export type webPageInstantView$Input = {|
  +_: 'webPageInstantView',
  /** Content of the web page */
  +page_blocks?: $ReadOnlyArray<PageBlock$Input>,
  /** Version of the instant view, currently can be 1 or 2 */
  +version?: number,
  /**
   * Instant view URL; may be different from WebPage.url and must be used for the correct
   * anchors handling
   */
  +url?: string,
  /** True, if the instant view must be shown from right to left */
  +is_rtl?: boolean,
  /**
   * True, if the instant view contains the full page. A network request might be needed
   * to get the full web page instant view
   */
  +is_full?: boolean,
|}

/** Describes a web page preview */
export type webPage = {|
  _: 'webPage',
  /** Original URL of the link */
  url: string,
  /** URL to display */
  display_url: string,
  /**
   * Type of the web page. Can be: article, photo, audio, video, document, profile, app,
   * or something else
   */
  type: string,
  /** Short name of the site (e.g., Google Docs, App Store) */
  site_name: string,
  /** Title of the content */
  title: string,
  /** Description of the content */
  description: string,
  /** Image representing the content; may be null */
  photo: photo,
  /** URL to show in the embedded preview */
  embed_url: string,
  /** MIME type of the embedded preview, (e.g., text/html or video/mp4) */
  embed_type: string,
  /** Width of the embedded preview */
  embed_width: number,
  /** Height of the embedded preview */
  embed_height: number,
  /** Duration of the content, in seconds */
  duration: number,
  /** Author of the content */
  author: string,
  /** Preview of the content as an animation, if available; may be null */
  animation: animation,
  /** Preview of the content as an audio file, if available; may be null */
  audio: audio,
  /**
   * Preview of the content as a document, if available (currently only available for
   * small PDF files and ZIP archives); may be null
   */
  document: document,
  /** Preview of the content as a sticker for small WEBP files, if available; may be null */
  sticker: sticker,
  /** Preview of the content as a video, if available; may be null */
  video: video,
  /** Preview of the content as a video note, if available; may be null */
  video_note: videoNote,
  /** Preview of the content as a voice note, if available; may be null */
  voice_note: voiceNote,
  /**
   * Version of instant view, available for the web page (currently can be 1 or 2), 0
   * if none
   */
  instant_view_version: number,
|}

/** Describes a web page preview */
export type webPage$Input = {|
  +_: 'webPage',
  /** Original URL of the link */
  +url?: string,
  /** URL to display */
  +display_url?: string,
  /**
   * Type of the web page. Can be: article, photo, audio, video, document, profile, app,
   * or something else
   */
  +type?: string,
  /** Short name of the site (e.g., Google Docs, App Store) */
  +site_name?: string,
  /** Title of the content */
  +title?: string,
  /** Description of the content */
  +description?: string,
  /** Image representing the content; may be null */
  +photo?: photo$Input,
  /** URL to show in the embedded preview */
  +embed_url?: string,
  /** MIME type of the embedded preview, (e.g., text/html or video/mp4) */
  +embed_type?: string,
  /** Width of the embedded preview */
  +embed_width?: number,
  /** Height of the embedded preview */
  +embed_height?: number,
  /** Duration of the content, in seconds */
  +duration?: number,
  /** Author of the content */
  +author?: string,
  /** Preview of the content as an animation, if available; may be null */
  +animation?: animation$Input,
  /** Preview of the content as an audio file, if available; may be null */
  +audio?: audio$Input,
  /**
   * Preview of the content as a document, if available (currently only available for
   * small PDF files and ZIP archives); may be null
   */
  +document?: document$Input,
  /** Preview of the content as a sticker for small WEBP files, if available; may be null */
  +sticker?: sticker$Input,
  /** Preview of the content as a video, if available; may be null */
  +video?: video$Input,
  /** Preview of the content as a video note, if available; may be null */
  +video_note?: videoNote$Input,
  /** Preview of the content as a voice note, if available; may be null */
  +voice_note?: voiceNote$Input,
  /**
   * Version of instant view, available for the web page (currently can be 1 or 2), 0
   * if none
   */
  +instant_view_version?: number,
|}

/** Describes an address */
export type address = {|
  _: 'address',
  /** A two-letter ISO 3166-1 alpha-2 country code */
  country_code: string,
  /** State, if applicable */
  state: string,
  /** City */
  city: string,
  /** First line of the address */
  street_line1: string,
  /** Second line of the address */
  street_line2: string,
  /** Address postal code */
  postal_code: string,
|}

/** Describes an address */
export type address$Input = {|
  +_: 'address',
  /** A two-letter ISO 3166-1 alpha-2 country code */
  +country_code?: string,
  /** State, if applicable */
  +state?: string,
  /** City */
  +city?: string,
  /** First line of the address */
  +street_line1?: string,
  /** Second line of the address */
  +street_line2?: string,
  /** Address postal code */
  +postal_code?: string,
|}

/** Portion of the price of a product (e.g., "delivery cost", "tax amount") */
export type labeledPricePart = {|
  _: 'labeledPricePart',
  /** Label for this portion of the product price */
  label: string,
  /** Currency amount in minimal quantity of the currency */
  amount: number,
|}

/** Portion of the price of a product (e.g., "delivery cost", "tax amount") */
export type labeledPricePart$Input = {|
  +_: 'labeledPricePart',
  /** Label for this portion of the product price */
  +label?: string,
  /** Currency amount in minimal quantity of the currency */
  +amount?: number,
|}

/** Product invoice */
export type invoice = {|
  _: 'invoice',
  /** ISO 4217 currency code */
  currency: string,
  /** A list of objects used to calculate the total price of the product */
  price_parts: Array<labeledPricePart>,
  /** True, if the payment is a test payment */
  is_test: boolean,
  /** True, if the user's name is needed for payment */
  need_name: boolean,
  /** True, if the user's phone number is needed for payment */
  need_phone_number: boolean,
  /** True, if the user's email address is needed for payment */
  need_email_address: boolean,
  /** True, if the user's shipping address is needed for payment */
  need_shipping_address: boolean,
  /** True, if the user's phone number will be sent to the provider */
  send_phone_number_to_provider: boolean,
  /** True, if the user's email address will be sent to the provider */
  send_email_address_to_provider: boolean,
  /** True, if the total price depends on the shipping method */
  is_flexible: boolean,
|}

/** Product invoice */
export type invoice$Input = {|
  +_: 'invoice',
  /** ISO 4217 currency code */
  +currency?: string,
  /** A list of objects used to calculate the total price of the product */
  +price_parts?: $ReadOnlyArray<labeledPricePart$Input>,
  /** True, if the payment is a test payment */
  +is_test?: boolean,
  /** True, if the user's name is needed for payment */
  +need_name?: boolean,
  /** True, if the user's phone number is needed for payment */
  +need_phone_number?: boolean,
  /** True, if the user's email address is needed for payment */
  +need_email_address?: boolean,
  /** True, if the user's shipping address is needed for payment */
  +need_shipping_address?: boolean,
  /** True, if the user's phone number will be sent to the provider */
  +send_phone_number_to_provider?: boolean,
  /** True, if the user's email address will be sent to the provider */
  +send_email_address_to_provider?: boolean,
  /** True, if the total price depends on the shipping method */
  +is_flexible?: boolean,
|}

/** Order information */
export type orderInfo = {|
  _: 'orderInfo',
  /** Name of the user */
  name: string,
  /** Phone number of the user */
  phone_number: string,
  /** Email address of the user */
  email_address: string,
  /** Shipping address for this order; may be null */
  shipping_address: address,
|}

/** Order information */
export type orderInfo$Input = {|
  +_: 'orderInfo',
  /** Name of the user */
  +name?: string,
  /** Phone number of the user */
  +phone_number?: string,
  /** Email address of the user */
  +email_address?: string,
  /** Shipping address for this order; may be null */
  +shipping_address?: address$Input,
|}

/** One shipping option */
export type shippingOption = {|
  _: 'shippingOption',
  /** Shipping option identifier */
  id: string,
  /** Option title */
  title: string,
  /** A list of objects used to calculate the total shipping costs */
  price_parts: Array<labeledPricePart>,
|}

/** One shipping option */
export type shippingOption$Input = {|
  +_: 'shippingOption',
  /** Shipping option identifier */
  +id?: string,
  /** Option title */
  +title?: string,
  /** A list of objects used to calculate the total shipping costs */
  +price_parts?: $ReadOnlyArray<labeledPricePart$Input>,
|}

/** Contains information about saved card credentials */
export type savedCredentials = {|
  _: 'savedCredentials',
  /** Unique identifier of the saved credentials */
  id: string,
  /** Title of the saved credentials */
  title: string,
|}

/** Contains information about saved card credentials */
export type savedCredentials$Input = {|
  +_: 'savedCredentials',
  /** Unique identifier of the saved credentials */
  +id?: string,
  /** Title of the saved credentials */
  +title?: string,
|}

/**
 * Applies if a user chooses some previously saved payment credentials. To use their
 * previously saved credentials, the user must have a valid temporary password
 */
export type inputCredentialsSaved = {|
  _: 'inputCredentialsSaved',
  /** Identifier of the saved credentials */
  saved_credentials_id: string,
|}

/**
 * Applies if a user chooses some previously saved payment credentials. To use their
 * previously saved credentials, the user must have a valid temporary password
 */
export type inputCredentialsSaved$Input = {|
  +_: 'inputCredentialsSaved',
  /** Identifier of the saved credentials */
  +saved_credentials_id?: string,
|}

/** Applies if a user enters new credentials on a payment provider website */
export type inputCredentialsNew = {|
  _: 'inputCredentialsNew',
  /** Contains JSON-encoded data with a credential identifier from the payment provider */
  data: string,
  /** True, if the credential identifier can be saved on the server side */
  allow_save: boolean,
|}

/** Applies if a user enters new credentials on a payment provider website */
export type inputCredentialsNew$Input = {|
  +_: 'inputCredentialsNew',
  /** Contains JSON-encoded data with a credential identifier from the payment provider */
  +data?: string,
  /** True, if the credential identifier can be saved on the server side */
  +allow_save?: boolean,
|}

/** Applies if a user enters new credentials using Android Pay */
export type inputCredentialsAndroidPay = {|
  _: 'inputCredentialsAndroidPay',
  /** JSON-encoded data with the credential identifier */
  data: string,
|}

/** Applies if a user enters new credentials using Android Pay */
export type inputCredentialsAndroidPay$Input = {|
  +_: 'inputCredentialsAndroidPay',
  /** JSON-encoded data with the credential identifier */
  +data?: string,
|}

/** Applies if a user enters new credentials using Apple Pay */
export type inputCredentialsApplePay = {|
  _: 'inputCredentialsApplePay',
  /** JSON-encoded data with the credential identifier */
  data: string,
|}

/** Applies if a user enters new credentials using Apple Pay */
export type inputCredentialsApplePay$Input = {|
  +_: 'inputCredentialsApplePay',
  /** JSON-encoded data with the credential identifier */
  +data?: string,
|}

/** Stripe payment provider */
export type paymentsProviderStripe = {|
  _: 'paymentsProviderStripe',
  /** Stripe API publishable key */
  publishable_key: string,
  /** True, if the user country must be provided */
  need_country: boolean,
  /** True, if the user ZIP/postal code must be provided */
  need_postal_code: boolean,
  /** True, if the cardholder name must be provided */
  need_cardholder_name: boolean,
|}

/** Stripe payment provider */
export type paymentsProviderStripe$Input = {|
  +_: 'paymentsProviderStripe',
  /** Stripe API publishable key */
  +publishable_key?: string,
  /** True, if the user country must be provided */
  +need_country?: boolean,
  /** True, if the user ZIP/postal code must be provided */
  +need_postal_code?: boolean,
  /** True, if the cardholder name must be provided */
  +need_cardholder_name?: boolean,
|}

/** Contains information about an invoice payment form */
export type paymentForm = {|
  _: 'paymentForm',
  /** Full information of the invoice */
  invoice: invoice,
  /** Payment form URL */
  url: string,
  /**
   * Contains information about the payment provider, if available, to support it natively
   * without the need for opening the URL; may be null
   */
  payments_provider: paymentsProviderStripe,
  /** Saved server-side order information; may be null */
  saved_order_info: orderInfo,
  /** Contains information about saved card credentials; may be null */
  saved_credentials: savedCredentials,
  /** True, if the user can choose to save credentials */
  can_save_credentials: boolean,
  /**
   * True, if the user will be able to save credentials protected by a password they set
   * up
   */
  need_password: boolean,
|}

/** Contains information about an invoice payment form */
export type paymentForm$Input = {|
  +_: 'paymentForm',
  /** Full information of the invoice */
  +invoice?: invoice$Input,
  /** Payment form URL */
  +url?: string,
  /**
   * Contains information about the payment provider, if available, to support it natively
   * without the need for opening the URL; may be null
   */
  +payments_provider?: paymentsProviderStripe$Input,
  /** Saved server-side order information; may be null */
  +saved_order_info?: orderInfo$Input,
  /** Contains information about saved card credentials; may be null */
  +saved_credentials?: savedCredentials$Input,
  /** True, if the user can choose to save credentials */
  +can_save_credentials?: boolean,
  /**
   * True, if the user will be able to save credentials protected by a password they set
   * up
   */
  +need_password?: boolean,
|}

/**
 * Contains a temporary identifier of validated order information, which is stored for
 * one hour. Also contains the available shipping options
 */
export type validatedOrderInfo = {|
  _: 'validatedOrderInfo',
  /** Temporary identifier of the order information */
  order_info_id: string,
  /** Available shipping options */
  shipping_options: Array<shippingOption>,
|}

/**
 * Contains a temporary identifier of validated order information, which is stored for
 * one hour. Also contains the available shipping options
 */
export type validatedOrderInfo$Input = {|
  +_: 'validatedOrderInfo',
  /** Temporary identifier of the order information */
  +order_info_id?: string,
  /** Available shipping options */
  +shipping_options?: $ReadOnlyArray<shippingOption$Input>,
|}

/** Contains the result of a payment request */
export type paymentResult = {|
  _: 'paymentResult',
  /**
   * True, if the payment request was successful; otherwise the verification_url will
   * be not empty
   */
  success: boolean,
  /** URL for additional payment credentials verification */
  verification_url: string,
|}

/** Contains the result of a payment request */
export type paymentResult$Input = {|
  +_: 'paymentResult',
  /**
   * True, if the payment request was successful; otherwise the verification_url will
   * be not empty
   */
  +success?: boolean,
  /** URL for additional payment credentials verification */
  +verification_url?: string,
|}

/** Contains information about a successful payment */
export type paymentReceipt = {|
  _: 'paymentReceipt',
  /** Point in time (Unix timestamp) when the payment was made */
  date: number,
  /** User identifier of the payment provider bot */
  payments_provider_user_id: number,
  /** Contains information about the invoice */
  invoice: invoice,
  /** Contains order information; may be null */
  order_info: orderInfo,
  /** Chosen shipping option; may be null */
  shipping_option: shippingOption,
  /** Title of the saved credentials */
  credentials_title: string,
|}

/** Contains information about a successful payment */
export type paymentReceipt$Input = {|
  +_: 'paymentReceipt',
  /** Point in time (Unix timestamp) when the payment was made */
  +date?: number,
  /** User identifier of the payment provider bot */
  +payments_provider_user_id?: number,
  /** Contains information about the invoice */
  +invoice?: invoice$Input,
  /** Contains order information; may be null */
  +order_info?: orderInfo$Input,
  /** Chosen shipping option; may be null */
  +shipping_option?: shippingOption$Input,
  /** Title of the saved credentials */
  +credentials_title?: string,
|}

/** File with the date it was uploaded */
export type datedFile = {|
  _: 'datedFile',
  /** The file */
  file: file,
  /** Point in time (Unix timestamp) when the file was uploaded */
  date: number,
|}

/** File with the date it was uploaded */
export type datedFile$Input = {|
  +_: 'datedFile',
  /** The file */
  +file?: file$Input,
  /** Point in time (Unix timestamp) when the file was uploaded */
  +date?: number,
|}

/** A Telegram Passport element containing the user's personal details */
export type passportElementTypePersonalDetails = {|
  _: 'passportElementTypePersonalDetails',
|}

/** A Telegram Passport element containing the user's personal details */
export type passportElementTypePersonalDetails$Input = {|
  +_: 'passportElementTypePersonalDetails',
|}

/** A Telegram Passport element containing the user's passport */
export type passportElementTypePassport = {|
  _: 'passportElementTypePassport',
|}

/** A Telegram Passport element containing the user's passport */
export type passportElementTypePassport$Input = {|
  +_: 'passportElementTypePassport',
|}

/** A Telegram Passport element containing the user's driver license */
export type passportElementTypeDriverLicense = {|
  _: 'passportElementTypeDriverLicense',
|}

/** A Telegram Passport element containing the user's driver license */
export type passportElementTypeDriverLicense$Input = {|
  +_: 'passportElementTypeDriverLicense',
|}

/** A Telegram Passport element containing the user's identity card */
export type passportElementTypeIdentityCard = {|
  _: 'passportElementTypeIdentityCard',
|}

/** A Telegram Passport element containing the user's identity card */
export type passportElementTypeIdentityCard$Input = {|
  +_: 'passportElementTypeIdentityCard',
|}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementTypeInternalPassport = {|
  _: 'passportElementTypeInternalPassport',
|}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementTypeInternalPassport$Input = {|
  +_: 'passportElementTypeInternalPassport',
|}

/** A Telegram Passport element containing the user's address */
export type passportElementTypeAddress = {|
  _: 'passportElementTypeAddress',
|}

/** A Telegram Passport element containing the user's address */
export type passportElementTypeAddress$Input = {|
  +_: 'passportElementTypeAddress',
|}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementTypeUtilityBill = {|
  _: 'passportElementTypeUtilityBill',
|}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementTypeUtilityBill$Input = {|
  +_: 'passportElementTypeUtilityBill',
|}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementTypeBankStatement = {|
  _: 'passportElementTypeBankStatement',
|}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementTypeBankStatement$Input = {|
  +_: 'passportElementTypeBankStatement',
|}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementTypeRentalAgreement = {|
  _: 'passportElementTypeRentalAgreement',
|}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementTypeRentalAgreement$Input = {|
  +_: 'passportElementTypeRentalAgreement',
|}

/** A Telegram Passport element containing the registration page of the user's passport */
export type passportElementTypePassportRegistration = {|
  _: 'passportElementTypePassportRegistration',
|}

/** A Telegram Passport element containing the registration page of the user's passport */
export type passportElementTypePassportRegistration$Input = {|
  +_: 'passportElementTypePassportRegistration',
|}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTypeTemporaryRegistration = {|
  _: 'passportElementTypeTemporaryRegistration',
|}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTypeTemporaryRegistration$Input = {|
  +_: 'passportElementTypeTemporaryRegistration',
|}

/** A Telegram Passport element containing the user's phone number */
export type passportElementTypePhoneNumber = {|
  _: 'passportElementTypePhoneNumber',
|}

/** A Telegram Passport element containing the user's phone number */
export type passportElementTypePhoneNumber$Input = {|
  +_: 'passportElementTypePhoneNumber',
|}

/** A Telegram Passport element containing the user's email address */
export type passportElementTypeEmailAddress = {|
  _: 'passportElementTypeEmailAddress',
|}

/** A Telegram Passport element containing the user's email address */
export type passportElementTypeEmailAddress$Input = {|
  +_: 'passportElementTypeEmailAddress',
|}

/** Represents a date according to the Gregorian calendar */
export type date = {|
  _: 'date',
  /** Day of the month, 1-31 */
  day: number,
  /** Month, 1-12 */
  month: number,
  /** Year, 1-9999 */
  year: number,
|}

/** Represents a date according to the Gregorian calendar */
export type date$Input = {|
  +_: 'date',
  /** Day of the month, 1-31 */
  +day?: number,
  /** Month, 1-12 */
  +month?: number,
  /** Year, 1-9999 */
  +year?: number,
|}

/** Contains the user's personal details */
export type personalDetails = {|
  _: 'personalDetails',
  /** First name of the user written in English; 1-255 characters */
  first_name: string,
  /** Middle name of the user written in English; 0-255 characters */
  middle_name: string,
  /** Last name of the user written in English; 1-255 characters */
  last_name: string,
  /** Native first name of the user; 1-255 characters */
  native_first_name: string,
  /** Native middle name of the user; 0-255 characters */
  native_middle_name: string,
  /** Native last name of the user; 1-255 characters */
  native_last_name: string,
  /** Birthdate of the user */
  birthdate: date,
  /** Gender of the user, "male" or "female" */
  gender: string,
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's country */
  country_code: string,
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's residence country */
  residence_country_code: string,
|}

/** Contains the user's personal details */
export type personalDetails$Input = {|
  +_: 'personalDetails',
  /** First name of the user written in English; 1-255 characters */
  +first_name?: string,
  /** Middle name of the user written in English; 0-255 characters */
  +middle_name?: string,
  /** Last name of the user written in English; 1-255 characters */
  +last_name?: string,
  /** Native first name of the user; 1-255 characters */
  +native_first_name?: string,
  /** Native middle name of the user; 0-255 characters */
  +native_middle_name?: string,
  /** Native last name of the user; 1-255 characters */
  +native_last_name?: string,
  /** Birthdate of the user */
  +birthdate?: date$Input,
  /** Gender of the user, "male" or "female" */
  +gender?: string,
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's country */
  +country_code?: string,
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's residence country */
  +residence_country_code?: string,
|}

/** An identity document */
export type identityDocument = {|
  _: 'identityDocument',
  /** Document number; 1-24 characters */
  number: string,
  /** Document expiry date; may be null */
  expiry_date: date,
  /** Front side of the document */
  front_side: datedFile,
  /** Reverse side of the document; only for driver license and identity card */
  reverse_side: datedFile,
  /** Selfie with the document; may be null */
  selfie: datedFile,
  /** List of files containing a certified English translation of the document */
  translation: Array<datedFile>,
|}

/** An identity document */
export type identityDocument$Input = {|
  +_: 'identityDocument',
  /** Document number; 1-24 characters */
  +number?: string,
  /** Document expiry date; may be null */
  +expiry_date?: date$Input,
  /** Front side of the document */
  +front_side?: datedFile$Input,
  /** Reverse side of the document; only for driver license and identity card */
  +reverse_side?: datedFile$Input,
  /** Selfie with the document; may be null */
  +selfie?: datedFile$Input,
  /** List of files containing a certified English translation of the document */
  +translation?: $ReadOnlyArray<datedFile$Input>,
|}

/** An identity document to be saved to Telegram Passport */
export type inputIdentityDocument = {|
  _: 'inputIdentityDocument',
  /** Document number; 1-24 characters */
  number: string,
  /** Document expiry date, if available */
  expiry_date: date,
  /** Front side of the document */
  front_side: InputFile,
  /** Reverse side of the document; only for driver license and identity card */
  reverse_side: InputFile,
  /** Selfie with the document, if available */
  selfie: InputFile,
  /** List of files containing a certified English translation of the document */
  translation: Array<InputFile>,
|}

/** An identity document to be saved to Telegram Passport */
export type inputIdentityDocument$Input = {|
  +_: 'inputIdentityDocument',
  /** Document number; 1-24 characters */
  +number?: string,
  /** Document expiry date, if available */
  +expiry_date?: date$Input,
  /** Front side of the document */
  +front_side?: InputFile$Input,
  /** Reverse side of the document; only for driver license and identity card */
  +reverse_side?: InputFile$Input,
  /** Selfie with the document, if available */
  +selfie?: InputFile$Input,
  /** List of files containing a certified English translation of the document */
  +translation?: $ReadOnlyArray<InputFile$Input>,
|}

/** A personal document, containing some information about a user */
export type personalDocument = {|
  _: 'personalDocument',
  /** List of files containing the pages of the document */
  files: Array<datedFile>,
  /** List of files containing a certified English translation of the document */
  translation: Array<datedFile>,
|}

/** A personal document, containing some information about a user */
export type personalDocument$Input = {|
  +_: 'personalDocument',
  /** List of files containing the pages of the document */
  +files?: $ReadOnlyArray<datedFile$Input>,
  /** List of files containing a certified English translation of the document */
  +translation?: $ReadOnlyArray<datedFile$Input>,
|}

/** A personal document to be saved to Telegram Passport */
export type inputPersonalDocument = {|
  _: 'inputPersonalDocument',
  /** List of files containing the pages of the document */
  files: Array<InputFile>,
  /** List of files containing a certified English translation of the document */
  translation: Array<InputFile>,
|}

/** A personal document to be saved to Telegram Passport */
export type inputPersonalDocument$Input = {|
  +_: 'inputPersonalDocument',
  /** List of files containing the pages of the document */
  +files?: $ReadOnlyArray<InputFile$Input>,
  /** List of files containing a certified English translation of the document */
  +translation?: $ReadOnlyArray<InputFile$Input>,
|}

/** A Telegram Passport element containing the user's personal details */
export type passportElementPersonalDetails = {|
  _: 'passportElementPersonalDetails',
  /** Personal details of the user */
  personal_details: personalDetails,
|}

/** A Telegram Passport element containing the user's personal details */
export type passportElementPersonalDetails$Input = {|
  +_: 'passportElementPersonalDetails',
  /** Personal details of the user */
  +personal_details?: personalDetails$Input,
|}

/** A Telegram Passport element containing the user's passport */
export type passportElementPassport = {|
  _: 'passportElementPassport',
  /** Passport */
  passport: identityDocument,
|}

/** A Telegram Passport element containing the user's passport */
export type passportElementPassport$Input = {|
  +_: 'passportElementPassport',
  /** Passport */
  +passport?: identityDocument$Input,
|}

/** A Telegram Passport element containing the user's driver license */
export type passportElementDriverLicense = {|
  _: 'passportElementDriverLicense',
  /** Driver license */
  driver_license: identityDocument,
|}

/** A Telegram Passport element containing the user's driver license */
export type passportElementDriverLicense$Input = {|
  +_: 'passportElementDriverLicense',
  /** Driver license */
  +driver_license?: identityDocument$Input,
|}

/** A Telegram Passport element containing the user's identity card */
export type passportElementIdentityCard = {|
  _: 'passportElementIdentityCard',
  /** Identity card */
  identity_card: identityDocument,
|}

/** A Telegram Passport element containing the user's identity card */
export type passportElementIdentityCard$Input = {|
  +_: 'passportElementIdentityCard',
  /** Identity card */
  +identity_card?: identityDocument$Input,
|}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementInternalPassport = {|
  _: 'passportElementInternalPassport',
  /** Internal passport */
  internal_passport: identityDocument,
|}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementInternalPassport$Input = {|
  +_: 'passportElementInternalPassport',
  /** Internal passport */
  +internal_passport?: identityDocument$Input,
|}

/** A Telegram Passport element containing the user's address */
export type passportElementAddress = {|
  _: 'passportElementAddress',
  /** Address */
  address: address,
|}

/** A Telegram Passport element containing the user's address */
export type passportElementAddress$Input = {|
  +_: 'passportElementAddress',
  /** Address */
  +address?: address$Input,
|}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementUtilityBill = {|
  _: 'passportElementUtilityBill',
  /** Utility bill */
  utility_bill: personalDocument,
|}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementUtilityBill$Input = {|
  +_: 'passportElementUtilityBill',
  /** Utility bill */
  +utility_bill?: personalDocument$Input,
|}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementBankStatement = {|
  _: 'passportElementBankStatement',
  /** Bank statement */
  bank_statement: personalDocument,
|}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementBankStatement$Input = {|
  +_: 'passportElementBankStatement',
  /** Bank statement */
  +bank_statement?: personalDocument$Input,
|}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementRentalAgreement = {|
  _: 'passportElementRentalAgreement',
  /** Rental agreement */
  rental_agreement: personalDocument,
|}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementRentalAgreement$Input = {|
  +_: 'passportElementRentalAgreement',
  /** Rental agreement */
  +rental_agreement?: personalDocument$Input,
|}

/** A Telegram Passport element containing the user's passport registration pages */
export type passportElementPassportRegistration = {|
  _: 'passportElementPassportRegistration',
  /** Passport registration pages */
  passport_registration: personalDocument,
|}

/** A Telegram Passport element containing the user's passport registration pages */
export type passportElementPassportRegistration$Input = {|
  +_: 'passportElementPassportRegistration',
  /** Passport registration pages */
  +passport_registration?: personalDocument$Input,
|}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTemporaryRegistration = {|
  _: 'passportElementTemporaryRegistration',
  /** Temporary registration */
  temporary_registration: personalDocument,
|}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTemporaryRegistration$Input = {|
  +_: 'passportElementTemporaryRegistration',
  /** Temporary registration */
  +temporary_registration?: personalDocument$Input,
|}

/** A Telegram Passport element containing the user's phone number */
export type passportElementPhoneNumber = {|
  _: 'passportElementPhoneNumber',
  /** Phone number */
  phone_number: string,
|}

/** A Telegram Passport element containing the user's phone number */
export type passportElementPhoneNumber$Input = {|
  +_: 'passportElementPhoneNumber',
  /** Phone number */
  +phone_number?: string,
|}

/** A Telegram Passport element containing the user's email address */
export type passportElementEmailAddress = {|
  _: 'passportElementEmailAddress',
  /** Email address */
  email_address: string,
|}

/** A Telegram Passport element containing the user's email address */
export type passportElementEmailAddress$Input = {|
  +_: 'passportElementEmailAddress',
  /** Email address */
  +email_address?: string,
|}

/** A Telegram Passport element to be saved containing the user's personal details */
export type inputPassportElementPersonalDetails = {|
  _: 'inputPassportElementPersonalDetails',
  /** Personal details of the user */
  personal_details: personalDetails,
|}

/** A Telegram Passport element to be saved containing the user's personal details */
export type inputPassportElementPersonalDetails$Input = {|
  +_: 'inputPassportElementPersonalDetails',
  /** Personal details of the user */
  +personal_details?: personalDetails$Input,
|}

/** A Telegram Passport element to be saved containing the user's passport */
export type inputPassportElementPassport = {|
  _: 'inputPassportElementPassport',
  /** The passport to be saved */
  passport: inputIdentityDocument,
|}

/** A Telegram Passport element to be saved containing the user's passport */
export type inputPassportElementPassport$Input = {|
  +_: 'inputPassportElementPassport',
  /** The passport to be saved */
  +passport?: inputIdentityDocument$Input,
|}

/** A Telegram Passport element to be saved containing the user's driver license */
export type inputPassportElementDriverLicense = {|
  _: 'inputPassportElementDriverLicense',
  /** The driver license to be saved */
  driver_license: inputIdentityDocument,
|}

/** A Telegram Passport element to be saved containing the user's driver license */
export type inputPassportElementDriverLicense$Input = {|
  +_: 'inputPassportElementDriverLicense',
  /** The driver license to be saved */
  +driver_license?: inputIdentityDocument$Input,
|}

/** A Telegram Passport element to be saved containing the user's identity card */
export type inputPassportElementIdentityCard = {|
  _: 'inputPassportElementIdentityCard',
  /** The identity card to be saved */
  identity_card: inputIdentityDocument,
|}

/** A Telegram Passport element to be saved containing the user's identity card */
export type inputPassportElementIdentityCard$Input = {|
  +_: 'inputPassportElementIdentityCard',
  /** The identity card to be saved */
  +identity_card?: inputIdentityDocument$Input,
|}

/** A Telegram Passport element to be saved containing the user's internal passport */
export type inputPassportElementInternalPassport = {|
  _: 'inputPassportElementInternalPassport',
  /** The internal passport to be saved */
  internal_passport: inputIdentityDocument,
|}

/** A Telegram Passport element to be saved containing the user's internal passport */
export type inputPassportElementInternalPassport$Input = {|
  +_: 'inputPassportElementInternalPassport',
  /** The internal passport to be saved */
  +internal_passport?: inputIdentityDocument$Input,
|}

/** A Telegram Passport element to be saved containing the user's address */
export type inputPassportElementAddress = {|
  _: 'inputPassportElementAddress',
  /** The address to be saved */
  address: address,
|}

/** A Telegram Passport element to be saved containing the user's address */
export type inputPassportElementAddress$Input = {|
  +_: 'inputPassportElementAddress',
  /** The address to be saved */
  +address?: address$Input,
|}

/** A Telegram Passport element to be saved containing the user's utility bill */
export type inputPassportElementUtilityBill = {|
  _: 'inputPassportElementUtilityBill',
  /** The utility bill to be saved */
  utility_bill: inputPersonalDocument,
|}

/** A Telegram Passport element to be saved containing the user's utility bill */
export type inputPassportElementUtilityBill$Input = {|
  +_: 'inputPassportElementUtilityBill',
  /** The utility bill to be saved */
  +utility_bill?: inputPersonalDocument$Input,
|}

/** A Telegram Passport element to be saved containing the user's bank statement */
export type inputPassportElementBankStatement = {|
  _: 'inputPassportElementBankStatement',
  /** The bank statement to be saved */
  bank_statement: inputPersonalDocument,
|}

/** A Telegram Passport element to be saved containing the user's bank statement */
export type inputPassportElementBankStatement$Input = {|
  +_: 'inputPassportElementBankStatement',
  /** The bank statement to be saved */
  +bank_statement?: inputPersonalDocument$Input,
|}

/** A Telegram Passport element to be saved containing the user's rental agreement */
export type inputPassportElementRentalAgreement = {|
  _: 'inputPassportElementRentalAgreement',
  /** The rental agreement to be saved */
  rental_agreement: inputPersonalDocument,
|}

/** A Telegram Passport element to be saved containing the user's rental agreement */
export type inputPassportElementRentalAgreement$Input = {|
  +_: 'inputPassportElementRentalAgreement',
  /** The rental agreement to be saved */
  +rental_agreement?: inputPersonalDocument$Input,
|}

/** A Telegram Passport element to be saved containing the user's passport registration */
export type inputPassportElementPassportRegistration = {|
  _: 'inputPassportElementPassportRegistration',
  /** The passport registration page to be saved */
  passport_registration: inputPersonalDocument,
|}

/** A Telegram Passport element to be saved containing the user's passport registration */
export type inputPassportElementPassportRegistration$Input = {|
  +_: 'inputPassportElementPassportRegistration',
  /** The passport registration page to be saved */
  +passport_registration?: inputPersonalDocument$Input,
|}

/** A Telegram Passport element to be saved containing the user's temporary registration */
export type inputPassportElementTemporaryRegistration = {|
  _: 'inputPassportElementTemporaryRegistration',
  /** The temporary registration document to be saved */
  temporary_registration: inputPersonalDocument,
|}

/** A Telegram Passport element to be saved containing the user's temporary registration */
export type inputPassportElementTemporaryRegistration$Input = {|
  +_: 'inputPassportElementTemporaryRegistration',
  /** The temporary registration document to be saved */
  +temporary_registration?: inputPersonalDocument$Input,
|}

/** A Telegram Passport element to be saved containing the user's phone number */
export type inputPassportElementPhoneNumber = {|
  _: 'inputPassportElementPhoneNumber',
  /** The phone number to be saved */
  phone_number: string,
|}

/** A Telegram Passport element to be saved containing the user's phone number */
export type inputPassportElementPhoneNumber$Input = {|
  +_: 'inputPassportElementPhoneNumber',
  /** The phone number to be saved */
  +phone_number?: string,
|}

/** A Telegram Passport element to be saved containing the user's email address */
export type inputPassportElementEmailAddress = {|
  _: 'inputPassportElementEmailAddress',
  /** The email address to be saved */
  email_address: string,
|}

/** A Telegram Passport element to be saved containing the user's email address */
export type inputPassportElementEmailAddress$Input = {|
  +_: 'inputPassportElementEmailAddress',
  /** The email address to be saved */
  +email_address?: string,
|}

/** Contains information about saved Telegram Passport elements */
export type passportElements = {|
  _: 'passportElements',
  /** Telegram Passport elements */
  elements: Array<PassportElement>,
|}

/** Contains information about saved Telegram Passport elements */
export type passportElements$Input = {|
  +_: 'passportElements',
  /** Telegram Passport elements */
  +elements?: $ReadOnlyArray<PassportElement$Input>,
|}

/**
 * The element contains an error in an unspecified place. The error will be considered
 * resolved when new data is added
 */
export type passportElementErrorSourceUnspecified = {|
  _: 'passportElementErrorSourceUnspecified',
|}

/**
 * The element contains an error in an unspecified place. The error will be considered
 * resolved when new data is added
 */
export type passportElementErrorSourceUnspecified$Input = {|
  +_: 'passportElementErrorSourceUnspecified',
|}

/**
 * One of the data fields contains an error. The error will be considered resolved when
 * the value of the field changes
 */
export type passportElementErrorSourceDataField = {|
  _: 'passportElementErrorSourceDataField',
  /** Field name */
  field_name: string,
|}

/**
 * One of the data fields contains an error. The error will be considered resolved when
 * the value of the field changes
 */
export type passportElementErrorSourceDataField$Input = {|
  +_: 'passportElementErrorSourceDataField',
  /** Field name */
  +field_name?: string,
|}

/**
 * The front side of the document contains an error. The error will be considered resolved
 * when the file with the front side changes
 */
export type passportElementErrorSourceFrontSide = {|
  _: 'passportElementErrorSourceFrontSide',
|}

/**
 * The front side of the document contains an error. The error will be considered resolved
 * when the file with the front side changes
 */
export type passportElementErrorSourceFrontSide$Input = {|
  +_: 'passportElementErrorSourceFrontSide',
|}

/**
 * The reverse side of the document contains an error. The error will be considered
 * resolved when the file with the reverse side changes
 */
export type passportElementErrorSourceReverseSide = {|
  _: 'passportElementErrorSourceReverseSide',
|}

/**
 * The reverse side of the document contains an error. The error will be considered
 * resolved when the file with the reverse side changes
 */
export type passportElementErrorSourceReverseSide$Input = {|
  +_: 'passportElementErrorSourceReverseSide',
|}

/**
 * The selfie with the document contains an error. The error will be considered resolved
 * when the file with the selfie changes
 */
export type passportElementErrorSourceSelfie = {|
  _: 'passportElementErrorSourceSelfie',
|}

/**
 * The selfie with the document contains an error. The error will be considered resolved
 * when the file with the selfie changes
 */
export type passportElementErrorSourceSelfie$Input = {|
  +_: 'passportElementErrorSourceSelfie',
|}

/**
 * One of files with the translation of the document contains an error. The error will
 * be considered resolved when the file changes
 */
export type passportElementErrorSourceTranslationFile = {|
  _: 'passportElementErrorSourceTranslationFile',
  /** Index of a file with the error */
  file_index: number,
|}

/**
 * One of files with the translation of the document contains an error. The error will
 * be considered resolved when the file changes
 */
export type passportElementErrorSourceTranslationFile$Input = {|
  +_: 'passportElementErrorSourceTranslationFile',
  /** Index of a file with the error */
  +file_index?: number,
|}

/**
 * The translation of the document contains an error. The error will be considered resolved
 * when the list of translation files changes
 */
export type passportElementErrorSourceTranslationFiles = {|
  _: 'passportElementErrorSourceTranslationFiles',
|}

/**
 * The translation of the document contains an error. The error will be considered resolved
 * when the list of translation files changes
 */
export type passportElementErrorSourceTranslationFiles$Input = {|
  +_: 'passportElementErrorSourceTranslationFiles',
|}

/** The file contains an error. The error will be considered resolved when the file changes */
export type passportElementErrorSourceFile = {|
  _: 'passportElementErrorSourceFile',
  /** Index of a file with the error */
  file_index: number,
|}

/** The file contains an error. The error will be considered resolved when the file changes */
export type passportElementErrorSourceFile$Input = {|
  +_: 'passportElementErrorSourceFile',
  /** Index of a file with the error */
  +file_index?: number,
|}

/**
 * The list of attached files contains an error. The error will be considered resolved
 * when the list of files changes
 */
export type passportElementErrorSourceFiles = {|
  _: 'passportElementErrorSourceFiles',
|}

/**
 * The list of attached files contains an error. The error will be considered resolved
 * when the list of files changes
 */
export type passportElementErrorSourceFiles$Input = {|
  +_: 'passportElementErrorSourceFiles',
|}

/** Contains the description of an error in a Telegram Passport element */
export type passportElementError = {|
  _: 'passportElementError',
  /** Type of the Telegram Passport element which has the error */
  type: PassportElementType,
  /** Error message */
  message: string,
  /** Error source */
  source: PassportElementErrorSource,
|}

/** Contains the description of an error in a Telegram Passport element */
export type passportElementError$Input = {|
  +_: 'passportElementError',
  /** Type of the Telegram Passport element which has the error */
  +type?: PassportElementType$Input,
  /** Error message */
  +message?: string,
  /** Error source */
  +source?: PassportElementErrorSource$Input,
|}

/** Contains information about a Telegram Passport element that was requested by a service */
export type passportSuitableElement = {|
  _: 'passportSuitableElement',
  /** Type of the element */
  type: PassportElementType,
  /** True, if a selfie is required with the identity document */
  is_selfie_required: boolean,
  /** True, if a certified English translation is required with the document */
  is_translation_required: boolean,
  /**
   * True, if personal details must include the user's name in the language of their country
   * of residence
   */
  is_native_name_required: boolean,
|}

/** Contains information about a Telegram Passport element that was requested by a service */
export type passportSuitableElement$Input = {|
  +_: 'passportSuitableElement',
  /** Type of the element */
  +type?: PassportElementType$Input,
  /** True, if a selfie is required with the identity document */
  +is_selfie_required?: boolean,
  /** True, if a certified English translation is required with the document */
  +is_translation_required?: boolean,
  /**
   * True, if personal details must include the user's name in the language of their country
   * of residence
   */
  +is_native_name_required?: boolean,
|}

/**
 * Contains a description of the required Telegram Passport element that was requested
 * by a service
 */
export type passportRequiredElement = {|
  _: 'passportRequiredElement',
  /** List of Telegram Passport elements any of which is enough to provide */
  suitable_elements: Array<passportSuitableElement>,
|}

/**
 * Contains a description of the required Telegram Passport element that was requested
 * by a service
 */
export type passportRequiredElement$Input = {|
  +_: 'passportRequiredElement',
  /** List of Telegram Passport elements any of which is enough to provide */
  +suitable_elements?: $ReadOnlyArray<passportSuitableElement$Input>,
|}

/** Contains information about a Telegram Passport authorization form that was requested */
export type passportAuthorizationForm = {|
  _: 'passportAuthorizationForm',
  /** Unique identifier of the authorization form */
  id: number,
  /**
   * Information about the Telegram Passport elements that need to be provided to complete
   * the form
   */
  required_elements: Array<passportRequiredElement>,
  /** URL for the privacy policy of the service; may be empty */
  privacy_policy_url: string,
|}

/** Contains information about a Telegram Passport authorization form that was requested */
export type passportAuthorizationForm$Input = {|
  +_: 'passportAuthorizationForm',
  /** Unique identifier of the authorization form */
  +id?: number,
  /**
   * Information about the Telegram Passport elements that need to be provided to complete
   * the form
   */
  +required_elements?: $ReadOnlyArray<passportRequiredElement$Input>,
  /** URL for the privacy policy of the service; may be empty */
  +privacy_policy_url?: string,
|}

/** Contains information about a Telegram Passport elements and corresponding errors */
export type passportElementsWithErrors = {|
  _: 'passportElementsWithErrors',
  /** Telegram Passport elements */
  elements: Array<PassportElement>,
  /** Errors in the elements that are already available */
  errors: Array<passportElementError>,
|}

/** Contains information about a Telegram Passport elements and corresponding errors */
export type passportElementsWithErrors$Input = {|
  +_: 'passportElementsWithErrors',
  /** Telegram Passport elements */
  +elements?: $ReadOnlyArray<PassportElement$Input>,
  /** Errors in the elements that are already available */
  +errors?: $ReadOnlyArray<passportElementError$Input>,
|}

/** Contains encrypted Telegram Passport data credentials */
export type encryptedCredentials = {|
  _: 'encryptedCredentials',
  /** The encrypted credentials */
  data: string,
  /** The decrypted data hash */
  hash: string,
  /** Secret for data decryption, encrypted with the service's public key */
  secret: string,
|}

/** Contains encrypted Telegram Passport data credentials */
export type encryptedCredentials$Input = {|
  +_: 'encryptedCredentials',
  /** The encrypted credentials */
  +data?: string,
  /** The decrypted data hash */
  +hash?: string,
  /** Secret for data decryption, encrypted with the service's public key */
  +secret?: string,
|}

/** Contains information about an encrypted Telegram Passport element; for bots only */
export type encryptedPassportElement = {|
  _: 'encryptedPassportElement',
  /** Type of Telegram Passport element */
  type: PassportElementType,
  /** Encrypted JSON-encoded data about the user */
  data: string,
  /** The front side of an identity document */
  front_side: datedFile,
  /** The reverse side of an identity document; may be null */
  reverse_side: datedFile,
  /** Selfie with the document; may be null */
  selfie: datedFile,
  /** List of files containing a certified English translation of the document */
  translation: Array<datedFile>,
  /** List of attached files */
  files: Array<datedFile>,
  /** Unencrypted data, phone number or email address */
  value: string,
  /** Hash of the entire element */
  hash: string,
|}

/** Contains information about an encrypted Telegram Passport element; for bots only */
export type encryptedPassportElement$Input = {|
  +_: 'encryptedPassportElement',
  /** Type of Telegram Passport element */
  +type?: PassportElementType$Input,
  /** Encrypted JSON-encoded data about the user */
  +data?: string,
  /** The front side of an identity document */
  +front_side?: datedFile$Input,
  /** The reverse side of an identity document; may be null */
  +reverse_side?: datedFile$Input,
  /** Selfie with the document; may be null */
  +selfie?: datedFile$Input,
  /** List of files containing a certified English translation of the document */
  +translation?: $ReadOnlyArray<datedFile$Input>,
  /** List of attached files */
  +files?: $ReadOnlyArray<datedFile$Input>,
  /** Unencrypted data, phone number or email address */
  +value?: string,
  /** Hash of the entire element */
  +hash?: string,
|}

/**
 * The element contains an error in an unspecified place. The error will be considered
 * resolved when new data is added
 */
export type inputPassportElementErrorSourceUnspecified = {|
  _: 'inputPassportElementErrorSourceUnspecified',
  /** Current hash of the entire element */
  element_hash: string,
|}

/**
 * The element contains an error in an unspecified place. The error will be considered
 * resolved when new data is added
 */
export type inputPassportElementErrorSourceUnspecified$Input = {|
  +_: 'inputPassportElementErrorSourceUnspecified',
  /** Current hash of the entire element */
  +element_hash?: string,
|}

/**
 * A data field contains an error. The error is considered resolved when the field's
 * value changes
 */
export type inputPassportElementErrorSourceDataField = {|
  _: 'inputPassportElementErrorSourceDataField',
  /** Field name */
  field_name: string,
  /** Current data hash */
  data_hash: string,
|}

/**
 * A data field contains an error. The error is considered resolved when the field's
 * value changes
 */
export type inputPassportElementErrorSourceDataField$Input = {|
  +_: 'inputPassportElementErrorSourceDataField',
  /** Field name */
  +field_name?: string,
  /** Current data hash */
  +data_hash?: string,
|}

/**
 * The front side of the document contains an error. The error is considered resolved
 * when the file with the front side of the document changes
 */
export type inputPassportElementErrorSourceFrontSide = {|
  _: 'inputPassportElementErrorSourceFrontSide',
  /** Current hash of the file containing the front side */
  file_hash: string,
|}

/**
 * The front side of the document contains an error. The error is considered resolved
 * when the file with the front side of the document changes
 */
export type inputPassportElementErrorSourceFrontSide$Input = {|
  +_: 'inputPassportElementErrorSourceFrontSide',
  /** Current hash of the file containing the front side */
  +file_hash?: string,
|}

/**
 * The reverse side of the document contains an error. The error is considered resolved
 * when the file with the reverse side of the document changes
 */
export type inputPassportElementErrorSourceReverseSide = {|
  _: 'inputPassportElementErrorSourceReverseSide',
  /** Current hash of the file containing the reverse side */
  file_hash: string,
|}

/**
 * The reverse side of the document contains an error. The error is considered resolved
 * when the file with the reverse side of the document changes
 */
export type inputPassportElementErrorSourceReverseSide$Input = {|
  +_: 'inputPassportElementErrorSourceReverseSide',
  /** Current hash of the file containing the reverse side */
  +file_hash?: string,
|}

/**
 * The selfie contains an error. The error is considered resolved when the file with
 * the selfie changes
 */
export type inputPassportElementErrorSourceSelfie = {|
  _: 'inputPassportElementErrorSourceSelfie',
  /** Current hash of the file containing the selfie */
  file_hash: string,
|}

/**
 * The selfie contains an error. The error is considered resolved when the file with
 * the selfie changes
 */
export type inputPassportElementErrorSourceSelfie$Input = {|
  +_: 'inputPassportElementErrorSourceSelfie',
  /** Current hash of the file containing the selfie */
  +file_hash?: string,
|}

/**
 * One of the files containing the translation of the document contains an error. The
 * error is considered resolved when the file with the translation changes
 */
export type inputPassportElementErrorSourceTranslationFile = {|
  _: 'inputPassportElementErrorSourceTranslationFile',
  /** Current hash of the file containing the translation */
  file_hash: string,
|}

/**
 * One of the files containing the translation of the document contains an error. The
 * error is considered resolved when the file with the translation changes
 */
export type inputPassportElementErrorSourceTranslationFile$Input = {|
  +_: 'inputPassportElementErrorSourceTranslationFile',
  /** Current hash of the file containing the translation */
  +file_hash?: string,
|}

/**
 * The translation of the document contains an error. The error is considered resolved
 * when the list of files changes
 */
export type inputPassportElementErrorSourceTranslationFiles = {|
  _: 'inputPassportElementErrorSourceTranslationFiles',
  /** Current hashes of all files with the translation */
  file_hashes: Array<string>,
|}

/**
 * The translation of the document contains an error. The error is considered resolved
 * when the list of files changes
 */
export type inputPassportElementErrorSourceTranslationFiles$Input = {|
  +_: 'inputPassportElementErrorSourceTranslationFiles',
  /** Current hashes of all files with the translation */
  +file_hashes?: $ReadOnlyArray<string>,
|}

/** The file contains an error. The error is considered resolved when the file changes */
export type inputPassportElementErrorSourceFile = {|
  _: 'inputPassportElementErrorSourceFile',
  /** Current hash of the file which has the error */
  file_hash: string,
|}

/** The file contains an error. The error is considered resolved when the file changes */
export type inputPassportElementErrorSourceFile$Input = {|
  +_: 'inputPassportElementErrorSourceFile',
  /** Current hash of the file which has the error */
  +file_hash?: string,
|}

/**
 * The list of attached files contains an error. The error is considered resolved when
 * the file list changes
 */
export type inputPassportElementErrorSourceFiles = {|
  _: 'inputPassportElementErrorSourceFiles',
  /** Current hashes of all attached files */
  file_hashes: Array<string>,
|}

/**
 * The list of attached files contains an error. The error is considered resolved when
 * the file list changes
 */
export type inputPassportElementErrorSourceFiles$Input = {|
  +_: 'inputPassportElementErrorSourceFiles',
  /** Current hashes of all attached files */
  +file_hashes?: $ReadOnlyArray<string>,
|}

/** Contains the description of an error in a Telegram Passport element; for bots only */
export type inputPassportElementError = {|
  _: 'inputPassportElementError',
  /** Type of Telegram Passport element that has the error */
  type: PassportElementType,
  /** Error message */
  message: string,
  /** Error source */
  source: InputPassportElementErrorSource,
|}

/** Contains the description of an error in a Telegram Passport element; for bots only */
export type inputPassportElementError$Input = {|
  +_: 'inputPassportElementError',
  /** Type of Telegram Passport element that has the error */
  +type?: PassportElementType$Input,
  /** Error message */
  +message?: string,
  /** Error source */
  +source?: InputPassportElementErrorSource$Input,
|}

/** A text message */
export type messageText = {|
  _: 'messageText',
  /** Text of the message */
  text: formattedText,
  /** A preview of the web page that's mentioned in the text; may be null */
  web_page: webPage,
|}

/** A text message */
export type messageText$Input = {|
  +_: 'messageText',
  /** Text of the message */
  +text?: formattedText$Input,
  /** A preview of the web page that's mentioned in the text; may be null */
  +web_page?: webPage$Input,
|}

/** An animation message (GIF-style). */
export type messageAnimation = {|
  _: 'messageAnimation',
  /** The animation description */
  animation: animation,
  /** Animation caption */
  caption: formattedText,
  /**
   * True, if the animation thumbnail must be blurred and the animation must be shown
   * only while tapped
   */
  is_secret: boolean,
|}

/** An animation message (GIF-style). */
export type messageAnimation$Input = {|
  +_: 'messageAnimation',
  /** The animation description */
  +animation?: animation$Input,
  /** Animation caption */
  +caption?: formattedText$Input,
  /**
   * True, if the animation thumbnail must be blurred and the animation must be shown
   * only while tapped
   */
  +is_secret?: boolean,
|}

/** An audio message */
export type messageAudio = {|
  _: 'messageAudio',
  /** The audio description */
  audio: audio,
  /** Audio caption */
  caption: formattedText,
|}

/** An audio message */
export type messageAudio$Input = {|
  +_: 'messageAudio',
  /** The audio description */
  +audio?: audio$Input,
  /** Audio caption */
  +caption?: formattedText$Input,
|}

/** A document message (general file) */
export type messageDocument = {|
  _: 'messageDocument',
  /** The document description */
  document: document,
  /** Document caption */
  caption: formattedText,
|}

/** A document message (general file) */
export type messageDocument$Input = {|
  +_: 'messageDocument',
  /** The document description */
  +document?: document$Input,
  /** Document caption */
  +caption?: formattedText$Input,
|}

/** A photo message */
export type messagePhoto = {|
  _: 'messagePhoto',
  /** The photo description */
  photo: photo,
  /** Photo caption */
  caption: formattedText,
  /** True, if the photo must be blurred and must be shown only while tapped */
  is_secret: boolean,
|}

/** A photo message */
export type messagePhoto$Input = {|
  +_: 'messagePhoto',
  /** The photo description */
  +photo?: photo$Input,
  /** Photo caption */
  +caption?: formattedText$Input,
  /** True, if the photo must be blurred and must be shown only while tapped */
  +is_secret?: boolean,
|}

/** An expired photo message (self-destructed after TTL has elapsed) */
export type messageExpiredPhoto = {|
  _: 'messageExpiredPhoto',
|}

/** An expired photo message (self-destructed after TTL has elapsed) */
export type messageExpiredPhoto$Input = {|
  +_: 'messageExpiredPhoto',
|}

/** A sticker message */
export type messageSticker = {|
  _: 'messageSticker',
  /** The sticker description */
  sticker: sticker,
|}

/** A sticker message */
export type messageSticker$Input = {|
  +_: 'messageSticker',
  /** The sticker description */
  +sticker?: sticker$Input,
|}

/** A video message */
export type messageVideo = {|
  _: 'messageVideo',
  /** The video description */
  video: video,
  /** Video caption */
  caption: formattedText,
  /**
   * True, if the video thumbnail must be blurred and the video must be shown only while
   * tapped
   */
  is_secret: boolean,
|}

/** A video message */
export type messageVideo$Input = {|
  +_: 'messageVideo',
  /** The video description */
  +video?: video$Input,
  /** Video caption */
  +caption?: formattedText$Input,
  /**
   * True, if the video thumbnail must be blurred and the video must be shown only while
   * tapped
   */
  +is_secret?: boolean,
|}

/** An expired video message (self-destructed after TTL has elapsed) */
export type messageExpiredVideo = {|
  _: 'messageExpiredVideo',
|}

/** An expired video message (self-destructed after TTL has elapsed) */
export type messageExpiredVideo$Input = {|
  +_: 'messageExpiredVideo',
|}

/** A video note message */
export type messageVideoNote = {|
  _: 'messageVideoNote',
  /** The video note description */
  video_note: videoNote,
  /** True, if at least one of the recipients has viewed the video note */
  is_viewed: boolean,
  /**
   * True, if the video note thumbnail must be blurred and the video note must be shown
   * only while tapped
   */
  is_secret: boolean,
|}

/** A video note message */
export type messageVideoNote$Input = {|
  +_: 'messageVideoNote',
  /** The video note description */
  +video_note?: videoNote$Input,
  /** True, if at least one of the recipients has viewed the video note */
  +is_viewed?: boolean,
  /**
   * True, if the video note thumbnail must be blurred and the video note must be shown
   * only while tapped
   */
  +is_secret?: boolean,
|}

/** A voice note message */
export type messageVoiceNote = {|
  _: 'messageVoiceNote',
  /** The voice note description */
  voice_note: voiceNote,
  /** Voice note caption */
  caption: formattedText,
  /** True, if at least one of the recipients has listened to the voice note */
  is_listened: boolean,
|}

/** A voice note message */
export type messageVoiceNote$Input = {|
  +_: 'messageVoiceNote',
  /** The voice note description */
  +voice_note?: voiceNote$Input,
  /** Voice note caption */
  +caption?: formattedText$Input,
  /** True, if at least one of the recipients has listened to the voice note */
  +is_listened?: boolean,
|}

/** A message with a location */
export type messageLocation = {|
  _: 'messageLocation',
  /** The location description */
  location: location,
  /**
   * Time relative to the message sent date until which the location can be updated, in
   * seconds
   */
  live_period: number,
  /**
   * Left time for which the location can be updated, in seconds. updateMessageContent
   * is not sent when this field changes
   */
  expires_in: number,
|}

/** A message with a location */
export type messageLocation$Input = {|
  +_: 'messageLocation',
  /** The location description */
  +location?: location$Input,
  /**
   * Time relative to the message sent date until which the location can be updated, in
   * seconds
   */
  +live_period?: number,
  /**
   * Left time for which the location can be updated, in seconds. updateMessageContent
   * is not sent when this field changes
   */
  +expires_in?: number,
|}

/** A message with information about a venue */
export type messageVenue = {|
  _: 'messageVenue',
  /** The venue description */
  venue: venue,
|}

/** A message with information about a venue */
export type messageVenue$Input = {|
  +_: 'messageVenue',
  /** The venue description */
  +venue?: venue$Input,
|}

/** A message with a user contact */
export type messageContact = {|
  _: 'messageContact',
  /** The contact description */
  contact: contact,
|}

/** A message with a user contact */
export type messageContact$Input = {|
  +_: 'messageContact',
  /** The contact description */
  +contact?: contact$Input,
|}

/** A message with a game */
export type messageGame = {|
  _: 'messageGame',
  /** The game description */
  game: game,
|}

/** A message with a game */
export type messageGame$Input = {|
  +_: 'messageGame',
  /** The game description */
  +game?: game$Input,
|}

/** A message with a poll */
export type messagePoll = {|
  _: 'messagePoll',
  /** The poll description */
  poll: poll,
|}

/** A message with a poll */
export type messagePoll$Input = {|
  +_: 'messagePoll',
  /** The poll description */
  +poll?: poll$Input,
|}

/** A message with an invoice from a bot */
export type messageInvoice = {|
  _: 'messageInvoice',
  /** Product title */
  title: string,
  /** Product description */
  description: string,
  /** Product photo; may be null */
  photo: photo,
  /** Currency for the product price */
  currency: string,
  /** Product total price in the minimal quantity of the currency */
  total_amount: number,
  /** Unique invoice bot start_parameter. To share an invoice use the URL https://t.me/{bot_username}?start={start_parameter} */
  start_parameter: string,
  /** True, if the invoice is a test invoice */
  is_test: boolean,
  /** True, if the shipping address should be specified */
  need_shipping_address: boolean,
  /** The identifier of the message with the receipt, after the product has been purchased */
  receipt_message_id: number,
|}

/** A message with an invoice from a bot */
export type messageInvoice$Input = {|
  +_: 'messageInvoice',
  /** Product title */
  +title?: string,
  /** Product description */
  +description?: string,
  /** Product photo; may be null */
  +photo?: photo$Input,
  /** Currency for the product price */
  +currency?: string,
  /** Product total price in the minimal quantity of the currency */
  +total_amount?: number,
  /** Unique invoice bot start_parameter. To share an invoice use the URL https://t.me/{bot_username}?start={start_parameter} */
  +start_parameter?: string,
  /** True, if the invoice is a test invoice */
  +is_test?: boolean,
  /** True, if the shipping address should be specified */
  +need_shipping_address?: boolean,
  /** The identifier of the message with the receipt, after the product has been purchased */
  +receipt_message_id?: number,
|}

/** A message with information about an ended call */
export type messageCall = {|
  _: 'messageCall',
  /** Reason why the call was discarded */
  discard_reason: CallDiscardReason,
  /** Call duration, in seconds */
  duration: number,
|}

/** A message with information about an ended call */
export type messageCall$Input = {|
  +_: 'messageCall',
  /** Reason why the call was discarded */
  +discard_reason?: CallDiscardReason$Input,
  /** Call duration, in seconds */
  +duration?: number,
|}

/** A newly created basic group */
export type messageBasicGroupChatCreate = {|
  _: 'messageBasicGroupChatCreate',
  /** Title of the basic group */
  title: string,
  /** User identifiers of members in the basic group */
  member_user_ids: Array<number>,
|}

/** A newly created basic group */
export type messageBasicGroupChatCreate$Input = {|
  +_: 'messageBasicGroupChatCreate',
  /** Title of the basic group */
  +title?: string,
  /** User identifiers of members in the basic group */
  +member_user_ids?: $ReadOnlyArray<number>,
|}

/** A newly created supergroup or channel */
export type messageSupergroupChatCreate = {|
  _: 'messageSupergroupChatCreate',
  /** Title of the supergroup or channel */
  title: string,
|}

/** A newly created supergroup or channel */
export type messageSupergroupChatCreate$Input = {|
  +_: 'messageSupergroupChatCreate',
  /** Title of the supergroup or channel */
  +title?: string,
|}

/** An updated chat title */
export type messageChatChangeTitle = {|
  _: 'messageChatChangeTitle',
  /** New chat title */
  title: string,
|}

/** An updated chat title */
export type messageChatChangeTitle$Input = {|
  +_: 'messageChatChangeTitle',
  /** New chat title */
  +title?: string,
|}

/** An updated chat photo */
export type messageChatChangePhoto = {|
  _: 'messageChatChangePhoto',
  /** New chat photo */
  photo: photo,
|}

/** An updated chat photo */
export type messageChatChangePhoto$Input = {|
  +_: 'messageChatChangePhoto',
  /** New chat photo */
  +photo?: photo$Input,
|}

/** A deleted chat photo */
export type messageChatDeletePhoto = {|
  _: 'messageChatDeletePhoto',
|}

/** A deleted chat photo */
export type messageChatDeletePhoto$Input = {|
  +_: 'messageChatDeletePhoto',
|}

/** New chat members were added */
export type messageChatAddMembers = {|
  _: 'messageChatAddMembers',
  /** User identifiers of the new members */
  member_user_ids: Array<number>,
|}

/** New chat members were added */
export type messageChatAddMembers$Input = {|
  +_: 'messageChatAddMembers',
  /** User identifiers of the new members */
  +member_user_ids?: $ReadOnlyArray<number>,
|}

/** A new member joined the chat by invite link */
export type messageChatJoinByLink = {|
  _: 'messageChatJoinByLink',
|}

/** A new member joined the chat by invite link */
export type messageChatJoinByLink$Input = {|
  +_: 'messageChatJoinByLink',
|}

/** A chat member was deleted */
export type messageChatDeleteMember = {|
  _: 'messageChatDeleteMember',
  /** User identifier of the deleted chat member */
  user_id: number,
|}

/** A chat member was deleted */
export type messageChatDeleteMember$Input = {|
  +_: 'messageChatDeleteMember',
  /** User identifier of the deleted chat member */
  +user_id?: number,
|}

/** A basic group was upgraded to a supergroup and was deactivated as the result */
export type messageChatUpgradeTo = {|
  _: 'messageChatUpgradeTo',
  /** Identifier of the supergroup to which the basic group was upgraded */
  supergroup_id: number,
|}

/** A basic group was upgraded to a supergroup and was deactivated as the result */
export type messageChatUpgradeTo$Input = {|
  +_: 'messageChatUpgradeTo',
  /** Identifier of the supergroup to which the basic group was upgraded */
  +supergroup_id?: number,
|}

/** A supergroup has been created from a basic group */
export type messageChatUpgradeFrom = {|
  _: 'messageChatUpgradeFrom',
  /** Title of the newly created supergroup */
  title: string,
  /** The identifier of the original basic group */
  basic_group_id: number,
|}

/** A supergroup has been created from a basic group */
export type messageChatUpgradeFrom$Input = {|
  +_: 'messageChatUpgradeFrom',
  /** Title of the newly created supergroup */
  +title?: string,
  /** The identifier of the original basic group */
  +basic_group_id?: number,
|}

/** A message has been pinned */
export type messagePinMessage = {|
  _: 'messagePinMessage',
  /** Identifier of the pinned message, can be an identifier of a deleted message or 0 */
  message_id: number,
|}

/** A message has been pinned */
export type messagePinMessage$Input = {|
  +_: 'messagePinMessage',
  /** Identifier of the pinned message, can be an identifier of a deleted message or 0 */
  +message_id?: number,
|}

/** A screenshot of a message in the chat has been taken */
export type messageScreenshotTaken = {|
  _: 'messageScreenshotTaken',
|}

/** A screenshot of a message in the chat has been taken */
export type messageScreenshotTaken$Input = {|
  +_: 'messageScreenshotTaken',
|}

/** The TTL (Time To Live) setting messages in a secret chat has been changed */
export type messageChatSetTtl = {|
  _: 'messageChatSetTtl',
  /** New TTL */
  ttl: number,
|}

/** The TTL (Time To Live) setting messages in a secret chat has been changed */
export type messageChatSetTtl$Input = {|
  +_: 'messageChatSetTtl',
  /** New TTL */
  +ttl?: number,
|}

/** A non-standard action has happened in the chat */
export type messageCustomServiceAction = {|
  _: 'messageCustomServiceAction',
  /** Message text to be shown in the chat */
  text: string,
|}

/** A non-standard action has happened in the chat */
export type messageCustomServiceAction$Input = {|
  +_: 'messageCustomServiceAction',
  /** Message text to be shown in the chat */
  +text?: string,
|}

/** A new high score was achieved in a game */
export type messageGameScore = {|
  _: 'messageGameScore',
  /** Identifier of the message with the game, can be an identifier of a deleted message */
  game_message_id: number,
  /**
   * Identifier of the game; may be different from the games presented in the message
   * with the game
   */
  game_id: number | string,
  /** New score */
  score: number,
|}

/** A new high score was achieved in a game */
export type messageGameScore$Input = {|
  +_: 'messageGameScore',
  /** Identifier of the message with the game, can be an identifier of a deleted message */
  +game_message_id?: number,
  /**
   * Identifier of the game; may be different from the games presented in the message
   * with the game
   */
  +game_id?: number | string,
  /** New score */
  +score?: number,
|}

/** A payment has been completed */
export type messagePaymentSuccessful = {|
  _: 'messagePaymentSuccessful',
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  invoice_message_id: number,
  /** Currency for the price of the product */
  currency: string,
  /** Total price for the product, in the minimal quantity of the currency */
  total_amount: number,
|}

/** A payment has been completed */
export type messagePaymentSuccessful$Input = {|
  +_: 'messagePaymentSuccessful',
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  +invoice_message_id?: number,
  /** Currency for the price of the product */
  +currency?: string,
  /** Total price for the product, in the minimal quantity of the currency */
  +total_amount?: number,
|}

/** A payment has been completed; for bots only */
export type messagePaymentSuccessfulBot = {|
  _: 'messagePaymentSuccessfulBot',
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  invoice_message_id: number,
  /** Currency for price of the product */
  currency: string,
  /** Total price for the product, in the minimal quantity of the currency */
  total_amount: number,
  /** Invoice payload */
  invoice_payload: string,
  /** Identifier of the shipping option chosen by the user; may be empty if not applicable */
  shipping_option_id: string,
  /** Information about the order; may be null */
  order_info: orderInfo,
  /** Telegram payment identifier */
  telegram_payment_charge_id: string,
  /** Provider payment identifier */
  provider_payment_charge_id: string,
|}

/** A payment has been completed; for bots only */
export type messagePaymentSuccessfulBot$Input = {|
  +_: 'messagePaymentSuccessfulBot',
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  +invoice_message_id?: number,
  /** Currency for price of the product */
  +currency?: string,
  /** Total price for the product, in the minimal quantity of the currency */
  +total_amount?: number,
  /** Invoice payload */
  +invoice_payload?: string,
  /** Identifier of the shipping option chosen by the user; may be empty if not applicable */
  +shipping_option_id?: string,
  /** Information about the order; may be null */
  +order_info?: orderInfo$Input,
  /** Telegram payment identifier */
  +telegram_payment_charge_id?: string,
  /** Provider payment identifier */
  +provider_payment_charge_id?: string,
|}

/** A contact has registered with Telegram */
export type messageContactRegistered = {|
  _: 'messageContactRegistered',
|}

/** A contact has registered with Telegram */
export type messageContactRegistered$Input = {|
  +_: 'messageContactRegistered',
|}

/**
 * The current user has connected a website by logging in using Telegram Login Widget
 * on it
 */
export type messageWebsiteConnected = {|
  _: 'messageWebsiteConnected',
  /** Domain name of the connected website */
  domain_name: string,
|}

/**
 * The current user has connected a website by logging in using Telegram Login Widget
 * on it
 */
export type messageWebsiteConnected$Input = {|
  +_: 'messageWebsiteConnected',
  /** Domain name of the connected website */
  +domain_name?: string,
|}

/** Telegram Passport data has been sent */
export type messagePassportDataSent = {|
  _: 'messagePassportDataSent',
  /** List of Telegram Passport element types sent */
  types: Array<PassportElementType>,
|}

/** Telegram Passport data has been sent */
export type messagePassportDataSent$Input = {|
  +_: 'messagePassportDataSent',
  /** List of Telegram Passport element types sent */
  +types?: $ReadOnlyArray<PassportElementType$Input>,
|}

/** Telegram Passport data has been received; for bots only */
export type messagePassportDataReceived = {|
  _: 'messagePassportDataReceived',
  /** List of received Telegram Passport elements */
  elements: Array<encryptedPassportElement>,
  /** Encrypted data credentials */
  credentials: encryptedCredentials,
|}

/** Telegram Passport data has been received; for bots only */
export type messagePassportDataReceived$Input = {|
  +_: 'messagePassportDataReceived',
  /** List of received Telegram Passport elements */
  +elements?: $ReadOnlyArray<encryptedPassportElement$Input>,
  /** Encrypted data credentials */
  +credentials?: encryptedCredentials$Input,
|}

/** Message content that is not supported by the client */
export type messageUnsupported = {|
  _: 'messageUnsupported',
|}

/** Message content that is not supported by the client */
export type messageUnsupported$Input = {|
  +_: 'messageUnsupported',
|}

/** A mention of a user by their username */
export type textEntityTypeMention = {|
  _: 'textEntityTypeMention',
|}

/** A mention of a user by their username */
export type textEntityTypeMention$Input = {|
  +_: 'textEntityTypeMention',
|}

/** A hashtag text, beginning with "#" */
export type textEntityTypeHashtag = {|
  _: 'textEntityTypeHashtag',
|}

/** A hashtag text, beginning with "#" */
export type textEntityTypeHashtag$Input = {|
  +_: 'textEntityTypeHashtag',
|}

/**
 * A cashtag text, beginning with "$" and consisting of capital english letters (i.e.
 * "$USD")
 */
export type textEntityTypeCashtag = {|
  _: 'textEntityTypeCashtag',
|}

/**
 * A cashtag text, beginning with "$" and consisting of capital english letters (i.e.
 * "$USD")
 */
export type textEntityTypeCashtag$Input = {|
  +_: 'textEntityTypeCashtag',
|}

/**
 * A bot command, beginning with "/". This shouldn't be highlighted if there are no
 * bots in the chat
 */
export type textEntityTypeBotCommand = {|
  _: 'textEntityTypeBotCommand',
|}

/**
 * A bot command, beginning with "/". This shouldn't be highlighted if there are no
 * bots in the chat
 */
export type textEntityTypeBotCommand$Input = {|
  +_: 'textEntityTypeBotCommand',
|}

/** An HTTP URL */
export type textEntityTypeUrl = {|
  _: 'textEntityTypeUrl',
|}

/** An HTTP URL */
export type textEntityTypeUrl$Input = {|
  +_: 'textEntityTypeUrl',
|}

/** An email address */
export type textEntityTypeEmailAddress = {|
  _: 'textEntityTypeEmailAddress',
|}

/** An email address */
export type textEntityTypeEmailAddress$Input = {|
  +_: 'textEntityTypeEmailAddress',
|}

/** A phone number */
export type textEntityTypePhoneNumber = {|
  _: 'textEntityTypePhoneNumber',
|}

/** A phone number */
export type textEntityTypePhoneNumber$Input = {|
  +_: 'textEntityTypePhoneNumber',
|}

/** A bold text */
export type textEntityTypeBold = {|
  _: 'textEntityTypeBold',
|}

/** A bold text */
export type textEntityTypeBold$Input = {|
  +_: 'textEntityTypeBold',
|}

/** An italic text */
export type textEntityTypeItalic = {|
  _: 'textEntityTypeItalic',
|}

/** An italic text */
export type textEntityTypeItalic$Input = {|
  +_: 'textEntityTypeItalic',
|}

/** An underlined text */
export type textEntityTypeUnderline = {|
  _: 'textEntityTypeUnderline',
|}

/** An underlined text */
export type textEntityTypeUnderline$Input = {|
  +_: 'textEntityTypeUnderline',
|}

/** A strikethrough text */
export type textEntityTypeStrikethrough = {|
  _: 'textEntityTypeStrikethrough',
|}

/** A strikethrough text */
export type textEntityTypeStrikethrough$Input = {|
  +_: 'textEntityTypeStrikethrough',
|}

/** Text that must be formatted as if inside a code HTML tag */
export type textEntityTypeCode = {|
  _: 'textEntityTypeCode',
|}

/** Text that must be formatted as if inside a code HTML tag */
export type textEntityTypeCode$Input = {|
  +_: 'textEntityTypeCode',
|}

/** Text that must be formatted as if inside a pre HTML tag */
export type textEntityTypePre = {|
  _: 'textEntityTypePre',
|}

/** Text that must be formatted as if inside a pre HTML tag */
export type textEntityTypePre$Input = {|
  +_: 'textEntityTypePre',
|}

/** Text that must be formatted as if inside pre, and code HTML tags */
export type textEntityTypePreCode = {|
  _: 'textEntityTypePreCode',
  /** Programming language of the code; as defined by the sender */
  language: string,
|}

/** Text that must be formatted as if inside pre, and code HTML tags */
export type textEntityTypePreCode$Input = {|
  +_: 'textEntityTypePreCode',
  /** Programming language of the code; as defined by the sender */
  +language?: string,
|}

/** A text description shown instead of a raw URL */
export type textEntityTypeTextUrl = {|
  _: 'textEntityTypeTextUrl',
  /** HTTP or tg:// URL to be opened when the link is clicked */
  url: string,
|}

/** A text description shown instead of a raw URL */
export type textEntityTypeTextUrl$Input = {|
  +_: 'textEntityTypeTextUrl',
  /** HTTP or tg:// URL to be opened when the link is clicked */
  +url?: string,
|}

/** A text shows instead of a raw mention of the user (e.g., when the user has no username) */
export type textEntityTypeMentionName = {|
  _: 'textEntityTypeMentionName',
  /** Identifier of the mentioned user */
  user_id: number,
|}

/** A text shows instead of a raw mention of the user (e.g., when the user has no username) */
export type textEntityTypeMentionName$Input = {|
  +_: 'textEntityTypeMentionName',
  /** Identifier of the mentioned user */
  +user_id?: number,
|}

/**
 * A thumbnail to be sent along with a file; should be in JPEG or WEBP format for stickers,
 * and less than 200 kB in size
 */
export type inputThumbnail = {|
  _: 'inputThumbnail',
  /** Thumbnail file to send. Sending thumbnails by file_id is currently not supported */
  thumbnail: InputFile,
  /** Thumbnail width, usually shouldn't exceed 320. Use 0 if unknown */
  width: number,
  /** Thumbnail height, usually shouldn't exceed 320. Use 0 if unknown */
  height: number,
|}

/**
 * A thumbnail to be sent along with a file; should be in JPEG or WEBP format for stickers,
 * and less than 200 kB in size
 */
export type inputThumbnail$Input = {|
  +_: 'inputThumbnail',
  /** Thumbnail file to send. Sending thumbnails by file_id is currently not supported */
  +thumbnail?: InputFile$Input,
  /** Thumbnail width, usually shouldn't exceed 320. Use 0 if unknown */
  +width?: number,
  /** Thumbnail height, usually shouldn't exceed 320. Use 0 if unknown */
  +height?: number,
|}

/** The message will be sent at the specified date */
export type messageSchedulingStateSendAtDate = {|
  _: 'messageSchedulingStateSendAtDate',
  /** Date the message will be sent. The date must be within 367 days in the future */
  send_date: number,
|}

/** The message will be sent at the specified date */
export type messageSchedulingStateSendAtDate$Input = {|
  +_: 'messageSchedulingStateSendAtDate',
  /** Date the message will be sent. The date must be within 367 days in the future */
  +send_date?: number,
|}

/**
 * The message will be sent when the peer will be online. Applicable to private chats
 * only and when the exact online status of the peer is known
 */
export type messageSchedulingStateSendWhenOnline = {|
  _: 'messageSchedulingStateSendWhenOnline',
|}

/**
 * The message will be sent when the peer will be online. Applicable to private chats
 * only and when the exact online status of the peer is known
 */
export type messageSchedulingStateSendWhenOnline$Input = {|
  +_: 'messageSchedulingStateSendWhenOnline',
|}

/** Options to be used when a message is send */
export type sendMessageOptions = {|
  _: 'sendMessageOptions',
  /**
   * Pass true to disable notification for the message. Must be false if the message is
   * sent to a secret chat
   */
  disable_notification: boolean,
  /** Pass true if the message is sent from the background */
  from_background: boolean,
  /**
   * Message scheduling state. Messages sent to a secret chat, live location messages
   * and self-destructing messages can't be scheduled
   */
  scheduling_state: MessageSchedulingState,
|}

/** Options to be used when a message is send */
export type sendMessageOptions$Input = {|
  +_: 'sendMessageOptions',
  /**
   * Pass true to disable notification for the message. Must be false if the message is
   * sent to a secret chat
   */
  +disable_notification?: boolean,
  /** Pass true if the message is sent from the background */
  +from_background?: boolean,
  /**
   * Message scheduling state. Messages sent to a secret chat, live location messages
   * and self-destructing messages can't be scheduled
   */
  +scheduling_state?: MessageSchedulingState$Input,
|}

/** A text message */
export type inputMessageText = {|
  _: 'inputMessageText',
  /**
   * Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only
   * Bold, Italic, Underline, Strikethrough, Code, Pre, PreCode, TextUrl and MentionName
   * entities are allowed to be specified manually
   */
  text: formattedText,
  /** True, if rich web page previews for URLs in the message text should be disabled */
  disable_web_page_preview: boolean,
  /** True, if a chat message draft should be deleted */
  clear_draft: boolean,
|}

/** A text message */
export type inputMessageText$Input = {|
  +_: 'inputMessageText',
  /**
   * Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only
   * Bold, Italic, Underline, Strikethrough, Code, Pre, PreCode, TextUrl and MentionName
   * entities are allowed to be specified manually
   */
  +text?: formattedText$Input,
  /** True, if rich web page previews for URLs in the message text should be disabled */
  +disable_web_page_preview?: boolean,
  /** True, if a chat message draft should be deleted */
  +clear_draft?: boolean,
|}

/** An animation message (GIF-style). */
export type inputMessageAnimation = {|
  _: 'inputMessageAnimation',
  /** Animation file to be sent */
  animation: InputFile,
  /** Animation thumbnail, if available */
  thumbnail: inputThumbnail,
  /** Duration of the animation, in seconds */
  duration: number,
  /** Width of the animation; may be replaced by the server */
  width: number,
  /** Height of the animation; may be replaced by the server */
  height: number,
  /** Animation caption; 0-GetOption("message_caption_length_max") characters */
  caption: formattedText,
|}

/** An animation message (GIF-style). */
export type inputMessageAnimation$Input = {|
  +_: 'inputMessageAnimation',
  /** Animation file to be sent */
  +animation?: InputFile$Input,
  /** Animation thumbnail, if available */
  +thumbnail?: inputThumbnail$Input,
  /** Duration of the animation, in seconds */
  +duration?: number,
  /** Width of the animation; may be replaced by the server */
  +width?: number,
  /** Height of the animation; may be replaced by the server */
  +height?: number,
  /** Animation caption; 0-GetOption("message_caption_length_max") characters */
  +caption?: formattedText$Input,
|}

/** An audio message */
export type inputMessageAudio = {|
  _: 'inputMessageAudio',
  /** Audio file to be sent */
  audio: InputFile,
  /** Thumbnail of the cover for the album, if available */
  album_cover_thumbnail: inputThumbnail,
  /** Duration of the audio, in seconds; may be replaced by the server */
  duration: number,
  /** Title of the audio; 0-64 characters; may be replaced by the server */
  title: string,
  /** Performer of the audio; 0-64 characters, may be replaced by the server */
  performer: string,
  /** Audio caption; 0-GetOption("message_caption_length_max") characters */
  caption: formattedText,
|}

/** An audio message */
export type inputMessageAudio$Input = {|
  +_: 'inputMessageAudio',
  /** Audio file to be sent */
  +audio?: InputFile$Input,
  /** Thumbnail of the cover for the album, if available */
  +album_cover_thumbnail?: inputThumbnail$Input,
  /** Duration of the audio, in seconds; may be replaced by the server */
  +duration?: number,
  /** Title of the audio; 0-64 characters; may be replaced by the server */
  +title?: string,
  /** Performer of the audio; 0-64 characters, may be replaced by the server */
  +performer?: string,
  /** Audio caption; 0-GetOption("message_caption_length_max") characters */
  +caption?: formattedText$Input,
|}

/** A document message (general file) */
export type inputMessageDocument = {|
  _: 'inputMessageDocument',
  /** Document to be sent */
  document: InputFile,
  /** Document thumbnail, if available */
  thumbnail: inputThumbnail,
  /** Document caption; 0-GetOption("message_caption_length_max") characters */
  caption: formattedText,
|}

/** A document message (general file) */
export type inputMessageDocument$Input = {|
  +_: 'inputMessageDocument',
  /** Document to be sent */
  +document?: InputFile$Input,
  /** Document thumbnail, if available */
  +thumbnail?: inputThumbnail$Input,
  /** Document caption; 0-GetOption("message_caption_length_max") characters */
  +caption?: formattedText$Input,
|}

/** A photo message */
export type inputMessagePhoto = {|
  _: 'inputMessagePhoto',
  /** Photo to send */
  photo: InputFile,
  /** Photo thumbnail to be sent, this is sent to the other party in secret chats only */
  thumbnail: inputThumbnail,
  /** File identifiers of the stickers added to the photo, if applicable */
  added_sticker_file_ids: Array<number>,
  /** Photo width */
  width: number,
  /** Photo height */
  height: number,
  /** Photo caption; 0-GetOption("message_caption_length_max") characters */
  caption: formattedText,
  /**
   * Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  ttl: number,
|}

/** A photo message */
export type inputMessagePhoto$Input = {|
  +_: 'inputMessagePhoto',
  /** Photo to send */
  +photo?: InputFile$Input,
  /** Photo thumbnail to be sent, this is sent to the other party in secret chats only */
  +thumbnail?: inputThumbnail$Input,
  /** File identifiers of the stickers added to the photo, if applicable */
  +added_sticker_file_ids?: $ReadOnlyArray<number>,
  /** Photo width */
  +width?: number,
  /** Photo height */
  +height?: number,
  /** Photo caption; 0-GetOption("message_caption_length_max") characters */
  +caption?: formattedText$Input,
  /**
   * Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  +ttl?: number,
|}

/** A sticker message */
export type inputMessageSticker = {|
  _: 'inputMessageSticker',
  /** Sticker to be sent */
  sticker: InputFile,
  /** Sticker thumbnail, if available */
  thumbnail: inputThumbnail,
  /** Sticker width */
  width: number,
  /** Sticker height */
  height: number,
|}

/** A sticker message */
export type inputMessageSticker$Input = {|
  +_: 'inputMessageSticker',
  /** Sticker to be sent */
  +sticker?: InputFile$Input,
  /** Sticker thumbnail, if available */
  +thumbnail?: inputThumbnail$Input,
  /** Sticker width */
  +width?: number,
  /** Sticker height */
  +height?: number,
|}

/** A video message */
export type inputMessageVideo = {|
  _: 'inputMessageVideo',
  /** Video to be sent */
  video: InputFile,
  /** Video thumbnail, if available */
  thumbnail: inputThumbnail,
  /** File identifiers of the stickers added to the video, if applicable */
  added_sticker_file_ids: Array<number>,
  /** Duration of the video, in seconds */
  duration: number,
  /** Video width */
  width: number,
  /** Video height */
  height: number,
  /** True, if the video should be tried to be streamed */
  supports_streaming: boolean,
  /** Video caption; 0-GetOption("message_caption_length_max") characters */
  caption: formattedText,
  /**
   * Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  ttl: number,
|}

/** A video message */
export type inputMessageVideo$Input = {|
  +_: 'inputMessageVideo',
  /** Video to be sent */
  +video?: InputFile$Input,
  /** Video thumbnail, if available */
  +thumbnail?: inputThumbnail$Input,
  /** File identifiers of the stickers added to the video, if applicable */
  +added_sticker_file_ids?: $ReadOnlyArray<number>,
  /** Duration of the video, in seconds */
  +duration?: number,
  /** Video width */
  +width?: number,
  /** Video height */
  +height?: number,
  /** True, if the video should be tried to be streamed */
  +supports_streaming?: boolean,
  /** Video caption; 0-GetOption("message_caption_length_max") characters */
  +caption?: formattedText$Input,
  /**
   * Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  +ttl?: number,
|}

/** A video note message */
export type inputMessageVideoNote = {|
  _: 'inputMessageVideoNote',
  /** Video note to be sent */
  video_note: InputFile,
  /** Video thumbnail, if available */
  thumbnail: inputThumbnail,
  /** Duration of the video, in seconds */
  duration: number,
  /** Video width and height; must be positive and not greater than 640 */
  length: number,
|}

/** A video note message */
export type inputMessageVideoNote$Input = {|
  +_: 'inputMessageVideoNote',
  /** Video note to be sent */
  +video_note?: InputFile$Input,
  /** Video thumbnail, if available */
  +thumbnail?: inputThumbnail$Input,
  /** Duration of the video, in seconds */
  +duration?: number,
  /** Video width and height; must be positive and not greater than 640 */
  +length?: number,
|}

/** A voice note message */
export type inputMessageVoiceNote = {|
  _: 'inputMessageVoiceNote',
  /** Voice note to be sent */
  voice_note: InputFile,
  /** Duration of the voice note, in seconds */
  duration: number,
  /** Waveform representation of the voice note, in 5-bit format */
  waveform: string,
  /** Voice note caption; 0-GetOption("message_caption_length_max") characters */
  caption: formattedText,
|}

/** A voice note message */
export type inputMessageVoiceNote$Input = {|
  +_: 'inputMessageVoiceNote',
  /** Voice note to be sent */
  +voice_note?: InputFile$Input,
  /** Duration of the voice note, in seconds */
  +duration?: number,
  /** Waveform representation of the voice note, in 5-bit format */
  +waveform?: string,
  /** Voice note caption; 0-GetOption("message_caption_length_max") characters */
  +caption?: formattedText$Input,
|}

/** A message with a location */
export type inputMessageLocation = {|
  _: 'inputMessageLocation',
  /** Location to be sent */
  location: location,
  /**
   * Period for which the location can be updated, in seconds; should be between 60 and
   * 86400 for a live location and 0 otherwise
   */
  live_period: number,
|}

/** A message with a location */
export type inputMessageLocation$Input = {|
  +_: 'inputMessageLocation',
  /** Location to be sent */
  +location?: location$Input,
  /**
   * Period for which the location can be updated, in seconds; should be between 60 and
   * 86400 for a live location and 0 otherwise
   */
  +live_period?: number,
|}

/** A message with information about a venue */
export type inputMessageVenue = {|
  _: 'inputMessageVenue',
  /** Venue to send */
  venue: venue,
|}

/** A message with information about a venue */
export type inputMessageVenue$Input = {|
  +_: 'inputMessageVenue',
  /** Venue to send */
  +venue?: venue$Input,
|}

/** A message containing a user contact */
export type inputMessageContact = {|
  _: 'inputMessageContact',
  /** Contact to send */
  contact: contact,
|}

/** A message containing a user contact */
export type inputMessageContact$Input = {|
  +_: 'inputMessageContact',
  /** Contact to send */
  +contact?: contact$Input,
|}

/** A message with a game; not supported for channels or secret chats */
export type inputMessageGame = {|
  _: 'inputMessageGame',
  /** User identifier of the bot that owns the game */
  bot_user_id: number,
  /** Short name of the game */
  game_short_name: string,
|}

/** A message with a game; not supported for channels or secret chats */
export type inputMessageGame$Input = {|
  +_: 'inputMessageGame',
  /** User identifier of the bot that owns the game */
  +bot_user_id?: number,
  /** Short name of the game */
  +game_short_name?: string,
|}

/** A message with an invoice; can be used only by bots and only in private chats */
export type inputMessageInvoice = {|
  _: 'inputMessageInvoice',
  /** Invoice */
  invoice: invoice,
  /** Product title; 1-32 characters */
  title: string,
  /** Product description; 0-255 characters */
  description: string,
  /** Product photo URL; optional */
  photo_url: string,
  /** Product photo size */
  photo_size: number,
  /** Product photo width */
  photo_width: number,
  /** Product photo height */
  photo_height: number,
  /** The invoice payload */
  payload: string,
  /** Payment provider token */
  provider_token: string,
  /** JSON-encoded data about the invoice, which will be shared with the payment provider */
  provider_data: string,
  /** Unique invoice bot start_parameter for the generation of this invoice */
  start_parameter: string,
|}

/** A message with an invoice; can be used only by bots and only in private chats */
export type inputMessageInvoice$Input = {|
  +_: 'inputMessageInvoice',
  /** Invoice */
  +invoice?: invoice$Input,
  /** Product title; 1-32 characters */
  +title?: string,
  /** Product description; 0-255 characters */
  +description?: string,
  /** Product photo URL; optional */
  +photo_url?: string,
  /** Product photo size */
  +photo_size?: number,
  /** Product photo width */
  +photo_width?: number,
  /** Product photo height */
  +photo_height?: number,
  /** The invoice payload */
  +payload?: string,
  /** Payment provider token */
  +provider_token?: string,
  /** JSON-encoded data about the invoice, which will be shared with the payment provider */
  +provider_data?: string,
  /** Unique invoice bot start_parameter for the generation of this invoice */
  +start_parameter?: string,
|}

/**
 * A message with a poll. Polls can't be sent to secret chats. Polls can be sent only
 * to a private chat with a bot
 */
export type inputMessagePoll = {|
  _: 'inputMessagePoll',
  /** Poll question, 1-255 characters */
  question: string,
  /** List of poll answer options, 2-10 strings 1-100 characters each */
  options: Array<string>,
  /**
   * True, if the poll voters are anonymous. Non-anonymous polls can't be sent or forwarded
   * to channels
   */
  is_anonymous: boolean,
  /** Type of the poll */
  type: PollType,
  /** True, if the poll needs to be sent already closed; for bots only */
  is_closed: boolean,
|}

/**
 * A message with a poll. Polls can't be sent to secret chats. Polls can be sent only
 * to a private chat with a bot
 */
export type inputMessagePoll$Input = {|
  +_: 'inputMessagePoll',
  /** Poll question, 1-255 characters */
  +question?: string,
  /** List of poll answer options, 2-10 strings 1-100 characters each */
  +options?: $ReadOnlyArray<string>,
  /**
   * True, if the poll voters are anonymous. Non-anonymous polls can't be sent or forwarded
   * to channels
   */
  +is_anonymous?: boolean,
  /** Type of the poll */
  +type?: PollType$Input,
  /** True, if the poll needs to be sent already closed; for bots only */
  +is_closed?: boolean,
|}

/** A forwarded message */
export type inputMessageForwarded = {|
  _: 'inputMessageForwarded',
  /** Identifier for the chat this forwarded message came from */
  from_chat_id: number,
  /** Identifier of the message to forward */
  message_id: number,
  /**
   * True, if a game message should be shared within a launched game; applies only to
   * game messages
   */
  in_game_share: boolean,
  /**
   * True, if content of the message needs to be copied without a link to the original
   * message. Always true if the message is forwarded to a secret chat
   */
  send_copy: boolean,
  /**
   * True, if media caption of the message copy needs to be removed. Ignored if send_copy
   * is false
   */
  remove_caption: boolean,
|}

/** A forwarded message */
export type inputMessageForwarded$Input = {|
  +_: 'inputMessageForwarded',
  /** Identifier for the chat this forwarded message came from */
  +from_chat_id?: number,
  /** Identifier of the message to forward */
  +message_id?: number,
  /**
   * True, if a game message should be shared within a launched game; applies only to
   * game messages
   */
  +in_game_share?: boolean,
  /**
   * True, if content of the message needs to be copied without a link to the original
   * message. Always true if the message is forwarded to a secret chat
   */
  +send_copy?: boolean,
  /**
   * True, if media caption of the message copy needs to be removed. Ignored if send_copy
   * is false
   */
  +remove_caption?: boolean,
|}

/** Returns all found messages, no filter is applied */
export type searchMessagesFilterEmpty = {|
  _: 'searchMessagesFilterEmpty',
|}

/** Returns all found messages, no filter is applied */
export type searchMessagesFilterEmpty$Input = {|
  +_: 'searchMessagesFilterEmpty',
|}

/** Returns only animation messages */
export type searchMessagesFilterAnimation = {|
  _: 'searchMessagesFilterAnimation',
|}

/** Returns only animation messages */
export type searchMessagesFilterAnimation$Input = {|
  +_: 'searchMessagesFilterAnimation',
|}

/** Returns only audio messages */
export type searchMessagesFilterAudio = {|
  _: 'searchMessagesFilterAudio',
|}

/** Returns only audio messages */
export type searchMessagesFilterAudio$Input = {|
  +_: 'searchMessagesFilterAudio',
|}

/** Returns only document messages */
export type searchMessagesFilterDocument = {|
  _: 'searchMessagesFilterDocument',
|}

/** Returns only document messages */
export type searchMessagesFilterDocument$Input = {|
  +_: 'searchMessagesFilterDocument',
|}

/** Returns only photo messages */
export type searchMessagesFilterPhoto = {|
  _: 'searchMessagesFilterPhoto',
|}

/** Returns only photo messages */
export type searchMessagesFilterPhoto$Input = {|
  +_: 'searchMessagesFilterPhoto',
|}

/** Returns only video messages */
export type searchMessagesFilterVideo = {|
  _: 'searchMessagesFilterVideo',
|}

/** Returns only video messages */
export type searchMessagesFilterVideo$Input = {|
  +_: 'searchMessagesFilterVideo',
|}

/** Returns only voice note messages */
export type searchMessagesFilterVoiceNote = {|
  _: 'searchMessagesFilterVoiceNote',
|}

/** Returns only voice note messages */
export type searchMessagesFilterVoiceNote$Input = {|
  +_: 'searchMessagesFilterVoiceNote',
|}

/** Returns only photo and video messages */
export type searchMessagesFilterPhotoAndVideo = {|
  _: 'searchMessagesFilterPhotoAndVideo',
|}

/** Returns only photo and video messages */
export type searchMessagesFilterPhotoAndVideo$Input = {|
  +_: 'searchMessagesFilterPhotoAndVideo',
|}

/** Returns only messages containing URLs */
export type searchMessagesFilterUrl = {|
  _: 'searchMessagesFilterUrl',
|}

/** Returns only messages containing URLs */
export type searchMessagesFilterUrl$Input = {|
  +_: 'searchMessagesFilterUrl',
|}

/** Returns only messages containing chat photos */
export type searchMessagesFilterChatPhoto = {|
  _: 'searchMessagesFilterChatPhoto',
|}

/** Returns only messages containing chat photos */
export type searchMessagesFilterChatPhoto$Input = {|
  +_: 'searchMessagesFilterChatPhoto',
|}

/** Returns only call messages */
export type searchMessagesFilterCall = {|
  _: 'searchMessagesFilterCall',
|}

/** Returns only call messages */
export type searchMessagesFilterCall$Input = {|
  +_: 'searchMessagesFilterCall',
|}

/** Returns only incoming call messages with missed/declined discard reasons */
export type searchMessagesFilterMissedCall = {|
  _: 'searchMessagesFilterMissedCall',
|}

/** Returns only incoming call messages with missed/declined discard reasons */
export type searchMessagesFilterMissedCall$Input = {|
  +_: 'searchMessagesFilterMissedCall',
|}

/** Returns only video note messages */
export type searchMessagesFilterVideoNote = {|
  _: 'searchMessagesFilterVideoNote',
|}

/** Returns only video note messages */
export type searchMessagesFilterVideoNote$Input = {|
  +_: 'searchMessagesFilterVideoNote',
|}

/** Returns only voice and video note messages */
export type searchMessagesFilterVoiceAndVideoNote = {|
  _: 'searchMessagesFilterVoiceAndVideoNote',
|}

/** Returns only voice and video note messages */
export type searchMessagesFilterVoiceAndVideoNote$Input = {|
  +_: 'searchMessagesFilterVoiceAndVideoNote',
|}

/**
 * Returns only messages with mentions of the current user, or messages that are replies
 * to their messages
 */
export type searchMessagesFilterMention = {|
  _: 'searchMessagesFilterMention',
|}

/**
 * Returns only messages with mentions of the current user, or messages that are replies
 * to their messages
 */
export type searchMessagesFilterMention$Input = {|
  +_: 'searchMessagesFilterMention',
|}

/**
 * Returns only messages with unread mentions of the current user, or messages that
 * are replies to their messages. When using this filter the results can't be additionally
 * filtered by a query or by the sending user
 */
export type searchMessagesFilterUnreadMention = {|
  _: 'searchMessagesFilterUnreadMention',
|}

/**
 * Returns only messages with unread mentions of the current user, or messages that
 * are replies to their messages. When using this filter the results can't be additionally
 * filtered by a query or by the sending user
 */
export type searchMessagesFilterUnreadMention$Input = {|
  +_: 'searchMessagesFilterUnreadMention',
|}

/** The user is typing a message */
export type chatActionTyping = {|
  _: 'chatActionTyping',
|}

/** The user is typing a message */
export type chatActionTyping$Input = {|
  +_: 'chatActionTyping',
|}

/** The user is recording a video */
export type chatActionRecordingVideo = {|
  _: 'chatActionRecordingVideo',
|}

/** The user is recording a video */
export type chatActionRecordingVideo$Input = {|
  +_: 'chatActionRecordingVideo',
|}

/** The user is uploading a video */
export type chatActionUploadingVideo = {|
  _: 'chatActionUploadingVideo',
  /** Upload progress, as a percentage */
  progress: number,
|}

/** The user is uploading a video */
export type chatActionUploadingVideo$Input = {|
  +_: 'chatActionUploadingVideo',
  /** Upload progress, as a percentage */
  +progress?: number,
|}

/** The user is recording a voice note */
export type chatActionRecordingVoiceNote = {|
  _: 'chatActionRecordingVoiceNote',
|}

/** The user is recording a voice note */
export type chatActionRecordingVoiceNote$Input = {|
  +_: 'chatActionRecordingVoiceNote',
|}

/** The user is uploading a voice note */
export type chatActionUploadingVoiceNote = {|
  _: 'chatActionUploadingVoiceNote',
  /** Upload progress, as a percentage */
  progress: number,
|}

/** The user is uploading a voice note */
export type chatActionUploadingVoiceNote$Input = {|
  +_: 'chatActionUploadingVoiceNote',
  /** Upload progress, as a percentage */
  +progress?: number,
|}

/** The user is uploading a photo */
export type chatActionUploadingPhoto = {|
  _: 'chatActionUploadingPhoto',
  /** Upload progress, as a percentage */
  progress: number,
|}

/** The user is uploading a photo */
export type chatActionUploadingPhoto$Input = {|
  +_: 'chatActionUploadingPhoto',
  /** Upload progress, as a percentage */
  +progress?: number,
|}

/** The user is uploading a document */
export type chatActionUploadingDocument = {|
  _: 'chatActionUploadingDocument',
  /** Upload progress, as a percentage */
  progress: number,
|}

/** The user is uploading a document */
export type chatActionUploadingDocument$Input = {|
  +_: 'chatActionUploadingDocument',
  /** Upload progress, as a percentage */
  +progress?: number,
|}

/** The user is picking a location or venue to send */
export type chatActionChoosingLocation = {|
  _: 'chatActionChoosingLocation',
|}

/** The user is picking a location or venue to send */
export type chatActionChoosingLocation$Input = {|
  +_: 'chatActionChoosingLocation',
|}

/** The user is picking a contact to send */
export type chatActionChoosingContact = {|
  _: 'chatActionChoosingContact',
|}

/** The user is picking a contact to send */
export type chatActionChoosingContact$Input = {|
  +_: 'chatActionChoosingContact',
|}

/** The user has started to play a game */
export type chatActionStartPlayingGame = {|
  _: 'chatActionStartPlayingGame',
|}

/** The user has started to play a game */
export type chatActionStartPlayingGame$Input = {|
  +_: 'chatActionStartPlayingGame',
|}

/** The user is recording a video note */
export type chatActionRecordingVideoNote = {|
  _: 'chatActionRecordingVideoNote',
|}

/** The user is recording a video note */
export type chatActionRecordingVideoNote$Input = {|
  +_: 'chatActionRecordingVideoNote',
|}

/** The user is uploading a video note */
export type chatActionUploadingVideoNote = {|
  _: 'chatActionUploadingVideoNote',
  /** Upload progress, as a percentage */
  progress: number,
|}

/** The user is uploading a video note */
export type chatActionUploadingVideoNote$Input = {|
  +_: 'chatActionUploadingVideoNote',
  /** Upload progress, as a percentage */
  +progress?: number,
|}

/** The user has cancelled the previous action */
export type chatActionCancel = {|
  _: 'chatActionCancel',
|}

/** The user has cancelled the previous action */
export type chatActionCancel$Input = {|
  +_: 'chatActionCancel',
|}

/** The user status was never changed */
export type userStatusEmpty = {|
  _: 'userStatusEmpty',
|}

/** The user status was never changed */
export type userStatusEmpty$Input = {|
  +_: 'userStatusEmpty',
|}

/** The user is online */
export type userStatusOnline = {|
  _: 'userStatusOnline',
  /** Point in time (Unix timestamp) when the user's online status will expire */
  expires: number,
|}

/** The user is online */
export type userStatusOnline$Input = {|
  +_: 'userStatusOnline',
  /** Point in time (Unix timestamp) when the user's online status will expire */
  +expires?: number,
|}

/** The user is offline */
export type userStatusOffline = {|
  _: 'userStatusOffline',
  /** Point in time (Unix timestamp) when the user was last online */
  was_online: number,
|}

/** The user is offline */
export type userStatusOffline$Input = {|
  +_: 'userStatusOffline',
  /** Point in time (Unix timestamp) when the user was last online */
  +was_online?: number,
|}

/** The user was online recently */
export type userStatusRecently = {|
  _: 'userStatusRecently',
|}

/** The user was online recently */
export type userStatusRecently$Input = {|
  +_: 'userStatusRecently',
|}

/** The user is offline, but was online last week */
export type userStatusLastWeek = {|
  _: 'userStatusLastWeek',
|}

/** The user is offline, but was online last week */
export type userStatusLastWeek$Input = {|
  +_: 'userStatusLastWeek',
|}

/** The user is offline, but was online last month */
export type userStatusLastMonth = {|
  _: 'userStatusLastMonth',
|}

/** The user is offline, but was online last month */
export type userStatusLastMonth$Input = {|
  +_: 'userStatusLastMonth',
|}

/** Represents a list of stickers */
export type stickers = {|
  _: 'stickers',
  /** List of stickers */
  stickers: Array<sticker>,
|}

/** Represents a list of stickers */
export type stickers$Input = {|
  +_: 'stickers',
  /** List of stickers */
  +stickers?: $ReadOnlyArray<sticker$Input>,
|}

/** Represents a list of emoji */
export type emojis = {|
  _: 'emojis',
  /** List of emojis */
  emojis: Array<string>,
|}

/** Represents a list of emoji */
export type emojis$Input = {|
  +_: 'emojis',
  /** List of emojis */
  +emojis?: $ReadOnlyArray<string>,
|}

/** Represents a sticker set */
export type stickerSet = {|
  _: 'stickerSet',
  /** Identifier of the sticker set */
  id: number | string,
  /** Title of the sticker set */
  title: string,
  /** Name of the sticker set */
  name: string,
  /**
   * Sticker set thumbnail in WEBP format with width and height 100; may be null. The
   * file can be downloaded only before the thumbnail is changed
   */
  thumbnail: photoSize,
  /** True, if the sticker set has been installed by the current user */
  is_installed: boolean,
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  is_archived: boolean,
  /** True, if the sticker set is official */
  is_official: boolean,
  /** True, is the stickers in the set are animated */
  is_animated: boolean,
  /** True, if the stickers in the set are masks */
  is_masks: boolean,
  /** True for already viewed trending sticker sets */
  is_viewed: boolean,
  /** List of stickers in this set */
  stickers: Array<sticker>,
  /**
   * A list of emoji corresponding to the stickers in the same order. The list is only
   * for informational purposes, because a sticker is always sent with a fixed emoji from
   * the corresponding Sticker object
   */
  emojis: Array<emojis>,
|}

/** Represents a sticker set */
export type stickerSet$Input = {|
  +_: 'stickerSet',
  /** Identifier of the sticker set */
  +id?: number | string,
  /** Title of the sticker set */
  +title?: string,
  /** Name of the sticker set */
  +name?: string,
  /**
   * Sticker set thumbnail in WEBP format with width and height 100; may be null. The
   * file can be downloaded only before the thumbnail is changed
   */
  +thumbnail?: photoSize$Input,
  /** True, if the sticker set has been installed by the current user */
  +is_installed?: boolean,
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  +is_archived?: boolean,
  /** True, if the sticker set is official */
  +is_official?: boolean,
  /** True, is the stickers in the set are animated */
  +is_animated?: boolean,
  /** True, if the stickers in the set are masks */
  +is_masks?: boolean,
  /** True for already viewed trending sticker sets */
  +is_viewed?: boolean,
  /** List of stickers in this set */
  +stickers?: $ReadOnlyArray<sticker$Input>,
  /**
   * A list of emoji corresponding to the stickers in the same order. The list is only
   * for informational purposes, because a sticker is always sent with a fixed emoji from
   * the corresponding Sticker object
   */
  +emojis?: $ReadOnlyArray<emojis$Input>,
|}

/** Represents short information about a sticker set */
export type stickerSetInfo = {|
  _: 'stickerSetInfo',
  /** Identifier of the sticker set */
  id: number | string,
  /** Title of the sticker set */
  title: string,
  /** Name of the sticker set */
  name: string,
  /** Sticker set thumbnail in WEBP format with width and height 100; may be null */
  thumbnail: photoSize,
  /** True, if the sticker set has been installed by current user */
  is_installed: boolean,
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  is_archived: boolean,
  /** True, if the sticker set is official */
  is_official: boolean,
  /** True, is the stickers in the set are animated */
  is_animated: boolean,
  /** True, if the stickers in the set are masks */
  is_masks: boolean,
  /** True for already viewed trending sticker sets */
  is_viewed: boolean,
  /** Total number of stickers in the set */
  size: number,
  /**
   * Contains up to the first 5 stickers from the set, depending on the context. If the
   * client needs more stickers the full set should be requested
   */
  covers: Array<sticker>,
|}

/** Represents short information about a sticker set */
export type stickerSetInfo$Input = {|
  +_: 'stickerSetInfo',
  /** Identifier of the sticker set */
  +id?: number | string,
  /** Title of the sticker set */
  +title?: string,
  /** Name of the sticker set */
  +name?: string,
  /** Sticker set thumbnail in WEBP format with width and height 100; may be null */
  +thumbnail?: photoSize$Input,
  /** True, if the sticker set has been installed by current user */
  +is_installed?: boolean,
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  +is_archived?: boolean,
  /** True, if the sticker set is official */
  +is_official?: boolean,
  /** True, is the stickers in the set are animated */
  +is_animated?: boolean,
  /** True, if the stickers in the set are masks */
  +is_masks?: boolean,
  /** True for already viewed trending sticker sets */
  +is_viewed?: boolean,
  /** Total number of stickers in the set */
  +size?: number,
  /**
   * Contains up to the first 5 stickers from the set, depending on the context. If the
   * client needs more stickers the full set should be requested
   */
  +covers?: $ReadOnlyArray<sticker$Input>,
|}

/** Represents a list of sticker sets */
export type stickerSets = {|
  _: 'stickerSets',
  /** Approximate total number of sticker sets found */
  total_count: number,
  /** List of sticker sets */
  sets: Array<stickerSetInfo>,
|}

/** Represents a list of sticker sets */
export type stickerSets$Input = {|
  +_: 'stickerSets',
  /** Approximate total number of sticker sets found */
  +total_count?: number,
  /** List of sticker sets */
  +sets?: $ReadOnlyArray<stickerSetInfo$Input>,
|}

/** The call wasn't discarded, or the reason is unknown */
export type callDiscardReasonEmpty = {|
  _: 'callDiscardReasonEmpty',
|}

/** The call wasn't discarded, or the reason is unknown */
export type callDiscardReasonEmpty$Input = {|
  +_: 'callDiscardReasonEmpty',
|}

/**
 * The call was ended before the conversation started. It was cancelled by the caller
 * or missed by the other party
 */
export type callDiscardReasonMissed = {|
  _: 'callDiscardReasonMissed',
|}

/**
 * The call was ended before the conversation started. It was cancelled by the caller
 * or missed by the other party
 */
export type callDiscardReasonMissed$Input = {|
  +_: 'callDiscardReasonMissed',
|}

/**
 * The call was ended before the conversation started. It was declined by the other
 * party
 */
export type callDiscardReasonDeclined = {|
  _: 'callDiscardReasonDeclined',
|}

/**
 * The call was ended before the conversation started. It was declined by the other
 * party
 */
export type callDiscardReasonDeclined$Input = {|
  +_: 'callDiscardReasonDeclined',
|}

/** The call was ended during the conversation because the users were disconnected */
export type callDiscardReasonDisconnected = {|
  _: 'callDiscardReasonDisconnected',
|}

/** The call was ended during the conversation because the users were disconnected */
export type callDiscardReasonDisconnected$Input = {|
  +_: 'callDiscardReasonDisconnected',
|}

/** The call was ended because one of the parties hung up */
export type callDiscardReasonHungUp = {|
  _: 'callDiscardReasonHungUp',
|}

/** The call was ended because one of the parties hung up */
export type callDiscardReasonHungUp$Input = {|
  +_: 'callDiscardReasonHungUp',
|}

/** Specifies the supported call protocols */
export type callProtocol = {|
  _: 'callProtocol',
  /** True, if UDP peer-to-peer connections are supported */
  udp_p2p: boolean,
  /** True, if connection through UDP reflectors is supported */
  udp_reflector: boolean,
  /** The minimum supported API layer; use 65 */
  min_layer: number,
  /** The maximum supported API layer; use 65 */
  max_layer: number,
|}

/** Specifies the supported call protocols */
export type callProtocol$Input = {|
  +_: 'callProtocol',
  /** True, if UDP peer-to-peer connections are supported */
  +udp_p2p?: boolean,
  /** True, if connection through UDP reflectors is supported */
  +udp_reflector?: boolean,
  /** The minimum supported API layer; use 65 */
  +min_layer?: number,
  /** The maximum supported API layer; use 65 */
  +max_layer?: number,
|}

/** Describes the address of UDP reflectors */
export type callConnection = {|
  _: 'callConnection',
  /** Reflector identifier */
  id: number | string,
  /** IPv4 reflector address */
  ip: string,
  /** IPv6 reflector address */
  ipv6: string,
  /** Reflector port number */
  port: number,
  /** Connection peer tag */
  peer_tag: string,
|}

/** Describes the address of UDP reflectors */
export type callConnection$Input = {|
  +_: 'callConnection',
  /** Reflector identifier */
  +id?: number | string,
  /** IPv4 reflector address */
  +ip?: string,
  /** IPv6 reflector address */
  +ipv6?: string,
  /** Reflector port number */
  +port?: number,
  /** Connection peer tag */
  +peer_tag?: string,
|}

/** Contains the call identifier */
export type callId = {|
  _: 'callId',
  /** Call identifier */
  id: number,
|}

/** Contains the call identifier */
export type callId$Input = {|
  +_: 'callId',
  /** Call identifier */
  +id?: number,
|}

/** The call is pending, waiting to be accepted by a user */
export type callStatePending = {|
  _: 'callStatePending',
  /** True, if the call has already been created by the server */
  is_created: boolean,
  /** True, if the call has already been received by the other party */
  is_received: boolean,
|}

/** The call is pending, waiting to be accepted by a user */
export type callStatePending$Input = {|
  +_: 'callStatePending',
  /** True, if the call has already been created by the server */
  +is_created?: boolean,
  /** True, if the call has already been received by the other party */
  +is_received?: boolean,
|}

/** The call has been answered and encryption keys are being exchanged */
export type callStateExchangingKeys = {|
  _: 'callStateExchangingKeys',
|}

/** The call has been answered and encryption keys are being exchanged */
export type callStateExchangingKeys$Input = {|
  +_: 'callStateExchangingKeys',
|}

/** The call is ready to use */
export type callStateReady = {|
  _: 'callStateReady',
  /** Call protocols supported by the peer */
  protocol: callProtocol,
  /** Available UDP reflectors */
  connections: Array<callConnection>,
  /** A JSON-encoded call config */
  config: string,
  /** Call encryption key */
  encryption_key: string,
  /** Encryption key emojis fingerprint */
  emojis: Array<string>,
  /** True, if peer-to-peer connection is allowed by users privacy settings */
  allow_p2p: boolean,
|}

/** The call is ready to use */
export type callStateReady$Input = {|
  +_: 'callStateReady',
  /** Call protocols supported by the peer */
  +protocol?: callProtocol$Input,
  /** Available UDP reflectors */
  +connections?: $ReadOnlyArray<callConnection$Input>,
  /** A JSON-encoded call config */
  +config?: string,
  /** Call encryption key */
  +encryption_key?: string,
  /** Encryption key emojis fingerprint */
  +emojis?: $ReadOnlyArray<string>,
  /** True, if peer-to-peer connection is allowed by users privacy settings */
  +allow_p2p?: boolean,
|}

/** The call is hanging up after discardCall has been called */
export type callStateHangingUp = {|
  _: 'callStateHangingUp',
|}

/** The call is hanging up after discardCall has been called */
export type callStateHangingUp$Input = {|
  +_: 'callStateHangingUp',
|}

/** The call has ended successfully */
export type callStateDiscarded = {|
  _: 'callStateDiscarded',
  /** The reason, why the call has ended */
  reason: CallDiscardReason,
  /** True, if the call rating should be sent to the server */
  need_rating: boolean,
  /** True, if the call debug information should be sent to the server */
  need_debug_information: boolean,
|}

/** The call has ended successfully */
export type callStateDiscarded$Input = {|
  +_: 'callStateDiscarded',
  /** The reason, why the call has ended */
  +reason?: CallDiscardReason$Input,
  /** True, if the call rating should be sent to the server */
  +need_rating?: boolean,
  /** True, if the call debug information should be sent to the server */
  +need_debug_information?: boolean,
|}

/** The call has ended with an error */
export type callStateError = {|
  _: 'callStateError',
  /**
   * Error. An error with the code 4005000 will be returned if an outgoing call is missed
   * because of an expired timeout
   */
  error: error,
|}

/** The call has ended with an error */
export type callStateError$Input = {|
  +_: 'callStateError',
  /**
   * Error. An error with the code 4005000 will be returned if an outgoing call is missed
   * because of an expired timeout
   */
  +error?: error$Input,
|}

/** The user heard their own voice */
export type callProblemEcho = {|
  _: 'callProblemEcho',
|}

/** The user heard their own voice */
export type callProblemEcho$Input = {|
  +_: 'callProblemEcho',
|}

/** The user heard background noise */
export type callProblemNoise = {|
  _: 'callProblemNoise',
|}

/** The user heard background noise */
export type callProblemNoise$Input = {|
  +_: 'callProblemNoise',
|}

/** The other side kept disappearing */
export type callProblemInterruptions = {|
  _: 'callProblemInterruptions',
|}

/** The other side kept disappearing */
export type callProblemInterruptions$Input = {|
  +_: 'callProblemInterruptions',
|}

/** The speech was distorted */
export type callProblemDistortedSpeech = {|
  _: 'callProblemDistortedSpeech',
|}

/** The speech was distorted */
export type callProblemDistortedSpeech$Input = {|
  +_: 'callProblemDistortedSpeech',
|}

/** The user couldn't hear the other side */
export type callProblemSilentLocal = {|
  _: 'callProblemSilentLocal',
|}

/** The user couldn't hear the other side */
export type callProblemSilentLocal$Input = {|
  +_: 'callProblemSilentLocal',
|}

/** The other side couldn't hear the user */
export type callProblemSilentRemote = {|
  _: 'callProblemSilentRemote',
|}

/** The other side couldn't hear the user */
export type callProblemSilentRemote$Input = {|
  +_: 'callProblemSilentRemote',
|}

/** The call ended unexpectedly */
export type callProblemDropped = {|
  _: 'callProblemDropped',
|}

/** The call ended unexpectedly */
export type callProblemDropped$Input = {|
  +_: 'callProblemDropped',
|}

/** Describes a call */
export type call = {|
  _: 'call',
  /** Call identifier, not persistent */
  id: number,
  /** Peer user identifier */
  user_id: number,
  /** True, if the call is outgoing */
  is_outgoing: boolean,
  /** Call state */
  state: CallState,
|}

/** Describes a call */
export type call$Input = {|
  +_: 'call',
  /** Call identifier, not persistent */
  +id?: number,
  /** Peer user identifier */
  +user_id?: number,
  /** True, if the call is outgoing */
  +is_outgoing?: boolean,
  /** Call state */
  +state?: CallState$Input,
|}

/** Contains settings for the authentication of the user's phone number */
export type phoneNumberAuthenticationSettings = {|
  _: 'phoneNumberAuthenticationSettings',
  /**
   * Pass true if the authentication code may be sent via flash call to the specified
   * phone number
   */
  allow_flash_call: boolean,
  /** Pass true if the authenticated phone number is used on the current device */
  is_current_phone_number: boolean,
  /**
   * For official applications only. True, if the app can use Android SMS Retriever API
   * (requires Google Play Services >= 10.2) to automatically receive the authentication
   * code from the SMS. See https://developers.google.com/identity/sms-retriever/ for
   * more details
   */
  allow_sms_retriever_api: boolean,
|}

/** Contains settings for the authentication of the user's phone number */
export type phoneNumberAuthenticationSettings$Input = {|
  +_: 'phoneNumberAuthenticationSettings',
  /**
   * Pass true if the authentication code may be sent via flash call to the specified
   * phone number
   */
  +allow_flash_call?: boolean,
  /** Pass true if the authenticated phone number is used on the current device */
  +is_current_phone_number?: boolean,
  /**
   * For official applications only. True, if the app can use Android SMS Retriever API
   * (requires Google Play Services >= 10.2) to automatically receive the authentication
   * code from the SMS. See https://developers.google.com/identity/sms-retriever/ for
   * more details
   */
  +allow_sms_retriever_api?: boolean,
|}

/** Represents a list of animations */
export type animations = {|
  _: 'animations',
  /** List of animations */
  animations: Array<animation>,
|}

/** Represents a list of animations */
export type animations$Input = {|
  +_: 'animations',
  /** List of animations */
  +animations?: $ReadOnlyArray<animation$Input>,
|}

/** Represents the result of an ImportContacts request */
export type importedContacts = {|
  _: 'importedContacts',
  /**
   * User identifiers of the imported contacts in the same order as they were specified
   * in the request; 0 if the contact is not yet a registered user
   */
  user_ids: Array<number>,
  /**
   * The number of users that imported the corresponding contact; 0 for already registered
   * users or if unavailable
   */
  importer_count: Array<number>,
|}

/** Represents the result of an ImportContacts request */
export type importedContacts$Input = {|
  +_: 'importedContacts',
  /**
   * User identifiers of the imported contacts in the same order as they were specified
   * in the request; 0 if the contact is not yet a registered user
   */
  +user_ids?: $ReadOnlyArray<number>,
  /**
   * The number of users that imported the corresponding contact; 0 for already registered
   * users or if unavailable
   */
  +importer_count?: $ReadOnlyArray<number>,
|}

/** Contains an HTTP URL */
export type httpUrl = {|
  _: 'httpUrl',
  /** The URL */
  url: string,
|}

/** Contains an HTTP URL */
export type httpUrl$Input = {|
  +_: 'httpUrl',
  /** The URL */
  +url?: string,
|}

/** Represents a link to an animated GIF */
export type inputInlineQueryResultAnimatedGif = {|
  _: 'inputInlineQueryResultAnimatedGif',
  /** Unique identifier of the query result */
  id: string,
  /** Title of the query result */
  title: string,
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  thumbnail_url: string,
  /** The URL of the GIF-file (file size must not exceed 1MB) */
  gif_url: string,
  /** Duration of the GIF, in seconds */
  gif_duration: number,
  /** Width of the GIF */
  gif_width: number,
  /** Height of the GIF */
  gif_height: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents a link to an animated GIF */
export type inputInlineQueryResultAnimatedGif$Input = {|
  +_: 'inputInlineQueryResultAnimatedGif',
  /** Unique identifier of the query result */
  +id?: string,
  /** Title of the query result */
  +title?: string,
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  +thumbnail_url?: string,
  /** The URL of the GIF-file (file size must not exceed 1MB) */
  +gif_url?: string,
  /** Duration of the GIF, in seconds */
  +gif_duration?: number,
  /** Width of the GIF */
  +gif_width?: number,
  /** Height of the GIF */
  +gif_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents a link to an animated (i.e. without sound) H.264/MPEG-4 AVC video */
export type inputInlineQueryResultAnimatedMpeg4 = {|
  _: 'inputInlineQueryResultAnimatedMpeg4',
  /** Unique identifier of the query result */
  id: string,
  /** Title of the result */
  title: string,
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  thumbnail_url: string,
  /** The URL of the MPEG4-file (file size must not exceed 1MB) */
  mpeg4_url: string,
  /** Duration of the video, in seconds */
  mpeg4_duration: number,
  /** Width of the video */
  mpeg4_width: number,
  /** Height of the video */
  mpeg4_height: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents a link to an animated (i.e. without sound) H.264/MPEG-4 AVC video */
export type inputInlineQueryResultAnimatedMpeg4$Input = {|
  +_: 'inputInlineQueryResultAnimatedMpeg4',
  /** Unique identifier of the query result */
  +id?: string,
  /** Title of the result */
  +title?: string,
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  +thumbnail_url?: string,
  /** The URL of the MPEG4-file (file size must not exceed 1MB) */
  +mpeg4_url?: string,
  /** Duration of the video, in seconds */
  +mpeg4_duration?: number,
  /** Width of the video */
  +mpeg4_width?: number,
  /** Height of the video */
  +mpeg4_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents a link to an article or web page */
export type inputInlineQueryResultArticle = {|
  _: 'inputInlineQueryResultArticle',
  /** Unique identifier of the query result */
  id: string,
  /** URL of the result, if it exists */
  url: string,
  /** True, if the URL must be not shown */
  hide_url: boolean,
  /** Title of the result */
  title: string,
  /** A short description of the result */
  description: string,
  /** URL of the result thumbnail, if it exists */
  thumbnail_url: string,
  /** Thumbnail width, if known */
  thumbnail_width: number,
  /** Thumbnail height, if known */
  thumbnail_height: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents a link to an article or web page */
export type inputInlineQueryResultArticle$Input = {|
  +_: 'inputInlineQueryResultArticle',
  /** Unique identifier of the query result */
  +id?: string,
  /** URL of the result, if it exists */
  +url?: string,
  /** True, if the URL must be not shown */
  +hide_url?: boolean,
  /** Title of the result */
  +title?: string,
  /** A short description of the result */
  +description?: string,
  /** URL of the result thumbnail, if it exists */
  +thumbnail_url?: string,
  /** Thumbnail width, if known */
  +thumbnail_width?: number,
  /** Thumbnail height, if known */
  +thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents a link to an MP3 audio file */
export type inputInlineQueryResultAudio = {|
  _: 'inputInlineQueryResultAudio',
  /** Unique identifier of the query result */
  id: string,
  /** Title of the audio file */
  title: string,
  /** Performer of the audio file */
  performer: string,
  /** The URL of the audio file */
  audio_url: string,
  /** Audio file duration, in seconds */
  audio_duration: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAudio, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents a link to an MP3 audio file */
export type inputInlineQueryResultAudio$Input = {|
  +_: 'inputInlineQueryResultAudio',
  /** Unique identifier of the query result */
  +id?: string,
  /** Title of the audio file */
  +title?: string,
  /** Performer of the audio file */
  +performer?: string,
  /** The URL of the audio file */
  +audio_url?: string,
  /** Audio file duration, in seconds */
  +audio_duration?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAudio, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents a user contact */
export type inputInlineQueryResultContact = {|
  _: 'inputInlineQueryResultContact',
  /** Unique identifier of the query result */
  id: string,
  /** User contact */
  contact: contact,
  /** URL of the result thumbnail, if it exists */
  thumbnail_url: string,
  /** Thumbnail width, if known */
  thumbnail_width: number,
  /** Thumbnail height, if known */
  thumbnail_height: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents a user contact */
export type inputInlineQueryResultContact$Input = {|
  +_: 'inputInlineQueryResultContact',
  /** Unique identifier of the query result */
  +id?: string,
  /** User contact */
  +contact?: contact$Input,
  /** URL of the result thumbnail, if it exists */
  +thumbnail_url?: string,
  /** Thumbnail width, if known */
  +thumbnail_width?: number,
  /** Thumbnail height, if known */
  +thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents a link to a file */
export type inputInlineQueryResultDocument = {|
  _: 'inputInlineQueryResultDocument',
  /** Unique identifier of the query result */
  id: string,
  /** Title of the resulting file */
  title: string,
  /** Short description of the result, if known */
  description: string,
  /** URL of the file */
  document_url: string,
  /**
   * MIME type of the file content; only "application/pdf" and "application/zip" are currently
   * allowed
   */
  mime_type: string,
  /** The URL of the file thumbnail, if it exists */
  thumbnail_url: string,
  /** Width of the thumbnail */
  thumbnail_width: number,
  /** Height of the thumbnail */
  thumbnail_height: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageDocument, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents a link to a file */
export type inputInlineQueryResultDocument$Input = {|
  +_: 'inputInlineQueryResultDocument',
  /** Unique identifier of the query result */
  +id?: string,
  /** Title of the resulting file */
  +title?: string,
  /** Short description of the result, if known */
  +description?: string,
  /** URL of the file */
  +document_url?: string,
  /**
   * MIME type of the file content; only "application/pdf" and "application/zip" are currently
   * allowed
   */
  +mime_type?: string,
  /** The URL of the file thumbnail, if it exists */
  +thumbnail_url?: string,
  /** Width of the thumbnail */
  +thumbnail_width?: number,
  /** Height of the thumbnail */
  +thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageDocument, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents a game */
export type inputInlineQueryResultGame = {|
  _: 'inputInlineQueryResultGame',
  /** Unique identifier of the query result */
  id: string,
  /** Short name of the game */
  game_short_name: string,
  /** Message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
|}

/** Represents a game */
export type inputInlineQueryResultGame$Input = {|
  +_: 'inputInlineQueryResultGame',
  /** Unique identifier of the query result */
  +id?: string,
  /** Short name of the game */
  +game_short_name?: string,
  /** Message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
|}

/** Represents a point on the map */
export type inputInlineQueryResultLocation = {|
  _: 'inputInlineQueryResultLocation',
  /** Unique identifier of the query result */
  id: string,
  /** Location result */
  location: location,
  /**
   * Amount of time relative to the message sent time until the location can be updated,
   * in seconds
   */
  live_period: number,
  /** Title of the result */
  title: string,
  /** URL of the result thumbnail, if it exists */
  thumbnail_url: string,
  /** Thumbnail width, if known */
  thumbnail_width: number,
  /** Thumbnail height, if known */
  thumbnail_height: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents a point on the map */
export type inputInlineQueryResultLocation$Input = {|
  +_: 'inputInlineQueryResultLocation',
  /** Unique identifier of the query result */
  +id?: string,
  /** Location result */
  +location?: location$Input,
  /**
   * Amount of time relative to the message sent time until the location can be updated,
   * in seconds
   */
  +live_period?: number,
  /** Title of the result */
  +title?: string,
  /** URL of the result thumbnail, if it exists */
  +thumbnail_url?: string,
  /** Thumbnail width, if known */
  +thumbnail_width?: number,
  /** Thumbnail height, if known */
  +thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents link to a JPEG image */
export type inputInlineQueryResultPhoto = {|
  _: 'inputInlineQueryResultPhoto',
  /** Unique identifier of the query result */
  id: string,
  /** Title of the result, if known */
  title: string,
  /** A short description of the result, if known */
  description: string,
  /** URL of the photo thumbnail, if it exists */
  thumbnail_url: string,
  /** The URL of the JPEG photo (photo size must not exceed 5MB) */
  photo_url: string,
  /** Width of the photo */
  photo_width: number,
  /** Height of the photo */
  photo_height: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessagePhoto, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents link to a JPEG image */
export type inputInlineQueryResultPhoto$Input = {|
  +_: 'inputInlineQueryResultPhoto',
  /** Unique identifier of the query result */
  +id?: string,
  /** Title of the result, if known */
  +title?: string,
  /** A short description of the result, if known */
  +description?: string,
  /** URL of the photo thumbnail, if it exists */
  +thumbnail_url?: string,
  /** The URL of the JPEG photo (photo size must not exceed 5MB) */
  +photo_url?: string,
  /** Width of the photo */
  +photo_width?: number,
  /** Height of the photo */
  +photo_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessagePhoto, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents a link to a WEBP or TGS sticker */
export type inputInlineQueryResultSticker = {|
  _: 'inputInlineQueryResultSticker',
  /** Unique identifier of the query result */
  id: string,
  /** URL of the sticker thumbnail, if it exists */
  thumbnail_url: string,
  /** The URL of the WEBP or TGS sticker (sticker file size must not exceed 5MB) */
  sticker_url: string,
  /** Width of the sticker */
  sticker_width: number,
  /** Height of the sticker */
  sticker_height: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * inputMessageSticker, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents a link to a WEBP or TGS sticker */
export type inputInlineQueryResultSticker$Input = {|
  +_: 'inputInlineQueryResultSticker',
  /** Unique identifier of the query result */
  +id?: string,
  /** URL of the sticker thumbnail, if it exists */
  +thumbnail_url?: string,
  /** The URL of the WEBP or TGS sticker (sticker file size must not exceed 5MB) */
  +sticker_url?: string,
  /** Width of the sticker */
  +sticker_width?: number,
  /** Height of the sticker */
  +sticker_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * inputMessageSticker, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents information about a venue */
export type inputInlineQueryResultVenue = {|
  _: 'inputInlineQueryResultVenue',
  /** Unique identifier of the query result */
  id: string,
  /** Venue result */
  venue: venue,
  /** URL of the result thumbnail, if it exists */
  thumbnail_url: string,
  /** Thumbnail width, if known */
  thumbnail_width: number,
  /** Thumbnail height, if known */
  thumbnail_height: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents information about a venue */
export type inputInlineQueryResultVenue$Input = {|
  +_: 'inputInlineQueryResultVenue',
  /** Unique identifier of the query result */
  +id?: string,
  /** Venue result */
  +venue?: venue$Input,
  /** URL of the result thumbnail, if it exists */
  +thumbnail_url?: string,
  /** Thumbnail width, if known */
  +thumbnail_width?: number,
  /** Thumbnail height, if known */
  +thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents a link to a page containing an embedded video player or a video file */
export type inputInlineQueryResultVideo = {|
  _: 'inputInlineQueryResultVideo',
  /** Unique identifier of the query result */
  id: string,
  /** Title of the result */
  title: string,
  /** A short description of the result, if known */
  description: string,
  /** The URL of the video thumbnail (JPEG), if it exists */
  thumbnail_url: string,
  /** URL of the embedded video player or video file */
  video_url: string,
  /**
   * MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently
   * supported
   */
  mime_type: string,
  /** Width of the video */
  video_width: number,
  /** Height of the video */
  video_height: number,
  /** Video duration, in seconds */
  video_duration: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVideo, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/** Represents a link to a page containing an embedded video player or a video file */
export type inputInlineQueryResultVideo$Input = {|
  +_: 'inputInlineQueryResultVideo',
  /** Unique identifier of the query result */
  +id?: string,
  /** Title of the result */
  +title?: string,
  /** A short description of the result, if known */
  +description?: string,
  /** The URL of the video thumbnail (JPEG), if it exists */
  +thumbnail_url?: string,
  /** URL of the embedded video player or video file */
  +video_url?: string,
  /**
   * MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently
   * supported
   */
  +mime_type?: string,
  /** Width of the video */
  +video_width?: number,
  /** Height of the video */
  +video_height?: number,
  /** Video duration, in seconds */
  +video_duration?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVideo, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/**
 * Represents a link to an opus-encoded audio file within an OGG container, single channel
 * audio
 */
export type inputInlineQueryResultVoiceNote = {|
  _: 'inputInlineQueryResultVoiceNote',
  /** Unique identifier of the query result */
  id: string,
  /** Title of the voice note */
  title: string,
  /** The URL of the voice note file */
  voice_note_url: string,
  /** Duration of the voice note, in seconds */
  voice_note_duration: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVoiceNote, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content: InputMessageContent,
|}

/**
 * Represents a link to an opus-encoded audio file within an OGG container, single channel
 * audio
 */
export type inputInlineQueryResultVoiceNote$Input = {|
  +_: 'inputInlineQueryResultVoiceNote',
  /** Unique identifier of the query result */
  +id?: string,
  /** Title of the voice note */
  +title?: string,
  /** The URL of the voice note file */
  +voice_note_url?: string,
  /** Duration of the voice note, in seconds */
  +voice_note_duration?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVoiceNote, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Represents a link to an article or web page */
export type inlineQueryResultArticle = {|
  _: 'inlineQueryResultArticle',
  /** Unique identifier of the query result */
  id: string,
  /** URL of the result, if it exists */
  url: string,
  /** True, if the URL must be not shown */
  hide_url: boolean,
  /** Title of the result */
  title: string,
  /** A short description of the result */
  description: string,
  /** Result thumbnail; may be null */
  thumbnail: photoSize,
|}

/** Represents a link to an article or web page */
export type inlineQueryResultArticle$Input = {|
  +_: 'inlineQueryResultArticle',
  /** Unique identifier of the query result */
  +id?: string,
  /** URL of the result, if it exists */
  +url?: string,
  /** True, if the URL must be not shown */
  +hide_url?: boolean,
  /** Title of the result */
  +title?: string,
  /** A short description of the result */
  +description?: string,
  /** Result thumbnail; may be null */
  +thumbnail?: photoSize$Input,
|}

/** Represents a user contact */
export type inlineQueryResultContact = {|
  _: 'inlineQueryResultContact',
  /** Unique identifier of the query result */
  id: string,
  /** A user contact */
  contact: contact,
  /** Result thumbnail; may be null */
  thumbnail: photoSize,
|}

/** Represents a user contact */
export type inlineQueryResultContact$Input = {|
  +_: 'inlineQueryResultContact',
  /** Unique identifier of the query result */
  +id?: string,
  /** A user contact */
  +contact?: contact$Input,
  /** Result thumbnail; may be null */
  +thumbnail?: photoSize$Input,
|}

/** Represents a point on the map */
export type inlineQueryResultLocation = {|
  _: 'inlineQueryResultLocation',
  /** Unique identifier of the query result */
  id: string,
  /** Location result */
  location: location,
  /** Title of the result */
  title: string,
  /** Result thumbnail; may be null */
  thumbnail: photoSize,
|}

/** Represents a point on the map */
export type inlineQueryResultLocation$Input = {|
  +_: 'inlineQueryResultLocation',
  /** Unique identifier of the query result */
  +id?: string,
  /** Location result */
  +location?: location$Input,
  /** Title of the result */
  +title?: string,
  /** Result thumbnail; may be null */
  +thumbnail?: photoSize$Input,
|}

/** Represents information about a venue */
export type inlineQueryResultVenue = {|
  _: 'inlineQueryResultVenue',
  /** Unique identifier of the query result */
  id: string,
  /** Venue result */
  venue: venue,
  /** Result thumbnail; may be null */
  thumbnail: photoSize,
|}

/** Represents information about a venue */
export type inlineQueryResultVenue$Input = {|
  +_: 'inlineQueryResultVenue',
  /** Unique identifier of the query result */
  +id?: string,
  /** Venue result */
  +venue?: venue$Input,
  /** Result thumbnail; may be null */
  +thumbnail?: photoSize$Input,
|}

/** Represents information about a game */
export type inlineQueryResultGame = {|
  _: 'inlineQueryResultGame',
  /** Unique identifier of the query result */
  id: string,
  /** Game result */
  game: game,
|}

/** Represents information about a game */
export type inlineQueryResultGame$Input = {|
  +_: 'inlineQueryResultGame',
  /** Unique identifier of the query result */
  +id?: string,
  /** Game result */
  +game?: game$Input,
|}

/** Represents an animation file */
export type inlineQueryResultAnimation = {|
  _: 'inlineQueryResultAnimation',
  /** Unique identifier of the query result */
  id: string,
  /** Animation file */
  animation: animation,
  /** Animation title */
  title: string,
|}

/** Represents an animation file */
export type inlineQueryResultAnimation$Input = {|
  +_: 'inlineQueryResultAnimation',
  /** Unique identifier of the query result */
  +id?: string,
  /** Animation file */
  +animation?: animation$Input,
  /** Animation title */
  +title?: string,
|}

/** Represents an audio file */
export type inlineQueryResultAudio = {|
  _: 'inlineQueryResultAudio',
  /** Unique identifier of the query result */
  id: string,
  /** Audio file */
  audio: audio,
|}

/** Represents an audio file */
export type inlineQueryResultAudio$Input = {|
  +_: 'inlineQueryResultAudio',
  /** Unique identifier of the query result */
  +id?: string,
  /** Audio file */
  +audio?: audio$Input,
|}

/** Represents a document */
export type inlineQueryResultDocument = {|
  _: 'inlineQueryResultDocument',
  /** Unique identifier of the query result */
  id: string,
  /** Document */
  document: document,
  /** Document title */
  title: string,
  /** Document description */
  description: string,
|}

/** Represents a document */
export type inlineQueryResultDocument$Input = {|
  +_: 'inlineQueryResultDocument',
  /** Unique identifier of the query result */
  +id?: string,
  /** Document */
  +document?: document$Input,
  /** Document title */
  +title?: string,
  /** Document description */
  +description?: string,
|}

/** Represents a photo */
export type inlineQueryResultPhoto = {|
  _: 'inlineQueryResultPhoto',
  /** Unique identifier of the query result */
  id: string,
  /** Photo */
  photo: photo,
  /** Title of the result, if known */
  title: string,
  /** A short description of the result, if known */
  description: string,
|}

/** Represents a photo */
export type inlineQueryResultPhoto$Input = {|
  +_: 'inlineQueryResultPhoto',
  /** Unique identifier of the query result */
  +id?: string,
  /** Photo */
  +photo?: photo$Input,
  /** Title of the result, if known */
  +title?: string,
  /** A short description of the result, if known */
  +description?: string,
|}

/** Represents a sticker */
export type inlineQueryResultSticker = {|
  _: 'inlineQueryResultSticker',
  /** Unique identifier of the query result */
  id: string,
  /** Sticker */
  sticker: sticker,
|}

/** Represents a sticker */
export type inlineQueryResultSticker$Input = {|
  +_: 'inlineQueryResultSticker',
  /** Unique identifier of the query result */
  +id?: string,
  /** Sticker */
  +sticker?: sticker$Input,
|}

/** Represents a video */
export type inlineQueryResultVideo = {|
  _: 'inlineQueryResultVideo',
  /** Unique identifier of the query result */
  id: string,
  /** Video */
  video: video,
  /** Title of the video */
  title: string,
  /** Description of the video */
  description: string,
|}

/** Represents a video */
export type inlineQueryResultVideo$Input = {|
  +_: 'inlineQueryResultVideo',
  /** Unique identifier of the query result */
  +id?: string,
  /** Video */
  +video?: video$Input,
  /** Title of the video */
  +title?: string,
  /** Description of the video */
  +description?: string,
|}

/** Represents a voice note */
export type inlineQueryResultVoiceNote = {|
  _: 'inlineQueryResultVoiceNote',
  /** Unique identifier of the query result */
  id: string,
  /** Voice note */
  voice_note: voiceNote,
  /** Title of the voice note */
  title: string,
|}

/** Represents a voice note */
export type inlineQueryResultVoiceNote$Input = {|
  +_: 'inlineQueryResultVoiceNote',
  /** Unique identifier of the query result */
  +id?: string,
  /** Voice note */
  +voice_note?: voiceNote$Input,
  /** Title of the voice note */
  +title?: string,
|}

/**
 * Represents the results of the inline query. Use sendInlineQueryResultMessage to send
 * the result of the query
 */
export type inlineQueryResults = {|
  _: 'inlineQueryResults',
  /** Unique identifier of the inline query */
  inline_query_id: number | string,
  /** The offset for the next request. If empty, there are no more results */
  next_offset: string,
  /** Results of the query */
  results: Array<InlineQueryResult>,
  /**
   * If non-empty, this text should be shown on the button, which opens a private chat
   * with the bot and sends the bot a start message with the switch_pm_parameter
   */
  switch_pm_text: string,
  /** Parameter for the bot start message */
  switch_pm_parameter: string,
|}

/**
 * Represents the results of the inline query. Use sendInlineQueryResultMessage to send
 * the result of the query
 */
export type inlineQueryResults$Input = {|
  +_: 'inlineQueryResults',
  /** Unique identifier of the inline query */
  +inline_query_id?: number | string,
  /** The offset for the next request. If empty, there are no more results */
  +next_offset?: string,
  /** Results of the query */
  +results?: $ReadOnlyArray<InlineQueryResult$Input>,
  /**
   * If non-empty, this text should be shown on the button, which opens a private chat
   * with the bot and sends the bot a start message with the switch_pm_parameter
   */
  +switch_pm_text?: string,
  /** Parameter for the bot start message */
  +switch_pm_parameter?: string,
|}

/** The payload from a general callback button */
export type callbackQueryPayloadData = {|
  _: 'callbackQueryPayloadData',
  /** Data that was attached to the callback button */
  data: string,
|}

/** The payload from a general callback button */
export type callbackQueryPayloadData$Input = {|
  +_: 'callbackQueryPayloadData',
  /** Data that was attached to the callback button */
  +data?: string,
|}

/** The payload from a game callback button */
export type callbackQueryPayloadGame = {|
  _: 'callbackQueryPayloadGame',
  /** A short name of the game that was attached to the callback button */
  game_short_name: string,
|}

/** The payload from a game callback button */
export type callbackQueryPayloadGame$Input = {|
  +_: 'callbackQueryPayloadGame',
  /** A short name of the game that was attached to the callback button */
  +game_short_name?: string,
|}

/** Contains a bot's answer to a callback query */
export type callbackQueryAnswer = {|
  _: 'callbackQueryAnswer',
  /** Text of the answer */
  text: string,
  /** True, if an alert should be shown to the user instead of a toast notification */
  show_alert: boolean,
  /** URL to be opened */
  url: string,
|}

/** Contains a bot's answer to a callback query */
export type callbackQueryAnswer$Input = {|
  +_: 'callbackQueryAnswer',
  /** Text of the answer */
  +text?: string,
  /** True, if an alert should be shown to the user instead of a toast notification */
  +show_alert?: boolean,
  /** URL to be opened */
  +url?: string,
|}

/** Contains the result of a custom request */
export type customRequestResult = {|
  _: 'customRequestResult',
  /** A JSON-serialized result */
  result: string,
|}

/** Contains the result of a custom request */
export type customRequestResult$Input = {|
  +_: 'customRequestResult',
  /** A JSON-serialized result */
  +result?: string,
|}

/** Contains one row of the game high score table */
export type gameHighScore = {|
  _: 'gameHighScore',
  /** Position in the high score table */
  position: number,
  /** User identifier */
  user_id: number,
  /** User score */
  score: number,
|}

/** Contains one row of the game high score table */
export type gameHighScore$Input = {|
  +_: 'gameHighScore',
  /** Position in the high score table */
  +position?: number,
  /** User identifier */
  +user_id?: number,
  /** User score */
  +score?: number,
|}

/** Contains a list of game high scores */
export type gameHighScores = {|
  _: 'gameHighScores',
  /** A list of game high scores */
  scores: Array<gameHighScore>,
|}

/** Contains a list of game high scores */
export type gameHighScores$Input = {|
  +_: 'gameHighScores',
  /** A list of game high scores */
  +scores?: $ReadOnlyArray<gameHighScore$Input>,
|}

/** A message was edited */
export type chatEventMessageEdited = {|
  _: 'chatEventMessageEdited',
  /** The original message before the edit */
  old_message: message,
  /** The message after it was edited */
  new_message: message,
|}

/** A message was edited */
export type chatEventMessageEdited$Input = {|
  +_: 'chatEventMessageEdited',
  /** The original message before the edit */
  +old_message?: message$Input,
  /** The message after it was edited */
  +new_message?: message$Input,
|}

/** A message was deleted */
export type chatEventMessageDeleted = {|
  _: 'chatEventMessageDeleted',
  /** Deleted message */
  message: message,
|}

/** A message was deleted */
export type chatEventMessageDeleted$Input = {|
  +_: 'chatEventMessageDeleted',
  /** Deleted message */
  +message?: message$Input,
|}

/** A poll in a message was stopped */
export type chatEventPollStopped = {|
  _: 'chatEventPollStopped',
  /** The message with the poll */
  message: message,
|}

/** A poll in a message was stopped */
export type chatEventPollStopped$Input = {|
  +_: 'chatEventPollStopped',
  /** The message with the poll */
  +message?: message$Input,
|}

/** A message was pinned */
export type chatEventMessagePinned = {|
  _: 'chatEventMessagePinned',
  /** Pinned message */
  message: message,
|}

/** A message was pinned */
export type chatEventMessagePinned$Input = {|
  +_: 'chatEventMessagePinned',
  /** Pinned message */
  +message?: message$Input,
|}

/** A message was unpinned */
export type chatEventMessageUnpinned = {|
  _: 'chatEventMessageUnpinned',
|}

/** A message was unpinned */
export type chatEventMessageUnpinned$Input = {|
  +_: 'chatEventMessageUnpinned',
|}

/** A new member joined the chat */
export type chatEventMemberJoined = {|
  _: 'chatEventMemberJoined',
|}

/** A new member joined the chat */
export type chatEventMemberJoined$Input = {|
  +_: 'chatEventMemberJoined',
|}

/** A member left the chat */
export type chatEventMemberLeft = {|
  _: 'chatEventMemberLeft',
|}

/** A member left the chat */
export type chatEventMemberLeft$Input = {|
  +_: 'chatEventMemberLeft',
|}

/** A new chat member was invited */
export type chatEventMemberInvited = {|
  _: 'chatEventMemberInvited',
  /** New member user identifier */
  user_id: number,
  /** New member status */
  status: ChatMemberStatus,
|}

/** A new chat member was invited */
export type chatEventMemberInvited$Input = {|
  +_: 'chatEventMemberInvited',
  /** New member user identifier */
  +user_id?: number,
  /** New member status */
  +status?: ChatMemberStatus$Input,
|}

/**
 * A chat member has gained/lost administrator status, or the list of their administrator
 * privileges has changed
 */
export type chatEventMemberPromoted = {|
  _: 'chatEventMemberPromoted',
  /** Chat member user identifier */
  user_id: number,
  /** Previous status of the chat member */
  old_status: ChatMemberStatus,
  /** New status of the chat member */
  new_status: ChatMemberStatus,
|}

/**
 * A chat member has gained/lost administrator status, or the list of their administrator
 * privileges has changed
 */
export type chatEventMemberPromoted$Input = {|
  +_: 'chatEventMemberPromoted',
  /** Chat member user identifier */
  +user_id?: number,
  /** Previous status of the chat member */
  +old_status?: ChatMemberStatus$Input,
  /** New status of the chat member */
  +new_status?: ChatMemberStatus$Input,
|}

/**
 * A chat member was restricted/unrestricted or banned/unbanned, or the list of their
 * restrictions has changed
 */
export type chatEventMemberRestricted = {|
  _: 'chatEventMemberRestricted',
  /** Chat member user identifier */
  user_id: number,
  /** Previous status of the chat member */
  old_status: ChatMemberStatus,
  /** New status of the chat member */
  new_status: ChatMemberStatus,
|}

/**
 * A chat member was restricted/unrestricted or banned/unbanned, or the list of their
 * restrictions has changed
 */
export type chatEventMemberRestricted$Input = {|
  +_: 'chatEventMemberRestricted',
  /** Chat member user identifier */
  +user_id?: number,
  /** Previous status of the chat member */
  +old_status?: ChatMemberStatus$Input,
  /** New status of the chat member */
  +new_status?: ChatMemberStatus$Input,
|}

/** The chat title was changed */
export type chatEventTitleChanged = {|
  _: 'chatEventTitleChanged',
  /** Previous chat title */
  old_title: string,
  /** New chat title */
  new_title: string,
|}

/** The chat title was changed */
export type chatEventTitleChanged$Input = {|
  +_: 'chatEventTitleChanged',
  /** Previous chat title */
  +old_title?: string,
  /** New chat title */
  +new_title?: string,
|}

/** The chat permissions was changed */
export type chatEventPermissionsChanged = {|
  _: 'chatEventPermissionsChanged',
  /** Previous chat permissions */
  old_permissions: chatPermissions,
  /** New chat permissions */
  new_permissions: chatPermissions,
|}

/** The chat permissions was changed */
export type chatEventPermissionsChanged$Input = {|
  +_: 'chatEventPermissionsChanged',
  /** Previous chat permissions */
  +old_permissions?: chatPermissions$Input,
  /** New chat permissions */
  +new_permissions?: chatPermissions$Input,
|}

/** The chat description was changed */
export type chatEventDescriptionChanged = {|
  _: 'chatEventDescriptionChanged',
  /** Previous chat description */
  old_description: string,
  /** New chat description */
  new_description: string,
|}

/** The chat description was changed */
export type chatEventDescriptionChanged$Input = {|
  +_: 'chatEventDescriptionChanged',
  /** Previous chat description */
  +old_description?: string,
  /** New chat description */
  +new_description?: string,
|}

/** The chat username was changed */
export type chatEventUsernameChanged = {|
  _: 'chatEventUsernameChanged',
  /** Previous chat username */
  old_username: string,
  /** New chat username */
  new_username: string,
|}

/** The chat username was changed */
export type chatEventUsernameChanged$Input = {|
  +_: 'chatEventUsernameChanged',
  /** Previous chat username */
  +old_username?: string,
  /** New chat username */
  +new_username?: string,
|}

/** The chat photo was changed */
export type chatEventPhotoChanged = {|
  _: 'chatEventPhotoChanged',
  /** Previous chat photo value; may be null */
  old_photo: photo,
  /** New chat photo value; may be null */
  new_photo: photo,
|}

/** The chat photo was changed */
export type chatEventPhotoChanged$Input = {|
  +_: 'chatEventPhotoChanged',
  /** Previous chat photo value; may be null */
  +old_photo?: photo$Input,
  /** New chat photo value; may be null */
  +new_photo?: photo$Input,
|}

/** The can_invite_users permission of a supergroup chat was toggled */
export type chatEventInvitesToggled = {|
  _: 'chatEventInvitesToggled',
  /** New value of can_invite_users permission */
  can_invite_users: boolean,
|}

/** The can_invite_users permission of a supergroup chat was toggled */
export type chatEventInvitesToggled$Input = {|
  +_: 'chatEventInvitesToggled',
  /** New value of can_invite_users permission */
  +can_invite_users?: boolean,
|}

/** The linked chat of a supergroup was changed */
export type chatEventLinkedChatChanged = {|
  _: 'chatEventLinkedChatChanged',
  /** Previous supergroup linked chat identifier */
  old_linked_chat_id: number,
  /** New supergroup linked chat identifier */
  new_linked_chat_id: number,
|}

/** The linked chat of a supergroup was changed */
export type chatEventLinkedChatChanged$Input = {|
  +_: 'chatEventLinkedChatChanged',
  /** Previous supergroup linked chat identifier */
  +old_linked_chat_id?: number,
  /** New supergroup linked chat identifier */
  +new_linked_chat_id?: number,
|}

/** The slow_mode_delay setting of a supergroup was changed */
export type chatEventSlowModeDelayChanged = {|
  _: 'chatEventSlowModeDelayChanged',
  /** Previous value of slow_mode_delay */
  old_slow_mode_delay: number,
  /** New value of slow_mode_delay */
  new_slow_mode_delay: number,
|}

/** The slow_mode_delay setting of a supergroup was changed */
export type chatEventSlowModeDelayChanged$Input = {|
  +_: 'chatEventSlowModeDelayChanged',
  /** Previous value of slow_mode_delay */
  +old_slow_mode_delay?: number,
  /** New value of slow_mode_delay */
  +new_slow_mode_delay?: number,
|}

/** The sign_messages setting of a channel was toggled */
export type chatEventSignMessagesToggled = {|
  _: 'chatEventSignMessagesToggled',
  /** New value of sign_messages */
  sign_messages: boolean,
|}

/** The sign_messages setting of a channel was toggled */
export type chatEventSignMessagesToggled$Input = {|
  +_: 'chatEventSignMessagesToggled',
  /** New value of sign_messages */
  +sign_messages?: boolean,
|}

/** The supergroup sticker set was changed */
export type chatEventStickerSetChanged = {|
  _: 'chatEventStickerSetChanged',
  /** Previous identifier of the chat sticker set; 0 if none */
  old_sticker_set_id: number | string,
  /** New identifier of the chat sticker set; 0 if none */
  new_sticker_set_id: number | string,
|}

/** The supergroup sticker set was changed */
export type chatEventStickerSetChanged$Input = {|
  +_: 'chatEventStickerSetChanged',
  /** Previous identifier of the chat sticker set; 0 if none */
  +old_sticker_set_id?: number | string,
  /** New identifier of the chat sticker set; 0 if none */
  +new_sticker_set_id?: number | string,
|}

/** The supergroup location was changed */
export type chatEventLocationChanged = {|
  _: 'chatEventLocationChanged',
  /** Previous location; may be null */
  old_location: chatLocation,
  /** New location; may be null */
  new_location: chatLocation,
|}

/** The supergroup location was changed */
export type chatEventLocationChanged$Input = {|
  +_: 'chatEventLocationChanged',
  /** Previous location; may be null */
  +old_location?: chatLocation$Input,
  /** New location; may be null */
  +new_location?: chatLocation$Input,
|}

/** The is_all_history_available setting of a supergroup was toggled */
export type chatEventIsAllHistoryAvailableToggled = {|
  _: 'chatEventIsAllHistoryAvailableToggled',
  /** New value of is_all_history_available */
  is_all_history_available: boolean,
|}

/** The is_all_history_available setting of a supergroup was toggled */
export type chatEventIsAllHistoryAvailableToggled$Input = {|
  +_: 'chatEventIsAllHistoryAvailableToggled',
  /** New value of is_all_history_available */
  +is_all_history_available?: boolean,
|}

/** Represents a chat event */
export type chatEvent = {|
  _: 'chatEvent',
  /** Chat event identifier */
  id: number | string,
  /** Point in time (Unix timestamp) when the event happened */
  date: number,
  /** Identifier of the user who performed the action that triggered the event */
  user_id: number,
  /** Action performed by the user */
  action: ChatEventAction,
|}

/** Represents a chat event */
export type chatEvent$Input = {|
  +_: 'chatEvent',
  /** Chat event identifier */
  +id?: number | string,
  /** Point in time (Unix timestamp) when the event happened */
  +date?: number,
  /** Identifier of the user who performed the action that triggered the event */
  +user_id?: number,
  /** Action performed by the user */
  +action?: ChatEventAction$Input,
|}

/** Contains a list of chat events */
export type chatEvents = {|
  _: 'chatEvents',
  /** List of events */
  events: Array<chatEvent>,
|}

/** Contains a list of chat events */
export type chatEvents$Input = {|
  +_: 'chatEvents',
  /** List of events */
  +events?: $ReadOnlyArray<chatEvent$Input>,
|}

/** Represents a set of filters used to obtain a chat event log */
export type chatEventLogFilters = {|
  _: 'chatEventLogFilters',
  /** True, if message edits should be returned */
  message_edits: boolean,
  /** True, if message deletions should be returned */
  message_deletions: boolean,
  /** True, if pin/unpin events should be returned */
  message_pins: boolean,
  /** True, if members joining events should be returned */
  member_joins: boolean,
  /** True, if members leaving events should be returned */
  member_leaves: boolean,
  /** True, if invited member events should be returned */
  member_invites: boolean,
  /** True, if member promotion/demotion events should be returned */
  member_promotions: boolean,
  /** True, if member restricted/unrestricted/banned/unbanned events should be returned */
  member_restrictions: boolean,
  /** True, if changes in chat information should be returned */
  info_changes: boolean,
  /** True, if changes in chat settings should be returned */
  setting_changes: boolean,
|}

/** Represents a set of filters used to obtain a chat event log */
export type chatEventLogFilters$Input = {|
  +_: 'chatEventLogFilters',
  /** True, if message edits should be returned */
  +message_edits?: boolean,
  /** True, if message deletions should be returned */
  +message_deletions?: boolean,
  /** True, if pin/unpin events should be returned */
  +message_pins?: boolean,
  /** True, if members joining events should be returned */
  +member_joins?: boolean,
  /** True, if members leaving events should be returned */
  +member_leaves?: boolean,
  /** True, if invited member events should be returned */
  +member_invites?: boolean,
  /** True, if member promotion/demotion events should be returned */
  +member_promotions?: boolean,
  /** True, if member restricted/unrestricted/banned/unbanned events should be returned */
  +member_restrictions?: boolean,
  /** True, if changes in chat information should be returned */
  +info_changes?: boolean,
  /** True, if changes in chat settings should be returned */
  +setting_changes?: boolean,
|}

/** An ordinary language pack string */
export type languagePackStringValueOrdinary = {|
  _: 'languagePackStringValueOrdinary',
  /** String value */
  value: string,
|}

/** An ordinary language pack string */
export type languagePackStringValueOrdinary$Input = {|
  +_: 'languagePackStringValueOrdinary',
  /** String value */
  +value?: string,
|}

/**
 * A language pack string which has different forms based on the number of some object
 * it mentions. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
 * for more info
 */
export type languagePackStringValuePluralized = {|
  _: 'languagePackStringValuePluralized',
  /** Value for zero objects */
  zero_value: string,
  /** Value for one object */
  one_value: string,
  /** Value for two objects */
  two_value: string,
  /** Value for few objects */
  few_value: string,
  /** Value for many objects */
  many_value: string,
  /** Default value */
  other_value: string,
|}

/**
 * A language pack string which has different forms based on the number of some object
 * it mentions. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
 * for more info
 */
export type languagePackStringValuePluralized$Input = {|
  +_: 'languagePackStringValuePluralized',
  /** Value for zero objects */
  +zero_value?: string,
  /** Value for one object */
  +one_value?: string,
  /** Value for two objects */
  +two_value?: string,
  /** Value for few objects */
  +few_value?: string,
  /** Value for many objects */
  +many_value?: string,
  /** Default value */
  +other_value?: string,
|}

/**
 * A deleted language pack string, the value should be taken from the built-in english
 * language pack
 */
export type languagePackStringValueDeleted = {|
  _: 'languagePackStringValueDeleted',
|}

/**
 * A deleted language pack string, the value should be taken from the built-in english
 * language pack
 */
export type languagePackStringValueDeleted$Input = {|
  +_: 'languagePackStringValueDeleted',
|}

/** Represents one language pack string */
export type languagePackString = {|
  _: 'languagePackString',
  /** String key */
  key: string,
  /** String value */
  value: LanguagePackStringValue,
|}

/** Represents one language pack string */
export type languagePackString$Input = {|
  +_: 'languagePackString',
  /** String key */
  +key?: string,
  /** String value */
  +value?: LanguagePackStringValue$Input,
|}

/** Contains a list of language pack strings */
export type languagePackStrings = {|
  _: 'languagePackStrings',
  /** A list of language pack strings */
  strings: Array<languagePackString>,
|}

/** Contains a list of language pack strings */
export type languagePackStrings$Input = {|
  +_: 'languagePackStrings',
  /** A list of language pack strings */
  +strings?: $ReadOnlyArray<languagePackString$Input>,
|}

/** Contains information about a language pack */
export type languagePackInfo = {|
  _: 'languagePackInfo',
  /** Unique language pack identifier */
  id: string,
  /**
   * Identifier of a base language pack; may be empty. If a string is missed in the language
   * pack, then it should be fetched from base language pack. Unsupported in custom language
   * packs
   */
  base_language_pack_id: string,
  /** Language name */
  name: string,
  /** Name of the language in that language */
  native_name: string,
  /**
   * A language code to be used to apply plural forms. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
   * for more info
   */
  plural_code: string,
  /** True, if the language pack is official */
  is_official: boolean,
  /** True, if the language pack strings are RTL */
  is_rtl: boolean,
  /** True, if the language pack is a beta language pack */
  is_beta: boolean,
  /** True, if the language pack is installed by the current user */
  is_installed: boolean,
  /** Total number of non-deleted strings from the language pack */
  total_string_count: number,
  /** Total number of translated strings from the language pack */
  translated_string_count: number,
  /** Total number of non-deleted strings from the language pack available locally */
  local_string_count: number,
  /** Link to language translation interface; empty for custom local language packs */
  translation_url: string,
|}

/** Contains information about a language pack */
export type languagePackInfo$Input = {|
  +_: 'languagePackInfo',
  /** Unique language pack identifier */
  +id?: string,
  /**
   * Identifier of a base language pack; may be empty. If a string is missed in the language
   * pack, then it should be fetched from base language pack. Unsupported in custom language
   * packs
   */
  +base_language_pack_id?: string,
  /** Language name */
  +name?: string,
  /** Name of the language in that language */
  +native_name?: string,
  /**
   * A language code to be used to apply plural forms. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
   * for more info
   */
  +plural_code?: string,
  /** True, if the language pack is official */
  +is_official?: boolean,
  /** True, if the language pack strings are RTL */
  +is_rtl?: boolean,
  /** True, if the language pack is a beta language pack */
  +is_beta?: boolean,
  /** True, if the language pack is installed by the current user */
  +is_installed?: boolean,
  /** Total number of non-deleted strings from the language pack */
  +total_string_count?: number,
  /** Total number of translated strings from the language pack */
  +translated_string_count?: number,
  /** Total number of non-deleted strings from the language pack available locally */
  +local_string_count?: number,
  /** Link to language translation interface; empty for custom local language packs */
  +translation_url?: string,
|}

/** Contains information about the current localization target */
export type localizationTargetInfo = {|
  _: 'localizationTargetInfo',
  /** List of available language packs for this application */
  language_packs: Array<languagePackInfo>,
|}

/** Contains information about the current localization target */
export type localizationTargetInfo$Input = {|
  +_: 'localizationTargetInfo',
  /** List of available language packs for this application */
  +language_packs?: $ReadOnlyArray<languagePackInfo$Input>,
|}

/** A token for Firebase Cloud Messaging */
export type deviceTokenFirebaseCloudMessaging = {|
  _: 'deviceTokenFirebaseCloudMessaging',
  /** Device registration token; may be empty to de-register a device */
  token: string,
  /** True, if push notifications should be additionally encrypted */
  encrypt: boolean,
|}

/** A token for Firebase Cloud Messaging */
export type deviceTokenFirebaseCloudMessaging$Input = {|
  +_: 'deviceTokenFirebaseCloudMessaging',
  /** Device registration token; may be empty to de-register a device */
  +token?: string,
  /** True, if push notifications should be additionally encrypted */
  +encrypt?: boolean,
|}

/** A token for Apple Push Notification service */
export type deviceTokenApplePush = {|
  _: 'deviceTokenApplePush',
  /** Device token; may be empty to de-register a device */
  device_token: string,
  /** True, if App Sandbox is enabled */
  is_app_sandbox: boolean,
|}

/** A token for Apple Push Notification service */
export type deviceTokenApplePush$Input = {|
  +_: 'deviceTokenApplePush',
  /** Device token; may be empty to de-register a device */
  +device_token?: string,
  /** True, if App Sandbox is enabled */
  +is_app_sandbox?: boolean,
|}

/** A token for Apple Push Notification service VoIP notifications */
export type deviceTokenApplePushVoIP = {|
  _: 'deviceTokenApplePushVoIP',
  /** Device token; may be empty to de-register a device */
  device_token: string,
  /** True, if App Sandbox is enabled */
  is_app_sandbox: boolean,
  /** True, if push notifications should be additionally encrypted */
  encrypt: boolean,
|}

/** A token for Apple Push Notification service VoIP notifications */
export type deviceTokenApplePushVoIP$Input = {|
  +_: 'deviceTokenApplePushVoIP',
  /** Device token; may be empty to de-register a device */
  +device_token?: string,
  /** True, if App Sandbox is enabled */
  +is_app_sandbox?: boolean,
  /** True, if push notifications should be additionally encrypted */
  +encrypt?: boolean,
|}

/** A token for Windows Push Notification Services */
export type deviceTokenWindowsPush = {|
  _: 'deviceTokenWindowsPush',
  /**
   * The access token that will be used to send notifications; may be empty to de-register
   * a device
   */
  access_token: string,
|}

/** A token for Windows Push Notification Services */
export type deviceTokenWindowsPush$Input = {|
  +_: 'deviceTokenWindowsPush',
  /**
   * The access token that will be used to send notifications; may be empty to de-register
   * a device
   */
  +access_token?: string,
|}

/** A token for Microsoft Push Notification Service */
export type deviceTokenMicrosoftPush = {|
  _: 'deviceTokenMicrosoftPush',
  /** Push notification channel URI; may be empty to de-register a device */
  channel_uri: string,
|}

/** A token for Microsoft Push Notification Service */
export type deviceTokenMicrosoftPush$Input = {|
  +_: 'deviceTokenMicrosoftPush',
  /** Push notification channel URI; may be empty to de-register a device */
  +channel_uri?: string,
|}

/** A token for Microsoft Push Notification Service VoIP channel */
export type deviceTokenMicrosoftPushVoIP = {|
  _: 'deviceTokenMicrosoftPushVoIP',
  /** Push notification channel URI; may be empty to de-register a device */
  channel_uri: string,
|}

/** A token for Microsoft Push Notification Service VoIP channel */
export type deviceTokenMicrosoftPushVoIP$Input = {|
  +_: 'deviceTokenMicrosoftPushVoIP',
  /** Push notification channel URI; may be empty to de-register a device */
  +channel_uri?: string,
|}

/** A token for web Push API */
export type deviceTokenWebPush = {|
  _: 'deviceTokenWebPush',
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  endpoint: string,
  /** Base64url-encoded P-256 elliptic curve Diffie-Hellman public key */
  p256dh_base64url: string,
  /** Base64url-encoded authentication secret */
  auth_base64url: string,
|}

/** A token for web Push API */
export type deviceTokenWebPush$Input = {|
  +_: 'deviceTokenWebPush',
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  +endpoint?: string,
  /** Base64url-encoded P-256 elliptic curve Diffie-Hellman public key */
  +p256dh_base64url?: string,
  /** Base64url-encoded authentication secret */
  +auth_base64url?: string,
|}

/** A token for Simple Push API for Firefox OS */
export type deviceTokenSimplePush = {|
  _: 'deviceTokenSimplePush',
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  endpoint: string,
|}

/** A token for Simple Push API for Firefox OS */
export type deviceTokenSimplePush$Input = {|
  +_: 'deviceTokenSimplePush',
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  +endpoint?: string,
|}

/** A token for Ubuntu Push Client service */
export type deviceTokenUbuntuPush = {|
  _: 'deviceTokenUbuntuPush',
  /** Token; may be empty to de-register a device */
  token: string,
|}

/** A token for Ubuntu Push Client service */
export type deviceTokenUbuntuPush$Input = {|
  +_: 'deviceTokenUbuntuPush',
  /** Token; may be empty to de-register a device */
  +token?: string,
|}

/** A token for BlackBerry Push Service */
export type deviceTokenBlackBerryPush = {|
  _: 'deviceTokenBlackBerryPush',
  /** Token; may be empty to de-register a device */
  token: string,
|}

/** A token for BlackBerry Push Service */
export type deviceTokenBlackBerryPush$Input = {|
  +_: 'deviceTokenBlackBerryPush',
  /** Token; may be empty to de-register a device */
  +token?: string,
|}

/** A token for Tizen Push Service */
export type deviceTokenTizenPush = {|
  _: 'deviceTokenTizenPush',
  /** Push service registration identifier; may be empty to de-register a device */
  reg_id: string,
|}

/** A token for Tizen Push Service */
export type deviceTokenTizenPush$Input = {|
  +_: 'deviceTokenTizenPush',
  /** Push service registration identifier; may be empty to de-register a device */
  +reg_id?: string,
|}

/**
 * Contains a globally unique push receiver identifier, which can be used to identify
 * which account has received a push notification
 */
export type pushReceiverId = {|
  _: 'pushReceiverId',
  /** The globally unique identifier of push notification subscription */
  id: number | string,
|}

/**
 * Contains a globally unique push receiver identifier, which can be used to identify
 * which account has received a push notification
 */
export type pushReceiverId$Input = {|
  +_: 'pushReceiverId',
  /** The globally unique identifier of push notification subscription */
  +id?: number | string,
|}

/** Describes a solid fill of a background */
export type backgroundFillSolid = {|
  _: 'backgroundFillSolid',
  /** A color of the background in the RGB24 format */
  color: number,
|}

/** Describes a solid fill of a background */
export type backgroundFillSolid$Input = {|
  +_: 'backgroundFillSolid',
  /** A color of the background in the RGB24 format */
  +color?: number,
|}

/** Describes a gradient fill of a background */
export type backgroundFillGradient = {|
  _: 'backgroundFillGradient',
  /** A top color of the background in the RGB24 format */
  top_color: number,
  /** A bottom color of the background in the RGB24 format */
  bottom_color: number,
  /**
   * Clockwise rotation angle of the gradient, in degrees; 0-359. Should be always divisible
   * by 45
   */
  rotation_angle: number,
|}

/** Describes a gradient fill of a background */
export type backgroundFillGradient$Input = {|
  +_: 'backgroundFillGradient',
  /** A top color of the background in the RGB24 format */
  +top_color?: number,
  /** A bottom color of the background in the RGB24 format */
  +bottom_color?: number,
  /**
   * Clockwise rotation angle of the gradient, in degrees; 0-359. Should be always divisible
   * by 45
   */
  +rotation_angle?: number,
|}

/** A wallpaper in JPEG format */
export type backgroundTypeWallpaper = {|
  _: 'backgroundTypeWallpaper',
  /**
   * True, if the wallpaper must be downscaled to fit in 450x450 square and then box-blurred
   * with radius 12
   */
  is_blurred: boolean,
  /** True, if the background needs to be slightly moved when device is tilted */
  is_moving: boolean,
|}

/** A wallpaper in JPEG format */
export type backgroundTypeWallpaper$Input = {|
  +_: 'backgroundTypeWallpaper',
  /**
   * True, if the wallpaper must be downscaled to fit in 450x450 square and then box-blurred
   * with radius 12
   */
  +is_blurred?: boolean,
  /** True, if the background needs to be slightly moved when device is tilted */
  +is_moving?: boolean,
|}

/**
 * A PNG or TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern")
 * pattern to be combined with the background fill chosen by the user
 */
export type backgroundTypePattern = {|
  _: 'backgroundTypePattern',
  /** Description of the background fill */
  fill: BackgroundFill,
  /** Intensity of the pattern when it is shown above the filled background, 0-100 */
  intensity: number,
  /** True, if the background needs to be slightly moved when device is tilted */
  is_moving: boolean,
|}

/**
 * A PNG or TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern")
 * pattern to be combined with the background fill chosen by the user
 */
export type backgroundTypePattern$Input = {|
  +_: 'backgroundTypePattern',
  /** Description of the background fill */
  +fill?: BackgroundFill$Input,
  /** Intensity of the pattern when it is shown above the filled background, 0-100 */
  +intensity?: number,
  /** True, if the background needs to be slightly moved when device is tilted */
  +is_moving?: boolean,
|}

/** A filled background */
export type backgroundTypeFill = {|
  _: 'backgroundTypeFill',
  /** Description of the background fill */
  fill: BackgroundFill,
|}

/** A filled background */
export type backgroundTypeFill$Input = {|
  +_: 'backgroundTypeFill',
  /** Description of the background fill */
  +fill?: BackgroundFill$Input,
|}

/** Describes a chat background */
export type background = {|
  _: 'background',
  /** Unique background identifier */
  id: number | string,
  /** True, if this is one of default backgrounds */
  is_default: boolean,
  /** True, if the background is dark and is recommended to be used with dark theme */
  is_dark: boolean,
  /** Unique background name */
  name: string,
  /** Document with the background; may be null. Null only for filled backgrounds */
  document: document,
  /** Type of the background */
  type: BackgroundType,
|}

/** Describes a chat background */
export type background$Input = {|
  +_: 'background',
  /** Unique background identifier */
  +id?: number | string,
  /** True, if this is one of default backgrounds */
  +is_default?: boolean,
  /** True, if the background is dark and is recommended to be used with dark theme */
  +is_dark?: boolean,
  /** Unique background name */
  +name?: string,
  /** Document with the background; may be null. Null only for filled backgrounds */
  +document?: document$Input,
  /** Type of the background */
  +type?: BackgroundType$Input,
|}

/** Contains a list of backgrounds */
export type backgrounds = {|
  _: 'backgrounds',
  /** A list of backgrounds */
  backgrounds: Array<background>,
|}

/** Contains a list of backgrounds */
export type backgrounds$Input = {|
  +_: 'backgrounds',
  /** A list of backgrounds */
  +backgrounds?: $ReadOnlyArray<background$Input>,
|}

/** A background from a local file */
export type inputBackgroundLocal = {|
  _: 'inputBackgroundLocal',
  /**
   * Background file to use. Only inputFileLocal and inputFileGenerated are supported.
   * The file must be in JPEG format for wallpapers and in PNG format for patterns
   */
  background: InputFile,
|}

/** A background from a local file */
export type inputBackgroundLocal$Input = {|
  +_: 'inputBackgroundLocal',
  /**
   * Background file to use. Only inputFileLocal and inputFileGenerated are supported.
   * The file must be in JPEG format for wallpapers and in PNG format for patterns
   */
  +background?: InputFile$Input,
|}

/** A background from the server */
export type inputBackgroundRemote = {|
  _: 'inputBackgroundRemote',
  /** The background identifier */
  background_id: number | string,
|}

/** A background from the server */
export type inputBackgroundRemote$Input = {|
  +_: 'inputBackgroundRemote',
  /** The background identifier */
  +background_id?: number | string,
|}

/** Contains a list of hashtags */
export type hashtags = {|
  _: 'hashtags',
  /** A list of hashtags */
  hashtags: Array<string>,
|}

/** Contains a list of hashtags */
export type hashtags$Input = {|
  +_: 'hashtags',
  /** A list of hashtags */
  +hashtags?: $ReadOnlyArray<string>,
|}

/** The session can be used */
export type canTransferOwnershipResultOk = {|
  _: 'canTransferOwnershipResultOk',
|}

/** The session can be used */
export type canTransferOwnershipResultOk$Input = {|
  +_: 'canTransferOwnershipResultOk',
|}

/** The 2-step verification needs to be enabled first */
export type canTransferOwnershipResultPasswordNeeded = {|
  _: 'canTransferOwnershipResultPasswordNeeded',
|}

/** The 2-step verification needs to be enabled first */
export type canTransferOwnershipResultPasswordNeeded$Input = {|
  +_: 'canTransferOwnershipResultPasswordNeeded',
|}

/** The 2-step verification was enabled recently, user needs to wait */
export type canTransferOwnershipResultPasswordTooFresh = {|
  _: 'canTransferOwnershipResultPasswordTooFresh',
  /** Time left before the session can be used to transfer ownership of a chat, in seconds */
  retry_after: number,
|}

/** The 2-step verification was enabled recently, user needs to wait */
export type canTransferOwnershipResultPasswordTooFresh$Input = {|
  +_: 'canTransferOwnershipResultPasswordTooFresh',
  /** Time left before the session can be used to transfer ownership of a chat, in seconds */
  +retry_after?: number,
|}

/** The session was created recently, user needs to wait */
export type canTransferOwnershipResultSessionTooFresh = {|
  _: 'canTransferOwnershipResultSessionTooFresh',
  /** Time left before the session can be used to transfer ownership of a chat, in seconds */
  retry_after: number,
|}

/** The session was created recently, user needs to wait */
export type canTransferOwnershipResultSessionTooFresh$Input = {|
  +_: 'canTransferOwnershipResultSessionTooFresh',
  /** Time left before the session can be used to transfer ownership of a chat, in seconds */
  +retry_after?: number,
|}

/** The username can be set */
export type checkChatUsernameResultOk = {|
  _: 'checkChatUsernameResultOk',
|}

/** The username can be set */
export type checkChatUsernameResultOk$Input = {|
  +_: 'checkChatUsernameResultOk',
|}

/** The username is invalid */
export type checkChatUsernameResultUsernameInvalid = {|
  _: 'checkChatUsernameResultUsernameInvalid',
|}

/** The username is invalid */
export type checkChatUsernameResultUsernameInvalid$Input = {|
  +_: 'checkChatUsernameResultUsernameInvalid',
|}

/** The username is occupied */
export type checkChatUsernameResultUsernameOccupied = {|
  _: 'checkChatUsernameResultUsernameOccupied',
|}

/** The username is occupied */
export type checkChatUsernameResultUsernameOccupied$Input = {|
  +_: 'checkChatUsernameResultUsernameOccupied',
|}

/** The user has too much chats with username, one of them should be made private first */
export type checkChatUsernameResultPublicChatsTooMuch = {|
  _: 'checkChatUsernameResultPublicChatsTooMuch',
|}

/** The user has too much chats with username, one of them should be made private first */
export type checkChatUsernameResultPublicChatsTooMuch$Input = {|
  +_: 'checkChatUsernameResultPublicChatsTooMuch',
|}

/** The user can't be a member of a public supergroup */
export type checkChatUsernameResultPublicGroupsUnavailable = {|
  _: 'checkChatUsernameResultPublicGroupsUnavailable',
|}

/** The user can't be a member of a public supergroup */
export type checkChatUsernameResultPublicGroupsUnavailable$Input = {|
  +_: 'checkChatUsernameResultPublicGroupsUnavailable',
|}

/** A general message with hidden content */
export type pushMessageContentHidden = {|
  _: 'pushMessageContentHidden',
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A general message with hidden content */
export type pushMessageContentHidden$Input = {|
  +_: 'pushMessageContentHidden',
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** An animation message (GIF-style). */
export type pushMessageContentAnimation = {|
  _: 'pushMessageContentAnimation',
  /** Message content; may be null */
  animation: animation,
  /** Animation caption */
  caption: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** An animation message (GIF-style). */
export type pushMessageContentAnimation$Input = {|
  +_: 'pushMessageContentAnimation',
  /** Message content; may be null */
  +animation?: animation$Input,
  /** Animation caption */
  +caption?: string,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** An audio message */
export type pushMessageContentAudio = {|
  _: 'pushMessageContentAudio',
  /** Message content; may be null */
  audio: audio,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** An audio message */
export type pushMessageContentAudio$Input = {|
  +_: 'pushMessageContentAudio',
  /** Message content; may be null */
  +audio?: audio$Input,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A message with a user contact */
export type pushMessageContentContact = {|
  _: 'pushMessageContentContact',
  /** Contact's name */
  name: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A message with a user contact */
export type pushMessageContentContact$Input = {|
  +_: 'pushMessageContentContact',
  /** Contact's name */
  +name?: string,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A contact has registered with Telegram */
export type pushMessageContentContactRegistered = {|
  _: 'pushMessageContentContactRegistered',
|}

/** A contact has registered with Telegram */
export type pushMessageContentContactRegistered$Input = {|
  +_: 'pushMessageContentContactRegistered',
|}

/** A document message (a general file) */
export type pushMessageContentDocument = {|
  _: 'pushMessageContentDocument',
  /** Message content; may be null */
  document: document,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A document message (a general file) */
export type pushMessageContentDocument$Input = {|
  +_: 'pushMessageContentDocument',
  /** Message content; may be null */
  +document?: document$Input,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A message with a game */
export type pushMessageContentGame = {|
  _: 'pushMessageContentGame',
  /** Game title, empty for pinned game message */
  title: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A message with a game */
export type pushMessageContentGame$Input = {|
  +_: 'pushMessageContentGame',
  /** Game title, empty for pinned game message */
  +title?: string,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A new high score was achieved in a game */
export type pushMessageContentGameScore = {|
  _: 'pushMessageContentGameScore',
  /** Game title, empty for pinned message */
  title: string,
  /** New score, 0 for pinned message */
  score: number,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A new high score was achieved in a game */
export type pushMessageContentGameScore$Input = {|
  +_: 'pushMessageContentGameScore',
  /** Game title, empty for pinned message */
  +title?: string,
  /** New score, 0 for pinned message */
  +score?: number,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A message with an invoice from a bot */
export type pushMessageContentInvoice = {|
  _: 'pushMessageContentInvoice',
  /** Product price */
  price: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A message with an invoice from a bot */
export type pushMessageContentInvoice$Input = {|
  +_: 'pushMessageContentInvoice',
  /** Product price */
  +price?: string,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A message with a location */
export type pushMessageContentLocation = {|
  _: 'pushMessageContentLocation',
  /** True, if the location is live */
  is_live: boolean,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A message with a location */
export type pushMessageContentLocation$Input = {|
  +_: 'pushMessageContentLocation',
  /** True, if the location is live */
  +is_live?: boolean,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A photo message */
export type pushMessageContentPhoto = {|
  _: 'pushMessageContentPhoto',
  /** Message content; may be null */
  photo: photo,
  /** Photo caption */
  caption: string,
  /** True, if the photo is secret */
  is_secret: boolean,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A photo message */
export type pushMessageContentPhoto$Input = {|
  +_: 'pushMessageContentPhoto',
  /** Message content; may be null */
  +photo?: photo$Input,
  /** Photo caption */
  +caption?: string,
  /** True, if the photo is secret */
  +is_secret?: boolean,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A message with a poll */
export type pushMessageContentPoll = {|
  _: 'pushMessageContentPoll',
  /** Poll question */
  question: string,
  /** True, if the poll is regular and not in quiz mode */
  is_regular: boolean,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A message with a poll */
export type pushMessageContentPoll$Input = {|
  +_: 'pushMessageContentPoll',
  /** Poll question */
  +question?: string,
  /** True, if the poll is regular and not in quiz mode */
  +is_regular?: boolean,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A screenshot of a message in the chat has been taken */
export type pushMessageContentScreenshotTaken = {|
  _: 'pushMessageContentScreenshotTaken',
|}

/** A screenshot of a message in the chat has been taken */
export type pushMessageContentScreenshotTaken$Input = {|
  +_: 'pushMessageContentScreenshotTaken',
|}

/** A message with a sticker */
export type pushMessageContentSticker = {|
  _: 'pushMessageContentSticker',
  /** Message content; may be null */
  sticker: sticker,
  /** Emoji corresponding to the sticker; may be empty */
  emoji: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A message with a sticker */
export type pushMessageContentSticker$Input = {|
  +_: 'pushMessageContentSticker',
  /** Message content; may be null */
  +sticker?: sticker$Input,
  /** Emoji corresponding to the sticker; may be empty */
  +emoji?: string,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A text message */
export type pushMessageContentText = {|
  _: 'pushMessageContentText',
  /** Message text */
  text: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A text message */
export type pushMessageContentText$Input = {|
  +_: 'pushMessageContentText',
  /** Message text */
  +text?: string,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A video message */
export type pushMessageContentVideo = {|
  _: 'pushMessageContentVideo',
  /** Message content; may be null */
  video: video,
  /** Video caption */
  caption: string,
  /** True, if the video is secret */
  is_secret: boolean,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A video message */
export type pushMessageContentVideo$Input = {|
  +_: 'pushMessageContentVideo',
  /** Message content; may be null */
  +video?: video$Input,
  /** Video caption */
  +caption?: string,
  /** True, if the video is secret */
  +is_secret?: boolean,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A video note message */
export type pushMessageContentVideoNote = {|
  _: 'pushMessageContentVideoNote',
  /** Message content; may be null */
  video_note: videoNote,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A video note message */
export type pushMessageContentVideoNote$Input = {|
  +_: 'pushMessageContentVideoNote',
  /** Message content; may be null */
  +video_note?: videoNote$Input,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A voice note message */
export type pushMessageContentVoiceNote = {|
  _: 'pushMessageContentVoiceNote',
  /** Message content; may be null */
  voice_note: voiceNote,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
|}

/** A voice note message */
export type pushMessageContentVoiceNote$Input = {|
  +_: 'pushMessageContentVoiceNote',
  /** Message content; may be null */
  +voice_note?: voiceNote$Input,
  /** True, if the message is a pinned message with the specified content */
  +is_pinned?: boolean,
|}

/** A newly created basic group */
export type pushMessageContentBasicGroupChatCreate = {|
  _: 'pushMessageContentBasicGroupChatCreate',
|}

/** A newly created basic group */
export type pushMessageContentBasicGroupChatCreate$Input = {|
  +_: 'pushMessageContentBasicGroupChatCreate',
|}

/** New chat members were invited to a group */
export type pushMessageContentChatAddMembers = {|
  _: 'pushMessageContentChatAddMembers',
  /** Name of the added member */
  member_name: string,
  /** True, if the current user was added to the group */
  is_current_user: boolean,
  /** True, if the user has returned to the group themself */
  is_returned: boolean,
|}

/** New chat members were invited to a group */
export type pushMessageContentChatAddMembers$Input = {|
  +_: 'pushMessageContentChatAddMembers',
  /** Name of the added member */
  +member_name?: string,
  /** True, if the current user was added to the group */
  +is_current_user?: boolean,
  /** True, if the user has returned to the group themself */
  +is_returned?: boolean,
|}

/** A chat photo was edited */
export type pushMessageContentChatChangePhoto = {|
  _: 'pushMessageContentChatChangePhoto',
|}

/** A chat photo was edited */
export type pushMessageContentChatChangePhoto$Input = {|
  +_: 'pushMessageContentChatChangePhoto',
|}

/** A chat title was edited */
export type pushMessageContentChatChangeTitle = {|
  _: 'pushMessageContentChatChangeTitle',
  /** New chat title */
  title: string,
|}

/** A chat title was edited */
export type pushMessageContentChatChangeTitle$Input = {|
  +_: 'pushMessageContentChatChangeTitle',
  /** New chat title */
  +title?: string,
|}

/** A chat member was deleted */
export type pushMessageContentChatDeleteMember = {|
  _: 'pushMessageContentChatDeleteMember',
  /** Name of the deleted member */
  member_name: string,
  /** True, if the current user was deleted from the group */
  is_current_user: boolean,
  /** True, if the user has left the group themself */
  is_left: boolean,
|}

/** A chat member was deleted */
export type pushMessageContentChatDeleteMember$Input = {|
  +_: 'pushMessageContentChatDeleteMember',
  /** Name of the deleted member */
  +member_name?: string,
  /** True, if the current user was deleted from the group */
  +is_current_user?: boolean,
  /** True, if the user has left the group themself */
  +is_left?: boolean,
|}

/** A new member joined the chat by invite link */
export type pushMessageContentChatJoinByLink = {|
  _: 'pushMessageContentChatJoinByLink',
|}

/** A new member joined the chat by invite link */
export type pushMessageContentChatJoinByLink$Input = {|
  +_: 'pushMessageContentChatJoinByLink',
|}

/** A forwarded messages */
export type pushMessageContentMessageForwards = {|
  _: 'pushMessageContentMessageForwards',
  /** Number of forwarded messages */
  total_count: number,
|}

/** A forwarded messages */
export type pushMessageContentMessageForwards$Input = {|
  +_: 'pushMessageContentMessageForwards',
  /** Number of forwarded messages */
  +total_count?: number,
|}

/** A media album */
export type pushMessageContentMediaAlbum = {|
  _: 'pushMessageContentMediaAlbum',
  /** Number of messages in the album */
  total_count: number,
  /** True, if the album has at least one photo */
  has_photos: boolean,
  /** True, if the album has at least one video */
  has_videos: boolean,
|}

/** A media album */
export type pushMessageContentMediaAlbum$Input = {|
  +_: 'pushMessageContentMediaAlbum',
  /** Number of messages in the album */
  +total_count?: number,
  /** True, if the album has at least one photo */
  +has_photos?: boolean,
  /** True, if the album has at least one video */
  +has_videos?: boolean,
|}

/** New message was received */
export type notificationTypeNewMessage = {|
  _: 'notificationTypeNewMessage',
  /** The message */
  message: message,
|}

/** New message was received */
export type notificationTypeNewMessage$Input = {|
  +_: 'notificationTypeNewMessage',
  /** The message */
  +message?: message$Input,
|}

/** New secret chat was created */
export type notificationTypeNewSecretChat = {|
  _: 'notificationTypeNewSecretChat',
|}

/** New secret chat was created */
export type notificationTypeNewSecretChat$Input = {|
  +_: 'notificationTypeNewSecretChat',
|}

/** New call was received */
export type notificationTypeNewCall = {|
  _: 'notificationTypeNewCall',
  /** Call identifier */
  call_id: number,
|}

/** New call was received */
export type notificationTypeNewCall$Input = {|
  +_: 'notificationTypeNewCall',
  /** Call identifier */
  +call_id?: number,
|}

/** New message was received through a push notification */
export type notificationTypeNewPushMessage = {|
  _: 'notificationTypeNewPushMessage',
  /**
   * The message identifier. The message will not be available in the chat history, but
   * the ID can be used in viewMessages and as reply_to_message_id
   */
  message_id: number,
  /** Sender of the message. Corresponding user may be inaccessible */
  sender_user_id: number,
  /** Push message content */
  content: PushMessageContent,
|}

/** New message was received through a push notification */
export type notificationTypeNewPushMessage$Input = {|
  +_: 'notificationTypeNewPushMessage',
  /**
   * The message identifier. The message will not be available in the chat history, but
   * the ID can be used in viewMessages and as reply_to_message_id
   */
  +message_id?: number,
  /** Sender of the message. Corresponding user may be inaccessible */
  +sender_user_id?: number,
  /** Push message content */
  +content?: PushMessageContent$Input,
|}

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage
 * with ordinary unread messages
 */
export type notificationGroupTypeMessages = {|
  _: 'notificationGroupTypeMessages',
|}

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage
 * with ordinary unread messages
 */
export type notificationGroupTypeMessages$Input = {|
  +_: 'notificationGroupTypeMessages',
|}

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage
 * with unread mentions of the current user, replies to their messages, or a pinned
 * message
 */
export type notificationGroupTypeMentions = {|
  _: 'notificationGroupTypeMentions',
|}

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage
 * with unread mentions of the current user, replies to their messages, or a pinned
 * message
 */
export type notificationGroupTypeMentions$Input = {|
  +_: 'notificationGroupTypeMentions',
|}

/** A group containing a notification of type notificationTypeNewSecretChat */
export type notificationGroupTypeSecretChat = {|
  _: 'notificationGroupTypeSecretChat',
|}

/** A group containing a notification of type notificationTypeNewSecretChat */
export type notificationGroupTypeSecretChat$Input = {|
  +_: 'notificationGroupTypeSecretChat',
|}

/** A group containing notifications of type notificationTypeNewCall */
export type notificationGroupTypeCalls = {|
  _: 'notificationGroupTypeCalls',
|}

/** A group containing notifications of type notificationTypeNewCall */
export type notificationGroupTypeCalls$Input = {|
  +_: 'notificationGroupTypeCalls',
|}

/** Contains information about a notification */
export type notification = {|
  _: 'notification',
  /** Unique persistent identifier of this notification */
  id: number,
  /** Notification date */
  date: number,
  /** True, if the notification was initially silent */
  is_silent: boolean,
  /** Notification type */
  type: NotificationType,
|}

/** Contains information about a notification */
export type notification$Input = {|
  +_: 'notification',
  /** Unique persistent identifier of this notification */
  +id?: number,
  /** Notification date */
  +date?: number,
  /** True, if the notification was initially silent */
  +is_silent?: boolean,
  /** Notification type */
  +type?: NotificationType$Input,
|}

/** Describes a group of notifications */
export type notificationGroup = {|
  _: 'notificationGroup',
  /** Unique persistent auto-incremented from 1 identifier of the notification group */
  id: number,
  /** Type of the group */
  type: NotificationGroupType,
  /** Identifier of a chat to which all notifications in the group belong */
  chat_id: number,
  /** Total number of active notifications in the group */
  total_count: number,
  /** The list of active notifications */
  notifications: Array<notification>,
|}

/** Describes a group of notifications */
export type notificationGroup$Input = {|
  +_: 'notificationGroup',
  /** Unique persistent auto-incremented from 1 identifier of the notification group */
  +id?: number,
  /** Type of the group */
  +type?: NotificationGroupType$Input,
  /** Identifier of a chat to which all notifications in the group belong */
  +chat_id?: number,
  /** Total number of active notifications in the group */
  +total_count?: number,
  /** The list of active notifications */
  +notifications?: $ReadOnlyArray<notification$Input>,
|}

/** Represents a boolean option */
export type optionValueBoolean = {|
  _: 'optionValueBoolean',
  /** The value of the option */
  value: boolean,
|}

/** Represents a boolean option */
export type optionValueBoolean$Input = {|
  +_: 'optionValueBoolean',
  /** The value of the option */
  +value?: boolean,
|}

/** Represents an unknown option or an option which has a default value */
export type optionValueEmpty = {|
  _: 'optionValueEmpty',
|}

/** Represents an unknown option or an option which has a default value */
export type optionValueEmpty$Input = {|
  +_: 'optionValueEmpty',
|}

/** Represents an integer option */
export type optionValueInteger = {|
  _: 'optionValueInteger',
  /** The value of the option */
  value: number,
|}

/** Represents an integer option */
export type optionValueInteger$Input = {|
  +_: 'optionValueInteger',
  /** The value of the option */
  +value?: number,
|}

/** Represents a string option */
export type optionValueString = {|
  _: 'optionValueString',
  /** The value of the option */
  value: string,
|}

/** Represents a string option */
export type optionValueString$Input = {|
  +_: 'optionValueString',
  /** The value of the option */
  +value?: string,
|}

/** Represents one member of a JSON object */
export type jsonObjectMember = {|
  _: 'jsonObjectMember',
  /** Member's key */
  key: string,
  /** Member's value */
  value: JsonValue,
|}

/** Represents one member of a JSON object */
export type jsonObjectMember$Input = {|
  +_: 'jsonObjectMember',
  /** Member's key */
  +key?: string,
  /** Member's value */
  +value?: JsonValue$Input,
|}

/** Represents a null JSON value */
export type jsonValueNull = {|
  _: 'jsonValueNull',
|}

/** Represents a null JSON value */
export type jsonValueNull$Input = {|
  +_: 'jsonValueNull',
|}

/** Represents a boolean JSON value */
export type jsonValueBoolean = {|
  _: 'jsonValueBoolean',
  /** The value */
  value: boolean,
|}

/** Represents a boolean JSON value */
export type jsonValueBoolean$Input = {|
  +_: 'jsonValueBoolean',
  /** The value */
  +value?: boolean,
|}

/** Represents a numeric JSON value */
export type jsonValueNumber = {|
  _: 'jsonValueNumber',
  /** The value */
  value: number,
|}

/** Represents a numeric JSON value */
export type jsonValueNumber$Input = {|
  +_: 'jsonValueNumber',
  /** The value */
  +value?: number,
|}

/** Represents a string JSON value */
export type jsonValueString = {|
  _: 'jsonValueString',
  /** The value */
  value: string,
|}

/** Represents a string JSON value */
export type jsonValueString$Input = {|
  +_: 'jsonValueString',
  /** The value */
  +value?: string,
|}

/** Represents a JSON array */
export type jsonValueArray = {|
  _: 'jsonValueArray',
  /** The list of array elements */
  values: Array<JsonValue>,
|}

/** Represents a JSON array */
export type jsonValueArray$Input = {|
  +_: 'jsonValueArray',
  /** The list of array elements */
  +values?: $ReadOnlyArray<JsonValue$Input>,
|}

/** Represents a JSON object */
export type jsonValueObject = {|
  _: 'jsonValueObject',
  /** The list of object members */
  members: Array<jsonObjectMember>,
|}

/** Represents a JSON object */
export type jsonValueObject$Input = {|
  +_: 'jsonValueObject',
  /** The list of object members */
  +members?: $ReadOnlyArray<jsonObjectMember$Input>,
|}

/** A rule to allow all users to do something */
export type userPrivacySettingRuleAllowAll = {|
  _: 'userPrivacySettingRuleAllowAll',
|}

/** A rule to allow all users to do something */
export type userPrivacySettingRuleAllowAll$Input = {|
  +_: 'userPrivacySettingRuleAllowAll',
|}

/** A rule to allow all of a user's contacts to do something */
export type userPrivacySettingRuleAllowContacts = {|
  _: 'userPrivacySettingRuleAllowContacts',
|}

/** A rule to allow all of a user's contacts to do something */
export type userPrivacySettingRuleAllowContacts$Input = {|
  +_: 'userPrivacySettingRuleAllowContacts',
|}

/** A rule to allow certain specified users to do something */
export type userPrivacySettingRuleAllowUsers = {|
  _: 'userPrivacySettingRuleAllowUsers',
  /** The user identifiers, total number of users in all rules must not exceed 1000 */
  user_ids: Array<number>,
|}

/** A rule to allow certain specified users to do something */
export type userPrivacySettingRuleAllowUsers$Input = {|
  +_: 'userPrivacySettingRuleAllowUsers',
  /** The user identifiers, total number of users in all rules must not exceed 1000 */
  +user_ids?: $ReadOnlyArray<number>,
|}

/**
 * A rule to allow all members of certain specified basic groups and supergroups to
 * doing something
 */
export type userPrivacySettingRuleAllowChatMembers = {|
  _: 'userPrivacySettingRuleAllowChatMembers',
  /** The chat identifiers, total number of chats in all rules must not exceed 20 */
  chat_ids: Array<number>,
|}

/**
 * A rule to allow all members of certain specified basic groups and supergroups to
 * doing something
 */
export type userPrivacySettingRuleAllowChatMembers$Input = {|
  +_: 'userPrivacySettingRuleAllowChatMembers',
  /** The chat identifiers, total number of chats in all rules must not exceed 20 */
  +chat_ids?: $ReadOnlyArray<number>,
|}

/** A rule to restrict all users from doing something */
export type userPrivacySettingRuleRestrictAll = {|
  _: 'userPrivacySettingRuleRestrictAll',
|}

/** A rule to restrict all users from doing something */
export type userPrivacySettingRuleRestrictAll$Input = {|
  +_: 'userPrivacySettingRuleRestrictAll',
|}

/** A rule to restrict all contacts of a user from doing something */
export type userPrivacySettingRuleRestrictContacts = {|
  _: 'userPrivacySettingRuleRestrictContacts',
|}

/** A rule to restrict all contacts of a user from doing something */
export type userPrivacySettingRuleRestrictContacts$Input = {|
  +_: 'userPrivacySettingRuleRestrictContacts',
|}

/** A rule to restrict all specified users from doing something */
export type userPrivacySettingRuleRestrictUsers = {|
  _: 'userPrivacySettingRuleRestrictUsers',
  /** The user identifiers, total number of users in all rules must not exceed 1000 */
  user_ids: Array<number>,
|}

/** A rule to restrict all specified users from doing something */
export type userPrivacySettingRuleRestrictUsers$Input = {|
  +_: 'userPrivacySettingRuleRestrictUsers',
  /** The user identifiers, total number of users in all rules must not exceed 1000 */
  +user_ids?: $ReadOnlyArray<number>,
|}

/**
 * A rule to restrict all members of specified basic groups and supergroups from doing
 * something
 */
export type userPrivacySettingRuleRestrictChatMembers = {|
  _: 'userPrivacySettingRuleRestrictChatMembers',
  /** The chat identifiers, total number of chats in all rules must not exceed 20 */
  chat_ids: Array<number>,
|}

/**
 * A rule to restrict all members of specified basic groups and supergroups from doing
 * something
 */
export type userPrivacySettingRuleRestrictChatMembers$Input = {|
  +_: 'userPrivacySettingRuleRestrictChatMembers',
  /** The chat identifiers, total number of chats in all rules must not exceed 20 */
  +chat_ids?: $ReadOnlyArray<number>,
|}

/**
 * A list of privacy rules. Rules are matched in the specified order. The first matched
 * rule defines the privacy setting for a given user. If no rule matches, the action
 * is not allowed
 */
export type userPrivacySettingRules = {|
  _: 'userPrivacySettingRules',
  /** A list of rules */
  rules: Array<UserPrivacySettingRule>,
|}

/**
 * A list of privacy rules. Rules are matched in the specified order. The first matched
 * rule defines the privacy setting for a given user. If no rule matches, the action
 * is not allowed
 */
export type userPrivacySettingRules$Input = {|
  +_: 'userPrivacySettingRules',
  /** A list of rules */
  +rules?: $ReadOnlyArray<UserPrivacySettingRule$Input>,
|}

/** A privacy setting for managing whether the user's online status is visible */
export type userPrivacySettingShowStatus = {|
  _: 'userPrivacySettingShowStatus',
|}

/** A privacy setting for managing whether the user's online status is visible */
export type userPrivacySettingShowStatus$Input = {|
  +_: 'userPrivacySettingShowStatus',
|}

/** A privacy setting for managing whether the user's profile photo is visible */
export type userPrivacySettingShowProfilePhoto = {|
  _: 'userPrivacySettingShowProfilePhoto',
|}

/** A privacy setting for managing whether the user's profile photo is visible */
export type userPrivacySettingShowProfilePhoto$Input = {|
  +_: 'userPrivacySettingShowProfilePhoto',
|}

/**
 * A privacy setting for managing whether a link to the user's account is included in
 * forwarded messages
 */
export type userPrivacySettingShowLinkInForwardedMessages = {|
  _: 'userPrivacySettingShowLinkInForwardedMessages',
|}

/**
 * A privacy setting for managing whether a link to the user's account is included in
 * forwarded messages
 */
export type userPrivacySettingShowLinkInForwardedMessages$Input = {|
  +_: 'userPrivacySettingShowLinkInForwardedMessages',
|}

/** A privacy setting for managing whether the user's phone number is visible */
export type userPrivacySettingShowPhoneNumber = {|
  _: 'userPrivacySettingShowPhoneNumber',
|}

/** A privacy setting for managing whether the user's phone number is visible */
export type userPrivacySettingShowPhoneNumber$Input = {|
  +_: 'userPrivacySettingShowPhoneNumber',
|}

/** A privacy setting for managing whether the user can be invited to chats */
export type userPrivacySettingAllowChatInvites = {|
  _: 'userPrivacySettingAllowChatInvites',
|}

/** A privacy setting for managing whether the user can be invited to chats */
export type userPrivacySettingAllowChatInvites$Input = {|
  +_: 'userPrivacySettingAllowChatInvites',
|}

/** A privacy setting for managing whether the user can be called */
export type userPrivacySettingAllowCalls = {|
  _: 'userPrivacySettingAllowCalls',
|}

/** A privacy setting for managing whether the user can be called */
export type userPrivacySettingAllowCalls$Input = {|
  +_: 'userPrivacySettingAllowCalls',
|}

/** A privacy setting for managing whether peer-to-peer connections can be used for calls */
export type userPrivacySettingAllowPeerToPeerCalls = {|
  _: 'userPrivacySettingAllowPeerToPeerCalls',
|}

/** A privacy setting for managing whether peer-to-peer connections can be used for calls */
export type userPrivacySettingAllowPeerToPeerCalls$Input = {|
  +_: 'userPrivacySettingAllowPeerToPeerCalls',
|}

/**
 * A privacy setting for managing whether the user can be found by their phone number.
 * Checked only if the phone number is not known to the other user. Can be set only
 * to "Allow contacts" or "Allow all"
 */
export type userPrivacySettingAllowFindingByPhoneNumber = {|
  _: 'userPrivacySettingAllowFindingByPhoneNumber',
|}

/**
 * A privacy setting for managing whether the user can be found by their phone number.
 * Checked only if the phone number is not known to the other user. Can be set only
 * to "Allow contacts" or "Allow all"
 */
export type userPrivacySettingAllowFindingByPhoneNumber$Input = {|
  +_: 'userPrivacySettingAllowFindingByPhoneNumber',
|}

/**
 * Contains information about the period of inactivity after which the current user's
 * account will automatically be deleted
 */
export type accountTtl = {|
  _: 'accountTtl',
  /**
   * Number of days of inactivity before the account will be flagged for deletion; should
   * range from 30-366 days
   */
  days: number,
|}

/**
 * Contains information about the period of inactivity after which the current user's
 * account will automatically be deleted
 */
export type accountTtl$Input = {|
  +_: 'accountTtl',
  /**
   * Number of days of inactivity before the account will be flagged for deletion; should
   * range from 30-366 days
   */
  +days?: number,
|}

/**
 * Contains information about one session in a Telegram application used by the current
 * user. Sessions should be shown to the user in the returned order
 */
export type session = {|
  _: 'session',
  /** Session identifier */
  id: number | string,
  /** True, if this session is the current session */
  is_current: boolean,
  /** True, if a password is needed to complete authorization of the session */
  is_password_pending: boolean,
  /** Telegram API identifier, as provided by the application */
  api_id: number,
  /** Name of the application, as provided by the application */
  application_name: string,
  /** The version of the application, as provided by the application */
  application_version: string,
  /**
   * True, if the application is an official application or uses the api_id of an official
   * application
   */
  is_official_application: boolean,
  /**
   * Model of the device the application has been run or is running on, as provided by
   * the application
   */
  device_model: string,
  /**
   * Operating system the application has been run or is running on, as provided by the
   * application
   */
  platform: string,
  /**
   * Version of the operating system the application has been run or is running on, as
   * provided by the application
   */
  system_version: string,
  /** Point in time (Unix timestamp) when the user has logged in */
  log_in_date: number,
  /** Point in time (Unix timestamp) when the session was last used */
  last_active_date: number,
  /** IP address from which the session was created, in human-readable format */
  ip: string,
  /**
   * A two-letter country code for the country from which the session was created, based
   * on the IP address
   */
  country: string,
  /** Region code from which the session was created, based on the IP address */
  region: string,
|}

/**
 * Contains information about one session in a Telegram application used by the current
 * user. Sessions should be shown to the user in the returned order
 */
export type session$Input = {|
  +_: 'session',
  /** Session identifier */
  +id?: number | string,
  /** True, if this session is the current session */
  +is_current?: boolean,
  /** True, if a password is needed to complete authorization of the session */
  +is_password_pending?: boolean,
  /** Telegram API identifier, as provided by the application */
  +api_id?: number,
  /** Name of the application, as provided by the application */
  +application_name?: string,
  /** The version of the application, as provided by the application */
  +application_version?: string,
  /**
   * True, if the application is an official application or uses the api_id of an official
   * application
   */
  +is_official_application?: boolean,
  /**
   * Model of the device the application has been run or is running on, as provided by
   * the application
   */
  +device_model?: string,
  /**
   * Operating system the application has been run or is running on, as provided by the
   * application
   */
  +platform?: string,
  /**
   * Version of the operating system the application has been run or is running on, as
   * provided by the application
   */
  +system_version?: string,
  /** Point in time (Unix timestamp) when the user has logged in */
  +log_in_date?: number,
  /** Point in time (Unix timestamp) when the session was last used */
  +last_active_date?: number,
  /** IP address from which the session was created, in human-readable format */
  +ip?: string,
  /**
   * A two-letter country code for the country from which the session was created, based
   * on the IP address
   */
  +country?: string,
  /** Region code from which the session was created, based on the IP address */
  +region?: string,
|}

/** Contains a list of sessions */
export type sessions = {|
  _: 'sessions',
  /** List of sessions */
  sessions: Array<session>,
|}

/** Contains a list of sessions */
export type sessions$Input = {|
  +_: 'sessions',
  /** List of sessions */
  +sessions?: $ReadOnlyArray<session$Input>,
|}

/** Contains information about one website the current user is logged in with Telegram */
export type connectedWebsite = {|
  _: 'connectedWebsite',
  /** Website identifier */
  id: number | string,
  /** The domain name of the website */
  domain_name: string,
  /** User identifier of a bot linked with the website */
  bot_user_id: number,
  /** The version of a browser used to log in */
  browser: string,
  /** Operating system the browser is running on */
  platform: string,
  /** Point in time (Unix timestamp) when the user was logged in */
  log_in_date: number,
  /** Point in time (Unix timestamp) when obtained authorization was last used */
  last_active_date: number,
  /** IP address from which the user was logged in, in human-readable format */
  ip: string,
  /**
   * Human-readable description of a country and a region, from which the user was logged
   * in, based on the IP address
   */
  location: string,
|}

/** Contains information about one website the current user is logged in with Telegram */
export type connectedWebsite$Input = {|
  +_: 'connectedWebsite',
  /** Website identifier */
  +id?: number | string,
  /** The domain name of the website */
  +domain_name?: string,
  /** User identifier of a bot linked with the website */
  +bot_user_id?: number,
  /** The version of a browser used to log in */
  +browser?: string,
  /** Operating system the browser is running on */
  +platform?: string,
  /** Point in time (Unix timestamp) when the user was logged in */
  +log_in_date?: number,
  /** Point in time (Unix timestamp) when obtained authorization was last used */
  +last_active_date?: number,
  /** IP address from which the user was logged in, in human-readable format */
  +ip?: string,
  /**
   * Human-readable description of a country and a region, from which the user was logged
   * in, based on the IP address
   */
  +location?: string,
|}

/** Contains a list of websites the current user is logged in with Telegram */
export type connectedWebsites = {|
  _: 'connectedWebsites',
  /** List of connected websites */
  websites: Array<connectedWebsite>,
|}

/** Contains a list of websites the current user is logged in with Telegram */
export type connectedWebsites$Input = {|
  +_: 'connectedWebsites',
  /** List of connected websites */
  +websites?: $ReadOnlyArray<connectedWebsite$Input>,
|}

/** The chat contains spam messages */
export type chatReportReasonSpam = {|
  _: 'chatReportReasonSpam',
|}

/** The chat contains spam messages */
export type chatReportReasonSpam$Input = {|
  +_: 'chatReportReasonSpam',
|}

/** The chat promotes violence */
export type chatReportReasonViolence = {|
  _: 'chatReportReasonViolence',
|}

/** The chat promotes violence */
export type chatReportReasonViolence$Input = {|
  +_: 'chatReportReasonViolence',
|}

/** The chat contains pornographic messages */
export type chatReportReasonPornography = {|
  _: 'chatReportReasonPornography',
|}

/** The chat contains pornographic messages */
export type chatReportReasonPornography$Input = {|
  +_: 'chatReportReasonPornography',
|}

/** The chat has child abuse related content */
export type chatReportReasonChildAbuse = {|
  _: 'chatReportReasonChildAbuse',
|}

/** The chat has child abuse related content */
export type chatReportReasonChildAbuse$Input = {|
  +_: 'chatReportReasonChildAbuse',
|}

/** The chat contains copyrighted content */
export type chatReportReasonCopyright = {|
  _: 'chatReportReasonCopyright',
|}

/** The chat contains copyrighted content */
export type chatReportReasonCopyright$Input = {|
  +_: 'chatReportReasonCopyright',
|}

/** The location-based chat is unrelated to its stated location */
export type chatReportReasonUnrelatedLocation = {|
  _: 'chatReportReasonUnrelatedLocation',
|}

/** The location-based chat is unrelated to its stated location */
export type chatReportReasonUnrelatedLocation$Input = {|
  +_: 'chatReportReasonUnrelatedLocation',
|}

/** A custom reason provided by the user */
export type chatReportReasonCustom = {|
  _: 'chatReportReasonCustom',
  /** Report text */
  text: string,
|}

/** A custom reason provided by the user */
export type chatReportReasonCustom$Input = {|
  +_: 'chatReportReasonCustom',
  /** Report text */
  +text?: string,
|}

/** Contains a public HTTPS link to a message in a supergroup or channel with a username */
export type publicMessageLink = {|
  _: 'publicMessageLink',
  /** Message link */
  link: string,
  /** HTML-code for embedding the message */
  html: string,
|}

/** Contains a public HTTPS link to a message in a supergroup or channel with a username */
export type publicMessageLink$Input = {|
  +_: 'publicMessageLink',
  /** Message link */
  +link?: string,
  /** HTML-code for embedding the message */
  +html?: string,
|}

/** Contains information about a link to a message in a chat */
export type messageLinkInfo = {|
  _: 'messageLinkInfo',
  /** True, if the link is a public link for a message in a chat */
  is_public: boolean,
  /** If found, identifier of the chat to which the message belongs, 0 otherwise */
  chat_id: number,
  /** If found, the linked message; may be null */
  message: message,
  /** True, if the whole media album to which the message belongs is linked */
  for_album: boolean,
|}

/** Contains information about a link to a message in a chat */
export type messageLinkInfo$Input = {|
  +_: 'messageLinkInfo',
  /** True, if the link is a public link for a message in a chat */
  +is_public?: boolean,
  /** If found, identifier of the chat to which the message belongs, 0 otherwise */
  +chat_id?: number,
  /** If found, the linked message; may be null */
  +message?: message$Input,
  /** True, if the whole media album to which the message belongs is linked */
  +for_album?: boolean,
|}

/** Contains a part of a file */
export type filePart = {|
  _: 'filePart',
  /** File bytes */
  data: string,
|}

/** Contains a part of a file */
export type filePart$Input = {|
  +_: 'filePart',
  /** File bytes */
  +data?: string,
|}

/** The data is not a file */
export type fileTypeNone = {|
  _: 'fileTypeNone',
|}

/** The data is not a file */
export type fileTypeNone$Input = {|
  +_: 'fileTypeNone',
|}

/** The file is an animation */
export type fileTypeAnimation = {|
  _: 'fileTypeAnimation',
|}

/** The file is an animation */
export type fileTypeAnimation$Input = {|
  +_: 'fileTypeAnimation',
|}

/** The file is an audio file */
export type fileTypeAudio = {|
  _: 'fileTypeAudio',
|}

/** The file is an audio file */
export type fileTypeAudio$Input = {|
  +_: 'fileTypeAudio',
|}

/** The file is a document */
export type fileTypeDocument = {|
  _: 'fileTypeDocument',
|}

/** The file is a document */
export type fileTypeDocument$Input = {|
  +_: 'fileTypeDocument',
|}

/** The file is a photo */
export type fileTypePhoto = {|
  _: 'fileTypePhoto',
|}

/** The file is a photo */
export type fileTypePhoto$Input = {|
  +_: 'fileTypePhoto',
|}

/** The file is a profile photo */
export type fileTypeProfilePhoto = {|
  _: 'fileTypeProfilePhoto',
|}

/** The file is a profile photo */
export type fileTypeProfilePhoto$Input = {|
  +_: 'fileTypeProfilePhoto',
|}

/** The file was sent to a secret chat (the file type is not known to the server) */
export type fileTypeSecret = {|
  _: 'fileTypeSecret',
|}

/** The file was sent to a secret chat (the file type is not known to the server) */
export type fileTypeSecret$Input = {|
  +_: 'fileTypeSecret',
|}

/** The file is a thumbnail of a file from a secret chat */
export type fileTypeSecretThumbnail = {|
  _: 'fileTypeSecretThumbnail',
|}

/** The file is a thumbnail of a file from a secret chat */
export type fileTypeSecretThumbnail$Input = {|
  +_: 'fileTypeSecretThumbnail',
|}

/** The file is a file from Secure storage used for storing Telegram Passport files */
export type fileTypeSecure = {|
  _: 'fileTypeSecure',
|}

/** The file is a file from Secure storage used for storing Telegram Passport files */
export type fileTypeSecure$Input = {|
  +_: 'fileTypeSecure',
|}

/** The file is a sticker */
export type fileTypeSticker = {|
  _: 'fileTypeSticker',
|}

/** The file is a sticker */
export type fileTypeSticker$Input = {|
  +_: 'fileTypeSticker',
|}

/** The file is a thumbnail of another file */
export type fileTypeThumbnail = {|
  _: 'fileTypeThumbnail',
|}

/** The file is a thumbnail of another file */
export type fileTypeThumbnail$Input = {|
  +_: 'fileTypeThumbnail',
|}

/** The file type is not yet known */
export type fileTypeUnknown = {|
  _: 'fileTypeUnknown',
|}

/** The file type is not yet known */
export type fileTypeUnknown$Input = {|
  +_: 'fileTypeUnknown',
|}

/** The file is a video */
export type fileTypeVideo = {|
  _: 'fileTypeVideo',
|}

/** The file is a video */
export type fileTypeVideo$Input = {|
  +_: 'fileTypeVideo',
|}

/** The file is a video note */
export type fileTypeVideoNote = {|
  _: 'fileTypeVideoNote',
|}

/** The file is a video note */
export type fileTypeVideoNote$Input = {|
  +_: 'fileTypeVideoNote',
|}

/** The file is a voice note */
export type fileTypeVoiceNote = {|
  _: 'fileTypeVoiceNote',
|}

/** The file is a voice note */
export type fileTypeVoiceNote$Input = {|
  +_: 'fileTypeVoiceNote',
|}

/** The file is a wallpaper or a background pattern */
export type fileTypeWallpaper = {|
  _: 'fileTypeWallpaper',
|}

/** The file is a wallpaper or a background pattern */
export type fileTypeWallpaper$Input = {|
  +_: 'fileTypeWallpaper',
|}

/** Contains the storage usage statistics for a specific file type */
export type storageStatisticsByFileType = {|
  _: 'storageStatisticsByFileType',
  /** File type */
  file_type: FileType,
  /** Total size of the files */
  size: number,
  /** Total number of files */
  count: number,
|}

/** Contains the storage usage statistics for a specific file type */
export type storageStatisticsByFileType$Input = {|
  +_: 'storageStatisticsByFileType',
  /** File type */
  +file_type?: FileType$Input,
  /** Total size of the files */
  +size?: number,
  /** Total number of files */
  +count?: number,
|}

/** Contains the storage usage statistics for a specific chat */
export type storageStatisticsByChat = {|
  _: 'storageStatisticsByChat',
  /** Chat identifier; 0 if none */
  chat_id: number,
  /** Total size of the files in the chat */
  size: number,
  /** Total number of files in the chat */
  count: number,
  /** Statistics split by file types */
  by_file_type: Array<storageStatisticsByFileType>,
|}

/** Contains the storage usage statistics for a specific chat */
export type storageStatisticsByChat$Input = {|
  +_: 'storageStatisticsByChat',
  /** Chat identifier; 0 if none */
  +chat_id?: number,
  /** Total size of the files in the chat */
  +size?: number,
  /** Total number of files in the chat */
  +count?: number,
  /** Statistics split by file types */
  +by_file_type?: $ReadOnlyArray<storageStatisticsByFileType$Input>,
|}

/** Contains the exact storage usage statistics split by chats and file type */
export type storageStatistics = {|
  _: 'storageStatistics',
  /** Total size of files */
  size: number,
  /** Total number of files */
  count: number,
  /** Statistics split by chats */
  by_chat: Array<storageStatisticsByChat>,
|}

/** Contains the exact storage usage statistics split by chats and file type */
export type storageStatistics$Input = {|
  +_: 'storageStatistics',
  /** Total size of files */
  +size?: number,
  /** Total number of files */
  +count?: number,
  /** Statistics split by chats */
  +by_chat?: $ReadOnlyArray<storageStatisticsByChat$Input>,
|}

/** Contains approximate storage usage statistics, excluding files of unknown file type */
export type storageStatisticsFast = {|
  _: 'storageStatisticsFast',
  /** Approximate total size of files */
  files_size: number,
  /** Approximate number of files */
  file_count: number,
  /** Size of the database */
  database_size: number,
  /** Size of the language pack database */
  language_pack_database_size: number,
  /** Size of the TDLib internal log */
  log_size: number,
|}

/** Contains approximate storage usage statistics, excluding files of unknown file type */
export type storageStatisticsFast$Input = {|
  +_: 'storageStatisticsFast',
  /** Approximate total size of files */
  +files_size?: number,
  /** Approximate number of files */
  +file_count?: number,
  /** Size of the database */
  +database_size?: number,
  /** Size of the language pack database */
  +language_pack_database_size?: number,
  /** Size of the TDLib internal log */
  +log_size?: number,
|}

/** Contains database statistics */
export type databaseStatistics = {|
  _: 'databaseStatistics',
  /** Database statistics in an unspecified human-readable format */
  statistics: string,
|}

/** Contains database statistics */
export type databaseStatistics$Input = {|
  +_: 'databaseStatistics',
  /** Database statistics in an unspecified human-readable format */
  +statistics?: string,
|}

/** The network is not available */
export type networkTypeNone = {|
  _: 'networkTypeNone',
|}

/** The network is not available */
export type networkTypeNone$Input = {|
  +_: 'networkTypeNone',
|}

/** A mobile network */
export type networkTypeMobile = {|
  _: 'networkTypeMobile',
|}

/** A mobile network */
export type networkTypeMobile$Input = {|
  +_: 'networkTypeMobile',
|}

/** A mobile roaming network */
export type networkTypeMobileRoaming = {|
  _: 'networkTypeMobileRoaming',
|}

/** A mobile roaming network */
export type networkTypeMobileRoaming$Input = {|
  +_: 'networkTypeMobileRoaming',
|}

/** A Wi-Fi network */
export type networkTypeWiFi = {|
  _: 'networkTypeWiFi',
|}

/** A Wi-Fi network */
export type networkTypeWiFi$Input = {|
  +_: 'networkTypeWiFi',
|}

/** A different network type (e.g., Ethernet network) */
export type networkTypeOther = {|
  _: 'networkTypeOther',
|}

/** A different network type (e.g., Ethernet network) */
export type networkTypeOther$Input = {|
  +_: 'networkTypeOther',
|}

/**
 * Contains information about the total amount of data that was used to send and receive
 * files
 */
export type networkStatisticsEntryFile = {|
  _: 'networkStatisticsEntryFile',
  /** Type of the file the data is part of */
  file_type: FileType,
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  network_type: NetworkType,
  /** Total number of bytes sent */
  sent_bytes: number,
  /** Total number of bytes received */
  received_bytes: number,
|}

/**
 * Contains information about the total amount of data that was used to send and receive
 * files
 */
export type networkStatisticsEntryFile$Input = {|
  +_: 'networkStatisticsEntryFile',
  /** Type of the file the data is part of */
  +file_type?: FileType$Input,
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  +network_type?: NetworkType$Input,
  /** Total number of bytes sent */
  +sent_bytes?: number,
  /** Total number of bytes received */
  +received_bytes?: number,
|}

/** Contains information about the total amount of data that was used for calls */
export type networkStatisticsEntryCall = {|
  _: 'networkStatisticsEntryCall',
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  network_type: NetworkType,
  /** Total number of bytes sent */
  sent_bytes: number,
  /** Total number of bytes received */
  received_bytes: number,
  /** Total call duration, in seconds */
  duration: number,
|}

/** Contains information about the total amount of data that was used for calls */
export type networkStatisticsEntryCall$Input = {|
  +_: 'networkStatisticsEntryCall',
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  +network_type?: NetworkType$Input,
  /** Total number of bytes sent */
  +sent_bytes?: number,
  /** Total number of bytes received */
  +received_bytes?: number,
  /** Total call duration, in seconds */
  +duration?: number,
|}

/** A full list of available network statistic entries */
export type networkStatistics = {|
  _: 'networkStatistics',
  /** Point in time (Unix timestamp) when the app began collecting statistics */
  since_date: number,
  /** Network statistics entries */
  entries: Array<NetworkStatisticsEntry>,
|}

/** A full list of available network statistic entries */
export type networkStatistics$Input = {|
  +_: 'networkStatistics',
  /** Point in time (Unix timestamp) when the app began collecting statistics */
  +since_date?: number,
  /** Network statistics entries */
  +entries?: $ReadOnlyArray<NetworkStatisticsEntry$Input>,
|}

/** Contains auto-download settings */
export type autoDownloadSettings = {|
  _: 'autoDownloadSettings',
  /** True, if the auto-download is enabled */
  is_auto_download_enabled: boolean,
  /** The maximum size of a photo file to be auto-downloaded */
  max_photo_file_size: number,
  /** The maximum size of a video file to be auto-downloaded */
  max_video_file_size: number,
  /** The maximum size of other file types to be auto-downloaded */
  max_other_file_size: number,
  /** The maximum suggested bitrate for uploaded videos */
  video_upload_bitrate: number,
  /** True, if the beginning of videos needs to be preloaded for instant playback */
  preload_large_videos: boolean,
  /**
   * True, if the next audio track needs to be preloaded while the user is listening to
   * an audio file
   */
  preload_next_audio: boolean,
  /** True, if "use less data for calls" option needs to be enabled */
  use_less_data_for_calls: boolean,
|}

/** Contains auto-download settings */
export type autoDownloadSettings$Input = {|
  +_: 'autoDownloadSettings',
  /** True, if the auto-download is enabled */
  +is_auto_download_enabled?: boolean,
  /** The maximum size of a photo file to be auto-downloaded */
  +max_photo_file_size?: number,
  /** The maximum size of a video file to be auto-downloaded */
  +max_video_file_size?: number,
  /** The maximum size of other file types to be auto-downloaded */
  +max_other_file_size?: number,
  /** The maximum suggested bitrate for uploaded videos */
  +video_upload_bitrate?: number,
  /** True, if the beginning of videos needs to be preloaded for instant playback */
  +preload_large_videos?: boolean,
  /**
   * True, if the next audio track needs to be preloaded while the user is listening to
   * an audio file
   */
  +preload_next_audio?: boolean,
  /** True, if "use less data for calls" option needs to be enabled */
  +use_less_data_for_calls?: boolean,
|}

/** Contains auto-download settings presets for the user */
export type autoDownloadSettingsPresets = {|
  _: 'autoDownloadSettingsPresets',
  /** Preset with lowest settings; supposed to be used by default when roaming */
  low: autoDownloadSettings,
  /** Preset with medium settings; supposed to be used by default when using mobile data */
  medium: autoDownloadSettings,
  /** Preset with highest settings; supposed to be used by default when connected on Wi-Fi */
  high: autoDownloadSettings,
|}

/** Contains auto-download settings presets for the user */
export type autoDownloadSettingsPresets$Input = {|
  +_: 'autoDownloadSettingsPresets',
  /** Preset with lowest settings; supposed to be used by default when roaming */
  +low?: autoDownloadSettings$Input,
  /** Preset with medium settings; supposed to be used by default when using mobile data */
  +medium?: autoDownloadSettings$Input,
  /** Preset with highest settings; supposed to be used by default when connected on Wi-Fi */
  +high?: autoDownloadSettings$Input,
|}

/**
 * Currently waiting for the network to become available. Use setNetworkType to change
 * the available network type
 */
export type connectionStateWaitingForNetwork = {|
  _: 'connectionStateWaitingForNetwork',
|}

/**
 * Currently waiting for the network to become available. Use setNetworkType to change
 * the available network type
 */
export type connectionStateWaitingForNetwork$Input = {|
  +_: 'connectionStateWaitingForNetwork',
|}

/** Currently establishing a connection with a proxy server */
export type connectionStateConnectingToProxy = {|
  _: 'connectionStateConnectingToProxy',
|}

/** Currently establishing a connection with a proxy server */
export type connectionStateConnectingToProxy$Input = {|
  +_: 'connectionStateConnectingToProxy',
|}

/** Currently establishing a connection to the Telegram servers */
export type connectionStateConnecting = {|
  _: 'connectionStateConnecting',
|}

/** Currently establishing a connection to the Telegram servers */
export type connectionStateConnecting$Input = {|
  +_: 'connectionStateConnecting',
|}

/** Downloading data received while the client was offline */
export type connectionStateUpdating = {|
  _: 'connectionStateUpdating',
|}

/** Downloading data received while the client was offline */
export type connectionStateUpdating$Input = {|
  +_: 'connectionStateUpdating',
|}

/** There is a working connection to the Telegram servers */
export type connectionStateReady = {|
  _: 'connectionStateReady',
|}

/** There is a working connection to the Telegram servers */
export type connectionStateReady$Input = {|
  +_: 'connectionStateReady',
|}

/** A category containing frequently used private chats with non-bot users */
export type topChatCategoryUsers = {|
  _: 'topChatCategoryUsers',
|}

/** A category containing frequently used private chats with non-bot users */
export type topChatCategoryUsers$Input = {|
  +_: 'topChatCategoryUsers',
|}

/** A category containing frequently used private chats with bot users */
export type topChatCategoryBots = {|
  _: 'topChatCategoryBots',
|}

/** A category containing frequently used private chats with bot users */
export type topChatCategoryBots$Input = {|
  +_: 'topChatCategoryBots',
|}

/** A category containing frequently used basic groups and supergroups */
export type topChatCategoryGroups = {|
  _: 'topChatCategoryGroups',
|}

/** A category containing frequently used basic groups and supergroups */
export type topChatCategoryGroups$Input = {|
  +_: 'topChatCategoryGroups',
|}

/** A category containing frequently used channels */
export type topChatCategoryChannels = {|
  _: 'topChatCategoryChannels',
|}

/** A category containing frequently used channels */
export type topChatCategoryChannels$Input = {|
  +_: 'topChatCategoryChannels',
|}

/**
 * A category containing frequently used chats with inline bots sorted by their usage
 * in inline mode
 */
export type topChatCategoryInlineBots = {|
  _: 'topChatCategoryInlineBots',
|}

/**
 * A category containing frequently used chats with inline bots sorted by their usage
 * in inline mode
 */
export type topChatCategoryInlineBots$Input = {|
  +_: 'topChatCategoryInlineBots',
|}

/** A category containing frequently used chats used for calls */
export type topChatCategoryCalls = {|
  _: 'topChatCategoryCalls',
|}

/** A category containing frequently used chats used for calls */
export type topChatCategoryCalls$Input = {|
  +_: 'topChatCategoryCalls',
|}

/** A category containing frequently used chats used to forward messages */
export type topChatCategoryForwardChats = {|
  _: 'topChatCategoryForwardChats',
|}

/** A category containing frequently used chats used to forward messages */
export type topChatCategoryForwardChats$Input = {|
  +_: 'topChatCategoryForwardChats',
|}

/** A URL linking to a user */
export type tMeUrlTypeUser = {|
  _: 'tMeUrlTypeUser',
  /** Identifier of the user */
  user_id: number,
|}

/** A URL linking to a user */
export type tMeUrlTypeUser$Input = {|
  +_: 'tMeUrlTypeUser',
  /** Identifier of the user */
  +user_id?: number,
|}

/** A URL linking to a public supergroup or channel */
export type tMeUrlTypeSupergroup = {|
  _: 'tMeUrlTypeSupergroup',
  /** Identifier of the supergroup or channel */
  supergroup_id: number,
|}

/** A URL linking to a public supergroup or channel */
export type tMeUrlTypeSupergroup$Input = {|
  +_: 'tMeUrlTypeSupergroup',
  /** Identifier of the supergroup or channel */
  +supergroup_id?: number,
|}

/** A chat invite link */
export type tMeUrlTypeChatInvite = {|
  _: 'tMeUrlTypeChatInvite',
  /** Chat invite link info */
  info: chatInviteLinkInfo,
|}

/** A chat invite link */
export type tMeUrlTypeChatInvite$Input = {|
  +_: 'tMeUrlTypeChatInvite',
  /** Chat invite link info */
  +info?: chatInviteLinkInfo$Input,
|}

/** A URL linking to a sticker set */
export type tMeUrlTypeStickerSet = {|
  _: 'tMeUrlTypeStickerSet',
  /** Identifier of the sticker set */
  sticker_set_id: number | string,
|}

/** A URL linking to a sticker set */
export type tMeUrlTypeStickerSet$Input = {|
  +_: 'tMeUrlTypeStickerSet',
  /** Identifier of the sticker set */
  +sticker_set_id?: number | string,
|}

/** Represents a URL linking to an internal Telegram entity */
export type tMeUrl = {|
  _: 'tMeUrl',
  /** URL */
  url: string,
  /** Type of the URL */
  type: TMeUrlType,
|}

/** Represents a URL linking to an internal Telegram entity */
export type tMeUrl$Input = {|
  +_: 'tMeUrl',
  /** URL */
  +url?: string,
  /** Type of the URL */
  +type?: TMeUrlType$Input,
|}

/** Contains a list of t.me URLs */
export type tMeUrls = {|
  _: 'tMeUrls',
  /** List of URLs */
  urls: Array<tMeUrl>,
|}

/** Contains a list of t.me URLs */
export type tMeUrls$Input = {|
  +_: 'tMeUrls',
  /** List of URLs */
  +urls?: $ReadOnlyArray<tMeUrl$Input>,
|}

/** Contains a counter */
export type count = {|
  _: 'count',
  /** Count */
  count: number,
|}

/** Contains a counter */
export type count$Input = {|
  +_: 'count',
  /** Count */
  +count?: number,
|}

/** Contains some text */
export type text = {|
  _: 'text',
  /** Text */
  text: string,
|}

/** Contains some text */
export type text$Input = {|
  +_: 'text',
  /** Text */
  +text?: string,
|}

/** Contains a value representing a number of seconds */
export type seconds = {|
  _: 'seconds',
  /** Number of seconds */
  seconds: number,
|}

/** Contains a value representing a number of seconds */
export type seconds$Input = {|
  +_: 'seconds',
  /** Number of seconds */
  +seconds?: number,
|}

/** Contains information about a tg:// deep link */
export type deepLinkInfo = {|
  _: 'deepLinkInfo',
  /** Text to be shown to the user */
  text: formattedText,
  /** True, if user should be asked to update the application */
  need_update_application: boolean,
|}

/** Contains information about a tg:// deep link */
export type deepLinkInfo$Input = {|
  +_: 'deepLinkInfo',
  /** Text to be shown to the user */
  +text?: formattedText$Input,
  /** True, if user should be asked to update the application */
  +need_update_application?: boolean,
|}

/** The text should be parsed in markdown-style */
export type textParseModeMarkdown = {|
  _: 'textParseModeMarkdown',
  /**
   * Version of the parser: 0 or 1 - Bot API Markdown parse mode, 2 - Bot API MarkdownV2
   * parse mode
   */
  version: number,
|}

/** The text should be parsed in markdown-style */
export type textParseModeMarkdown$Input = {|
  +_: 'textParseModeMarkdown',
  /**
   * Version of the parser: 0 or 1 - Bot API Markdown parse mode, 2 - Bot API MarkdownV2
   * parse mode
   */
  +version?: number,
|}

/** The text should be parsed in HTML-style */
export type textParseModeHTML = {|
  _: 'textParseModeHTML',
|}

/** The text should be parsed in HTML-style */
export type textParseModeHTML$Input = {|
  +_: 'textParseModeHTML',
|}

/** A SOCKS5 proxy server */
export type proxyTypeSocks5 = {|
  _: 'proxyTypeSocks5',
  /** Username for logging in; may be empty */
  username: string,
  /** Password for logging in; may be empty */
  password: string,
|}

/** A SOCKS5 proxy server */
export type proxyTypeSocks5$Input = {|
  +_: 'proxyTypeSocks5',
  /** Username for logging in; may be empty */
  +username?: string,
  /** Password for logging in; may be empty */
  +password?: string,
|}

/** A HTTP transparent proxy server */
export type proxyTypeHttp = {|
  _: 'proxyTypeHttp',
  /** Username for logging in; may be empty */
  username: string,
  /** Password for logging in; may be empty */
  password: string,
  /**
   * Pass true, if the proxy supports only HTTP requests and doesn't support transparent
   * TCP connections via HTTP CONNECT method
   */
  http_only: boolean,
|}

/** A HTTP transparent proxy server */
export type proxyTypeHttp$Input = {|
  +_: 'proxyTypeHttp',
  /** Username for logging in; may be empty */
  +username?: string,
  /** Password for logging in; may be empty */
  +password?: string,
  /**
   * Pass true, if the proxy supports only HTTP requests and doesn't support transparent
   * TCP connections via HTTP CONNECT method
   */
  +http_only?: boolean,
|}

/** An MTProto proxy server */
export type proxyTypeMtproto = {|
  _: 'proxyTypeMtproto',
  /** The proxy's secret in hexadecimal encoding */
  secret: string,
|}

/** An MTProto proxy server */
export type proxyTypeMtproto$Input = {|
  +_: 'proxyTypeMtproto',
  /** The proxy's secret in hexadecimal encoding */
  +secret?: string,
|}

/** Contains information about a proxy server */
export type proxy = {|
  _: 'proxy',
  /** Unique identifier of the proxy */
  id: number,
  /** Proxy server IP address */
  server: string,
  /** Proxy server port */
  port: number,
  /** Point in time (Unix timestamp) when the proxy was last used; 0 if never */
  last_used_date: number,
  /** True, if the proxy is enabled now */
  is_enabled: boolean,
  /** Type of the proxy */
  type: ProxyType,
|}

/** Contains information about a proxy server */
export type proxy$Input = {|
  +_: 'proxy',
  /** Unique identifier of the proxy */
  +id?: number,
  /** Proxy server IP address */
  +server?: string,
  /** Proxy server port */
  +port?: number,
  /** Point in time (Unix timestamp) when the proxy was last used; 0 if never */
  +last_used_date?: number,
  /** True, if the proxy is enabled now */
  +is_enabled?: boolean,
  /** Type of the proxy */
  +type?: ProxyType$Input,
|}

/** Represents a list of proxy servers */
export type proxies = {|
  _: 'proxies',
  /** List of proxy servers */
  proxies: Array<proxy>,
|}

/** Represents a list of proxy servers */
export type proxies$Input = {|
  +_: 'proxies',
  /** List of proxy servers */
  +proxies?: $ReadOnlyArray<proxy$Input>,
|}

/** Describes a sticker that should be added to a sticker set */
export type inputSticker = {|
  _: 'inputSticker',
  /** PNG image with the sticker; must be up to 512 kB in size and fit in a 512x512 square */
  png_sticker: InputFile,
  /** Emoji corresponding to the sticker */
  emojis: string,
  /** For masks, position where the mask should be placed; may be null */
  mask_position: maskPosition,
|}

/** Describes a sticker that should be added to a sticker set */
export type inputSticker$Input = {|
  +_: 'inputSticker',
  /** PNG image with the sticker; must be up to 512 kB in size and fit in a 512x512 square */
  +png_sticker?: InputFile$Input,
  /** Emoji corresponding to the sticker */
  +emojis?: string,
  /** For masks, position where the mask should be placed; may be null */
  +mask_position?: maskPosition$Input,
|}

/** The user authorization state has changed */
export type updateAuthorizationState = {|
  _: 'updateAuthorizationState',
  /** New authorization state */
  authorization_state: AuthorizationState,
|}

/** The user authorization state has changed */
export type updateAuthorizationState$Input = {|
  +_: 'updateAuthorizationState',
  /** New authorization state */
  +authorization_state?: AuthorizationState$Input,
|}

/** A new message was received; can also be an outgoing message */
export type updateNewMessage = {|
  _: 'updateNewMessage',
  /** The new message */
  message: message,
|}

/** A new message was received; can also be an outgoing message */
export type updateNewMessage$Input = {|
  +_: 'updateNewMessage',
  /** The new message */
  +message?: message$Input,
|}

/**
 * A request to send a message has reached the Telegram server. This doesn't mean that
 * the message will be sent successfully or even that the send message request will
 * be processed. This update will be sent only if the option "use_quick_ack" is set
 * to true. This update may be sent multiple times for the same message
 */
export type updateMessageSendAcknowledged = {|
  _: 'updateMessageSendAcknowledged',
  /** The chat identifier of the sent message */
  chat_id: number,
  /** A temporary message identifier */
  message_id: number,
|}

/**
 * A request to send a message has reached the Telegram server. This doesn't mean that
 * the message will be sent successfully or even that the send message request will
 * be processed. This update will be sent only if the option "use_quick_ack" is set
 * to true. This update may be sent multiple times for the same message
 */
export type updateMessageSendAcknowledged$Input = {|
  +_: 'updateMessageSendAcknowledged',
  /** The chat identifier of the sent message */
  +chat_id?: number,
  /** A temporary message identifier */
  +message_id?: number,
|}

/** A message has been successfully sent */
export type updateMessageSendSucceeded = {|
  _: 'updateMessageSendSucceeded',
  /**
   * Information about the sent message. Usually only the message identifier, date, and
   * content are changed, but almost all other fields can also change
   */
  message: message,
  /** The previous temporary message identifier */
  old_message_id: number,
|}

/** A message has been successfully sent */
export type updateMessageSendSucceeded$Input = {|
  +_: 'updateMessageSendSucceeded',
  /**
   * Information about the sent message. Usually only the message identifier, date, and
   * content are changed, but almost all other fields can also change
   */
  +message?: message$Input,
  /** The previous temporary message identifier */
  +old_message_id?: number,
|}

/**
 * A message failed to send. Be aware that some messages being sent can be irrecoverably
 * deleted, in which case updateDeleteMessages will be received instead of this update
 */
export type updateMessageSendFailed = {|
  _: 'updateMessageSendFailed',
  /** Contains information about the message which failed to send */
  message: message,
  /** The previous temporary message identifier */
  old_message_id: number,
  /** An error code */
  error_code: number,
  /** Error message */
  error_message: string,
|}

/**
 * A message failed to send. Be aware that some messages being sent can be irrecoverably
 * deleted, in which case updateDeleteMessages will be received instead of this update
 */
export type updateMessageSendFailed$Input = {|
  +_: 'updateMessageSendFailed',
  /** Contains information about the message which failed to send */
  +message?: message$Input,
  /** The previous temporary message identifier */
  +old_message_id?: number,
  /** An error code */
  +error_code?: number,
  /** Error message */
  +error_message?: string,
|}

/** The message content has changed */
export type updateMessageContent = {|
  _: 'updateMessageContent',
  /** Chat identifier */
  chat_id: number,
  /** Message identifier */
  message_id: number,
  /** New message content */
  new_content: MessageContent,
|}

/** The message content has changed */
export type updateMessageContent$Input = {|
  +_: 'updateMessageContent',
  /** Chat identifier */
  +chat_id?: number,
  /** Message identifier */
  +message_id?: number,
  /** New message content */
  +new_content?: MessageContent$Input,
|}

/** A message was edited. Changes in the message content will come in a separate updateMessageContent */
export type updateMessageEdited = {|
  _: 'updateMessageEdited',
  /** Chat identifier */
  chat_id: number,
  /** Message identifier */
  message_id: number,
  /** Point in time (Unix timestamp) when the message was edited */
  edit_date: number,
  /** New message reply markup; may be null */
  reply_markup: ReplyMarkup,
|}

/** A message was edited. Changes in the message content will come in a separate updateMessageContent */
export type updateMessageEdited$Input = {|
  +_: 'updateMessageEdited',
  /** Chat identifier */
  +chat_id?: number,
  /** Message identifier */
  +message_id?: number,
  /** Point in time (Unix timestamp) when the message was edited */
  +edit_date?: number,
  /** New message reply markup; may be null */
  +reply_markup?: ReplyMarkup$Input,
|}

/** The view count of the message has changed */
export type updateMessageViews = {|
  _: 'updateMessageViews',
  /** Chat identifier */
  chat_id: number,
  /** Message identifier */
  message_id: number,
  /** New value of the view count */
  views: number,
|}

/** The view count of the message has changed */
export type updateMessageViews$Input = {|
  +_: 'updateMessageViews',
  /** Chat identifier */
  +chat_id?: number,
  /** Message identifier */
  +message_id?: number,
  /** New value of the view count */
  +views?: number,
|}

/**
 * The message content was opened. Updates voice note messages to "listened", video
 * note messages to "viewed" and starts the TTL timer for self-destructing messages
 */
export type updateMessageContentOpened = {|
  _: 'updateMessageContentOpened',
  /** Chat identifier */
  chat_id: number,
  /** Message identifier */
  message_id: number,
|}

/**
 * The message content was opened. Updates voice note messages to "listened", video
 * note messages to "viewed" and starts the TTL timer for self-destructing messages
 */
export type updateMessageContentOpened$Input = {|
  +_: 'updateMessageContentOpened',
  /** Chat identifier */
  +chat_id?: number,
  /** Message identifier */
  +message_id?: number,
|}

/** A message with an unread mention was read */
export type updateMessageMentionRead = {|
  _: 'updateMessageMentionRead',
  /** Chat identifier */
  chat_id: number,
  /** Message identifier */
  message_id: number,
  /** The new number of unread mention messages left in the chat */
  unread_mention_count: number,
|}

/** A message with an unread mention was read */
export type updateMessageMentionRead$Input = {|
  +_: 'updateMessageMentionRead',
  /** Chat identifier */
  +chat_id?: number,
  /** Message identifier */
  +message_id?: number,
  /** The new number of unread mention messages left in the chat */
  +unread_mention_count?: number,
|}

/**
 * A message with a live location was viewed. When the update is received, the client
 * is supposed to update the live location
 */
export type updateMessageLiveLocationViewed = {|
  _: 'updateMessageLiveLocationViewed',
  /** Identifier of the chat with the live location message */
  chat_id: number,
  /** Identifier of the message with live location */
  message_id: number,
|}

/**
 * A message with a live location was viewed. When the update is received, the client
 * is supposed to update the live location
 */
export type updateMessageLiveLocationViewed$Input = {|
  +_: 'updateMessageLiveLocationViewed',
  /** Identifier of the chat with the live location message */
  +chat_id?: number,
  /** Identifier of the message with live location */
  +message_id?: number,
|}

/**
 * A new chat has been loaded/created. This update is guaranteed to come before the
 * chat identifier is returned to the client. The chat field changes will be reported
 * through separate updates
 */
export type updateNewChat = {|
  _: 'updateNewChat',
  /** The chat */
  chat: chat,
|}

/**
 * A new chat has been loaded/created. This update is guaranteed to come before the
 * chat identifier is returned to the client. The chat field changes will be reported
 * through separate updates
 */
export type updateNewChat$Input = {|
  +_: 'updateNewChat',
  /** The chat */
  +chat?: chat$Input,
|}

/**
 * The list to which the chat belongs was changed. This update is guaranteed to be sent
 * only when chat.order == 0 and the current or the new chat list is null
 */
export type updateChatChatList = {|
  _: 'updateChatChatList',
  /** Chat identifier */
  chat_id: number,
  /** The new chat's chat list; may be null */
  chat_list: ChatList,
|}

/**
 * The list to which the chat belongs was changed. This update is guaranteed to be sent
 * only when chat.order == 0 and the current or the new chat list is null
 */
export type updateChatChatList$Input = {|
  +_: 'updateChatChatList',
  /** Chat identifier */
  +chat_id?: number,
  /** The new chat's chat list; may be null */
  +chat_list?: ChatList$Input,
|}

/** The title of a chat was changed */
export type updateChatTitle = {|
  _: 'updateChatTitle',
  /** Chat identifier */
  chat_id: number,
  /** The new chat title */
  title: string,
|}

/** The title of a chat was changed */
export type updateChatTitle$Input = {|
  +_: 'updateChatTitle',
  /** Chat identifier */
  +chat_id?: number,
  /** The new chat title */
  +title?: string,
|}

/** A chat photo was changed */
export type updateChatPhoto = {|
  _: 'updateChatPhoto',
  /** Chat identifier */
  chat_id: number,
  /** The new chat photo; may be null */
  photo: chatPhoto,
|}

/** A chat photo was changed */
export type updateChatPhoto$Input = {|
  +_: 'updateChatPhoto',
  /** Chat identifier */
  +chat_id?: number,
  /** The new chat photo; may be null */
  +photo?: chatPhoto$Input,
|}

/** Chat permissions was changed */
export type updateChatPermissions = {|
  _: 'updateChatPermissions',
  /** Chat identifier */
  chat_id: number,
  /** The new chat permissions */
  permissions: chatPermissions,
|}

/** Chat permissions was changed */
export type updateChatPermissions$Input = {|
  +_: 'updateChatPermissions',
  /** Chat identifier */
  +chat_id?: number,
  /** The new chat permissions */
  +permissions?: chatPermissions$Input,
|}

/**
 * The last message of a chat was changed. If last_message is null, then the last message
 * in the chat became unknown. Some new unknown messages might be added to the chat
 * in this case
 */
export type updateChatLastMessage = {|
  _: 'updateChatLastMessage',
  /** Chat identifier */
  chat_id: number,
  /** The new last message in the chat; may be null */
  last_message: message,
  /** New value of the chat order */
  order: number | string,
|}

/**
 * The last message of a chat was changed. If last_message is null, then the last message
 * in the chat became unknown. Some new unknown messages might be added to the chat
 * in this case
 */
export type updateChatLastMessage$Input = {|
  +_: 'updateChatLastMessage',
  /** Chat identifier */
  +chat_id?: number,
  /** The new last message in the chat; may be null */
  +last_message?: message$Input,
  /** New value of the chat order */
  +order?: number | string,
|}

/**
 * The order of the chat in the chat list has changed. Instead of this update updateChatLastMessage,
 * updateChatIsPinned, updateChatDraftMessage, or updateChatIsSponsored might be sent
 */
export type updateChatOrder = {|
  _: 'updateChatOrder',
  /** Chat identifier */
  chat_id: number,
  /** New value of the order */
  order: number | string,
|}

/**
 * The order of the chat in the chat list has changed. Instead of this update updateChatLastMessage,
 * updateChatIsPinned, updateChatDraftMessage, or updateChatIsSponsored might be sent
 */
export type updateChatOrder$Input = {|
  +_: 'updateChatOrder',
  /** Chat identifier */
  +chat_id?: number,
  /** New value of the order */
  +order?: number | string,
|}

/** A chat was pinned or unpinned */
export type updateChatIsPinned = {|
  _: 'updateChatIsPinned',
  /** Chat identifier */
  chat_id: number,
  /** New value of is_pinned */
  is_pinned: boolean,
  /** New value of the chat order */
  order: number | string,
|}

/** A chat was pinned or unpinned */
export type updateChatIsPinned$Input = {|
  +_: 'updateChatIsPinned',
  /** Chat identifier */
  +chat_id?: number,
  /** New value of is_pinned */
  +is_pinned?: boolean,
  /** New value of the chat order */
  +order?: number | string,
|}

/** A chat was marked as unread or was read */
export type updateChatIsMarkedAsUnread = {|
  _: 'updateChatIsMarkedAsUnread',
  /** Chat identifier */
  chat_id: number,
  /** New value of is_marked_as_unread */
  is_marked_as_unread: boolean,
|}

/** A chat was marked as unread or was read */
export type updateChatIsMarkedAsUnread$Input = {|
  +_: 'updateChatIsMarkedAsUnread',
  /** Chat identifier */
  +chat_id?: number,
  /** New value of is_marked_as_unread */
  +is_marked_as_unread?: boolean,
|}

/** A chat's is_sponsored field has changed */
export type updateChatIsSponsored = {|
  _: 'updateChatIsSponsored',
  /** Chat identifier */
  chat_id: number,
  /** New value of is_sponsored */
  is_sponsored: boolean,
  /** New value of chat order */
  order: number | string,
|}

/** A chat's is_sponsored field has changed */
export type updateChatIsSponsored$Input = {|
  +_: 'updateChatIsSponsored',
  /** Chat identifier */
  +chat_id?: number,
  /** New value of is_sponsored */
  +is_sponsored?: boolean,
  /** New value of chat order */
  +order?: number | string,
|}

/** A chat's has_scheduled_messages field has changed */
export type updateChatHasScheduledMessages = {|
  _: 'updateChatHasScheduledMessages',
  /** Chat identifier */
  chat_id: number,
  /** New value of has_scheduled_messages */
  has_scheduled_messages: boolean,
|}

/** A chat's has_scheduled_messages field has changed */
export type updateChatHasScheduledMessages$Input = {|
  +_: 'updateChatHasScheduledMessages',
  /** Chat identifier */
  +chat_id?: number,
  /** New value of has_scheduled_messages */
  +has_scheduled_messages?: boolean,
|}

/**
 * The value of the default disable_notification parameter, used when a message is sent
 * to the chat, was changed
 */
export type updateChatDefaultDisableNotification = {|
  _: 'updateChatDefaultDisableNotification',
  /** Chat identifier */
  chat_id: number,
  /** The new default_disable_notification value */
  default_disable_notification: boolean,
|}

/**
 * The value of the default disable_notification parameter, used when a message is sent
 * to the chat, was changed
 */
export type updateChatDefaultDisableNotification$Input = {|
  +_: 'updateChatDefaultDisableNotification',
  /** Chat identifier */
  +chat_id?: number,
  /** The new default_disable_notification value */
  +default_disable_notification?: boolean,
|}

/** Incoming messages were read or number of unread messages has been changed */
export type updateChatReadInbox = {|
  _: 'updateChatReadInbox',
  /** Chat identifier */
  chat_id: number,
  /** Identifier of the last read incoming message */
  last_read_inbox_message_id: number,
  /** The number of unread messages left in the chat */
  unread_count: number,
|}

/** Incoming messages were read or number of unread messages has been changed */
export type updateChatReadInbox$Input = {|
  +_: 'updateChatReadInbox',
  /** Chat identifier */
  +chat_id?: number,
  /** Identifier of the last read incoming message */
  +last_read_inbox_message_id?: number,
  /** The number of unread messages left in the chat */
  +unread_count?: number,
|}

/** Outgoing messages were read */
export type updateChatReadOutbox = {|
  _: 'updateChatReadOutbox',
  /** Chat identifier */
  chat_id: number,
  /** Identifier of last read outgoing message */
  last_read_outbox_message_id: number,
|}

/** Outgoing messages were read */
export type updateChatReadOutbox$Input = {|
  +_: 'updateChatReadOutbox',
  /** Chat identifier */
  +chat_id?: number,
  /** Identifier of last read outgoing message */
  +last_read_outbox_message_id?: number,
|}

/** The chat unread_mention_count has changed */
export type updateChatUnreadMentionCount = {|
  _: 'updateChatUnreadMentionCount',
  /** Chat identifier */
  chat_id: number,
  /** The number of unread mention messages left in the chat */
  unread_mention_count: number,
|}

/** The chat unread_mention_count has changed */
export type updateChatUnreadMentionCount$Input = {|
  +_: 'updateChatUnreadMentionCount',
  /** Chat identifier */
  +chat_id?: number,
  /** The number of unread mention messages left in the chat */
  +unread_mention_count?: number,
|}

/** Notification settings for a chat were changed */
export type updateChatNotificationSettings = {|
  _: 'updateChatNotificationSettings',
  /** Chat identifier */
  chat_id: number,
  /** The new notification settings */
  notification_settings: chatNotificationSettings,
|}

/** Notification settings for a chat were changed */
export type updateChatNotificationSettings$Input = {|
  +_: 'updateChatNotificationSettings',
  /** Chat identifier */
  +chat_id?: number,
  /** The new notification settings */
  +notification_settings?: chatNotificationSettings$Input,
|}

/** Notification settings for some type of chats were updated */
export type updateScopeNotificationSettings = {|
  _: 'updateScopeNotificationSettings',
  /** Types of chats for which notification settings were updated */
  scope: NotificationSettingsScope,
  /** The new notification settings */
  notification_settings: scopeNotificationSettings,
|}

/** Notification settings for some type of chats were updated */
export type updateScopeNotificationSettings$Input = {|
  +_: 'updateScopeNotificationSettings',
  /** Types of chats for which notification settings were updated */
  +scope?: NotificationSettingsScope$Input,
  /** The new notification settings */
  +notification_settings?: scopeNotificationSettings$Input,
|}

/** The chat action bar was changed */
export type updateChatActionBar = {|
  _: 'updateChatActionBar',
  /** Chat identifier */
  chat_id: number,
  /** The new value of the action bar; may be null */
  action_bar: ChatActionBar,
|}

/** The chat action bar was changed */
export type updateChatActionBar$Input = {|
  +_: 'updateChatActionBar',
  /** Chat identifier */
  +chat_id?: number,
  /** The new value of the action bar; may be null */
  +action_bar?: ChatActionBar$Input,
|}

/** The chat pinned message was changed */
export type updateChatPinnedMessage = {|
  _: 'updateChatPinnedMessage',
  /** Chat identifier */
  chat_id: number,
  /**
   * The new identifier of the pinned message; 0 if there is no pinned message in the
   * chat
   */
  pinned_message_id: number,
|}

/** The chat pinned message was changed */
export type updateChatPinnedMessage$Input = {|
  +_: 'updateChatPinnedMessage',
  /** Chat identifier */
  +chat_id?: number,
  /**
   * The new identifier of the pinned message; 0 if there is no pinned message in the
   * chat
   */
  +pinned_message_id?: number,
|}

/**
 * The default chat reply markup was changed. Can occur because new messages with reply
 * markup were received or because an old reply markup was hidden by the user
 */
export type updateChatReplyMarkup = {|
  _: 'updateChatReplyMarkup',
  /** Chat identifier */
  chat_id: number,
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  reply_markup_message_id: number,
|}

/**
 * The default chat reply markup was changed. Can occur because new messages with reply
 * markup were received or because an old reply markup was hidden by the user
 */
export type updateChatReplyMarkup$Input = {|
  +_: 'updateChatReplyMarkup',
  /** Chat identifier */
  +chat_id?: number,
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  +reply_markup_message_id?: number,
|}

/**
 * A chat draft has changed. Be aware that the update may come in the currently opened
 * chat but with old content of the draft. If the user has changed the content of the
 * draft, this update shouldn't be applied
 */
export type updateChatDraftMessage = {|
  _: 'updateChatDraftMessage',
  /** Chat identifier */
  chat_id: number,
  /** The new draft message; may be null */
  draft_message: draftMessage,
  /** New value of the chat order */
  order: number | string,
|}

/**
 * A chat draft has changed. Be aware that the update may come in the currently opened
 * chat but with old content of the draft. If the user has changed the content of the
 * draft, this update shouldn't be applied
 */
export type updateChatDraftMessage$Input = {|
  +_: 'updateChatDraftMessage',
  /** Chat identifier */
  +chat_id?: number,
  /** The new draft message; may be null */
  +draft_message?: draftMessage$Input,
  /** New value of the chat order */
  +order?: number | string,
|}

/**
 * The number of online group members has changed. This update with non-zero count is
 * sent only for currently opened chats. There is no guarantee that it will be sent
 * just after the count has changed
 */
export type updateChatOnlineMemberCount = {|
  _: 'updateChatOnlineMemberCount',
  /** Identifier of the chat */
  chat_id: number,
  /** New number of online members in the chat, or 0 if unknown */
  online_member_count: number,
|}

/**
 * The number of online group members has changed. This update with non-zero count is
 * sent only for currently opened chats. There is no guarantee that it will be sent
 * just after the count has changed
 */
export type updateChatOnlineMemberCount$Input = {|
  +_: 'updateChatOnlineMemberCount',
  /** Identifier of the chat */
  +chat_id?: number,
  /** New number of online members in the chat, or 0 if unknown */
  +online_member_count?: number,
|}

/** A notification was changed */
export type updateNotification = {|
  _: 'updateNotification',
  /** Unique notification group identifier */
  notification_group_id: number,
  /** Changed notification */
  notification: notification,
|}

/** A notification was changed */
export type updateNotification$Input = {|
  +_: 'updateNotification',
  /** Unique notification group identifier */
  +notification_group_id?: number,
  /** Changed notification */
  +notification?: notification$Input,
|}

/** A list of active notifications in a notification group has changed */
export type updateNotificationGroup = {|
  _: 'updateNotificationGroup',
  /** Unique notification group identifier */
  notification_group_id: number,
  /** New type of the notification group */
  type: NotificationGroupType,
  /** Identifier of a chat to which all notifications in the group belong */
  chat_id: number,
  /** Chat identifier, which notification settings must be applied to the added notifications */
  notification_settings_chat_id: number,
  /** True, if the notifications should be shown without sound */
  is_silent: boolean,
  /**
   * Total number of unread notifications in the group, can be bigger than number of active
   * notifications
   */
  total_count: number,
  /** List of added group notifications, sorted by notification ID */
  added_notifications: Array<notification>,
  /** Identifiers of removed group notifications, sorted by notification ID */
  removed_notification_ids: Array<number>,
|}

/** A list of active notifications in a notification group has changed */
export type updateNotificationGroup$Input = {|
  +_: 'updateNotificationGroup',
  /** Unique notification group identifier */
  +notification_group_id?: number,
  /** New type of the notification group */
  +type?: NotificationGroupType$Input,
  /** Identifier of a chat to which all notifications in the group belong */
  +chat_id?: number,
  /** Chat identifier, which notification settings must be applied to the added notifications */
  +notification_settings_chat_id?: number,
  /** True, if the notifications should be shown without sound */
  +is_silent?: boolean,
  /**
   * Total number of unread notifications in the group, can be bigger than number of active
   * notifications
   */
  +total_count?: number,
  /** List of added group notifications, sorted by notification ID */
  +added_notifications?: $ReadOnlyArray<notification$Input>,
  /** Identifiers of removed group notifications, sorted by notification ID */
  +removed_notification_ids?: $ReadOnlyArray<number>,
|}

/**
 * Contains active notifications that was shown on previous application launches. This
 * update is sent only if the message database is used. In that case it comes once before
 * any updateNotification and updateNotificationGroup update
 */
export type updateActiveNotifications = {|
  _: 'updateActiveNotifications',
  /** Lists of active notification groups */
  groups: Array<notificationGroup>,
|}

/**
 * Contains active notifications that was shown on previous application launches. This
 * update is sent only if the message database is used. In that case it comes once before
 * any updateNotification and updateNotificationGroup update
 */
export type updateActiveNotifications$Input = {|
  +_: 'updateActiveNotifications',
  /** Lists of active notification groups */
  +groups?: $ReadOnlyArray<notificationGroup$Input>,
|}

/**
 * Describes whether there are some pending notification updates. Can be used to prevent
 * application from killing, while there are some pending notifications
 */
export type updateHavePendingNotifications = {|
  _: 'updateHavePendingNotifications',
  /** True, if there are some delayed notification updates, which will be sent soon */
  have_delayed_notifications: boolean,
  /**
   * True, if there can be some yet unreceived notifications, which are being fetched
   * from the server
   */
  have_unreceived_notifications: boolean,
|}

/**
 * Describes whether there are some pending notification updates. Can be used to prevent
 * application from killing, while there are some pending notifications
 */
export type updateHavePendingNotifications$Input = {|
  +_: 'updateHavePendingNotifications',
  /** True, if there are some delayed notification updates, which will be sent soon */
  +have_delayed_notifications?: boolean,
  /**
   * True, if there can be some yet unreceived notifications, which are being fetched
   * from the server
   */
  +have_unreceived_notifications?: boolean,
|}

/** Some messages were deleted */
export type updateDeleteMessages = {|
  _: 'updateDeleteMessages',
  /** Chat identifier */
  chat_id: number,
  /** Identifiers of the deleted messages */
  message_ids: Array<number>,
  /**
   * True, if the messages are permanently deleted by a user (as opposed to just becoming
   * inaccessible)
   */
  is_permanent: boolean,
  /**
   * True, if the messages are deleted only from the cache and can possibly be retrieved
   * again in the future
   */
  from_cache: boolean,
|}

/** Some messages were deleted */
export type updateDeleteMessages$Input = {|
  +_: 'updateDeleteMessages',
  /** Chat identifier */
  +chat_id?: number,
  /** Identifiers of the deleted messages */
  +message_ids?: $ReadOnlyArray<number>,
  /**
   * True, if the messages are permanently deleted by a user (as opposed to just becoming
   * inaccessible)
   */
  +is_permanent?: boolean,
  /**
   * True, if the messages are deleted only from the cache and can possibly be retrieved
   * again in the future
   */
  +from_cache?: boolean,
|}

/** User activity in the chat has changed */
export type updateUserChatAction = {|
  _: 'updateUserChatAction',
  /** Chat identifier */
  chat_id: number,
  /** Identifier of a user performing an action */
  user_id: number,
  /** The action description */
  action: ChatAction,
|}

/** User activity in the chat has changed */
export type updateUserChatAction$Input = {|
  +_: 'updateUserChatAction',
  /** Chat identifier */
  +chat_id?: number,
  /** Identifier of a user performing an action */
  +user_id?: number,
  /** The action description */
  +action?: ChatAction$Input,
|}

/** The user went online or offline */
export type updateUserStatus = {|
  _: 'updateUserStatus',
  /** User identifier */
  user_id: number,
  /** New status of the user */
  status: UserStatus,
|}

/** The user went online or offline */
export type updateUserStatus$Input = {|
  +_: 'updateUserStatus',
  /** User identifier */
  +user_id?: number,
  /** New status of the user */
  +status?: UserStatus$Input,
|}

/**
 * Some data of a user has changed. This update is guaranteed to come before the user
 * identifier is returned to the client
 */
export type updateUser = {|
  _: 'updateUser',
  /** New data about the user */
  user: user,
|}

/**
 * Some data of a user has changed. This update is guaranteed to come before the user
 * identifier is returned to the client
 */
export type updateUser$Input = {|
  +_: 'updateUser',
  /** New data about the user */
  +user?: user$Input,
|}

/**
 * Some data of a basic group has changed. This update is guaranteed to come before
 * the basic group identifier is returned to the client
 */
export type updateBasicGroup = {|
  _: 'updateBasicGroup',
  /** New data about the group */
  basic_group: basicGroup,
|}

/**
 * Some data of a basic group has changed. This update is guaranteed to come before
 * the basic group identifier is returned to the client
 */
export type updateBasicGroup$Input = {|
  +_: 'updateBasicGroup',
  /** New data about the group */
  +basic_group?: basicGroup$Input,
|}

/**
 * Some data of a supergroup or a channel has changed. This update is guaranteed to
 * come before the supergroup identifier is returned to the client
 */
export type updateSupergroup = {|
  _: 'updateSupergroup',
  /** New data about the supergroup */
  supergroup: supergroup,
|}

/**
 * Some data of a supergroup or a channel has changed. This update is guaranteed to
 * come before the supergroup identifier is returned to the client
 */
export type updateSupergroup$Input = {|
  +_: 'updateSupergroup',
  /** New data about the supergroup */
  +supergroup?: supergroup$Input,
|}

/**
 * Some data of a secret chat has changed. This update is guaranteed to come before
 * the secret chat identifier is returned to the client
 */
export type updateSecretChat = {|
  _: 'updateSecretChat',
  /** New data about the secret chat */
  secret_chat: secretChat,
|}

/**
 * Some data of a secret chat has changed. This update is guaranteed to come before
 * the secret chat identifier is returned to the client
 */
export type updateSecretChat$Input = {|
  +_: 'updateSecretChat',
  /** New data about the secret chat */
  +secret_chat?: secretChat$Input,
|}

/** Some data from userFullInfo has been changed */
export type updateUserFullInfo = {|
  _: 'updateUserFullInfo',
  /** User identifier */
  user_id: number,
  /** New full information about the user */
  user_full_info: userFullInfo,
|}

/** Some data from userFullInfo has been changed */
export type updateUserFullInfo$Input = {|
  +_: 'updateUserFullInfo',
  /** User identifier */
  +user_id?: number,
  /** New full information about the user */
  +user_full_info?: userFullInfo$Input,
|}

/** Some data from basicGroupFullInfo has been changed */
export type updateBasicGroupFullInfo = {|
  _: 'updateBasicGroupFullInfo',
  /** Identifier of a basic group */
  basic_group_id: number,
  /** New full information about the group */
  basic_group_full_info: basicGroupFullInfo,
|}

/** Some data from basicGroupFullInfo has been changed */
export type updateBasicGroupFullInfo$Input = {|
  +_: 'updateBasicGroupFullInfo',
  /** Identifier of a basic group */
  +basic_group_id?: number,
  /** New full information about the group */
  +basic_group_full_info?: basicGroupFullInfo$Input,
|}

/** Some data from supergroupFullInfo has been changed */
export type updateSupergroupFullInfo = {|
  _: 'updateSupergroupFullInfo',
  /** Identifier of the supergroup or channel */
  supergroup_id: number,
  /** New full information about the supergroup */
  supergroup_full_info: supergroupFullInfo,
|}

/** Some data from supergroupFullInfo has been changed */
export type updateSupergroupFullInfo$Input = {|
  +_: 'updateSupergroupFullInfo',
  /** Identifier of the supergroup or channel */
  +supergroup_id?: number,
  /** New full information about the supergroup */
  +supergroup_full_info?: supergroupFullInfo$Input,
|}

/**
 * Service notification from the server. Upon receiving this the client must show a
 * popup with the content of the notification
 */
export type updateServiceNotification = {|
  _: 'updateServiceNotification',
  /**
   * Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel"
   * and "Log out" should be shown under notification; if user presses the second, all
   * local data should be destroyed using Destroy method
   */
  type: string,
  /** Notification content */
  content: MessageContent,
|}

/**
 * Service notification from the server. Upon receiving this the client must show a
 * popup with the content of the notification
 */
export type updateServiceNotification$Input = {|
  +_: 'updateServiceNotification',
  /**
   * Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel"
   * and "Log out" should be shown under notification; if user presses the second, all
   * local data should be destroyed using Destroy method
   */
  +type?: string,
  /** Notification content */
  +content?: MessageContent$Input,
|}

/** Information about a file was updated */
export type updateFile = {|
  _: 'updateFile',
  /** New data about the file */
  file: file,
|}

/** Information about a file was updated */
export type updateFile$Input = {|
  +_: 'updateFile',
  /** New data about the file */
  +file?: file$Input,
|}

/** The file generation process needs to be started by the client */
export type updateFileGenerationStart = {|
  _: 'updateFileGenerationStart',
  /** Unique identifier for the generation process */
  generation_id: number | string,
  /** The path to a file from which a new file is generated; may be empty */
  original_path: string,
  /** The path to a file that should be created and where the new file should be generated */
  destination_path: string,
  /**
   * String specifying the conversion applied to the original file. If conversion is "#url#"
   * than original_path contains an HTTP/HTTPS URL of a file, which should be downloaded
   * by the client
   */
  conversion: string,
|}

/** The file generation process needs to be started by the client */
export type updateFileGenerationStart$Input = {|
  +_: 'updateFileGenerationStart',
  /** Unique identifier for the generation process */
  +generation_id?: number | string,
  /** The path to a file from which a new file is generated; may be empty */
  +original_path?: string,
  /** The path to a file that should be created and where the new file should be generated */
  +destination_path?: string,
  /**
   * String specifying the conversion applied to the original file. If conversion is "#url#"
   * than original_path contains an HTTP/HTTPS URL of a file, which should be downloaded
   * by the client
   */
  +conversion?: string,
|}

/** File generation is no longer needed */
export type updateFileGenerationStop = {|
  _: 'updateFileGenerationStop',
  /** Unique identifier for the generation process */
  generation_id: number | string,
|}

/** File generation is no longer needed */
export type updateFileGenerationStop$Input = {|
  +_: 'updateFileGenerationStop',
  /** Unique identifier for the generation process */
  +generation_id?: number | string,
|}

/** New call was created or information about a call was updated */
export type updateCall = {|
  _: 'updateCall',
  /** New data about a call */
  call: call,
|}

/** New call was created or information about a call was updated */
export type updateCall$Input = {|
  +_: 'updateCall',
  /** New data about a call */
  +call?: call$Input,
|}

/** Some privacy setting rules have been changed */
export type updateUserPrivacySettingRules = {|
  _: 'updateUserPrivacySettingRules',
  /** The privacy setting */
  setting: UserPrivacySetting,
  /** New privacy rules */
  rules: userPrivacySettingRules,
|}

/** Some privacy setting rules have been changed */
export type updateUserPrivacySettingRules$Input = {|
  +_: 'updateUserPrivacySettingRules',
  /** The privacy setting */
  +setting?: UserPrivacySetting$Input,
  /** New privacy rules */
  +rules?: userPrivacySettingRules$Input,
|}

/**
 * Number of unread messages in a chat list has changed. This update is sent only if
 * the message database is used
 */
export type updateUnreadMessageCount = {|
  _: 'updateUnreadMessageCount',
  /** The chat list with changed number of unread messages */
  chat_list: ChatList,
  /** Total number of unread messages */
  unread_count: number,
  /** Total number of unread messages in unmuted chats */
  unread_unmuted_count: number,
|}

/**
 * Number of unread messages in a chat list has changed. This update is sent only if
 * the message database is used
 */
export type updateUnreadMessageCount$Input = {|
  +_: 'updateUnreadMessageCount',
  /** The chat list with changed number of unread messages */
  +chat_list?: ChatList$Input,
  /** Total number of unread messages */
  +unread_count?: number,
  /** Total number of unread messages in unmuted chats */
  +unread_unmuted_count?: number,
|}

/**
 * Number of unread chats, i.e. with unread messages or marked as unread, has changed.
 * This update is sent only if the message database is used
 */
export type updateUnreadChatCount = {|
  _: 'updateUnreadChatCount',
  /** The chat list with changed number of unread messages */
  chat_list: ChatList,
  /** Approximate total number of chats in the chat list */
  total_count: number,
  /** Total number of unread chats */
  unread_count: number,
  /** Total number of unread unmuted chats */
  unread_unmuted_count: number,
  /** Total number of chats marked as unread */
  marked_as_unread_count: number,
  /** Total number of unmuted chats marked as unread */
  marked_as_unread_unmuted_count: number,
|}

/**
 * Number of unread chats, i.e. with unread messages or marked as unread, has changed.
 * This update is sent only if the message database is used
 */
export type updateUnreadChatCount$Input = {|
  +_: 'updateUnreadChatCount',
  /** The chat list with changed number of unread messages */
  +chat_list?: ChatList$Input,
  /** Approximate total number of chats in the chat list */
  +total_count?: number,
  /** Total number of unread chats */
  +unread_count?: number,
  /** Total number of unread unmuted chats */
  +unread_unmuted_count?: number,
  /** Total number of chats marked as unread */
  +marked_as_unread_count?: number,
  /** Total number of unmuted chats marked as unread */
  +marked_as_unread_unmuted_count?: number,
|}

/** An option changed its value */
export type updateOption = {|
  _: 'updateOption',
  /** The option name */
  name: string,
  /** The new option value */
  value: OptionValue,
|}

/** An option changed its value */
export type updateOption$Input = {|
  +_: 'updateOption',
  /** The option name */
  +name?: string,
  /** The new option value */
  +value?: OptionValue$Input,
|}

/** The list of installed sticker sets was updated */
export type updateInstalledStickerSets = {|
  _: 'updateInstalledStickerSets',
  /** True, if the list of installed mask sticker sets was updated */
  is_masks: boolean,
  /** The new list of installed ordinary sticker sets */
  sticker_set_ids: Array<number | string>,
|}

/** The list of installed sticker sets was updated */
export type updateInstalledStickerSets$Input = {|
  +_: 'updateInstalledStickerSets',
  /** True, if the list of installed mask sticker sets was updated */
  +is_masks?: boolean,
  /** The new list of installed ordinary sticker sets */
  +sticker_set_ids?: $ReadOnlyArray<number | string>,
|}

/** The list of trending sticker sets was updated or some of them were viewed */
export type updateTrendingStickerSets = {|
  _: 'updateTrendingStickerSets',
  /** The new list of trending sticker sets */
  sticker_sets: stickerSets,
|}

/** The list of trending sticker sets was updated or some of them were viewed */
export type updateTrendingStickerSets$Input = {|
  +_: 'updateTrendingStickerSets',
  /** The new list of trending sticker sets */
  +sticker_sets?: stickerSets$Input,
|}

/** The list of recently used stickers was updated */
export type updateRecentStickers = {|
  _: 'updateRecentStickers',
  /**
   * True, if the list of stickers attached to photo or video files was updated, otherwise
   * the list of sent stickers is updated
   */
  is_attached: boolean,
  /** The new list of file identifiers of recently used stickers */
  sticker_ids: Array<number>,
|}

/** The list of recently used stickers was updated */
export type updateRecentStickers$Input = {|
  +_: 'updateRecentStickers',
  /**
   * True, if the list of stickers attached to photo or video files was updated, otherwise
   * the list of sent stickers is updated
   */
  +is_attached?: boolean,
  /** The new list of file identifiers of recently used stickers */
  +sticker_ids?: $ReadOnlyArray<number>,
|}

/** The list of favorite stickers was updated */
export type updateFavoriteStickers = {|
  _: 'updateFavoriteStickers',
  /** The new list of file identifiers of favorite stickers */
  sticker_ids: Array<number>,
|}

/** The list of favorite stickers was updated */
export type updateFavoriteStickers$Input = {|
  +_: 'updateFavoriteStickers',
  /** The new list of file identifiers of favorite stickers */
  +sticker_ids?: $ReadOnlyArray<number>,
|}

/** The list of saved animations was updated */
export type updateSavedAnimations = {|
  _: 'updateSavedAnimations',
  /** The new list of file identifiers of saved animations */
  animation_ids: Array<number>,
|}

/** The list of saved animations was updated */
export type updateSavedAnimations$Input = {|
  +_: 'updateSavedAnimations',
  /** The new list of file identifiers of saved animations */
  +animation_ids?: $ReadOnlyArray<number>,
|}

/** The selected background has changed */
export type updateSelectedBackground = {|
  _: 'updateSelectedBackground',
  /** True, if background for dark theme has changed */
  for_dark_theme: boolean,
  /** The new selected background; may be null */
  background: background,
|}

/** The selected background has changed */
export type updateSelectedBackground$Input = {|
  +_: 'updateSelectedBackground',
  /** True, if background for dark theme has changed */
  +for_dark_theme?: boolean,
  /** The new selected background; may be null */
  +background?: background$Input,
|}

/** Some language pack strings have been updated */
export type updateLanguagePackStrings = {|
  _: 'updateLanguagePackStrings',
  /** Localization target to which the language pack belongs */
  localization_target: string,
  /** Identifier of the updated language pack */
  language_pack_id: string,
  /** List of changed language pack strings */
  strings: Array<languagePackString>,
|}

/** Some language pack strings have been updated */
export type updateLanguagePackStrings$Input = {|
  +_: 'updateLanguagePackStrings',
  /** Localization target to which the language pack belongs */
  +localization_target?: string,
  /** Identifier of the updated language pack */
  +language_pack_id?: string,
  /** List of changed language pack strings */
  +strings?: $ReadOnlyArray<languagePackString$Input>,
|}

/** The connection state has changed */
export type updateConnectionState = {|
  _: 'updateConnectionState',
  /** The new connection state */
  state: ConnectionState,
|}

/** The connection state has changed */
export type updateConnectionState$Input = {|
  +_: 'updateConnectionState',
  /** The new connection state */
  +state?: ConnectionState$Input,
|}

/**
 * New terms of service must be accepted by the user. If the terms of service are declined,
 * then the deleteAccount method should be called with the reason "Decline ToS update"
 */
export type updateTermsOfService = {|
  _: 'updateTermsOfService',
  /** Identifier of the terms of service */
  terms_of_service_id: string,
  /** The new terms of service */
  terms_of_service: termsOfService,
|}

/**
 * New terms of service must be accepted by the user. If the terms of service are declined,
 * then the deleteAccount method should be called with the reason "Decline ToS update"
 */
export type updateTermsOfService$Input = {|
  +_: 'updateTermsOfService',
  /** Identifier of the terms of service */
  +terms_of_service_id?: string,
  /** The new terms of service */
  +terms_of_service?: termsOfService$Input,
|}

/**
 * List of users nearby has changed. The update is sent only 60 seconds after a successful
 * searchChatsNearby request
 */
export type updateUsersNearby = {|
  _: 'updateUsersNearby',
  /** The new list of users nearby */
  users_nearby: Array<chatNearby>,
|}

/**
 * List of users nearby has changed. The update is sent only 60 seconds after a successful
 * searchChatsNearby request
 */
export type updateUsersNearby$Input = {|
  +_: 'updateUsersNearby',
  /** The new list of users nearby */
  +users_nearby?: $ReadOnlyArray<chatNearby$Input>,
|}

/** A new incoming inline query; for bots only */
export type updateNewInlineQuery = {|
  _: 'updateNewInlineQuery',
  /** Unique query identifier */
  id: number | string,
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** User location, provided by the client; may be null */
  user_location: location,
  /** Text of the query */
  query: string,
  /** Offset of the first entry to return */
  offset: string,
|}

/** A new incoming inline query; for bots only */
export type updateNewInlineQuery$Input = {|
  +_: 'updateNewInlineQuery',
  /** Unique query identifier */
  +id?: number | string,
  /** Identifier of the user who sent the query */
  +sender_user_id?: number,
  /** User location, provided by the client; may be null */
  +user_location?: location$Input,
  /** Text of the query */
  +query?: string,
  /** Offset of the first entry to return */
  +offset?: string,
|}

/** The user has chosen a result of an inline query; for bots only */
export type updateNewChosenInlineResult = {|
  _: 'updateNewChosenInlineResult',
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** User location, provided by the client; may be null */
  user_location: location,
  /** Text of the query */
  query: string,
  /** Identifier of the chosen result */
  result_id: string,
  /** Identifier of the sent inline message, if known */
  inline_message_id: string,
|}

/** The user has chosen a result of an inline query; for bots only */
export type updateNewChosenInlineResult$Input = {|
  +_: 'updateNewChosenInlineResult',
  /** Identifier of the user who sent the query */
  +sender_user_id?: number,
  /** User location, provided by the client; may be null */
  +user_location?: location$Input,
  /** Text of the query */
  +query?: string,
  /** Identifier of the chosen result */
  +result_id?: string,
  /** Identifier of the sent inline message, if known */
  +inline_message_id?: string,
|}

/** A new incoming callback query; for bots only */
export type updateNewCallbackQuery = {|
  _: 'updateNewCallbackQuery',
  /** Unique query identifier */
  id: number | string,
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** Identifier of the chat where the query was sent */
  chat_id: number,
  /** Identifier of the message, from which the query originated */
  message_id: number,
  /** Identifier that uniquely corresponds to the chat to which the message was sent */
  chat_instance: number | string,
  /** Query payload */
  payload: CallbackQueryPayload,
|}

/** A new incoming callback query; for bots only */
export type updateNewCallbackQuery$Input = {|
  +_: 'updateNewCallbackQuery',
  /** Unique query identifier */
  +id?: number | string,
  /** Identifier of the user who sent the query */
  +sender_user_id?: number,
  /** Identifier of the chat where the query was sent */
  +chat_id?: number,
  /** Identifier of the message, from which the query originated */
  +message_id?: number,
  /** Identifier that uniquely corresponds to the chat to which the message was sent */
  +chat_instance?: number | string,
  /** Query payload */
  +payload?: CallbackQueryPayload$Input,
|}

/** A new incoming callback query from a message sent via a bot; for bots only */
export type updateNewInlineCallbackQuery = {|
  _: 'updateNewInlineCallbackQuery',
  /** Unique query identifier */
  id: number | string,
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** Identifier of the inline message, from which the query originated */
  inline_message_id: string,
  /** An identifier uniquely corresponding to the chat a message was sent to */
  chat_instance: number | string,
  /** Query payload */
  payload: CallbackQueryPayload,
|}

/** A new incoming callback query from a message sent via a bot; for bots only */
export type updateNewInlineCallbackQuery$Input = {|
  +_: 'updateNewInlineCallbackQuery',
  /** Unique query identifier */
  +id?: number | string,
  /** Identifier of the user who sent the query */
  +sender_user_id?: number,
  /** Identifier of the inline message, from which the query originated */
  +inline_message_id?: string,
  /** An identifier uniquely corresponding to the chat a message was sent to */
  +chat_instance?: number | string,
  /** Query payload */
  +payload?: CallbackQueryPayload$Input,
|}

/** A new incoming shipping query; for bots only. Only for invoices with flexible price */
export type updateNewShippingQuery = {|
  _: 'updateNewShippingQuery',
  /** Unique query identifier */
  id: number | string,
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** Invoice payload */
  invoice_payload: string,
  /** User shipping address */
  shipping_address: address,
|}

/** A new incoming shipping query; for bots only. Only for invoices with flexible price */
export type updateNewShippingQuery$Input = {|
  +_: 'updateNewShippingQuery',
  /** Unique query identifier */
  +id?: number | string,
  /** Identifier of the user who sent the query */
  +sender_user_id?: number,
  /** Invoice payload */
  +invoice_payload?: string,
  /** User shipping address */
  +shipping_address?: address$Input,
|}

/**
 * A new incoming pre-checkout query; for bots only. Contains full information about
 * a checkout
 */
export type updateNewPreCheckoutQuery = {|
  _: 'updateNewPreCheckoutQuery',
  /** Unique query identifier */
  id: number | string,
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** Currency for the product price */
  currency: string,
  /** Total price for the product, in the minimal quantity of the currency */
  total_amount: number,
  /** Invoice payload */
  invoice_payload: string,
  /** Identifier of a shipping option chosen by the user; may be empty if not applicable */
  shipping_option_id: string,
  /** Information about the order; may be null */
  order_info: orderInfo,
|}

/**
 * A new incoming pre-checkout query; for bots only. Contains full information about
 * a checkout
 */
export type updateNewPreCheckoutQuery$Input = {|
  +_: 'updateNewPreCheckoutQuery',
  /** Unique query identifier */
  +id?: number | string,
  /** Identifier of the user who sent the query */
  +sender_user_id?: number,
  /** Currency for the product price */
  +currency?: string,
  /** Total price for the product, in the minimal quantity of the currency */
  +total_amount?: number,
  /** Invoice payload */
  +invoice_payload?: string,
  /** Identifier of a shipping option chosen by the user; may be empty if not applicable */
  +shipping_option_id?: string,
  /** Information about the order; may be null */
  +order_info?: orderInfo$Input,
|}

/** A new incoming event; for bots only */
export type updateNewCustomEvent = {|
  _: 'updateNewCustomEvent',
  /** A JSON-serialized event */
  event: string,
|}

/** A new incoming event; for bots only */
export type updateNewCustomEvent$Input = {|
  +_: 'updateNewCustomEvent',
  /** A JSON-serialized event */
  +event?: string,
|}

/** A new incoming query; for bots only */
export type updateNewCustomQuery = {|
  _: 'updateNewCustomQuery',
  /** The query identifier */
  id: number | string,
  /** JSON-serialized query data */
  data: string,
  /** Query timeout */
  timeout: number,
|}

/** A new incoming query; for bots only */
export type updateNewCustomQuery$Input = {|
  +_: 'updateNewCustomQuery',
  /** The query identifier */
  +id?: number | string,
  /** JSON-serialized query data */
  +data?: string,
  /** Query timeout */
  +timeout?: number,
|}

/** A poll was updated; for bots only */
export type updatePoll = {|
  _: 'updatePoll',
  /** New data about the poll */
  poll: poll,
|}

/** A poll was updated; for bots only */
export type updatePoll$Input = {|
  +_: 'updatePoll',
  /** New data about the poll */
  +poll?: poll$Input,
|}

/** A user changed the answer to a poll; for bots only */
export type updatePollAnswer = {|
  _: 'updatePollAnswer',
  /** Unique poll identifier */
  poll_id: number | string,
  /** The user, who changed the answer to the poll */
  user_id: number,
  /** 0-based identifiers of answer options, chosen by the user */
  option_ids: Array<number>,
|}

/** A user changed the answer to a poll; for bots only */
export type updatePollAnswer$Input = {|
  +_: 'updatePollAnswer',
  /** Unique poll identifier */
  +poll_id?: number | string,
  /** The user, who changed the answer to the poll */
  +user_id?: number,
  /** 0-based identifiers of answer options, chosen by the user */
  +option_ids?: $ReadOnlyArray<number>,
|}

/** Contains a list of updates */
export type updates = {|
  _: 'updates',
  /** List of updates */
  updates: Array<Update>,
|}

/** Contains a list of updates */
export type updates$Input = {|
  +_: 'updates',
  /** List of updates */
  +updates?: $ReadOnlyArray<Update$Input>,
|}

/** The log is written to stderr or an OS specific log */
export type logStreamDefault = {|
  _: 'logStreamDefault',
|}

/** The log is written to stderr or an OS specific log */
export type logStreamDefault$Input = {|
  +_: 'logStreamDefault',
|}

/** The log is written to a file */
export type logStreamFile = {|
  _: 'logStreamFile',
  /** Path to the file to where the internal TDLib log will be written */
  path: string,
  /**
   * The maximum size of the file to where the internal TDLib log is written before the
   * file will be auto-rotated
   */
  max_file_size: number,
|}

/** The log is written to a file */
export type logStreamFile$Input = {|
  +_: 'logStreamFile',
  /** Path to the file to where the internal TDLib log will be written */
  +path?: string,
  /**
   * The maximum size of the file to where the internal TDLib log is written before the
   * file will be auto-rotated
   */
  +max_file_size?: number,
|}

/** The log is written nowhere */
export type logStreamEmpty = {|
  _: 'logStreamEmpty',
|}

/** The log is written nowhere */
export type logStreamEmpty$Input = {|
  +_: 'logStreamEmpty',
|}

/** Contains a TDLib internal log verbosity level */
export type logVerbosityLevel = {|
  _: 'logVerbosityLevel',
  /** Log verbosity level */
  verbosity_level: number,
|}

/** Contains a TDLib internal log verbosity level */
export type logVerbosityLevel$Input = {|
  +_: 'logVerbosityLevel',
  /** Log verbosity level */
  +verbosity_level?: number,
|}

/** Contains a list of available TDLib internal log tags */
export type logTags = {|
  _: 'logTags',
  /** List of log tags */
  tags: Array<string>,
|}

/** Contains a list of available TDLib internal log tags */
export type logTags$Input = {|
  +_: 'logTags',
  /** List of log tags */
  +tags?: $ReadOnlyArray<string>,
|}

/** A simple object containing a number; for testing only */
export type testInt = {|
  _: 'testInt',
  /** Number */
  value: number,
|}

/** A simple object containing a number; for testing only */
export type testInt$Input = {|
  +_: 'testInt',
  /** Number */
  +value?: number,
|}

/** A simple object containing a string; for testing only */
export type testString = {|
  _: 'testString',
  /** String */
  value: string,
|}

/** A simple object containing a string; for testing only */
export type testString$Input = {|
  +_: 'testString',
  /** String */
  +value?: string,
|}

/** A simple object containing a sequence of bytes; for testing only */
export type testBytes = {|
  _: 'testBytes',
  /** Bytes */
  value: string,
|}

/** A simple object containing a sequence of bytes; for testing only */
export type testBytes$Input = {|
  +_: 'testBytes',
  /** Bytes */
  +value?: string,
|}

/** A simple object containing a vector of numbers; for testing only */
export type testVectorInt = {|
  _: 'testVectorInt',
  /** Vector of numbers */
  value: Array<number>,
|}

/** A simple object containing a vector of numbers; for testing only */
export type testVectorInt$Input = {|
  +_: 'testVectorInt',
  /** Vector of numbers */
  +value?: $ReadOnlyArray<number>,
|}

/** A simple object containing a vector of objects that hold a number; for testing only */
export type testVectorIntObject = {|
  _: 'testVectorIntObject',
  /** Vector of objects */
  value: Array<testInt>,
|}

/** A simple object containing a vector of objects that hold a number; for testing only */
export type testVectorIntObject$Input = {|
  +_: 'testVectorIntObject',
  /** Vector of objects */
  +value?: $ReadOnlyArray<testInt$Input>,
|}

/** A simple object containing a vector of strings; for testing only */
export type testVectorString = {|
  _: 'testVectorString',
  /** Vector of strings */
  value: Array<string>,
|}

/** A simple object containing a vector of strings; for testing only */
export type testVectorString$Input = {|
  +_: 'testVectorString',
  /** Vector of strings */
  +value?: $ReadOnlyArray<string>,
|}

/** A simple object containing a vector of objects that hold a string; for testing only */
export type testVectorStringObject = {|
  _: 'testVectorStringObject',
  /** Vector of objects */
  value: Array<testString>,
|}

/** A simple object containing a vector of objects that hold a string; for testing only */
export type testVectorStringObject$Input = {|
  +_: 'testVectorStringObject',
  /** Vector of objects */
  +value?: $ReadOnlyArray<testString$Input>,
|}

/**
 * Returns the current authorization state; this is an offline request. For informational
 * purposes only. Use updateAuthorizationState instead to maintain the current authorization
 * state
 */
export type getAuthorizationState = {|
  +_: 'getAuthorizationState',
|}

/**
 * Sets the parameters for TDLib initialization. Works only when the current authorization
 * state is authorizationStateWaitTdlibParameters
 */
export type setTdlibParameters = {|
  +_: 'setTdlibParameters',
  /** Parameters */
  +parameters?: tdlibParameters$Input,
|}

/**
 * Checks the database encryption key for correctness. Works only when the current authorization
 * state is authorizationStateWaitEncryptionKey
 */
export type checkDatabaseEncryptionKey = {|
  +_: 'checkDatabaseEncryptionKey',
  /** Encryption key to check or set up */
  +encryption_key?: string,
|}

/**
 * Sets the phone number of the user and sends an authentication code to the user. Works
 * only when the current authorization state is authorizationStateWaitPhoneNumber, or
 * if there is no pending authentication query and the current authorization state is
 * authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword
 */
export type setAuthenticationPhoneNumber = {|
  +_: 'setAuthenticationPhoneNumber',
  /** The phone number of the user, in international format */
  +phone_number?: string,
  /** Settings for the authentication of the user's phone number */
  +settings?: phoneNumberAuthenticationSettings$Input,
|}

/**
 * Re-sends an authentication code to the user. Works only when the current authorization
 * state is authorizationStateWaitCode and the next_code_type of the result is not null
 */
export type resendAuthenticationCode = {|
  +_: 'resendAuthenticationCode',
|}

/**
 * Checks the authentication code. Works only when the current authorization state is
 * authorizationStateWaitCode
 */
export type checkAuthenticationCode = {|
  +_: 'checkAuthenticationCode',
  /** The verification code received via SMS, Telegram message, phone call, or flash call */
  +code?: string,
|}

/**
 * Requests QR code authentication by scanning a QR code on another logged in device.
 * Works only when the current authorization state is authorizationStateWaitPhoneNumber
 */
export type requestQrCodeAuthentication = {|
  +_: 'requestQrCodeAuthentication',
  /** List of user identifiers of other users currently using the client */
  +other_user_ids?: $ReadOnlyArray<number>,
|}

/** Finishes user registration. Works only when the current authorization state is authorizationStateWaitRegistration */
export type registerUser = {|
  +_: 'registerUser',
  /** The first name of the user; 1-64 characters */
  +first_name?: string,
  /** The last name of the user; 0-64 characters */
  +last_name?: string,
|}

/**
 * Checks the authentication password for correctness. Works only when the current authorization
 * state is authorizationStateWaitPassword
 */
export type checkAuthenticationPassword = {|
  +_: 'checkAuthenticationPassword',
  /** The password to check */
  +password?: string,
|}

/**
 * Requests to send a password recovery code to an email address that was previously
 * set up. Works only when the current authorization state is authorizationStateWaitPassword
 */
export type requestAuthenticationPasswordRecovery = {|
  +_: 'requestAuthenticationPasswordRecovery',
|}

/**
 * Recovers the password with a password recovery code sent to an email address that
 * was previously set up. Works only when the current authorization state is authorizationStateWaitPassword
 */
export type recoverAuthenticationPassword = {|
  +_: 'recoverAuthenticationPassword',
  /** Recovery code to check */
  +recovery_code?: string,
|}

/**
 * Checks the authentication token of a bot; to log in as a bot. Works only when the
 * current authorization state is authorizationStateWaitPhoneNumber. Can be used instead
 * of setAuthenticationPhoneNumber and checkAuthenticationCode to log in
 */
export type checkAuthenticationBotToken = {|
  +_: 'checkAuthenticationBotToken',
  /** The bot token */
  +token?: string,
|}

/**
 * Closes the TDLib instance after a proper logout. Requires an available network connection.
 * All local data will be destroyed. After the logout completes, updateAuthorizationState
 * with authorizationStateClosed will be sent
 */
export type logOut = {|
  +_: 'logOut',
|}

/**
 * Closes the TDLib instance. All databases will be flushed to disk and properly closed.
 * After the close completes, updateAuthorizationState with authorizationStateClosed
 * will be sent
 */
export type close = {|
  +_: 'close',
|}

/**
 * Closes the TDLib instance, destroying all local data without a proper logout. The
 * current user session will remain in the list of all active sessions. All local data
 * will be destroyed. After the destruction completes updateAuthorizationState with
 * authorizationStateClosed will be sent
 */
export type destroy = {|
  +_: 'destroy',
|}

/** Confirms QR code authentication on another device. Returns created session on success */
export type confirmQrCodeAuthentication = {|
  +_: 'confirmQrCodeAuthentication',
  /** A link from a QR code. The link must be scanned by the in-app camera */
  +link?: string,
|}

/**
 * Returns all updates needed to restore current TDLib state, i.e. all actual UpdateAuthorizationState/UpdateUser/UpdateNewChat
 * and others. This is especially useful if TDLib is run in a separate process. This
 * is an offline method. Can be called before authorization
 */
export type getCurrentState = {|
  +_: 'getCurrentState',
|}

/**
 * Changes the database encryption key. Usually the encryption key is never changed
 * and is stored in some OS keychain
 */
export type setDatabaseEncryptionKey = {|
  +_: 'setDatabaseEncryptionKey',
  /** New encryption key */
  +new_encryption_key?: string,
|}

/** Returns the current state of 2-step verification */
export type getPasswordState = {|
  +_: 'getPasswordState',
|}

/**
 * Changes the password for the user. If a new recovery email address is specified,
 * then the change will not be applied until the new recovery email address is confirmed
 */
export type setPassword = {|
  +_: 'setPassword',
  /** Previous password of the user */
  +old_password?: string,
  /** New password of the user; may be empty to remove the password */
  +new_password?: string,
  /** New password hint; may be empty */
  +new_hint?: string,
  /** Pass true if the recovery email address should be changed */
  +set_recovery_email_address?: boolean,
  /** New recovery email address; may be empty */
  +new_recovery_email_address?: string,
|}

/**
 * Returns a 2-step verification recovery email address that was previously set up.
 * This method can be used to verify a password provided by the user
 */
export type getRecoveryEmailAddress = {|
  +_: 'getRecoveryEmailAddress',
  /** The password for the current user */
  +password?: string,
|}

/**
 * Changes the 2-step verification recovery email address of the user. If a new recovery
 * email address is specified, then the change will not be applied until the new recovery
 * email address is confirmed. If new_recovery_email_address is the same as the email
 * address that is currently set up, this call succeeds immediately and aborts all other
 * requests waiting for an email confirmation
 */
export type setRecoveryEmailAddress = {|
  +_: 'setRecoveryEmailAddress',
  /** Password of the current user */
  +password?: string,
  /** New recovery email address */
  +new_recovery_email_address?: string,
|}

/** Checks the 2-step verification recovery email address verification code */
export type checkRecoveryEmailAddressCode = {|
  +_: 'checkRecoveryEmailAddressCode',
  /** Verification code */
  +code?: string,
|}

/** Resends the 2-step verification recovery email address verification code */
export type resendRecoveryEmailAddressCode = {|
  +_: 'resendRecoveryEmailAddressCode',
|}

/**
 * Requests to send a password recovery code to an email address that was previously
 * set up
 */
export type requestPasswordRecovery = {|
  +_: 'requestPasswordRecovery',
|}

/**
 * Recovers the password using a recovery code sent to an email address that was previously
 * set up
 */
export type recoverPassword = {|
  +_: 'recoverPassword',
  /** Recovery code to check */
  +recovery_code?: string,
|}

/** Creates a new temporary password for processing payments */
export type createTemporaryPassword = {|
  +_: 'createTemporaryPassword',
  /** Persistent user password */
  +password?: string,
  /**
   * Time during which the temporary password will be valid, in seconds; should be between
   * 60 and 86400
   */
  +valid_for?: number,
|}

/** Returns information about the current temporary password */
export type getTemporaryPasswordState = {|
  +_: 'getTemporaryPasswordState',
|}

/** Returns the current user */
export type getMe = {|
  +_: 'getMe',
|}

/**
 * Returns information about a user by their identifier. This is an offline request
 * if the current user is not a bot
 */
export type getUser = {|
  +_: 'getUser',
  /** User identifier */
  +user_id?: number,
|}

/** Returns full information about a user by their identifier */
export type getUserFullInfo = {|
  +_: 'getUserFullInfo',
  /** User identifier */
  +user_id?: number,
|}

/**
 * Returns information about a basic group by its identifier. This is an offline request
 * if the current user is not a bot
 */
export type getBasicGroup = {|
  +_: 'getBasicGroup',
  /** Basic group identifier */
  +basic_group_id?: number,
|}

/** Returns full information about a basic group by its identifier */
export type getBasicGroupFullInfo = {|
  +_: 'getBasicGroupFullInfo',
  /** Basic group identifier */
  +basic_group_id?: number,
|}

/**
 * Returns information about a supergroup or a channel by its identifier. This is an
 * offline request if the current user is not a bot
 */
export type getSupergroup = {|
  +_: 'getSupergroup',
  /** Supergroup or channel identifier */
  +supergroup_id?: number,
|}

/**
 * Returns full information about a supergroup or a channel by its identifier, cached
 * for up to 1 minute
 */
export type getSupergroupFullInfo = {|
  +_: 'getSupergroupFullInfo',
  /** Supergroup or channel identifier */
  +supergroup_id?: number,
|}

/** Returns information about a secret chat by its identifier. This is an offline request */
export type getSecretChat = {|
  +_: 'getSecretChat',
  /** Secret chat identifier */
  +secret_chat_id?: number,
|}

/**
 * Returns information about a chat by its identifier, this is an offline request if
 * the current user is not a bot
 */
export type getChat = {|
  +_: 'getChat',
  /** Chat identifier */
  +chat_id?: number,
|}

/** Returns information about a message */
export type getMessage = {|
  +_: 'getMessage',
  /** Identifier of the chat the message belongs to */
  +chat_id?: number,
  /** Identifier of the message to get */
  +message_id?: number,
|}

/**
 * Returns information about a message, if it is available locally without sending network
 * request. This is an offline request
 */
export type getMessageLocally = {|
  +_: 'getMessageLocally',
  /** Identifier of the chat the message belongs to */
  +chat_id?: number,
  /** Identifier of the message to get */
  +message_id?: number,
|}

/** Returns information about a message that is replied by given message */
export type getRepliedMessage = {|
  +_: 'getRepliedMessage',
  /** Identifier of the chat the message belongs to */
  +chat_id?: number,
  /** Identifier of the message reply to which get */
  +message_id?: number,
|}

/** Returns information about a pinned chat message */
export type getChatPinnedMessage = {|
  +_: 'getChatPinnedMessage',
  /** Identifier of the chat the message belongs to */
  +chat_id?: number,
|}

/**
 * Returns information about messages. If a message is not found, returns null on the
 * corresponding position of the result
 */
export type getMessages = {|
  +_: 'getMessages',
  /** Identifier of the chat the messages belong to */
  +chat_id?: number,
  /** Identifiers of the messages to get */
  +message_ids?: $ReadOnlyArray<number>,
|}

/** Returns information about a file; this is an offline request */
export type getFile = {|
  +_: 'getFile',
  /** Identifier of the file to get */
  +file_id?: number,
|}

/**
 * Returns information about a file by its remote ID; this is an offline request. Can
 * be used to register a URL as a file for further uploading, or sending as a message.
 * Even the request succeeds, the file can be used only if it is still accessible to
 * the user. For example, if the file is from a message, then the message must be not
 * deleted and accessible to the user. If the file database is disabled, then the corresponding
 * object with the file must be preloaded by the client
 */
export type getRemoteFile = {|
  +_: 'getRemoteFile',
  /** Remote identifier of the file to get */
  +remote_file_id?: string,
  /** File type, if known */
  +file_type?: FileType$Input,
|}

/**
 * Returns an ordered list of chats in a chat list. Chats are sorted by the pair (order,
 * chat_id) in decreasing order. (For example, to get a list of chats from the beginning,
 * the offset_order should be equal to a biggest signed 64-bit number 9223372036854775807
 * == 2^63 - 1). For optimal performance the number of returned chats is chosen by the
 * library
 */
export type getChats = {|
  +_: 'getChats',
  /** The chat list in which to return chats */
  +chat_list?: ChatList$Input,
  /** Chat order to return chats from */
  +offset_order?: number | string,
  /** Chat identifier to return chats from */
  +offset_chat_id?: number,
  /**
   * The maximum number of chats to be returned. It is possible that fewer chats than
   * the limit are returned even if the end of the list is not reached
   */
  +limit?: number,
|}

/**
 * Searches a public chat by its username. Currently only private chats, supergroups
 * and channels can be public. Returns the chat if found; otherwise an error is returned
 */
export type searchPublicChat = {|
  +_: 'searchPublicChat',
  /** Username to be resolved */
  +username?: string,
|}

/**
 * Searches public chats by looking for specified query in their username and title.
 * Currently only private chats, supergroups and channels can be public. Returns a meaningful
 * number of results. Returns nothing if the length of the searched username prefix
 * is less than 5. Excludes private chats with contacts and chats from the chat list
 * from the results
 */
export type searchPublicChats = {|
  +_: 'searchPublicChats',
  /** Query to search for */
  +query?: string,
|}

/**
 * Searches for the specified query in the title and username of already known chats,
 * this is an offline request. Returns chats in the order seen in the chat list
 */
export type searchChats = {|
  +_: 'searchChats',
  /** Query to search for. If the query is empty, returns up to 20 recently found chats */
  +query?: string,
  /** The maximum number of chats to be returned */
  +limit?: number,
|}

/**
 * Searches for the specified query in the title and username of already known chats
 * via request to the server. Returns chats in the order seen in the chat list
 */
export type searchChatsOnServer = {|
  +_: 'searchChatsOnServer',
  /** Query to search for */
  +query?: string,
  /** The maximum number of chats to be returned */
  +limit?: number,
|}

/**
 * Returns a list of users and location-based supergroups nearby. The list of users
 * nearby will be updated for 60 seconds after the request by the updates updateUsersNearby.
 * The request should be sent again every 25 seconds with adjusted location to not miss
 * new chats
 */
export type searchChatsNearby = {|
  +_: 'searchChatsNearby',
  /** Current user location */
  +location?: location$Input,
|}

/**
 * Returns a list of frequently used chats. Supported only if the chat info database
 * is enabled
 */
export type getTopChats = {|
  +_: 'getTopChats',
  /** Category of chats to be returned */
  +category?: TopChatCategory$Input,
  /** The maximum number of chats to be returned; up to 30 */
  +limit?: number,
|}

/**
 * Removes a chat from the list of frequently used chats. Supported only if the chat
 * info database is enabled
 */
export type removeTopChat = {|
  +_: 'removeTopChat',
  /** Category of frequently used chats */
  +category?: TopChatCategory$Input,
  /** Chat identifier */
  +chat_id?: number,
|}

/**
 * Adds a chat to the list of recently found chats. The chat is added to the beginning
 * of the list. If the chat is already in the list, it will be removed from the list
 * first
 */
export type addRecentlyFoundChat = {|
  +_: 'addRecentlyFoundChat',
  /** Identifier of the chat to add */
  +chat_id?: number,
|}

/** Removes a chat from the list of recently found chats */
export type removeRecentlyFoundChat = {|
  +_: 'removeRecentlyFoundChat',
  /** Identifier of the chat to be removed */
  +chat_id?: number,
|}

/** Clears the list of recently found chats */
export type clearRecentlyFoundChats = {|
  +_: 'clearRecentlyFoundChats',
|}

/** Checks whether a username can be set for a chat */
export type checkChatUsername = {|
  +_: 'checkChatUsername',
  /**
   * Chat identifier; should be identifier of a supergroup chat, or a channel chat, or
   * a private chat with self, or zero if chat is being created
   */
  +chat_id?: number,
  /** Username to be checked */
  +username?: string,
|}

/** Returns a list of public chats of the specified type, owned by the user */
export type getCreatedPublicChats = {|
  +_: 'getCreatedPublicChats',
  /** Type of the public chats to return */
  +type?: PublicChatType$Input,
|}

/**
 * Checks whether the maximum number of owned public chats has been reached. Returns
 * corresponding error if the limit was reached
 */
export type checkCreatedPublicChatsLimit = {|
  +_: 'checkCreatedPublicChatsLimit',
  /** Type of the public chats, for which to check the limit */
  +type?: PublicChatType$Input,
|}

/**
 * Returns a list of basic group and supergroup chats, which can be used as a discussion
 * group for a channel. Basic group chats need to be first upgraded to supergroups before
 * they can be set as a discussion group
 */
export type getSuitableDiscussionChats = {|
  +_: 'getSuitableDiscussionChats',
|}

/**
 * Returns a list of recently inactive supergroups and channels. Can be used when user
 * reaches limit on the number of joined supergroups and channels and receives CHANNELS_TOO_MUCH
 * error
 */
export type getInactiveSupergroupChats = {|
  +_: 'getInactiveSupergroupChats',
|}

/**
 * Returns a list of common group chats with a given user. Chats are sorted by their
 * type and creation date
 */
export type getGroupsInCommon = {|
  +_: 'getGroupsInCommon',
  /** User identifier */
  +user_id?: number,
  /** Chat identifier starting from which to return chats; use 0 for the first request */
  +offset_chat_id?: number,
  /** The maximum number of chats to be returned; up to 100 */
  +limit?: number,
|}

/**
 * Returns messages in a chat. The messages are returned in a reverse chronological
 * order (i.e., in order of decreasing message_id). For optimal performance the number
 * of returned messages is chosen by the library. This is an offline request if only_local
 * is true
 */
export type getChatHistory = {|
  +_: 'getChatHistory',
  /** Chat identifier */
  +chat_id?: number,
  /**
   * Identifier of the message starting from which history must be fetched; use 0 to get
   * results from the last message
   */
  +from_message_id?: number,
  /**
   * Specify 0 to get results from exactly the from_message_id or a negative offset up
   * to 99 to get additionally some newer messages
   */
  +offset?: number,
  /**
   * The maximum number of messages to be returned; must be positive and can't be greater
   * than 100. If the offset is negative, the limit must be greater or equal to -offset.
   * Fewer messages may be returned than specified by the limit, even if the end of the
   * message history has not been reached
   */
  +limit?: number,
  /**
   * If true, returns only messages that are available locally without sending network
   * requests
   */
  +only_local?: boolean,
|}

/**
 * Deletes all messages in the chat. Use Chat.can_be_deleted_only_for_self and Chat.can_be_deleted_for_all_users
 * fields to find whether and how the method can be applied to the chat
 */
export type deleteChatHistory = {|
  +_: 'deleteChatHistory',
  /** Chat identifier */
  +chat_id?: number,
  /** Pass true if the chat should be removed from the chat list */
  +remove_from_chat_list?: boolean,
  /** Pass true to try to delete chat history for all users */
  +revoke?: boolean,
|}

/**
 * Searches for messages with given words in the chat. Returns the results in reverse
 * chronological order, i.e. in order of decreasing message_id. Cannot be used in secret
 * chats with a non-empty query (searchSecretMessages should be used instead), or without
 * an enabled message database. For optimal performance the number of returned messages
 * is chosen by the library
 */
export type searchChatMessages = {|
  +_: 'searchChatMessages',
  /** Identifier of the chat in which to search messages */
  +chat_id?: number,
  /** Query to search for */
  +query?: string,
  /**
   * If not 0, only messages sent by the specified user will be returned. Not supported
   * in secret chats
   */
  +sender_user_id?: number,
  /**
   * Identifier of the message starting from which history must be fetched; use 0 to get
   * results from the last message
   */
  +from_message_id?: number,
  /**
   * Specify 0 to get results from exactly the from_message_id or a negative offset to
   * get the specified message and some newer messages
   */
  +offset?: number,
  /**
   * The maximum number of messages to be returned; must be positive and can't be greater
   * than 100. If the offset is negative, the limit must be greater than -offset. Fewer
   * messages may be returned than specified by the limit, even if the end of the message
   * history has not been reached
   */
  +limit?: number,
  /** Filter for message content in the search results */
  +filter?: SearchMessagesFilter$Input,
|}

/**
 * Searches for messages in all chats except secret chats. Returns the results in reverse
 * chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For
 * optimal performance the number of returned messages is chosen by the library
 */
export type searchMessages = {|
  +_: 'searchMessages',
  /**
   * Chat list in which to search messages; pass null to search in all chats regardless
   * of their chat list
   */
  +chat_list?: ChatList$Input,
  /** Query to search for */
  +query?: string,
  /**
   * The date of the message starting from which the results should be fetched. Use 0
   * or any date in the future to get results from the last message
   */
  +offset_date?: number,
  /** The chat identifier of the last found message, or 0 for the first request */
  +offset_chat_id?: number,
  /** The message identifier of the last found message, or 0 for the first request */
  +offset_message_id?: number,
  /**
   * The maximum number of messages to be returned, up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  +limit?: number,
|}

/**
 * Searches for messages in secret chats. Returns the results in reverse chronological
 * order. For optimal performance the number of returned messages is chosen by the library
 */
export type searchSecretMessages = {|
  +_: 'searchSecretMessages',
  /** Identifier of the chat in which to search. Specify 0 to search in all secret chats */
  +chat_id?: number,
  /** Query to search for. If empty, searchChatMessages should be used instead */
  +query?: string,
  /**
   * The identifier from the result of a previous request, use 0 to get results from the
   * last message
   */
  +from_search_id?: number | string,
  /**
   * The maximum number of messages to be returned; up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  +limit?: number,
  /** A filter for the content of messages in the search results */
  +filter?: SearchMessagesFilter$Input,
|}

/**
 * Searches for call messages. Returns the results in reverse chronological order (i.
 * e., in order of decreasing message_id). For optimal performance the number of returned
 * messages is chosen by the library
 */
export type searchCallMessages = {|
  +_: 'searchCallMessages',
  /**
   * Identifier of the message from which to search; use 0 to get results from the last
   * message
   */
  +from_message_id?: number,
  /**
   * The maximum number of messages to be returned; up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  +limit?: number,
  /** If true, returns only messages with missed calls */
  +only_missed?: boolean,
|}

/**
 * Returns information about the recent locations of chat members that were sent to
 * the chat. Returns up to 1 location message per user
 */
export type searchChatRecentLocationMessages = {|
  +_: 'searchChatRecentLocationMessages',
  /** Chat identifier */
  +chat_id?: number,
  /** The maximum number of messages to be returned */
  +limit?: number,
|}

/**
 * Returns all active live locations that should be updated by the client. The list
 * is persistent across application restarts only if the message database is used
 */
export type getActiveLiveLocationMessages = {|
  +_: 'getActiveLiveLocationMessages',
|}

/** Returns the last message sent in a chat no later than the specified date */
export type getChatMessageByDate = {|
  +_: 'getChatMessageByDate',
  /** Chat identifier */
  +chat_id?: number,
  /** Point in time (Unix timestamp) relative to which to search for messages */
  +date?: number,
|}

/** Returns approximate number of messages of the specified type in the chat */
export type getChatMessageCount = {|
  +_: 'getChatMessageCount',
  /** Identifier of the chat in which to count messages */
  +chat_id?: number,
  /** Filter for message content; searchMessagesFilterEmpty is unsupported in this function */
  +filter?: SearchMessagesFilter$Input,
  /**
   * If true, returns count that is available locally without sending network requests,
   * returning -1 if the number of messages is unknown
   */
  +return_local?: boolean,
|}

/**
 * Returns all scheduled messages in a chat. The messages are returned in a reverse
 * chronological order (i.e., in order of decreasing message_id)
 */
export type getChatScheduledMessages = {|
  +_: 'getChatScheduledMessages',
  /** Chat identifier */
  +chat_id?: number,
|}

/**
 * Removes an active notification from notification list. Needs to be called only if
 * the notification is removed by the current user
 */
export type removeNotification = {|
  +_: 'removeNotification',
  /** Identifier of notification group to which the notification belongs */
  +notification_group_id?: number,
  /** Identifier of removed notification */
  +notification_id?: number,
|}

/**
 * Removes a group of active notifications. Needs to be called only if the notification
 * group is removed by the current user
 */
export type removeNotificationGroup = {|
  +_: 'removeNotificationGroup',
  /** Notification group identifier */
  +notification_group_id?: number,
  /** The maximum identifier of removed notifications */
  +max_notification_id?: number,
|}

/**
 * Returns a public HTTPS link to a message. Available only for messages in supergroups
 * and channels with a username
 */
export type getPublicMessageLink = {|
  +_: 'getPublicMessageLink',
  /** Identifier of the chat to which the message belongs */
  +chat_id?: number,
  /** Identifier of the message */
  +message_id?: number,
  /** Pass true if a link for a whole media album should be returned */
  +for_album?: boolean,
|}

/**
 * Returns a private HTTPS link to a message in a chat. Available only for already sent
 * messages in supergroups and channels. The link will work only for members of the
 * chat
 */
export type getMessageLink = {|
  +_: 'getMessageLink',
  /** Identifier of the chat to which the message belongs */
  +chat_id?: number,
  /** Identifier of the message */
  +message_id?: number,
|}

/** Returns information about a public or private message link */
export type getMessageLinkInfo = {|
  +_: 'getMessageLinkInfo',
  /**
   * The message link in the format "https://t.me/c/...", or "tg://privatepost?...", or
   * "https://t.me/username/...", or "tg://resolve?..."
   */
  +url?: string,
|}

/** Sends a message. Returns the sent message */
export type sendMessage = {|
  +_: 'sendMessage',
  /** Target chat */
  +chat_id?: number,
  /** Identifier of the message to reply to or 0 */
  +reply_to_message_id?: number,
  /** Options to be used to send the message */
  +options?: sendMessageOptions$Input,
  /** Markup for replying to the message; for bots only */
  +reply_markup?: ReplyMarkup$Input,
  /** The content of the message to be sent */
  +input_message_content?: InputMessageContent$Input,
|}

/**
 * Sends messages grouped together into an album. Currently only photo and video messages
 * can be grouped into an album. Returns sent messages
 */
export type sendMessageAlbum = {|
  +_: 'sendMessageAlbum',
  /** Target chat */
  +chat_id?: number,
  /** Identifier of a message to reply to or 0 */
  +reply_to_message_id?: number,
  /** Options to be used to send the messages */
  +options?: sendMessageOptions$Input,
  /** Contents of messages to be sent */
  +input_message_contents?: $ReadOnlyArray<InputMessageContent$Input>,
|}

/**
 * Invites a bot to a chat (if it is not yet a member) and sends it the /start command.
 * Bots can't be invited to a private chat other than the chat with the bot. Bots can't
 * be invited to channels (although they can be added as admins) and secret chats. Returns
 * the sent message
 */
export type sendBotStartMessage = {|
  +_: 'sendBotStartMessage',
  /** Identifier of the bot */
  +bot_user_id?: number,
  /** Identifier of the target chat */
  +chat_id?: number,
  /** A hidden parameter sent to the bot for deep linking purposes (https://core.telegram.org/bots#deep-linking) */
  +parameter?: string,
|}

/**
 * Sends the result of an inline query as a message. Returns the sent message. Always
 * clears a chat draft message
 */
export type sendInlineQueryResultMessage = {|
  +_: 'sendInlineQueryResultMessage',
  /** Target chat */
  +chat_id?: number,
  /** Identifier of a message to reply to or 0 */
  +reply_to_message_id?: number,
  /** Options to be used to send the message */
  +options?: sendMessageOptions$Input,
  /** Identifier of the inline query */
  +query_id?: number | string,
  /** Identifier of the inline result */
  +result_id?: string,
  /**
   * If true, there will be no mention of a bot, via which the message is sent. Can be
   * used only for bots GetOption("animation_search_bot_username"), GetOption("photo_search_bot_username")
   * and GetOption("venue_search_bot_username")
   */
  +hide_via_bot?: boolean,
|}

/**
 * Forwards previously sent messages. Returns the forwarded messages in the same order
 * as the message identifiers passed in message_ids. If a message can't be forwarded,
 * null will be returned instead of the message
 */
export type forwardMessages = {|
  +_: 'forwardMessages',
  /** Identifier of the chat to which to forward messages */
  +chat_id?: number,
  /** Identifier of the chat from which to forward messages */
  +from_chat_id?: number,
  /** Identifiers of the messages to forward */
  +message_ids?: $ReadOnlyArray<number>,
  /** Options to be used to send the messages */
  +options?: sendMessageOptions$Input,
  /**
   * True, if the messages should be grouped into an album after forwarding. For this
   * to work, no more than 10 messages may be forwarded, and all of them must be photo
   * or video messages
   */
  +as_album?: boolean,
  /**
   * True, if content of the messages needs to be copied without links to the original
   * messages. Always true if the messages are forwarded to a secret chat
   */
  +send_copy?: boolean,
  /**
   * True, if media captions of message copies needs to be removed. Ignored if send_copy
   * is false
   */
  +remove_caption?: boolean,
|}

/**
 * Resends messages which failed to send. Can be called only for messages for which
 * messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after
 * time passed. If a message is re-sent, the corresponding failed to send message is
 * deleted. Returns the sent messages in the same order as the message identifiers passed
 * in message_ids. If a message can't be re-sent, null will be returned instead of the
 * message
 */
export type resendMessages = {|
  +_: 'resendMessages',
  /** Identifier of the chat to send messages */
  +chat_id?: number,
  /**
   * Identifiers of the messages to resend. Message identifiers must be in a strictly
   * increasing order
   */
  +message_ids?: $ReadOnlyArray<number>,
|}

/**
 * Changes the current TTL setting (sets a new self-destruct timer) in a secret chat
 * and sends the corresponding message
 */
export type sendChatSetTtlMessage = {|
  +_: 'sendChatSetTtlMessage',
  /** Chat identifier */
  +chat_id?: number,
  /** New TTL value, in seconds */
  +ttl?: number,
|}

/**
 * Sends a notification about a screenshot taken in a chat. Supported only in private
 * and secret chats
 */
export type sendChatScreenshotTakenNotification = {|
  +_: 'sendChatScreenshotTakenNotification',
  /** Chat identifier */
  +chat_id?: number,
|}

/**
 * Adds a local message to a chat. The message is persistent across application restarts
 * only if the message database is used. Returns the added message
 */
export type addLocalMessage = {|
  +_: 'addLocalMessage',
  /** Target chat */
  +chat_id?: number,
  /**
   * Identifier of the user who will be shown as the sender of the message; may be 0 for
   * channel posts
   */
  +sender_user_id?: number,
  /** Identifier of the message to reply to or 0 */
  +reply_to_message_id?: number,
  /** Pass true to disable notification for the message */
  +disable_notification?: boolean,
  /** The content of the message to be added */
  +input_message_content?: InputMessageContent$Input,
|}

/** Deletes messages */
export type deleteMessages = {|
  +_: 'deleteMessages',
  /** Chat identifier */
  +chat_id?: number,
  /** Identifiers of the messages to be deleted */
  +message_ids?: $ReadOnlyArray<number>,
  /**
   * Pass true to try to delete messages for all chat members. Always true for supergroups,
   * channels and secret chats
   */
  +revoke?: boolean,
|}

/**
 * Deletes all messages sent by the specified user to a chat. Supported only for supergroups;
 * requires can_delete_messages administrator privileges
 */
export type deleteChatMessagesFromUser = {|
  +_: 'deleteChatMessagesFromUser',
  /** Chat identifier */
  +chat_id?: number,
  /** User identifier */
  +user_id?: number,
|}

/**
 * Edits the text of a message (or a text of a game message). Returns the edited message
 * after the edit is completed on the server side
 */
export type editMessageText = {|
  +_: 'editMessageText',
  /** The chat the message belongs to */
  +chat_id?: number,
  /** Identifier of the message */
  +message_id?: number,
  /** The new message reply markup; for bots only */
  +reply_markup?: ReplyMarkup$Input,
  /** New text content of the message. Should be of type InputMessageText */
  +input_message_content?: InputMessageContent$Input,
|}

/**
 * Edits the message content of a live location. Messages can be edited for a limited
 * period of time specified in the live location. Returns the edited message after the
 * edit is completed on the server side
 */
export type editMessageLiveLocation = {|
  +_: 'editMessageLiveLocation',
  /** The chat the message belongs to */
  +chat_id?: number,
  /** Identifier of the message */
  +message_id?: number,
  /** The new message reply markup; for bots only */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * New location content of the message; may be null. Pass null to stop sharing the live
   * location
   */
  +location?: location$Input,
|}

/**
 * Edits the content of a message with an animation, an audio, a document, a photo or
 * a video. The media in the message can't be replaced if the message was set to self-destruct.
 * Media can't be replaced by self-destructing media. Media in an album can be edited
 * only to contain a photo or a video. Returns the edited message after the edit is
 * completed on the server side
 */
export type editMessageMedia = {|
  +_: 'editMessageMedia',
  /** The chat the message belongs to */
  +chat_id?: number,
  /** Identifier of the message */
  +message_id?: number,
  /** The new message reply markup; for bots only */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * New content of the message. Must be one of the following types: InputMessageAnimation,
   * InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo
   */
  +input_message_content?: InputMessageContent$Input,
|}

/**
 * Edits the message content caption. Returns the edited message after the edit is completed
 * on the server side
 */
export type editMessageCaption = {|
  +_: 'editMessageCaption',
  /** The chat the message belongs to */
  +chat_id?: number,
  /** Identifier of the message */
  +message_id?: number,
  /** The new message reply markup; for bots only */
  +reply_markup?: ReplyMarkup$Input,
  /** New message content caption; 0-GetOption("message_caption_length_max") characters */
  +caption?: formattedText$Input,
|}

/**
 * Edits the message reply markup; for bots only. Returns the edited message after the
 * edit is completed on the server side
 */
export type editMessageReplyMarkup = {|
  +_: 'editMessageReplyMarkup',
  /** The chat the message belongs to */
  +chat_id?: number,
  /** Identifier of the message */
  +message_id?: number,
  /** The new message reply markup */
  +reply_markup?: ReplyMarkup$Input,
|}

/** Edits the text of an inline text or game message sent via a bot; for bots only */
export type editInlineMessageText = {|
  +_: 'editInlineMessageText',
  /** Inline message identifier */
  +inline_message_id?: string,
  /** The new message reply markup */
  +reply_markup?: ReplyMarkup$Input,
  /** New text content of the message. Should be of type InputMessageText */
  +input_message_content?: InputMessageContent$Input,
|}

/**
 * Edits the content of a live location in an inline message sent via a bot; for bots
 * only
 */
export type editInlineMessageLiveLocation = {|
  +_: 'editInlineMessageLiveLocation',
  /** Inline message identifier */
  +inline_message_id?: string,
  /** The new message reply markup */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * New location content of the message; may be null. Pass null to stop sharing the live
   * location
   */
  +location?: location$Input,
|}

/**
 * Edits the content of a message with an animation, an audio, a document, a photo or
 * a video in an inline message sent via a bot; for bots only
 */
export type editInlineMessageMedia = {|
  +_: 'editInlineMessageMedia',
  /** Inline message identifier */
  +inline_message_id?: string,
  /** The new message reply markup; for bots only */
  +reply_markup?: ReplyMarkup$Input,
  /**
   * New content of the message. Must be one of the following types: InputMessageAnimation,
   * InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo
   */
  +input_message_content?: InputMessageContent$Input,
|}

/** Edits the caption of an inline message sent via a bot; for bots only */
export type editInlineMessageCaption = {|
  +_: 'editInlineMessageCaption',
  /** Inline message identifier */
  +inline_message_id?: string,
  /** The new message reply markup */
  +reply_markup?: ReplyMarkup$Input,
  /** New message content caption; 0-GetOption("message_caption_length_max") characters */
  +caption?: formattedText$Input,
|}

/** Edits the reply markup of an inline message sent via a bot; for bots only */
export type editInlineMessageReplyMarkup = {|
  +_: 'editInlineMessageReplyMarkup',
  /** Inline message identifier */
  +inline_message_id?: string,
  /** The new message reply markup */
  +reply_markup?: ReplyMarkup$Input,
|}

/**
 * Edits the time when a scheduled message will be sent. Scheduling state of all messages
 * in the same album or forwarded together with the message will be also changed
 */
export type editMessageSchedulingState = {|
  +_: 'editMessageSchedulingState',
  /** The chat the message belongs to */
  +chat_id?: number,
  /** Identifier of the message */
  +message_id?: number,
  /** The new message scheduling state. Pass null to send the message immediately */
  +scheduling_state?: MessageSchedulingState$Input,
|}

/**
 * Returns all entities (mentions, hashtags, cashtags, bot commands, URLs, and email
 * addresses) contained in the text. This is an offline method. Can be called before
 * authorization. Can be called synchronously
 */
export type getTextEntities = {|
  +_: 'getTextEntities',
  /** The text in which to look for entites */
  +text?: string,
|}

/**
 * Parses Bold, Italic, Underline, Strikethrough, Code, Pre, PreCode, TextUrl and MentionName
 * entities contained in the text. This is an offline method. Can be called before authorization.
 * Can be called synchronously
 */
export type parseTextEntities = {|
  +_: 'parseTextEntities',
  /** The text which should be parsed */
  +text?: string,
  /** Text parse mode */
  +parse_mode?: TextParseMode$Input,
|}

/**
 * Returns the MIME type of a file, guessed by its extension. Returns an empty string
 * on failure. This is an offline method. Can be called before authorization. Can be
 * called synchronously
 */
export type getFileMimeType = {|
  +_: 'getFileMimeType',
  /** The name of the file or path to the file */
  +file_name?: string,
|}

/**
 * Returns the extension of a file, guessed by its MIME type. Returns an empty string
 * on failure. This is an offline method. Can be called before authorization. Can be
 * called synchronously
 */
export type getFileExtension = {|
  +_: 'getFileExtension',
  /** The MIME type of the file */
  +mime_type?: string,
|}

/**
 * Removes potentially dangerous characters from the name of a file. The encoding of
 * the file name is supposed to be UTF-8. Returns an empty string on failure. This is
 * an offline method. Can be called before authorization. Can be called synchronously
 */
export type cleanFileName = {|
  +_: 'cleanFileName',
  /** File name or path to the file */
  +file_name?: string,
|}

/**
 * Returns a string stored in the local database from the specified localization target
 * and language pack by its key. Returns a 404 error if the string is not found. This
 * is an offline method. Can be called before authorization. Can be called synchronously
 */
export type getLanguagePackString = {|
  +_: 'getLanguagePackString',
  /** Path to the language pack database in which strings are stored */
  +language_pack_database_path?: string,
  /** Localization target to which the language pack belongs */
  +localization_target?: string,
  /** Language pack identifier */
  +language_pack_id?: string,
  /** Language pack key of the string to be returned */
  +key?: string,
|}

/**
 * Converts a JSON-serialized string to corresponding JsonValue object. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 */
export type getJsonValue = {|
  +_: 'getJsonValue',
  /** The JSON-serialized string */
  +json?: string,
|}

/**
 * Converts a JsonValue object to corresponding JSON-serialized string. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 */
export type getJsonString = {|
  +_: 'getJsonString',
  /** The JsonValue object */
  +json_value?: JsonValue$Input,
|}

/** Changes the user answer to a poll. A poll in quiz mode can be answered only once */
export type setPollAnswer = {|
  +_: 'setPollAnswer',
  /** Identifier of the chat to which the poll belongs */
  +chat_id?: number,
  /** Identifier of the message containing the poll */
  +message_id?: number,
  /**
   * 0-based identifiers of answer options, chosen by the user. User can choose more than
   * 1 answer option only is the poll allows multiple answers
   */
  +option_ids?: $ReadOnlyArray<number>,
|}

/**
 * Returns users voted for the specified option in a non-anonymous polls. For the optimal
 * performance the number of returned users is chosen by the library
 */
export type getPollVoters = {|
  +_: 'getPollVoters',
  /** Identifier of the chat to which the poll belongs */
  +chat_id?: number,
  /** Identifier of the message containing the poll */
  +message_id?: number,
  /** 0-based identifier of the answer option */
  +option_id?: number,
  /** Number of users to skip in the result; must be non-negative */
  +offset?: number,
  /**
   * The maximum number of users to be returned; must be positive and can't be greater
   * than 50. Fewer users may be returned than specified by the limit, even if the end
   * of the voter list has not been reached
   */
  +limit?: number,
|}

/**
 * Stops a poll. A poll in a message can be stopped when the message has can_be_edited
 * flag set
 */
export type stopPoll = {|
  +_: 'stopPoll',
  /** Identifier of the chat to which the poll belongs */
  +chat_id?: number,
  /** Identifier of the message containing the poll */
  +message_id?: number,
  /** The new message reply markup; for bots only */
  +reply_markup?: ReplyMarkup$Input,
|}

/**
 * Returns information about a button of type inlineKeyboardButtonTypeLoginUrl. The
 * method needs to be called when the user presses the button
 */
export type getLoginUrlInfo = {|
  +_: 'getLoginUrlInfo',
  /** Chat identifier of the message with the button */
  +chat_id?: number,
  /** Message identifier of the message with the button */
  +message_id?: number,
  /** Button identifier */
  +button_id?: number,
|}

/**
 * Returns an HTTP URL which can be used to automatically authorize the user on a website
 * after clicking an inline button of type inlineKeyboardButtonTypeLoginUrl. Use the
 * method getLoginUrlInfo to find whether a prior user confirmation is needed. If an
 * error is returned, then the button must be handled as an ordinary URL button
 */
export type getLoginUrl = {|
  +_: 'getLoginUrl',
  /** Chat identifier of the message with the button */
  +chat_id?: number,
  /** Message identifier of the message with the button */
  +message_id?: number,
  /** Button identifier */
  +button_id?: number,
  /** True, if the user allowed the bot to send them messages */
  +allow_write_access?: boolean,
|}

/**
 * Sends an inline query to a bot and returns its results. Returns an error with code
 * 502 if the bot fails to answer the query before the query timeout expires
 */
export type getInlineQueryResults = {|
  +_: 'getInlineQueryResults',
  /** The identifier of the target bot */
  +bot_user_id?: number,
  /** Identifier of the chat where the query was sent */
  +chat_id?: number,
  /** Location of the user, only if needed */
  +user_location?: location$Input,
  /** Text of the query */
  +query?: string,
  /** Offset of the first entry to return */
  +offset?: string,
|}

/** Sets the result of an inline query; for bots only */
export type answerInlineQuery = {|
  +_: 'answerInlineQuery',
  /** Identifier of the inline query */
  +inline_query_id?: number | string,
  /** True, if the result of the query can be cached for the specified user */
  +is_personal?: boolean,
  /** The results of the query */
  +results?: $ReadOnlyArray<InputInlineQueryResult$Input>,
  /** Allowed time to cache the results of the query, in seconds */
  +cache_time?: number,
  /** Offset for the next inline query; pass an empty string if there are no more results */
  +next_offset?: string,
  /**
   * If non-empty, this text should be shown on the button that opens a private chat with
   * the bot and sends a start message to the bot with the parameter switch_pm_parameter
   */
  +switch_pm_text?: string,
  /** The parameter for the bot start message */
  +switch_pm_parameter?: string,
|}

/**
 * Sends a callback query to a bot and returns an answer. Returns an error with code
 * 502 if the bot fails to answer the query before the query timeout expires
 */
export type getCallbackQueryAnswer = {|
  +_: 'getCallbackQueryAnswer',
  /** Identifier of the chat with the message */
  +chat_id?: number,
  /** Identifier of the message from which the query originated */
  +message_id?: number,
  /** Query payload */
  +payload?: CallbackQueryPayload$Input,
|}

/** Sets the result of a callback query; for bots only */
export type answerCallbackQuery = {|
  +_: 'answerCallbackQuery',
  /** Identifier of the callback query */
  +callback_query_id?: number | string,
  /** Text of the answer */
  +text?: string,
  /** If true, an alert should be shown to the user instead of a toast notification */
  +show_alert?: boolean,
  /** URL to be opened */
  +url?: string,
  /** Time during which the result of the query can be cached, in seconds */
  +cache_time?: number,
|}

/** Sets the result of a shipping query; for bots only */
export type answerShippingQuery = {|
  +_: 'answerShippingQuery',
  /** Identifier of the shipping query */
  +shipping_query_id?: number | string,
  /** Available shipping options */
  +shipping_options?: $ReadOnlyArray<shippingOption$Input>,
  /** An error message, empty on success */
  +error_message?: string,
|}

/** Sets the result of a pre-checkout query; for bots only */
export type answerPreCheckoutQuery = {|
  +_: 'answerPreCheckoutQuery',
  /** Identifier of the pre-checkout query */
  +pre_checkout_query_id?: number | string,
  /** An error message, empty on success */
  +error_message?: string,
|}

/** Updates the game score of the specified user in the game; for bots only */
export type setGameScore = {|
  +_: 'setGameScore',
  /** The chat to which the message with the game belongs */
  +chat_id?: number,
  /** Identifier of the message */
  +message_id?: number,
  /** True, if the message should be edited */
  +edit_message?: boolean,
  /** User identifier */
  +user_id?: number,
  /** The new score */
  +score?: number,
  /**
   * Pass true to update the score even if it decreases. If the score is 0, the user will
   * be deleted from the high score table
   */
  +force?: boolean,
|}

/** Updates the game score of the specified user in a game; for bots only */
export type setInlineGameScore = {|
  +_: 'setInlineGameScore',
  /** Inline message identifier */
  +inline_message_id?: string,
  /** True, if the message should be edited */
  +edit_message?: boolean,
  /** User identifier */
  +user_id?: number,
  /** The new score */
  +score?: number,
  /**
   * Pass true to update the score even if it decreases. If the score is 0, the user will
   * be deleted from the high score table
   */
  +force?: boolean,
|}

/**
 * Returns the high scores for a game and some part of the high score table in the range
 * of the specified user; for bots only
 */
export type getGameHighScores = {|
  +_: 'getGameHighScores',
  /** The chat that contains the message with the game */
  +chat_id?: number,
  /** Identifier of the message */
  +message_id?: number,
  /** User identifier */
  +user_id?: number,
|}

/**
 * Returns game high scores and some part of the high score table in the range of the
 * specified user; for bots only
 */
export type getInlineGameHighScores = {|
  +_: 'getInlineGameHighScores',
  /** Inline message identifier */
  +inline_message_id?: string,
  /** User identifier */
  +user_id?: number,
|}

/**
 * Deletes the default reply markup from a chat. Must be called after a one-time keyboard
 * or a ForceReply reply markup has been used. UpdateChatReplyMarkup will be sent if
 * the reply markup will be changed
 */
export type deleteChatReplyMarkup = {|
  +_: 'deleteChatReplyMarkup',
  /** Chat identifier */
  +chat_id?: number,
  /** The message identifier of the used keyboard */
  +message_id?: number,
|}

/** Sends a notification about user activity in a chat */
export type sendChatAction = {|
  +_: 'sendChatAction',
  /** Chat identifier */
  +chat_id?: number,
  /** The action description */
  +action?: ChatAction$Input,
|}

/**
 * Informs TDLib that the chat is opened by the user. Many useful activities depend
 * on the chat being opened or closed (e.g., in supergroups and channels all updates
 * are received only for opened chats)
 */
export type openChat = {|
  +_: 'openChat',
  /** Chat identifier */
  +chat_id?: number,
|}

/**
 * Informs TDLib that the chat is closed by the user. Many useful activities depend
 * on the chat being opened or closed
 */
export type closeChat = {|
  +_: 'closeChat',
  /** Chat identifier */
  +chat_id?: number,
|}

/**
 * Informs TDLib that messages are being viewed by the user. Many useful activities
 * depend on whether the messages are currently being viewed or not (e.g., marking messages
 * as read, incrementing a view counter, updating a view counter, removing deleted messages
 * in supergroups and channels)
 */
export type viewMessages = {|
  +_: 'viewMessages',
  /** Chat identifier */
  +chat_id?: number,
  /** The identifiers of the messages being viewed */
  +message_ids?: $ReadOnlyArray<number>,
  /** True, if messages in closed chats should be marked as read */
  +force_read?: boolean,
|}

/**
 * Informs TDLib that the message content has been opened (e.g., the user has opened
 * a photo, video, document, location or venue, or has listened to an audio file or
 * voice note message). An updateMessageContentOpened update will be generated if something
 * has changed
 */
export type openMessageContent = {|
  +_: 'openMessageContent',
  /** Chat identifier of the message */
  +chat_id?: number,
  /** Identifier of the message with the opened content */
  +message_id?: number,
|}

/** Marks all mentions in a chat as read */
export type readAllChatMentions = {|
  +_: 'readAllChatMentions',
  /** Chat identifier */
  +chat_id?: number,
|}

/** Returns an existing chat corresponding to a given user */
export type createPrivateChat = {|
  +_: 'createPrivateChat',
  /** User identifier */
  +user_id?: number,
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  +force?: boolean,
|}

/** Returns an existing chat corresponding to a known basic group */
export type createBasicGroupChat = {|
  +_: 'createBasicGroupChat',
  /** Basic group identifier */
  +basic_group_id?: number,
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  +force?: boolean,
|}

/** Returns an existing chat corresponding to a known supergroup or channel */
export type createSupergroupChat = {|
  +_: 'createSupergroupChat',
  /** Supergroup or channel identifier */
  +supergroup_id?: number,
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  +force?: boolean,
|}

/** Returns an existing chat corresponding to a known secret chat */
export type createSecretChat = {|
  +_: 'createSecretChat',
  /** Secret chat identifier */
  +secret_chat_id?: number,
|}

/**
 * Creates a new basic group and sends a corresponding messageBasicGroupChatCreate.
 * Returns the newly created chat
 */
export type createNewBasicGroupChat = {|
  +_: 'createNewBasicGroupChat',
  /** Identifiers of users to be added to the basic group */
  +user_ids?: $ReadOnlyArray<number>,
  /** Title of the new basic group; 1-128 characters */
  +title?: string,
|}

/**
 * Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate.
 * Returns the newly created chat
 */
export type createNewSupergroupChat = {|
  +_: 'createNewSupergroupChat',
  /** Title of the new chat; 1-128 characters */
  +title?: string,
  /** True, if a channel chat should be created */
  +is_channel?: boolean,
  /** Chat description; 0-255 characters */
  +description?: string,
  /** Chat location if a location-based supergroup is being created */
  +location?: chatLocation$Input,
|}

/** Creates a new secret chat. Returns the newly created chat */
export type createNewSecretChat = {|
  +_: 'createNewSecretChat',
  /** Identifier of the target user */
  +user_id?: number,
|}

/**
 * Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo
 * and messageChatUpgradeFrom; requires creator privileges. Deactivates the original
 * basic group
 */
export type upgradeBasicGroupChatToSupergroupChat = {|
  +_: 'upgradeBasicGroupChatToSupergroupChat',
  /** Identifier of the chat to upgrade */
  +chat_id?: number,
|}

/** Moves a chat to a different chat list. Current chat list of the chat must ne non-null */
export type setChatChatList = {|
  +_: 'setChatChatList',
  /** Chat identifier */
  +chat_id?: number,
  /** New chat list of the chat */
  +chat_list?: ChatList$Input,
|}

/**
 * Changes the chat title. Supported only for basic groups, supergroups and channels.
 * Requires can_change_info rights. The title will not be changed until the request
 * to the server has been completed
 */
export type setChatTitle = {|
  +_: 'setChatTitle',
  /** Chat identifier */
  +chat_id?: number,
  /** New title of the chat; 1-128 characters */
  +title?: string,
|}

/**
 * Changes the photo of a chat. Supported only for basic groups, supergroups and channels.
 * Requires can_change_info rights. The photo will not be changed before request to
 * the server has been completed
 */
export type setChatPhoto = {|
  +_: 'setChatPhoto',
  /** Chat identifier */
  +chat_id?: number,
  /**
   * New chat photo. You can use a zero InputFileId to delete the chat photo. Files that
   * are accessible only by HTTP URL are not acceptable
   */
  +photo?: InputFile$Input,
|}

/**
 * Changes the chat members permissions. Supported only for basic groups and supergroups.
 * Requires can_restrict_members administrator right
 */
export type setChatPermissions = {|
  +_: 'setChatPermissions',
  /** Chat identifier */
  +chat_id?: number,
  /** New non-administrator members permissions in the chat */
  +permissions?: chatPermissions$Input,
|}

/** Changes the draft message in a chat */
export type setChatDraftMessage = {|
  +_: 'setChatDraftMessage',
  /** Chat identifier */
  +chat_id?: number,
  /** New draft message; may be null */
  +draft_message?: draftMessage$Input,
|}

/**
 * Changes the notification settings of a chat. Notification settings of a chat with
 * the current user (Saved Messages) can't be changed
 */
export type setChatNotificationSettings = {|
  +_: 'setChatNotificationSettings',
  /** Chat identifier */
  +chat_id?: number,
  /**
   * New notification settings for the chat. If the chat is muted for more than 1 week,
   * it is considered to be muted forever
   */
  +notification_settings?: chatNotificationSettings$Input,
|}

/**
 * Changes the pinned state of a chat. You can pin up to GetOption("pinned_chat_count_max")/GetOption("pinned_archived_chat_count_max")
 * non-secret chats and the same number of secret chats in the main/archive chat list
 */
export type toggleChatIsPinned = {|
  +_: 'toggleChatIsPinned',
  /** Chat identifier */
  +chat_id?: number,
  /** New value of is_pinned */
  +is_pinned?: boolean,
|}

/** Changes the marked as unread state of a chat */
export type toggleChatIsMarkedAsUnread = {|
  +_: 'toggleChatIsMarkedAsUnread',
  /** Chat identifier */
  +chat_id?: number,
  /** New value of is_marked_as_unread */
  +is_marked_as_unread?: boolean,
|}

/**
 * Changes the value of the default disable_notification parameter, used when a message
 * is sent to a chat
 */
export type toggleChatDefaultDisableNotification = {|
  +_: 'toggleChatDefaultDisableNotification',
  /** Chat identifier */
  +chat_id?: number,
  /** New value of default_disable_notification */
  +default_disable_notification?: boolean,
|}

/** Changes client data associated with a chat */
export type setChatClientData = {|
  +_: 'setChatClientData',
  /** Chat identifier */
  +chat_id?: number,
  /** New value of client_data */
  +client_data?: string,
|}

/**
 * Changes information about a chat. Available for basic groups, supergroups, and channels.
 * Requires can_change_info rights
 */
export type setChatDescription = {|
  +_: 'setChatDescription',
  /** Identifier of the chat */
  +chat_id?: number,
  /** New chat description; 0-255 characters */
  +description?: string,
|}

/**
 * Changes the discussion group of a channel chat; requires can_change_info rights in
 * the channel if it is specified
 */
export type setChatDiscussionGroup = {|
  +_: 'setChatDiscussionGroup',
  /**
   * Identifier of the channel chat. Pass 0 to remove a link from the supergroup passed
   * in the second argument to a linked channel chat (requires can_pin_messages rights
   * in the supergroup)
   */
  +chat_id?: number,
  /**
   * Identifier of a new channel's discussion group. Use 0 to remove the discussion group.
   * Use the method getSuitableDiscussionChats to find all suitable groups. Basic group
   * chats needs to be first upgraded to supergroup chats. If new chat members don't have
   * access to old messages in the supergroup, then toggleSupergroupIsAllHistoryAvailable
   * needs to be used first to change that
   */
  +discussion_chat_id?: number,
|}

/**
 * Changes the location of a chat. Available only for some location-based supergroups,
 * use supergroupFullInfo.can_set_location to check whether the method is allowed to
 * use
 */
export type setChatLocation = {|
  +_: 'setChatLocation',
  /** Chat identifier */
  +chat_id?: number,
  /** New location for the chat; must be valid and not null */
  +location?: chatLocation$Input,
|}

/**
 * Changes the slow mode delay of a chat. Available only for supergroups; requires can_restrict_members
 * rights
 */
export type setChatSlowModeDelay = {|
  +_: 'setChatSlowModeDelay',
  /** Chat identifier */
  +chat_id?: number,
  /** New slow mode delay for the chat; must be one of 0, 10, 30, 60, 300, 900, 3600 */
  +slow_mode_delay?: number,
|}

/** Pins a message in a chat; requires can_pin_messages rights */
export type pinChatMessage = {|
  +_: 'pinChatMessage',
  /** Identifier of the chat */
  +chat_id?: number,
  /** Identifier of the new pinned message */
  +message_id?: number,
  /** True, if there should be no notification about the pinned message */
  +disable_notification?: boolean,
|}

/**
 * Removes the pinned message from a chat; requires can_pin_messages rights in the group
 * or channel
 */
export type unpinChatMessage = {|
  +_: 'unpinChatMessage',
  /** Identifier of the chat */
  +chat_id?: number,
|}

/**
 * Adds current user as a new member to a chat. Private and secret chats can't be joined
 * using this method
 */
export type joinChat = {|
  +_: 'joinChat',
  /** Chat identifier */
  +chat_id?: number,
|}

/**
 * Removes current user from chat members. Private and secret chats can't be left using
 * this method
 */
export type leaveChat = {|
  +_: 'leaveChat',
  /** Chat identifier */
  +chat_id?: number,
|}

/**
 * Adds a new member to a chat. Members can't be added to private or secret chats. Members
 * will not be added until the chat state has been synchronized with the server
 */
export type addChatMember = {|
  +_: 'addChatMember',
  /** Chat identifier */
  +chat_id?: number,
  /** Identifier of the user */
  +user_id?: number,
  /**
   * The number of earlier messages from the chat to be forwarded to the new member; up
   * to 100. Ignored for supergroups and channels
   */
  +forward_limit?: number,
|}

/**
 * Adds multiple new members to a chat. Currently this option is only available for
 * supergroups and channels. This option can't be used to join a chat. Members can't
 * be added to a channel if it has more than 200 members. Members will not be added
 * until the chat state has been synchronized with the server
 */
export type addChatMembers = {|
  +_: 'addChatMembers',
  /** Chat identifier */
  +chat_id?: number,
  /** Identifiers of the users to be added to the chat */
  +user_ids?: $ReadOnlyArray<number>,
|}

/**
 * Changes the status of a chat member, needs appropriate privileges. This function
 * is currently not suitable for adding new members to the chat and transferring chat
 * ownership; instead, use addChatMember or transferChatOwnership. The chat member status
 * will not be changed until it has been synchronized with the server
 */
export type setChatMemberStatus = {|
  +_: 'setChatMemberStatus',
  /** Chat identifier */
  +chat_id?: number,
  /** User identifier */
  +user_id?: number,
  /** The new status of the member in the chat */
  +status?: ChatMemberStatus$Input,
|}

/**
 * Checks whether the current session can be used to transfer a chat ownership to another
 * user
 */
export type canTransferOwnership = {|
  +_: 'canTransferOwnership',
|}

/**
 * Changes the owner of a chat. The current user must be a current owner of the chat.
 * Use the method canTransferOwnership to check whether the ownership can be transferred
 * from the current session. Available only for supergroups and channel chats
 */
export type transferChatOwnership = {|
  +_: 'transferChatOwnership',
  /** Chat identifier */
  +chat_id?: number,
  /**
   * Identifier of the user to which transfer the ownership. The ownership can't be transferred
   * to a bot or to a deleted user
   */
  +user_id?: number,
  /** The password of the current user */
  +password?: string,
|}

/** Returns information about a single member of a chat */
export type getChatMember = {|
  +_: 'getChatMember',
  /** Chat identifier */
  +chat_id?: number,
  /** User identifier */
  +user_id?: number,
|}

/**
 * Searches for a specified query in the first name, last name and username of the members
 * of a specified chat. Requires administrator rights in channels
 */
export type searchChatMembers = {|
  +_: 'searchChatMembers',
  /** Chat identifier */
  +chat_id?: number,
  /** Query to search for */
  +query?: string,
  /** The maximum number of users to be returned */
  +limit?: number,
  /** The type of users to return. By default, chatMembersFilterMembers */
  +filter?: ChatMembersFilter$Input,
|}

/** Returns a list of administrators of the chat with their custom titles */
export type getChatAdministrators = {|
  +_: 'getChatAdministrators',
  /** Chat identifier */
  +chat_id?: number,
|}

/** Clears draft messages in all chats */
export type clearAllDraftMessages = {|
  +_: 'clearAllDraftMessages',
  /** If true, local draft messages in secret chats will not be cleared */
  +exclude_secret_chats?: boolean,
|}

/** Returns list of chats with non-default notification settings */
export type getChatNotificationSettingsExceptions = {|
  +_: 'getChatNotificationSettingsExceptions',
  /** If specified, only chats from the specified scope will be returned */
  +scope?: NotificationSettingsScope$Input,
  /** If true, also chats with non-default sound will be returned */
  +compare_sound?: boolean,
|}

/** Returns the notification settings for chats of a given type */
export type getScopeNotificationSettings = {|
  +_: 'getScopeNotificationSettings',
  /** Types of chats for which to return the notification settings information */
  +scope?: NotificationSettingsScope$Input,
|}

/** Changes notification settings for chats of a given type */
export type setScopeNotificationSettings = {|
  +_: 'setScopeNotificationSettings',
  /** Types of chats for which to change the notification settings */
  +scope?: NotificationSettingsScope$Input,
  /** The new notification settings for the given scope */
  +notification_settings?: scopeNotificationSettings$Input,
|}

/**
 * Resets all notification settings to their default values. By default, all chats are
 * unmuted, the sound is set to "default" and message previews are shown
 */
export type resetAllNotificationSettings = {|
  +_: 'resetAllNotificationSettings',
|}

/** Changes the order of pinned chats */
export type setPinnedChats = {|
  +_: 'setPinnedChats',
  /** Chat list in which to change the order of pinned chats */
  +chat_list?: ChatList$Input,
  /** The new list of pinned chats */
  +chat_ids?: $ReadOnlyArray<number>,
|}

/**
 * Downloads a file from the cloud. Download progress and completion of the download
 * will be notified through updateFile updates
 */
export type downloadFile = {|
  +_: 'downloadFile',
  /** Identifier of the file to download */
  +file_id?: number,
  /**
   * Priority of the download (1-32). The higher the priority, the earlier the file will
   * be downloaded. If the priorities of two files are equal, then the last one for which
   * downloadFile was called will be downloaded first
   */
  +priority?: number,
  /** The starting position from which the file should be downloaded */
  +offset?: number,
  /**
   * Number of bytes which should be downloaded starting from the "offset" position before
   * the download will be automatically cancelled; use 0 to download without a limit
   */
  +limit?: number,
  /**
   * If false, this request returns file state just after the download has been started.
   * If true, this request returns file state only after the download has succeeded, has
   * failed, has been cancelled or a new downloadFile request with different offset/limit
   * parameters was sent
   */
  +synchronous?: boolean,
|}

/** Returns file downloaded prefix size from a given offset */
export type getFileDownloadedPrefixSize = {|
  +_: 'getFileDownloadedPrefixSize',
  /** Identifier of the file */
  +file_id?: number,
  /** Offset from which downloaded prefix size should be calculated */
  +offset?: number,
|}

/** Stops the downloading of a file. If a file has already been downloaded, does nothing */
export type cancelDownloadFile = {|
  +_: 'cancelDownloadFile',
  /** Identifier of a file to stop downloading */
  +file_id?: number,
  /**
   * Pass true to stop downloading only if it hasn't been started, i.e. request hasn't
   * been sent to server
   */
  +only_if_pending?: boolean,
|}

/**
 * Asynchronously uploads a file to the cloud without sending it in a message. updateFile
 * will be used to notify about upload progress and successful completion of the upload.
 * The file will not have a persistent remote identifier until it will be sent in a
 * message
 */
export type uploadFile = {|
  +_: 'uploadFile',
  /** File to upload */
  +file?: InputFile$Input,
  /** File type */
  +file_type?: FileType$Input,
  /**
   * Priority of the upload (1-32). The higher the priority, the earlier the file will
   * be uploaded. If the priorities of two files are equal, then the first one for which
   * uploadFile was called will be uploaded first
   */
  +priority?: number,
|}

/**
 * Stops the uploading of a file. Supported only for files uploaded by using uploadFile.
 * For other files the behavior is undefined
 */
export type cancelUploadFile = {|
  +_: 'cancelUploadFile',
  /** Identifier of the file to stop uploading */
  +file_id?: number,
|}

/**
 * Writes a part of a generated file. This method is intended to be used only if the
 * client has no direct access to TDLib's file system, because it is usually slower
 * than a direct write to the destination file
 */
export type writeGeneratedFilePart = {|
  +_: 'writeGeneratedFilePart',
  /** The identifier of the generation process */
  +generation_id?: number | string,
  /** The offset from which to write the data to the file */
  +offset?: number,
  /** The data to write */
  +data?: string,
|}

/** Informs TDLib on a file generation progress */
export type setFileGenerationProgress = {|
  +_: 'setFileGenerationProgress',
  /** The identifier of the generation process */
  +generation_id?: number | string,
  /** Expected size of the generated file, in bytes; 0 if unknown */
  +expected_size?: number,
  /** The number of bytes already generated */
  +local_prefix_size?: number,
|}

/** Finishes the file generation */
export type finishFileGeneration = {|
  +_: 'finishFileGeneration',
  /** The identifier of the generation process */
  +generation_id?: number | string,
  /** If set, means that file generation has failed and should be terminated */
  +error?: error$Input,
|}

/**
 * Reads a part of a file from the TDLib file cache and returns read bytes. This method
 * is intended to be used only if the client has no direct access to TDLib's file system,
 * because it is usually slower than a direct read from the file
 */
export type readFilePart = {|
  +_: 'readFilePart',
  /** Identifier of the file. The file must be located in the TDLib file cache */
  +file_id?: number,
  /** The offset from which to read the file */
  +offset?: number,
  /**
   * Number of bytes to read. An error will be returned if there are not enough bytes
   * available in the file from the specified position. Pass 0 to read all available data
   * from the specified position
   */
  +count?: number,
|}

/** Deletes a file from the TDLib file cache */
export type deleteFile = {|
  +_: 'deleteFile',
  /** Identifier of the file to delete */
  +file_id?: number,
|}

/**
 * Generates a new invite link for a chat; the previously generated link is revoked.
 * Available for basic groups, supergroups, and channels. Requires administrator privileges
 * and can_invite_users right
 */
export type generateChatInviteLink = {|
  +_: 'generateChatInviteLink',
  /** Chat identifier */
  +chat_id?: number,
|}

/**
 * Checks the validity of an invite link for a chat and returns information about the
 * corresponding chat
 */
export type checkChatInviteLink = {|
  +_: 'checkChatInviteLink',
  /**
   * Invite link to be checked; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/",
   * or "https://telegram.dog/joinchat/"
   */
  +invite_link?: string,
|}

/**
 * Uses an invite link to add the current user to the chat if possible. The new member
 * will not be added until the chat state has been synchronized with the server
 */
export type joinChatByInviteLink = {|
  +_: 'joinChatByInviteLink',
  /**
   * Invite link to import; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/",
   * or "https://telegram.dog/joinchat/"
   */
  +invite_link?: string,
|}

/** Creates a new call */
export type createCall = {|
  +_: 'createCall',
  /** Identifier of the user to be called */
  +user_id?: number,
  /** Description of the call protocols supported by the client */
  +protocol?: callProtocol$Input,
|}

/** Accepts an incoming call */
export type acceptCall = {|
  +_: 'acceptCall',
  /** Call identifier */
  +call_id?: number,
  /** Description of the call protocols supported by the client */
  +protocol?: callProtocol$Input,
|}

/** Discards a call */
export type discardCall = {|
  +_: 'discardCall',
  /** Call identifier */
  +call_id?: number,
  /** True, if the user was disconnected */
  +is_disconnected?: boolean,
  /** The call duration, in seconds */
  +duration?: number,
  /** Identifier of the connection used during the call */
  +connection_id?: number | string,
|}

/** Sends a call rating */
export type sendCallRating = {|
  +_: 'sendCallRating',
  /** Call identifier */
  +call_id?: number,
  /** Call rating; 1-5 */
  +rating?: number,
  /** An optional user comment if the rating is less than 5 */
  +comment?: string,
  /** List of the exact types of problems with the call, specified by the user */
  +problems?: $ReadOnlyArray<CallProblem$Input>,
|}

/** Sends debug information for a call */
export type sendCallDebugInformation = {|
  +_: 'sendCallDebugInformation',
  /** Call identifier */
  +call_id?: number,
  /** Debug information in application-specific format */
  +debug_information?: string,
|}

/** Adds a user to the blacklist */
export type blockUser = {|
  +_: 'blockUser',
  /** User identifier */
  +user_id?: number,
|}

/** Removes a user from the blacklist */
export type unblockUser = {|
  +_: 'unblockUser',
  /** User identifier */
  +user_id?: number,
|}

/** Returns users that were blocked by the current user */
export type getBlockedUsers = {|
  +_: 'getBlockedUsers',
  /** Number of users to skip in the result; must be non-negative */
  +offset?: number,
  /** The maximum number of users to return; up to 100 */
  +limit?: number,
|}

/** Adds a user to the contact list or edits an existing contact by their user identifier */
export type addContact = {|
  +_: 'addContact',
  /**
   * The contact to add or edit; phone number can be empty and needs to be specified only
   * if known, vCard is ignored
   */
  +contact?: contact$Input,
  /**
   * True, if the new contact needs to be allowed to see current user's phone number.
   * A corresponding rule to userPrivacySettingShowPhoneNumber will be added if needed.
   * Use the field UserFullInfo.need_phone_number_privacy_exception to check whether the
   * current user needs to be asked to share their phone number
   */
  +share_phone_number?: boolean,
|}

/**
 * Adds new contacts or edits existing contacts by their phone numbers; contacts' user
 * identifiers are ignored
 */
export type importContacts = {|
  +_: 'importContacts',
  /** The list of contacts to import or edit; contacts' vCard are ignored and are not imported */
  +contacts?: $ReadOnlyArray<contact$Input>,
|}

/** Returns all user contacts */
export type getContacts = {|
  +_: 'getContacts',
|}

/**
 * Searches for the specified query in the first names, last names and usernames of
 * the known user contacts
 */
export type searchContacts = {|
  +_: 'searchContacts',
  /** Query to search for; may be empty to return all contacts */
  +query?: string,
  /** The maximum number of users to be returned */
  +limit?: number,
|}

/** Removes users from the contact list */
export type removeContacts = {|
  +_: 'removeContacts',
  /** Identifiers of users to be deleted */
  +user_ids?: $ReadOnlyArray<number>,
|}

/** Returns the total number of imported contacts */
export type getImportedContactCount = {|
  +_: 'getImportedContactCount',
|}

/**
 * Changes imported contacts using the list of current user contacts saved on the device.
 * Imports newly added contacts and, if at least the file database is enabled, deletes
 * recently deleted contacts. Query result depends on the result of the previous query,
 * so only one query is possible at the same time
 */
export type changeImportedContacts = {|
  +_: 'changeImportedContacts',
  /** The new list of contacts, contact's vCard are ignored and are not imported */
  +contacts?: $ReadOnlyArray<contact$Input>,
|}

/** Clears all imported contacts, contact list remains unchanged */
export type clearImportedContacts = {|
  +_: 'clearImportedContacts',
|}

/**
 * Shares the phone number of the current user with a mutual contact. Supposed to be
 * called when the user clicks on chatActionBarSharePhoneNumber
 */
export type sharePhoneNumber = {|
  +_: 'sharePhoneNumber',
  /**
   * Identifier of the user with whom to share the phone number. The user must be a mutual
   * contact
   */
  +user_id?: number,
|}

/**
 * Returns the profile photos of a user. The result of this query may be outdated: some
 * photos might have been deleted already
 */
export type getUserProfilePhotos = {|
  +_: 'getUserProfilePhotos',
  /** User identifier */
  +user_id?: number,
  /** The number of photos to skip; must be non-negative */
  +offset?: number,
  /** The maximum number of photos to be returned; up to 100 */
  +limit?: number,
|}

/**
 * Returns stickers from the installed sticker sets that correspond to a given emoji.
 * If the emoji is not empty, favorite and recently used stickers may also be returned
 */
export type getStickers = {|
  +_: 'getStickers',
  /** String representation of emoji. If empty, returns all known installed stickers */
  +emoji?: string,
  /** The maximum number of stickers to be returned */
  +limit?: number,
|}

/** Searches for stickers from public sticker sets that correspond to a given emoji */
export type searchStickers = {|
  +_: 'searchStickers',
  /** String representation of emoji; must be non-empty */
  +emoji?: string,
  /** The maximum number of stickers to be returned */
  +limit?: number,
|}

/** Returns a list of installed sticker sets */
export type getInstalledStickerSets = {|
  +_: 'getInstalledStickerSets',
  /** Pass true to return mask sticker sets; pass false to return ordinary sticker sets */
  +is_masks?: boolean,
|}

/** Returns a list of archived sticker sets */
export type getArchivedStickerSets = {|
  +_: 'getArchivedStickerSets',
  /** Pass true to return mask stickers sets; pass false to return ordinary sticker sets */
  +is_masks?: boolean,
  /** Identifier of the sticker set from which to return the result */
  +offset_sticker_set_id?: number | string,
  /** The maximum number of sticker sets to return */
  +limit?: number,
|}

/** Returns a list of trending sticker sets */
export type getTrendingStickerSets = {|
  +_: 'getTrendingStickerSets',
|}

/**
 * Returns a list of sticker sets attached to a file. Currently only photos and videos
 * can have attached sticker sets
 */
export type getAttachedStickerSets = {|
  +_: 'getAttachedStickerSets',
  /** File identifier */
  +file_id?: number,
|}

/** Returns information about a sticker set by its identifier */
export type getStickerSet = {|
  +_: 'getStickerSet',
  /** Identifier of the sticker set */
  +set_id?: number | string,
|}

/** Searches for a sticker set by its name */
export type searchStickerSet = {|
  +_: 'searchStickerSet',
  /** Name of the sticker set */
  +name?: string,
|}

/**
 * Searches for installed sticker sets by looking for specified query in their title
 * and name
 */
export type searchInstalledStickerSets = {|
  +_: 'searchInstalledStickerSets',
  /** Pass true to return mask sticker sets; pass false to return ordinary sticker sets */
  +is_masks?: boolean,
  /** Query to search for */
  +query?: string,
  /** The maximum number of sticker sets to return */
  +limit?: number,
|}

/**
 * Searches for ordinary sticker sets by looking for specified query in their title
 * and name. Excludes installed sticker sets from the results
 */
export type searchStickerSets = {|
  +_: 'searchStickerSets',
  /** Query to search for */
  +query?: string,
|}

/** Installs/uninstalls or activates/archives a sticker set */
export type changeStickerSet = {|
  +_: 'changeStickerSet',
  /** Identifier of the sticker set */
  +set_id?: number | string,
  /** The new value of is_installed */
  +is_installed?: boolean,
  /** The new value of is_archived. A sticker set can't be installed and archived simultaneously */
  +is_archived?: boolean,
|}

/** Informs the server that some trending sticker sets have been viewed by the user */
export type viewTrendingStickerSets = {|
  +_: 'viewTrendingStickerSets',
  /** Identifiers of viewed trending sticker sets */
  +sticker_set_ids?: $ReadOnlyArray<number | string>,
|}

/** Changes the order of installed sticker sets */
export type reorderInstalledStickerSets = {|
  +_: 'reorderInstalledStickerSets',
  /**
   * Pass true to change the order of mask sticker sets; pass false to change the order
   * of ordinary sticker sets
   */
  +is_masks?: boolean,
  /** Identifiers of installed sticker sets in the new correct order */
  +sticker_set_ids?: $ReadOnlyArray<number | string>,
|}

/** Returns a list of recently used stickers */
export type getRecentStickers = {|
  +_: 'getRecentStickers',
  /**
   * Pass true to return stickers and masks that were recently attached to photos or video
   * files; pass false to return recently sent stickers
   */
  +is_attached?: boolean,
|}

/**
 * Manually adds a new sticker to the list of recently used stickers. The new sticker
 * is added to the top of the list. If the sticker was already in the list, it is removed
 * from the list first. Only stickers belonging to a sticker set can be added to this
 * list
 */
export type addRecentSticker = {|
  +_: 'addRecentSticker',
  /**
   * Pass true to add the sticker to the list of stickers recently attached to photo or
   * video files; pass false to add the sticker to the list of recently sent stickers
   */
  +is_attached?: boolean,
  /** Sticker file to add */
  +sticker?: InputFile$Input,
|}

/** Removes a sticker from the list of recently used stickers */
export type removeRecentSticker = {|
  +_: 'removeRecentSticker',
  /**
   * Pass true to remove the sticker from the list of stickers recently attached to photo
   * or video files; pass false to remove the sticker from the list of recently sent stickers
   */
  +is_attached?: boolean,
  /** Sticker file to delete */
  +sticker?: InputFile$Input,
|}

/** Clears the list of recently used stickers */
export type clearRecentStickers = {|
  +_: 'clearRecentStickers',
  /**
   * Pass true to clear the list of stickers recently attached to photo or video files;
   * pass false to clear the list of recently sent stickers
   */
  +is_attached?: boolean,
|}

/** Returns favorite stickers */
export type getFavoriteStickers = {|
  +_: 'getFavoriteStickers',
|}

/**
 * Adds a new sticker to the list of favorite stickers. The new sticker is added to
 * the top of the list. If the sticker was already in the list, it is removed from the
 * list first. Only stickers belonging to a sticker set can be added to this list
 */
export type addFavoriteSticker = {|
  +_: 'addFavoriteSticker',
  /** Sticker file to add */
  +sticker?: InputFile$Input,
|}

/** Removes a sticker from the list of favorite stickers */
export type removeFavoriteSticker = {|
  +_: 'removeFavoriteSticker',
  /** Sticker file to delete from the list */
  +sticker?: InputFile$Input,
|}

/**
 * Returns emoji corresponding to a sticker. The list is only for informational purposes,
 * because a sticker is always sent with a fixed emoji from the corresponding Sticker
 * object
 */
export type getStickerEmojis = {|
  +_: 'getStickerEmojis',
  /** Sticker file identifier */
  +sticker?: InputFile$Input,
|}

/** Searches for emojis by keywords. Supported only if the file database is enabled */
export type searchEmojis = {|
  +_: 'searchEmojis',
  /** Text to search for */
  +text?: string,
  /** True, if only emojis, which exactly match text needs to be returned */
  +exact_match?: boolean,
  /** IETF language tag of the user's input language; may be empty if unknown */
  +input_language_code?: string,
|}

/**
 * Returns an HTTP URL which can be used to automatically log in to the translation
 * platform and suggest new emoji replacements. The URL will be valid for 30 seconds
 * after generation
 */
export type getEmojiSuggestionsUrl = {|
  +_: 'getEmojiSuggestionsUrl',
  /** Language code for which the emoji replacements will be suggested */
  +language_code?: string,
|}

/** Returns saved animations */
export type getSavedAnimations = {|
  +_: 'getSavedAnimations',
|}

/**
 * Manually adds a new animation to the list of saved animations. The new animation
 * is added to the beginning of the list. If the animation was already in the list,
 * it is removed first. Only non-secret video animations with MIME type "video/mp4"
 * can be added to the list
 */
export type addSavedAnimation = {|
  +_: 'addSavedAnimation',
  /**
   * The animation file to be added. Only animations known to the server (i.e. successfully
   * sent via a message) can be added to the list
   */
  +animation?: InputFile$Input,
|}

/** Removes an animation from the list of saved animations */
export type removeSavedAnimation = {|
  +_: 'removeSavedAnimation',
  /** Animation file to be removed */
  +animation?: InputFile$Input,
|}

/** Returns up to 20 recently used inline bots in the order of their last usage */
export type getRecentInlineBots = {|
  +_: 'getRecentInlineBots',
|}

/** Searches for recently used hashtags by their prefix */
export type searchHashtags = {|
  +_: 'searchHashtags',
  /** Hashtag prefix to search for */
  +prefix?: string,
  /** The maximum number of hashtags to be returned */
  +limit?: number,
|}

/** Removes a hashtag from the list of recently used hashtags */
export type removeRecentHashtag = {|
  +_: 'removeRecentHashtag',
  /** Hashtag to delete */
  +hashtag?: string,
|}

/**
 * Returns a web page preview by the text of the message. Do not call this function
 * too often. Returns a 404 error if the web page has no preview
 */
export type getWebPagePreview = {|
  +_: 'getWebPagePreview',
  /** Message text with formatting */
  +text?: formattedText$Input,
|}

/**
 * Returns an instant view version of a web page if available. Returns a 404 error if
 * the web page has no instant view page
 */
export type getWebPageInstantView = {|
  +_: 'getWebPageInstantView',
  /** The web page URL */
  +url?: string,
  /** If true, the full instant view for the web page will be returned */
  +force_full?: boolean,
|}

/**
 * Uploads a new profile photo for the current user. If something changes, updateUser
 * will be sent
 */
export type setProfilePhoto = {|
  +_: 'setProfilePhoto',
  /** Profile photo to set. inputFileId and inputFileRemote may still be unsupported */
  +photo?: InputFile$Input,
|}

/** Deletes a profile photo. If something changes, updateUser will be sent */
export type deleteProfilePhoto = {|
  +_: 'deleteProfilePhoto',
  /** Identifier of the profile photo to delete */
  +profile_photo_id?: number | string,
|}

/**
 * Changes the first and last name of the current user. If something changes, updateUser
 * will be sent
 */
export type setName = {|
  +_: 'setName',
  /** The new value of the first name for the user; 1-64 characters */
  +first_name?: string,
  /** The new value of the optional last name for the user; 0-64 characters */
  +last_name?: string,
|}

/** Changes the bio of the current user */
export type setBio = {|
  +_: 'setBio',
  /** The new value of the user bio; 0-70 characters without line feeds */
  +bio?: string,
|}

/**
 * Changes the username of the current user. If something changes, updateUser will be
 * sent
 */
export type setUsername = {|
  +_: 'setUsername',
  /** The new value of the username. Use an empty string to remove the username */
  +username?: string,
|}

/**
 * Changes the phone number of the user and sends an authentication code to the user's
 * new phone number. On success, returns information about the sent code
 */
export type changePhoneNumber = {|
  +_: 'changePhoneNumber',
  /** The new phone number of the user in international format */
  +phone_number?: string,
  /** Settings for the authentication of the user's phone number */
  +settings?: phoneNumberAuthenticationSettings$Input,
|}

/**
 * Re-sends the authentication code sent to confirm a new phone number for the user.
 * Works only if the previously received authenticationCodeInfo next_code_type was not
 * null
 */
export type resendChangePhoneNumberCode = {|
  +_: 'resendChangePhoneNumberCode',
|}

/** Checks the authentication code sent to confirm a new phone number of the user */
export type checkChangePhoneNumberCode = {|
  +_: 'checkChangePhoneNumberCode',
  /** Verification code received by SMS, phone call or flash call */
  +code?: string,
|}

/** Returns all active sessions of the current user */
export type getActiveSessions = {|
  +_: 'getActiveSessions',
|}

/** Terminates a session of the current user */
export type terminateSession = {|
  +_: 'terminateSession',
  /** Session identifier */
  +session_id?: number | string,
|}

/** Terminates all other sessions of the current user */
export type terminateAllOtherSessions = {|
  +_: 'terminateAllOtherSessions',
|}

/** Returns all website where the current user used Telegram to log in */
export type getConnectedWebsites = {|
  +_: 'getConnectedWebsites',
|}

/** Disconnects website from the current user's Telegram account */
export type disconnectWebsite = {|
  +_: 'disconnectWebsite',
  /** Website identifier */
  +website_id?: number | string,
|}

/** Disconnects all websites from the current user's Telegram account */
export type disconnectAllWebsites = {|
  +_: 'disconnectAllWebsites',
|}

/**
 * Changes the username of a supergroup or channel, requires owner privileges in the
 * supergroup or channel
 */
export type setSupergroupUsername = {|
  +_: 'setSupergroupUsername',
  /** Identifier of the supergroup or channel */
  +supergroup_id?: number,
  /** New value of the username. Use an empty string to remove the username */
  +username?: string,
|}

/** Changes the sticker set of a supergroup; requires can_change_info rights */
export type setSupergroupStickerSet = {|
  +_: 'setSupergroupStickerSet',
  /** Identifier of the supergroup */
  +supergroup_id?: number,
  /**
   * New value of the supergroup sticker set identifier. Use 0 to remove the supergroup
   * sticker set
   */
  +sticker_set_id?: number | string,
|}

/** Toggles sender signatures messages sent in a channel; requires can_change_info rights */
export type toggleSupergroupSignMessages = {|
  +_: 'toggleSupergroupSignMessages',
  /** Identifier of the channel */
  +supergroup_id?: number,
  /** New value of sign_messages */
  +sign_messages?: boolean,
|}

/**
 * Toggles whether the message history of a supergroup is available to new members;
 * requires can_change_info rights
 */
export type toggleSupergroupIsAllHistoryAvailable = {|
  +_: 'toggleSupergroupIsAllHistoryAvailable',
  /** The identifier of the supergroup */
  +supergroup_id?: number,
  /** The new value of is_all_history_available */
  +is_all_history_available?: boolean,
|}

/**
 * Reports some messages from a user in a supergroup as spam; requires administrator
 * rights in the supergroup
 */
export type reportSupergroupSpam = {|
  +_: 'reportSupergroupSpam',
  /** Supergroup identifier */
  +supergroup_id?: number,
  /** User identifier */
  +user_id?: number,
  /** Identifiers of messages sent in the supergroup by the user. This list must be non-empty */
  +message_ids?: $ReadOnlyArray<number>,
|}

/**
 * Returns information about members or banned users in a supergroup or channel. Can
 * be used only if SupergroupFullInfo.can_get_members == true; additionally, administrator
 * privileges may be required for some filters
 */
export type getSupergroupMembers = {|
  +_: 'getSupergroupMembers',
  /** Identifier of the supergroup or channel */
  +supergroup_id?: number,
  /** The type of users to return. By default, supergroupMembersRecent */
  +filter?: SupergroupMembersFilter$Input,
  /** Number of users to skip */
  +offset?: number,
  /** The maximum number of users be returned; up to 200 */
  +limit?: number,
|}

/**
 * Deletes a supergroup or channel along with all messages in the corresponding chat.
 * This will release the supergroup or channel username and remove all members; requires
 * owner privileges in the supergroup or channel. Chats with more than 1000 members
 * can't be deleted using this method
 */
export type deleteSupergroup = {|
  +_: 'deleteSupergroup',
  /** Identifier of the supergroup or channel */
  +supergroup_id?: number,
|}

/** Closes a secret chat, effectively transferring its state to secretChatStateClosed */
export type closeSecretChat = {|
  +_: 'closeSecretChat',
  /** Secret chat identifier */
  +secret_chat_id?: number,
|}

/**
 * Returns a list of service actions taken by chat members and administrators in the
 * last 48 hours. Available only for supergroups and channels. Requires administrator
 * rights. Returns results in reverse chronological order (i. e., in order of decreasing
 * event_id)
 */
export type getChatEventLog = {|
  +_: 'getChatEventLog',
  /** Chat identifier */
  +chat_id?: number,
  /** Search query by which to filter events */
  +query?: string,
  /**
   * Identifier of an event from which to return results. Use 0 to get results from the
   * latest events
   */
  +from_event_id?: number | string,
  /** The maximum number of events to return; up to 100 */
  +limit?: number,
  /** The types of events to return. By default, all types will be returned */
  +filters?: chatEventLogFilters$Input,
  /**
   * User identifiers by which to filter events. By default, events relating to all users
   * will be returned
   */
  +user_ids?: $ReadOnlyArray<number>,
|}

/**
 * Returns an invoice payment form. This method should be called when the user presses
 * inlineKeyboardButtonBuy
 */
export type getPaymentForm = {|
  +_: 'getPaymentForm',
  /** Chat identifier of the Invoice message */
  +chat_id?: number,
  /** Message identifier */
  +message_id?: number,
|}

/**
 * Validates the order information provided by a user and returns the available shipping
 * options for a flexible invoice
 */
export type validateOrderInfo = {|
  +_: 'validateOrderInfo',
  /** Chat identifier of the Invoice message */
  +chat_id?: number,
  /** Message identifier */
  +message_id?: number,
  /** The order information, provided by the user */
  +order_info?: orderInfo$Input,
  /** True, if the order information can be saved */
  +allow_save?: boolean,
|}

/** Sends a filled-out payment form to the bot for final verification */
export type sendPaymentForm = {|
  +_: 'sendPaymentForm',
  /** Chat identifier of the Invoice message */
  +chat_id?: number,
  /** Message identifier */
  +message_id?: number,
  /** Identifier returned by ValidateOrderInfo, or an empty string */
  +order_info_id?: string,
  /** Identifier of a chosen shipping option, if applicable */
  +shipping_option_id?: string,
  /** The credentials chosen by user for payment */
  +credentials?: InputCredentials$Input,
|}

/** Returns information about a successful payment */
export type getPaymentReceipt = {|
  +_: 'getPaymentReceipt',
  /** Chat identifier of the PaymentSuccessful message */
  +chat_id?: number,
  /** Message identifier */
  +message_id?: number,
|}

/** Returns saved order info, if any */
export type getSavedOrderInfo = {|
  +_: 'getSavedOrderInfo',
|}

/** Deletes saved order info */
export type deleteSavedOrderInfo = {|
  +_: 'deleteSavedOrderInfo',
|}

/** Deletes saved credentials for all payment provider bots */
export type deleteSavedCredentials = {|
  +_: 'deleteSavedCredentials',
|}

/** Returns a user that can be contacted to get support */
export type getSupportUser = {|
  +_: 'getSupportUser',
|}

/** Returns backgrounds installed by the user */
export type getBackgrounds = {|
  +_: 'getBackgrounds',
  /** True, if the backgrounds needs to be ordered for dark theme */
  +for_dark_theme?: boolean,
|}

/** Constructs a persistent HTTP URL for a background */
export type getBackgroundUrl = {|
  +_: 'getBackgroundUrl',
  /** Background name */
  +name?: string,
  /** Background type */
  +type?: BackgroundType$Input,
|}

/** Searches for a background by its name */
export type searchBackground = {|
  +_: 'searchBackground',
  /** The name of the background */
  +name?: string,
|}

/**
 * Changes the background selected by the user; adds background to the list of installed
 * backgrounds
 */
export type setBackground = {|
  +_: 'setBackground',
  /** The input background to use, null for filled backgrounds */
  +background?: InputBackground$Input,
  /**
   * Background type; null for default background. The method will return error 404 if
   * type is null
   */
  +type?: BackgroundType$Input,
  /** True, if the background is chosen for dark theme */
  +for_dark_theme?: boolean,
|}

/** Removes background from the list of installed backgrounds */
export type removeBackground = {|
  +_: 'removeBackground',
  /** The background identifier */
  +background_id?: number | string,
|}

/** Resets list of installed backgrounds to its default value */
export type resetBackgrounds = {|
  +_: 'resetBackgrounds',
|}

/**
 * Returns information about the current localization target. This is an offline request
 * if only_local is true. Can be called before authorization
 */
export type getLocalizationTargetInfo = {|
  +_: 'getLocalizationTargetInfo',
  /** If true, returns only locally available information without sending network requests */
  +only_local?: boolean,
|}

/**
 * Returns information about a language pack. Returned language pack identifier may
 * be different from a provided one. Can be called before authorization
 */
export type getLanguagePackInfo = {|
  +_: 'getLanguagePackInfo',
  /** Language pack identifier */
  +language_pack_id?: string,
|}

/**
 * Returns strings from a language pack in the current localization target by their
 * keys. Can be called before authorization
 */
export type getLanguagePackStrings = {|
  +_: 'getLanguagePackStrings',
  /** Language pack identifier of the strings to be returned */
  +language_pack_id?: string,
  /**
   * Language pack keys of the strings to be returned; leave empty to request all available
   * strings
   */
  +keys?: $ReadOnlyArray<string>,
|}

/**
 * Fetches the latest versions of all strings from a language pack in the current localization
 * target from the server. This method doesn't need to be called explicitly for the
 * current used/base language packs. Can be called before authorization
 */
export type synchronizeLanguagePack = {|
  +_: 'synchronizeLanguagePack',
  /** Language pack identifier */
  +language_pack_id?: string,
|}

/**
 * Adds a custom server language pack to the list of installed language packs in current
 * localization target. Can be called before authorization
 */
export type addCustomServerLanguagePack = {|
  +_: 'addCustomServerLanguagePack',
  /**
   * Identifier of a language pack to be added; may be different from a name that is used
   * in an "https://t.me/setlanguage/" link
   */
  +language_pack_id?: string,
|}

/** Adds or changes a custom local language pack to the current localization target */
export type setCustomLanguagePack = {|
  +_: 'setCustomLanguagePack',
  /**
   * Information about the language pack. Language pack ID must start with 'X', consist
   * only of English letters, digits and hyphens, and must not exceed 64 characters. Can
   * be called before authorization
   */
  +info?: languagePackInfo$Input,
  /** Strings of the new language pack */
  +strings?: $ReadOnlyArray<languagePackString$Input>,
|}

/**
 * Edits information about a custom local language pack in the current localization
 * target. Can be called before authorization
 */
export type editCustomLanguagePackInfo = {|
  +_: 'editCustomLanguagePackInfo',
  /** New information about the custom local language pack */
  +info?: languagePackInfo$Input,
|}

/**
 * Adds, edits or deletes a string in a custom local language pack. Can be called before
 * authorization
 */
export type setCustomLanguagePackString = {|
  +_: 'setCustomLanguagePackString',
  /**
   * Identifier of a previously added custom local language pack in the current localization
   * target
   */
  +language_pack_id?: string,
  /** New language pack string */
  +new_string?: languagePackString$Input,
|}

/**
 * Deletes all information about a language pack in the current localization target.
 * The language pack which is currently in use (including base language pack) or is
 * being synchronized can't be deleted. Can be called before authorization
 */
export type deleteLanguagePack = {|
  +_: 'deleteLanguagePack',
  /** Identifier of the language pack to delete */
  +language_pack_id?: string,
|}

/**
 * Registers the currently used device for receiving push notifications. Returns a globally
 * unique identifier of the push notification subscription
 */
export type registerDevice = {|
  +_: 'registerDevice',
  /** Device token */
  +device_token?: DeviceToken$Input,
  /** List of user identifiers of other users currently using the client */
  +other_user_ids?: $ReadOnlyArray<number>,
|}

/**
 * Handles a push notification. Returns error with code 406 if the push notification
 * is not supported and connection to the server is required to fetch new data. Can
 * be called before authorization
 */
export type processPushNotification = {|
  +_: 'processPushNotification',
  /**
   * JSON-encoded push notification payload with all fields sent by the server, and "google.sent_time"
   * and "google.notification.sound" fields added
   */
  +payload?: string,
|}

/**
 * Returns a globally unique push notification subscription identifier for identification
 * of an account, which has received a push notification. This is an offline method.
 * Can be called before authorization. Can be called synchronously
 */
export type getPushReceiverId = {|
  +_: 'getPushReceiverId',
  /** JSON-encoded push notification payload */
  +payload?: string,
|}

/** Returns t.me URLs recently visited by a newly registered user */
export type getRecentlyVisitedTMeUrls = {|
  +_: 'getRecentlyVisitedTMeUrls',
  /** Google Play referrer to identify the user */
  +referrer?: string,
|}

/** Changes user privacy settings */
export type setUserPrivacySettingRules = {|
  +_: 'setUserPrivacySettingRules',
  /** The privacy setting */
  +setting?: UserPrivacySetting$Input,
  /** The new privacy rules */
  +rules?: userPrivacySettingRules$Input,
|}

/** Returns the current privacy settings */
export type getUserPrivacySettingRules = {|
  +_: 'getUserPrivacySettingRules',
  /** The privacy setting */
  +setting?: UserPrivacySetting$Input,
|}

/**
 * Returns the value of an option by its name. (Check the list of available options
 * on https://core.telegram.org/tdlib/options.) Can be called before authorization
 */
export type getOption = {|
  +_: 'getOption',
  /** The name of the option */
  +name?: string,
|}

/**
 * Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.)
 * Only writable options can be set. Can be called before authorization
 */
export type setOption = {|
  +_: 'setOption',
  /** The name of the option */
  +name?: string,
  /** The new value of the option */
  +value?: OptionValue$Input,
|}

/**
 * Changes the period of inactivity after which the account of the current user will
 * automatically be deleted
 */
export type setAccountTtl = {|
  +_: 'setAccountTtl',
  /** New account TTL */
  +ttl?: accountTtl$Input,
|}

/**
 * Returns the period of inactivity after which the account of the current user will
 * automatically be deleted
 */
export type getAccountTtl = {|
  +_: 'getAccountTtl',
|}

/**
 * Deletes the account of the current user, deleting all information associated with
 * the user from the server. The phone number of the account can be used to create a
 * new account. Can be called before authorization when the current authorization state
 * is authorizationStateWaitPassword
 */
export type deleteAccount = {|
  +_: 'deleteAccount',
  /** The reason why the account was deleted; optional */
  +reason?: string,
|}

/** Removes a chat action bar without any other action */
export type removeChatActionBar = {|
  +_: 'removeChatActionBar',
  /** Chat identifier */
  +chat_id?: number,
|}

/**
 * Reports a chat to the Telegram moderators. Supported only for supergroups, channels,
 * or private chats with bots, since other chats can't be checked by moderators, or
 * when the report is done from the chat action bar
 */
export type reportChat = {|
  +_: 'reportChat',
  /** Chat identifier */
  +chat_id?: number,
  /** The reason for reporting the chat */
  +reason?: ChatReportReason$Input,
  /** Identifiers of reported messages, if any */
  +message_ids?: $ReadOnlyArray<number>,
|}

/**
 * Returns an HTTP URL with the chat statistics. Currently this method can be used only
 * for channels. Can be used only if SupergroupFullInfo.can_view_statistics == true
 */
export type getChatStatisticsUrl = {|
  +_: 'getChatStatisticsUrl',
  /** Chat identifier */
  +chat_id?: number,
  /** Parameters from "tg://statsrefresh?params=******" link */
  +parameters?: string,
  /** Pass true if a URL with the dark theme must be returned */
  +is_dark?: boolean,
|}

/** Returns storage usage statistics. Can be called before authorization */
export type getStorageStatistics = {|
  +_: 'getStorageStatistics',
  /**
   * The maximum number of chats with the largest storage usage for which separate statistics
   * should be returned. All other chats will be grouped in entries with chat_id == 0.
   * If the chat info database is not used, the chat_limit is ignored and is always set
   * to 0
   */
  +chat_limit?: number,
|}

/** Quickly returns approximate storage usage statistics. Can be called before authorization */
export type getStorageStatisticsFast = {|
  +_: 'getStorageStatisticsFast',
|}

/** Returns database statistics */
export type getDatabaseStatistics = {|
  +_: 'getDatabaseStatistics',
|}

/**
 * Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics.
 * Secret thumbnails can't be deleted
 */
export type optimizeStorage = {|
  +_: 'optimizeStorage',
  /** Limit on the total size of files after deletion. Pass -1 to use the default limit */
  +size?: number,
  /**
   * Limit on the time that has passed since the last time a file was accessed (or creation
   * time for some filesystems). Pass -1 to use the default limit
   */
  +ttl?: number,
  /** Limit on the total count of files after deletion. Pass -1 to use the default limit */
  +count?: number,
  /**
   * The amount of time after the creation of a file during which it can't be deleted,
   * in seconds. Pass -1 to use the default value
   */
  +immunity_delay?: number,
  /**
   * If not empty, only files with the given type(s) are considered. By default, all types
   * except thumbnails, profile photos, stickers and wallpapers are deleted
   */
  +file_types?: $ReadOnlyArray<FileType$Input>,
  /**
   * If not empty, only files from the given chats are considered. Use 0 as chat identifier
   * to delete files not belonging to any chat (e.g., profile photos)
   */
  +chat_ids?: $ReadOnlyArray<number>,
  /**
   * If not empty, files from the given chats are excluded. Use 0 as chat identifier to
   * exclude all files not belonging to any chat (e.g., profile photos)
   */
  +exclude_chat_ids?: $ReadOnlyArray<number>,
  /** Same as in getStorageStatistics. Affects only returned statistics */
  +chat_limit?: number,
|}

/**
 * Sets the current network type. Can be called before authorization. Calling this method
 * forces all network connections to reopen, mitigating the delay in switching between
 * different networks, so it should be called whenever the network is changed, even
 * if the network type remains the same. Network type is used to check whether the library
 * can use the network at all and also for collecting detailed network data usage statistics
 */
export type setNetworkType = {|
  +_: 'setNetworkType',
  /** The new network type. By default, networkTypeOther */
  +type?: NetworkType$Input,
|}

/** Returns network data usage statistics. Can be called before authorization */
export type getNetworkStatistics = {|
  +_: 'getNetworkStatistics',
  /** If true, returns only data for the current library launch */
  +only_current?: boolean,
|}

/** Adds the specified data to data usage statistics. Can be called before authorization */
export type addNetworkStatistics = {|
  +_: 'addNetworkStatistics',
  /** The network statistics entry with the data to be added to statistics */
  +entry?: NetworkStatisticsEntry$Input,
|}

/** Resets all network data usage statistics to zero. Can be called before authorization */
export type resetNetworkStatistics = {|
  +_: 'resetNetworkStatistics',
|}

/** Returns auto-download settings presets for the currently logged in user */
export type getAutoDownloadSettingsPresets = {|
  +_: 'getAutoDownloadSettingsPresets',
|}

/** Sets auto-download settings */
export type setAutoDownloadSettings = {|
  +_: 'setAutoDownloadSettings',
  /** New user auto-download settings */
  +settings?: autoDownloadSettings$Input,
  /** Type of the network for which the new settings are applied */
  +type?: NetworkType$Input,
|}

/** Returns one of the available Telegram Passport elements */
export type getPassportElement = {|
  +_: 'getPassportElement',
  /** Telegram Passport element type */
  +type?: PassportElementType$Input,
  /** Password of the current user */
  +password?: string,
|}

/** Returns all available Telegram Passport elements */
export type getAllPassportElements = {|
  +_: 'getAllPassportElements',
  /** Password of the current user */
  +password?: string,
|}

/**
 * Adds an element to the user's Telegram Passport. May return an error with a message
 * "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number
 * or the chosen email address must be verified first
 */
export type setPassportElement = {|
  +_: 'setPassportElement',
  /** Input Telegram Passport element */
  +element?: InputPassportElement$Input,
  /** Password of the current user */
  +password?: string,
|}

/** Deletes a Telegram Passport element */
export type deletePassportElement = {|
  +_: 'deletePassportElement',
  /** Element type */
  +type?: PassportElementType$Input,
|}

/**
 * Informs the user that some of the elements in their Telegram Passport contain errors;
 * for bots only. The user will not be able to resend the elements, until the errors
 * are fixed
 */
export type setPassportElementErrors = {|
  +_: 'setPassportElementErrors',
  /** User identifier */
  +user_id?: number,
  /** The errors */
  +errors?: $ReadOnlyArray<inputPassportElementError$Input>,
|}

/**
 * Returns an IETF language tag of the language preferred in the country, which should
 * be used to fill native fields in Telegram Passport personal details. Returns a 404
 * error if unknown
 */
export type getPreferredCountryLanguage = {|
  +_: 'getPreferredCountryLanguage',
  /** A two-letter ISO 3166-1 alpha-2 country code */
  +country_code?: string,
|}

/** Sends a code to verify a phone number to be added to a user's Telegram Passport */
export type sendPhoneNumberVerificationCode = {|
  +_: 'sendPhoneNumberVerificationCode',
  /** The phone number of the user, in international format */
  +phone_number?: string,
  /** Settings for the authentication of the user's phone number */
  +settings?: phoneNumberAuthenticationSettings$Input,
|}

/** Re-sends the code to verify a phone number to be added to a user's Telegram Passport */
export type resendPhoneNumberVerificationCode = {|
  +_: 'resendPhoneNumberVerificationCode',
|}

/** Checks the phone number verification code for Telegram Passport */
export type checkPhoneNumberVerificationCode = {|
  +_: 'checkPhoneNumberVerificationCode',
  /** Verification code */
  +code?: string,
|}

/** Sends a code to verify an email address to be added to a user's Telegram Passport */
export type sendEmailAddressVerificationCode = {|
  +_: 'sendEmailAddressVerificationCode',
  /** Email address */
  +email_address?: string,
|}

/** Re-sends the code to verify an email address to be added to a user's Telegram Passport */
export type resendEmailAddressVerificationCode = {|
  +_: 'resendEmailAddressVerificationCode',
|}

/** Checks the email address verification code for Telegram Passport */
export type checkEmailAddressVerificationCode = {|
  +_: 'checkEmailAddressVerificationCode',
  /** Verification code */
  +code?: string,
|}

/** Returns a Telegram Passport authorization form for sharing data with a service */
export type getPassportAuthorizationForm = {|
  +_: 'getPassportAuthorizationForm',
  /** User identifier of the service's bot */
  +bot_user_id?: number,
  /** Telegram Passport element types requested by the service */
  +scope?: string,
  /** Service's public_key */
  +public_key?: string,
  /** Authorization form nonce provided by the service */
  +nonce?: string,
|}

/**
 * Returns already available Telegram Passport elements suitable for completing a Telegram
 * Passport authorization form. Result can be received only once for each authorization
 * form
 */
export type getPassportAuthorizationFormAvailableElements = {|
  +_: 'getPassportAuthorizationFormAvailableElements',
  /** Authorization form identifier */
  +autorization_form_id?: number,
  /** Password of the current user */
  +password?: string,
|}

/**
 * Sends a Telegram Passport authorization form, effectively sharing data with the service.
 * This method must be called after getPassportAuthorizationFormAvailableElements if
 * some previously available elements need to be used
 */
export type sendPassportAuthorizationForm = {|
  +_: 'sendPassportAuthorizationForm',
  /** Authorization form identifier */
  +autorization_form_id?: number,
  /**
   * Types of Telegram Passport elements chosen by user to complete the authorization
   * form
   */
  +types?: $ReadOnlyArray<PassportElementType$Input>,
|}

/**
 * Sends phone number confirmation code. Should be called when user presses "https://t.me/confirmphone?phone=*******&hash=**********"
 * or "tg://confirmphone?phone=*******&hash=**********" link
 */
export type sendPhoneNumberConfirmationCode = {|
  +_: 'sendPhoneNumberConfirmationCode',
  /** Value of the "hash" parameter from the link */
  +hash?: string,
  /** Value of the "phone" parameter from the link */
  +phone_number?: string,
  /** Settings for the authentication of the user's phone number */
  +settings?: phoneNumberAuthenticationSettings$Input,
|}

/** Resends phone number confirmation code */
export type resendPhoneNumberConfirmationCode = {|
  +_: 'resendPhoneNumberConfirmationCode',
|}

/** Checks phone number confirmation code */
export type checkPhoneNumberConfirmationCode = {|
  +_: 'checkPhoneNumberConfirmationCode',
  /** The phone number confirmation code */
  +code?: string,
|}

/**
 * Informs the server about the number of pending bot updates if they haven't been processed
 * for a long time; for bots only
 */
export type setBotUpdatesStatus = {|
  +_: 'setBotUpdatesStatus',
  /** The number of pending updates */
  +pending_update_count?: number,
  /** The last error message */
  +error_message?: string,
|}

/** Uploads a PNG image with a sticker; for bots only; returns the uploaded file */
export type uploadStickerFile = {|
  +_: 'uploadStickerFile',
  /** Sticker file owner */
  +user_id?: number,
  /** PNG image with the sticker; must be up to 512 kB in size and fit in 512x512 square */
  +png_sticker?: InputFile$Input,
|}

/** Creates a new sticker set; for bots only. Returns the newly created sticker set */
export type createNewStickerSet = {|
  +_: 'createNewStickerSet',
  /** Sticker set owner */
  +user_id?: number,
  /** Sticker set title; 1-64 characters */
  +title?: string,
  /**
   * Sticker set name. Can contain only English letters, digits and underscores. Must
   * end with *"_by_<bot username>"* (*<bot_username>* is case insensitive); 1-64 characters
   */
  +name?: string,
  /** True, if stickers are masks */
  +is_masks?: boolean,
  /** List of stickers to be added to the set */
  +stickers?: $ReadOnlyArray<inputSticker$Input>,
|}

/** Adds a new sticker to a set; for bots only. Returns the sticker set */
export type addStickerToSet = {|
  +_: 'addStickerToSet',
  /** Sticker set owner */
  +user_id?: number,
  /** Sticker set name */
  +name?: string,
  /** Sticker to add to the set */
  +sticker?: inputSticker$Input,
|}

/**
 * Changes the position of a sticker in the set to which it belongs; for bots only.
 * The sticker set must have been created by the bot
 */
export type setStickerPositionInSet = {|
  +_: 'setStickerPositionInSet',
  /** Sticker */
  +sticker?: InputFile$Input,
  /** New position of the sticker in the set, zero-based */
  +position?: number,
|}

/**
 * Removes a sticker from the set to which it belongs; for bots only. The sticker set
 * must have been created by the bot
 */
export type removeStickerFromSet = {|
  +_: 'removeStickerFromSet',
  /** Sticker */
  +sticker?: InputFile$Input,
|}

/**
 * Returns information about a file with a map thumbnail in PNG format. Only map thumbnail
 * files with size less than 1MB can be downloaded
 */
export type getMapThumbnailFile = {|
  +_: 'getMapThumbnailFile',
  /** Location of the map center */
  +location?: location$Input,
  /** Map zoom level; 13-20 */
  +zoom?: number,
  /** Map width in pixels before applying scale; 16-1024 */
  +width?: number,
  /** Map height in pixels before applying scale; 16-1024 */
  +height?: number,
  /** Map scale; 1-3 */
  +scale?: number,
  /** Identifier of a chat, in which the thumbnail will be shown. Use 0 if unknown */
  +chat_id?: number,
|}

/** Accepts Telegram terms of services */
export type acceptTermsOfService = {|
  +_: 'acceptTermsOfService',
  /** Terms of service identifier */
  +terms_of_service_id?: string,
|}

/** Sends a custom request; for bots only */
export type sendCustomRequest = {|
  +_: 'sendCustomRequest',
  /** The method name */
  +method?: string,
  /** JSON-serialized method parameters */
  +parameters?: string,
|}

/** Answers a custom query; for bots only */
export type answerCustomQuery = {|
  +_: 'answerCustomQuery',
  /** Identifier of a custom query */
  +custom_query_id?: number | string,
  /** JSON-serialized answer to the query */
  +data?: string,
|}

/**
 * Succeeds after a specified amount of time has passed. Can be called before authorization.
 * Can be called before initialization
 */
export type setAlarm = {|
  +_: 'setAlarm',
  /** Number of seconds before the function returns */
  +seconds?: number,
|}

/**
 * Uses current user IP to found their country. Returns two-letter ISO 3166-1 alpha-2
 * country code. Can be called before authorization
 */
export type getCountryCode = {|
  +_: 'getCountryCode',
|}

/**
 * Returns the default text for invitation messages to be used as a placeholder when
 * the current user invites friends to Telegram
 */
export type getInviteText = {|
  +_: 'getInviteText',
|}

/**
 * Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature"
 * or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links.
 * Can be called before authorization
 */
export type getDeepLinkInfo = {|
  +_: 'getDeepLinkInfo',
  /** The link */
  +link?: string,
|}

/** Returns application config, provided by the server. Can be called before authorization */
export type getApplicationConfig = {|
  +_: 'getApplicationConfig',
|}

/** Saves application log event on the server. Can be called before authorization */
export type saveApplicationLogEvent = {|
  +_: 'saveApplicationLogEvent',
  /** Event type */
  +type?: string,
  /** Optional chat identifier, associated with the event */
  +chat_id?: number,
  /** The log event data */
  +data?: JsonValue$Input,
|}

/** Adds a proxy server for network requests. Can be called before authorization */
export type addProxy = {|
  +_: 'addProxy',
  /** Proxy server IP address */
  +server?: string,
  /** Proxy server port */
  +port?: number,
  /** True, if the proxy should be enabled */
  +enable?: boolean,
  /** Proxy type */
  +type?: ProxyType$Input,
|}

/** Edits an existing proxy server for network requests. Can be called before authorization */
export type editProxy = {|
  +_: 'editProxy',
  /** Proxy identifier */
  +proxy_id?: number,
  /** Proxy server IP address */
  +server?: string,
  /** Proxy server port */
  +port?: number,
  /** True, if the proxy should be enabled */
  +enable?: boolean,
  /** Proxy type */
  +type?: ProxyType$Input,
|}

/** Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization */
export type enableProxy = {|
  +_: 'enableProxy',
  /** Proxy identifier */
  +proxy_id?: number,
|}

/** Disables the currently enabled proxy. Can be called before authorization */
export type disableProxy = {|
  +_: 'disableProxy',
|}

/** Removes a proxy server. Can be called before authorization */
export type removeProxy = {|
  +_: 'removeProxy',
  /** Proxy identifier */
  +proxy_id?: number,
|}

/** Returns list of proxies that are currently set up. Can be called before authorization */
export type getProxies = {|
  +_: 'getProxies',
|}

/**
 * Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5
 * and MTProto proxies. Can be called before authorization
 */
export type getProxyLink = {|
  +_: 'getProxyLink',
  /** Proxy identifier */
  +proxy_id?: number,
|}

/**
 * Computes time needed to receive a response from a Telegram server through a proxy.
 * Can be called before authorization
 */
export type pingProxy = {|
  +_: 'pingProxy',
  /** Proxy identifier. Use 0 to ping a Telegram server without a proxy */
  +proxy_id?: number,
|}

/**
 * Sets new log stream for internal logging of TDLib. This is an offline method. Can
 * be called before authorization. Can be called synchronously
 */
export type setLogStream = {|
  +_: 'setLogStream',
  /** New log stream */
  +log_stream?: LogStream$Input,
|}

/**
 * Returns information about currently used log stream for internal logging of TDLib.
 * This is an offline method. Can be called before authorization. Can be called synchronously
 */
export type getLogStream = {|
  +_: 'getLogStream',
|}

/**
 * Sets the verbosity level of the internal logging of TDLib. This is an offline method.
 * Can be called before authorization. Can be called synchronously
 */
export type setLogVerbosityLevel = {|
  +_: 'setLogVerbosityLevel',
  /**
   * New value of the verbosity level for logging. Value 0 corresponds to fatal errors,
   * value 1 corresponds to errors, value 2 corresponds to warnings and debug warnings,
   * value 3 corresponds to informational, value 4 corresponds to debug, value 5 corresponds
   * to verbose debug, value greater than 5 and up to 1023 can be used to enable even
   * more logging
   */
  +new_verbosity_level?: number,
|}

/**
 * Returns current verbosity level of the internal logging of TDLib. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 */
export type getLogVerbosityLevel = {|
  +_: 'getLogVerbosityLevel',
|}

/**
 * Returns list of available TDLib internal log tags, for example, ["actor", "binlog",
 * "connections", "notifications", "proxy"]. This is an offline method. Can be called
 * before authorization. Can be called synchronously
 */
export type getLogTags = {|
  +_: 'getLogTags',
|}

/**
 * Sets the verbosity level for a specified TDLib internal log tag. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 */
export type setLogTagVerbosityLevel = {|
  +_: 'setLogTagVerbosityLevel',
  /** Logging tag to change verbosity level */
  +tag?: string,
  /** New verbosity level; 1-1024 */
  +new_verbosity_level?: number,
|}

/**
 * Returns current verbosity level for a specified TDLib internal log tag. This is an
 * offline method. Can be called before authorization. Can be called synchronously
 */
export type getLogTagVerbosityLevel = {|
  +_: 'getLogTagVerbosityLevel',
  /** Logging tag to change verbosity level */
  +tag?: string,
|}

/**
 * Adds a message to TDLib internal log. This is an offline method. Can be called before
 * authorization. Can be called synchronously
 */
export type addLogMessage = {|
  +_: 'addLogMessage',
  /** The minimum verbosity level needed for the message to be logged, 0-1023 */
  +verbosity_level?: number,
  /** Text of a message to log */
  +text?: string,
|}

/** Does nothing; for testing only. This is an offline method. Can be called before authorization */
export type testCallEmpty = {|
  +_: 'testCallEmpty',
|}

/**
 * Returns the received string; for testing only. This is an offline method. Can be
 * called before authorization
 */
export type testCallString = {|
  +_: 'testCallString',
  /** String to return */
  +x?: string,
|}

/**
 * Returns the received bytes; for testing only. This is an offline method. Can be called
 * before authorization
 */
export type testCallBytes = {|
  +_: 'testCallBytes',
  /** Bytes to return */
  +x?: string,
|}

/**
 * Returns the received vector of numbers; for testing only. This is an offline method.
 * Can be called before authorization
 */
export type testCallVectorInt = {|
  +_: 'testCallVectorInt',
  /** Vector of numbers to return */
  +x?: $ReadOnlyArray<number>,
|}

/**
 * Returns the received vector of objects containing a number; for testing only. This
 * is an offline method. Can be called before authorization
 */
export type testCallVectorIntObject = {|
  +_: 'testCallVectorIntObject',
  /** Vector of objects to return */
  +x?: $ReadOnlyArray<testInt$Input>,
|}

/**
 * Returns the received vector of strings; for testing only. This is an offline method.
 * Can be called before authorization
 */
export type testCallVectorString = {|
  +_: 'testCallVectorString',
  /** Vector of strings to return */
  +x?: $ReadOnlyArray<string>,
|}

/**
 * Returns the received vector of objects containing a string; for testing only. This
 * is an offline method. Can be called before authorization
 */
export type testCallVectorStringObject = {|
  +_: 'testCallVectorStringObject',
  /** Vector of objects to return */
  +x?: $ReadOnlyArray<testString$Input>,
|}

/**
 * Returns the squared received number; for testing only. This is an offline method.
 * Can be called before authorization
 */
export type testSquareInt = {|
  +_: 'testSquareInt',
  /** Number to square */
  +x?: number,
|}

/**
 * Sends a simple network request to the Telegram servers; for testing only. Can be
 * called before authorization
 */
export type testNetwork = {|
  +_: 'testNetwork',
|}

/**
 * Sends a simple network request to the Telegram servers via proxy; for testing only.
 * Can be called before authorization
 */
export type testProxy = {|
  +_: 'testProxy',
  /** Proxy server IP address */
  +server?: string,
  /** Proxy server port */
  +port?: number,
  /** Proxy type */
  +type?: ProxyType$Input,
  /** Identifier of a datacenter, with which to test connection */
  +dc_id?: number,
  /** The maximum overall timeout for the request */
  +timeout?: number,
|}

/** Forces an updates.getDifference call to the Telegram servers; for testing only */
export type testGetDifference = {|
  +_: 'testGetDifference',
|}

/**
 * Does nothing and ensures that the Update object is used; for testing only. This is
 * an offline method. Can be called before authorization
 */
export type testUseUpdate = {|
  +_: 'testUseUpdate',
|}

/**
 * Returns the specified error and ensures that the Error object is used; for testing
 * only. This is an offline method. Can be called before authorization. Can be called
 * synchronously
 */
export type testReturnError = {|
  +_: 'testReturnError',
  /** The error to be returned */
  +error?: error$Input,
|}

// ----

export type Error =
  | error

export type Error$Input =
  | error$Input

export type Ok =
  | ok

export type Ok$Input =
  | ok$Input

export type TdlibParameters =
  | tdlibParameters

export type TdlibParameters$Input =
  | tdlibParameters$Input

/**
 * Provides information about the method by which an authentication code is delivered
 * to the user
 */
export type AuthenticationCodeType =
  | authenticationCodeTypeTelegramMessage
  | authenticationCodeTypeSms
  | authenticationCodeTypeCall
  | authenticationCodeTypeFlashCall

/**
 * Provides information about the method by which an authentication code is delivered
 * to the user
 */
export type AuthenticationCodeType$Input =
  | authenticationCodeTypeTelegramMessage$Input
  | authenticationCodeTypeSms$Input
  | authenticationCodeTypeCall$Input
  | authenticationCodeTypeFlashCall$Input

export type AuthenticationCodeInfo =
  | authenticationCodeInfo

export type AuthenticationCodeInfo$Input =
  | authenticationCodeInfo$Input

export type EmailAddressAuthenticationCodeInfo =
  | emailAddressAuthenticationCodeInfo

export type EmailAddressAuthenticationCodeInfo$Input =
  | emailAddressAuthenticationCodeInfo$Input

export type TextEntity =
  | textEntity

export type TextEntity$Input =
  | textEntity$Input

export type TextEntities =
  | textEntities

export type TextEntities$Input =
  | textEntities$Input

export type FormattedText =
  | formattedText

export type FormattedText$Input =
  | formattedText$Input

export type TermsOfService =
  | termsOfService

export type TermsOfService$Input =
  | termsOfService$Input

/** Represents the current authorization state of the client */
export type AuthorizationState =
  | authorizationStateWaitTdlibParameters
  | authorizationStateWaitEncryptionKey
  | authorizationStateWaitPhoneNumber
  | authorizationStateWaitCode
  | authorizationStateWaitOtherDeviceConfirmation
  | authorizationStateWaitRegistration
  | authorizationStateWaitPassword
  | authorizationStateReady
  | authorizationStateLoggingOut
  | authorizationStateClosing
  | authorizationStateClosed

/** Represents the current authorization state of the client */
export type AuthorizationState$Input =
  | authorizationStateWaitTdlibParameters$Input
  | authorizationStateWaitEncryptionKey$Input
  | authorizationStateWaitPhoneNumber$Input
  | authorizationStateWaitCode$Input
  | authorizationStateWaitOtherDeviceConfirmation$Input
  | authorizationStateWaitRegistration$Input
  | authorizationStateWaitPassword$Input
  | authorizationStateReady$Input
  | authorizationStateLoggingOut$Input
  | authorizationStateClosing$Input
  | authorizationStateClosed$Input

export type PasswordState =
  | passwordState

export type PasswordState$Input =
  | passwordState$Input

export type RecoveryEmailAddress =
  | recoveryEmailAddress

export type RecoveryEmailAddress$Input =
  | recoveryEmailAddress$Input

export type TemporaryPasswordState =
  | temporaryPasswordState

export type TemporaryPasswordState$Input =
  | temporaryPasswordState$Input

export type LocalFile =
  | localFile

export type LocalFile$Input =
  | localFile$Input

export type RemoteFile =
  | remoteFile

export type RemoteFile$Input =
  | remoteFile$Input

export type File =
  | file

export type File$Input =
  | file$Input

/** Points to a file */
export type InputFile =
  | inputFileId
  | inputFileRemote
  | inputFileLocal
  | inputFileGenerated

/** Points to a file */
export type InputFile$Input =
  | inputFileId$Input
  | inputFileRemote$Input
  | inputFileLocal$Input
  | inputFileGenerated$Input

export type PhotoSize =
  | photoSize

export type PhotoSize$Input =
  | photoSize$Input

export type Minithumbnail =
  | minithumbnail

export type Minithumbnail$Input =
  | minithumbnail$Input

/** Part of the face, relative to which a mask should be placed */
export type MaskPoint =
  | maskPointForehead
  | maskPointEyes
  | maskPointMouth
  | maskPointChin

/** Part of the face, relative to which a mask should be placed */
export type MaskPoint$Input =
  | maskPointForehead$Input
  | maskPointEyes$Input
  | maskPointMouth$Input
  | maskPointChin$Input

export type MaskPosition =
  | maskPosition

export type MaskPosition$Input =
  | maskPosition$Input

export type PollOption =
  | pollOption

export type PollOption$Input =
  | pollOption$Input

/** Describes the type of a poll */
export type PollType =
  | pollTypeRegular
  | pollTypeQuiz

/** Describes the type of a poll */
export type PollType$Input =
  | pollTypeRegular$Input
  | pollTypeQuiz$Input

export type Animation =
  | animation

export type Animation$Input =
  | animation$Input

export type Audio =
  | audio

export type Audio$Input =
  | audio$Input

export type Document =
  | document

export type Document$Input =
  | document$Input

export type Photo =
  | photo

export type Photo$Input =
  | photo$Input

export type Sticker =
  | sticker

export type Sticker$Input =
  | sticker$Input

export type Video =
  | video

export type Video$Input =
  | video$Input

export type VideoNote =
  | videoNote

export type VideoNote$Input =
  | videoNote$Input

export type VoiceNote =
  | voiceNote

export type VoiceNote$Input =
  | voiceNote$Input

export type Contact =
  | contact

export type Contact$Input =
  | contact$Input

export type Location =
  | location

export type Location$Input =
  | location$Input

export type Venue =
  | venue

export type Venue$Input =
  | venue$Input

export type Game =
  | game

export type Game$Input =
  | game$Input

export type Poll =
  | poll

export type Poll$Input =
  | poll$Input

export type ProfilePhoto =
  | profilePhoto

export type ProfilePhoto$Input =
  | profilePhoto$Input

export type ChatPhoto =
  | chatPhoto

export type ChatPhoto$Input =
  | chatPhoto$Input

/**
 * Represents the type of a user. The following types are possible: regular users, deleted
 * users and bots
 */
export type UserType =
  | userTypeRegular
  | userTypeDeleted
  | userTypeBot
  | userTypeUnknown

/**
 * Represents the type of a user. The following types are possible: regular users, deleted
 * users and bots
 */
export type UserType$Input =
  | userTypeRegular$Input
  | userTypeDeleted$Input
  | userTypeBot$Input
  | userTypeUnknown$Input

export type BotCommand =
  | botCommand

export type BotCommand$Input =
  | botCommand$Input

export type BotInfo =
  | botInfo

export type BotInfo$Input =
  | botInfo$Input

export type ChatLocation =
  | chatLocation

export type ChatLocation$Input =
  | chatLocation$Input

export type User =
  | user

export type User$Input =
  | user$Input

export type UserFullInfo =
  | userFullInfo

export type UserFullInfo$Input =
  | userFullInfo$Input

export type UserProfilePhoto =
  | userProfilePhoto

export type UserProfilePhoto$Input =
  | userProfilePhoto$Input

export type UserProfilePhotos =
  | userProfilePhotos

export type UserProfilePhotos$Input =
  | userProfilePhotos$Input

export type Users =
  | users

export type Users$Input =
  | users$Input

export type ChatAdministrator =
  | chatAdministrator

export type ChatAdministrator$Input =
  | chatAdministrator$Input

export type ChatAdministrators =
  | chatAdministrators

export type ChatAdministrators$Input =
  | chatAdministrators$Input

export type ChatPermissions =
  | chatPermissions

export type ChatPermissions$Input =
  | chatPermissions$Input

/** Provides information about the status of a member in a chat */
export type ChatMemberStatus =
  | chatMemberStatusCreator
  | chatMemberStatusAdministrator
  | chatMemberStatusMember
  | chatMemberStatusRestricted
  | chatMemberStatusLeft
  | chatMemberStatusBanned

/** Provides information about the status of a member in a chat */
export type ChatMemberStatus$Input =
  | chatMemberStatusCreator$Input
  | chatMemberStatusAdministrator$Input
  | chatMemberStatusMember$Input
  | chatMemberStatusRestricted$Input
  | chatMemberStatusLeft$Input
  | chatMemberStatusBanned$Input

export type ChatMember =
  | chatMember

export type ChatMember$Input =
  | chatMember$Input

export type ChatMembers =
  | chatMembers

export type ChatMembers$Input =
  | chatMembers$Input

/** Specifies the kind of chat members to return in searchChatMembers */
export type ChatMembersFilter =
  | chatMembersFilterContacts
  | chatMembersFilterAdministrators
  | chatMembersFilterMembers
  | chatMembersFilterRestricted
  | chatMembersFilterBanned
  | chatMembersFilterBots

/** Specifies the kind of chat members to return in searchChatMembers */
export type ChatMembersFilter$Input =
  | chatMembersFilterContacts$Input
  | chatMembersFilterAdministrators$Input
  | chatMembersFilterMembers$Input
  | chatMembersFilterRestricted$Input
  | chatMembersFilterBanned$Input
  | chatMembersFilterBots$Input

/** Specifies the kind of chat members to return in getSupergroupMembers */
export type SupergroupMembersFilter =
  | supergroupMembersFilterRecent
  | supergroupMembersFilterContacts
  | supergroupMembersFilterAdministrators
  | supergroupMembersFilterSearch
  | supergroupMembersFilterRestricted
  | supergroupMembersFilterBanned
  | supergroupMembersFilterBots

/** Specifies the kind of chat members to return in getSupergroupMembers */
export type SupergroupMembersFilter$Input =
  | supergroupMembersFilterRecent$Input
  | supergroupMembersFilterContacts$Input
  | supergroupMembersFilterAdministrators$Input
  | supergroupMembersFilterSearch$Input
  | supergroupMembersFilterRestricted$Input
  | supergroupMembersFilterBanned$Input
  | supergroupMembersFilterBots$Input

export type BasicGroup =
  | basicGroup

export type BasicGroup$Input =
  | basicGroup$Input

export type BasicGroupFullInfo =
  | basicGroupFullInfo

export type BasicGroupFullInfo$Input =
  | basicGroupFullInfo$Input

export type Supergroup =
  | supergroup

export type Supergroup$Input =
  | supergroup$Input

export type SupergroupFullInfo =
  | supergroupFullInfo

export type SupergroupFullInfo$Input =
  | supergroupFullInfo$Input

/** Describes the current secret chat state */
export type SecretChatState =
  | secretChatStatePending
  | secretChatStateReady
  | secretChatStateClosed

/** Describes the current secret chat state */
export type SecretChatState$Input =
  | secretChatStatePending$Input
  | secretChatStateReady$Input
  | secretChatStateClosed$Input

export type SecretChat =
  | secretChat

export type SecretChat$Input =
  | secretChat$Input

/** Contains information about the origin of a forwarded message */
export type MessageForwardOrigin =
  | messageForwardOriginUser
  | messageForwardOriginHiddenUser
  | messageForwardOriginChannel

/** Contains information about the origin of a forwarded message */
export type MessageForwardOrigin$Input =
  | messageForwardOriginUser$Input
  | messageForwardOriginHiddenUser$Input
  | messageForwardOriginChannel$Input

export type MessageForwardInfo =
  | messageForwardInfo

export type MessageForwardInfo$Input =
  | messageForwardInfo$Input

/** Contains information about the sending state of the message */
export type MessageSendingState =
  | messageSendingStatePending
  | messageSendingStateFailed

/** Contains information about the sending state of the message */
export type MessageSendingState$Input =
  | messageSendingStatePending$Input
  | messageSendingStateFailed$Input

export type Message =
  | message

export type Message$Input =
  | message$Input

export type Messages =
  | messages

export type Messages$Input =
  | messages$Input

export type FoundMessages =
  | foundMessages

export type FoundMessages$Input =
  | foundMessages$Input

/** Describes the types of chats to which notification settings are applied */
export type NotificationSettingsScope =
  | notificationSettingsScopePrivateChats
  | notificationSettingsScopeGroupChats
  | notificationSettingsScopeChannelChats

/** Describes the types of chats to which notification settings are applied */
export type NotificationSettingsScope$Input =
  | notificationSettingsScopePrivateChats$Input
  | notificationSettingsScopeGroupChats$Input
  | notificationSettingsScopeChannelChats$Input

export type ChatNotificationSettings =
  | chatNotificationSettings

export type ChatNotificationSettings$Input =
  | chatNotificationSettings$Input

export type ScopeNotificationSettings =
  | scopeNotificationSettings

export type ScopeNotificationSettings$Input =
  | scopeNotificationSettings$Input

export type DraftMessage =
  | draftMessage

export type DraftMessage$Input =
  | draftMessage$Input

/** Describes the type of a chat */
export type ChatType =
  | chatTypePrivate
  | chatTypeBasicGroup
  | chatTypeSupergroup
  | chatTypeSecret

/** Describes the type of a chat */
export type ChatType$Input =
  | chatTypePrivate$Input
  | chatTypeBasicGroup$Input
  | chatTypeSupergroup$Input
  | chatTypeSecret$Input

/** Describes a list of chats */
export type ChatList =
  | chatListMain
  | chatListArchive

/** Describes a list of chats */
export type ChatList$Input =
  | chatListMain$Input
  | chatListArchive$Input

export type Chat =
  | chat

export type Chat$Input =
  | chat$Input

export type Chats =
  | chats

export type Chats$Input =
  | chats$Input

export type ChatNearby =
  | chatNearby

export type ChatNearby$Input =
  | chatNearby$Input

export type ChatsNearby =
  | chatsNearby

export type ChatsNearby$Input =
  | chatsNearby$Input

export type ChatInviteLink =
  | chatInviteLink

export type ChatInviteLink$Input =
  | chatInviteLink$Input

export type ChatInviteLinkInfo =
  | chatInviteLinkInfo

export type ChatInviteLinkInfo$Input =
  | chatInviteLinkInfo$Input

/** Describes a type of public chats */
export type PublicChatType =
  | publicChatTypeHasUsername
  | publicChatTypeIsLocationBased

/** Describes a type of public chats */
export type PublicChatType$Input =
  | publicChatTypeHasUsername$Input
  | publicChatTypeIsLocationBased$Input

/** Describes actions which should be possible to do through a chat action bar */
export type ChatActionBar =
  | chatActionBarReportSpam
  | chatActionBarReportUnrelatedLocation
  | chatActionBarReportAddBlock
  | chatActionBarAddContact
  | chatActionBarSharePhoneNumber

/** Describes actions which should be possible to do through a chat action bar */
export type ChatActionBar$Input =
  | chatActionBarReportSpam$Input
  | chatActionBarReportUnrelatedLocation$Input
  | chatActionBarReportAddBlock$Input
  | chatActionBarAddContact$Input
  | chatActionBarSharePhoneNumber$Input

/** Describes a keyboard button type */
export type KeyboardButtonType =
  | keyboardButtonTypeText
  | keyboardButtonTypeRequestPhoneNumber
  | keyboardButtonTypeRequestLocation
  | keyboardButtonTypeRequestPoll

/** Describes a keyboard button type */
export type KeyboardButtonType$Input =
  | keyboardButtonTypeText$Input
  | keyboardButtonTypeRequestPhoneNumber$Input
  | keyboardButtonTypeRequestLocation$Input
  | keyboardButtonTypeRequestPoll$Input

export type KeyboardButton =
  | keyboardButton

export type KeyboardButton$Input =
  | keyboardButton$Input

/** Describes the type of an inline keyboard button */
export type InlineKeyboardButtonType =
  | inlineKeyboardButtonTypeUrl
  | inlineKeyboardButtonTypeLoginUrl
  | inlineKeyboardButtonTypeCallback
  | inlineKeyboardButtonTypeCallbackGame
  | inlineKeyboardButtonTypeSwitchInline
  | inlineKeyboardButtonTypeBuy

/** Describes the type of an inline keyboard button */
export type InlineKeyboardButtonType$Input =
  | inlineKeyboardButtonTypeUrl$Input
  | inlineKeyboardButtonTypeLoginUrl$Input
  | inlineKeyboardButtonTypeCallback$Input
  | inlineKeyboardButtonTypeCallbackGame$Input
  | inlineKeyboardButtonTypeSwitchInline$Input
  | inlineKeyboardButtonTypeBuy$Input

export type InlineKeyboardButton =
  | inlineKeyboardButton

export type InlineKeyboardButton$Input =
  | inlineKeyboardButton$Input

/**
 * Contains a description of a custom keyboard and actions that can be done with it
 * to quickly reply to bots
 */
export type ReplyMarkup =
  | replyMarkupRemoveKeyboard
  | replyMarkupForceReply
  | replyMarkupShowKeyboard
  | replyMarkupInlineKeyboard

/**
 * Contains a description of a custom keyboard and actions that can be done with it
 * to quickly reply to bots
 */
export type ReplyMarkup$Input =
  | replyMarkupRemoveKeyboard$Input
  | replyMarkupForceReply$Input
  | replyMarkupShowKeyboard$Input
  | replyMarkupInlineKeyboard$Input

/** Contains information about an inline button of type inlineKeyboardButtonTypeLoginUrl */
export type LoginUrlInfo =
  | loginUrlInfoOpen
  | loginUrlInfoRequestConfirmation

/** Contains information about an inline button of type inlineKeyboardButtonTypeLoginUrl */
export type LoginUrlInfo$Input =
  | loginUrlInfoOpen$Input
  | loginUrlInfoRequestConfirmation$Input

/** Describes a text object inside an instant-view web page */
export type RichText =
  | richTextPlain
  | richTextBold
  | richTextItalic
  | richTextUnderline
  | richTextStrikethrough
  | richTextFixed
  | richTextUrl
  | richTextEmailAddress
  | richTextSubscript
  | richTextSuperscript
  | richTextMarked
  | richTextPhoneNumber
  | richTextIcon
  | richTextAnchor
  | richTexts

/** Describes a text object inside an instant-view web page */
export type RichText$Input =
  | richTextPlain$Input
  | richTextBold$Input
  | richTextItalic$Input
  | richTextUnderline$Input
  | richTextStrikethrough$Input
  | richTextFixed$Input
  | richTextUrl$Input
  | richTextEmailAddress$Input
  | richTextSubscript$Input
  | richTextSuperscript$Input
  | richTextMarked$Input
  | richTextPhoneNumber$Input
  | richTextIcon$Input
  | richTextAnchor$Input
  | richTexts$Input

export type PageBlockCaption =
  | pageBlockCaption

export type PageBlockCaption$Input =
  | pageBlockCaption$Input

export type PageBlockListItem =
  | pageBlockListItem

export type PageBlockListItem$Input =
  | pageBlockListItem$Input

/** Describes a horizontal alignment of a table cell content */
export type PageBlockHorizontalAlignment =
  | pageBlockHorizontalAlignmentLeft
  | pageBlockHorizontalAlignmentCenter
  | pageBlockHorizontalAlignmentRight

/** Describes a horizontal alignment of a table cell content */
export type PageBlockHorizontalAlignment$Input =
  | pageBlockHorizontalAlignmentLeft$Input
  | pageBlockHorizontalAlignmentCenter$Input
  | pageBlockHorizontalAlignmentRight$Input

/** Describes a Vertical alignment of a table cell content */
export type PageBlockVerticalAlignment =
  | pageBlockVerticalAlignmentTop
  | pageBlockVerticalAlignmentMiddle
  | pageBlockVerticalAlignmentBottom

/** Describes a Vertical alignment of a table cell content */
export type PageBlockVerticalAlignment$Input =
  | pageBlockVerticalAlignmentTop$Input
  | pageBlockVerticalAlignmentMiddle$Input
  | pageBlockVerticalAlignmentBottom$Input

export type PageBlockTableCell =
  | pageBlockTableCell

export type PageBlockTableCell$Input =
  | pageBlockTableCell$Input

export type PageBlockRelatedArticle =
  | pageBlockRelatedArticle

export type PageBlockRelatedArticle$Input =
  | pageBlockRelatedArticle$Input

/** Describes a block of an instant view web page */
export type PageBlock =
  | pageBlockTitle
  | pageBlockSubtitle
  | pageBlockAuthorDate
  | pageBlockHeader
  | pageBlockSubheader
  | pageBlockKicker
  | pageBlockParagraph
  | pageBlockPreformatted
  | pageBlockFooter
  | pageBlockDivider
  | pageBlockAnchor
  | pageBlockList
  | pageBlockBlockQuote
  | pageBlockPullQuote
  | pageBlockAnimation
  | pageBlockAudio
  | pageBlockPhoto
  | pageBlockVideo
  | pageBlockVoiceNote
  | pageBlockCover
  | pageBlockEmbedded
  | pageBlockEmbeddedPost
  | pageBlockCollage
  | pageBlockSlideshow
  | pageBlockChatLink
  | pageBlockTable
  | pageBlockDetails
  | pageBlockRelatedArticles
  | pageBlockMap

/** Describes a block of an instant view web page */
export type PageBlock$Input =
  | pageBlockTitle$Input
  | pageBlockSubtitle$Input
  | pageBlockAuthorDate$Input
  | pageBlockHeader$Input
  | pageBlockSubheader$Input
  | pageBlockKicker$Input
  | pageBlockParagraph$Input
  | pageBlockPreformatted$Input
  | pageBlockFooter$Input
  | pageBlockDivider$Input
  | pageBlockAnchor$Input
  | pageBlockList$Input
  | pageBlockBlockQuote$Input
  | pageBlockPullQuote$Input
  | pageBlockAnimation$Input
  | pageBlockAudio$Input
  | pageBlockPhoto$Input
  | pageBlockVideo$Input
  | pageBlockVoiceNote$Input
  | pageBlockCover$Input
  | pageBlockEmbedded$Input
  | pageBlockEmbeddedPost$Input
  | pageBlockCollage$Input
  | pageBlockSlideshow$Input
  | pageBlockChatLink$Input
  | pageBlockTable$Input
  | pageBlockDetails$Input
  | pageBlockRelatedArticles$Input
  | pageBlockMap$Input

export type WebPageInstantView =
  | webPageInstantView

export type WebPageInstantView$Input =
  | webPageInstantView$Input

export type WebPage =
  | webPage

export type WebPage$Input =
  | webPage$Input

export type Address =
  | address

export type Address$Input =
  | address$Input

export type LabeledPricePart =
  | labeledPricePart

export type LabeledPricePart$Input =
  | labeledPricePart$Input

export type Invoice =
  | invoice

export type Invoice$Input =
  | invoice$Input

export type OrderInfo =
  | orderInfo

export type OrderInfo$Input =
  | orderInfo$Input

export type ShippingOption =
  | shippingOption

export type ShippingOption$Input =
  | shippingOption$Input

export type SavedCredentials =
  | savedCredentials

export type SavedCredentials$Input =
  | savedCredentials$Input

/** Contains information about the payment method chosen by the user */
export type InputCredentials =
  | inputCredentialsSaved
  | inputCredentialsNew
  | inputCredentialsAndroidPay
  | inputCredentialsApplePay

/** Contains information about the payment method chosen by the user */
export type InputCredentials$Input =
  | inputCredentialsSaved$Input
  | inputCredentialsNew$Input
  | inputCredentialsAndroidPay$Input
  | inputCredentialsApplePay$Input

export type PaymentsProviderStripe =
  | paymentsProviderStripe

export type PaymentsProviderStripe$Input =
  | paymentsProviderStripe$Input

export type PaymentForm =
  | paymentForm

export type PaymentForm$Input =
  | paymentForm$Input

export type ValidatedOrderInfo =
  | validatedOrderInfo

export type ValidatedOrderInfo$Input =
  | validatedOrderInfo$Input

export type PaymentResult =
  | paymentResult

export type PaymentResult$Input =
  | paymentResult$Input

export type PaymentReceipt =
  | paymentReceipt

export type PaymentReceipt$Input =
  | paymentReceipt$Input

export type DatedFile =
  | datedFile

export type DatedFile$Input =
  | datedFile$Input

/** Contains the type of a Telegram Passport element */
export type PassportElementType =
  | passportElementTypePersonalDetails
  | passportElementTypePassport
  | passportElementTypeDriverLicense
  | passportElementTypeIdentityCard
  | passportElementTypeInternalPassport
  | passportElementTypeAddress
  | passportElementTypeUtilityBill
  | passportElementTypeBankStatement
  | passportElementTypeRentalAgreement
  | passportElementTypePassportRegistration
  | passportElementTypeTemporaryRegistration
  | passportElementTypePhoneNumber
  | passportElementTypeEmailAddress

/** Contains the type of a Telegram Passport element */
export type PassportElementType$Input =
  | passportElementTypePersonalDetails$Input
  | passportElementTypePassport$Input
  | passportElementTypeDriverLicense$Input
  | passportElementTypeIdentityCard$Input
  | passportElementTypeInternalPassport$Input
  | passportElementTypeAddress$Input
  | passportElementTypeUtilityBill$Input
  | passportElementTypeBankStatement$Input
  | passportElementTypeRentalAgreement$Input
  | passportElementTypePassportRegistration$Input
  | passportElementTypeTemporaryRegistration$Input
  | passportElementTypePhoneNumber$Input
  | passportElementTypeEmailAddress$Input

export type Date =
  | date

export type Date$Input =
  | date$Input

export type PersonalDetails =
  | personalDetails

export type PersonalDetails$Input =
  | personalDetails$Input

export type IdentityDocument =
  | identityDocument

export type IdentityDocument$Input =
  | identityDocument$Input

export type InputIdentityDocument =
  | inputIdentityDocument

export type InputIdentityDocument$Input =
  | inputIdentityDocument$Input

export type PersonalDocument =
  | personalDocument

export type PersonalDocument$Input =
  | personalDocument$Input

export type InputPersonalDocument =
  | inputPersonalDocument

export type InputPersonalDocument$Input =
  | inputPersonalDocument$Input

/** Contains information about a Telegram Passport element */
export type PassportElement =
  | passportElementPersonalDetails
  | passportElementPassport
  | passportElementDriverLicense
  | passportElementIdentityCard
  | passportElementInternalPassport
  | passportElementAddress
  | passportElementUtilityBill
  | passportElementBankStatement
  | passportElementRentalAgreement
  | passportElementPassportRegistration
  | passportElementTemporaryRegistration
  | passportElementPhoneNumber
  | passportElementEmailAddress

/** Contains information about a Telegram Passport element */
export type PassportElement$Input =
  | passportElementPersonalDetails$Input
  | passportElementPassport$Input
  | passportElementDriverLicense$Input
  | passportElementIdentityCard$Input
  | passportElementInternalPassport$Input
  | passportElementAddress$Input
  | passportElementUtilityBill$Input
  | passportElementBankStatement$Input
  | passportElementRentalAgreement$Input
  | passportElementPassportRegistration$Input
  | passportElementTemporaryRegistration$Input
  | passportElementPhoneNumber$Input
  | passportElementEmailAddress$Input

/** Contains information about a Telegram Passport element to be saved */
export type InputPassportElement =
  | inputPassportElementPersonalDetails
  | inputPassportElementPassport
  | inputPassportElementDriverLicense
  | inputPassportElementIdentityCard
  | inputPassportElementInternalPassport
  | inputPassportElementAddress
  | inputPassportElementUtilityBill
  | inputPassportElementBankStatement
  | inputPassportElementRentalAgreement
  | inputPassportElementPassportRegistration
  | inputPassportElementTemporaryRegistration
  | inputPassportElementPhoneNumber
  | inputPassportElementEmailAddress

/** Contains information about a Telegram Passport element to be saved */
export type InputPassportElement$Input =
  | inputPassportElementPersonalDetails$Input
  | inputPassportElementPassport$Input
  | inputPassportElementDriverLicense$Input
  | inputPassportElementIdentityCard$Input
  | inputPassportElementInternalPassport$Input
  | inputPassportElementAddress$Input
  | inputPassportElementUtilityBill$Input
  | inputPassportElementBankStatement$Input
  | inputPassportElementRentalAgreement$Input
  | inputPassportElementPassportRegistration$Input
  | inputPassportElementTemporaryRegistration$Input
  | inputPassportElementPhoneNumber$Input
  | inputPassportElementEmailAddress$Input

export type PassportElements =
  | passportElements

export type PassportElements$Input =
  | passportElements$Input

/** Contains the description of an error in a Telegram Passport element */
export type PassportElementErrorSource =
  | passportElementErrorSourceUnspecified
  | passportElementErrorSourceDataField
  | passportElementErrorSourceFrontSide
  | passportElementErrorSourceReverseSide
  | passportElementErrorSourceSelfie
  | passportElementErrorSourceTranslationFile
  | passportElementErrorSourceTranslationFiles
  | passportElementErrorSourceFile
  | passportElementErrorSourceFiles

/** Contains the description of an error in a Telegram Passport element */
export type PassportElementErrorSource$Input =
  | passportElementErrorSourceUnspecified$Input
  | passportElementErrorSourceDataField$Input
  | passportElementErrorSourceFrontSide$Input
  | passportElementErrorSourceReverseSide$Input
  | passportElementErrorSourceSelfie$Input
  | passportElementErrorSourceTranslationFile$Input
  | passportElementErrorSourceTranslationFiles$Input
  | passportElementErrorSourceFile$Input
  | passportElementErrorSourceFiles$Input

export type PassportElementError =
  | passportElementError

export type PassportElementError$Input =
  | passportElementError$Input

export type PassportSuitableElement =
  | passportSuitableElement

export type PassportSuitableElement$Input =
  | passportSuitableElement$Input

export type PassportRequiredElement =
  | passportRequiredElement

export type PassportRequiredElement$Input =
  | passportRequiredElement$Input

export type PassportAuthorizationForm =
  | passportAuthorizationForm

export type PassportAuthorizationForm$Input =
  | passportAuthorizationForm$Input

export type PassportElementsWithErrors =
  | passportElementsWithErrors

export type PassportElementsWithErrors$Input =
  | passportElementsWithErrors$Input

export type EncryptedCredentials =
  | encryptedCredentials

export type EncryptedCredentials$Input =
  | encryptedCredentials$Input

export type EncryptedPassportElement =
  | encryptedPassportElement

export type EncryptedPassportElement$Input =
  | encryptedPassportElement$Input

/** Contains the description of an error in a Telegram Passport element; for bots only */
export type InputPassportElementErrorSource =
  | inputPassportElementErrorSourceUnspecified
  | inputPassportElementErrorSourceDataField
  | inputPassportElementErrorSourceFrontSide
  | inputPassportElementErrorSourceReverseSide
  | inputPassportElementErrorSourceSelfie
  | inputPassportElementErrorSourceTranslationFile
  | inputPassportElementErrorSourceTranslationFiles
  | inputPassportElementErrorSourceFile
  | inputPassportElementErrorSourceFiles

/** Contains the description of an error in a Telegram Passport element; for bots only */
export type InputPassportElementErrorSource$Input =
  | inputPassportElementErrorSourceUnspecified$Input
  | inputPassportElementErrorSourceDataField$Input
  | inputPassportElementErrorSourceFrontSide$Input
  | inputPassportElementErrorSourceReverseSide$Input
  | inputPassportElementErrorSourceSelfie$Input
  | inputPassportElementErrorSourceTranslationFile$Input
  | inputPassportElementErrorSourceTranslationFiles$Input
  | inputPassportElementErrorSourceFile$Input
  | inputPassportElementErrorSourceFiles$Input

export type InputPassportElementError =
  | inputPassportElementError

export type InputPassportElementError$Input =
  | inputPassportElementError$Input

/** Contains the content of a message */
export type MessageContent =
  | messageText
  | messageAnimation
  | messageAudio
  | messageDocument
  | messagePhoto
  | messageExpiredPhoto
  | messageSticker
  | messageVideo
  | messageExpiredVideo
  | messageVideoNote
  | messageVoiceNote
  | messageLocation
  | messageVenue
  | messageContact
  | messageGame
  | messagePoll
  | messageInvoice
  | messageCall
  | messageBasicGroupChatCreate
  | messageSupergroupChatCreate
  | messageChatChangeTitle
  | messageChatChangePhoto
  | messageChatDeletePhoto
  | messageChatAddMembers
  | messageChatJoinByLink
  | messageChatDeleteMember
  | messageChatUpgradeTo
  | messageChatUpgradeFrom
  | messagePinMessage
  | messageScreenshotTaken
  | messageChatSetTtl
  | messageCustomServiceAction
  | messageGameScore
  | messagePaymentSuccessful
  | messagePaymentSuccessfulBot
  | messageContactRegistered
  | messageWebsiteConnected
  | messagePassportDataSent
  | messagePassportDataReceived
  | messageUnsupported

/** Contains the content of a message */
export type MessageContent$Input =
  | messageText$Input
  | messageAnimation$Input
  | messageAudio$Input
  | messageDocument$Input
  | messagePhoto$Input
  | messageExpiredPhoto$Input
  | messageSticker$Input
  | messageVideo$Input
  | messageExpiredVideo$Input
  | messageVideoNote$Input
  | messageVoiceNote$Input
  | messageLocation$Input
  | messageVenue$Input
  | messageContact$Input
  | messageGame$Input
  | messagePoll$Input
  | messageInvoice$Input
  | messageCall$Input
  | messageBasicGroupChatCreate$Input
  | messageSupergroupChatCreate$Input
  | messageChatChangeTitle$Input
  | messageChatChangePhoto$Input
  | messageChatDeletePhoto$Input
  | messageChatAddMembers$Input
  | messageChatJoinByLink$Input
  | messageChatDeleteMember$Input
  | messageChatUpgradeTo$Input
  | messageChatUpgradeFrom$Input
  | messagePinMessage$Input
  | messageScreenshotTaken$Input
  | messageChatSetTtl$Input
  | messageCustomServiceAction$Input
  | messageGameScore$Input
  | messagePaymentSuccessful$Input
  | messagePaymentSuccessfulBot$Input
  | messageContactRegistered$Input
  | messageWebsiteConnected$Input
  | messagePassportDataSent$Input
  | messagePassportDataReceived$Input
  | messageUnsupported$Input

/** Represents a part of the text which must be formatted differently */
export type TextEntityType =
  | textEntityTypeMention
  | textEntityTypeHashtag
  | textEntityTypeCashtag
  | textEntityTypeBotCommand
  | textEntityTypeUrl
  | textEntityTypeEmailAddress
  | textEntityTypePhoneNumber
  | textEntityTypeBold
  | textEntityTypeItalic
  | textEntityTypeUnderline
  | textEntityTypeStrikethrough
  | textEntityTypeCode
  | textEntityTypePre
  | textEntityTypePreCode
  | textEntityTypeTextUrl
  | textEntityTypeMentionName

/** Represents a part of the text which must be formatted differently */
export type TextEntityType$Input =
  | textEntityTypeMention$Input
  | textEntityTypeHashtag$Input
  | textEntityTypeCashtag$Input
  | textEntityTypeBotCommand$Input
  | textEntityTypeUrl$Input
  | textEntityTypeEmailAddress$Input
  | textEntityTypePhoneNumber$Input
  | textEntityTypeBold$Input
  | textEntityTypeItalic$Input
  | textEntityTypeUnderline$Input
  | textEntityTypeStrikethrough$Input
  | textEntityTypeCode$Input
  | textEntityTypePre$Input
  | textEntityTypePreCode$Input
  | textEntityTypeTextUrl$Input
  | textEntityTypeMentionName$Input

export type InputThumbnail =
  | inputThumbnail

export type InputThumbnail$Input =
  | inputThumbnail$Input

/** Contains information about the time when a scheduled message will be sent */
export type MessageSchedulingState =
  | messageSchedulingStateSendAtDate
  | messageSchedulingStateSendWhenOnline

/** Contains information about the time when a scheduled message will be sent */
export type MessageSchedulingState$Input =
  | messageSchedulingStateSendAtDate$Input
  | messageSchedulingStateSendWhenOnline$Input

export type SendMessageOptions =
  | sendMessageOptions

export type SendMessageOptions$Input =
  | sendMessageOptions$Input

/** The content of a message to send */
export type InputMessageContent =
  | inputMessageText
  | inputMessageAnimation
  | inputMessageAudio
  | inputMessageDocument
  | inputMessagePhoto
  | inputMessageSticker
  | inputMessageVideo
  | inputMessageVideoNote
  | inputMessageVoiceNote
  | inputMessageLocation
  | inputMessageVenue
  | inputMessageContact
  | inputMessageGame
  | inputMessageInvoice
  | inputMessagePoll
  | inputMessageForwarded

/** The content of a message to send */
export type InputMessageContent$Input =
  | inputMessageText$Input
  | inputMessageAnimation$Input
  | inputMessageAudio$Input
  | inputMessageDocument$Input
  | inputMessagePhoto$Input
  | inputMessageSticker$Input
  | inputMessageVideo$Input
  | inputMessageVideoNote$Input
  | inputMessageVoiceNote$Input
  | inputMessageLocation$Input
  | inputMessageVenue$Input
  | inputMessageContact$Input
  | inputMessageGame$Input
  | inputMessageInvoice$Input
  | inputMessagePoll$Input
  | inputMessageForwarded$Input

/** Represents a filter for message search results */
export type SearchMessagesFilter =
  | searchMessagesFilterEmpty
  | searchMessagesFilterAnimation
  | searchMessagesFilterAudio
  | searchMessagesFilterDocument
  | searchMessagesFilterPhoto
  | searchMessagesFilterVideo
  | searchMessagesFilterVoiceNote
  | searchMessagesFilterPhotoAndVideo
  | searchMessagesFilterUrl
  | searchMessagesFilterChatPhoto
  | searchMessagesFilterCall
  | searchMessagesFilterMissedCall
  | searchMessagesFilterVideoNote
  | searchMessagesFilterVoiceAndVideoNote
  | searchMessagesFilterMention
  | searchMessagesFilterUnreadMention

/** Represents a filter for message search results */
export type SearchMessagesFilter$Input =
  | searchMessagesFilterEmpty$Input
  | searchMessagesFilterAnimation$Input
  | searchMessagesFilterAudio$Input
  | searchMessagesFilterDocument$Input
  | searchMessagesFilterPhoto$Input
  | searchMessagesFilterVideo$Input
  | searchMessagesFilterVoiceNote$Input
  | searchMessagesFilterPhotoAndVideo$Input
  | searchMessagesFilterUrl$Input
  | searchMessagesFilterChatPhoto$Input
  | searchMessagesFilterCall$Input
  | searchMessagesFilterMissedCall$Input
  | searchMessagesFilterVideoNote$Input
  | searchMessagesFilterVoiceAndVideoNote$Input
  | searchMessagesFilterMention$Input
  | searchMessagesFilterUnreadMention$Input

/** Describes the different types of activity in a chat */
export type ChatAction =
  | chatActionTyping
  | chatActionRecordingVideo
  | chatActionUploadingVideo
  | chatActionRecordingVoiceNote
  | chatActionUploadingVoiceNote
  | chatActionUploadingPhoto
  | chatActionUploadingDocument
  | chatActionChoosingLocation
  | chatActionChoosingContact
  | chatActionStartPlayingGame
  | chatActionRecordingVideoNote
  | chatActionUploadingVideoNote
  | chatActionCancel

/** Describes the different types of activity in a chat */
export type ChatAction$Input =
  | chatActionTyping$Input
  | chatActionRecordingVideo$Input
  | chatActionUploadingVideo$Input
  | chatActionRecordingVoiceNote$Input
  | chatActionUploadingVoiceNote$Input
  | chatActionUploadingPhoto$Input
  | chatActionUploadingDocument$Input
  | chatActionChoosingLocation$Input
  | chatActionChoosingContact$Input
  | chatActionStartPlayingGame$Input
  | chatActionRecordingVideoNote$Input
  | chatActionUploadingVideoNote$Input
  | chatActionCancel$Input

/** Describes the last time the user was online */
export type UserStatus =
  | userStatusEmpty
  | userStatusOnline
  | userStatusOffline
  | userStatusRecently
  | userStatusLastWeek
  | userStatusLastMonth

/** Describes the last time the user was online */
export type UserStatus$Input =
  | userStatusEmpty$Input
  | userStatusOnline$Input
  | userStatusOffline$Input
  | userStatusRecently$Input
  | userStatusLastWeek$Input
  | userStatusLastMonth$Input

export type Stickers =
  | stickers

export type Stickers$Input =
  | stickers$Input

export type Emojis =
  | emojis

export type Emojis$Input =
  | emojis$Input

export type StickerSet =
  | stickerSet

export type StickerSet$Input =
  | stickerSet$Input

export type StickerSetInfo =
  | stickerSetInfo

export type StickerSetInfo$Input =
  | stickerSetInfo$Input

export type StickerSets =
  | stickerSets

export type StickerSets$Input =
  | stickerSets$Input

/** Describes the reason why a call was discarded */
export type CallDiscardReason =
  | callDiscardReasonEmpty
  | callDiscardReasonMissed
  | callDiscardReasonDeclined
  | callDiscardReasonDisconnected
  | callDiscardReasonHungUp

/** Describes the reason why a call was discarded */
export type CallDiscardReason$Input =
  | callDiscardReasonEmpty$Input
  | callDiscardReasonMissed$Input
  | callDiscardReasonDeclined$Input
  | callDiscardReasonDisconnected$Input
  | callDiscardReasonHungUp$Input

export type CallProtocol =
  | callProtocol

export type CallProtocol$Input =
  | callProtocol$Input

export type CallConnection =
  | callConnection

export type CallConnection$Input =
  | callConnection$Input

export type CallId =
  | callId

export type CallId$Input =
  | callId$Input

/** Describes the current call state */
export type CallState =
  | callStatePending
  | callStateExchangingKeys
  | callStateReady
  | callStateHangingUp
  | callStateDiscarded
  | callStateError

/** Describes the current call state */
export type CallState$Input =
  | callStatePending$Input
  | callStateExchangingKeys$Input
  | callStateReady$Input
  | callStateHangingUp$Input
  | callStateDiscarded$Input
  | callStateError$Input

/** Describes the exact type of a problem with a call */
export type CallProblem =
  | callProblemEcho
  | callProblemNoise
  | callProblemInterruptions
  | callProblemDistortedSpeech
  | callProblemSilentLocal
  | callProblemSilentRemote
  | callProblemDropped

/** Describes the exact type of a problem with a call */
export type CallProblem$Input =
  | callProblemEcho$Input
  | callProblemNoise$Input
  | callProblemInterruptions$Input
  | callProblemDistortedSpeech$Input
  | callProblemSilentLocal$Input
  | callProblemSilentRemote$Input
  | callProblemDropped$Input

export type Call =
  | call

export type Call$Input =
  | call$Input

export type PhoneNumberAuthenticationSettings =
  | phoneNumberAuthenticationSettings

export type PhoneNumberAuthenticationSettings$Input =
  | phoneNumberAuthenticationSettings$Input

export type Animations =
  | animations

export type Animations$Input =
  | animations$Input

export type ImportedContacts =
  | importedContacts

export type ImportedContacts$Input =
  | importedContacts$Input

export type HttpUrl =
  | httpUrl

export type HttpUrl$Input =
  | httpUrl$Input

/** Represents a single result of an inline query; for bots only */
export type InputInlineQueryResult =
  | inputInlineQueryResultAnimatedGif
  | inputInlineQueryResultAnimatedMpeg4
  | inputInlineQueryResultArticle
  | inputInlineQueryResultAudio
  | inputInlineQueryResultContact
  | inputInlineQueryResultDocument
  | inputInlineQueryResultGame
  | inputInlineQueryResultLocation
  | inputInlineQueryResultPhoto
  | inputInlineQueryResultSticker
  | inputInlineQueryResultVenue
  | inputInlineQueryResultVideo
  | inputInlineQueryResultVoiceNote

/** Represents a single result of an inline query; for bots only */
export type InputInlineQueryResult$Input =
  | inputInlineQueryResultAnimatedGif$Input
  | inputInlineQueryResultAnimatedMpeg4$Input
  | inputInlineQueryResultArticle$Input
  | inputInlineQueryResultAudio$Input
  | inputInlineQueryResultContact$Input
  | inputInlineQueryResultDocument$Input
  | inputInlineQueryResultGame$Input
  | inputInlineQueryResultLocation$Input
  | inputInlineQueryResultPhoto$Input
  | inputInlineQueryResultSticker$Input
  | inputInlineQueryResultVenue$Input
  | inputInlineQueryResultVideo$Input
  | inputInlineQueryResultVoiceNote$Input

/** Represents a single result of an inline query */
export type InlineQueryResult =
  | inlineQueryResultArticle
  | inlineQueryResultContact
  | inlineQueryResultLocation
  | inlineQueryResultVenue
  | inlineQueryResultGame
  | inlineQueryResultAnimation
  | inlineQueryResultAudio
  | inlineQueryResultDocument
  | inlineQueryResultPhoto
  | inlineQueryResultSticker
  | inlineQueryResultVideo
  | inlineQueryResultVoiceNote

/** Represents a single result of an inline query */
export type InlineQueryResult$Input =
  | inlineQueryResultArticle$Input
  | inlineQueryResultContact$Input
  | inlineQueryResultLocation$Input
  | inlineQueryResultVenue$Input
  | inlineQueryResultGame$Input
  | inlineQueryResultAnimation$Input
  | inlineQueryResultAudio$Input
  | inlineQueryResultDocument$Input
  | inlineQueryResultPhoto$Input
  | inlineQueryResultSticker$Input
  | inlineQueryResultVideo$Input
  | inlineQueryResultVoiceNote$Input

export type InlineQueryResults =
  | inlineQueryResults

export type InlineQueryResults$Input =
  | inlineQueryResults$Input

/** Represents a payload of a callback query */
export type CallbackQueryPayload =
  | callbackQueryPayloadData
  | callbackQueryPayloadGame

/** Represents a payload of a callback query */
export type CallbackQueryPayload$Input =
  | callbackQueryPayloadData$Input
  | callbackQueryPayloadGame$Input

export type CallbackQueryAnswer =
  | callbackQueryAnswer

export type CallbackQueryAnswer$Input =
  | callbackQueryAnswer$Input

export type CustomRequestResult =
  | customRequestResult

export type CustomRequestResult$Input =
  | customRequestResult$Input

export type GameHighScore =
  | gameHighScore

export type GameHighScore$Input =
  | gameHighScore$Input

export type GameHighScores =
  | gameHighScores

export type GameHighScores$Input =
  | gameHighScores$Input

/** Represents a chat event */
export type ChatEventAction =
  | chatEventMessageEdited
  | chatEventMessageDeleted
  | chatEventPollStopped
  | chatEventMessagePinned
  | chatEventMessageUnpinned
  | chatEventMemberJoined
  | chatEventMemberLeft
  | chatEventMemberInvited
  | chatEventMemberPromoted
  | chatEventMemberRestricted
  | chatEventTitleChanged
  | chatEventPermissionsChanged
  | chatEventDescriptionChanged
  | chatEventUsernameChanged
  | chatEventPhotoChanged
  | chatEventInvitesToggled
  | chatEventLinkedChatChanged
  | chatEventSlowModeDelayChanged
  | chatEventSignMessagesToggled
  | chatEventStickerSetChanged
  | chatEventLocationChanged
  | chatEventIsAllHistoryAvailableToggled

/** Represents a chat event */
export type ChatEventAction$Input =
  | chatEventMessageEdited$Input
  | chatEventMessageDeleted$Input
  | chatEventPollStopped$Input
  | chatEventMessagePinned$Input
  | chatEventMessageUnpinned$Input
  | chatEventMemberJoined$Input
  | chatEventMemberLeft$Input
  | chatEventMemberInvited$Input
  | chatEventMemberPromoted$Input
  | chatEventMemberRestricted$Input
  | chatEventTitleChanged$Input
  | chatEventPermissionsChanged$Input
  | chatEventDescriptionChanged$Input
  | chatEventUsernameChanged$Input
  | chatEventPhotoChanged$Input
  | chatEventInvitesToggled$Input
  | chatEventLinkedChatChanged$Input
  | chatEventSlowModeDelayChanged$Input
  | chatEventSignMessagesToggled$Input
  | chatEventStickerSetChanged$Input
  | chatEventLocationChanged$Input
  | chatEventIsAllHistoryAvailableToggled$Input

export type ChatEvent =
  | chatEvent

export type ChatEvent$Input =
  | chatEvent$Input

export type ChatEvents =
  | chatEvents

export type ChatEvents$Input =
  | chatEvents$Input

export type ChatEventLogFilters =
  | chatEventLogFilters

export type ChatEventLogFilters$Input =
  | chatEventLogFilters$Input

/** Represents the value of a string in a language pack */
export type LanguagePackStringValue =
  | languagePackStringValueOrdinary
  | languagePackStringValuePluralized
  | languagePackStringValueDeleted

/** Represents the value of a string in a language pack */
export type LanguagePackStringValue$Input =
  | languagePackStringValueOrdinary$Input
  | languagePackStringValuePluralized$Input
  | languagePackStringValueDeleted$Input

export type LanguagePackString =
  | languagePackString

export type LanguagePackString$Input =
  | languagePackString$Input

export type LanguagePackStrings =
  | languagePackStrings

export type LanguagePackStrings$Input =
  | languagePackStrings$Input

export type LanguagePackInfo =
  | languagePackInfo

export type LanguagePackInfo$Input =
  | languagePackInfo$Input

export type LocalizationTargetInfo =
  | localizationTargetInfo

export type LocalizationTargetInfo$Input =
  | localizationTargetInfo$Input

/**
 * Represents a data needed to subscribe for push notifications through registerDevice
 * method. To use specific push notification service, you must specify the correct application
 * platform and upload valid server authentication data at https://my.telegram.org
 */
export type DeviceToken =
  | deviceTokenFirebaseCloudMessaging
  | deviceTokenApplePush
  | deviceTokenApplePushVoIP
  | deviceTokenWindowsPush
  | deviceTokenMicrosoftPush
  | deviceTokenMicrosoftPushVoIP
  | deviceTokenWebPush
  | deviceTokenSimplePush
  | deviceTokenUbuntuPush
  | deviceTokenBlackBerryPush
  | deviceTokenTizenPush

/**
 * Represents a data needed to subscribe for push notifications through registerDevice
 * method. To use specific push notification service, you must specify the correct application
 * platform and upload valid server authentication data at https://my.telegram.org
 */
export type DeviceToken$Input =
  | deviceTokenFirebaseCloudMessaging$Input
  | deviceTokenApplePush$Input
  | deviceTokenApplePushVoIP$Input
  | deviceTokenWindowsPush$Input
  | deviceTokenMicrosoftPush$Input
  | deviceTokenMicrosoftPushVoIP$Input
  | deviceTokenWebPush$Input
  | deviceTokenSimplePush$Input
  | deviceTokenUbuntuPush$Input
  | deviceTokenBlackBerryPush$Input
  | deviceTokenTizenPush$Input

export type PushReceiverId =
  | pushReceiverId

export type PushReceiverId$Input =
  | pushReceiverId$Input

/** Describes a fill of a background */
export type BackgroundFill =
  | backgroundFillSolid
  | backgroundFillGradient

/** Describes a fill of a background */
export type BackgroundFill$Input =
  | backgroundFillSolid$Input
  | backgroundFillGradient$Input

/** Describes the type of a background */
export type BackgroundType =
  | backgroundTypeWallpaper
  | backgroundTypePattern
  | backgroundTypeFill

/** Describes the type of a background */
export type BackgroundType$Input =
  | backgroundTypeWallpaper$Input
  | backgroundTypePattern$Input
  | backgroundTypeFill$Input

export type Background =
  | background

export type Background$Input =
  | background$Input

export type Backgrounds =
  | backgrounds

export type Backgrounds$Input =
  | backgrounds$Input

/** Contains information about background to set */
export type InputBackground =
  | inputBackgroundLocal
  | inputBackgroundRemote

/** Contains information about background to set */
export type InputBackground$Input =
  | inputBackgroundLocal$Input
  | inputBackgroundRemote$Input

export type Hashtags =
  | hashtags

export type Hashtags$Input =
  | hashtags$Input

/**
 * Represents result of checking whether the current session can be used to transfer
 * a chat ownership to another user
 */
export type CanTransferOwnershipResult =
  | canTransferOwnershipResultOk
  | canTransferOwnershipResultPasswordNeeded
  | canTransferOwnershipResultPasswordTooFresh
  | canTransferOwnershipResultSessionTooFresh

/**
 * Represents result of checking whether the current session can be used to transfer
 * a chat ownership to another user
 */
export type CanTransferOwnershipResult$Input =
  | canTransferOwnershipResultOk$Input
  | canTransferOwnershipResultPasswordNeeded$Input
  | canTransferOwnershipResultPasswordTooFresh$Input
  | canTransferOwnershipResultSessionTooFresh$Input

/** Represents result of checking whether a username can be set for a chat */
export type CheckChatUsernameResult =
  | checkChatUsernameResultOk
  | checkChatUsernameResultUsernameInvalid
  | checkChatUsernameResultUsernameOccupied
  | checkChatUsernameResultPublicChatsTooMuch
  | checkChatUsernameResultPublicGroupsUnavailable

/** Represents result of checking whether a username can be set for a chat */
export type CheckChatUsernameResult$Input =
  | checkChatUsernameResultOk$Input
  | checkChatUsernameResultUsernameInvalid$Input
  | checkChatUsernameResultUsernameOccupied$Input
  | checkChatUsernameResultPublicChatsTooMuch$Input
  | checkChatUsernameResultPublicGroupsUnavailable$Input

/** Contains content of a push message notification */
export type PushMessageContent =
  | pushMessageContentHidden
  | pushMessageContentAnimation
  | pushMessageContentAudio
  | pushMessageContentContact
  | pushMessageContentContactRegistered
  | pushMessageContentDocument
  | pushMessageContentGame
  | pushMessageContentGameScore
  | pushMessageContentInvoice
  | pushMessageContentLocation
  | pushMessageContentPhoto
  | pushMessageContentPoll
  | pushMessageContentScreenshotTaken
  | pushMessageContentSticker
  | pushMessageContentText
  | pushMessageContentVideo
  | pushMessageContentVideoNote
  | pushMessageContentVoiceNote
  | pushMessageContentBasicGroupChatCreate
  | pushMessageContentChatAddMembers
  | pushMessageContentChatChangePhoto
  | pushMessageContentChatChangeTitle
  | pushMessageContentChatDeleteMember
  | pushMessageContentChatJoinByLink
  | pushMessageContentMessageForwards
  | pushMessageContentMediaAlbum

/** Contains content of a push message notification */
export type PushMessageContent$Input =
  | pushMessageContentHidden$Input
  | pushMessageContentAnimation$Input
  | pushMessageContentAudio$Input
  | pushMessageContentContact$Input
  | pushMessageContentContactRegistered$Input
  | pushMessageContentDocument$Input
  | pushMessageContentGame$Input
  | pushMessageContentGameScore$Input
  | pushMessageContentInvoice$Input
  | pushMessageContentLocation$Input
  | pushMessageContentPhoto$Input
  | pushMessageContentPoll$Input
  | pushMessageContentScreenshotTaken$Input
  | pushMessageContentSticker$Input
  | pushMessageContentText$Input
  | pushMessageContentVideo$Input
  | pushMessageContentVideoNote$Input
  | pushMessageContentVoiceNote$Input
  | pushMessageContentBasicGroupChatCreate$Input
  | pushMessageContentChatAddMembers$Input
  | pushMessageContentChatChangePhoto$Input
  | pushMessageContentChatChangeTitle$Input
  | pushMessageContentChatDeleteMember$Input
  | pushMessageContentChatJoinByLink$Input
  | pushMessageContentMessageForwards$Input
  | pushMessageContentMediaAlbum$Input

/** Contains detailed information about a notification */
export type NotificationType =
  | notificationTypeNewMessage
  | notificationTypeNewSecretChat
  | notificationTypeNewCall
  | notificationTypeNewPushMessage

/** Contains detailed information about a notification */
export type NotificationType$Input =
  | notificationTypeNewMessage$Input
  | notificationTypeNewSecretChat$Input
  | notificationTypeNewCall$Input
  | notificationTypeNewPushMessage$Input

/** Describes the type of notifications in a notification group */
export type NotificationGroupType =
  | notificationGroupTypeMessages
  | notificationGroupTypeMentions
  | notificationGroupTypeSecretChat
  | notificationGroupTypeCalls

/** Describes the type of notifications in a notification group */
export type NotificationGroupType$Input =
  | notificationGroupTypeMessages$Input
  | notificationGroupTypeMentions$Input
  | notificationGroupTypeSecretChat$Input
  | notificationGroupTypeCalls$Input

export type Notification =
  | notification

export type Notification$Input =
  | notification$Input

export type NotificationGroup =
  | notificationGroup

export type NotificationGroup$Input =
  | notificationGroup$Input

/** Represents the value of an option */
export type OptionValue =
  | optionValueBoolean
  | optionValueEmpty
  | optionValueInteger
  | optionValueString

/** Represents the value of an option */
export type OptionValue$Input =
  | optionValueBoolean$Input
  | optionValueEmpty$Input
  | optionValueInteger$Input
  | optionValueString$Input

export type JsonObjectMember =
  | jsonObjectMember

export type JsonObjectMember$Input =
  | jsonObjectMember$Input

/** Represents a JSON value */
export type JsonValue =
  | jsonValueNull
  | jsonValueBoolean
  | jsonValueNumber
  | jsonValueString
  | jsonValueArray
  | jsonValueObject

/** Represents a JSON value */
export type JsonValue$Input =
  | jsonValueNull$Input
  | jsonValueBoolean$Input
  | jsonValueNumber$Input
  | jsonValueString$Input
  | jsonValueArray$Input
  | jsonValueObject$Input

/** Represents a single rule for managing privacy settings */
export type UserPrivacySettingRule =
  | userPrivacySettingRuleAllowAll
  | userPrivacySettingRuleAllowContacts
  | userPrivacySettingRuleAllowUsers
  | userPrivacySettingRuleAllowChatMembers
  | userPrivacySettingRuleRestrictAll
  | userPrivacySettingRuleRestrictContacts
  | userPrivacySettingRuleRestrictUsers
  | userPrivacySettingRuleRestrictChatMembers

/** Represents a single rule for managing privacy settings */
export type UserPrivacySettingRule$Input =
  | userPrivacySettingRuleAllowAll$Input
  | userPrivacySettingRuleAllowContacts$Input
  | userPrivacySettingRuleAllowUsers$Input
  | userPrivacySettingRuleAllowChatMembers$Input
  | userPrivacySettingRuleRestrictAll$Input
  | userPrivacySettingRuleRestrictContacts$Input
  | userPrivacySettingRuleRestrictUsers$Input
  | userPrivacySettingRuleRestrictChatMembers$Input

export type UserPrivacySettingRules =
  | userPrivacySettingRules

export type UserPrivacySettingRules$Input =
  | userPrivacySettingRules$Input

/** Describes available user privacy settings */
export type UserPrivacySetting =
  | userPrivacySettingShowStatus
  | userPrivacySettingShowProfilePhoto
  | userPrivacySettingShowLinkInForwardedMessages
  | userPrivacySettingShowPhoneNumber
  | userPrivacySettingAllowChatInvites
  | userPrivacySettingAllowCalls
  | userPrivacySettingAllowPeerToPeerCalls
  | userPrivacySettingAllowFindingByPhoneNumber

/** Describes available user privacy settings */
export type UserPrivacySetting$Input =
  | userPrivacySettingShowStatus$Input
  | userPrivacySettingShowProfilePhoto$Input
  | userPrivacySettingShowLinkInForwardedMessages$Input
  | userPrivacySettingShowPhoneNumber$Input
  | userPrivacySettingAllowChatInvites$Input
  | userPrivacySettingAllowCalls$Input
  | userPrivacySettingAllowPeerToPeerCalls$Input
  | userPrivacySettingAllowFindingByPhoneNumber$Input

export type AccountTtl =
  | accountTtl

export type AccountTtl$Input =
  | accountTtl$Input

export type Session =
  | session

export type Session$Input =
  | session$Input

export type Sessions =
  | sessions

export type Sessions$Input =
  | sessions$Input

export type ConnectedWebsite =
  | connectedWebsite

export type ConnectedWebsite$Input =
  | connectedWebsite$Input

export type ConnectedWebsites =
  | connectedWebsites

export type ConnectedWebsites$Input =
  | connectedWebsites$Input

/** Describes the reason why a chat is reported */
export type ChatReportReason =
  | chatReportReasonSpam
  | chatReportReasonViolence
  | chatReportReasonPornography
  | chatReportReasonChildAbuse
  | chatReportReasonCopyright
  | chatReportReasonUnrelatedLocation
  | chatReportReasonCustom

/** Describes the reason why a chat is reported */
export type ChatReportReason$Input =
  | chatReportReasonSpam$Input
  | chatReportReasonViolence$Input
  | chatReportReasonPornography$Input
  | chatReportReasonChildAbuse$Input
  | chatReportReasonCopyright$Input
  | chatReportReasonUnrelatedLocation$Input
  | chatReportReasonCustom$Input

export type PublicMessageLink =
  | publicMessageLink

export type PublicMessageLink$Input =
  | publicMessageLink$Input

export type MessageLinkInfo =
  | messageLinkInfo

export type MessageLinkInfo$Input =
  | messageLinkInfo$Input

export type FilePart =
  | filePart

export type FilePart$Input =
  | filePart$Input

/** Represents the type of a file */
export type FileType =
  | fileTypeNone
  | fileTypeAnimation
  | fileTypeAudio
  | fileTypeDocument
  | fileTypePhoto
  | fileTypeProfilePhoto
  | fileTypeSecret
  | fileTypeSecretThumbnail
  | fileTypeSecure
  | fileTypeSticker
  | fileTypeThumbnail
  | fileTypeUnknown
  | fileTypeVideo
  | fileTypeVideoNote
  | fileTypeVoiceNote
  | fileTypeWallpaper

/** Represents the type of a file */
export type FileType$Input =
  | fileTypeNone$Input
  | fileTypeAnimation$Input
  | fileTypeAudio$Input
  | fileTypeDocument$Input
  | fileTypePhoto$Input
  | fileTypeProfilePhoto$Input
  | fileTypeSecret$Input
  | fileTypeSecretThumbnail$Input
  | fileTypeSecure$Input
  | fileTypeSticker$Input
  | fileTypeThumbnail$Input
  | fileTypeUnknown$Input
  | fileTypeVideo$Input
  | fileTypeVideoNote$Input
  | fileTypeVoiceNote$Input
  | fileTypeWallpaper$Input

export type StorageStatisticsByFileType =
  | storageStatisticsByFileType

export type StorageStatisticsByFileType$Input =
  | storageStatisticsByFileType$Input

export type StorageStatisticsByChat =
  | storageStatisticsByChat

export type StorageStatisticsByChat$Input =
  | storageStatisticsByChat$Input

export type StorageStatistics =
  | storageStatistics

export type StorageStatistics$Input =
  | storageStatistics$Input

export type StorageStatisticsFast =
  | storageStatisticsFast

export type StorageStatisticsFast$Input =
  | storageStatisticsFast$Input

export type DatabaseStatistics =
  | databaseStatistics

export type DatabaseStatistics$Input =
  | databaseStatistics$Input

/** Represents the type of a network */
export type NetworkType =
  | networkTypeNone
  | networkTypeMobile
  | networkTypeMobileRoaming
  | networkTypeWiFi
  | networkTypeOther

/** Represents the type of a network */
export type NetworkType$Input =
  | networkTypeNone$Input
  | networkTypeMobile$Input
  | networkTypeMobileRoaming$Input
  | networkTypeWiFi$Input
  | networkTypeOther$Input

/** Contains statistics about network usage */
export type NetworkStatisticsEntry =
  | networkStatisticsEntryFile
  | networkStatisticsEntryCall

/** Contains statistics about network usage */
export type NetworkStatisticsEntry$Input =
  | networkStatisticsEntryFile$Input
  | networkStatisticsEntryCall$Input

export type NetworkStatistics =
  | networkStatistics

export type NetworkStatistics$Input =
  | networkStatistics$Input

export type AutoDownloadSettings =
  | autoDownloadSettings

export type AutoDownloadSettings$Input =
  | autoDownloadSettings$Input

export type AutoDownloadSettingsPresets =
  | autoDownloadSettingsPresets

export type AutoDownloadSettingsPresets$Input =
  | autoDownloadSettingsPresets$Input

/** Describes the current state of the connection to Telegram servers */
export type ConnectionState =
  | connectionStateWaitingForNetwork
  | connectionStateConnectingToProxy
  | connectionStateConnecting
  | connectionStateUpdating
  | connectionStateReady

/** Describes the current state of the connection to Telegram servers */
export type ConnectionState$Input =
  | connectionStateWaitingForNetwork$Input
  | connectionStateConnectingToProxy$Input
  | connectionStateConnecting$Input
  | connectionStateUpdating$Input
  | connectionStateReady$Input

/**
 * Represents the categories of chats for which a list of frequently used chats can
 * be retrieved
 */
export type TopChatCategory =
  | topChatCategoryUsers
  | topChatCategoryBots
  | topChatCategoryGroups
  | topChatCategoryChannels
  | topChatCategoryInlineBots
  | topChatCategoryCalls
  | topChatCategoryForwardChats

/**
 * Represents the categories of chats for which a list of frequently used chats can
 * be retrieved
 */
export type TopChatCategory$Input =
  | topChatCategoryUsers$Input
  | topChatCategoryBots$Input
  | topChatCategoryGroups$Input
  | topChatCategoryChannels$Input
  | topChatCategoryInlineBots$Input
  | topChatCategoryCalls$Input
  | topChatCategoryForwardChats$Input

/** Describes the type of a URL linking to an internal Telegram entity */
export type TMeUrlType =
  | tMeUrlTypeUser
  | tMeUrlTypeSupergroup
  | tMeUrlTypeChatInvite
  | tMeUrlTypeStickerSet

/** Describes the type of a URL linking to an internal Telegram entity */
export type TMeUrlType$Input =
  | tMeUrlTypeUser$Input
  | tMeUrlTypeSupergroup$Input
  | tMeUrlTypeChatInvite$Input
  | tMeUrlTypeStickerSet$Input

export type TMeUrl =
  | tMeUrl

export type TMeUrl$Input =
  | tMeUrl$Input

export type TMeUrls =
  | tMeUrls

export type TMeUrls$Input =
  | tMeUrls$Input

export type Count =
  | count

export type Count$Input =
  | count$Input

export type Text =
  | text

export type Text$Input =
  | text$Input

export type Seconds =
  | seconds

export type Seconds$Input =
  | seconds$Input

export type DeepLinkInfo =
  | deepLinkInfo

export type DeepLinkInfo$Input =
  | deepLinkInfo$Input

/** Describes the way the text should be parsed for TextEntities */
export type TextParseMode =
  | textParseModeMarkdown
  | textParseModeHTML

/** Describes the way the text should be parsed for TextEntities */
export type TextParseMode$Input =
  | textParseModeMarkdown$Input
  | textParseModeHTML$Input

/** Describes the type of a proxy server */
export type ProxyType =
  | proxyTypeSocks5
  | proxyTypeHttp
  | proxyTypeMtproto

/** Describes the type of a proxy server */
export type ProxyType$Input =
  | proxyTypeSocks5$Input
  | proxyTypeHttp$Input
  | proxyTypeMtproto$Input

export type Proxy =
  | proxy

export type Proxy$Input =
  | proxy$Input

export type Proxies =
  | proxies

export type Proxies$Input =
  | proxies$Input

export type InputSticker =
  | inputSticker

export type InputSticker$Input =
  | inputSticker$Input

/** Contains notifications about data changes */
export type Update =
  | updateAuthorizationState
  | updateNewMessage
  | updateMessageSendAcknowledged
  | updateMessageSendSucceeded
  | updateMessageSendFailed
  | updateMessageContent
  | updateMessageEdited
  | updateMessageViews
  | updateMessageContentOpened
  | updateMessageMentionRead
  | updateMessageLiveLocationViewed
  | updateNewChat
  | updateChatChatList
  | updateChatTitle
  | updateChatPhoto
  | updateChatPermissions
  | updateChatLastMessage
  | updateChatOrder
  | updateChatIsPinned
  | updateChatIsMarkedAsUnread
  | updateChatIsSponsored
  | updateChatHasScheduledMessages
  | updateChatDefaultDisableNotification
  | updateChatReadInbox
  | updateChatReadOutbox
  | updateChatUnreadMentionCount
  | updateChatNotificationSettings
  | updateScopeNotificationSettings
  | updateChatActionBar
  | updateChatPinnedMessage
  | updateChatReplyMarkup
  | updateChatDraftMessage
  | updateChatOnlineMemberCount
  | updateNotification
  | updateNotificationGroup
  | updateActiveNotifications
  | updateHavePendingNotifications
  | updateDeleteMessages
  | updateUserChatAction
  | updateUserStatus
  | updateUser
  | updateBasicGroup
  | updateSupergroup
  | updateSecretChat
  | updateUserFullInfo
  | updateBasicGroupFullInfo
  | updateSupergroupFullInfo
  | updateServiceNotification
  | updateFile
  | updateFileGenerationStart
  | updateFileGenerationStop
  | updateCall
  | updateUserPrivacySettingRules
  | updateUnreadMessageCount
  | updateUnreadChatCount
  | updateOption
  | updateInstalledStickerSets
  | updateTrendingStickerSets
  | updateRecentStickers
  | updateFavoriteStickers
  | updateSavedAnimations
  | updateSelectedBackground
  | updateLanguagePackStrings
  | updateConnectionState
  | updateTermsOfService
  | updateUsersNearby
  | updateNewInlineQuery
  | updateNewChosenInlineResult
  | updateNewCallbackQuery
  | updateNewInlineCallbackQuery
  | updateNewShippingQuery
  | updateNewPreCheckoutQuery
  | updateNewCustomEvent
  | updateNewCustomQuery
  | updatePoll
  | updatePollAnswer

/** Contains notifications about data changes */
export type Update$Input =
  | updateAuthorizationState$Input
  | updateNewMessage$Input
  | updateMessageSendAcknowledged$Input
  | updateMessageSendSucceeded$Input
  | updateMessageSendFailed$Input
  | updateMessageContent$Input
  | updateMessageEdited$Input
  | updateMessageViews$Input
  | updateMessageContentOpened$Input
  | updateMessageMentionRead$Input
  | updateMessageLiveLocationViewed$Input
  | updateNewChat$Input
  | updateChatChatList$Input
  | updateChatTitle$Input
  | updateChatPhoto$Input
  | updateChatPermissions$Input
  | updateChatLastMessage$Input
  | updateChatOrder$Input
  | updateChatIsPinned$Input
  | updateChatIsMarkedAsUnread$Input
  | updateChatIsSponsored$Input
  | updateChatHasScheduledMessages$Input
  | updateChatDefaultDisableNotification$Input
  | updateChatReadInbox$Input
  | updateChatReadOutbox$Input
  | updateChatUnreadMentionCount$Input
  | updateChatNotificationSettings$Input
  | updateScopeNotificationSettings$Input
  | updateChatActionBar$Input
  | updateChatPinnedMessage$Input
  | updateChatReplyMarkup$Input
  | updateChatDraftMessage$Input
  | updateChatOnlineMemberCount$Input
  | updateNotification$Input
  | updateNotificationGroup$Input
  | updateActiveNotifications$Input
  | updateHavePendingNotifications$Input
  | updateDeleteMessages$Input
  | updateUserChatAction$Input
  | updateUserStatus$Input
  | updateUser$Input
  | updateBasicGroup$Input
  | updateSupergroup$Input
  | updateSecretChat$Input
  | updateUserFullInfo$Input
  | updateBasicGroupFullInfo$Input
  | updateSupergroupFullInfo$Input
  | updateServiceNotification$Input
  | updateFile$Input
  | updateFileGenerationStart$Input
  | updateFileGenerationStop$Input
  | updateCall$Input
  | updateUserPrivacySettingRules$Input
  | updateUnreadMessageCount$Input
  | updateUnreadChatCount$Input
  | updateOption$Input
  | updateInstalledStickerSets$Input
  | updateTrendingStickerSets$Input
  | updateRecentStickers$Input
  | updateFavoriteStickers$Input
  | updateSavedAnimations$Input
  | updateSelectedBackground$Input
  | updateLanguagePackStrings$Input
  | updateConnectionState$Input
  | updateTermsOfService$Input
  | updateUsersNearby$Input
  | updateNewInlineQuery$Input
  | updateNewChosenInlineResult$Input
  | updateNewCallbackQuery$Input
  | updateNewInlineCallbackQuery$Input
  | updateNewShippingQuery$Input
  | updateNewPreCheckoutQuery$Input
  | updateNewCustomEvent$Input
  | updateNewCustomQuery$Input
  | updatePoll$Input
  | updatePollAnswer$Input

export type Updates =
  | updates

export type Updates$Input =
  | updates$Input

/** Describes a stream to which TDLib internal log is written */
export type LogStream =
  | logStreamDefault
  | logStreamFile
  | logStreamEmpty

/** Describes a stream to which TDLib internal log is written */
export type LogStream$Input =
  | logStreamDefault$Input
  | logStreamFile$Input
  | logStreamEmpty$Input

export type LogVerbosityLevel =
  | logVerbosityLevel

export type LogVerbosityLevel$Input =
  | logVerbosityLevel$Input

export type LogTags =
  | logTags

export type LogTags$Input =
  | logTags$Input

export type TestInt =
  | testInt

export type TestInt$Input =
  | testInt$Input

export type TestString =
  | testString

export type TestString$Input =
  | testString$Input

export type TestBytes =
  | testBytes

export type TestBytes$Input =
  | testBytes$Input

export type TestVectorInt =
  | testVectorInt

export type TestVectorInt$Input =
  | testVectorInt$Input

export type TestVectorIntObject =
  | testVectorIntObject

export type TestVectorIntObject$Input =
  | testVectorIntObject$Input

export type TestVectorString =
  | testVectorString

export type TestVectorString$Input =
  | testVectorString$Input

export type TestVectorStringObject =
  | testVectorStringObject

export type TestVectorStringObject$Input =
  | testVectorStringObject$Input

export type TDFunction =
  | getAuthorizationState
  | setTdlibParameters
  | checkDatabaseEncryptionKey
  | setAuthenticationPhoneNumber
  | resendAuthenticationCode
  | checkAuthenticationCode
  | requestQrCodeAuthentication
  | registerUser
  | checkAuthenticationPassword
  | requestAuthenticationPasswordRecovery
  | recoverAuthenticationPassword
  | checkAuthenticationBotToken
  | logOut
  | close
  | destroy
  | confirmQrCodeAuthentication
  | getCurrentState
  | setDatabaseEncryptionKey
  | getPasswordState
  | setPassword
  | getRecoveryEmailAddress
  | setRecoveryEmailAddress
  | checkRecoveryEmailAddressCode
  | resendRecoveryEmailAddressCode
  | requestPasswordRecovery
  | recoverPassword
  | createTemporaryPassword
  | getTemporaryPasswordState
  | getMe
  | getUser
  | getUserFullInfo
  | getBasicGroup
  | getBasicGroupFullInfo
  | getSupergroup
  | getSupergroupFullInfo
  | getSecretChat
  | getChat
  | getMessage
  | getMessageLocally
  | getRepliedMessage
  | getChatPinnedMessage
  | getMessages
  | getFile
  | getRemoteFile
  | getChats
  | searchPublicChat
  | searchPublicChats
  | searchChats
  | searchChatsOnServer
  | searchChatsNearby
  | getTopChats
  | removeTopChat
  | addRecentlyFoundChat
  | removeRecentlyFoundChat
  | clearRecentlyFoundChats
  | checkChatUsername
  | getCreatedPublicChats
  | checkCreatedPublicChatsLimit
  | getSuitableDiscussionChats
  | getInactiveSupergroupChats
  | getGroupsInCommon
  | getChatHistory
  | deleteChatHistory
  | searchChatMessages
  | searchMessages
  | searchSecretMessages
  | searchCallMessages
  | searchChatRecentLocationMessages
  | getActiveLiveLocationMessages
  | getChatMessageByDate
  | getChatMessageCount
  | getChatScheduledMessages
  | removeNotification
  | removeNotificationGroup
  | getPublicMessageLink
  | getMessageLink
  | getMessageLinkInfo
  | sendMessage
  | sendMessageAlbum
  | sendBotStartMessage
  | sendInlineQueryResultMessage
  | forwardMessages
  | resendMessages
  | sendChatSetTtlMessage
  | sendChatScreenshotTakenNotification
  | addLocalMessage
  | deleteMessages
  | deleteChatMessagesFromUser
  | editMessageText
  | editMessageLiveLocation
  | editMessageMedia
  | editMessageCaption
  | editMessageReplyMarkup
  | editInlineMessageText
  | editInlineMessageLiveLocation
  | editInlineMessageMedia
  | editInlineMessageCaption
  | editInlineMessageReplyMarkup
  | editMessageSchedulingState
  | getTextEntities
  | parseTextEntities
  | getFileMimeType
  | getFileExtension
  | cleanFileName
  | getLanguagePackString
  | getJsonValue
  | getJsonString
  | setPollAnswer
  | getPollVoters
  | stopPoll
  | getLoginUrlInfo
  | getLoginUrl
  | getInlineQueryResults
  | answerInlineQuery
  | getCallbackQueryAnswer
  | answerCallbackQuery
  | answerShippingQuery
  | answerPreCheckoutQuery
  | setGameScore
  | setInlineGameScore
  | getGameHighScores
  | getInlineGameHighScores
  | deleteChatReplyMarkup
  | sendChatAction
  | openChat
  | closeChat
  | viewMessages
  | openMessageContent
  | readAllChatMentions
  | createPrivateChat
  | createBasicGroupChat
  | createSupergroupChat
  | createSecretChat
  | createNewBasicGroupChat
  | createNewSupergroupChat
  | createNewSecretChat
  | upgradeBasicGroupChatToSupergroupChat
  | setChatChatList
  | setChatTitle
  | setChatPhoto
  | setChatPermissions
  | setChatDraftMessage
  | setChatNotificationSettings
  | toggleChatIsPinned
  | toggleChatIsMarkedAsUnread
  | toggleChatDefaultDisableNotification
  | setChatClientData
  | setChatDescription
  | setChatDiscussionGroup
  | setChatLocation
  | setChatSlowModeDelay
  | pinChatMessage
  | unpinChatMessage
  | joinChat
  | leaveChat
  | addChatMember
  | addChatMembers
  | setChatMemberStatus
  | canTransferOwnership
  | transferChatOwnership
  | getChatMember
  | searchChatMembers
  | getChatAdministrators
  | clearAllDraftMessages
  | getChatNotificationSettingsExceptions
  | getScopeNotificationSettings
  | setScopeNotificationSettings
  | resetAllNotificationSettings
  | setPinnedChats
  | downloadFile
  | getFileDownloadedPrefixSize
  | cancelDownloadFile
  | uploadFile
  | cancelUploadFile
  | writeGeneratedFilePart
  | setFileGenerationProgress
  | finishFileGeneration
  | readFilePart
  | deleteFile
  | generateChatInviteLink
  | checkChatInviteLink
  | joinChatByInviteLink
  | createCall
  | acceptCall
  | discardCall
  | sendCallRating
  | sendCallDebugInformation
  | blockUser
  | unblockUser
  | getBlockedUsers
  | addContact
  | importContacts
  | getContacts
  | searchContacts
  | removeContacts
  | getImportedContactCount
  | changeImportedContacts
  | clearImportedContacts
  | sharePhoneNumber
  | getUserProfilePhotos
  | getStickers
  | searchStickers
  | getInstalledStickerSets
  | getArchivedStickerSets
  | getTrendingStickerSets
  | getAttachedStickerSets
  | getStickerSet
  | searchStickerSet
  | searchInstalledStickerSets
  | searchStickerSets
  | changeStickerSet
  | viewTrendingStickerSets
  | reorderInstalledStickerSets
  | getRecentStickers
  | addRecentSticker
  | removeRecentSticker
  | clearRecentStickers
  | getFavoriteStickers
  | addFavoriteSticker
  | removeFavoriteSticker
  | getStickerEmojis
  | searchEmojis
  | getEmojiSuggestionsUrl
  | getSavedAnimations
  | addSavedAnimation
  | removeSavedAnimation
  | getRecentInlineBots
  | searchHashtags
  | removeRecentHashtag
  | getWebPagePreview
  | getWebPageInstantView
  | setProfilePhoto
  | deleteProfilePhoto
  | setName
  | setBio
  | setUsername
  | changePhoneNumber
  | resendChangePhoneNumberCode
  | checkChangePhoneNumberCode
  | getActiveSessions
  | terminateSession
  | terminateAllOtherSessions
  | getConnectedWebsites
  | disconnectWebsite
  | disconnectAllWebsites
  | setSupergroupUsername
  | setSupergroupStickerSet
  | toggleSupergroupSignMessages
  | toggleSupergroupIsAllHistoryAvailable
  | reportSupergroupSpam
  | getSupergroupMembers
  | deleteSupergroup
  | closeSecretChat
  | getChatEventLog
  | getPaymentForm
  | validateOrderInfo
  | sendPaymentForm
  | getPaymentReceipt
  | getSavedOrderInfo
  | deleteSavedOrderInfo
  | deleteSavedCredentials
  | getSupportUser
  | getBackgrounds
  | getBackgroundUrl
  | searchBackground
  | setBackground
  | removeBackground
  | resetBackgrounds
  | getLocalizationTargetInfo
  | getLanguagePackInfo
  | getLanguagePackStrings
  | synchronizeLanguagePack
  | addCustomServerLanguagePack
  | setCustomLanguagePack
  | editCustomLanguagePackInfo
  | setCustomLanguagePackString
  | deleteLanguagePack
  | registerDevice
  | processPushNotification
  | getPushReceiverId
  | getRecentlyVisitedTMeUrls
  | setUserPrivacySettingRules
  | getUserPrivacySettingRules
  | getOption
  | setOption
  | setAccountTtl
  | getAccountTtl
  | deleteAccount
  | removeChatActionBar
  | reportChat
  | getChatStatisticsUrl
  | getStorageStatistics
  | getStorageStatisticsFast
  | getDatabaseStatistics
  | optimizeStorage
  | setNetworkType
  | getNetworkStatistics
  | addNetworkStatistics
  | resetNetworkStatistics
  | getAutoDownloadSettingsPresets
  | setAutoDownloadSettings
  | getPassportElement
  | getAllPassportElements
  | setPassportElement
  | deletePassportElement
  | setPassportElementErrors
  | getPreferredCountryLanguage
  | sendPhoneNumberVerificationCode
  | resendPhoneNumberVerificationCode
  | checkPhoneNumberVerificationCode
  | sendEmailAddressVerificationCode
  | resendEmailAddressVerificationCode
  | checkEmailAddressVerificationCode
  | getPassportAuthorizationForm
  | getPassportAuthorizationFormAvailableElements
  | sendPassportAuthorizationForm
  | sendPhoneNumberConfirmationCode
  | resendPhoneNumberConfirmationCode
  | checkPhoneNumberConfirmationCode
  | setBotUpdatesStatus
  | uploadStickerFile
  | createNewStickerSet
  | addStickerToSet
  | setStickerPositionInSet
  | removeStickerFromSet
  | getMapThumbnailFile
  | acceptTermsOfService
  | sendCustomRequest
  | answerCustomQuery
  | setAlarm
  | getCountryCode
  | getInviteText
  | getDeepLinkInfo
  | getApplicationConfig
  | saveApplicationLogEvent
  | addProxy
  | editProxy
  | enableProxy
  | disableProxy
  | removeProxy
  | getProxies
  | getProxyLink
  | pingProxy
  | setLogStream
  | getLogStream
  | setLogVerbosityLevel
  | getLogVerbosityLevel
  | getLogTags
  | setLogTagVerbosityLevel
  | getLogTagVerbosityLevel
  | addLogMessage
  | testCallEmpty
  | testCallString
  | testCallBytes
  | testCallVectorInt
  | testCallVectorIntObject
  | testCallVectorString
  | testCallVectorStringObject
  | testSquareInt
  | testNetwork
  | testProxy
  | testGetDifference
  | testUseUpdate
  | testReturnError

export type TDObject =
  | Error
  | Ok
  | TdlibParameters
  | AuthenticationCodeType
  | AuthenticationCodeInfo
  | EmailAddressAuthenticationCodeInfo
  | TextEntity
  | TextEntities
  | FormattedText
  | TermsOfService
  | AuthorizationState
  | PasswordState
  | RecoveryEmailAddress
  | TemporaryPasswordState
  | LocalFile
  | RemoteFile
  | File
  | InputFile
  | PhotoSize
  | Minithumbnail
  | MaskPoint
  | MaskPosition
  | PollOption
  | PollType
  | Animation
  | Audio
  | Document
  | Photo
  | Sticker
  | Video
  | VideoNote
  | VoiceNote
  | Contact
  | Location
  | Venue
  | Game
  | Poll
  | ProfilePhoto
  | ChatPhoto
  | UserType
  | BotCommand
  | BotInfo
  | ChatLocation
  | User
  | UserFullInfo
  | UserProfilePhoto
  | UserProfilePhotos
  | Users
  | ChatAdministrator
  | ChatAdministrators
  | ChatPermissions
  | ChatMemberStatus
  | ChatMember
  | ChatMembers
  | ChatMembersFilter
  | SupergroupMembersFilter
  | BasicGroup
  | BasicGroupFullInfo
  | Supergroup
  | SupergroupFullInfo
  | SecretChatState
  | SecretChat
  | MessageForwardOrigin
  | MessageForwardInfo
  | MessageSendingState
  | Message
  | Messages
  | FoundMessages
  | NotificationSettingsScope
  | ChatNotificationSettings
  | ScopeNotificationSettings
  | DraftMessage
  | ChatType
  | ChatList
  | Chat
  | Chats
  | ChatNearby
  | ChatsNearby
  | ChatInviteLink
  | ChatInviteLinkInfo
  | PublicChatType
  | ChatActionBar
  | KeyboardButtonType
  | KeyboardButton
  | InlineKeyboardButtonType
  | InlineKeyboardButton
  | ReplyMarkup
  | LoginUrlInfo
  | RichText
  | PageBlockCaption
  | PageBlockListItem
  | PageBlockHorizontalAlignment
  | PageBlockVerticalAlignment
  | PageBlockTableCell
  | PageBlockRelatedArticle
  | PageBlock
  | WebPageInstantView
  | WebPage
  | Address
  | LabeledPricePart
  | Invoice
  | OrderInfo
  | ShippingOption
  | SavedCredentials
  | InputCredentials
  | PaymentsProviderStripe
  | PaymentForm
  | ValidatedOrderInfo
  | PaymentResult
  | PaymentReceipt
  | DatedFile
  | PassportElementType
  | Date
  | PersonalDetails
  | IdentityDocument
  | InputIdentityDocument
  | PersonalDocument
  | InputPersonalDocument
  | PassportElement
  | InputPassportElement
  | PassportElements
  | PassportElementErrorSource
  | PassportElementError
  | PassportSuitableElement
  | PassportRequiredElement
  | PassportAuthorizationForm
  | PassportElementsWithErrors
  | EncryptedCredentials
  | EncryptedPassportElement
  | InputPassportElementErrorSource
  | InputPassportElementError
  | MessageContent
  | TextEntityType
  | InputThumbnail
  | MessageSchedulingState
  | SendMessageOptions
  | InputMessageContent
  | SearchMessagesFilter
  | ChatAction
  | UserStatus
  | Stickers
  | Emojis
  | StickerSet
  | StickerSetInfo
  | StickerSets
  | CallDiscardReason
  | CallProtocol
  | CallConnection
  | CallId
  | CallState
  | CallProblem
  | Call
  | PhoneNumberAuthenticationSettings
  | Animations
  | ImportedContacts
  | HttpUrl
  | InputInlineQueryResult
  | InlineQueryResult
  | InlineQueryResults
  | CallbackQueryPayload
  | CallbackQueryAnswer
  | CustomRequestResult
  | GameHighScore
  | GameHighScores
  | ChatEventAction
  | ChatEvent
  | ChatEvents
  | ChatEventLogFilters
  | LanguagePackStringValue
  | LanguagePackString
  | LanguagePackStrings
  | LanguagePackInfo
  | LocalizationTargetInfo
  | DeviceToken
  | PushReceiverId
  | BackgroundFill
  | BackgroundType
  | Background
  | Backgrounds
  | InputBackground
  | Hashtags
  | CanTransferOwnershipResult
  | CheckChatUsernameResult
  | PushMessageContent
  | NotificationType
  | NotificationGroupType
  | Notification
  | NotificationGroup
  | OptionValue
  | JsonObjectMember
  | JsonValue
  | UserPrivacySettingRule
  | UserPrivacySettingRules
  | UserPrivacySetting
  | AccountTtl
  | Session
  | Sessions
  | ConnectedWebsite
  | ConnectedWebsites
  | ChatReportReason
  | PublicMessageLink
  | MessageLinkInfo
  | FilePart
  | FileType
  | StorageStatisticsByFileType
  | StorageStatisticsByChat
  | StorageStatistics
  | StorageStatisticsFast
  | DatabaseStatistics
  | NetworkType
  | NetworkStatisticsEntry
  | NetworkStatistics
  | AutoDownloadSettings
  | AutoDownloadSettingsPresets
  | ConnectionState
  | TopChatCategory
  | TMeUrlType
  | TMeUrl
  | TMeUrls
  | Count
  | Text
  | Seconds
  | DeepLinkInfo
  | TextParseMode
  | ProxyType
  | Proxy
  | Proxies
  | InputSticker
  | Update
  | Updates
  | LogStream
  | LogVerbosityLevel
  | LogTags
  | TestInt
  | TestString
  | TestBytes
  | TestVectorInt
  | TestVectorIntObject
  | TestVectorString
  | TestVectorStringObject

export type TDObject$Input =
  | Error$Input
  | Ok$Input
  | TdlibParameters$Input
  | AuthenticationCodeType$Input
  | AuthenticationCodeInfo$Input
  | EmailAddressAuthenticationCodeInfo$Input
  | TextEntity$Input
  | TextEntities$Input
  | FormattedText$Input
  | TermsOfService$Input
  | AuthorizationState$Input
  | PasswordState$Input
  | RecoveryEmailAddress$Input
  | TemporaryPasswordState$Input
  | LocalFile$Input
  | RemoteFile$Input
  | File$Input
  | InputFile$Input
  | PhotoSize$Input
  | Minithumbnail$Input
  | MaskPoint$Input
  | MaskPosition$Input
  | PollOption$Input
  | PollType$Input
  | Animation$Input
  | Audio$Input
  | Document$Input
  | Photo$Input
  | Sticker$Input
  | Video$Input
  | VideoNote$Input
  | VoiceNote$Input
  | Contact$Input
  | Location$Input
  | Venue$Input
  | Game$Input
  | Poll$Input
  | ProfilePhoto$Input
  | ChatPhoto$Input
  | UserType$Input
  | BotCommand$Input
  | BotInfo$Input
  | ChatLocation$Input
  | User$Input
  | UserFullInfo$Input
  | UserProfilePhoto$Input
  | UserProfilePhotos$Input
  | Users$Input
  | ChatAdministrator$Input
  | ChatAdministrators$Input
  | ChatPermissions$Input
  | ChatMemberStatus$Input
  | ChatMember$Input
  | ChatMembers$Input
  | ChatMembersFilter$Input
  | SupergroupMembersFilter$Input
  | BasicGroup$Input
  | BasicGroupFullInfo$Input
  | Supergroup$Input
  | SupergroupFullInfo$Input
  | SecretChatState$Input
  | SecretChat$Input
  | MessageForwardOrigin$Input
  | MessageForwardInfo$Input
  | MessageSendingState$Input
  | Message$Input
  | Messages$Input
  | FoundMessages$Input
  | NotificationSettingsScope$Input
  | ChatNotificationSettings$Input
  | ScopeNotificationSettings$Input
  | DraftMessage$Input
  | ChatType$Input
  | ChatList$Input
  | Chat$Input
  | Chats$Input
  | ChatNearby$Input
  | ChatsNearby$Input
  | ChatInviteLink$Input
  | ChatInviteLinkInfo$Input
  | PublicChatType$Input
  | ChatActionBar$Input
  | KeyboardButtonType$Input
  | KeyboardButton$Input
  | InlineKeyboardButtonType$Input
  | InlineKeyboardButton$Input
  | ReplyMarkup$Input
  | LoginUrlInfo$Input
  | RichText$Input
  | PageBlockCaption$Input
  | PageBlockListItem$Input
  | PageBlockHorizontalAlignment$Input
  | PageBlockVerticalAlignment$Input
  | PageBlockTableCell$Input
  | PageBlockRelatedArticle$Input
  | PageBlock$Input
  | WebPageInstantView$Input
  | WebPage$Input
  | Address$Input
  | LabeledPricePart$Input
  | Invoice$Input
  | OrderInfo$Input
  | ShippingOption$Input
  | SavedCredentials$Input
  | InputCredentials$Input
  | PaymentsProviderStripe$Input
  | PaymentForm$Input
  | ValidatedOrderInfo$Input
  | PaymentResult$Input
  | PaymentReceipt$Input
  | DatedFile$Input
  | PassportElementType$Input
  | Date$Input
  | PersonalDetails$Input
  | IdentityDocument$Input
  | InputIdentityDocument$Input
  | PersonalDocument$Input
  | InputPersonalDocument$Input
  | PassportElement$Input
  | InputPassportElement$Input
  | PassportElements$Input
  | PassportElementErrorSource$Input
  | PassportElementError$Input
  | PassportSuitableElement$Input
  | PassportRequiredElement$Input
  | PassportAuthorizationForm$Input
  | PassportElementsWithErrors$Input
  | EncryptedCredentials$Input
  | EncryptedPassportElement$Input
  | InputPassportElementErrorSource$Input
  | InputPassportElementError$Input
  | MessageContent$Input
  | TextEntityType$Input
  | InputThumbnail$Input
  | MessageSchedulingState$Input
  | SendMessageOptions$Input
  | InputMessageContent$Input
  | SearchMessagesFilter$Input
  | ChatAction$Input
  | UserStatus$Input
  | Stickers$Input
  | Emojis$Input
  | StickerSet$Input
  | StickerSetInfo$Input
  | StickerSets$Input
  | CallDiscardReason$Input
  | CallProtocol$Input
  | CallConnection$Input
  | CallId$Input
  | CallState$Input
  | CallProblem$Input
  | Call$Input
  | PhoneNumberAuthenticationSettings$Input
  | Animations$Input
  | ImportedContacts$Input
  | HttpUrl$Input
  | InputInlineQueryResult$Input
  | InlineQueryResult$Input
  | InlineQueryResults$Input
  | CallbackQueryPayload$Input
  | CallbackQueryAnswer$Input
  | CustomRequestResult$Input
  | GameHighScore$Input
  | GameHighScores$Input
  | ChatEventAction$Input
  | ChatEvent$Input
  | ChatEvents$Input
  | ChatEventLogFilters$Input
  | LanguagePackStringValue$Input
  | LanguagePackString$Input
  | LanguagePackStrings$Input
  | LanguagePackInfo$Input
  | LocalizationTargetInfo$Input
  | DeviceToken$Input
  | PushReceiverId$Input
  | BackgroundFill$Input
  | BackgroundType$Input
  | Background$Input
  | Backgrounds$Input
  | InputBackground$Input
  | Hashtags$Input
  | CanTransferOwnershipResult$Input
  | CheckChatUsernameResult$Input
  | PushMessageContent$Input
  | NotificationType$Input
  | NotificationGroupType$Input
  | Notification$Input
  | NotificationGroup$Input
  | OptionValue$Input
  | JsonObjectMember$Input
  | JsonValue$Input
  | UserPrivacySettingRule$Input
  | UserPrivacySettingRules$Input
  | UserPrivacySetting$Input
  | AccountTtl$Input
  | Session$Input
  | Sessions$Input
  | ConnectedWebsite$Input
  | ConnectedWebsites$Input
  | ChatReportReason$Input
  | PublicMessageLink$Input
  | MessageLinkInfo$Input
  | FilePart$Input
  | FileType$Input
  | StorageStatisticsByFileType$Input
  | StorageStatisticsByChat$Input
  | StorageStatistics$Input
  | StorageStatisticsFast$Input
  | DatabaseStatistics$Input
  | NetworkType$Input
  | NetworkStatisticsEntry$Input
  | NetworkStatistics$Input
  | AutoDownloadSettings$Input
  | AutoDownloadSettingsPresets$Input
  | ConnectionState$Input
  | TopChatCategory$Input
  | TMeUrlType$Input
  | TMeUrl$Input
  | TMeUrls$Input
  | Count$Input
  | Text$Input
  | Seconds$Input
  | DeepLinkInfo$Input
  | TextParseMode$Input
  | ProxyType$Input
  | Proxy$Input
  | Proxies$Input
  | InputSticker$Input
  | Update$Input
  | Updates$Input
  | LogStream$Input
  | LogVerbosityLevel$Input
  | LogTags$Input
  | TestInt$Input
  | TestString$Input
  | TestBytes$Input
  | TestVectorInt$Input
  | TestVectorIntObject$Input
  | TestVectorString$Input
  | TestVectorStringObject$Input

// ----

export type Invoke =
  & ((query: getAuthorizationState) => Promise<AuthorizationState>)
  & ((query: setTdlibParameters) => Promise<Ok>)
  & ((query: checkDatabaseEncryptionKey) => Promise<Ok>)
  & ((query: setAuthenticationPhoneNumber) => Promise<Ok>)
  & ((query: resendAuthenticationCode) => Promise<Ok>)
  & ((query: checkAuthenticationCode) => Promise<Ok>)
  & ((query: requestQrCodeAuthentication) => Promise<Ok>)
  & ((query: registerUser) => Promise<Ok>)
  & ((query: checkAuthenticationPassword) => Promise<Ok>)
  & ((query: requestAuthenticationPasswordRecovery) => Promise<Ok>)
  & ((query: recoverAuthenticationPassword) => Promise<Ok>)
  & ((query: checkAuthenticationBotToken) => Promise<Ok>)
  & ((query: logOut) => Promise<Ok>)
  & ((query: close) => Promise<Ok>)
  & ((query: destroy) => Promise<Ok>)
  & ((query: confirmQrCodeAuthentication) => Promise<Session>)
  & ((query: getCurrentState) => Promise<Updates>)
  & ((query: setDatabaseEncryptionKey) => Promise<Ok>)
  & ((query: getPasswordState) => Promise<PasswordState>)
  & ((query: setPassword) => Promise<PasswordState>)
  & ((query: getRecoveryEmailAddress) => Promise<RecoveryEmailAddress>)
  & ((query: setRecoveryEmailAddress) => Promise<PasswordState>)
  & ((query: checkRecoveryEmailAddressCode) => Promise<PasswordState>)
  & ((query: resendRecoveryEmailAddressCode) => Promise<PasswordState>)
  & ((query: requestPasswordRecovery) => Promise<EmailAddressAuthenticationCodeInfo>)
  & ((query: recoverPassword) => Promise<PasswordState>)
  & ((query: createTemporaryPassword) => Promise<TemporaryPasswordState>)
  & ((query: getTemporaryPasswordState) => Promise<TemporaryPasswordState>)
  & ((query: getMe) => Promise<User>)
  & ((query: getUser) => Promise<User>)
  & ((query: getUserFullInfo) => Promise<UserFullInfo>)
  & ((query: getBasicGroup) => Promise<BasicGroup>)
  & ((query: getBasicGroupFullInfo) => Promise<BasicGroupFullInfo>)
  & ((query: getSupergroup) => Promise<Supergroup>)
  & ((query: getSupergroupFullInfo) => Promise<SupergroupFullInfo>)
  & ((query: getSecretChat) => Promise<SecretChat>)
  & ((query: getChat) => Promise<Chat>)
  & ((query: getMessage) => Promise<Message>)
  & ((query: getMessageLocally) => Promise<Message>)
  & ((query: getRepliedMessage) => Promise<Message>)
  & ((query: getChatPinnedMessage) => Promise<Message>)
  & ((query: getMessages) => Promise<Messages>)
  & ((query: getFile) => Promise<File>)
  & ((query: getRemoteFile) => Promise<File>)
  & ((query: getChats) => Promise<Chats>)
  & ((query: searchPublicChat) => Promise<Chat>)
  & ((query: searchPublicChats) => Promise<Chats>)
  & ((query: searchChats) => Promise<Chats>)
  & ((query: searchChatsOnServer) => Promise<Chats>)
  & ((query: searchChatsNearby) => Promise<ChatsNearby>)
  & ((query: getTopChats) => Promise<Chats>)
  & ((query: removeTopChat) => Promise<Ok>)
  & ((query: addRecentlyFoundChat) => Promise<Ok>)
  & ((query: removeRecentlyFoundChat) => Promise<Ok>)
  & ((query: clearRecentlyFoundChats) => Promise<Ok>)
  & ((query: checkChatUsername) => Promise<CheckChatUsernameResult>)
  & ((query: getCreatedPublicChats) => Promise<Chats>)
  & ((query: checkCreatedPublicChatsLimit) => Promise<Ok>)
  & ((query: getSuitableDiscussionChats) => Promise<Chats>)
  & ((query: getInactiveSupergroupChats) => Promise<Chats>)
  & ((query: getGroupsInCommon) => Promise<Chats>)
  & ((query: getChatHistory) => Promise<Messages>)
  & ((query: deleteChatHistory) => Promise<Ok>)
  & ((query: searchChatMessages) => Promise<Messages>)
  & ((query: searchMessages) => Promise<Messages>)
  & ((query: searchSecretMessages) => Promise<FoundMessages>)
  & ((query: searchCallMessages) => Promise<Messages>)
  & ((query: searchChatRecentLocationMessages) => Promise<Messages>)
  & ((query: getActiveLiveLocationMessages) => Promise<Messages>)
  & ((query: getChatMessageByDate) => Promise<Message>)
  & ((query: getChatMessageCount) => Promise<Count>)
  & ((query: getChatScheduledMessages) => Promise<Messages>)
  & ((query: removeNotification) => Promise<Ok>)
  & ((query: removeNotificationGroup) => Promise<Ok>)
  & ((query: getPublicMessageLink) => Promise<PublicMessageLink>)
  & ((query: getMessageLink) => Promise<HttpUrl>)
  & ((query: getMessageLinkInfo) => Promise<MessageLinkInfo>)
  & ((query: sendMessage) => Promise<Message>)
  & ((query: sendMessageAlbum) => Promise<Messages>)
  & ((query: sendBotStartMessage) => Promise<Message>)
  & ((query: sendInlineQueryResultMessage) => Promise<Message>)
  & ((query: forwardMessages) => Promise<Messages>)
  & ((query: resendMessages) => Promise<Messages>)
  & ((query: sendChatSetTtlMessage) => Promise<Message>)
  & ((query: sendChatScreenshotTakenNotification) => Promise<Ok>)
  & ((query: addLocalMessage) => Promise<Message>)
  & ((query: deleteMessages) => Promise<Ok>)
  & ((query: deleteChatMessagesFromUser) => Promise<Ok>)
  & ((query: editMessageText) => Promise<Message>)
  & ((query: editMessageLiveLocation) => Promise<Message>)
  & ((query: editMessageMedia) => Promise<Message>)
  & ((query: editMessageCaption) => Promise<Message>)
  & ((query: editMessageReplyMarkup) => Promise<Message>)
  & ((query: editInlineMessageText) => Promise<Ok>)
  & ((query: editInlineMessageLiveLocation) => Promise<Ok>)
  & ((query: editInlineMessageMedia) => Promise<Ok>)
  & ((query: editInlineMessageCaption) => Promise<Ok>)
  & ((query: editInlineMessageReplyMarkup) => Promise<Ok>)
  & ((query: editMessageSchedulingState) => Promise<Ok>)
  & ((query: getTextEntities) => Promise<TextEntities>)
  & ((query: parseTextEntities) => Promise<FormattedText>)
  & ((query: getFileMimeType) => Promise<Text>)
  & ((query: getFileExtension) => Promise<Text>)
  & ((query: cleanFileName) => Promise<Text>)
  & ((query: getLanguagePackString) => Promise<LanguagePackStringValue>)
  & ((query: getJsonValue) => Promise<JsonValue>)
  & ((query: getJsonString) => Promise<Text>)
  & ((query: setPollAnswer) => Promise<Ok>)
  & ((query: getPollVoters) => Promise<Users>)
  & ((query: stopPoll) => Promise<Ok>)
  & ((query: getLoginUrlInfo) => Promise<LoginUrlInfo>)
  & ((query: getLoginUrl) => Promise<HttpUrl>)
  & ((query: getInlineQueryResults) => Promise<InlineQueryResults>)
  & ((query: answerInlineQuery) => Promise<Ok>)
  & ((query: getCallbackQueryAnswer) => Promise<CallbackQueryAnswer>)
  & ((query: answerCallbackQuery) => Promise<Ok>)
  & ((query: answerShippingQuery) => Promise<Ok>)
  & ((query: answerPreCheckoutQuery) => Promise<Ok>)
  & ((query: setGameScore) => Promise<Message>)
  & ((query: setInlineGameScore) => Promise<Ok>)
  & ((query: getGameHighScores) => Promise<GameHighScores>)
  & ((query: getInlineGameHighScores) => Promise<GameHighScores>)
  & ((query: deleteChatReplyMarkup) => Promise<Ok>)
  & ((query: sendChatAction) => Promise<Ok>)
  & ((query: openChat) => Promise<Ok>)
  & ((query: closeChat) => Promise<Ok>)
  & ((query: viewMessages) => Promise<Ok>)
  & ((query: openMessageContent) => Promise<Ok>)
  & ((query: readAllChatMentions) => Promise<Ok>)
  & ((query: createPrivateChat) => Promise<Chat>)
  & ((query: createBasicGroupChat) => Promise<Chat>)
  & ((query: createSupergroupChat) => Promise<Chat>)
  & ((query: createSecretChat) => Promise<Chat>)
  & ((query: createNewBasicGroupChat) => Promise<Chat>)
  & ((query: createNewSupergroupChat) => Promise<Chat>)
  & ((query: createNewSecretChat) => Promise<Chat>)
  & ((query: upgradeBasicGroupChatToSupergroupChat) => Promise<Chat>)
  & ((query: setChatChatList) => Promise<Ok>)
  & ((query: setChatTitle) => Promise<Ok>)
  & ((query: setChatPhoto) => Promise<Ok>)
  & ((query: setChatPermissions) => Promise<Ok>)
  & ((query: setChatDraftMessage) => Promise<Ok>)
  & ((query: setChatNotificationSettings) => Promise<Ok>)
  & ((query: toggleChatIsPinned) => Promise<Ok>)
  & ((query: toggleChatIsMarkedAsUnread) => Promise<Ok>)
  & ((query: toggleChatDefaultDisableNotification) => Promise<Ok>)
  & ((query: setChatClientData) => Promise<Ok>)
  & ((query: setChatDescription) => Promise<Ok>)
  & ((query: setChatDiscussionGroup) => Promise<Ok>)
  & ((query: setChatLocation) => Promise<Ok>)
  & ((query: setChatSlowModeDelay) => Promise<Ok>)
  & ((query: pinChatMessage) => Promise<Ok>)
  & ((query: unpinChatMessage) => Promise<Ok>)
  & ((query: joinChat) => Promise<Ok>)
  & ((query: leaveChat) => Promise<Ok>)
  & ((query: addChatMember) => Promise<Ok>)
  & ((query: addChatMembers) => Promise<Ok>)
  & ((query: setChatMemberStatus) => Promise<Ok>)
  & ((query: canTransferOwnership) => Promise<CanTransferOwnershipResult>)
  & ((query: transferChatOwnership) => Promise<Ok>)
  & ((query: getChatMember) => Promise<ChatMember>)
  & ((query: searchChatMembers) => Promise<ChatMembers>)
  & ((query: getChatAdministrators) => Promise<ChatAdministrators>)
  & ((query: clearAllDraftMessages) => Promise<Ok>)
  & ((query: getChatNotificationSettingsExceptions) => Promise<Chats>)
  & ((query: getScopeNotificationSettings) => Promise<ScopeNotificationSettings>)
  & ((query: setScopeNotificationSettings) => Promise<Ok>)
  & ((query: resetAllNotificationSettings) => Promise<Ok>)
  & ((query: setPinnedChats) => Promise<Ok>)
  & ((query: downloadFile) => Promise<File>)
  & ((query: getFileDownloadedPrefixSize) => Promise<Count>)
  & ((query: cancelDownloadFile) => Promise<Ok>)
  & ((query: uploadFile) => Promise<File>)
  & ((query: cancelUploadFile) => Promise<Ok>)
  & ((query: writeGeneratedFilePart) => Promise<Ok>)
  & ((query: setFileGenerationProgress) => Promise<Ok>)
  & ((query: finishFileGeneration) => Promise<Ok>)
  & ((query: readFilePart) => Promise<FilePart>)
  & ((query: deleteFile) => Promise<Ok>)
  & ((query: generateChatInviteLink) => Promise<ChatInviteLink>)
  & ((query: checkChatInviteLink) => Promise<ChatInviteLinkInfo>)
  & ((query: joinChatByInviteLink) => Promise<Chat>)
  & ((query: createCall) => Promise<CallId>)
  & ((query: acceptCall) => Promise<Ok>)
  & ((query: discardCall) => Promise<Ok>)
  & ((query: sendCallRating) => Promise<Ok>)
  & ((query: sendCallDebugInformation) => Promise<Ok>)
  & ((query: blockUser) => Promise<Ok>)
  & ((query: unblockUser) => Promise<Ok>)
  & ((query: getBlockedUsers) => Promise<Users>)
  & ((query: addContact) => Promise<Ok>)
  & ((query: importContacts) => Promise<ImportedContacts>)
  & ((query: getContacts) => Promise<Users>)
  & ((query: searchContacts) => Promise<Users>)
  & ((query: removeContacts) => Promise<Ok>)
  & ((query: getImportedContactCount) => Promise<Count>)
  & ((query: changeImportedContacts) => Promise<ImportedContacts>)
  & ((query: clearImportedContacts) => Promise<Ok>)
  & ((query: sharePhoneNumber) => Promise<Ok>)
  & ((query: getUserProfilePhotos) => Promise<UserProfilePhotos>)
  & ((query: getStickers) => Promise<Stickers>)
  & ((query: searchStickers) => Promise<Stickers>)
  & ((query: getInstalledStickerSets) => Promise<StickerSets>)
  & ((query: getArchivedStickerSets) => Promise<StickerSets>)
  & ((query: getTrendingStickerSets) => Promise<StickerSets>)
  & ((query: getAttachedStickerSets) => Promise<StickerSets>)
  & ((query: getStickerSet) => Promise<StickerSet>)
  & ((query: searchStickerSet) => Promise<StickerSet>)
  & ((query: searchInstalledStickerSets) => Promise<StickerSets>)
  & ((query: searchStickerSets) => Promise<StickerSets>)
  & ((query: changeStickerSet) => Promise<Ok>)
  & ((query: viewTrendingStickerSets) => Promise<Ok>)
  & ((query: reorderInstalledStickerSets) => Promise<Ok>)
  & ((query: getRecentStickers) => Promise<Stickers>)
  & ((query: addRecentSticker) => Promise<Stickers>)
  & ((query: removeRecentSticker) => Promise<Ok>)
  & ((query: clearRecentStickers) => Promise<Ok>)
  & ((query: getFavoriteStickers) => Promise<Stickers>)
  & ((query: addFavoriteSticker) => Promise<Ok>)
  & ((query: removeFavoriteSticker) => Promise<Ok>)
  & ((query: getStickerEmojis) => Promise<Emojis>)
  & ((query: searchEmojis) => Promise<Emojis>)
  & ((query: getEmojiSuggestionsUrl) => Promise<HttpUrl>)
  & ((query: getSavedAnimations) => Promise<Animations>)
  & ((query: addSavedAnimation) => Promise<Ok>)
  & ((query: removeSavedAnimation) => Promise<Ok>)
  & ((query: getRecentInlineBots) => Promise<Users>)
  & ((query: searchHashtags) => Promise<Hashtags>)
  & ((query: removeRecentHashtag) => Promise<Ok>)
  & ((query: getWebPagePreview) => Promise<WebPage>)
  & ((query: getWebPageInstantView) => Promise<WebPageInstantView>)
  & ((query: setProfilePhoto) => Promise<Ok>)
  & ((query: deleteProfilePhoto) => Promise<Ok>)
  & ((query: setName) => Promise<Ok>)
  & ((query: setBio) => Promise<Ok>)
  & ((query: setUsername) => Promise<Ok>)
  & ((query: changePhoneNumber) => Promise<AuthenticationCodeInfo>)
  & ((query: resendChangePhoneNumberCode) => Promise<AuthenticationCodeInfo>)
  & ((query: checkChangePhoneNumberCode) => Promise<Ok>)
  & ((query: getActiveSessions) => Promise<Sessions>)
  & ((query: terminateSession) => Promise<Ok>)
  & ((query: terminateAllOtherSessions) => Promise<Ok>)
  & ((query: getConnectedWebsites) => Promise<ConnectedWebsites>)
  & ((query: disconnectWebsite) => Promise<Ok>)
  & ((query: disconnectAllWebsites) => Promise<Ok>)
  & ((query: setSupergroupUsername) => Promise<Ok>)
  & ((query: setSupergroupStickerSet) => Promise<Ok>)
  & ((query: toggleSupergroupSignMessages) => Promise<Ok>)
  & ((query: toggleSupergroupIsAllHistoryAvailable) => Promise<Ok>)
  & ((query: reportSupergroupSpam) => Promise<Ok>)
  & ((query: getSupergroupMembers) => Promise<ChatMembers>)
  & ((query: deleteSupergroup) => Promise<Ok>)
  & ((query: closeSecretChat) => Promise<Ok>)
  & ((query: getChatEventLog) => Promise<ChatEvents>)
  & ((query: getPaymentForm) => Promise<PaymentForm>)
  & ((query: validateOrderInfo) => Promise<ValidatedOrderInfo>)
  & ((query: sendPaymentForm) => Promise<PaymentResult>)
  & ((query: getPaymentReceipt) => Promise<PaymentReceipt>)
  & ((query: getSavedOrderInfo) => Promise<OrderInfo>)
  & ((query: deleteSavedOrderInfo) => Promise<Ok>)
  & ((query: deleteSavedCredentials) => Promise<Ok>)
  & ((query: getSupportUser) => Promise<User>)
  & ((query: getBackgrounds) => Promise<Backgrounds>)
  & ((query: getBackgroundUrl) => Promise<HttpUrl>)
  & ((query: searchBackground) => Promise<Background>)
  & ((query: setBackground) => Promise<Background>)
  & ((query: removeBackground) => Promise<Ok>)
  & ((query: resetBackgrounds) => Promise<Ok>)
  & ((query: getLocalizationTargetInfo) => Promise<LocalizationTargetInfo>)
  & ((query: getLanguagePackInfo) => Promise<LanguagePackInfo>)
  & ((query: getLanguagePackStrings) => Promise<LanguagePackStrings>)
  & ((query: synchronizeLanguagePack) => Promise<Ok>)
  & ((query: addCustomServerLanguagePack) => Promise<Ok>)
  & ((query: setCustomLanguagePack) => Promise<Ok>)
  & ((query: editCustomLanguagePackInfo) => Promise<Ok>)
  & ((query: setCustomLanguagePackString) => Promise<Ok>)
  & ((query: deleteLanguagePack) => Promise<Ok>)
  & ((query: registerDevice) => Promise<PushReceiverId>)
  & ((query: processPushNotification) => Promise<Ok>)
  & ((query: getPushReceiverId) => Promise<PushReceiverId>)
  & ((query: getRecentlyVisitedTMeUrls) => Promise<TMeUrls>)
  & ((query: setUserPrivacySettingRules) => Promise<Ok>)
  & ((query: getUserPrivacySettingRules) => Promise<UserPrivacySettingRules>)
  & ((query: getOption) => Promise<OptionValue>)
  & ((query: setOption) => Promise<Ok>)
  & ((query: setAccountTtl) => Promise<Ok>)
  & ((query: getAccountTtl) => Promise<AccountTtl>)
  & ((query: deleteAccount) => Promise<Ok>)
  & ((query: removeChatActionBar) => Promise<Ok>)
  & ((query: reportChat) => Promise<Ok>)
  & ((query: getChatStatisticsUrl) => Promise<HttpUrl>)
  & ((query: getStorageStatistics) => Promise<StorageStatistics>)
  & ((query: getStorageStatisticsFast) => Promise<StorageStatisticsFast>)
  & ((query: getDatabaseStatistics) => Promise<DatabaseStatistics>)
  & ((query: optimizeStorage) => Promise<StorageStatistics>)
  & ((query: setNetworkType) => Promise<Ok>)
  & ((query: getNetworkStatistics) => Promise<NetworkStatistics>)
  & ((query: addNetworkStatistics) => Promise<Ok>)
  & ((query: resetNetworkStatistics) => Promise<Ok>)
  & ((query: getAutoDownloadSettingsPresets) => Promise<AutoDownloadSettingsPresets>)
  & ((query: setAutoDownloadSettings) => Promise<Ok>)
  & ((query: getPassportElement) => Promise<PassportElement>)
  & ((query: getAllPassportElements) => Promise<PassportElements>)
  & ((query: setPassportElement) => Promise<PassportElement>)
  & ((query: deletePassportElement) => Promise<Ok>)
  & ((query: setPassportElementErrors) => Promise<Ok>)
  & ((query: getPreferredCountryLanguage) => Promise<Text>)
  & ((query: sendPhoneNumberVerificationCode) => Promise<AuthenticationCodeInfo>)
  & ((query: resendPhoneNumberVerificationCode) => Promise<AuthenticationCodeInfo>)
  & ((query: checkPhoneNumberVerificationCode) => Promise<Ok>)
  & ((query: sendEmailAddressVerificationCode) => Promise<EmailAddressAuthenticationCodeInfo>)
  & ((query: resendEmailAddressVerificationCode) => Promise<EmailAddressAuthenticationCodeInfo>)
  & ((query: checkEmailAddressVerificationCode) => Promise<Ok>)
  & ((query: getPassportAuthorizationForm) => Promise<PassportAuthorizationForm>)
  & ((query: getPassportAuthorizationFormAvailableElements) => Promise<PassportElementsWithErrors>)
  & ((query: sendPassportAuthorizationForm) => Promise<Ok>)
  & ((query: sendPhoneNumberConfirmationCode) => Promise<AuthenticationCodeInfo>)
  & ((query: resendPhoneNumberConfirmationCode) => Promise<AuthenticationCodeInfo>)
  & ((query: checkPhoneNumberConfirmationCode) => Promise<Ok>)
  & ((query: setBotUpdatesStatus) => Promise<Ok>)
  & ((query: uploadStickerFile) => Promise<File>)
  & ((query: createNewStickerSet) => Promise<StickerSet>)
  & ((query: addStickerToSet) => Promise<StickerSet>)
  & ((query: setStickerPositionInSet) => Promise<Ok>)
  & ((query: removeStickerFromSet) => Promise<Ok>)
  & ((query: getMapThumbnailFile) => Promise<File>)
  & ((query: acceptTermsOfService) => Promise<Ok>)
  & ((query: sendCustomRequest) => Promise<CustomRequestResult>)
  & ((query: answerCustomQuery) => Promise<Ok>)
  & ((query: setAlarm) => Promise<Ok>)
  & ((query: getCountryCode) => Promise<Text>)
  & ((query: getInviteText) => Promise<Text>)
  & ((query: getDeepLinkInfo) => Promise<DeepLinkInfo>)
  & ((query: getApplicationConfig) => Promise<JsonValue>)
  & ((query: saveApplicationLogEvent) => Promise<Ok>)
  & ((query: addProxy) => Promise<Proxy>)
  & ((query: editProxy) => Promise<Proxy>)
  & ((query: enableProxy) => Promise<Ok>)
  & ((query: disableProxy) => Promise<Ok>)
  & ((query: removeProxy) => Promise<Ok>)
  & ((query: getProxies) => Promise<Proxies>)
  & ((query: getProxyLink) => Promise<Text>)
  & ((query: pingProxy) => Promise<Seconds>)
  & ((query: setLogStream) => Promise<Ok>)
  & ((query: getLogStream) => Promise<LogStream>)
  & ((query: setLogVerbosityLevel) => Promise<Ok>)
  & ((query: getLogVerbosityLevel) => Promise<LogVerbosityLevel>)
  & ((query: getLogTags) => Promise<LogTags>)
  & ((query: setLogTagVerbosityLevel) => Promise<Ok>)
  & ((query: getLogTagVerbosityLevel) => Promise<LogVerbosityLevel>)
  & ((query: addLogMessage) => Promise<Ok>)
  & ((query: testCallEmpty) => Promise<Ok>)
  & ((query: testCallString) => Promise<TestString>)
  & ((query: testCallBytes) => Promise<TestBytes>)
  & ((query: testCallVectorInt) => Promise<TestVectorInt>)
  & ((query: testCallVectorIntObject) => Promise<TestVectorIntObject>)
  & ((query: testCallVectorString) => Promise<TestVectorString>)
  & ((query: testCallVectorStringObject) => Promise<TestVectorStringObject>)
  & ((query: testSquareInt) => Promise<TestInt>)
  & ((query: testNetwork) => Promise<Ok>)
  & ((query: testProxy) => Promise<Ok>)
  & ((query: testGetDifference) => Promise<Ok>)
  & ((query: testUseUpdate) => Promise<Update>)
  & ((query: testReturnError) => Promise<Error>)

export type Execute =
  & ((query: getAuthorizationState) => AuthorizationState | error | null)
  & ((query: setTdlibParameters) => Ok | error | null)
  & ((query: checkDatabaseEncryptionKey) => Ok | error | null)
  & ((query: setAuthenticationPhoneNumber) => Ok | error | null)
  & ((query: resendAuthenticationCode) => Ok | error | null)
  & ((query: checkAuthenticationCode) => Ok | error | null)
  & ((query: requestQrCodeAuthentication) => Ok | error | null)
  & ((query: registerUser) => Ok | error | null)
  & ((query: checkAuthenticationPassword) => Ok | error | null)
  & ((query: requestAuthenticationPasswordRecovery) => Ok | error | null)
  & ((query: recoverAuthenticationPassword) => Ok | error | null)
  & ((query: checkAuthenticationBotToken) => Ok | error | null)
  & ((query: logOut) => Ok | error | null)
  & ((query: close) => Ok | error | null)
  & ((query: destroy) => Ok | error | null)
  & ((query: confirmQrCodeAuthentication) => Session | error | null)
  & ((query: getCurrentState) => Updates | error | null)
  & ((query: setDatabaseEncryptionKey) => Ok | error | null)
  & ((query: getPasswordState) => PasswordState | error | null)
  & ((query: setPassword) => PasswordState | error | null)
  & ((query: getRecoveryEmailAddress) => RecoveryEmailAddress | error | null)
  & ((query: setRecoveryEmailAddress) => PasswordState | error | null)
  & ((query: checkRecoveryEmailAddressCode) => PasswordState | error | null)
  & ((query: resendRecoveryEmailAddressCode) => PasswordState | error | null)
  & ((query: requestPasswordRecovery) => EmailAddressAuthenticationCodeInfo | error | null)
  & ((query: recoverPassword) => PasswordState | error | null)
  & ((query: createTemporaryPassword) => TemporaryPasswordState | error | null)
  & ((query: getTemporaryPasswordState) => TemporaryPasswordState | error | null)
  & ((query: getMe) => User | error | null)
  & ((query: getUser) => User | error | null)
  & ((query: getUserFullInfo) => UserFullInfo | error | null)
  & ((query: getBasicGroup) => BasicGroup | error | null)
  & ((query: getBasicGroupFullInfo) => BasicGroupFullInfo | error | null)
  & ((query: getSupergroup) => Supergroup | error | null)
  & ((query: getSupergroupFullInfo) => SupergroupFullInfo | error | null)
  & ((query: getSecretChat) => SecretChat | error | null)
  & ((query: getChat) => Chat | error | null)
  & ((query: getMessage) => Message | error | null)
  & ((query: getMessageLocally) => Message | error | null)
  & ((query: getRepliedMessage) => Message | error | null)
  & ((query: getChatPinnedMessage) => Message | error | null)
  & ((query: getMessages) => Messages | error | null)
  & ((query: getFile) => File | error | null)
  & ((query: getRemoteFile) => File | error | null)
  & ((query: getChats) => Chats | error | null)
  & ((query: searchPublicChat) => Chat | error | null)
  & ((query: searchPublicChats) => Chats | error | null)
  & ((query: searchChats) => Chats | error | null)
  & ((query: searchChatsOnServer) => Chats | error | null)
  & ((query: searchChatsNearby) => ChatsNearby | error | null)
  & ((query: getTopChats) => Chats | error | null)
  & ((query: removeTopChat) => Ok | error | null)
  & ((query: addRecentlyFoundChat) => Ok | error | null)
  & ((query: removeRecentlyFoundChat) => Ok | error | null)
  & ((query: clearRecentlyFoundChats) => Ok | error | null)
  & ((query: checkChatUsername) => CheckChatUsernameResult | error | null)
  & ((query: getCreatedPublicChats) => Chats | error | null)
  & ((query: checkCreatedPublicChatsLimit) => Ok | error | null)
  & ((query: getSuitableDiscussionChats) => Chats | error | null)
  & ((query: getInactiveSupergroupChats) => Chats | error | null)
  & ((query: getGroupsInCommon) => Chats | error | null)
  & ((query: getChatHistory) => Messages | error | null)
  & ((query: deleteChatHistory) => Ok | error | null)
  & ((query: searchChatMessages) => Messages | error | null)
  & ((query: searchMessages) => Messages | error | null)
  & ((query: searchSecretMessages) => FoundMessages | error | null)
  & ((query: searchCallMessages) => Messages | error | null)
  & ((query: searchChatRecentLocationMessages) => Messages | error | null)
  & ((query: getActiveLiveLocationMessages) => Messages | error | null)
  & ((query: getChatMessageByDate) => Message | error | null)
  & ((query: getChatMessageCount) => Count | error | null)
  & ((query: getChatScheduledMessages) => Messages | error | null)
  & ((query: removeNotification) => Ok | error | null)
  & ((query: removeNotificationGroup) => Ok | error | null)
  & ((query: getPublicMessageLink) => PublicMessageLink | error | null)
  & ((query: getMessageLink) => HttpUrl | error | null)
  & ((query: getMessageLinkInfo) => MessageLinkInfo | error | null)
  & ((query: sendMessage) => Message | error | null)
  & ((query: sendMessageAlbum) => Messages | error | null)
  & ((query: sendBotStartMessage) => Message | error | null)
  & ((query: sendInlineQueryResultMessage) => Message | error | null)
  & ((query: forwardMessages) => Messages | error | null)
  & ((query: resendMessages) => Messages | error | null)
  & ((query: sendChatSetTtlMessage) => Message | error | null)
  & ((query: sendChatScreenshotTakenNotification) => Ok | error | null)
  & ((query: addLocalMessage) => Message | error | null)
  & ((query: deleteMessages) => Ok | error | null)
  & ((query: deleteChatMessagesFromUser) => Ok | error | null)
  & ((query: editMessageText) => Message | error | null)
  & ((query: editMessageLiveLocation) => Message | error | null)
  & ((query: editMessageMedia) => Message | error | null)
  & ((query: editMessageCaption) => Message | error | null)
  & ((query: editMessageReplyMarkup) => Message | error | null)
  & ((query: editInlineMessageText) => Ok | error | null)
  & ((query: editInlineMessageLiveLocation) => Ok | error | null)
  & ((query: editInlineMessageMedia) => Ok | error | null)
  & ((query: editInlineMessageCaption) => Ok | error | null)
  & ((query: editInlineMessageReplyMarkup) => Ok | error | null)
  & ((query: editMessageSchedulingState) => Ok | error | null)
  & ((query: getTextEntities) => TextEntities | error | null)
  & ((query: parseTextEntities) => FormattedText | error | null)
  & ((query: getFileMimeType) => Text | error | null)
  & ((query: getFileExtension) => Text | error | null)
  & ((query: cleanFileName) => Text | error | null)
  & ((query: getLanguagePackString) => LanguagePackStringValue | error | null)
  & ((query: getJsonValue) => JsonValue | error | null)
  & ((query: getJsonString) => Text | error | null)
  & ((query: setPollAnswer) => Ok | error | null)
  & ((query: getPollVoters) => Users | error | null)
  & ((query: stopPoll) => Ok | error | null)
  & ((query: getLoginUrlInfo) => LoginUrlInfo | error | null)
  & ((query: getLoginUrl) => HttpUrl | error | null)
  & ((query: getInlineQueryResults) => InlineQueryResults | error | null)
  & ((query: answerInlineQuery) => Ok | error | null)
  & ((query: getCallbackQueryAnswer) => CallbackQueryAnswer | error | null)
  & ((query: answerCallbackQuery) => Ok | error | null)
  & ((query: answerShippingQuery) => Ok | error | null)
  & ((query: answerPreCheckoutQuery) => Ok | error | null)
  & ((query: setGameScore) => Message | error | null)
  & ((query: setInlineGameScore) => Ok | error | null)
  & ((query: getGameHighScores) => GameHighScores | error | null)
  & ((query: getInlineGameHighScores) => GameHighScores | error | null)
  & ((query: deleteChatReplyMarkup) => Ok | error | null)
  & ((query: sendChatAction) => Ok | error | null)
  & ((query: openChat) => Ok | error | null)
  & ((query: closeChat) => Ok | error | null)
  & ((query: viewMessages) => Ok | error | null)
  & ((query: openMessageContent) => Ok | error | null)
  & ((query: readAllChatMentions) => Ok | error | null)
  & ((query: createPrivateChat) => Chat | error | null)
  & ((query: createBasicGroupChat) => Chat | error | null)
  & ((query: createSupergroupChat) => Chat | error | null)
  & ((query: createSecretChat) => Chat | error | null)
  & ((query: createNewBasicGroupChat) => Chat | error | null)
  & ((query: createNewSupergroupChat) => Chat | error | null)
  & ((query: createNewSecretChat) => Chat | error | null)
  & ((query: upgradeBasicGroupChatToSupergroupChat) => Chat | error | null)
  & ((query: setChatChatList) => Ok | error | null)
  & ((query: setChatTitle) => Ok | error | null)
  & ((query: setChatPhoto) => Ok | error | null)
  & ((query: setChatPermissions) => Ok | error | null)
  & ((query: setChatDraftMessage) => Ok | error | null)
  & ((query: setChatNotificationSettings) => Ok | error | null)
  & ((query: toggleChatIsPinned) => Ok | error | null)
  & ((query: toggleChatIsMarkedAsUnread) => Ok | error | null)
  & ((query: toggleChatDefaultDisableNotification) => Ok | error | null)
  & ((query: setChatClientData) => Ok | error | null)
  & ((query: setChatDescription) => Ok | error | null)
  & ((query: setChatDiscussionGroup) => Ok | error | null)
  & ((query: setChatLocation) => Ok | error | null)
  & ((query: setChatSlowModeDelay) => Ok | error | null)
  & ((query: pinChatMessage) => Ok | error | null)
  & ((query: unpinChatMessage) => Ok | error | null)
  & ((query: joinChat) => Ok | error | null)
  & ((query: leaveChat) => Ok | error | null)
  & ((query: addChatMember) => Ok | error | null)
  & ((query: addChatMembers) => Ok | error | null)
  & ((query: setChatMemberStatus) => Ok | error | null)
  & ((query: canTransferOwnership) => CanTransferOwnershipResult | error | null)
  & ((query: transferChatOwnership) => Ok | error | null)
  & ((query: getChatMember) => ChatMember | error | null)
  & ((query: searchChatMembers) => ChatMembers | error | null)
  & ((query: getChatAdministrators) => ChatAdministrators | error | null)
  & ((query: clearAllDraftMessages) => Ok | error | null)
  & ((query: getChatNotificationSettingsExceptions) => Chats | error | null)
  & ((query: getScopeNotificationSettings) => ScopeNotificationSettings | error | null)
  & ((query: setScopeNotificationSettings) => Ok | error | null)
  & ((query: resetAllNotificationSettings) => Ok | error | null)
  & ((query: setPinnedChats) => Ok | error | null)
  & ((query: downloadFile) => File | error | null)
  & ((query: getFileDownloadedPrefixSize) => Count | error | null)
  & ((query: cancelDownloadFile) => Ok | error | null)
  & ((query: uploadFile) => File | error | null)
  & ((query: cancelUploadFile) => Ok | error | null)
  & ((query: writeGeneratedFilePart) => Ok | error | null)
  & ((query: setFileGenerationProgress) => Ok | error | null)
  & ((query: finishFileGeneration) => Ok | error | null)
  & ((query: readFilePart) => FilePart | error | null)
  & ((query: deleteFile) => Ok | error | null)
  & ((query: generateChatInviteLink) => ChatInviteLink | error | null)
  & ((query: checkChatInviteLink) => ChatInviteLinkInfo | error | null)
  & ((query: joinChatByInviteLink) => Chat | error | null)
  & ((query: createCall) => CallId | error | null)
  & ((query: acceptCall) => Ok | error | null)
  & ((query: discardCall) => Ok | error | null)
  & ((query: sendCallRating) => Ok | error | null)
  & ((query: sendCallDebugInformation) => Ok | error | null)
  & ((query: blockUser) => Ok | error | null)
  & ((query: unblockUser) => Ok | error | null)
  & ((query: getBlockedUsers) => Users | error | null)
  & ((query: addContact) => Ok | error | null)
  & ((query: importContacts) => ImportedContacts | error | null)
  & ((query: getContacts) => Users | error | null)
  & ((query: searchContacts) => Users | error | null)
  & ((query: removeContacts) => Ok | error | null)
  & ((query: getImportedContactCount) => Count | error | null)
  & ((query: changeImportedContacts) => ImportedContacts | error | null)
  & ((query: clearImportedContacts) => Ok | error | null)
  & ((query: sharePhoneNumber) => Ok | error | null)
  & ((query: getUserProfilePhotos) => UserProfilePhotos | error | null)
  & ((query: getStickers) => Stickers | error | null)
  & ((query: searchStickers) => Stickers | error | null)
  & ((query: getInstalledStickerSets) => StickerSets | error | null)
  & ((query: getArchivedStickerSets) => StickerSets | error | null)
  & ((query: getTrendingStickerSets) => StickerSets | error | null)
  & ((query: getAttachedStickerSets) => StickerSets | error | null)
  & ((query: getStickerSet) => StickerSet | error | null)
  & ((query: searchStickerSet) => StickerSet | error | null)
  & ((query: searchInstalledStickerSets) => StickerSets | error | null)
  & ((query: searchStickerSets) => StickerSets | error | null)
  & ((query: changeStickerSet) => Ok | error | null)
  & ((query: viewTrendingStickerSets) => Ok | error | null)
  & ((query: reorderInstalledStickerSets) => Ok | error | null)
  & ((query: getRecentStickers) => Stickers | error | null)
  & ((query: addRecentSticker) => Stickers | error | null)
  & ((query: removeRecentSticker) => Ok | error | null)
  & ((query: clearRecentStickers) => Ok | error | null)
  & ((query: getFavoriteStickers) => Stickers | error | null)
  & ((query: addFavoriteSticker) => Ok | error | null)
  & ((query: removeFavoriteSticker) => Ok | error | null)
  & ((query: getStickerEmojis) => Emojis | error | null)
  & ((query: searchEmojis) => Emojis | error | null)
  & ((query: getEmojiSuggestionsUrl) => HttpUrl | error | null)
  & ((query: getSavedAnimations) => Animations | error | null)
  & ((query: addSavedAnimation) => Ok | error | null)
  & ((query: removeSavedAnimation) => Ok | error | null)
  & ((query: getRecentInlineBots) => Users | error | null)
  & ((query: searchHashtags) => Hashtags | error | null)
  & ((query: removeRecentHashtag) => Ok | error | null)
  & ((query: getWebPagePreview) => WebPage | error | null)
  & ((query: getWebPageInstantView) => WebPageInstantView | error | null)
  & ((query: setProfilePhoto) => Ok | error | null)
  & ((query: deleteProfilePhoto) => Ok | error | null)
  & ((query: setName) => Ok | error | null)
  & ((query: setBio) => Ok | error | null)
  & ((query: setUsername) => Ok | error | null)
  & ((query: changePhoneNumber) => AuthenticationCodeInfo | error | null)
  & ((query: resendChangePhoneNumberCode) => AuthenticationCodeInfo | error | null)
  & ((query: checkChangePhoneNumberCode) => Ok | error | null)
  & ((query: getActiveSessions) => Sessions | error | null)
  & ((query: terminateSession) => Ok | error | null)
  & ((query: terminateAllOtherSessions) => Ok | error | null)
  & ((query: getConnectedWebsites) => ConnectedWebsites | error | null)
  & ((query: disconnectWebsite) => Ok | error | null)
  & ((query: disconnectAllWebsites) => Ok | error | null)
  & ((query: setSupergroupUsername) => Ok | error | null)
  & ((query: setSupergroupStickerSet) => Ok | error | null)
  & ((query: toggleSupergroupSignMessages) => Ok | error | null)
  & ((query: toggleSupergroupIsAllHistoryAvailable) => Ok | error | null)
  & ((query: reportSupergroupSpam) => Ok | error | null)
  & ((query: getSupergroupMembers) => ChatMembers | error | null)
  & ((query: deleteSupergroup) => Ok | error | null)
  & ((query: closeSecretChat) => Ok | error | null)
  & ((query: getChatEventLog) => ChatEvents | error | null)
  & ((query: getPaymentForm) => PaymentForm | error | null)
  & ((query: validateOrderInfo) => ValidatedOrderInfo | error | null)
  & ((query: sendPaymentForm) => PaymentResult | error | null)
  & ((query: getPaymentReceipt) => PaymentReceipt | error | null)
  & ((query: getSavedOrderInfo) => OrderInfo | error | null)
  & ((query: deleteSavedOrderInfo) => Ok | error | null)
  & ((query: deleteSavedCredentials) => Ok | error | null)
  & ((query: getSupportUser) => User | error | null)
  & ((query: getBackgrounds) => Backgrounds | error | null)
  & ((query: getBackgroundUrl) => HttpUrl | error | null)
  & ((query: searchBackground) => Background | error | null)
  & ((query: setBackground) => Background | error | null)
  & ((query: removeBackground) => Ok | error | null)
  & ((query: resetBackgrounds) => Ok | error | null)
  & ((query: getLocalizationTargetInfo) => LocalizationTargetInfo | error | null)
  & ((query: getLanguagePackInfo) => LanguagePackInfo | error | null)
  & ((query: getLanguagePackStrings) => LanguagePackStrings | error | null)
  & ((query: synchronizeLanguagePack) => Ok | error | null)
  & ((query: addCustomServerLanguagePack) => Ok | error | null)
  & ((query: setCustomLanguagePack) => Ok | error | null)
  & ((query: editCustomLanguagePackInfo) => Ok | error | null)
  & ((query: setCustomLanguagePackString) => Ok | error | null)
  & ((query: deleteLanguagePack) => Ok | error | null)
  & ((query: registerDevice) => PushReceiverId | error | null)
  & ((query: processPushNotification) => Ok | error | null)
  & ((query: getPushReceiverId) => PushReceiverId | error | null)
  & ((query: getRecentlyVisitedTMeUrls) => TMeUrls | error | null)
  & ((query: setUserPrivacySettingRules) => Ok | error | null)
  & ((query: getUserPrivacySettingRules) => UserPrivacySettingRules | error | null)
  & ((query: getOption) => OptionValue | error | null)
  & ((query: setOption) => Ok | error | null)
  & ((query: setAccountTtl) => Ok | error | null)
  & ((query: getAccountTtl) => AccountTtl | error | null)
  & ((query: deleteAccount) => Ok | error | null)
  & ((query: removeChatActionBar) => Ok | error | null)
  & ((query: reportChat) => Ok | error | null)
  & ((query: getChatStatisticsUrl) => HttpUrl | error | null)
  & ((query: getStorageStatistics) => StorageStatistics | error | null)
  & ((query: getStorageStatisticsFast) => StorageStatisticsFast | error | null)
  & ((query: getDatabaseStatistics) => DatabaseStatistics | error | null)
  & ((query: optimizeStorage) => StorageStatistics | error | null)
  & ((query: setNetworkType) => Ok | error | null)
  & ((query: getNetworkStatistics) => NetworkStatistics | error | null)
  & ((query: addNetworkStatistics) => Ok | error | null)
  & ((query: resetNetworkStatistics) => Ok | error | null)
  & ((query: getAutoDownloadSettingsPresets) => AutoDownloadSettingsPresets | error | null)
  & ((query: setAutoDownloadSettings) => Ok | error | null)
  & ((query: getPassportElement) => PassportElement | error | null)
  & ((query: getAllPassportElements) => PassportElements | error | null)
  & ((query: setPassportElement) => PassportElement | error | null)
  & ((query: deletePassportElement) => Ok | error | null)
  & ((query: setPassportElementErrors) => Ok | error | null)
  & ((query: getPreferredCountryLanguage) => Text | error | null)
  & ((query: sendPhoneNumberVerificationCode) => AuthenticationCodeInfo | error | null)
  & ((query: resendPhoneNumberVerificationCode) => AuthenticationCodeInfo | error | null)
  & ((query: checkPhoneNumberVerificationCode) => Ok | error | null)
  & ((query: sendEmailAddressVerificationCode) => EmailAddressAuthenticationCodeInfo | error | null)
  & ((query: resendEmailAddressVerificationCode) => EmailAddressAuthenticationCodeInfo | error | null)
  & ((query: checkEmailAddressVerificationCode) => Ok | error | null)
  & ((query: getPassportAuthorizationForm) => PassportAuthorizationForm | error | null)
  & ((query: getPassportAuthorizationFormAvailableElements) => PassportElementsWithErrors | error | null)
  & ((query: sendPassportAuthorizationForm) => Ok | error | null)
  & ((query: sendPhoneNumberConfirmationCode) => AuthenticationCodeInfo | error | null)
  & ((query: resendPhoneNumberConfirmationCode) => AuthenticationCodeInfo | error | null)
  & ((query: checkPhoneNumberConfirmationCode) => Ok | error | null)
  & ((query: setBotUpdatesStatus) => Ok | error | null)
  & ((query: uploadStickerFile) => File | error | null)
  & ((query: createNewStickerSet) => StickerSet | error | null)
  & ((query: addStickerToSet) => StickerSet | error | null)
  & ((query: setStickerPositionInSet) => Ok | error | null)
  & ((query: removeStickerFromSet) => Ok | error | null)
  & ((query: getMapThumbnailFile) => File | error | null)
  & ((query: acceptTermsOfService) => Ok | error | null)
  & ((query: sendCustomRequest) => CustomRequestResult | error | null)
  & ((query: answerCustomQuery) => Ok | error | null)
  & ((query: setAlarm) => Ok | error | null)
  & ((query: getCountryCode) => Text | error | null)
  & ((query: getInviteText) => Text | error | null)
  & ((query: getDeepLinkInfo) => DeepLinkInfo | error | null)
  & ((query: getApplicationConfig) => JsonValue | error | null)
  & ((query: saveApplicationLogEvent) => Ok | error | null)
  & ((query: addProxy) => Proxy | error | null)
  & ((query: editProxy) => Proxy | error | null)
  & ((query: enableProxy) => Ok | error | null)
  & ((query: disableProxy) => Ok | error | null)
  & ((query: removeProxy) => Ok | error | null)
  & ((query: getProxies) => Proxies | error | null)
  & ((query: getProxyLink) => Text | error | null)
  & ((query: pingProxy) => Seconds | error | null)
  & ((query: setLogStream) => Ok | error | null)
  & ((query: getLogStream) => LogStream | error | null)
  & ((query: setLogVerbosityLevel) => Ok | error | null)
  & ((query: getLogVerbosityLevel) => LogVerbosityLevel | error | null)
  & ((query: getLogTags) => LogTags | error | null)
  & ((query: setLogTagVerbosityLevel) => Ok | error | null)
  & ((query: getLogTagVerbosityLevel) => LogVerbosityLevel | error | null)
  & ((query: addLogMessage) => Ok | error | null)
  & ((query: testCallEmpty) => Ok | error | null)
  & ((query: testCallString) => TestString | error | null)
  & ((query: testCallBytes) => TestBytes | error | null)
  & ((query: testCallVectorInt) => TestVectorInt | error | null)
  & ((query: testCallVectorIntObject) => TestVectorIntObject | error | null)
  & ((query: testCallVectorString) => TestVectorString | error | null)
  & ((query: testCallVectorStringObject) => TestVectorStringObject | error | null)
  & ((query: testSquareInt) => TestInt | error | null)
  & ((query: testNetwork) => Ok | error | null)
  & ((query: testProxy) => Ok | error | null)
  & ((query: testGetDifference) => Ok | error | null)
  & ((query: testUseUpdate) => Update | error | null)
  & ((query: testReturnError) => Error | error | null)

// Future<Left, Right>
import type { Future } from 'fluture'

export type InvokeFuture =
  & ((query: getAuthorizationState) => Future<error, AuthorizationState>)
  & ((query: setTdlibParameters) => Future<error, Ok>)
  & ((query: checkDatabaseEncryptionKey) => Future<error, Ok>)
  & ((query: setAuthenticationPhoneNumber) => Future<error, Ok>)
  & ((query: resendAuthenticationCode) => Future<error, Ok>)
  & ((query: checkAuthenticationCode) => Future<error, Ok>)
  & ((query: requestQrCodeAuthentication) => Future<error, Ok>)
  & ((query: registerUser) => Future<error, Ok>)
  & ((query: checkAuthenticationPassword) => Future<error, Ok>)
  & ((query: requestAuthenticationPasswordRecovery) => Future<error, Ok>)
  & ((query: recoverAuthenticationPassword) => Future<error, Ok>)
  & ((query: checkAuthenticationBotToken) => Future<error, Ok>)
  & ((query: logOut) => Future<error, Ok>)
  & ((query: close) => Future<error, Ok>)
  & ((query: destroy) => Future<error, Ok>)
  & ((query: confirmQrCodeAuthentication) => Future<error, Session>)
  & ((query: getCurrentState) => Future<error, Updates>)
  & ((query: setDatabaseEncryptionKey) => Future<error, Ok>)
  & ((query: getPasswordState) => Future<error, PasswordState>)
  & ((query: setPassword) => Future<error, PasswordState>)
  & ((query: getRecoveryEmailAddress) => Future<error, RecoveryEmailAddress>)
  & ((query: setRecoveryEmailAddress) => Future<error, PasswordState>)
  & ((query: checkRecoveryEmailAddressCode) => Future<error, PasswordState>)
  & ((query: resendRecoveryEmailAddressCode) => Future<error, PasswordState>)
  & ((query: requestPasswordRecovery) => Future<error, EmailAddressAuthenticationCodeInfo>)
  & ((query: recoverPassword) => Future<error, PasswordState>)
  & ((query: createTemporaryPassword) => Future<error, TemporaryPasswordState>)
  & ((query: getTemporaryPasswordState) => Future<error, TemporaryPasswordState>)
  & ((query: getMe) => Future<error, User>)
  & ((query: getUser) => Future<error, User>)
  & ((query: getUserFullInfo) => Future<error, UserFullInfo>)
  & ((query: getBasicGroup) => Future<error, BasicGroup>)
  & ((query: getBasicGroupFullInfo) => Future<error, BasicGroupFullInfo>)
  & ((query: getSupergroup) => Future<error, Supergroup>)
  & ((query: getSupergroupFullInfo) => Future<error, SupergroupFullInfo>)
  & ((query: getSecretChat) => Future<error, SecretChat>)
  & ((query: getChat) => Future<error, Chat>)
  & ((query: getMessage) => Future<error, Message>)
  & ((query: getMessageLocally) => Future<error, Message>)
  & ((query: getRepliedMessage) => Future<error, Message>)
  & ((query: getChatPinnedMessage) => Future<error, Message>)
  & ((query: getMessages) => Future<error, Messages>)
  & ((query: getFile) => Future<error, File>)
  & ((query: getRemoteFile) => Future<error, File>)
  & ((query: getChats) => Future<error, Chats>)
  & ((query: searchPublicChat) => Future<error, Chat>)
  & ((query: searchPublicChats) => Future<error, Chats>)
  & ((query: searchChats) => Future<error, Chats>)
  & ((query: searchChatsOnServer) => Future<error, Chats>)
  & ((query: searchChatsNearby) => Future<error, ChatsNearby>)
  & ((query: getTopChats) => Future<error, Chats>)
  & ((query: removeTopChat) => Future<error, Ok>)
  & ((query: addRecentlyFoundChat) => Future<error, Ok>)
  & ((query: removeRecentlyFoundChat) => Future<error, Ok>)
  & ((query: clearRecentlyFoundChats) => Future<error, Ok>)
  & ((query: checkChatUsername) => Future<error, CheckChatUsernameResult>)
  & ((query: getCreatedPublicChats) => Future<error, Chats>)
  & ((query: checkCreatedPublicChatsLimit) => Future<error, Ok>)
  & ((query: getSuitableDiscussionChats) => Future<error, Chats>)
  & ((query: getInactiveSupergroupChats) => Future<error, Chats>)
  & ((query: getGroupsInCommon) => Future<error, Chats>)
  & ((query: getChatHistory) => Future<error, Messages>)
  & ((query: deleteChatHistory) => Future<error, Ok>)
  & ((query: searchChatMessages) => Future<error, Messages>)
  & ((query: searchMessages) => Future<error, Messages>)
  & ((query: searchSecretMessages) => Future<error, FoundMessages>)
  & ((query: searchCallMessages) => Future<error, Messages>)
  & ((query: searchChatRecentLocationMessages) => Future<error, Messages>)
  & ((query: getActiveLiveLocationMessages) => Future<error, Messages>)
  & ((query: getChatMessageByDate) => Future<error, Message>)
  & ((query: getChatMessageCount) => Future<error, Count>)
  & ((query: getChatScheduledMessages) => Future<error, Messages>)
  & ((query: removeNotification) => Future<error, Ok>)
  & ((query: removeNotificationGroup) => Future<error, Ok>)
  & ((query: getPublicMessageLink) => Future<error, PublicMessageLink>)
  & ((query: getMessageLink) => Future<error, HttpUrl>)
  & ((query: getMessageLinkInfo) => Future<error, MessageLinkInfo>)
  & ((query: sendMessage) => Future<error, Message>)
  & ((query: sendMessageAlbum) => Future<error, Messages>)
  & ((query: sendBotStartMessage) => Future<error, Message>)
  & ((query: sendInlineQueryResultMessage) => Future<error, Message>)
  & ((query: forwardMessages) => Future<error, Messages>)
  & ((query: resendMessages) => Future<error, Messages>)
  & ((query: sendChatSetTtlMessage) => Future<error, Message>)
  & ((query: sendChatScreenshotTakenNotification) => Future<error, Ok>)
  & ((query: addLocalMessage) => Future<error, Message>)
  & ((query: deleteMessages) => Future<error, Ok>)
  & ((query: deleteChatMessagesFromUser) => Future<error, Ok>)
  & ((query: editMessageText) => Future<error, Message>)
  & ((query: editMessageLiveLocation) => Future<error, Message>)
  & ((query: editMessageMedia) => Future<error, Message>)
  & ((query: editMessageCaption) => Future<error, Message>)
  & ((query: editMessageReplyMarkup) => Future<error, Message>)
  & ((query: editInlineMessageText) => Future<error, Ok>)
  & ((query: editInlineMessageLiveLocation) => Future<error, Ok>)
  & ((query: editInlineMessageMedia) => Future<error, Ok>)
  & ((query: editInlineMessageCaption) => Future<error, Ok>)
  & ((query: editInlineMessageReplyMarkup) => Future<error, Ok>)
  & ((query: editMessageSchedulingState) => Future<error, Ok>)
  & ((query: getTextEntities) => Future<error, TextEntities>)
  & ((query: parseTextEntities) => Future<error, FormattedText>)
  & ((query: getFileMimeType) => Future<error, Text>)
  & ((query: getFileExtension) => Future<error, Text>)
  & ((query: cleanFileName) => Future<error, Text>)
  & ((query: getLanguagePackString) => Future<error, LanguagePackStringValue>)
  & ((query: getJsonValue) => Future<error, JsonValue>)
  & ((query: getJsonString) => Future<error, Text>)
  & ((query: setPollAnswer) => Future<error, Ok>)
  & ((query: getPollVoters) => Future<error, Users>)
  & ((query: stopPoll) => Future<error, Ok>)
  & ((query: getLoginUrlInfo) => Future<error, LoginUrlInfo>)
  & ((query: getLoginUrl) => Future<error, HttpUrl>)
  & ((query: getInlineQueryResults) => Future<error, InlineQueryResults>)
  & ((query: answerInlineQuery) => Future<error, Ok>)
  & ((query: getCallbackQueryAnswer) => Future<error, CallbackQueryAnswer>)
  & ((query: answerCallbackQuery) => Future<error, Ok>)
  & ((query: answerShippingQuery) => Future<error, Ok>)
  & ((query: answerPreCheckoutQuery) => Future<error, Ok>)
  & ((query: setGameScore) => Future<error, Message>)
  & ((query: setInlineGameScore) => Future<error, Ok>)
  & ((query: getGameHighScores) => Future<error, GameHighScores>)
  & ((query: getInlineGameHighScores) => Future<error, GameHighScores>)
  & ((query: deleteChatReplyMarkup) => Future<error, Ok>)
  & ((query: sendChatAction) => Future<error, Ok>)
  & ((query: openChat) => Future<error, Ok>)
  & ((query: closeChat) => Future<error, Ok>)
  & ((query: viewMessages) => Future<error, Ok>)
  & ((query: openMessageContent) => Future<error, Ok>)
  & ((query: readAllChatMentions) => Future<error, Ok>)
  & ((query: createPrivateChat) => Future<error, Chat>)
  & ((query: createBasicGroupChat) => Future<error, Chat>)
  & ((query: createSupergroupChat) => Future<error, Chat>)
  & ((query: createSecretChat) => Future<error, Chat>)
  & ((query: createNewBasicGroupChat) => Future<error, Chat>)
  & ((query: createNewSupergroupChat) => Future<error, Chat>)
  & ((query: createNewSecretChat) => Future<error, Chat>)
  & ((query: upgradeBasicGroupChatToSupergroupChat) => Future<error, Chat>)
  & ((query: setChatChatList) => Future<error, Ok>)
  & ((query: setChatTitle) => Future<error, Ok>)
  & ((query: setChatPhoto) => Future<error, Ok>)
  & ((query: setChatPermissions) => Future<error, Ok>)
  & ((query: setChatDraftMessage) => Future<error, Ok>)
  & ((query: setChatNotificationSettings) => Future<error, Ok>)
  & ((query: toggleChatIsPinned) => Future<error, Ok>)
  & ((query: toggleChatIsMarkedAsUnread) => Future<error, Ok>)
  & ((query: toggleChatDefaultDisableNotification) => Future<error, Ok>)
  & ((query: setChatClientData) => Future<error, Ok>)
  & ((query: setChatDescription) => Future<error, Ok>)
  & ((query: setChatDiscussionGroup) => Future<error, Ok>)
  & ((query: setChatLocation) => Future<error, Ok>)
  & ((query: setChatSlowModeDelay) => Future<error, Ok>)
  & ((query: pinChatMessage) => Future<error, Ok>)
  & ((query: unpinChatMessage) => Future<error, Ok>)
  & ((query: joinChat) => Future<error, Ok>)
  & ((query: leaveChat) => Future<error, Ok>)
  & ((query: addChatMember) => Future<error, Ok>)
  & ((query: addChatMembers) => Future<error, Ok>)
  & ((query: setChatMemberStatus) => Future<error, Ok>)
  & ((query: canTransferOwnership) => Future<error, CanTransferOwnershipResult>)
  & ((query: transferChatOwnership) => Future<error, Ok>)
  & ((query: getChatMember) => Future<error, ChatMember>)
  & ((query: searchChatMembers) => Future<error, ChatMembers>)
  & ((query: getChatAdministrators) => Future<error, ChatAdministrators>)
  & ((query: clearAllDraftMessages) => Future<error, Ok>)
  & ((query: getChatNotificationSettingsExceptions) => Future<error, Chats>)
  & ((query: getScopeNotificationSettings) => Future<error, ScopeNotificationSettings>)
  & ((query: setScopeNotificationSettings) => Future<error, Ok>)
  & ((query: resetAllNotificationSettings) => Future<error, Ok>)
  & ((query: setPinnedChats) => Future<error, Ok>)
  & ((query: downloadFile) => Future<error, File>)
  & ((query: getFileDownloadedPrefixSize) => Future<error, Count>)
  & ((query: cancelDownloadFile) => Future<error, Ok>)
  & ((query: uploadFile) => Future<error, File>)
  & ((query: cancelUploadFile) => Future<error, Ok>)
  & ((query: writeGeneratedFilePart) => Future<error, Ok>)
  & ((query: setFileGenerationProgress) => Future<error, Ok>)
  & ((query: finishFileGeneration) => Future<error, Ok>)
  & ((query: readFilePart) => Future<error, FilePart>)
  & ((query: deleteFile) => Future<error, Ok>)
  & ((query: generateChatInviteLink) => Future<error, ChatInviteLink>)
  & ((query: checkChatInviteLink) => Future<error, ChatInviteLinkInfo>)
  & ((query: joinChatByInviteLink) => Future<error, Chat>)
  & ((query: createCall) => Future<error, CallId>)
  & ((query: acceptCall) => Future<error, Ok>)
  & ((query: discardCall) => Future<error, Ok>)
  & ((query: sendCallRating) => Future<error, Ok>)
  & ((query: sendCallDebugInformation) => Future<error, Ok>)
  & ((query: blockUser) => Future<error, Ok>)
  & ((query: unblockUser) => Future<error, Ok>)
  & ((query: getBlockedUsers) => Future<error, Users>)
  & ((query: addContact) => Future<error, Ok>)
  & ((query: importContacts) => Future<error, ImportedContacts>)
  & ((query: getContacts) => Future<error, Users>)
  & ((query: searchContacts) => Future<error, Users>)
  & ((query: removeContacts) => Future<error, Ok>)
  & ((query: getImportedContactCount) => Future<error, Count>)
  & ((query: changeImportedContacts) => Future<error, ImportedContacts>)
  & ((query: clearImportedContacts) => Future<error, Ok>)
  & ((query: sharePhoneNumber) => Future<error, Ok>)
  & ((query: getUserProfilePhotos) => Future<error, UserProfilePhotos>)
  & ((query: getStickers) => Future<error, Stickers>)
  & ((query: searchStickers) => Future<error, Stickers>)
  & ((query: getInstalledStickerSets) => Future<error, StickerSets>)
  & ((query: getArchivedStickerSets) => Future<error, StickerSets>)
  & ((query: getTrendingStickerSets) => Future<error, StickerSets>)
  & ((query: getAttachedStickerSets) => Future<error, StickerSets>)
  & ((query: getStickerSet) => Future<error, StickerSet>)
  & ((query: searchStickerSet) => Future<error, StickerSet>)
  & ((query: searchInstalledStickerSets) => Future<error, StickerSets>)
  & ((query: searchStickerSets) => Future<error, StickerSets>)
  & ((query: changeStickerSet) => Future<error, Ok>)
  & ((query: viewTrendingStickerSets) => Future<error, Ok>)
  & ((query: reorderInstalledStickerSets) => Future<error, Ok>)
  & ((query: getRecentStickers) => Future<error, Stickers>)
  & ((query: addRecentSticker) => Future<error, Stickers>)
  & ((query: removeRecentSticker) => Future<error, Ok>)
  & ((query: clearRecentStickers) => Future<error, Ok>)
  & ((query: getFavoriteStickers) => Future<error, Stickers>)
  & ((query: addFavoriteSticker) => Future<error, Ok>)
  & ((query: removeFavoriteSticker) => Future<error, Ok>)
  & ((query: getStickerEmojis) => Future<error, Emojis>)
  & ((query: searchEmojis) => Future<error, Emojis>)
  & ((query: getEmojiSuggestionsUrl) => Future<error, HttpUrl>)
  & ((query: getSavedAnimations) => Future<error, Animations>)
  & ((query: addSavedAnimation) => Future<error, Ok>)
  & ((query: removeSavedAnimation) => Future<error, Ok>)
  & ((query: getRecentInlineBots) => Future<error, Users>)
  & ((query: searchHashtags) => Future<error, Hashtags>)
  & ((query: removeRecentHashtag) => Future<error, Ok>)
  & ((query: getWebPagePreview) => Future<error, WebPage>)
  & ((query: getWebPageInstantView) => Future<error, WebPageInstantView>)
  & ((query: setProfilePhoto) => Future<error, Ok>)
  & ((query: deleteProfilePhoto) => Future<error, Ok>)
  & ((query: setName) => Future<error, Ok>)
  & ((query: setBio) => Future<error, Ok>)
  & ((query: setUsername) => Future<error, Ok>)
  & ((query: changePhoneNumber) => Future<error, AuthenticationCodeInfo>)
  & ((query: resendChangePhoneNumberCode) => Future<error, AuthenticationCodeInfo>)
  & ((query: checkChangePhoneNumberCode) => Future<error, Ok>)
  & ((query: getActiveSessions) => Future<error, Sessions>)
  & ((query: terminateSession) => Future<error, Ok>)
  & ((query: terminateAllOtherSessions) => Future<error, Ok>)
  & ((query: getConnectedWebsites) => Future<error, ConnectedWebsites>)
  & ((query: disconnectWebsite) => Future<error, Ok>)
  & ((query: disconnectAllWebsites) => Future<error, Ok>)
  & ((query: setSupergroupUsername) => Future<error, Ok>)
  & ((query: setSupergroupStickerSet) => Future<error, Ok>)
  & ((query: toggleSupergroupSignMessages) => Future<error, Ok>)
  & ((query: toggleSupergroupIsAllHistoryAvailable) => Future<error, Ok>)
  & ((query: reportSupergroupSpam) => Future<error, Ok>)
  & ((query: getSupergroupMembers) => Future<error, ChatMembers>)
  & ((query: deleteSupergroup) => Future<error, Ok>)
  & ((query: closeSecretChat) => Future<error, Ok>)
  & ((query: getChatEventLog) => Future<error, ChatEvents>)
  & ((query: getPaymentForm) => Future<error, PaymentForm>)
  & ((query: validateOrderInfo) => Future<error, ValidatedOrderInfo>)
  & ((query: sendPaymentForm) => Future<error, PaymentResult>)
  & ((query: getPaymentReceipt) => Future<error, PaymentReceipt>)
  & ((query: getSavedOrderInfo) => Future<error, OrderInfo>)
  & ((query: deleteSavedOrderInfo) => Future<error, Ok>)
  & ((query: deleteSavedCredentials) => Future<error, Ok>)
  & ((query: getSupportUser) => Future<error, User>)
  & ((query: getBackgrounds) => Future<error, Backgrounds>)
  & ((query: getBackgroundUrl) => Future<error, HttpUrl>)
  & ((query: searchBackground) => Future<error, Background>)
  & ((query: setBackground) => Future<error, Background>)
  & ((query: removeBackground) => Future<error, Ok>)
  & ((query: resetBackgrounds) => Future<error, Ok>)
  & ((query: getLocalizationTargetInfo) => Future<error, LocalizationTargetInfo>)
  & ((query: getLanguagePackInfo) => Future<error, LanguagePackInfo>)
  & ((query: getLanguagePackStrings) => Future<error, LanguagePackStrings>)
  & ((query: synchronizeLanguagePack) => Future<error, Ok>)
  & ((query: addCustomServerLanguagePack) => Future<error, Ok>)
  & ((query: setCustomLanguagePack) => Future<error, Ok>)
  & ((query: editCustomLanguagePackInfo) => Future<error, Ok>)
  & ((query: setCustomLanguagePackString) => Future<error, Ok>)
  & ((query: deleteLanguagePack) => Future<error, Ok>)
  & ((query: registerDevice) => Future<error, PushReceiverId>)
  & ((query: processPushNotification) => Future<error, Ok>)
  & ((query: getPushReceiverId) => Future<error, PushReceiverId>)
  & ((query: getRecentlyVisitedTMeUrls) => Future<error, TMeUrls>)
  & ((query: setUserPrivacySettingRules) => Future<error, Ok>)
  & ((query: getUserPrivacySettingRules) => Future<error, UserPrivacySettingRules>)
  & ((query: getOption) => Future<error, OptionValue>)
  & ((query: setOption) => Future<error, Ok>)
  & ((query: setAccountTtl) => Future<error, Ok>)
  & ((query: getAccountTtl) => Future<error, AccountTtl>)
  & ((query: deleteAccount) => Future<error, Ok>)
  & ((query: removeChatActionBar) => Future<error, Ok>)
  & ((query: reportChat) => Future<error, Ok>)
  & ((query: getChatStatisticsUrl) => Future<error, HttpUrl>)
  & ((query: getStorageStatistics) => Future<error, StorageStatistics>)
  & ((query: getStorageStatisticsFast) => Future<error, StorageStatisticsFast>)
  & ((query: getDatabaseStatistics) => Future<error, DatabaseStatistics>)
  & ((query: optimizeStorage) => Future<error, StorageStatistics>)
  & ((query: setNetworkType) => Future<error, Ok>)
  & ((query: getNetworkStatistics) => Future<error, NetworkStatistics>)
  & ((query: addNetworkStatistics) => Future<error, Ok>)
  & ((query: resetNetworkStatistics) => Future<error, Ok>)
  & ((query: getAutoDownloadSettingsPresets) => Future<error, AutoDownloadSettingsPresets>)
  & ((query: setAutoDownloadSettings) => Future<error, Ok>)
  & ((query: getPassportElement) => Future<error, PassportElement>)
  & ((query: getAllPassportElements) => Future<error, PassportElements>)
  & ((query: setPassportElement) => Future<error, PassportElement>)
  & ((query: deletePassportElement) => Future<error, Ok>)
  & ((query: setPassportElementErrors) => Future<error, Ok>)
  & ((query: getPreferredCountryLanguage) => Future<error, Text>)
  & ((query: sendPhoneNumberVerificationCode) => Future<error, AuthenticationCodeInfo>)
  & ((query: resendPhoneNumberVerificationCode) => Future<error, AuthenticationCodeInfo>)
  & ((query: checkPhoneNumberVerificationCode) => Future<error, Ok>)
  & ((query: sendEmailAddressVerificationCode) => Future<error, EmailAddressAuthenticationCodeInfo>)
  & ((query: resendEmailAddressVerificationCode) => Future<error, EmailAddressAuthenticationCodeInfo>)
  & ((query: checkEmailAddressVerificationCode) => Future<error, Ok>)
  & ((query: getPassportAuthorizationForm) => Future<error, PassportAuthorizationForm>)
  & ((query: getPassportAuthorizationFormAvailableElements) => Future<error, PassportElementsWithErrors>)
  & ((query: sendPassportAuthorizationForm) => Future<error, Ok>)
  & ((query: sendPhoneNumberConfirmationCode) => Future<error, AuthenticationCodeInfo>)
  & ((query: resendPhoneNumberConfirmationCode) => Future<error, AuthenticationCodeInfo>)
  & ((query: checkPhoneNumberConfirmationCode) => Future<error, Ok>)
  & ((query: setBotUpdatesStatus) => Future<error, Ok>)
  & ((query: uploadStickerFile) => Future<error, File>)
  & ((query: createNewStickerSet) => Future<error, StickerSet>)
  & ((query: addStickerToSet) => Future<error, StickerSet>)
  & ((query: setStickerPositionInSet) => Future<error, Ok>)
  & ((query: removeStickerFromSet) => Future<error, Ok>)
  & ((query: getMapThumbnailFile) => Future<error, File>)
  & ((query: acceptTermsOfService) => Future<error, Ok>)
  & ((query: sendCustomRequest) => Future<error, CustomRequestResult>)
  & ((query: answerCustomQuery) => Future<error, Ok>)
  & ((query: setAlarm) => Future<error, Ok>)
  & ((query: getCountryCode) => Future<error, Text>)
  & ((query: getInviteText) => Future<error, Text>)
  & ((query: getDeepLinkInfo) => Future<error, DeepLinkInfo>)
  & ((query: getApplicationConfig) => Future<error, JsonValue>)
  & ((query: saveApplicationLogEvent) => Future<error, Ok>)
  & ((query: addProxy) => Future<error, Proxy>)
  & ((query: editProxy) => Future<error, Proxy>)
  & ((query: enableProxy) => Future<error, Ok>)
  & ((query: disableProxy) => Future<error, Ok>)
  & ((query: removeProxy) => Future<error, Ok>)
  & ((query: getProxies) => Future<error, Proxies>)
  & ((query: getProxyLink) => Future<error, Text>)
  & ((query: pingProxy) => Future<error, Seconds>)
  & ((query: setLogStream) => Future<error, Ok>)
  & ((query: getLogStream) => Future<error, LogStream>)
  & ((query: setLogVerbosityLevel) => Future<error, Ok>)
  & ((query: getLogVerbosityLevel) => Future<error, LogVerbosityLevel>)
  & ((query: getLogTags) => Future<error, LogTags>)
  & ((query: setLogTagVerbosityLevel) => Future<error, Ok>)
  & ((query: getLogTagVerbosityLevel) => Future<error, LogVerbosityLevel>)
  & ((query: addLogMessage) => Future<error, Ok>)
  & ((query: testCallEmpty) => Future<error, Ok>)
  & ((query: testCallString) => Future<error, TestString>)
  & ((query: testCallBytes) => Future<error, TestBytes>)
  & ((query: testCallVectorInt) => Future<error, TestVectorInt>)
  & ((query: testCallVectorIntObject) => Future<error, TestVectorIntObject>)
  & ((query: testCallVectorString) => Future<error, TestVectorString>)
  & ((query: testCallVectorStringObject) => Future<error, TestVectorStringObject>)
  & ((query: testSquareInt) => Future<error, TestInt>)
  & ((query: testNetwork) => Future<error, Ok>)
  & ((query: testProxy) => Future<error, Ok>)
  & ((query: testGetDifference) => Future<error, Ok>)
  & ((query: testUseUpdate) => Future<error, Update>)
  & ((query: testReturnError) => Future<error, Error>)
