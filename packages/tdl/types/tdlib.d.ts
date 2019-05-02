// TDLib 1.4.0

/** An object of this type can be returned on every function call, in case of an error */
export type error = {
  _: 'error',
  /**
   * Error code; subject to future changes. If the error code is 406, the error message
   * must not be processed in any way and must not be displayed to the user
   */
  code: number,
  /** Error message; subject to future changes */
  message: string,
}

/** An object of this type can be returned on every function call, in case of an error */
export type error$Input = {
  readonly _: 'error',
  /**
   * Error code; subject to future changes. If the error code is 406, the error message
   * must not be processed in any way and must not be displayed to the user
   */
  readonly code?: number,
  /** Error message; subject to future changes */
  readonly message?: string,
}

/** An object of this type is returned on a successful function call for certain functions */
export type ok = {
  _: 'ok',
}

/** An object of this type is returned on a successful function call for certain functions */
export type ok$Input = {
  readonly _: 'ok',
}

/** Contains parameters for TDLib initialization */
export type tdlibParameters = {
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
}

/** Contains parameters for TDLib initialization */
export type tdlibParameters$Input = {
  readonly _: 'tdlibParameters',
  /**
   * If set to true, the Telegram test environment will be used instead of the production
   * environment
   */
  readonly use_test_dc?: boolean,
  /**
   * The path to the directory for the persistent database; if empty, the current working
   * directory will be used
   */
  readonly database_directory?: string,
  /**
   * The path to the directory for storing files; if empty, database_directory will be
   * used
   */
  readonly files_directory?: string,
  /**
   * If set to true, information about downloaded and uploaded files will be saved between
   * application restarts
   */
  readonly use_file_database?: boolean,
  /**
   * If set to true, the library will maintain a cache of users, basic groups, supergroups,
   * channels and secret chats. Implies use_file_database
   */
  readonly use_chat_info_database?: boolean,
  /**
   * If set to true, the library will maintain a cache of chats and messages. Implies
   * use_chat_info_database
   */
  readonly use_message_database?: boolean,
  /** If set to true, support for secret chats will be enabled */
  readonly use_secret_chats?: boolean,
  /** Application identifier for Telegram API access, which can be obtained at https://my.telegram.org */
  readonly api_id?: number,
  /** Application identifier hash for Telegram API access, which can be obtained at https://my.telegram.org */
  readonly api_hash?: string,
  /** IETF language tag of the user's operating system language; must be non-empty */
  readonly system_language_code?: string,
  /** Model of the device the application is being run on; must be non-empty */
  readonly device_model?: string,
  /** Version of the operating system the application is being run on; must be non-empty */
  readonly system_version?: string,
  /** Application version; must be non-empty */
  readonly application_version?: string,
  /** If set to true, old files will automatically be deleted */
  readonly enable_storage_optimizer?: boolean,
  /**
   * If set to true, original file names will be ignored. Otherwise, downloaded files
   * will be saved under names as close as possible to the original name
   */
  readonly ignore_file_names?: boolean,
}

/**
 * An authentication code is delivered via a private Telegram message, which can be
 * viewed in another client
 */
export type authenticationCodeTypeTelegramMessage = {
  _: 'authenticationCodeTypeTelegramMessage',
  /** Length of the code */
  length: number,
}

/**
 * An authentication code is delivered via a private Telegram message, which can be
 * viewed in another client
 */
export type authenticationCodeTypeTelegramMessage$Input = {
  readonly _: 'authenticationCodeTypeTelegramMessage',
  /** Length of the code */
  readonly length?: number,
}

/** An authentication code is delivered via an SMS message to the specified phone number */
export type authenticationCodeTypeSms = {
  _: 'authenticationCodeTypeSms',
  /** Length of the code */
  length: number,
}

/** An authentication code is delivered via an SMS message to the specified phone number */
export type authenticationCodeTypeSms$Input = {
  readonly _: 'authenticationCodeTypeSms',
  /** Length of the code */
  readonly length?: number,
}

/** An authentication code is delivered via a phone call to the specified phone number */
export type authenticationCodeTypeCall = {
  _: 'authenticationCodeTypeCall',
  /** Length of the code */
  length: number,
}

/** An authentication code is delivered via a phone call to the specified phone number */
export type authenticationCodeTypeCall$Input = {
  readonly _: 'authenticationCodeTypeCall',
  /** Length of the code */
  readonly length?: number,
}

/**
 * An authentication code is delivered by an immediately cancelled call to the specified
 * phone number. The number from which the call was made is the code
 */
export type authenticationCodeTypeFlashCall = {
  _: 'authenticationCodeTypeFlashCall',
  /** Pattern of the phone number from which the call will be made */
  pattern: string,
}

/**
 * An authentication code is delivered by an immediately cancelled call to the specified
 * phone number. The number from which the call was made is the code
 */
export type authenticationCodeTypeFlashCall$Input = {
  readonly _: 'authenticationCodeTypeFlashCall',
  /** Pattern of the phone number from which the call will be made */
  readonly pattern?: string,
}

/** Information about the authentication code that was sent */
export type authenticationCodeInfo = {
  _: 'authenticationCodeInfo',
  /** A phone number that is being authenticated */
  phone_number: string,
  /** Describes the way the code was sent to the user */
  type: AuthenticationCodeType,
  /** Describes the way the next code will be sent to the user; may be null */
  next_type: AuthenticationCodeType,
  /** Timeout before the code should be re-sent, in seconds */
  timeout: number,
}

/** Information about the authentication code that was sent */
export type authenticationCodeInfo$Input = {
  readonly _: 'authenticationCodeInfo',
  /** A phone number that is being authenticated */
  readonly phone_number?: string,
  /** Describes the way the code was sent to the user */
  readonly type?: AuthenticationCodeType$Input,
  /** Describes the way the next code will be sent to the user; may be null */
  readonly next_type?: AuthenticationCodeType$Input,
  /** Timeout before the code should be re-sent, in seconds */
  readonly timeout?: number,
}

/** Information about the email address authentication code that was sent */
export type emailAddressAuthenticationCodeInfo = {
  _: 'emailAddressAuthenticationCodeInfo',
  /** Pattern of the email address to which an authentication code was sent */
  email_address_pattern: string,
  /** Length of the code; 0 if unknown */
  length: number,
}

/** Information about the email address authentication code that was sent */
export type emailAddressAuthenticationCodeInfo$Input = {
  readonly _: 'emailAddressAuthenticationCodeInfo',
  /** Pattern of the email address to which an authentication code was sent */
  readonly email_address_pattern?: string,
  /** Length of the code; 0 if unknown */
  readonly length?: number,
}

/** Represents a part of the text that needs to be formatted in some unusual way */
export type textEntity = {
  _: 'textEntity',
  /** Offset of the entity in UTF-16 code points */
  offset: number,
  /** Length of the entity, in UTF-16 code points */
  length: number,
  /** Type of the entity */
  type: TextEntityType,
}

/** Represents a part of the text that needs to be formatted in some unusual way */
export type textEntity$Input = {
  readonly _: 'textEntity',
  /** Offset of the entity in UTF-16 code points */
  readonly offset?: number,
  /** Length of the entity, in UTF-16 code points */
  readonly length?: number,
  /** Type of the entity */
  readonly type?: TextEntityType$Input,
}

/** Contains a list of text entities */
export type textEntities = {
  _: 'textEntities',
  /** List of text entities */
  entities: Array<textEntity>,
}

/** Contains a list of text entities */
export type textEntities$Input = {
  readonly _: 'textEntities',
  /** List of text entities */
  readonly entities?: ReadonlyArray<textEntity$Input>,
}

/** A text with some entities */
export type formattedText = {
  _: 'formattedText',
  /** The text */
  text: string,
  /** Entities contained in the text */
  entities: Array<textEntity>,
}

/** A text with some entities */
export type formattedText$Input = {
  readonly _: 'formattedText',
  /** The text */
  readonly text?: string,
  /** Entities contained in the text */
  readonly entities?: ReadonlyArray<textEntity$Input>,
}

/** Contains Telegram terms of service */
export type termsOfService = {
  _: 'termsOfService',
  /** Text of the terms of service */
  text: formattedText,
  /** Mininum age of a user to be able to accept the terms; 0 if any */
  min_user_age: number,
  /** True, if a blocking popup with terms of service must be shown to the user */
  show_popup: boolean,
}

/** Contains Telegram terms of service */
export type termsOfService$Input = {
  readonly _: 'termsOfService',
  /** Text of the terms of service */
  readonly text?: formattedText$Input,
  /** Mininum age of a user to be able to accept the terms; 0 if any */
  readonly min_user_age?: number,
  /** True, if a blocking popup with terms of service must be shown to the user */
  readonly show_popup?: boolean,
}

/** TDLib needs TdlibParameters for initialization */
export type authorizationStateWaitTdlibParameters = {
  _: 'authorizationStateWaitTdlibParameters',
}

/** TDLib needs TdlibParameters for initialization */
export type authorizationStateWaitTdlibParameters$Input = {
  readonly _: 'authorizationStateWaitTdlibParameters',
}

/** TDLib needs an encryption key to decrypt the local database */
export type authorizationStateWaitEncryptionKey = {
  _: 'authorizationStateWaitEncryptionKey',
  /** True, if the database is currently encrypted */
  is_encrypted: boolean,
}

/** TDLib needs an encryption key to decrypt the local database */
export type authorizationStateWaitEncryptionKey$Input = {
  readonly _: 'authorizationStateWaitEncryptionKey',
  /** True, if the database is currently encrypted */
  readonly is_encrypted?: boolean,
}

/** TDLib needs the user's phone number to authorize */
export type authorizationStateWaitPhoneNumber = {
  _: 'authorizationStateWaitPhoneNumber',
}

/** TDLib needs the user's phone number to authorize */
export type authorizationStateWaitPhoneNumber$Input = {
  readonly _: 'authorizationStateWaitPhoneNumber',
}

/** TDLib needs the user's authentication code to finalize authorization */
export type authorizationStateWaitCode = {
  _: 'authorizationStateWaitCode',
  /** True, if the user is already registered */
  is_registered: boolean,
  /**
   * Telegram terms of service, which should be accepted before user can continue registration;
   * may be null
   */
  terms_of_service: termsOfService,
  /** Information about the authorization code that was sent */
  code_info: authenticationCodeInfo,
}

/** TDLib needs the user's authentication code to finalize authorization */
export type authorizationStateWaitCode$Input = {
  readonly _: 'authorizationStateWaitCode',
  /** True, if the user is already registered */
  readonly is_registered?: boolean,
  /**
   * Telegram terms of service, which should be accepted before user can continue registration;
   * may be null
   */
  readonly terms_of_service?: termsOfService$Input,
  /** Information about the authorization code that was sent */
  readonly code_info?: authenticationCodeInfo$Input,
}

/** The user has been authorized, but needs to enter a password to start using the application */
export type authorizationStateWaitPassword = {
  _: 'authorizationStateWaitPassword',
  /** Hint for the password; may be empty */
  password_hint: string,
  /** True if a recovery email address has been set up */
  has_recovery_email_address: boolean,
  /**
   * Pattern of the email address to which the recovery email was sent; empty until a
   * recovery email has been sent
   */
  recovery_email_address_pattern: string,
}

/** The user has been authorized, but needs to enter a password to start using the application */
export type authorizationStateWaitPassword$Input = {
  readonly _: 'authorizationStateWaitPassword',
  /** Hint for the password; may be empty */
  readonly password_hint?: string,
  /** True if a recovery email address has been set up */
  readonly has_recovery_email_address?: boolean,
  /**
   * Pattern of the email address to which the recovery email was sent; empty until a
   * recovery email has been sent
   */
  readonly recovery_email_address_pattern?: string,
}

/** The user has been successfully authorized. TDLib is now ready to answer queries */
export type authorizationStateReady = {
  _: 'authorizationStateReady',
}

/** The user has been successfully authorized. TDLib is now ready to answer queries */
export type authorizationStateReady$Input = {
  readonly _: 'authorizationStateReady',
}

/** The user is currently logging out */
export type authorizationStateLoggingOut = {
  _: 'authorizationStateLoggingOut',
}

/** The user is currently logging out */
export type authorizationStateLoggingOut$Input = {
  readonly _: 'authorizationStateLoggingOut',
}

/**
 * TDLib is closing, all subsequent queries will be answered with the error 500. Note
 * that closing TDLib can take a while. All resources will be freed only after authorizationStateClosed
 * has been received
 */
export type authorizationStateClosing = {
  _: 'authorizationStateClosing',
}

/**
 * TDLib is closing, all subsequent queries will be answered with the error 500. Note
 * that closing TDLib can take a while. All resources will be freed only after authorizationStateClosed
 * has been received
 */
export type authorizationStateClosing$Input = {
  readonly _: 'authorizationStateClosing',
}

/**
 * TDLib client is in its final state. All databases are closed and all resources are
 * released. No other updates will be received after this. All queries will be responded
 * to with error code 500. To continue working, one should create a new instance of
 * the TDLib client
 */
export type authorizationStateClosed = {
  _: 'authorizationStateClosed',
}

/**
 * TDLib client is in its final state. All databases are closed and all resources are
 * released. No other updates will be received after this. All queries will be responded
 * to with error code 500. To continue working, one should create a new instance of
 * the TDLib client
 */
export type authorizationStateClosed$Input = {
  readonly _: 'authorizationStateClosed',
}

/** Represents the current state of 2-step verification */
export type passwordState = {
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
}

/** Represents the current state of 2-step verification */
export type passwordState$Input = {
  readonly _: 'passwordState',
  /** True, if a 2-step verification password is set */
  readonly has_password?: boolean,
  /** Hint for the password; may be empty */
  readonly password_hint?: string,
  /** True, if a recovery email is set */
  readonly has_recovery_email_address?: boolean,
  /** True, if some Telegram Passport elements were saved */
  readonly has_passport_data?: boolean,
  /**
   * Information about the recovery email address to which the confirmation email was
   * sent; may be null
   */
  readonly recovery_email_address_code_info?: emailAddressAuthenticationCodeInfo$Input,
}

/** Contains information about the current recovery email address */
export type recoveryEmailAddress = {
  _: 'recoveryEmailAddress',
  /** Recovery email address */
  recovery_email_address: string,
}

/** Contains information about the current recovery email address */
export type recoveryEmailAddress$Input = {
  readonly _: 'recoveryEmailAddress',
  /** Recovery email address */
  readonly recovery_email_address?: string,
}

/**
 * Returns information about the availability of a temporary password, which can be
 * used for payments
 */
export type temporaryPasswordState = {
  _: 'temporaryPasswordState',
  /** True, if a temporary password is available */
  has_password: boolean,
  /** Time left before the temporary password expires, in seconds */
  valid_for: number,
}

/**
 * Returns information about the availability of a temporary password, which can be
 * used for payments
 */
export type temporaryPasswordState$Input = {
  readonly _: 'temporaryPasswordState',
  /** True, if a temporary password is available */
  readonly has_password?: boolean,
  /** Time left before the temporary password expires, in seconds */
  readonly valid_for?: number,
}

/** Represents a local file */
export type localFile = {
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
}

/** Represents a local file */
export type localFile$Input = {
  readonly _: 'localFile',
  /** Local path to the locally available file part; may be empty */
  readonly path?: string,
  /** True, if it is possible to try to download or generate the file */
  readonly can_be_downloaded?: boolean,
  /** True, if the file can be deleted */
  readonly can_be_deleted?: boolean,
  /**
   * True, if the file is currently being downloaded (or a local copy is being generated
   * by some other means)
   */
  readonly is_downloading_active?: boolean,
  /** True, if the local copy is fully available */
  readonly is_downloading_completed?: boolean,
  /**
   * Download will be started from this offset. downloaded_prefix_size is calculated from
   * this offset
   */
  readonly download_offset?: number,
  /**
   * If is_downloading_completed is false, then only some prefix of the file starting
   * from download_offset is ready to be read. downloaded_prefix_size is the size of that
   * prefix
   */
  readonly downloaded_prefix_size?: number,
  /**
   * Total downloaded file bytes. Should be used only for calculating download progress.
   * The actual file size may be bigger, and some parts of it may contain garbage
   */
  readonly downloaded_size?: number,
}

/** Represents a remote file */
export type remoteFile = {
  _: 'remoteFile',
  /**
   * Remote file identifier; may be empty. Can be used across application restarts or
   * even from other devices for the current user. If the ID starts with "http://" or
   * "https://", it represents the HTTP URL of the file. TDLib is currently unable to
   * download files if only their URL is known. If downloadFile is called on such a file
   * or if it is sent to a secret chat, TDLib starts a file generation process by sending
   * updateFileGenerationStart to the client with the HTTP URL in the original_path and
   * "#url#" as the conversion string. Clients should generate the file by downloading
   * it to the specified location
   */
  id: string,
  /**
   * True, if the file is currently being uploaded (or a remote copy is being generated
   * by some other means)
   */
  is_uploading_active: boolean,
  /** True, if a remote copy is fully available */
  is_uploading_completed: boolean,
  /** Size of the remote available part of the file; 0 if unknown */
  uploaded_size: number,
}

/** Represents a remote file */
export type remoteFile$Input = {
  readonly _: 'remoteFile',
  /**
   * Remote file identifier; may be empty. Can be used across application restarts or
   * even from other devices for the current user. If the ID starts with "http://" or
   * "https://", it represents the HTTP URL of the file. TDLib is currently unable to
   * download files if only their URL is known. If downloadFile is called on such a file
   * or if it is sent to a secret chat, TDLib starts a file generation process by sending
   * updateFileGenerationStart to the client with the HTTP URL in the original_path and
   * "#url#" as the conversion string. Clients should generate the file by downloading
   * it to the specified location
   */
  readonly id?: string,
  /**
   * True, if the file is currently being uploaded (or a remote copy is being generated
   * by some other means)
   */
  readonly is_uploading_active?: boolean,
  /** True, if a remote copy is fully available */
  readonly is_uploading_completed?: boolean,
  /** Size of the remote available part of the file; 0 if unknown */
  readonly uploaded_size?: number,
}

/** Represents a file */
export type file = {
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
}

/** Represents a file */
export type file$Input = {
  readonly _: 'file',
  /** Unique file identifier */
  readonly id?: number,
  /** File size; 0 if unknown */
  readonly size?: number,
  /**
   * Expected file size in case the exact file size is unknown, but an approximate size
   * is known. Can be used to show download/upload progress
   */
  readonly expected_size?: number,
  /** Information about the local copy of the file */
  readonly local?: localFile$Input,
  /** Information about the remote copy of the file */
  readonly remote?: remoteFile$Input,
}

/** A file defined by its unique ID */
export type inputFileId = {
  _: 'inputFileId',
  /** Unique file identifier */
  id: number,
}

/** A file defined by its unique ID */
export type inputFileId$Input = {
  readonly _: 'inputFileId',
  /** Unique file identifier */
  readonly id?: number,
}

/** A file defined by its remote ID */
export type inputFileRemote = {
  _: 'inputFileRemote',
  /** Remote file identifier */
  id: string,
}

/** A file defined by its remote ID */
export type inputFileRemote$Input = {
  readonly _: 'inputFileRemote',
  /** Remote file identifier */
  readonly id?: string,
}

/** A file defined by a local path */
export type inputFileLocal = {
  _: 'inputFileLocal',
  /** Local path to the file */
  path: string,
}

/** A file defined by a local path */
export type inputFileLocal$Input = {
  readonly _: 'inputFileLocal',
  /** Local path to the file */
  readonly path?: string,
}

/** A file generated by the client */
export type inputFileGenerated = {
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
}

/** A file generated by the client */
export type inputFileGenerated$Input = {
  readonly _: 'inputFileGenerated',
  /**
   * Local path to a file from which the file is generated; may be empty if there is no
   * such file
   */
  readonly original_path?: string,
  /**
   * String specifying the conversion applied to the original file; should be persistent
   * across application restarts. Conversions beginning with '#' are reserved for internal
   * TDLib usage
   */
  readonly conversion?: string,
  /** Expected size of the generated file; 0 if unknown */
  readonly expected_size?: number,
}

/** Photo description */
export type photoSize = {
  _: 'photoSize',
  /** Thumbnail type (see https://core.telegram.org/constructor/photoSize) */
  type: string,
  /** Information about the photo file */
  photo: file,
  /** Photo width */
  width: number,
  /** Photo height */
  height: number,
}

/** Photo description */
export type photoSize$Input = {
  readonly _: 'photoSize',
  /** Thumbnail type (see https://core.telegram.org/constructor/photoSize) */
  readonly type?: string,
  /** Information about the photo file */
  readonly photo?: file$Input,
  /** Photo width */
  readonly width?: number,
  /** Photo height */
  readonly height?: number,
}

/** A mask should be placed relatively to the forehead */
export type maskPointForehead = {
  _: 'maskPointForehead',
}

/** A mask should be placed relatively to the forehead */
export type maskPointForehead$Input = {
  readonly _: 'maskPointForehead',
}

/** A mask should be placed relatively to the eyes */
export type maskPointEyes = {
  _: 'maskPointEyes',
}

/** A mask should be placed relatively to the eyes */
export type maskPointEyes$Input = {
  readonly _: 'maskPointEyes',
}

/** A mask should be placed relatively to the mouth */
export type maskPointMouth = {
  _: 'maskPointMouth',
}

/** A mask should be placed relatively to the mouth */
export type maskPointMouth$Input = {
  readonly _: 'maskPointMouth',
}

/** A mask should be placed relatively to the chin */
export type maskPointChin = {
  _: 'maskPointChin',
}

/** A mask should be placed relatively to the chin */
export type maskPointChin$Input = {
  readonly _: 'maskPointChin',
}

/** Position on a photo where a mask should be placed */
export type maskPosition = {
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
}

/** Position on a photo where a mask should be placed */
export type maskPosition$Input = {
  readonly _: 'maskPosition',
  /** Part of the face, relative to which the mask should be placed */
  readonly point?: MaskPoint$Input,
  /**
   * Shift by X-axis measured in widths of the mask scaled to the face size, from left
   * to right. (For example, -1.0 will place the mask just to the left of the default
   * mask position)
   */
  readonly x_shift?: number,
  /**
   * Shift by Y-axis measured in heights of the mask scaled to the face size, from top
   * to bottom. (For example, 1.0 will place the mask just below the default mask position)
   */
  readonly y_shift?: number,
  /** Mask scaling coefficient. (For example, 2.0 means a doubled size) */
  readonly scale?: number,
}

/** Describes one answer option of a poll */
export type pollOption = {
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
}

/** Describes one answer option of a poll */
export type pollOption$Input = {
  readonly _: 'pollOption',
  /** Option text, 1-100 characters */
  readonly text?: string,
  /** Number of voters for this option, available only for closed or voted polls */
  readonly voter_count?: number,
  /** The percentage of votes for this option, 0-100 */
  readonly vote_percentage?: number,
  /** True, if the option was chosen by the user */
  readonly is_chosen?: boolean,
  /** True, if the option is being chosen by a pending setPollAnswer request */
  readonly is_being_chosen?: boolean,
}

/** Describes an animation file. The animation must be encoded in GIF or MPEG4 format */
export type animation = {
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
  /** Animation thumbnail; may be null */
  thumbnail: photoSize,
  /** File containing the animation */
  animation: file,
}

/** Describes an animation file. The animation must be encoded in GIF or MPEG4 format */
export type animation$Input = {
  readonly _: 'animation',
  /** Duration of the animation, in seconds; as defined by the sender */
  readonly duration?: number,
  /** Width of the animation */
  readonly width?: number,
  /** Height of the animation */
  readonly height?: number,
  /** Original name of the file; as defined by the sender */
  readonly file_name?: string,
  /** MIME type of the file, usually "image/gif" or "video/mp4" */
  readonly mime_type?: string,
  /** Animation thumbnail; may be null */
  readonly thumbnail?: photoSize$Input,
  /** File containing the animation */
  readonly animation?: file$Input,
}

/** Describes an audio file. Audio is usually in MP3 format */
export type audio = {
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
  /**
   * The thumbnail of the album cover; as defined by the sender. The full size thumbnail
   * should be extracted from the downloaded file; may be null
   */
  album_cover_thumbnail: photoSize,
  /** File containing the audio */
  audio: file,
}

/** Describes an audio file. Audio is usually in MP3 format */
export type audio$Input = {
  readonly _: 'audio',
  /** Duration of the audio, in seconds; as defined by the sender */
  readonly duration?: number,
  /** Title of the audio; as defined by the sender */
  readonly title?: string,
  /** Performer of the audio; as defined by the sender */
  readonly performer?: string,
  /** Original name of the file; as defined by the sender */
  readonly file_name?: string,
  /** The MIME type of the file; as defined by the sender */
  readonly mime_type?: string,
  /**
   * The thumbnail of the album cover; as defined by the sender. The full size thumbnail
   * should be extracted from the downloaded file; may be null
   */
  readonly album_cover_thumbnail?: photoSize$Input,
  /** File containing the audio */
  readonly audio?: file$Input,
}

/** Describes a document of any type */
export type document = {
  _: 'document',
  /** Original name of the file; as defined by the sender */
  file_name: string,
  /** MIME type of the file; as defined by the sender */
  mime_type: string,
  /** Document thumbnail; as defined by the sender; may be null */
  thumbnail: photoSize,
  /** File containing the document */
  document: file,
}

/** Describes a document of any type */
export type document$Input = {
  readonly _: 'document',
  /** Original name of the file; as defined by the sender */
  readonly file_name?: string,
  /** MIME type of the file; as defined by the sender */
  readonly mime_type?: string,
  /** Document thumbnail; as defined by the sender; may be null */
  readonly thumbnail?: photoSize$Input,
  /** File containing the document */
  readonly document?: file$Input,
}

/** Describes a photo */
export type photo = {
  _: 'photo',
  /** True, if stickers were added to the photo */
  has_stickers: boolean,
  /** Available variants of the photo, in different sizes */
  sizes: Array<photoSize>,
}

/** Describes a photo */
export type photo$Input = {
  readonly _: 'photo',
  /** True, if stickers were added to the photo */
  readonly has_stickers?: boolean,
  /** Available variants of the photo, in different sizes */
  readonly sizes?: ReadonlyArray<photoSize$Input>,
}

/** Describes a sticker */
export type sticker = {
  _: 'sticker',
  /** The identifier of the sticker set to which the sticker belongs; 0 if none */
  set_id: number | string,
  /** Sticker width; as defined by the sender */
  width: number,
  /** Sticker height; as defined by the sender */
  height: number,
  /** Emoji corresponding to the sticker */
  emoji: string,
  /** True, if the sticker is a mask */
  is_mask: boolean,
  /** Position where the mask should be placed; may be null */
  mask_position: maskPosition,
  /** Sticker thumbnail in WEBP or JPEG format; may be null */
  thumbnail: photoSize,
  /** File containing the sticker */
  sticker: file,
}

/** Describes a sticker */
export type sticker$Input = {
  readonly _: 'sticker',
  /** The identifier of the sticker set to which the sticker belongs; 0 if none */
  readonly set_id?: number | string,
  /** Sticker width; as defined by the sender */
  readonly width?: number,
  /** Sticker height; as defined by the sender */
  readonly height?: number,
  /** Emoji corresponding to the sticker */
  readonly emoji?: string,
  /** True, if the sticker is a mask */
  readonly is_mask?: boolean,
  /** Position where the mask should be placed; may be null */
  readonly mask_position?: maskPosition$Input,
  /** Sticker thumbnail in WEBP or JPEG format; may be null */
  readonly thumbnail?: photoSize$Input,
  /** File containing the sticker */
  readonly sticker?: file$Input,
}

/** Describes a video file */
export type video = {
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
  /** True, if stickers were added to the photo */
  has_stickers: boolean,
  /** True, if the video should be tried to be streamed */
  supports_streaming: boolean,
  /** Video thumbnail; as defined by the sender; may be null */
  thumbnail: photoSize,
  /** File containing the video */
  video: file,
}

/** Describes a video file */
export type video$Input = {
  readonly _: 'video',
  /** Duration of the video, in seconds; as defined by the sender */
  readonly duration?: number,
  /** Video width; as defined by the sender */
  readonly width?: number,
  /** Video height; as defined by the sender */
  readonly height?: number,
  /** Original name of the file; as defined by the sender */
  readonly file_name?: string,
  /** MIME type of the file; as defined by the sender */
  readonly mime_type?: string,
  /** True, if stickers were added to the photo */
  readonly has_stickers?: boolean,
  /** True, if the video should be tried to be streamed */
  readonly supports_streaming?: boolean,
  /** Video thumbnail; as defined by the sender; may be null */
  readonly thumbnail?: photoSize$Input,
  /** File containing the video */
  readonly video?: file$Input,
}

/**
 * Describes a video note. The video must be equal in width and height, cropped to a
 * circle, and stored in MPEG4 format
 */
export type videoNote = {
  _: 'videoNote',
  /** Duration of the video, in seconds; as defined by the sender */
  duration: number,
  /** Video width and height; as defined by the sender */
  length: number,
  /** Video thumbnail; as defined by the sender; may be null */
  thumbnail: photoSize,
  /** File containing the video */
  video: file,
}

/**
 * Describes a video note. The video must be equal in width and height, cropped to a
 * circle, and stored in MPEG4 format
 */
export type videoNote$Input = {
  readonly _: 'videoNote',
  /** Duration of the video, in seconds; as defined by the sender */
  readonly duration?: number,
  /** Video width and height; as defined by the sender */
  readonly length?: number,
  /** Video thumbnail; as defined by the sender; may be null */
  readonly thumbnail?: photoSize$Input,
  /** File containing the video */
  readonly video?: file$Input,
}

/**
 * Describes a voice note. The voice note must be encoded with the Opus codec, and stored
 * inside an OGG container. Voice notes can have only a single audio channel
 */
export type voiceNote = {
  _: 'voiceNote',
  /** Duration of the voice note, in seconds; as defined by the sender */
  duration: number,
  /** A waveform representation of the voice note in 5-bit format */
  waveform: string,
  /** MIME type of the file; as defined by the sender */
  mime_type: string,
  /** File containing the voice note */
  voice: file,
}

/**
 * Describes a voice note. The voice note must be encoded with the Opus codec, and stored
 * inside an OGG container. Voice notes can have only a single audio channel
 */
export type voiceNote$Input = {
  readonly _: 'voiceNote',
  /** Duration of the voice note, in seconds; as defined by the sender */
  readonly duration?: number,
  /** A waveform representation of the voice note in 5-bit format */
  readonly waveform?: string,
  /** MIME type of the file; as defined by the sender */
  readonly mime_type?: string,
  /** File containing the voice note */
  readonly voice?: file$Input,
}

/** Describes a user contact */
export type contact = {
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
}

/** Describes a user contact */
export type contact$Input = {
  readonly _: 'contact',
  /** Phone number of the user */
  readonly phone_number?: string,
  /** First name of the user; 1-255 characters in length */
  readonly first_name?: string,
  /** Last name of the user */
  readonly last_name?: string,
  /** Additional data about the user in a form of vCard; 0-2048 bytes in length */
  readonly vcard?: string,
  /** Identifier of the user, if known; otherwise 0 */
  readonly user_id?: number,
}

/** Describes a location on planet Earth */
export type location = {
  _: 'location',
  /** Latitude of the location in degrees; as defined by the sender */
  latitude: number,
  /** Longitude of the location, in degrees; as defined by the sender */
  longitude: number,
}

/** Describes a location on planet Earth */
export type location$Input = {
  readonly _: 'location',
  /** Latitude of the location in degrees; as defined by the sender */
  readonly latitude?: number,
  /** Longitude of the location, in degrees; as defined by the sender */
  readonly longitude?: number,
}

/** Describes a venue */
export type venue = {
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
}

/** Describes a venue */
export type venue$Input = {
  readonly _: 'venue',
  /** Venue location; as defined by the sender */
  readonly location?: location$Input,
  /** Venue name; as defined by the sender */
  readonly title?: string,
  /** Venue address; as defined by the sender */
  readonly address?: string,
  /**
   * Provider of the venue database; as defined by the sender. Currently only "foursquare"
   * needs to be supported
   */
  readonly provider?: string,
  /** Identifier of the venue in the provider database; as defined by the sender */
  readonly id?: string,
  /** Type of the venue in the provider database; as defined by the sender */
  readonly type?: string,
}

/** Describes a game */
export type game = {
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
}

/** Describes a game */
export type game$Input = {
  readonly _: 'game',
  /** Game ID */
  readonly id?: number | string,
  /** Game short name. To share a game use the URL https://t.me/{bot_username}?game={game_short_name} */
  readonly short_name?: string,
  /** Game title */
  readonly title?: string,
  /** Game text, usually containing scoreboards for a game */
  readonly text?: formattedText$Input,
  /** Game description */
  readonly description?: string,
  /** Game photo */
  readonly photo?: photo$Input,
  /** Game animation; may be null */
  readonly animation?: animation$Input,
}

/** Describes a poll */
export type poll = {
  _: 'poll',
  /** Unique poll identifier */
  id: number | string,
  /** Poll question, 1-255 characters */
  question: string,
  /** List of poll answer options */
  options: Array<pollOption>,
  /** Total number of voters, participating in the poll */
  total_voter_count: number,
  /** True, if the poll is closed */
  is_closed: boolean,
}

/** Describes a poll */
export type poll$Input = {
  readonly _: 'poll',
  /** Unique poll identifier */
  readonly id?: number | string,
  /** Poll question, 1-255 characters */
  readonly question?: string,
  /** List of poll answer options */
  readonly options?: ReadonlyArray<pollOption$Input>,
  /** Total number of voters, participating in the poll */
  readonly total_voter_count?: number,
  /** True, if the poll is closed */
  readonly is_closed?: boolean,
}

/** Describes a user profile photo */
export type profilePhoto = {
  _: 'profilePhoto',
  /**
   * Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of
   * userProfilePhotos
   */
  id: number | string,
  /** A small (160x160) user profile photo */
  small: file,
  /** A big (640x640) user profile photo */
  big: file,
}

/** Describes a user profile photo */
export type profilePhoto$Input = {
  readonly _: 'profilePhoto',
  /**
   * Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of
   * userProfilePhotos
   */
  readonly id?: number | string,
  /** A small (160x160) user profile photo */
  readonly small?: file$Input,
  /** A big (640x640) user profile photo */
  readonly big?: file$Input,
}

/** Describes the photo of a chat */
export type chatPhoto = {
  _: 'chatPhoto',
  /** A small (160x160) chat photo */
  small: file,
  /** A big (640x640) chat photo */
  big: file,
}

/** Describes the photo of a chat */
export type chatPhoto$Input = {
  readonly _: 'chatPhoto',
  /** A small (160x160) chat photo */
  readonly small?: file$Input,
  /** A big (640x640) chat photo */
  readonly big?: file$Input,
}

/** The phone number of user A is not known to user B */
export type linkStateNone = {
  _: 'linkStateNone',
}

/** The phone number of user A is not known to user B */
export type linkStateNone$Input = {
  readonly _: 'linkStateNone',
}

/**
 * The phone number of user A is known but that number has not been saved to the contact
 * list of user B
 */
export type linkStateKnowsPhoneNumber = {
  _: 'linkStateKnowsPhoneNumber',
}

/**
 * The phone number of user A is known but that number has not been saved to the contact
 * list of user B
 */
export type linkStateKnowsPhoneNumber$Input = {
  readonly _: 'linkStateKnowsPhoneNumber',
}

/** The phone number of user A has been saved to the contact list of user B */
export type linkStateIsContact = {
  _: 'linkStateIsContact',
}

/** The phone number of user A has been saved to the contact list of user B */
export type linkStateIsContact$Input = {
  readonly _: 'linkStateIsContact',
}

/** A regular user */
export type userTypeRegular = {
  _: 'userTypeRegular',
}

/** A regular user */
export type userTypeRegular$Input = {
  readonly _: 'userTypeRegular',
}

/**
 * A deleted user or deleted bot. No information on the user besides the user_id is
 * available. It is not possible to perform any active actions on this type of user
 */
export type userTypeDeleted = {
  _: 'userTypeDeleted',
}

/**
 * A deleted user or deleted bot. No information on the user besides the user_id is
 * available. It is not possible to perform any active actions on this type of user
 */
export type userTypeDeleted$Input = {
  readonly _: 'userTypeDeleted',
}

/** A bot (see https://core.telegram.org/bots) */
export type userTypeBot = {
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
}

/** A bot (see https://core.telegram.org/bots) */
export type userTypeBot$Input = {
  readonly _: 'userTypeBot',
  /** True, if the bot can be invited to basic group and supergroup chats */
  readonly can_join_groups?: boolean,
  /**
   * True, if the bot can read all messages in basic group or supergroup chats and not
   * just those addressed to the bot. In private and channel chats a bot can always read
   * all messages
   */
  readonly can_read_all_group_messages?: boolean,
  /** True, if the bot supports inline queries */
  readonly is_inline?: boolean,
  /** Placeholder for inline queries (displayed on the client input field) */
  readonly inline_query_placeholder?: string,
  /**
   * True, if the location of the user should be sent with every inline query to this
   * bot
   */
  readonly need_location?: boolean,
}

/**
 * No information on the user besides the user_id is available, yet this user has not
 * been deleted. This object is extremely rare and must be handled like a deleted user.
 * It is not possible to perform any actions on users of this type
 */
export type userTypeUnknown = {
  _: 'userTypeUnknown',
}

/**
 * No information on the user besides the user_id is available, yet this user has not
 * been deleted. This object is extremely rare and must be handled like a deleted user.
 * It is not possible to perform any actions on users of this type
 */
export type userTypeUnknown$Input = {
  readonly _: 'userTypeUnknown',
}

/** Represents commands supported by a bot */
export type botCommand = {
  _: 'botCommand',
  /** Text of the bot command */
  command: string,
  /** Description of the bot command */
  description: string,
}

/** Represents commands supported by a bot */
export type botCommand$Input = {
  readonly _: 'botCommand',
  /** Text of the bot command */
  readonly command?: string,
  /** Description of the bot command */
  readonly description?: string,
}

/** Provides information about a bot and its supported commands */
export type botInfo = {
  _: 'botInfo',
  /** Long description shown on the user info page */
  description: string,
  /** A list of commands supported by the bot */
  commands: Array<botCommand>,
}

/** Provides information about a bot and its supported commands */
export type botInfo$Input = {
  readonly _: 'botInfo',
  /** Long description shown on the user info page */
  readonly description?: string,
  /** A list of commands supported by the bot */
  readonly commands?: ReadonlyArray<botCommand$Input>,
}

/** Represents a user */
export type user = {
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
  /** Relationship from the current user to the other user */
  outgoing_link: LinkState,
  /** Relationship from the other user to the current user */
  incoming_link: LinkState,
  /** True, if the user is verified */
  is_verified: boolean,
  /** True, if the user is Telegram support account */
  is_support: boolean,
  /**
   * If non-empty, it contains the reason why access to this user must be restricted.
   * The format of the string is "{type}: {description}". {type} contains the type of
   * the restriction and at least one of the suffixes "-all", "-ios", "-android", or "-wp",
   * which describe the platforms on which access should be restricted. (For example,
   * "terms-ios-android". {description} contains a human-readable description of the restriction,
   * which can be shown to the user)
   */
  restriction_reason: string,
  /**
   * If false, the user is inaccessible, and the only information known about the user
   * is inside this class. It can't be passed to any method except GetUser
   */
  have_access: boolean,
  /** Type of the user */
  type: UserType,
  /** IETF language tag of the user's language; only available to bots */
  language_code: string,
}

/** Represents a user */
export type user$Input = {
  readonly _: 'user',
  /** User identifier */
  readonly id?: number,
  /** First name of the user */
  readonly first_name?: string,
  /** Last name of the user */
  readonly last_name?: string,
  /** Username of the user */
  readonly username?: string,
  /** Phone number of the user */
  readonly phone_number?: string,
  /** Current online status of the user */
  readonly status?: UserStatus$Input,
  /** Profile photo of the user; may be null */
  readonly profile_photo?: profilePhoto$Input,
  /** Relationship from the current user to the other user */
  readonly outgoing_link?: LinkState$Input,
  /** Relationship from the other user to the current user */
  readonly incoming_link?: LinkState$Input,
  /** True, if the user is verified */
  readonly is_verified?: boolean,
  /** True, if the user is Telegram support account */
  readonly is_support?: boolean,
  /**
   * If non-empty, it contains the reason why access to this user must be restricted.
   * The format of the string is "{type}: {description}". {type} contains the type of
   * the restriction and at least one of the suffixes "-all", "-ios", "-android", or "-wp",
   * which describe the platforms on which access should be restricted. (For example,
   * "terms-ios-android". {description} contains a human-readable description of the restriction,
   * which can be shown to the user)
   */
  readonly restriction_reason?: string,
  /**
   * If false, the user is inaccessible, and the only information known about the user
   * is inside this class. It can't be passed to any method except GetUser
   */
  readonly have_access?: boolean,
  /** Type of the user */
  readonly type?: UserType$Input,
  /** IETF language tag of the user's language; only available to bots */
  readonly language_code?: string,
}

/** Contains full information about a user (except the full list of profile photos) */
export type userFullInfo = {
  _: 'userFullInfo',
  /** True, if the user is blacklisted by the current user */
  is_blocked: boolean,
  /** True, if the user can be called */
  can_be_called: boolean,
  /** True, if the user can't be called due to their privacy settings */
  has_private_calls: boolean,
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
}

/** Contains full information about a user (except the full list of profile photos) */
export type userFullInfo$Input = {
  readonly _: 'userFullInfo',
  /** True, if the user is blacklisted by the current user */
  readonly is_blocked?: boolean,
  /** True, if the user can be called */
  readonly can_be_called?: boolean,
  /** True, if the user can't be called due to their privacy settings */
  readonly has_private_calls?: boolean,
  /** A short user bio */
  readonly bio?: string,
  /** For bots, the text that is included with the link when users share the bot */
  readonly share_text?: string,
  /**
   * Number of group chats where both the other user and the current user are a member;
   * 0 for the current user
   */
  readonly group_in_common_count?: number,
  /** If the user is a bot, information about the bot; may be null */
  readonly bot_info?: botInfo$Input,
}

/** Contains full information about a user profile photo */
export type userProfilePhoto = {
  _: 'userProfilePhoto',
  /** Unique user profile photo identifier */
  id: number | string,
  /** Point in time (Unix timestamp) when the photo has been added */
  added_date: number,
  /** Available variants of the user photo, in different sizes */
  sizes: Array<photoSize>,
}

/** Contains full information about a user profile photo */
export type userProfilePhoto$Input = {
  readonly _: 'userProfilePhoto',
  /** Unique user profile photo identifier */
  readonly id?: number | string,
  /** Point in time (Unix timestamp) when the photo has been added */
  readonly added_date?: number,
  /** Available variants of the user photo, in different sizes */
  readonly sizes?: ReadonlyArray<photoSize$Input>,
}

/** Contains part of the list of user photos */
export type userProfilePhotos = {
  _: 'userProfilePhotos',
  /** Total number of user profile photos */
  total_count: number,
  /** A list of photos */
  photos: Array<userProfilePhoto>,
}

/** Contains part of the list of user photos */
export type userProfilePhotos$Input = {
  readonly _: 'userProfilePhotos',
  /** Total number of user profile photos */
  readonly total_count?: number,
  /** A list of photos */
  readonly photos?: ReadonlyArray<userProfilePhoto$Input>,
}

/** Represents a list of users */
export type users = {
  _: 'users',
  /** Approximate total count of users found */
  total_count: number,
  /** A list of user identifiers */
  user_ids: Array<number>,
}

/** Represents a list of users */
export type users$Input = {
  readonly _: 'users',
  /** Approximate total count of users found */
  readonly total_count?: number,
  /** A list of user identifiers */
  readonly user_ids?: ReadonlyArray<number>,
}

/** The user is the creator of a chat and has all the administrator privileges */
export type chatMemberStatusCreator = {
  _: 'chatMemberStatusCreator',
  /** True, if the user is a member of the chat */
  is_member: boolean,
}

/** The user is the creator of a chat and has all the administrator privileges */
export type chatMemberStatusCreator$Input = {
  readonly _: 'chatMemberStatusCreator',
  /** True, if the user is a member of the chat */
  readonly is_member?: boolean,
}

/**
 * The user is a member of a chat and has some additional privileges. In basic groups,
 * administrators can edit and delete messages sent by others, add new members, and
 * ban unprivileged members. In supergroups and channels, there are more detailed options
 * for administrator privileges
 */
export type chatMemberStatusAdministrator = {
  _: 'chatMemberStatusAdministrator',
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
   * True, if the administrator can add new administrators with a subset of his own privileges
   * or demote administrators that were directly or indirectly promoted by him
   */
  can_promote_members: boolean,
}

/**
 * The user is a member of a chat and has some additional privileges. In basic groups,
 * administrators can edit and delete messages sent by others, add new members, and
 * ban unprivileged members. In supergroups and channels, there are more detailed options
 * for administrator privileges
 */
export type chatMemberStatusAdministrator$Input = {
  readonly _: 'chatMemberStatusAdministrator',
  /** True, if the current user can edit the administrator privileges for the called user */
  readonly can_be_edited?: boolean,
  /** True, if the administrator can change the chat title, photo, and other settings */
  readonly can_change_info?: boolean,
  /** True, if the administrator can create channel posts; applicable to channels only */
  readonly can_post_messages?: boolean,
  /**
   * True, if the administrator can edit messages of other users and pin messages; applicable
   * to channels only
   */
  readonly can_edit_messages?: boolean,
  /** True, if the administrator can delete messages of other users */
  readonly can_delete_messages?: boolean,
  /** True, if the administrator can invite new users to the chat */
  readonly can_invite_users?: boolean,
  /** True, if the administrator can restrict, ban, or unban chat members */
  readonly can_restrict_members?: boolean,
  /** True, if the administrator can pin messages; applicable to groups only */
  readonly can_pin_messages?: boolean,
  /**
   * True, if the administrator can add new administrators with a subset of his own privileges
   * or demote administrators that were directly or indirectly promoted by him
   */
  readonly can_promote_members?: boolean,
}

/** The user is a member of a chat, without any additional privileges or restrictions */
export type chatMemberStatusMember = {
  _: 'chatMemberStatusMember',
}

/** The user is a member of a chat, without any additional privileges or restrictions */
export type chatMemberStatusMember$Input = {
  readonly _: 'chatMemberStatusMember',
}

/**
 * The user is under certain restrictions in the chat. Not supported in basic groups
 * and channels
 */
export type chatMemberStatusRestricted = {
  _: 'chatMemberStatusRestricted',
  /** True, if the user is a member of the chat */
  is_member: boolean,
  /**
   * Point in time (Unix timestamp) when restrictions will be lifted from the user; 0
   * if never. If the user is restricted for more than 366 days or for less than 30 seconds
   * from the current time, the user is considered to be restricted forever
   */
  restricted_until_date: number,
  /** True, if the user can send text messages, contacts, locations, and venues */
  can_send_messages: boolean,
  /**
   * True, if the user can send audio files, documents, photos, videos, video notes, and
   * voice notes. Implies can_send_messages permissions
   */
  can_send_media_messages: boolean,
  /**
   * True, if the user can send animations, games, and stickers and use inline bots. Implies
   * can_send_media_messages permissions
   */
  can_send_other_messages: boolean,
  /**
   * True, if the user may add a web page preview to his messages. Implies can_send_messages
   * permissions
   */
  can_add_web_page_previews: boolean,
}

/**
 * The user is under certain restrictions in the chat. Not supported in basic groups
 * and channels
 */
export type chatMemberStatusRestricted$Input = {
  readonly _: 'chatMemberStatusRestricted',
  /** True, if the user is a member of the chat */
  readonly is_member?: boolean,
  /**
   * Point in time (Unix timestamp) when restrictions will be lifted from the user; 0
   * if never. If the user is restricted for more than 366 days or for less than 30 seconds
   * from the current time, the user is considered to be restricted forever
   */
  readonly restricted_until_date?: number,
  /** True, if the user can send text messages, contacts, locations, and venues */
  readonly can_send_messages?: boolean,
  /**
   * True, if the user can send audio files, documents, photos, videos, video notes, and
   * voice notes. Implies can_send_messages permissions
   */
  readonly can_send_media_messages?: boolean,
  /**
   * True, if the user can send animations, games, and stickers and use inline bots. Implies
   * can_send_media_messages permissions
   */
  readonly can_send_other_messages?: boolean,
  /**
   * True, if the user may add a web page preview to his messages. Implies can_send_messages
   * permissions
   */
  readonly can_add_web_page_previews?: boolean,
}

/** The user is not a chat member */
export type chatMemberStatusLeft = {
  _: 'chatMemberStatusLeft',
}

/** The user is not a chat member */
export type chatMemberStatusLeft$Input = {
  readonly _: 'chatMemberStatusLeft',
}

/**
 * The user was banned (and hence is not a member of the chat). Implies the user can't
 * return to the chat or view messages
 */
export type chatMemberStatusBanned = {
  _: 'chatMemberStatusBanned',
  /**
   * Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the
   * user is banned for more than 366 days or for less than 30 seconds from the current
   * time, the user is considered to be banned forever
   */
  banned_until_date: number,
}

/**
 * The user was banned (and hence is not a member of the chat). Implies the user can't
 * return to the chat or view messages
 */
export type chatMemberStatusBanned$Input = {
  readonly _: 'chatMemberStatusBanned',
  /**
   * Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the
   * user is banned for more than 366 days or for less than 30 seconds from the current
   * time, the user is considered to be banned forever
   */
  readonly banned_until_date?: number,
}

/** A user with information about joining/leaving a chat */
export type chatMember = {
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
}

/** A user with information about joining/leaving a chat */
export type chatMember$Input = {
  readonly _: 'chatMember',
  /** User identifier of the chat member */
  readonly user_id?: number,
  /** Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown */
  readonly inviter_user_id?: number,
  /** Point in time (Unix timestamp) when the user joined a chat */
  readonly joined_chat_date?: number,
  /** Status of the member in the chat */
  readonly status?: ChatMemberStatus$Input,
  /**
   * If the user is a bot, information about the bot; may be null. Can be null even for
   * a bot if the bot is not a chat member
   */
  readonly bot_info?: botInfo$Input,
}

/** Contains a list of chat members */
export type chatMembers = {
  _: 'chatMembers',
  /** Approximate total count of chat members found */
  total_count: number,
  /** A list of chat members */
  members: Array<chatMember>,
}

/** Contains a list of chat members */
export type chatMembers$Input = {
  readonly _: 'chatMembers',
  /** Approximate total count of chat members found */
  readonly total_count?: number,
  /** A list of chat members */
  readonly members?: ReadonlyArray<chatMember$Input>,
}

/** Returns the creator and administrators */
export type chatMembersFilterAdministrators = {
  _: 'chatMembersFilterAdministrators',
}

/** Returns the creator and administrators */
export type chatMembersFilterAdministrators$Input = {
  readonly _: 'chatMembersFilterAdministrators',
}

/** Returns all chat members, including restricted chat members */
export type chatMembersFilterMembers = {
  _: 'chatMembersFilterMembers',
}

/** Returns all chat members, including restricted chat members */
export type chatMembersFilterMembers$Input = {
  readonly _: 'chatMembersFilterMembers',
}

/**
 * Returns users under certain restrictions in the chat; can be used only by administrators
 * in a supergroup
 */
export type chatMembersFilterRestricted = {
  _: 'chatMembersFilterRestricted',
}

/**
 * Returns users under certain restrictions in the chat; can be used only by administrators
 * in a supergroup
 */
export type chatMembersFilterRestricted$Input = {
  readonly _: 'chatMembersFilterRestricted',
}

/**
 * Returns users banned from the chat; can be used only by administrators in a supergroup
 * or in a channel
 */
export type chatMembersFilterBanned = {
  _: 'chatMembersFilterBanned',
}

/**
 * Returns users banned from the chat; can be used only by administrators in a supergroup
 * or in a channel
 */
export type chatMembersFilterBanned$Input = {
  readonly _: 'chatMembersFilterBanned',
}

/** Returns bot members of the chat */
export type chatMembersFilterBots = {
  _: 'chatMembersFilterBots',
}

/** Returns bot members of the chat */
export type chatMembersFilterBots$Input = {
  readonly _: 'chatMembersFilterBots',
}

/** Returns recently active users in reverse chronological order */
export type supergroupMembersFilterRecent = {
  _: 'supergroupMembersFilterRecent',
}

/** Returns recently active users in reverse chronological order */
export type supergroupMembersFilterRecent$Input = {
  readonly _: 'supergroupMembersFilterRecent',
}

/** Returns the creator and administrators */
export type supergroupMembersFilterAdministrators = {
  _: 'supergroupMembersFilterAdministrators',
}

/** Returns the creator and administrators */
export type supergroupMembersFilterAdministrators$Input = {
  readonly _: 'supergroupMembersFilterAdministrators',
}

/** Used to search for supergroup or channel members via a (string) query */
export type supergroupMembersFilterSearch = {
  _: 'supergroupMembersFilterSearch',
  /** Query to search for */
  query: string,
}

/** Used to search for supergroup or channel members via a (string) query */
export type supergroupMembersFilterSearch$Input = {
  readonly _: 'supergroupMembersFilterSearch',
  /** Query to search for */
  readonly query?: string,
}

/** Returns restricted supergroup members; can be used only by administrators */
export type supergroupMembersFilterRestricted = {
  _: 'supergroupMembersFilterRestricted',
  /** Query to search for */
  query: string,
}

/** Returns restricted supergroup members; can be used only by administrators */
export type supergroupMembersFilterRestricted$Input = {
  readonly _: 'supergroupMembersFilterRestricted',
  /** Query to search for */
  readonly query?: string,
}

/** Returns users banned from the supergroup or channel; can be used only by administrators */
export type supergroupMembersFilterBanned = {
  _: 'supergroupMembersFilterBanned',
  /** Query to search for */
  query: string,
}

/** Returns users banned from the supergroup or channel; can be used only by administrators */
export type supergroupMembersFilterBanned$Input = {
  readonly _: 'supergroupMembersFilterBanned',
  /** Query to search for */
  readonly query?: string,
}

/** Returns bot members of the supergroup or channel */
export type supergroupMembersFilterBots = {
  _: 'supergroupMembersFilterBots',
}

/** Returns bot members of the supergroup or channel */
export type supergroupMembersFilterBots$Input = {
  readonly _: 'supergroupMembersFilterBots',
}

/**
 * Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate
 * more than 200 users)
 */
export type basicGroup = {
  _: 'basicGroup',
  /** Group identifier */
  id: number,
  /** Number of members in the group */
  member_count: number,
  /** Status of the current user in the group */
  status: ChatMemberStatus,
  /** True, if all members have been granted administrator rights in the group */
  everyone_is_administrator: boolean,
  /** True, if the group is active */
  is_active: boolean,
  /** Identifier of the supergroup to which this group was upgraded; 0 if none */
  upgraded_to_supergroup_id: number,
}

/**
 * Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate
 * more than 200 users)
 */
export type basicGroup$Input = {
  readonly _: 'basicGroup',
  /** Group identifier */
  readonly id?: number,
  /** Number of members in the group */
  readonly member_count?: number,
  /** Status of the current user in the group */
  readonly status?: ChatMemberStatus$Input,
  /** True, if all members have been granted administrator rights in the group */
  readonly everyone_is_administrator?: boolean,
  /** True, if the group is active */
  readonly is_active?: boolean,
  /** Identifier of the supergroup to which this group was upgraded; 0 if none */
  readonly upgraded_to_supergroup_id?: number,
}

/** Contains full information about a basic group */
export type basicGroupFullInfo = {
  _: 'basicGroupFullInfo',
  /** User identifier of the creator of the group; 0 if unknown */
  creator_user_id: number,
  /** Group members */
  members: Array<chatMember>,
  /**
   * Invite link for this group; available only for the group creator and only after it
   * has been generated at least once
   */
  invite_link: string,
}

/** Contains full information about a basic group */
export type basicGroupFullInfo$Input = {
  readonly _: 'basicGroupFullInfo',
  /** User identifier of the creator of the group; 0 if unknown */
  readonly creator_user_id?: number,
  /** Group members */
  readonly members?: ReadonlyArray<chatMember$Input>,
  /**
   * Invite link for this group; available only for the group creator and only after it
   * has been generated at least once
   */
  readonly invite_link?: string,
}

/**
 * Represents a supergroup or channel with zero or more members (subscribers in the
 * case of channels). From the point of view of the system, a channel is a special kind
 * of a supergroup: only administrators can post and see the list of members, and posts
 * from all administrators use the name and photo of the channel instead of individual
 * names and profile photos. Unlike supergroups, channels can have an unlimited number
 * of subscribers
 */
export type supergroup = {
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
  /** Status of the current user in the supergroup or channel */
  status: ChatMemberStatus,
  /**
   * Member count; 0 if unknown. Currently it is guaranteed to be known only if the supergroup
   * or channel was found through SearchPublicChats
   */
  member_count: number,
  /**
   * True, if any member of the supergroup can invite other members. This field has no
   * meaning for channels
   */
  anyone_can_invite: boolean,
  /**
   * True, if messages sent to the channel should contain information about the sender.
   * This field is only applicable to channels
   */
  sign_messages: boolean,
  /** True, if the supergroup is a channel */
  is_channel: boolean,
  /** True, if the supergroup or channel is verified */
  is_verified: boolean,
  /**
   * If non-empty, contains the reason why access to this supergroup or channel must be
   * restricted. Format of the string is "{type}: {description}". {type} Contains the
   * type of the restriction and at least one of the suffixes "-all", "-ios", "-android",
   * or "-wp", which describe the platforms on which access should be restricted. (For
   * example, "terms-ios-android". {description} contains a human-readable description
   * of the restriction, which can be shown to the user)
   */
  restriction_reason: string,
}

/**
 * Represents a supergroup or channel with zero or more members (subscribers in the
 * case of channels). From the point of view of the system, a channel is a special kind
 * of a supergroup: only administrators can post and see the list of members, and posts
 * from all administrators use the name and photo of the channel instead of individual
 * names and profile photos. Unlike supergroups, channels can have an unlimited number
 * of subscribers
 */
export type supergroup$Input = {
  readonly _: 'supergroup',
  /** Supergroup or channel identifier */
  readonly id?: number,
  /** Username of the supergroup or channel; empty for private supergroups or channels */
  readonly username?: string,
  /**
   * Point in time (Unix timestamp) when the current user joined, or the point in time
   * when the supergroup or channel was created, in case the user is not a member
   */
  readonly date?: number,
  /** Status of the current user in the supergroup or channel */
  readonly status?: ChatMemberStatus$Input,
  /**
   * Member count; 0 if unknown. Currently it is guaranteed to be known only if the supergroup
   * or channel was found through SearchPublicChats
   */
  readonly member_count?: number,
  /**
   * True, if any member of the supergroup can invite other members. This field has no
   * meaning for channels
   */
  readonly anyone_can_invite?: boolean,
  /**
   * True, if messages sent to the channel should contain information about the sender.
   * This field is only applicable to channels
   */
  readonly sign_messages?: boolean,
  /** True, if the supergroup is a channel */
  readonly is_channel?: boolean,
  /** True, if the supergroup or channel is verified */
  readonly is_verified?: boolean,
  /**
   * If non-empty, contains the reason why access to this supergroup or channel must be
   * restricted. Format of the string is "{type}: {description}". {type} Contains the
   * type of the restriction and at least one of the suffixes "-all", "-ios", "-android",
   * or "-wp", which describe the platforms on which access should be restricted. (For
   * example, "terms-ios-android". {description} contains a human-readable description
   * of the restriction, which can be shown to the user)
   */
  readonly restriction_reason?: string,
}

/** Contains full information about a supergroup or channel */
export type supergroupFullInfo = {
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
  /** True, if members of the chat can be retrieved */
  can_get_members: boolean,
  /** True, if the chat can be made public */
  can_set_username: boolean,
  /** True, if the supergroup sticker set can be changed */
  can_set_sticker_set: boolean,
  /** True, if the channel statistics is available through getChatStatisticsUrl */
  can_view_statistics: boolean,
  /**
   * True, if new chat members will have access to old messages. In public supergroups
   * and both public and private channels, old messages are always available, so this
   * option affects only private supergroups. The value of this field is only available
   * for chat administrators
   */
  is_all_history_available: boolean,
  /** Identifier of the supergroup sticker set; 0 if none */
  sticker_set_id: number | string,
  /** Invite link for this chat */
  invite_link: string,
  /** Identifier of the basic group from which supergroup was upgraded; 0 if none */
  upgraded_from_basic_group_id: number,
  /**
   * Identifier of the last message in the basic group from which supergroup was upgraded;
   * 0 if none
   */
  upgraded_from_max_message_id: number,
}

/** Contains full information about a supergroup or channel */
export type supergroupFullInfo$Input = {
  readonly _: 'supergroupFullInfo',
  /** Supergroup or channel description */
  readonly description?: string,
  /** Number of members in the supergroup or channel; 0 if unknown */
  readonly member_count?: number,
  /** Number of privileged users in the supergroup or channel; 0 if unknown */
  readonly administrator_count?: number,
  /** Number of restricted users in the supergroup; 0 if unknown */
  readonly restricted_count?: number,
  /** Number of users banned from chat; 0 if unknown */
  readonly banned_count?: number,
  /** True, if members of the chat can be retrieved */
  readonly can_get_members?: boolean,
  /** True, if the chat can be made public */
  readonly can_set_username?: boolean,
  /** True, if the supergroup sticker set can be changed */
  readonly can_set_sticker_set?: boolean,
  /** True, if the channel statistics is available through getChatStatisticsUrl */
  readonly can_view_statistics?: boolean,
  /**
   * True, if new chat members will have access to old messages. In public supergroups
   * and both public and private channels, old messages are always available, so this
   * option affects only private supergroups. The value of this field is only available
   * for chat administrators
   */
  readonly is_all_history_available?: boolean,
  /** Identifier of the supergroup sticker set; 0 if none */
  readonly sticker_set_id?: number | string,
  /** Invite link for this chat */
  readonly invite_link?: string,
  /** Identifier of the basic group from which supergroup was upgraded; 0 if none */
  readonly upgraded_from_basic_group_id?: number,
  /**
   * Identifier of the last message in the basic group from which supergroup was upgraded;
   * 0 if none
   */
  readonly upgraded_from_max_message_id?: number,
}

/** The secret chat is not yet created; waiting for the other user to get online */
export type secretChatStatePending = {
  _: 'secretChatStatePending',
}

/** The secret chat is not yet created; waiting for the other user to get online */
export type secretChatStatePending$Input = {
  readonly _: 'secretChatStatePending',
}

/** The secret chat is ready to use */
export type secretChatStateReady = {
  _: 'secretChatStateReady',
}

/** The secret chat is ready to use */
export type secretChatStateReady$Input = {
  readonly _: 'secretChatStateReady',
}

/** The secret chat is closed */
export type secretChatStateClosed = {
  _: 'secretChatStateClosed',
}

/** The secret chat is closed */
export type secretChatStateClosed$Input = {
  readonly _: 'secretChatStateClosed',
}

/** Represents a secret chat */
export type secretChat = {
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
   * key. This is a string of 36 bytes, which must be used to make a 12x12 square image
   * with a color depth of 4. The first 16 bytes should be used to make a central 8x8
   * square, while the remaining 20 bytes should be used to construct a 2-pixel-wide border
   * around that square. Alternatively, the first 32 bytes of the hash can be converted
   * to the hexadecimal format and printed as 32 2-digit hex numbers
   */
  key_hash: string,
  /**
   * Secret chat layer; determines features supported by the other client. Video notes
   * are supported if the layer >= 66
   */
  layer: number,
}

/** Represents a secret chat */
export type secretChat$Input = {
  readonly _: 'secretChat',
  /** Secret chat identifier */
  readonly id?: number,
  /** Identifier of the chat partner */
  readonly user_id?: number,
  /** State of the secret chat */
  readonly state?: SecretChatState$Input,
  /** True, if the chat was created by the current user; otherwise false */
  readonly is_outbound?: boolean,
  /** Current message Time To Live setting (self-destruct timer) for the chat, in seconds */
  readonly ttl?: number,
  /**
   * Hash of the currently used key for comparison with the hash of the chat partner's
   * key. This is a string of 36 bytes, which must be used to make a 12x12 square image
   * with a color depth of 4. The first 16 bytes should be used to make a central 8x8
   * square, while the remaining 20 bytes should be used to construct a 2-pixel-wide border
   * around that square. Alternatively, the first 32 bytes of the hash can be converted
   * to the hexadecimal format and printed as 32 2-digit hex numbers
   */
  readonly key_hash?: string,
  /**
   * Secret chat layer; determines features supported by the other client. Video notes
   * are supported if the layer >= 66
   */
  readonly layer?: number,
}

/** The message was originally written by a known user */
export type messageForwardOriginUser = {
  _: 'messageForwardOriginUser',
  /** Identifier of the user that originally sent the message */
  sender_user_id: number,
}

/** The message was originally written by a known user */
export type messageForwardOriginUser$Input = {
  readonly _: 'messageForwardOriginUser',
  /** Identifier of the user that originally sent the message */
  readonly sender_user_id?: number,
}

/** The message was originally written by a user, which is hidden by his privacy settings */
export type messageForwardOriginHiddenUser = {
  _: 'messageForwardOriginHiddenUser',
  /** Name of the sender */
  sender_name: string,
}

/** The message was originally written by a user, which is hidden by his privacy settings */
export type messageForwardOriginHiddenUser$Input = {
  readonly _: 'messageForwardOriginHiddenUser',
  /** Name of the sender */
  readonly sender_name?: string,
}

/** The message was originally a post in a channel */
export type messageForwardOriginChannel = {
  _: 'messageForwardOriginChannel',
  /** Identifier of the chat from which the message was originally forwarded */
  chat_id: number,
  /** Message identifier of the original message; 0 if unknown */
  message_id: number,
  /** Original post author signature */
  author_signature: string,
}

/** The message was originally a post in a channel */
export type messageForwardOriginChannel$Input = {
  readonly _: 'messageForwardOriginChannel',
  /** Identifier of the chat from which the message was originally forwarded */
  readonly chat_id?: number,
  /** Message identifier of the original message; 0 if unknown */
  readonly message_id?: number,
  /** Original post author signature */
  readonly author_signature?: string,
}

/** Contains information about a forwarded message */
export type messageForwardInfo = {
  _: 'messageForwardInfo',
  /** Origin of a forwarded message */
  origin: MessageForwardOrigin,
  /** Point in time (Unix timestamp) when the message was originally sent */
  date: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded last time; 0 if unknown
   */
  from_chat_id: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the original message from which the new message was forwarded last time; 0 if
   * unknown
   */
  from_message_id: number,
}

/** Contains information about a forwarded message */
export type messageForwardInfo$Input = {
  readonly _: 'messageForwardInfo',
  /** Origin of a forwarded message */
  readonly origin?: MessageForwardOrigin$Input,
  /** Point in time (Unix timestamp) when the message was originally sent */
  readonly date?: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded last time; 0 if unknown
   */
  readonly from_chat_id?: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the original message from which the new message was forwarded last time; 0 if
   * unknown
   */
  readonly from_message_id?: number,
}

/** The message is being sent now, but has not yet been delivered to the server */
export type messageSendingStatePending = {
  _: 'messageSendingStatePending',
}

/** The message is being sent now, but has not yet been delivered to the server */
export type messageSendingStatePending$Input = {
  readonly _: 'messageSendingStatePending',
}

/** The message failed to be sent */
export type messageSendingStateFailed = {
  _: 'messageSendingStateFailed',
}

/** The message failed to be sent */
export type messageSendingStateFailed$Input = {
  readonly _: 'messageSendingStateFailed',
}

/** Describes a message */
export type message = {
  _: 'message',
  /** Message identifier, unique for the chat to which the message belongs */
  id: number,
  /**
   * Identifier of the user who sent the message; 0 if unknown. It is unknown for channel
   * posts
   */
  sender_user_id: number,
  /** Chat identifier */
  chat_id: number,
  /** Information about the sending state of the message; may be null */
  sending_state: MessageSendingState,
  /** True, if the message is outgoing */
  is_outgoing: boolean,
  /**
   * True, if the message can be edited. For live location and poll messages this fields
   * shows, whether editMessageLiveLocation or stopPoll can be used with this message
   * by the client
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
  /** Content of the message */
  content: MessageContent,
  /** Reply markup for the message; may be null */
  reply_markup: ReplyMarkup,
}

/** Describes a message */
export type message$Input = {
  readonly _: 'message',
  /** Message identifier, unique for the chat to which the message belongs */
  readonly id?: number,
  /**
   * Identifier of the user who sent the message; 0 if unknown. It is unknown for channel
   * posts
   */
  readonly sender_user_id?: number,
  /** Chat identifier */
  readonly chat_id?: number,
  /** Information about the sending state of the message; may be null */
  readonly sending_state?: MessageSendingState$Input,
  /** True, if the message is outgoing */
  readonly is_outgoing?: boolean,
  /**
   * True, if the message can be edited. For live location and poll messages this fields
   * shows, whether editMessageLiveLocation or stopPoll can be used with this message
   * by the client
   */
  readonly can_be_edited?: boolean,
  /** True, if the message can be forwarded */
  readonly can_be_forwarded?: boolean,
  /**
   * True, if the message can be deleted only for the current user while other users will
   * continue to see it
   */
  readonly can_be_deleted_only_for_self?: boolean,
  /** True, if the message can be deleted for all users */
  readonly can_be_deleted_for_all_users?: boolean,
  /**
   * True, if the message is a channel post. All messages to channels are channel posts,
   * all other messages are not channel posts
   */
  readonly is_channel_post?: boolean,
  /** True, if the message contains an unread mention for the current user */
  readonly contains_unread_mention?: boolean,
  /** Point in time (Unix timestamp) when the message was sent */
  readonly date?: number,
  /** Point in time (Unix timestamp) when the message was last edited */
  readonly edit_date?: number,
  /** Information about the initial message sender; may be null */
  readonly forward_info?: messageForwardInfo$Input,
  /**
   * If non-zero, the identifier of the message this message is replying to; can be the
   * identifier of a deleted message
   */
  readonly reply_to_message_id?: number,
  /**
   * For self-destructing messages, the message's TTL (Time To Live), in seconds; 0 if
   * none. TDLib will send updateDeleteMessages or updateMessageContent once the TTL expires
   */
  readonly ttl?: number,
  /** Time left before the message expires, in seconds */
  readonly ttl_expires_in?: number,
  /** If non-zero, the user identifier of the bot through which this message was sent */
  readonly via_bot_user_id?: number,
  /** For channel posts, optional author signature */
  readonly author_signature?: string,
  /** Number of times this message was viewed */
  readonly views?: number,
  /**
   * Unique identifier of an album this message belongs to. Only photos and videos can
   * be grouped together in albums
   */
  readonly media_album_id?: number | string,
  /** Content of the message */
  readonly content?: MessageContent$Input,
  /** Reply markup for the message; may be null */
  readonly reply_markup?: ReplyMarkup$Input,
}

/** Contains a list of messages */
export type messages = {
  _: 'messages',
  /** Approximate total count of messages found */
  total_count: number,
  /** List of messages; messages may be null */
  messages: Array<message>,
}

/** Contains a list of messages */
export type messages$Input = {
  readonly _: 'messages',
  /** Approximate total count of messages found */
  readonly total_count?: number,
  /** List of messages; messages may be null */
  readonly messages?: ReadonlyArray<message$Input>,
}

/** Contains a list of messages found by a search */
export type foundMessages = {
  _: 'foundMessages',
  /** List of messages */
  messages: Array<message>,
  /** Value to pass as from_search_id to get more results */
  next_from_search_id: number | string,
}

/** Contains a list of messages found by a search */
export type foundMessages$Input = {
  readonly _: 'foundMessages',
  /** List of messages */
  readonly messages?: ReadonlyArray<message$Input>,
  /** Value to pass as from_search_id to get more results */
  readonly next_from_search_id?: number | string,
}

/**
 * Notification settings applied to all private and secret chats when the corresponding
 * chat setting has a default value
 */
export type notificationSettingsScopePrivateChats = {
  _: 'notificationSettingsScopePrivateChats',
}

/**
 * Notification settings applied to all private and secret chats when the corresponding
 * chat setting has a default value
 */
export type notificationSettingsScopePrivateChats$Input = {
  readonly _: 'notificationSettingsScopePrivateChats',
}

/**
 * Notification settings applied to all basic groups and supergroups when the corresponding
 * chat setting has a default value
 */
export type notificationSettingsScopeGroupChats = {
  _: 'notificationSettingsScopeGroupChats',
}

/**
 * Notification settings applied to all basic groups and supergroups when the corresponding
 * chat setting has a default value
 */
export type notificationSettingsScopeGroupChats$Input = {
  readonly _: 'notificationSettingsScopeGroupChats',
}

/**
 * Notification settings applied to all channels when the corresponding chat setting
 * has a default value
 */
export type notificationSettingsScopeChannelChats = {
  _: 'notificationSettingsScopeChannelChats',
}

/**
 * Notification settings applied to all channels when the corresponding chat setting
 * has a default value
 */
export type notificationSettingsScopeChannelChats$Input = {
  readonly _: 'notificationSettingsScopeChannelChats',
}

/** Contains information about notification settings for a chat */
export type chatNotificationSettings = {
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
}

/** Contains information about notification settings for a chat */
export type chatNotificationSettings$Input = {
  readonly _: 'chatNotificationSettings',
  /**
   * If true, mute_for is ignored and the value for the relevant type of chat is used
   * instead
   */
  readonly use_default_mute_for?: boolean,
  /** Time left before notifications will be unmuted, in seconds */
  readonly mute_for?: number,
  /** If true, sound is ignored and the value for the relevant type of chat is used instead */
  readonly use_default_sound?: boolean,
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  readonly sound?: string,
  /**
   * If true, show_preview is ignored and the value for the relevant type of chat is used
   * instead
   */
  readonly use_default_show_preview?: boolean,
  /** True, if message content should be displayed in notifications */
  readonly show_preview?: boolean,
  /**
   * If true, disable_pinned_message_notifications is ignored and the value for the relevant
   * type of chat is used instead
   */
  readonly use_default_disable_pinned_message_notifications?: boolean,
  /**
   * If true, notifications for incoming pinned messages will be created as for an ordinary
   * unread message
   */
  readonly disable_pinned_message_notifications?: boolean,
  /**
   * If true, disable_mention_notifications is ignored and the value for the relevant
   * type of chat is used instead
   */
  readonly use_default_disable_mention_notifications?: boolean,
  /**
   * If true, notifications for messages with mentions will be created as for an ordinary
   * unread message
   */
  readonly disable_mention_notifications?: boolean,
}

/** Contains information about notification settings for several chats */
export type scopeNotificationSettings = {
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
}

/** Contains information about notification settings for several chats */
export type scopeNotificationSettings$Input = {
  readonly _: 'scopeNotificationSettings',
  /** Time left before notifications will be unmuted, in seconds */
  readonly mute_for?: number,
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  readonly sound?: string,
  /** True, if message content should be displayed in notifications */
  readonly show_preview?: boolean,
  /**
   * True, if notifications for incoming pinned messages will be created as for an ordinary
   * unread message
   */
  readonly disable_pinned_message_notifications?: boolean,
  /**
   * True, if notifications for messages with mentions will be created as for an ordinary
   * unread message
   */
  readonly disable_mention_notifications?: boolean,
}

/** Contains information about a message draft */
export type draftMessage = {
  _: 'draftMessage',
  /** Identifier of the message to reply to; 0 if none */
  reply_to_message_id: number,
  /** Content of the message draft; this should always be of type inputMessageText */
  input_message_text: InputMessageContent,
}

/** Contains information about a message draft */
export type draftMessage$Input = {
  readonly _: 'draftMessage',
  /** Identifier of the message to reply to; 0 if none */
  readonly reply_to_message_id?: number,
  /** Content of the message draft; this should always be of type inputMessageText */
  readonly input_message_text?: InputMessageContent$Input,
}

/** An ordinary chat with a user */
export type chatTypePrivate = {
  _: 'chatTypePrivate',
  /** User identifier */
  user_id: number,
}

/** An ordinary chat with a user */
export type chatTypePrivate$Input = {
  readonly _: 'chatTypePrivate',
  /** User identifier */
  readonly user_id?: number,
}

/** A basic group (i.e., a chat with 0-200 other users) */
export type chatTypeBasicGroup = {
  _: 'chatTypeBasicGroup',
  /** Basic group identifier */
  basic_group_id: number,
}

/** A basic group (i.e., a chat with 0-200 other users) */
export type chatTypeBasicGroup$Input = {
  readonly _: 'chatTypeBasicGroup',
  /** Basic group identifier */
  readonly basic_group_id?: number,
}

/**
 * A supergroup (i.e. a chat with up to GetOption("supergroup_max_size") other users),
 * or channel (with unlimited members)
 */
export type chatTypeSupergroup = {
  _: 'chatTypeSupergroup',
  /** Supergroup or channel identifier */
  supergroup_id: number,
  /** True, if the supergroup is a channel */
  is_channel: boolean,
}

/**
 * A supergroup (i.e. a chat with up to GetOption("supergroup_max_size") other users),
 * or channel (with unlimited members)
 */
export type chatTypeSupergroup$Input = {
  readonly _: 'chatTypeSupergroup',
  /** Supergroup or channel identifier */
  readonly supergroup_id?: number,
  /** True, if the supergroup is a channel */
  readonly is_channel?: boolean,
}

/** A secret chat with a user */
export type chatTypeSecret = {
  _: 'chatTypeSecret',
  /** Secret chat identifier */
  secret_chat_id: number,
  /** User identifier of the secret chat peer */
  user_id: number,
}

/** A secret chat with a user */
export type chatTypeSecret$Input = {
  readonly _: 'chatTypeSecret',
  /** Secret chat identifier */
  readonly secret_chat_id?: number,
  /** User identifier of the secret chat peer */
  readonly user_id?: number,
}

/** A chat. (Can be a private chat, basic group, supergroup, or secret chat) */
export type chat = {
  _: 'chat',
  /** Chat unique identifier */
  id: number,
  /** Type of the chat */
  type: ChatType,
  /** Chat title */
  title: string,
  /** Chat photo; may be null */
  photo: chatPhoto,
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
   * or local chat notification settings can be stored here.) Persistent if a message
   * database is used
   */
  client_data: string,
}

/** A chat. (Can be a private chat, basic group, supergroup, or secret chat) */
export type chat$Input = {
  readonly _: 'chat',
  /** Chat unique identifier */
  readonly id?: number,
  /** Type of the chat */
  readonly type?: ChatType$Input,
  /** Chat title */
  readonly title?: string,
  /** Chat photo; may be null */
  readonly photo?: chatPhoto$Input,
  /** Last message in the chat; may be null */
  readonly last_message?: message$Input,
  /**
   * Descending parameter by which chats are sorted in the main chat list. If the order
   * number of two chats is the same, they must be sorted in descending order by ID. If
   * 0, the position of the chat in the list is undetermined
   */
  readonly order?: number | string,
  /** True, if the chat is pinned */
  readonly is_pinned?: boolean,
  /** True, if the chat is marked as unread */
  readonly is_marked_as_unread?: boolean,
  /** True, if the chat is sponsored by the user's MTProxy server */
  readonly is_sponsored?: boolean,
  /**
   * True, if the chat messages can be deleted only for the current user while other users
   * will continue to see the messages
   */
  readonly can_be_deleted_only_for_self?: boolean,
  /** True, if the chat messages can be deleted for all users */
  readonly can_be_deleted_for_all_users?: boolean,
  /** True, if the chat can be reported to Telegram moderators through reportChat */
  readonly can_be_reported?: boolean,
  /**
   * Default value of the disable_notification parameter, used when a message is sent
   * to the chat
   */
  readonly default_disable_notification?: boolean,
  /** Number of unread messages in the chat */
  readonly unread_count?: number,
  /** Identifier of the last read incoming message */
  readonly last_read_inbox_message_id?: number,
  /** Identifier of the last read outgoing message */
  readonly last_read_outbox_message_id?: number,
  /** Number of unread messages with a mention/reply in the chat */
  readonly unread_mention_count?: number,
  /** Notification settings for this chat */
  readonly notification_settings?: chatNotificationSettings$Input,
  /** Identifier of the pinned message in the chat; 0 if none */
  readonly pinned_message_id?: number,
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  readonly reply_markup_message_id?: number,
  /** A draft of a message in the chat; may be null */
  readonly draft_message?: draftMessage$Input,
  /**
   * Contains client-specific data associated with the chat. (For example, the chat position
   * or local chat notification settings can be stored here.) Persistent if a message
   * database is used
   */
  readonly client_data?: string,
}

/** Represents a list of chats */
export type chats = {
  _: 'chats',
  /** List of chat identifiers */
  chat_ids: Array<number>,
}

/** Represents a list of chats */
export type chats$Input = {
  readonly _: 'chats',
  /** List of chat identifiers */
  readonly chat_ids?: ReadonlyArray<number>,
}

/** Contains a chat invite link */
export type chatInviteLink = {
  _: 'chatInviteLink',
  /** Chat invite link */
  invite_link: string,
}

/** Contains a chat invite link */
export type chatInviteLink$Input = {
  readonly _: 'chatInviteLink',
  /** Chat invite link */
  readonly invite_link?: string,
}

/** Contains information about a chat invite link */
export type chatInviteLinkInfo = {
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
  /** True, if the chat is a public supergroup or channel with a username */
  is_public: boolean,
}

/** Contains information about a chat invite link */
export type chatInviteLinkInfo$Input = {
  readonly _: 'chatInviteLinkInfo',
  /** Chat identifier of the invite link; 0 if the user is not a member of this chat */
  readonly chat_id?: number,
  /** Contains information about the type of the chat */
  readonly type?: ChatType$Input,
  /** Title of the chat */
  readonly title?: string,
  /** Chat photo; may be null */
  readonly photo?: chatPhoto$Input,
  /** Number of members */
  readonly member_count?: number,
  /** User identifiers of some chat members that may be known to the current user */
  readonly member_user_ids?: ReadonlyArray<number>,
  /** True, if the chat is a public supergroup or channel with a username */
  readonly is_public?: boolean,
}

/** A simple button, with text that should be sent when the button is pressed */
export type keyboardButtonTypeText = {
  _: 'keyboardButtonTypeText',
}

/** A simple button, with text that should be sent when the button is pressed */
export type keyboardButtonTypeText$Input = {
  readonly _: 'keyboardButtonTypeText',
}

/**
 * A button that sends the user's phone number when pressed; available only in private
 * chats
 */
export type keyboardButtonTypeRequestPhoneNumber = {
  _: 'keyboardButtonTypeRequestPhoneNumber',
}

/**
 * A button that sends the user's phone number when pressed; available only in private
 * chats
 */
export type keyboardButtonTypeRequestPhoneNumber$Input = {
  readonly _: 'keyboardButtonTypeRequestPhoneNumber',
}

/** A button that sends the user's location when pressed; available only in private chats */
export type keyboardButtonTypeRequestLocation = {
  _: 'keyboardButtonTypeRequestLocation',
}

/** A button that sends the user's location when pressed; available only in private chats */
export type keyboardButtonTypeRequestLocation$Input = {
  readonly _: 'keyboardButtonTypeRequestLocation',
}

/** Represents a single button in a bot keyboard */
export type keyboardButton = {
  _: 'keyboardButton',
  /** Text of the button */
  text: string,
  /** Type of the button */
  type: KeyboardButtonType,
}

/** Represents a single button in a bot keyboard */
export type keyboardButton$Input = {
  readonly _: 'keyboardButton',
  /** Text of the button */
  readonly text?: string,
  /** Type of the button */
  readonly type?: KeyboardButtonType$Input,
}

/** A button that opens a specified URL */
export type inlineKeyboardButtonTypeUrl = {
  _: 'inlineKeyboardButtonTypeUrl',
  /** HTTP or tg:// URL to open */
  url: string,
}

/** A button that opens a specified URL */
export type inlineKeyboardButtonTypeUrl$Input = {
  readonly _: 'inlineKeyboardButtonTypeUrl',
  /** HTTP or tg:// URL to open */
  readonly url?: string,
}

/** A button that sends a special callback query to a bot */
export type inlineKeyboardButtonTypeCallback = {
  _: 'inlineKeyboardButtonTypeCallback',
  /** Data to be sent to the bot via a callback query */
  data: string,
}

/** A button that sends a special callback query to a bot */
export type inlineKeyboardButtonTypeCallback$Input = {
  readonly _: 'inlineKeyboardButtonTypeCallback',
  /** Data to be sent to the bot via a callback query */
  readonly data?: string,
}

/**
 * A button with a game that sends a special callback query to a bot. This button must
 * be in the first column and row of the keyboard and can be attached only to a message
 * with content of the type messageGame
 */
export type inlineKeyboardButtonTypeCallbackGame = {
  _: 'inlineKeyboardButtonTypeCallbackGame',
}

/**
 * A button with a game that sends a special callback query to a bot. This button must
 * be in the first column and row of the keyboard and can be attached only to a message
 * with content of the type messageGame
 */
export type inlineKeyboardButtonTypeCallbackGame$Input = {
  readonly _: 'inlineKeyboardButtonTypeCallbackGame',
}

/** A button that forces an inline query to the bot to be inserted in the input field */
export type inlineKeyboardButtonTypeSwitchInline = {
  _: 'inlineKeyboardButtonTypeSwitchInline',
  /** Inline query to be sent to the bot */
  query: string,
  /** True, if the inline query should be sent from the current chat */
  in_current_chat: boolean,
}

/** A button that forces an inline query to the bot to be inserted in the input field */
export type inlineKeyboardButtonTypeSwitchInline$Input = {
  readonly _: 'inlineKeyboardButtonTypeSwitchInline',
  /** Inline query to be sent to the bot */
  readonly query?: string,
  /** True, if the inline query should be sent from the current chat */
  readonly in_current_chat?: boolean,
}

/**
 * A button to buy something. This button must be in the first column and row of the
 * keyboard and can be attached only to a message with content of the type messageInvoice
 */
export type inlineKeyboardButtonTypeBuy = {
  _: 'inlineKeyboardButtonTypeBuy',
}

/**
 * A button to buy something. This button must be in the first column and row of the
 * keyboard and can be attached only to a message with content of the type messageInvoice
 */
export type inlineKeyboardButtonTypeBuy$Input = {
  readonly _: 'inlineKeyboardButtonTypeBuy',
}

/** Represents a single button in an inline keyboard */
export type inlineKeyboardButton = {
  _: 'inlineKeyboardButton',
  /** Text of the button */
  text: string,
  /** Type of the button */
  type: InlineKeyboardButtonType,
}

/** Represents a single button in an inline keyboard */
export type inlineKeyboardButton$Input = {
  readonly _: 'inlineKeyboardButton',
  /** Text of the button */
  readonly text?: string,
  /** Type of the button */
  readonly type?: InlineKeyboardButtonType$Input,
}

/**
 * Instructs clients to remove the keyboard once this message has been received. This
 * kind of keyboard can't be received in an incoming message; instead, UpdateChatReplyMarkup
 * with message_id == 0 will be sent
 */
export type replyMarkupRemoveKeyboard = {
  _: 'replyMarkupRemoveKeyboard',
  /**
   * True, if the keyboard is removed only for the mentioned users or the target user
   * of a reply
   */
  is_personal: boolean,
}

/**
 * Instructs clients to remove the keyboard once this message has been received. This
 * kind of keyboard can't be received in an incoming message; instead, UpdateChatReplyMarkup
 * with message_id == 0 will be sent
 */
export type replyMarkupRemoveKeyboard$Input = {
  readonly _: 'replyMarkupRemoveKeyboard',
  /**
   * True, if the keyboard is removed only for the mentioned users or the target user
   * of a reply
   */
  readonly is_personal?: boolean,
}

/** Instructs clients to force a reply to this message */
export type replyMarkupForceReply = {
  _: 'replyMarkupForceReply',
  /**
   * True, if a forced reply must automatically be shown to the current user. For outgoing
   * messages, specify true to show the forced reply only for the mentioned users and
   * for the target user of a reply
   */
  is_personal: boolean,
}

/** Instructs clients to force a reply to this message */
export type replyMarkupForceReply$Input = {
  readonly _: 'replyMarkupForceReply',
  /**
   * True, if a forced reply must automatically be shown to the current user. For outgoing
   * messages, specify true to show the forced reply only for the mentioned users and
   * for the target user of a reply
   */
  readonly is_personal?: boolean,
}

/** Contains a custom keyboard layout to quickly reply to bots */
export type replyMarkupShowKeyboard = {
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
}

/** Contains a custom keyboard layout to quickly reply to bots */
export type replyMarkupShowKeyboard$Input = {
  readonly _: 'replyMarkupShowKeyboard',
  /** A list of rows of bot keyboard buttons */
  readonly rows?: ReadonlyArray<ReadonlyArray<keyboardButton$Input>>,
  /** True, if the client needs to resize the keyboard vertically */
  readonly resize_keyboard?: boolean,
  /** True, if the client needs to hide the keyboard after use */
  readonly one_time?: boolean,
  /**
   * True, if the keyboard must automatically be shown to the current user. For outgoing
   * messages, specify true to show the keyboard only for the mentioned users and for
   * the target user of a reply
   */
  readonly is_personal?: boolean,
}

/** Contains an inline keyboard layout */
export type replyMarkupInlineKeyboard = {
  _: 'replyMarkupInlineKeyboard',
  /** A list of rows of inline keyboard buttons */
  rows: Array<Array<inlineKeyboardButton>>,
}

/** Contains an inline keyboard layout */
export type replyMarkupInlineKeyboard$Input = {
  readonly _: 'replyMarkupInlineKeyboard',
  /** A list of rows of inline keyboard buttons */
  readonly rows?: ReadonlyArray<ReadonlyArray<inlineKeyboardButton$Input>>,
}

/** A plain text */
export type richTextPlain = {
  _: 'richTextPlain',
  /** Text */
  text: string,
}

/** A plain text */
export type richTextPlain$Input = {
  readonly _: 'richTextPlain',
  /** Text */
  readonly text?: string,
}

/** A bold rich text */
export type richTextBold = {
  _: 'richTextBold',
  /** Text */
  text: RichText,
}

/** A bold rich text */
export type richTextBold$Input = {
  readonly _: 'richTextBold',
  /** Text */
  readonly text?: RichText$Input,
}

/** An italicized rich text */
export type richTextItalic = {
  _: 'richTextItalic',
  /** Text */
  text: RichText,
}

/** An italicized rich text */
export type richTextItalic$Input = {
  readonly _: 'richTextItalic',
  /** Text */
  readonly text?: RichText$Input,
}

/** An underlined rich text */
export type richTextUnderline = {
  _: 'richTextUnderline',
  /** Text */
  text: RichText,
}

/** An underlined rich text */
export type richTextUnderline$Input = {
  readonly _: 'richTextUnderline',
  /** Text */
  readonly text?: RichText$Input,
}

/** A strike-through rich text */
export type richTextStrikethrough = {
  _: 'richTextStrikethrough',
  /** Text */
  text: RichText,
}

/** A strike-through rich text */
export type richTextStrikethrough$Input = {
  readonly _: 'richTextStrikethrough',
  /** Text */
  readonly text?: RichText$Input,
}

/** A fixed-width rich text */
export type richTextFixed = {
  _: 'richTextFixed',
  /** Text */
  text: RichText,
}

/** A fixed-width rich text */
export type richTextFixed$Input = {
  readonly _: 'richTextFixed',
  /** Text */
  readonly text?: RichText$Input,
}

/** A rich text URL link */
export type richTextUrl = {
  _: 'richTextUrl',
  /** Text */
  text: RichText,
  /** URL */
  url: string,
}

/** A rich text URL link */
export type richTextUrl$Input = {
  readonly _: 'richTextUrl',
  /** Text */
  readonly text?: RichText$Input,
  /** URL */
  readonly url?: string,
}

/** A rich text email link */
export type richTextEmailAddress = {
  _: 'richTextEmailAddress',
  /** Text */
  text: RichText,
  /** Email address */
  email_address: string,
}

/** A rich text email link */
export type richTextEmailAddress$Input = {
  readonly _: 'richTextEmailAddress',
  /** Text */
  readonly text?: RichText$Input,
  /** Email address */
  readonly email_address?: string,
}

/** A subscript rich text */
export type richTextSubscript = {
  _: 'richTextSubscript',
  /** Text */
  text: RichText,
}

/** A subscript rich text */
export type richTextSubscript$Input = {
  readonly _: 'richTextSubscript',
  /** Text */
  readonly text?: RichText$Input,
}

/** A superscript rich text */
export type richTextSuperscript = {
  _: 'richTextSuperscript',
  /** Text */
  text: RichText,
}

/** A superscript rich text */
export type richTextSuperscript$Input = {
  readonly _: 'richTextSuperscript',
  /** Text */
  readonly text?: RichText$Input,
}

/** A marked rich text */
export type richTextMarked = {
  _: 'richTextMarked',
  /** Text */
  text: RichText,
}

/** A marked rich text */
export type richTextMarked$Input = {
  readonly _: 'richTextMarked',
  /** Text */
  readonly text?: RichText$Input,
}

/** A rich text phone number */
export type richTextPhoneNumber = {
  _: 'richTextPhoneNumber',
  /** Text */
  text: RichText,
  /** Phone number */
  phone_number: string,
}

/** A rich text phone number */
export type richTextPhoneNumber$Input = {
  readonly _: 'richTextPhoneNumber',
  /** Text */
  readonly text?: RichText$Input,
  /** Phone number */
  readonly phone_number?: string,
}

/** A small image inside the text */
export type richTextIcon = {
  _: 'richTextIcon',
  /** The image represented as a document. The image can be in GIF, JPEG or PNG format */
  document: document,
  /** Width of a bounding box in which the image should be shown, 0 if unknown */
  width: number,
  /** Height of a bounding box in which the image should be shown, 0 if unknown */
  height: number,
}

/** A small image inside the text */
export type richTextIcon$Input = {
  readonly _: 'richTextIcon',
  /** The image represented as a document. The image can be in GIF, JPEG or PNG format */
  readonly document?: document$Input,
  /** Width of a bounding box in which the image should be shown, 0 if unknown */
  readonly width?: number,
  /** Height of a bounding box in which the image should be shown, 0 if unknown */
  readonly height?: number,
}

/** A rich text anchor */
export type richTextAnchor = {
  _: 'richTextAnchor',
  /** Text */
  text: RichText,
  /** Anchor name */
  name: string,
}

/** A rich text anchor */
export type richTextAnchor$Input = {
  readonly _: 'richTextAnchor',
  /** Text */
  readonly text?: RichText$Input,
  /** Anchor name */
  readonly name?: string,
}

/** A concatenation of rich texts */
export type richTexts = {
  _: 'richTexts',
  /** Texts */
  texts: Array<RichText>,
}

/** A concatenation of rich texts */
export type richTexts$Input = {
  readonly _: 'richTexts',
  /** Texts */
  readonly texts?: ReadonlyArray<RichText$Input>,
}

/**
 * Contains a caption of an instant view web page block, consisting of a text and a
 * trailing credit
 */
export type pageBlockCaption = {
  _: 'pageBlockCaption',
  /** Content of the caption */
  text: RichText,
  /** Block credit (like HTML tag <cite>) */
  credit: RichText,
}

/**
 * Contains a caption of an instant view web page block, consisting of a text and a
 * trailing credit
 */
export type pageBlockCaption$Input = {
  readonly _: 'pageBlockCaption',
  /** Content of the caption */
  readonly text?: RichText$Input,
  /** Block credit (like HTML tag <cite>) */
  readonly credit?: RichText$Input,
}

/** Describes an item of a list page block */
export type pageBlockListItem = {
  _: 'pageBlockListItem',
  /** Item label */
  label: string,
  /** Item blocks */
  page_blocks: Array<PageBlock>,
}

/** Describes an item of a list page block */
export type pageBlockListItem$Input = {
  readonly _: 'pageBlockListItem',
  /** Item label */
  readonly label?: string,
  /** Item blocks */
  readonly page_blocks?: ReadonlyArray<PageBlock$Input>,
}

/** The content should be left-aligned */
export type pageBlockHorizontalAlignmentLeft = {
  _: 'pageBlockHorizontalAlignmentLeft',
}

/** The content should be left-aligned */
export type pageBlockHorizontalAlignmentLeft$Input = {
  readonly _: 'pageBlockHorizontalAlignmentLeft',
}

/** The content should be center-aligned */
export type pageBlockHorizontalAlignmentCenter = {
  _: 'pageBlockHorizontalAlignmentCenter',
}

/** The content should be center-aligned */
export type pageBlockHorizontalAlignmentCenter$Input = {
  readonly _: 'pageBlockHorizontalAlignmentCenter',
}

/** The content should be right-aligned */
export type pageBlockHorizontalAlignmentRight = {
  _: 'pageBlockHorizontalAlignmentRight',
}

/** The content should be right-aligned */
export type pageBlockHorizontalAlignmentRight$Input = {
  readonly _: 'pageBlockHorizontalAlignmentRight',
}

/** The content should be top-aligned */
export type pageBlockVerticalAlignmentTop = {
  _: 'pageBlockVerticalAlignmentTop',
}

/** The content should be top-aligned */
export type pageBlockVerticalAlignmentTop$Input = {
  readonly _: 'pageBlockVerticalAlignmentTop',
}

/** The content should be middle-aligned */
export type pageBlockVerticalAlignmentMiddle = {
  _: 'pageBlockVerticalAlignmentMiddle',
}

/** The content should be middle-aligned */
export type pageBlockVerticalAlignmentMiddle$Input = {
  readonly _: 'pageBlockVerticalAlignmentMiddle',
}

/** The content should be bottom-aligned */
export type pageBlockVerticalAlignmentBottom = {
  _: 'pageBlockVerticalAlignmentBottom',
}

/** The content should be bottom-aligned */
export type pageBlockVerticalAlignmentBottom$Input = {
  readonly _: 'pageBlockVerticalAlignmentBottom',
}

/** Represents a cell of a table */
export type pageBlockTableCell = {
  _: 'pageBlockTableCell',
  /** Cell text */
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
}

/** Represents a cell of a table */
export type pageBlockTableCell$Input = {
  readonly _: 'pageBlockTableCell',
  /** Cell text */
  readonly text?: RichText$Input,
  /** True, if it is a header cell */
  readonly is_header?: boolean,
  /** The number of columns the cell should span */
  readonly colspan?: number,
  /** The number of rows the cell should span */
  readonly rowspan?: number,
  /** Horizontal cell content alignment */
  readonly align?: PageBlockHorizontalAlignment$Input,
  /** Vertical cell content alignment */
  readonly valign?: PageBlockVerticalAlignment$Input,
}

/** Contains information about a related article */
export type pageBlockRelatedArticle = {
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
}

/** Contains information about a related article */
export type pageBlockRelatedArticle$Input = {
  readonly _: 'pageBlockRelatedArticle',
  /** Related article URL */
  readonly url?: string,
  /** Article title; may be empty */
  readonly title?: string,
  /** Article description; may be empty */
  readonly description?: string,
  /** Article photo; may be null */
  readonly photo?: photo$Input,
  /** Article author; may be empty */
  readonly author?: string,
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  readonly publish_date?: number,
}

/** The title of a page */
export type pageBlockTitle = {
  _: 'pageBlockTitle',
  /** Title */
  title: RichText,
}

/** The title of a page */
export type pageBlockTitle$Input = {
  readonly _: 'pageBlockTitle',
  /** Title */
  readonly title?: RichText$Input,
}

/** The subtitle of a page */
export type pageBlockSubtitle = {
  _: 'pageBlockSubtitle',
  /** Subtitle */
  subtitle: RichText,
}

/** The subtitle of a page */
export type pageBlockSubtitle$Input = {
  readonly _: 'pageBlockSubtitle',
  /** Subtitle */
  readonly subtitle?: RichText$Input,
}

/** The author and publishing date of a page */
export type pageBlockAuthorDate = {
  _: 'pageBlockAuthorDate',
  /** Author */
  author: RichText,
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  publish_date: number,
}

/** The author and publishing date of a page */
export type pageBlockAuthorDate$Input = {
  readonly _: 'pageBlockAuthorDate',
  /** Author */
  readonly author?: RichText$Input,
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  readonly publish_date?: number,
}

/** A header */
export type pageBlockHeader = {
  _: 'pageBlockHeader',
  /** Header */
  header: RichText,
}

/** A header */
export type pageBlockHeader$Input = {
  readonly _: 'pageBlockHeader',
  /** Header */
  readonly header?: RichText$Input,
}

/** A subheader */
export type pageBlockSubheader = {
  _: 'pageBlockSubheader',
  /** Subheader */
  subheader: RichText,
}

/** A subheader */
export type pageBlockSubheader$Input = {
  readonly _: 'pageBlockSubheader',
  /** Subheader */
  readonly subheader?: RichText$Input,
}

/** A kicker */
export type pageBlockKicker = {
  _: 'pageBlockKicker',
  /** Kicker */
  kicker: RichText,
}

/** A kicker */
export type pageBlockKicker$Input = {
  readonly _: 'pageBlockKicker',
  /** Kicker */
  readonly kicker?: RichText$Input,
}

/** A text paragraph */
export type pageBlockParagraph = {
  _: 'pageBlockParagraph',
  /** Paragraph text */
  text: RichText,
}

/** A text paragraph */
export type pageBlockParagraph$Input = {
  readonly _: 'pageBlockParagraph',
  /** Paragraph text */
  readonly text?: RichText$Input,
}

/** A preformatted text paragraph */
export type pageBlockPreformatted = {
  _: 'pageBlockPreformatted',
  /** Paragraph text */
  text: RichText,
  /** Programming language for which the text should be formatted */
  language: string,
}

/** A preformatted text paragraph */
export type pageBlockPreformatted$Input = {
  readonly _: 'pageBlockPreformatted',
  /** Paragraph text */
  readonly text?: RichText$Input,
  /** Programming language for which the text should be formatted */
  readonly language?: string,
}

/** The footer of a page */
export type pageBlockFooter = {
  _: 'pageBlockFooter',
  /** Footer */
  footer: RichText,
}

/** The footer of a page */
export type pageBlockFooter$Input = {
  readonly _: 'pageBlockFooter',
  /** Footer */
  readonly footer?: RichText$Input,
}

/** An empty block separating a page */
export type pageBlockDivider = {
  _: 'pageBlockDivider',
}

/** An empty block separating a page */
export type pageBlockDivider$Input = {
  readonly _: 'pageBlockDivider',
}

/**
 * An invisible anchor on a page, which can be used in a URL to open the page from the
 * specified anchor
 */
export type pageBlockAnchor = {
  _: 'pageBlockAnchor',
  /** Name of the anchor */
  name: string,
}

/**
 * An invisible anchor on a page, which can be used in a URL to open the page from the
 * specified anchor
 */
export type pageBlockAnchor$Input = {
  readonly _: 'pageBlockAnchor',
  /** Name of the anchor */
  readonly name?: string,
}

/** A list of data blocks */
export type pageBlockList = {
  _: 'pageBlockList',
  /** The items of the list */
  items: Array<pageBlockListItem>,
}

/** A list of data blocks */
export type pageBlockList$Input = {
  readonly _: 'pageBlockList',
  /** The items of the list */
  readonly items?: ReadonlyArray<pageBlockListItem$Input>,
}

/** A block quote */
export type pageBlockBlockQuote = {
  _: 'pageBlockBlockQuote',
  /** Quote text */
  text: RichText,
  /** Quote credit */
  credit: RichText,
}

/** A block quote */
export type pageBlockBlockQuote$Input = {
  readonly _: 'pageBlockBlockQuote',
  /** Quote text */
  readonly text?: RichText$Input,
  /** Quote credit */
  readonly credit?: RichText$Input,
}

/** A pull quote */
export type pageBlockPullQuote = {
  _: 'pageBlockPullQuote',
  /** Quote text */
  text: RichText,
  /** Quote credit */
  credit: RichText,
}

/** A pull quote */
export type pageBlockPullQuote$Input = {
  readonly _: 'pageBlockPullQuote',
  /** Quote text */
  readonly text?: RichText$Input,
  /** Quote credit */
  readonly credit?: RichText$Input,
}

/** An animation */
export type pageBlockAnimation = {
  _: 'pageBlockAnimation',
  /** Animation file; may be null */
  animation: animation,
  /** Animation caption */
  caption: pageBlockCaption,
  /** True, if the animation should be played automatically */
  need_autoplay: boolean,
}

/** An animation */
export type pageBlockAnimation$Input = {
  readonly _: 'pageBlockAnimation',
  /** Animation file; may be null */
  readonly animation?: animation$Input,
  /** Animation caption */
  readonly caption?: pageBlockCaption$Input,
  /** True, if the animation should be played automatically */
  readonly need_autoplay?: boolean,
}

/** An audio file */
export type pageBlockAudio = {
  _: 'pageBlockAudio',
  /** Audio file; may be null */
  audio: audio,
  /** Audio file caption */
  caption: pageBlockCaption,
}

/** An audio file */
export type pageBlockAudio$Input = {
  readonly _: 'pageBlockAudio',
  /** Audio file; may be null */
  readonly audio?: audio$Input,
  /** Audio file caption */
  readonly caption?: pageBlockCaption$Input,
}

/** A photo */
export type pageBlockPhoto = {
  _: 'pageBlockPhoto',
  /** Photo file; may be null */
  photo: photo,
  /** Photo caption */
  caption: pageBlockCaption,
  /** URL that needs to be opened when the photo is clicked */
  url: string,
}

/** A photo */
export type pageBlockPhoto$Input = {
  readonly _: 'pageBlockPhoto',
  /** Photo file; may be null */
  readonly photo?: photo$Input,
  /** Photo caption */
  readonly caption?: pageBlockCaption$Input,
  /** URL that needs to be opened when the photo is clicked */
  readonly url?: string,
}

/** A video */
export type pageBlockVideo = {
  _: 'pageBlockVideo',
  /** Video file; may be null */
  video: video,
  /** Video caption */
  caption: pageBlockCaption,
  /** True, if the video should be played automatically */
  need_autoplay: boolean,
  /** True, if the video should be looped */
  is_looped: boolean,
}

/** A video */
export type pageBlockVideo$Input = {
  readonly _: 'pageBlockVideo',
  /** Video file; may be null */
  readonly video?: video$Input,
  /** Video caption */
  readonly caption?: pageBlockCaption$Input,
  /** True, if the video should be played automatically */
  readonly need_autoplay?: boolean,
  /** True, if the video should be looped */
  readonly is_looped?: boolean,
}

/** A page cover */
export type pageBlockCover = {
  _: 'pageBlockCover',
  /** Cover */
  cover: PageBlock,
}

/** A page cover */
export type pageBlockCover$Input = {
  readonly _: 'pageBlockCover',
  /** Cover */
  readonly cover?: PageBlock$Input,
}

/** An embedded web page */
export type pageBlockEmbedded = {
  _: 'pageBlockEmbedded',
  /** Web page URL, if available */
  url: string,
  /** HTML-markup of the embedded page */
  html: string,
  /** Poster photo, if available; may be null */
  poster_photo: photo,
  /** Block width, 0 if unknown */
  width: number,
  /** Block height, 0 if unknown */
  height: number,
  /** Block caption */
  caption: pageBlockCaption,
  /** True, if the block should be full width */
  is_full_width: boolean,
  /** True, if scrolling should be allowed */
  allow_scrolling: boolean,
}

/** An embedded web page */
export type pageBlockEmbedded$Input = {
  readonly _: 'pageBlockEmbedded',
  /** Web page URL, if available */
  readonly url?: string,
  /** HTML-markup of the embedded page */
  readonly html?: string,
  /** Poster photo, if available; may be null */
  readonly poster_photo?: photo$Input,
  /** Block width, 0 if unknown */
  readonly width?: number,
  /** Block height, 0 if unknown */
  readonly height?: number,
  /** Block caption */
  readonly caption?: pageBlockCaption$Input,
  /** True, if the block should be full width */
  readonly is_full_width?: boolean,
  /** True, if scrolling should be allowed */
  readonly allow_scrolling?: boolean,
}

/** An embedded post */
export type pageBlockEmbeddedPost = {
  _: 'pageBlockEmbeddedPost',
  /** Web page URL */
  url: string,
  /** Post author */
  author: string,
  /** Post author photo */
  author_photo: photo,
  /** Point in time (Unix timestamp) when the post was created; 0 if unknown */
  date: number,
  /** Post content */
  page_blocks: Array<PageBlock>,
  /** Post caption */
  caption: pageBlockCaption,
}

/** An embedded post */
export type pageBlockEmbeddedPost$Input = {
  readonly _: 'pageBlockEmbeddedPost',
  /** Web page URL */
  readonly url?: string,
  /** Post author */
  readonly author?: string,
  /** Post author photo */
  readonly author_photo?: photo$Input,
  /** Point in time (Unix timestamp) when the post was created; 0 if unknown */
  readonly date?: number,
  /** Post content */
  readonly page_blocks?: ReadonlyArray<PageBlock$Input>,
  /** Post caption */
  readonly caption?: pageBlockCaption$Input,
}

/** A collage */
export type pageBlockCollage = {
  _: 'pageBlockCollage',
  /** Collage item contents */
  page_blocks: Array<PageBlock>,
  /** Block caption */
  caption: pageBlockCaption,
}

/** A collage */
export type pageBlockCollage$Input = {
  readonly _: 'pageBlockCollage',
  /** Collage item contents */
  readonly page_blocks?: ReadonlyArray<PageBlock$Input>,
  /** Block caption */
  readonly caption?: pageBlockCaption$Input,
}

/** A slideshow */
export type pageBlockSlideshow = {
  _: 'pageBlockSlideshow',
  /** Slideshow item contents */
  page_blocks: Array<PageBlock>,
  /** Block caption */
  caption: pageBlockCaption,
}

/** A slideshow */
export type pageBlockSlideshow$Input = {
  readonly _: 'pageBlockSlideshow',
  /** Slideshow item contents */
  readonly page_blocks?: ReadonlyArray<PageBlock$Input>,
  /** Block caption */
  readonly caption?: pageBlockCaption$Input,
}

/** A link to a chat */
export type pageBlockChatLink = {
  _: 'pageBlockChatLink',
  /** Chat title */
  title: string,
  /** Chat photo; may be null */
  photo: chatPhoto,
  /** Chat username, by which all other information about the chat should be resolved */
  username: string,
}

/** A link to a chat */
export type pageBlockChatLink$Input = {
  readonly _: 'pageBlockChatLink',
  /** Chat title */
  readonly title?: string,
  /** Chat photo; may be null */
  readonly photo?: chatPhoto$Input,
  /** Chat username, by which all other information about the chat should be resolved */
  readonly username?: string,
}

/** A table */
export type pageBlockTable = {
  _: 'pageBlockTable',
  /** Table caption */
  caption: RichText,
  /** Table cells */
  cells: Array<Array<pageBlockTableCell>>,
  /** True, if the table is bordered */
  is_bordered: boolean,
  /** True, if the table is striped */
  is_striped: boolean,
}

/** A table */
export type pageBlockTable$Input = {
  readonly _: 'pageBlockTable',
  /** Table caption */
  readonly caption?: RichText$Input,
  /** Table cells */
  readonly cells?: ReadonlyArray<ReadonlyArray<pageBlockTableCell$Input>>,
  /** True, if the table is bordered */
  readonly is_bordered?: boolean,
  /** True, if the table is striped */
  readonly is_striped?: boolean,
}

/** A collapsible block */
export type pageBlockDetails = {
  _: 'pageBlockDetails',
  /** Always visible heading for the block */
  header: RichText,
  /** Block contents */
  page_blocks: Array<PageBlock>,
  /** True, if the block is open by default */
  is_open: boolean,
}

/** A collapsible block */
export type pageBlockDetails$Input = {
  readonly _: 'pageBlockDetails',
  /** Always visible heading for the block */
  readonly header?: RichText$Input,
  /** Block contents */
  readonly page_blocks?: ReadonlyArray<PageBlock$Input>,
  /** True, if the block is open by default */
  readonly is_open?: boolean,
}

/** Related articles */
export type pageBlockRelatedArticles = {
  _: 'pageBlockRelatedArticles',
  /** Block header */
  header: RichText,
  /** List of related articles */
  articles: Array<pageBlockRelatedArticle>,
}

/** Related articles */
export type pageBlockRelatedArticles$Input = {
  readonly _: 'pageBlockRelatedArticles',
  /** Block header */
  readonly header?: RichText$Input,
  /** List of related articles */
  readonly articles?: ReadonlyArray<pageBlockRelatedArticle$Input>,
}

/** A map */
export type pageBlockMap = {
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
}

/** A map */
export type pageBlockMap$Input = {
  readonly _: 'pageBlockMap',
  /** Location of the map center */
  readonly location?: location$Input,
  /** Map zoom level */
  readonly zoom?: number,
  /** Map width */
  readonly width?: number,
  /** Map height */
  readonly height?: number,
  /** Block caption */
  readonly caption?: pageBlockCaption$Input,
}

/** Describes an instant view page for a web page */
export type webPageInstantView = {
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
}

/** Describes an instant view page for a web page */
export type webPageInstantView$Input = {
  readonly _: 'webPageInstantView',
  /** Content of the web page */
  readonly page_blocks?: ReadonlyArray<PageBlock$Input>,
  /** Version of the instant view, currently can be 1 or 2 */
  readonly version?: number,
  /**
   * Instant view URL; may be different from WebPage.url and must be used for the correct
   * anchors handling
   */
  readonly url?: string,
  /** True, if the instant view must be shown from right to left */
  readonly is_rtl?: boolean,
  /**
   * True, if the instant view contains the full page. A network request might be needed
   * to get the full web page instant view
   */
  readonly is_full?: boolean,
}

/** Describes a web page preview */
export type webPage = {
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
}

/** Describes a web page preview */
export type webPage$Input = {
  readonly _: 'webPage',
  /** Original URL of the link */
  readonly url?: string,
  /** URL to display */
  readonly display_url?: string,
  /**
   * Type of the web page. Can be: article, photo, audio, video, document, profile, app,
   * or something else
   */
  readonly type?: string,
  /** Short name of the site (e.g., Google Docs, App Store) */
  readonly site_name?: string,
  /** Title of the content */
  readonly title?: string,
  /** Description of the content */
  readonly description?: string,
  /** Image representing the content; may be null */
  readonly photo?: photo$Input,
  /** URL to show in the embedded preview */
  readonly embed_url?: string,
  /** MIME type of the embedded preview, (e.g., text/html or video/mp4) */
  readonly embed_type?: string,
  /** Width of the embedded preview */
  readonly embed_width?: number,
  /** Height of the embedded preview */
  readonly embed_height?: number,
  /** Duration of the content, in seconds */
  readonly duration?: number,
  /** Author of the content */
  readonly author?: string,
  /** Preview of the content as an animation, if available; may be null */
  readonly animation?: animation$Input,
  /** Preview of the content as an audio file, if available; may be null */
  readonly audio?: audio$Input,
  /**
   * Preview of the content as a document, if available (currently only available for
   * small PDF files and ZIP archives); may be null
   */
  readonly document?: document$Input,
  /** Preview of the content as a sticker for small WEBP files, if available; may be null */
  readonly sticker?: sticker$Input,
  /** Preview of the content as a video, if available; may be null */
  readonly video?: video$Input,
  /** Preview of the content as a video note, if available; may be null */
  readonly video_note?: videoNote$Input,
  /** Preview of the content as a voice note, if available; may be null */
  readonly voice_note?: voiceNote$Input,
  /**
   * Version of instant view, available for the web page (currently can be 1 or 2), 0
   * if none
   */
  readonly instant_view_version?: number,
}

/** Describes an address */
export type address = {
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
}

/** Describes an address */
export type address$Input = {
  readonly _: 'address',
  /** A two-letter ISO 3166-1 alpha-2 country code */
  readonly country_code?: string,
  /** State, if applicable */
  readonly state?: string,
  /** City */
  readonly city?: string,
  /** First line of the address */
  readonly street_line1?: string,
  /** Second line of the address */
  readonly street_line2?: string,
  /** Address postal code */
  readonly postal_code?: string,
}

/** Portion of the price of a product (e.g., "delivery cost", "tax amount") */
export type labeledPricePart = {
  _: 'labeledPricePart',
  /** Label for this portion of the product price */
  label: string,
  /** Currency amount in minimal quantity of the currency */
  amount: number,
}

/** Portion of the price of a product (e.g., "delivery cost", "tax amount") */
export type labeledPricePart$Input = {
  readonly _: 'labeledPricePart',
  /** Label for this portion of the product price */
  readonly label?: string,
  /** Currency amount in minimal quantity of the currency */
  readonly amount?: number,
}

/** Product invoice */
export type invoice = {
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
}

/** Product invoice */
export type invoice$Input = {
  readonly _: 'invoice',
  /** ISO 4217 currency code */
  readonly currency?: string,
  /** A list of objects used to calculate the total price of the product */
  readonly price_parts?: ReadonlyArray<labeledPricePart$Input>,
  /** True, if the payment is a test payment */
  readonly is_test?: boolean,
  /** True, if the user's name is needed for payment */
  readonly need_name?: boolean,
  /** True, if the user's phone number is needed for payment */
  readonly need_phone_number?: boolean,
  /** True, if the user's email address is needed for payment */
  readonly need_email_address?: boolean,
  /** True, if the user's shipping address is needed for payment */
  readonly need_shipping_address?: boolean,
  /** True, if the user's phone number will be sent to the provider */
  readonly send_phone_number_to_provider?: boolean,
  /** True, if the user's email address will be sent to the provider */
  readonly send_email_address_to_provider?: boolean,
  /** True, if the total price depends on the shipping method */
  readonly is_flexible?: boolean,
}

/** Order information */
export type orderInfo = {
  _: 'orderInfo',
  /** Name of the user */
  name: string,
  /** Phone number of the user */
  phone_number: string,
  /** Email address of the user */
  email_address: string,
  /** Shipping address for this order; may be null */
  shipping_address: address,
}

/** Order information */
export type orderInfo$Input = {
  readonly _: 'orderInfo',
  /** Name of the user */
  readonly name?: string,
  /** Phone number of the user */
  readonly phone_number?: string,
  /** Email address of the user */
  readonly email_address?: string,
  /** Shipping address for this order; may be null */
  readonly shipping_address?: address$Input,
}

/** One shipping option */
export type shippingOption = {
  _: 'shippingOption',
  /** Shipping option identifier */
  id: string,
  /** Option title */
  title: string,
  /** A list of objects used to calculate the total shipping costs */
  price_parts: Array<labeledPricePart>,
}

/** One shipping option */
export type shippingOption$Input = {
  readonly _: 'shippingOption',
  /** Shipping option identifier */
  readonly id?: string,
  /** Option title */
  readonly title?: string,
  /** A list of objects used to calculate the total shipping costs */
  readonly price_parts?: ReadonlyArray<labeledPricePart$Input>,
}

/** Contains information about saved card credentials */
export type savedCredentials = {
  _: 'savedCredentials',
  /** Unique identifier of the saved credentials */
  id: string,
  /** Title of the saved credentials */
  title: string,
}

/** Contains information about saved card credentials */
export type savedCredentials$Input = {
  readonly _: 'savedCredentials',
  /** Unique identifier of the saved credentials */
  readonly id?: string,
  /** Title of the saved credentials */
  readonly title?: string,
}

/**
 * Applies if a user chooses some previously saved payment credentials. To use their
 * previously saved credentials, the user must have a valid temporary password
 */
export type inputCredentialsSaved = {
  _: 'inputCredentialsSaved',
  /** Identifier of the saved credentials */
  saved_credentials_id: string,
}

/**
 * Applies if a user chooses some previously saved payment credentials. To use their
 * previously saved credentials, the user must have a valid temporary password
 */
export type inputCredentialsSaved$Input = {
  readonly _: 'inputCredentialsSaved',
  /** Identifier of the saved credentials */
  readonly saved_credentials_id?: string,
}

/** Applies if a user enters new credentials on a payment provider website */
export type inputCredentialsNew = {
  _: 'inputCredentialsNew',
  /** Contains JSON-encoded data with a credential identifier from the payment provider */
  data: string,
  /** True, if the credential identifier can be saved on the server side */
  allow_save: boolean,
}

/** Applies if a user enters new credentials on a payment provider website */
export type inputCredentialsNew$Input = {
  readonly _: 'inputCredentialsNew',
  /** Contains JSON-encoded data with a credential identifier from the payment provider */
  readonly data?: string,
  /** True, if the credential identifier can be saved on the server side */
  readonly allow_save?: boolean,
}

/** Applies if a user enters new credentials using Android Pay */
export type inputCredentialsAndroidPay = {
  _: 'inputCredentialsAndroidPay',
  /** JSON-encoded data with the credential identifier */
  data: string,
}

/** Applies if a user enters new credentials using Android Pay */
export type inputCredentialsAndroidPay$Input = {
  readonly _: 'inputCredentialsAndroidPay',
  /** JSON-encoded data with the credential identifier */
  readonly data?: string,
}

/** Applies if a user enters new credentials using Apple Pay */
export type inputCredentialsApplePay = {
  _: 'inputCredentialsApplePay',
  /** JSON-encoded data with the credential identifier */
  data: string,
}

/** Applies if a user enters new credentials using Apple Pay */
export type inputCredentialsApplePay$Input = {
  readonly _: 'inputCredentialsApplePay',
  /** JSON-encoded data with the credential identifier */
  readonly data?: string,
}

/** Stripe payment provider */
export type paymentsProviderStripe = {
  _: 'paymentsProviderStripe',
  /** Stripe API publishable key */
  publishable_key: string,
  /** True, if the user country must be provided */
  need_country: boolean,
  /** True, if the user ZIP/postal code must be provided */
  need_postal_code: boolean,
  /** True, if the cardholder name must be provided */
  need_cardholder_name: boolean,
}

/** Stripe payment provider */
export type paymentsProviderStripe$Input = {
  readonly _: 'paymentsProviderStripe',
  /** Stripe API publishable key */
  readonly publishable_key?: string,
  /** True, if the user country must be provided */
  readonly need_country?: boolean,
  /** True, if the user ZIP/postal code must be provided */
  readonly need_postal_code?: boolean,
  /** True, if the cardholder name must be provided */
  readonly need_cardholder_name?: boolean,
}

/** Contains information about an invoice payment form */
export type paymentForm = {
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
}

/** Contains information about an invoice payment form */
export type paymentForm$Input = {
  readonly _: 'paymentForm',
  /** Full information of the invoice */
  readonly invoice?: invoice$Input,
  /** Payment form URL */
  readonly url?: string,
  /**
   * Contains information about the payment provider, if available, to support it natively
   * without the need for opening the URL; may be null
   */
  readonly payments_provider?: paymentsProviderStripe$Input,
  /** Saved server-side order information; may be null */
  readonly saved_order_info?: orderInfo$Input,
  /** Contains information about saved card credentials; may be null */
  readonly saved_credentials?: savedCredentials$Input,
  /** True, if the user can choose to save credentials */
  readonly can_save_credentials?: boolean,
  /**
   * True, if the user will be able to save credentials protected by a password they set
   * up
   */
  readonly need_password?: boolean,
}

/**
 * Contains a temporary identifier of validated order information, which is stored for
 * one hour. Also contains the available shipping options
 */
export type validatedOrderInfo = {
  _: 'validatedOrderInfo',
  /** Temporary identifier of the order information */
  order_info_id: string,
  /** Available shipping options */
  shipping_options: Array<shippingOption>,
}

/**
 * Contains a temporary identifier of validated order information, which is stored for
 * one hour. Also contains the available shipping options
 */
export type validatedOrderInfo$Input = {
  readonly _: 'validatedOrderInfo',
  /** Temporary identifier of the order information */
  readonly order_info_id?: string,
  /** Available shipping options */
  readonly shipping_options?: ReadonlyArray<shippingOption$Input>,
}

/** Contains the result of a payment request */
export type paymentResult = {
  _: 'paymentResult',
  /**
   * True, if the payment request was successful; otherwise the verification_url will
   * be not empty
   */
  success: boolean,
  /** URL for additional payment credentials verification */
  verification_url: string,
}

/** Contains the result of a payment request */
export type paymentResult$Input = {
  readonly _: 'paymentResult',
  /**
   * True, if the payment request was successful; otherwise the verification_url will
   * be not empty
   */
  readonly success?: boolean,
  /** URL for additional payment credentials verification */
  readonly verification_url?: string,
}

/** Contains information about a successful payment */
export type paymentReceipt = {
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
}

/** Contains information about a successful payment */
export type paymentReceipt$Input = {
  readonly _: 'paymentReceipt',
  /** Point in time (Unix timestamp) when the payment was made */
  readonly date?: number,
  /** User identifier of the payment provider bot */
  readonly payments_provider_user_id?: number,
  /** Contains information about the invoice */
  readonly invoice?: invoice$Input,
  /** Contains order information; may be null */
  readonly order_info?: orderInfo$Input,
  /** Chosen shipping option; may be null */
  readonly shipping_option?: shippingOption$Input,
  /** Title of the saved credentials */
  readonly credentials_title?: string,
}

/** File with the date it was uploaded */
export type datedFile = {
  _: 'datedFile',
  /** The file */
  file: file,
  /** Point in time (Unix timestamp) when the file was uploaded */
  date: number,
}

/** File with the date it was uploaded */
export type datedFile$Input = {
  readonly _: 'datedFile',
  /** The file */
  readonly file?: file$Input,
  /** Point in time (Unix timestamp) when the file was uploaded */
  readonly date?: number,
}

/** A Telegram Passport element containing the user's personal details */
export type passportElementTypePersonalDetails = {
  _: 'passportElementTypePersonalDetails',
}

/** A Telegram Passport element containing the user's personal details */
export type passportElementTypePersonalDetails$Input = {
  readonly _: 'passportElementTypePersonalDetails',
}

/** A Telegram Passport element containing the user's passport */
export type passportElementTypePassport = {
  _: 'passportElementTypePassport',
}

/** A Telegram Passport element containing the user's passport */
export type passportElementTypePassport$Input = {
  readonly _: 'passportElementTypePassport',
}

/** A Telegram Passport element containing the user's driver license */
export type passportElementTypeDriverLicense = {
  _: 'passportElementTypeDriverLicense',
}

/** A Telegram Passport element containing the user's driver license */
export type passportElementTypeDriverLicense$Input = {
  readonly _: 'passportElementTypeDriverLicense',
}

/** A Telegram Passport element containing the user's identity card */
export type passportElementTypeIdentityCard = {
  _: 'passportElementTypeIdentityCard',
}

/** A Telegram Passport element containing the user's identity card */
export type passportElementTypeIdentityCard$Input = {
  readonly _: 'passportElementTypeIdentityCard',
}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementTypeInternalPassport = {
  _: 'passportElementTypeInternalPassport',
}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementTypeInternalPassport$Input = {
  readonly _: 'passportElementTypeInternalPassport',
}

/** A Telegram Passport element containing the user's address */
export type passportElementTypeAddress = {
  _: 'passportElementTypeAddress',
}

/** A Telegram Passport element containing the user's address */
export type passportElementTypeAddress$Input = {
  readonly _: 'passportElementTypeAddress',
}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementTypeUtilityBill = {
  _: 'passportElementTypeUtilityBill',
}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementTypeUtilityBill$Input = {
  readonly _: 'passportElementTypeUtilityBill',
}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementTypeBankStatement = {
  _: 'passportElementTypeBankStatement',
}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementTypeBankStatement$Input = {
  readonly _: 'passportElementTypeBankStatement',
}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementTypeRentalAgreement = {
  _: 'passportElementTypeRentalAgreement',
}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementTypeRentalAgreement$Input = {
  readonly _: 'passportElementTypeRentalAgreement',
}

/** A Telegram Passport element containing the registration page of the user's passport */
export type passportElementTypePassportRegistration = {
  _: 'passportElementTypePassportRegistration',
}

/** A Telegram Passport element containing the registration page of the user's passport */
export type passportElementTypePassportRegistration$Input = {
  readonly _: 'passportElementTypePassportRegistration',
}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTypeTemporaryRegistration = {
  _: 'passportElementTypeTemporaryRegistration',
}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTypeTemporaryRegistration$Input = {
  readonly _: 'passportElementTypeTemporaryRegistration',
}

/** A Telegram Passport element containing the user's phone number */
export type passportElementTypePhoneNumber = {
  _: 'passportElementTypePhoneNumber',
}

/** A Telegram Passport element containing the user's phone number */
export type passportElementTypePhoneNumber$Input = {
  readonly _: 'passportElementTypePhoneNumber',
}

/** A Telegram Passport element containing the user's email address */
export type passportElementTypeEmailAddress = {
  _: 'passportElementTypeEmailAddress',
}

/** A Telegram Passport element containing the user's email address */
export type passportElementTypeEmailAddress$Input = {
  readonly _: 'passportElementTypeEmailAddress',
}

/** Represents a date according to the Gregorian calendar */
export type date = {
  _: 'date',
  /** Day of the month, 1-31 */
  day: number,
  /** Month, 1-12 */
  month: number,
  /** Year, 1-9999 */
  year: number,
}

/** Represents a date according to the Gregorian calendar */
export type date$Input = {
  readonly _: 'date',
  /** Day of the month, 1-31 */
  readonly day?: number,
  /** Month, 1-12 */
  readonly month?: number,
  /** Year, 1-9999 */
  readonly year?: number,
}

/** Contains the user's personal details */
export type personalDetails = {
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
}

/** Contains the user's personal details */
export type personalDetails$Input = {
  readonly _: 'personalDetails',
  /** First name of the user written in English; 1-255 characters */
  readonly first_name?: string,
  /** Middle name of the user written in English; 0-255 characters */
  readonly middle_name?: string,
  /** Last name of the user written in English; 1-255 characters */
  readonly last_name?: string,
  /** Native first name of the user; 1-255 characters */
  readonly native_first_name?: string,
  /** Native middle name of the user; 0-255 characters */
  readonly native_middle_name?: string,
  /** Native last name of the user; 1-255 characters */
  readonly native_last_name?: string,
  /** Birthdate of the user */
  readonly birthdate?: date$Input,
  /** Gender of the user, "male" or "female" */
  readonly gender?: string,
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's country */
  readonly country_code?: string,
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's residence country */
  readonly residence_country_code?: string,
}

/** An identity document */
export type identityDocument = {
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
}

/** An identity document */
export type identityDocument$Input = {
  readonly _: 'identityDocument',
  /** Document number; 1-24 characters */
  readonly number?: string,
  /** Document expiry date; may be null */
  readonly expiry_date?: date$Input,
  /** Front side of the document */
  readonly front_side?: datedFile$Input,
  /** Reverse side of the document; only for driver license and identity card */
  readonly reverse_side?: datedFile$Input,
  /** Selfie with the document; may be null */
  readonly selfie?: datedFile$Input,
  /** List of files containing a certified English translation of the document */
  readonly translation?: ReadonlyArray<datedFile$Input>,
}

/** An identity document to be saved to Telegram Passport */
export type inputIdentityDocument = {
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
}

/** An identity document to be saved to Telegram Passport */
export type inputIdentityDocument$Input = {
  readonly _: 'inputIdentityDocument',
  /** Document number; 1-24 characters */
  readonly number?: string,
  /** Document expiry date, if available */
  readonly expiry_date?: date$Input,
  /** Front side of the document */
  readonly front_side?: InputFile$Input,
  /** Reverse side of the document; only for driver license and identity card */
  readonly reverse_side?: InputFile$Input,
  /** Selfie with the document, if available */
  readonly selfie?: InputFile$Input,
  /** List of files containing a certified English translation of the document */
  readonly translation?: ReadonlyArray<InputFile$Input>,
}

/** A personal document, containing some information about a user */
export type personalDocument = {
  _: 'personalDocument',
  /** List of files containing the pages of the document */
  files: Array<datedFile>,
  /** List of files containing a certified English translation of the document */
  translation: Array<datedFile>,
}

/** A personal document, containing some information about a user */
export type personalDocument$Input = {
  readonly _: 'personalDocument',
  /** List of files containing the pages of the document */
  readonly files?: ReadonlyArray<datedFile$Input>,
  /** List of files containing a certified English translation of the document */
  readonly translation?: ReadonlyArray<datedFile$Input>,
}

/** A personal document to be saved to Telegram Passport */
export type inputPersonalDocument = {
  _: 'inputPersonalDocument',
  /** List of files containing the pages of the document */
  files: Array<InputFile>,
  /** List of files containing a certified English translation of the document */
  translation: Array<InputFile>,
}

/** A personal document to be saved to Telegram Passport */
export type inputPersonalDocument$Input = {
  readonly _: 'inputPersonalDocument',
  /** List of files containing the pages of the document */
  readonly files?: ReadonlyArray<InputFile$Input>,
  /** List of files containing a certified English translation of the document */
  readonly translation?: ReadonlyArray<InputFile$Input>,
}

/** A Telegram Passport element containing the user's personal details */
export type passportElementPersonalDetails = {
  _: 'passportElementPersonalDetails',
  /** Personal details of the user */
  personal_details: personalDetails,
}

/** A Telegram Passport element containing the user's personal details */
export type passportElementPersonalDetails$Input = {
  readonly _: 'passportElementPersonalDetails',
  /** Personal details of the user */
  readonly personal_details?: personalDetails$Input,
}

/** A Telegram Passport element containing the user's passport */
export type passportElementPassport = {
  _: 'passportElementPassport',
  /** Passport */
  passport: identityDocument,
}

/** A Telegram Passport element containing the user's passport */
export type passportElementPassport$Input = {
  readonly _: 'passportElementPassport',
  /** Passport */
  readonly passport?: identityDocument$Input,
}

/** A Telegram Passport element containing the user's driver license */
export type passportElementDriverLicense = {
  _: 'passportElementDriverLicense',
  /** Driver license */
  driver_license: identityDocument,
}

/** A Telegram Passport element containing the user's driver license */
export type passportElementDriverLicense$Input = {
  readonly _: 'passportElementDriverLicense',
  /** Driver license */
  readonly driver_license?: identityDocument$Input,
}

/** A Telegram Passport element containing the user's identity card */
export type passportElementIdentityCard = {
  _: 'passportElementIdentityCard',
  /** Identity card */
  identity_card: identityDocument,
}

/** A Telegram Passport element containing the user's identity card */
export type passportElementIdentityCard$Input = {
  readonly _: 'passportElementIdentityCard',
  /** Identity card */
  readonly identity_card?: identityDocument$Input,
}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementInternalPassport = {
  _: 'passportElementInternalPassport',
  /** Internal passport */
  internal_passport: identityDocument,
}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementInternalPassport$Input = {
  readonly _: 'passportElementInternalPassport',
  /** Internal passport */
  readonly internal_passport?: identityDocument$Input,
}

/** A Telegram Passport element containing the user's address */
export type passportElementAddress = {
  _: 'passportElementAddress',
  /** Address */
  address: address,
}

/** A Telegram Passport element containing the user's address */
export type passportElementAddress$Input = {
  readonly _: 'passportElementAddress',
  /** Address */
  readonly address?: address$Input,
}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementUtilityBill = {
  _: 'passportElementUtilityBill',
  /** Utility bill */
  utility_bill: personalDocument,
}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementUtilityBill$Input = {
  readonly _: 'passportElementUtilityBill',
  /** Utility bill */
  readonly utility_bill?: personalDocument$Input,
}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementBankStatement = {
  _: 'passportElementBankStatement',
  /** Bank statement */
  bank_statement: personalDocument,
}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementBankStatement$Input = {
  readonly _: 'passportElementBankStatement',
  /** Bank statement */
  readonly bank_statement?: personalDocument$Input,
}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementRentalAgreement = {
  _: 'passportElementRentalAgreement',
  /** Rental agreement */
  rental_agreement: personalDocument,
}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementRentalAgreement$Input = {
  readonly _: 'passportElementRentalAgreement',
  /** Rental agreement */
  readonly rental_agreement?: personalDocument$Input,
}

/** A Telegram Passport element containing the user's passport registration pages */
export type passportElementPassportRegistration = {
  _: 'passportElementPassportRegistration',
  /** Passport registration pages */
  passport_registration: personalDocument,
}

/** A Telegram Passport element containing the user's passport registration pages */
export type passportElementPassportRegistration$Input = {
  readonly _: 'passportElementPassportRegistration',
  /** Passport registration pages */
  readonly passport_registration?: personalDocument$Input,
}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTemporaryRegistration = {
  _: 'passportElementTemporaryRegistration',
  /** Temporary registration */
  temporary_registration: personalDocument,
}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTemporaryRegistration$Input = {
  readonly _: 'passportElementTemporaryRegistration',
  /** Temporary registration */
  readonly temporary_registration?: personalDocument$Input,
}

/** A Telegram Passport element containing the user's phone number */
export type passportElementPhoneNumber = {
  _: 'passportElementPhoneNumber',
  /** Phone number */
  phone_number: string,
}

/** A Telegram Passport element containing the user's phone number */
export type passportElementPhoneNumber$Input = {
  readonly _: 'passportElementPhoneNumber',
  /** Phone number */
  readonly phone_number?: string,
}

/** A Telegram Passport element containing the user's email address */
export type passportElementEmailAddress = {
  _: 'passportElementEmailAddress',
  /** Email address */
  email_address: string,
}

/** A Telegram Passport element containing the user's email address */
export type passportElementEmailAddress$Input = {
  readonly _: 'passportElementEmailAddress',
  /** Email address */
  readonly email_address?: string,
}

/** A Telegram Passport element to be saved containing the user's personal details */
export type inputPassportElementPersonalDetails = {
  _: 'inputPassportElementPersonalDetails',
  /** Personal details of the user */
  personal_details: personalDetails,
}

/** A Telegram Passport element to be saved containing the user's personal details */
export type inputPassportElementPersonalDetails$Input = {
  readonly _: 'inputPassportElementPersonalDetails',
  /** Personal details of the user */
  readonly personal_details?: personalDetails$Input,
}

/** A Telegram Passport element to be saved containing the user's passport */
export type inputPassportElementPassport = {
  _: 'inputPassportElementPassport',
  /** The passport to be saved */
  passport: inputIdentityDocument,
}

/** A Telegram Passport element to be saved containing the user's passport */
export type inputPassportElementPassport$Input = {
  readonly _: 'inputPassportElementPassport',
  /** The passport to be saved */
  readonly passport?: inputIdentityDocument$Input,
}

/** A Telegram Passport element to be saved containing the user's driver license */
export type inputPassportElementDriverLicense = {
  _: 'inputPassportElementDriverLicense',
  /** The driver license to be saved */
  driver_license: inputIdentityDocument,
}

/** A Telegram Passport element to be saved containing the user's driver license */
export type inputPassportElementDriverLicense$Input = {
  readonly _: 'inputPassportElementDriverLicense',
  /** The driver license to be saved */
  readonly driver_license?: inputIdentityDocument$Input,
}

/** A Telegram Passport element to be saved containing the user's identity card */
export type inputPassportElementIdentityCard = {
  _: 'inputPassportElementIdentityCard',
  /** The identity card to be saved */
  identity_card: inputIdentityDocument,
}

/** A Telegram Passport element to be saved containing the user's identity card */
export type inputPassportElementIdentityCard$Input = {
  readonly _: 'inputPassportElementIdentityCard',
  /** The identity card to be saved */
  readonly identity_card?: inputIdentityDocument$Input,
}

/** A Telegram Passport element to be saved containing the user's internal passport */
export type inputPassportElementInternalPassport = {
  _: 'inputPassportElementInternalPassport',
  /** The internal passport to be saved */
  internal_passport: inputIdentityDocument,
}

/** A Telegram Passport element to be saved containing the user's internal passport */
export type inputPassportElementInternalPassport$Input = {
  readonly _: 'inputPassportElementInternalPassport',
  /** The internal passport to be saved */
  readonly internal_passport?: inputIdentityDocument$Input,
}

/** A Telegram Passport element to be saved containing the user's address */
export type inputPassportElementAddress = {
  _: 'inputPassportElementAddress',
  /** The address to be saved */
  address: address,
}

/** A Telegram Passport element to be saved containing the user's address */
export type inputPassportElementAddress$Input = {
  readonly _: 'inputPassportElementAddress',
  /** The address to be saved */
  readonly address?: address$Input,
}

/** A Telegram Passport element to be saved containing the user's utility bill */
export type inputPassportElementUtilityBill = {
  _: 'inputPassportElementUtilityBill',
  /** The utility bill to be saved */
  utility_bill: inputPersonalDocument,
}

/** A Telegram Passport element to be saved containing the user's utility bill */
export type inputPassportElementUtilityBill$Input = {
  readonly _: 'inputPassportElementUtilityBill',
  /** The utility bill to be saved */
  readonly utility_bill?: inputPersonalDocument$Input,
}

/** A Telegram Passport element to be saved containing the user's bank statement */
export type inputPassportElementBankStatement = {
  _: 'inputPassportElementBankStatement',
  /** The bank statement to be saved */
  bank_statement: inputPersonalDocument,
}

/** A Telegram Passport element to be saved containing the user's bank statement */
export type inputPassportElementBankStatement$Input = {
  readonly _: 'inputPassportElementBankStatement',
  /** The bank statement to be saved */
  readonly bank_statement?: inputPersonalDocument$Input,
}

/** A Telegram Passport element to be saved containing the user's rental agreement */
export type inputPassportElementRentalAgreement = {
  _: 'inputPassportElementRentalAgreement',
  /** The rental agreement to be saved */
  rental_agreement: inputPersonalDocument,
}

/** A Telegram Passport element to be saved containing the user's rental agreement */
export type inputPassportElementRentalAgreement$Input = {
  readonly _: 'inputPassportElementRentalAgreement',
  /** The rental agreement to be saved */
  readonly rental_agreement?: inputPersonalDocument$Input,
}

/** A Telegram Passport element to be saved containing the user's passport registration */
export type inputPassportElementPassportRegistration = {
  _: 'inputPassportElementPassportRegistration',
  /** The passport registration page to be saved */
  passport_registration: inputPersonalDocument,
}

/** A Telegram Passport element to be saved containing the user's passport registration */
export type inputPassportElementPassportRegistration$Input = {
  readonly _: 'inputPassportElementPassportRegistration',
  /** The passport registration page to be saved */
  readonly passport_registration?: inputPersonalDocument$Input,
}

/** A Telegram Passport element to be saved containing the user's temporary registration */
export type inputPassportElementTemporaryRegistration = {
  _: 'inputPassportElementTemporaryRegistration',
  /** The temporary registration document to be saved */
  temporary_registration: inputPersonalDocument,
}

/** A Telegram Passport element to be saved containing the user's temporary registration */
export type inputPassportElementTemporaryRegistration$Input = {
  readonly _: 'inputPassportElementTemporaryRegistration',
  /** The temporary registration document to be saved */
  readonly temporary_registration?: inputPersonalDocument$Input,
}

/** A Telegram Passport element to be saved containing the user's phone number */
export type inputPassportElementPhoneNumber = {
  _: 'inputPassportElementPhoneNumber',
  /** The phone number to be saved */
  phone_number: string,
}

/** A Telegram Passport element to be saved containing the user's phone number */
export type inputPassportElementPhoneNumber$Input = {
  readonly _: 'inputPassportElementPhoneNumber',
  /** The phone number to be saved */
  readonly phone_number?: string,
}

/** A Telegram Passport element to be saved containing the user's email address */
export type inputPassportElementEmailAddress = {
  _: 'inputPassportElementEmailAddress',
  /** The email address to be saved */
  email_address: string,
}

/** A Telegram Passport element to be saved containing the user's email address */
export type inputPassportElementEmailAddress$Input = {
  readonly _: 'inputPassportElementEmailAddress',
  /** The email address to be saved */
  readonly email_address?: string,
}

/** Contains information about saved Telegram Passport elements */
export type passportElements = {
  _: 'passportElements',
  /** Telegram Passport elements */
  elements: Array<PassportElement>,
}

/** Contains information about saved Telegram Passport elements */
export type passportElements$Input = {
  readonly _: 'passportElements',
  /** Telegram Passport elements */
  readonly elements?: ReadonlyArray<PassportElement$Input>,
}

/**
 * The element contains an error in an unspecified place. The error will be considered
 * resolved when new data is added
 */
export type passportElementErrorSourceUnspecified = {
  _: 'passportElementErrorSourceUnspecified',
}

/**
 * The element contains an error in an unspecified place. The error will be considered
 * resolved when new data is added
 */
export type passportElementErrorSourceUnspecified$Input = {
  readonly _: 'passportElementErrorSourceUnspecified',
}

/**
 * One of the data fields contains an error. The error will be considered resolved when
 * the value of the field changes
 */
export type passportElementErrorSourceDataField = {
  _: 'passportElementErrorSourceDataField',
  /** Field name */
  field_name: string,
}

/**
 * One of the data fields contains an error. The error will be considered resolved when
 * the value of the field changes
 */
export type passportElementErrorSourceDataField$Input = {
  readonly _: 'passportElementErrorSourceDataField',
  /** Field name */
  readonly field_name?: string,
}

/**
 * The front side of the document contains an error. The error will be considered resolved
 * when the file with the front side changes
 */
export type passportElementErrorSourceFrontSide = {
  _: 'passportElementErrorSourceFrontSide',
}

/**
 * The front side of the document contains an error. The error will be considered resolved
 * when the file with the front side changes
 */
export type passportElementErrorSourceFrontSide$Input = {
  readonly _: 'passportElementErrorSourceFrontSide',
}

/**
 * The reverse side of the document contains an error. The error will be considered
 * resolved when the file with the reverse side changes
 */
export type passportElementErrorSourceReverseSide = {
  _: 'passportElementErrorSourceReverseSide',
}

/**
 * The reverse side of the document contains an error. The error will be considered
 * resolved when the file with the reverse side changes
 */
export type passportElementErrorSourceReverseSide$Input = {
  readonly _: 'passportElementErrorSourceReverseSide',
}

/**
 * The selfie with the document contains an error. The error will be considered resolved
 * when the file with the selfie changes
 */
export type passportElementErrorSourceSelfie = {
  _: 'passportElementErrorSourceSelfie',
}

/**
 * The selfie with the document contains an error. The error will be considered resolved
 * when the file with the selfie changes
 */
export type passportElementErrorSourceSelfie$Input = {
  readonly _: 'passportElementErrorSourceSelfie',
}

/**
 * One of files with the translation of the document contains an error. The error will
 * be considered resolved when the file changes
 */
export type passportElementErrorSourceTranslationFile = {
  _: 'passportElementErrorSourceTranslationFile',
  /** Index of a file with the error */
  file_index: number,
}

/**
 * One of files with the translation of the document contains an error. The error will
 * be considered resolved when the file changes
 */
export type passportElementErrorSourceTranslationFile$Input = {
  readonly _: 'passportElementErrorSourceTranslationFile',
  /** Index of a file with the error */
  readonly file_index?: number,
}

/**
 * The translation of the document contains an error. The error will be considered resolved
 * when the list of translation files changes
 */
export type passportElementErrorSourceTranslationFiles = {
  _: 'passportElementErrorSourceTranslationFiles',
}

/**
 * The translation of the document contains an error. The error will be considered resolved
 * when the list of translation files changes
 */
export type passportElementErrorSourceTranslationFiles$Input = {
  readonly _: 'passportElementErrorSourceTranslationFiles',
}

/** The file contains an error. The error will be considered resolved when the file changes */
export type passportElementErrorSourceFile = {
  _: 'passportElementErrorSourceFile',
  /** Index of a file with the error */
  file_index: number,
}

/** The file contains an error. The error will be considered resolved when the file changes */
export type passportElementErrorSourceFile$Input = {
  readonly _: 'passportElementErrorSourceFile',
  /** Index of a file with the error */
  readonly file_index?: number,
}

/**
 * The list of attached files contains an error. The error will be considered resolved
 * when the list of files changes
 */
export type passportElementErrorSourceFiles = {
  _: 'passportElementErrorSourceFiles',
}

/**
 * The list of attached files contains an error. The error will be considered resolved
 * when the list of files changes
 */
export type passportElementErrorSourceFiles$Input = {
  readonly _: 'passportElementErrorSourceFiles',
}

/** Contains the description of an error in a Telegram Passport element */
export type passportElementError = {
  _: 'passportElementError',
  /** Type of the Telegram Passport element which has the error */
  type: PassportElementType,
  /** Error message */
  message: string,
  /** Error source */
  source: PassportElementErrorSource,
}

/** Contains the description of an error in a Telegram Passport element */
export type passportElementError$Input = {
  readonly _: 'passportElementError',
  /** Type of the Telegram Passport element which has the error */
  readonly type?: PassportElementType$Input,
  /** Error message */
  readonly message?: string,
  /** Error source */
  readonly source?: PassportElementErrorSource$Input,
}

/** Contains information about a Telegram Passport element that was requested by a service */
export type passportSuitableElement = {
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
}

/** Contains information about a Telegram Passport element that was requested by a service */
export type passportSuitableElement$Input = {
  readonly _: 'passportSuitableElement',
  /** Type of the element */
  readonly type?: PassportElementType$Input,
  /** True, if a selfie is required with the identity document */
  readonly is_selfie_required?: boolean,
  /** True, if a certified English translation is required with the document */
  readonly is_translation_required?: boolean,
  /**
   * True, if personal details must include the user's name in the language of their country
   * of residence
   */
  readonly is_native_name_required?: boolean,
}

/**
 * Contains a description of the required Telegram Passport element that was requested
 * by a service
 */
export type passportRequiredElement = {
  _: 'passportRequiredElement',
  /** List of Telegram Passport elements any of which is enough to provide */
  suitable_elements: Array<passportSuitableElement>,
}

/**
 * Contains a description of the required Telegram Passport element that was requested
 * by a service
 */
export type passportRequiredElement$Input = {
  readonly _: 'passportRequiredElement',
  /** List of Telegram Passport elements any of which is enough to provide */
  readonly suitable_elements?: ReadonlyArray<passportSuitableElement$Input>,
}

/** Contains information about a Telegram Passport authorization form that was requested */
export type passportAuthorizationForm = {
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
}

/** Contains information about a Telegram Passport authorization form that was requested */
export type passportAuthorizationForm$Input = {
  readonly _: 'passportAuthorizationForm',
  /** Unique identifier of the authorization form */
  readonly id?: number,
  /**
   * Information about the Telegram Passport elements that need to be provided to complete
   * the form
   */
  readonly required_elements?: ReadonlyArray<passportRequiredElement$Input>,
  /** URL for the privacy policy of the service; may be empty */
  readonly privacy_policy_url?: string,
}

/** Contains information about a Telegram Passport elements and corresponding errors */
export type passportElementsWithErrors = {
  _: 'passportElementsWithErrors',
  /** Telegram Passport elements */
  elements: Array<PassportElement>,
  /** Errors in the elements that are already available */
  errors: Array<passportElementError>,
}

/** Contains information about a Telegram Passport elements and corresponding errors */
export type passportElementsWithErrors$Input = {
  readonly _: 'passportElementsWithErrors',
  /** Telegram Passport elements */
  readonly elements?: ReadonlyArray<PassportElement$Input>,
  /** Errors in the elements that are already available */
  readonly errors?: ReadonlyArray<passportElementError$Input>,
}

/** Contains encrypted Telegram Passport data credentials */
export type encryptedCredentials = {
  _: 'encryptedCredentials',
  /** The encrypted credentials */
  data: string,
  /** The decrypted data hash */
  hash: string,
  /** Secret for data decryption, encrypted with the service's public key */
  secret: string,
}

/** Contains encrypted Telegram Passport data credentials */
export type encryptedCredentials$Input = {
  readonly _: 'encryptedCredentials',
  /** The encrypted credentials */
  readonly data?: string,
  /** The decrypted data hash */
  readonly hash?: string,
  /** Secret for data decryption, encrypted with the service's public key */
  readonly secret?: string,
}

/** Contains information about an encrypted Telegram Passport element; for bots only */
export type encryptedPassportElement = {
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
}

/** Contains information about an encrypted Telegram Passport element; for bots only */
export type encryptedPassportElement$Input = {
  readonly _: 'encryptedPassportElement',
  /** Type of Telegram Passport element */
  readonly type?: PassportElementType$Input,
  /** Encrypted JSON-encoded data about the user */
  readonly data?: string,
  /** The front side of an identity document */
  readonly front_side?: datedFile$Input,
  /** The reverse side of an identity document; may be null */
  readonly reverse_side?: datedFile$Input,
  /** Selfie with the document; may be null */
  readonly selfie?: datedFile$Input,
  /** List of files containing a certified English translation of the document */
  readonly translation?: ReadonlyArray<datedFile$Input>,
  /** List of attached files */
  readonly files?: ReadonlyArray<datedFile$Input>,
  /** Unencrypted data, phone number or email address */
  readonly value?: string,
  /** Hash of the entire element */
  readonly hash?: string,
}

/**
 * The element contains an error in an unspecified place. The error will be considered
 * resolved when new data is added
 */
export type inputPassportElementErrorSourceUnspecified = {
  _: 'inputPassportElementErrorSourceUnspecified',
  /** Current hash of the entire element */
  element_hash: string,
}

/**
 * The element contains an error in an unspecified place. The error will be considered
 * resolved when new data is added
 */
export type inputPassportElementErrorSourceUnspecified$Input = {
  readonly _: 'inputPassportElementErrorSourceUnspecified',
  /** Current hash of the entire element */
  readonly element_hash?: string,
}

/**
 * A data field contains an error. The error is considered resolved when the field's
 * value changes
 */
export type inputPassportElementErrorSourceDataField = {
  _: 'inputPassportElementErrorSourceDataField',
  /** Field name */
  field_name: string,
  /** Current data hash */
  data_hash: string,
}

/**
 * A data field contains an error. The error is considered resolved when the field's
 * value changes
 */
export type inputPassportElementErrorSourceDataField$Input = {
  readonly _: 'inputPassportElementErrorSourceDataField',
  /** Field name */
  readonly field_name?: string,
  /** Current data hash */
  readonly data_hash?: string,
}

/**
 * The front side of the document contains an error. The error is considered resolved
 * when the file with the front side of the document changes
 */
export type inputPassportElementErrorSourceFrontSide = {
  _: 'inputPassportElementErrorSourceFrontSide',
  /** Current hash of the file containing the front side */
  file_hash: string,
}

/**
 * The front side of the document contains an error. The error is considered resolved
 * when the file with the front side of the document changes
 */
export type inputPassportElementErrorSourceFrontSide$Input = {
  readonly _: 'inputPassportElementErrorSourceFrontSide',
  /** Current hash of the file containing the front side */
  readonly file_hash?: string,
}

/**
 * The reverse side of the document contains an error. The error is considered resolved
 * when the file with the reverse side of the document changes
 */
export type inputPassportElementErrorSourceReverseSide = {
  _: 'inputPassportElementErrorSourceReverseSide',
  /** Current hash of the file containing the reverse side */
  file_hash: string,
}

/**
 * The reverse side of the document contains an error. The error is considered resolved
 * when the file with the reverse side of the document changes
 */
export type inputPassportElementErrorSourceReverseSide$Input = {
  readonly _: 'inputPassportElementErrorSourceReverseSide',
  /** Current hash of the file containing the reverse side */
  readonly file_hash?: string,
}

/**
 * The selfie contains an error. The error is considered resolved when the file with
 * the selfie changes
 */
export type inputPassportElementErrorSourceSelfie = {
  _: 'inputPassportElementErrorSourceSelfie',
  /** Current hash of the file containing the selfie */
  file_hash: string,
}

/**
 * The selfie contains an error. The error is considered resolved when the file with
 * the selfie changes
 */
export type inputPassportElementErrorSourceSelfie$Input = {
  readonly _: 'inputPassportElementErrorSourceSelfie',
  /** Current hash of the file containing the selfie */
  readonly file_hash?: string,
}

/**
 * One of the files containing the translation of the document contains an error. The
 * error is considered resolved when the file with the translation changes
 */
export type inputPassportElementErrorSourceTranslationFile = {
  _: 'inputPassportElementErrorSourceTranslationFile',
  /** Current hash of the file containing the translation */
  file_hash: string,
}

/**
 * One of the files containing the translation of the document contains an error. The
 * error is considered resolved when the file with the translation changes
 */
export type inputPassportElementErrorSourceTranslationFile$Input = {
  readonly _: 'inputPassportElementErrorSourceTranslationFile',
  /** Current hash of the file containing the translation */
  readonly file_hash?: string,
}

/**
 * The translation of the document contains an error. The error is considered resolved
 * when the list of files changes
 */
export type inputPassportElementErrorSourceTranslationFiles = {
  _: 'inputPassportElementErrorSourceTranslationFiles',
  /** Current hashes of all files with the translation */
  file_hashes: Array<string>,
}

/**
 * The translation of the document contains an error. The error is considered resolved
 * when the list of files changes
 */
export type inputPassportElementErrorSourceTranslationFiles$Input = {
  readonly _: 'inputPassportElementErrorSourceTranslationFiles',
  /** Current hashes of all files with the translation */
  readonly file_hashes?: ReadonlyArray<string>,
}

/** The file contains an error. The error is considered resolved when the file changes */
export type inputPassportElementErrorSourceFile = {
  _: 'inputPassportElementErrorSourceFile',
  /** Current hash of the file which has the error */
  file_hash: string,
}

/** The file contains an error. The error is considered resolved when the file changes */
export type inputPassportElementErrorSourceFile$Input = {
  readonly _: 'inputPassportElementErrorSourceFile',
  /** Current hash of the file which has the error */
  readonly file_hash?: string,
}

/**
 * The list of attached files contains an error. The error is considered resolved when
 * the file list changes
 */
export type inputPassportElementErrorSourceFiles = {
  _: 'inputPassportElementErrorSourceFiles',
  /** Current hashes of all attached files */
  file_hashes: Array<string>,
}

/**
 * The list of attached files contains an error. The error is considered resolved when
 * the file list changes
 */
export type inputPassportElementErrorSourceFiles$Input = {
  readonly _: 'inputPassportElementErrorSourceFiles',
  /** Current hashes of all attached files */
  readonly file_hashes?: ReadonlyArray<string>,
}

/** Contains the description of an error in a Telegram Passport element; for bots only */
export type inputPassportElementError = {
  _: 'inputPassportElementError',
  /** Type of Telegram Passport element that has the error */
  type: PassportElementType,
  /** Error message */
  message: string,
  /** Error source */
  source: InputPassportElementErrorSource,
}

/** Contains the description of an error in a Telegram Passport element; for bots only */
export type inputPassportElementError$Input = {
  readonly _: 'inputPassportElementError',
  /** Type of Telegram Passport element that has the error */
  readonly type?: PassportElementType$Input,
  /** Error message */
  readonly message?: string,
  /** Error source */
  readonly source?: InputPassportElementErrorSource$Input,
}

/** A text message */
export type messageText = {
  _: 'messageText',
  /** Text of the message */
  text: formattedText,
  /** A preview of the web page that's mentioned in the text; may be null */
  web_page: webPage,
}

/** A text message */
export type messageText$Input = {
  readonly _: 'messageText',
  /** Text of the message */
  readonly text?: formattedText$Input,
  /** A preview of the web page that's mentioned in the text; may be null */
  readonly web_page?: webPage$Input,
}

/** An animation message (GIF-style). */
export type messageAnimation = {
  _: 'messageAnimation',
  /** Message content */
  animation: animation,
  /** Animation caption */
  caption: formattedText,
  /**
   * True, if the animation thumbnail must be blurred and the animation must be shown
   * only while tapped
   */
  is_secret: boolean,
}

/** An animation message (GIF-style). */
export type messageAnimation$Input = {
  readonly _: 'messageAnimation',
  /** Message content */
  readonly animation?: animation$Input,
  /** Animation caption */
  readonly caption?: formattedText$Input,
  /**
   * True, if the animation thumbnail must be blurred and the animation must be shown
   * only while tapped
   */
  readonly is_secret?: boolean,
}

/** An audio message */
export type messageAudio = {
  _: 'messageAudio',
  /** Message content */
  audio: audio,
  /** Audio caption */
  caption: formattedText,
}

/** An audio message */
export type messageAudio$Input = {
  readonly _: 'messageAudio',
  /** Message content */
  readonly audio?: audio$Input,
  /** Audio caption */
  readonly caption?: formattedText$Input,
}

/** A document message (general file) */
export type messageDocument = {
  _: 'messageDocument',
  /** Message content */
  document: document,
  /** Document caption */
  caption: formattedText,
}

/** A document message (general file) */
export type messageDocument$Input = {
  readonly _: 'messageDocument',
  /** Message content */
  readonly document?: document$Input,
  /** Document caption */
  readonly caption?: formattedText$Input,
}

/** A photo message */
export type messagePhoto = {
  _: 'messagePhoto',
  /** Message content */
  photo: photo,
  /** Photo caption */
  caption: formattedText,
  /** True, if the photo must be blurred and must be shown only while tapped */
  is_secret: boolean,
}

/** A photo message */
export type messagePhoto$Input = {
  readonly _: 'messagePhoto',
  /** Message content */
  readonly photo?: photo$Input,
  /** Photo caption */
  readonly caption?: formattedText$Input,
  /** True, if the photo must be blurred and must be shown only while tapped */
  readonly is_secret?: boolean,
}

/** An expired photo message (self-destructed after TTL has elapsed) */
export type messageExpiredPhoto = {
  _: 'messageExpiredPhoto',
}

/** An expired photo message (self-destructed after TTL has elapsed) */
export type messageExpiredPhoto$Input = {
  readonly _: 'messageExpiredPhoto',
}

/** A sticker message */
export type messageSticker = {
  _: 'messageSticker',
  /** Message content */
  sticker: sticker,
}

/** A sticker message */
export type messageSticker$Input = {
  readonly _: 'messageSticker',
  /** Message content */
  readonly sticker?: sticker$Input,
}

/** A video message */
export type messageVideo = {
  _: 'messageVideo',
  /** Message content */
  video: video,
  /** Video caption */
  caption: formattedText,
  /**
   * True, if the video thumbnail must be blurred and the video must be shown only while
   * tapped
   */
  is_secret: boolean,
}

/** A video message */
export type messageVideo$Input = {
  readonly _: 'messageVideo',
  /** Message content */
  readonly video?: video$Input,
  /** Video caption */
  readonly caption?: formattedText$Input,
  /**
   * True, if the video thumbnail must be blurred and the video must be shown only while
   * tapped
   */
  readonly is_secret?: boolean,
}

/** An expired video message (self-destructed after TTL has elapsed) */
export type messageExpiredVideo = {
  _: 'messageExpiredVideo',
}

/** An expired video message (self-destructed after TTL has elapsed) */
export type messageExpiredVideo$Input = {
  readonly _: 'messageExpiredVideo',
}

/** A video note message */
export type messageVideoNote = {
  _: 'messageVideoNote',
  /** Message content */
  video_note: videoNote,
  /** True, if at least one of the recipients has viewed the video note */
  is_viewed: boolean,
  /**
   * True, if the video note thumbnail must be blurred and the video note must be shown
   * only while tapped
   */
  is_secret: boolean,
}

/** A video note message */
export type messageVideoNote$Input = {
  readonly _: 'messageVideoNote',
  /** Message content */
  readonly video_note?: videoNote$Input,
  /** True, if at least one of the recipients has viewed the video note */
  readonly is_viewed?: boolean,
  /**
   * True, if the video note thumbnail must be blurred and the video note must be shown
   * only while tapped
   */
  readonly is_secret?: boolean,
}

/** A voice note message */
export type messageVoiceNote = {
  _: 'messageVoiceNote',
  /** Message content */
  voice_note: voiceNote,
  /** Voice note caption */
  caption: formattedText,
  /** True, if at least one of the recipients has listened to the voice note */
  is_listened: boolean,
}

/** A voice note message */
export type messageVoiceNote$Input = {
  readonly _: 'messageVoiceNote',
  /** Message content */
  readonly voice_note?: voiceNote$Input,
  /** Voice note caption */
  readonly caption?: formattedText$Input,
  /** True, if at least one of the recipients has listened to the voice note */
  readonly is_listened?: boolean,
}

/** A message with a location */
export type messageLocation = {
  _: 'messageLocation',
  /** Message content */
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
}

/** A message with a location */
export type messageLocation$Input = {
  readonly _: 'messageLocation',
  /** Message content */
  readonly location?: location$Input,
  /**
   * Time relative to the message sent date until which the location can be updated, in
   * seconds
   */
  readonly live_period?: number,
  /**
   * Left time for which the location can be updated, in seconds. updateMessageContent
   * is not sent when this field changes
   */
  readonly expires_in?: number,
}

/** A message with information about a venue */
export type messageVenue = {
  _: 'messageVenue',
  /** Message content */
  venue: venue,
}

/** A message with information about a venue */
export type messageVenue$Input = {
  readonly _: 'messageVenue',
  /** Message content */
  readonly venue?: venue$Input,
}

/** A message with a user contact */
export type messageContact = {
  _: 'messageContact',
  /** Message content */
  contact: contact,
}

/** A message with a user contact */
export type messageContact$Input = {
  readonly _: 'messageContact',
  /** Message content */
  readonly contact?: contact$Input,
}

/** A message with a game */
export type messageGame = {
  _: 'messageGame',
  /** Game */
  game: game,
}

/** A message with a game */
export type messageGame$Input = {
  readonly _: 'messageGame',
  /** Game */
  readonly game?: game$Input,
}

/** A message with a poll */
export type messagePoll = {
  _: 'messagePoll',
  /** Poll */
  poll: poll,
}

/** A message with a poll */
export type messagePoll$Input = {
  readonly _: 'messagePoll',
  /** Poll */
  readonly poll?: poll$Input,
}

/** A message with an invoice from a bot */
export type messageInvoice = {
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
}

/** A message with an invoice from a bot */
export type messageInvoice$Input = {
  readonly _: 'messageInvoice',
  /** Product title */
  readonly title?: string,
  /** Product description */
  readonly description?: string,
  /** Product photo; may be null */
  readonly photo?: photo$Input,
  /** Currency for the product price */
  readonly currency?: string,
  /** Product total price in the minimal quantity of the currency */
  readonly total_amount?: number,
  /** Unique invoice bot start_parameter. To share an invoice use the URL https://t.me/{bot_username}?start={start_parameter} */
  readonly start_parameter?: string,
  /** True, if the invoice is a test invoice */
  readonly is_test?: boolean,
  /** True, if the shipping address should be specified */
  readonly need_shipping_address?: boolean,
  /** The identifier of the message with the receipt, after the product has been purchased */
  readonly receipt_message_id?: number,
}

/** A message with information about an ended call */
export type messageCall = {
  _: 'messageCall',
  /** Reason why the call was discarded */
  discard_reason: CallDiscardReason,
  /** Call duration, in seconds */
  duration: number,
}

/** A message with information about an ended call */
export type messageCall$Input = {
  readonly _: 'messageCall',
  /** Reason why the call was discarded */
  readonly discard_reason?: CallDiscardReason$Input,
  /** Call duration, in seconds */
  readonly duration?: number,
}

/** A newly created basic group */
export type messageBasicGroupChatCreate = {
  _: 'messageBasicGroupChatCreate',
  /** Title of the basic group */
  title: string,
  /** User identifiers of members in the basic group */
  member_user_ids: Array<number>,
}

/** A newly created basic group */
export type messageBasicGroupChatCreate$Input = {
  readonly _: 'messageBasicGroupChatCreate',
  /** Title of the basic group */
  readonly title?: string,
  /** User identifiers of members in the basic group */
  readonly member_user_ids?: ReadonlyArray<number>,
}

/** A newly created supergroup or channel */
export type messageSupergroupChatCreate = {
  _: 'messageSupergroupChatCreate',
  /** Title of the supergroup or channel */
  title: string,
}

/** A newly created supergroup or channel */
export type messageSupergroupChatCreate$Input = {
  readonly _: 'messageSupergroupChatCreate',
  /** Title of the supergroup or channel */
  readonly title?: string,
}

/** An updated chat title */
export type messageChatChangeTitle = {
  _: 'messageChatChangeTitle',
  /** New chat title */
  title: string,
}

/** An updated chat title */
export type messageChatChangeTitle$Input = {
  readonly _: 'messageChatChangeTitle',
  /** New chat title */
  readonly title?: string,
}

/** An updated chat photo */
export type messageChatChangePhoto = {
  _: 'messageChatChangePhoto',
  /** New chat photo */
  photo: photo,
}

/** An updated chat photo */
export type messageChatChangePhoto$Input = {
  readonly _: 'messageChatChangePhoto',
  /** New chat photo */
  readonly photo?: photo$Input,
}

/** A deleted chat photo */
export type messageChatDeletePhoto = {
  _: 'messageChatDeletePhoto',
}

/** A deleted chat photo */
export type messageChatDeletePhoto$Input = {
  readonly _: 'messageChatDeletePhoto',
}

/** New chat members were added */
export type messageChatAddMembers = {
  _: 'messageChatAddMembers',
  /** User identifiers of the new members */
  member_user_ids: Array<number>,
}

/** New chat members were added */
export type messageChatAddMembers$Input = {
  readonly _: 'messageChatAddMembers',
  /** User identifiers of the new members */
  readonly member_user_ids?: ReadonlyArray<number>,
}

/** A new member joined the chat by invite link */
export type messageChatJoinByLink = {
  _: 'messageChatJoinByLink',
}

/** A new member joined the chat by invite link */
export type messageChatJoinByLink$Input = {
  readonly _: 'messageChatJoinByLink',
}

/** A chat member was deleted */
export type messageChatDeleteMember = {
  _: 'messageChatDeleteMember',
  /** User identifier of the deleted chat member */
  user_id: number,
}

/** A chat member was deleted */
export type messageChatDeleteMember$Input = {
  readonly _: 'messageChatDeleteMember',
  /** User identifier of the deleted chat member */
  readonly user_id?: number,
}

/** A basic group was upgraded to a supergroup and was deactivated as the result */
export type messageChatUpgradeTo = {
  _: 'messageChatUpgradeTo',
  /** Identifier of the supergroup to which the basic group was upgraded */
  supergroup_id: number,
}

/** A basic group was upgraded to a supergroup and was deactivated as the result */
export type messageChatUpgradeTo$Input = {
  readonly _: 'messageChatUpgradeTo',
  /** Identifier of the supergroup to which the basic group was upgraded */
  readonly supergroup_id?: number,
}

/** A supergroup has been created from a basic group */
export type messageChatUpgradeFrom = {
  _: 'messageChatUpgradeFrom',
  /** Title of the newly created supergroup */
  title: string,
  /** The identifier of the original basic group */
  basic_group_id: number,
}

/** A supergroup has been created from a basic group */
export type messageChatUpgradeFrom$Input = {
  readonly _: 'messageChatUpgradeFrom',
  /** Title of the newly created supergroup */
  readonly title?: string,
  /** The identifier of the original basic group */
  readonly basic_group_id?: number,
}

/** A message has been pinned */
export type messagePinMessage = {
  _: 'messagePinMessage',
  /** Identifier of the pinned message, can be an identifier of a deleted message or 0 */
  message_id: number,
}

/** A message has been pinned */
export type messagePinMessage$Input = {
  readonly _: 'messagePinMessage',
  /** Identifier of the pinned message, can be an identifier of a deleted message or 0 */
  readonly message_id?: number,
}

/** A screenshot of a message in the chat has been taken */
export type messageScreenshotTaken = {
  _: 'messageScreenshotTaken',
}

/** A screenshot of a message in the chat has been taken */
export type messageScreenshotTaken$Input = {
  readonly _: 'messageScreenshotTaken',
}

/** The TTL (Time To Live) setting messages in a secret chat has been changed */
export type messageChatSetTtl = {
  _: 'messageChatSetTtl',
  /** New TTL */
  ttl: number,
}

/** The TTL (Time To Live) setting messages in a secret chat has been changed */
export type messageChatSetTtl$Input = {
  readonly _: 'messageChatSetTtl',
  /** New TTL */
  readonly ttl?: number,
}

/** A non-standard action has happened in the chat */
export type messageCustomServiceAction = {
  _: 'messageCustomServiceAction',
  /** Message text to be shown in the chat */
  text: string,
}

/** A non-standard action has happened in the chat */
export type messageCustomServiceAction$Input = {
  readonly _: 'messageCustomServiceAction',
  /** Message text to be shown in the chat */
  readonly text?: string,
}

/** A new high score was achieved in a game */
export type messageGameScore = {
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
}

/** A new high score was achieved in a game */
export type messageGameScore$Input = {
  readonly _: 'messageGameScore',
  /** Identifier of the message with the game, can be an identifier of a deleted message */
  readonly game_message_id?: number,
  /**
   * Identifier of the game; may be different from the games presented in the message
   * with the game
   */
  readonly game_id?: number | string,
  /** New score */
  readonly score?: number,
}

/** A payment has been completed */
export type messagePaymentSuccessful = {
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
}

/** A payment has been completed */
export type messagePaymentSuccessful$Input = {
  readonly _: 'messagePaymentSuccessful',
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  readonly invoice_message_id?: number,
  /** Currency for the price of the product */
  readonly currency?: string,
  /** Total price for the product, in the minimal quantity of the currency */
  readonly total_amount?: number,
}

/** A payment has been completed; for bots only */
export type messagePaymentSuccessfulBot = {
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
}

/** A payment has been completed; for bots only */
export type messagePaymentSuccessfulBot$Input = {
  readonly _: 'messagePaymentSuccessfulBot',
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  readonly invoice_message_id?: number,
  /** Currency for price of the product */
  readonly currency?: string,
  /** Total price for the product, in the minimal quantity of the currency */
  readonly total_amount?: number,
  /** Invoice payload */
  readonly invoice_payload?: string,
  /** Identifier of the shipping option chosen by the user; may be empty if not applicable */
  readonly shipping_option_id?: string,
  /** Information about the order; may be null */
  readonly order_info?: orderInfo$Input,
  /** Telegram payment identifier */
  readonly telegram_payment_charge_id?: string,
  /** Provider payment identifier */
  readonly provider_payment_charge_id?: string,
}

/** A contact has registered with Telegram */
export type messageContactRegistered = {
  _: 'messageContactRegistered',
}

/** A contact has registered with Telegram */
export type messageContactRegistered$Input = {
  readonly _: 'messageContactRegistered',
}

/**
 * The current user has connected a website by logging in using Telegram Login Widget
 * on it
 */
export type messageWebsiteConnected = {
  _: 'messageWebsiteConnected',
  /** Domain name of the connected website */
  domain_name: string,
}

/**
 * The current user has connected a website by logging in using Telegram Login Widget
 * on it
 */
export type messageWebsiteConnected$Input = {
  readonly _: 'messageWebsiteConnected',
  /** Domain name of the connected website */
  readonly domain_name?: string,
}

/** Telegram Passport data has been sent */
export type messagePassportDataSent = {
  _: 'messagePassportDataSent',
  /** List of Telegram Passport element types sent */
  types: Array<PassportElementType>,
}

/** Telegram Passport data has been sent */
export type messagePassportDataSent$Input = {
  readonly _: 'messagePassportDataSent',
  /** List of Telegram Passport element types sent */
  readonly types?: ReadonlyArray<PassportElementType$Input>,
}

/** Telegram Passport data has been received; for bots only */
export type messagePassportDataReceived = {
  _: 'messagePassportDataReceived',
  /** List of received Telegram Passport elements */
  elements: Array<encryptedPassportElement>,
  /** Encrypted data credentials */
  credentials: encryptedCredentials,
}

/** Telegram Passport data has been received; for bots only */
export type messagePassportDataReceived$Input = {
  readonly _: 'messagePassportDataReceived',
  /** List of received Telegram Passport elements */
  readonly elements?: ReadonlyArray<encryptedPassportElement$Input>,
  /** Encrypted data credentials */
  readonly credentials?: encryptedCredentials$Input,
}

/** Message content that is not supported by the client */
export type messageUnsupported = {
  _: 'messageUnsupported',
}

/** Message content that is not supported by the client */
export type messageUnsupported$Input = {
  readonly _: 'messageUnsupported',
}

/** A mention of a user by their username */
export type textEntityTypeMention = {
  _: 'textEntityTypeMention',
}

/** A mention of a user by their username */
export type textEntityTypeMention$Input = {
  readonly _: 'textEntityTypeMention',
}

/** A hashtag text, beginning with "#" */
export type textEntityTypeHashtag = {
  _: 'textEntityTypeHashtag',
}

/** A hashtag text, beginning with "#" */
export type textEntityTypeHashtag$Input = {
  readonly _: 'textEntityTypeHashtag',
}

/**
 * A cashtag text, beginning with "$" and consisting of capital english letters (i.e.
 * "$USD")
 */
export type textEntityTypeCashtag = {
  _: 'textEntityTypeCashtag',
}

/**
 * A cashtag text, beginning with "$" and consisting of capital english letters (i.e.
 * "$USD")
 */
export type textEntityTypeCashtag$Input = {
  readonly _: 'textEntityTypeCashtag',
}

/**
 * A bot command, beginning with "/". This shouldn't be highlighted if there are no
 * bots in the chat
 */
export type textEntityTypeBotCommand = {
  _: 'textEntityTypeBotCommand',
}

/**
 * A bot command, beginning with "/". This shouldn't be highlighted if there are no
 * bots in the chat
 */
export type textEntityTypeBotCommand$Input = {
  readonly _: 'textEntityTypeBotCommand',
}

/** An HTTP URL */
export type textEntityTypeUrl = {
  _: 'textEntityTypeUrl',
}

/** An HTTP URL */
export type textEntityTypeUrl$Input = {
  readonly _: 'textEntityTypeUrl',
}

/** An email address */
export type textEntityTypeEmailAddress = {
  _: 'textEntityTypeEmailAddress',
}

/** An email address */
export type textEntityTypeEmailAddress$Input = {
  readonly _: 'textEntityTypeEmailAddress',
}

/** A bold text */
export type textEntityTypeBold = {
  _: 'textEntityTypeBold',
}

/** A bold text */
export type textEntityTypeBold$Input = {
  readonly _: 'textEntityTypeBold',
}

/** An italic text */
export type textEntityTypeItalic = {
  _: 'textEntityTypeItalic',
}

/** An italic text */
export type textEntityTypeItalic$Input = {
  readonly _: 'textEntityTypeItalic',
}

/** Text that must be formatted as if inside a code HTML tag */
export type textEntityTypeCode = {
  _: 'textEntityTypeCode',
}

/** Text that must be formatted as if inside a code HTML tag */
export type textEntityTypeCode$Input = {
  readonly _: 'textEntityTypeCode',
}

/** Text that must be formatted as if inside a pre HTML tag */
export type textEntityTypePre = {
  _: 'textEntityTypePre',
}

/** Text that must be formatted as if inside a pre HTML tag */
export type textEntityTypePre$Input = {
  readonly _: 'textEntityTypePre',
}

/** Text that must be formatted as if inside pre, and code HTML tags */
export type textEntityTypePreCode = {
  _: 'textEntityTypePreCode',
  /** Programming language of the code; as defined by the sender */
  language: string,
}

/** Text that must be formatted as if inside pre, and code HTML tags */
export type textEntityTypePreCode$Input = {
  readonly _: 'textEntityTypePreCode',
  /** Programming language of the code; as defined by the sender */
  readonly language?: string,
}

/** A text description shown instead of a raw URL */
export type textEntityTypeTextUrl = {
  _: 'textEntityTypeTextUrl',
  /** HTTP or tg:// URL to be opened when the link is clicked */
  url: string,
}

/** A text description shown instead of a raw URL */
export type textEntityTypeTextUrl$Input = {
  readonly _: 'textEntityTypeTextUrl',
  /** HTTP or tg:// URL to be opened when the link is clicked */
  readonly url?: string,
}

/** A text shows instead of a raw mention of the user (e.g., when the user has no username) */
export type textEntityTypeMentionName = {
  _: 'textEntityTypeMentionName',
  /** Identifier of the mentioned user */
  user_id: number,
}

/** A text shows instead of a raw mention of the user (e.g., when the user has no username) */
export type textEntityTypeMentionName$Input = {
  readonly _: 'textEntityTypeMentionName',
  /** Identifier of the mentioned user */
  readonly user_id?: number,
}

/** A phone number */
export type textEntityTypePhoneNumber = {
  _: 'textEntityTypePhoneNumber',
}

/** A phone number */
export type textEntityTypePhoneNumber$Input = {
  readonly _: 'textEntityTypePhoneNumber',
}

/**
 * A thumbnail to be sent along with a file; should be in JPEG or WEBP format for stickers,
 * and less than 200 kB in size
 */
export type inputThumbnail = {
  _: 'inputThumbnail',
  /** Thumbnail file to send. Sending thumbnails by file_id is currently not supported */
  thumbnail: InputFile,
  /** Thumbnail width, usually shouldn't exceed 320. Use 0 if unknown */
  width: number,
  /** Thumbnail height, usually shouldn't exceed 320. Use 0 if unknown */
  height: number,
}

/**
 * A thumbnail to be sent along with a file; should be in JPEG or WEBP format for stickers,
 * and less than 200 kB in size
 */
export type inputThumbnail$Input = {
  readonly _: 'inputThumbnail',
  /** Thumbnail file to send. Sending thumbnails by file_id is currently not supported */
  readonly thumbnail?: InputFile$Input,
  /** Thumbnail width, usually shouldn't exceed 320. Use 0 if unknown */
  readonly width?: number,
  /** Thumbnail height, usually shouldn't exceed 320. Use 0 if unknown */
  readonly height?: number,
}

/** A text message */
export type inputMessageText = {
  _: 'inputMessageText',
  /**
   * Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only
   * Bold, Italic, Code, Pre, PreCode and TextUrl entities are allowed to be specified
   * manually
   */
  text: formattedText,
  /** True, if rich web page previews for URLs in the message text should be disabled */
  disable_web_page_preview: boolean,
  /** True, if a chat message draft should be deleted */
  clear_draft: boolean,
}

/** A text message */
export type inputMessageText$Input = {
  readonly _: 'inputMessageText',
  /**
   * Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only
   * Bold, Italic, Code, Pre, PreCode and TextUrl entities are allowed to be specified
   * manually
   */
  readonly text?: formattedText$Input,
  /** True, if rich web page previews for URLs in the message text should be disabled */
  readonly disable_web_page_preview?: boolean,
  /** True, if a chat message draft should be deleted */
  readonly clear_draft?: boolean,
}

/** An animation message (GIF-style). */
export type inputMessageAnimation = {
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
}

/** An animation message (GIF-style). */
export type inputMessageAnimation$Input = {
  readonly _: 'inputMessageAnimation',
  /** Animation file to be sent */
  readonly animation?: InputFile$Input,
  /** Animation thumbnail, if available */
  readonly thumbnail?: inputThumbnail$Input,
  /** Duration of the animation, in seconds */
  readonly duration?: number,
  /** Width of the animation; may be replaced by the server */
  readonly width?: number,
  /** Height of the animation; may be replaced by the server */
  readonly height?: number,
  /** Animation caption; 0-GetOption("message_caption_length_max") characters */
  readonly caption?: formattedText$Input,
}

/** An audio message */
export type inputMessageAudio = {
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
}

/** An audio message */
export type inputMessageAudio$Input = {
  readonly _: 'inputMessageAudio',
  /** Audio file to be sent */
  readonly audio?: InputFile$Input,
  /** Thumbnail of the cover for the album, if available */
  readonly album_cover_thumbnail?: inputThumbnail$Input,
  /** Duration of the audio, in seconds; may be replaced by the server */
  readonly duration?: number,
  /** Title of the audio; 0-64 characters; may be replaced by the server */
  readonly title?: string,
  /** Performer of the audio; 0-64 characters, may be replaced by the server */
  readonly performer?: string,
  /** Audio caption; 0-GetOption("message_caption_length_max") characters */
  readonly caption?: formattedText$Input,
}

/** A document message (general file) */
export type inputMessageDocument = {
  _: 'inputMessageDocument',
  /** Document to be sent */
  document: InputFile,
  /** Document thumbnail, if available */
  thumbnail: inputThumbnail,
  /** Document caption; 0-GetOption("message_caption_length_max") characters */
  caption: formattedText,
}

/** A document message (general file) */
export type inputMessageDocument$Input = {
  readonly _: 'inputMessageDocument',
  /** Document to be sent */
  readonly document?: InputFile$Input,
  /** Document thumbnail, if available */
  readonly thumbnail?: inputThumbnail$Input,
  /** Document caption; 0-GetOption("message_caption_length_max") characters */
  readonly caption?: formattedText$Input,
}

/** A photo message */
export type inputMessagePhoto = {
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
}

/** A photo message */
export type inputMessagePhoto$Input = {
  readonly _: 'inputMessagePhoto',
  /** Photo to send */
  readonly photo?: InputFile$Input,
  /** Photo thumbnail to be sent, this is sent to the other party in secret chats only */
  readonly thumbnail?: inputThumbnail$Input,
  /** File identifiers of the stickers added to the photo, if applicable */
  readonly added_sticker_file_ids?: ReadonlyArray<number>,
  /** Photo width */
  readonly width?: number,
  /** Photo height */
  readonly height?: number,
  /** Photo caption; 0-GetOption("message_caption_length_max") characters */
  readonly caption?: formattedText$Input,
  /**
   * Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  readonly ttl?: number,
}

/** A sticker message */
export type inputMessageSticker = {
  _: 'inputMessageSticker',
  /** Sticker to be sent */
  sticker: InputFile,
  /** Sticker thumbnail, if available */
  thumbnail: inputThumbnail,
  /** Sticker width */
  width: number,
  /** Sticker height */
  height: number,
}

/** A sticker message */
export type inputMessageSticker$Input = {
  readonly _: 'inputMessageSticker',
  /** Sticker to be sent */
  readonly sticker?: InputFile$Input,
  /** Sticker thumbnail, if available */
  readonly thumbnail?: inputThumbnail$Input,
  /** Sticker width */
  readonly width?: number,
  /** Sticker height */
  readonly height?: number,
}

/** A video message */
export type inputMessageVideo = {
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
}

/** A video message */
export type inputMessageVideo$Input = {
  readonly _: 'inputMessageVideo',
  /** Video to be sent */
  readonly video?: InputFile$Input,
  /** Video thumbnail, if available */
  readonly thumbnail?: inputThumbnail$Input,
  /** File identifiers of the stickers added to the video, if applicable */
  readonly added_sticker_file_ids?: ReadonlyArray<number>,
  /** Duration of the video, in seconds */
  readonly duration?: number,
  /** Video width */
  readonly width?: number,
  /** Video height */
  readonly height?: number,
  /** True, if the video should be tried to be streamed */
  readonly supports_streaming?: boolean,
  /** Video caption; 0-GetOption("message_caption_length_max") characters */
  readonly caption?: formattedText$Input,
  /**
   * Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  readonly ttl?: number,
}

/** A video note message */
export type inputMessageVideoNote = {
  _: 'inputMessageVideoNote',
  /** Video note to be sent */
  video_note: InputFile,
  /** Video thumbnail, if available */
  thumbnail: inputThumbnail,
  /** Duration of the video, in seconds */
  duration: number,
  /** Video width and height; must be positive and not greater than 640 */
  length: number,
}

/** A video note message */
export type inputMessageVideoNote$Input = {
  readonly _: 'inputMessageVideoNote',
  /** Video note to be sent */
  readonly video_note?: InputFile$Input,
  /** Video thumbnail, if available */
  readonly thumbnail?: inputThumbnail$Input,
  /** Duration of the video, in seconds */
  readonly duration?: number,
  /** Video width and height; must be positive and not greater than 640 */
  readonly length?: number,
}

/** A voice note message */
export type inputMessageVoiceNote = {
  _: 'inputMessageVoiceNote',
  /** Voice note to be sent */
  voice_note: InputFile,
  /** Duration of the voice note, in seconds */
  duration: number,
  /** Waveform representation of the voice note, in 5-bit format */
  waveform: string,
  /** Voice note caption; 0-GetOption("message_caption_length_max") characters */
  caption: formattedText,
}

/** A voice note message */
export type inputMessageVoiceNote$Input = {
  readonly _: 'inputMessageVoiceNote',
  /** Voice note to be sent */
  readonly voice_note?: InputFile$Input,
  /** Duration of the voice note, in seconds */
  readonly duration?: number,
  /** Waveform representation of the voice note, in 5-bit format */
  readonly waveform?: string,
  /** Voice note caption; 0-GetOption("message_caption_length_max") characters */
  readonly caption?: formattedText$Input,
}

/** A message with a location */
export type inputMessageLocation = {
  _: 'inputMessageLocation',
  /** Location to be sent */
  location: location,
  /**
   * Period for which the location can be updated, in seconds; should bebetween 60 and
   * 86400 for a live location and 0 otherwise
   */
  live_period: number,
}

/** A message with a location */
export type inputMessageLocation$Input = {
  readonly _: 'inputMessageLocation',
  /** Location to be sent */
  readonly location?: location$Input,
  /**
   * Period for which the location can be updated, in seconds; should bebetween 60 and
   * 86400 for a live location and 0 otherwise
   */
  readonly live_period?: number,
}

/** A message with information about a venue */
export type inputMessageVenue = {
  _: 'inputMessageVenue',
  /** Venue to send */
  venue: venue,
}

/** A message with information about a venue */
export type inputMessageVenue$Input = {
  readonly _: 'inputMessageVenue',
  /** Venue to send */
  readonly venue?: venue$Input,
}

/** A message containing a user contact */
export type inputMessageContact = {
  _: 'inputMessageContact',
  /** Contact to send */
  contact: contact,
}

/** A message containing a user contact */
export type inputMessageContact$Input = {
  readonly _: 'inputMessageContact',
  /** Contact to send */
  readonly contact?: contact$Input,
}

/** A message with a game; not supported for channels or secret chats */
export type inputMessageGame = {
  _: 'inputMessageGame',
  /** User identifier of the bot that owns the game */
  bot_user_id: number,
  /** Short name of the game */
  game_short_name: string,
}

/** A message with a game; not supported for channels or secret chats */
export type inputMessageGame$Input = {
  readonly _: 'inputMessageGame',
  /** User identifier of the bot that owns the game */
  readonly bot_user_id?: number,
  /** Short name of the game */
  readonly game_short_name?: string,
}

/** A message with an invoice; can be used only by bots and only in private chats */
export type inputMessageInvoice = {
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
}

/** A message with an invoice; can be used only by bots and only in private chats */
export type inputMessageInvoice$Input = {
  readonly _: 'inputMessageInvoice',
  /** Invoice */
  readonly invoice?: invoice$Input,
  /** Product title; 1-32 characters */
  readonly title?: string,
  /** Product description; 0-255 characters */
  readonly description?: string,
  /** Product photo URL; optional */
  readonly photo_url?: string,
  /** Product photo size */
  readonly photo_size?: number,
  /** Product photo width */
  readonly photo_width?: number,
  /** Product photo height */
  readonly photo_height?: number,
  /** The invoice payload */
  readonly payload?: string,
  /** Payment provider token */
  readonly provider_token?: string,
  /** JSON-encoded data about the invoice, which will be shared with the payment provider */
  readonly provider_data?: string,
  /** Unique invoice bot start_parameter for the generation of this invoice */
  readonly start_parameter?: string,
}

/** A message with a poll. Polls can't be sent to private or secret chats */
export type inputMessagePoll = {
  _: 'inputMessagePoll',
  /** Poll question, 1-255 characters */
  question: string,
  /** List of poll answer options, 2-10 strings 1-100 characters each */
  options: Array<string>,
}

/** A message with a poll. Polls can't be sent to private or secret chats */
export type inputMessagePoll$Input = {
  readonly _: 'inputMessagePoll',
  /** Poll question, 1-255 characters */
  readonly question?: string,
  /** List of poll answer options, 2-10 strings 1-100 characters each */
  readonly options?: ReadonlyArray<string>,
}

/** A forwarded message */
export type inputMessageForwarded = {
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
}

/** A forwarded message */
export type inputMessageForwarded$Input = {
  readonly _: 'inputMessageForwarded',
  /** Identifier for the chat this forwarded message came from */
  readonly from_chat_id?: number,
  /** Identifier of the message to forward */
  readonly message_id?: number,
  /**
   * True, if a game message should be shared within a launched game; applies only to
   * game messages
   */
  readonly in_game_share?: boolean,
}

/** Returns all found messages, no filter is applied */
export type searchMessagesFilterEmpty = {
  _: 'searchMessagesFilterEmpty',
}

/** Returns all found messages, no filter is applied */
export type searchMessagesFilterEmpty$Input = {
  readonly _: 'searchMessagesFilterEmpty',
}

/** Returns only animation messages */
export type searchMessagesFilterAnimation = {
  _: 'searchMessagesFilterAnimation',
}

/** Returns only animation messages */
export type searchMessagesFilterAnimation$Input = {
  readonly _: 'searchMessagesFilterAnimation',
}

/** Returns only audio messages */
export type searchMessagesFilterAudio = {
  _: 'searchMessagesFilterAudio',
}

/** Returns only audio messages */
export type searchMessagesFilterAudio$Input = {
  readonly _: 'searchMessagesFilterAudio',
}

/** Returns only document messages */
export type searchMessagesFilterDocument = {
  _: 'searchMessagesFilterDocument',
}

/** Returns only document messages */
export type searchMessagesFilterDocument$Input = {
  readonly _: 'searchMessagesFilterDocument',
}

/** Returns only photo messages */
export type searchMessagesFilterPhoto = {
  _: 'searchMessagesFilterPhoto',
}

/** Returns only photo messages */
export type searchMessagesFilterPhoto$Input = {
  readonly _: 'searchMessagesFilterPhoto',
}

/** Returns only video messages */
export type searchMessagesFilterVideo = {
  _: 'searchMessagesFilterVideo',
}

/** Returns only video messages */
export type searchMessagesFilterVideo$Input = {
  readonly _: 'searchMessagesFilterVideo',
}

/** Returns only voice note messages */
export type searchMessagesFilterVoiceNote = {
  _: 'searchMessagesFilterVoiceNote',
}

/** Returns only voice note messages */
export type searchMessagesFilterVoiceNote$Input = {
  readonly _: 'searchMessagesFilterVoiceNote',
}

/** Returns only photo and video messages */
export type searchMessagesFilterPhotoAndVideo = {
  _: 'searchMessagesFilterPhotoAndVideo',
}

/** Returns only photo and video messages */
export type searchMessagesFilterPhotoAndVideo$Input = {
  readonly _: 'searchMessagesFilterPhotoAndVideo',
}

/** Returns only messages containing URLs */
export type searchMessagesFilterUrl = {
  _: 'searchMessagesFilterUrl',
}

/** Returns only messages containing URLs */
export type searchMessagesFilterUrl$Input = {
  readonly _: 'searchMessagesFilterUrl',
}

/** Returns only messages containing chat photos */
export type searchMessagesFilterChatPhoto = {
  _: 'searchMessagesFilterChatPhoto',
}

/** Returns only messages containing chat photos */
export type searchMessagesFilterChatPhoto$Input = {
  readonly _: 'searchMessagesFilterChatPhoto',
}

/** Returns only call messages */
export type searchMessagesFilterCall = {
  _: 'searchMessagesFilterCall',
}

/** Returns only call messages */
export type searchMessagesFilterCall$Input = {
  readonly _: 'searchMessagesFilterCall',
}

/** Returns only incoming call messages with missed/declined discard reasons */
export type searchMessagesFilterMissedCall = {
  _: 'searchMessagesFilterMissedCall',
}

/** Returns only incoming call messages with missed/declined discard reasons */
export type searchMessagesFilterMissedCall$Input = {
  readonly _: 'searchMessagesFilterMissedCall',
}

/** Returns only video note messages */
export type searchMessagesFilterVideoNote = {
  _: 'searchMessagesFilterVideoNote',
}

/** Returns only video note messages */
export type searchMessagesFilterVideoNote$Input = {
  readonly _: 'searchMessagesFilterVideoNote',
}

/** Returns only voice and video note messages */
export type searchMessagesFilterVoiceAndVideoNote = {
  _: 'searchMessagesFilterVoiceAndVideoNote',
}

/** Returns only voice and video note messages */
export type searchMessagesFilterVoiceAndVideoNote$Input = {
  readonly _: 'searchMessagesFilterVoiceAndVideoNote',
}

/**
 * Returns only messages with mentions of the current user, or messages that are replies
 * to their messages
 */
export type searchMessagesFilterMention = {
  _: 'searchMessagesFilterMention',
}

/**
 * Returns only messages with mentions of the current user, or messages that are replies
 * to their messages
 */
export type searchMessagesFilterMention$Input = {
  readonly _: 'searchMessagesFilterMention',
}

/**
 * Returns only messages with unread mentions of the current user, or messages that
 * are replies to their messages. When using this filter the results can't be additionally
 * filtered by a query or by the sending user
 */
export type searchMessagesFilterUnreadMention = {
  _: 'searchMessagesFilterUnreadMention',
}

/**
 * Returns only messages with unread mentions of the current user, or messages that
 * are replies to their messages. When using this filter the results can't be additionally
 * filtered by a query or by the sending user
 */
export type searchMessagesFilterUnreadMention$Input = {
  readonly _: 'searchMessagesFilterUnreadMention',
}

/** The user is typing a message */
export type chatActionTyping = {
  _: 'chatActionTyping',
}

/** The user is typing a message */
export type chatActionTyping$Input = {
  readonly _: 'chatActionTyping',
}

/** The user is recording a video */
export type chatActionRecordingVideo = {
  _: 'chatActionRecordingVideo',
}

/** The user is recording a video */
export type chatActionRecordingVideo$Input = {
  readonly _: 'chatActionRecordingVideo',
}

/** The user is uploading a video */
export type chatActionUploadingVideo = {
  _: 'chatActionUploadingVideo',
  /** Upload progress, as a percentage */
  progress: number,
}

/** The user is uploading a video */
export type chatActionUploadingVideo$Input = {
  readonly _: 'chatActionUploadingVideo',
  /** Upload progress, as a percentage */
  readonly progress?: number,
}

/** The user is recording a voice note */
export type chatActionRecordingVoiceNote = {
  _: 'chatActionRecordingVoiceNote',
}

/** The user is recording a voice note */
export type chatActionRecordingVoiceNote$Input = {
  readonly _: 'chatActionRecordingVoiceNote',
}

/** The user is uploading a voice note */
export type chatActionUploadingVoiceNote = {
  _: 'chatActionUploadingVoiceNote',
  /** Upload progress, as a percentage */
  progress: number,
}

/** The user is uploading a voice note */
export type chatActionUploadingVoiceNote$Input = {
  readonly _: 'chatActionUploadingVoiceNote',
  /** Upload progress, as a percentage */
  readonly progress?: number,
}

/** The user is uploading a photo */
export type chatActionUploadingPhoto = {
  _: 'chatActionUploadingPhoto',
  /** Upload progress, as a percentage */
  progress: number,
}

/** The user is uploading a photo */
export type chatActionUploadingPhoto$Input = {
  readonly _: 'chatActionUploadingPhoto',
  /** Upload progress, as a percentage */
  readonly progress?: number,
}

/** The user is uploading a document */
export type chatActionUploadingDocument = {
  _: 'chatActionUploadingDocument',
  /** Upload progress, as a percentage */
  progress: number,
}

/** The user is uploading a document */
export type chatActionUploadingDocument$Input = {
  readonly _: 'chatActionUploadingDocument',
  /** Upload progress, as a percentage */
  readonly progress?: number,
}

/** The user is picking a location or venue to send */
export type chatActionChoosingLocation = {
  _: 'chatActionChoosingLocation',
}

/** The user is picking a location or venue to send */
export type chatActionChoosingLocation$Input = {
  readonly _: 'chatActionChoosingLocation',
}

/** The user is picking a contact to send */
export type chatActionChoosingContact = {
  _: 'chatActionChoosingContact',
}

/** The user is picking a contact to send */
export type chatActionChoosingContact$Input = {
  readonly _: 'chatActionChoosingContact',
}

/** The user has started to play a game */
export type chatActionStartPlayingGame = {
  _: 'chatActionStartPlayingGame',
}

/** The user has started to play a game */
export type chatActionStartPlayingGame$Input = {
  readonly _: 'chatActionStartPlayingGame',
}

/** The user is recording a video note */
export type chatActionRecordingVideoNote = {
  _: 'chatActionRecordingVideoNote',
}

/** The user is recording a video note */
export type chatActionRecordingVideoNote$Input = {
  readonly _: 'chatActionRecordingVideoNote',
}

/** The user is uploading a video note */
export type chatActionUploadingVideoNote = {
  _: 'chatActionUploadingVideoNote',
  /** Upload progress, as a percentage */
  progress: number,
}

/** The user is uploading a video note */
export type chatActionUploadingVideoNote$Input = {
  readonly _: 'chatActionUploadingVideoNote',
  /** Upload progress, as a percentage */
  readonly progress?: number,
}

/** The user has cancelled the previous action */
export type chatActionCancel = {
  _: 'chatActionCancel',
}

/** The user has cancelled the previous action */
export type chatActionCancel$Input = {
  readonly _: 'chatActionCancel',
}

/** The user status was never changed */
export type userStatusEmpty = {
  _: 'userStatusEmpty',
}

/** The user status was never changed */
export type userStatusEmpty$Input = {
  readonly _: 'userStatusEmpty',
}

/** The user is online */
export type userStatusOnline = {
  _: 'userStatusOnline',
  /** Point in time (Unix timestamp) when the user's online status will expire */
  expires: number,
}

/** The user is online */
export type userStatusOnline$Input = {
  readonly _: 'userStatusOnline',
  /** Point in time (Unix timestamp) when the user's online status will expire */
  readonly expires?: number,
}

/** The user is offline */
export type userStatusOffline = {
  _: 'userStatusOffline',
  /** Point in time (Unix timestamp) when the user was last online */
  was_online: number,
}

/** The user is offline */
export type userStatusOffline$Input = {
  readonly _: 'userStatusOffline',
  /** Point in time (Unix timestamp) when the user was last online */
  readonly was_online?: number,
}

/** The user was online recently */
export type userStatusRecently = {
  _: 'userStatusRecently',
}

/** The user was online recently */
export type userStatusRecently$Input = {
  readonly _: 'userStatusRecently',
}

/** The user is offline, but was online last week */
export type userStatusLastWeek = {
  _: 'userStatusLastWeek',
}

/** The user is offline, but was online last week */
export type userStatusLastWeek$Input = {
  readonly _: 'userStatusLastWeek',
}

/** The user is offline, but was online last month */
export type userStatusLastMonth = {
  _: 'userStatusLastMonth',
}

/** The user is offline, but was online last month */
export type userStatusLastMonth$Input = {
  readonly _: 'userStatusLastMonth',
}

/** Represents a list of stickers */
export type stickers = {
  _: 'stickers',
  /** List of stickers */
  stickers: Array<sticker>,
}

/** Represents a list of stickers */
export type stickers$Input = {
  readonly _: 'stickers',
  /** List of stickers */
  readonly stickers?: ReadonlyArray<sticker$Input>,
}

/**
 * Represents a list of all emoji corresponding to a sticker in a sticker set. The list
 * is only for informational purposes, because a sticker is always sent with a fixed
 * emoji from the corresponding Sticker object
 */
export type stickerEmojis = {
  _: 'stickerEmojis',
  /** List of emojis */
  emojis: Array<string>,
}

/**
 * Represents a list of all emoji corresponding to a sticker in a sticker set. The list
 * is only for informational purposes, because a sticker is always sent with a fixed
 * emoji from the corresponding Sticker object
 */
export type stickerEmojis$Input = {
  readonly _: 'stickerEmojis',
  /** List of emojis */
  readonly emojis?: ReadonlyArray<string>,
}

/** Represents a sticker set */
export type stickerSet = {
  _: 'stickerSet',
  /** Identifier of the sticker set */
  id: number | string,
  /** Title of the sticker set */
  title: string,
  /** Name of the sticker set */
  name: string,
  /** True, if the sticker set has been installed by the current user */
  is_installed: boolean,
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  is_archived: boolean,
  /** True, if the sticker set is official */
  is_official: boolean,
  /** True, if the stickers in the set are masks */
  is_masks: boolean,
  /** True for already viewed trending sticker sets */
  is_viewed: boolean,
  /** List of stickers in this set */
  stickers: Array<sticker>,
  /** A list of emoji corresponding to the stickers in the same order */
  emojis: Array<stickerEmojis>,
}

/** Represents a sticker set */
export type stickerSet$Input = {
  readonly _: 'stickerSet',
  /** Identifier of the sticker set */
  readonly id?: number | string,
  /** Title of the sticker set */
  readonly title?: string,
  /** Name of the sticker set */
  readonly name?: string,
  /** True, if the sticker set has been installed by the current user */
  readonly is_installed?: boolean,
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  readonly is_archived?: boolean,
  /** True, if the sticker set is official */
  readonly is_official?: boolean,
  /** True, if the stickers in the set are masks */
  readonly is_masks?: boolean,
  /** True for already viewed trending sticker sets */
  readonly is_viewed?: boolean,
  /** List of stickers in this set */
  readonly stickers?: ReadonlyArray<sticker$Input>,
  /** A list of emoji corresponding to the stickers in the same order */
  readonly emojis?: ReadonlyArray<stickerEmojis$Input>,
}

/** Represents short information about a sticker set */
export type stickerSetInfo = {
  _: 'stickerSetInfo',
  /** Identifier of the sticker set */
  id: number | string,
  /** Title of the sticker set */
  title: string,
  /** Name of the sticker set */
  name: string,
  /** True, if the sticker set has been installed by current user */
  is_installed: boolean,
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  is_archived: boolean,
  /** True, if the sticker set is official */
  is_official: boolean,
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
}

/** Represents short information about a sticker set */
export type stickerSetInfo$Input = {
  readonly _: 'stickerSetInfo',
  /** Identifier of the sticker set */
  readonly id?: number | string,
  /** Title of the sticker set */
  readonly title?: string,
  /** Name of the sticker set */
  readonly name?: string,
  /** True, if the sticker set has been installed by current user */
  readonly is_installed?: boolean,
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  readonly is_archived?: boolean,
  /** True, if the sticker set is official */
  readonly is_official?: boolean,
  /** True, if the stickers in the set are masks */
  readonly is_masks?: boolean,
  /** True for already viewed trending sticker sets */
  readonly is_viewed?: boolean,
  /** Total number of stickers in the set */
  readonly size?: number,
  /**
   * Contains up to the first 5 stickers from the set, depending on the context. If the
   * client needs more stickers the full set should be requested
   */
  readonly covers?: ReadonlyArray<sticker$Input>,
}

/** Represents a list of sticker sets */
export type stickerSets = {
  _: 'stickerSets',
  /** Approximate total number of sticker sets found */
  total_count: number,
  /** List of sticker sets */
  sets: Array<stickerSetInfo>,
}

/** Represents a list of sticker sets */
export type stickerSets$Input = {
  readonly _: 'stickerSets',
  /** Approximate total number of sticker sets found */
  readonly total_count?: number,
  /** List of sticker sets */
  readonly sets?: ReadonlyArray<stickerSetInfo$Input>,
}

/** The call wasn't discarded, or the reason is unknown */
export type callDiscardReasonEmpty = {
  _: 'callDiscardReasonEmpty',
}

/** The call wasn't discarded, or the reason is unknown */
export type callDiscardReasonEmpty$Input = {
  readonly _: 'callDiscardReasonEmpty',
}

/**
 * The call was ended before the conversation started. It was cancelled by the caller
 * or missed by the other party
 */
export type callDiscardReasonMissed = {
  _: 'callDiscardReasonMissed',
}

/**
 * The call was ended before the conversation started. It was cancelled by the caller
 * or missed by the other party
 */
export type callDiscardReasonMissed$Input = {
  readonly _: 'callDiscardReasonMissed',
}

/**
 * The call was ended before the conversation started. It was declined by the other
 * party
 */
export type callDiscardReasonDeclined = {
  _: 'callDiscardReasonDeclined',
}

/**
 * The call was ended before the conversation started. It was declined by the other
 * party
 */
export type callDiscardReasonDeclined$Input = {
  readonly _: 'callDiscardReasonDeclined',
}

/** The call was ended during the conversation because the users were disconnected */
export type callDiscardReasonDisconnected = {
  _: 'callDiscardReasonDisconnected',
}

/** The call was ended during the conversation because the users were disconnected */
export type callDiscardReasonDisconnected$Input = {
  readonly _: 'callDiscardReasonDisconnected',
}

/** The call was ended because one of the parties hung up */
export type callDiscardReasonHungUp = {
  _: 'callDiscardReasonHungUp',
}

/** The call was ended because one of the parties hung up */
export type callDiscardReasonHungUp$Input = {
  readonly _: 'callDiscardReasonHungUp',
}

/** Specifies the supported call protocols */
export type callProtocol = {
  _: 'callProtocol',
  /** True, if UDP peer-to-peer connections are supported */
  udp_p2p: boolean,
  /** True, if connection through UDP reflectors is supported */
  udp_reflector: boolean,
  /** Minimum supported API layer; use 65 */
  min_layer: number,
  /** Maximum supported API layer; use 65 */
  max_layer: number,
}

/** Specifies the supported call protocols */
export type callProtocol$Input = {
  readonly _: 'callProtocol',
  /** True, if UDP peer-to-peer connections are supported */
  readonly udp_p2p?: boolean,
  /** True, if connection through UDP reflectors is supported */
  readonly udp_reflector?: boolean,
  /** Minimum supported API layer; use 65 */
  readonly min_layer?: number,
  /** Maximum supported API layer; use 65 */
  readonly max_layer?: number,
}

/** Describes the address of UDP reflectors */
export type callConnection = {
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
}

/** Describes the address of UDP reflectors */
export type callConnection$Input = {
  readonly _: 'callConnection',
  /** Reflector identifier */
  readonly id?: number | string,
  /** IPv4 reflector address */
  readonly ip?: string,
  /** IPv6 reflector address */
  readonly ipv6?: string,
  /** Reflector port number */
  readonly port?: number,
  /** Connection peer tag */
  readonly peer_tag?: string,
}

/** Contains the call identifier */
export type callId = {
  _: 'callId',
  /** Call identifier */
  id: number,
}

/** Contains the call identifier */
export type callId$Input = {
  readonly _: 'callId',
  /** Call identifier */
  readonly id?: number,
}

/** The call is pending, waiting to be accepted by a user */
export type callStatePending = {
  _: 'callStatePending',
  /** True, if the call has already been created by the server */
  is_created: boolean,
  /** True, if the call has already been received by the other party */
  is_received: boolean,
}

/** The call is pending, waiting to be accepted by a user */
export type callStatePending$Input = {
  readonly _: 'callStatePending',
  /** True, if the call has already been created by the server */
  readonly is_created?: boolean,
  /** True, if the call has already been received by the other party */
  readonly is_received?: boolean,
}

/** The call has been answered and encryption keys are being exchanged */
export type callStateExchangingKeys = {
  _: 'callStateExchangingKeys',
}

/** The call has been answered and encryption keys are being exchanged */
export type callStateExchangingKeys$Input = {
  readonly _: 'callStateExchangingKeys',
}

/** The call is ready to use */
export type callStateReady = {
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
}

/** The call is ready to use */
export type callStateReady$Input = {
  readonly _: 'callStateReady',
  /** Call protocols supported by the peer */
  readonly protocol?: callProtocol$Input,
  /** Available UDP reflectors */
  readonly connections?: ReadonlyArray<callConnection$Input>,
  /** A JSON-encoded call config */
  readonly config?: string,
  /** Call encryption key */
  readonly encryption_key?: string,
  /** Encryption key emojis fingerprint */
  readonly emojis?: ReadonlyArray<string>,
  /** True, if peer-to-peer connection is allowed by users privacy settings */
  readonly allow_p2p?: boolean,
}

/** The call is hanging up after discardCall has been called */
export type callStateHangingUp = {
  _: 'callStateHangingUp',
}

/** The call is hanging up after discardCall has been called */
export type callStateHangingUp$Input = {
  readonly _: 'callStateHangingUp',
}

/** The call has ended successfully */
export type callStateDiscarded = {
  _: 'callStateDiscarded',
  /** The reason, why the call has ended */
  reason: CallDiscardReason,
  /** True, if the call rating should be sent to the server */
  need_rating: boolean,
  /** True, if the call debug information should be sent to the server */
  need_debug_information: boolean,
}

/** The call has ended successfully */
export type callStateDiscarded$Input = {
  readonly _: 'callStateDiscarded',
  /** The reason, why the call has ended */
  readonly reason?: CallDiscardReason$Input,
  /** True, if the call rating should be sent to the server */
  readonly need_rating?: boolean,
  /** True, if the call debug information should be sent to the server */
  readonly need_debug_information?: boolean,
}

/** The call has ended with an error */
export type callStateError = {
  _: 'callStateError',
  /**
   * Error. An error with the code 4005000 will be returned if an outgoing call is missed
   * because of an expired timeout
   */
  error: error,
}

/** The call has ended with an error */
export type callStateError$Input = {
  readonly _: 'callStateError',
  /**
   * Error. An error with the code 4005000 will be returned if an outgoing call is missed
   * because of an expired timeout
   */
  readonly error?: error$Input,
}

/** Describes a call */
export type call = {
  _: 'call',
  /** Call identifier, not persistent */
  id: number,
  /** Peer user identifier */
  user_id: number,
  /** True, if the call is outgoing */
  is_outgoing: boolean,
  /** Call state */
  state: CallState,
}

/** Describes a call */
export type call$Input = {
  readonly _: 'call',
  /** Call identifier, not persistent */
  readonly id?: number,
  /** Peer user identifier */
  readonly user_id?: number,
  /** True, if the call is outgoing */
  readonly is_outgoing?: boolean,
  /** Call state */
  readonly state?: CallState$Input,
}

/** Represents a list of animations */
export type animations = {
  _: 'animations',
  /** List of animations */
  animations: Array<animation>,
}

/** Represents a list of animations */
export type animations$Input = {
  readonly _: 'animations',
  /** List of animations */
  readonly animations?: ReadonlyArray<animation$Input>,
}

/** Represents the result of an ImportContacts request */
export type importedContacts = {
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
}

/** Represents the result of an ImportContacts request */
export type importedContacts$Input = {
  readonly _: 'importedContacts',
  /**
   * User identifiers of the imported contacts in the same order as they were specified
   * in the request; 0 if the contact is not yet a registered user
   */
  readonly user_ids?: ReadonlyArray<number>,
  /**
   * The number of users that imported the corresponding contact; 0 for already registered
   * users or if unavailable
   */
  readonly importer_count?: ReadonlyArray<number>,
}

/** Contains an HTTP URL */
export type httpUrl = {
  _: 'httpUrl',
  /** The URL */
  url: string,
}

/** Contains an HTTP URL */
export type httpUrl$Input = {
  readonly _: 'httpUrl',
  /** The URL */
  readonly url?: string,
}

/** Represents a link to an animated GIF */
export type inputInlineQueryResultAnimatedGif = {
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
}

/** Represents a link to an animated GIF */
export type inputInlineQueryResultAnimatedGif$Input = {
  readonly _: 'inputInlineQueryResultAnimatedGif',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Title of the query result */
  readonly title?: string,
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  readonly thumbnail_url?: string,
  /** The URL of the GIF-file (file size must not exceed 1MB) */
  readonly gif_url?: string,
  /** Duration of the GIF, in seconds */
  readonly gif_duration?: number,
  /** Width of the GIF */
  readonly gif_width?: number,
  /** Height of the GIF */
  readonly gif_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents a link to an animated (i.e. without sound) H.264/MPEG-4 AVC video */
export type inputInlineQueryResultAnimatedMpeg4 = {
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
}

/** Represents a link to an animated (i.e. without sound) H.264/MPEG-4 AVC video */
export type inputInlineQueryResultAnimatedMpeg4$Input = {
  readonly _: 'inputInlineQueryResultAnimatedMpeg4',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Title of the result */
  readonly title?: string,
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  readonly thumbnail_url?: string,
  /** The URL of the MPEG4-file (file size must not exceed 1MB) */
  readonly mpeg4_url?: string,
  /** Duration of the video, in seconds */
  readonly mpeg4_duration?: number,
  /** Width of the video */
  readonly mpeg4_width?: number,
  /** Height of the video */
  readonly mpeg4_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents a link to an article or web page */
export type inputInlineQueryResultArticle = {
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
}

/** Represents a link to an article or web page */
export type inputInlineQueryResultArticle$Input = {
  readonly _: 'inputInlineQueryResultArticle',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** URL of the result, if it exists */
  readonly url?: string,
  /** True, if the URL must be not shown */
  readonly hide_url?: boolean,
  /** Title of the result */
  readonly title?: string,
  /** A short description of the result */
  readonly description?: string,
  /** URL of the result thumbnail, if it exists */
  readonly thumbnail_url?: string,
  /** Thumbnail width, if known */
  readonly thumbnail_width?: number,
  /** Thumbnail height, if known */
  readonly thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents a link to an MP3 audio file */
export type inputInlineQueryResultAudio = {
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
}

/** Represents a link to an MP3 audio file */
export type inputInlineQueryResultAudio$Input = {
  readonly _: 'inputInlineQueryResultAudio',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Title of the audio file */
  readonly title?: string,
  /** Performer of the audio file */
  readonly performer?: string,
  /** The URL of the audio file */
  readonly audio_url?: string,
  /** Audio file duration, in seconds */
  readonly audio_duration?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAudio, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents a user contact */
export type inputInlineQueryResultContact = {
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
}

/** Represents a user contact */
export type inputInlineQueryResultContact$Input = {
  readonly _: 'inputInlineQueryResultContact',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** User contact */
  readonly contact?: contact$Input,
  /** URL of the result thumbnail, if it exists */
  readonly thumbnail_url?: string,
  /** Thumbnail width, if known */
  readonly thumbnail_width?: number,
  /** Thumbnail height, if known */
  readonly thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents a link to a file */
export type inputInlineQueryResultDocument = {
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
}

/** Represents a link to a file */
export type inputInlineQueryResultDocument$Input = {
  readonly _: 'inputInlineQueryResultDocument',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Title of the resulting file */
  readonly title?: string,
  /** Short description of the result, if known */
  readonly description?: string,
  /** URL of the file */
  readonly document_url?: string,
  /**
   * MIME type of the file content; only "application/pdf" and "application/zip" are currently
   * allowed
   */
  readonly mime_type?: string,
  /** The URL of the file thumbnail, if it exists */
  readonly thumbnail_url?: string,
  /** Width of the thumbnail */
  readonly thumbnail_width?: number,
  /** Height of the thumbnail */
  readonly thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageDocument, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents a game */
export type inputInlineQueryResultGame = {
  _: 'inputInlineQueryResultGame',
  /** Unique identifier of the query result */
  id: string,
  /** Short name of the game */
  game_short_name: string,
  /** Message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup: ReplyMarkup,
}

/** Represents a game */
export type inputInlineQueryResultGame$Input = {
  readonly _: 'inputInlineQueryResultGame',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Short name of the game */
  readonly game_short_name?: string,
  /** Message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
}

/** Represents a point on the map */
export type inputInlineQueryResultLocation = {
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
}

/** Represents a point on the map */
export type inputInlineQueryResultLocation$Input = {
  readonly _: 'inputInlineQueryResultLocation',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Location result */
  readonly location?: location$Input,
  /**
   * Amount of time relative to the message sent time until the location can be updated,
   * in seconds
   */
  readonly live_period?: number,
  /** Title of the result */
  readonly title?: string,
  /** URL of the result thumbnail, if it exists */
  readonly thumbnail_url?: string,
  /** Thumbnail width, if known */
  readonly thumbnail_width?: number,
  /** Thumbnail height, if known */
  readonly thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents link to a JPEG image */
export type inputInlineQueryResultPhoto = {
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
}

/** Represents link to a JPEG image */
export type inputInlineQueryResultPhoto$Input = {
  readonly _: 'inputInlineQueryResultPhoto',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Title of the result, if known */
  readonly title?: string,
  /** A short description of the result, if known */
  readonly description?: string,
  /** URL of the photo thumbnail, if it exists */
  readonly thumbnail_url?: string,
  /** The URL of the JPEG photo (photo size must not exceed 5MB) */
  readonly photo_url?: string,
  /** Width of the photo */
  readonly photo_width?: number,
  /** Height of the photo */
  readonly photo_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessagePhoto, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents a link to a WEBP sticker */
export type inputInlineQueryResultSticker = {
  _: 'inputInlineQueryResultSticker',
  /** Unique identifier of the query result */
  id: string,
  /** URL of the sticker thumbnail, if it exists */
  thumbnail_url: string,
  /** The URL of the WEBP sticker (sticker file size must not exceed 5MB) */
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
}

/** Represents a link to a WEBP sticker */
export type inputInlineQueryResultSticker$Input = {
  readonly _: 'inputInlineQueryResultSticker',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** URL of the sticker thumbnail, if it exists */
  readonly thumbnail_url?: string,
  /** The URL of the WEBP sticker (sticker file size must not exceed 5MB) */
  readonly sticker_url?: string,
  /** Width of the sticker */
  readonly sticker_width?: number,
  /** Height of the sticker */
  readonly sticker_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * inputMessageSticker, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents information about a venue */
export type inputInlineQueryResultVenue = {
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
}

/** Represents information about a venue */
export type inputInlineQueryResultVenue$Input = {
  readonly _: 'inputInlineQueryResultVenue',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Venue result */
  readonly venue?: venue$Input,
  /** URL of the result thumbnail, if it exists */
  readonly thumbnail_url?: string,
  /** Thumbnail width, if known */
  readonly thumbnail_width?: number,
  /** Thumbnail height, if known */
  readonly thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents a link to a page containing an embedded video player or a video file */
export type inputInlineQueryResultVideo = {
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
}

/** Represents a link to a page containing an embedded video player or a video file */
export type inputInlineQueryResultVideo$Input = {
  readonly _: 'inputInlineQueryResultVideo',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Title of the result */
  readonly title?: string,
  /** A short description of the result, if known */
  readonly description?: string,
  /** The URL of the video thumbnail (JPEG), if it exists */
  readonly thumbnail_url?: string,
  /** URL of the embedded video player or video file */
  readonly video_url?: string,
  /**
   * MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently
   * supported
   */
  readonly mime_type?: string,
  /** Width of the video */
  readonly video_width?: number,
  /** Height of the video */
  readonly video_height?: number,
  /** Video duration, in seconds */
  readonly video_duration?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVideo, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/**
 * Represents a link to an opus-encoded audio file within an OGG container, single channel
 * audio
 */
export type inputInlineQueryResultVoiceNote = {
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
}

/**
 * Represents a link to an opus-encoded audio file within an OGG container, single channel
 * audio
 */
export type inputInlineQueryResultVoiceNote$Input = {
  readonly _: 'inputInlineQueryResultVoiceNote',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Title of the voice note */
  readonly title?: string,
  /** The URL of the voice note file */
  readonly voice_note_url?: string,
  /** Duration of the voice note, in seconds */
  readonly voice_note_duration?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVoiceNote, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Represents a link to an article or web page */
export type inlineQueryResultArticle = {
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
}

/** Represents a link to an article or web page */
export type inlineQueryResultArticle$Input = {
  readonly _: 'inlineQueryResultArticle',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** URL of the result, if it exists */
  readonly url?: string,
  /** True, if the URL must be not shown */
  readonly hide_url?: boolean,
  /** Title of the result */
  readonly title?: string,
  /** A short description of the result */
  readonly description?: string,
  /** Result thumbnail; may be null */
  readonly thumbnail?: photoSize$Input,
}

/** Represents a user contact */
export type inlineQueryResultContact = {
  _: 'inlineQueryResultContact',
  /** Unique identifier of the query result */
  id: string,
  /** A user contact */
  contact: contact,
  /** Result thumbnail; may be null */
  thumbnail: photoSize,
}

/** Represents a user contact */
export type inlineQueryResultContact$Input = {
  readonly _: 'inlineQueryResultContact',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** A user contact */
  readonly contact?: contact$Input,
  /** Result thumbnail; may be null */
  readonly thumbnail?: photoSize$Input,
}

/** Represents a point on the map */
export type inlineQueryResultLocation = {
  _: 'inlineQueryResultLocation',
  /** Unique identifier of the query result */
  id: string,
  /** Location result */
  location: location,
  /** Title of the result */
  title: string,
  /** Result thumbnail; may be null */
  thumbnail: photoSize,
}

/** Represents a point on the map */
export type inlineQueryResultLocation$Input = {
  readonly _: 'inlineQueryResultLocation',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Location result */
  readonly location?: location$Input,
  /** Title of the result */
  readonly title?: string,
  /** Result thumbnail; may be null */
  readonly thumbnail?: photoSize$Input,
}

/** Represents information about a venue */
export type inlineQueryResultVenue = {
  _: 'inlineQueryResultVenue',
  /** Unique identifier of the query result */
  id: string,
  /** Venue result */
  venue: venue,
  /** Result thumbnail; may be null */
  thumbnail: photoSize,
}

/** Represents information about a venue */
export type inlineQueryResultVenue$Input = {
  readonly _: 'inlineQueryResultVenue',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Venue result */
  readonly venue?: venue$Input,
  /** Result thumbnail; may be null */
  readonly thumbnail?: photoSize$Input,
}

/** Represents information about a game */
export type inlineQueryResultGame = {
  _: 'inlineQueryResultGame',
  /** Unique identifier of the query result */
  id: string,
  /** Game result */
  game: game,
}

/** Represents information about a game */
export type inlineQueryResultGame$Input = {
  readonly _: 'inlineQueryResultGame',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Game result */
  readonly game?: game$Input,
}

/** Represents an animation file */
export type inlineQueryResultAnimation = {
  _: 'inlineQueryResultAnimation',
  /** Unique identifier of the query result */
  id: string,
  /** Animation file */
  animation: animation,
  /** Animation title */
  title: string,
}

/** Represents an animation file */
export type inlineQueryResultAnimation$Input = {
  readonly _: 'inlineQueryResultAnimation',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Animation file */
  readonly animation?: animation$Input,
  /** Animation title */
  readonly title?: string,
}

/** Represents an audio file */
export type inlineQueryResultAudio = {
  _: 'inlineQueryResultAudio',
  /** Unique identifier of the query result */
  id: string,
  /** Audio file */
  audio: audio,
}

/** Represents an audio file */
export type inlineQueryResultAudio$Input = {
  readonly _: 'inlineQueryResultAudio',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Audio file */
  readonly audio?: audio$Input,
}

/** Represents a document */
export type inlineQueryResultDocument = {
  _: 'inlineQueryResultDocument',
  /** Unique identifier of the query result */
  id: string,
  /** Document */
  document: document,
  /** Document title */
  title: string,
  /** Document description */
  description: string,
}

/** Represents a document */
export type inlineQueryResultDocument$Input = {
  readonly _: 'inlineQueryResultDocument',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Document */
  readonly document?: document$Input,
  /** Document title */
  readonly title?: string,
  /** Document description */
  readonly description?: string,
}

/** Represents a photo */
export type inlineQueryResultPhoto = {
  _: 'inlineQueryResultPhoto',
  /** Unique identifier of the query result */
  id: string,
  /** Photo */
  photo: photo,
  /** Title of the result, if known */
  title: string,
  /** A short description of the result, if known */
  description: string,
}

/** Represents a photo */
export type inlineQueryResultPhoto$Input = {
  readonly _: 'inlineQueryResultPhoto',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Photo */
  readonly photo?: photo$Input,
  /** Title of the result, if known */
  readonly title?: string,
  /** A short description of the result, if known */
  readonly description?: string,
}

/** Represents a sticker */
export type inlineQueryResultSticker = {
  _: 'inlineQueryResultSticker',
  /** Unique identifier of the query result */
  id: string,
  /** Sticker */
  sticker: sticker,
}

/** Represents a sticker */
export type inlineQueryResultSticker$Input = {
  readonly _: 'inlineQueryResultSticker',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Sticker */
  readonly sticker?: sticker$Input,
}

/** Represents a video */
export type inlineQueryResultVideo = {
  _: 'inlineQueryResultVideo',
  /** Unique identifier of the query result */
  id: string,
  /** Video */
  video: video,
  /** Title of the video */
  title: string,
  /** Description of the video */
  description: string,
}

/** Represents a video */
export type inlineQueryResultVideo$Input = {
  readonly _: 'inlineQueryResultVideo',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Video */
  readonly video?: video$Input,
  /** Title of the video */
  readonly title?: string,
  /** Description of the video */
  readonly description?: string,
}

/** Represents a voice note */
export type inlineQueryResultVoiceNote = {
  _: 'inlineQueryResultVoiceNote',
  /** Unique identifier of the query result */
  id: string,
  /** Voice note */
  voice_note: voiceNote,
  /** Title of the voice note */
  title: string,
}

/** Represents a voice note */
export type inlineQueryResultVoiceNote$Input = {
  readonly _: 'inlineQueryResultVoiceNote',
  /** Unique identifier of the query result */
  readonly id?: string,
  /** Voice note */
  readonly voice_note?: voiceNote$Input,
  /** Title of the voice note */
  readonly title?: string,
}

/**
 * Represents the results of the inline query. Use sendInlineQueryResultMessage to send
 * the result of the query
 */
export type inlineQueryResults = {
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
}

/**
 * Represents the results of the inline query. Use sendInlineQueryResultMessage to send
 * the result of the query
 */
export type inlineQueryResults$Input = {
  readonly _: 'inlineQueryResults',
  /** Unique identifier of the inline query */
  readonly inline_query_id?: number | string,
  /** The offset for the next request. If empty, there are no more results */
  readonly next_offset?: string,
  /** Results of the query */
  readonly results?: ReadonlyArray<InlineQueryResult$Input>,
  /**
   * If non-empty, this text should be shown on the button, which opens a private chat
   * with the bot and sends the bot a start message with the switch_pm_parameter
   */
  readonly switch_pm_text?: string,
  /** Parameter for the bot start message */
  readonly switch_pm_parameter?: string,
}

/** The payload from a general callback button */
export type callbackQueryPayloadData = {
  _: 'callbackQueryPayloadData',
  /** Data that was attached to the callback button */
  data: string,
}

/** The payload from a general callback button */
export type callbackQueryPayloadData$Input = {
  readonly _: 'callbackQueryPayloadData',
  /** Data that was attached to the callback button */
  readonly data?: string,
}

/** The payload from a game callback button */
export type callbackQueryPayloadGame = {
  _: 'callbackQueryPayloadGame',
  /** A short name of the game that was attached to the callback button */
  game_short_name: string,
}

/** The payload from a game callback button */
export type callbackQueryPayloadGame$Input = {
  readonly _: 'callbackQueryPayloadGame',
  /** A short name of the game that was attached to the callback button */
  readonly game_short_name?: string,
}

/** Contains a bot's answer to a callback query */
export type callbackQueryAnswer = {
  _: 'callbackQueryAnswer',
  /** Text of the answer */
  text: string,
  /** True, if an alert should be shown to the user instead of a toast notification */
  show_alert: boolean,
  /** URL to be opened */
  url: string,
}

/** Contains a bot's answer to a callback query */
export type callbackQueryAnswer$Input = {
  readonly _: 'callbackQueryAnswer',
  /** Text of the answer */
  readonly text?: string,
  /** True, if an alert should be shown to the user instead of a toast notification */
  readonly show_alert?: boolean,
  /** URL to be opened */
  readonly url?: string,
}

/** Contains the result of a custom request */
export type customRequestResult = {
  _: 'customRequestResult',
  /** A JSON-serialized result */
  result: string,
}

/** Contains the result of a custom request */
export type customRequestResult$Input = {
  readonly _: 'customRequestResult',
  /** A JSON-serialized result */
  readonly result?: string,
}

/** Contains one row of the game high score table */
export type gameHighScore = {
  _: 'gameHighScore',
  /** Position in the high score table */
  position: number,
  /** User identifier */
  user_id: number,
  /** User score */
  score: number,
}

/** Contains one row of the game high score table */
export type gameHighScore$Input = {
  readonly _: 'gameHighScore',
  /** Position in the high score table */
  readonly position?: number,
  /** User identifier */
  readonly user_id?: number,
  /** User score */
  readonly score?: number,
}

/** Contains a list of game high scores */
export type gameHighScores = {
  _: 'gameHighScores',
  /** A list of game high scores */
  scores: Array<gameHighScore>,
}

/** Contains a list of game high scores */
export type gameHighScores$Input = {
  readonly _: 'gameHighScores',
  /** A list of game high scores */
  readonly scores?: ReadonlyArray<gameHighScore$Input>,
}

/** A message was edited */
export type chatEventMessageEdited = {
  _: 'chatEventMessageEdited',
  /** The original message before the edit */
  old_message: message,
  /** The message after it was edited */
  new_message: message,
}

/** A message was edited */
export type chatEventMessageEdited$Input = {
  readonly _: 'chatEventMessageEdited',
  /** The original message before the edit */
  readonly old_message?: message$Input,
  /** The message after it was edited */
  readonly new_message?: message$Input,
}

/** A message was deleted */
export type chatEventMessageDeleted = {
  _: 'chatEventMessageDeleted',
  /** Deleted message */
  message: message,
}

/** A message was deleted */
export type chatEventMessageDeleted$Input = {
  readonly _: 'chatEventMessageDeleted',
  /** Deleted message */
  readonly message?: message$Input,
}

/** A message was pinned */
export type chatEventMessagePinned = {
  _: 'chatEventMessagePinned',
  /** Pinned message */
  message: message,
}

/** A message was pinned */
export type chatEventMessagePinned$Input = {
  readonly _: 'chatEventMessagePinned',
  /** Pinned message */
  readonly message?: message$Input,
}

/** A message was unpinned */
export type chatEventMessageUnpinned = {
  _: 'chatEventMessageUnpinned',
}

/** A message was unpinned */
export type chatEventMessageUnpinned$Input = {
  readonly _: 'chatEventMessageUnpinned',
}

/** A new member joined the chat */
export type chatEventMemberJoined = {
  _: 'chatEventMemberJoined',
}

/** A new member joined the chat */
export type chatEventMemberJoined$Input = {
  readonly _: 'chatEventMemberJoined',
}

/** A member left the chat */
export type chatEventMemberLeft = {
  _: 'chatEventMemberLeft',
}

/** A member left the chat */
export type chatEventMemberLeft$Input = {
  readonly _: 'chatEventMemberLeft',
}

/** A new chat member was invited */
export type chatEventMemberInvited = {
  _: 'chatEventMemberInvited',
  /** New member user identifier */
  user_id: number,
  /** New member status */
  status: ChatMemberStatus,
}

/** A new chat member was invited */
export type chatEventMemberInvited$Input = {
  readonly _: 'chatEventMemberInvited',
  /** New member user identifier */
  readonly user_id?: number,
  /** New member status */
  readonly status?: ChatMemberStatus$Input,
}

/**
 * A chat member has gained/lost administrator status, or the list of their administrator
 * privileges has changed
 */
export type chatEventMemberPromoted = {
  _: 'chatEventMemberPromoted',
  /** Chat member user identifier */
  user_id: number,
  /** Previous status of the chat member */
  old_status: ChatMemberStatus,
  /** New status of the chat member */
  new_status: ChatMemberStatus,
}

/**
 * A chat member has gained/lost administrator status, or the list of their administrator
 * privileges has changed
 */
export type chatEventMemberPromoted$Input = {
  readonly _: 'chatEventMemberPromoted',
  /** Chat member user identifier */
  readonly user_id?: number,
  /** Previous status of the chat member */
  readonly old_status?: ChatMemberStatus$Input,
  /** New status of the chat member */
  readonly new_status?: ChatMemberStatus$Input,
}

/**
 * A chat member was restricted/unrestricted or banned/unbanned, or the list of their
 * restrictions has changed
 */
export type chatEventMemberRestricted = {
  _: 'chatEventMemberRestricted',
  /** Chat member user identifier */
  user_id: number,
  /** Previous status of the chat member */
  old_status: ChatMemberStatus,
  /** New status of the chat member */
  new_status: ChatMemberStatus,
}

/**
 * A chat member was restricted/unrestricted or banned/unbanned, or the list of their
 * restrictions has changed
 */
export type chatEventMemberRestricted$Input = {
  readonly _: 'chatEventMemberRestricted',
  /** Chat member user identifier */
  readonly user_id?: number,
  /** Previous status of the chat member */
  readonly old_status?: ChatMemberStatus$Input,
  /** New status of the chat member */
  readonly new_status?: ChatMemberStatus$Input,
}

/** The chat title was changed */
export type chatEventTitleChanged = {
  _: 'chatEventTitleChanged',
  /** Previous chat title */
  old_title: string,
  /** New chat title */
  new_title: string,
}

/** The chat title was changed */
export type chatEventTitleChanged$Input = {
  readonly _: 'chatEventTitleChanged',
  /** Previous chat title */
  readonly old_title?: string,
  /** New chat title */
  readonly new_title?: string,
}

/** The chat description was changed */
export type chatEventDescriptionChanged = {
  _: 'chatEventDescriptionChanged',
  /** Previous chat description */
  old_description: string,
  /** New chat description */
  new_description: string,
}

/** The chat description was changed */
export type chatEventDescriptionChanged$Input = {
  readonly _: 'chatEventDescriptionChanged',
  /** Previous chat description */
  readonly old_description?: string,
  /** New chat description */
  readonly new_description?: string,
}

/** The chat username was changed */
export type chatEventUsernameChanged = {
  _: 'chatEventUsernameChanged',
  /** Previous chat username */
  old_username: string,
  /** New chat username */
  new_username: string,
}

/** The chat username was changed */
export type chatEventUsernameChanged$Input = {
  readonly _: 'chatEventUsernameChanged',
  /** Previous chat username */
  readonly old_username?: string,
  /** New chat username */
  readonly new_username?: string,
}

/** The chat photo was changed */
export type chatEventPhotoChanged = {
  _: 'chatEventPhotoChanged',
  /** Previous chat photo value; may be null */
  old_photo: chatPhoto,
  /** New chat photo value; may be null */
  new_photo: chatPhoto,
}

/** The chat photo was changed */
export type chatEventPhotoChanged$Input = {
  readonly _: 'chatEventPhotoChanged',
  /** Previous chat photo value; may be null */
  readonly old_photo?: chatPhoto$Input,
  /** New chat photo value; may be null */
  readonly new_photo?: chatPhoto$Input,
}

/** The anyone_can_invite setting of a supergroup chat was toggled */
export type chatEventInvitesToggled = {
  _: 'chatEventInvitesToggled',
  /** New value of anyone_can_invite */
  anyone_can_invite: boolean,
}

/** The anyone_can_invite setting of a supergroup chat was toggled */
export type chatEventInvitesToggled$Input = {
  readonly _: 'chatEventInvitesToggled',
  /** New value of anyone_can_invite */
  readonly anyone_can_invite?: boolean,
}

/** The sign_messages setting of a channel was toggled */
export type chatEventSignMessagesToggled = {
  _: 'chatEventSignMessagesToggled',
  /** New value of sign_messages */
  sign_messages: boolean,
}

/** The sign_messages setting of a channel was toggled */
export type chatEventSignMessagesToggled$Input = {
  readonly _: 'chatEventSignMessagesToggled',
  /** New value of sign_messages */
  readonly sign_messages?: boolean,
}

/** The supergroup sticker set was changed */
export type chatEventStickerSetChanged = {
  _: 'chatEventStickerSetChanged',
  /** Previous identifier of the chat sticker set; 0 if none */
  old_sticker_set_id: number | string,
  /** New identifier of the chat sticker set; 0 if none */
  new_sticker_set_id: number | string,
}

/** The supergroup sticker set was changed */
export type chatEventStickerSetChanged$Input = {
  readonly _: 'chatEventStickerSetChanged',
  /** Previous identifier of the chat sticker set; 0 if none */
  readonly old_sticker_set_id?: number | string,
  /** New identifier of the chat sticker set; 0 if none */
  readonly new_sticker_set_id?: number | string,
}

/** The is_all_history_available setting of a supergroup was toggled */
export type chatEventIsAllHistoryAvailableToggled = {
  _: 'chatEventIsAllHistoryAvailableToggled',
  /** New value of is_all_history_available */
  is_all_history_available: boolean,
}

/** The is_all_history_available setting of a supergroup was toggled */
export type chatEventIsAllHistoryAvailableToggled$Input = {
  readonly _: 'chatEventIsAllHistoryAvailableToggled',
  /** New value of is_all_history_available */
  readonly is_all_history_available?: boolean,
}

/** Represents a chat event */
export type chatEvent = {
  _: 'chatEvent',
  /** Chat event identifier */
  id: number | string,
  /** Point in time (Unix timestamp) when the event happened */
  date: number,
  /** Identifier of the user who performed the action that triggered the event */
  user_id: number,
  /** Action performed by the user */
  action: ChatEventAction,
}

/** Represents a chat event */
export type chatEvent$Input = {
  readonly _: 'chatEvent',
  /** Chat event identifier */
  readonly id?: number | string,
  /** Point in time (Unix timestamp) when the event happened */
  readonly date?: number,
  /** Identifier of the user who performed the action that triggered the event */
  readonly user_id?: number,
  /** Action performed by the user */
  readonly action?: ChatEventAction$Input,
}

/** Contains a list of chat events */
export type chatEvents = {
  _: 'chatEvents',
  /** List of events */
  events: Array<chatEvent>,
}

/** Contains a list of chat events */
export type chatEvents$Input = {
  readonly _: 'chatEvents',
  /** List of events */
  readonly events?: ReadonlyArray<chatEvent$Input>,
}

/** Represents a set of filters used to obtain a chat event log */
export type chatEventLogFilters = {
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
}

/** Represents a set of filters used to obtain a chat event log */
export type chatEventLogFilters$Input = {
  readonly _: 'chatEventLogFilters',
  /** True, if message edits should be returned */
  readonly message_edits?: boolean,
  /** True, if message deletions should be returned */
  readonly message_deletions?: boolean,
  /** True, if pin/unpin events should be returned */
  readonly message_pins?: boolean,
  /** True, if members joining events should be returned */
  readonly member_joins?: boolean,
  /** True, if members leaving events should be returned */
  readonly member_leaves?: boolean,
  /** True, if invited member events should be returned */
  readonly member_invites?: boolean,
  /** True, if member promotion/demotion events should be returned */
  readonly member_promotions?: boolean,
  /** True, if member restricted/unrestricted/banned/unbanned events should be returned */
  readonly member_restrictions?: boolean,
  /** True, if changes in chat information should be returned */
  readonly info_changes?: boolean,
  /** True, if changes in chat settings should be returned */
  readonly setting_changes?: boolean,
}

/** An ordinary language pack string */
export type languagePackStringValueOrdinary = {
  _: 'languagePackStringValueOrdinary',
  /** String value */
  value: string,
}

/** An ordinary language pack string */
export type languagePackStringValueOrdinary$Input = {
  readonly _: 'languagePackStringValueOrdinary',
  /** String value */
  readonly value?: string,
}

/**
 * A language pack string which has different forms based on the number of some object
 * it mentions. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
 * for more info
 */
export type languagePackStringValuePluralized = {
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
}

/**
 * A language pack string which has different forms based on the number of some object
 * it mentions. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
 * for more info
 */
export type languagePackStringValuePluralized$Input = {
  readonly _: 'languagePackStringValuePluralized',
  /** Value for zero objects */
  readonly zero_value?: string,
  /** Value for one object */
  readonly one_value?: string,
  /** Value for two objects */
  readonly two_value?: string,
  /** Value for few objects */
  readonly few_value?: string,
  /** Value for many objects */
  readonly many_value?: string,
  /** Default value */
  readonly other_value?: string,
}

/**
 * A deleted language pack string, the value should be taken from the built-in english
 * language pack
 */
export type languagePackStringValueDeleted = {
  _: 'languagePackStringValueDeleted',
}

/**
 * A deleted language pack string, the value should be taken from the built-in english
 * language pack
 */
export type languagePackStringValueDeleted$Input = {
  readonly _: 'languagePackStringValueDeleted',
}

/** Represents one language pack string */
export type languagePackString = {
  _: 'languagePackString',
  /** String key */
  key: string,
  /** String value */
  value: LanguagePackStringValue,
}

/** Represents one language pack string */
export type languagePackString$Input = {
  readonly _: 'languagePackString',
  /** String key */
  readonly key?: string,
  /** String value */
  readonly value?: LanguagePackStringValue$Input,
}

/** Contains a list of language pack strings */
export type languagePackStrings = {
  _: 'languagePackStrings',
  /** A list of language pack strings */
  strings: Array<languagePackString>,
}

/** Contains a list of language pack strings */
export type languagePackStrings$Input = {
  readonly _: 'languagePackStrings',
  /** A list of language pack strings */
  readonly strings?: ReadonlyArray<languagePackString$Input>,
}

/** Contains information about a language pack */
export type languagePackInfo = {
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
}

/** Contains information about a language pack */
export type languagePackInfo$Input = {
  readonly _: 'languagePackInfo',
  /** Unique language pack identifier */
  readonly id?: string,
  /**
   * Identifier of a base language pack; may be empty. If a string is missed in the language
   * pack, then it should be fetched from base language pack. Unsupported in custom language
   * packs
   */
  readonly base_language_pack_id?: string,
  /** Language name */
  readonly name?: string,
  /** Name of the language in that language */
  readonly native_name?: string,
  /**
   * A language code to be used to apply plural forms. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
   * for more info
   */
  readonly plural_code?: string,
  /** True, if the language pack is official */
  readonly is_official?: boolean,
  /** True, if the language pack strings are RTL */
  readonly is_rtl?: boolean,
  /** True, if the language pack is a beta language pack */
  readonly is_beta?: boolean,
  /** True, if the language pack is installed by the current user */
  readonly is_installed?: boolean,
  /** Total number of non-deleted strings from the language pack */
  readonly total_string_count?: number,
  /** Total number of translated strings from the language pack */
  readonly translated_string_count?: number,
  /** Total number of non-deleted strings from the language pack available locally */
  readonly local_string_count?: number,
  /** Link to language translation interface; empty for custom local language packs */
  readonly translation_url?: string,
}

/** Contains information about the current localization target */
export type localizationTargetInfo = {
  _: 'localizationTargetInfo',
  /** List of available language packs for this application */
  language_packs: Array<languagePackInfo>,
}

/** Contains information about the current localization target */
export type localizationTargetInfo$Input = {
  readonly _: 'localizationTargetInfo',
  /** List of available language packs for this application */
  readonly language_packs?: ReadonlyArray<languagePackInfo$Input>,
}

/** A token for Firebase Cloud Messaging */
export type deviceTokenFirebaseCloudMessaging = {
  _: 'deviceTokenFirebaseCloudMessaging',
  /** Device registration token; may be empty to de-register a device */
  token: string,
  /** True, if push notifications should be additionally encrypted */
  encrypt: boolean,
}

/** A token for Firebase Cloud Messaging */
export type deviceTokenFirebaseCloudMessaging$Input = {
  readonly _: 'deviceTokenFirebaseCloudMessaging',
  /** Device registration token; may be empty to de-register a device */
  readonly token?: string,
  /** True, if push notifications should be additionally encrypted */
  readonly encrypt?: boolean,
}

/** A token for Apple Push Notification service */
export type deviceTokenApplePush = {
  _: 'deviceTokenApplePush',
  /** Device token; may be empty to de-register a device */
  device_token: string,
  /** True, if App Sandbox is enabled */
  is_app_sandbox: boolean,
}

/** A token for Apple Push Notification service */
export type deviceTokenApplePush$Input = {
  readonly _: 'deviceTokenApplePush',
  /** Device token; may be empty to de-register a device */
  readonly device_token?: string,
  /** True, if App Sandbox is enabled */
  readonly is_app_sandbox?: boolean,
}

/** A token for Apple Push Notification service VoIP notifications */
export type deviceTokenApplePushVoIP = {
  _: 'deviceTokenApplePushVoIP',
  /** Device token; may be empty to de-register a device */
  device_token: string,
  /** True, if App Sandbox is enabled */
  is_app_sandbox: boolean,
  /** True, if push notifications should be additionally encrypted */
  encrypt: boolean,
}

/** A token for Apple Push Notification service VoIP notifications */
export type deviceTokenApplePushVoIP$Input = {
  readonly _: 'deviceTokenApplePushVoIP',
  /** Device token; may be empty to de-register a device */
  readonly device_token?: string,
  /** True, if App Sandbox is enabled */
  readonly is_app_sandbox?: boolean,
  /** True, if push notifications should be additionally encrypted */
  readonly encrypt?: boolean,
}

/** A token for Windows Push Notification Services */
export type deviceTokenWindowsPush = {
  _: 'deviceTokenWindowsPush',
  /**
   * The access token that will be used to send notifications; may be empty to de-register
   * a device
   */
  access_token: string,
}

/** A token for Windows Push Notification Services */
export type deviceTokenWindowsPush$Input = {
  readonly _: 'deviceTokenWindowsPush',
  /**
   * The access token that will be used to send notifications; may be empty to de-register
   * a device
   */
  readonly access_token?: string,
}

/** A token for Microsoft Push Notification Service */
export type deviceTokenMicrosoftPush = {
  _: 'deviceTokenMicrosoftPush',
  /** Push notification channel URI; may be empty to de-register a device */
  channel_uri: string,
}

/** A token for Microsoft Push Notification Service */
export type deviceTokenMicrosoftPush$Input = {
  readonly _: 'deviceTokenMicrosoftPush',
  /** Push notification channel URI; may be empty to de-register a device */
  readonly channel_uri?: string,
}

/** A token for Microsoft Push Notification Service VoIP channel */
export type deviceTokenMicrosoftPushVoIP = {
  _: 'deviceTokenMicrosoftPushVoIP',
  /** Push notification channel URI; may be empty to de-register a device */
  channel_uri: string,
}

/** A token for Microsoft Push Notification Service VoIP channel */
export type deviceTokenMicrosoftPushVoIP$Input = {
  readonly _: 'deviceTokenMicrosoftPushVoIP',
  /** Push notification channel URI; may be empty to de-register a device */
  readonly channel_uri?: string,
}

/** A token for web Push API */
export type deviceTokenWebPush = {
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
}

/** A token for web Push API */
export type deviceTokenWebPush$Input = {
  readonly _: 'deviceTokenWebPush',
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  readonly endpoint?: string,
  /** Base64url-encoded P-256 elliptic curve Diffie-Hellman public key */
  readonly p256dh_base64url?: string,
  /** Base64url-encoded authentication secret */
  readonly auth_base64url?: string,
}

/** A token for Simple Push API for Firefox OS */
export type deviceTokenSimplePush = {
  _: 'deviceTokenSimplePush',
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  endpoint: string,
}

/** A token for Simple Push API for Firefox OS */
export type deviceTokenSimplePush$Input = {
  readonly _: 'deviceTokenSimplePush',
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  readonly endpoint?: string,
}

/** A token for Ubuntu Push Client service */
export type deviceTokenUbuntuPush = {
  _: 'deviceTokenUbuntuPush',
  /** Token; may be empty to de-register a device */
  token: string,
}

/** A token for Ubuntu Push Client service */
export type deviceTokenUbuntuPush$Input = {
  readonly _: 'deviceTokenUbuntuPush',
  /** Token; may be empty to de-register a device */
  readonly token?: string,
}

/** A token for BlackBerry Push Service */
export type deviceTokenBlackBerryPush = {
  _: 'deviceTokenBlackBerryPush',
  /** Token; may be empty to de-register a device */
  token: string,
}

/** A token for BlackBerry Push Service */
export type deviceTokenBlackBerryPush$Input = {
  readonly _: 'deviceTokenBlackBerryPush',
  /** Token; may be empty to de-register a device */
  readonly token?: string,
}

/** A token for Tizen Push Service */
export type deviceTokenTizenPush = {
  _: 'deviceTokenTizenPush',
  /** Push service registration identifier; may be empty to de-register a device */
  reg_id: string,
}

/** A token for Tizen Push Service */
export type deviceTokenTizenPush$Input = {
  readonly _: 'deviceTokenTizenPush',
  /** Push service registration identifier; may be empty to de-register a device */
  readonly reg_id?: string,
}

/**
 * Contains a globally unique push receiver identifier, which can be used to identify
 * which account has received a push notification
 */
export type pushReceiverId = {
  _: 'pushReceiverId',
  /** The globally unique identifier of push notification subscription */
  id: number | string,
}

/**
 * Contains a globally unique push receiver identifier, which can be used to identify
 * which account has received a push notification
 */
export type pushReceiverId$Input = {
  readonly _: 'pushReceiverId',
  /** The globally unique identifier of push notification subscription */
  readonly id?: number | string,
}

/** Contains information about a wallpaper */
export type wallpaper = {
  _: 'wallpaper',
  /** Unique persistent wallpaper identifier */
  id: number,
  /**
   * Available variants of the wallpaper in different sizes. These photos can only be
   * downloaded; they can't be sent in a message
   */
  sizes: Array<photoSize>,
  /**
   * Main color of the wallpaper in RGB24 format; should be treated as background color
   * if no photos are specified
   */
  color: number,
}

/** Contains information about a wallpaper */
export type wallpaper$Input = {
  readonly _: 'wallpaper',
  /** Unique persistent wallpaper identifier */
  readonly id?: number,
  /**
   * Available variants of the wallpaper in different sizes. These photos can only be
   * downloaded; they can't be sent in a message
   */
  readonly sizes?: ReadonlyArray<photoSize$Input>,
  /**
   * Main color of the wallpaper in RGB24 format; should be treated as background color
   * if no photos are specified
   */
  readonly color?: number,
}

/** Contains a list of wallpapers */
export type wallpapers = {
  _: 'wallpapers',
  /** A list of wallpapers */
  wallpapers: Array<wallpaper>,
}

/** Contains a list of wallpapers */
export type wallpapers$Input = {
  readonly _: 'wallpapers',
  /** A list of wallpapers */
  readonly wallpapers?: ReadonlyArray<wallpaper$Input>,
}

/** Contains a list of hashtags */
export type hashtags = {
  _: 'hashtags',
  /** A list of hashtags */
  hashtags: Array<string>,
}

/** Contains a list of hashtags */
export type hashtags$Input = {
  readonly _: 'hashtags',
  /** A list of hashtags */
  readonly hashtags?: ReadonlyArray<string>,
}

/** The username can be set */
export type checkChatUsernameResultOk = {
  _: 'checkChatUsernameResultOk',
}

/** The username can be set */
export type checkChatUsernameResultOk$Input = {
  readonly _: 'checkChatUsernameResultOk',
}

/** The username is invalid */
export type checkChatUsernameResultUsernameInvalid = {
  _: 'checkChatUsernameResultUsernameInvalid',
}

/** The username is invalid */
export type checkChatUsernameResultUsernameInvalid$Input = {
  readonly _: 'checkChatUsernameResultUsernameInvalid',
}

/** The username is occupied */
export type checkChatUsernameResultUsernameOccupied = {
  _: 'checkChatUsernameResultUsernameOccupied',
}

/** The username is occupied */
export type checkChatUsernameResultUsernameOccupied$Input = {
  readonly _: 'checkChatUsernameResultUsernameOccupied',
}

/** The user has too much public chats, one of them should be made private first */
export type checkChatUsernameResultPublicChatsTooMuch = {
  _: 'checkChatUsernameResultPublicChatsTooMuch',
}

/** The user has too much public chats, one of them should be made private first */
export type checkChatUsernameResultPublicChatsTooMuch$Input = {
  readonly _: 'checkChatUsernameResultPublicChatsTooMuch',
}

/** The user can't be a member of a public supergroup */
export type checkChatUsernameResultPublicGroupsUnavailable = {
  _: 'checkChatUsernameResultPublicGroupsUnavailable',
}

/** The user can't be a member of a public supergroup */
export type checkChatUsernameResultPublicGroupsUnavailable$Input = {
  readonly _: 'checkChatUsernameResultPublicGroupsUnavailable',
}

/** A general message with hidden content */
export type pushMessageContentHidden = {
  _: 'pushMessageContentHidden',
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A general message with hidden content */
export type pushMessageContentHidden$Input = {
  readonly _: 'pushMessageContentHidden',
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** An animation message (GIF-style) */
export type pushMessageContentAnimation = {
  _: 'pushMessageContentAnimation',
  /** Message content; may be null */
  animation: animation,
  /** Animation caption */
  caption: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** An animation message (GIF-style) */
export type pushMessageContentAnimation$Input = {
  readonly _: 'pushMessageContentAnimation',
  /** Message content; may be null */
  readonly animation?: animation$Input,
  /** Animation caption */
  readonly caption?: string,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** An audio message */
export type pushMessageContentAudio = {
  _: 'pushMessageContentAudio',
  /** Message content; may be null */
  audio: audio,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** An audio message */
export type pushMessageContentAudio$Input = {
  readonly _: 'pushMessageContentAudio',
  /** Message content; may be null */
  readonly audio?: audio$Input,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A message with a user contact */
export type pushMessageContentContact = {
  _: 'pushMessageContentContact',
  /** Contact's name */
  name: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A message with a user contact */
export type pushMessageContentContact$Input = {
  readonly _: 'pushMessageContentContact',
  /** Contact's name */
  readonly name?: string,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A contact has registered with Telegram */
export type pushMessageContentContactRegistered = {
  _: 'pushMessageContentContactRegistered',
}

/** A contact has registered with Telegram */
export type pushMessageContentContactRegistered$Input = {
  readonly _: 'pushMessageContentContactRegistered',
}

/** A document message (a general file) */
export type pushMessageContentDocument = {
  _: 'pushMessageContentDocument',
  /** Message content; may be null */
  document: document,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A document message (a general file) */
export type pushMessageContentDocument$Input = {
  readonly _: 'pushMessageContentDocument',
  /** Message content; may be null */
  readonly document?: document$Input,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A message with a game */
export type pushMessageContentGame = {
  _: 'pushMessageContentGame',
  /** Game title, empty for pinned game message */
  title: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A message with a game */
export type pushMessageContentGame$Input = {
  readonly _: 'pushMessageContentGame',
  /** Game title, empty for pinned game message */
  readonly title?: string,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A new high score was achieved in a game */
export type pushMessageContentGameScore = {
  _: 'pushMessageContentGameScore',
  /** Game title, empty for pinned message */
  title: string,
  /** New score, 0 for pinned message */
  score: number,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A new high score was achieved in a game */
export type pushMessageContentGameScore$Input = {
  readonly _: 'pushMessageContentGameScore',
  /** Game title, empty for pinned message */
  readonly title?: string,
  /** New score, 0 for pinned message */
  readonly score?: number,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A message with an invoice from a bot */
export type pushMessageContentInvoice = {
  _: 'pushMessageContentInvoice',
  /** Product price */
  price: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A message with an invoice from a bot */
export type pushMessageContentInvoice$Input = {
  readonly _: 'pushMessageContentInvoice',
  /** Product price */
  readonly price?: string,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A message with a location */
export type pushMessageContentLocation = {
  _: 'pushMessageContentLocation',
  /** True, if the location is live */
  is_live: boolean,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A message with a location */
export type pushMessageContentLocation$Input = {
  readonly _: 'pushMessageContentLocation',
  /** True, if the location is live */
  readonly is_live?: boolean,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A photo message */
export type pushMessageContentPhoto = {
  _: 'pushMessageContentPhoto',
  /** Message content; may be null */
  photo: photo,
  /** Photo caption */
  caption: string,
  /** True, if the photo is secret */
  is_secret: boolean,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A photo message */
export type pushMessageContentPhoto$Input = {
  readonly _: 'pushMessageContentPhoto',
  /** Message content; may be null */
  readonly photo?: photo$Input,
  /** Photo caption */
  readonly caption?: string,
  /** True, if the photo is secret */
  readonly is_secret?: boolean,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A message with a poll */
export type pushMessageContentPoll = {
  _: 'pushMessageContentPoll',
  /** Poll question */
  question: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A message with a poll */
export type pushMessageContentPoll$Input = {
  readonly _: 'pushMessageContentPoll',
  /** Poll question */
  readonly question?: string,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A screenshot of a message in the chat has been taken */
export type pushMessageContentScreenshotTaken = {
  _: 'pushMessageContentScreenshotTaken',
}

/** A screenshot of a message in the chat has been taken */
export type pushMessageContentScreenshotTaken$Input = {
  readonly _: 'pushMessageContentScreenshotTaken',
}

/** A message with a sticker */
export type pushMessageContentSticker = {
  _: 'pushMessageContentSticker',
  /** Message content; may be null */
  sticker: sticker,
  /** Emoji corresponding to the sticker; may be empty */
  emoji: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A message with a sticker */
export type pushMessageContentSticker$Input = {
  readonly _: 'pushMessageContentSticker',
  /** Message content; may be null */
  readonly sticker?: sticker$Input,
  /** Emoji corresponding to the sticker; may be empty */
  readonly emoji?: string,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A text message */
export type pushMessageContentText = {
  _: 'pushMessageContentText',
  /** Message text */
  text: string,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A text message */
export type pushMessageContentText$Input = {
  readonly _: 'pushMessageContentText',
  /** Message text */
  readonly text?: string,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A video message */
export type pushMessageContentVideo = {
  _: 'pushMessageContentVideo',
  /** Message content; may be null */
  video: video,
  /** Video caption */
  caption: string,
  /** True, if the video is secret */
  is_secret: boolean,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A video message */
export type pushMessageContentVideo$Input = {
  readonly _: 'pushMessageContentVideo',
  /** Message content; may be null */
  readonly video?: video$Input,
  /** Video caption */
  readonly caption?: string,
  /** True, if the video is secret */
  readonly is_secret?: boolean,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A video note message */
export type pushMessageContentVideoNote = {
  _: 'pushMessageContentVideoNote',
  /** Message content; may be null */
  video_note: videoNote,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A video note message */
export type pushMessageContentVideoNote$Input = {
  readonly _: 'pushMessageContentVideoNote',
  /** Message content; may be null */
  readonly video_note?: videoNote$Input,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A voice note message */
export type pushMessageContentVoiceNote = {
  _: 'pushMessageContentVoiceNote',
  /** Message content; may be null */
  voice_note: voiceNote,
  /** True, if the message is a pinned message with the specified content */
  is_pinned: boolean,
}

/** A voice note message */
export type pushMessageContentVoiceNote$Input = {
  readonly _: 'pushMessageContentVoiceNote',
  /** Message content; may be null */
  readonly voice_note?: voiceNote$Input,
  /** True, if the message is a pinned message with the specified content */
  readonly is_pinned?: boolean,
}

/** A newly created basic group */
export type pushMessageContentBasicGroupChatCreate = {
  _: 'pushMessageContentBasicGroupChatCreate',
}

/** A newly created basic group */
export type pushMessageContentBasicGroupChatCreate$Input = {
  readonly _: 'pushMessageContentBasicGroupChatCreate',
}

/** New chat members were invited to a group */
export type pushMessageContentChatAddMembers = {
  _: 'pushMessageContentChatAddMembers',
  /** Name of the added member */
  member_name: string,
  /** True, if the current user was added to the group */
  is_current_user: boolean,
  /** True, if the user has returned to the group himself */
  is_returned: boolean,
}

/** New chat members were invited to a group */
export type pushMessageContentChatAddMembers$Input = {
  readonly _: 'pushMessageContentChatAddMembers',
  /** Name of the added member */
  readonly member_name?: string,
  /** True, if the current user was added to the group */
  readonly is_current_user?: boolean,
  /** True, if the user has returned to the group himself */
  readonly is_returned?: boolean,
}

/** A chat photo was edited */
export type pushMessageContentChatChangePhoto = {
  _: 'pushMessageContentChatChangePhoto',
}

/** A chat photo was edited */
export type pushMessageContentChatChangePhoto$Input = {
  readonly _: 'pushMessageContentChatChangePhoto',
}

/** A chat title was edited */
export type pushMessageContentChatChangeTitle = {
  _: 'pushMessageContentChatChangeTitle',
  /** New chat title */
  title: string,
}

/** A chat title was edited */
export type pushMessageContentChatChangeTitle$Input = {
  readonly _: 'pushMessageContentChatChangeTitle',
  /** New chat title */
  readonly title?: string,
}

/** A chat member was deleted */
export type pushMessageContentChatDeleteMember = {
  _: 'pushMessageContentChatDeleteMember',
  /** Name of the deleted member */
  member_name: string,
  /** True, if the current user was deleted from the group */
  is_current_user: boolean,
  /** True, if the user has left the group himself */
  is_left: boolean,
}

/** A chat member was deleted */
export type pushMessageContentChatDeleteMember$Input = {
  readonly _: 'pushMessageContentChatDeleteMember',
  /** Name of the deleted member */
  readonly member_name?: string,
  /** True, if the current user was deleted from the group */
  readonly is_current_user?: boolean,
  /** True, if the user has left the group himself */
  readonly is_left?: boolean,
}

/** A new member joined the chat by invite link */
export type pushMessageContentChatJoinByLink = {
  _: 'pushMessageContentChatJoinByLink',
}

/** A new member joined the chat by invite link */
export type pushMessageContentChatJoinByLink$Input = {
  readonly _: 'pushMessageContentChatJoinByLink',
}

/** A forwarded messages */
export type pushMessageContentMessageForwards = {
  _: 'pushMessageContentMessageForwards',
  /** Number of forwarded messages */
  total_count: number,
}

/** A forwarded messages */
export type pushMessageContentMessageForwards$Input = {
  readonly _: 'pushMessageContentMessageForwards',
  /** Number of forwarded messages */
  readonly total_count?: number,
}

/** A media album */
export type pushMessageContentMediaAlbum = {
  _: 'pushMessageContentMediaAlbum',
  /** Number of messages in the album */
  total_count: number,
  /** True, if the album has at least one photo */
  has_photos: boolean,
  /** True, if the album has at least one video */
  has_videos: boolean,
}

/** A media album */
export type pushMessageContentMediaAlbum$Input = {
  readonly _: 'pushMessageContentMediaAlbum',
  /** Number of messages in the album */
  readonly total_count?: number,
  /** True, if the album has at least one photo */
  readonly has_photos?: boolean,
  /** True, if the album has at least one video */
  readonly has_videos?: boolean,
}

/** New message was received */
export type notificationTypeNewMessage = {
  _: 'notificationTypeNewMessage',
  /** The message */
  message: message,
}

/** New message was received */
export type notificationTypeNewMessage$Input = {
  readonly _: 'notificationTypeNewMessage',
  /** The message */
  readonly message?: message$Input,
}

/** New secret chat was created */
export type notificationTypeNewSecretChat = {
  _: 'notificationTypeNewSecretChat',
}

/** New secret chat was created */
export type notificationTypeNewSecretChat$Input = {
  readonly _: 'notificationTypeNewSecretChat',
}

/** New call was received */
export type notificationTypeNewCall = {
  _: 'notificationTypeNewCall',
  /** Call identifier */
  call_id: number,
}

/** New call was received */
export type notificationTypeNewCall$Input = {
  readonly _: 'notificationTypeNewCall',
  /** Call identifier */
  readonly call_id?: number,
}

/** New message was received through a push notification */
export type notificationTypeNewPushMessage = {
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
}

/** New message was received through a push notification */
export type notificationTypeNewPushMessage$Input = {
  readonly _: 'notificationTypeNewPushMessage',
  /**
   * The message identifier. The message will not be available in the chat history, but
   * the ID can be used in viewMessages and as reply_to_message_id
   */
  readonly message_id?: number,
  /** Sender of the message. Corresponding user may be inaccessible */
  readonly sender_user_id?: number,
  /** Push message content */
  readonly content?: PushMessageContent$Input,
}

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage
 * with ordinary unread messages
 */
export type notificationGroupTypeMessages = {
  _: 'notificationGroupTypeMessages',
}

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage
 * with ordinary unread messages
 */
export type notificationGroupTypeMessages$Input = {
  readonly _: 'notificationGroupTypeMessages',
}

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage
 * with unread mentions of the current user, replies to their messages, or a pinned
 * message
 */
export type notificationGroupTypeMentions = {
  _: 'notificationGroupTypeMentions',
}

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage
 * with unread mentions of the current user, replies to their messages, or a pinned
 * message
 */
export type notificationGroupTypeMentions$Input = {
  readonly _: 'notificationGroupTypeMentions',
}

/** A group containing a notification of type notificationTypeNewSecretChat */
export type notificationGroupTypeSecretChat = {
  _: 'notificationGroupTypeSecretChat',
}

/** A group containing a notification of type notificationTypeNewSecretChat */
export type notificationGroupTypeSecretChat$Input = {
  readonly _: 'notificationGroupTypeSecretChat',
}

/** A group containing notifications of type notificationTypeNewCall */
export type notificationGroupTypeCalls = {
  _: 'notificationGroupTypeCalls',
}

/** A group containing notifications of type notificationTypeNewCall */
export type notificationGroupTypeCalls$Input = {
  readonly _: 'notificationGroupTypeCalls',
}

/** Contains information about a notification */
export type notification = {
  _: 'notification',
  /** Unique persistent identifier of this notification */
  id: number,
  /** Notification date */
  date: number,
  /** Notification type */
  type: NotificationType,
}

/** Contains information about a notification */
export type notification$Input = {
  readonly _: 'notification',
  /** Unique persistent identifier of this notification */
  readonly id?: number,
  /** Notification date */
  readonly date?: number,
  /** Notification type */
  readonly type?: NotificationType$Input,
}

/** Describes a group of notifications */
export type notificationGroup = {
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
}

/** Describes a group of notifications */
export type notificationGroup$Input = {
  readonly _: 'notificationGroup',
  /** Unique persistent auto-incremented from 1 identifier of the notification group */
  readonly id?: number,
  /** Type of the group */
  readonly type?: NotificationGroupType$Input,
  /** Identifier of a chat to which all notifications in the group belong */
  readonly chat_id?: number,
  /** Total number of active notifications in the group */
  readonly total_count?: number,
  /** The list of active notifications */
  readonly notifications?: ReadonlyArray<notification$Input>,
}

/** Represents a boolean option */
export type optionValueBoolean = {
  _: 'optionValueBoolean',
  /** The value of the option */
  value: boolean,
}

/** Represents a boolean option */
export type optionValueBoolean$Input = {
  readonly _: 'optionValueBoolean',
  /** The value of the option */
  readonly value?: boolean,
}

/** Represents an unknown option or an option which has a default value */
export type optionValueEmpty = {
  _: 'optionValueEmpty',
}

/** Represents an unknown option or an option which has a default value */
export type optionValueEmpty$Input = {
  readonly _: 'optionValueEmpty',
}

/** Represents an integer option */
export type optionValueInteger = {
  _: 'optionValueInteger',
  /** The value of the option */
  value: number,
}

/** Represents an integer option */
export type optionValueInteger$Input = {
  readonly _: 'optionValueInteger',
  /** The value of the option */
  readonly value?: number,
}

/** Represents a string option */
export type optionValueString = {
  _: 'optionValueString',
  /** The value of the option */
  value: string,
}

/** Represents a string option */
export type optionValueString$Input = {
  readonly _: 'optionValueString',
  /** The value of the option */
  readonly value?: string,
}

/** Represents one member of a JSON object */
export type jsonObjectMember = {
  _: 'jsonObjectMember',
  /** Member's key */
  key: string,
  /** Member's value */
  value: JsonValue,
}

/** Represents one member of a JSON object */
export type jsonObjectMember$Input = {
  readonly _: 'jsonObjectMember',
  /** Member's key */
  readonly key?: string,
  /** Member's value */
  readonly value?: JsonValue$Input,
}

/** Represents a null JSON value */
export type jsonValueNull = {
  _: 'jsonValueNull',
}

/** Represents a null JSON value */
export type jsonValueNull$Input = {
  readonly _: 'jsonValueNull',
}

/** Represents a boolean JSON value */
export type jsonValueBoolean = {
  _: 'jsonValueBoolean',
  /** The value */
  value: boolean,
}

/** Represents a boolean JSON value */
export type jsonValueBoolean$Input = {
  readonly _: 'jsonValueBoolean',
  /** The value */
  readonly value?: boolean,
}

/** Represents a numeric JSON value */
export type jsonValueNumber = {
  _: 'jsonValueNumber',
  /** The value */
  value: number,
}

/** Represents a numeric JSON value */
export type jsonValueNumber$Input = {
  readonly _: 'jsonValueNumber',
  /** The value */
  readonly value?: number,
}

/** Represents a string JSON value */
export type jsonValueString = {
  _: 'jsonValueString',
  /** The value */
  value: string,
}

/** Represents a string JSON value */
export type jsonValueString$Input = {
  readonly _: 'jsonValueString',
  /** The value */
  readonly value?: string,
}

/** Represents a JSON array */
export type jsonValueArray = {
  _: 'jsonValueArray',
  /** The list of array elements */
  values: Array<JsonValue>,
}

/** Represents a JSON array */
export type jsonValueArray$Input = {
  readonly _: 'jsonValueArray',
  /** The list of array elements */
  readonly values?: ReadonlyArray<JsonValue$Input>,
}

/** Represents a JSON object */
export type jsonValueObject = {
  _: 'jsonValueObject',
  /** The list of object members */
  members: Array<jsonObjectMember>,
}

/** Represents a JSON object */
export type jsonValueObject$Input = {
  readonly _: 'jsonValueObject',
  /** The list of object members */
  readonly members?: ReadonlyArray<jsonObjectMember$Input>,
}

/** A rule to allow all users to do something */
export type userPrivacySettingRuleAllowAll = {
  _: 'userPrivacySettingRuleAllowAll',
}

/** A rule to allow all users to do something */
export type userPrivacySettingRuleAllowAll$Input = {
  readonly _: 'userPrivacySettingRuleAllowAll',
}

/** A rule to allow all of a user's contacts to do something */
export type userPrivacySettingRuleAllowContacts = {
  _: 'userPrivacySettingRuleAllowContacts',
}

/** A rule to allow all of a user's contacts to do something */
export type userPrivacySettingRuleAllowContacts$Input = {
  readonly _: 'userPrivacySettingRuleAllowContacts',
}

/** A rule to allow certain specified users to do something */
export type userPrivacySettingRuleAllowUsers = {
  _: 'userPrivacySettingRuleAllowUsers',
  /** The user identifiers */
  user_ids: Array<number>,
}

/** A rule to allow certain specified users to do something */
export type userPrivacySettingRuleAllowUsers$Input = {
  readonly _: 'userPrivacySettingRuleAllowUsers',
  /** The user identifiers */
  readonly user_ids?: ReadonlyArray<number>,
}

/** A rule to restrict all users from doing something */
export type userPrivacySettingRuleRestrictAll = {
  _: 'userPrivacySettingRuleRestrictAll',
}

/** A rule to restrict all users from doing something */
export type userPrivacySettingRuleRestrictAll$Input = {
  readonly _: 'userPrivacySettingRuleRestrictAll',
}

/** A rule to restrict all contacts of a user from doing something */
export type userPrivacySettingRuleRestrictContacts = {
  _: 'userPrivacySettingRuleRestrictContacts',
}

/** A rule to restrict all contacts of a user from doing something */
export type userPrivacySettingRuleRestrictContacts$Input = {
  readonly _: 'userPrivacySettingRuleRestrictContacts',
}

/** A rule to restrict all specified users from doing something */
export type userPrivacySettingRuleRestrictUsers = {
  _: 'userPrivacySettingRuleRestrictUsers',
  /** The user identifiers */
  user_ids: Array<number>,
}

/** A rule to restrict all specified users from doing something */
export type userPrivacySettingRuleRestrictUsers$Input = {
  readonly _: 'userPrivacySettingRuleRestrictUsers',
  /** The user identifiers */
  readonly user_ids?: ReadonlyArray<number>,
}

/**
 * A list of privacy rules. Rules are matched in the specified order. The first matched
 * rule defines the privacy setting for a given user. If no rule matches, the action
 * is not allowed
 */
export type userPrivacySettingRules = {
  _: 'userPrivacySettingRules',
  /** A list of rules */
  rules: Array<UserPrivacySettingRule>,
}

/**
 * A list of privacy rules. Rules are matched in the specified order. The first matched
 * rule defines the privacy setting for a given user. If no rule matches, the action
 * is not allowed
 */
export type userPrivacySettingRules$Input = {
  readonly _: 'userPrivacySettingRules',
  /** A list of rules */
  readonly rules?: ReadonlyArray<UserPrivacySettingRule$Input>,
}

/** A privacy setting for managing whether the user's online status is visible */
export type userPrivacySettingShowStatus = {
  _: 'userPrivacySettingShowStatus',
}

/** A privacy setting for managing whether the user's online status is visible */
export type userPrivacySettingShowStatus$Input = {
  readonly _: 'userPrivacySettingShowStatus',
}

/** A privacy setting for managing whether the user can be invited to chats */
export type userPrivacySettingAllowChatInvites = {
  _: 'userPrivacySettingAllowChatInvites',
}

/** A privacy setting for managing whether the user can be invited to chats */
export type userPrivacySettingAllowChatInvites$Input = {
  readonly _: 'userPrivacySettingAllowChatInvites',
}

/** A privacy setting for managing whether the user can be called */
export type userPrivacySettingAllowCalls = {
  _: 'userPrivacySettingAllowCalls',
}

/** A privacy setting for managing whether the user can be called */
export type userPrivacySettingAllowCalls$Input = {
  readonly _: 'userPrivacySettingAllowCalls',
}

/** A privacy setting for managing whether peer-to-peer connections can be used for calls */
export type userPrivacySettingAllowPeerToPeerCalls = {
  _: 'userPrivacySettingAllowPeerToPeerCalls',
}

/** A privacy setting for managing whether peer-to-peer connections can be used for calls */
export type userPrivacySettingAllowPeerToPeerCalls$Input = {
  readonly _: 'userPrivacySettingAllowPeerToPeerCalls',
}

/**
 * Contains information about the period of inactivity after which the current user's
 * account will automatically be deleted
 */
export type accountTtl = {
  _: 'accountTtl',
  /**
   * Number of days of inactivity before the account will be flagged for deletion; should
   * range from 30-366 days
   */
  days: number,
}

/**
 * Contains information about the period of inactivity after which the current user's
 * account will automatically be deleted
 */
export type accountTtl$Input = {
  readonly _: 'accountTtl',
  /**
   * Number of days of inactivity before the account will be flagged for deletion; should
   * range from 30-366 days
   */
  readonly days?: number,
}

/**
 * Contains information about one session in a Telegram application used by the current
 * user. Sessions should be shown to the user in the returned order
 */
export type session = {
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
}

/**
 * Contains information about one session in a Telegram application used by the current
 * user. Sessions should be shown to the user in the returned order
 */
export type session$Input = {
  readonly _: 'session',
  /** Session identifier */
  readonly id?: number | string,
  /** True, if this session is the current session */
  readonly is_current?: boolean,
  /** True, if a password is needed to complete authorization of the session */
  readonly is_password_pending?: boolean,
  /** Telegram API identifier, as provided by the application */
  readonly api_id?: number,
  /** Name of the application, as provided by the application */
  readonly application_name?: string,
  /** The version of the application, as provided by the application */
  readonly application_version?: string,
  /**
   * True, if the application is an official application or uses the api_id of an official
   * application
   */
  readonly is_official_application?: boolean,
  /**
   * Model of the device the application has been run or is running on, as provided by
   * the application
   */
  readonly device_model?: string,
  /**
   * Operating system the application has been run or is running on, as provided by the
   * application
   */
  readonly platform?: string,
  /**
   * Version of the operating system the application has been run or is running on, as
   * provided by the application
   */
  readonly system_version?: string,
  /** Point in time (Unix timestamp) when the user has logged in */
  readonly log_in_date?: number,
  /** Point in time (Unix timestamp) when the session was last used */
  readonly last_active_date?: number,
  /** IP address from which the session was created, in human-readable format */
  readonly ip?: string,
  /**
   * A two-letter country code for the country from which the session was created, based
   * on the IP address
   */
  readonly country?: string,
  /** Region code from which the session was created, based on the IP address */
  readonly region?: string,
}

/** Contains a list of sessions */
export type sessions = {
  _: 'sessions',
  /** List of sessions */
  sessions: Array<session>,
}

/** Contains a list of sessions */
export type sessions$Input = {
  readonly _: 'sessions',
  /** List of sessions */
  readonly sessions?: ReadonlyArray<session$Input>,
}

/** Contains information about one website the current user is logged in with Telegram */
export type connectedWebsite = {
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
}

/** Contains information about one website the current user is logged in with Telegram */
export type connectedWebsite$Input = {
  readonly _: 'connectedWebsite',
  /** Website identifier */
  readonly id?: number | string,
  /** The domain name of the website */
  readonly domain_name?: string,
  /** User identifier of a bot linked with the website */
  readonly bot_user_id?: number,
  /** The version of a browser used to log in */
  readonly browser?: string,
  /** Operating system the browser is running on */
  readonly platform?: string,
  /** Point in time (Unix timestamp) when the user was logged in */
  readonly log_in_date?: number,
  /** Point in time (Unix timestamp) when obtained authorization was last used */
  readonly last_active_date?: number,
  /** IP address from which the user was logged in, in human-readable format */
  readonly ip?: string,
  /**
   * Human-readable description of a country and a region, from which the user was logged
   * in, based on the IP address
   */
  readonly location?: string,
}

/** Contains a list of websites the current user is logged in with Telegram */
export type connectedWebsites = {
  _: 'connectedWebsites',
  /** List of connected websites */
  websites: Array<connectedWebsite>,
}

/** Contains a list of websites the current user is logged in with Telegram */
export type connectedWebsites$Input = {
  readonly _: 'connectedWebsites',
  /** List of connected websites */
  readonly websites?: ReadonlyArray<connectedWebsite$Input>,
}

/** Contains information about the availability of the "Report spam" action for a chat */
export type chatReportSpamState = {
  _: 'chatReportSpamState',
  /** True, if a prompt with the "Report spam" action should be shown to the user */
  can_report_spam: boolean,
}

/** Contains information about the availability of the "Report spam" action for a chat */
export type chatReportSpamState$Input = {
  readonly _: 'chatReportSpamState',
  /** True, if a prompt with the "Report spam" action should be shown to the user */
  readonly can_report_spam?: boolean,
}

/** The chat contains spam messages */
export type chatReportReasonSpam = {
  _: 'chatReportReasonSpam',
}

/** The chat contains spam messages */
export type chatReportReasonSpam$Input = {
  readonly _: 'chatReportReasonSpam',
}

/** The chat promotes violence */
export type chatReportReasonViolence = {
  _: 'chatReportReasonViolence',
}

/** The chat promotes violence */
export type chatReportReasonViolence$Input = {
  readonly _: 'chatReportReasonViolence',
}

/** The chat contains pornographic messages */
export type chatReportReasonPornography = {
  _: 'chatReportReasonPornography',
}

/** The chat contains pornographic messages */
export type chatReportReasonPornography$Input = {
  readonly _: 'chatReportReasonPornography',
}

/** The chat has child abuse related content */
export type chatReportReasonChildAbuse = {
  _: 'chatReportReasonChildAbuse',
}

/** The chat has child abuse related content */
export type chatReportReasonChildAbuse$Input = {
  readonly _: 'chatReportReasonChildAbuse',
}

/** The chat contains copyrighted content */
export type chatReportReasonCopyright = {
  _: 'chatReportReasonCopyright',
}

/** The chat contains copyrighted content */
export type chatReportReasonCopyright$Input = {
  readonly _: 'chatReportReasonCopyright',
}

/** A custom reason provided by the user */
export type chatReportReasonCustom = {
  _: 'chatReportReasonCustom',
  /** Report text */
  text: string,
}

/** A custom reason provided by the user */
export type chatReportReasonCustom$Input = {
  readonly _: 'chatReportReasonCustom',
  /** Report text */
  readonly text?: string,
}

/** Contains a public HTTPS link to a message in a public supergroup or channel */
export type publicMessageLink = {
  _: 'publicMessageLink',
  /** Message link */
  link: string,
  /** HTML-code for embedding the message */
  html: string,
}

/** Contains a public HTTPS link to a message in a public supergroup or channel */
export type publicMessageLink$Input = {
  readonly _: 'publicMessageLink',
  /** Message link */
  readonly link?: string,
  /** HTML-code for embedding the message */
  readonly html?: string,
}

/** Contains a part of a file */
export type filePart = {
  _: 'filePart',
  /** File bytes */
  data: string,
}

/** Contains a part of a file */
export type filePart$Input = {
  readonly _: 'filePart',
  /** File bytes */
  readonly data?: string,
}

/** The data is not a file */
export type fileTypeNone = {
  _: 'fileTypeNone',
}

/** The data is not a file */
export type fileTypeNone$Input = {
  readonly _: 'fileTypeNone',
}

/** The file is an animation */
export type fileTypeAnimation = {
  _: 'fileTypeAnimation',
}

/** The file is an animation */
export type fileTypeAnimation$Input = {
  readonly _: 'fileTypeAnimation',
}

/** The file is an audio file */
export type fileTypeAudio = {
  _: 'fileTypeAudio',
}

/** The file is an audio file */
export type fileTypeAudio$Input = {
  readonly _: 'fileTypeAudio',
}

/** The file is a document */
export type fileTypeDocument = {
  _: 'fileTypeDocument',
}

/** The file is a document */
export type fileTypeDocument$Input = {
  readonly _: 'fileTypeDocument',
}

/** The file is a photo */
export type fileTypePhoto = {
  _: 'fileTypePhoto',
}

/** The file is a photo */
export type fileTypePhoto$Input = {
  readonly _: 'fileTypePhoto',
}

/** The file is a profile photo */
export type fileTypeProfilePhoto = {
  _: 'fileTypeProfilePhoto',
}

/** The file is a profile photo */
export type fileTypeProfilePhoto$Input = {
  readonly _: 'fileTypeProfilePhoto',
}

/** The file was sent to a secret chat (the file type is not known to the server) */
export type fileTypeSecret = {
  _: 'fileTypeSecret',
}

/** The file was sent to a secret chat (the file type is not known to the server) */
export type fileTypeSecret$Input = {
  readonly _: 'fileTypeSecret',
}

/** The file is a thumbnail of a file from a secret chat */
export type fileTypeSecretThumbnail = {
  _: 'fileTypeSecretThumbnail',
}

/** The file is a thumbnail of a file from a secret chat */
export type fileTypeSecretThumbnail$Input = {
  readonly _: 'fileTypeSecretThumbnail',
}

/** The file is a file from Secure storage used for storing Telegram Passport files */
export type fileTypeSecure = {
  _: 'fileTypeSecure',
}

/** The file is a file from Secure storage used for storing Telegram Passport files */
export type fileTypeSecure$Input = {
  readonly _: 'fileTypeSecure',
}

/** The file is a sticker */
export type fileTypeSticker = {
  _: 'fileTypeSticker',
}

/** The file is a sticker */
export type fileTypeSticker$Input = {
  readonly _: 'fileTypeSticker',
}

/** The file is a thumbnail of another file */
export type fileTypeThumbnail = {
  _: 'fileTypeThumbnail',
}

/** The file is a thumbnail of another file */
export type fileTypeThumbnail$Input = {
  readonly _: 'fileTypeThumbnail',
}

/** The file type is not yet known */
export type fileTypeUnknown = {
  _: 'fileTypeUnknown',
}

/** The file type is not yet known */
export type fileTypeUnknown$Input = {
  readonly _: 'fileTypeUnknown',
}

/** The file is a video */
export type fileTypeVideo = {
  _: 'fileTypeVideo',
}

/** The file is a video */
export type fileTypeVideo$Input = {
  readonly _: 'fileTypeVideo',
}

/** The file is a video note */
export type fileTypeVideoNote = {
  _: 'fileTypeVideoNote',
}

/** The file is a video note */
export type fileTypeVideoNote$Input = {
  readonly _: 'fileTypeVideoNote',
}

/** The file is a voice note */
export type fileTypeVoiceNote = {
  _: 'fileTypeVoiceNote',
}

/** The file is a voice note */
export type fileTypeVoiceNote$Input = {
  readonly _: 'fileTypeVoiceNote',
}

/** The file is a wallpaper */
export type fileTypeWallpaper = {
  _: 'fileTypeWallpaper',
}

/** The file is a wallpaper */
export type fileTypeWallpaper$Input = {
  readonly _: 'fileTypeWallpaper',
}

/** Contains the storage usage statistics for a specific file type */
export type storageStatisticsByFileType = {
  _: 'storageStatisticsByFileType',
  /** File type */
  file_type: FileType,
  /** Total size of the files */
  size: number,
  /** Total number of files */
  count: number,
}

/** Contains the storage usage statistics for a specific file type */
export type storageStatisticsByFileType$Input = {
  readonly _: 'storageStatisticsByFileType',
  /** File type */
  readonly file_type?: FileType$Input,
  /** Total size of the files */
  readonly size?: number,
  /** Total number of files */
  readonly count?: number,
}

/** Contains the storage usage statistics for a specific chat */
export type storageStatisticsByChat = {
  _: 'storageStatisticsByChat',
  /** Chat identifier; 0 if none */
  chat_id: number,
  /** Total size of the files in the chat */
  size: number,
  /** Total number of files in the chat */
  count: number,
  /** Statistics split by file types */
  by_file_type: Array<storageStatisticsByFileType>,
}

/** Contains the storage usage statistics for a specific chat */
export type storageStatisticsByChat$Input = {
  readonly _: 'storageStatisticsByChat',
  /** Chat identifier; 0 if none */
  readonly chat_id?: number,
  /** Total size of the files in the chat */
  readonly size?: number,
  /** Total number of files in the chat */
  readonly count?: number,
  /** Statistics split by file types */
  readonly by_file_type?: ReadonlyArray<storageStatisticsByFileType$Input>,
}

/** Contains the exact storage usage statistics split by chats and file type */
export type storageStatistics = {
  _: 'storageStatistics',
  /** Total size of files */
  size: number,
  /** Total number of files */
  count: number,
  /** Statistics split by chats */
  by_chat: Array<storageStatisticsByChat>,
}

/** Contains the exact storage usage statistics split by chats and file type */
export type storageStatistics$Input = {
  readonly _: 'storageStatistics',
  /** Total size of files */
  readonly size?: number,
  /** Total number of files */
  readonly count?: number,
  /** Statistics split by chats */
  readonly by_chat?: ReadonlyArray<storageStatisticsByChat$Input>,
}

/** Contains approximate storage usage statistics, excluding files of unknown file type */
export type storageStatisticsFast = {
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
}

/** Contains approximate storage usage statistics, excluding files of unknown file type */
export type storageStatisticsFast$Input = {
  readonly _: 'storageStatisticsFast',
  /** Approximate total size of files */
  readonly files_size?: number,
  /** Approximate number of files */
  readonly file_count?: number,
  /** Size of the database */
  readonly database_size?: number,
  /** Size of the language pack database */
  readonly language_pack_database_size?: number,
  /** Size of the TDLib internal log */
  readonly log_size?: number,
}

/** Contains database statistics */
export type databaseStatistics = {
  _: 'databaseStatistics',
  /** Database statistics in an unspecified human-readable format */
  statistics: string,
}

/** Contains database statistics */
export type databaseStatistics$Input = {
  readonly _: 'databaseStatistics',
  /** Database statistics in an unspecified human-readable format */
  readonly statistics?: string,
}

/** The network is not available */
export type networkTypeNone = {
  _: 'networkTypeNone',
}

/** The network is not available */
export type networkTypeNone$Input = {
  readonly _: 'networkTypeNone',
}

/** A mobile network */
export type networkTypeMobile = {
  _: 'networkTypeMobile',
}

/** A mobile network */
export type networkTypeMobile$Input = {
  readonly _: 'networkTypeMobile',
}

/** A mobile roaming network */
export type networkTypeMobileRoaming = {
  _: 'networkTypeMobileRoaming',
}

/** A mobile roaming network */
export type networkTypeMobileRoaming$Input = {
  readonly _: 'networkTypeMobileRoaming',
}

/** A Wi-Fi network */
export type networkTypeWiFi = {
  _: 'networkTypeWiFi',
}

/** A Wi-Fi network */
export type networkTypeWiFi$Input = {
  readonly _: 'networkTypeWiFi',
}

/** A different network type (e.g., Ethernet network) */
export type networkTypeOther = {
  _: 'networkTypeOther',
}

/** A different network type (e.g., Ethernet network) */
export type networkTypeOther$Input = {
  readonly _: 'networkTypeOther',
}

/**
 * Contains information about the total amount of data that was used to send and receive
 * files
 */
export type networkStatisticsEntryFile = {
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
}

/**
 * Contains information about the total amount of data that was used to send and receive
 * files
 */
export type networkStatisticsEntryFile$Input = {
  readonly _: 'networkStatisticsEntryFile',
  /** Type of the file the data is part of */
  readonly file_type?: FileType$Input,
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  readonly network_type?: NetworkType$Input,
  /** Total number of bytes sent */
  readonly sent_bytes?: number,
  /** Total number of bytes received */
  readonly received_bytes?: number,
}

/** Contains information about the total amount of data that was used for calls */
export type networkStatisticsEntryCall = {
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
}

/** Contains information about the total amount of data that was used for calls */
export type networkStatisticsEntryCall$Input = {
  readonly _: 'networkStatisticsEntryCall',
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  readonly network_type?: NetworkType$Input,
  /** Total number of bytes sent */
  readonly sent_bytes?: number,
  /** Total number of bytes received */
  readonly received_bytes?: number,
  /** Total call duration, in seconds */
  readonly duration?: number,
}

/** A full list of available network statistic entries */
export type networkStatistics = {
  _: 'networkStatistics',
  /** Point in time (Unix timestamp) when the app began collecting statistics */
  since_date: number,
  /** Network statistics entries */
  entries: Array<NetworkStatisticsEntry>,
}

/** A full list of available network statistic entries */
export type networkStatistics$Input = {
  readonly _: 'networkStatistics',
  /** Point in time (Unix timestamp) when the app began collecting statistics */
  readonly since_date?: number,
  /** Network statistics entries */
  readonly entries?: ReadonlyArray<NetworkStatisticsEntry$Input>,
}

/**
 * Currently waiting for the network to become available. Use SetNetworkType to change
 * the available network type
 */
export type connectionStateWaitingForNetwork = {
  _: 'connectionStateWaitingForNetwork',
}

/**
 * Currently waiting for the network to become available. Use SetNetworkType to change
 * the available network type
 */
export type connectionStateWaitingForNetwork$Input = {
  readonly _: 'connectionStateWaitingForNetwork',
}

/** Currently establishing a connection with a proxy server */
export type connectionStateConnectingToProxy = {
  _: 'connectionStateConnectingToProxy',
}

/** Currently establishing a connection with a proxy server */
export type connectionStateConnectingToProxy$Input = {
  readonly _: 'connectionStateConnectingToProxy',
}

/** Currently establishing a connection to the Telegram servers */
export type connectionStateConnecting = {
  _: 'connectionStateConnecting',
}

/** Currently establishing a connection to the Telegram servers */
export type connectionStateConnecting$Input = {
  readonly _: 'connectionStateConnecting',
}

/** Downloading data received while the client was offline */
export type connectionStateUpdating = {
  _: 'connectionStateUpdating',
}

/** Downloading data received while the client was offline */
export type connectionStateUpdating$Input = {
  readonly _: 'connectionStateUpdating',
}

/** There is a working connection to the Telegram servers */
export type connectionStateReady = {
  _: 'connectionStateReady',
}

/** There is a working connection to the Telegram servers */
export type connectionStateReady$Input = {
  readonly _: 'connectionStateReady',
}

/** A category containing frequently used private chats with non-bot users */
export type topChatCategoryUsers = {
  _: 'topChatCategoryUsers',
}

/** A category containing frequently used private chats with non-bot users */
export type topChatCategoryUsers$Input = {
  readonly _: 'topChatCategoryUsers',
}

/** A category containing frequently used private chats with bot users */
export type topChatCategoryBots = {
  _: 'topChatCategoryBots',
}

/** A category containing frequently used private chats with bot users */
export type topChatCategoryBots$Input = {
  readonly _: 'topChatCategoryBots',
}

/** A category containing frequently used basic groups and supergroups */
export type topChatCategoryGroups = {
  _: 'topChatCategoryGroups',
}

/** A category containing frequently used basic groups and supergroups */
export type topChatCategoryGroups$Input = {
  readonly _: 'topChatCategoryGroups',
}

/** A category containing frequently used channels */
export type topChatCategoryChannels = {
  _: 'topChatCategoryChannels',
}

/** A category containing frequently used channels */
export type topChatCategoryChannels$Input = {
  readonly _: 'topChatCategoryChannels',
}

/**
 * A category containing frequently used chats with inline bots sorted by their usage
 * in inline mode
 */
export type topChatCategoryInlineBots = {
  _: 'topChatCategoryInlineBots',
}

/**
 * A category containing frequently used chats with inline bots sorted by their usage
 * in inline mode
 */
export type topChatCategoryInlineBots$Input = {
  readonly _: 'topChatCategoryInlineBots',
}

/** A category containing frequently used chats used for calls */
export type topChatCategoryCalls = {
  _: 'topChatCategoryCalls',
}

/** A category containing frequently used chats used for calls */
export type topChatCategoryCalls$Input = {
  readonly _: 'topChatCategoryCalls',
}

/** A URL linking to a user */
export type tMeUrlTypeUser = {
  _: 'tMeUrlTypeUser',
  /** Identifier of the user */
  user_id: number,
}

/** A URL linking to a user */
export type tMeUrlTypeUser$Input = {
  readonly _: 'tMeUrlTypeUser',
  /** Identifier of the user */
  readonly user_id?: number,
}

/** A URL linking to a public supergroup or channel */
export type tMeUrlTypeSupergroup = {
  _: 'tMeUrlTypeSupergroup',
  /** Identifier of the supergroup or channel */
  supergroup_id: number,
}

/** A URL linking to a public supergroup or channel */
export type tMeUrlTypeSupergroup$Input = {
  readonly _: 'tMeUrlTypeSupergroup',
  /** Identifier of the supergroup or channel */
  readonly supergroup_id?: number,
}

/** A chat invite link */
export type tMeUrlTypeChatInvite = {
  _: 'tMeUrlTypeChatInvite',
  /** Chat invite link info */
  info: chatInviteLinkInfo,
}

/** A chat invite link */
export type tMeUrlTypeChatInvite$Input = {
  readonly _: 'tMeUrlTypeChatInvite',
  /** Chat invite link info */
  readonly info?: chatInviteLinkInfo$Input,
}

/** A URL linking to a sticker set */
export type tMeUrlTypeStickerSet = {
  _: 'tMeUrlTypeStickerSet',
  /** Identifier of the sticker set */
  sticker_set_id: number | string,
}

/** A URL linking to a sticker set */
export type tMeUrlTypeStickerSet$Input = {
  readonly _: 'tMeUrlTypeStickerSet',
  /** Identifier of the sticker set */
  readonly sticker_set_id?: number | string,
}

/** Represents a URL linking to an internal Telegram entity */
export type tMeUrl = {
  _: 'tMeUrl',
  /** URL */
  url: string,
  /** Type of the URL */
  type: TMeUrlType,
}

/** Represents a URL linking to an internal Telegram entity */
export type tMeUrl$Input = {
  readonly _: 'tMeUrl',
  /** URL */
  readonly url?: string,
  /** Type of the URL */
  readonly type?: TMeUrlType$Input,
}

/** Contains a list of t.me URLs */
export type tMeUrls = {
  _: 'tMeUrls',
  /** List of URLs */
  urls: Array<tMeUrl>,
}

/** Contains a list of t.me URLs */
export type tMeUrls$Input = {
  readonly _: 'tMeUrls',
  /** List of URLs */
  readonly urls?: ReadonlyArray<tMeUrl$Input>,
}

/** Contains a counter */
export type count = {
  _: 'count',
  /** Count */
  count: number,
}

/** Contains a counter */
export type count$Input = {
  readonly _: 'count',
  /** Count */
  readonly count?: number,
}

/** Contains some text */
export type text = {
  _: 'text',
  /** Text */
  text: string,
}

/** Contains some text */
export type text$Input = {
  readonly _: 'text',
  /** Text */
  readonly text?: string,
}

/** Contains a value representing a number of seconds */
export type seconds = {
  _: 'seconds',
  /** Number of seconds */
  seconds: number,
}

/** Contains a value representing a number of seconds */
export type seconds$Input = {
  readonly _: 'seconds',
  /** Number of seconds */
  readonly seconds?: number,
}

/** Contains information about a tg:// deep link */
export type deepLinkInfo = {
  _: 'deepLinkInfo',
  /** Text to be shown to the user */
  text: formattedText,
  /** True, if user should be asked to update the application */
  need_update_application: boolean,
}

/** Contains information about a tg:// deep link */
export type deepLinkInfo$Input = {
  readonly _: 'deepLinkInfo',
  /** Text to be shown to the user */
  readonly text?: formattedText$Input,
  /** True, if user should be asked to update the application */
  readonly need_update_application?: boolean,
}

/** The text should be parsed in markdown-style */
export type textParseModeMarkdown = {
  _: 'textParseModeMarkdown',
}

/** The text should be parsed in markdown-style */
export type textParseModeMarkdown$Input = {
  readonly _: 'textParseModeMarkdown',
}

/** The text should be parsed in HTML-style */
export type textParseModeHTML = {
  _: 'textParseModeHTML',
}

/** The text should be parsed in HTML-style */
export type textParseModeHTML$Input = {
  readonly _: 'textParseModeHTML',
}

/** A SOCKS5 proxy server */
export type proxyTypeSocks5 = {
  _: 'proxyTypeSocks5',
  /** Username for logging in; may be empty */
  username: string,
  /** Password for logging in; may be empty */
  password: string,
}

/** A SOCKS5 proxy server */
export type proxyTypeSocks5$Input = {
  readonly _: 'proxyTypeSocks5',
  /** Username for logging in; may be empty */
  readonly username?: string,
  /** Password for logging in; may be empty */
  readonly password?: string,
}

/** A HTTP transparent proxy server */
export type proxyTypeHttp = {
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
}

/** A HTTP transparent proxy server */
export type proxyTypeHttp$Input = {
  readonly _: 'proxyTypeHttp',
  /** Username for logging in; may be empty */
  readonly username?: string,
  /** Password for logging in; may be empty */
  readonly password?: string,
  /**
   * Pass true, if the proxy supports only HTTP requests and doesn't support transparent
   * TCP connections via HTTP CONNECT method
   */
  readonly http_only?: boolean,
}

/** An MTProto proxy server */
export type proxyTypeMtproto = {
  _: 'proxyTypeMtproto',
  /** The proxy's secret in hexadecimal encoding */
  secret: string,
}

/** An MTProto proxy server */
export type proxyTypeMtproto$Input = {
  readonly _: 'proxyTypeMtproto',
  /** The proxy's secret in hexadecimal encoding */
  readonly secret?: string,
}

/** Contains information about a proxy server */
export type proxy = {
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
}

/** Contains information about a proxy server */
export type proxy$Input = {
  readonly _: 'proxy',
  /** Unique identifier of the proxy */
  readonly id?: number,
  /** Proxy server IP address */
  readonly server?: string,
  /** Proxy server port */
  readonly port?: number,
  /** Point in time (Unix timestamp) when the proxy was last used; 0 if never */
  readonly last_used_date?: number,
  /** True, if the proxy is enabled now */
  readonly is_enabled?: boolean,
  /** Type of the proxy */
  readonly type?: ProxyType$Input,
}

/** Represents a list of proxy servers */
export type proxies = {
  _: 'proxies',
  /** List of proxy servers */
  proxies: Array<proxy>,
}

/** Represents a list of proxy servers */
export type proxies$Input = {
  readonly _: 'proxies',
  /** List of proxy servers */
  readonly proxies?: ReadonlyArray<proxy$Input>,
}

/** Describes a sticker that should be added to a sticker set */
export type inputSticker = {
  _: 'inputSticker',
  /** PNG image with the sticker; must be up to 512 kB in size and fit in a 512x512 square */
  png_sticker: InputFile,
  /** Emoji corresponding to the sticker */
  emojis: string,
  /** For masks, position where the mask should be placed; may be null */
  mask_position: maskPosition,
}

/** Describes a sticker that should be added to a sticker set */
export type inputSticker$Input = {
  readonly _: 'inputSticker',
  /** PNG image with the sticker; must be up to 512 kB in size and fit in a 512x512 square */
  readonly png_sticker?: InputFile$Input,
  /** Emoji corresponding to the sticker */
  readonly emojis?: string,
  /** For masks, position where the mask should be placed; may be null */
  readonly mask_position?: maskPosition$Input,
}

/** The user authorization state has changed */
export type updateAuthorizationState = {
  _: 'updateAuthorizationState',
  /** New authorization state */
  authorization_state: AuthorizationState,
}

/** The user authorization state has changed */
export type updateAuthorizationState$Input = {
  readonly _: 'updateAuthorizationState',
  /** New authorization state */
  readonly authorization_state?: AuthorizationState$Input,
}

/** A new message was received; can also be an outgoing message */
export type updateNewMessage = {
  _: 'updateNewMessage',
  /** The new message */
  message: message,
}

/** A new message was received; can also be an outgoing message */
export type updateNewMessage$Input = {
  readonly _: 'updateNewMessage',
  /** The new message */
  readonly message?: message$Input,
}

/**
 * A request to send a message has reached the Telegram server. This doesn't mean that
 * the message will be sent successfully or even that the send message request will
 * be processed. This update will be sent only if the option "use_quick_ack" is set
 * to true. This update may be sent multiple times for the same message
 */
export type updateMessageSendAcknowledged = {
  _: 'updateMessageSendAcknowledged',
  /** The chat identifier of the sent message */
  chat_id: number,
  /** A temporary message identifier */
  message_id: number,
}

/**
 * A request to send a message has reached the Telegram server. This doesn't mean that
 * the message will be sent successfully or even that the send message request will
 * be processed. This update will be sent only if the option "use_quick_ack" is set
 * to true. This update may be sent multiple times for the same message
 */
export type updateMessageSendAcknowledged$Input = {
  readonly _: 'updateMessageSendAcknowledged',
  /** The chat identifier of the sent message */
  readonly chat_id?: number,
  /** A temporary message identifier */
  readonly message_id?: number,
}

/** A message has been successfully sent */
export type updateMessageSendSucceeded = {
  _: 'updateMessageSendSucceeded',
  /**
   * Information about the sent message. Usually only the message identifier, date, and
   * content are changed, but almost all other fields can also change
   */
  message: message,
  /** The previous temporary message identifier */
  old_message_id: number,
}

/** A message has been successfully sent */
export type updateMessageSendSucceeded$Input = {
  readonly _: 'updateMessageSendSucceeded',
  /**
   * Information about the sent message. Usually only the message identifier, date, and
   * content are changed, but almost all other fields can also change
   */
  readonly message?: message$Input,
  /** The previous temporary message identifier */
  readonly old_message_id?: number,
}

/**
 * A message failed to send. Be aware that some messages being sent can be irrecoverably
 * deleted, in which case updateDeleteMessages will be received instead of this update
 */
export type updateMessageSendFailed = {
  _: 'updateMessageSendFailed',
  /** Contains information about the message that failed to send */
  message: message,
  /** The previous temporary message identifier */
  old_message_id: number,
  /** An error code */
  error_code: number,
  /** Error message */
  error_message: string,
}

/**
 * A message failed to send. Be aware that some messages being sent can be irrecoverably
 * deleted, in which case updateDeleteMessages will be received instead of this update
 */
export type updateMessageSendFailed$Input = {
  readonly _: 'updateMessageSendFailed',
  /** Contains information about the message that failed to send */
  readonly message?: message$Input,
  /** The previous temporary message identifier */
  readonly old_message_id?: number,
  /** An error code */
  readonly error_code?: number,
  /** Error message */
  readonly error_message?: string,
}

/** The message content has changed */
export type updateMessageContent = {
  _: 'updateMessageContent',
  /** Chat identifier */
  chat_id: number,
  /** Message identifier */
  message_id: number,
  /** New message content */
  new_content: MessageContent,
}

/** The message content has changed */
export type updateMessageContent$Input = {
  readonly _: 'updateMessageContent',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Message identifier */
  readonly message_id?: number,
  /** New message content */
  readonly new_content?: MessageContent$Input,
}

/** A message was edited. Changes in the message content will come in a separate updateMessageContent */
export type updateMessageEdited = {
  _: 'updateMessageEdited',
  /** Chat identifier */
  chat_id: number,
  /** Message identifier */
  message_id: number,
  /** Point in time (Unix timestamp) when the message was edited */
  edit_date: number,
  /** New message reply markup; may be null */
  reply_markup: ReplyMarkup,
}

/** A message was edited. Changes in the message content will come in a separate updateMessageContent */
export type updateMessageEdited$Input = {
  readonly _: 'updateMessageEdited',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Message identifier */
  readonly message_id?: number,
  /** Point in time (Unix timestamp) when the message was edited */
  readonly edit_date?: number,
  /** New message reply markup; may be null */
  readonly reply_markup?: ReplyMarkup$Input,
}

/** The view count of the message has changed */
export type updateMessageViews = {
  _: 'updateMessageViews',
  /** Chat identifier */
  chat_id: number,
  /** Message identifier */
  message_id: number,
  /** New value of the view count */
  views: number,
}

/** The view count of the message has changed */
export type updateMessageViews$Input = {
  readonly _: 'updateMessageViews',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Message identifier */
  readonly message_id?: number,
  /** New value of the view count */
  readonly views?: number,
}

/**
 * The message content was opened. Updates voice note messages to "listened", video
 * note messages to "viewed" and starts the TTL timer for self-destructing messages
 */
export type updateMessageContentOpened = {
  _: 'updateMessageContentOpened',
  /** Chat identifier */
  chat_id: number,
  /** Message identifier */
  message_id: number,
}

/**
 * The message content was opened. Updates voice note messages to "listened", video
 * note messages to "viewed" and starts the TTL timer for self-destructing messages
 */
export type updateMessageContentOpened$Input = {
  readonly _: 'updateMessageContentOpened',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Message identifier */
  readonly message_id?: number,
}

/** A message with an unread mention was read */
export type updateMessageMentionRead = {
  _: 'updateMessageMentionRead',
  /** Chat identifier */
  chat_id: number,
  /** Message identifier */
  message_id: number,
  /** The new number of unread mention messages left in the chat */
  unread_mention_count: number,
}

/** A message with an unread mention was read */
export type updateMessageMentionRead$Input = {
  readonly _: 'updateMessageMentionRead',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Message identifier */
  readonly message_id?: number,
  /** The new number of unread mention messages left in the chat */
  readonly unread_mention_count?: number,
}

/**
 * A new chat has been loaded/created. This update is guaranteed to come before the
 * chat identifier is returned to the client. The chat field changes will be reported
 * through separate updates
 */
export type updateNewChat = {
  _: 'updateNewChat',
  /** The chat */
  chat: chat,
}

/**
 * A new chat has been loaded/created. This update is guaranteed to come before the
 * chat identifier is returned to the client. The chat field changes will be reported
 * through separate updates
 */
export type updateNewChat$Input = {
  readonly _: 'updateNewChat',
  /** The chat */
  readonly chat?: chat$Input,
}

/** The title of a chat was changed */
export type updateChatTitle = {
  _: 'updateChatTitle',
  /** Chat identifier */
  chat_id: number,
  /** The new chat title */
  title: string,
}

/** The title of a chat was changed */
export type updateChatTitle$Input = {
  readonly _: 'updateChatTitle',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The new chat title */
  readonly title?: string,
}

/** A chat photo was changed */
export type updateChatPhoto = {
  _: 'updateChatPhoto',
  /** Chat identifier */
  chat_id: number,
  /** The new chat photo; may be null */
  photo: chatPhoto,
}

/** A chat photo was changed */
export type updateChatPhoto$Input = {
  readonly _: 'updateChatPhoto',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The new chat photo; may be null */
  readonly photo?: chatPhoto$Input,
}

/**
 * The last message of a chat was changed. If last_message is null then the last message
 * in the chat became unknown. Some new unknown messages might be added to the chat
 * in this case
 */
export type updateChatLastMessage = {
  _: 'updateChatLastMessage',
  /** Chat identifier */
  chat_id: number,
  /** The new last message in the chat; may be null */
  last_message: message,
  /** New value of the chat order */
  order: number | string,
}

/**
 * The last message of a chat was changed. If last_message is null then the last message
 * in the chat became unknown. Some new unknown messages might be added to the chat
 * in this case
 */
export type updateChatLastMessage$Input = {
  readonly _: 'updateChatLastMessage',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The new last message in the chat; may be null */
  readonly last_message?: message$Input,
  /** New value of the chat order */
  readonly order?: number | string,
}

/**
 * The order of the chat in the chat list has changed. Instead of this update updateChatLastMessage,
 * updateChatIsPinned or updateChatDraftMessage might be sent
 */
export type updateChatOrder = {
  _: 'updateChatOrder',
  /** Chat identifier */
  chat_id: number,
  /** New value of the order */
  order: number | string,
}

/**
 * The order of the chat in the chat list has changed. Instead of this update updateChatLastMessage,
 * updateChatIsPinned or updateChatDraftMessage might be sent
 */
export type updateChatOrder$Input = {
  readonly _: 'updateChatOrder',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New value of the order */
  readonly order?: number | string,
}

/** A chat was pinned or unpinned */
export type updateChatIsPinned = {
  _: 'updateChatIsPinned',
  /** Chat identifier */
  chat_id: number,
  /** New value of is_pinned */
  is_pinned: boolean,
  /** New value of the chat order */
  order: number | string,
}

/** A chat was pinned or unpinned */
export type updateChatIsPinned$Input = {
  readonly _: 'updateChatIsPinned',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New value of is_pinned */
  readonly is_pinned?: boolean,
  /** New value of the chat order */
  readonly order?: number | string,
}

/** A chat was marked as unread or was read */
export type updateChatIsMarkedAsUnread = {
  _: 'updateChatIsMarkedAsUnread',
  /** Chat identifier */
  chat_id: number,
  /** New value of is_marked_as_unread */
  is_marked_as_unread: boolean,
}

/** A chat was marked as unread or was read */
export type updateChatIsMarkedAsUnread$Input = {
  readonly _: 'updateChatIsMarkedAsUnread',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New value of is_marked_as_unread */
  readonly is_marked_as_unread?: boolean,
}

/** A chat's is_sponsored field has changed */
export type updateChatIsSponsored = {
  _: 'updateChatIsSponsored',
  /** Chat identifier */
  chat_id: number,
  /** New value of is_sponsored */
  is_sponsored: boolean,
  /** New value of chat order */
  order: number | string,
}

/** A chat's is_sponsored field has changed */
export type updateChatIsSponsored$Input = {
  readonly _: 'updateChatIsSponsored',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New value of is_sponsored */
  readonly is_sponsored?: boolean,
  /** New value of chat order */
  readonly order?: number | string,
}

/**
 * The value of the default disable_notification parameter, used when a message is sent
 * to the chat, was changed
 */
export type updateChatDefaultDisableNotification = {
  _: 'updateChatDefaultDisableNotification',
  /** Chat identifier */
  chat_id: number,
  /** The new default_disable_notification value */
  default_disable_notification: boolean,
}

/**
 * The value of the default disable_notification parameter, used when a message is sent
 * to the chat, was changed
 */
export type updateChatDefaultDisableNotification$Input = {
  readonly _: 'updateChatDefaultDisableNotification',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The new default_disable_notification value */
  readonly default_disable_notification?: boolean,
}

/** Incoming messages were read or number of unread messages has been changed */
export type updateChatReadInbox = {
  _: 'updateChatReadInbox',
  /** Chat identifier */
  chat_id: number,
  /** Identifier of the last read incoming message */
  last_read_inbox_message_id: number,
  /** The number of unread messages left in the chat */
  unread_count: number,
}

/** Incoming messages were read or number of unread messages has been changed */
export type updateChatReadInbox$Input = {
  readonly _: 'updateChatReadInbox',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Identifier of the last read incoming message */
  readonly last_read_inbox_message_id?: number,
  /** The number of unread messages left in the chat */
  readonly unread_count?: number,
}

/** Outgoing messages were read */
export type updateChatReadOutbox = {
  _: 'updateChatReadOutbox',
  /** Chat identifier */
  chat_id: number,
  /** Identifier of last read outgoing message */
  last_read_outbox_message_id: number,
}

/** Outgoing messages were read */
export type updateChatReadOutbox$Input = {
  readonly _: 'updateChatReadOutbox',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Identifier of last read outgoing message */
  readonly last_read_outbox_message_id?: number,
}

/** The chat unread_mention_count has changed */
export type updateChatUnreadMentionCount = {
  _: 'updateChatUnreadMentionCount',
  /** Chat identifier */
  chat_id: number,
  /** The number of unread mention messages left in the chat */
  unread_mention_count: number,
}

/** The chat unread_mention_count has changed */
export type updateChatUnreadMentionCount$Input = {
  readonly _: 'updateChatUnreadMentionCount',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The number of unread mention messages left in the chat */
  readonly unread_mention_count?: number,
}

/** Notification settings for a chat were changed */
export type updateChatNotificationSettings = {
  _: 'updateChatNotificationSettings',
  /** Chat identifier */
  chat_id: number,
  /** The new notification settings */
  notification_settings: chatNotificationSettings,
}

/** Notification settings for a chat were changed */
export type updateChatNotificationSettings$Input = {
  readonly _: 'updateChatNotificationSettings',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The new notification settings */
  readonly notification_settings?: chatNotificationSettings$Input,
}

/** Notification settings for some type of chats were updated */
export type updateScopeNotificationSettings = {
  _: 'updateScopeNotificationSettings',
  /** Types of chats for which notification settings were updated */
  scope: NotificationSettingsScope,
  /** The new notification settings */
  notification_settings: scopeNotificationSettings,
}

/** Notification settings for some type of chats were updated */
export type updateScopeNotificationSettings$Input = {
  readonly _: 'updateScopeNotificationSettings',
  /** Types of chats for which notification settings were updated */
  readonly scope?: NotificationSettingsScope$Input,
  /** The new notification settings */
  readonly notification_settings?: scopeNotificationSettings$Input,
}

/** The chat pinned message was changed */
export type updateChatPinnedMessage = {
  _: 'updateChatPinnedMessage',
  /** Chat identifier */
  chat_id: number,
  /**
   * The new identifier of the pinned message; 0 if there is no pinned message in the
   * chat
   */
  pinned_message_id: number,
}

/** The chat pinned message was changed */
export type updateChatPinnedMessage$Input = {
  readonly _: 'updateChatPinnedMessage',
  /** Chat identifier */
  readonly chat_id?: number,
  /**
   * The new identifier of the pinned message; 0 if there is no pinned message in the
   * chat
   */
  readonly pinned_message_id?: number,
}

/**
 * The default chat reply markup was changed. Can occur because new messages with reply
 * markup were received or because an old reply markup was hidden by the user
 */
export type updateChatReplyMarkup = {
  _: 'updateChatReplyMarkup',
  /** Chat identifier */
  chat_id: number,
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  reply_markup_message_id: number,
}

/**
 * The default chat reply markup was changed. Can occur because new messages with reply
 * markup were received or because an old reply markup was hidden by the user
 */
export type updateChatReplyMarkup$Input = {
  readonly _: 'updateChatReplyMarkup',
  /** Chat identifier */
  readonly chat_id?: number,
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  readonly reply_markup_message_id?: number,
}

/**
 * A chat draft has changed. Be aware that the update may come in the currently opened
 * chat but with old content of the draft. If the user has changed the content of the
 * draft, this update shouldn't be applied
 */
export type updateChatDraftMessage = {
  _: 'updateChatDraftMessage',
  /** Chat identifier */
  chat_id: number,
  /** The new draft message; may be null */
  draft_message: draftMessage,
  /** New value of the chat order */
  order: number | string,
}

/**
 * A chat draft has changed. Be aware that the update may come in the currently opened
 * chat but with old content of the draft. If the user has changed the content of the
 * draft, this update shouldn't be applied
 */
export type updateChatDraftMessage$Input = {
  readonly _: 'updateChatDraftMessage',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The new draft message; may be null */
  readonly draft_message?: draftMessage$Input,
  /** New value of the chat order */
  readonly order?: number | string,
}

/**
 * The number of online group members has changed. This update with non-zero count is
 * sent only for currently opened chats. There is no guarantee that it will be sent
 * just after the count has changed
 */
export type updateChatOnlineMemberCount = {
  _: 'updateChatOnlineMemberCount',
  /** Identifier of the chat */
  chat_id: number,
  /** New number of online members in the chat, or 0 if unknown */
  online_member_count: number,
}

/**
 * The number of online group members has changed. This update with non-zero count is
 * sent only for currently opened chats. There is no guarantee that it will be sent
 * just after the count has changed
 */
export type updateChatOnlineMemberCount$Input = {
  readonly _: 'updateChatOnlineMemberCount',
  /** Identifier of the chat */
  readonly chat_id?: number,
  /** New number of online members in the chat, or 0 if unknown */
  readonly online_member_count?: number,
}

/** A notification was changed */
export type updateNotification = {
  _: 'updateNotification',
  /** Unique notification group identifier */
  notification_group_id: number,
  /** Changed notification */
  notification: notification,
}

/** A notification was changed */
export type updateNotification$Input = {
  readonly _: 'updateNotification',
  /** Unique notification group identifier */
  readonly notification_group_id?: number,
  /** Changed notification */
  readonly notification?: notification$Input,
}

/** A list of active notifications in a notification group has changed */
export type updateNotificationGroup = {
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
}

/** A list of active notifications in a notification group has changed */
export type updateNotificationGroup$Input = {
  readonly _: 'updateNotificationGroup',
  /** Unique notification group identifier */
  readonly notification_group_id?: number,
  /** New type of the notification group */
  readonly type?: NotificationGroupType$Input,
  /** Identifier of a chat to which all notifications in the group belong */
  readonly chat_id?: number,
  /** Chat identifier, which notification settings must be applied to the added notifications */
  readonly notification_settings_chat_id?: number,
  /** True, if the notifications should be shown without sound */
  readonly is_silent?: boolean,
  /**
   * Total number of unread notifications in the group, can be bigger than number of active
   * notifications
   */
  readonly total_count?: number,
  /** List of added group notifications, sorted by notification ID */
  readonly added_notifications?: ReadonlyArray<notification$Input>,
  /** Identifiers of removed group notifications, sorted by notification ID */
  readonly removed_notification_ids?: ReadonlyArray<number>,
}

/**
 * Contains active notifications that was shown on previous application launches. This
 * update is sent only if a message database is used. In that case it comes once before
 * any updateNotification and updateNotificationGroup update
 */
export type updateActiveNotifications = {
  _: 'updateActiveNotifications',
  /** Lists of active notification groups */
  groups: Array<notificationGroup>,
}

/**
 * Contains active notifications that was shown on previous application launches. This
 * update is sent only if a message database is used. In that case it comes once before
 * any updateNotification and updateNotificationGroup update
 */
export type updateActiveNotifications$Input = {
  readonly _: 'updateActiveNotifications',
  /** Lists of active notification groups */
  readonly groups?: ReadonlyArray<notificationGroup$Input>,
}

/**
 * Describes, whether there are some pending notification updates. Can be used to prevent
 * application from killing, while there are some pending notifications
 */
export type updateHavePendingNotifications = {
  _: 'updateHavePendingNotifications',
  /** True, if there are some delayed notification updates, which will be sent soon */
  have_delayed_notifications: boolean,
  /**
   * True, if there can be some yet unreceived notifications, which are being fetched
   * from the server
   */
  have_unreceived_notifications: boolean,
}

/**
 * Describes, whether there are some pending notification updates. Can be used to prevent
 * application from killing, while there are some pending notifications
 */
export type updateHavePendingNotifications$Input = {
  readonly _: 'updateHavePendingNotifications',
  /** True, if there are some delayed notification updates, which will be sent soon */
  readonly have_delayed_notifications?: boolean,
  /**
   * True, if there can be some yet unreceived notifications, which are being fetched
   * from the server
   */
  readonly have_unreceived_notifications?: boolean,
}

/** Some messages were deleted */
export type updateDeleteMessages = {
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
}

/** Some messages were deleted */
export type updateDeleteMessages$Input = {
  readonly _: 'updateDeleteMessages',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Identifiers of the deleted messages */
  readonly message_ids?: ReadonlyArray<number>,
  /**
   * True, if the messages are permanently deleted by a user (as opposed to just becoming
   * inaccessible)
   */
  readonly is_permanent?: boolean,
  /**
   * True, if the messages are deleted only from the cache and can possibly be retrieved
   * again in the future
   */
  readonly from_cache?: boolean,
}

/** User activity in the chat has changed */
export type updateUserChatAction = {
  _: 'updateUserChatAction',
  /** Chat identifier */
  chat_id: number,
  /** Identifier of a user performing an action */
  user_id: number,
  /** The action description */
  action: ChatAction,
}

/** User activity in the chat has changed */
export type updateUserChatAction$Input = {
  readonly _: 'updateUserChatAction',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Identifier of a user performing an action */
  readonly user_id?: number,
  /** The action description */
  readonly action?: ChatAction$Input,
}

/** The user went online or offline */
export type updateUserStatus = {
  _: 'updateUserStatus',
  /** User identifier */
  user_id: number,
  /** New status of the user */
  status: UserStatus,
}

/** The user went online or offline */
export type updateUserStatus$Input = {
  readonly _: 'updateUserStatus',
  /** User identifier */
  readonly user_id?: number,
  /** New status of the user */
  readonly status?: UserStatus$Input,
}

/**
 * Some data of a user has changed. This update is guaranteed to come before the user
 * identifier is returned to the client
 */
export type updateUser = {
  _: 'updateUser',
  /** New data about the user */
  user: user,
}

/**
 * Some data of a user has changed. This update is guaranteed to come before the user
 * identifier is returned to the client
 */
export type updateUser$Input = {
  readonly _: 'updateUser',
  /** New data about the user */
  readonly user?: user$Input,
}

/**
 * Some data of a basic group has changed. This update is guaranteed to come before
 * the basic group identifier is returned to the client
 */
export type updateBasicGroup = {
  _: 'updateBasicGroup',
  /** New data about the group */
  basic_group: basicGroup,
}

/**
 * Some data of a basic group has changed. This update is guaranteed to come before
 * the basic group identifier is returned to the client
 */
export type updateBasicGroup$Input = {
  readonly _: 'updateBasicGroup',
  /** New data about the group */
  readonly basic_group?: basicGroup$Input,
}

/**
 * Some data of a supergroup or a channel has changed. This update is guaranteed to
 * come before the supergroup identifier is returned to the client
 */
export type updateSupergroup = {
  _: 'updateSupergroup',
  /** New data about the supergroup */
  supergroup: supergroup,
}

/**
 * Some data of a supergroup or a channel has changed. This update is guaranteed to
 * come before the supergroup identifier is returned to the client
 */
export type updateSupergroup$Input = {
  readonly _: 'updateSupergroup',
  /** New data about the supergroup */
  readonly supergroup?: supergroup$Input,
}

/**
 * Some data of a secret chat has changed. This update is guaranteed to come before
 * the secret chat identifier is returned to the client
 */
export type updateSecretChat = {
  _: 'updateSecretChat',
  /** New data about the secret chat */
  secret_chat: secretChat,
}

/**
 * Some data of a secret chat has changed. This update is guaranteed to come before
 * the secret chat identifier is returned to the client
 */
export type updateSecretChat$Input = {
  readonly _: 'updateSecretChat',
  /** New data about the secret chat */
  readonly secret_chat?: secretChat$Input,
}

/** Some data from userFullInfo has been changed */
export type updateUserFullInfo = {
  _: 'updateUserFullInfo',
  /** User identifier */
  user_id: number,
  /** New full information about the user */
  user_full_info: userFullInfo,
}

/** Some data from userFullInfo has been changed */
export type updateUserFullInfo$Input = {
  readonly _: 'updateUserFullInfo',
  /** User identifier */
  readonly user_id?: number,
  /** New full information about the user */
  readonly user_full_info?: userFullInfo$Input,
}

/** Some data from basicGroupFullInfo has been changed */
export type updateBasicGroupFullInfo = {
  _: 'updateBasicGroupFullInfo',
  /** Identifier of a basic group */
  basic_group_id: number,
  /** New full information about the group */
  basic_group_full_info: basicGroupFullInfo,
}

/** Some data from basicGroupFullInfo has been changed */
export type updateBasicGroupFullInfo$Input = {
  readonly _: 'updateBasicGroupFullInfo',
  /** Identifier of a basic group */
  readonly basic_group_id?: number,
  /** New full information about the group */
  readonly basic_group_full_info?: basicGroupFullInfo$Input,
}

/** Some data from supergroupFullInfo has been changed */
export type updateSupergroupFullInfo = {
  _: 'updateSupergroupFullInfo',
  /** Identifier of the supergroup or channel */
  supergroup_id: number,
  /** New full information about the supergroup */
  supergroup_full_info: supergroupFullInfo,
}

/** Some data from supergroupFullInfo has been changed */
export type updateSupergroupFullInfo$Input = {
  readonly _: 'updateSupergroupFullInfo',
  /** Identifier of the supergroup or channel */
  readonly supergroup_id?: number,
  /** New full information about the supergroup */
  readonly supergroup_full_info?: supergroupFullInfo$Input,
}

/**
 * Service notification from the server. Upon receiving this the client must show a
 * popup with the content of the notification
 */
export type updateServiceNotification = {
  _: 'updateServiceNotification',
  /**
   * Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel"
   * and "Log out" should be shown under notification; if user presses the second, all
   * local data should be destroyed using Destroy method
   */
  type: string,
  /** Notification content */
  content: MessageContent,
}

/**
 * Service notification from the server. Upon receiving this the client must show a
 * popup with the content of the notification
 */
export type updateServiceNotification$Input = {
  readonly _: 'updateServiceNotification',
  /**
   * Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel"
   * and "Log out" should be shown under notification; if user presses the second, all
   * local data should be destroyed using Destroy method
   */
  readonly type?: string,
  /** Notification content */
  readonly content?: MessageContent$Input,
}

/** Information about a file was updated */
export type updateFile = {
  _: 'updateFile',
  /** New data about the file */
  file: file,
}

/** Information about a file was updated */
export type updateFile$Input = {
  readonly _: 'updateFile',
  /** New data about the file */
  readonly file?: file$Input,
}

/** The file generation process needs to be started by the client */
export type updateFileGenerationStart = {
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
}

/** The file generation process needs to be started by the client */
export type updateFileGenerationStart$Input = {
  readonly _: 'updateFileGenerationStart',
  /** Unique identifier for the generation process */
  readonly generation_id?: number | string,
  /** The path to a file from which a new file is generated; may be empty */
  readonly original_path?: string,
  /** The path to a file that should be created and where the new file should be generated */
  readonly destination_path?: string,
  /**
   * String specifying the conversion applied to the original file. If conversion is "#url#"
   * than original_path contains an HTTP/HTTPS URL of a file, which should be downloaded
   * by the client
   */
  readonly conversion?: string,
}

/** File generation is no longer needed */
export type updateFileGenerationStop = {
  _: 'updateFileGenerationStop',
  /** Unique identifier for the generation process */
  generation_id: number | string,
}

/** File generation is no longer needed */
export type updateFileGenerationStop$Input = {
  readonly _: 'updateFileGenerationStop',
  /** Unique identifier for the generation process */
  readonly generation_id?: number | string,
}

/** New call was created or information about a call was updated */
export type updateCall = {
  _: 'updateCall',
  /** New data about a call */
  call: call,
}

/** New call was created or information about a call was updated */
export type updateCall$Input = {
  readonly _: 'updateCall',
  /** New data about a call */
  readonly call?: call$Input,
}

/** Some privacy setting rules have been changed */
export type updateUserPrivacySettingRules = {
  _: 'updateUserPrivacySettingRules',
  /** The privacy setting */
  setting: UserPrivacySetting,
  /** New privacy rules */
  rules: userPrivacySettingRules,
}

/** Some privacy setting rules have been changed */
export type updateUserPrivacySettingRules$Input = {
  readonly _: 'updateUserPrivacySettingRules',
  /** The privacy setting */
  readonly setting?: UserPrivacySetting$Input,
  /** New privacy rules */
  readonly rules?: userPrivacySettingRules$Input,
}

/**
 * Number of unread messages has changed. This update is sent only if a message database
 * is used
 */
export type updateUnreadMessageCount = {
  _: 'updateUnreadMessageCount',
  /** Total number of unread messages */
  unread_count: number,
  /** Total number of unread messages in unmuted chats */
  unread_unmuted_count: number,
}

/**
 * Number of unread messages has changed. This update is sent only if a message database
 * is used
 */
export type updateUnreadMessageCount$Input = {
  readonly _: 'updateUnreadMessageCount',
  /** Total number of unread messages */
  readonly unread_count?: number,
  /** Total number of unread messages in unmuted chats */
  readonly unread_unmuted_count?: number,
}

/**
 * Number of unread chats, i.e. with unread messages or marked as unread, has changed.
 * This update is sent only if a message database is used
 */
export type updateUnreadChatCount = {
  _: 'updateUnreadChatCount',
  /** Total number of unread chats */
  unread_count: number,
  /** Total number of unread unmuted chats */
  unread_unmuted_count: number,
  /** Total number of chats marked as unread */
  marked_as_unread_count: number,
  /** Total number of unmuted chats marked as unread */
  marked_as_unread_unmuted_count: number,
}

/**
 * Number of unread chats, i.e. with unread messages or marked as unread, has changed.
 * This update is sent only if a message database is used
 */
export type updateUnreadChatCount$Input = {
  readonly _: 'updateUnreadChatCount',
  /** Total number of unread chats */
  readonly unread_count?: number,
  /** Total number of unread unmuted chats */
  readonly unread_unmuted_count?: number,
  /** Total number of chats marked as unread */
  readonly marked_as_unread_count?: number,
  /** Total number of unmuted chats marked as unread */
  readonly marked_as_unread_unmuted_count?: number,
}

/** An option changed its value */
export type updateOption = {
  _: 'updateOption',
  /** The option name */
  name: string,
  /** The new option value */
  value: OptionValue,
}

/** An option changed its value */
export type updateOption$Input = {
  readonly _: 'updateOption',
  /** The option name */
  readonly name?: string,
  /** The new option value */
  readonly value?: OptionValue$Input,
}

/** The list of installed sticker sets was updated */
export type updateInstalledStickerSets = {
  _: 'updateInstalledStickerSets',
  /** True, if the list of installed mask sticker sets was updated */
  is_masks: boolean,
  /** The new list of installed ordinary sticker sets */
  sticker_set_ids: Array<number | string>,
}

/** The list of installed sticker sets was updated */
export type updateInstalledStickerSets$Input = {
  readonly _: 'updateInstalledStickerSets',
  /** True, if the list of installed mask sticker sets was updated */
  readonly is_masks?: boolean,
  /** The new list of installed ordinary sticker sets */
  readonly sticker_set_ids?: ReadonlyArray<number | string>,
}

/** The list of trending sticker sets was updated or some of them were viewed */
export type updateTrendingStickerSets = {
  _: 'updateTrendingStickerSets',
  /** The new list of trending sticker sets */
  sticker_sets: stickerSets,
}

/** The list of trending sticker sets was updated or some of them were viewed */
export type updateTrendingStickerSets$Input = {
  readonly _: 'updateTrendingStickerSets',
  /** The new list of trending sticker sets */
  readonly sticker_sets?: stickerSets$Input,
}

/** The list of recently used stickers was updated */
export type updateRecentStickers = {
  _: 'updateRecentStickers',
  /**
   * True, if the list of stickers attached to photo or video files was updated, otherwise
   * the list of sent stickers is updated
   */
  is_attached: boolean,
  /** The new list of file identifiers of recently used stickers */
  sticker_ids: Array<number>,
}

/** The list of recently used stickers was updated */
export type updateRecentStickers$Input = {
  readonly _: 'updateRecentStickers',
  /**
   * True, if the list of stickers attached to photo or video files was updated, otherwise
   * the list of sent stickers is updated
   */
  readonly is_attached?: boolean,
  /** The new list of file identifiers of recently used stickers */
  readonly sticker_ids?: ReadonlyArray<number>,
}

/** The list of favorite stickers was updated */
export type updateFavoriteStickers = {
  _: 'updateFavoriteStickers',
  /** The new list of file identifiers of favorite stickers */
  sticker_ids: Array<number>,
}

/** The list of favorite stickers was updated */
export type updateFavoriteStickers$Input = {
  readonly _: 'updateFavoriteStickers',
  /** The new list of file identifiers of favorite stickers */
  readonly sticker_ids?: ReadonlyArray<number>,
}

/** The list of saved animations was updated */
export type updateSavedAnimations = {
  _: 'updateSavedAnimations',
  /** The new list of file identifiers of saved animations */
  animation_ids: Array<number>,
}

/** The list of saved animations was updated */
export type updateSavedAnimations$Input = {
  readonly _: 'updateSavedAnimations',
  /** The new list of file identifiers of saved animations */
  readonly animation_ids?: ReadonlyArray<number>,
}

/** Some language pack strings have been updated */
export type updateLanguagePackStrings = {
  _: 'updateLanguagePackStrings',
  /** Localization target to which the language pack belongs */
  localization_target: string,
  /** Identifier of the updated language pack */
  language_pack_id: string,
  /** List of changed language pack strings */
  strings: Array<languagePackString>,
}

/** Some language pack strings have been updated */
export type updateLanguagePackStrings$Input = {
  readonly _: 'updateLanguagePackStrings',
  /** Localization target to which the language pack belongs */
  readonly localization_target?: string,
  /** Identifier of the updated language pack */
  readonly language_pack_id?: string,
  /** List of changed language pack strings */
  readonly strings?: ReadonlyArray<languagePackString$Input>,
}

/** The connection state has changed */
export type updateConnectionState = {
  _: 'updateConnectionState',
  /** The new connection state */
  state: ConnectionState,
}

/** The connection state has changed */
export type updateConnectionState$Input = {
  readonly _: 'updateConnectionState',
  /** The new connection state */
  readonly state?: ConnectionState$Input,
}

/**
 * New terms of service must be accepted by the user. If the terms of service are declined,
 * then the deleteAccount method should be called with the reason "Decline ToS update"
 */
export type updateTermsOfService = {
  _: 'updateTermsOfService',
  /** Identifier of the terms of service */
  terms_of_service_id: string,
  /** The new terms of service */
  terms_of_service: termsOfService,
}

/**
 * New terms of service must be accepted by the user. If the terms of service are declined,
 * then the deleteAccount method should be called with the reason "Decline ToS update"
 */
export type updateTermsOfService$Input = {
  readonly _: 'updateTermsOfService',
  /** Identifier of the terms of service */
  readonly terms_of_service_id?: string,
  /** The new terms of service */
  readonly terms_of_service?: termsOfService$Input,
}

/** A new incoming inline query; for bots only */
export type updateNewInlineQuery = {
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
}

/** A new incoming inline query; for bots only */
export type updateNewInlineQuery$Input = {
  readonly _: 'updateNewInlineQuery',
  /** Unique query identifier */
  readonly id?: number | string,
  /** Identifier of the user who sent the query */
  readonly sender_user_id?: number,
  /** User location, provided by the client; may be null */
  readonly user_location?: location$Input,
  /** Text of the query */
  readonly query?: string,
  /** Offset of the first entry to return */
  readonly offset?: string,
}

/** The user has chosen a result of an inline query; for bots only */
export type updateNewChosenInlineResult = {
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
}

/** The user has chosen a result of an inline query; for bots only */
export type updateNewChosenInlineResult$Input = {
  readonly _: 'updateNewChosenInlineResult',
  /** Identifier of the user who sent the query */
  readonly sender_user_id?: number,
  /** User location, provided by the client; may be null */
  readonly user_location?: location$Input,
  /** Text of the query */
  readonly query?: string,
  /** Identifier of the chosen result */
  readonly result_id?: string,
  /** Identifier of the sent inline message, if known */
  readonly inline_message_id?: string,
}

/** A new incoming callback query; for bots only */
export type updateNewCallbackQuery = {
  _: 'updateNewCallbackQuery',
  /** Unique query identifier */
  id: number | string,
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** Identifier of the chat, in which the query was sent */
  chat_id: number,
  /** Identifier of the message, from which the query originated */
  message_id: number,
  /** Identifier that uniquely corresponds to the chat to which the message was sent */
  chat_instance: number | string,
  /** Query payload */
  payload: CallbackQueryPayload,
}

/** A new incoming callback query; for bots only */
export type updateNewCallbackQuery$Input = {
  readonly _: 'updateNewCallbackQuery',
  /** Unique query identifier */
  readonly id?: number | string,
  /** Identifier of the user who sent the query */
  readonly sender_user_id?: number,
  /** Identifier of the chat, in which the query was sent */
  readonly chat_id?: number,
  /** Identifier of the message, from which the query originated */
  readonly message_id?: number,
  /** Identifier that uniquely corresponds to the chat to which the message was sent */
  readonly chat_instance?: number | string,
  /** Query payload */
  readonly payload?: CallbackQueryPayload$Input,
}

/** A new incoming callback query from a message sent via a bot; for bots only */
export type updateNewInlineCallbackQuery = {
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
}

/** A new incoming callback query from a message sent via a bot; for bots only */
export type updateNewInlineCallbackQuery$Input = {
  readonly _: 'updateNewInlineCallbackQuery',
  /** Unique query identifier */
  readonly id?: number | string,
  /** Identifier of the user who sent the query */
  readonly sender_user_id?: number,
  /** Identifier of the inline message, from which the query originated */
  readonly inline_message_id?: string,
  /** An identifier uniquely corresponding to the chat a message was sent to */
  readonly chat_instance?: number | string,
  /** Query payload */
  readonly payload?: CallbackQueryPayload$Input,
}

/** A new incoming shipping query; for bots only. Only for invoices with flexible price */
export type updateNewShippingQuery = {
  _: 'updateNewShippingQuery',
  /** Unique query identifier */
  id: number | string,
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** Invoice payload */
  invoice_payload: string,
  /** User shipping address */
  shipping_address: address,
}

/** A new incoming shipping query; for bots only. Only for invoices with flexible price */
export type updateNewShippingQuery$Input = {
  readonly _: 'updateNewShippingQuery',
  /** Unique query identifier */
  readonly id?: number | string,
  /** Identifier of the user who sent the query */
  readonly sender_user_id?: number,
  /** Invoice payload */
  readonly invoice_payload?: string,
  /** User shipping address */
  readonly shipping_address?: address$Input,
}

/**
 * A new incoming pre-checkout query; for bots only. Contains full information about
 * a checkout
 */
export type updateNewPreCheckoutQuery = {
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
}

/**
 * A new incoming pre-checkout query; for bots only. Contains full information about
 * a checkout
 */
export type updateNewPreCheckoutQuery$Input = {
  readonly _: 'updateNewPreCheckoutQuery',
  /** Unique query identifier */
  readonly id?: number | string,
  /** Identifier of the user who sent the query */
  readonly sender_user_id?: number,
  /** Currency for the product price */
  readonly currency?: string,
  /** Total price for the product, in the minimal quantity of the currency */
  readonly total_amount?: number,
  /** Invoice payload */
  readonly invoice_payload?: string,
  /** Identifier of a shipping option chosen by the user; may be empty if not applicable */
  readonly shipping_option_id?: string,
  /** Information about the order; may be null */
  readonly order_info?: orderInfo$Input,
}

/** A new incoming event; for bots only */
export type updateNewCustomEvent = {
  _: 'updateNewCustomEvent',
  /** A JSON-serialized event */
  event: string,
}

/** A new incoming event; for bots only */
export type updateNewCustomEvent$Input = {
  readonly _: 'updateNewCustomEvent',
  /** A JSON-serialized event */
  readonly event?: string,
}

/** A new incoming query; for bots only */
export type updateNewCustomQuery = {
  _: 'updateNewCustomQuery',
  /** The query identifier */
  id: number | string,
  /** JSON-serialized query data */
  data: string,
  /** Query timeout */
  timeout: number,
}

/** A new incoming query; for bots only */
export type updateNewCustomQuery$Input = {
  readonly _: 'updateNewCustomQuery',
  /** The query identifier */
  readonly id?: number | string,
  /** JSON-serialized query data */
  readonly data?: string,
  /** Query timeout */
  readonly timeout?: number,
}

/** Information about a poll was updated; for bots only */
export type updatePoll = {
  _: 'updatePoll',
  /** New data about the poll */
  poll: poll,
}

/** Information about a poll was updated; for bots only */
export type updatePoll$Input = {
  readonly _: 'updatePoll',
  /** New data about the poll */
  readonly poll?: poll$Input,
}

/** Contains a list of updates */
export type updates = {
  _: 'updates',
  /** List of updates */
  updates: Array<Update>,
}

/** Contains a list of updates */
export type updates$Input = {
  readonly _: 'updates',
  /** List of updates */
  readonly updates?: ReadonlyArray<Update$Input>,
}

/** The log is written to stderr or an OS specific log */
export type logStreamDefault = {
  _: 'logStreamDefault',
}

/** The log is written to stderr or an OS specific log */
export type logStreamDefault$Input = {
  readonly _: 'logStreamDefault',
}

/** The log is written to a file */
export type logStreamFile = {
  _: 'logStreamFile',
  /** Path to the file to where the internal TDLib log will be written */
  path: string,
  /**
   * Maximum size of the file to where the internal TDLib log is written before the file
   * will be auto-rotated
   */
  max_file_size: number,
}

/** The log is written to a file */
export type logStreamFile$Input = {
  readonly _: 'logStreamFile',
  /** Path to the file to where the internal TDLib log will be written */
  readonly path?: string,
  /**
   * Maximum size of the file to where the internal TDLib log is written before the file
   * will be auto-rotated
   */
  readonly max_file_size?: number,
}

/** The log is written nowhere */
export type logStreamEmpty = {
  _: 'logStreamEmpty',
}

/** The log is written nowhere */
export type logStreamEmpty$Input = {
  readonly _: 'logStreamEmpty',
}

/** Contains a TDLib internal log verbosity level */
export type logVerbosityLevel = {
  _: 'logVerbosityLevel',
  /** Log verbosity level */
  verbosity_level: number,
}

/** Contains a TDLib internal log verbosity level */
export type logVerbosityLevel$Input = {
  readonly _: 'logVerbosityLevel',
  /** Log verbosity level */
  readonly verbosity_level?: number,
}

/** Contains a list of available TDLib internal log tags */
export type logTags = {
  _: 'logTags',
  /** List of log tags */
  tags: Array<string>,
}

/** Contains a list of available TDLib internal log tags */
export type logTags$Input = {
  readonly _: 'logTags',
  /** List of log tags */
  readonly tags?: ReadonlyArray<string>,
}

/** A simple object containing a number; for testing only */
export type testInt = {
  _: 'testInt',
  /** Number */
  value: number,
}

/** A simple object containing a number; for testing only */
export type testInt$Input = {
  readonly _: 'testInt',
  /** Number */
  readonly value?: number,
}

/** A simple object containing a string; for testing only */
export type testString = {
  _: 'testString',
  /** String */
  value: string,
}

/** A simple object containing a string; for testing only */
export type testString$Input = {
  readonly _: 'testString',
  /** String */
  readonly value?: string,
}

/** A simple object containing a sequence of bytes; for testing only */
export type testBytes = {
  _: 'testBytes',
  /** Bytes */
  value: string,
}

/** A simple object containing a sequence of bytes; for testing only */
export type testBytes$Input = {
  readonly _: 'testBytes',
  /** Bytes */
  readonly value?: string,
}

/** A simple object containing a vector of numbers; for testing only */
export type testVectorInt = {
  _: 'testVectorInt',
  /** Vector of numbers */
  value: Array<number>,
}

/** A simple object containing a vector of numbers; for testing only */
export type testVectorInt$Input = {
  readonly _: 'testVectorInt',
  /** Vector of numbers */
  readonly value?: ReadonlyArray<number>,
}

/** A simple object containing a vector of objects that hold a number; for testing only */
export type testVectorIntObject = {
  _: 'testVectorIntObject',
  /** Vector of objects */
  value: Array<testInt>,
}

/** A simple object containing a vector of objects that hold a number; for testing only */
export type testVectorIntObject$Input = {
  readonly _: 'testVectorIntObject',
  /** Vector of objects */
  readonly value?: ReadonlyArray<testInt$Input>,
}

/** A simple object containing a vector of strings; for testing only */
export type testVectorString = {
  _: 'testVectorString',
  /** Vector of strings */
  value: Array<string>,
}

/** A simple object containing a vector of strings; for testing only */
export type testVectorString$Input = {
  readonly _: 'testVectorString',
  /** Vector of strings */
  readonly value?: ReadonlyArray<string>,
}

/** A simple object containing a vector of objects that hold a string; for testing only */
export type testVectorStringObject = {
  _: 'testVectorStringObject',
  /** Vector of objects */
  value: Array<testString>,
}

/** A simple object containing a vector of objects that hold a string; for testing only */
export type testVectorStringObject$Input = {
  readonly _: 'testVectorStringObject',
  /** Vector of objects */
  readonly value?: ReadonlyArray<testString$Input>,
}

/**
 * Returns the current authorization state; this is an offline request. For informational
 * purposes only. Use updateAuthorizationState instead to maintain the current authorization
 * state
 */
export type getAuthorizationState = {
  readonly _: 'getAuthorizationState',
}

/**
 * Sets the parameters for TDLib initialization. Works only when the current authorization
 * state is authorizationStateWaitTdlibParameters
 */
export type setTdlibParameters = {
  readonly _: 'setTdlibParameters',
  /** Parameters */
  readonly parameters?: tdlibParameters$Input,
}

/**
 * Checks the database encryption key for correctness. Works only when the current authorization
 * state is authorizationStateWaitEncryptionKey
 */
export type checkDatabaseEncryptionKey = {
  readonly _: 'checkDatabaseEncryptionKey',
  /** Encryption key to check or set up */
  readonly encryption_key?: string,
}

/**
 * Sets the phone number of the user and sends an authentication code to the user. Works
 * only when the current authorization state is authorizationStateWaitPhoneNumber
 */
export type setAuthenticationPhoneNumber = {
  readonly _: 'setAuthenticationPhoneNumber',
  /** The phone number of the user, in international format */
  readonly phone_number?: string,
  /**
   * Pass true if the authentication code may be sent via flash call to the specified
   * phone number
   */
  readonly allow_flash_call?: boolean,
  /**
   * Pass true if the phone number is used on the current device. Ignored if allow_flash_call
   * is false
   */
  readonly is_current_phone_number?: boolean,
}

/**
 * Re-sends an authentication code to the user. Works only when the current authorization
 * state is authorizationStateWaitCode and the next_code_type of the result is not null
 */
export type resendAuthenticationCode = {
  readonly _: 'resendAuthenticationCode',
}

/**
 * Checks the authentication code. Works only when the current authorization state is
 * authorizationStateWaitCode
 */
export type checkAuthenticationCode = {
  readonly _: 'checkAuthenticationCode',
  /** The verification code received via SMS, Telegram message, phone call, or flash call */
  readonly code?: string,
  /**
   * If the user is not yet registered, the first name of the user; 1-64 characters. You
   * can also pass an empty string for unregistered user there to check verification code
   * validness. In the latter case PHONE_NUMBER_UNOCCUPIED error will be returned for
   * a valid code
   */
  readonly first_name?: string,
  /** If the user is not yet registered; the last name of the user; optional; 0-64 characters */
  readonly last_name?: string,
}

/**
 * Checks the authentication password for correctness. Works only when the current authorization
 * state is authorizationStateWaitPassword
 */
export type checkAuthenticationPassword = {
  readonly _: 'checkAuthenticationPassword',
  /** The password to check */
  readonly password?: string,
}

/**
 * Requests to send a password recovery code to an email address that was previously
 * set up. Works only when the current authorization state is authorizationStateWaitPassword
 */
export type requestAuthenticationPasswordRecovery = {
  readonly _: 'requestAuthenticationPasswordRecovery',
}

/**
 * Recovers the password with a password recovery code sent to an email address that
 * was previously set up. Works only when the current authorization state is authorizationStateWaitPassword
 */
export type recoverAuthenticationPassword = {
  readonly _: 'recoverAuthenticationPassword',
  /** Recovery code to check */
  readonly recovery_code?: string,
}

/**
 * Checks the authentication token of a bot; to log in as a bot. Works only when the
 * current authorization state is authorizationStateWaitPhoneNumber. Can be used instead
 * of setAuthenticationPhoneNumber and checkAuthenticationCode to log in
 */
export type checkAuthenticationBotToken = {
  readonly _: 'checkAuthenticationBotToken',
  /** The bot token */
  readonly token?: string,
}

/**
 * Closes the TDLib instance after a proper logout. Requires an available network connection.
 * All local data will be destroyed. After the logout completes, updateAuthorizationState
 * with authorizationStateClosed will be sent
 */
export type logOut = {
  readonly _: 'logOut',
}

/**
 * Closes the TDLib instance. All databases will be flushed to disk and properly closed.
 * After the close completes, updateAuthorizationState with authorizationStateClosed
 * will be sent
 */
export type close = {
  readonly _: 'close',
}

/**
 * Closes the TDLib instance, destroying all local data without a proper logout. The
 * current user session will remain in the list of all active sessions. All local data
 * will be destroyed. After the destruction completes updateAuthorizationState with
 * authorizationStateClosed will be sent
 */
export type destroy = {
  readonly _: 'destroy',
}

/**
 * Returns all updates needed to restore current TDLib state, i.e. all actual UpdateAuthorizationState/UpdateUser/UpdateNewChat
 * and others. This is especially usefull if TDLib is run in a separate process. This
 * is an offline method. Can be called before authorization
 */
export type getCurrentState = {
  readonly _: 'getCurrentState',
}

/**
 * Changes the database encryption key. Usually the encryption key is never changed
 * and is stored in some OS keychain
 */
export type setDatabaseEncryptionKey = {
  readonly _: 'setDatabaseEncryptionKey',
  /** New encryption key */
  readonly new_encryption_key?: string,
}

/** Returns the current state of 2-step verification */
export type getPasswordState = {
  readonly _: 'getPasswordState',
}

/**
 * Changes the password for the user. If a new recovery email address is specified,
 * then the change will not be applied until the new recovery email address is confirmed
 */
export type setPassword = {
  readonly _: 'setPassword',
  /** Previous password of the user */
  readonly old_password?: string,
  /** New password of the user; may be empty to remove the password */
  readonly new_password?: string,
  /** New password hint; may be empty */
  readonly new_hint?: string,
  /** Pass true if the recovery email address should be changed */
  readonly set_recovery_email_address?: boolean,
  /** New recovery email address; may be empty */
  readonly new_recovery_email_address?: string,
}

/**
 * Returns a 2-step verification recovery email address that was previously set up.
 * This method can be used to verify a password provided by the user
 */
export type getRecoveryEmailAddress = {
  readonly _: 'getRecoveryEmailAddress',
  /** The password for the current user */
  readonly password?: string,
}

/**
 * Changes the 2-step verification recovery email address of the user. If a new recovery
 * email address is specified, then the change will not be applied until the new recovery
 * email address is confirmed If new_recovery_email_address is the same as the email
 * address that is currently set up, this call succeeds immediately and aborts all other
 * requests waiting for an email confirmation
 */
export type setRecoveryEmailAddress = {
  readonly _: 'setRecoveryEmailAddress',
  /** Password of the current user */
  readonly password?: string,
  /** New recovery email address */
  readonly new_recovery_email_address?: string,
}

/** Checks the 2-step verification recovery email address verification code */
export type checkRecoveryEmailAddressCode = {
  readonly _: 'checkRecoveryEmailAddressCode',
  /** Verification code */
  readonly code?: string,
}

/** Resends the 2-step verification recovery email address verification code */
export type resendRecoveryEmailAddressCode = {
  readonly _: 'resendRecoveryEmailAddressCode',
}

/**
 * Requests to send a password recovery code to an email address that was previously
 * set up
 */
export type requestPasswordRecovery = {
  readonly _: 'requestPasswordRecovery',
}

/**
 * Recovers the password using a recovery code sent to an email address that was previously
 * set up
 */
export type recoverPassword = {
  readonly _: 'recoverPassword',
  /** Recovery code to check */
  readonly recovery_code?: string,
}

/** Creates a new temporary password for processing payments */
export type createTemporaryPassword = {
  readonly _: 'createTemporaryPassword',
  /** Persistent user password */
  readonly password?: string,
  /**
   * Time during which the temporary password will be valid, in seconds; should be between
   * 60 and 86400
   */
  readonly valid_for?: number,
}

/** Returns information about the current temporary password */
export type getTemporaryPasswordState = {
  readonly _: 'getTemporaryPasswordState',
}

/** Returns the current user */
export type getMe = {
  readonly _: 'getMe',
}

/**
 * Returns information about a user by their identifier. This is an offline request
 * if the current user is not a bot
 */
export type getUser = {
  readonly _: 'getUser',
  /** User identifier */
  readonly user_id?: number,
}

/** Returns full information about a user by their identifier */
export type getUserFullInfo = {
  readonly _: 'getUserFullInfo',
  /** User identifier */
  readonly user_id?: number,
}

/**
 * Returns information about a basic group by its identifier. This is an offline request
 * if the current user is not a bot
 */
export type getBasicGroup = {
  readonly _: 'getBasicGroup',
  /** Basic group identifier */
  readonly basic_group_id?: number,
}

/** Returns full information about a basic group by its identifier */
export type getBasicGroupFullInfo = {
  readonly _: 'getBasicGroupFullInfo',
  /** Basic group identifier */
  readonly basic_group_id?: number,
}

/**
 * Returns information about a supergroup or channel by its identifier. This is an offline
 * request if the current user is not a bot
 */
export type getSupergroup = {
  readonly _: 'getSupergroup',
  /** Supergroup or channel identifier */
  readonly supergroup_id?: number,
}

/**
 * Returns full information about a supergroup or channel by its identifier, cached
 * for up to 1 minute
 */
export type getSupergroupFullInfo = {
  readonly _: 'getSupergroupFullInfo',
  /** Supergroup or channel identifier */
  readonly supergroup_id?: number,
}

/** Returns information about a secret chat by its identifier. This is an offline request */
export type getSecretChat = {
  readonly _: 'getSecretChat',
  /** Secret chat identifier */
  readonly secret_chat_id?: number,
}

/**
 * Returns information about a chat by its identifier, this is an offline request if
 * the current user is not a bot
 */
export type getChat = {
  readonly _: 'getChat',
  /** Chat identifier */
  readonly chat_id?: number,
}

/** Returns information about a message */
export type getMessage = {
  readonly _: 'getMessage',
  /** Identifier of the chat the message belongs to */
  readonly chat_id?: number,
  /** Identifier of the message to get */
  readonly message_id?: number,
}

/**
 * Returns information about a message, if it is available locally without sending network
 * request. This is an offline request
 */
export type getMessageLocally = {
  readonly _: 'getMessageLocally',
  /** Identifier of the chat the message belongs to */
  readonly chat_id?: number,
  /** Identifier of the message to get */
  readonly message_id?: number,
}

/** Returns information about a message that is replied by given message */
export type getRepliedMessage = {
  readonly _: 'getRepliedMessage',
  /** Identifier of the chat the message belongs to */
  readonly chat_id?: number,
  /** Identifier of the message reply to which get */
  readonly message_id?: number,
}

/** Returns information about a pinned chat message */
export type getChatPinnedMessage = {
  readonly _: 'getChatPinnedMessage',
  /** Identifier of the chat the message belongs to */
  readonly chat_id?: number,
}

/**
 * Returns information about messages. If a message is not found, returns null on the
 * corresponding position of the result
 */
export type getMessages = {
  readonly _: 'getMessages',
  /** Identifier of the chat the messages belong to */
  readonly chat_id?: number,
  /** Identifiers of the messages to get */
  readonly message_ids?: ReadonlyArray<number>,
}

/** Returns information about a file; this is an offline request */
export type getFile = {
  readonly _: 'getFile',
  /** Identifier of the file to get */
  readonly file_id?: number,
}

/**
 * Returns information about a file by its remote ID; this is an offline request. Can
 * be used to register a URL as a file for further uploading, or sending as a message
 */
export type getRemoteFile = {
  readonly _: 'getRemoteFile',
  /** Remote identifier of the file to get */
  readonly remote_file_id?: string,
  /** File type, if known */
  readonly file_type?: FileType$Input,
}

/**
 * Returns an ordered list of chats. Chats are sorted by the pair (order, chat_id) in
 * decreasing order. (For example, to get a list of chats from the beginning, the offset_order
 * should be equal to a biggest signed 64-bit number 9223372036854775807 == 2^63 - 1).
 * For optimal performance the number of returned chats is chosen by the library.
 */
export type getChats = {
  readonly _: 'getChats',
  /** Chat order to return chats from */
  readonly offset_order?: number | string,
  /** Chat identifier to return chats from */
  readonly offset_chat_id?: number,
  /**
   * The maximum number of chats to be returned. It is possible that fewer chats than
   * the limit are returned even if the end of the list is not reached
   */
  readonly limit?: number,
}

/**
 * Searches a public chat by its username. Currently only private chats, supergroups
 * and channels can be public. Returns the chat if found; otherwise an error is returned
 */
export type searchPublicChat = {
  readonly _: 'searchPublicChat',
  /** Username to be resolved */
  readonly username?: string,
}

/**
 * Searches public chats by looking for specified query in their username and title.
 * Currently only private chats, supergroups and channels can be public. Returns a meaningful
 * number of results. Returns nothing if the length of the searched username prefix
 * is less than 5. Excludes private chats with contacts and chats from the chat list
 * from the results
 */
export type searchPublicChats = {
  readonly _: 'searchPublicChats',
  /** Query to search for */
  readonly query?: string,
}

/**
 * Searches for the specified query in the title and username of already known chats,
 * this is an offline request. Returns chats in the order seen in the chat list
 */
export type searchChats = {
  readonly _: 'searchChats',
  /** Query to search for. If the query is empty, returns up to 20 recently found chats */
  readonly query?: string,
  /** Maximum number of chats to be returned */
  readonly limit?: number,
}

/**
 * Searches for the specified query in the title and username of already known chats
 * via request to the server. Returns chats in the order seen in the chat list
 */
export type searchChatsOnServer = {
  readonly _: 'searchChatsOnServer',
  /** Query to search for */
  readonly query?: string,
  /** Maximum number of chats to be returned */
  readonly limit?: number,
}

/**
 * Returns a list of frequently used chats. Supported only if the chat info database
 * is enabled
 */
export type getTopChats = {
  readonly _: 'getTopChats',
  /** Category of chats to be returned */
  readonly category?: TopChatCategory$Input,
  /** Maximum number of chats to be returned; up to 30 */
  readonly limit?: number,
}

/**
 * Removes a chat from the list of frequently used chats. Supported only if the chat
 * info database is enabled
 */
export type removeTopChat = {
  readonly _: 'removeTopChat',
  /** Category of frequently used chats */
  readonly category?: TopChatCategory$Input,
  /** Chat identifier */
  readonly chat_id?: number,
}

/**
 * Adds a chat to the list of recently found chats. The chat is added to the beginning
 * of the list. If the chat is already in the list, it will be removed from the list
 * first
 */
export type addRecentlyFoundChat = {
  readonly _: 'addRecentlyFoundChat',
  /** Identifier of the chat to add */
  readonly chat_id?: number,
}

/** Removes a chat from the list of recently found chats */
export type removeRecentlyFoundChat = {
  readonly _: 'removeRecentlyFoundChat',
  /** Identifier of the chat to be removed */
  readonly chat_id?: number,
}

/** Clears the list of recently found chats */
export type clearRecentlyFoundChats = {
  readonly _: 'clearRecentlyFoundChats',
}

/** Checks whether a username can be set for a chat */
export type checkChatUsername = {
  readonly _: 'checkChatUsername',
  /**
   * Chat identifier; should be identifier of a supergroup chat, or a channel chat, or
   * a private chat with self, or zero if chat is being created
   */
  readonly chat_id?: number,
  /** Username to be checked */
  readonly username?: string,
}

/** Returns a list of public chats created by the user */
export type getCreatedPublicChats = {
  readonly _: 'getCreatedPublicChats',
}

/**
 * Returns a list of common group chats with a given user. Chats are sorted by their
 * type and creation date
 */
export type getGroupsInCommon = {
  readonly _: 'getGroupsInCommon',
  /** User identifier */
  readonly user_id?: number,
  /** Chat identifier starting from which to return chats; use 0 for the first request */
  readonly offset_chat_id?: number,
  /** Maximum number of chats to be returned; up to 100 */
  readonly limit?: number,
}

/**
 * Returns messages in a chat. The messages are returned in a reverse chronological
 * order (i.e., in order of decreasing message_id). For optimal performance the number
 * of returned messages is chosen by the library. This is an offline request if only_local
 * is true
 */
export type getChatHistory = {
  readonly _: 'getChatHistory',
  /** Chat identifier */
  readonly chat_id?: number,
  /**
   * Identifier of the message starting from which history must be fetched; use 0 to get
   * results from the last message
   */
  readonly from_message_id?: number,
  /**
   * Specify 0 to get results from exactly the from_message_id or a negative offset up
   * to 99 to get additionally some newer messages
   */
  readonly offset?: number,
  /**
   * The maximum number of messages to be returned; must be positive and can't be greater
   * than 100. If the offset is negative, the limit must be greater or equal to -offset.
   * Fewer messages may be returned than specified by the limit, even if the end of the
   * message history has not been reached
   */
  readonly limit?: number,
  /**
   * If true, returns only messages that are available locally without sending network
   * requests
   */
  readonly only_local?: boolean,
}

/**
 * Deletes all messages in the chat. Use Chat.can_be_deleted_only_for_self and Chat.can_be_deleted_for_all_users
 * fields to find whether and how the method can be applied to the chat
 */
export type deleteChatHistory = {
  readonly _: 'deleteChatHistory',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Pass true if the chat should be removed from the chat list */
  readonly remove_from_chat_list?: boolean,
  /** Pass true to try to delete chat history for all users */
  readonly revoke?: boolean,
}

/**
 * Searches for messages with given words in the chat. Returns the results in reverse
 * chronological order, i.e. in order of decreasing message_id. Cannot be used in secret
 * chats with a non-empty query (searchSecretMessages should be used instead), or without
 * an enabled message database. For optimal performance the number of returned messages
 * is chosen by the library
 */
export type searchChatMessages = {
  readonly _: 'searchChatMessages',
  /** Identifier of the chat in which to search messages */
  readonly chat_id?: number,
  /** Query to search for */
  readonly query?: string,
  /**
   * If not 0, only messages sent by the specified user will be returned. Not supported
   * in secret chats
   */
  readonly sender_user_id?: number,
  /**
   * Identifier of the message starting from which history must be fetched; use 0 to get
   * results from the last message
   */
  readonly from_message_id?: number,
  /**
   * Specify 0 to get results from exactly the from_message_id or a negative offset to
   * get the specified message and some newer messages
   */
  readonly offset?: number,
  /**
   * The maximum number of messages to be returned; must be positive and can't be greater
   * than 100. If the offset is negative, the limit must be greater than -offset. Fewer
   * messages may be returned than specified by the limit, even if the end of the message
   * history has not been reached
   */
  readonly limit?: number,
  /** Filter for message content in the search results */
  readonly filter?: SearchMessagesFilter$Input,
}

/**
 * Searches for messages in all chats except secret chats. Returns the results in reverse
 * chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For
 * optimal performance the number of returned messages is chosen by the library
 */
export type searchMessages = {
  readonly _: 'searchMessages',
  /** Query to search for */
  readonly query?: string,
  /**
   * The date of the message starting from which the results should be fetched. Use 0
   * or any date in the future to get results from the last message
   */
  readonly offset_date?: number,
  /** The chat identifier of the last found message, or 0 for the first request */
  readonly offset_chat_id?: number,
  /** The message identifier of the last found message, or 0 for the first request */
  readonly offset_message_id?: number,
  /**
   * The maximum number of messages to be returned, up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  readonly limit?: number,
}

/**
 * Searches for messages in secret chats. Returns the results in reverse chronological
 * order. For optimal performance the number of returned messages is chosen by the library
 */
export type searchSecretMessages = {
  readonly _: 'searchSecretMessages',
  /** Identifier of the chat in which to search. Specify 0 to search in all secret chats */
  readonly chat_id?: number,
  /** Query to search for. If empty, searchChatMessages should be used instead */
  readonly query?: string,
  /**
   * The identifier from the result of a previous request, use 0 to get results from the
   * last message
   */
  readonly from_search_id?: number | string,
  /**
   * Maximum number of messages to be returned; up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  readonly limit?: number,
  /** A filter for the content of messages in the search results */
  readonly filter?: SearchMessagesFilter$Input,
}

/**
 * Searches for call messages. Returns the results in reverse chronological order (i.
 * e., in order of decreasing message_id). For optimal performance the number of returned
 * messages is chosen by the library
 */
export type searchCallMessages = {
  readonly _: 'searchCallMessages',
  /**
   * Identifier of the message from which to search; use 0 to get results from the last
   * message
   */
  readonly from_message_id?: number,
  /**
   * The maximum number of messages to be returned; up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  readonly limit?: number,
  /** If true, returns only messages with missed calls */
  readonly only_missed?: boolean,
}

/**
 * Returns information about the recent locations of chat members that were sent to
 * the chat. Returns up to 1 location message per user
 */
export type searchChatRecentLocationMessages = {
  readonly _: 'searchChatRecentLocationMessages',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Maximum number of messages to be returned */
  readonly limit?: number,
}

/**
 * Returns all active live locations that should be updated by the client. The list
 * is persistent across application restarts only if the message database is used
 */
export type getActiveLiveLocationMessages = {
  readonly _: 'getActiveLiveLocationMessages',
}

/** Returns the last message sent in a chat no later than the specified date */
export type getChatMessageByDate = {
  readonly _: 'getChatMessageByDate',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Point in time (Unix timestamp) relative to which to search for messages */
  readonly date?: number,
}

/** Returns approximate number of messages of the specified type in the chat */
export type getChatMessageCount = {
  readonly _: 'getChatMessageCount',
  /** Identifier of the chat in which to count messages */
  readonly chat_id?: number,
  /** Filter for message content; searchMessagesFilterEmpty is unsupported in this function */
  readonly filter?: SearchMessagesFilter$Input,
  /**
   * If true, returns count that is available locally without sending network requests,
   * returning -1 if the number of messages is unknown
   */
  readonly return_local?: boolean,
}

/**
 * Removes an active notification from notification list. Needs to be called only if
 * the notification is removed by the current user
 */
export type removeNotification = {
  readonly _: 'removeNotification',
  /** Identifier of notification group to which the notification belongs */
  readonly notification_group_id?: number,
  /** Identifier of removed notification */
  readonly notification_id?: number,
}

/**
 * Removes a group of active notifications. Needs to be called only if the notification
 * group is removed by the current user
 */
export type removeNotificationGroup = {
  readonly _: 'removeNotificationGroup',
  /** Notification group identifier */
  readonly notification_group_id?: number,
  /** Maximum identifier of removed notifications */
  readonly max_notification_id?: number,
}

/**
 * Returns a public HTTPS link to a message. Available only for messages in public supergroups
 * and channels
 */
export type getPublicMessageLink = {
  readonly _: 'getPublicMessageLink',
  /** Identifier of the chat to which the message belongs */
  readonly chat_id?: number,
  /** Identifier of the message */
  readonly message_id?: number,
  /** Pass true if a link for a whole media album should be returned */
  readonly for_album?: boolean,
}

/**
 * Returns a private HTTPS link to a message in a chat. Available only for already sent
 * messages in supergroups and channels. The link will work only for members of the
 * chat
 */
export type getMessageLink = {
  readonly _: 'getMessageLink',
  /** Identifier of the chat to which the message belongs */
  readonly chat_id?: number,
  /** Identifier of the message */
  readonly message_id?: number,
}

/** Sends a message. Returns the sent message */
export type sendMessage = {
  readonly _: 'sendMessage',
  /** Target chat */
  readonly chat_id?: number,
  /** Identifier of the message to reply to or 0 */
  readonly reply_to_message_id?: number,
  /** Pass true to disable notification for the message. Not supported in secret chats */
  readonly disable_notification?: boolean,
  /** Pass true if the message is sent from the background */
  readonly from_background?: boolean,
  /** Markup for replying to the message; for bots only */
  readonly reply_markup?: ReplyMarkup$Input,
  /** The content of the message to be sent */
  readonly input_message_content?: InputMessageContent$Input,
}

/**
 * Sends messages grouped together into an album. Currently only photo and video messages
 * can be grouped into an album. Returns sent messages
 */
export type sendMessageAlbum = {
  readonly _: 'sendMessageAlbum',
  /** Target chat */
  readonly chat_id?: number,
  /** Identifier of a message to reply to or 0 */
  readonly reply_to_message_id?: number,
  /** Pass true to disable notification for the messages. Not supported in secret chats */
  readonly disable_notification?: boolean,
  /** Pass true if the messages are sent from the background */
  readonly from_background?: boolean,
  /** Contents of messages to be sent */
  readonly input_message_contents?: ReadonlyArray<InputMessageContent$Input>,
}

/**
 * Invites a bot to a chat (if it is not yet a member) and sends it the /start command.
 * Bots can't be invited to a private chat other than the chat with the bot. Bots can't
 * be invited to channels (although they can be added as admins) and secret chats. Returns
 * the sent message
 */
export type sendBotStartMessage = {
  readonly _: 'sendBotStartMessage',
  /** Identifier of the bot */
  readonly bot_user_id?: number,
  /** Identifier of the target chat */
  readonly chat_id?: number,
  /** A hidden parameter sent to the bot for deep linking purposes (https://api.telegram.org/bots#deep-linking) */
  readonly parameter?: string,
}

/**
 * Sends the result of an inline query as a message. Returns the sent message. Always
 * clears a chat draft message
 */
export type sendInlineQueryResultMessage = {
  readonly _: 'sendInlineQueryResultMessage',
  /** Target chat */
  readonly chat_id?: number,
  /** Identifier of a message to reply to or 0 */
  readonly reply_to_message_id?: number,
  /** Pass true to disable notification for the message. Not supported in secret chats */
  readonly disable_notification?: boolean,
  /** Pass true if the message is sent from background */
  readonly from_background?: boolean,
  /** Identifier of the inline query */
  readonly query_id?: number | string,
  /** Identifier of the inline result */
  readonly result_id?: string,
  /**
   * If true, there will be no mention of a bot, via which the message is sent. Can be
   * used only for bots GetOption("animation_search_bot_username"), GetOption("photo_search_bot_username")
   * and GetOption("venue_search_bot_username")
   */
  readonly hide_via_bot?: boolean,
}

/**
 * Forwards previously sent messages. Returns the forwarded messages in the same order
 * as the message identifiers passed in message_ids. If a message can't be forwarded,
 * null will be returned instead of the message
 */
export type forwardMessages = {
  readonly _: 'forwardMessages',
  /** Identifier of the chat to which to forward messages */
  readonly chat_id?: number,
  /** Identifier of the chat from which to forward messages */
  readonly from_chat_id?: number,
  /** Identifiers of the messages to forward */
  readonly message_ids?: ReadonlyArray<number>,
  /**
   * Pass true to disable notification for the message, doesn't work if messages are forwarded
   * to a secret chat
   */
  readonly disable_notification?: boolean,
  /** Pass true if the message is sent from the background */
  readonly from_background?: boolean,
  /**
   * True, if the messages should be grouped into an album after forwarding. For this
   * to work, no more than 10 messages may be forwarded, and all of them must be photo
   * or video messages
   */
  readonly as_album?: boolean,
}

/**
 * Changes the current TTL setting (sets a new self-destruct timer) in a secret chat
 * and sends the corresponding message
 */
export type sendChatSetTtlMessage = {
  readonly _: 'sendChatSetTtlMessage',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New TTL value, in seconds */
  readonly ttl?: number,
}

/**
 * Sends a notification about a screenshot taken in a chat. Supported only in private
 * and secret chats
 */
export type sendChatScreenshotTakenNotification = {
  readonly _: 'sendChatScreenshotTakenNotification',
  /** Chat identifier */
  readonly chat_id?: number,
}

/**
 * Adds a local message to a chat. The message is persistent across application restarts
 * only if the message database is used. Returns the added message
 */
export type addLocalMessage = {
  readonly _: 'addLocalMessage',
  /** Target chat */
  readonly chat_id?: number,
  /**
   * Identifier of the user who will be shown as the sender of the message; may be 0 for
   * channel posts
   */
  readonly sender_user_id?: number,
  /** Identifier of the message to reply to or 0 */
  readonly reply_to_message_id?: number,
  /** Pass true to disable notification for the message */
  readonly disable_notification?: boolean,
  /** The content of the message to be added */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Deletes messages */
export type deleteMessages = {
  readonly _: 'deleteMessages',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Identifiers of the messages to be deleted */
  readonly message_ids?: ReadonlyArray<number>,
  /**
   * Pass true to try to delete messages for all chat members. Always true for supergroups,
   * channels and secret chats
   */
  readonly revoke?: boolean,
}

/**
 * Deletes all messages sent by the specified user to a chat. Supported only in supergroups;
 * requires can_delete_messages administrator privileges
 */
export type deleteChatMessagesFromUser = {
  readonly _: 'deleteChatMessagesFromUser',
  /** Chat identifier */
  readonly chat_id?: number,
  /** User identifier */
  readonly user_id?: number,
}

/**
 * Edits the text of a message (or a text of a game message). Returns the edited message
 * after the edit is completed on the server side
 */
export type editMessageText = {
  readonly _: 'editMessageText',
  /** The chat the message belongs to */
  readonly chat_id?: number,
  /** Identifier of the message */
  readonly message_id?: number,
  /** The new message reply markup; for bots only */
  readonly reply_markup?: ReplyMarkup$Input,
  /** New text content of the message. Should be of type InputMessageText */
  readonly input_message_content?: InputMessageContent$Input,
}

/**
 * Edits the message content of a live location. Messages can be edited for a limited
 * period of time specified in the live location. Returns the edited message after the
 * edit is completed on the server side
 */
export type editMessageLiveLocation = {
  readonly _: 'editMessageLiveLocation',
  /** The chat the message belongs to */
  readonly chat_id?: number,
  /** Identifier of the message */
  readonly message_id?: number,
  /** The new message reply markup; for bots only */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * New location content of the message; may be null. Pass null to stop sharing the live
   * location
   */
  readonly location?: location$Input,
}

/**
 * Edits the content of a message with an animation, an audio, a document, a photo or
 * a video. The media in the message can't be replaced if the message was set to self-destruct.
 * Media can't be replaced by self-destructing media. Media in an album can be edited
 * only to contain a photo or a video. Returns the edited message after the edit is
 * completed on the server side
 */
export type editMessageMedia = {
  readonly _: 'editMessageMedia',
  /** The chat the message belongs to */
  readonly chat_id?: number,
  /** Identifier of the message */
  readonly message_id?: number,
  /** The new message reply markup; for bots only */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * New content of the message. Must be one of the following types: InputMessageAnimation,
   * InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/**
 * Edits the message content caption. Returns the edited message after the edit is completed
 * on the server side
 */
export type editMessageCaption = {
  readonly _: 'editMessageCaption',
  /** The chat the message belongs to */
  readonly chat_id?: number,
  /** Identifier of the message */
  readonly message_id?: number,
  /** The new message reply markup; for bots only */
  readonly reply_markup?: ReplyMarkup$Input,
  /** New message content caption; 0-GetOption("message_caption_length_max") characters */
  readonly caption?: formattedText$Input,
}

/**
 * Edits the message reply markup; for bots only. Returns the edited message after the
 * edit is completed on the server side
 */
export type editMessageReplyMarkup = {
  readonly _: 'editMessageReplyMarkup',
  /** The chat the message belongs to */
  readonly chat_id?: number,
  /** Identifier of the message */
  readonly message_id?: number,
  /** The new message reply markup */
  readonly reply_markup?: ReplyMarkup$Input,
}

/** Edits the text of an inline text or game message sent via a bot; for bots only */
export type editInlineMessageText = {
  readonly _: 'editInlineMessageText',
  /** Inline message identifier */
  readonly inline_message_id?: string,
  /** The new message reply markup */
  readonly reply_markup?: ReplyMarkup$Input,
  /** New text content of the message. Should be of type InputMessageText */
  readonly input_message_content?: InputMessageContent$Input,
}

/**
 * Edits the content of a live location in an inline message sent via a bot; for bots
 * only
 */
export type editInlineMessageLiveLocation = {
  readonly _: 'editInlineMessageLiveLocation',
  /** Inline message identifier */
  readonly inline_message_id?: string,
  /** The new message reply markup */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * New location content of the message; may be null. Pass null to stop sharing the live
   * location
   */
  readonly location?: location$Input,
}

/**
 * Edits the content of a message with an animation, an audio, a document, a photo or
 * a video in an inline message sent via a bot; for bots only
 */
export type editInlineMessageMedia = {
  readonly _: 'editInlineMessageMedia',
  /** Inline message identifier */
  readonly inline_message_id?: string,
  /** The new message reply markup; for bots only */
  readonly reply_markup?: ReplyMarkup$Input,
  /**
   * New content of the message. Must be one of the following types: InputMessageAnimation,
   * InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo
   */
  readonly input_message_content?: InputMessageContent$Input,
}

/** Edits the caption of an inline message sent via a bot; for bots only */
export type editInlineMessageCaption = {
  readonly _: 'editInlineMessageCaption',
  /** Inline message identifier */
  readonly inline_message_id?: string,
  /** The new message reply markup */
  readonly reply_markup?: ReplyMarkup$Input,
  /** New message content caption; 0-GetOption("message_caption_length_max") characters */
  readonly caption?: formattedText$Input,
}

/** Edits the reply markup of an inline message sent via a bot; for bots only */
export type editInlineMessageReplyMarkup = {
  readonly _: 'editInlineMessageReplyMarkup',
  /** Inline message identifier */
  readonly inline_message_id?: string,
  /** The new message reply markup */
  readonly reply_markup?: ReplyMarkup$Input,
}

/**
 * Returns all entities (mentions, hashtags, cashtags, bot commands, URLs, and email
 * addresses) contained in the text. This is an offline method. Can be called before
 * authorization. Can be called synchronously
 */
export type getTextEntities = {
  readonly _: 'getTextEntities',
  /** The text in which to look for entites */
  readonly text?: string,
}

/**
 * Parses Bold, Italic, Code, Pre, PreCode and TextUrl entities contained in the text.
 * This is an offline method. Can be called before authorization. Can be called synchronously
 */
export type parseTextEntities = {
  readonly _: 'parseTextEntities',
  /** The text which should be parsed */
  readonly text?: string,
  /** Text parse mode */
  readonly parse_mode?: TextParseMode$Input,
}

/**
 * Returns the MIME type of a file, guessed by its extension. Returns an empty string
 * on failure. This is an offline method. Can be called before authorization. Can be
 * called synchronously
 */
export type getFileMimeType = {
  readonly _: 'getFileMimeType',
  /** The name of the file or path to the file */
  readonly file_name?: string,
}

/**
 * Returns the extension of a file, guessed by its MIME type. Returns an empty string
 * on failure. This is an offline method. Can be called before authorization. Can be
 * called synchronously
 */
export type getFileExtension = {
  readonly _: 'getFileExtension',
  /** The MIME type of the file */
  readonly mime_type?: string,
}

/**
 * Removes potentially dangerous characters from the name of a file. The encoding of
 * the file name is supposed to be UTF-8. Returns an empty string on failure. This is
 * an offline method. Can be called before authorization. Can be called synchronously
 */
export type cleanFileName = {
  readonly _: 'cleanFileName',
  /** File name or path to the file */
  readonly file_name?: string,
}

/**
 * Returns a string stored in the local database from the specified localization target
 * and language pack by its key. Returns a 404 error if the string is not found. This
 * is an offline method. Can be called before authorization. Can be called synchronously
 */
export type getLanguagePackString = {
  readonly _: 'getLanguagePackString',
  /** Path to the language pack database in which strings are stored */
  readonly language_pack_database_path?: string,
  /** Localization target to which the language pack belongs */
  readonly localization_target?: string,
  /** Language pack identifier */
  readonly language_pack_id?: string,
  /** Language pack key of the string to be returned */
  readonly key?: string,
}

/**
 * Converts a JSON-serialized string to corresponding JsonValue object. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 */
export type getJsonValue = {
  readonly _: 'getJsonValue',
  /** The JSON-serialized string */
  readonly json?: string,
}

/**
 * Converts a JsonValue object to corresponding JSON-serialized string. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 */
export type getJsonString = {
  readonly _: 'getJsonString',
  /** The JsonValue object */
  readonly json_value?: JsonValue$Input,
}

/** Changes user answer to a poll */
export type setPollAnswer = {
  readonly _: 'setPollAnswer',
  /** Identifier of the chat to which the poll belongs */
  readonly chat_id?: number,
  /** Identifier of the message containing the poll */
  readonly message_id?: number,
  /**
   * 0-based identifiers of options, chosen by the user. Currently user can't choose more
   * than 1 option
   */
  readonly option_ids?: ReadonlyArray<number>,
}

/**
 * Stops a poll. A poll in a message can be stopped when the message has can_be_edited
 * flag set
 */
export type stopPoll = {
  readonly _: 'stopPoll',
  /** Identifier of the chat to which the poll belongs */
  readonly chat_id?: number,
  /** Identifier of the message containing the poll */
  readonly message_id?: number,
  /** The new message reply markup; for bots only */
  readonly reply_markup?: ReplyMarkup$Input,
}

/**
 * Sends an inline query to a bot and returns its results. Returns an error with code
 * 502 if the bot fails to answer the query before the query timeout expires
 */
export type getInlineQueryResults = {
  readonly _: 'getInlineQueryResults',
  /** The identifier of the target bot */
  readonly bot_user_id?: number,
  /** Identifier of the chat, where the query was sent */
  readonly chat_id?: number,
  /** Location of the user, only if needed */
  readonly user_location?: location$Input,
  /** Text of the query */
  readonly query?: string,
  /** Offset of the first entry to return */
  readonly offset?: string,
}

/** Sets the result of an inline query; for bots only */
export type answerInlineQuery = {
  readonly _: 'answerInlineQuery',
  /** Identifier of the inline query */
  readonly inline_query_id?: number | string,
  /** True, if the result of the query can be cached for the specified user */
  readonly is_personal?: boolean,
  /** The results of the query */
  readonly results?: ReadonlyArray<InputInlineQueryResult$Input>,
  /** Allowed time to cache the results of the query, in seconds */
  readonly cache_time?: number,
  /** Offset for the next inline query; pass an empty string if there are no more results */
  readonly next_offset?: string,
  /**
   * If non-empty, this text should be shown on the button that opens a private chat with
   * the bot and sends a start message to the bot with the parameter switch_pm_parameter
   */
  readonly switch_pm_text?: string,
  /** The parameter for the bot start message */
  readonly switch_pm_parameter?: string,
}

/**
 * Sends a callback query to a bot and returns an answer. Returns an error with code
 * 502 if the bot fails to answer the query before the query timeout expires
 */
export type getCallbackQueryAnswer = {
  readonly _: 'getCallbackQueryAnswer',
  /** Identifier of the chat with the message */
  readonly chat_id?: number,
  /** Identifier of the message from which the query originated */
  readonly message_id?: number,
  /** Query payload */
  readonly payload?: CallbackQueryPayload$Input,
}

/** Sets the result of a callback query; for bots only */
export type answerCallbackQuery = {
  readonly _: 'answerCallbackQuery',
  /** Identifier of the callback query */
  readonly callback_query_id?: number | string,
  /** Text of the answer */
  readonly text?: string,
  /** If true, an alert should be shown to the user instead of a toast notification */
  readonly show_alert?: boolean,
  /** URL to be opened */
  readonly url?: string,
  /** Time during which the result of the query can be cached, in seconds */
  readonly cache_time?: number,
}

/** Sets the result of a shipping query; for bots only */
export type answerShippingQuery = {
  readonly _: 'answerShippingQuery',
  /** Identifier of the shipping query */
  readonly shipping_query_id?: number | string,
  /** Available shipping options */
  readonly shipping_options?: ReadonlyArray<shippingOption$Input>,
  /** An error message, empty on success */
  readonly error_message?: string,
}

/** Sets the result of a pre-checkout query; for bots only */
export type answerPreCheckoutQuery = {
  readonly _: 'answerPreCheckoutQuery',
  /** Identifier of the pre-checkout query */
  readonly pre_checkout_query_id?: number | string,
  /** An error message, empty on success */
  readonly error_message?: string,
}

/** Updates the game score of the specified user in the game; for bots only */
export type setGameScore = {
  readonly _: 'setGameScore',
  /** The chat to which the message with the game belongs */
  readonly chat_id?: number,
  /** Identifier of the message */
  readonly message_id?: number,
  /** True, if the message should be edited */
  readonly edit_message?: boolean,
  /** User identifier */
  readonly user_id?: number,
  /** The new score */
  readonly score?: number,
  /**
   * Pass true to update the score even if it decreases. If the score is 0, the user will
   * be deleted from the high score table
   */
  readonly force?: boolean,
}

/** Updates the game score of the specified user in a game; for bots only */
export type setInlineGameScore = {
  readonly _: 'setInlineGameScore',
  /** Inline message identifier */
  readonly inline_message_id?: string,
  /** True, if the message should be edited */
  readonly edit_message?: boolean,
  /** User identifier */
  readonly user_id?: number,
  /** The new score */
  readonly score?: number,
  /**
   * Pass true to update the score even if it decreases. If the score is 0, the user will
   * be deleted from the high score table
   */
  readonly force?: boolean,
}

/**
 * Returns the high scores for a game and some part of the high score table in the range
 * of the specified user; for bots only
 */
export type getGameHighScores = {
  readonly _: 'getGameHighScores',
  /** The chat that contains the message with the game */
  readonly chat_id?: number,
  /** Identifier of the message */
  readonly message_id?: number,
  /** User identifier */
  readonly user_id?: number,
}

/**
 * Returns game high scores and some part of the high score table in the range of the
 * specified user; for bots only
 */
export type getInlineGameHighScores = {
  readonly _: 'getInlineGameHighScores',
  /** Inline message identifier */
  readonly inline_message_id?: string,
  /** User identifier */
  readonly user_id?: number,
}

/**
 * Deletes the default reply markup from a chat. Must be called after a one-time keyboard
 * or a ForceReply reply markup has been used. UpdateChatReplyMarkup will be sent if
 * the reply markup will be changed
 */
export type deleteChatReplyMarkup = {
  readonly _: 'deleteChatReplyMarkup',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The message identifier of the used keyboard */
  readonly message_id?: number,
}

/** Sends a notification about user activity in a chat */
export type sendChatAction = {
  readonly _: 'sendChatAction',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The action description */
  readonly action?: ChatAction$Input,
}

/**
 * Informs TDLib that the chat is opened by the user. Many useful activities depend
 * on the chat being opened or closed (e.g., in supergroups and channels all updates
 * are received only for opened chats)
 */
export type openChat = {
  readonly _: 'openChat',
  /** Chat identifier */
  readonly chat_id?: number,
}

/**
 * Informs TDLib that the chat is closed by the user. Many useful activities depend
 * on the chat being opened or closed
 */
export type closeChat = {
  readonly _: 'closeChat',
  /** Chat identifier */
  readonly chat_id?: number,
}

/**
 * Informs TDLib that messages are being viewed by the user. Many useful activities
 * depend on whether the messages are currently being viewed or not (e.g., marking messages
 * as read, incrementing a view counter, updating a view counter, removing deleted messages
 * in supergroups and channels)
 */
export type viewMessages = {
  readonly _: 'viewMessages',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The identifiers of the messages being viewed */
  readonly message_ids?: ReadonlyArray<number>,
  /** True, if messages in closed chats should be marked as read */
  readonly force_read?: boolean,
}

/**
 * Informs TDLib that the message content has been opened (e.g., the user has opened
 * a photo, video, document, location or venue, or has listened to an audio file or
 * voice note message). An updateMessageContentOpened update will be generated if something
 * has changed
 */
export type openMessageContent = {
  readonly _: 'openMessageContent',
  /** Chat identifier of the message */
  readonly chat_id?: number,
  /** Identifier of the message with the opened content */
  readonly message_id?: number,
}

/** Marks all mentions in a chat as read */
export type readAllChatMentions = {
  readonly _: 'readAllChatMentions',
  /** Chat identifier */
  readonly chat_id?: number,
}

/** Returns an existing chat corresponding to a given user */
export type createPrivateChat = {
  readonly _: 'createPrivateChat',
  /** User identifier */
  readonly user_id?: number,
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  readonly force?: boolean,
}

/** Returns an existing chat corresponding to a known basic group */
export type createBasicGroupChat = {
  readonly _: 'createBasicGroupChat',
  /** Basic group identifier */
  readonly basic_group_id?: number,
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  readonly force?: boolean,
}

/** Returns an existing chat corresponding to a known supergroup or channel */
export type createSupergroupChat = {
  readonly _: 'createSupergroupChat',
  /** Supergroup or channel identifier */
  readonly supergroup_id?: number,
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  readonly force?: boolean,
}

/** Returns an existing chat corresponding to a known secret chat */
export type createSecretChat = {
  readonly _: 'createSecretChat',
  /** Secret chat identifier */
  readonly secret_chat_id?: number,
}

/**
 * Creates a new basic group and sends a corresponding messageBasicGroupChatCreate.
 * Returns the newly created chat
 */
export type createNewBasicGroupChat = {
  readonly _: 'createNewBasicGroupChat',
  /** Identifiers of users to be added to the basic group */
  readonly user_ids?: ReadonlyArray<number>,
  /** Title of the new basic group; 1-128 characters */
  readonly title?: string,
}

/**
 * Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate.
 * Returns the newly created chat
 */
export type createNewSupergroupChat = {
  readonly _: 'createNewSupergroupChat',
  /** Title of the new chat; 1-128 characters */
  readonly title?: string,
  /** True, if a channel chat should be created */
  readonly is_channel?: boolean,
  /** Chat description; 0-255 characters */
  readonly description?: string,
}

/** Creates a new secret chat. Returns the newly created chat */
export type createNewSecretChat = {
  readonly _: 'createNewSecretChat',
  /** Identifier of the target user */
  readonly user_id?: number,
}

/**
 * Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo
 * and messageChatUpgradeFrom. Deactivates the original basic group
 */
export type upgradeBasicGroupChatToSupergroupChat = {
  readonly _: 'upgradeBasicGroupChatToSupergroupChat',
  /** Identifier of the chat to upgrade */
  readonly chat_id?: number,
}

/**
 * Changes the chat title. Supported only for basic groups, supergroups and channels.
 * Requires administrator rights in basic groups and the appropriate administrator rights
 * in supergroups and channels. The title will not be changed until the request to the
 * server has been completed
 */
export type setChatTitle = {
  readonly _: 'setChatTitle',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New title of the chat; 1-128 characters */
  readonly title?: string,
}

/**
 * Changes the photo of a chat. Supported only for basic groups, supergroups and channels.
 * Requires administrator rights in basic groups and the appropriate administrator rights
 * in supergroups and channels. The photo will not be changed before request to the
 * server has been completed
 */
export type setChatPhoto = {
  readonly _: 'setChatPhoto',
  /** Chat identifier */
  readonly chat_id?: number,
  /**
   * New chat photo. You can use a zero InputFileId to delete the chat photo. Files that
   * are accessible only by HTTP URL are not acceptable
   */
  readonly photo?: InputFile$Input,
}

/** Changes the draft message in a chat */
export type setChatDraftMessage = {
  readonly _: 'setChatDraftMessage',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New draft message; may be null */
  readonly draft_message?: draftMessage$Input,
}

/** Changes the notification settings of a chat */
export type setChatNotificationSettings = {
  readonly _: 'setChatNotificationSettings',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New notification settings for the chat */
  readonly notification_settings?: chatNotificationSettings$Input,
}

/**
 * Changes the pinned state of a chat. You can pin up to GetOption("pinned_chat_count_max")
 * non-secret chats and the same number of secret chats
 */
export type toggleChatIsPinned = {
  readonly _: 'toggleChatIsPinned',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New value of is_pinned */
  readonly is_pinned?: boolean,
}

/** Changes the marked as unread state of a chat */
export type toggleChatIsMarkedAsUnread = {
  readonly _: 'toggleChatIsMarkedAsUnread',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New value of is_marked_as_unread */
  readonly is_marked_as_unread?: boolean,
}

/**
 * Changes the value of the default disable_notification parameter, used when a message
 * is sent to a chat
 */
export type toggleChatDefaultDisableNotification = {
  readonly _: 'toggleChatDefaultDisableNotification',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New value of default_disable_notification */
  readonly default_disable_notification?: boolean,
}

/** Changes client data associated with a chat */
export type setChatClientData = {
  readonly _: 'setChatClientData',
  /** Chat identifier */
  readonly chat_id?: number,
  /** New value of client_data */
  readonly client_data?: string,
}

/**
 * Pins a message in a chat; requires appropriate administrator rights in the group
 * or channel
 */
export type pinChatMessage = {
  readonly _: 'pinChatMessage',
  /** Identifier of the chat */
  readonly chat_id?: number,
  /** Identifier of the new pinned message */
  readonly message_id?: number,
  /** True, if there should be no notification about the pinned message */
  readonly disable_notification?: boolean,
}

/**
 * Removes the pinned message from a chat; requires appropriate administrator rights
 * in the group or channel
 */
export type unpinChatMessage = {
  readonly _: 'unpinChatMessage',
  /** Identifier of the chat */
  readonly chat_id?: number,
}

/**
 * Adds current user as a new member to a chat. Private and secret chats can't be joined
 * using this method
 */
export type joinChat = {
  readonly _: 'joinChat',
  /** Chat identifier */
  readonly chat_id?: number,
}

/**
 * Removes current user from chat members. Private and secret chats can't be left using
 * this method
 */
export type leaveChat = {
  readonly _: 'leaveChat',
  /** Chat identifier */
  readonly chat_id?: number,
}

/**
 * Adds a new member to a chat. Members can't be added to private or secret chats. Members
 * will not be added until the chat state has been synchronized with the server
 */
export type addChatMember = {
  readonly _: 'addChatMember',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Identifier of the user */
  readonly user_id?: number,
  /**
   * The number of earlier messages from the chat to be forwarded to the new member; up
   * to 100. Ignored for supergroups and channels
   */
  readonly forward_limit?: number,
}

/**
 * Adds multiple new members to a chat. Currently this option is only available for
 * supergroups and channels. This option can't be used to join a chat. Members can't
 * be added to a channel if it has more than 200 members. Members will not be added
 * until the chat state has been synchronized with the server
 */
export type addChatMembers = {
  readonly _: 'addChatMembers',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Identifiers of the users to be added to the chat */
  readonly user_ids?: ReadonlyArray<number>,
}

/**
 * Changes the status of a chat member, needs appropriate privileges. This function
 * is currently not suitable for adding new members to the chat; instead, use addChatMember.
 * The chat member status will not be changed until it has been synchronized with the
 * server
 */
export type setChatMemberStatus = {
  readonly _: 'setChatMemberStatus',
  /** Chat identifier */
  readonly chat_id?: number,
  /** User identifier */
  readonly user_id?: number,
  /** The new status of the member in the chat */
  readonly status?: ChatMemberStatus$Input,
}

/** Returns information about a single member of a chat */
export type getChatMember = {
  readonly _: 'getChatMember',
  /** Chat identifier */
  readonly chat_id?: number,
  /** User identifier */
  readonly user_id?: number,
}

/**
 * Searches for a specified query in the first name, last name and username of the members
 * of a specified chat. Requires administrator rights in channels
 */
export type searchChatMembers = {
  readonly _: 'searchChatMembers',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Query to search for */
  readonly query?: string,
  /** The maximum number of users to be returned */
  readonly limit?: number,
  /** The type of users to return. By default, chatMembersFilterMembers */
  readonly filter?: ChatMembersFilter$Input,
}

/** Returns a list of users who are administrators of the chat */
export type getChatAdministrators = {
  readonly _: 'getChatAdministrators',
  /** Chat identifier */
  readonly chat_id?: number,
}

/** Clears draft messages in all chats */
export type clearAllDraftMessages = {
  readonly _: 'clearAllDraftMessages',
  /** If true, local draft messages in secret chats will not be cleared */
  readonly exclude_secret_chats?: boolean,
}

/** Returns list of chats with non-default notification settings */
export type getChatNotificationSettingsExceptions = {
  readonly _: 'getChatNotificationSettingsExceptions',
  /** If specified, only chats from the specified scope will be returned */
  readonly scope?: NotificationSettingsScope$Input,
  /** If true, also chats with non-default sound will be returned */
  readonly compare_sound?: boolean,
}

/** Returns the notification settings for chats of a given type */
export type getScopeNotificationSettings = {
  readonly _: 'getScopeNotificationSettings',
  /** Types of chats for which to return the notification settings information */
  readonly scope?: NotificationSettingsScope$Input,
}

/** Changes notification settings for chats of a given type */
export type setScopeNotificationSettings = {
  readonly _: 'setScopeNotificationSettings',
  /** Types of chats for which to change the notification settings */
  readonly scope?: NotificationSettingsScope$Input,
  /** The new notification settings for the given scope */
  readonly notification_settings?: scopeNotificationSettings$Input,
}

/**
 * Resets all notification settings to their default values. By default, all chats are
 * unmuted, the sound is set to "default" and message previews are shown
 */
export type resetAllNotificationSettings = {
  readonly _: 'resetAllNotificationSettings',
}

/** Changes the order of pinned chats */
export type setPinnedChats = {
  readonly _: 'setPinnedChats',
  /** The new list of pinned chats */
  readonly chat_ids?: ReadonlyArray<number>,
}

/**
 * Downloads a file from the cloud. Download progress and completion of the download
 * will be notified through updateFile updates
 */
export type downloadFile = {
  readonly _: 'downloadFile',
  /** Identifier of the file to download */
  readonly file_id?: number,
  /**
   * Priority of the download (1-32). The higher the priority, the earlier the file will
   * be downloaded. If the priorities of two files are equal, then the last one for which
   * downloadFile was called will be downloaded first
   */
  readonly priority?: number,
  /** The starting position from which the file should be downloaded */
  readonly offset?: number,
  /**
   * Number of bytes which should be downloaded starting from the "offset" position before
   * the download will be automatically cancelled; use 0 to download without a limit
   */
  readonly limit?: number,
  /**
   * If false, this request returns file state just after the download has been started.
   * If true, this request returns file state only after the download has succeeded, has
   * failed, has been cancelled or a new downloadFile request with different offset/limit
   * parameters was sent
   */
  readonly synchronous?: boolean,
}

/** Returns file downloaded prefix size from a given offset */
export type getFileDownloadedPrefixSize = {
  readonly _: 'getFileDownloadedPrefixSize',
  /** Identifier of the file */
  readonly file_id?: number,
  /** Offset from which downloaded prefix size should be calculated */
  readonly offset?: number,
}

/** Stops the downloading of a file. If a file has already been downloaded, does nothing */
export type cancelDownloadFile = {
  readonly _: 'cancelDownloadFile',
  /** Identifier of a file to stop downloading */
  readonly file_id?: number,
  /**
   * Pass true to stop downloading only if it hasn't been started, i.e. request hasn't
   * been sent to server
   */
  readonly only_if_pending?: boolean,
}

/**
 * Asynchronously uploads a file to the cloud without sending it in a message. updateFile
 * will be used to notify about upload progress and successful completion of the upload.
 * The file will not have a persistent remote identifier until it will be sent in a
 * message
 */
export type uploadFile = {
  readonly _: 'uploadFile',
  /** File to upload */
  readonly file?: InputFile$Input,
  /** File type */
  readonly file_type?: FileType$Input,
  /**
   * Priority of the upload (1-32). The higher the priority, the earlier the file will
   * be uploaded. If the priorities of two files are equal, then the first one for which
   * uploadFile was called will be uploaded first
   */
  readonly priority?: number,
}

/**
 * Stops the uploading of a file. Supported only for files uploaded by using uploadFile.
 * For other files the behavior is undefined
 */
export type cancelUploadFile = {
  readonly _: 'cancelUploadFile',
  /** Identifier of the file to stop uploading */
  readonly file_id?: number,
}

/**
 * Writes a part of a generated file. This method is intended to be used only if the
 * client has no direct access to TDLib's file system, because it is usually slower
 * than a direct write to the destination file
 */
export type writeGeneratedFilePart = {
  readonly _: 'writeGeneratedFilePart',
  /** The identifier of the generation process */
  readonly generation_id?: number | string,
  /** The offset from which to write the data to the file */
  readonly offset?: number,
  /** The data to write */
  readonly data?: string,
}

/** Informs TDLib on a file generation prograss */
export type setFileGenerationProgress = {
  readonly _: 'setFileGenerationProgress',
  /** The identifier of the generation process */
  readonly generation_id?: number | string,
  /** Expected size of the generated file, in bytes; 0 if unknown */
  readonly expected_size?: number,
  /** The number of bytes already generated */
  readonly local_prefix_size?: number,
}

/** Finishes the file generation */
export type finishFileGeneration = {
  readonly _: 'finishFileGeneration',
  /** The identifier of the generation process */
  readonly generation_id?: number | string,
  /** If set, means that file generation has failed and should be terminated */
  readonly error?: error$Input,
}

/**
 * Reads a part of a file from the TDLib file cache and returns read bytes. This method
 * is intended to be used only if the client has no direct access to TDLib's file system,
 * because it is usually slower than a direct read from the file
 */
export type readFilePart = {
  readonly _: 'readFilePart',
  /** Identifier of the file. The file must be located in the TDLib file cache */
  readonly file_id?: number,
  /** The offset from which to read the file */
  readonly offset?: number,
  /**
   * Number of bytes to read. An error will be returned if there are not enough bytes
   * available in the file from the specified position. Pass 0 to read all available data
   * from the specified position
   */
  readonly count?: number,
}

/** Deletes a file from the TDLib file cache */
export type deleteFile = {
  readonly _: 'deleteFile',
  /** Identifier of the file to delete */
  readonly file_id?: number,
}

/**
 * Generates a new invite link for a chat; the previously generated link is revoked.
 * Available for basic groups, supergroups, and channels. In basic groups this can be
 * called only by the group's creator; in supergroups and channels this requires appropriate
 * administrator rights
 */
export type generateChatInviteLink = {
  readonly _: 'generateChatInviteLink',
  /** Chat identifier */
  readonly chat_id?: number,
}

/**
 * Checks the validity of an invite link for a chat and returns information about the
 * corresponding chat
 */
export type checkChatInviteLink = {
  readonly _: 'checkChatInviteLink',
  /**
   * Invite link to be checked; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/",
   * or "https://telegram.dog/joinchat/"
   */
  readonly invite_link?: string,
}

/**
 * Uses an invite link to add the current user to the chat if possible. The new member
 * will not be added until the chat state has been synchronized with the server
 */
export type joinChatByInviteLink = {
  readonly _: 'joinChatByInviteLink',
  /**
   * Invite link to import; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/",
   * or "https://telegram.dog/joinchat/"
   */
  readonly invite_link?: string,
}

/** Creates a new call */
export type createCall = {
  readonly _: 'createCall',
  /** Identifier of the user to be called */
  readonly user_id?: number,
  /** Description of the call protocols supported by the client */
  readonly protocol?: callProtocol$Input,
}

/** Accepts an incoming call */
export type acceptCall = {
  readonly _: 'acceptCall',
  /** Call identifier */
  readonly call_id?: number,
  /** Description of the call protocols supported by the client */
  readonly protocol?: callProtocol$Input,
}

/** Discards a call */
export type discardCall = {
  readonly _: 'discardCall',
  /** Call identifier */
  readonly call_id?: number,
  /** True, if the user was disconnected */
  readonly is_disconnected?: boolean,
  /** The call duration, in seconds */
  readonly duration?: number,
  /** Identifier of the connection used during the call */
  readonly connection_id?: number | string,
}

/** Sends a call rating */
export type sendCallRating = {
  readonly _: 'sendCallRating',
  /** Call identifier */
  readonly call_id?: number,
  /** Call rating; 1-5 */
  readonly rating?: number,
  /** An optional user comment if the rating is less than 5 */
  readonly comment?: string,
}

/** Sends debug information for a call */
export type sendCallDebugInformation = {
  readonly _: 'sendCallDebugInformation',
  /** Call identifier */
  readonly call_id?: number,
  /** Debug information in application-specific format */
  readonly debug_information?: string,
}

/** Adds a user to the blacklist */
export type blockUser = {
  readonly _: 'blockUser',
  /** User identifier */
  readonly user_id?: number,
}

/** Removes a user from the blacklist */
export type unblockUser = {
  readonly _: 'unblockUser',
  /** User identifier */
  readonly user_id?: number,
}

/** Returns users that were blocked by the current user */
export type getBlockedUsers = {
  readonly _: 'getBlockedUsers',
  /** Number of users to skip in the result; must be non-negative */
  readonly offset?: number,
  /** Maximum number of users to return; up to 100 */
  readonly limit?: number,
}

/** Adds new contacts or edits existing contacts; contacts' user identifiers are ignored */
export type importContacts = {
  readonly _: 'importContacts',
  /** The list of contacts to import or edit, contact's vCard are ignored and are not imported */
  readonly contacts?: ReadonlyArray<contact$Input>,
}

/** Returns all user contacts */
export type getContacts = {
  readonly _: 'getContacts',
}

/**
 * Searches for the specified query in the first names, last names and usernames of
 * the known user contacts
 */
export type searchContacts = {
  readonly _: 'searchContacts',
  /** Query to search for; may be empty to return all contacts */
  readonly query?: string,
  /** Maximum number of users to be returned */
  readonly limit?: number,
}

/** Removes users from the contact list */
export type removeContacts = {
  readonly _: 'removeContacts',
  /** Identifiers of users to be deleted */
  readonly user_ids?: ReadonlyArray<number>,
}

/** Returns the total number of imported contacts */
export type getImportedContactCount = {
  readonly _: 'getImportedContactCount',
}

/**
 * Changes imported contacts using the list of current user contacts saved on the device.
 * Imports newly added contacts and, if at least the file database is enabled, deletes
 * recently deleted contacts. Query result depends on the result of the previous query,
 * so only one query is possible at the same time
 */
export type changeImportedContacts = {
  readonly _: 'changeImportedContacts',
  /** The new list of contacts, contact's vCard are ignored and are not imported */
  readonly contacts?: ReadonlyArray<contact$Input>,
}

/** Clears all imported contacts, contact list remains unchanged */
export type clearImportedContacts = {
  readonly _: 'clearImportedContacts',
}

/**
 * Returns the profile photos of a user. The result of this query may be outdated: some
 * photos might have been deleted already
 */
export type getUserProfilePhotos = {
  readonly _: 'getUserProfilePhotos',
  /** User identifier */
  readonly user_id?: number,
  /** The number of photos to skip; must be non-negative */
  readonly offset?: number,
  /** Maximum number of photos to be returned; up to 100 */
  readonly limit?: number,
}

/**
 * Returns stickers from the installed sticker sets that correspond to a given emoji.
 * If the emoji is not empty, favorite and recently used stickers may also be returned
 */
export type getStickers = {
  readonly _: 'getStickers',
  /** String representation of emoji. If empty, returns all known installed stickers */
  readonly emoji?: string,
  /** Maximum number of stickers to be returned */
  readonly limit?: number,
}

/** Searches for stickers from public sticker sets that correspond to a given emoji */
export type searchStickers = {
  readonly _: 'searchStickers',
  /** String representation of emoji; must be non-empty */
  readonly emoji?: string,
  /** Maximum number of stickers to be returned */
  readonly limit?: number,
}

/** Returns a list of installed sticker sets */
export type getInstalledStickerSets = {
  readonly _: 'getInstalledStickerSets',
  /** Pass true to return mask sticker sets; pass false to return ordinary sticker sets */
  readonly is_masks?: boolean,
}

/** Returns a list of archived sticker sets */
export type getArchivedStickerSets = {
  readonly _: 'getArchivedStickerSets',
  /** Pass true to return mask stickers sets; pass false to return ordinary sticker sets */
  readonly is_masks?: boolean,
  /** Identifier of the sticker set from which to return the result */
  readonly offset_sticker_set_id?: number | string,
  /** Maximum number of sticker sets to return */
  readonly limit?: number,
}

/** Returns a list of trending sticker sets */
export type getTrendingStickerSets = {
  readonly _: 'getTrendingStickerSets',
}

/**
 * Returns a list of sticker sets attached to a file. Currently only photos and videos
 * can have attached sticker sets
 */
export type getAttachedStickerSets = {
  readonly _: 'getAttachedStickerSets',
  /** File identifier */
  readonly file_id?: number,
}

/** Returns information about a sticker set by its identifier */
export type getStickerSet = {
  readonly _: 'getStickerSet',
  /** Identifier of the sticker set */
  readonly set_id?: number | string,
}

/** Searches for a sticker set by its name */
export type searchStickerSet = {
  readonly _: 'searchStickerSet',
  /** Name of the sticker set */
  readonly name?: string,
}

/**
 * Searches for installed sticker sets by looking for specified query in their title
 * and name
 */
export type searchInstalledStickerSets = {
  readonly _: 'searchInstalledStickerSets',
  /** Pass true to return mask sticker sets; pass false to return ordinary sticker sets */
  readonly is_masks?: boolean,
  /** Query to search for */
  readonly query?: string,
  /** Maximum number of sticker sets to return */
  readonly limit?: number,
}

/**
 * Searches for ordinary sticker sets by looking for specified query in their title
 * and name. Excludes installed sticker sets from the results
 */
export type searchStickerSets = {
  readonly _: 'searchStickerSets',
  /** Query to search for */
  readonly query?: string,
}

/** Installs/uninstalls or activates/archives a sticker set */
export type changeStickerSet = {
  readonly _: 'changeStickerSet',
  /** Identifier of the sticker set */
  readonly set_id?: number | string,
  /** The new value of is_installed */
  readonly is_installed?: boolean,
  /** The new value of is_archived. A sticker set can't be installed and archived simultaneously */
  readonly is_archived?: boolean,
}

/** Informs the server that some trending sticker sets have been viewed by the user */
export type viewTrendingStickerSets = {
  readonly _: 'viewTrendingStickerSets',
  /** Identifiers of viewed trending sticker sets */
  readonly sticker_set_ids?: ReadonlyArray<number | string>,
}

/** Changes the order of installed sticker sets */
export type reorderInstalledStickerSets = {
  readonly _: 'reorderInstalledStickerSets',
  /**
   * Pass true to change the order of mask sticker sets; pass false to change the order
   * of ordinary sticker sets
   */
  readonly is_masks?: boolean,
  /** Identifiers of installed sticker sets in the new correct order */
  readonly sticker_set_ids?: ReadonlyArray<number | string>,
}

/** Returns a list of recently used stickers */
export type getRecentStickers = {
  readonly _: 'getRecentStickers',
  /**
   * Pass true to return stickers and masks that were recently attached to photos or video
   * files; pass false to return recently sent stickers
   */
  readonly is_attached?: boolean,
}

/**
 * Manually adds a new sticker to the list of recently used stickers. The new sticker
 * is added to the top of the list. If the sticker was already in the list, it is removed
 * from the list first. Only stickers belonging to a sticker set can be added to this
 * list
 */
export type addRecentSticker = {
  readonly _: 'addRecentSticker',
  /**
   * Pass true to add the sticker to the list of stickers recently attached to photo or
   * video files; pass false to add the sticker to the list of recently sent stickers
   */
  readonly is_attached?: boolean,
  /** Sticker file to add */
  readonly sticker?: InputFile$Input,
}

/** Removes a sticker from the list of recently used stickers */
export type removeRecentSticker = {
  readonly _: 'removeRecentSticker',
  /**
   * Pass true to remove the sticker from the list of stickers recently attached to photo
   * or video files; pass false to remove the sticker from the list of recently sent stickers
   */
  readonly is_attached?: boolean,
  /** Sticker file to delete */
  readonly sticker?: InputFile$Input,
}

/** Clears the list of recently used stickers */
export type clearRecentStickers = {
  readonly _: 'clearRecentStickers',
  /**
   * Pass true to clear the list of stickers recently attached to photo or video files;
   * pass false to clear the list of recently sent stickers
   */
  readonly is_attached?: boolean,
}

/** Returns favorite stickers */
export type getFavoriteStickers = {
  readonly _: 'getFavoriteStickers',
}

/**
 * Adds a new sticker to the list of favorite stickers. The new sticker is added to
 * the top of the list. If the sticker was already in the list, it is removed from the
 * list first. Only stickers belonging to a sticker set can be added to this list
 */
export type addFavoriteSticker = {
  readonly _: 'addFavoriteSticker',
  /** Sticker file to add */
  readonly sticker?: InputFile$Input,
}

/** Removes a sticker from the list of favorite stickers */
export type removeFavoriteSticker = {
  readonly _: 'removeFavoriteSticker',
  /** Sticker file to delete from the list */
  readonly sticker?: InputFile$Input,
}

/** Returns emoji corresponding to a sticker */
export type getStickerEmojis = {
  readonly _: 'getStickerEmojis',
  /** Sticker file identifier */
  readonly sticker?: InputFile$Input,
}

/** Returns saved animations */
export type getSavedAnimations = {
  readonly _: 'getSavedAnimations',
}

/**
 * Manually adds a new animation to the list of saved animations. The new animation
 * is added to the beginning of the list. If the animation was already in the list,
 * it is removed first. Only non-secret video animations with MIME type "video/mp4"
 * can be added to the list
 */
export type addSavedAnimation = {
  readonly _: 'addSavedAnimation',
  /**
   * The animation file to be added. Only animations known to the server (i.e. successfully
   * sent via a message) can be added to the list
   */
  readonly animation?: InputFile$Input,
}

/** Removes an animation from the list of saved animations */
export type removeSavedAnimation = {
  readonly _: 'removeSavedAnimation',
  /** Animation file to be removed */
  readonly animation?: InputFile$Input,
}

/** Returns up to 20 recently used inline bots in the order of their last usage */
export type getRecentInlineBots = {
  readonly _: 'getRecentInlineBots',
}

/** Searches for recently used hashtags by their prefix */
export type searchHashtags = {
  readonly _: 'searchHashtags',
  /** Hashtag prefix to search for */
  readonly prefix?: string,
  /** Maximum number of hashtags to be returned */
  readonly limit?: number,
}

/** Removes a hashtag from the list of recently used hashtags */
export type removeRecentHashtag = {
  readonly _: 'removeRecentHashtag',
  /** Hashtag to delete */
  readonly hashtag?: string,
}

/**
 * Returns a web page preview by the text of the message. Do not call this function
 * too often. Returns a 404 error if the web page has no preview
 */
export type getWebPagePreview = {
  readonly _: 'getWebPagePreview',
  /** Message text with formatting */
  readonly text?: formattedText$Input,
}

/**
 * Returns an instant view version of a web page if available. Returns a 404 error if
 * the web page has no instant view page
 */
export type getWebPageInstantView = {
  readonly _: 'getWebPageInstantView',
  /** The web page URL */
  readonly url?: string,
  /** If true, the full instant view for the web page will be returned */
  readonly force_full?: boolean,
}

/**
 * Uploads a new profile photo for the current user. If something changes, updateUser
 * will be sent
 */
export type setProfilePhoto = {
  readonly _: 'setProfilePhoto',
  /** Profile photo to set. inputFileId and inputFileRemote may still be unsupported */
  readonly photo?: InputFile$Input,
}

/** Deletes a profile photo. If something changes, updateUser will be sent */
export type deleteProfilePhoto = {
  readonly _: 'deleteProfilePhoto',
  /** Identifier of the profile photo to delete */
  readonly profile_photo_id?: number | string,
}

/**
 * Changes the first and last name of the current user. If something changes, updateUser
 * will be sent
 */
export type setName = {
  readonly _: 'setName',
  /** The new value of the first name for the user; 1-64 characters */
  readonly first_name?: string,
  /** The new value of the optional last name for the user; 0-64 characters */
  readonly last_name?: string,
}

/** Changes the bio of the current user */
export type setBio = {
  readonly _: 'setBio',
  /** The new value of the user bio; 0-70 characters without line feeds */
  readonly bio?: string,
}

/**
 * Changes the username of the current user. If something changes, updateUser will be
 * sent
 */
export type setUsername = {
  readonly _: 'setUsername',
  /** The new value of the username. Use an empty string to remove the username */
  readonly username?: string,
}

/**
 * Changes the phone number of the user and sends an authentication code to the user's
 * new phone number. On success, returns information about the sent code
 */
export type changePhoneNumber = {
  readonly _: 'changePhoneNumber',
  /** The new phone number of the user in international format */
  readonly phone_number?: string,
  /** Pass true if the code can be sent via flash call to the specified phone number */
  readonly allow_flash_call?: boolean,
  /**
   * Pass true if the phone number is used on the current device. Ignored if allow_flash_call
   * is false
   */
  readonly is_current_phone_number?: boolean,
}

/**
 * Re-sends the authentication code sent to confirm a new phone number for the user.
 * Works only if the previously received authenticationCodeInfo next_code_type was not
 * null
 */
export type resendChangePhoneNumberCode = {
  readonly _: 'resendChangePhoneNumberCode',
}

/** Checks the authentication code sent to confirm a new phone number of the user */
export type checkChangePhoneNumberCode = {
  readonly _: 'checkChangePhoneNumberCode',
  /** Verification code received by SMS, phone call or flash call */
  readonly code?: string,
}

/** Returns all active sessions of the current user */
export type getActiveSessions = {
  readonly _: 'getActiveSessions',
}

/** Terminates a session of the current user */
export type terminateSession = {
  readonly _: 'terminateSession',
  /** Session identifier */
  readonly session_id?: number | string,
}

/** Terminates all other sessions of the current user */
export type terminateAllOtherSessions = {
  readonly _: 'terminateAllOtherSessions',
}

/** Returns all website where the current user used Telegram to log in */
export type getConnectedWebsites = {
  readonly _: 'getConnectedWebsites',
}

/** Disconnects website from the current user's Telegram account */
export type disconnectWebsite = {
  readonly _: 'disconnectWebsite',
  /** Website identifier */
  readonly website_id?: number | string,
}

/** Disconnects all websites from the current user's Telegram account */
export type disconnectAllWebsites = {
  readonly _: 'disconnectAllWebsites',
}

/**
 * Toggles the "All members are admins" setting in basic groups; requires creator privileges
 * in the group
 */
export type toggleBasicGroupAdministrators = {
  readonly _: 'toggleBasicGroupAdministrators',
  /** Identifier of the basic group */
  readonly basic_group_id?: number,
  /** New value of everyone_is_administrator */
  readonly everyone_is_administrator?: boolean,
}

/**
 * Changes the username of a supergroup or channel, requires creator privileges in the
 * supergroup or channel
 */
export type setSupergroupUsername = {
  readonly _: 'setSupergroupUsername',
  /** Identifier of the supergroup or channel */
  readonly supergroup_id?: number,
  /** New value of the username. Use an empty string to remove the username */
  readonly username?: string,
}

/** Changes the sticker set of a supergroup; requires appropriate rights in the supergroup */
export type setSupergroupStickerSet = {
  readonly _: 'setSupergroupStickerSet',
  /** Identifier of the supergroup */
  readonly supergroup_id?: number,
  /**
   * New value of the supergroup sticker set identifier. Use 0 to remove the supergroup
   * sticker set
   */
  readonly sticker_set_id?: number | string,
}

/**
 * Toggles whether all members of a supergroup can add new members; requires appropriate
 * administrator rights in the supergroup.
 */
export type toggleSupergroupInvites = {
  readonly _: 'toggleSupergroupInvites',
  /** Identifier of the supergroup */
  readonly supergroup_id?: number,
  /** New value of anyone_can_invite */
  readonly anyone_can_invite?: boolean,
}

/**
 * Toggles sender signatures messages sent in a channel; requires appropriate administrator
 * rights in the channel.
 */
export type toggleSupergroupSignMessages = {
  readonly _: 'toggleSupergroupSignMessages',
  /** Identifier of the channel */
  readonly supergroup_id?: number,
  /** New value of sign_messages */
  readonly sign_messages?: boolean,
}

/**
 * Toggles whether the message history of a supergroup is available to new members;
 * requires appropriate administrator rights in the supergroup.
 */
export type toggleSupergroupIsAllHistoryAvailable = {
  readonly _: 'toggleSupergroupIsAllHistoryAvailable',
  /** The identifier of the supergroup */
  readonly supergroup_id?: number,
  /** The new value of is_all_history_available */
  readonly is_all_history_available?: boolean,
}

/**
 * Changes information about a supergroup or channel; requires appropriate administrator
 * rights
 */
export type setSupergroupDescription = {
  readonly _: 'setSupergroupDescription',
  /** Identifier of the supergroup or channel */
  readonly supergroup_id?: number,
  /** New supergroup or channel description; 0-255 characters */
  readonly description?: string,
}

/**
 * Reports some messages from a user in a supergroup as spam; requires administrator
 * rights in the supergroup
 */
export type reportSupergroupSpam = {
  readonly _: 'reportSupergroupSpam',
  /** Supergroup identifier */
  readonly supergroup_id?: number,
  /** User identifier */
  readonly user_id?: number,
  /** Identifiers of messages sent in the supergroup by the user. This list must be non-empty */
  readonly message_ids?: ReadonlyArray<number>,
}

/**
 * Returns information about members or banned users in a supergroup or channel. Can
 * be used only if SupergroupFullInfo.can_get_members == true; additionally, administrator
 * privileges may be required for some filters
 */
export type getSupergroupMembers = {
  readonly _: 'getSupergroupMembers',
  /** Identifier of the supergroup or channel */
  readonly supergroup_id?: number,
  /** The type of users to return. By default, supergroupMembersRecent */
  readonly filter?: SupergroupMembersFilter$Input,
  /** Number of users to skip */
  readonly offset?: number,
  /** The maximum number of users be returned; up to 200 */
  readonly limit?: number,
}

/**
 * Deletes a supergroup or channel along with all messages in the corresponding chat.
 * This will release the supergroup or channel username and remove all members; requires
 * creator privileges in the supergroup or channel. Chats with more than 1000 members
 * can't be deleted using this method
 */
export type deleteSupergroup = {
  readonly _: 'deleteSupergroup',
  /** Identifier of the supergroup or channel */
  readonly supergroup_id?: number,
}

/** Closes a secret chat, effectively transfering its state to secretChatStateClosed */
export type closeSecretChat = {
  readonly _: 'closeSecretChat',
  /** Secret chat identifier */
  readonly secret_chat_id?: number,
}

/**
 * Returns a list of service actions taken by chat members and administrators in the
 * last 48 hours. Available only in supergroups and channels. Requires administrator
 * rights. Returns results in reverse chronological order (i. e., in order of decreasing
 * event_id)
 */
export type getChatEventLog = {
  readonly _: 'getChatEventLog',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Search query by which to filter events */
  readonly query?: string,
  /**
   * Identifier of an event from which to return results. Use 0 to get results from the
   * latest events
   */
  readonly from_event_id?: number | string,
  /** Maximum number of events to return; up to 100 */
  readonly limit?: number,
  /** The types of events to return. By default, all types will be returned */
  readonly filters?: chatEventLogFilters$Input,
  /**
   * User identifiers by which to filter events. By default, events relating to all users
   * will be returned
   */
  readonly user_ids?: ReadonlyArray<number>,
}

/**
 * Returns an invoice payment form. This method should be called when the user presses
 * inlineKeyboardButtonBuy
 */
export type getPaymentForm = {
  readonly _: 'getPaymentForm',
  /** Chat identifier of the Invoice message */
  readonly chat_id?: number,
  /** Message identifier */
  readonly message_id?: number,
}

/**
 * Validates the order information provided by a user and returns the available shipping
 * options for a flexible invoice
 */
export type validateOrderInfo = {
  readonly _: 'validateOrderInfo',
  /** Chat identifier of the Invoice message */
  readonly chat_id?: number,
  /** Message identifier */
  readonly message_id?: number,
  /** The order information, provided by the user */
  readonly order_info?: orderInfo$Input,
  /** True, if the order information can be saved */
  readonly allow_save?: boolean,
}

/** Sends a filled-out payment form to the bot for final verification */
export type sendPaymentForm = {
  readonly _: 'sendPaymentForm',
  /** Chat identifier of the Invoice message */
  readonly chat_id?: number,
  /** Message identifier */
  readonly message_id?: number,
  /** Identifier returned by ValidateOrderInfo, or an empty string */
  readonly order_info_id?: string,
  /** Identifier of a chosen shipping option, if applicable */
  readonly shipping_option_id?: string,
  /** The credentials chosen by user for payment */
  readonly credentials?: InputCredentials$Input,
}

/** Returns information about a successful payment */
export type getPaymentReceipt = {
  readonly _: 'getPaymentReceipt',
  /** Chat identifier of the PaymentSuccessful message */
  readonly chat_id?: number,
  /** Message identifier */
  readonly message_id?: number,
}

/** Returns saved order info, if any */
export type getSavedOrderInfo = {
  readonly _: 'getSavedOrderInfo',
}

/** Deletes saved order info */
export type deleteSavedOrderInfo = {
  readonly _: 'deleteSavedOrderInfo',
}

/** Deletes saved credentials for all payment provider bots */
export type deleteSavedCredentials = {
  readonly _: 'deleteSavedCredentials',
}

/** Returns a user that can be contacted to get support */
export type getSupportUser = {
  readonly _: 'getSupportUser',
}

/** Returns background wallpapers */
export type getWallpapers = {
  readonly _: 'getWallpapers',
}

/**
 * Returns information about the current localization target. This is an offline request
 * if only_local is true. Can be called before authorization
 */
export type getLocalizationTargetInfo = {
  readonly _: 'getLocalizationTargetInfo',
  /** If true, returns only locally available information without sending network requests */
  readonly only_local?: boolean,
}

/**
 * Returns information about a language pack. Returned language pack identifier may
 * be different from a provided one. Can be called before authorization
 */
export type getLanguagePackInfo = {
  readonly _: 'getLanguagePackInfo',
  /** Language pack identifier */
  readonly language_pack_id?: string,
}

/**
 * Returns strings from a language pack in the current localization target by their
 * keys. Can be called before authorization
 */
export type getLanguagePackStrings = {
  readonly _: 'getLanguagePackStrings',
  /** Language pack identifier of the strings to be returned */
  readonly language_pack_id?: string,
  /**
   * Language pack keys of the strings to be returned; leave empty to request all available
   * strings
   */
  readonly keys?: ReadonlyArray<string>,
}

/**
 * Fetches the latest versions of all strings from a language pack in the current localization
 * target from the server. This method doesn't need to be called explicitly for the
 * current used/base language packs. Can be called before authorization
 */
export type synchronizeLanguagePack = {
  readonly _: 'synchronizeLanguagePack',
  /** Language pack identifier */
  readonly language_pack_id?: string,
}

/**
 * Adds a custom server language pack to the list of installed language packs in current
 * localization target. Can be called before authorization
 */
export type addCustomServerLanguagePack = {
  readonly _: 'addCustomServerLanguagePack',
  /**
   * Identifier of a language pack to be added; may be different from a name that is used
   * in an "https://t.me/setlanguage/" link
   */
  readonly language_pack_id?: string,
}

/** Adds or changes a custom local language pack to the current localization target */
export type setCustomLanguagePack = {
  readonly _: 'setCustomLanguagePack',
  /**
   * Information about the language pack. Language pack ID must start with 'X', consist
   * only of English letters, digits and hyphens, and must not exceed 64 characters. Can
   * be called before authorization
   */
  readonly info?: languagePackInfo$Input,
  /** Strings of the new language pack */
  readonly strings?: ReadonlyArray<languagePackString$Input>,
}

/**
 * Edits information about a custom local language pack in the current localization
 * target. Can be called before authorization
 */
export type editCustomLanguagePackInfo = {
  readonly _: 'editCustomLanguagePackInfo',
  /** New information about the custom local language pack */
  readonly info?: languagePackInfo$Input,
}

/**
 * Adds, edits or deletes a string in a custom local language pack. Can be called before
 * authorization
 */
export type setCustomLanguagePackString = {
  readonly _: 'setCustomLanguagePackString',
  /**
   * Identifier of a previously added custom local language pack in the current localization
   * target
   */
  readonly language_pack_id?: string,
  /** New language pack string */
  readonly new_string?: languagePackString$Input,
}

/**
 * Deletes all information about a language pack in the current localization target.
 * The language pack which is currently in use (including base language pack) or is
 * being synchronized can't be deleted. Can be called before authorization
 */
export type deleteLanguagePack = {
  readonly _: 'deleteLanguagePack',
  /** Identifier of the language pack to delete */
  readonly language_pack_id?: string,
}

/**
 * Registers the currently used device for receiving push notifications. Returns a globally
 * unique identifier of the push notification subscription
 */
export type registerDevice = {
  readonly _: 'registerDevice',
  /** Device token */
  readonly device_token?: DeviceToken$Input,
  /** List of user identifiers of other users currently using the client */
  readonly other_user_ids?: ReadonlyArray<number>,
}

/**
 * Handles a push notification. Returns error with code 406 if the push notification
 * is not supported and connection to the server is required to fetch new data. Can
 * be called before authorization
 */
export type processPushNotification = {
  readonly _: 'processPushNotification',
  /**
   * JSON-encoded push notification payload with all fields sent by the server, and "google.sent_time"
   * and "google.notification.sound" fields added
   */
  readonly payload?: string,
}

/**
 * Returns a globally unique push notification subscription identifier for identification
 * of an account, which has received a push notification. This is an offline method.
 * Can be called before authorization. Can be called synchronously
 */
export type getPushReceiverId = {
  readonly _: 'getPushReceiverId',
  /** JSON-encoded push notification payload */
  readonly payload?: string,
}

/** Returns t.me URLs recently visited by a newly registered user */
export type getRecentlyVisitedTMeUrls = {
  readonly _: 'getRecentlyVisitedTMeUrls',
  /** Google Play referrer to identify the user */
  readonly referrer?: string,
}

/** Changes user privacy settings */
export type setUserPrivacySettingRules = {
  readonly _: 'setUserPrivacySettingRules',
  /** The privacy setting */
  readonly setting?: UserPrivacySetting$Input,
  /** The new privacy rules */
  readonly rules?: userPrivacySettingRules$Input,
}

/** Returns the current privacy settings */
export type getUserPrivacySettingRules = {
  readonly _: 'getUserPrivacySettingRules',
  /** The privacy setting */
  readonly setting?: UserPrivacySetting$Input,
}

/**
 * Returns the value of an option by its name. (Check the list of available options
 * on https://core.telegram.org/tdlib/options.) Can be called before authorization
 */
export type getOption = {
  readonly _: 'getOption',
  /** The name of the option */
  readonly name?: string,
}

/**
 * Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.)
 * Only writable options can be set. Can be called before authorization
 */
export type setOption = {
  readonly _: 'setOption',
  /** The name of the option */
  readonly name?: string,
  /** The new value of the option */
  readonly value?: OptionValue$Input,
}

/**
 * Changes the period of inactivity after which the account of the current user will
 * automatically be deleted
 */
export type setAccountTtl = {
  readonly _: 'setAccountTtl',
  /** New account TTL */
  readonly ttl?: accountTtl$Input,
}

/**
 * Returns the period of inactivity after which the account of the current user will
 * automatically be deleted
 */
export type getAccountTtl = {
  readonly _: 'getAccountTtl',
}

/**
 * Deletes the account of the current user, deleting all information associated with
 * the user from the server. The phone number of the account can be used to create a
 * new account. Can be called before authorization when the current authorization state
 * is authorizationStateWaitPassword
 */
export type deleteAccount = {
  readonly _: 'deleteAccount',
  /** The reason why the account was deleted; optional */
  readonly reason?: string,
}

/** Returns information on whether the current chat can be reported as spam */
export type getChatReportSpamState = {
  readonly _: 'getChatReportSpamState',
  /** Chat identifier */
  readonly chat_id?: number,
}

/**
 * Reports to the server whether a chat is a spam chat or not. Can be used only if ChatReportSpamState.can_report_spam
 * is true. After this request, ChatReportSpamState.can_report_spam becomes false forever
 */
export type changeChatReportSpamState = {
  readonly _: 'changeChatReportSpamState',
  /** Chat identifier */
  readonly chat_id?: number,
  /** If true, the chat will be reported as spam; otherwise it will be marked as not spam */
  readonly is_spam_chat?: boolean,
}

/**
 * Reports a chat to the Telegram moderators. Supported only for supergroups, channels,
 * or private chats with bots, since other chats can't be checked by moderators
 */
export type reportChat = {
  readonly _: 'reportChat',
  /** Chat identifier */
  readonly chat_id?: number,
  /** The reason for reporting the chat */
  readonly reason?: ChatReportReason$Input,
  /** Identifiers of reported messages, if any */
  readonly message_ids?: ReadonlyArray<number>,
}

/**
 * Returns URL with the chat statistics. Currently this method can be used only for
 * channels
 */
export type getChatStatisticsUrl = {
  readonly _: 'getChatStatisticsUrl',
  /** Chat identifier */
  readonly chat_id?: number,
  /** Parameters from "tg://statsrefresh?params=******" link */
  readonly parameters?: string,
  /** Pass true if a URL with the dark theme must be returned */
  readonly is_dark?: boolean,
}

/** Returns storage usage statistics. Can be called before authorization */
export type getStorageStatistics = {
  readonly _: 'getStorageStatistics',
  /**
   * Maximum number of chats with the largest storage usage for which separate statistics
   * should be returned. All other chats will be grouped in entries with chat_id == 0.
   * If the chat info database is not used, the chat_limit is ignored and is always set
   * to 0
   */
  readonly chat_limit?: number,
}

/** Quickly returns approximate storage usage statistics. Can be called before authorization */
export type getStorageStatisticsFast = {
  readonly _: 'getStorageStatisticsFast',
}

/** Returns database statistics */
export type getDatabaseStatistics = {
  readonly _: 'getDatabaseStatistics',
}

/**
 * Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics.
 * Secret thumbnails can't be deleted
 */
export type optimizeStorage = {
  readonly _: 'optimizeStorage',
  /** Limit on the total size of files after deletion. Pass -1 to use the default limit */
  readonly size?: number,
  /**
   * Limit on the time that has passed since the last time a file was accessed (or creation
   * time for some filesystems). Pass -1 to use the default limit
   */
  readonly ttl?: number,
  /** Limit on the total count of files after deletion. Pass -1 to use the default limit */
  readonly count?: number,
  /**
   * The amount of time after the creation of a file during which it can't be deleted,
   * in seconds. Pass -1 to use the default value
   */
  readonly immunity_delay?: number,
  /**
   * If not empty, only files with the given type(s) are considered. By default, all types
   * except thumbnails, profile photos, stickers and wallpapers are deleted
   */
  readonly file_types?: ReadonlyArray<FileType$Input>,
  /**
   * If not empty, only files from the given chats are considered. Use 0 as chat identifier
   * to delete files not belonging to any chat (e.g., profile photos)
   */
  readonly chat_ids?: ReadonlyArray<number>,
  /**
   * If not empty, files from the given chats are excluded. Use 0 as chat identifier to
   * exclude all files not belonging to any chat (e.g., profile photos)
   */
  readonly exclude_chat_ids?: ReadonlyArray<number>,
  /** Same as in getStorageStatistics. Affects only returned statistics */
  readonly chat_limit?: number,
}

/**
 * Sets the current network type. Can be called before authorization. Calling this method
 * forces all network connections to reopen, mitigating the delay in switching between
 * different networks, so it should be called whenever the network is changed, even
 * if the network type remains the same. Network type is used to check whether the library
 * can use the network at all and also for collecting detailed network data usage statistics
 */
export type setNetworkType = {
  readonly _: 'setNetworkType',
  /** The new network type. By default, networkTypeOther */
  readonly type?: NetworkType$Input,
}

/** Returns network data usage statistics. Can be called before authorization */
export type getNetworkStatistics = {
  readonly _: 'getNetworkStatistics',
  /** If true, returns only data for the current library launch */
  readonly only_current?: boolean,
}

/** Adds the specified data to data usage statistics. Can be called before authorization */
export type addNetworkStatistics = {
  readonly _: 'addNetworkStatistics',
  /** The network statistics entry with the data to be added to statistics */
  readonly entry?: NetworkStatisticsEntry$Input,
}

/** Resets all network data usage statistics to zero. Can be called before authorization */
export type resetNetworkStatistics = {
  readonly _: 'resetNetworkStatistics',
}

/** Returns one of the available Telegram Passport elements */
export type getPassportElement = {
  readonly _: 'getPassportElement',
  /** Telegram Passport element type */
  readonly type?: PassportElementType$Input,
  /** Password of the current user */
  readonly password?: string,
}

/** Returns all available Telegram Passport elements */
export type getAllPassportElements = {
  readonly _: 'getAllPassportElements',
  /** Password of the current user */
  readonly password?: string,
}

/**
 * Adds an element to the user's Telegram Passport. May return an error with a message
 * "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number
 * or the chosen email address must be verified first
 */
export type setPassportElement = {
  readonly _: 'setPassportElement',
  /** Input Telegram Passport element */
  readonly element?: InputPassportElement$Input,
  /** Password of the current user */
  readonly password?: string,
}

/** Deletes a Telegram Passport element */
export type deletePassportElement = {
  readonly _: 'deletePassportElement',
  /** Element type */
  readonly type?: PassportElementType$Input,
}

/**
 * Informs the user that some of the elements in their Telegram Passport contain errors;
 * for bots only. The user will not be able to resend the elements, until the errors
 * are fixed
 */
export type setPassportElementErrors = {
  readonly _: 'setPassportElementErrors',
  /** User identifier */
  readonly user_id?: number,
  /** The errors */
  readonly errors?: ReadonlyArray<inputPassportElementError$Input>,
}

/**
 * Returns an IETF language tag of the language preferred in the country, which should
 * be used to fill native fields in Telegram Passport personal details. Returns a 404
 * error if unknown
 */
export type getPreferredCountryLanguage = {
  readonly _: 'getPreferredCountryLanguage',
  /** A two-letter ISO 3166-1 alpha-2 country code */
  readonly country_code?: string,
}

/** Sends a code to verify a phone number to be added to a user's Telegram Passport */
export type sendPhoneNumberVerificationCode = {
  readonly _: 'sendPhoneNumberVerificationCode',
  /** The phone number of the user, in international format */
  readonly phone_number?: string,
  /**
   * Pass true if the authentication code may be sent via flash call to the specified
   * phone number
   */
  readonly allow_flash_call?: boolean,
  /**
   * Pass true if the phone number is used on the current device. Ignored if allow_flash_call
   * is false
   */
  readonly is_current_phone_number?: boolean,
}

/** Re-sends the code to verify a phone number to be added to a user's Telegram Passport */
export type resendPhoneNumberVerificationCode = {
  readonly _: 'resendPhoneNumberVerificationCode',
}

/** Checks the phone number verification code for Telegram Passport */
export type checkPhoneNumberVerificationCode = {
  readonly _: 'checkPhoneNumberVerificationCode',
  /** Verification code */
  readonly code?: string,
}

/** Sends a code to verify an email address to be added to a user's Telegram Passport */
export type sendEmailAddressVerificationCode = {
  readonly _: 'sendEmailAddressVerificationCode',
  /** Email address */
  readonly email_address?: string,
}

/** Re-sends the code to verify an email address to be added to a user's Telegram Passport */
export type resendEmailAddressVerificationCode = {
  readonly _: 'resendEmailAddressVerificationCode',
}

/** Checks the email address verification code for Telegram Passport */
export type checkEmailAddressVerificationCode = {
  readonly _: 'checkEmailAddressVerificationCode',
  /** Verification code */
  readonly code?: string,
}

/** Returns a Telegram Passport authorization form for sharing data with a service */
export type getPassportAuthorizationForm = {
  readonly _: 'getPassportAuthorizationForm',
  /** User identifier of the service's bot */
  readonly bot_user_id?: number,
  /** Telegram Passport element types requested by the service */
  readonly scope?: string,
  /** Service's public_key */
  readonly public_key?: string,
  /** Authorization form nonce provided by the service */
  readonly nonce?: string,
}

/**
 * Returns already available Telegram Passport elements suitable for completing a Telegram
 * Passport authorization form. Result can be received only once for each authorization
 * form
 */
export type getPassportAuthorizationFormAvailableElements = {
  readonly _: 'getPassportAuthorizationFormAvailableElements',
  /** Authorization form identifier */
  readonly autorization_form_id?: number,
  /** Password of the current user */
  readonly password?: string,
}

/**
 * Sends a Telegram Passport authorization form, effectively sharing data with the service.
 * This method must be called after getPassportAuthorizationFormAvailableElements if
 * some previously available elements need to be used
 */
export type sendPassportAuthorizationForm = {
  readonly _: 'sendPassportAuthorizationForm',
  /** Authorization form identifier */
  readonly autorization_form_id?: number,
  /**
   * Types of Telegram Passport elements chosen by user to complete the authorization
   * form
   */
  readonly types?: ReadonlyArray<PassportElementType$Input>,
}

/**
 * Sends phone number confirmation code. Should be called when user presses "https://t.me/confirmphone?phone=*******&hash=**********"
 * or "tg://confirmphone?phone=*******&hash=**********" link
 */
export type sendPhoneNumberConfirmationCode = {
  readonly _: 'sendPhoneNumberConfirmationCode',
  /** Value of the "hash" parameter from the link */
  readonly hash?: string,
  /** Value of the "phone" parameter from the link */
  readonly phone_number?: string,
  /**
   * Pass true if the authentication code may be sent via flash call to the specified
   * phone number
   */
  readonly allow_flash_call?: boolean,
  /**
   * Pass true if the phone number is used on the current device. Ignored if allow_flash_call
   * is false
   */
  readonly is_current_phone_number?: boolean,
}

/** Resends phone number confirmation code */
export type resendPhoneNumberConfirmationCode = {
  readonly _: 'resendPhoneNumberConfirmationCode',
}

/** Checks phone number confirmation code */
export type checkPhoneNumberConfirmationCode = {
  readonly _: 'checkPhoneNumberConfirmationCode',
  /** The phone number confirmation code */
  readonly code?: string,
}

/**
 * Informs the server about the number of pending bot updates if they haven't been processed
 * for a long time; for bots only
 */
export type setBotUpdatesStatus = {
  readonly _: 'setBotUpdatesStatus',
  /** The number of pending updates */
  readonly pending_update_count?: number,
  /** The last error message */
  readonly error_message?: string,
}

/** Uploads a PNG image with a sticker; for bots only; returns the uploaded file */
export type uploadStickerFile = {
  readonly _: 'uploadStickerFile',
  /** Sticker file owner */
  readonly user_id?: number,
  /** PNG image with the sticker; must be up to 512 kB in size and fit in 512x512 square */
  readonly png_sticker?: InputFile$Input,
}

/** Creates a new sticker set; for bots only. Returns the newly created sticker set */
export type createNewStickerSet = {
  readonly _: 'createNewStickerSet',
  /** Sticker set owner */
  readonly user_id?: number,
  /** Sticker set title; 1-64 characters */
  readonly title?: string,
  /**
   * Sticker set name. Can contain only English letters, digits and underscores. Must
   * end with *"_by_<bot username>"* (*<bot_username>* is case insensitive); 1-64 characters
   */
  readonly name?: string,
  /** True, if stickers are masks */
  readonly is_masks?: boolean,
  /** List of stickers to be added to the set */
  readonly stickers?: ReadonlyArray<inputSticker$Input>,
}

/** Adds a new sticker to a set; for bots only. Returns the sticker set */
export type addStickerToSet = {
  readonly _: 'addStickerToSet',
  /** Sticker set owner */
  readonly user_id?: number,
  /** Sticker set name */
  readonly name?: string,
  /** Sticker to add to the set */
  readonly sticker?: inputSticker$Input,
}

/**
 * Changes the position of a sticker in the set to which it belongs; for bots only.
 * The sticker set must have been created by the bot
 */
export type setStickerPositionInSet = {
  readonly _: 'setStickerPositionInSet',
  /** Sticker */
  readonly sticker?: InputFile$Input,
  /** New position of the sticker in the set, zero-based */
  readonly position?: number,
}

/**
 * Removes a sticker from the set to which it belongs; for bots only. The sticker set
 * must have been created by the bot
 */
export type removeStickerFromSet = {
  readonly _: 'removeStickerFromSet',
  /** Sticker */
  readonly sticker?: InputFile$Input,
}

/**
 * Returns information about a file with a map thumbnail in PNG format. Only map thumbnail
 * files with size less than 1MB can be downloaded
 */
export type getMapThumbnailFile = {
  readonly _: 'getMapThumbnailFile',
  /** Location of the map center */
  readonly location?: location$Input,
  /** Map zoom level; 13-20 */
  readonly zoom?: number,
  /** Map width in pixels before applying scale; 16-1024 */
  readonly width?: number,
  /** Map height in pixels before applying scale; 16-1024 */
  readonly height?: number,
  /** Map scale; 1-3 */
  readonly scale?: number,
  /** Identifier of a chat, in which the thumbnail will be shown. Use 0 if unknown */
  readonly chat_id?: number,
}

/** Accepts Telegram terms of services */
export type acceptTermsOfService = {
  readonly _: 'acceptTermsOfService',
  /** Terms of service identifier */
  readonly terms_of_service_id?: string,
}

/** Sends a custom request; for bots only */
export type sendCustomRequest = {
  readonly _: 'sendCustomRequest',
  /** The method name */
  readonly method?: string,
  /** JSON-serialized method parameters */
  readonly parameters?: string,
}

/** Answers a custom query; for bots only */
export type answerCustomQuery = {
  readonly _: 'answerCustomQuery',
  /** Identifier of a custom query */
  readonly custom_query_id?: number | string,
  /** JSON-serialized answer to the query */
  readonly data?: string,
}

/**
 * Succeeds after a specified amount of time has passed. Can be called before authorization.
 * Can be called before initialization
 */
export type setAlarm = {
  readonly _: 'setAlarm',
  /** Number of seconds before the function returns */
  readonly seconds?: number,
}

/**
 * Uses current user IP to found his country. Returns two-letter ISO 3166-1 alpha-2
 * country code. Can be called before authorization
 */
export type getCountryCode = {
  readonly _: 'getCountryCode',
}

/**
 * Returns the default text for invitation messages to be used as a placeholder when
 * the current user invites friends to Telegram
 */
export type getInviteText = {
  readonly _: 'getInviteText',
}

/**
 * Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature"
 * or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links.
 * Can be called before authorization
 */
export type getDeepLinkInfo = {
  readonly _: 'getDeepLinkInfo',
  /** The link */
  readonly link?: string,
}

/** Returns application config, provided by the server. Can be called before authorization */
export type getApplicationConfig = {
  readonly _: 'getApplicationConfig',
}

/** Saves application log event on the server. Can be called before authorization */
export type saveApplicationLogEvent = {
  readonly _: 'saveApplicationLogEvent',
  /** Event type */
  readonly type?: string,
  /** Optional chat identifier, associated with the event */
  readonly chat_id?: number,
  /** The log event data */
  readonly data?: JsonValue$Input,
}

/** Adds a proxy server for network requests. Can be called before authorization */
export type addProxy = {
  readonly _: 'addProxy',
  /** Proxy server IP address */
  readonly server?: string,
  /** Proxy server port */
  readonly port?: number,
  /** True, if the proxy should be enabled */
  readonly enable?: boolean,
  /** Proxy type */
  readonly type?: ProxyType$Input,
}

/** Edits an existing proxy server for network requests. Can be called before authorization */
export type editProxy = {
  readonly _: 'editProxy',
  /** Proxy identifier */
  readonly proxy_id?: number,
  /** Proxy server IP address */
  readonly server?: string,
  /** Proxy server port */
  readonly port?: number,
  /** True, if the proxy should be enabled */
  readonly enable?: boolean,
  /** Proxy type */
  readonly type?: ProxyType$Input,
}

/** Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization */
export type enableProxy = {
  readonly _: 'enableProxy',
  /** Proxy identifier */
  readonly proxy_id?: number,
}

/** Disables the currently enabled proxy. Can be called before authorization */
export type disableProxy = {
  readonly _: 'disableProxy',
}

/** Removes a proxy server. Can be called before authorization */
export type removeProxy = {
  readonly _: 'removeProxy',
  /** Proxy identifier */
  readonly proxy_id?: number,
}

/** Returns list of proxies that are currently set up. Can be called before authorization */
export type getProxies = {
  readonly _: 'getProxies',
}

/**
 * Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5
 * and MTProto proxies. Can be called before authorization
 */
export type getProxyLink = {
  readonly _: 'getProxyLink',
  /** Proxy identifier */
  readonly proxy_id?: number,
}

/**
 * Computes time needed to receive a response from a Telegram server through a proxy.
 * Can be called before authorization
 */
export type pingProxy = {
  readonly _: 'pingProxy',
  /** Proxy identifier. Use 0 to ping a Telegram server without a proxy */
  readonly proxy_id?: number,
}

/**
 * Sets new log stream for internal logging of TDLib. This is an offline method. Can
 * be called before authorization. Can be called synchronously
 */
export type setLogStream = {
  readonly _: 'setLogStream',
  /** New log stream */
  readonly log_stream?: LogStream$Input,
}

/**
 * Returns information about currently used log stream for internal logging of TDLib.
 * This is an offline method. Can be called before authorization. Can be called synchronously
 */
export type getLogStream = {
  readonly _: 'getLogStream',
}

/**
 * Sets the verbosity level of the internal logging of TDLib. This is an offline method.
 * Can be called before authorization. Can be called synchronously
 */
export type setLogVerbosityLevel = {
  readonly _: 'setLogVerbosityLevel',
  /**
   * New value of the verbosity level for logging. Value 0 corresponds to fatal errors,
   * value 1 corresponds to errors, value 2 corresponds to warnings and debug warnings,
   * value 3 corresponds to informational, value 4 corresponds to debug, value 5 corresponds
   * to verbose debug, value greater than 5 and up to 1023 can be used to enable even
   * more logging
   */
  readonly new_verbosity_level?: number,
}

/**
 * Returns current verbosity level of the internal logging of TDLib. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 */
export type getLogVerbosityLevel = {
  readonly _: 'getLogVerbosityLevel',
}

/**
 * Returns list of available TDLib internal log tags, for example, ["actor", "binlog",
 * "connections", "notifications", "proxy"]. This is an offline method. Can be called
 * before authorization. Can be called synchronously
 */
export type getLogTags = {
  readonly _: 'getLogTags',
}

/**
 * Sets the verbosity level for a specified TDLib internal log tag. This is an offline
 * method. Can be called before authorization. Can be called synchronously
 */
export type setLogTagVerbosityLevel = {
  readonly _: 'setLogTagVerbosityLevel',
  /** Logging tag to change verbosity level */
  readonly tag?: string,
  /** New verbosity level; 1-1024 */
  readonly new_verbosity_level?: number,
}

/**
 * Returns current verbosity level for a specified TDLib internal log tag. This is an
 * offline method. Can be called before authorization. Can be called synchronously
 */
export type getLogTagVerbosityLevel = {
  readonly _: 'getLogTagVerbosityLevel',
  /** Logging tag to change verbosity level */
  readonly tag?: string,
}

/**
 * Adds a message to TDLib internal log. This is an offline method. Can be called before
 * authorization. Can be called synchronously
 */
export type addLogMessage = {
  readonly _: 'addLogMessage',
  /** Minimum verbosity level needed for the message to be logged, 0-1023 */
  readonly verbosity_level?: number,
  /** Text of a message to log */
  readonly text?: string,
}

/** Does nothing; for testing only. This is an offline method. Can be called before authorization */
export type testCallEmpty = {
  readonly _: 'testCallEmpty',
}

/**
 * Returns the received string; for testing only. This is an offline method. Can be
 * called before authorization
 */
export type testCallString = {
  readonly _: 'testCallString',
  /** String to return */
  readonly x?: string,
}

/**
 * Returns the received bytes; for testing only. This is an offline method. Can be called
 * before authorization
 */
export type testCallBytes = {
  readonly _: 'testCallBytes',
  /** Bytes to return */
  readonly x?: string,
}

/**
 * Returns the received vector of numbers; for testing only. This is an offline method.
 * Can be called before authorization
 */
export type testCallVectorInt = {
  readonly _: 'testCallVectorInt',
  /** Vector of numbers to return */
  readonly x?: ReadonlyArray<number>,
}

/**
 * Returns the received vector of objects containing a number; for testing only. This
 * is an offline method. Can be called before authorization
 */
export type testCallVectorIntObject = {
  readonly _: 'testCallVectorIntObject',
  /** Vector of objects to return */
  readonly x?: ReadonlyArray<testInt$Input>,
}

/**
 * Returns the received vector of strings; for testing only. This is an offline method.
 * Can be called before authorization
 */
export type testCallVectorString = {
  readonly _: 'testCallVectorString',
  /** Vector of strings to return */
  readonly x?: ReadonlyArray<string>,
}

/**
 * Returns the received vector of objects containing a string; for testing only. This
 * is an offline method. Can be called before authorization
 */
export type testCallVectorStringObject = {
  readonly _: 'testCallVectorStringObject',
  /** Vector of objects to return */
  readonly x?: ReadonlyArray<testString$Input>,
}

/**
 * Returns the squared received number; for testing only. This is an offline method.
 * Can be called before authorization
 */
export type testSquareInt = {
  readonly _: 'testSquareInt',
  /** Number to square */
  readonly x?: number,
}

/**
 * Sends a simple network request to the Telegram servers; for testing only. Can be
 * called before authorization
 */
export type testNetwork = {
  readonly _: 'testNetwork',
}

/** Forces an updates.getDifference call to the Telegram servers; for testing only */
export type testGetDifference = {
  readonly _: 'testGetDifference',
}

/**
 * Does nothing and ensures that the Update object is used; for testing only. This is
 * an offline method. Can be called before authorization
 */
export type testUseUpdate = {
  readonly _: 'testUseUpdate',
}

/**
 * Does nothing and ensures that the Error object is used; for testing only. This is
 * an offline method. Can be called before authorization
 */
export type testUseError = {
  readonly _: 'testUseError',
}

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
 * Represents the relationship between user A and user B. For incoming_link, user A
 * is the current user; for outgoing_link, user B is the current user
 */
export type LinkState =
  | linkStateNone
  | linkStateKnowsPhoneNumber
  | linkStateIsContact

/**
 * Represents the relationship between user A and user B. For incoming_link, user A
 * is the current user; for outgoing_link, user B is the current user
 */
export type LinkState$Input =
  | linkStateNone$Input
  | linkStateKnowsPhoneNumber$Input
  | linkStateIsContact$Input

/**
 * Represents the type of the user. The following types are possible: regular users,
 * deleted users and bots
 */
export type UserType =
  | userTypeRegular
  | userTypeDeleted
  | userTypeBot
  | userTypeUnknown

/**
 * Represents the type of the user. The following types are possible: regular users,
 * deleted users and bots
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
  | chatMembersFilterAdministrators
  | chatMembersFilterMembers
  | chatMembersFilterRestricted
  | chatMembersFilterBanned
  | chatMembersFilterBots

/** Specifies the kind of chat members to return in searchChatMembers */
export type ChatMembersFilter$Input =
  | chatMembersFilterAdministrators$Input
  | chatMembersFilterMembers$Input
  | chatMembersFilterRestricted$Input
  | chatMembersFilterBanned$Input
  | chatMembersFilterBots$Input

/** Specifies the kind of chat members to return in getSupergroupMembers */
export type SupergroupMembersFilter =
  | supergroupMembersFilterRecent
  | supergroupMembersFilterAdministrators
  | supergroupMembersFilterSearch
  | supergroupMembersFilterRestricted
  | supergroupMembersFilterBanned
  | supergroupMembersFilterBots

/** Specifies the kind of chat members to return in getSupergroupMembers */
export type SupergroupMembersFilter$Input =
  | supergroupMembersFilterRecent$Input
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

export type Chat =
  | chat

export type Chat$Input =
  | chat$Input

export type Chats =
  | chats

export type Chats$Input =
  | chats$Input

export type ChatInviteLink =
  | chatInviteLink

export type ChatInviteLink$Input =
  | chatInviteLink$Input

export type ChatInviteLinkInfo =
  | chatInviteLinkInfo

export type ChatInviteLinkInfo$Input =
  | chatInviteLinkInfo$Input

/** Describes a keyboard button type */
export type KeyboardButtonType =
  | keyboardButtonTypeText
  | keyboardButtonTypeRequestPhoneNumber
  | keyboardButtonTypeRequestLocation

/** Describes a keyboard button type */
export type KeyboardButtonType$Input =
  | keyboardButtonTypeText$Input
  | keyboardButtonTypeRequestPhoneNumber$Input
  | keyboardButtonTypeRequestLocation$Input

export type KeyboardButton =
  | keyboardButton

export type KeyboardButton$Input =
  | keyboardButton$Input

/** Describes the type of an inline keyboard button */
export type InlineKeyboardButtonType =
  | inlineKeyboardButtonTypeUrl
  | inlineKeyboardButtonTypeCallback
  | inlineKeyboardButtonTypeCallbackGame
  | inlineKeyboardButtonTypeSwitchInline
  | inlineKeyboardButtonTypeBuy

/** Describes the type of an inline keyboard button */
export type InlineKeyboardButtonType$Input =
  | inlineKeyboardButtonTypeUrl$Input
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
  | textEntityTypeBold
  | textEntityTypeItalic
  | textEntityTypeCode
  | textEntityTypePre
  | textEntityTypePreCode
  | textEntityTypeTextUrl
  | textEntityTypeMentionName
  | textEntityTypePhoneNumber

/** Represents a part of the text which must be formatted differently */
export type TextEntityType$Input =
  | textEntityTypeMention$Input
  | textEntityTypeHashtag$Input
  | textEntityTypeCashtag$Input
  | textEntityTypeBotCommand$Input
  | textEntityTypeUrl$Input
  | textEntityTypeEmailAddress$Input
  | textEntityTypeBold$Input
  | textEntityTypeItalic$Input
  | textEntityTypeCode$Input
  | textEntityTypePre$Input
  | textEntityTypePreCode$Input
  | textEntityTypeTextUrl$Input
  | textEntityTypeMentionName$Input
  | textEntityTypePhoneNumber$Input

export type InputThumbnail =
  | inputThumbnail

export type InputThumbnail$Input =
  | inputThumbnail$Input

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

export type StickerEmojis =
  | stickerEmojis

export type StickerEmojis$Input =
  | stickerEmojis$Input

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

export type Call =
  | call

export type Call$Input =
  | call$Input

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
  | chatEventMessagePinned
  | chatEventMessageUnpinned
  | chatEventMemberJoined
  | chatEventMemberLeft
  | chatEventMemberInvited
  | chatEventMemberPromoted
  | chatEventMemberRestricted
  | chatEventTitleChanged
  | chatEventDescriptionChanged
  | chatEventUsernameChanged
  | chatEventPhotoChanged
  | chatEventInvitesToggled
  | chatEventSignMessagesToggled
  | chatEventStickerSetChanged
  | chatEventIsAllHistoryAvailableToggled

/** Represents a chat event */
export type ChatEventAction$Input =
  | chatEventMessageEdited$Input
  | chatEventMessageDeleted$Input
  | chatEventMessagePinned$Input
  | chatEventMessageUnpinned$Input
  | chatEventMemberJoined$Input
  | chatEventMemberLeft$Input
  | chatEventMemberInvited$Input
  | chatEventMemberPromoted$Input
  | chatEventMemberRestricted$Input
  | chatEventTitleChanged$Input
  | chatEventDescriptionChanged$Input
  | chatEventUsernameChanged$Input
  | chatEventPhotoChanged$Input
  | chatEventInvitesToggled$Input
  | chatEventSignMessagesToggled$Input
  | chatEventStickerSetChanged$Input
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

export type Wallpaper =
  | wallpaper

export type Wallpaper$Input =
  | wallpaper$Input

export type Wallpapers =
  | wallpapers

export type Wallpapers$Input =
  | wallpapers$Input

export type Hashtags =
  | hashtags

export type Hashtags$Input =
  | hashtags$Input

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

/** Describes type of notifications in the group */
export type NotificationGroupType =
  | notificationGroupTypeMessages
  | notificationGroupTypeMentions
  | notificationGroupTypeSecretChat
  | notificationGroupTypeCalls

/** Describes type of notifications in the group */
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
  | userPrivacySettingRuleRestrictAll
  | userPrivacySettingRuleRestrictContacts
  | userPrivacySettingRuleRestrictUsers

/** Represents a single rule for managing privacy settings */
export type UserPrivacySettingRule$Input =
  | userPrivacySettingRuleAllowAll$Input
  | userPrivacySettingRuleAllowContacts$Input
  | userPrivacySettingRuleAllowUsers$Input
  | userPrivacySettingRuleRestrictAll$Input
  | userPrivacySettingRuleRestrictContacts$Input
  | userPrivacySettingRuleRestrictUsers$Input

export type UserPrivacySettingRules =
  | userPrivacySettingRules

export type UserPrivacySettingRules$Input =
  | userPrivacySettingRules$Input

/** Describes available user privacy settings */
export type UserPrivacySetting =
  | userPrivacySettingShowStatus
  | userPrivacySettingAllowChatInvites
  | userPrivacySettingAllowCalls
  | userPrivacySettingAllowPeerToPeerCalls

/** Describes available user privacy settings */
export type UserPrivacySetting$Input =
  | userPrivacySettingShowStatus$Input
  | userPrivacySettingAllowChatInvites$Input
  | userPrivacySettingAllowCalls$Input
  | userPrivacySettingAllowPeerToPeerCalls$Input

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

export type ChatReportSpamState =
  | chatReportSpamState

export type ChatReportSpamState$Input =
  | chatReportSpamState$Input

/** Describes the reason why a chat is reported */
export type ChatReportReason =
  | chatReportReasonSpam
  | chatReportReasonViolence
  | chatReportReasonPornography
  | chatReportReasonChildAbuse
  | chatReportReasonCopyright
  | chatReportReasonCustom

/** Describes the reason why a chat is reported */
export type ChatReportReason$Input =
  | chatReportReasonSpam$Input
  | chatReportReasonViolence$Input
  | chatReportReasonPornography$Input
  | chatReportReasonChildAbuse$Input
  | chatReportReasonCopyright$Input
  | chatReportReasonCustom$Input

export type PublicMessageLink =
  | publicMessageLink

export type PublicMessageLink$Input =
  | publicMessageLink$Input

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

/** Describes the type of the proxy server */
export type ProxyType =
  | proxyTypeSocks5
  | proxyTypeHttp
  | proxyTypeMtproto

/** Describes the type of the proxy server */
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
  | updateNewChat
  | updateChatTitle
  | updateChatPhoto
  | updateChatLastMessage
  | updateChatOrder
  | updateChatIsPinned
  | updateChatIsMarkedAsUnread
  | updateChatIsSponsored
  | updateChatDefaultDisableNotification
  | updateChatReadInbox
  | updateChatReadOutbox
  | updateChatUnreadMentionCount
  | updateChatNotificationSettings
  | updateScopeNotificationSettings
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
  | updateLanguagePackStrings
  | updateConnectionState
  | updateTermsOfService
  | updateNewInlineQuery
  | updateNewChosenInlineResult
  | updateNewCallbackQuery
  | updateNewInlineCallbackQuery
  | updateNewShippingQuery
  | updateNewPreCheckoutQuery
  | updateNewCustomEvent
  | updateNewCustomQuery
  | updatePoll

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
  | updateNewChat$Input
  | updateChatTitle$Input
  | updateChatPhoto$Input
  | updateChatLastMessage$Input
  | updateChatOrder$Input
  | updateChatIsPinned$Input
  | updateChatIsMarkedAsUnread$Input
  | updateChatIsSponsored$Input
  | updateChatDefaultDisableNotification$Input
  | updateChatReadInbox$Input
  | updateChatReadOutbox$Input
  | updateChatUnreadMentionCount$Input
  | updateChatNotificationSettings$Input
  | updateScopeNotificationSettings$Input
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
  | updateLanguagePackStrings$Input
  | updateConnectionState$Input
  | updateTermsOfService$Input
  | updateNewInlineQuery$Input
  | updateNewChosenInlineResult$Input
  | updateNewCallbackQuery$Input
  | updateNewInlineCallbackQuery$Input
  | updateNewShippingQuery$Input
  | updateNewPreCheckoutQuery$Input
  | updateNewCustomEvent$Input
  | updateNewCustomQuery$Input
  | updatePoll$Input

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
  | checkAuthenticationPassword
  | requestAuthenticationPasswordRecovery
  | recoverAuthenticationPassword
  | checkAuthenticationBotToken
  | logOut
  | close
  | destroy
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
  | getTopChats
  | removeTopChat
  | addRecentlyFoundChat
  | removeRecentlyFoundChat
  | clearRecentlyFoundChats
  | checkChatUsername
  | getCreatedPublicChats
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
  | removeNotification
  | removeNotificationGroup
  | getPublicMessageLink
  | getMessageLink
  | sendMessage
  | sendMessageAlbum
  | sendBotStartMessage
  | sendInlineQueryResultMessage
  | forwardMessages
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
  | getTextEntities
  | parseTextEntities
  | getFileMimeType
  | getFileExtension
  | cleanFileName
  | getLanguagePackString
  | getJsonValue
  | getJsonString
  | setPollAnswer
  | stopPoll
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
  | setChatTitle
  | setChatPhoto
  | setChatDraftMessage
  | setChatNotificationSettings
  | toggleChatIsPinned
  | toggleChatIsMarkedAsUnread
  | toggleChatDefaultDisableNotification
  | setChatClientData
  | pinChatMessage
  | unpinChatMessage
  | joinChat
  | leaveChat
  | addChatMember
  | addChatMembers
  | setChatMemberStatus
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
  | importContacts
  | getContacts
  | searchContacts
  | removeContacts
  | getImportedContactCount
  | changeImportedContacts
  | clearImportedContacts
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
  | toggleBasicGroupAdministrators
  | setSupergroupUsername
  | setSupergroupStickerSet
  | toggleSupergroupInvites
  | toggleSupergroupSignMessages
  | toggleSupergroupIsAllHistoryAvailable
  | setSupergroupDescription
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
  | getWallpapers
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
  | getChatReportSpamState
  | changeChatReportSpamState
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
  | testGetDifference
  | testUseUpdate
  | testUseError

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
  | MaskPoint
  | MaskPosition
  | PollOption
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
  | LinkState
  | UserType
  | BotCommand
  | BotInfo
  | User
  | UserFullInfo
  | UserProfilePhoto
  | UserProfilePhotos
  | Users
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
  | Chat
  | Chats
  | ChatInviteLink
  | ChatInviteLinkInfo
  | KeyboardButtonType
  | KeyboardButton
  | InlineKeyboardButtonType
  | InlineKeyboardButton
  | ReplyMarkup
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
  | InputMessageContent
  | SearchMessagesFilter
  | ChatAction
  | UserStatus
  | Stickers
  | StickerEmojis
  | StickerSet
  | StickerSetInfo
  | StickerSets
  | CallDiscardReason
  | CallProtocol
  | CallConnection
  | CallId
  | CallState
  | Call
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
  | Wallpaper
  | Wallpapers
  | Hashtags
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
  | ChatReportSpamState
  | ChatReportReason
  | PublicMessageLink
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
  | MaskPoint$Input
  | MaskPosition$Input
  | PollOption$Input
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
  | LinkState$Input
  | UserType$Input
  | BotCommand$Input
  | BotInfo$Input
  | User$Input
  | UserFullInfo$Input
  | UserProfilePhoto$Input
  | UserProfilePhotos$Input
  | Users$Input
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
  | Chat$Input
  | Chats$Input
  | ChatInviteLink$Input
  | ChatInviteLinkInfo$Input
  | KeyboardButtonType$Input
  | KeyboardButton$Input
  | InlineKeyboardButtonType$Input
  | InlineKeyboardButton$Input
  | ReplyMarkup$Input
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
  | InputMessageContent$Input
  | SearchMessagesFilter$Input
  | ChatAction$Input
  | UserStatus$Input
  | Stickers$Input
  | StickerEmojis$Input
  | StickerSet$Input
  | StickerSetInfo$Input
  | StickerSets$Input
  | CallDiscardReason$Input
  | CallProtocol$Input
  | CallConnection$Input
  | CallId$Input
  | CallState$Input
  | Call$Input
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
  | Wallpaper$Input
  | Wallpapers$Input
  | Hashtags$Input
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
  | ChatReportSpamState$Input
  | ChatReportReason$Input
  | PublicMessageLink$Input
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
  & ((query: checkAuthenticationPassword) => Promise<Ok>)
  & ((query: requestAuthenticationPasswordRecovery) => Promise<Ok>)
  & ((query: recoverAuthenticationPassword) => Promise<Ok>)
  & ((query: checkAuthenticationBotToken) => Promise<Ok>)
  & ((query: logOut) => Promise<Ok>)
  & ((query: close) => Promise<Ok>)
  & ((query: destroy) => Promise<Ok>)
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
  & ((query: getTopChats) => Promise<Chats>)
  & ((query: removeTopChat) => Promise<Ok>)
  & ((query: addRecentlyFoundChat) => Promise<Ok>)
  & ((query: removeRecentlyFoundChat) => Promise<Ok>)
  & ((query: clearRecentlyFoundChats) => Promise<Ok>)
  & ((query: checkChatUsername) => Promise<CheckChatUsernameResult>)
  & ((query: getCreatedPublicChats) => Promise<Chats>)
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
  & ((query: removeNotification) => Promise<Ok>)
  & ((query: removeNotificationGroup) => Promise<Ok>)
  & ((query: getPublicMessageLink) => Promise<PublicMessageLink>)
  & ((query: getMessageLink) => Promise<HttpUrl>)
  & ((query: sendMessage) => Promise<Message>)
  & ((query: sendMessageAlbum) => Promise<Messages>)
  & ((query: sendBotStartMessage) => Promise<Message>)
  & ((query: sendInlineQueryResultMessage) => Promise<Message>)
  & ((query: forwardMessages) => Promise<Messages>)
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
  & ((query: getTextEntities) => Promise<TextEntities>)
  & ((query: parseTextEntities) => Promise<FormattedText>)
  & ((query: getFileMimeType) => Promise<Text>)
  & ((query: getFileExtension) => Promise<Text>)
  & ((query: cleanFileName) => Promise<Text>)
  & ((query: getLanguagePackString) => Promise<LanguagePackStringValue>)
  & ((query: getJsonValue) => Promise<JsonValue>)
  & ((query: getJsonString) => Promise<Text>)
  & ((query: setPollAnswer) => Promise<Ok>)
  & ((query: stopPoll) => Promise<Ok>)
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
  & ((query: setChatTitle) => Promise<Ok>)
  & ((query: setChatPhoto) => Promise<Ok>)
  & ((query: setChatDraftMessage) => Promise<Ok>)
  & ((query: setChatNotificationSettings) => Promise<Ok>)
  & ((query: toggleChatIsPinned) => Promise<Ok>)
  & ((query: toggleChatIsMarkedAsUnread) => Promise<Ok>)
  & ((query: toggleChatDefaultDisableNotification) => Promise<Ok>)
  & ((query: setChatClientData) => Promise<Ok>)
  & ((query: pinChatMessage) => Promise<Ok>)
  & ((query: unpinChatMessage) => Promise<Ok>)
  & ((query: joinChat) => Promise<Ok>)
  & ((query: leaveChat) => Promise<Ok>)
  & ((query: addChatMember) => Promise<Ok>)
  & ((query: addChatMembers) => Promise<Ok>)
  & ((query: setChatMemberStatus) => Promise<Ok>)
  & ((query: getChatMember) => Promise<ChatMember>)
  & ((query: searchChatMembers) => Promise<ChatMembers>)
  & ((query: getChatAdministrators) => Promise<Users>)
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
  & ((query: importContacts) => Promise<ImportedContacts>)
  & ((query: getContacts) => Promise<Users>)
  & ((query: searchContacts) => Promise<Users>)
  & ((query: removeContacts) => Promise<Ok>)
  & ((query: getImportedContactCount) => Promise<Count>)
  & ((query: changeImportedContacts) => Promise<ImportedContacts>)
  & ((query: clearImportedContacts) => Promise<Ok>)
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
  & ((query: getStickerEmojis) => Promise<StickerEmojis>)
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
  & ((query: toggleBasicGroupAdministrators) => Promise<Ok>)
  & ((query: setSupergroupUsername) => Promise<Ok>)
  & ((query: setSupergroupStickerSet) => Promise<Ok>)
  & ((query: toggleSupergroupInvites) => Promise<Ok>)
  & ((query: toggleSupergroupSignMessages) => Promise<Ok>)
  & ((query: toggleSupergroupIsAllHistoryAvailable) => Promise<Ok>)
  & ((query: setSupergroupDescription) => Promise<Ok>)
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
  & ((query: getWallpapers) => Promise<Wallpapers>)
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
  & ((query: getChatReportSpamState) => Promise<ChatReportSpamState>)
  & ((query: changeChatReportSpamState) => Promise<Ok>)
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
  & ((query: testGetDifference) => Promise<Ok>)
  & ((query: testUseUpdate) => Promise<Update>)
  & ((query: testUseError) => Promise<Error>)

export type Execute =
  & ((query: getAuthorizationState) => AuthorizationState | error | null)
  & ((query: setTdlibParameters) => Ok | error | null)
  & ((query: checkDatabaseEncryptionKey) => Ok | error | null)
  & ((query: setAuthenticationPhoneNumber) => Ok | error | null)
  & ((query: resendAuthenticationCode) => Ok | error | null)
  & ((query: checkAuthenticationCode) => Ok | error | null)
  & ((query: checkAuthenticationPassword) => Ok | error | null)
  & ((query: requestAuthenticationPasswordRecovery) => Ok | error | null)
  & ((query: recoverAuthenticationPassword) => Ok | error | null)
  & ((query: checkAuthenticationBotToken) => Ok | error | null)
  & ((query: logOut) => Ok | error | null)
  & ((query: close) => Ok | error | null)
  & ((query: destroy) => Ok | error | null)
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
  & ((query: getTopChats) => Chats | error | null)
  & ((query: removeTopChat) => Ok | error | null)
  & ((query: addRecentlyFoundChat) => Ok | error | null)
  & ((query: removeRecentlyFoundChat) => Ok | error | null)
  & ((query: clearRecentlyFoundChats) => Ok | error | null)
  & ((query: checkChatUsername) => CheckChatUsernameResult | error | null)
  & ((query: getCreatedPublicChats) => Chats | error | null)
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
  & ((query: removeNotification) => Ok | error | null)
  & ((query: removeNotificationGroup) => Ok | error | null)
  & ((query: getPublicMessageLink) => PublicMessageLink | error | null)
  & ((query: getMessageLink) => HttpUrl | error | null)
  & ((query: sendMessage) => Message | error | null)
  & ((query: sendMessageAlbum) => Messages | error | null)
  & ((query: sendBotStartMessage) => Message | error | null)
  & ((query: sendInlineQueryResultMessage) => Message | error | null)
  & ((query: forwardMessages) => Messages | error | null)
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
  & ((query: getTextEntities) => TextEntities | error | null)
  & ((query: parseTextEntities) => FormattedText | error | null)
  & ((query: getFileMimeType) => Text | error | null)
  & ((query: getFileExtension) => Text | error | null)
  & ((query: cleanFileName) => Text | error | null)
  & ((query: getLanguagePackString) => LanguagePackStringValue | error | null)
  & ((query: getJsonValue) => JsonValue | error | null)
  & ((query: getJsonString) => Text | error | null)
  & ((query: setPollAnswer) => Ok | error | null)
  & ((query: stopPoll) => Ok | error | null)
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
  & ((query: setChatTitle) => Ok | error | null)
  & ((query: setChatPhoto) => Ok | error | null)
  & ((query: setChatDraftMessage) => Ok | error | null)
  & ((query: setChatNotificationSettings) => Ok | error | null)
  & ((query: toggleChatIsPinned) => Ok | error | null)
  & ((query: toggleChatIsMarkedAsUnread) => Ok | error | null)
  & ((query: toggleChatDefaultDisableNotification) => Ok | error | null)
  & ((query: setChatClientData) => Ok | error | null)
  & ((query: pinChatMessage) => Ok | error | null)
  & ((query: unpinChatMessage) => Ok | error | null)
  & ((query: joinChat) => Ok | error | null)
  & ((query: leaveChat) => Ok | error | null)
  & ((query: addChatMember) => Ok | error | null)
  & ((query: addChatMembers) => Ok | error | null)
  & ((query: setChatMemberStatus) => Ok | error | null)
  & ((query: getChatMember) => ChatMember | error | null)
  & ((query: searchChatMembers) => ChatMembers | error | null)
  & ((query: getChatAdministrators) => Users | error | null)
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
  & ((query: importContacts) => ImportedContacts | error | null)
  & ((query: getContacts) => Users | error | null)
  & ((query: searchContacts) => Users | error | null)
  & ((query: removeContacts) => Ok | error | null)
  & ((query: getImportedContactCount) => Count | error | null)
  & ((query: changeImportedContacts) => ImportedContacts | error | null)
  & ((query: clearImportedContacts) => Ok | error | null)
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
  & ((query: getStickerEmojis) => StickerEmojis | error | null)
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
  & ((query: toggleBasicGroupAdministrators) => Ok | error | null)
  & ((query: setSupergroupUsername) => Ok | error | null)
  & ((query: setSupergroupStickerSet) => Ok | error | null)
  & ((query: toggleSupergroupInvites) => Ok | error | null)
  & ((query: toggleSupergroupSignMessages) => Ok | error | null)
  & ((query: toggleSupergroupIsAllHistoryAvailable) => Ok | error | null)
  & ((query: setSupergroupDescription) => Ok | error | null)
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
  & ((query: getWallpapers) => Wallpapers | error | null)
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
  & ((query: getChatReportSpamState) => ChatReportSpamState | error | null)
  & ((query: changeChatReportSpamState) => Ok | error | null)
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
  & ((query: testGetDifference) => Ok | error | null)
  & ((query: testUseUpdate) => Update | error | null)
  & ((query: testUseError) => Error | error | null)

// Future<Left, Right>
import { Future } from 'fluture'

export type InvokeFuture =
  & ((query: getAuthorizationState) => Future<error, AuthorizationState>)
  & ((query: setTdlibParameters) => Future<error, Ok>)
  & ((query: checkDatabaseEncryptionKey) => Future<error, Ok>)
  & ((query: setAuthenticationPhoneNumber) => Future<error, Ok>)
  & ((query: resendAuthenticationCode) => Future<error, Ok>)
  & ((query: checkAuthenticationCode) => Future<error, Ok>)
  & ((query: checkAuthenticationPassword) => Future<error, Ok>)
  & ((query: requestAuthenticationPasswordRecovery) => Future<error, Ok>)
  & ((query: recoverAuthenticationPassword) => Future<error, Ok>)
  & ((query: checkAuthenticationBotToken) => Future<error, Ok>)
  & ((query: logOut) => Future<error, Ok>)
  & ((query: close) => Future<error, Ok>)
  & ((query: destroy) => Future<error, Ok>)
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
  & ((query: getTopChats) => Future<error, Chats>)
  & ((query: removeTopChat) => Future<error, Ok>)
  & ((query: addRecentlyFoundChat) => Future<error, Ok>)
  & ((query: removeRecentlyFoundChat) => Future<error, Ok>)
  & ((query: clearRecentlyFoundChats) => Future<error, Ok>)
  & ((query: checkChatUsername) => Future<error, CheckChatUsernameResult>)
  & ((query: getCreatedPublicChats) => Future<error, Chats>)
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
  & ((query: removeNotification) => Future<error, Ok>)
  & ((query: removeNotificationGroup) => Future<error, Ok>)
  & ((query: getPublicMessageLink) => Future<error, PublicMessageLink>)
  & ((query: getMessageLink) => Future<error, HttpUrl>)
  & ((query: sendMessage) => Future<error, Message>)
  & ((query: sendMessageAlbum) => Future<error, Messages>)
  & ((query: sendBotStartMessage) => Future<error, Message>)
  & ((query: sendInlineQueryResultMessage) => Future<error, Message>)
  & ((query: forwardMessages) => Future<error, Messages>)
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
  & ((query: getTextEntities) => Future<error, TextEntities>)
  & ((query: parseTextEntities) => Future<error, FormattedText>)
  & ((query: getFileMimeType) => Future<error, Text>)
  & ((query: getFileExtension) => Future<error, Text>)
  & ((query: cleanFileName) => Future<error, Text>)
  & ((query: getLanguagePackString) => Future<error, LanguagePackStringValue>)
  & ((query: getJsonValue) => Future<error, JsonValue>)
  & ((query: getJsonString) => Future<error, Text>)
  & ((query: setPollAnswer) => Future<error, Ok>)
  & ((query: stopPoll) => Future<error, Ok>)
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
  & ((query: setChatTitle) => Future<error, Ok>)
  & ((query: setChatPhoto) => Future<error, Ok>)
  & ((query: setChatDraftMessage) => Future<error, Ok>)
  & ((query: setChatNotificationSettings) => Future<error, Ok>)
  & ((query: toggleChatIsPinned) => Future<error, Ok>)
  & ((query: toggleChatIsMarkedAsUnread) => Future<error, Ok>)
  & ((query: toggleChatDefaultDisableNotification) => Future<error, Ok>)
  & ((query: setChatClientData) => Future<error, Ok>)
  & ((query: pinChatMessage) => Future<error, Ok>)
  & ((query: unpinChatMessage) => Future<error, Ok>)
  & ((query: joinChat) => Future<error, Ok>)
  & ((query: leaveChat) => Future<error, Ok>)
  & ((query: addChatMember) => Future<error, Ok>)
  & ((query: addChatMembers) => Future<error, Ok>)
  & ((query: setChatMemberStatus) => Future<error, Ok>)
  & ((query: getChatMember) => Future<error, ChatMember>)
  & ((query: searchChatMembers) => Future<error, ChatMembers>)
  & ((query: getChatAdministrators) => Future<error, Users>)
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
  & ((query: importContacts) => Future<error, ImportedContacts>)
  & ((query: getContacts) => Future<error, Users>)
  & ((query: searchContacts) => Future<error, Users>)
  & ((query: removeContacts) => Future<error, Ok>)
  & ((query: getImportedContactCount) => Future<error, Count>)
  & ((query: changeImportedContacts) => Future<error, ImportedContacts>)
  & ((query: clearImportedContacts) => Future<error, Ok>)
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
  & ((query: getStickerEmojis) => Future<error, StickerEmojis>)
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
  & ((query: toggleBasicGroupAdministrators) => Future<error, Ok>)
  & ((query: setSupergroupUsername) => Future<error, Ok>)
  & ((query: setSupergroupStickerSet) => Future<error, Ok>)
  & ((query: toggleSupergroupInvites) => Future<error, Ok>)
  & ((query: toggleSupergroupSignMessages) => Future<error, Ok>)
  & ((query: toggleSupergroupIsAllHistoryAvailable) => Future<error, Ok>)
  & ((query: setSupergroupDescription) => Future<error, Ok>)
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
  & ((query: getWallpapers) => Future<error, Wallpapers>)
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
  & ((query: getChatReportSpamState) => Future<error, ChatReportSpamState>)
  & ((query: changeChatReportSpamState) => Future<error, Ok>)
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
  & ((query: testGetDifference) => Future<error, Ok>)
  & ((query: testUseUpdate) => Future<error, Update>)
  & ((query: testUseError) => Future<error, Error>)
