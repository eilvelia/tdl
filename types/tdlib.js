// @flow

// TDLib 1.3.0

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
export type errorOptional = {|
  _: 'error',
  /**
   * Error code; subject to future changes. If the error code is 406, the error message
   * must not be processed in any way and must not be displayed to the user
   */
  code?: number,
  /** Error message; subject to future changes */
  message?: string,
|}

/** An object of this type is returned on a successful function call for certain functions */
export type ok = {
  _: 'ok',
}

/** An object of this type is returned on a successful function call for certain functions */
export type okOptional = {|
  _: 'ok',
|}

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
export type tdlibParametersOptional = {|
  _: 'tdlibParameters',
  /**
   * If set to true, the Telegram test environment will be used instead of the production
   * environment
   */
  use_test_dc?: boolean,
  /**
   * The path to the directory for the persistent database; if empty, the current working
   * directory will be used
   */
  database_directory?: string,
  /**
   * The path to the directory for storing files; if empty, database_directory will be
   * used
   */
  files_directory?: string,
  /**
   * If set to true, information about downloaded and uploaded files will be saved between
   * application restarts
   */
  use_file_database?: boolean,
  /**
   * If set to true, the library will maintain a cache of users, basic groups, supergroups,
   * channels and secret chats. Implies use_file_database
   */
  use_chat_info_database?: boolean,
  /**
   * If set to true, the library will maintain a cache of chats and messages. Implies
   * use_chat_info_database
   */
  use_message_database?: boolean,
  /** If set to true, support for secret chats will be enabled */
  use_secret_chats?: boolean,
  /** Application identifier for Telegram API access, which can be obtained at https://my.telegram.org */
  api_id?: number,
  /** Application identifier hash for Telegram API access, which can be obtained at https://my.telegram.org */
  api_hash?: string,
  /** IETF language tag of the user's operating system language; must be non-empty */
  system_language_code?: string,
  /** Model of the device the application is being run on; must be non-empty */
  device_model?: string,
  /** Version of the operating system the application is being run on; must be non-empty */
  system_version?: string,
  /** Application version; must be non-empty */
  application_version?: string,
  /** If set to true, old files will automatically be deleted */
  enable_storage_optimizer?: boolean,
  /**
   * If set to true, original file names will be ignored. Otherwise, downloaded files
   * will be saved under names as close as possible to the original name
   */
  ignore_file_names?: boolean,
|}

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
export type authenticationCodeTypeTelegramMessageOptional = {|
  _: 'authenticationCodeTypeTelegramMessage',
  /** Length of the code */
  length?: number,
|}

/** An authentication code is delivered via an SMS message to the specified phone number */
export type authenticationCodeTypeSms = {
  _: 'authenticationCodeTypeSms',
  /** Length of the code */
  length: number,
}

/** An authentication code is delivered via an SMS message to the specified phone number */
export type authenticationCodeTypeSmsOptional = {|
  _: 'authenticationCodeTypeSms',
  /** Length of the code */
  length?: number,
|}

/** An authentication code is delivered via a phone call to the specified phone number */
export type authenticationCodeTypeCall = {
  _: 'authenticationCodeTypeCall',
  /** Length of the code */
  length: number,
}

/** An authentication code is delivered via a phone call to the specified phone number */
export type authenticationCodeTypeCallOptional = {|
  _: 'authenticationCodeTypeCall',
  /** Length of the code */
  length?: number,
|}

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
export type authenticationCodeTypeFlashCallOptional = {|
  _: 'authenticationCodeTypeFlashCall',
  /** Pattern of the phone number from which the call will be made */
  pattern?: string,
|}

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
export type authenticationCodeInfoOptional = {|
  _: 'authenticationCodeInfo',
  /** A phone number that is being authenticated */
  phone_number?: string,
  /** Describes the way the code was sent to the user */
  type?: AuthenticationCodeTypeOptional,
  /** Describes the way the next code will be sent to the user; may be null */
  next_type?: AuthenticationCodeTypeOptional,
  /** Timeout before the code should be re-sent, in seconds */
  timeout?: number,
|}

/** Information about the email address authentication code that was sent */
export type emailAddressAuthenticationCodeInfo = {
  _: 'emailAddressAuthenticationCodeInfo',
  /** Pattern of the email address to which an authentication code was sent */
  email_address_pattern: string,
  /** Length of the code; 0 if unknown */
  length: number,
}

/** Information about the email address authentication code that was sent */
export type emailAddressAuthenticationCodeInfoOptional = {|
  _: 'emailAddressAuthenticationCodeInfo',
  /** Pattern of the email address to which an authentication code was sent */
  email_address_pattern?: string,
  /** Length of the code; 0 if unknown */
  length?: number,
|}

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
export type textEntityOptional = {|
  _: 'textEntity',
  /** Offset of the entity in UTF-16 code points */
  offset?: number,
  /** Length of the entity, in UTF-16 code points */
  length?: number,
  /** Type of the entity */
  type?: TextEntityTypeOptional,
|}

/** Contains a list of text entities */
export type textEntities = {
  _: 'textEntities',
  /** List of text entities */
  entities: textEntity[],
}

/** Contains a list of text entities */
export type textEntitiesOptional = {|
  _: 'textEntities',
  /** List of text entities */
  entities?: textEntityOptional[],
|}

/** A text with some entities */
export type formattedText = {
  _: 'formattedText',
  /** The text */
  text: string,
  /** Entities contained in the text */
  entities: textEntity[],
}

/** A text with some entities */
export type formattedTextOptional = {|
  _: 'formattedText',
  /** The text */
  text?: string,
  /** Entities contained in the text */
  entities?: textEntityOptional[],
|}

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
export type termsOfServiceOptional = {|
  _: 'termsOfService',
  /** Text of the terms of service */
  text?: formattedTextOptional,
  /** Mininum age of a user to be able to accept the terms; 0 if any */
  min_user_age?: number,
  /** True, if a blocking popup with terms of service must be shown to the user */
  show_popup?: boolean,
|}

/** TDLib needs TdlibParameters for initialization */
export type authorizationStateWaitTdlibParameters = {
  _: 'authorizationStateWaitTdlibParameters',
}

/** TDLib needs TdlibParameters for initialization */
export type authorizationStateWaitTdlibParametersOptional = {|
  _: 'authorizationStateWaitTdlibParameters',
|}

/** TDLib needs an encryption key to decrypt the local database */
export type authorizationStateWaitEncryptionKey = {
  _: 'authorizationStateWaitEncryptionKey',
  /** True, if the database is currently encrypted */
  is_encrypted: boolean,
}

/** TDLib needs an encryption key to decrypt the local database */
export type authorizationStateWaitEncryptionKeyOptional = {|
  _: 'authorizationStateWaitEncryptionKey',
  /** True, if the database is currently encrypted */
  is_encrypted?: boolean,
|}

/** TDLib needs the user's phone number to authorize */
export type authorizationStateWaitPhoneNumber = {
  _: 'authorizationStateWaitPhoneNumber',
}

/** TDLib needs the user's phone number to authorize */
export type authorizationStateWaitPhoneNumberOptional = {|
  _: 'authorizationStateWaitPhoneNumber',
|}

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
export type authorizationStateWaitCodeOptional = {|
  _: 'authorizationStateWaitCode',
  /** True, if the user is already registered */
  is_registered?: boolean,
  /**
   * Telegram terms of service, which should be accepted before user can continue registration;
   * may be null
   */
  terms_of_service?: termsOfServiceOptional,
  /** Information about the authorization code that was sent */
  code_info?: authenticationCodeInfoOptional,
|}

/** The user has been authorized, but needs to enter a password to start using the application */
export type authorizationStateWaitPassword = {
  _: 'authorizationStateWaitPassword',
  /** Hint for the password; can be empty */
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
export type authorizationStateWaitPasswordOptional = {|
  _: 'authorizationStateWaitPassword',
  /** Hint for the password; can be empty */
  password_hint?: string,
  /** True if a recovery email address has been set up */
  has_recovery_email_address?: boolean,
  /**
   * Pattern of the email address to which the recovery email was sent; empty until a
   * recovery email has been sent
   */
  recovery_email_address_pattern?: string,
|}

/** The user has been successfully authorized. TDLib is now ready to answer queries */
export type authorizationStateReady = {
  _: 'authorizationStateReady',
}

/** The user has been successfully authorized. TDLib is now ready to answer queries */
export type authorizationStateReadyOptional = {|
  _: 'authorizationStateReady',
|}

/** The user is currently logging out */
export type authorizationStateLoggingOut = {
  _: 'authorizationStateLoggingOut',
}

/** The user is currently logging out */
export type authorizationStateLoggingOutOptional = {|
  _: 'authorizationStateLoggingOut',
|}

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
export type authorizationStateClosingOptional = {|
  _: 'authorizationStateClosing',
|}

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
export type authorizationStateClosedOptional = {|
  _: 'authorizationStateClosed',
|}

/** Represents the current state of 2-step verification */
export type passwordState = {
  _: 'passwordState',
  /** True if a 2-step verification password is set */
  has_password: boolean,
  /** Hint for the password; can be empty */
  password_hint: string,
  /** True if a recovery email is set */
  has_recovery_email_address: boolean,
  /** True if some Telegram Passport elements were saved */
  has_passport_data: boolean,
  /** Pattern of the email address to which the confirmation email was sent */
  unconfirmed_recovery_email_address_pattern: string,
}

/** Represents the current state of 2-step verification */
export type passwordStateOptional = {|
  _: 'passwordState',
  /** True if a 2-step verification password is set */
  has_password?: boolean,
  /** Hint for the password; can be empty */
  password_hint?: string,
  /** True if a recovery email is set */
  has_recovery_email_address?: boolean,
  /** True if some Telegram Passport elements were saved */
  has_passport_data?: boolean,
  /** Pattern of the email address to which the confirmation email was sent */
  unconfirmed_recovery_email_address_pattern?: string,
|}

/** Contains information about the current recovery email address */
export type recoveryEmailAddress = {
  _: 'recoveryEmailAddress',
  /** Recovery email address */
  recovery_email_address: string,
}

/** Contains information about the current recovery email address */
export type recoveryEmailAddressOptional = {|
  _: 'recoveryEmailAddress',
  /** Recovery email address */
  recovery_email_address?: string,
|}

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
export type temporaryPasswordStateOptional = {|
  _: 'temporaryPasswordState',
  /** True, if a temporary password is available */
  has_password?: boolean,
  /** Time left before the temporary password expires, in seconds */
  valid_for?: number,
|}

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
   * If is_downloading_completed is false, then only some prefix of the file is ready
   * to be read. downloaded_prefix_size is the size of that prefix
   */
  downloaded_prefix_size: number,
  /**
   * Total downloaded file bytes. Should be used only for calculating download progress.
   * The actual file size may be bigger, and some parts of it may contain garbage
   */
  downloaded_size: number,
}

/** Represents a local file */
export type localFileOptional = {|
  _: 'localFile',
  /** Local path to the locally available file part; may be empty */
  path?: string,
  /** True, if it is possible to try to download or generate the file */
  can_be_downloaded?: boolean,
  /** True, if the file can be deleted */
  can_be_deleted?: boolean,
  /**
   * True, if the file is currently being downloaded (or a local copy is being generated
   * by some other means)
   */
  is_downloading_active?: boolean,
  /** True, if the local copy is fully available */
  is_downloading_completed?: boolean,
  /**
   * If is_downloading_completed is false, then only some prefix of the file is ready
   * to be read. downloaded_prefix_size is the size of that prefix
   */
  downloaded_prefix_size?: number,
  /**
   * Total downloaded file bytes. Should be used only for calculating download progress.
   * The actual file size may be bigger, and some parts of it may contain garbage
   */
  downloaded_size?: number,
|}

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
export type remoteFileOptional = {|
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
  id?: string,
  /**
   * True, if the file is currently being uploaded (or a remote copy is being generated
   * by some other means)
   */
  is_uploading_active?: boolean,
  /** True, if a remote copy is fully available */
  is_uploading_completed?: boolean,
  /** Size of the remote available part of the file; 0 if unknown */
  uploaded_size?: number,
|}

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
export type fileOptional = {|
  _: 'file',
  /** Unique file identifier */
  id?: number,
  /** File size; 0 if unknown */
  size?: number,
  /**
   * Expected file size in case the exact file size is unknown, but an approximate size
   * is known. Can be used to show download/upload progress
   */
  expected_size?: number,
  /** Information about the local copy of the file */
  local?: localFileOptional,
  /** Information about the remote copy of the file */
  remote?: remoteFileOptional,
|}

/** A file defined by its unique ID */
export type inputFileId = {
  _: 'inputFileId',
  /** Unique file identifier */
  id: number,
}

/** A file defined by its unique ID */
export type inputFileIdOptional = {|
  _: 'inputFileId',
  /** Unique file identifier */
  id?: number,
|}

/** A file defined by its remote ID */
export type inputFileRemote = {
  _: 'inputFileRemote',
  /** Remote file identifier */
  id: string,
}

/** A file defined by its remote ID */
export type inputFileRemoteOptional = {|
  _: 'inputFileRemote',
  /** Remote file identifier */
  id?: string,
|}

/** A file defined by a local path */
export type inputFileLocal = {
  _: 'inputFileLocal',
  /** Local path to the file */
  path: string,
}

/** A file defined by a local path */
export type inputFileLocalOptional = {|
  _: 'inputFileLocal',
  /** Local path to the file */
  path?: string,
|}

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
   * across application restarts
   */
  conversion: string,
  /** Expected size of the generated file; 0 if unknown */
  expected_size: number,
}

/** A file generated by the client */
export type inputFileGeneratedOptional = {|
  _: 'inputFileGenerated',
  /**
   * Local path to a file from which the file is generated; may be empty if there is no
   * such file
   */
  original_path?: string,
  /**
   * String specifying the conversion applied to the original file; should be persistent
   * across application restarts
   */
  conversion?: string,
  /** Expected size of the generated file; 0 if unknown */
  expected_size?: number,
|}

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
export type photoSizeOptional = {|
  _: 'photoSize',
  /** Thumbnail type (see https://core.telegram.org/constructor/photoSize) */
  type?: string,
  /** Information about the photo file */
  photo?: fileOptional,
  /** Photo width */
  width?: number,
  /** Photo height */
  height?: number,
|}

/** A mask should be placed relatively to the forehead */
export type maskPointForehead = {
  _: 'maskPointForehead',
}

/** A mask should be placed relatively to the forehead */
export type maskPointForeheadOptional = {|
  _: 'maskPointForehead',
|}

/** A mask should be placed relatively to the eyes */
export type maskPointEyes = {
  _: 'maskPointEyes',
}

/** A mask should be placed relatively to the eyes */
export type maskPointEyesOptional = {|
  _: 'maskPointEyes',
|}

/** A mask should be placed relatively to the mouth */
export type maskPointMouth = {
  _: 'maskPointMouth',
}

/** A mask should be placed relatively to the mouth */
export type maskPointMouthOptional = {|
  _: 'maskPointMouth',
|}

/** A mask should be placed relatively to the chin */
export type maskPointChin = {
  _: 'maskPointChin',
}

/** A mask should be placed relatively to the chin */
export type maskPointChinOptional = {|
  _: 'maskPointChin',
|}

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
export type maskPositionOptional = {|
  _: 'maskPosition',
  /** Part of the face, relative to which the mask should be placed */
  point?: MaskPointOptional,
  /**
   * Shift by X-axis measured in widths of the mask scaled to the face size, from left
   * to right. (For example, -1.0 will place the mask just to the left of the default
   * mask position)
   */
  x_shift?: number,
  /**
   * Shift by Y-axis measured in heights of the mask scaled to the face size, from top
   * to bottom. (For example, 1.0 will place the mask just below the default mask position)
   */
  y_shift?: number,
  /** Mask scaling coefficient. (For example, 2.0 means a doubled size) */
  scale?: number,
|}

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
export type animationOptional = {|
  _: 'animation',
  /** Duration of the animation, in seconds; as defined by the sender */
  duration?: number,
  /** Width of the animation */
  width?: number,
  /** Height of the animation */
  height?: number,
  /** Original name of the file; as defined by the sender */
  file_name?: string,
  /** MIME type of the file, usually "image/gif" or "video/mp4" */
  mime_type?: string,
  /** Animation thumbnail; may be null */
  thumbnail?: photoSizeOptional,
  /** File containing the animation */
  animation?: fileOptional,
|}

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
export type audioOptional = {|
  _: 'audio',
  /** Duration of the audio, in seconds; as defined by the sender */
  duration?: number,
  /** Title of the audio; as defined by the sender */
  title?: string,
  /** Performer of the audio; as defined by the sender */
  performer?: string,
  /** Original name of the file; as defined by the sender */
  file_name?: string,
  /** The MIME type of the file; as defined by the sender */
  mime_type?: string,
  /**
   * The thumbnail of the album cover; as defined by the sender. The full size thumbnail
   * should be extracted from the downloaded file; may be null
   */
  album_cover_thumbnail?: photoSizeOptional,
  /** File containing the audio */
  audio?: fileOptional,
|}

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
export type documentOptional = {|
  _: 'document',
  /** Original name of the file; as defined by the sender */
  file_name?: string,
  /** MIME type of the file; as defined by the sender */
  mime_type?: string,
  /** Document thumbnail; as defined by the sender; may be null */
  thumbnail?: photoSizeOptional,
  /** File containing the document */
  document?: fileOptional,
|}

/** Describes a photo */
export type photo = {
  _: 'photo',
  /** Photo identifier; 0 for deleted photos */
  id: (number | string),
  /** True, if stickers were added to the photo */
  has_stickers: boolean,
  /** Available variants of the photo, in different sizes */
  sizes: photoSize[],
}

/** Describes a photo */
export type photoOptional = {|
  _: 'photo',
  /** Photo identifier; 0 for deleted photos */
  id?: (number | string),
  /** True, if stickers were added to the photo */
  has_stickers?: boolean,
  /** Available variants of the photo, in different sizes */
  sizes?: photoSizeOptional[],
|}

/** Describes a sticker */
export type sticker = {
  _: 'sticker',
  /** The identifier of the sticker set to which the sticker belongs; 0 if none */
  set_id: (number | string),
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
export type stickerOptional = {|
  _: 'sticker',
  /** The identifier of the sticker set to which the sticker belongs; 0 if none */
  set_id?: (number | string),
  /** Sticker width; as defined by the sender */
  width?: number,
  /** Sticker height; as defined by the sender */
  height?: number,
  /** Emoji corresponding to the sticker */
  emoji?: string,
  /** True, if the sticker is a mask */
  is_mask?: boolean,
  /** Position where the mask should be placed; may be null */
  mask_position?: maskPositionOptional,
  /** Sticker thumbnail in WEBP or JPEG format; may be null */
  thumbnail?: photoSizeOptional,
  /** File containing the sticker */
  sticker?: fileOptional,
|}

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
export type videoOptional = {|
  _: 'video',
  /** Duration of the video, in seconds; as defined by the sender */
  duration?: number,
  /** Video width; as defined by the sender */
  width?: number,
  /** Video height; as defined by the sender */
  height?: number,
  /** Original name of the file; as defined by the sender */
  file_name?: string,
  /** MIME type of the file; as defined by the sender */
  mime_type?: string,
  /** True, if stickers were added to the photo */
  has_stickers?: boolean,
  /** True, if the video should be tried to be streamed */
  supports_streaming?: boolean,
  /** Video thumbnail; as defined by the sender; may be null */
  thumbnail?: photoSizeOptional,
  /** File containing the video */
  video?: fileOptional,
|}

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
export type videoNoteOptional = {|
  _: 'videoNote',
  /** Duration of the video, in seconds; as defined by the sender */
  duration?: number,
  /** Video width and height; as defined by the sender */
  length?: number,
  /** Video thumbnail; as defined by the sender; may be null */
  thumbnail?: photoSizeOptional,
  /** File containing the video */
  video?: fileOptional,
|}

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
export type voiceNoteOptional = {|
  _: 'voiceNote',
  /** Duration of the voice note, in seconds; as defined by the sender */
  duration?: number,
  /** A waveform representation of the voice note in 5-bit format */
  waveform?: string,
  /** MIME type of the file; as defined by the sender */
  mime_type?: string,
  /** File containing the voice note */
  voice?: fileOptional,
|}

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
export type contactOptional = {|
  _: 'contact',
  /** Phone number of the user */
  phone_number?: string,
  /** First name of the user; 1-255 characters in length */
  first_name?: string,
  /** Last name of the user */
  last_name?: string,
  /** Additional data about the user in a form of vCard; 0-2048 bytes in length */
  vcard?: string,
  /** Identifier of the user, if known; otherwise 0 */
  user_id?: number,
|}

/** Describes a location on planet Earth */
export type location = {
  _: 'location',
  /** Latitude of the location in degrees; as defined by the sender */
  latitude: number,
  /** Longitude of the location, in degrees; as defined by the sender */
  longitude: number,
}

/** Describes a location on planet Earth */
export type locationOptional = {|
  _: 'location',
  /** Latitude of the location in degrees; as defined by the sender */
  latitude?: number,
  /** Longitude of the location, in degrees; as defined by the sender */
  longitude?: number,
|}

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
export type venueOptional = {|
  _: 'venue',
  /** Venue location; as defined by the sender */
  location?: locationOptional,
  /** Venue name; as defined by the sender */
  title?: string,
  /** Venue address; as defined by the sender */
  address?: string,
  /**
   * Provider of the venue database; as defined by the sender. Currently only "foursquare"
   * needs to be supported
   */
  provider?: string,
  /** Identifier of the venue in the provider database; as defined by the sender */
  id?: string,
  /** Type of the venue in the provider database; as defined by the sender */
  type?: string,
|}

/** Describes a game */
export type game = {
  _: 'game',
  /** Game ID */
  id: (number | string),
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
export type gameOptional = {|
  _: 'game',
  /** Game ID */
  id?: (number | string),
  /** Game short name. To share a game use the URL https://t.me/{bot_username}?game={game_short_name} */
  short_name?: string,
  /** Game title */
  title?: string,
  /** Game text, usually containing scoreboards for a game */
  text?: formattedTextOptional,
  /** Game description */
  description?: string,
  /** Game photo */
  photo?: photoOptional,
  /** Game animation; may be null */
  animation?: animationOptional,
|}

/** Describes a user profile photo */
export type profilePhoto = {
  _: 'profilePhoto',
  /**
   * Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of
   * userProfilePhotos
   */
  id: (number | string),
  /** A small (160x160) user profile photo */
  small: file,
  /** A big (640x640) user profile photo */
  big: file,
}

/** Describes a user profile photo */
export type profilePhotoOptional = {|
  _: 'profilePhoto',
  /**
   * Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of
   * userProfilePhotos
   */
  id?: (number | string),
  /** A small (160x160) user profile photo */
  small?: fileOptional,
  /** A big (640x640) user profile photo */
  big?: fileOptional,
|}

/** Describes the photo of a chat */
export type chatPhoto = {
  _: 'chatPhoto',
  /** A small (160x160) chat photo */
  small: file,
  /** A big (640x640) chat photo */
  big: file,
}

/** Describes the photo of a chat */
export type chatPhotoOptional = {|
  _: 'chatPhoto',
  /** A small (160x160) chat photo */
  small?: fileOptional,
  /** A big (640x640) chat photo */
  big?: fileOptional,
|}

/** The phone number of user A is not known to user B */
export type linkStateNone = {
  _: 'linkStateNone',
}

/** The phone number of user A is not known to user B */
export type linkStateNoneOptional = {|
  _: 'linkStateNone',
|}

/**
 * The phone number of user A is known but that number has not been saved to the contacts
 * list of user B
 */
export type linkStateKnowsPhoneNumber = {
  _: 'linkStateKnowsPhoneNumber',
}

/**
 * The phone number of user A is known but that number has not been saved to the contacts
 * list of user B
 */
export type linkStateKnowsPhoneNumberOptional = {|
  _: 'linkStateKnowsPhoneNumber',
|}

/** The phone number of user A has been saved to the contacts list of user B */
export type linkStateIsContact = {
  _: 'linkStateIsContact',
}

/** The phone number of user A has been saved to the contacts list of user B */
export type linkStateIsContactOptional = {|
  _: 'linkStateIsContact',
|}

/** A regular user */
export type userTypeRegular = {
  _: 'userTypeRegular',
}

/** A regular user */
export type userTypeRegularOptional = {|
  _: 'userTypeRegular',
|}

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
export type userTypeDeletedOptional = {|
  _: 'userTypeDeleted',
|}

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
export type userTypeBotOptional = {|
  _: 'userTypeBot',
  /** True, if the bot can be invited to basic group and supergroup chats */
  can_join_groups?: boolean,
  /**
   * True, if the bot can read all messages in basic group or supergroup chats and not
   * just those addressed to the bot. In private and channel chats a bot can always read
   * all messages
   */
  can_read_all_group_messages?: boolean,
  /** True, if the bot supports inline queries */
  is_inline?: boolean,
  /** Placeholder for inline queries (displayed on the client input field) */
  inline_query_placeholder?: string,
  /**
   * True, if the location of the user should be sent with every inline query to this
   * bot
   */
  need_location?: boolean,
|}

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
export type userTypeUnknownOptional = {|
  _: 'userTypeUnknown',
|}

/** Represents commands supported by a bot */
export type botCommand = {
  _: 'botCommand',
  /** Text of the bot command */
  command: string,
  /** Description of the bot command */
  description: string,
}

/** Represents commands supported by a bot */
export type botCommandOptional = {|
  _: 'botCommand',
  /** Text of the bot command */
  command?: string,
  /** Description of the bot command */
  description?: string,
|}

/** Provides information about a bot and its supported commands */
export type botInfo = {
  _: 'botInfo',
  /** Long description shown on the user info page */
  description: string,
  /** A list of commands supported by the bot */
  commands: botCommand[],
}

/** Provides information about a bot and its supported commands */
export type botInfoOptional = {|
  _: 'botInfo',
  /** Long description shown on the user info page */
  description?: string,
  /** A list of commands supported by the bot */
  commands?: botCommandOptional[],
|}

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
export type userOptional = {|
  _: 'user',
  /** User identifier */
  id?: number,
  /** First name of the user */
  first_name?: string,
  /** Last name of the user */
  last_name?: string,
  /** Username of the user */
  username?: string,
  /** Phone number of the user */
  phone_number?: string,
  /** Current online status of the user */
  status?: UserStatusOptional,
  /** Profile photo of the user; may be null */
  profile_photo?: profilePhotoOptional,
  /** Relationship from the current user to the other user */
  outgoing_link?: LinkStateOptional,
  /** Relationship from the other user to the current user */
  incoming_link?: LinkStateOptional,
  /** True, if the user is verified */
  is_verified?: boolean,
  /**
   * If non-empty, it contains the reason why access to this user must be restricted.
   * The format of the string is "{type}: {description}". {type} contains the type of
   * the restriction and at least one of the suffixes "-all", "-ios", "-android", or "-wp",
   * which describe the platforms on which access should be restricted. (For example,
   * "terms-ios-android". {description} contains a human-readable description of the restriction,
   * which can be shown to the user)
   */
  restriction_reason?: string,
  /**
   * If false, the user is inaccessible, and the only information known about the user
   * is inside this class. It can't be passed to any method except GetUser
   */
  have_access?: boolean,
  /** Type of the user */
  type?: UserTypeOptional,
  /** IETF language tag of the user's language; only available to bots */
  language_code?: string,
|}

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
export type userFullInfoOptional = {|
  _: 'userFullInfo',
  /** True, if the user is blacklisted by the current user */
  is_blocked?: boolean,
  /** True, if the user can be called */
  can_be_called?: boolean,
  /** True, if the user can't be called due to their privacy settings */
  has_private_calls?: boolean,
  /** A short user bio */
  bio?: string,
  /** For bots, the text that is included with the link when users share the bot */
  share_text?: string,
  /**
   * Number of group chats where both the other user and the current user are a member;
   * 0 for the current user
   */
  group_in_common_count?: number,
  /** If the user is a bot, information about the bot; may be null */
  bot_info?: botInfoOptional,
|}

/** Contains part of the list of user photos */
export type userProfilePhotos = {
  _: 'userProfilePhotos',
  /** Total number of user profile photos */
  total_count: number,
  /** A list of photos */
  photos: photo[],
}

/** Contains part of the list of user photos */
export type userProfilePhotosOptional = {|
  _: 'userProfilePhotos',
  /** Total number of user profile photos */
  total_count?: number,
  /** A list of photos */
  photos?: photoOptional[],
|}

/** Represents a list of users */
export type users = {
  _: 'users',
  /** Approximate total count of users found */
  total_count: number,
  /** A list of user identifiers */
  user_ids: number[],
}

/** Represents a list of users */
export type usersOptional = {|
  _: 'users',
  /** Approximate total count of users found */
  total_count?: number,
  /** A list of user identifiers */
  user_ids?: number[],
|}

/** The user is the creator of a chat and has all the administrator privileges */
export type chatMemberStatusCreator = {
  _: 'chatMemberStatusCreator',
  /** True, if the user is a member of the chat */
  is_member: boolean,
}

/** The user is the creator of a chat and has all the administrator privileges */
export type chatMemberStatusCreatorOptional = {|
  _: 'chatMemberStatusCreator',
  /** True, if the user is a member of the chat */
  is_member?: boolean,
|}

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
  /** True, if the administrator can pin messages; applicable to supergroups only */
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
export type chatMemberStatusAdministratorOptional = {|
  _: 'chatMemberStatusAdministrator',
  /** True, if the current user can edit the administrator privileges for the called user */
  can_be_edited?: boolean,
  /** True, if the administrator can change the chat title, photo, and other settings */
  can_change_info?: boolean,
  /** True, if the administrator can create channel posts; applicable to channels only */
  can_post_messages?: boolean,
  /**
   * True, if the administrator can edit messages of other users and pin messages; applicable
   * to channels only
   */
  can_edit_messages?: boolean,
  /** True, if the administrator can delete messages of other users */
  can_delete_messages?: boolean,
  /** True, if the administrator can invite new users to the chat */
  can_invite_users?: boolean,
  /** True, if the administrator can restrict, ban, or unban chat members */
  can_restrict_members?: boolean,
  /** True, if the administrator can pin messages; applicable to supergroups only */
  can_pin_messages?: boolean,
  /**
   * True, if the administrator can add new administrators with a subset of his own privileges
   * or demote administrators that were directly or indirectly promoted by him
   */
  can_promote_members?: boolean,
|}

/** The user is a member of a chat, without any additional privileges or restrictions */
export type chatMemberStatusMember = {
  _: 'chatMemberStatusMember',
}

/** The user is a member of a chat, without any additional privileges or restrictions */
export type chatMemberStatusMemberOptional = {|
  _: 'chatMemberStatusMember',
|}

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
export type chatMemberStatusRestrictedOptional = {|
  _: 'chatMemberStatusRestricted',
  /** True, if the user is a member of the chat */
  is_member?: boolean,
  /**
   * Point in time (Unix timestamp) when restrictions will be lifted from the user; 0
   * if never. If the user is restricted for more than 366 days or for less than 30 seconds
   * from the current time, the user is considered to be restricted forever
   */
  restricted_until_date?: number,
  /** True, if the user can send text messages, contacts, locations, and venues */
  can_send_messages?: boolean,
  /**
   * True, if the user can send audio files, documents, photos, videos, video notes, and
   * voice notes. Implies can_send_messages permissions
   */
  can_send_media_messages?: boolean,
  /**
   * True, if the user can send animations, games, and stickers and use inline bots. Implies
   * can_send_media_messages permissions
   */
  can_send_other_messages?: boolean,
  /**
   * True, if the user may add a web page preview to his messages. Implies can_send_messages
   * permissions
   */
  can_add_web_page_previews?: boolean,
|}

/** The user is not a chat member */
export type chatMemberStatusLeft = {
  _: 'chatMemberStatusLeft',
}

/** The user is not a chat member */
export type chatMemberStatusLeftOptional = {|
  _: 'chatMemberStatusLeft',
|}

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
export type chatMemberStatusBannedOptional = {|
  _: 'chatMemberStatusBanned',
  /**
   * Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the
   * user is banned for more than 366 days or for less than 30 seconds from the current
   * time, the user is considered to be banned forever
   */
  banned_until_date?: number,
|}

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
export type chatMemberOptional = {|
  _: 'chatMember',
  /** User identifier of the chat member */
  user_id?: number,
  /** Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown */
  inviter_user_id?: number,
  /** Point in time (Unix timestamp) when the user joined a chat */
  joined_chat_date?: number,
  /** Status of the member in the chat */
  status?: ChatMemberStatusOptional,
  /**
   * If the user is a bot, information about the bot; may be null. Can be null even for
   * a bot if the bot is not a chat member
   */
  bot_info?: botInfoOptional,
|}

/** Contains a list of chat members */
export type chatMembers = {
  _: 'chatMembers',
  /** Approximate total count of chat members found */
  total_count: number,
  /** A list of chat members */
  members: chatMember[],
}

/** Contains a list of chat members */
export type chatMembersOptional = {|
  _: 'chatMembers',
  /** Approximate total count of chat members found */
  total_count?: number,
  /** A list of chat members */
  members?: chatMemberOptional[],
|}

/** Returns the creator and administrators */
export type chatMembersFilterAdministrators = {
  _: 'chatMembersFilterAdministrators',
}

/** Returns the creator and administrators */
export type chatMembersFilterAdministratorsOptional = {|
  _: 'chatMembersFilterAdministrators',
|}

/** Returns all chat members, including restricted chat members */
export type chatMembersFilterMembers = {
  _: 'chatMembersFilterMembers',
}

/** Returns all chat members, including restricted chat members */
export type chatMembersFilterMembersOptional = {|
  _: 'chatMembersFilterMembers',
|}

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
export type chatMembersFilterRestrictedOptional = {|
  _: 'chatMembersFilterRestricted',
|}

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
export type chatMembersFilterBannedOptional = {|
  _: 'chatMembersFilterBanned',
|}

/** Returns bot members of the chat */
export type chatMembersFilterBots = {
  _: 'chatMembersFilterBots',
}

/** Returns bot members of the chat */
export type chatMembersFilterBotsOptional = {|
  _: 'chatMembersFilterBots',
|}

/** Returns recently active users in reverse chronological order */
export type supergroupMembersFilterRecent = {
  _: 'supergroupMembersFilterRecent',
}

/** Returns recently active users in reverse chronological order */
export type supergroupMembersFilterRecentOptional = {|
  _: 'supergroupMembersFilterRecent',
|}

/** Returns the creator and administrators */
export type supergroupMembersFilterAdministrators = {
  _: 'supergroupMembersFilterAdministrators',
}

/** Returns the creator and administrators */
export type supergroupMembersFilterAdministratorsOptional = {|
  _: 'supergroupMembersFilterAdministrators',
|}

/** Used to search for supergroup or channel members via a (string) query */
export type supergroupMembersFilterSearch = {
  _: 'supergroupMembersFilterSearch',
  /** Query to search for */
  query: string,
}

/** Used to search for supergroup or channel members via a (string) query */
export type supergroupMembersFilterSearchOptional = {|
  _: 'supergroupMembersFilterSearch',
  /** Query to search for */
  query?: string,
|}

/** Returns restricted supergroup members; can be used only by administrators */
export type supergroupMembersFilterRestricted = {
  _: 'supergroupMembersFilterRestricted',
  /** Query to search for */
  query: string,
}

/** Returns restricted supergroup members; can be used only by administrators */
export type supergroupMembersFilterRestrictedOptional = {|
  _: 'supergroupMembersFilterRestricted',
  /** Query to search for */
  query?: string,
|}

/** Returns users banned from the supergroup or channel; can be used only by administrators */
export type supergroupMembersFilterBanned = {
  _: 'supergroupMembersFilterBanned',
  /** Query to search for */
  query: string,
}

/** Returns users banned from the supergroup or channel; can be used only by administrators */
export type supergroupMembersFilterBannedOptional = {|
  _: 'supergroupMembersFilterBanned',
  /** Query to search for */
  query?: string,
|}

/** Returns bot members of the supergroup or channel */
export type supergroupMembersFilterBots = {
  _: 'supergroupMembersFilterBots',
}

/** Returns bot members of the supergroup or channel */
export type supergroupMembersFilterBotsOptional = {|
  _: 'supergroupMembersFilterBots',
|}

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
export type basicGroupOptional = {|
  _: 'basicGroup',
  /** Group identifier */
  id?: number,
  /** Number of members in the group */
  member_count?: number,
  /** Status of the current user in the group */
  status?: ChatMemberStatusOptional,
  /** True, if all members have been granted administrator rights in the group */
  everyone_is_administrator?: boolean,
  /** True, if the group is active */
  is_active?: boolean,
  /** Identifier of the supergroup to which this group was upgraded; 0 if none */
  upgraded_to_supergroup_id?: number,
|}

/** Contains full information about a basic group */
export type basicGroupFullInfo = {
  _: 'basicGroupFullInfo',
  /** User identifier of the creator of the group; 0 if unknown */
  creator_user_id: number,
  /** Group members */
  members: chatMember[],
  /**
   * Invite link for this group; available only for the group creator and only after it
   * has been generated at least once
   */
  invite_link: string,
}

/** Contains full information about a basic group */
export type basicGroupFullInfoOptional = {|
  _: 'basicGroupFullInfo',
  /** User identifier of the creator of the group; 0 if unknown */
  creator_user_id?: number,
  /** Group members */
  members?: chatMemberOptional[],
  /**
   * Invite link for this group; available only for the group creator and only after it
   * has been generated at least once
   */
  invite_link?: string,
|}

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
export type supergroupOptional = {|
  _: 'supergroup',
  /** Supergroup or channel identifier */
  id?: number,
  /** Username of the supergroup or channel; empty for private supergroups or channels */
  username?: string,
  /**
   * Point in time (Unix timestamp) when the current user joined, or the point in time
   * when the supergroup or channel was created, in case the user is not a member
   */
  date?: number,
  /** Status of the current user in the supergroup or channel */
  status?: ChatMemberStatusOptional,
  /**
   * Member count; 0 if unknown. Currently it is guaranteed to be known only if the supergroup
   * or channel was found through SearchPublicChats
   */
  member_count?: number,
  /**
   * True, if any member of the supergroup can invite other members. This field has no
   * meaning for channels
   */
  anyone_can_invite?: boolean,
  /**
   * True, if messages sent to the channel should contain information about the sender.
   * This field is only applicable to channels
   */
  sign_messages?: boolean,
  /** True, if the supergroup is a channel */
  is_channel?: boolean,
  /** True, if the supergroup or channel is verified */
  is_verified?: boolean,
  /**
   * If non-empty, contains the reason why access to this supergroup or channel must be
   * restricted. Format of the string is "{type}: {description}". {type} Contains the
   * type of the restriction and at least one of the suffixes "-all", "-ios", "-android",
   * or "-wp", which describe the platforms on which access should be restricted. (For
   * example, "terms-ios-android". {description} contains a human-readable description
   * of the restriction, which can be shown to the user)
   */
  restriction_reason?: string,
|}

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
  /**
   * True, if new chat members will have access to old messages. In public supergroups
   * and both public and private channels, old messages are always available, so this
   * option affects only private supergroups. The value of this field is only available
   * for chat administrators
   */
  is_all_history_available: boolean,
  /** Identifier of the supergroup sticker set; 0 if none */
  sticker_set_id: (number | string),
  /** Invite link for this chat */
  invite_link: string,
  /** Identifier of the pinned message in the chat; 0 if none */
  pinned_message_id: number,
  /** Identifier of the basic group from which supergroup was upgraded; 0 if none */
  upgraded_from_basic_group_id: number,
  /**
   * Identifier of the last message in the basic group from which supergroup was upgraded;
   * 0 if none
   */
  upgraded_from_max_message_id: number,
}

/** Contains full information about a supergroup or channel */
export type supergroupFullInfoOptional = {|
  _: 'supergroupFullInfo',
  /** Supergroup or channel description */
  description?: string,
  /** Number of members in the supergroup or channel; 0 if unknown */
  member_count?: number,
  /** Number of privileged users in the supergroup or channel; 0 if unknown */
  administrator_count?: number,
  /** Number of restricted users in the supergroup; 0 if unknown */
  restricted_count?: number,
  /** Number of users banned from chat; 0 if unknown */
  banned_count?: number,
  /** True, if members of the chat can be retrieved */
  can_get_members?: boolean,
  /** True, if the chat can be made public */
  can_set_username?: boolean,
  /** True, if the supergroup sticker set can be changed */
  can_set_sticker_set?: boolean,
  /**
   * True, if new chat members will have access to old messages. In public supergroups
   * and both public and private channels, old messages are always available, so this
   * option affects only private supergroups. The value of this field is only available
   * for chat administrators
   */
  is_all_history_available?: boolean,
  /** Identifier of the supergroup sticker set; 0 if none */
  sticker_set_id?: (number | string),
  /** Invite link for this chat */
  invite_link?: string,
  /** Identifier of the pinned message in the chat; 0 if none */
  pinned_message_id?: number,
  /** Identifier of the basic group from which supergroup was upgraded; 0 if none */
  upgraded_from_basic_group_id?: number,
  /**
   * Identifier of the last message in the basic group from which supergroup was upgraded;
   * 0 if none
   */
  upgraded_from_max_message_id?: number,
|}

/** The secret chat is not yet created; waiting for the other user to get online */
export type secretChatStatePending = {
  _: 'secretChatStatePending',
}

/** The secret chat is not yet created; waiting for the other user to get online */
export type secretChatStatePendingOptional = {|
  _: 'secretChatStatePending',
|}

/** The secret chat is ready to use */
export type secretChatStateReady = {
  _: 'secretChatStateReady',
}

/** The secret chat is ready to use */
export type secretChatStateReadyOptional = {|
  _: 'secretChatStateReady',
|}

/** The secret chat is closed */
export type secretChatStateClosed = {
  _: 'secretChatStateClosed',
}

/** The secret chat is closed */
export type secretChatStateClosedOptional = {|
  _: 'secretChatStateClosed',
|}

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
export type secretChatOptional = {|
  _: 'secretChat',
  /** Secret chat identifier */
  id?: number,
  /** Identifier of the chat partner */
  user_id?: number,
  /** State of the secret chat */
  state?: SecretChatStateOptional,
  /** True, if the chat was created by the current user; otherwise false */
  is_outbound?: boolean,
  /** Current message Time To Live setting (self-destruct timer) for the chat, in seconds */
  ttl?: number,
  /**
   * Hash of the currently used key for comparison with the hash of the chat partner's
   * key. This is a string of 36 bytes, which must be used to make a 12x12 square image
   * with a color depth of 4. The first 16 bytes should be used to make a central 8x8
   * square, while the remaining 20 bytes should be used to construct a 2-pixel-wide border
   * around that square. Alternatively, the first 32 bytes of the hash can be converted
   * to the hexadecimal format and printed as 32 2-digit hex numbers
   */
  key_hash?: string,
  /**
   * Secret chat layer; determines features supported by the other client. Video notes
   * are supported if the layer >= 66
   */
  layer?: number,
|}

/** The message was originally written by a known user */
export type messageForwardedFromUser = {
  _: 'messageForwardedFromUser',
  /** Identifier of the user that originally sent this message */
  sender_user_id: number,
  /** Point in time (Unix timestamp) when the message was originally sent */
  date: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded; 0 if unknown
   */
  forwarded_from_chat_id: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages) the identifier
   * of the original message from which the new message was forwarded; 0 if unknown
   */
  forwarded_from_message_id: number,
}

/** The message was originally written by a known user */
export type messageForwardedFromUserOptional = {|
  _: 'messageForwardedFromUser',
  /** Identifier of the user that originally sent this message */
  sender_user_id?: number,
  /** Point in time (Unix timestamp) when the message was originally sent */
  date?: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded; 0 if unknown
   */
  forwarded_from_chat_id?: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages) the identifier
   * of the original message from which the new message was forwarded; 0 if unknown
   */
  forwarded_from_message_id?: number,
|}

/** The message was originally a post in a channel */
export type messageForwardedPost = {
  _: 'messageForwardedPost',
  /** Identifier of the chat from which the message was forwarded */
  chat_id: number,
  /** Post author signature */
  author_signature: string,
  /** Point in time (Unix timestamp) when the message was originally sent */
  date: number,
  /**
   * Message identifier of the original message from which the new message was forwarded;
   * 0 if unknown
   */
  message_id: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded; 0 if unknown
   */
  forwarded_from_chat_id: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the original message from which the new message was forwarded; 0 if unknown
   */
  forwarded_from_message_id: number,
}

/** The message was originally a post in a channel */
export type messageForwardedPostOptional = {|
  _: 'messageForwardedPost',
  /** Identifier of the chat from which the message was forwarded */
  chat_id?: number,
  /** Post author signature */
  author_signature?: string,
  /** Point in time (Unix timestamp) when the message was originally sent */
  date?: number,
  /**
   * Message identifier of the original message from which the new message was forwarded;
   * 0 if unknown
   */
  message_id?: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded; 0 if unknown
   */
  forwarded_from_chat_id?: number,
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the original message from which the new message was forwarded; 0 if unknown
   */
  forwarded_from_message_id?: number,
|}

/** The message is being sent now, but has not yet been delivered to the server */
export type messageSendingStatePending = {
  _: 'messageSendingStatePending',
}

/** The message is being sent now, but has not yet been delivered to the server */
export type messageSendingStatePendingOptional = {|
  _: 'messageSendingStatePending',
|}

/** The message failed to be sent */
export type messageSendingStateFailed = {
  _: 'messageSendingStateFailed',
}

/** The message failed to be sent */
export type messageSendingStateFailedOptional = {|
  _: 'messageSendingStateFailed',
|}

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
  /** True, if the message can be edited */
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
  forward_info: MessageForwardInfo,
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
  media_album_id: (number | string),
  /** Content of the message */
  content: MessageContent,
  /** Reply markup for the message; may be null */
  reply_markup: ReplyMarkup,
}

/** Describes a message */
export type messageOptional = {|
  _: 'message',
  /** Message identifier, unique for the chat to which the message belongs */
  id?: number,
  /**
   * Identifier of the user who sent the message; 0 if unknown. It is unknown for channel
   * posts
   */
  sender_user_id?: number,
  /** Chat identifier */
  chat_id?: number,
  /** Information about the sending state of the message; may be null */
  sending_state?: MessageSendingStateOptional,
  /** True, if the message is outgoing */
  is_outgoing?: boolean,
  /** True, if the message can be edited */
  can_be_edited?: boolean,
  /** True, if the message can be forwarded */
  can_be_forwarded?: boolean,
  /**
   * True, if the message can be deleted only for the current user while other users will
   * continue to see it
   */
  can_be_deleted_only_for_self?: boolean,
  /** True, if the message can be deleted for all users */
  can_be_deleted_for_all_users?: boolean,
  /**
   * True, if the message is a channel post. All messages to channels are channel posts,
   * all other messages are not channel posts
   */
  is_channel_post?: boolean,
  /** True, if the message contains an unread mention for the current user */
  contains_unread_mention?: boolean,
  /** Point in time (Unix timestamp) when the message was sent */
  date?: number,
  /** Point in time (Unix timestamp) when the message was last edited */
  edit_date?: number,
  /** Information about the initial message sender; may be null */
  forward_info?: MessageForwardInfoOptional,
  /**
   * If non-zero, the identifier of the message this message is replying to; can be the
   * identifier of a deleted message
   */
  reply_to_message_id?: number,
  /**
   * For self-destructing messages, the message's TTL (Time To Live), in seconds; 0 if
   * none. TDLib will send updateDeleteMessages or updateMessageContent once the TTL expires
   */
  ttl?: number,
  /** Time left before the message expires, in seconds */
  ttl_expires_in?: number,
  /** If non-zero, the user identifier of the bot through which this message was sent */
  via_bot_user_id?: number,
  /** For channel posts, optional author signature */
  author_signature?: string,
  /** Number of times this message was viewed */
  views?: number,
  /**
   * Unique identifier of an album this message belongs to. Only photos and videos can
   * be grouped together in albums
   */
  media_album_id?: (number | string),
  /** Content of the message */
  content?: MessageContentOptional,
  /** Reply markup for the message; may be null */
  reply_markup?: ReplyMarkupOptional,
|}

/** Contains a list of messages */
export type messages = {
  _: 'messages',
  /** Approximate total count of messages found */
  total_count: number,
  /** List of messages; messages may be null */
  messages: message[],
}

/** Contains a list of messages */
export type messagesOptional = {|
  _: 'messages',
  /** Approximate total count of messages found */
  total_count?: number,
  /** List of messages; messages may be null */
  messages?: messageOptional[],
|}

/** Contains a list of messages found by a search */
export type foundMessages = {
  _: 'foundMessages',
  /** List of messages */
  messages: message[],
  /** Value to pass as from_search_id to get more results */
  next_from_search_id: (number | string),
}

/** Contains a list of messages found by a search */
export type foundMessagesOptional = {|
  _: 'foundMessages',
  /** List of messages */
  messages?: messageOptional[],
  /** Value to pass as from_search_id to get more results */
  next_from_search_id?: (number | string),
|}

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
export type notificationSettingsScopePrivateChatsOptional = {|
  _: 'notificationSettingsScopePrivateChats',
|}

/**
 * Notification settings applied to all basic groups, supergroups and channels when
 * the corresponding chat setting has a default value
 */
export type notificationSettingsScopeGroupChats = {
  _: 'notificationSettingsScopeGroupChats',
}

/**
 * Notification settings applied to all basic groups, supergroups and channels when
 * the corresponding chat setting has a default value
 */
export type notificationSettingsScopeGroupChatsOptional = {|
  _: 'notificationSettingsScopeGroupChats',
|}

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
}

/** Contains information about notification settings for a chat */
export type chatNotificationSettingsOptional = {|
  _: 'chatNotificationSettings',
  /**
   * If true, mute_for is ignored and the value for the relevant type of chat is used
   * instead
   */
  use_default_mute_for?: boolean,
  /** Time left before notifications will be unmuted, in seconds */
  mute_for?: number,
  /** If true, sound is ignored and the value for the relevant type of chat is used instead */
  use_default_sound?: boolean,
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  sound?: string,
  /**
   * If true, show_preview is ignored and the value for the relevant type of chat is used
   * instead
   */
  use_default_show_preview?: boolean,
  /** True, if message content should be displayed in notifications */
  show_preview?: boolean,
|}

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
}

/** Contains information about notification settings for several chats */
export type scopeNotificationSettingsOptional = {|
  _: 'scopeNotificationSettings',
  /** Time left before notifications will be unmuted, in seconds */
  mute_for?: number,
  /**
   * The name of an audio file to be used for notification sounds; only applies to iOS
   * applications
   */
  sound?: string,
  /** True, if message content should be displayed in notifications */
  show_preview?: boolean,
|}

/** Contains information about a message draft */
export type draftMessage = {
  _: 'draftMessage',
  /** Identifier of the message to reply to; 0 if none */
  reply_to_message_id: number,
  /** Content of the message draft; this should always be of type inputMessageText */
  input_message_text: InputMessageContent,
}

/** Contains information about a message draft */
export type draftMessageOptional = {|
  _: 'draftMessage',
  /** Identifier of the message to reply to; 0 if none */
  reply_to_message_id?: number,
  /** Content of the message draft; this should always be of type inputMessageText */
  input_message_text?: InputMessageContentOptional,
|}

/** An ordinary chat with a user */
export type chatTypePrivate = {
  _: 'chatTypePrivate',
  /** User identifier */
  user_id: number,
}

/** An ordinary chat with a user */
export type chatTypePrivateOptional = {|
  _: 'chatTypePrivate',
  /** User identifier */
  user_id?: number,
|}

/** A basic group (i.e., a chat with 0-200 other users) */
export type chatTypeBasicGroup = {
  _: 'chatTypeBasicGroup',
  /** Basic group identifier */
  basic_group_id: number,
}

/** A basic group (i.e., a chat with 0-200 other users) */
export type chatTypeBasicGroupOptional = {|
  _: 'chatTypeBasicGroup',
  /** Basic group identifier */
  basic_group_id?: number,
|}

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
export type chatTypeSupergroupOptional = {|
  _: 'chatTypeSupergroup',
  /** Supergroup or channel identifier */
  supergroup_id?: number,
  /** True, if the supergroup is a channel */
  is_channel?: boolean,
|}

/** A secret chat with a user */
export type chatTypeSecret = {
  _: 'chatTypeSecret',
  /** Secret chat identifier */
  secret_chat_id: number,
  /** User identifier of the secret chat peer */
  user_id: number,
}

/** A secret chat with a user */
export type chatTypeSecretOptional = {|
  _: 'chatTypeSecret',
  /** Secret chat identifier */
  secret_chat_id?: number,
  /** User identifier of the secret chat peer */
  user_id?: number,
|}

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
  order: (number | string),
  /** True, if the chat is pinned */
  is_pinned: boolean,
  /** True, if the chat is marked as unread */
  is_marked_as_unread: boolean,
  /** True, if the chat is sponsored by the user's MTProxy server */
  is_sponsored: boolean,
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
export type chatOptional = {|
  _: 'chat',
  /** Chat unique identifier */
  id?: number,
  /** Type of the chat */
  type?: ChatTypeOptional,
  /** Chat title */
  title?: string,
  /** Chat photo; may be null */
  photo?: chatPhotoOptional,
  /** Last message in the chat; may be null */
  last_message?: messageOptional,
  /**
   * Descending parameter by which chats are sorted in the main chat list. If the order
   * number of two chats is the same, they must be sorted in descending order by ID. If
   * 0, the position of the chat in the list is undetermined
   */
  order?: (number | string),
  /** True, if the chat is pinned */
  is_pinned?: boolean,
  /** True, if the chat is marked as unread */
  is_marked_as_unread?: boolean,
  /** True, if the chat is sponsored by the user's MTProxy server */
  is_sponsored?: boolean,
  /** True, if the chat can be reported to Telegram moderators through reportChat */
  can_be_reported?: boolean,
  /**
   * Default value of the disable_notification parameter, used when a message is sent
   * to the chat
   */
  default_disable_notification?: boolean,
  /** Number of unread messages in the chat */
  unread_count?: number,
  /** Identifier of the last read incoming message */
  last_read_inbox_message_id?: number,
  /** Identifier of the last read outgoing message */
  last_read_outbox_message_id?: number,
  /** Number of unread messages with a mention/reply in the chat */
  unread_mention_count?: number,
  /** Notification settings for this chat */
  notification_settings?: chatNotificationSettingsOptional,
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  reply_markup_message_id?: number,
  /** A draft of a message in the chat; may be null */
  draft_message?: draftMessageOptional,
  /**
   * Contains client-specific data associated with the chat. (For example, the chat position
   * or local chat notification settings can be stored here.) Persistent if a message
   * database is used
   */
  client_data?: string,
|}

/** Represents a list of chats */
export type chats = {
  _: 'chats',
  /** List of chat identifiers */
  chat_ids: number[],
}

/** Represents a list of chats */
export type chatsOptional = {|
  _: 'chats',
  /** List of chat identifiers */
  chat_ids?: number[],
|}

/** Contains a chat invite link */
export type chatInviteLink = {
  _: 'chatInviteLink',
  /** Chat invite link */
  invite_link: string,
}

/** Contains a chat invite link */
export type chatInviteLinkOptional = {|
  _: 'chatInviteLink',
  /** Chat invite link */
  invite_link?: string,
|}

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
  member_user_ids: number[],
  /** True, if the chat is a public supergroup or channel with a username */
  is_public: boolean,
}

/** Contains information about a chat invite link */
export type chatInviteLinkInfoOptional = {|
  _: 'chatInviteLinkInfo',
  /** Chat identifier of the invite link; 0 if the user is not a member of this chat */
  chat_id?: number,
  /** Contains information about the type of the chat */
  type?: ChatTypeOptional,
  /** Title of the chat */
  title?: string,
  /** Chat photo; may be null */
  photo?: chatPhotoOptional,
  /** Number of members */
  member_count?: number,
  /** User identifiers of some chat members that may be known to the current user */
  member_user_ids?: number[],
  /** True, if the chat is a public supergroup or channel with a username */
  is_public?: boolean,
|}

/** A simple button, with text that should be sent when the button is pressed */
export type keyboardButtonTypeText = {
  _: 'keyboardButtonTypeText',
}

/** A simple button, with text that should be sent when the button is pressed */
export type keyboardButtonTypeTextOptional = {|
  _: 'keyboardButtonTypeText',
|}

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
export type keyboardButtonTypeRequestPhoneNumberOptional = {|
  _: 'keyboardButtonTypeRequestPhoneNumber',
|}

/** A button that sends the user's location when pressed; available only in private chats */
export type keyboardButtonTypeRequestLocation = {
  _: 'keyboardButtonTypeRequestLocation',
}

/** A button that sends the user's location when pressed; available only in private chats */
export type keyboardButtonTypeRequestLocationOptional = {|
  _: 'keyboardButtonTypeRequestLocation',
|}

/** Represents a single button in a bot keyboard */
export type keyboardButton = {
  _: 'keyboardButton',
  /** Text of the button */
  text: string,
  /** Type of the button */
  type: KeyboardButtonType,
}

/** Represents a single button in a bot keyboard */
export type keyboardButtonOptional = {|
  _: 'keyboardButton',
  /** Text of the button */
  text?: string,
  /** Type of the button */
  type?: KeyboardButtonTypeOptional,
|}

/** A button that opens a specified URL */
export type inlineKeyboardButtonTypeUrl = {
  _: 'inlineKeyboardButtonTypeUrl',
  /** HTTP or tg:// URL to open */
  url: string,
}

/** A button that opens a specified URL */
export type inlineKeyboardButtonTypeUrlOptional = {|
  _: 'inlineKeyboardButtonTypeUrl',
  /** HTTP or tg:// URL to open */
  url?: string,
|}

/** A button that sends a special callback query to a bot */
export type inlineKeyboardButtonTypeCallback = {
  _: 'inlineKeyboardButtonTypeCallback',
  /** Data to be sent to the bot via a callback query */
  data: string,
}

/** A button that sends a special callback query to a bot */
export type inlineKeyboardButtonTypeCallbackOptional = {|
  _: 'inlineKeyboardButtonTypeCallback',
  /** Data to be sent to the bot via a callback query */
  data?: string,
|}

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
export type inlineKeyboardButtonTypeCallbackGameOptional = {|
  _: 'inlineKeyboardButtonTypeCallbackGame',
|}

/** A button that forces an inline query to the bot to be inserted in the input field */
export type inlineKeyboardButtonTypeSwitchInline = {
  _: 'inlineKeyboardButtonTypeSwitchInline',
  /** Inline query to be sent to the bot */
  query: string,
  /** True, if the inline query should be sent from the current chat */
  in_current_chat: boolean,
}

/** A button that forces an inline query to the bot to be inserted in the input field */
export type inlineKeyboardButtonTypeSwitchInlineOptional = {|
  _: 'inlineKeyboardButtonTypeSwitchInline',
  /** Inline query to be sent to the bot */
  query?: string,
  /** True, if the inline query should be sent from the current chat */
  in_current_chat?: boolean,
|}

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
export type inlineKeyboardButtonTypeBuyOptional = {|
  _: 'inlineKeyboardButtonTypeBuy',
|}

/** Represents a single button in an inline keyboard */
export type inlineKeyboardButton = {
  _: 'inlineKeyboardButton',
  /** Text of the button */
  text: string,
  /** Type of the button */
  type: InlineKeyboardButtonType,
}

/** Represents a single button in an inline keyboard */
export type inlineKeyboardButtonOptional = {|
  _: 'inlineKeyboardButton',
  /** Text of the button */
  text?: string,
  /** Type of the button */
  type?: InlineKeyboardButtonTypeOptional,
|}

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
export type replyMarkupRemoveKeyboardOptional = {|
  _: 'replyMarkupRemoveKeyboard',
  /**
   * True, if the keyboard is removed only for the mentioned users or the target user
   * of a reply
   */
  is_personal?: boolean,
|}

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
export type replyMarkupForceReplyOptional = {|
  _: 'replyMarkupForceReply',
  /**
   * True, if a forced reply must automatically be shown to the current user. For outgoing
   * messages, specify true to show the forced reply only for the mentioned users and
   * for the target user of a reply
   */
  is_personal?: boolean,
|}

/** Contains a custom keyboard layout to quickly reply to bots */
export type replyMarkupShowKeyboard = {
  _: 'replyMarkupShowKeyboard',
  /** A list of rows of bot keyboard buttons */
  rows: keyboardButton[][],
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
export type replyMarkupShowKeyboardOptional = {|
  _: 'replyMarkupShowKeyboard',
  /** A list of rows of bot keyboard buttons */
  rows?: keyboardButtonOptional[][],
  /** True, if the client needs to resize the keyboard vertically */
  resize_keyboard?: boolean,
  /** True, if the client needs to hide the keyboard after use */
  one_time?: boolean,
  /**
   * True, if the keyboard must automatically be shown to the current user. For outgoing
   * messages, specify true to show the keyboard only for the mentioned users and for
   * the target user of a reply
   */
  is_personal?: boolean,
|}

/** Contains an inline keyboard layout */
export type replyMarkupInlineKeyboard = {
  _: 'replyMarkupInlineKeyboard',
  /** A list of rows of inline keyboard buttons */
  rows: inlineKeyboardButton[][],
}

/** Contains an inline keyboard layout */
export type replyMarkupInlineKeyboardOptional = {|
  _: 'replyMarkupInlineKeyboard',
  /** A list of rows of inline keyboard buttons */
  rows?: inlineKeyboardButtonOptional[][],
|}

/** A plain text */
export type richTextPlain = {
  _: 'richTextPlain',
  /** Text */
  text: string,
}

/** A plain text */
export type richTextPlainOptional = {|
  _: 'richTextPlain',
  /** Text */
  text?: string,
|}

/** A bold rich text */
export type richTextBold = {
  _: 'richTextBold',
  /** Text */
  text: RichText,
}

/** A bold rich text */
export type richTextBoldOptional = {|
  _: 'richTextBold',
  /** Text */
  text?: RichTextOptional,
|}

/** An italicized rich text */
export type richTextItalic = {
  _: 'richTextItalic',
  /** Text */
  text: RichText,
}

/** An italicized rich text */
export type richTextItalicOptional = {|
  _: 'richTextItalic',
  /** Text */
  text?: RichTextOptional,
|}

/** An underlined rich text */
export type richTextUnderline = {
  _: 'richTextUnderline',
  /** Text */
  text: RichText,
}

/** An underlined rich text */
export type richTextUnderlineOptional = {|
  _: 'richTextUnderline',
  /** Text */
  text?: RichTextOptional,
|}

/** A strike-through rich text */
export type richTextStrikethrough = {
  _: 'richTextStrikethrough',
  /** Text */
  text: RichText,
}

/** A strike-through rich text */
export type richTextStrikethroughOptional = {|
  _: 'richTextStrikethrough',
  /** Text */
  text?: RichTextOptional,
|}

/** A fixed-width rich text */
export type richTextFixed = {
  _: 'richTextFixed',
  /** Text */
  text: RichText,
}

/** A fixed-width rich text */
export type richTextFixedOptional = {|
  _: 'richTextFixed',
  /** Text */
  text?: RichTextOptional,
|}

/** A rich text URL link */
export type richTextUrl = {
  _: 'richTextUrl',
  /** Text */
  text: RichText,
  /** URL */
  url: string,
}

/** A rich text URL link */
export type richTextUrlOptional = {|
  _: 'richTextUrl',
  /** Text */
  text?: RichTextOptional,
  /** URL */
  url?: string,
|}

/** A rich text email link */
export type richTextEmailAddress = {
  _: 'richTextEmailAddress',
  /** Text */
  text: RichText,
  /** Email address */
  email_address: string,
}

/** A rich text email link */
export type richTextEmailAddressOptional = {|
  _: 'richTextEmailAddress',
  /** Text */
  text?: RichTextOptional,
  /** Email address */
  email_address?: string,
|}

/** A concatenation of rich texts */
export type richTexts = {
  _: 'richTexts',
  /** Texts */
  texts: RichText[],
}

/** A concatenation of rich texts */
export type richTextsOptional = {|
  _: 'richTexts',
  /** Texts */
  texts?: RichTextOptional[],
|}

/** The title of a page */
export type pageBlockTitle = {
  _: 'pageBlockTitle',
  /** Title */
  title: RichText,
}

/** The title of a page */
export type pageBlockTitleOptional = {|
  _: 'pageBlockTitle',
  /** Title */
  title?: RichTextOptional,
|}

/** The subtitle of a page */
export type pageBlockSubtitle = {
  _: 'pageBlockSubtitle',
  /** Subtitle */
  subtitle: RichText,
}

/** The subtitle of a page */
export type pageBlockSubtitleOptional = {|
  _: 'pageBlockSubtitle',
  /** Subtitle */
  subtitle?: RichTextOptional,
|}

/** The author and publishing date of a page */
export type pageBlockAuthorDate = {
  _: 'pageBlockAuthorDate',
  /** Author */
  author: RichText,
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  publish_date: number,
}

/** The author and publishing date of a page */
export type pageBlockAuthorDateOptional = {|
  _: 'pageBlockAuthorDate',
  /** Author */
  author?: RichTextOptional,
  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  publish_date?: number,
|}

/** A header */
export type pageBlockHeader = {
  _: 'pageBlockHeader',
  /** Header */
  header: RichText,
}

/** A header */
export type pageBlockHeaderOptional = {|
  _: 'pageBlockHeader',
  /** Header */
  header?: RichTextOptional,
|}

/** A subheader */
export type pageBlockSubheader = {
  _: 'pageBlockSubheader',
  /** Subheader */
  subheader: RichText,
}

/** A subheader */
export type pageBlockSubheaderOptional = {|
  _: 'pageBlockSubheader',
  /** Subheader */
  subheader?: RichTextOptional,
|}

/** A text paragraph */
export type pageBlockParagraph = {
  _: 'pageBlockParagraph',
  /** Paragraph text */
  text: RichText,
}

/** A text paragraph */
export type pageBlockParagraphOptional = {|
  _: 'pageBlockParagraph',
  /** Paragraph text */
  text?: RichTextOptional,
|}

/** A preformatted text paragraph */
export type pageBlockPreformatted = {
  _: 'pageBlockPreformatted',
  /** Paragraph text */
  text: RichText,
  /** Programming language for which the text should be formatted */
  language: string,
}

/** A preformatted text paragraph */
export type pageBlockPreformattedOptional = {|
  _: 'pageBlockPreformatted',
  /** Paragraph text */
  text?: RichTextOptional,
  /** Programming language for which the text should be formatted */
  language?: string,
|}

/** The footer of a page */
export type pageBlockFooter = {
  _: 'pageBlockFooter',
  /** Footer */
  footer: RichText,
}

/** The footer of a page */
export type pageBlockFooterOptional = {|
  _: 'pageBlockFooter',
  /** Footer */
  footer?: RichTextOptional,
|}

/** An empty block separating a page */
export type pageBlockDivider = {
  _: 'pageBlockDivider',
}

/** An empty block separating a page */
export type pageBlockDividerOptional = {|
  _: 'pageBlockDivider',
|}

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
export type pageBlockAnchorOptional = {|
  _: 'pageBlockAnchor',
  /** Name of the anchor */
  name?: string,
|}

/** A list of texts */
export type pageBlockList = {
  _: 'pageBlockList',
  /** Texts */
  items: RichText[],
  /** True, if the items should be marked with numbers */
  is_ordered: boolean,
}

/** A list of texts */
export type pageBlockListOptional = {|
  _: 'pageBlockList',
  /** Texts */
  items?: RichTextOptional[],
  /** True, if the items should be marked with numbers */
  is_ordered?: boolean,
|}

/** A block quote */
export type pageBlockBlockQuote = {
  _: 'pageBlockBlockQuote',
  /** Quote text */
  text: RichText,
  /** Quote caption */
  caption: RichText,
}

/** A block quote */
export type pageBlockBlockQuoteOptional = {|
  _: 'pageBlockBlockQuote',
  /** Quote text */
  text?: RichTextOptional,
  /** Quote caption */
  caption?: RichTextOptional,
|}

/** A pull quote */
export type pageBlockPullQuote = {
  _: 'pageBlockPullQuote',
  /** Quote text */
  text: RichText,
  /** Quote caption */
  caption: RichText,
}

/** A pull quote */
export type pageBlockPullQuoteOptional = {|
  _: 'pageBlockPullQuote',
  /** Quote text */
  text?: RichTextOptional,
  /** Quote caption */
  caption?: RichTextOptional,
|}

/** An animation */
export type pageBlockAnimation = {
  _: 'pageBlockAnimation',
  /** Animation file; may be null */
  animation: animation,
  /** Animation caption */
  caption: RichText,
  /** True, if the animation should be played automatically */
  need_autoplay: boolean,
}

/** An animation */
export type pageBlockAnimationOptional = {|
  _: 'pageBlockAnimation',
  /** Animation file; may be null */
  animation?: animationOptional,
  /** Animation caption */
  caption?: RichTextOptional,
  /** True, if the animation should be played automatically */
  need_autoplay?: boolean,
|}

/** An audio file */
export type pageBlockAudio = {
  _: 'pageBlockAudio',
  /** Audio file; may be null */
  audio: audio,
  /** Audio file caption */
  caption: RichText,
}

/** An audio file */
export type pageBlockAudioOptional = {|
  _: 'pageBlockAudio',
  /** Audio file; may be null */
  audio?: audioOptional,
  /** Audio file caption */
  caption?: RichTextOptional,
|}

/** A photo */
export type pageBlockPhoto = {
  _: 'pageBlockPhoto',
  /** Photo file; may be null */
  photo: photo,
  /** Photo caption */
  caption: RichText,
}

/** A photo */
export type pageBlockPhotoOptional = {|
  _: 'pageBlockPhoto',
  /** Photo file; may be null */
  photo?: photoOptional,
  /** Photo caption */
  caption?: RichTextOptional,
|}

/** A video */
export type pageBlockVideo = {
  _: 'pageBlockVideo',
  /** Video file; may be null */
  video: video,
  /** Video caption */
  caption: RichText,
  /** True, if the video should be played automatically */
  need_autoplay: boolean,
  /** True, if the video should be looped */
  is_looped: boolean,
}

/** A video */
export type pageBlockVideoOptional = {|
  _: 'pageBlockVideo',
  /** Video file; may be null */
  video?: videoOptional,
  /** Video caption */
  caption?: RichTextOptional,
  /** True, if the video should be played automatically */
  need_autoplay?: boolean,
  /** True, if the video should be looped */
  is_looped?: boolean,
|}

/** A page cover */
export type pageBlockCover = {
  _: 'pageBlockCover',
  /** Cover */
  cover: PageBlock,
}

/** A page cover */
export type pageBlockCoverOptional = {|
  _: 'pageBlockCover',
  /** Cover */
  cover?: PageBlockOptional,
|}

/** An embedded web page */
export type pageBlockEmbedded = {
  _: 'pageBlockEmbedded',
  /** Web page URL, if available */
  url: string,
  /** HTML-markup of the embedded page */
  html: string,
  /** Poster photo, if available; may be null */
  poster_photo: photo,
  /** Block width */
  width: number,
  /** Block height */
  height: number,
  /** Block caption */
  caption: RichText,
  /** True, if the block should be full width */
  is_full_width: boolean,
  /** True, if scrolling should be allowed */
  allow_scrolling: boolean,
}

/** An embedded web page */
export type pageBlockEmbeddedOptional = {|
  _: 'pageBlockEmbedded',
  /** Web page URL, if available */
  url?: string,
  /** HTML-markup of the embedded page */
  html?: string,
  /** Poster photo, if available; may be null */
  poster_photo?: photoOptional,
  /** Block width */
  width?: number,
  /** Block height */
  height?: number,
  /** Block caption */
  caption?: RichTextOptional,
  /** True, if the block should be full width */
  is_full_width?: boolean,
  /** True, if scrolling should be allowed */
  allow_scrolling?: boolean,
|}

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
  page_blocks: PageBlock[],
  /** Post caption */
  caption: RichText,
}

/** An embedded post */
export type pageBlockEmbeddedPostOptional = {|
  _: 'pageBlockEmbeddedPost',
  /** Web page URL */
  url?: string,
  /** Post author */
  author?: string,
  /** Post author photo */
  author_photo?: photoOptional,
  /** Point in time (Unix timestamp) when the post was created; 0 if unknown */
  date?: number,
  /** Post content */
  page_blocks?: PageBlockOptional[],
  /** Post caption */
  caption?: RichTextOptional,
|}

/** A collage */
export type pageBlockCollage = {
  _: 'pageBlockCollage',
  /** Collage item contents */
  page_blocks: PageBlock[],
  /** Block caption */
  caption: RichText,
}

/** A collage */
export type pageBlockCollageOptional = {|
  _: 'pageBlockCollage',
  /** Collage item contents */
  page_blocks?: PageBlockOptional[],
  /** Block caption */
  caption?: RichTextOptional,
|}

/** A slideshow */
export type pageBlockSlideshow = {
  _: 'pageBlockSlideshow',
  /** Slideshow item contents */
  page_blocks: PageBlock[],
  /** Block caption */
  caption: RichText,
}

/** A slideshow */
export type pageBlockSlideshowOptional = {|
  _: 'pageBlockSlideshow',
  /** Slideshow item contents */
  page_blocks?: PageBlockOptional[],
  /** Block caption */
  caption?: RichTextOptional,
|}

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
export type pageBlockChatLinkOptional = {|
  _: 'pageBlockChatLink',
  /** Chat title */
  title?: string,
  /** Chat photo; may be null */
  photo?: chatPhotoOptional,
  /** Chat username, by which all other information about the chat should be resolved */
  username?: string,
|}

/** Describes an instant view page for a web page */
export type webPageInstantView = {
  _: 'webPageInstantView',
  /** Content of the web page */
  page_blocks: PageBlock[],
  /**
   * True, if the instant view contains the full page. A network request might be needed
   * to get the full web page instant view
   */
  is_full: boolean,
}

/** Describes an instant view page for a web page */
export type webPageInstantViewOptional = {|
  _: 'webPageInstantView',
  /** Content of the web page */
  page_blocks?: PageBlockOptional[],
  /**
   * True, if the instant view contains the full page. A network request might be needed
   * to get the full web page instant view
   */
  is_full?: boolean,
|}

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
  /** True, if the web page has an instant view */
  has_instant_view: boolean,
}

/** Describes a web page preview */
export type webPageOptional = {|
  _: 'webPage',
  /** Original URL of the link */
  url?: string,
  /** URL to display */
  display_url?: string,
  /**
   * Type of the web page. Can be: article, photo, audio, video, document, profile, app,
   * or something else
   */
  type?: string,
  /** Short name of the site (e.g., Google Docs, App Store) */
  site_name?: string,
  /** Title of the content */
  title?: string,
  /** Description of the content */
  description?: string,
  /** Image representing the content; may be null */
  photo?: photoOptional,
  /** URL to show in the embedded preview */
  embed_url?: string,
  /** MIME type of the embedded preview, (e.g., text/html or video/mp4) */
  embed_type?: string,
  /** Width of the embedded preview */
  embed_width?: number,
  /** Height of the embedded preview */
  embed_height?: number,
  /** Duration of the content, in seconds */
  duration?: number,
  /** Author of the content */
  author?: string,
  /** Preview of the content as an animation, if available; may be null */
  animation?: animationOptional,
  /** Preview of the content as an audio file, if available; may be null */
  audio?: audioOptional,
  /**
   * Preview of the content as a document, if available (currently only available for
   * small PDF files and ZIP archives); may be null
   */
  document?: documentOptional,
  /** Preview of the content as a sticker for small WEBP files, if available; may be null */
  sticker?: stickerOptional,
  /** Preview of the content as a video, if available; may be null */
  video?: videoOptional,
  /** Preview of the content as a video note, if available; may be null */
  video_note?: videoNoteOptional,
  /** Preview of the content as a voice note, if available; may be null */
  voice_note?: voiceNoteOptional,
  /** True, if the web page has an instant view */
  has_instant_view?: boolean,
|}

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
export type addressOptional = {|
  _: 'address',
  /** A two-letter ISO 3166-1 alpha-2 country code */
  country_code?: string,
  /** State, if applicable */
  state?: string,
  /** City */
  city?: string,
  /** First line of the address */
  street_line1?: string,
  /** Second line of the address */
  street_line2?: string,
  /** Address postal code */
  postal_code?: string,
|}

/** Portion of the price of a product (e.g., "delivery cost", "tax amount") */
export type labeledPricePart = {
  _: 'labeledPricePart',
  /** Label for this portion of the product price */
  label: string,
  /** Currency amount in minimal quantity of the currency */
  amount: number,
}

/** Portion of the price of a product (e.g., "delivery cost", "tax amount") */
export type labeledPricePartOptional = {|
  _: 'labeledPricePart',
  /** Label for this portion of the product price */
  label?: string,
  /** Currency amount in minimal quantity of the currency */
  amount?: number,
|}

/** Product invoice */
export type invoice = {
  _: 'invoice',
  /** ISO 4217 currency code */
  currency: string,
  /** A list of objects used to calculate the total price of the product */
  price_parts: labeledPricePart[],
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
export type invoiceOptional = {|
  _: 'invoice',
  /** ISO 4217 currency code */
  currency?: string,
  /** A list of objects used to calculate the total price of the product */
  price_parts?: labeledPricePartOptional[],
  /** True, if the payment is a test payment */
  is_test?: boolean,
  /** True, if the user's name is needed for payment */
  need_name?: boolean,
  /** True, if the user's phone number is needed for payment */
  need_phone_number?: boolean,
  /** True, if the user's email address is needed for payment */
  need_email_address?: boolean,
  /** True, if the user's shipping address is needed for payment */
  need_shipping_address?: boolean,
  /** True, if the user's phone number will be sent to the provider */
  send_phone_number_to_provider?: boolean,
  /** True, if the user's email address will be sent to the provider */
  send_email_address_to_provider?: boolean,
  /** True, if the total price depends on the shipping method */
  is_flexible?: boolean,
|}

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
export type orderInfoOptional = {|
  _: 'orderInfo',
  /** Name of the user */
  name?: string,
  /** Phone number of the user */
  phone_number?: string,
  /** Email address of the user */
  email_address?: string,
  /** Shipping address for this order; may be null */
  shipping_address?: addressOptional,
|}

/** One shipping option */
export type shippingOption = {
  _: 'shippingOption',
  /** Shipping option identifier */
  id: string,
  /** Option title */
  title: string,
  /** A list of objects used to calculate the total shipping costs */
  price_parts: labeledPricePart[],
}

/** One shipping option */
export type shippingOptionOptional = {|
  _: 'shippingOption',
  /** Shipping option identifier */
  id?: string,
  /** Option title */
  title?: string,
  /** A list of objects used to calculate the total shipping costs */
  price_parts?: labeledPricePartOptional[],
|}

/** Contains information about saved card credentials */
export type savedCredentials = {
  _: 'savedCredentials',
  /** Unique identifier of the saved credentials */
  id: string,
  /** Title of the saved credentials */
  title: string,
}

/** Contains information about saved card credentials */
export type savedCredentialsOptional = {|
  _: 'savedCredentials',
  /** Unique identifier of the saved credentials */
  id?: string,
  /** Title of the saved credentials */
  title?: string,
|}

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
export type inputCredentialsSavedOptional = {|
  _: 'inputCredentialsSaved',
  /** Identifier of the saved credentials */
  saved_credentials_id?: string,
|}

/** Applies if a user enters new credentials on a payment provider website */
export type inputCredentialsNew = {
  _: 'inputCredentialsNew',
  /** Contains JSON-encoded data with a credential identifier from the payment provider */
  data: string,
  /** True, if the credential identifier can be saved on the server side */
  allow_save: boolean,
}

/** Applies if a user enters new credentials on a payment provider website */
export type inputCredentialsNewOptional = {|
  _: 'inputCredentialsNew',
  /** Contains JSON-encoded data with a credential identifier from the payment provider */
  data?: string,
  /** True, if the credential identifier can be saved on the server side */
  allow_save?: boolean,
|}

/** Applies if a user enters new credentials using Android Pay */
export type inputCredentialsAndroidPay = {
  _: 'inputCredentialsAndroidPay',
  /** JSON-encoded data with the credential identifier */
  data: string,
}

/** Applies if a user enters new credentials using Android Pay */
export type inputCredentialsAndroidPayOptional = {|
  _: 'inputCredentialsAndroidPay',
  /** JSON-encoded data with the credential identifier */
  data?: string,
|}

/** Applies if a user enters new credentials using Apple Pay */
export type inputCredentialsApplePay = {
  _: 'inputCredentialsApplePay',
  /** JSON-encoded data with the credential identifier */
  data: string,
}

/** Applies if a user enters new credentials using Apple Pay */
export type inputCredentialsApplePayOptional = {|
  _: 'inputCredentialsApplePay',
  /** JSON-encoded data with the credential identifier */
  data?: string,
|}

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
export type paymentsProviderStripeOptional = {|
  _: 'paymentsProviderStripe',
  /** Stripe API publishable key */
  publishable_key?: string,
  /** True, if the user country must be provided */
  need_country?: boolean,
  /** True, if the user ZIP/postal code must be provided */
  need_postal_code?: boolean,
  /** True, if the cardholder name must be provided */
  need_cardholder_name?: boolean,
|}

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
export type paymentFormOptional = {|
  _: 'paymentForm',
  /** Full information of the invoice */
  invoice?: invoiceOptional,
  /** Payment form URL */
  url?: string,
  /**
   * Contains information about the payment provider, if available, to support it natively
   * without the need for opening the URL; may be null
   */
  payments_provider?: paymentsProviderStripeOptional,
  /** Saved server-side order information; may be null */
  saved_order_info?: orderInfoOptional,
  /** Contains information about saved card credentials; may be null */
  saved_credentials?: savedCredentialsOptional,
  /** True, if the user can choose to save credentials */
  can_save_credentials?: boolean,
  /**
   * True, if the user will be able to save credentials protected by a password they set
   * up
   */
  need_password?: boolean,
|}

/**
 * Contains a temporary identifier of validated order information, which is stored for
 * one hour. Also contains the available shipping options
 */
export type validatedOrderInfo = {
  _: 'validatedOrderInfo',
  /** Temporary identifier of the order information */
  order_info_id: string,
  /** Available shipping options */
  shipping_options: shippingOption[],
}

/**
 * Contains a temporary identifier of validated order information, which is stored for
 * one hour. Also contains the available shipping options
 */
export type validatedOrderInfoOptional = {|
  _: 'validatedOrderInfo',
  /** Temporary identifier of the order information */
  order_info_id?: string,
  /** Available shipping options */
  shipping_options?: shippingOptionOptional[],
|}

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
export type paymentResultOptional = {|
  _: 'paymentResult',
  /**
   * True, if the payment request was successful; otherwise the verification_url will
   * be not empty
   */
  success?: boolean,
  /** URL for additional payment credentials verification */
  verification_url?: string,
|}

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
export type paymentReceiptOptional = {|
  _: 'paymentReceipt',
  /** Point in time (Unix timestamp) when the payment was made */
  date?: number,
  /** User identifier of the payment provider bot */
  payments_provider_user_id?: number,
  /** Contains information about the invoice */
  invoice?: invoiceOptional,
  /** Contains order information; may be null */
  order_info?: orderInfoOptional,
  /** Chosen shipping option; may be null */
  shipping_option?: shippingOptionOptional,
  /** Title of the saved credentials */
  credentials_title?: string,
|}

/** File with the date it was uploaded */
export type datedFile = {
  _: 'datedFile',
  /** The file */
  file: file,
  /** Point in time (Unix timestamp) when the file was uploaded */
  date: number,
}

/** File with the date it was uploaded */
export type datedFileOptional = {|
  _: 'datedFile',
  /** The file */
  file?: fileOptional,
  /** Point in time (Unix timestamp) when the file was uploaded */
  date?: number,
|}

/** A Telegram Passport element containing the user's personal details */
export type passportElementTypePersonalDetails = {
  _: 'passportElementTypePersonalDetails',
}

/** A Telegram Passport element containing the user's personal details */
export type passportElementTypePersonalDetailsOptional = {|
  _: 'passportElementTypePersonalDetails',
|}

/** A Telegram Passport element containing the user's passport */
export type passportElementTypePassport = {
  _: 'passportElementTypePassport',
}

/** A Telegram Passport element containing the user's passport */
export type passportElementTypePassportOptional = {|
  _: 'passportElementTypePassport',
|}

/** A Telegram Passport element containing the user's driver license */
export type passportElementTypeDriverLicense = {
  _: 'passportElementTypeDriverLicense',
}

/** A Telegram Passport element containing the user's driver license */
export type passportElementTypeDriverLicenseOptional = {|
  _: 'passportElementTypeDriverLicense',
|}

/** A Telegram Passport element containing the user's identity card */
export type passportElementTypeIdentityCard = {
  _: 'passportElementTypeIdentityCard',
}

/** A Telegram Passport element containing the user's identity card */
export type passportElementTypeIdentityCardOptional = {|
  _: 'passportElementTypeIdentityCard',
|}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementTypeInternalPassport = {
  _: 'passportElementTypeInternalPassport',
}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementTypeInternalPassportOptional = {|
  _: 'passportElementTypeInternalPassport',
|}

/** A Telegram Passport element containing the user's address */
export type passportElementTypeAddress = {
  _: 'passportElementTypeAddress',
}

/** A Telegram Passport element containing the user's address */
export type passportElementTypeAddressOptional = {|
  _: 'passportElementTypeAddress',
|}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementTypeUtilityBill = {
  _: 'passportElementTypeUtilityBill',
}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementTypeUtilityBillOptional = {|
  _: 'passportElementTypeUtilityBill',
|}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementTypeBankStatement = {
  _: 'passportElementTypeBankStatement',
}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementTypeBankStatementOptional = {|
  _: 'passportElementTypeBankStatement',
|}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementTypeRentalAgreement = {
  _: 'passportElementTypeRentalAgreement',
}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementTypeRentalAgreementOptional = {|
  _: 'passportElementTypeRentalAgreement',
|}

/** A Telegram Passport element containing the registration page of the user's passport */
export type passportElementTypePassportRegistration = {
  _: 'passportElementTypePassportRegistration',
}

/** A Telegram Passport element containing the registration page of the user's passport */
export type passportElementTypePassportRegistrationOptional = {|
  _: 'passportElementTypePassportRegistration',
|}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTypeTemporaryRegistration = {
  _: 'passportElementTypeTemporaryRegistration',
}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTypeTemporaryRegistrationOptional = {|
  _: 'passportElementTypeTemporaryRegistration',
|}

/** A Telegram Passport element containing the user's phone number */
export type passportElementTypePhoneNumber = {
  _: 'passportElementTypePhoneNumber',
}

/** A Telegram Passport element containing the user's phone number */
export type passportElementTypePhoneNumberOptional = {|
  _: 'passportElementTypePhoneNumber',
|}

/** A Telegram Passport element containing the user's email address */
export type passportElementTypeEmailAddress = {
  _: 'passportElementTypeEmailAddress',
}

/** A Telegram Passport element containing the user's email address */
export type passportElementTypeEmailAddressOptional = {|
  _: 'passportElementTypeEmailAddress',
|}

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
export type dateOptional = {|
  _: 'date',
  /** Day of the month, 1-31 */
  day?: number,
  /** Month, 1-12 */
  month?: number,
  /** Year, 1-9999 */
  year?: number,
|}

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
export type personalDetailsOptional = {|
  _: 'personalDetails',
  /** First name of the user written in English; 1-255 characters */
  first_name?: string,
  /** Middle name of the user written in English; 0-255 characters */
  middle_name?: string,
  /** Last name of the user written in English; 1-255 characters */
  last_name?: string,
  /** Native first name of the user; 1-255 characters */
  native_first_name?: string,
  /** Native middle name of the user; 0-255 characters */
  native_middle_name?: string,
  /** Native last name of the user; 1-255 characters */
  native_last_name?: string,
  /** Birthdate of the user */
  birthdate?: dateOptional,
  /** Gender of the user, "male" or "female" */
  gender?: string,
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's country */
  country_code?: string,
  /** A two-letter ISO 3166-1 alpha-2 country code of the user's residence country */
  residence_country_code?: string,
|}

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
  translation: datedFile[],
}

/** An identity document */
export type identityDocumentOptional = {|
  _: 'identityDocument',
  /** Document number; 1-24 characters */
  number?: string,
  /** Document expiry date; may be null */
  expiry_date?: dateOptional,
  /** Front side of the document */
  front_side?: datedFileOptional,
  /** Reverse side of the document; only for driver license and identity card */
  reverse_side?: datedFileOptional,
  /** Selfie with the document; may be null */
  selfie?: datedFileOptional,
  /** List of files containing a certified English translation of the document */
  translation?: datedFileOptional[],
|}

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
  translation: InputFile[],
}

/** An identity document to be saved to Telegram Passport */
export type inputIdentityDocumentOptional = {|
  _: 'inputIdentityDocument',
  /** Document number; 1-24 characters */
  number?: string,
  /** Document expiry date, if available */
  expiry_date?: dateOptional,
  /** Front side of the document */
  front_side?: InputFileOptional,
  /** Reverse side of the document; only for driver license and identity card */
  reverse_side?: InputFileOptional,
  /** Selfie with the document, if available */
  selfie?: InputFileOptional,
  /** List of files containing a certified English translation of the document */
  translation?: InputFileOptional[],
|}

/** A personal document, containing some information about a user */
export type personalDocument = {
  _: 'personalDocument',
  /** List of files containing the pages of the document */
  files: datedFile[],
  /** List of files containing a certified English translation of the document */
  translation: datedFile[],
}

/** A personal document, containing some information about a user */
export type personalDocumentOptional = {|
  _: 'personalDocument',
  /** List of files containing the pages of the document */
  files?: datedFileOptional[],
  /** List of files containing a certified English translation of the document */
  translation?: datedFileOptional[],
|}

/** A personal document to be saved to Telegram Passport */
export type inputPersonalDocument = {
  _: 'inputPersonalDocument',
  /** List of files containing the pages of the document */
  files: InputFile[],
  /** List of files containing a certified English translation of the document */
  translation: InputFile[],
}

/** A personal document to be saved to Telegram Passport */
export type inputPersonalDocumentOptional = {|
  _: 'inputPersonalDocument',
  /** List of files containing the pages of the document */
  files?: InputFileOptional[],
  /** List of files containing a certified English translation of the document */
  translation?: InputFileOptional[],
|}

/** A Telegram Passport element containing the user's personal details */
export type passportElementPersonalDetails = {
  _: 'passportElementPersonalDetails',
  /** Personal details of the user */
  personal_details: personalDetails,
}

/** A Telegram Passport element containing the user's personal details */
export type passportElementPersonalDetailsOptional = {|
  _: 'passportElementPersonalDetails',
  /** Personal details of the user */
  personal_details?: personalDetailsOptional,
|}

/** A Telegram Passport element containing the user's passport */
export type passportElementPassport = {
  _: 'passportElementPassport',
  /** Passport */
  passport: identityDocument,
}

/** A Telegram Passport element containing the user's passport */
export type passportElementPassportOptional = {|
  _: 'passportElementPassport',
  /** Passport */
  passport?: identityDocumentOptional,
|}

/** A Telegram Passport element containing the user's driver license */
export type passportElementDriverLicense = {
  _: 'passportElementDriverLicense',
  /** Driver license */
  driver_license: identityDocument,
}

/** A Telegram Passport element containing the user's driver license */
export type passportElementDriverLicenseOptional = {|
  _: 'passportElementDriverLicense',
  /** Driver license */
  driver_license?: identityDocumentOptional,
|}

/** A Telegram Passport element containing the user's identity card */
export type passportElementIdentityCard = {
  _: 'passportElementIdentityCard',
  /** Identity card */
  identity_card: identityDocument,
}

/** A Telegram Passport element containing the user's identity card */
export type passportElementIdentityCardOptional = {|
  _: 'passportElementIdentityCard',
  /** Identity card */
  identity_card?: identityDocumentOptional,
|}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementInternalPassport = {
  _: 'passportElementInternalPassport',
  /** Internal passport */
  internal_passport: identityDocument,
}

/** A Telegram Passport element containing the user's internal passport */
export type passportElementInternalPassportOptional = {|
  _: 'passportElementInternalPassport',
  /** Internal passport */
  internal_passport?: identityDocumentOptional,
|}

/** A Telegram Passport element containing the user's address */
export type passportElementAddress = {
  _: 'passportElementAddress',
  /** Address */
  address: address,
}

/** A Telegram Passport element containing the user's address */
export type passportElementAddressOptional = {|
  _: 'passportElementAddress',
  /** Address */
  address?: addressOptional,
|}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementUtilityBill = {
  _: 'passportElementUtilityBill',
  /** Utility bill */
  utility_bill: personalDocument,
}

/** A Telegram Passport element containing the user's utility bill */
export type passportElementUtilityBillOptional = {|
  _: 'passportElementUtilityBill',
  /** Utility bill */
  utility_bill?: personalDocumentOptional,
|}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementBankStatement = {
  _: 'passportElementBankStatement',
  /** Bank statement */
  bank_statement: personalDocument,
}

/** A Telegram Passport element containing the user's bank statement */
export type passportElementBankStatementOptional = {|
  _: 'passportElementBankStatement',
  /** Bank statement */
  bank_statement?: personalDocumentOptional,
|}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementRentalAgreement = {
  _: 'passportElementRentalAgreement',
  /** Rental agreement */
  rental_agreement: personalDocument,
}

/** A Telegram Passport element containing the user's rental agreement */
export type passportElementRentalAgreementOptional = {|
  _: 'passportElementRentalAgreement',
  /** Rental agreement */
  rental_agreement?: personalDocumentOptional,
|}

/** A Telegram Passport element containing the user's passport registration pages */
export type passportElementPassportRegistration = {
  _: 'passportElementPassportRegistration',
  /** Passport registration pages */
  passport_registration: personalDocument,
}

/** A Telegram Passport element containing the user's passport registration pages */
export type passportElementPassportRegistrationOptional = {|
  _: 'passportElementPassportRegistration',
  /** Passport registration pages */
  passport_registration?: personalDocumentOptional,
|}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTemporaryRegistration = {
  _: 'passportElementTemporaryRegistration',
  /** Temporary registration */
  temporary_registration: personalDocument,
}

/** A Telegram Passport element containing the user's temporary registration */
export type passportElementTemporaryRegistrationOptional = {|
  _: 'passportElementTemporaryRegistration',
  /** Temporary registration */
  temporary_registration?: personalDocumentOptional,
|}

/** A Telegram Passport element containing the user's phone number */
export type passportElementPhoneNumber = {
  _: 'passportElementPhoneNumber',
  /** Phone number */
  phone_number: string,
}

/** A Telegram Passport element containing the user's phone number */
export type passportElementPhoneNumberOptional = {|
  _: 'passportElementPhoneNumber',
  /** Phone number */
  phone_number?: string,
|}

/** A Telegram Passport element containing the user's email address */
export type passportElementEmailAddress = {
  _: 'passportElementEmailAddress',
  /** Email address */
  email_address: string,
}

/** A Telegram Passport element containing the user's email address */
export type passportElementEmailAddressOptional = {|
  _: 'passportElementEmailAddress',
  /** Email address */
  email_address?: string,
|}

/** A Telegram Passport element to be saved containing the user's personal details */
export type inputPassportElementPersonalDetails = {
  _: 'inputPassportElementPersonalDetails',
  /** Personal details of the user */
  personal_details: personalDetails,
}

/** A Telegram Passport element to be saved containing the user's personal details */
export type inputPassportElementPersonalDetailsOptional = {|
  _: 'inputPassportElementPersonalDetails',
  /** Personal details of the user */
  personal_details?: personalDetailsOptional,
|}

/** A Telegram Passport element to be saved containing the user's passport */
export type inputPassportElementPassport = {
  _: 'inputPassportElementPassport',
  /** The passport to be saved */
  passport: inputIdentityDocument,
}

/** A Telegram Passport element to be saved containing the user's passport */
export type inputPassportElementPassportOptional = {|
  _: 'inputPassportElementPassport',
  /** The passport to be saved */
  passport?: inputIdentityDocumentOptional,
|}

/** A Telegram Passport element to be saved containing the user's driver license */
export type inputPassportElementDriverLicense = {
  _: 'inputPassportElementDriverLicense',
  /** The driver license to be saved */
  driver_license: inputIdentityDocument,
}

/** A Telegram Passport element to be saved containing the user's driver license */
export type inputPassportElementDriverLicenseOptional = {|
  _: 'inputPassportElementDriverLicense',
  /** The driver license to be saved */
  driver_license?: inputIdentityDocumentOptional,
|}

/** A Telegram Passport element to be saved containing the user's identity card */
export type inputPassportElementIdentityCard = {
  _: 'inputPassportElementIdentityCard',
  /** The identity card to be saved */
  identity_card: inputIdentityDocument,
}

/** A Telegram Passport element to be saved containing the user's identity card */
export type inputPassportElementIdentityCardOptional = {|
  _: 'inputPassportElementIdentityCard',
  /** The identity card to be saved */
  identity_card?: inputIdentityDocumentOptional,
|}

/** A Telegram Passport element to be saved containing the user's internal passport */
export type inputPassportElementInternalPassport = {
  _: 'inputPassportElementInternalPassport',
  /** The internal passport to be saved */
  internal_passport: inputIdentityDocument,
}

/** A Telegram Passport element to be saved containing the user's internal passport */
export type inputPassportElementInternalPassportOptional = {|
  _: 'inputPassportElementInternalPassport',
  /** The internal passport to be saved */
  internal_passport?: inputIdentityDocumentOptional,
|}

/** A Telegram Passport element to be saved containing the user's address */
export type inputPassportElementAddress = {
  _: 'inputPassportElementAddress',
  /** The address to be saved */
  address: address,
}

/** A Telegram Passport element to be saved containing the user's address */
export type inputPassportElementAddressOptional = {|
  _: 'inputPassportElementAddress',
  /** The address to be saved */
  address?: addressOptional,
|}

/** A Telegram Passport element to be saved containing the user's utility bill */
export type inputPassportElementUtilityBill = {
  _: 'inputPassportElementUtilityBill',
  /** The utility bill to be saved */
  utility_bill: inputPersonalDocument,
}

/** A Telegram Passport element to be saved containing the user's utility bill */
export type inputPassportElementUtilityBillOptional = {|
  _: 'inputPassportElementUtilityBill',
  /** The utility bill to be saved */
  utility_bill?: inputPersonalDocumentOptional,
|}

/** A Telegram Passport element to be saved containing the user's bank statement */
export type inputPassportElementBankStatement = {
  _: 'inputPassportElementBankStatement',
  /** The bank statement to be saved */
  bank_statement: inputPersonalDocument,
}

/** A Telegram Passport element to be saved containing the user's bank statement */
export type inputPassportElementBankStatementOptional = {|
  _: 'inputPassportElementBankStatement',
  /** The bank statement to be saved */
  bank_statement?: inputPersonalDocumentOptional,
|}

/** A Telegram Passport element to be saved containing the user's rental agreement */
export type inputPassportElementRentalAgreement = {
  _: 'inputPassportElementRentalAgreement',
  /** The rental agreement to be saved */
  rental_agreement: inputPersonalDocument,
}

/** A Telegram Passport element to be saved containing the user's rental agreement */
export type inputPassportElementRentalAgreementOptional = {|
  _: 'inputPassportElementRentalAgreement',
  /** The rental agreement to be saved */
  rental_agreement?: inputPersonalDocumentOptional,
|}

/** A Telegram Passport element to be saved containing the user's passport registration */
export type inputPassportElementPassportRegistration = {
  _: 'inputPassportElementPassportRegistration',
  /** The passport registration page to be saved */
  passport_registration: inputPersonalDocument,
}

/** A Telegram Passport element to be saved containing the user's passport registration */
export type inputPassportElementPassportRegistrationOptional = {|
  _: 'inputPassportElementPassportRegistration',
  /** The passport registration page to be saved */
  passport_registration?: inputPersonalDocumentOptional,
|}

/** A Telegram Passport element to be saved containing the user's temporary registration */
export type inputPassportElementTemporaryRegistration = {
  _: 'inputPassportElementTemporaryRegistration',
  /** The temporary registration document to be saved */
  temporary_registration: inputPersonalDocument,
}

/** A Telegram Passport element to be saved containing the user's temporary registration */
export type inputPassportElementTemporaryRegistrationOptional = {|
  _: 'inputPassportElementTemporaryRegistration',
  /** The temporary registration document to be saved */
  temporary_registration?: inputPersonalDocumentOptional,
|}

/** A Telegram Passport element to be saved containing the user's phone number */
export type inputPassportElementPhoneNumber = {
  _: 'inputPassportElementPhoneNumber',
  /** The phone number to be saved */
  phone_number: string,
}

/** A Telegram Passport element to be saved containing the user's phone number */
export type inputPassportElementPhoneNumberOptional = {|
  _: 'inputPassportElementPhoneNumber',
  /** The phone number to be saved */
  phone_number?: string,
|}

/** A Telegram Passport element to be saved containing the user's email address */
export type inputPassportElementEmailAddress = {
  _: 'inputPassportElementEmailAddress',
  /** The email address to be saved */
  email_address: string,
}

/** A Telegram Passport element to be saved containing the user's email address */
export type inputPassportElementEmailAddressOptional = {|
  _: 'inputPassportElementEmailAddress',
  /** The email address to be saved */
  email_address?: string,
|}

/** Contains information about saved Telegram Passport elements */
export type passportElements = {
  _: 'passportElements',
  /** Telegram Passport elements */
  elements: PassportElement[],
}

/** Contains information about saved Telegram Passport elements */
export type passportElementsOptional = {|
  _: 'passportElements',
  /** Telegram Passport elements */
  elements?: PassportElementOptional[],
|}

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
export type passportElementErrorSourceUnspecifiedOptional = {|
  _: 'passportElementErrorSourceUnspecified',
|}

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
export type passportElementErrorSourceDataFieldOptional = {|
  _: 'passportElementErrorSourceDataField',
  /** Field name */
  field_name?: string,
|}

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
export type passportElementErrorSourceFrontSideOptional = {|
  _: 'passportElementErrorSourceFrontSide',
|}

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
export type passportElementErrorSourceReverseSideOptional = {|
  _: 'passportElementErrorSourceReverseSide',
|}

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
export type passportElementErrorSourceSelfieOptional = {|
  _: 'passportElementErrorSourceSelfie',
|}

/**
 * One of files with the translation of the document contains an error. The error will
 * be considered resolved when the file changes
 */
export type passportElementErrorSourceTranslationFile = {
  _: 'passportElementErrorSourceTranslationFile',
}

/**
 * One of files with the translation of the document contains an error. The error will
 * be considered resolved when the file changes
 */
export type passportElementErrorSourceTranslationFileOptional = {|
  _: 'passportElementErrorSourceTranslationFile',
|}

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
export type passportElementErrorSourceTranslationFilesOptional = {|
  _: 'passportElementErrorSourceTranslationFiles',
|}

/** The file contains an error. The error will be considered resolved when the file changes */
export type passportElementErrorSourceFile = {
  _: 'passportElementErrorSourceFile',
}

/** The file contains an error. The error will be considered resolved when the file changes */
export type passportElementErrorSourceFileOptional = {|
  _: 'passportElementErrorSourceFile',
|}

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
export type passportElementErrorSourceFilesOptional = {|
  _: 'passportElementErrorSourceFiles',
|}

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
export type passportElementErrorOptional = {|
  _: 'passportElementError',
  /** Type of the Telegram Passport element which has the error */
  type?: PassportElementTypeOptional,
  /** Error message */
  message?: string,
  /** Error source */
  source?: PassportElementErrorSourceOptional,
|}

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
export type passportSuitableElementOptional = {|
  _: 'passportSuitableElement',
  /** Type of the element */
  type?: PassportElementTypeOptional,
  /** True, if a selfie is required with the identity document */
  is_selfie_required?: boolean,
  /** True, if a certified English translation is required with the document */
  is_translation_required?: boolean,
  /**
   * True, if personal details must include the user's name in the language of their country
   * of residence
   */
  is_native_name_required?: boolean,
|}

/**
 * Contains a description of the required Telegram Passport element that was requested
 * by a service
 */
export type passportRequiredElement = {
  _: 'passportRequiredElement',
  /** List of Telegram Passport elements any of which is enough to provide */
  suitable_elements: passportSuitableElement[],
}

/**
 * Contains a description of the required Telegram Passport element that was requested
 * by a service
 */
export type passportRequiredElementOptional = {|
  _: 'passportRequiredElement',
  /** List of Telegram Passport elements any of which is enough to provide */
  suitable_elements?: passportSuitableElementOptional[],
|}

/** Contains information about a Telegram Passport authorization form that was requested */
export type passportAuthorizationForm = {
  _: 'passportAuthorizationForm',
  /** Unique identifier of the authorization form */
  id: number,
  /**
   * Information about the Telegram Passport elements that need to be provided to complete
   * the form
   */
  required_elements: passportRequiredElement[],
  /** Already available Telegram Passport elements */
  elements: PassportElement[],
  /** Errors in the elements that are already available */
  errors: passportElementError[],
  /** URL for the privacy policy of the service; can be empty */
  privacy_policy_url: string,
}

/** Contains information about a Telegram Passport authorization form that was requested */
export type passportAuthorizationFormOptional = {|
  _: 'passportAuthorizationForm',
  /** Unique identifier of the authorization form */
  id?: number,
  /**
   * Information about the Telegram Passport elements that need to be provided to complete
   * the form
   */
  required_elements?: passportRequiredElementOptional[],
  /** Already available Telegram Passport elements */
  elements?: PassportElementOptional[],
  /** Errors in the elements that are already available */
  errors?: passportElementErrorOptional[],
  /** URL for the privacy policy of the service; can be empty */
  privacy_policy_url?: string,
|}

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
export type encryptedCredentialsOptional = {|
  _: 'encryptedCredentials',
  /** The encrypted credentials */
  data?: string,
  /** The decrypted data hash */
  hash?: string,
  /** Secret for data decryption, encrypted with the service's public key */
  secret?: string,
|}

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
  translation: datedFile[],
  /** List of attached files */
  files: datedFile[],
  /** Unencrypted data, phone number or email address */
  value: string,
  /** Hash of the entire element */
  hash: string,
}

/** Contains information about an encrypted Telegram Passport element; for bots only */
export type encryptedPassportElementOptional = {|
  _: 'encryptedPassportElement',
  /** Type of Telegram Passport element */
  type?: PassportElementTypeOptional,
  /** Encrypted JSON-encoded data about the user */
  data?: string,
  /** The front side of an identity document */
  front_side?: datedFileOptional,
  /** The reverse side of an identity document; may be null */
  reverse_side?: datedFileOptional,
  /** Selfie with the document; may be null */
  selfie?: datedFileOptional,
  /** List of files containing a certified English translation of the document */
  translation?: datedFileOptional[],
  /** List of attached files */
  files?: datedFileOptional[],
  /** Unencrypted data, phone number or email address */
  value?: string,
  /** Hash of the entire element */
  hash?: string,
|}

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
export type inputPassportElementErrorSourceUnspecifiedOptional = {|
  _: 'inputPassportElementErrorSourceUnspecified',
  /** Current hash of the entire element */
  element_hash?: string,
|}

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
export type inputPassportElementErrorSourceDataFieldOptional = {|
  _: 'inputPassportElementErrorSourceDataField',
  /** Field name */
  field_name?: string,
  /** Current data hash */
  data_hash?: string,
|}

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
export type inputPassportElementErrorSourceFrontSideOptional = {|
  _: 'inputPassportElementErrorSourceFrontSide',
  /** Current hash of the file containing the front side */
  file_hash?: string,
|}

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
export type inputPassportElementErrorSourceReverseSideOptional = {|
  _: 'inputPassportElementErrorSourceReverseSide',
  /** Current hash of the file containing the reverse side */
  file_hash?: string,
|}

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
export type inputPassportElementErrorSourceSelfieOptional = {|
  _: 'inputPassportElementErrorSourceSelfie',
  /** Current hash of the file containing the selfie */
  file_hash?: string,
|}

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
export type inputPassportElementErrorSourceTranslationFileOptional = {|
  _: 'inputPassportElementErrorSourceTranslationFile',
  /** Current hash of the file containing the translation */
  file_hash?: string,
|}

/**
 * The translation of the document contains an error. The error is considered resolved
 * when the list of files changes
 */
export type inputPassportElementErrorSourceTranslationFiles = {
  _: 'inputPassportElementErrorSourceTranslationFiles',
  /** Current hashes of all files with the translation */
  file_hashes: string[],
}

/**
 * The translation of the document contains an error. The error is considered resolved
 * when the list of files changes
 */
export type inputPassportElementErrorSourceTranslationFilesOptional = {|
  _: 'inputPassportElementErrorSourceTranslationFiles',
  /** Current hashes of all files with the translation */
  file_hashes?: string[],
|}

/** The file contains an error. The error is considered resolved when the file changes */
export type inputPassportElementErrorSourceFile = {
  _: 'inputPassportElementErrorSourceFile',
  /** Current hash of the file which has the error */
  file_hash: string,
}

/** The file contains an error. The error is considered resolved when the file changes */
export type inputPassportElementErrorSourceFileOptional = {|
  _: 'inputPassportElementErrorSourceFile',
  /** Current hash of the file which has the error */
  file_hash?: string,
|}

/**
 * The list of attached files contains an error. The error is considered resolved when
 * the file list changes
 */
export type inputPassportElementErrorSourceFiles = {
  _: 'inputPassportElementErrorSourceFiles',
  /** Current hashes of all attached files */
  file_hashes: string[],
}

/**
 * The list of attached files contains an error. The error is considered resolved when
 * the file list changes
 */
export type inputPassportElementErrorSourceFilesOptional = {|
  _: 'inputPassportElementErrorSourceFiles',
  /** Current hashes of all attached files */
  file_hashes?: string[],
|}

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
export type inputPassportElementErrorOptional = {|
  _: 'inputPassportElementError',
  /** Type of Telegram Passport element that has the error */
  type?: PassportElementTypeOptional,
  /** Error message */
  message?: string,
  /** Error source */
  source?: InputPassportElementErrorSourceOptional,
|}

/** A text message */
export type messageText = {
  _: 'messageText',
  /** Text of the message */
  text: formattedText,
  /** A preview of the web page that's mentioned in the text; may be null */
  web_page: webPage,
}

/** A text message */
export type messageTextOptional = {|
  _: 'messageText',
  /** Text of the message */
  text?: formattedTextOptional,
  /** A preview of the web page that's mentioned in the text; may be null */
  web_page?: webPageOptional,
|}

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
export type messageAnimationOptional = {|
  _: 'messageAnimation',
  /** Message content */
  animation?: animationOptional,
  /** Animation caption */
  caption?: formattedTextOptional,
  /**
   * True, if the animation thumbnail must be blurred and the animation must be shown
   * only while tapped
   */
  is_secret?: boolean,
|}

/** An audio message */
export type messageAudio = {
  _: 'messageAudio',
  /** Message content */
  audio: audio,
  /** Audio caption */
  caption: formattedText,
}

/** An audio message */
export type messageAudioOptional = {|
  _: 'messageAudio',
  /** Message content */
  audio?: audioOptional,
  /** Audio caption */
  caption?: formattedTextOptional,
|}

/** A document message (general file) */
export type messageDocument = {
  _: 'messageDocument',
  /** Message content */
  document: document,
  /** Document caption */
  caption: formattedText,
}

/** A document message (general file) */
export type messageDocumentOptional = {|
  _: 'messageDocument',
  /** Message content */
  document?: documentOptional,
  /** Document caption */
  caption?: formattedTextOptional,
|}

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
export type messagePhotoOptional = {|
  _: 'messagePhoto',
  /** Message content */
  photo?: photoOptional,
  /** Photo caption */
  caption?: formattedTextOptional,
  /** True, if the photo must be blurred and must be shown only while tapped */
  is_secret?: boolean,
|}

/** An expired photo message (self-destructed after TTL has elapsed) */
export type messageExpiredPhoto = {
  _: 'messageExpiredPhoto',
}

/** An expired photo message (self-destructed after TTL has elapsed) */
export type messageExpiredPhotoOptional = {|
  _: 'messageExpiredPhoto',
|}

/** A sticker message */
export type messageSticker = {
  _: 'messageSticker',
  /** Message content */
  sticker: sticker,
}

/** A sticker message */
export type messageStickerOptional = {|
  _: 'messageSticker',
  /** Message content */
  sticker?: stickerOptional,
|}

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
export type messageVideoOptional = {|
  _: 'messageVideo',
  /** Message content */
  video?: videoOptional,
  /** Video caption */
  caption?: formattedTextOptional,
  /**
   * True, if the video thumbnail must be blurred and the video must be shown only while
   * tapped
   */
  is_secret?: boolean,
|}

/** An expired video message (self-destructed after TTL has elapsed) */
export type messageExpiredVideo = {
  _: 'messageExpiredVideo',
}

/** An expired video message (self-destructed after TTL has elapsed) */
export type messageExpiredVideoOptional = {|
  _: 'messageExpiredVideo',
|}

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
export type messageVideoNoteOptional = {|
  _: 'messageVideoNote',
  /** Message content */
  video_note?: videoNoteOptional,
  /** True, if at least one of the recipients has viewed the video note */
  is_viewed?: boolean,
  /**
   * True, if the video note thumbnail must be blurred and the video note must be shown
   * only while tapped
   */
  is_secret?: boolean,
|}

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
export type messageVoiceNoteOptional = {|
  _: 'messageVoiceNote',
  /** Message content */
  voice_note?: voiceNoteOptional,
  /** Voice note caption */
  caption?: formattedTextOptional,
  /** True, if at least one of the recipients has listened to the voice note */
  is_listened?: boolean,
|}

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
export type messageLocationOptional = {|
  _: 'messageLocation',
  /** Message content */
  location?: locationOptional,
  /**
   * Time relative to the message sent date until which the location can be updated, in
   * seconds
   */
  live_period?: number,
  /**
   * Left time for which the location can be updated, in seconds. updateMessageContent
   * is not sent when this field changes
   */
  expires_in?: number,
|}

/** A message with information about a venue */
export type messageVenue = {
  _: 'messageVenue',
  /** Message content */
  venue: venue,
}

/** A message with information about a venue */
export type messageVenueOptional = {|
  _: 'messageVenue',
  /** Message content */
  venue?: venueOptional,
|}

/** A message with a user contact */
export type messageContact = {
  _: 'messageContact',
  /** Message content */
  contact: contact,
}

/** A message with a user contact */
export type messageContactOptional = {|
  _: 'messageContact',
  /** Message content */
  contact?: contactOptional,
|}

/** A message with a game */
export type messageGame = {
  _: 'messageGame',
  /** Game */
  game: game,
}

/** A message with a game */
export type messageGameOptional = {|
  _: 'messageGame',
  /** Game */
  game?: gameOptional,
|}

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
export type messageInvoiceOptional = {|
  _: 'messageInvoice',
  /** Product title */
  title?: string,
  /** Product description */
  description?: string,
  /** Product photo; may be null */
  photo?: photoOptional,
  /** Currency for the product price */
  currency?: string,
  /** Product total price in the minimal quantity of the currency */
  total_amount?: number,
  /** Unique invoice bot start_parameter. To share an invoice use the URL https://t.me/{bot_username}?start={start_parameter} */
  start_parameter?: string,
  /** True, if the invoice is a test invoice */
  is_test?: boolean,
  /** True, if the shipping address should be specified */
  need_shipping_address?: boolean,
  /** The identifier of the message with the receipt, after the product has been purchased */
  receipt_message_id?: number,
|}

/** A message with information about an ended call */
export type messageCall = {
  _: 'messageCall',
  /** Reason why the call was discarded */
  discard_reason: CallDiscardReason,
  /** Call duration, in seconds */
  duration: number,
}

/** A message with information about an ended call */
export type messageCallOptional = {|
  _: 'messageCall',
  /** Reason why the call was discarded */
  discard_reason?: CallDiscardReasonOptional,
  /** Call duration, in seconds */
  duration?: number,
|}

/** A newly created basic group */
export type messageBasicGroupChatCreate = {
  _: 'messageBasicGroupChatCreate',
  /** Title of the basic group */
  title: string,
  /** User identifiers of members in the basic group */
  member_user_ids: number[],
}

/** A newly created basic group */
export type messageBasicGroupChatCreateOptional = {|
  _: 'messageBasicGroupChatCreate',
  /** Title of the basic group */
  title?: string,
  /** User identifiers of members in the basic group */
  member_user_ids?: number[],
|}

/** A newly created supergroup or channel */
export type messageSupergroupChatCreate = {
  _: 'messageSupergroupChatCreate',
  /** Title of the supergroup or channel */
  title: string,
}

/** A newly created supergroup or channel */
export type messageSupergroupChatCreateOptional = {|
  _: 'messageSupergroupChatCreate',
  /** Title of the supergroup or channel */
  title?: string,
|}

/** An updated chat title */
export type messageChatChangeTitle = {
  _: 'messageChatChangeTitle',
  /** New chat title */
  title: string,
}

/** An updated chat title */
export type messageChatChangeTitleOptional = {|
  _: 'messageChatChangeTitle',
  /** New chat title */
  title?: string,
|}

/** An updated chat photo */
export type messageChatChangePhoto = {
  _: 'messageChatChangePhoto',
  /** New chat photo */
  photo: photo,
}

/** An updated chat photo */
export type messageChatChangePhotoOptional = {|
  _: 'messageChatChangePhoto',
  /** New chat photo */
  photo?: photoOptional,
|}

/** A deleted chat photo */
export type messageChatDeletePhoto = {
  _: 'messageChatDeletePhoto',
}

/** A deleted chat photo */
export type messageChatDeletePhotoOptional = {|
  _: 'messageChatDeletePhoto',
|}

/** New chat members were added */
export type messageChatAddMembers = {
  _: 'messageChatAddMembers',
  /** User identifiers of the new members */
  member_user_ids: number[],
}

/** New chat members were added */
export type messageChatAddMembersOptional = {|
  _: 'messageChatAddMembers',
  /** User identifiers of the new members */
  member_user_ids?: number[],
|}

/** A new member joined the chat by invite link */
export type messageChatJoinByLink = {
  _: 'messageChatJoinByLink',
}

/** A new member joined the chat by invite link */
export type messageChatJoinByLinkOptional = {|
  _: 'messageChatJoinByLink',
|}

/** A chat member was deleted */
export type messageChatDeleteMember = {
  _: 'messageChatDeleteMember',
  /** User identifier of the deleted chat member */
  user_id: number,
}

/** A chat member was deleted */
export type messageChatDeleteMemberOptional = {|
  _: 'messageChatDeleteMember',
  /** User identifier of the deleted chat member */
  user_id?: number,
|}

/** A basic group was upgraded to a supergroup and was deactivated as the result */
export type messageChatUpgradeTo = {
  _: 'messageChatUpgradeTo',
  /** Identifier of the supergroup to which the basic group was upgraded */
  supergroup_id: number,
}

/** A basic group was upgraded to a supergroup and was deactivated as the result */
export type messageChatUpgradeToOptional = {|
  _: 'messageChatUpgradeTo',
  /** Identifier of the supergroup to which the basic group was upgraded */
  supergroup_id?: number,
|}

/** A supergroup has been created from a basic group */
export type messageChatUpgradeFrom = {
  _: 'messageChatUpgradeFrom',
  /** Title of the newly created supergroup */
  title: string,
  /** The identifier of the original basic group */
  basic_group_id: number,
}

/** A supergroup has been created from a basic group */
export type messageChatUpgradeFromOptional = {|
  _: 'messageChatUpgradeFrom',
  /** Title of the newly created supergroup */
  title?: string,
  /** The identifier of the original basic group */
  basic_group_id?: number,
|}

/** A message has been pinned */
export type messagePinMessage = {
  _: 'messagePinMessage',
  /** Identifier of the pinned message, can be an identifier of a deleted message */
  message_id: number,
}

/** A message has been pinned */
export type messagePinMessageOptional = {|
  _: 'messagePinMessage',
  /** Identifier of the pinned message, can be an identifier of a deleted message */
  message_id?: number,
|}

/** A screenshot of a message in the chat has been taken */
export type messageScreenshotTaken = {
  _: 'messageScreenshotTaken',
}

/** A screenshot of a message in the chat has been taken */
export type messageScreenshotTakenOptional = {|
  _: 'messageScreenshotTaken',
|}

/** The TTL (Time To Live) setting messages in a secret chat has been changed */
export type messageChatSetTtl = {
  _: 'messageChatSetTtl',
  /** New TTL */
  ttl: number,
}

/** The TTL (Time To Live) setting messages in a secret chat has been changed */
export type messageChatSetTtlOptional = {|
  _: 'messageChatSetTtl',
  /** New TTL */
  ttl?: number,
|}

/** A non-standard action has happened in the chat */
export type messageCustomServiceAction = {
  _: 'messageCustomServiceAction',
  /** Message text to be shown in the chat */
  text: string,
}

/** A non-standard action has happened in the chat */
export type messageCustomServiceActionOptional = {|
  _: 'messageCustomServiceAction',
  /** Message text to be shown in the chat */
  text?: string,
|}

/** A new high score was achieved in a game */
export type messageGameScore = {
  _: 'messageGameScore',
  /** Identifier of the message with the game, can be an identifier of a deleted message */
  game_message_id: number,
  /**
   * Identifier of the game, may be different from the games presented in the message
   * with the game
   */
  game_id: (number | string),
  /** New score */
  score: number,
}

/** A new high score was achieved in a game */
export type messageGameScoreOptional = {|
  _: 'messageGameScore',
  /** Identifier of the message with the game, can be an identifier of a deleted message */
  game_message_id?: number,
  /**
   * Identifier of the game, may be different from the games presented in the message
   * with the game
   */
  game_id?: (number | string),
  /** New score */
  score?: number,
|}

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
export type messagePaymentSuccessfulOptional = {|
  _: 'messagePaymentSuccessful',
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  invoice_message_id?: number,
  /** Currency for the price of the product */
  currency?: string,
  /** Total price for the product, in the minimal quantity of the currency */
  total_amount?: number,
|}

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
export type messagePaymentSuccessfulBotOptional = {|
  _: 'messagePaymentSuccessfulBot',
  /**
   * Identifier of the message with the corresponding invoice; can be an identifier of
   * a deleted message
   */
  invoice_message_id?: number,
  /** Currency for price of the product */
  currency?: string,
  /** Total price for the product, in the minimal quantity of the currency */
  total_amount?: number,
  /** Invoice payload */
  invoice_payload?: string,
  /** Identifier of the shipping option chosen by the user; may be empty if not applicable */
  shipping_option_id?: string,
  /** Information about the order; may be null */
  order_info?: orderInfoOptional,
  /** Telegram payment identifier */
  telegram_payment_charge_id?: string,
  /** Provider payment identifier */
  provider_payment_charge_id?: string,
|}

/** A contact has registered with Telegram */
export type messageContactRegistered = {
  _: 'messageContactRegistered',
}

/** A contact has registered with Telegram */
export type messageContactRegisteredOptional = {|
  _: 'messageContactRegistered',
|}

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
export type messageWebsiteConnectedOptional = {|
  _: 'messageWebsiteConnected',
  /** Domain name of the connected website */
  domain_name?: string,
|}

/** Telegram Passport data has been sent */
export type messagePassportDataSent = {
  _: 'messagePassportDataSent',
  /** List of Telegram Passport element types sent */
  types: PassportElementType[],
}

/** Telegram Passport data has been sent */
export type messagePassportDataSentOptional = {|
  _: 'messagePassportDataSent',
  /** List of Telegram Passport element types sent */
  types?: PassportElementTypeOptional[],
|}

/** Telegram Passport data has been received; for bots only */
export type messagePassportDataReceived = {
  _: 'messagePassportDataReceived',
  /** List of received Telegram Passport elements */
  elements: encryptedPassportElement[],
  /** Encrypted data credentials */
  credentials: encryptedCredentials,
}

/** Telegram Passport data has been received; for bots only */
export type messagePassportDataReceivedOptional = {|
  _: 'messagePassportDataReceived',
  /** List of received Telegram Passport elements */
  elements?: encryptedPassportElementOptional[],
  /** Encrypted data credentials */
  credentials?: encryptedCredentialsOptional,
|}

/** Message content that is not supported by the client */
export type messageUnsupported = {
  _: 'messageUnsupported',
}

/** Message content that is not supported by the client */
export type messageUnsupportedOptional = {|
  _: 'messageUnsupported',
|}

/** A mention of a user by their username */
export type textEntityTypeMention = {
  _: 'textEntityTypeMention',
}

/** A mention of a user by their username */
export type textEntityTypeMentionOptional = {|
  _: 'textEntityTypeMention',
|}

/** A hashtag text, beginning with "#" */
export type textEntityTypeHashtag = {
  _: 'textEntityTypeHashtag',
}

/** A hashtag text, beginning with "#" */
export type textEntityTypeHashtagOptional = {|
  _: 'textEntityTypeHashtag',
|}

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
export type textEntityTypeCashtagOptional = {|
  _: 'textEntityTypeCashtag',
|}

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
export type textEntityTypeBotCommandOptional = {|
  _: 'textEntityTypeBotCommand',
|}

/** An HTTP URL */
export type textEntityTypeUrl = {
  _: 'textEntityTypeUrl',
}

/** An HTTP URL */
export type textEntityTypeUrlOptional = {|
  _: 'textEntityTypeUrl',
|}

/** An email address */
export type textEntityTypeEmailAddress = {
  _: 'textEntityTypeEmailAddress',
}

/** An email address */
export type textEntityTypeEmailAddressOptional = {|
  _: 'textEntityTypeEmailAddress',
|}

/** A bold text */
export type textEntityTypeBold = {
  _: 'textEntityTypeBold',
}

/** A bold text */
export type textEntityTypeBoldOptional = {|
  _: 'textEntityTypeBold',
|}

/** An italic text */
export type textEntityTypeItalic = {
  _: 'textEntityTypeItalic',
}

/** An italic text */
export type textEntityTypeItalicOptional = {|
  _: 'textEntityTypeItalic',
|}

/** Text that must be formatted as if inside a code HTML tag */
export type textEntityTypeCode = {
  _: 'textEntityTypeCode',
}

/** Text that must be formatted as if inside a code HTML tag */
export type textEntityTypeCodeOptional = {|
  _: 'textEntityTypeCode',
|}

/** Text that must be formatted as if inside a pre HTML tag */
export type textEntityTypePre = {
  _: 'textEntityTypePre',
}

/** Text that must be formatted as if inside a pre HTML tag */
export type textEntityTypePreOptional = {|
  _: 'textEntityTypePre',
|}

/** Text that must be formatted as if inside pre, and code HTML tags */
export type textEntityTypePreCode = {
  _: 'textEntityTypePreCode',
  /** Programming language of the code; as defined by the sender */
  language: string,
}

/** Text that must be formatted as if inside pre, and code HTML tags */
export type textEntityTypePreCodeOptional = {|
  _: 'textEntityTypePreCode',
  /** Programming language of the code; as defined by the sender */
  language?: string,
|}

/** A text description shown instead of a raw URL */
export type textEntityTypeTextUrl = {
  _: 'textEntityTypeTextUrl',
  /** HTTP or tg:// URL to be opened when the link is clicked */
  url: string,
}

/** A text description shown instead of a raw URL */
export type textEntityTypeTextUrlOptional = {|
  _: 'textEntityTypeTextUrl',
  /** HTTP or tg:// URL to be opened when the link is clicked */
  url?: string,
|}

/** A text shows instead of a raw mention of the user (e.g., when the user has no username) */
export type textEntityTypeMentionName = {
  _: 'textEntityTypeMentionName',
  /** Identifier of the mentioned user */
  user_id: number,
}

/** A text shows instead of a raw mention of the user (e.g., when the user has no username) */
export type textEntityTypeMentionNameOptional = {|
  _: 'textEntityTypeMentionName',
  /** Identifier of the mentioned user */
  user_id?: number,
|}

/** A phone number */
export type textEntityTypePhoneNumber = {
  _: 'textEntityTypePhoneNumber',
}

/** A phone number */
export type textEntityTypePhoneNumberOptional = {|
  _: 'textEntityTypePhoneNumber',
|}

/**
 * A thumbnail to be sent along with a file; should be in JPEG or WEBP format for stickers,
 * and less than 200 kB in size
 */
export type inputThumbnail = {
  _: 'inputThumbnail',
  /** Thumbnail file to send. Sending thumbnails by file_id is currently not supported */
  thumbnail: InputFile,
  /** Thumbnail width, usually shouldn't exceed 90. Use 0 if unknown */
  width: number,
  /** Thumbnail height, usually shouldn't exceed 90. Use 0 if unknown */
  height: number,
}

/**
 * A thumbnail to be sent along with a file; should be in JPEG or WEBP format for stickers,
 * and less than 200 kB in size
 */
export type inputThumbnailOptional = {|
  _: 'inputThumbnail',
  /** Thumbnail file to send. Sending thumbnails by file_id is currently not supported */
  thumbnail?: InputFileOptional,
  /** Thumbnail width, usually shouldn't exceed 90. Use 0 if unknown */
  width?: number,
  /** Thumbnail height, usually shouldn't exceed 90. Use 0 if unknown */
  height?: number,
|}

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
export type inputMessageTextOptional = {|
  _: 'inputMessageText',
  /**
   * Formatted text to be sent; 1-GetOption("message_text_length_max") characters. Only
   * Bold, Italic, Code, Pre, PreCode and TextUrl entities are allowed to be specified
   * manually
   */
  text?: formattedTextOptional,
  /** True, if rich web page previews for URLs in the message text should be disabled */
  disable_web_page_preview?: boolean,
  /** True, if a chat message draft should be deleted */
  clear_draft?: boolean,
|}

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
export type inputMessageAnimationOptional = {|
  _: 'inputMessageAnimation',
  /** Animation file to be sent */
  animation?: InputFileOptional,
  /** Animation thumbnail, if available */
  thumbnail?: inputThumbnailOptional,
  /** Duration of the animation, in seconds */
  duration?: number,
  /** Width of the animation; may be replaced by the server */
  width?: number,
  /** Height of the animation; may be replaced by the server */
  height?: number,
  /** Animation caption; 0-GetOption("message_caption_length_max") characters */
  caption?: formattedTextOptional,
|}

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
export type inputMessageAudioOptional = {|
  _: 'inputMessageAudio',
  /** Audio file to be sent */
  audio?: InputFileOptional,
  /** Thumbnail of the cover for the album, if available */
  album_cover_thumbnail?: inputThumbnailOptional,
  /** Duration of the audio, in seconds; may be replaced by the server */
  duration?: number,
  /** Title of the audio; 0-64 characters; may be replaced by the server */
  title?: string,
  /** Performer of the audio; 0-64 characters, may be replaced by the server */
  performer?: string,
  /** Audio caption; 0-GetOption("message_caption_length_max") characters */
  caption?: formattedTextOptional,
|}

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
export type inputMessageDocumentOptional = {|
  _: 'inputMessageDocument',
  /** Document to be sent */
  document?: InputFileOptional,
  /** Document thumbnail, if available */
  thumbnail?: inputThumbnailOptional,
  /** Document caption; 0-GetOption("message_caption_length_max") characters */
  caption?: formattedTextOptional,
|}

/** A photo message */
export type inputMessagePhoto = {
  _: 'inputMessagePhoto',
  /** Photo to send */
  photo: InputFile,
  /** Photo thumbnail to be sent, this is sent to the other party in secret chats only */
  thumbnail: inputThumbnail,
  /** File identifiers of the stickers added to the photo, if applicable */
  added_sticker_file_ids: number[],
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
export type inputMessagePhotoOptional = {|
  _: 'inputMessagePhoto',
  /** Photo to send */
  photo?: InputFileOptional,
  /** Photo thumbnail to be sent, this is sent to the other party in secret chats only */
  thumbnail?: inputThumbnailOptional,
  /** File identifiers of the stickers added to the photo, if applicable */
  added_sticker_file_ids?: number[],
  /** Photo width */
  width?: number,
  /** Photo height */
  height?: number,
  /** Photo caption; 0-GetOption("message_caption_length_max") characters */
  caption?: formattedTextOptional,
  /**
   * Photo TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  ttl?: number,
|}

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
export type inputMessageStickerOptional = {|
  _: 'inputMessageSticker',
  /** Sticker to be sent */
  sticker?: InputFileOptional,
  /** Sticker thumbnail, if available */
  thumbnail?: inputThumbnailOptional,
  /** Sticker width */
  width?: number,
  /** Sticker height */
  height?: number,
|}

/** A video message */
export type inputMessageVideo = {
  _: 'inputMessageVideo',
  /** Video to be sent */
  video: InputFile,
  /** Video thumbnail, if available */
  thumbnail: inputThumbnail,
  /** File identifiers of the stickers added to the video, if applicable */
  added_sticker_file_ids: number[],
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
export type inputMessageVideoOptional = {|
  _: 'inputMessageVideo',
  /** Video to be sent */
  video?: InputFileOptional,
  /** Video thumbnail, if available */
  thumbnail?: inputThumbnailOptional,
  /** File identifiers of the stickers added to the video, if applicable */
  added_sticker_file_ids?: number[],
  /** Duration of the video, in seconds */
  duration?: number,
  /** Video width */
  width?: number,
  /** Video height */
  height?: number,
  /** True, if the video should be tried to be streamed */
  supports_streaming?: boolean,
  /** Video caption; 0-GetOption("message_caption_length_max") characters */
  caption?: formattedTextOptional,
  /**
   * Video TTL (Time To Live), in seconds (0-60). A non-zero TTL can be specified only
   * in private chats
   */
  ttl?: number,
|}

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
export type inputMessageVideoNoteOptional = {|
  _: 'inputMessageVideoNote',
  /** Video note to be sent */
  video_note?: InputFileOptional,
  /** Video thumbnail, if available */
  thumbnail?: inputThumbnailOptional,
  /** Duration of the video, in seconds */
  duration?: number,
  /** Video width and height; must be positive and not greater than 640 */
  length?: number,
|}

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
export type inputMessageVoiceNoteOptional = {|
  _: 'inputMessageVoiceNote',
  /** Voice note to be sent */
  voice_note?: InputFileOptional,
  /** Duration of the voice note, in seconds */
  duration?: number,
  /** Waveform representation of the voice note, in 5-bit format */
  waveform?: string,
  /** Voice note caption; 0-GetOption("message_caption_length_max") characters */
  caption?: formattedTextOptional,
|}

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
export type inputMessageLocationOptional = {|
  _: 'inputMessageLocation',
  /** Location to be sent */
  location?: locationOptional,
  /**
   * Period for which the location can be updated, in seconds; should bebetween 60 and
   * 86400 for a live location and 0 otherwise
   */
  live_period?: number,
|}

/** A message with information about a venue */
export type inputMessageVenue = {
  _: 'inputMessageVenue',
  /** Venue to send */
  venue: venue,
}

/** A message with information about a venue */
export type inputMessageVenueOptional = {|
  _: 'inputMessageVenue',
  /** Venue to send */
  venue?: venueOptional,
|}

/** A message containing a user contact */
export type inputMessageContact = {
  _: 'inputMessageContact',
  /** Contact to send */
  contact: contact,
}

/** A message containing a user contact */
export type inputMessageContactOptional = {|
  _: 'inputMessageContact',
  /** Contact to send */
  contact?: contactOptional,
|}

/** A message with a game; not supported for channels or secret chats */
export type inputMessageGame = {
  _: 'inputMessageGame',
  /** User identifier of the bot that owns the game */
  bot_user_id: number,
  /** Short name of the game */
  game_short_name: string,
}

/** A message with a game; not supported for channels or secret chats */
export type inputMessageGameOptional = {|
  _: 'inputMessageGame',
  /** User identifier of the bot that owns the game */
  bot_user_id?: number,
  /** Short name of the game */
  game_short_name?: string,
|}

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
export type inputMessageInvoiceOptional = {|
  _: 'inputMessageInvoice',
  /** Invoice */
  invoice?: invoiceOptional,
  /** Product title; 1-32 characters */
  title?: string,
  /** Product description; 0-255 characters */
  description?: string,
  /** Product photo URL; optional */
  photo_url?: string,
  /** Product photo size */
  photo_size?: number,
  /** Product photo width */
  photo_width?: number,
  /** Product photo height */
  photo_height?: number,
  /** The invoice payload */
  payload?: string,
  /** Payment provider token */
  provider_token?: string,
  /** JSON-encoded data about the invoice, which will be shared with the payment provider */
  provider_data?: string,
  /** Unique invoice bot start_parameter for the generation of this invoice */
  start_parameter?: string,
|}

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
export type inputMessageForwardedOptional = {|
  _: 'inputMessageForwarded',
  /** Identifier for the chat this forwarded message came from */
  from_chat_id?: number,
  /** Identifier of the message to forward */
  message_id?: number,
  /**
   * True, if a game message should be shared within a launched game; applies only to
   * game messages
   */
  in_game_share?: boolean,
|}

/** Returns all found messages, no filter is applied */
export type searchMessagesFilterEmpty = {
  _: 'searchMessagesFilterEmpty',
}

/** Returns all found messages, no filter is applied */
export type searchMessagesFilterEmptyOptional = {|
  _: 'searchMessagesFilterEmpty',
|}

/** Returns only animation messages */
export type searchMessagesFilterAnimation = {
  _: 'searchMessagesFilterAnimation',
}

/** Returns only animation messages */
export type searchMessagesFilterAnimationOptional = {|
  _: 'searchMessagesFilterAnimation',
|}

/** Returns only audio messages */
export type searchMessagesFilterAudio = {
  _: 'searchMessagesFilterAudio',
}

/** Returns only audio messages */
export type searchMessagesFilterAudioOptional = {|
  _: 'searchMessagesFilterAudio',
|}

/** Returns only document messages */
export type searchMessagesFilterDocument = {
  _: 'searchMessagesFilterDocument',
}

/** Returns only document messages */
export type searchMessagesFilterDocumentOptional = {|
  _: 'searchMessagesFilterDocument',
|}

/** Returns only photo messages */
export type searchMessagesFilterPhoto = {
  _: 'searchMessagesFilterPhoto',
}

/** Returns only photo messages */
export type searchMessagesFilterPhotoOptional = {|
  _: 'searchMessagesFilterPhoto',
|}

/** Returns only video messages */
export type searchMessagesFilterVideo = {
  _: 'searchMessagesFilterVideo',
}

/** Returns only video messages */
export type searchMessagesFilterVideoOptional = {|
  _: 'searchMessagesFilterVideo',
|}

/** Returns only voice note messages */
export type searchMessagesFilterVoiceNote = {
  _: 'searchMessagesFilterVoiceNote',
}

/** Returns only voice note messages */
export type searchMessagesFilterVoiceNoteOptional = {|
  _: 'searchMessagesFilterVoiceNote',
|}

/** Returns only photo and video messages */
export type searchMessagesFilterPhotoAndVideo = {
  _: 'searchMessagesFilterPhotoAndVideo',
}

/** Returns only photo and video messages */
export type searchMessagesFilterPhotoAndVideoOptional = {|
  _: 'searchMessagesFilterPhotoAndVideo',
|}

/** Returns only messages containing URLs */
export type searchMessagesFilterUrl = {
  _: 'searchMessagesFilterUrl',
}

/** Returns only messages containing URLs */
export type searchMessagesFilterUrlOptional = {|
  _: 'searchMessagesFilterUrl',
|}

/** Returns only messages containing chat photos */
export type searchMessagesFilterChatPhoto = {
  _: 'searchMessagesFilterChatPhoto',
}

/** Returns only messages containing chat photos */
export type searchMessagesFilterChatPhotoOptional = {|
  _: 'searchMessagesFilterChatPhoto',
|}

/** Returns only call messages */
export type searchMessagesFilterCall = {
  _: 'searchMessagesFilterCall',
}

/** Returns only call messages */
export type searchMessagesFilterCallOptional = {|
  _: 'searchMessagesFilterCall',
|}

/** Returns only incoming call messages with missed/declined discard reasons */
export type searchMessagesFilterMissedCall = {
  _: 'searchMessagesFilterMissedCall',
}

/** Returns only incoming call messages with missed/declined discard reasons */
export type searchMessagesFilterMissedCallOptional = {|
  _: 'searchMessagesFilterMissedCall',
|}

/** Returns only video note messages */
export type searchMessagesFilterVideoNote = {
  _: 'searchMessagesFilterVideoNote',
}

/** Returns only video note messages */
export type searchMessagesFilterVideoNoteOptional = {|
  _: 'searchMessagesFilterVideoNote',
|}

/** Returns only voice and video note messages */
export type searchMessagesFilterVoiceAndVideoNote = {
  _: 'searchMessagesFilterVoiceAndVideoNote',
}

/** Returns only voice and video note messages */
export type searchMessagesFilterVoiceAndVideoNoteOptional = {|
  _: 'searchMessagesFilterVoiceAndVideoNote',
|}

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
export type searchMessagesFilterMentionOptional = {|
  _: 'searchMessagesFilterMention',
|}

/**
 * Returns only messages with unread mentions of the current user or messages that are
 * replies to their messages. When using this filter the results can't be additionally
 * filtered by a query or by the sending user
 */
export type searchMessagesFilterUnreadMention = {
  _: 'searchMessagesFilterUnreadMention',
}

/**
 * Returns only messages with unread mentions of the current user or messages that are
 * replies to their messages. When using this filter the results can't be additionally
 * filtered by a query or by the sending user
 */
export type searchMessagesFilterUnreadMentionOptional = {|
  _: 'searchMessagesFilterUnreadMention',
|}

/** The user is typing a message */
export type chatActionTyping = {
  _: 'chatActionTyping',
}

/** The user is typing a message */
export type chatActionTypingOptional = {|
  _: 'chatActionTyping',
|}

/** The user is recording a video */
export type chatActionRecordingVideo = {
  _: 'chatActionRecordingVideo',
}

/** The user is recording a video */
export type chatActionRecordingVideoOptional = {|
  _: 'chatActionRecordingVideo',
|}

/** The user is uploading a video */
export type chatActionUploadingVideo = {
  _: 'chatActionUploadingVideo',
  /** Upload progress, as a percentage */
  progress: number,
}

/** The user is uploading a video */
export type chatActionUploadingVideoOptional = {|
  _: 'chatActionUploadingVideo',
  /** Upload progress, as a percentage */
  progress?: number,
|}

/** The user is recording a voice note */
export type chatActionRecordingVoiceNote = {
  _: 'chatActionRecordingVoiceNote',
}

/** The user is recording a voice note */
export type chatActionRecordingVoiceNoteOptional = {|
  _: 'chatActionRecordingVoiceNote',
|}

/** The user is uploading a voice note */
export type chatActionUploadingVoiceNote = {
  _: 'chatActionUploadingVoiceNote',
  /** Upload progress, as a percentage */
  progress: number,
}

/** The user is uploading a voice note */
export type chatActionUploadingVoiceNoteOptional = {|
  _: 'chatActionUploadingVoiceNote',
  /** Upload progress, as a percentage */
  progress?: number,
|}

/** The user is uploading a photo */
export type chatActionUploadingPhoto = {
  _: 'chatActionUploadingPhoto',
  /** Upload progress, as a percentage */
  progress: number,
}

/** The user is uploading a photo */
export type chatActionUploadingPhotoOptional = {|
  _: 'chatActionUploadingPhoto',
  /** Upload progress, as a percentage */
  progress?: number,
|}

/** The user is uploading a document */
export type chatActionUploadingDocument = {
  _: 'chatActionUploadingDocument',
  /** Upload progress, as a percentage */
  progress: number,
}

/** The user is uploading a document */
export type chatActionUploadingDocumentOptional = {|
  _: 'chatActionUploadingDocument',
  /** Upload progress, as a percentage */
  progress?: number,
|}

/** The user is picking a location or venue to send */
export type chatActionChoosingLocation = {
  _: 'chatActionChoosingLocation',
}

/** The user is picking a location or venue to send */
export type chatActionChoosingLocationOptional = {|
  _: 'chatActionChoosingLocation',
|}

/** The user is picking a contact to send */
export type chatActionChoosingContact = {
  _: 'chatActionChoosingContact',
}

/** The user is picking a contact to send */
export type chatActionChoosingContactOptional = {|
  _: 'chatActionChoosingContact',
|}

/** The user has started to play a game */
export type chatActionStartPlayingGame = {
  _: 'chatActionStartPlayingGame',
}

/** The user has started to play a game */
export type chatActionStartPlayingGameOptional = {|
  _: 'chatActionStartPlayingGame',
|}

/** The user is recording a video note */
export type chatActionRecordingVideoNote = {
  _: 'chatActionRecordingVideoNote',
}

/** The user is recording a video note */
export type chatActionRecordingVideoNoteOptional = {|
  _: 'chatActionRecordingVideoNote',
|}

/** The user is uploading a video note */
export type chatActionUploadingVideoNote = {
  _: 'chatActionUploadingVideoNote',
  /** Upload progress, as a percentage */
  progress: number,
}

/** The user is uploading a video note */
export type chatActionUploadingVideoNoteOptional = {|
  _: 'chatActionUploadingVideoNote',
  /** Upload progress, as a percentage */
  progress?: number,
|}

/** The user has cancelled the previous action */
export type chatActionCancel = {
  _: 'chatActionCancel',
}

/** The user has cancelled the previous action */
export type chatActionCancelOptional = {|
  _: 'chatActionCancel',
|}

/** The user status was never changed */
export type userStatusEmpty = {
  _: 'userStatusEmpty',
}

/** The user status was never changed */
export type userStatusEmptyOptional = {|
  _: 'userStatusEmpty',
|}

/** The user is online */
export type userStatusOnline = {
  _: 'userStatusOnline',
  /** Point in time (Unix timestamp) when the user's online status will expire */
  expires: number,
}

/** The user is online */
export type userStatusOnlineOptional = {|
  _: 'userStatusOnline',
  /** Point in time (Unix timestamp) when the user's online status will expire */
  expires?: number,
|}

/** The user is offline */
export type userStatusOffline = {
  _: 'userStatusOffline',
  /** Point in time (Unix timestamp) when the user was last online */
  was_online: number,
}

/** The user is offline */
export type userStatusOfflineOptional = {|
  _: 'userStatusOffline',
  /** Point in time (Unix timestamp) when the user was last online */
  was_online?: number,
|}

/** The user was online recently */
export type userStatusRecently = {
  _: 'userStatusRecently',
}

/** The user was online recently */
export type userStatusRecentlyOptional = {|
  _: 'userStatusRecently',
|}

/** The user is offline, but was online last week */
export type userStatusLastWeek = {
  _: 'userStatusLastWeek',
}

/** The user is offline, but was online last week */
export type userStatusLastWeekOptional = {|
  _: 'userStatusLastWeek',
|}

/** The user is offline, but was online last month */
export type userStatusLastMonth = {
  _: 'userStatusLastMonth',
}

/** The user is offline, but was online last month */
export type userStatusLastMonthOptional = {|
  _: 'userStatusLastMonth',
|}

/** Represents a list of stickers */
export type stickers = {
  _: 'stickers',
  /** List of stickers */
  stickers: sticker[],
}

/** Represents a list of stickers */
export type stickersOptional = {|
  _: 'stickers',
  /** List of stickers */
  stickers?: stickerOptional[],
|}

/**
 * Represents a list of all emoji corresponding to a sticker in a sticker set. The list
 * is only for informational purposes, because a sticker is always sent with a fixed
 * emoji from the corresponding Sticker object
 */
export type stickerEmojis = {
  _: 'stickerEmojis',
  /** List of emojis */
  emojis: string[],
}

/**
 * Represents a list of all emoji corresponding to a sticker in a sticker set. The list
 * is only for informational purposes, because a sticker is always sent with a fixed
 * emoji from the corresponding Sticker object
 */
export type stickerEmojisOptional = {|
  _: 'stickerEmojis',
  /** List of emojis */
  emojis?: string[],
|}

/** Represents a sticker set */
export type stickerSet = {
  _: 'stickerSet',
  /** Identifier of the sticker set */
  id: (number | string),
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
  stickers: sticker[],
  /** A list of emoji corresponding to the stickers in the same order */
  emojis: stickerEmojis[],
}

/** Represents a sticker set */
export type stickerSetOptional = {|
  _: 'stickerSet',
  /** Identifier of the sticker set */
  id?: (number | string),
  /** Title of the sticker set */
  title?: string,
  /** Name of the sticker set */
  name?: string,
  /** True, if the sticker set has been installed by the current user */
  is_installed?: boolean,
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  is_archived?: boolean,
  /** True, if the sticker set is official */
  is_official?: boolean,
  /** True, if the stickers in the set are masks */
  is_masks?: boolean,
  /** True for already viewed trending sticker sets */
  is_viewed?: boolean,
  /** List of stickers in this set */
  stickers?: stickerOptional[],
  /** A list of emoji corresponding to the stickers in the same order */
  emojis?: stickerEmojisOptional[],
|}

/** Represents short information about a sticker set */
export type stickerSetInfo = {
  _: 'stickerSetInfo',
  /** Identifier of the sticker set */
  id: (number | string),
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
  covers: sticker[],
}

/** Represents short information about a sticker set */
export type stickerSetInfoOptional = {|
  _: 'stickerSetInfo',
  /** Identifier of the sticker set */
  id?: (number | string),
  /** Title of the sticker set */
  title?: string,
  /** Name of the sticker set */
  name?: string,
  /** True, if the sticker set has been installed by current user */
  is_installed?: boolean,
  /**
   * True, if the sticker set has been archived. A sticker set can't be installed and
   * archived simultaneously
   */
  is_archived?: boolean,
  /** True, if the sticker set is official */
  is_official?: boolean,
  /** True, if the stickers in the set are masks */
  is_masks?: boolean,
  /** True for already viewed trending sticker sets */
  is_viewed?: boolean,
  /** Total number of stickers in the set */
  size?: number,
  /**
   * Contains up to the first 5 stickers from the set, depending on the context. If the
   * client needs more stickers the full set should be requested
   */
  covers?: stickerOptional[],
|}

/** Represents a list of sticker sets */
export type stickerSets = {
  _: 'stickerSets',
  /** Approximate total number of sticker sets found */
  total_count: number,
  /** List of sticker sets */
  sets: stickerSetInfo[],
}

/** Represents a list of sticker sets */
export type stickerSetsOptional = {|
  _: 'stickerSets',
  /** Approximate total number of sticker sets found */
  total_count?: number,
  /** List of sticker sets */
  sets?: stickerSetInfoOptional[],
|}

/** The call wasn't discarded, or the reason is unknown */
export type callDiscardReasonEmpty = {
  _: 'callDiscardReasonEmpty',
}

/** The call wasn't discarded, or the reason is unknown */
export type callDiscardReasonEmptyOptional = {|
  _: 'callDiscardReasonEmpty',
|}

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
export type callDiscardReasonMissedOptional = {|
  _: 'callDiscardReasonMissed',
|}

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
export type callDiscardReasonDeclinedOptional = {|
  _: 'callDiscardReasonDeclined',
|}

/** The call was ended during the conversation because the users were disconnected */
export type callDiscardReasonDisconnected = {
  _: 'callDiscardReasonDisconnected',
}

/** The call was ended during the conversation because the users were disconnected */
export type callDiscardReasonDisconnectedOptional = {|
  _: 'callDiscardReasonDisconnected',
|}

/** The call was ended because one of the parties hung up */
export type callDiscardReasonHungUp = {
  _: 'callDiscardReasonHungUp',
}

/** The call was ended because one of the parties hung up */
export type callDiscardReasonHungUpOptional = {|
  _: 'callDiscardReasonHungUp',
|}

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
export type callProtocolOptional = {|
  _: 'callProtocol',
  /** True, if UDP peer-to-peer connections are supported */
  udp_p2p?: boolean,
  /** True, if connection through UDP reflectors is supported */
  udp_reflector?: boolean,
  /** Minimum supported API layer; use 65 */
  min_layer?: number,
  /** Maximum supported API layer; use 65 */
  max_layer?: number,
|}

/** Describes the address of UDP reflectors */
export type callConnection = {
  _: 'callConnection',
  /** Reflector identifier */
  id: (number | string),
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
export type callConnectionOptional = {|
  _: 'callConnection',
  /** Reflector identifier */
  id?: (number | string),
  /** IPv4 reflector address */
  ip?: string,
  /** IPv6 reflector address */
  ipv6?: string,
  /** Reflector port number */
  port?: number,
  /** Connection peer tag */
  peer_tag?: string,
|}

/** Contains the call identifier */
export type callId = {
  _: 'callId',
  /** Call identifier */
  id: number,
}

/** Contains the call identifier */
export type callIdOptional = {|
  _: 'callId',
  /** Call identifier */
  id?: number,
|}

/** The call is pending, waiting to be accepted by a user */
export type callStatePending = {
  _: 'callStatePending',
  /** True, if the call has already been created by the server */
  is_created: boolean,
  /** True, if the call has already been received by the other party */
  is_received: boolean,
}

/** The call is pending, waiting to be accepted by a user */
export type callStatePendingOptional = {|
  _: 'callStatePending',
  /** True, if the call has already been created by the server */
  is_created?: boolean,
  /** True, if the call has already been received by the other party */
  is_received?: boolean,
|}

/** The call has been answered and encryption keys are being exchanged */
export type callStateExchangingKeys = {
  _: 'callStateExchangingKeys',
}

/** The call has been answered and encryption keys are being exchanged */
export type callStateExchangingKeysOptional = {|
  _: 'callStateExchangingKeys',
|}

/** The call is ready to use */
export type callStateReady = {
  _: 'callStateReady',
  /** Call protocols supported by the peer */
  protocol: callProtocol,
  /** Available UDP reflectors */
  connections: callConnection[],
  /** A JSON-encoded call config */
  config: string,
  /** Call encryption key */
  encryption_key: string,
  /** Encryption key emojis fingerprint */
  emojis: string[],
}

/** The call is ready to use */
export type callStateReadyOptional = {|
  _: 'callStateReady',
  /** Call protocols supported by the peer */
  protocol?: callProtocolOptional,
  /** Available UDP reflectors */
  connections?: callConnectionOptional[],
  /** A JSON-encoded call config */
  config?: string,
  /** Call encryption key */
  encryption_key?: string,
  /** Encryption key emojis fingerprint */
  emojis?: string[],
|}

/** The call is hanging up after discardCall has been called */
export type callStateHangingUp = {
  _: 'callStateHangingUp',
}

/** The call is hanging up after discardCall has been called */
export type callStateHangingUpOptional = {|
  _: 'callStateHangingUp',
|}

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
export type callStateDiscardedOptional = {|
  _: 'callStateDiscarded',
  /** The reason, why the call has ended */
  reason?: CallDiscardReasonOptional,
  /** True, if the call rating should be sent to the server */
  need_rating?: boolean,
  /** True, if the call debug information should be sent to the server */
  need_debug_information?: boolean,
|}

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
export type callStateErrorOptional = {|
  _: 'callStateError',
  /**
   * Error. An error with the code 4005000 will be returned if an outgoing call is missed
   * because of an expired timeout
   */
  error?: errorOptional,
|}

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
export type callOptional = {|
  _: 'call',
  /** Call identifier, not persistent */
  id?: number,
  /** Peer user identifier */
  user_id?: number,
  /** True, if the call is outgoing */
  is_outgoing?: boolean,
  /** Call state */
  state?: CallStateOptional,
|}

/** Represents a list of animations */
export type animations = {
  _: 'animations',
  /** List of animations */
  animations: animation[],
}

/** Represents a list of animations */
export type animationsOptional = {|
  _: 'animations',
  /** List of animations */
  animations?: animationOptional[],
|}

/** Represents the result of an ImportContacts request */
export type importedContacts = {
  _: 'importedContacts',
  /**
   * User identifiers of the imported contacts in the same order as they were specified
   * in the request; 0 if the contact is not yet a registered user
   */
  user_ids: number[],
  /**
   * The number of users that imported the corresponding contact; 0 for already registered
   * users or if unavailable
   */
  importer_count: number[],
}

/** Represents the result of an ImportContacts request */
export type importedContactsOptional = {|
  _: 'importedContacts',
  /**
   * User identifiers of the imported contacts in the same order as they were specified
   * in the request; 0 if the contact is not yet a registered user
   */
  user_ids?: number[],
  /**
   * The number of users that imported the corresponding contact; 0 for already registered
   * users or if unavailable
   */
  importer_count?: number[],
|}

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
export type inputInlineQueryResultAnimatedGifOptional = {|
  _: 'inputInlineQueryResultAnimatedGif',
  /** Unique identifier of the query result */
  id?: string,
  /** Title of the query result */
  title?: string,
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  thumbnail_url?: string,
  /** The URL of the GIF-file (file size must not exceed 1MB) */
  gif_url?: string,
  /** Duration of the GIF, in seconds */
  gif_duration?: number,
  /** Width of the GIF */
  gif_width?: number,
  /** Height of the GIF */
  gif_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultAnimatedMpeg4Optional = {|
  _: 'inputInlineQueryResultAnimatedMpeg4',
  /** Unique identifier of the query result */
  id?: string,
  /** Title of the result */
  title?: string,
  /** URL of the static result thumbnail (JPEG or GIF), if it exists */
  thumbnail_url?: string,
  /** The URL of the MPEG4-file (file size must not exceed 1MB) */
  mpeg4_url?: string,
  /** Duration of the video, in seconds */
  mpeg4_duration?: number,
  /** Width of the video */
  mpeg4_width?: number,
  /** Height of the video */
  mpeg4_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAnimation, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultArticleOptional = {|
  _: 'inputInlineQueryResultArticle',
  /** Unique identifier of the query result */
  id?: string,
  /** URL of the result, if it exists */
  url?: string,
  /** True, if the URL must be not shown */
  hide_url?: boolean,
  /** Title of the result */
  title?: string,
  /** A short description of the result */
  description?: string,
  /** URL of the result thumbnail, if it exists */
  thumbnail_url?: string,
  /** Thumbnail width, if known */
  thumbnail_width?: number,
  /** Thumbnail height, if known */
  thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultAudioOptional = {|
  _: 'inputInlineQueryResultAudio',
  /** Unique identifier of the query result */
  id?: string,
  /** Title of the audio file */
  title?: string,
  /** Performer of the audio file */
  performer?: string,
  /** The URL of the audio file */
  audio_url?: string,
  /** Audio file duration, in seconds */
  audio_duration?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageAudio, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultContactOptional = {|
  _: 'inputInlineQueryResultContact',
  /** Unique identifier of the query result */
  id?: string,
  /** User contact */
  contact?: contactOptional,
  /** URL of the result thumbnail, if it exists */
  thumbnail_url?: string,
  /** Thumbnail width, if known */
  thumbnail_width?: number,
  /** Thumbnail height, if known */
  thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultDocumentOptional = {|
  _: 'inputInlineQueryResultDocument',
  /** Unique identifier of the query result */
  id?: string,
  /** Title of the resulting file */
  title?: string,
  /** Short description of the result, if known */
  description?: string,
  /** URL of the file */
  document_url?: string,
  /**
   * MIME type of the file content; only "application/pdf" and "application/zip" are currently
   * allowed
   */
  mime_type?: string,
  /** The URL of the file thumbnail, if it exists */
  thumbnail_url?: string,
  /** Width of the thumbnail */
  thumbnail_width?: number,
  /** Height of the thumbnail */
  thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageDocument, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultGameOptional = {|
  _: 'inputInlineQueryResultGame',
  /** Unique identifier of the query result */
  id?: string,
  /** Short name of the game */
  game_short_name?: string,
  /** Message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
|}

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
export type inputInlineQueryResultLocationOptional = {|
  _: 'inputInlineQueryResultLocation',
  /** Unique identifier of the query result */
  id?: string,
  /** Location result */
  location?: locationOptional,
  /**
   * Amount of time relative to the message sent time until the location can be updated,
   * in seconds
   */
  live_period?: number,
  /** Title of the result */
  title?: string,
  /** URL of the result thumbnail, if it exists */
  thumbnail_url?: string,
  /** Thumbnail width, if known */
  thumbnail_width?: number,
  /** Thumbnail height, if known */
  thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultPhotoOptional = {|
  _: 'inputInlineQueryResultPhoto',
  /** Unique identifier of the query result */
  id?: string,
  /** Title of the result, if known */
  title?: string,
  /** A short description of the result, if known */
  description?: string,
  /** URL of the photo thumbnail, if it exists */
  thumbnail_url?: string,
  /** The URL of the JPEG photo (photo size must not exceed 5MB) */
  photo_url?: string,
  /** Width of the photo */
  photo_width?: number,
  /** Height of the photo */
  photo_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessagePhoto, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultStickerOptional = {|
  _: 'inputInlineQueryResultSticker',
  /** Unique identifier of the query result */
  id?: string,
  /** URL of the sticker thumbnail, if it exists */
  thumbnail_url?: string,
  /** The URL of the WEBP sticker (sticker file size must not exceed 5MB) */
  sticker_url?: string,
  /** Width of the sticker */
  sticker_width?: number,
  /** Height of the sticker */
  sticker_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * inputMessageSticker, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultVenueOptional = {|
  _: 'inputInlineQueryResultVenue',
  /** Unique identifier of the query result */
  id?: string,
  /** Venue result */
  venue?: venueOptional,
  /** URL of the result thumbnail, if it exists */
  thumbnail_url?: string,
  /** Thumbnail width, if known */
  thumbnail_width?: number,
  /** Thumbnail height, if known */
  thumbnail_height?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultVideoOptional = {|
  _: 'inputInlineQueryResultVideo',
  /** Unique identifier of the query result */
  id?: string,
  /** Title of the result */
  title?: string,
  /** A short description of the result, if known */
  description?: string,
  /** The URL of the video thumbnail (JPEG), if it exists */
  thumbnail_url?: string,
  /** URL of the embedded video player or video file */
  video_url?: string,
  /**
   * MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently
   * supported
   */
  mime_type?: string,
  /** Width of the video */
  video_width?: number,
  /** Height of the video */
  video_height?: number,
  /** Video duration, in seconds */
  video_duration?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVideo, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inputInlineQueryResultVoiceNoteOptional = {|
  _: 'inputInlineQueryResultVoiceNote',
  /** Unique identifier of the query result */
  id?: string,
  /** Title of the voice note */
  title?: string,
  /** The URL of the voice note file */
  voice_note_url?: string,
  /** Duration of the voice note, in seconds */
  voice_note_duration?: number,
  /** The message reply markup. Must be of type replyMarkupInlineKeyboard or null */
  reply_markup?: ReplyMarkupOptional,
  /**
   * The content of the message to be sent. Must be one of the following types: InputMessageText,
   * InputMessageVoiceNote, InputMessageLocation, InputMessageVenue or InputMessageContact
   */
  input_message_content?: InputMessageContentOptional,
|}

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
export type inlineQueryResultArticleOptional = {|
  _: 'inlineQueryResultArticle',
  /** Unique identifier of the query result */
  id?: string,
  /** URL of the result, if it exists */
  url?: string,
  /** True, if the URL must be not shown */
  hide_url?: boolean,
  /** Title of the result */
  title?: string,
  /** A short description of the result */
  description?: string,
  /** Result thumbnail; may be null */
  thumbnail?: photoSizeOptional,
|}

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
export type inlineQueryResultContactOptional = {|
  _: 'inlineQueryResultContact',
  /** Unique identifier of the query result */
  id?: string,
  /** A user contact */
  contact?: contactOptional,
  /** Result thumbnail; may be null */
  thumbnail?: photoSizeOptional,
|}

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
export type inlineQueryResultLocationOptional = {|
  _: 'inlineQueryResultLocation',
  /** Unique identifier of the query result */
  id?: string,
  /** Location result */
  location?: locationOptional,
  /** Title of the result */
  title?: string,
  /** Result thumbnail; may be null */
  thumbnail?: photoSizeOptional,
|}

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
export type inlineQueryResultVenueOptional = {|
  _: 'inlineQueryResultVenue',
  /** Unique identifier of the query result */
  id?: string,
  /** Venue result */
  venue?: venueOptional,
  /** Result thumbnail; may be null */
  thumbnail?: photoSizeOptional,
|}

/** Represents information about a game */
export type inlineQueryResultGame = {
  _: 'inlineQueryResultGame',
  /** Unique identifier of the query result */
  id: string,
  /** Game result */
  game: game,
}

/** Represents information about a game */
export type inlineQueryResultGameOptional = {|
  _: 'inlineQueryResultGame',
  /** Unique identifier of the query result */
  id?: string,
  /** Game result */
  game?: gameOptional,
|}

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
export type inlineQueryResultAnimationOptional = {|
  _: 'inlineQueryResultAnimation',
  /** Unique identifier of the query result */
  id?: string,
  /** Animation file */
  animation?: animationOptional,
  /** Animation title */
  title?: string,
|}

/** Represents an audio file */
export type inlineQueryResultAudio = {
  _: 'inlineQueryResultAudio',
  /** Unique identifier of the query result */
  id: string,
  /** Audio file */
  audio: audio,
}

/** Represents an audio file */
export type inlineQueryResultAudioOptional = {|
  _: 'inlineQueryResultAudio',
  /** Unique identifier of the query result */
  id?: string,
  /** Audio file */
  audio?: audioOptional,
|}

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
export type inlineQueryResultDocumentOptional = {|
  _: 'inlineQueryResultDocument',
  /** Unique identifier of the query result */
  id?: string,
  /** Document */
  document?: documentOptional,
  /** Document title */
  title?: string,
  /** Document description */
  description?: string,
|}

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
export type inlineQueryResultPhotoOptional = {|
  _: 'inlineQueryResultPhoto',
  /** Unique identifier of the query result */
  id?: string,
  /** Photo */
  photo?: photoOptional,
  /** Title of the result, if known */
  title?: string,
  /** A short description of the result, if known */
  description?: string,
|}

/** Represents a sticker */
export type inlineQueryResultSticker = {
  _: 'inlineQueryResultSticker',
  /** Unique identifier of the query result */
  id: string,
  /** Sticker */
  sticker: sticker,
}

/** Represents a sticker */
export type inlineQueryResultStickerOptional = {|
  _: 'inlineQueryResultSticker',
  /** Unique identifier of the query result */
  id?: string,
  /** Sticker */
  sticker?: stickerOptional,
|}

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
export type inlineQueryResultVideoOptional = {|
  _: 'inlineQueryResultVideo',
  /** Unique identifier of the query result */
  id?: string,
  /** Video */
  video?: videoOptional,
  /** Title of the video */
  title?: string,
  /** Description of the video */
  description?: string,
|}

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
export type inlineQueryResultVoiceNoteOptional = {|
  _: 'inlineQueryResultVoiceNote',
  /** Unique identifier of the query result */
  id?: string,
  /** Voice note */
  voice_note?: voiceNoteOptional,
  /** Title of the voice note */
  title?: string,
|}

/**
 * Represents the results of the inline query. Use sendInlineQueryResultMessage to send
 * the result of the query
 */
export type inlineQueryResults = {
  _: 'inlineQueryResults',
  /** Unique identifier of the inline query */
  inline_query_id: (number | string),
  /** The offset for the next request. If empty, there are no more results */
  next_offset: string,
  /** Results of the query */
  results: InlineQueryResult[],
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
export type inlineQueryResultsOptional = {|
  _: 'inlineQueryResults',
  /** Unique identifier of the inline query */
  inline_query_id?: (number | string),
  /** The offset for the next request. If empty, there are no more results */
  next_offset?: string,
  /** Results of the query */
  results?: InlineQueryResultOptional[],
  /**
   * If non-empty, this text should be shown on the button, which opens a private chat
   * with the bot and sends the bot a start message with the switch_pm_parameter
   */
  switch_pm_text?: string,
  /** Parameter for the bot start message */
  switch_pm_parameter?: string,
|}

/** The payload from a general callback button */
export type callbackQueryPayloadData = {
  _: 'callbackQueryPayloadData',
  /** Data that was attached to the callback button */
  data: string,
}

/** The payload from a general callback button */
export type callbackQueryPayloadDataOptional = {|
  _: 'callbackQueryPayloadData',
  /** Data that was attached to the callback button */
  data?: string,
|}

/** The payload from a game callback button */
export type callbackQueryPayloadGame = {
  _: 'callbackQueryPayloadGame',
  /** A short name of the game that was attached to the callback button */
  game_short_name: string,
}

/** The payload from a game callback button */
export type callbackQueryPayloadGameOptional = {|
  _: 'callbackQueryPayloadGame',
  /** A short name of the game that was attached to the callback button */
  game_short_name?: string,
|}

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
export type callbackQueryAnswerOptional = {|
  _: 'callbackQueryAnswer',
  /** Text of the answer */
  text?: string,
  /** True, if an alert should be shown to the user instead of a toast notification */
  show_alert?: boolean,
  /** URL to be opened */
  url?: string,
|}

/** Contains the result of a custom request */
export type customRequestResult = {
  _: 'customRequestResult',
  /** A JSON-serialized result */
  result: string,
}

/** Contains the result of a custom request */
export type customRequestResultOptional = {|
  _: 'customRequestResult',
  /** A JSON-serialized result */
  result?: string,
|}

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
export type gameHighScoreOptional = {|
  _: 'gameHighScore',
  /** Position in the high score table */
  position?: number,
  /** User identifier */
  user_id?: number,
  /** User score */
  score?: number,
|}

/** Contains a list of game high scores */
export type gameHighScores = {
  _: 'gameHighScores',
  /** A list of game high scores */
  scores: gameHighScore[],
}

/** Contains a list of game high scores */
export type gameHighScoresOptional = {|
  _: 'gameHighScores',
  /** A list of game high scores */
  scores?: gameHighScoreOptional[],
|}

/** A message was edited */
export type chatEventMessageEdited = {
  _: 'chatEventMessageEdited',
  /** The original message before the edit */
  old_message: message,
  /** The message after it was edited */
  new_message: message,
}

/** A message was edited */
export type chatEventMessageEditedOptional = {|
  _: 'chatEventMessageEdited',
  /** The original message before the edit */
  old_message?: messageOptional,
  /** The message after it was edited */
  new_message?: messageOptional,
|}

/** A message was deleted */
export type chatEventMessageDeleted = {
  _: 'chatEventMessageDeleted',
  /** Deleted message */
  message: message,
}

/** A message was deleted */
export type chatEventMessageDeletedOptional = {|
  _: 'chatEventMessageDeleted',
  /** Deleted message */
  message?: messageOptional,
|}

/** A message was pinned */
export type chatEventMessagePinned = {
  _: 'chatEventMessagePinned',
  /** Pinned message */
  message: message,
}

/** A message was pinned */
export type chatEventMessagePinnedOptional = {|
  _: 'chatEventMessagePinned',
  /** Pinned message */
  message?: messageOptional,
|}

/** A message was unpinned */
export type chatEventMessageUnpinned = {
  _: 'chatEventMessageUnpinned',
}

/** A message was unpinned */
export type chatEventMessageUnpinnedOptional = {|
  _: 'chatEventMessageUnpinned',
|}

/** A new member joined the chat */
export type chatEventMemberJoined = {
  _: 'chatEventMemberJoined',
}

/** A new member joined the chat */
export type chatEventMemberJoinedOptional = {|
  _: 'chatEventMemberJoined',
|}

/** A member left the chat */
export type chatEventMemberLeft = {
  _: 'chatEventMemberLeft',
}

/** A member left the chat */
export type chatEventMemberLeftOptional = {|
  _: 'chatEventMemberLeft',
|}

/** A new chat member was invited */
export type chatEventMemberInvited = {
  _: 'chatEventMemberInvited',
  /** New member user identifier */
  user_id: number,
  /** New member status */
  status: ChatMemberStatus,
}

/** A new chat member was invited */
export type chatEventMemberInvitedOptional = {|
  _: 'chatEventMemberInvited',
  /** New member user identifier */
  user_id?: number,
  /** New member status */
  status?: ChatMemberStatusOptional,
|}

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
export type chatEventMemberPromotedOptional = {|
  _: 'chatEventMemberPromoted',
  /** Chat member user identifier */
  user_id?: number,
  /** Previous status of the chat member */
  old_status?: ChatMemberStatusOptional,
  /** New status of the chat member */
  new_status?: ChatMemberStatusOptional,
|}

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
export type chatEventMemberRestrictedOptional = {|
  _: 'chatEventMemberRestricted',
  /** Chat member user identifier */
  user_id?: number,
  /** Previous status of the chat member */
  old_status?: ChatMemberStatusOptional,
  /** New status of the chat member */
  new_status?: ChatMemberStatusOptional,
|}

/** The chat title was changed */
export type chatEventTitleChanged = {
  _: 'chatEventTitleChanged',
  /** Previous chat title */
  old_title: string,
  /** New chat title */
  new_title: string,
}

/** The chat title was changed */
export type chatEventTitleChangedOptional = {|
  _: 'chatEventTitleChanged',
  /** Previous chat title */
  old_title?: string,
  /** New chat title */
  new_title?: string,
|}

/** The chat description was changed */
export type chatEventDescriptionChanged = {
  _: 'chatEventDescriptionChanged',
  /** Previous chat description */
  old_description: string,
  /** New chat description */
  new_description: string,
}

/** The chat description was changed */
export type chatEventDescriptionChangedOptional = {|
  _: 'chatEventDescriptionChanged',
  /** Previous chat description */
  old_description?: string,
  /** New chat description */
  new_description?: string,
|}

/** The chat username was changed */
export type chatEventUsernameChanged = {
  _: 'chatEventUsernameChanged',
  /** Previous chat username */
  old_username: string,
  /** New chat username */
  new_username: string,
}

/** The chat username was changed */
export type chatEventUsernameChangedOptional = {|
  _: 'chatEventUsernameChanged',
  /** Previous chat username */
  old_username?: string,
  /** New chat username */
  new_username?: string,
|}

/** The chat photo was changed */
export type chatEventPhotoChanged = {
  _: 'chatEventPhotoChanged',
  /** Previous chat photo value; may be null */
  old_photo: chatPhoto,
  /** New chat photo value; may be null */
  new_photo: chatPhoto,
}

/** The chat photo was changed */
export type chatEventPhotoChangedOptional = {|
  _: 'chatEventPhotoChanged',
  /** Previous chat photo value; may be null */
  old_photo?: chatPhotoOptional,
  /** New chat photo value; may be null */
  new_photo?: chatPhotoOptional,
|}

/** The anyone_can_invite setting of a supergroup chat was toggled */
export type chatEventInvitesToggled = {
  _: 'chatEventInvitesToggled',
  /** New value of anyone_can_invite */
  anyone_can_invite: boolean,
}

/** The anyone_can_invite setting of a supergroup chat was toggled */
export type chatEventInvitesToggledOptional = {|
  _: 'chatEventInvitesToggled',
  /** New value of anyone_can_invite */
  anyone_can_invite?: boolean,
|}

/** The sign_messages setting of a channel was toggled */
export type chatEventSignMessagesToggled = {
  _: 'chatEventSignMessagesToggled',
  /** New value of sign_messages */
  sign_messages: boolean,
}

/** The sign_messages setting of a channel was toggled */
export type chatEventSignMessagesToggledOptional = {|
  _: 'chatEventSignMessagesToggled',
  /** New value of sign_messages */
  sign_messages?: boolean,
|}

/** The supergroup sticker set was changed */
export type chatEventStickerSetChanged = {
  _: 'chatEventStickerSetChanged',
  /** Previous identifier of the chat sticker set; 0 if none */
  old_sticker_set_id: (number | string),
  /** New identifier of the chat sticker set; 0 if none */
  new_sticker_set_id: (number | string),
}

/** The supergroup sticker set was changed */
export type chatEventStickerSetChangedOptional = {|
  _: 'chatEventStickerSetChanged',
  /** Previous identifier of the chat sticker set; 0 if none */
  old_sticker_set_id?: (number | string),
  /** New identifier of the chat sticker set; 0 if none */
  new_sticker_set_id?: (number | string),
|}

/** The is_all_history_available setting of a supergroup was toggled */
export type chatEventIsAllHistoryAvailableToggled = {
  _: 'chatEventIsAllHistoryAvailableToggled',
  /** New value of is_all_history_available */
  is_all_history_available: boolean,
}

/** The is_all_history_available setting of a supergroup was toggled */
export type chatEventIsAllHistoryAvailableToggledOptional = {|
  _: 'chatEventIsAllHistoryAvailableToggled',
  /** New value of is_all_history_available */
  is_all_history_available?: boolean,
|}

/** Represents a chat event */
export type chatEvent = {
  _: 'chatEvent',
  /** Chat event identifier */
  id: (number | string),
  /** Point in time (Unix timestamp) when the event happened */
  date: number,
  /** Identifier of the user who performed the action that triggered the event */
  user_id: number,
  /** Action performed by the user */
  action: ChatEventAction,
}

/** Represents a chat event */
export type chatEventOptional = {|
  _: 'chatEvent',
  /** Chat event identifier */
  id?: (number | string),
  /** Point in time (Unix timestamp) when the event happened */
  date?: number,
  /** Identifier of the user who performed the action that triggered the event */
  user_id?: number,
  /** Action performed by the user */
  action?: ChatEventActionOptional,
|}

/** Contains a list of chat events */
export type chatEvents = {
  _: 'chatEvents',
  /** List of events */
  events: chatEvent[],
}

/** Contains a list of chat events */
export type chatEventsOptional = {|
  _: 'chatEvents',
  /** List of events */
  events?: chatEventOptional[],
|}

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
export type chatEventLogFiltersOptional = {|
  _: 'chatEventLogFilters',
  /** True, if message edits should be returned */
  message_edits?: boolean,
  /** True, if message deletions should be returned */
  message_deletions?: boolean,
  /** True, if pin/unpin events should be returned */
  message_pins?: boolean,
  /** True, if members joining events should be returned */
  member_joins?: boolean,
  /** True, if members leaving events should be returned */
  member_leaves?: boolean,
  /** True, if invited member events should be returned */
  member_invites?: boolean,
  /** True, if member promotion/demotion events should be returned */
  member_promotions?: boolean,
  /** True, if member restricted/unrestricted/banned/unbanned events should be returned */
  member_restrictions?: boolean,
  /** True, if changes in chat information should be returned */
  info_changes?: boolean,
  /** True, if changes in chat settings should be returned */
  setting_changes?: boolean,
|}

/** An ordinary language pack string */
export type languagePackStringValueOrdinary = {
  _: 'languagePackStringValueOrdinary',
  /** String value */
  value: string,
}

/** An ordinary language pack string */
export type languagePackStringValueOrdinaryOptional = {|
  _: 'languagePackStringValueOrdinary',
  /** String value */
  value?: string,
|}

/**
 * A language pack string which has different forms based on the number of some object
 * it mentions
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
 * it mentions
 */
export type languagePackStringValuePluralizedOptional = {|
  _: 'languagePackStringValuePluralized',
  /** Value for zero objects */
  zero_value?: string,
  /** Value for one object */
  one_value?: string,
  /** Value for two objects */
  two_value?: string,
  /** Value for few objects */
  few_value?: string,
  /** Value for many objects */
  many_value?: string,
  /** Default value */
  other_value?: string,
|}

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
export type languagePackStringValueDeletedOptional = {|
  _: 'languagePackStringValueDeleted',
|}

/** Represents one language pack string */
export type languagePackString = {
  _: 'languagePackString',
  /** String key */
  key: string,
  /** String value */
  value: LanguagePackStringValue,
}

/** Represents one language pack string */
export type languagePackStringOptional = {|
  _: 'languagePackString',
  /** String key */
  key?: string,
  /** String value */
  value?: LanguagePackStringValueOptional,
|}

/** Contains a list of language pack strings */
export type languagePackStrings = {
  _: 'languagePackStrings',
  /** A list of language pack strings */
  strings: languagePackString[],
}

/** Contains a list of language pack strings */
export type languagePackStringsOptional = {|
  _: 'languagePackStrings',
  /** A list of language pack strings */
  strings?: languagePackStringOptional[],
|}

/** Contains information about a language pack */
export type languagePackInfo = {
  _: 'languagePackInfo',
  /** Unique language pack identifier */
  id: string,
  /** Language name */
  name: string,
  /** Name of the language in that language */
  native_name: string,
  /** Total number of non-deleted strings from the language pack available locally */
  local_string_count: number,
}

/** Contains information about a language pack */
export type languagePackInfoOptional = {|
  _: 'languagePackInfo',
  /** Unique language pack identifier */
  id?: string,
  /** Language name */
  name?: string,
  /** Name of the language in that language */
  native_name?: string,
  /** Total number of non-deleted strings from the language pack available locally */
  local_string_count?: number,
|}

/** Contains information about the current localization target */
export type localizationTargetInfo = {
  _: 'localizationTargetInfo',
  /** List of available language packs for this application */
  language_packs: languagePackInfo[],
}

/** Contains information about the current localization target */
export type localizationTargetInfoOptional = {|
  _: 'localizationTargetInfo',
  /** List of available language packs for this application */
  language_packs?: languagePackInfoOptional[],
|}

/** A token for Google Cloud Messaging */
export type deviceTokenGoogleCloudMessaging = {
  _: 'deviceTokenGoogleCloudMessaging',
  /** Device registration token; may be empty to de-register a device */
  token: string,
}

/** A token for Google Cloud Messaging */
export type deviceTokenGoogleCloudMessagingOptional = {|
  _: 'deviceTokenGoogleCloudMessaging',
  /** Device registration token; may be empty to de-register a device */
  token?: string,
|}

/** A token for Apple Push Notification service */
export type deviceTokenApplePush = {
  _: 'deviceTokenApplePush',
  /** Device token; may be empty to de-register a device */
  device_token: string,
  /** True, if App Sandbox is enabled */
  is_app_sandbox: boolean,
}

/** A token for Apple Push Notification service */
export type deviceTokenApplePushOptional = {|
  _: 'deviceTokenApplePush',
  /** Device token; may be empty to de-register a device */
  device_token?: string,
  /** True, if App Sandbox is enabled */
  is_app_sandbox?: boolean,
|}

/** A token for Apple Push Notification service VoIP notifications */
export type deviceTokenApplePushVoIP = {
  _: 'deviceTokenApplePushVoIP',
  /** Device token; may be empty to de-register a device */
  device_token: string,
  /** True, if App Sandbox is enabled */
  is_app_sandbox: boolean,
}

/** A token for Apple Push Notification service VoIP notifications */
export type deviceTokenApplePushVoIPOptional = {|
  _: 'deviceTokenApplePushVoIP',
  /** Device token; may be empty to de-register a device */
  device_token?: string,
  /** True, if App Sandbox is enabled */
  is_app_sandbox?: boolean,
|}

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
export type deviceTokenWindowsPushOptional = {|
  _: 'deviceTokenWindowsPush',
  /**
   * The access token that will be used to send notifications; may be empty to de-register
   * a device
   */
  access_token?: string,
|}

/** A token for Microsoft Push Notification Service */
export type deviceTokenMicrosoftPush = {
  _: 'deviceTokenMicrosoftPush',
  /** Push notification channel URI; may be empty to de-register a device */
  channel_uri: string,
}

/** A token for Microsoft Push Notification Service */
export type deviceTokenMicrosoftPushOptional = {|
  _: 'deviceTokenMicrosoftPush',
  /** Push notification channel URI; may be empty to de-register a device */
  channel_uri?: string,
|}

/** A token for Microsoft Push Notification Service VoIP channel */
export type deviceTokenMicrosoftPushVoIP = {
  _: 'deviceTokenMicrosoftPushVoIP',
  /** Push notification channel URI; may be empty to de-register a device */
  channel_uri: string,
}

/** A token for Microsoft Push Notification Service VoIP channel */
export type deviceTokenMicrosoftPushVoIPOptional = {|
  _: 'deviceTokenMicrosoftPushVoIP',
  /** Push notification channel URI; may be empty to de-register a device */
  channel_uri?: string,
|}

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
export type deviceTokenWebPushOptional = {|
  _: 'deviceTokenWebPush',
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  endpoint?: string,
  /** Base64url-encoded P-256 elliptic curve Diffie-Hellman public key */
  p256dh_base64url?: string,
  /** Base64url-encoded authentication secret */
  auth_base64url?: string,
|}

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
export type deviceTokenSimplePushOptional = {|
  _: 'deviceTokenSimplePush',
  /**
   * Absolute URL exposed by the push service where the application server can send push
   * messages; may be empty to de-register a device
   */
  endpoint?: string,
|}

/** A token for Ubuntu Push Client service */
export type deviceTokenUbuntuPush = {
  _: 'deviceTokenUbuntuPush',
  /** Token; may be empty to de-register a device */
  token: string,
}

/** A token for Ubuntu Push Client service */
export type deviceTokenUbuntuPushOptional = {|
  _: 'deviceTokenUbuntuPush',
  /** Token; may be empty to de-register a device */
  token?: string,
|}

/** A token for BlackBerry Push Service */
export type deviceTokenBlackBerryPush = {
  _: 'deviceTokenBlackBerryPush',
  /** Token; may be empty to de-register a device */
  token: string,
}

/** A token for BlackBerry Push Service */
export type deviceTokenBlackBerryPushOptional = {|
  _: 'deviceTokenBlackBerryPush',
  /** Token; may be empty to de-register a device */
  token?: string,
|}

/** A token for Tizen Push Service */
export type deviceTokenTizenPush = {
  _: 'deviceTokenTizenPush',
  /** Push service registration identifier; may be empty to de-register a device */
  reg_id: string,
}

/** A token for Tizen Push Service */
export type deviceTokenTizenPushOptional = {|
  _: 'deviceTokenTizenPush',
  /** Push service registration identifier; may be empty to de-register a device */
  reg_id?: string,
|}

/** Contains information about a wallpaper */
export type wallpaper = {
  _: 'wallpaper',
  /** Unique persistent wallpaper identifier */
  id: number,
  /**
   * Available variants of the wallpaper in different sizes. These photos can only be
   * downloaded; they can't be sent in a message
   */
  sizes: photoSize[],
  /**
   * Main color of the wallpaper in RGB24 format; should be treated as background color
   * if no photos are specified
   */
  color: number,
}

/** Contains information about a wallpaper */
export type wallpaperOptional = {|
  _: 'wallpaper',
  /** Unique persistent wallpaper identifier */
  id?: number,
  /**
   * Available variants of the wallpaper in different sizes. These photos can only be
   * downloaded; they can't be sent in a message
   */
  sizes?: photoSizeOptional[],
  /**
   * Main color of the wallpaper in RGB24 format; should be treated as background color
   * if no photos are specified
   */
  color?: number,
|}

/** Contains a list of wallpapers */
export type wallpapers = {
  _: 'wallpapers',
  /** A list of wallpapers */
  wallpapers: wallpaper[],
}

/** Contains a list of wallpapers */
export type wallpapersOptional = {|
  _: 'wallpapers',
  /** A list of wallpapers */
  wallpapers?: wallpaperOptional[],
|}

/** Contains a list of hashtags */
export type hashtags = {
  _: 'hashtags',
  /** A list of hashtags */
  hashtags: string[],
}

/** Contains a list of hashtags */
export type hashtagsOptional = {|
  _: 'hashtags',
  /** A list of hashtags */
  hashtags?: string[],
|}

/** The username can be set */
export type checkChatUsernameResultOk = {
  _: 'checkChatUsernameResultOk',
}

/** The username can be set */
export type checkChatUsernameResultOkOptional = {|
  _: 'checkChatUsernameResultOk',
|}

/** The username is invalid */
export type checkChatUsernameResultUsernameInvalid = {
  _: 'checkChatUsernameResultUsernameInvalid',
}

/** The username is invalid */
export type checkChatUsernameResultUsernameInvalidOptional = {|
  _: 'checkChatUsernameResultUsernameInvalid',
|}

/** The username is occupied */
export type checkChatUsernameResultUsernameOccupied = {
  _: 'checkChatUsernameResultUsernameOccupied',
}

/** The username is occupied */
export type checkChatUsernameResultUsernameOccupiedOptional = {|
  _: 'checkChatUsernameResultUsernameOccupied',
|}

/** The user has too much public chats, one of them should be made private first */
export type checkChatUsernameResultPublicChatsTooMuch = {
  _: 'checkChatUsernameResultPublicChatsTooMuch',
}

/** The user has too much public chats, one of them should be made private first */
export type checkChatUsernameResultPublicChatsTooMuchOptional = {|
  _: 'checkChatUsernameResultPublicChatsTooMuch',
|}

/** The user can't be a member of a public supergroup */
export type checkChatUsernameResultPublicGroupsUnavailable = {
  _: 'checkChatUsernameResultPublicGroupsUnavailable',
}

/** The user can't be a member of a public supergroup */
export type checkChatUsernameResultPublicGroupsUnavailableOptional = {|
  _: 'checkChatUsernameResultPublicGroupsUnavailable',
|}

/** Boolean option */
export type optionValueBoolean = {
  _: 'optionValueBoolean',
  /** The value of the option */
  value: boolean,
}

/** Boolean option */
export type optionValueBooleanOptional = {|
  _: 'optionValueBoolean',
  /** The value of the option */
  value?: boolean,
|}

/** An unknown option or an option which has a default value */
export type optionValueEmpty = {
  _: 'optionValueEmpty',
}

/** An unknown option or an option which has a default value */
export type optionValueEmptyOptional = {|
  _: 'optionValueEmpty',
|}

/** An integer option */
export type optionValueInteger = {
  _: 'optionValueInteger',
  /** The value of the option */
  value: number,
}

/** An integer option */
export type optionValueIntegerOptional = {|
  _: 'optionValueInteger',
  /** The value of the option */
  value?: number,
|}

/** A string option */
export type optionValueString = {
  _: 'optionValueString',
  /** The value of the option */
  value: string,
}

/** A string option */
export type optionValueStringOptional = {|
  _: 'optionValueString',
  /** The value of the option */
  value?: string,
|}

/** A rule to allow all users to do something */
export type userPrivacySettingRuleAllowAll = {
  _: 'userPrivacySettingRuleAllowAll',
}

/** A rule to allow all users to do something */
export type userPrivacySettingRuleAllowAllOptional = {|
  _: 'userPrivacySettingRuleAllowAll',
|}

/** A rule to allow all of a user's contacts to do something */
export type userPrivacySettingRuleAllowContacts = {
  _: 'userPrivacySettingRuleAllowContacts',
}

/** A rule to allow all of a user's contacts to do something */
export type userPrivacySettingRuleAllowContactsOptional = {|
  _: 'userPrivacySettingRuleAllowContacts',
|}

/** A rule to allow certain specified users to do something */
export type userPrivacySettingRuleAllowUsers = {
  _: 'userPrivacySettingRuleAllowUsers',
  /** The user identifiers */
  user_ids: number[],
}

/** A rule to allow certain specified users to do something */
export type userPrivacySettingRuleAllowUsersOptional = {|
  _: 'userPrivacySettingRuleAllowUsers',
  /** The user identifiers */
  user_ids?: number[],
|}

/** A rule to restrict all users from doing something */
export type userPrivacySettingRuleRestrictAll = {
  _: 'userPrivacySettingRuleRestrictAll',
}

/** A rule to restrict all users from doing something */
export type userPrivacySettingRuleRestrictAllOptional = {|
  _: 'userPrivacySettingRuleRestrictAll',
|}

/** A rule to restrict all contacts of a user from doing something */
export type userPrivacySettingRuleRestrictContacts = {
  _: 'userPrivacySettingRuleRestrictContacts',
}

/** A rule to restrict all contacts of a user from doing something */
export type userPrivacySettingRuleRestrictContactsOptional = {|
  _: 'userPrivacySettingRuleRestrictContacts',
|}

/** A rule to restrict all specified users from doing something */
export type userPrivacySettingRuleRestrictUsers = {
  _: 'userPrivacySettingRuleRestrictUsers',
  /** The user identifiers */
  user_ids: number[],
}

/** A rule to restrict all specified users from doing something */
export type userPrivacySettingRuleRestrictUsersOptional = {|
  _: 'userPrivacySettingRuleRestrictUsers',
  /** The user identifiers */
  user_ids?: number[],
|}

/**
 * A list of privacy rules. Rules are matched in the specified order. The first matched
 * rule defines the privacy setting for a given user. If no rule matches, the action
 * is not allowed
 */
export type userPrivacySettingRules = {
  _: 'userPrivacySettingRules',
  /** A list of rules */
  rules: UserPrivacySettingRule[],
}

/**
 * A list of privacy rules. Rules are matched in the specified order. The first matched
 * rule defines the privacy setting for a given user. If no rule matches, the action
 * is not allowed
 */
export type userPrivacySettingRulesOptional = {|
  _: 'userPrivacySettingRules',
  /** A list of rules */
  rules?: UserPrivacySettingRuleOptional[],
|}

/** A privacy setting for managing whether the user's online status is visible */
export type userPrivacySettingShowStatus = {
  _: 'userPrivacySettingShowStatus',
}

/** A privacy setting for managing whether the user's online status is visible */
export type userPrivacySettingShowStatusOptional = {|
  _: 'userPrivacySettingShowStatus',
|}

/** A privacy setting for managing whether the user can be invited to chats */
export type userPrivacySettingAllowChatInvites = {
  _: 'userPrivacySettingAllowChatInvites',
}

/** A privacy setting for managing whether the user can be invited to chats */
export type userPrivacySettingAllowChatInvitesOptional = {|
  _: 'userPrivacySettingAllowChatInvites',
|}

/** A privacy setting for managing whether the user can be called */
export type userPrivacySettingAllowCalls = {
  _: 'userPrivacySettingAllowCalls',
}

/** A privacy setting for managing whether the user can be called */
export type userPrivacySettingAllowCallsOptional = {|
  _: 'userPrivacySettingAllowCalls',
|}

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
export type accountTtlOptional = {|
  _: 'accountTtl',
  /**
   * Number of days of inactivity before the account will be flagged for deletion; should
   * range from 30-366 days
   */
  days?: number,
|}

/**
 * Contains information about one session in a Telegram application used by the current
 * user
 */
export type session = {
  _: 'session',
  /** Session identifier */
  id: (number | string),
  /** True, if this session is the current session */
  is_current: boolean,
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
 * user
 */
export type sessionOptional = {|
  _: 'session',
  /** Session identifier */
  id?: (number | string),
  /** True, if this session is the current session */
  is_current?: boolean,
  /** Telegram API identifier, as provided by the application */
  api_id?: number,
  /** Name of the application, as provided by the application */
  application_name?: string,
  /** The version of the application, as provided by the application */
  application_version?: string,
  /**
   * True, if the application is an official application or uses the api_id of an official
   * application
   */
  is_official_application?: boolean,
  /**
   * Model of the device the application has been run or is running on, as provided by
   * the application
   */
  device_model?: string,
  /**
   * Operating system the application has been run or is running on, as provided by the
   * application
   */
  platform?: string,
  /**
   * Version of the operating system the application has been run or is running on, as
   * provided by the application
   */
  system_version?: string,
  /** Point in time (Unix timestamp) when the user has logged in */
  log_in_date?: number,
  /** Point in time (Unix timestamp) when the session was last used */
  last_active_date?: number,
  /** IP address from which the session was created, in human-readable format */
  ip?: string,
  /**
   * A two-letter country code for the country from which the session was created, based
   * on the IP address
   */
  country?: string,
  /** Region code from which the session was created, based on the IP address */
  region?: string,
|}

/** Contains a list of sessions */
export type sessions = {
  _: 'sessions',
  /** List of sessions */
  sessions: session[],
}

/** Contains a list of sessions */
export type sessionsOptional = {|
  _: 'sessions',
  /** List of sessions */
  sessions?: sessionOptional[],
|}

/** Contains information about one website the current user is logged in with Telegram */
export type connectedWebsite = {
  _: 'connectedWebsite',
  /** Website identifier */
  id: (number | string),
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
export type connectedWebsiteOptional = {|
  _: 'connectedWebsite',
  /** Website identifier */
  id?: (number | string),
  /** The domain name of the website */
  domain_name?: string,
  /** User identifier of a bot linked with the website */
  bot_user_id?: number,
  /** The version of a browser used to log in */
  browser?: string,
  /** Operating system the browser is running on */
  platform?: string,
  /** Point in time (Unix timestamp) when the user was logged in */
  log_in_date?: number,
  /** Point in time (Unix timestamp) when obtained authorization was last used */
  last_active_date?: number,
  /** IP address from which the user was logged in, in human-readable format */
  ip?: string,
  /**
   * Human-readable description of a country and a region, from which the user was logged
   * in, based on the IP address
   */
  location?: string,
|}

/** Contains a list of websites the current user is logged in with Telegram */
export type connectedWebsites = {
  _: 'connectedWebsites',
  /** List of connected websites */
  websites: connectedWebsite[],
}

/** Contains a list of websites the current user is logged in with Telegram */
export type connectedWebsitesOptional = {|
  _: 'connectedWebsites',
  /** List of connected websites */
  websites?: connectedWebsiteOptional[],
|}

/** Contains information about the availability of the "Report spam" action for a chat */
export type chatReportSpamState = {
  _: 'chatReportSpamState',
  /** True, if a prompt with the "Report spam" action should be shown to the user */
  can_report_spam: boolean,
}

/** Contains information about the availability of the "Report spam" action for a chat */
export type chatReportSpamStateOptional = {|
  _: 'chatReportSpamState',
  /** True, if a prompt with the "Report spam" action should be shown to the user */
  can_report_spam?: boolean,
|}

/** The chat contains spam messages */
export type chatReportReasonSpam = {
  _: 'chatReportReasonSpam',
}

/** The chat contains spam messages */
export type chatReportReasonSpamOptional = {|
  _: 'chatReportReasonSpam',
|}

/** The chat promotes violence */
export type chatReportReasonViolence = {
  _: 'chatReportReasonViolence',
}

/** The chat promotes violence */
export type chatReportReasonViolenceOptional = {|
  _: 'chatReportReasonViolence',
|}

/** The chat contains pornographic messages */
export type chatReportReasonPornography = {
  _: 'chatReportReasonPornography',
}

/** The chat contains pornographic messages */
export type chatReportReasonPornographyOptional = {|
  _: 'chatReportReasonPornography',
|}

/** The chat contains copyrighted content */
export type chatReportReasonCopyright = {
  _: 'chatReportReasonCopyright',
}

/** The chat contains copyrighted content */
export type chatReportReasonCopyrightOptional = {|
  _: 'chatReportReasonCopyright',
|}

/** A custom reason provided by the user */
export type chatReportReasonCustom = {
  _: 'chatReportReasonCustom',
  /** Report text */
  text: string,
}

/** A custom reason provided by the user */
export type chatReportReasonCustomOptional = {|
  _: 'chatReportReasonCustom',
  /** Report text */
  text?: string,
|}

/** Contains a public HTTPS link to a message in a public supergroup or channel */
export type publicMessageLink = {
  _: 'publicMessageLink',
  /** Message link */
  link: string,
  /** HTML-code for embedding the message */
  html: string,
}

/** Contains a public HTTPS link to a message in a public supergroup or channel */
export type publicMessageLinkOptional = {|
  _: 'publicMessageLink',
  /** Message link */
  link?: string,
  /** HTML-code for embedding the message */
  html?: string,
|}

/** The data is not a file */
export type fileTypeNone = {
  _: 'fileTypeNone',
}

/** The data is not a file */
export type fileTypeNoneOptional = {|
  _: 'fileTypeNone',
|}

/** The file is an animation */
export type fileTypeAnimation = {
  _: 'fileTypeAnimation',
}

/** The file is an animation */
export type fileTypeAnimationOptional = {|
  _: 'fileTypeAnimation',
|}

/** The file is an audio file */
export type fileTypeAudio = {
  _: 'fileTypeAudio',
}

/** The file is an audio file */
export type fileTypeAudioOptional = {|
  _: 'fileTypeAudio',
|}

/** The file is a document */
export type fileTypeDocument = {
  _: 'fileTypeDocument',
}

/** The file is a document */
export type fileTypeDocumentOptional = {|
  _: 'fileTypeDocument',
|}

/** The file is a photo */
export type fileTypePhoto = {
  _: 'fileTypePhoto',
}

/** The file is a photo */
export type fileTypePhotoOptional = {|
  _: 'fileTypePhoto',
|}

/** The file is a profile photo */
export type fileTypeProfilePhoto = {
  _: 'fileTypeProfilePhoto',
}

/** The file is a profile photo */
export type fileTypeProfilePhotoOptional = {|
  _: 'fileTypeProfilePhoto',
|}

/** The file was sent to a secret chat (the file type is not known to the server) */
export type fileTypeSecret = {
  _: 'fileTypeSecret',
}

/** The file was sent to a secret chat (the file type is not known to the server) */
export type fileTypeSecretOptional = {|
  _: 'fileTypeSecret',
|}

/** The file is a thumbnail of a file from a secret chat */
export type fileTypeSecretThumbnail = {
  _: 'fileTypeSecretThumbnail',
}

/** The file is a thumbnail of a file from a secret chat */
export type fileTypeSecretThumbnailOptional = {|
  _: 'fileTypeSecretThumbnail',
|}

/** The file is a file from Secure storage used for storing Telegram Passport files */
export type fileTypeSecure = {
  _: 'fileTypeSecure',
}

/** The file is a file from Secure storage used for storing Telegram Passport files */
export type fileTypeSecureOptional = {|
  _: 'fileTypeSecure',
|}

/** The file is a sticker */
export type fileTypeSticker = {
  _: 'fileTypeSticker',
}

/** The file is a sticker */
export type fileTypeStickerOptional = {|
  _: 'fileTypeSticker',
|}

/** The file is a thumbnail of another file */
export type fileTypeThumbnail = {
  _: 'fileTypeThumbnail',
}

/** The file is a thumbnail of another file */
export type fileTypeThumbnailOptional = {|
  _: 'fileTypeThumbnail',
|}

/** The file type is not yet known */
export type fileTypeUnknown = {
  _: 'fileTypeUnknown',
}

/** The file type is not yet known */
export type fileTypeUnknownOptional = {|
  _: 'fileTypeUnknown',
|}

/** The file is a video */
export type fileTypeVideo = {
  _: 'fileTypeVideo',
}

/** The file is a video */
export type fileTypeVideoOptional = {|
  _: 'fileTypeVideo',
|}

/** The file is a video note */
export type fileTypeVideoNote = {
  _: 'fileTypeVideoNote',
}

/** The file is a video note */
export type fileTypeVideoNoteOptional = {|
  _: 'fileTypeVideoNote',
|}

/** The file is a voice note */
export type fileTypeVoiceNote = {
  _: 'fileTypeVoiceNote',
}

/** The file is a voice note */
export type fileTypeVoiceNoteOptional = {|
  _: 'fileTypeVoiceNote',
|}

/** The file is a wallpaper */
export type fileTypeWallpaper = {
  _: 'fileTypeWallpaper',
}

/** The file is a wallpaper */
export type fileTypeWallpaperOptional = {|
  _: 'fileTypeWallpaper',
|}

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
export type storageStatisticsByFileTypeOptional = {|
  _: 'storageStatisticsByFileType',
  /** File type */
  file_type?: FileTypeOptional,
  /** Total size of the files */
  size?: number,
  /** Total number of files */
  count?: number,
|}

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
  by_file_type: storageStatisticsByFileType[],
}

/** Contains the storage usage statistics for a specific chat */
export type storageStatisticsByChatOptional = {|
  _: 'storageStatisticsByChat',
  /** Chat identifier; 0 if none */
  chat_id?: number,
  /** Total size of the files in the chat */
  size?: number,
  /** Total number of files in the chat */
  count?: number,
  /** Statistics split by file types */
  by_file_type?: storageStatisticsByFileTypeOptional[],
|}

/** Contains the exact storage usage statistics split by chats and file type */
export type storageStatistics = {
  _: 'storageStatistics',
  /** Total size of files */
  size: number,
  /** Total number of files */
  count: number,
  /** Statistics split by chats */
  by_chat: storageStatisticsByChat[],
}

/** Contains the exact storage usage statistics split by chats and file type */
export type storageStatisticsOptional = {|
  _: 'storageStatistics',
  /** Total size of files */
  size?: number,
  /** Total number of files */
  count?: number,
  /** Statistics split by chats */
  by_chat?: storageStatisticsByChatOptional[],
|}

/** Contains approximate storage usage statistics, excluding files of unknown file type */
export type storageStatisticsFast = {
  _: 'storageStatisticsFast',
  /** Approximate total size of files */
  files_size: number,
  /** Approximate number of files */
  file_count: number,
  /** Size of the database */
  database_size: number,
}

/** Contains approximate storage usage statistics, excluding files of unknown file type */
export type storageStatisticsFastOptional = {|
  _: 'storageStatisticsFast',
  /** Approximate total size of files */
  files_size?: number,
  /** Approximate number of files */
  file_count?: number,
  /** Size of the database */
  database_size?: number,
|}

/** The network is not available */
export type networkTypeNone = {
  _: 'networkTypeNone',
}

/** The network is not available */
export type networkTypeNoneOptional = {|
  _: 'networkTypeNone',
|}

/** A mobile network */
export type networkTypeMobile = {
  _: 'networkTypeMobile',
}

/** A mobile network */
export type networkTypeMobileOptional = {|
  _: 'networkTypeMobile',
|}

/** A mobile roaming network */
export type networkTypeMobileRoaming = {
  _: 'networkTypeMobileRoaming',
}

/** A mobile roaming network */
export type networkTypeMobileRoamingOptional = {|
  _: 'networkTypeMobileRoaming',
|}

/** A Wi-Fi network */
export type networkTypeWiFi = {
  _: 'networkTypeWiFi',
}

/** A Wi-Fi network */
export type networkTypeWiFiOptional = {|
  _: 'networkTypeWiFi',
|}

/** A different network type (e.g., Ethernet network) */
export type networkTypeOther = {
  _: 'networkTypeOther',
}

/** A different network type (e.g., Ethernet network) */
export type networkTypeOtherOptional = {|
  _: 'networkTypeOther',
|}

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
export type networkStatisticsEntryFileOptional = {|
  _: 'networkStatisticsEntryFile',
  /** Type of the file the data is part of */
  file_type?: FileTypeOptional,
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  network_type?: NetworkTypeOptional,
  /** Total number of bytes sent */
  sent_bytes?: number,
  /** Total number of bytes received */
  received_bytes?: number,
|}

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
export type networkStatisticsEntryCallOptional = {|
  _: 'networkStatisticsEntryCall',
  /**
   * Type of the network the data was sent through. Call setNetworkType to maintain the
   * actual network type
   */
  network_type?: NetworkTypeOptional,
  /** Total number of bytes sent */
  sent_bytes?: number,
  /** Total number of bytes received */
  received_bytes?: number,
  /** Total call duration, in seconds */
  duration?: number,
|}

/** A full list of available network statistic entries */
export type networkStatistics = {
  _: 'networkStatistics',
  /** Point in time (Unix timestamp) when the app began collecting statistics */
  since_date: number,
  /** Network statistics entries */
  entries: NetworkStatisticsEntry[],
}

/** A full list of available network statistic entries */
export type networkStatisticsOptional = {|
  _: 'networkStatistics',
  /** Point in time (Unix timestamp) when the app began collecting statistics */
  since_date?: number,
  /** Network statistics entries */
  entries?: NetworkStatisticsEntryOptional[],
|}

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
export type connectionStateWaitingForNetworkOptional = {|
  _: 'connectionStateWaitingForNetwork',
|}

/** Currently establishing a connection with a proxy server */
export type connectionStateConnectingToProxy = {
  _: 'connectionStateConnectingToProxy',
}

/** Currently establishing a connection with a proxy server */
export type connectionStateConnectingToProxyOptional = {|
  _: 'connectionStateConnectingToProxy',
|}

/** Currently establishing a connection to the Telegram servers */
export type connectionStateConnecting = {
  _: 'connectionStateConnecting',
}

/** Currently establishing a connection to the Telegram servers */
export type connectionStateConnectingOptional = {|
  _: 'connectionStateConnecting',
|}

/** Downloading data received while the client was offline */
export type connectionStateUpdating = {
  _: 'connectionStateUpdating',
}

/** Downloading data received while the client was offline */
export type connectionStateUpdatingOptional = {|
  _: 'connectionStateUpdating',
|}

/** There is a working connection to the Telegram servers */
export type connectionStateReady = {
  _: 'connectionStateReady',
}

/** There is a working connection to the Telegram servers */
export type connectionStateReadyOptional = {|
  _: 'connectionStateReady',
|}

/** A category containing frequently used private chats with non-bot users */
export type topChatCategoryUsers = {
  _: 'topChatCategoryUsers',
}

/** A category containing frequently used private chats with non-bot users */
export type topChatCategoryUsersOptional = {|
  _: 'topChatCategoryUsers',
|}

/** A category containing frequently used private chats with bot users */
export type topChatCategoryBots = {
  _: 'topChatCategoryBots',
}

/** A category containing frequently used private chats with bot users */
export type topChatCategoryBotsOptional = {|
  _: 'topChatCategoryBots',
|}

/** A category containing frequently used basic groups and supergroups */
export type topChatCategoryGroups = {
  _: 'topChatCategoryGroups',
}

/** A category containing frequently used basic groups and supergroups */
export type topChatCategoryGroupsOptional = {|
  _: 'topChatCategoryGroups',
|}

/** A category containing frequently used channels */
export type topChatCategoryChannels = {
  _: 'topChatCategoryChannels',
}

/** A category containing frequently used channels */
export type topChatCategoryChannelsOptional = {|
  _: 'topChatCategoryChannels',
|}

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
export type topChatCategoryInlineBotsOptional = {|
  _: 'topChatCategoryInlineBots',
|}

/** A category containing frequently used chats used for calls */
export type topChatCategoryCalls = {
  _: 'topChatCategoryCalls',
}

/** A category containing frequently used chats used for calls */
export type topChatCategoryCallsOptional = {|
  _: 'topChatCategoryCalls',
|}

/** A URL linking to a user */
export type tMeUrlTypeUser = {
  _: 'tMeUrlTypeUser',
  /** Identifier of the user */
  user_id: number,
}

/** A URL linking to a user */
export type tMeUrlTypeUserOptional = {|
  _: 'tMeUrlTypeUser',
  /** Identifier of the user */
  user_id?: number,
|}

/** A URL linking to a public supergroup or channel */
export type tMeUrlTypeSupergroup = {
  _: 'tMeUrlTypeSupergroup',
  /** Identifier of the supergroup or channel */
  supergroup_id: number,
}

/** A URL linking to a public supergroup or channel */
export type tMeUrlTypeSupergroupOptional = {|
  _: 'tMeUrlTypeSupergroup',
  /** Identifier of the supergroup or channel */
  supergroup_id?: number,
|}

/** A chat invite link */
export type tMeUrlTypeChatInvite = {
  _: 'tMeUrlTypeChatInvite',
  /** Chat invite link info */
  info: chatInviteLinkInfo,
}

/** A chat invite link */
export type tMeUrlTypeChatInviteOptional = {|
  _: 'tMeUrlTypeChatInvite',
  /** Chat invite link info */
  info?: chatInviteLinkInfoOptional,
|}

/** A URL linking to a sticker set */
export type tMeUrlTypeStickerSet = {
  _: 'tMeUrlTypeStickerSet',
  /** Identifier of the sticker set */
  sticker_set_id: (number | string),
}

/** A URL linking to a sticker set */
export type tMeUrlTypeStickerSetOptional = {|
  _: 'tMeUrlTypeStickerSet',
  /** Identifier of the sticker set */
  sticker_set_id?: (number | string),
|}

/** Represents a URL linking to an internal Telegram entity */
export type tMeUrl = {
  _: 'tMeUrl',
  /** URL */
  url: string,
  /** Type of the URL */
  type: TMeUrlType,
}

/** Represents a URL linking to an internal Telegram entity */
export type tMeUrlOptional = {|
  _: 'tMeUrl',
  /** URL */
  url?: string,
  /** Type of the URL */
  type?: TMeUrlTypeOptional,
|}

/** Contains a list of t.me URLs */
export type tMeUrls = {
  _: 'tMeUrls',
  /** List of URLs */
  urls: tMeUrl[],
}

/** Contains a list of t.me URLs */
export type tMeUrlsOptional = {|
  _: 'tMeUrls',
  /** List of URLs */
  urls?: tMeUrlOptional[],
|}

/** Contains a counter */
export type count = {
  _: 'count',
  /** Count */
  count: number,
}

/** Contains a counter */
export type countOptional = {|
  _: 'count',
  /** Count */
  count?: number,
|}

/** Contains some text */
export type text = {
  _: 'text',
  /** Text */
  text: string,
}

/** Contains some text */
export type textOptional = {|
  _: 'text',
  /** Text */
  text?: string,
|}

/** Contains a value representing a number of seconds */
export type seconds = {
  _: 'seconds',
  /** Number of seconds */
  seconds: number,
}

/** Contains a value representing a number of seconds */
export type secondsOptional = {|
  _: 'seconds',
  /** Number of seconds */
  seconds?: number,
|}

/** Contains information about a tg:// deep link */
export type deepLinkInfo = {
  _: 'deepLinkInfo',
  /** Text to be shown to the user */
  text: formattedText,
  /** True, if user should be asked to update the application */
  need_update_application: boolean,
}

/** Contains information about a tg:// deep link */
export type deepLinkInfoOptional = {|
  _: 'deepLinkInfo',
  /** Text to be shown to the user */
  text?: formattedTextOptional,
  /** True, if user should be asked to update the application */
  need_update_application?: boolean,
|}

/** The text should be parsed in markdown-style */
export type textParseModeMarkdown = {
  _: 'textParseModeMarkdown',
}

/** The text should be parsed in markdown-style */
export type textParseModeMarkdownOptional = {|
  _: 'textParseModeMarkdown',
|}

/** The text should be parsed in HTML-style */
export type textParseModeHTML = {
  _: 'textParseModeHTML',
}

/** The text should be parsed in HTML-style */
export type textParseModeHTMLOptional = {|
  _: 'textParseModeHTML',
|}

/** A SOCKS5 proxy server */
export type proxyTypeSocks5 = {
  _: 'proxyTypeSocks5',
  /** Username for logging in; may be empty */
  username: string,
  /** Password for logging in; may be empty */
  password: string,
}

/** A SOCKS5 proxy server */
export type proxyTypeSocks5Optional = {|
  _: 'proxyTypeSocks5',
  /** Username for logging in; may be empty */
  username?: string,
  /** Password for logging in; may be empty */
  password?: string,
|}

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
export type proxyTypeHttpOptional = {|
  _: 'proxyTypeHttp',
  /** Username for logging in; may be empty */
  username?: string,
  /** Password for logging in; may be empty */
  password?: string,
  /**
   * Pass true, if the proxy supports only HTTP requests and doesn't support transparent
   * TCP connections via HTTP CONNECT method
   */
  http_only?: boolean,
|}

/** An MTProto proxy server */
export type proxyTypeMtproto = {
  _: 'proxyTypeMtproto',
  /** The proxy's secret in hexadecimal encoding */
  secret: string,
}

/** An MTProto proxy server */
export type proxyTypeMtprotoOptional = {|
  _: 'proxyTypeMtproto',
  /** The proxy's secret in hexadecimal encoding */
  secret?: string,
|}

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
export type proxyOptional = {|
  _: 'proxy',
  /** Unique identifier of the proxy */
  id?: number,
  /** Proxy server IP address */
  server?: string,
  /** Proxy server port */
  port?: number,
  /** Point in time (Unix timestamp) when the proxy was last used; 0 if never */
  last_used_date?: number,
  /** True, if the proxy is enabled now */
  is_enabled?: boolean,
  /** Type of the proxy */
  type?: ProxyTypeOptional,
|}

/** Represents a list of proxy servers */
export type proxies = {
  _: 'proxies',
  /** List of proxy servers */
  proxies: proxy[],
}

/** Represents a list of proxy servers */
export type proxiesOptional = {|
  _: 'proxies',
  /** List of proxy servers */
  proxies?: proxyOptional[],
|}

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
export type inputStickerOptional = {|
  _: 'inputSticker',
  /** PNG image with the sticker; must be up to 512 kB in size and fit in a 512x512 square */
  png_sticker?: InputFileOptional,
  /** Emoji corresponding to the sticker */
  emojis?: string,
  /** For masks, position where the mask should be placed; may be null */
  mask_position?: maskPositionOptional,
|}

/** The user authorization state has changed */
export type updateAuthorizationState = {
  _: 'updateAuthorizationState',
  /** New authorization state */
  authorization_state: AuthorizationState,
}

/** The user authorization state has changed */
export type updateAuthorizationStateOptional = {|
  _: 'updateAuthorizationState',
  /** New authorization state */
  authorization_state?: AuthorizationStateOptional,
|}

/** A new message was received; can also be an outgoing message */
export type updateNewMessage = {
  _: 'updateNewMessage',
  /** The new message */
  message: message,
  /** True, if this message must not generate a notification */
  disable_notification: boolean,
  /** True, if the message contains a mention of the current user */
  contains_mention: boolean,
}

/** A new message was received; can also be an outgoing message */
export type updateNewMessageOptional = {|
  _: 'updateNewMessage',
  /** The new message */
  message?: messageOptional,
  /** True, if this message must not generate a notification */
  disable_notification?: boolean,
  /** True, if the message contains a mention of the current user */
  contains_mention?: boolean,
|}

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
export type updateMessageSendAcknowledgedOptional = {|
  _: 'updateMessageSendAcknowledged',
  /** The chat identifier of the sent message */
  chat_id?: number,
  /** A temporary message identifier */
  message_id?: number,
|}

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
export type updateMessageSendSucceededOptional = {|
  _: 'updateMessageSendSucceeded',
  /**
   * Information about the sent message. Usually only the message identifier, date, and
   * content are changed, but almost all other fields can also change
   */
  message?: messageOptional,
  /** The previous temporary message identifier */
  old_message_id?: number,
|}

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
export type updateMessageSendFailedOptional = {|
  _: 'updateMessageSendFailed',
  /** Contains information about the message that failed to send */
  message?: messageOptional,
  /** The previous temporary message identifier */
  old_message_id?: number,
  /** An error code */
  error_code?: number,
  /** Error message */
  error_message?: string,
|}

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
export type updateMessageContentOptional = {|
  _: 'updateMessageContent',
  /** Chat identifier */
  chat_id?: number,
  /** Message identifier */
  message_id?: number,
  /** New message content */
  new_content?: MessageContentOptional,
|}

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
export type updateMessageEditedOptional = {|
  _: 'updateMessageEdited',
  /** Chat identifier */
  chat_id?: number,
  /** Message identifier */
  message_id?: number,
  /** Point in time (Unix timestamp) when the message was edited */
  edit_date?: number,
  /** New message reply markup; may be null */
  reply_markup?: ReplyMarkupOptional,
|}

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
export type updateMessageViewsOptional = {|
  _: 'updateMessageViews',
  /** Chat identifier */
  chat_id?: number,
  /** Message identifier */
  message_id?: number,
  /** New value of the view count */
  views?: number,
|}

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
export type updateMessageContentOpenedOptional = {|
  _: 'updateMessageContentOpened',
  /** Chat identifier */
  chat_id?: number,
  /** Message identifier */
  message_id?: number,
|}

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
export type updateMessageMentionReadOptional = {|
  _: 'updateMessageMentionRead',
  /** Chat identifier */
  chat_id?: number,
  /** Message identifier */
  message_id?: number,
  /** The new number of unread mention messages left in the chat */
  unread_mention_count?: number,
|}

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
export type updateNewChatOptional = {|
  _: 'updateNewChat',
  /** The chat */
  chat?: chatOptional,
|}

/** The title of a chat was changed */
export type updateChatTitle = {
  _: 'updateChatTitle',
  /** Chat identifier */
  chat_id: number,
  /** The new chat title */
  title: string,
}

/** The title of a chat was changed */
export type updateChatTitleOptional = {|
  _: 'updateChatTitle',
  /** Chat identifier */
  chat_id?: number,
  /** The new chat title */
  title?: string,
|}

/** A chat photo was changed */
export type updateChatPhoto = {
  _: 'updateChatPhoto',
  /** Chat identifier */
  chat_id: number,
  /** The new chat photo; may be null */
  photo: chatPhoto,
}

/** A chat photo was changed */
export type updateChatPhotoOptional = {|
  _: 'updateChatPhoto',
  /** Chat identifier */
  chat_id?: number,
  /** The new chat photo; may be null */
  photo?: chatPhotoOptional,
|}

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
  order: (number | string),
}

/**
 * The last message of a chat was changed. If last_message is null then the last message
 * in the chat became unknown. Some new unknown messages might be added to the chat
 * in this case
 */
export type updateChatLastMessageOptional = {|
  _: 'updateChatLastMessage',
  /** Chat identifier */
  chat_id?: number,
  /** The new last message in the chat; may be null */
  last_message?: messageOptional,
  /** New value of the chat order */
  order?: (number | string),
|}

/**
 * The order of the chat in the chats list has changed. Instead of this update updateChatLastMessage,
 * updateChatIsPinned or updateChatDraftMessage might be sent
 */
export type updateChatOrder = {
  _: 'updateChatOrder',
  /** Chat identifier */
  chat_id: number,
  /** New value of the order */
  order: (number | string),
}

/**
 * The order of the chat in the chats list has changed. Instead of this update updateChatLastMessage,
 * updateChatIsPinned or updateChatDraftMessage might be sent
 */
export type updateChatOrderOptional = {|
  _: 'updateChatOrder',
  /** Chat identifier */
  chat_id?: number,
  /** New value of the order */
  order?: (number | string),
|}

/** A chat was pinned or unpinned */
export type updateChatIsPinned = {
  _: 'updateChatIsPinned',
  /** Chat identifier */
  chat_id: number,
  /** New value of is_pinned */
  is_pinned: boolean,
  /** New value of the chat order */
  order: (number | string),
}

/** A chat was pinned or unpinned */
export type updateChatIsPinnedOptional = {|
  _: 'updateChatIsPinned',
  /** Chat identifier */
  chat_id?: number,
  /** New value of is_pinned */
  is_pinned?: boolean,
  /** New value of the chat order */
  order?: (number | string),
|}

/** A chat was marked as unread or was read */
export type updateChatIsMarkedAsUnread = {
  _: 'updateChatIsMarkedAsUnread',
  /** Chat identifier */
  chat_id: number,
  /** New value of is_marked_as_unread */
  is_marked_as_unread: boolean,
}

/** A chat was marked as unread or was read */
export type updateChatIsMarkedAsUnreadOptional = {|
  _: 'updateChatIsMarkedAsUnread',
  /** Chat identifier */
  chat_id?: number,
  /** New value of is_marked_as_unread */
  is_marked_as_unread?: boolean,
|}

/** A chat's is_sponsored field has changed */
export type updateChatIsSponsored = {
  _: 'updateChatIsSponsored',
  /** Chat identifier */
  chat_id: number,
  /** New value of is_sponsored */
  is_sponsored: boolean,
  /** New value of chat order */
  order: (number | string),
}

/** A chat's is_sponsored field has changed */
export type updateChatIsSponsoredOptional = {|
  _: 'updateChatIsSponsored',
  /** Chat identifier */
  chat_id?: number,
  /** New value of is_sponsored */
  is_sponsored?: boolean,
  /** New value of chat order */
  order?: (number | string),
|}

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
export type updateChatDefaultDisableNotificationOptional = {|
  _: 'updateChatDefaultDisableNotification',
  /** Chat identifier */
  chat_id?: number,
  /** The new default_disable_notification value */
  default_disable_notification?: boolean,
|}

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
export type updateChatReadInboxOptional = {|
  _: 'updateChatReadInbox',
  /** Chat identifier */
  chat_id?: number,
  /** Identifier of the last read incoming message */
  last_read_inbox_message_id?: number,
  /** The number of unread messages left in the chat */
  unread_count?: number,
|}

/** Outgoing messages were read */
export type updateChatReadOutbox = {
  _: 'updateChatReadOutbox',
  /** Chat identifier */
  chat_id: number,
  /** Identifier of last read outgoing message */
  last_read_outbox_message_id: number,
}

/** Outgoing messages were read */
export type updateChatReadOutboxOptional = {|
  _: 'updateChatReadOutbox',
  /** Chat identifier */
  chat_id?: number,
  /** Identifier of last read outgoing message */
  last_read_outbox_message_id?: number,
|}

/** The chat unread_mention_count has changed */
export type updateChatUnreadMentionCount = {
  _: 'updateChatUnreadMentionCount',
  /** Chat identifier */
  chat_id: number,
  /** The number of unread mention messages left in the chat */
  unread_mention_count: number,
}

/** The chat unread_mention_count has changed */
export type updateChatUnreadMentionCountOptional = {|
  _: 'updateChatUnreadMentionCount',
  /** Chat identifier */
  chat_id?: number,
  /** The number of unread mention messages left in the chat */
  unread_mention_count?: number,
|}

/** Notification settings for a chat were changed */
export type updateChatNotificationSettings = {
  _: 'updateChatNotificationSettings',
  /** Chat identifier */
  chat_id: number,
  /** The new notification settings */
  notification_settings: chatNotificationSettings,
}

/** Notification settings for a chat were changed */
export type updateChatNotificationSettingsOptional = {|
  _: 'updateChatNotificationSettings',
  /** Chat identifier */
  chat_id?: number,
  /** The new notification settings */
  notification_settings?: chatNotificationSettingsOptional,
|}

/** Notification settings for some type of chats were updated */
export type updateScopeNotificationSettings = {
  _: 'updateScopeNotificationSettings',
  /** Types of chats for which notification settings were updated */
  scope: NotificationSettingsScope,
  /** The new notification settings */
  notification_settings: scopeNotificationSettings,
}

/** Notification settings for some type of chats were updated */
export type updateScopeNotificationSettingsOptional = {|
  _: 'updateScopeNotificationSettings',
  /** Types of chats for which notification settings were updated */
  scope?: NotificationSettingsScopeOptional,
  /** The new notification settings */
  notification_settings?: scopeNotificationSettingsOptional,
|}

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
export type updateChatReplyMarkupOptional = {|
  _: 'updateChatReplyMarkup',
  /** Chat identifier */
  chat_id?: number,
  /**
   * Identifier of the message from which reply markup needs to be used; 0 if there is
   * no default custom reply markup in the chat
   */
  reply_markup_message_id?: number,
|}

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
  order: (number | string),
}

/**
 * A chat draft has changed. Be aware that the update may come in the currently opened
 * chat but with old content of the draft. If the user has changed the content of the
 * draft, this update shouldn't be applied
 */
export type updateChatDraftMessageOptional = {|
  _: 'updateChatDraftMessage',
  /** Chat identifier */
  chat_id?: number,
  /** The new draft message; may be null */
  draft_message?: draftMessageOptional,
  /** New value of the chat order */
  order?: (number | string),
|}

/** Some messages were deleted */
export type updateDeleteMessages = {
  _: 'updateDeleteMessages',
  /** Chat identifier */
  chat_id: number,
  /** Identifiers of the deleted messages */
  message_ids: number[],
  /**
   * True, if the messages are permanently deleted by a user (as opposed to just becoming
   * unaccessible)
   */
  is_permanent: boolean,
  /**
   * True, if the messages are deleted only from the cache and can possibly be retrieved
   * again in the future
   */
  from_cache: boolean,
}

/** Some messages were deleted */
export type updateDeleteMessagesOptional = {|
  _: 'updateDeleteMessages',
  /** Chat identifier */
  chat_id?: number,
  /** Identifiers of the deleted messages */
  message_ids?: number[],
  /**
   * True, if the messages are permanently deleted by a user (as opposed to just becoming
   * unaccessible)
   */
  is_permanent?: boolean,
  /**
   * True, if the messages are deleted only from the cache and can possibly be retrieved
   * again in the future
   */
  from_cache?: boolean,
|}

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
export type updateUserChatActionOptional = {|
  _: 'updateUserChatAction',
  /** Chat identifier */
  chat_id?: number,
  /** Identifier of a user performing an action */
  user_id?: number,
  /** The action description */
  action?: ChatActionOptional,
|}

/** The user went online or offline */
export type updateUserStatus = {
  _: 'updateUserStatus',
  /** User identifier */
  user_id: number,
  /** New status of the user */
  status: UserStatus,
}

/** The user went online or offline */
export type updateUserStatusOptional = {|
  _: 'updateUserStatus',
  /** User identifier */
  user_id?: number,
  /** New status of the user */
  status?: UserStatusOptional,
|}

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
export type updateUserOptional = {|
  _: 'updateUser',
  /** New data about the user */
  user?: userOptional,
|}

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
export type updateBasicGroupOptional = {|
  _: 'updateBasicGroup',
  /** New data about the group */
  basic_group?: basicGroupOptional,
|}

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
export type updateSupergroupOptional = {|
  _: 'updateSupergroup',
  /** New data about the supergroup */
  supergroup?: supergroupOptional,
|}

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
export type updateSecretChatOptional = {|
  _: 'updateSecretChat',
  /** New data about the secret chat */
  secret_chat?: secretChatOptional,
|}

/** Some data from userFullInfo has been changed */
export type updateUserFullInfo = {
  _: 'updateUserFullInfo',
  /** User identifier */
  user_id: number,
  /** New full information about the user */
  user_full_info: userFullInfo,
}

/** Some data from userFullInfo has been changed */
export type updateUserFullInfoOptional = {|
  _: 'updateUserFullInfo',
  /** User identifier */
  user_id?: number,
  /** New full information about the user */
  user_full_info?: userFullInfoOptional,
|}

/** Some data from basicGroupFullInfo has been changed */
export type updateBasicGroupFullInfo = {
  _: 'updateBasicGroupFullInfo',
  /** Identifier of a basic group */
  basic_group_id: number,
  /** New full information about the group */
  basic_group_full_info: basicGroupFullInfo,
}

/** Some data from basicGroupFullInfo has been changed */
export type updateBasicGroupFullInfoOptional = {|
  _: 'updateBasicGroupFullInfo',
  /** Identifier of a basic group */
  basic_group_id?: number,
  /** New full information about the group */
  basic_group_full_info?: basicGroupFullInfoOptional,
|}

/** Some data from supergroupFullInfo has been changed */
export type updateSupergroupFullInfo = {
  _: 'updateSupergroupFullInfo',
  /** Identifier of the supergroup or channel */
  supergroup_id: number,
  /** New full information about the supergroup */
  supergroup_full_info: supergroupFullInfo,
}

/** Some data from supergroupFullInfo has been changed */
export type updateSupergroupFullInfoOptional = {|
  _: 'updateSupergroupFullInfo',
  /** Identifier of the supergroup or channel */
  supergroup_id?: number,
  /** New full information about the supergroup */
  supergroup_full_info?: supergroupFullInfoOptional,
|}

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
export type updateServiceNotificationOptional = {|
  _: 'updateServiceNotification',
  /**
   * Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel"
   * and "Log out" should be shown under notification; if user presses the second, all
   * local data should be destroyed using Destroy method
   */
  type?: string,
  /** Notification content */
  content?: MessageContentOptional,
|}

/** Information about a file was updated */
export type updateFile = {
  _: 'updateFile',
  /** New data about the file */
  file: file,
}

/** Information about a file was updated */
export type updateFileOptional = {|
  _: 'updateFile',
  /** New data about the file */
  file?: fileOptional,
|}

/** The file generation process needs to be started by the client */
export type updateFileGenerationStart = {
  _: 'updateFileGenerationStart',
  /** Unique identifier for the generation process */
  generation_id: (number | string),
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
export type updateFileGenerationStartOptional = {|
  _: 'updateFileGenerationStart',
  /** Unique identifier for the generation process */
  generation_id?: (number | string),
  /** The path to a file from which a new file is generated; may be empty */
  original_path?: string,
  /** The path to a file that should be created and where the new file should be generated */
  destination_path?: string,
  /**
   * String specifying the conversion applied to the original file. If conversion is "#url#"
   * than original_path contains an HTTP/HTTPS URL of a file, which should be downloaded
   * by the client
   */
  conversion?: string,
|}

/** File generation is no longer needed */
export type updateFileGenerationStop = {
  _: 'updateFileGenerationStop',
  /** Unique identifier for the generation process */
  generation_id: (number | string),
}

/** File generation is no longer needed */
export type updateFileGenerationStopOptional = {|
  _: 'updateFileGenerationStop',
  /** Unique identifier for the generation process */
  generation_id?: (number | string),
|}

/** New call was created or information about a call was updated */
export type updateCall = {
  _: 'updateCall',
  /** New data about a call */
  call: call,
}

/** New call was created or information about a call was updated */
export type updateCallOptional = {|
  _: 'updateCall',
  /** New data about a call */
  call?: callOptional,
|}

/** Some privacy setting rules have been changed */
export type updateUserPrivacySettingRules = {
  _: 'updateUserPrivacySettingRules',
  /** The privacy setting */
  setting: UserPrivacySetting,
  /** New privacy rules */
  rules: userPrivacySettingRules,
}

/** Some privacy setting rules have been changed */
export type updateUserPrivacySettingRulesOptional = {|
  _: 'updateUserPrivacySettingRules',
  /** The privacy setting */
  setting?: UserPrivacySettingOptional,
  /** New privacy rules */
  rules?: userPrivacySettingRulesOptional,
|}

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
export type updateUnreadMessageCountOptional = {|
  _: 'updateUnreadMessageCount',
  /** Total number of unread messages */
  unread_count?: number,
  /** Total number of unread messages in unmuted chats */
  unread_unmuted_count?: number,
|}

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
export type updateUnreadChatCountOptional = {|
  _: 'updateUnreadChatCount',
  /** Total number of unread chats */
  unread_count?: number,
  /** Total number of unread unmuted chats */
  unread_unmuted_count?: number,
  /** Total number of chats marked as unread */
  marked_as_unread_count?: number,
  /** Total number of unmuted chats marked as unread */
  marked_as_unread_unmuted_count?: number,
|}

/** An option changed its value */
export type updateOption = {
  _: 'updateOption',
  /** The option name */
  name: string,
  /** The new option value */
  value: OptionValue,
}

/** An option changed its value */
export type updateOptionOptional = {|
  _: 'updateOption',
  /** The option name */
  name?: string,
  /** The new option value */
  value?: OptionValueOptional,
|}

/** The list of installed sticker sets was updated */
export type updateInstalledStickerSets = {
  _: 'updateInstalledStickerSets',
  /** True, if the list of installed mask sticker sets was updated */
  is_masks: boolean,
  /** The new list of installed ordinary sticker sets */
  sticker_set_ids: (number | string)[],
}

/** The list of installed sticker sets was updated */
export type updateInstalledStickerSetsOptional = {|
  _: 'updateInstalledStickerSets',
  /** True, if the list of installed mask sticker sets was updated */
  is_masks?: boolean,
  /** The new list of installed ordinary sticker sets */
  sticker_set_ids?: (number | string)[],
|}

/** The list of trending sticker sets was updated or some of them were viewed */
export type updateTrendingStickerSets = {
  _: 'updateTrendingStickerSets',
  /** The new list of trending sticker sets */
  sticker_sets: stickerSets,
}

/** The list of trending sticker sets was updated or some of them were viewed */
export type updateTrendingStickerSetsOptional = {|
  _: 'updateTrendingStickerSets',
  /** The new list of trending sticker sets */
  sticker_sets?: stickerSetsOptional,
|}

/** The list of recently used stickers was updated */
export type updateRecentStickers = {
  _: 'updateRecentStickers',
  /**
   * True, if the list of stickers attached to photo or video files was updated, otherwise
   * the list of sent stickers is updated
   */
  is_attached: boolean,
  /** The new list of file identifiers of recently used stickers */
  sticker_ids: number[],
}

/** The list of recently used stickers was updated */
export type updateRecentStickersOptional = {|
  _: 'updateRecentStickers',
  /**
   * True, if the list of stickers attached to photo or video files was updated, otherwise
   * the list of sent stickers is updated
   */
  is_attached?: boolean,
  /** The new list of file identifiers of recently used stickers */
  sticker_ids?: number[],
|}

/** The list of favorite stickers was updated */
export type updateFavoriteStickers = {
  _: 'updateFavoriteStickers',
  /** The new list of file identifiers of favorite stickers */
  sticker_ids: number[],
}

/** The list of favorite stickers was updated */
export type updateFavoriteStickersOptional = {|
  _: 'updateFavoriteStickers',
  /** The new list of file identifiers of favorite stickers */
  sticker_ids?: number[],
|}

/** The list of saved animations was updated */
export type updateSavedAnimations = {
  _: 'updateSavedAnimations',
  /** The new list of file identifiers of saved animations */
  animation_ids: number[],
}

/** The list of saved animations was updated */
export type updateSavedAnimationsOptional = {|
  _: 'updateSavedAnimations',
  /** The new list of file identifiers of saved animations */
  animation_ids?: number[],
|}

/** Some language pack strings have been updated */
export type updateLanguagePackStrings = {
  _: 'updateLanguagePackStrings',
  /** Localization target to which the language pack belongs */
  localization_target: string,
  /** Identifier of the updated language pack */
  language_pack_id: string,
  /** List of changed language pack strings */
  strings: languagePackString[],
}

/** Some language pack strings have been updated */
export type updateLanguagePackStringsOptional = {|
  _: 'updateLanguagePackStrings',
  /** Localization target to which the language pack belongs */
  localization_target?: string,
  /** Identifier of the updated language pack */
  language_pack_id?: string,
  /** List of changed language pack strings */
  strings?: languagePackStringOptional[],
|}

/** The connection state has changed */
export type updateConnectionState = {
  _: 'updateConnectionState',
  /** The new connection state */
  state: ConnectionState,
}

/** The connection state has changed */
export type updateConnectionStateOptional = {|
  _: 'updateConnectionState',
  /** The new connection state */
  state?: ConnectionStateOptional,
|}

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
export type updateTermsOfServiceOptional = {|
  _: 'updateTermsOfService',
  /** Identifier of the terms of service */
  terms_of_service_id?: string,
  /** The new terms of service */
  terms_of_service?: termsOfServiceOptional,
|}

/** A new incoming inline query; for bots only */
export type updateNewInlineQuery = {
  _: 'updateNewInlineQuery',
  /** Unique query identifier */
  id: (number | string),
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
export type updateNewInlineQueryOptional = {|
  _: 'updateNewInlineQuery',
  /** Unique query identifier */
  id?: (number | string),
  /** Identifier of the user who sent the query */
  sender_user_id?: number,
  /** User location, provided by the client; may be null */
  user_location?: locationOptional,
  /** Text of the query */
  query?: string,
  /** Offset of the first entry to return */
  offset?: string,
|}

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
export type updateNewChosenInlineResultOptional = {|
  _: 'updateNewChosenInlineResult',
  /** Identifier of the user who sent the query */
  sender_user_id?: number,
  /** User location, provided by the client; may be null */
  user_location?: locationOptional,
  /** Text of the query */
  query?: string,
  /** Identifier of the chosen result */
  result_id?: string,
  /** Identifier of the sent inline message, if known */
  inline_message_id?: string,
|}

/** A new incoming callback query; for bots only */
export type updateNewCallbackQuery = {
  _: 'updateNewCallbackQuery',
  /** Unique query identifier */
  id: (number | string),
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** Identifier of the chat, in which the query was sent */
  chat_id: number,
  /** Identifier of the message, from which the query originated */
  message_id: number,
  /** Identifier that uniquely corresponds to the chat to which the message was sent */
  chat_instance: (number | string),
  /** Query payload */
  payload: CallbackQueryPayload,
}

/** A new incoming callback query; for bots only */
export type updateNewCallbackQueryOptional = {|
  _: 'updateNewCallbackQuery',
  /** Unique query identifier */
  id?: (number | string),
  /** Identifier of the user who sent the query */
  sender_user_id?: number,
  /** Identifier of the chat, in which the query was sent */
  chat_id?: number,
  /** Identifier of the message, from which the query originated */
  message_id?: number,
  /** Identifier that uniquely corresponds to the chat to which the message was sent */
  chat_instance?: (number | string),
  /** Query payload */
  payload?: CallbackQueryPayloadOptional,
|}

/** A new incoming callback query from a message sent via a bot; for bots only */
export type updateNewInlineCallbackQuery = {
  _: 'updateNewInlineCallbackQuery',
  /** Unique query identifier */
  id: (number | string),
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** Identifier of the inline message, from which the query originated */
  inline_message_id: string,
  /** An identifier uniquely corresponding to the chat a message was sent to */
  chat_instance: (number | string),
  /** Query payload */
  payload: CallbackQueryPayload,
}

/** A new incoming callback query from a message sent via a bot; for bots only */
export type updateNewInlineCallbackQueryOptional = {|
  _: 'updateNewInlineCallbackQuery',
  /** Unique query identifier */
  id?: (number | string),
  /** Identifier of the user who sent the query */
  sender_user_id?: number,
  /** Identifier of the inline message, from which the query originated */
  inline_message_id?: string,
  /** An identifier uniquely corresponding to the chat a message was sent to */
  chat_instance?: (number | string),
  /** Query payload */
  payload?: CallbackQueryPayloadOptional,
|}

/** A new incoming shipping query; for bots only. Only for invoices with flexible price */
export type updateNewShippingQuery = {
  _: 'updateNewShippingQuery',
  /** Unique query identifier */
  id: (number | string),
  /** Identifier of the user who sent the query */
  sender_user_id: number,
  /** Invoice payload */
  invoice_payload: string,
  /** User shipping address */
  shipping_address: address,
}

/** A new incoming shipping query; for bots only. Only for invoices with flexible price */
export type updateNewShippingQueryOptional = {|
  _: 'updateNewShippingQuery',
  /** Unique query identifier */
  id?: (number | string),
  /** Identifier of the user who sent the query */
  sender_user_id?: number,
  /** Invoice payload */
  invoice_payload?: string,
  /** User shipping address */
  shipping_address?: addressOptional,
|}

/**
 * A new incoming pre-checkout query; for bots only. Contains full information about
 * a checkout
 */
export type updateNewPreCheckoutQuery = {
  _: 'updateNewPreCheckoutQuery',
  /** Unique query identifier */
  id: (number | string),
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
export type updateNewPreCheckoutQueryOptional = {|
  _: 'updateNewPreCheckoutQuery',
  /** Unique query identifier */
  id?: (number | string),
  /** Identifier of the user who sent the query */
  sender_user_id?: number,
  /** Currency for the product price */
  currency?: string,
  /** Total price for the product, in the minimal quantity of the currency */
  total_amount?: number,
  /** Invoice payload */
  invoice_payload?: string,
  /** Identifier of a shipping option chosen by the user; may be empty if not applicable */
  shipping_option_id?: string,
  /** Information about the order; may be null */
  order_info?: orderInfoOptional,
|}

/** A new incoming event; for bots only */
export type updateNewCustomEvent = {
  _: 'updateNewCustomEvent',
  /** A JSON-serialized event */
  event: string,
}

/** A new incoming event; for bots only */
export type updateNewCustomEventOptional = {|
  _: 'updateNewCustomEvent',
  /** A JSON-serialized event */
  event?: string,
|}

/** A new incoming query; for bots only */
export type updateNewCustomQuery = {
  _: 'updateNewCustomQuery',
  /** The query identifier */
  id: (number | string),
  /** JSON-serialized query data */
  data: string,
  /** Query timeout */
  timeout: number,
}

/** A new incoming query; for bots only */
export type updateNewCustomQueryOptional = {|
  _: 'updateNewCustomQuery',
  /** The query identifier */
  id?: (number | string),
  /** JSON-serialized query data */
  data?: string,
  /** Query timeout */
  timeout?: number,
|}

/** A simple object containing a number; for testing only */
export type testInt = {
  _: 'testInt',
  /** Number */
  value: number,
}

/** A simple object containing a number; for testing only */
export type testIntOptional = {|
  _: 'testInt',
  /** Number */
  value?: number,
|}

/** A simple object containing a string; for testing only */
export type testString = {
  _: 'testString',
  /** String */
  value: string,
}

/** A simple object containing a string; for testing only */
export type testStringOptional = {|
  _: 'testString',
  /** String */
  value?: string,
|}

/** A simple object containing a sequence of bytes; for testing only */
export type testBytes = {
  _: 'testBytes',
  /** Bytes */
  value: string,
}

/** A simple object containing a sequence of bytes; for testing only */
export type testBytesOptional = {|
  _: 'testBytes',
  /** Bytes */
  value?: string,
|}

/** A simple object containing a vector of numbers; for testing only */
export type testVectorInt = {
  _: 'testVectorInt',
  /** Vector of numbers */
  value: number[],
}

/** A simple object containing a vector of numbers; for testing only */
export type testVectorIntOptional = {|
  _: 'testVectorInt',
  /** Vector of numbers */
  value?: number[],
|}

/** A simple object containing a vector of objects that hold a number; for testing only */
export type testVectorIntObject = {
  _: 'testVectorIntObject',
  /** Vector of objects */
  value: testInt[],
}

/** A simple object containing a vector of objects that hold a number; for testing only */
export type testVectorIntObjectOptional = {|
  _: 'testVectorIntObject',
  /** Vector of objects */
  value?: testIntOptional[],
|}

/** A simple object containing a vector of strings; for testing only */
export type testVectorString = {
  _: 'testVectorString',
  /** Vector of strings */
  value: string[],
}

/** A simple object containing a vector of strings; for testing only */
export type testVectorStringOptional = {|
  _: 'testVectorString',
  /** Vector of strings */
  value?: string[],
|}

/** A simple object containing a vector of objects that hold a string; for testing only */
export type testVectorStringObject = {
  _: 'testVectorStringObject',
  /** Vector of objects */
  value: testString[],
}

/** A simple object containing a vector of objects that hold a string; for testing only */
export type testVectorStringObjectOptional = {|
  _: 'testVectorStringObject',
  /** Vector of objects */
  value?: testStringOptional[],
|}

/**
 * Returns the current authorization state; this is an offline request. For informational
 * purposes only. Use updateAuthorizationState instead to maintain the current authorization
 * state
 */
export type getAuthorizationState = {|
  _: 'getAuthorizationState',
|}

/**
 * Sets the parameters for TDLib initialization. Works only when the current authorization
 * state is authorizationStateWaitTdlibParameters
 */
export type setTdlibParameters = {|
  _: 'setTdlibParameters',
  /** Parameters */
  parameters?: tdlibParametersOptional,
|}

/**
 * Checks the database encryption key for correctness. Works only when the current authorization
 * state is authorizationStateWaitEncryptionKey
 */
export type checkDatabaseEncryptionKey = {|
  _: 'checkDatabaseEncryptionKey',
  /** Encryption key to check or set up */
  encryption_key?: string,
|}

/**
 * Sets the phone number of the user and sends an authentication code to the user. Works
 * only when the current authorization state is authorizationStateWaitPhoneNumber
 */
export type setAuthenticationPhoneNumber = {|
  _: 'setAuthenticationPhoneNumber',
  /** The phone number of the user, in international format */
  phone_number?: string,
  /**
   * Pass true if the authentication code may be sent via flash call to the specified
   * phone number
   */
  allow_flash_call?: boolean,
  /**
   * Pass true if the phone number is used on the current device. Ignored if allow_flash_call
   * is false
   */
  is_current_phone_number?: boolean,
|}

/**
 * Re-sends an authentication code to the user. Works only when the current authorization
 * state is authorizationStateWaitCode and the next_code_type of the result is not null
 */
export type resendAuthenticationCode = {|
  _: 'resendAuthenticationCode',
|}

/**
 * Checks the authentication code. Works only when the current authorization state is
 * authorizationStateWaitCode
 */
export type checkAuthenticationCode = {|
  _: 'checkAuthenticationCode',
  /** The verification code received via SMS, Telegram message, phone call, or flash call */
  code?: string,
  /** If the user is not yet registered, the first name of the user; 1-255 characters */
  first_name?: string,
  /** If the user is not yet registered; the last name of the user; optional; 0-255 characters */
  last_name?: string,
|}

/**
 * Checks the authentication password for correctness. Works only when the current authorization
 * state is authorizationStateWaitPassword
 */
export type checkAuthenticationPassword = {|
  _: 'checkAuthenticationPassword',
  /** The password to check */
  password?: string,
|}

/**
 * Requests to send a password recovery code to an email address that was previously
 * set up. Works only when the current authorization state is authorizationStateWaitPassword
 */
export type requestAuthenticationPasswordRecovery = {|
  _: 'requestAuthenticationPasswordRecovery',
|}

/**
 * Recovers the password with a password recovery code sent to an email address that
 * was previously set up. Works only when the current authorization state is authorizationStateWaitPassword
 */
export type recoverAuthenticationPassword = {|
  _: 'recoverAuthenticationPassword',
  /** Recovery code to check */
  recovery_code?: string,
|}

/**
 * Checks the authentication token of a bot; to log in as a bot. Works only when the
 * current authorization state is authorizationStateWaitPhoneNumber. Can be used instead
 * of setAuthenticationPhoneNumber and checkAuthenticationCode to log in
 */
export type checkAuthenticationBotToken = {|
  _: 'checkAuthenticationBotToken',
  /** The bot token */
  token?: string,
|}

/**
 * Closes the TDLib instance after a proper logout. Requires an available network connection.
 * All local data will be destroyed. After the logout completes, updateAuthorizationState
 * with authorizationStateClosed will be sent
 */
export type logOut = {|
  _: 'logOut',
|}

/**
 * Closes the TDLib instance. All databases will be flushed to disk and properly closed.
 * After the close completes, updateAuthorizationState with authorizationStateClosed
 * will be sent
 */
export type close = {|
  _: 'close',
|}

/**
 * Closes the TDLib instance, destroying all local data without a proper logout. The
 * current user session will remain in the list of all active sessions. All local data
 * will be destroyed. After the destruction completes updateAuthorizationState with
 * authorizationStateClosed will be sent
 */
export type destroy = {|
  _: 'destroy',
|}

/**
 * Changes the database encryption key. Usually the encryption key is never changed
 * and is stored in some OS keychain
 */
export type setDatabaseEncryptionKey = {|
  _: 'setDatabaseEncryptionKey',
  /** New encryption key */
  new_encryption_key?: string,
|}

/** Returns the current state of 2-step verification */
export type getPasswordState = {|
  _: 'getPasswordState',
|}

/**
 * Changes the password for the user. If a new recovery email address is specified,
 * then the error EMAIL_UNCONFIRMED is returned and the password change will not be
 * applied until the new recovery email address has been confirmed. The application
 * should periodically call getPasswordState to check whether the new email address
 * has been confirmed
 */
export type setPassword = {|
  _: 'setPassword',
  /** Previous password of the user */
  old_password?: string,
  /** New password of the user; may be empty to remove the password */
  new_password?: string,
  /** New password hint; may be empty */
  new_hint?: string,
  /** Pass true if the recovery email address should be changed */
  set_recovery_email_address?: boolean,
  /** New recovery email address; may be empty */
  new_recovery_email_address?: string,
|}

/**
 * Returns a recovery email address that was previously set up. This method can be used
 * to verify a password provided by the user
 */
export type getRecoveryEmailAddress = {|
  _: 'getRecoveryEmailAddress',
  /** The password for the current user */
  password?: string,
|}

/**
 * Changes the recovery email address of the user. If a new recovery email address is
 * specified, then the error EMAIL_UNCONFIRMED is returned and the email address will
 * not be changed until the new email has been confirmed. The application should periodically
 * call getPasswordState to check whether the email address has been confirmed. If new_recovery_email_address
 * is the same as the email address that is currently set up, this call succeeds immediately
 * and aborts all other requests waiting for an email confirmation
 */
export type setRecoveryEmailAddress = {|
  _: 'setRecoveryEmailAddress',
  /** Password of the current user */
  password?: string,
  /** New recovery email address */
  new_recovery_email_address?: string,
|}

/**
 * Requests to send a password recovery code to an email address that was previously
 * set up
 */
export type requestPasswordRecovery = {|
  _: 'requestPasswordRecovery',
|}

/**
 * Recovers the password using a recovery code sent to an email address that was previously
 * set up
 */
export type recoverPassword = {|
  _: 'recoverPassword',
  /** Recovery code to check */
  recovery_code?: string,
|}

/** Creates a new temporary password for processing payments */
export type createTemporaryPassword = {|
  _: 'createTemporaryPassword',
  /** Persistent user password */
  password?: string,
  /**
   * Time during which the temporary password will be valid, in seconds; should be between
   * 60 and 86400
   */
  valid_for?: number,
|}

/** Returns information about the current temporary password */
export type getTemporaryPasswordState = {|
  _: 'getTemporaryPasswordState',
|}

/** Handles a DC_UPDATE push service notification. Can be called before authorization */
export type processDcUpdate = {|
  _: 'processDcUpdate',
  /** Value of the "dc" parameter of the notification */
  dc?: string,
  /** Value of the "addr" parameter of the notification */
  addr?: string,
|}

/** Returns the current user */
export type getMe = {|
  _: 'getMe',
|}

/**
 * Returns information about a user by their identifier. This is an offline request
 * if the current user is not a bot
 */
export type getUser = {|
  _: 'getUser',
  /** User identifier */
  user_id?: number,
|}

/** Returns full information about a user by their identifier */
export type getUserFullInfo = {|
  _: 'getUserFullInfo',
  /** User identifier */
  user_id?: number,
|}

/**
 * Returns information about a basic group by its identifier. This is an offline request
 * if the current user is not a bot
 */
export type getBasicGroup = {|
  _: 'getBasicGroup',
  /** Basic group identifier */
  basic_group_id?: number,
|}

/** Returns full information about a basic group by its identifier */
export type getBasicGroupFullInfo = {|
  _: 'getBasicGroupFullInfo',
  /** Basic group identifier */
  basic_group_id?: number,
|}

/**
 * Returns information about a supergroup or channel by its identifier. This is an offline
 * request if the current user is not a bot
 */
export type getSupergroup = {|
  _: 'getSupergroup',
  /** Supergroup or channel identifier */
  supergroup_id?: number,
|}

/**
 * Returns full information about a supergroup or channel by its identifier, cached
 * for up to 1 minute
 */
export type getSupergroupFullInfo = {|
  _: 'getSupergroupFullInfo',
  /** Supergroup or channel identifier */
  supergroup_id?: number,
|}

/** Returns information about a secret chat by its identifier. This is an offline request */
export type getSecretChat = {|
  _: 'getSecretChat',
  /** Secret chat identifier */
  secret_chat_id?: number,
|}

/**
 * Returns information about a chat by its identifier, this is an offline request if
 * the current user is not a bot
 */
export type getChat = {|
  _: 'getChat',
  /** Chat identifier */
  chat_id?: number,
|}

/** Returns information about a message */
export type getMessage = {|
  _: 'getMessage',
  /** Identifier of the chat the message belongs to */
  chat_id?: number,
  /** Identifier of the message to get */
  message_id?: number,
|}

/** Returns information about a message that is replied by given message */
export type getRepliedMessage = {|
  _: 'getRepliedMessage',
  /** Identifier of the chat the message belongs to */
  chat_id?: number,
  /** Identifier of the message reply to which get */
  message_id?: number,
|}

/** Returns information about a pinned chat message */
export type getChatPinnedMessage = {|
  _: 'getChatPinnedMessage',
  /** Identifier of the chat the message belongs to */
  chat_id?: number,
|}

/**
 * Returns information about messages. If a message is not found, returns null on the
 * corresponding position of the result
 */
export type getMessages = {|
  _: 'getMessages',
  /** Identifier of the chat the messages belong to */
  chat_id?: number,
  /** Identifiers of the messages to get */
  message_ids?: number[],
|}

/** Returns information about a file; this is an offline request */
export type getFile = {|
  _: 'getFile',
  /** Identifier of the file to get */
  file_id?: number,
|}

/**
 * Returns information about a file by its remote ID; this is an offline request. Can
 * be used to register a URL as a file for further uploading, or sending as a message
 */
export type getRemoteFile = {|
  _: 'getRemoteFile',
  /** Remote identifier of the file to get */
  remote_file_id?: string,
  /** File type, if known */
  file_type?: FileTypeOptional,
|}

/**
 * Returns an ordered list of chats. Chats are sorted by the pair (order, chat_id) in
 * decreasing order. (For example, to get a list of chats from the beginning, the offset_order
 * should be equal to 2^63 - 1). For optimal performance the number of returned chats
 * is chosen by the library.
 */
export type getChats = {|
  _: 'getChats',
  /** Chat order to return chats from */
  offset_order?: (number | string),
  /** Chat identifier to return chats from */
  offset_chat_id?: number,
  /**
   * The maximum number of chats to be returned. It is possible that fewer chats than
   * the limit are returned even if the end of the list is not reached
   */
  limit?: number,
|}

/**
 * Searches a public chat by its username. Currently only private chats, supergroups
 * and channels can be public. Returns the chat if found; otherwise an error is returned
 */
export type searchPublicChat = {|
  _: 'searchPublicChat',
  /** Username to be resolved */
  username?: string,
|}

/**
 * Searches public chats by looking for specified query in their username and title.
 * Currently only private chats, supergroups and channels can be public. Returns a meaningful
 * number of results. Returns nothing if the length of the searched username prefix
 * is less than 5. Excludes private chats with contacts and chats from the chat list
 * from the results
 */
export type searchPublicChats = {|
  _: 'searchPublicChats',
  /** Query to search for */
  query?: string,
|}

/**
 * Searches for the specified query in the title and username of already known chats,
 * this is an offline request. Returns chats in the order seen in the chat list
 */
export type searchChats = {|
  _: 'searchChats',
  /** Query to search for. If the query is empty, returns up to 20 recently found chats */
  query?: string,
  /** Maximum number of chats to be returned */
  limit?: number,
|}

/**
 * Searches for the specified query in the title and username of already known chats
 * via request to the server. Returns chats in the order seen in the chat list
 */
export type searchChatsOnServer = {|
  _: 'searchChatsOnServer',
  /** Query to search for */
  query?: string,
  /** Maximum number of chats to be returned */
  limit?: number,
|}

/**
 * Returns a list of frequently used chats. Supported only if the chat info database
 * is enabled
 */
export type getTopChats = {|
  _: 'getTopChats',
  /** Category of chats to be returned */
  category?: TopChatCategoryOptional,
  /** Maximum number of chats to be returned; up to 30 */
  limit?: number,
|}

/**
 * Removes a chat from the list of frequently used chats. Supported only if the chat
 * info database is enabled
 */
export type removeTopChat = {|
  _: 'removeTopChat',
  /** Category of frequently used chats */
  category?: TopChatCategoryOptional,
  /** Chat identifier */
  chat_id?: number,
|}

/**
 * Adds a chat to the list of recently found chats. The chat is added to the beginning
 * of the list. If the chat is already in the list, it will be removed from the list
 * first
 */
export type addRecentlyFoundChat = {|
  _: 'addRecentlyFoundChat',
  /** Identifier of the chat to add */
  chat_id?: number,
|}

/** Removes a chat from the list of recently found chats */
export type removeRecentlyFoundChat = {|
  _: 'removeRecentlyFoundChat',
  /** Identifier of the chat to be removed */
  chat_id?: number,
|}

/** Clears the list of recently found chats */
export type clearRecentlyFoundChats = {|
  _: 'clearRecentlyFoundChats',
|}

/** Checks whether a username can be set for a chat */
export type checkChatUsername = {|
  _: 'checkChatUsername',
  /**
   * Chat identifier; should be identifier of a supergroup chat, or a channel chat, or
   * a private chat with self, or zero if chat is being created
   */
  chat_id?: (number | string),
  /** Username to be checked */
  username?: string,
|}

/** Returns a list of public chats created by the user */
export type getCreatedPublicChats = {|
  _: 'getCreatedPublicChats',
|}

/**
 * Returns a list of common chats with a given user. Chats are sorted by their type
 * and creation date
 */
export type getGroupsInCommon = {|
  _: 'getGroupsInCommon',
  /** User identifier */
  user_id?: number,
  /** Chat identifier starting from which to return chats; use 0 for the first request */
  offset_chat_id?: number,
  /** Maximum number of chats to be returned; up to 100 */
  limit?: number,
|}

/**
 * Returns messages in a chat. The messages are returned in a reverse chronological
 * order (i.e., in order of decreasing message_id). For optimal performance the number
 * of returned messages is chosen by the library. This is an offline request if only_local
 * is true
 */
export type getChatHistory = {|
  _: 'getChatHistory',
  /** Chat identifier */
  chat_id?: number,
  /**
   * Identifier of the message starting from which history must be fetched; use 0 to get
   * results from the last message
   */
  from_message_id?: number,
  /**
   * Specify 0 to get results from exactly the from_message_id or a negative offset to
   * get the specified message and some newer messages
   */
  offset?: number,
  /**
   * The maximum number of messages to be returned; must be positive and can't be greater
   * than 100. If the offset is negative, the limit must be greater than -offset. Fewer
   * messages may be returned than specified by the limit, even if the end of the message
   * history has not been reached
   */
  limit?: number,
  /**
   * If true, returns only messages that are available locally without sending network
   * requests
   */
  only_local?: boolean,
|}

/**
 * Deletes all messages in the chat only for the user. Cannot be used in channels and
 * public supergroups
 */
export type deleteChatHistory = {|
  _: 'deleteChatHistory',
  /** Chat identifier */
  chat_id?: number,
  /** Pass true if the chat should be removed from the chats list */
  remove_from_chat_list?: boolean,
|}

/**
 * Searches for messages with given words in the chat. Returns the results in reverse
 * chronological order, i.e. in order of decreasing message_id. Cannot be used in secret
 * chats with a non-empty query (searchSecretMessages should be used instead), or without
 * an enabled message database. For optimal performance the number of returned messages
 * is chosen by the library
 */
export type searchChatMessages = {|
  _: 'searchChatMessages',
  /** Identifier of the chat in which to search messages */
  chat_id?: number,
  /** Query to search for */
  query?: string,
  /**
   * If not 0, only messages sent by the specified user will be returned. Not supported
   * in secret chats
   */
  sender_user_id?: number,
  /**
   * Identifier of the message starting from which history must be fetched; use 0 to get
   * results from the last message
   */
  from_message_id?: number,
  /**
   * Specify 0 to get results from exactly the from_message_id or a negative offset to
   * get the specified message and some newer messages
   */
  offset?: number,
  /**
   * The maximum number of messages to be returned; must be positive and can't be greater
   * than 100. If the offset is negative, the limit must be greater than -offset. Fewer
   * messages may be returned than specified by the limit, even if the end of the message
   * history has not been reached
   */
  limit?: number,
  /** Filter for message content in the search results */
  filter?: SearchMessagesFilterOptional,
|}

/**
 * Searches for messages in all chats except secret chats. Returns the results in reverse
 * chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For
 * optimal performance the number of returned messages is chosen by the library
 */
export type searchMessages = {|
  _: 'searchMessages',
  /** Query to search for */
  query?: string,
  /**
   * The date of the message starting from which the results should be fetched. Use 0
   * or any date in the future to get results from the last message
   */
  offset_date?: number,
  /** The chat identifier of the last found message, or 0 for the first request */
  offset_chat_id?: number,
  /** The message identifier of the last found message, or 0 for the first request */
  offset_message_id?: number,
  /**
   * The maximum number of messages to be returned, up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  limit?: number,
|}

/**
 * Searches for messages in secret chats. Returns the results in reverse chronological
 * order. For optimal performance the number of returned messages is chosen by the library
 */
export type searchSecretMessages = {|
  _: 'searchSecretMessages',
  /** Identifier of the chat in which to search. Specify 0 to search in all secret chats */
  chat_id?: number,
  /** Query to search for. If empty, searchChatMessages should be used instead */
  query?: string,
  /**
   * The identifier from the result of a previous request, use 0 to get results from the
   * last message
   */
  from_search_id?: (number | string),
  /**
   * Maximum number of messages to be returned; up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  limit?: number,
  /** A filter for the content of messages in the search results */
  filter?: SearchMessagesFilterOptional,
|}

/**
 * Searches for call messages. Returns the results in reverse chronological order (i.
 * e., in order of decreasing message_id). For optimal performance the number of returned
 * messages is chosen by the library
 */
export type searchCallMessages = {|
  _: 'searchCallMessages',
  /**
   * Identifier of the message from which to search; use 0 to get results from the last
   * message
   */
  from_message_id?: number,
  /**
   * The maximum number of messages to be returned; up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  limit?: number,
  /** If true, returns only messages with missed calls */
  only_missed?: boolean,
|}

/**
 * Returns information about the recent locations of chat members that were sent to
 * the chat. Returns up to 1 location message per user
 */
export type searchChatRecentLocationMessages = {|
  _: 'searchChatRecentLocationMessages',
  /** Chat identifier */
  chat_id?: number,
  /** Maximum number of messages to be returned */
  limit?: number,
|}

/**
 * Returns all active live locations that should be updated by the client. The list
 * is persistent across application restarts only if the message database is used
 */
export type getActiveLiveLocationMessages = {|
  _: 'getActiveLiveLocationMessages',
|}

/** Returns the last message sent in a chat no later than the specified date */
export type getChatMessageByDate = {|
  _: 'getChatMessageByDate',
  /** Chat identifier */
  chat_id?: number,
  /** Point in time (Unix timestamp) relative to which to search for messages */
  date?: number,
|}

/** Returns approximate number of messages of the specified type in the chat */
export type getChatMessageCount = {|
  _: 'getChatMessageCount',
  /** Identifier of the chat in which to count messages */
  chat_id?: number,
  /** Filter for message content; searchMessagesFilterEmpty is unsupported in this function */
  filter?: SearchMessagesFilterOptional,
  /**
   * If true, returns count that is available locally without sending network requests,
   * returning -1 if the number of messages is unknown
   */
  return_local?: boolean,
|}

/**
 * Returns a public HTTPS link to a message. Available only for messages in public supergroups
 * and channels
 */
export type getPublicMessageLink = {|
  _: 'getPublicMessageLink',
  /** Identifier of the chat to which the message belongs */
  chat_id?: number,
  /** Identifier of the message */
  message_id?: number,
  /** Pass true if a link for a whole media album should be returned */
  for_album?: boolean,
|}

/** Sends a message. Returns the sent message */
export type sendMessage = {|
  _: 'sendMessage',
  /** Target chat */
  chat_id?: number,
  /** Identifier of the message to reply to or 0 */
  reply_to_message_id?: number,
  /** Pass true to disable notification for the message. Not supported in secret chats */
  disable_notification?: boolean,
  /** Pass true if the message is sent from the background */
  from_background?: boolean,
  /** Markup for replying to the message; for bots only */
  reply_markup?: ReplyMarkupOptional,
  /** The content of the message to be sent */
  input_message_content?: InputMessageContentOptional,
|}

/**
 * Sends messages grouped together into an album. Currently only photo and video messages
 * can be grouped into an album. Returns sent messages
 */
export type sendMessageAlbum = {|
  _: 'sendMessageAlbum',
  /** Target chat */
  chat_id?: number,
  /** Identifier of a message to reply to or 0 */
  reply_to_message_id?: number,
  /** Pass true to disable notification for the messages. Not supported in secret chats */
  disable_notification?: boolean,
  /** Pass true if the messages are sent from the background */
  from_background?: boolean,
  /** Contents of messages to be sent */
  input_message_contents?: InputMessageContentOptional[],
|}

/**
 * Invites a bot to a chat (if it is not yet a member) and sends it the /start command.
 * Bots can't be invited to a private chat other than the chat with the bot. Bots can't
 * be invited to channels (although they can be added as admins) and secret chats. Returns
 * the sent message
 */
export type sendBotStartMessage = {|
  _: 'sendBotStartMessage',
  /** Identifier of the bot */
  bot_user_id?: number,
  /** Identifier of the target chat */
  chat_id?: number,
  /** A hidden parameter sent to the bot for deep linking purposes (https://api.telegram.org/bots#deep-linking) */
  parameter?: string,
|}

/**
 * Sends the result of an inline query as a message. Returns the sent message. Always
 * clears a chat draft message
 */
export type sendInlineQueryResultMessage = {|
  _: 'sendInlineQueryResultMessage',
  /** Target chat */
  chat_id?: number,
  /** Identifier of a message to reply to or 0 */
  reply_to_message_id?: number,
  /** Pass true to disable notification for the message. Not supported in secret chats */
  disable_notification?: boolean,
  /** Pass true if the message is sent from background */
  from_background?: boolean,
  /** Identifier of the inline query */
  query_id?: (number | string),
  /** Identifier of the inline result */
  result_id?: string,
|}

/**
 * Forwards previously sent messages. Returns the forwarded messages in the same order
 * as the message identifiers passed in message_ids. If a message can't be forwarded,
 * null will be returned instead of the message
 */
export type forwardMessages = {|
  _: 'forwardMessages',
  /** Identifier of the chat to which to forward messages */
  chat_id?: number,
  /** Identifier of the chat from which to forward messages */
  from_chat_id?: number,
  /** Identifiers of the messages to forward */
  message_ids?: number[],
  /**
   * Pass true to disable notification for the message, doesn't work if messages are forwarded
   * to a secret chat
   */
  disable_notification?: boolean,
  /** Pass true if the message is sent from the background */
  from_background?: boolean,
  /**
   * True, if the messages should be grouped into an album after forwarding. For this
   * to work, no more than 10 messages may be forwarded, and all of them must be photo
   * or video messages
   */
  as_album?: boolean,
|}

/**
 * Changes the current TTL setting (sets a new self-destruct timer) in a secret chat
 * and sends the corresponding message
 */
export type sendChatSetTtlMessage = {|
  _: 'sendChatSetTtlMessage',
  /** Chat identifier */
  chat_id?: number,
  /** New TTL value, in seconds */
  ttl?: number,
|}

/**
 * Sends a notification about a screenshot taken in a chat. Supported only in private
 * and secret chats
 */
export type sendChatScreenshotTakenNotification = {|
  _: 'sendChatScreenshotTakenNotification',
  /** Chat identifier */
  chat_id?: number,
|}

/**
 * Adds a local message to a chat. The message is persistent across application restarts
 * only if the message database is used. Returns the added message
 */
export type addLocalMessage = {|
  _: 'addLocalMessage',
  /** Target chat */
  chat_id?: number,
  /**
   * Identifier of the user who will be shown as the sender of the message; may be 0 for
   * channel posts
   */
  sender_user_id?: number,
  /** Identifier of the message to reply to or 0 */
  reply_to_message_id?: number,
  /** Pass true to disable notification for the message */
  disable_notification?: boolean,
  /** The content of the message to be added */
  input_message_content?: InputMessageContentOptional,
|}

/** Deletes messages */
export type deleteMessages = {|
  _: 'deleteMessages',
  /** Chat identifier */
  chat_id?: number,
  /** Identifiers of the messages to be deleted */
  message_ids?: number[],
  /**
   * Pass true to try to delete outgoing messages for all chat members (may fail if messages
   * are too old). Always true for supergroups, channels and secret chats
   */
  revoke?: boolean,
|}

/**
 * Deletes all messages sent by the specified user to a chat. Supported only in supergroups;
 * requires can_delete_messages administrator privileges
 */
export type deleteChatMessagesFromUser = {|
  _: 'deleteChatMessagesFromUser',
  /** Chat identifier */
  chat_id?: number,
  /** User identifier */
  user_id?: number,
|}

/**
 * Edits the text of a message (or a text of a game message). Returns the edited message
 * after the edit is completed on the server side
 */
export type editMessageText = {|
  _: 'editMessageText',
  /** The chat the message belongs to */
  chat_id?: number,
  /** Identifier of the message */
  message_id?: number,
  /** The new message reply markup; for bots only */
  reply_markup?: ReplyMarkupOptional,
  /** New text content of the message. Should be of type InputMessageText */
  input_message_content?: InputMessageContentOptional,
|}

/**
 * Edits the message content of a live location. Messages can be edited for a limited
 * period of time specified in the live location. Returns the edited message after the
 * edit is completed on the server side
 */
export type editMessageLiveLocation = {|
  _: 'editMessageLiveLocation',
  /** The chat the message belongs to */
  chat_id?: number,
  /** Identifier of the message */
  message_id?: number,
  /** The new message reply markup; for bots only */
  reply_markup?: ReplyMarkupOptional,
  /**
   * New location content of the message; may be null. Pass null to stop sharing the live
   * location
   */
  location?: locationOptional,
|}

/**
 * Edits the content of a message with an animation, an audio, a document, a photo or
 * a video. The media in the message can't be replaced if the message was set to self-destruct.
 * Media can't be replaced by self-destructing media. Media in an album can be edited
 * only to contain a photo or a video. Returns the edited message after the edit is
 * completed on the server side
 */
export type editMessageMedia = {|
  _: 'editMessageMedia',
  /** The chat the message belongs to */
  chat_id?: number,
  /** Identifier of the message */
  message_id?: number,
  /** The new message reply markup; for bots only */
  reply_markup?: ReplyMarkupOptional,
  /**
   * New content of the message. Must be one of the following types: InputMessageAnimation,
   * InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo
   */
  input_message_content?: InputMessageContentOptional,
|}

/**
 * Edits the message content caption. Returns the edited message after the edit is completed
 * on the server side
 */
export type editMessageCaption = {|
  _: 'editMessageCaption',
  /** The chat the message belongs to */
  chat_id?: number,
  /** Identifier of the message */
  message_id?: number,
  /** The new message reply markup; for bots only */
  reply_markup?: ReplyMarkupOptional,
  /** New message content caption; 0-GetOption("message_caption_length_max") characters */
  caption?: formattedTextOptional,
|}

/**
 * Edits the message reply markup; for bots only. Returns the edited message after the
 * edit is completed on the server side
 */
export type editMessageReplyMarkup = {|
  _: 'editMessageReplyMarkup',
  /** The chat the message belongs to */
  chat_id?: number,
  /** Identifier of the message */
  message_id?: number,
  /** The new message reply markup */
  reply_markup?: ReplyMarkupOptional,
|}

/** Edits the text of an inline text or game message sent via a bot; for bots only */
export type editInlineMessageText = {|
  _: 'editInlineMessageText',
  /** Inline message identifier */
  inline_message_id?: string,
  /** The new message reply markup */
  reply_markup?: ReplyMarkupOptional,
  /** New text content of the message. Should be of type InputMessageText */
  input_message_content?: InputMessageContentOptional,
|}

/**
 * Edits the content of a live location in an inline message sent via a bot; for bots
 * only
 */
export type editInlineMessageLiveLocation = {|
  _: 'editInlineMessageLiveLocation',
  /** Inline message identifier */
  inline_message_id?: string,
  /** The new message reply markup */
  reply_markup?: ReplyMarkupOptional,
  /**
   * New location content of the message; may be null. Pass null to stop sharing the live
   * location
   */
  location?: locationOptional,
|}

/**
 * Edits the content of a message with an animation, an audio, a document, a photo or
 * a video in an inline message sent via a bot; for bots only
 */
export type editInlineMessageMedia = {|
  _: 'editInlineMessageMedia',
  /** Inline message identifier */
  inline_message_id?: string,
  /** The new message reply markup; for bots only */
  reply_markup?: ReplyMarkupOptional,
  /**
   * New content of the message. Must be one of the following types: InputMessageAnimation,
   * InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo
   */
  input_message_content?: InputMessageContentOptional,
|}

/** Edits the caption of an inline message sent via a bot; for bots only */
export type editInlineMessageCaption = {|
  _: 'editInlineMessageCaption',
  /** Inline message identifier */
  inline_message_id?: string,
  /** The new message reply markup */
  reply_markup?: ReplyMarkupOptional,
  /** New message content caption; 0-GetOption("message_caption_length_max") characters */
  caption?: formattedTextOptional,
|}

/** Edits the reply markup of an inline message sent via a bot; for bots only */
export type editInlineMessageReplyMarkup = {|
  _: 'editInlineMessageReplyMarkup',
  /** Inline message identifier */
  inline_message_id?: string,
  /** The new message reply markup */
  reply_markup?: ReplyMarkupOptional,
|}

/**
 * Returns all entities (mentions, hashtags, cashtags, bot commands, URLs, and email
 * addresses) contained in the text. This is an offline method. Can be called before
 * authorization. Can be called synchronously
 */
export type getTextEntities = {|
  _: 'getTextEntities',
  /** The text in which to look for entites */
  text?: string,
|}

/**
 * Parses Bold, Italic, Code, Pre, PreCode and TextUrl entities contained in the text.
 * This is an offline method. Can be called before authorization. Can be called synchronously
 */
export type parseTextEntities = {|
  _: 'parseTextEntities',
  /** The text which should be parsed */
  text?: string,
  /** Text parse mode */
  parse_mode?: TextParseModeOptional,
|}

/**
 * Returns the MIME type of a file, guessed by its extension. Returns an empty string
 * on failure. This is an offline method. Can be called before authorization. Can be
 * called synchronously
 */
export type getFileMimeType = {|
  _: 'getFileMimeType',
  /** The name of the file or path to the file */
  file_name?: string,
|}

/**
 * Returns the extension of a file, guessed by its MIME type. Returns an empty string
 * on failure. This is an offline method. Can be called before authorization. Can be
 * called synchronously
 */
export type getFileExtension = {|
  _: 'getFileExtension',
  /** The MIME type of the file */
  mime_type?: string,
|}

/**
 * Removes potentially dangerous characters from the name of a file. The encoding of
 * the file name is supposed to be UTF-8. Returns an empty string on failure. This is
 * an offline method. Can be called before authorization. Can be called synchronously
 */
export type cleanFileName = {|
  _: 'cleanFileName',
  /** File name or path to the file */
  file_name?: string,
|}

/**
 * Returns a string stored in the local database from the specified localization target
 * and language pack by its key. Returns a 404 error if the string is not found. This
 * is an offline method. Can be called before authorization. Can be called synchronously
 */
export type getLanguagePackString = {|
  _: 'getLanguagePackString',
  /** Path to the language pack database in which strings are stored */
  language_pack_database_path?: string,
  /** Localization target to which the language pack belongs */
  localization_target?: string,
  /** Language pack identifier */
  language_pack_id?: string,
  /** Language pack key of the string to be returned */
  key?: string,
|}

/**
 * Sends an inline query to a bot and returns its results. Returns an error with code
 * 502 if the bot fails to answer the query before the query timeout expires
 */
export type getInlineQueryResults = {|
  _: 'getInlineQueryResults',
  /** The identifier of the target bot */
  bot_user_id?: number,
  /** Identifier of the chat, where the query was sent */
  chat_id?: number,
  /** Location of the user, only if needed */
  user_location?: locationOptional,
  /** Text of the query */
  query?: string,
  /** Offset of the first entry to return */
  offset?: string,
|}

/** Sets the result of an inline query; for bots only */
export type answerInlineQuery = {|
  _: 'answerInlineQuery',
  /** Identifier of the inline query */
  inline_query_id?: (number | string),
  /** True, if the result of the query can be cached for the specified user */
  is_personal?: boolean,
  /** The results of the query */
  results?: InputInlineQueryResultOptional[],
  /** Allowed time to cache the results of the query, in seconds */
  cache_time?: number,
  /** Offset for the next inline query; pass an empty string if there are no more results */
  next_offset?: string,
  /**
   * If non-empty, this text should be shown on the button that opens a private chat with
   * the bot and sends a start message to the bot with the parameter switch_pm_parameter
   */
  switch_pm_text?: string,
  /** The parameter for the bot start message */
  switch_pm_parameter?: string,
|}

/**
 * Sends a callback query to a bot and returns an answer. Returns an error with code
 * 502 if the bot fails to answer the query before the query timeout expires
 */
export type getCallbackQueryAnswer = {|
  _: 'getCallbackQueryAnswer',
  /** Identifier of the chat with the message */
  chat_id?: number,
  /** Identifier of the message from which the query originated */
  message_id?: number,
  /** Query payload */
  payload?: CallbackQueryPayloadOptional,
|}

/** Sets the result of a callback query; for bots only */
export type answerCallbackQuery = {|
  _: 'answerCallbackQuery',
  /** Identifier of the callback query */
  callback_query_id?: (number | string),
  /** Text of the answer */
  text?: string,
  /** If true, an alert should be shown to the user instead of a toast notification */
  show_alert?: boolean,
  /** URL to be opened */
  url?: string,
  /** Time during which the result of the query can be cached, in seconds */
  cache_time?: number,
|}

/** Sets the result of a shipping query; for bots only */
export type answerShippingQuery = {|
  _: 'answerShippingQuery',
  /** Identifier of the shipping query */
  shipping_query_id?: (number | string),
  /** Available shipping options */
  shipping_options?: shippingOptionOptional[],
  /** An error message, empty on success */
  error_message?: string,
|}

/** Sets the result of a pre-checkout query; for bots only */
export type answerPreCheckoutQuery = {|
  _: 'answerPreCheckoutQuery',
  /** Identifier of the pre-checkout query */
  pre_checkout_query_id?: (number | string),
  /** An error message, empty on success */
  error_message?: string,
|}

/** Updates the game score of the specified user in the game; for bots only */
export type setGameScore = {|
  _: 'setGameScore',
  /** The chat to which the message with the game */
  chat_id?: number,
  /** Identifier of the message */
  message_id?: number,
  /** True, if the message should be edited */
  edit_message?: boolean,
  /** User identifier */
  user_id?: number,
  /** The new score */
  score?: number,
  /**
   * Pass true to update the score even if it decreases. If the score is 0, the user will
   * be deleted from the high score table
   */
  force?: boolean,
|}

/** Updates the game score of the specified user in a game; for bots only */
export type setInlineGameScore = {|
  _: 'setInlineGameScore',
  /** Inline message identifier */
  inline_message_id?: string,
  /** True, if the message should be edited */
  edit_message?: boolean,
  /** User identifier */
  user_id?: number,
  /** The new score */
  score?: number,
  /**
   * Pass true to update the score even if it decreases. If the score is 0, the user will
   * be deleted from the high score table
   */
  force?: boolean,
|}

/**
 * Returns the high scores for a game and some part of the high score table in the range
 * of the specified user; for bots only
 */
export type getGameHighScores = {|
  _: 'getGameHighScores',
  /** The chat that contains the message with the game */
  chat_id?: number,
  /** Identifier of the message */
  message_id?: number,
  /** User identifier */
  user_id?: number,
|}

/**
 * Returns game high scores and some part of the high score table in the range of the
 * specified user; for bots only
 */
export type getInlineGameHighScores = {|
  _: 'getInlineGameHighScores',
  /** Inline message identifier */
  inline_message_id?: string,
  /** User identifier */
  user_id?: number,
|}

/**
 * Deletes the default reply markup from a chat. Must be called after a one-time keyboard
 * or a ForceReply reply markup has been used. UpdateChatReplyMarkup will be sent if
 * the reply markup will be changed
 */
export type deleteChatReplyMarkup = {|
  _: 'deleteChatReplyMarkup',
  /** Chat identifier */
  chat_id?: number,
  /** The message identifier of the used keyboard */
  message_id?: number,
|}

/** Sends a notification about user activity in a chat */
export type sendChatAction = {|
  _: 'sendChatAction',
  /** Chat identifier */
  chat_id?: number,
  /** The action description */
  action?: ChatActionOptional,
|}

/**
 * This method should be called if the chat is opened by the user. Many useful activities
 * depend on the chat being opened or closed (e.g., in supergroups and channels all
 * updates are received only for opened chats)
 */
export type openChat = {|
  _: 'openChat',
  /** Chat identifier */
  chat_id?: number,
|}

/**
 * This method should be called if the chat is closed by the user. Many useful activities
 * depend on the chat being opened or closed
 */
export type closeChat = {|
  _: 'closeChat',
  /** Chat identifier */
  chat_id?: number,
|}

/**
 * This method should be called if messages are being viewed by the user. Many useful
 * activities depend on whether the messages are currently being viewed or not (e.g.,
 * marking messages as read, incrementing a view counter, updating a view counter, removing
 * deleted messages in supergroups and channels)
 */
export type viewMessages = {|
  _: 'viewMessages',
  /** Chat identifier */
  chat_id?: number,
  /** The identifiers of the messages being viewed */
  message_ids?: number[],
  /** True, if messages in closed chats should be marked as read */
  force_read?: boolean,
|}

/**
 * This method should be called if the message content has been opened (e.g., the user
 * has opened a photo, video, document, location or venue, or has listened to an audio
 * file or voice note message). An updateMessageContentOpened update will be generated
 * if something has changed
 */
export type openMessageContent = {|
  _: 'openMessageContent',
  /** Chat identifier of the message */
  chat_id?: number,
  /** Identifier of the message with the opened content */
  message_id?: number,
|}

/** Marks all mentions in a chat as read */
export type readAllChatMentions = {|
  _: 'readAllChatMentions',
  /** Chat identifier */
  chat_id?: number,
|}

/** Returns an existing chat corresponding to a given user */
export type createPrivateChat = {|
  _: 'createPrivateChat',
  /** User identifier */
  user_id?: number,
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  force?: boolean,
|}

/** Returns an existing chat corresponding to a known basic group */
export type createBasicGroupChat = {|
  _: 'createBasicGroupChat',
  /** Basic group identifier */
  basic_group_id?: number,
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  force?: boolean,
|}

/** Returns an existing chat corresponding to a known supergroup or channel */
export type createSupergroupChat = {|
  _: 'createSupergroupChat',
  /** Supergroup or channel identifier */
  supergroup_id?: number,
  /**
   * If true, the chat will be created without network request. In this case all information
   * about the chat except its type, title and photo can be incorrect
   */
  force?: boolean,
|}

/** Returns an existing chat corresponding to a known secret chat */
export type createSecretChat = {|
  _: 'createSecretChat',
  /** Secret chat identifier */
  secret_chat_id?: number,
|}

/**
 * Creates a new basic group and sends a corresponding messageBasicGroupChatCreate.
 * Returns the newly created chat
 */
export type createNewBasicGroupChat = {|
  _: 'createNewBasicGroupChat',
  /** Identifiers of users to be added to the basic group */
  user_ids?: number[],
  /** Title of the new basic group; 1-255 characters */
  title?: string,
|}

/**
 * Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate.
 * Returns the newly created chat
 */
export type createNewSupergroupChat = {|
  _: 'createNewSupergroupChat',
  /** Title of the new chat; 1-255 characters */
  title?: string,
  /** True, if a channel chat should be created */
  is_channel?: boolean,
  /** Chat description; 0-255 characters */
  description?: string,
|}

/** Creates a new secret chat. Returns the newly created chat */
export type createNewSecretChat = {|
  _: 'createNewSecretChat',
  /** Identifier of the target user */
  user_id?: number,
|}

/**
 * Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo
 * and messageChatUpgradeFrom. Deactivates the original basic group
 */
export type upgradeBasicGroupChatToSupergroupChat = {|
  _: 'upgradeBasicGroupChatToSupergroupChat',
  /** Identifier of the chat to upgrade */
  chat_id?: number,
|}

/**
 * Changes the chat title. Supported only for basic groups, supergroups and channels.
 * Requires administrator rights in basic groups and the appropriate administrator rights
 * in supergroups and channels. The title will not be changed until the request to the
 * server has been completed
 */
export type setChatTitle = {|
  _: 'setChatTitle',
  /** Chat identifier */
  chat_id?: number,
  /** New title of the chat; 1-255 characters */
  title?: string,
|}

/**
 * Changes the photo of a chat. Supported only for basic groups, supergroups and channels.
 * Requires administrator rights in basic groups and the appropriate administrator rights
 * in supergroups and channels. The photo will not be changed before request to the
 * server has been completed
 */
export type setChatPhoto = {|
  _: 'setChatPhoto',
  /** Chat identifier */
  chat_id?: number,
  /**
   * New chat photo. You can use a zero InputFileId to delete the chat photo. Files that
   * are accessible only by HTTP URL are not acceptable
   */
  photo?: InputFileOptional,
|}

/** Changes the draft message in a chat */
export type setChatDraftMessage = {|
  _: 'setChatDraftMessage',
  /** Chat identifier */
  chat_id?: number,
  /** New draft message; may be null */
  draft_message?: draftMessageOptional,
|}

/** Changes the notification settings of a chat */
export type setChatNotificationSettings = {|
  _: 'setChatNotificationSettings',
  /** Chat identifier */
  chat_id?: number,
  /** New notification settings for the chat */
  notification_settings?: chatNotificationSettingsOptional,
|}

/**
 * Changes the pinned state of a chat. You can pin up to GetOption("pinned_chat_count_max")
 * non-secret chats and the same number of secret chats
 */
export type toggleChatIsPinned = {|
  _: 'toggleChatIsPinned',
  /** Chat identifier */
  chat_id?: number,
  /** New value of is_pinned */
  is_pinned?: boolean,
|}

/** Changes the marked as unread state of a chat */
export type toggleChatIsMarkedAsUnread = {|
  _: 'toggleChatIsMarkedAsUnread',
  /** Chat identifier */
  chat_id?: number,
  /** New value of is_marked_as_unread */
  is_marked_as_unread?: boolean,
|}

/**
 * Changes the value of the default disable_notification parameter, used when a message
 * is sent to a chat
 */
export type toggleChatDefaultDisableNotification = {|
  _: 'toggleChatDefaultDisableNotification',
  /** Chat identifier */
  chat_id?: number,
  /** New value of default_disable_notification */
  default_disable_notification?: boolean,
|}

/** Changes client data associated with a chat */
export type setChatClientData = {|
  _: 'setChatClientData',
  /** Chat identifier */
  chat_id?: number,
  /** New value of client_data */
  client_data?: string,
|}

/**
 * Adds current user as a new member to a chat. Private and secret chats can't be joined
 * using this method
 */
export type joinChat = {|
  _: 'joinChat',
  /** Chat identifier */
  chat_id?: number,
|}

/**
 * Removes current user from chat members. Private and secret chats can't be left using
 * this method
 */
export type leaveChat = {|
  _: 'leaveChat',
  /** Chat identifier */
  chat_id?: number,
|}

/**
 * Adds a new member to a chat. Members can't be added to private or secret chats. Members
 * will not be added until the chat state has been synchronized with the server
 */
export type addChatMember = {|
  _: 'addChatMember',
  /** Chat identifier */
  chat_id?: number,
  /** Identifier of the user */
  user_id?: number,
  /**
   * The number of earlier messages from the chat to be forwarded to the new member; up
   * to 300. Ignored for supergroups and channels
   */
  forward_limit?: number,
|}

/**
 * Adds multiple new members to a chat. Currently this option is only available for
 * supergroups and channels. This option can't be used to join a chat. Members can't
 * be added to a channel if it has more than 200 members. Members will not be added
 * until the chat state has been synchronized with the server
 */
export type addChatMembers = {|
  _: 'addChatMembers',
  /** Chat identifier */
  chat_id?: number,
  /** Identifiers of the users to be added to the chat */
  user_ids?: number[],
|}

/**
 * Changes the status of a chat member, needs appropriate privileges. This function
 * is currently not suitable for adding new members to the chat; instead, use addChatMember.
 * The chat member status will not be changed until it has been synchronized with the
 * server
 */
export type setChatMemberStatus = {|
  _: 'setChatMemberStatus',
  /** Chat identifier */
  chat_id?: number,
  /** User identifier */
  user_id?: number,
  /** The new status of the member in the chat */
  status?: ChatMemberStatusOptional,
|}

/** Returns information about a single member of a chat */
export type getChatMember = {|
  _: 'getChatMember',
  /** Chat identifier */
  chat_id?: number,
  /** User identifier */
  user_id?: number,
|}

/**
 * Searches for a specified query in the first name, last name and username of the members
 * of a specified chat. Requires administrator rights in channels
 */
export type searchChatMembers = {|
  _: 'searchChatMembers',
  /** Chat identifier */
  chat_id?: number,
  /** Query to search for */
  query?: string,
  /** The maximum number of users to be returned */
  limit?: number,
  /** The type of users to return. By default, chatMembersFilterMembers */
  filter?: ChatMembersFilterOptional,
|}

/** Returns a list of users who are administrators of the chat */
export type getChatAdministrators = {|
  _: 'getChatAdministrators',
  /** Chat identifier */
  chat_id?: number,
|}

/** Clears draft messages in all chats */
export type clearAllDraftMessages = {|
  _: 'clearAllDraftMessages',
  /** If true, local draft messages in secret chats will not be cleared */
  exclude_secret_chats?: boolean,
|}

/** Returns the notification settings for chats of a given type */
export type getScopeNotificationSettings = {|
  _: 'getScopeNotificationSettings',
  /** Types of chats for which to return the notification settings information */
  scope?: NotificationSettingsScopeOptional,
|}

/** Changes notification settings for chats of a given type */
export type setScopeNotificationSettings = {|
  _: 'setScopeNotificationSettings',
  /** Types of chats for which to change the notification settings */
  scope?: NotificationSettingsScopeOptional,
  /** The new notification settings for the given scope */
  notification_settings?: scopeNotificationSettingsOptional,
|}

/**
 * Resets all notification settings to their default values. By default, all chats are
 * unmuted, the sound is set to "default" and message previews are shown
 */
export type resetAllNotificationSettings = {|
  _: 'resetAllNotificationSettings',
|}

/** Changes the order of pinned chats */
export type setPinnedChats = {|
  _: 'setPinnedChats',
  /** The new list of pinned chats */
  chat_ids?: number[],
|}

/**
 * Asynchronously downloads a file from the cloud. updateFile will be used to notify
 * about the download progress and successful completion of the download. Returns file
 * state just after the download has been started
 */
export type downloadFile = {|
  _: 'downloadFile',
  /** Identifier of the file to download */
  file_id?: number,
  /**
   * Priority of the download (1-32). The higher the priority, the earlier the file will
   * be downloaded. If the priorities of two files are equal, then the last one for which
   * downloadFile was called will be downloaded first
   */
  priority?: number,
|}

/** Stops the downloading of a file. If a file has already been downloaded, does nothing */
export type cancelDownloadFile = {|
  _: 'cancelDownloadFile',
  /** Identifier of a file to stop downloading */
  file_id?: number,
  /**
   * Pass true to stop downloading only if it hasn't been started, i.e. request hasn't
   * been sent to server
   */
  only_if_pending?: boolean,
|}

/**
 * Asynchronously uploads a file to the cloud without sending it in a message. updateFile
 * will be used to notify about upload progress and successful completion of the upload.
 * The file will not have a persistent remote identifier until it will be sent in a
 * message
 */
export type uploadFile = {|
  _: 'uploadFile',
  /** File to upload */
  file?: InputFileOptional,
  /** File type */
  file_type?: FileTypeOptional,
  /**
   * Priority of the upload (1-32). The higher the priority, the earlier the file will
   * be uploaded. If the priorities of two files are equal, then the first one for which
   * uploadFile was called will be uploaded first
   */
  priority?: number,
|}

/**
 * Stops the uploading of a file. Supported only for files uploaded by using uploadFile.
 * For other files the behavior is undefined
 */
export type cancelUploadFile = {|
  _: 'cancelUploadFile',
  /** Identifier of the file to stop uploading */
  file_id?: number,
|}

/** The next part of a file was generated */
export type setFileGenerationProgress = {|
  _: 'setFileGenerationProgress',
  /** The identifier of the generation process */
  generation_id?: (number | string),
  /** Expected size of the generated file, in bytes; 0 if unknown */
  expected_size?: number,
  /** The number of bytes already generated */
  local_prefix_size?: number,
|}

/** Finishes the file generation */
export type finishFileGeneration = {|
  _: 'finishFileGeneration',
  /** The identifier of the generation process */
  generation_id?: (number | string),
  /** If set, means that file generation has failed and should be terminated */
  error?: errorOptional,
|}

/** Deletes a file from the TDLib file cache */
export type deleteFile = {|
  _: 'deleteFile',
  /** Identifier of the file to delete */
  file_id?: number,
|}

/**
 * Generates a new invite link for a chat; the previously generated link is revoked.
 * Available for basic groups, supergroups, and channels. In basic groups this can be
 * called only by the group's creator; in supergroups and channels this requires appropriate
 * administrator rights
 */
export type generateChatInviteLink = {|
  _: 'generateChatInviteLink',
  /** Chat identifier */
  chat_id?: number,
|}

/**
 * Checks the validity of an invite link for a chat and returns information about the
 * corresponding chat
 */
export type checkChatInviteLink = {|
  _: 'checkChatInviteLink',
  /**
   * Invite link to be checked; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/",
   * or "https://telegram.dog/joinchat/"
   */
  invite_link?: string,
|}

/**
 * Uses an invite link to add the current user to the chat if possible. The new member
 * will not be added until the chat state has been synchronized with the server
 */
export type joinChatByInviteLink = {|
  _: 'joinChatByInviteLink',
  /**
   * Invite link to import; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/",
   * or "https://telegram.dog/joinchat/"
   */
  invite_link?: string,
|}

/** Creates a new call */
export type createCall = {|
  _: 'createCall',
  /** Identifier of the user to be called */
  user_id?: number,
  /** Description of the call protocols supported by the client */
  protocol?: callProtocolOptional,
|}

/** Accepts an incoming call */
export type acceptCall = {|
  _: 'acceptCall',
  /** Call identifier */
  call_id?: number,
  /** Description of the call protocols supported by the client */
  protocol?: callProtocolOptional,
|}

/** Discards a call */
export type discardCall = {|
  _: 'discardCall',
  /** Call identifier */
  call_id?: number,
  /** True, if the user was disconnected */
  is_disconnected?: boolean,
  /** The call duration, in seconds */
  duration?: number,
  /** Identifier of the connection used during the call */
  connection_id?: (number | string),
|}

/** Sends a call rating */
export type sendCallRating = {|
  _: 'sendCallRating',
  /** Call identifier */
  call_id?: number,
  /** Call rating; 1-5 */
  rating?: number,
  /** An optional user comment if the rating is less than 5 */
  comment?: string,
|}

/** Sends debug information for a call */
export type sendCallDebugInformation = {|
  _: 'sendCallDebugInformation',
  /** Call identifier */
  call_id?: number,
  /** Debug information in application-specific format */
  debug_information?: string,
|}

/** Adds a user to the blacklist */
export type blockUser = {|
  _: 'blockUser',
  /** User identifier */
  user_id?: number,
|}

/** Removes a user from the blacklist */
export type unblockUser = {|
  _: 'unblockUser',
  /** User identifier */
  user_id?: number,
|}

/** Returns users that were blocked by the current user */
export type getBlockedUsers = {|
  _: 'getBlockedUsers',
  /** Number of users to skip in the result; must be non-negative */
  offset?: number,
  /** Maximum number of users to return; up to 100 */
  limit?: number,
|}

/** Adds new contacts or edits existing contacts; contacts' user identifiers are ignored */
export type importContacts = {|
  _: 'importContacts',
  /** The list of contacts to import or edit, contact's vCard are ignored and are not imported */
  contacts?: contactOptional[],
|}

/** Returns all user contacts */
export type getContacts = {|
  _: 'getContacts',
|}

/**
 * Searches for the specified query in the first names, last names and usernames of
 * the known user contacts
 */
export type searchContacts = {|
  _: 'searchContacts',
  /** Query to search for; can be empty to return all contacts */
  query?: string,
  /** Maximum number of users to be returned */
  limit?: number,
|}

/** Removes users from the contacts list */
export type removeContacts = {|
  _: 'removeContacts',
  /** Identifiers of users to be deleted */
  user_ids?: number[],
|}

/** Returns the total number of imported contacts */
export type getImportedContactCount = {|
  _: 'getImportedContactCount',
|}

/**
 * Changes imported contacts using the list of current user contacts saved on the device.
 * Imports newly added contacts and, if at least the file database is enabled, deletes
 * recently deleted contacts. Query result depends on the result of the previous query,
 * so only one query is possible at the same time
 */
export type changeImportedContacts = {|
  _: 'changeImportedContacts',
  /** The new list of contacts, contact's vCard are ignored and are not imported */
  contacts?: contactOptional[],
|}

/** Clears all imported contacts, contacts list remains unchanged */
export type clearImportedContacts = {|
  _: 'clearImportedContacts',
|}

/**
 * Returns the profile photos of a user. The result of this query may be outdated: some
 * photos might have been deleted already
 */
export type getUserProfilePhotos = {|
  _: 'getUserProfilePhotos',
  /** User identifier */
  user_id?: number,
  /** The number of photos to skip; must be non-negative */
  offset?: number,
  /** Maximum number of photos to be returned; up to 100 */
  limit?: number,
|}

/**
 * Returns stickers from the installed sticker sets that correspond to a given emoji.
 * If the emoji is not empty, favorite and recently used stickers may also be returned
 */
export type getStickers = {|
  _: 'getStickers',
  /** String representation of emoji. If empty, returns all known installed stickers */
  emoji?: string,
  /** Maximum number of stickers to be returned */
  limit?: number,
|}

/** Searches for stickers from public sticker sets that correspond to a given emoji */
export type searchStickers = {|
  _: 'searchStickers',
  /** String representation of emoji; must be non-empty */
  emoji?: string,
  /** Maximum number of stickers to be returned */
  limit?: number,
|}

/** Returns a list of installed sticker sets */
export type getInstalledStickerSets = {|
  _: 'getInstalledStickerSets',
  /** Pass true to return mask sticker sets; pass false to return ordinary sticker sets */
  is_masks?: boolean,
|}

/** Returns a list of archived sticker sets */
export type getArchivedStickerSets = {|
  _: 'getArchivedStickerSets',
  /** Pass true to return mask stickers sets; pass false to return ordinary sticker sets */
  is_masks?: boolean,
  /** Identifier of the sticker set from which to return the result */
  offset_sticker_set_id?: (number | string),
  /** Maximum number of sticker sets to return */
  limit?: number,
|}

/** Returns a list of trending sticker sets */
export type getTrendingStickerSets = {|
  _: 'getTrendingStickerSets',
|}

/**
 * Returns a list of sticker sets attached to a file. Currently only photos and videos
 * can have attached sticker sets
 */
export type getAttachedStickerSets = {|
  _: 'getAttachedStickerSets',
  /** File identifier */
  file_id?: number,
|}

/** Returns information about a sticker set by its identifier */
export type getStickerSet = {|
  _: 'getStickerSet',
  /** Identifier of the sticker set */
  set_id?: (number | string),
|}

/** Searches for a sticker set by its name */
export type searchStickerSet = {|
  _: 'searchStickerSet',
  /** Name of the sticker set */
  name?: string,
|}

/**
 * Searches for installed sticker sets by looking for specified query in their title
 * and name
 */
export type searchInstalledStickerSets = {|
  _: 'searchInstalledStickerSets',
  /** Pass true to return mask sticker sets; pass false to return ordinary sticker sets */
  is_masks?: boolean,
  /** Query to search for */
  query?: string,
  /** Maximum number of sticker sets to return */
  limit?: number,
|}

/**
 * Searches for ordinary sticker sets by looking for specified query in their title
 * and name. Excludes installed sticker sets from the results
 */
export type searchStickerSets = {|
  _: 'searchStickerSets',
  /** Query to search for */
  query?: string,
|}

/** Installs/uninstalls or activates/archives a sticker set */
export type changeStickerSet = {|
  _: 'changeStickerSet',
  /** Identifier of the sticker set */
  set_id?: (number | string),
  /** The new value of is_installed */
  is_installed?: boolean,
  /** The new value of is_archived. A sticker set can't be installed and archived simultaneously */
  is_archived?: boolean,
|}

/** Informs the server that some trending sticker sets have been viewed by the user */
export type viewTrendingStickerSets = {|
  _: 'viewTrendingStickerSets',
  /** Identifiers of viewed trending sticker sets */
  sticker_set_ids?: (number | string)[],
|}

/** Changes the order of installed sticker sets */
export type reorderInstalledStickerSets = {|
  _: 'reorderInstalledStickerSets',
  /**
   * Pass true to change the order of mask sticker sets; pass false to change the order
   * of ordinary sticker sets
   */
  is_masks?: boolean,
  /** Identifiers of installed sticker sets in the new correct order */
  sticker_set_ids?: (number | string)[],
|}

/** Returns a list of recently used stickers */
export type getRecentStickers = {|
  _: 'getRecentStickers',
  /**
   * Pass true to return stickers and masks that were recently attached to photos or video
   * files; pass false to return recently sent stickers
   */
  is_attached?: boolean,
|}

/**
 * Manually adds a new sticker to the list of recently used stickers. The new sticker
 * is added to the top of the list. If the sticker was already in the list, it is removed
 * from the list first. Only stickers belonging to a sticker set can be added to this
 * list
 */
export type addRecentSticker = {|
  _: 'addRecentSticker',
  /**
   * Pass true to add the sticker to the list of stickers recently attached to photo or
   * video files; pass false to add the sticker to the list of recently sent stickers
   */
  is_attached?: boolean,
  /** Sticker file to add */
  sticker?: InputFileOptional,
|}

/** Removes a sticker from the list of recently used stickers */
export type removeRecentSticker = {|
  _: 'removeRecentSticker',
  /**
   * Pass true to remove the sticker from the list of stickers recently attached to photo
   * or video files; pass false to remove the sticker from the list of recently sent stickers
   */
  is_attached?: boolean,
  /** Sticker file to delete */
  sticker?: InputFileOptional,
|}

/** Clears the list of recently used stickers */
export type clearRecentStickers = {|
  _: 'clearRecentStickers',
  /**
   * Pass true to clear the list of stickers recently attached to photo or video files;
   * pass false to clear the list of recently sent stickers
   */
  is_attached?: boolean,
|}

/** Returns favorite stickers */
export type getFavoriteStickers = {|
  _: 'getFavoriteStickers',
|}

/**
 * Adds a new sticker to the list of favorite stickers. The new sticker is added to
 * the top of the list. If the sticker was already in the list, it is removed from the
 * list first. Only stickers belonging to a sticker set can be added to this list
 */
export type addFavoriteSticker = {|
  _: 'addFavoriteSticker',
  /** Sticker file to add */
  sticker?: InputFileOptional,
|}

/** Removes a sticker from the list of favorite stickers */
export type removeFavoriteSticker = {|
  _: 'removeFavoriteSticker',
  /** Sticker file to delete from the list */
  sticker?: InputFileOptional,
|}

/** Returns emoji corresponding to a sticker */
export type getStickerEmojis = {|
  _: 'getStickerEmojis',
  /** Sticker file identifier */
  sticker?: InputFileOptional,
|}

/** Returns saved animations */
export type getSavedAnimations = {|
  _: 'getSavedAnimations',
|}

/**
 * Manually adds a new animation to the list of saved animations. The new animation
 * is added to the beginning of the list. If the animation was already in the list,
 * it is removed first. Only non-secret video animations with MIME type "video/mp4"
 * can be added to the list
 */
export type addSavedAnimation = {|
  _: 'addSavedAnimation',
  /**
   * The animation file to be added. Only animations known to the server (i.e. successfully
   * sent via a message) can be added to the list
   */
  animation?: InputFileOptional,
|}

/** Removes an animation from the list of saved animations */
export type removeSavedAnimation = {|
  _: 'removeSavedAnimation',
  /** Animation file to be removed */
  animation?: InputFileOptional,
|}

/** Returns up to 20 recently used inline bots in the order of their last usage */
export type getRecentInlineBots = {|
  _: 'getRecentInlineBots',
|}

/** Searches for recently used hashtags by their prefix */
export type searchHashtags = {|
  _: 'searchHashtags',
  /** Hashtag prefix to search for */
  prefix?: string,
  /** Maximum number of hashtags to be returned */
  limit?: number,
|}

/** Removes a hashtag from the list of recently used hashtags */
export type removeRecentHashtag = {|
  _: 'removeRecentHashtag',
  /** Hashtag to delete */
  hashtag?: string,
|}

/**
 * Returns a web page preview by the text of the message. Do not call this function
 * too often. Returns a 404 error if the web page has no preview
 */
export type getWebPagePreview = {|
  _: 'getWebPagePreview',
  /** Message text with formatting */
  text?: formattedTextOptional,
|}

/**
 * Returns an instant view version of a web page if available. Returns a 404 error if
 * the web page has no instant view page
 */
export type getWebPageInstantView = {|
  _: 'getWebPageInstantView',
  /** The web page URL */
  url?: string,
  /** If true, the full instant view for the web page will be returned */
  force_full?: boolean,
|}

/**
 * Uploads a new profile photo for the current user. If something changes, updateUser
 * will be sent
 */
export type setProfilePhoto = {|
  _: 'setProfilePhoto',
  /** Profile photo to set. inputFileId and inputFileRemote may still be unsupported */
  photo?: InputFileOptional,
|}

/** Deletes a profile photo. If something changes, updateUser will be sent */
export type deleteProfilePhoto = {|
  _: 'deleteProfilePhoto',
  /** Identifier of the profile photo to delete */
  profile_photo_id?: (number | string),
|}

/**
 * Changes the first and last name of the current user. If something changes, updateUser
 * will be sent
 */
export type setName = {|
  _: 'setName',
  /** The new value of the first name for the user; 1-255 characters */
  first_name?: string,
  /** The new value of the optional last name for the user; 0-255 characters */
  last_name?: string,
|}

/** Changes the bio of the current user */
export type setBio = {|
  _: 'setBio',
  /** The new value of the user bio; 0-70 characters without line feeds */
  bio?: string,
|}

/**
 * Changes the username of the current user. If something changes, updateUser will be
 * sent
 */
export type setUsername = {|
  _: 'setUsername',
  /** The new value of the username. Use an empty string to remove the username */
  username?: string,
|}

/**
 * Changes the phone number of the user and sends an authentication code to the user's
 * new phone number. On success, returns information about the sent code
 */
export type changePhoneNumber = {|
  _: 'changePhoneNumber',
  /** The new phone number of the user in international format */
  phone_number?: string,
  /** Pass true if the code can be sent via flash call to the specified phone number */
  allow_flash_call?: boolean,
  /**
   * Pass true if the phone number is used on the current device. Ignored if allow_flash_call
   * is false
   */
  is_current_phone_number?: boolean,
|}

/**
 * Re-sends the authentication code sent to confirm a new phone number for the user.
 * Works only if the previously received authenticationCodeInfo next_code_type was not
 * null
 */
export type resendChangePhoneNumberCode = {|
  _: 'resendChangePhoneNumberCode',
|}

/** Checks the authentication code sent to confirm a new phone number of the user */
export type checkChangePhoneNumberCode = {|
  _: 'checkChangePhoneNumberCode',
  /** Verification code received by SMS, phone call or flash call */
  code?: string,
|}

/** Returns all active sessions of the current user */
export type getActiveSessions = {|
  _: 'getActiveSessions',
|}

/** Terminates a session of the current user */
export type terminateSession = {|
  _: 'terminateSession',
  /** Session identifier */
  session_id?: (number | string),
|}

/** Terminates all other sessions of the current user */
export type terminateAllOtherSessions = {|
  _: 'terminateAllOtherSessions',
|}

/** Returns all website where the current user used Telegram to log in */
export type getConnectedWebsites = {|
  _: 'getConnectedWebsites',
|}

/** Disconnects website from the current user's Telegram account */
export type disconnectWebsite = {|
  _: 'disconnectWebsite',
  /** Website identifier */
  website_id?: (number | string),
|}

/** Disconnects all websites from the current user's Telegram account */
export type disconnectAllWebsites = {|
  _: 'disconnectAllWebsites',
|}

/**
 * Toggles the "All members are admins" setting in basic groups; requires creator privileges
 * in the group
 */
export type toggleBasicGroupAdministrators = {|
  _: 'toggleBasicGroupAdministrators',
  /** Identifier of the basic group */
  basic_group_id?: number,
  /** New value of everyone_is_administrator */
  everyone_is_administrator?: boolean,
|}

/**
 * Changes the username of a supergroup or channel, requires creator privileges in the
 * supergroup or channel
 */
export type setSupergroupUsername = {|
  _: 'setSupergroupUsername',
  /** Identifier of the supergroup or channel */
  supergroup_id?: number,
  /** New value of the username. Use an empty string to remove the username */
  username?: string,
|}

/** Changes the sticker set of a supergroup; requires appropriate rights in the supergroup */
export type setSupergroupStickerSet = {|
  _: 'setSupergroupStickerSet',
  /** Identifier of the supergroup */
  supergroup_id?: number,
  /**
   * New value of the supergroup sticker set identifier. Use 0 to remove the supergroup
   * sticker set
   */
  sticker_set_id?: (number | string),
|}

/**
 * Toggles whether all members of a supergroup can add new members; requires appropriate
 * administrator rights in the supergroup.
 */
export type toggleSupergroupInvites = {|
  _: 'toggleSupergroupInvites',
  /** Identifier of the supergroup */
  supergroup_id?: number,
  /** New value of anyone_can_invite */
  anyone_can_invite?: boolean,
|}

/**
 * Toggles sender signatures messages sent in a channel; requires appropriate administrator
 * rights in the channel.
 */
export type toggleSupergroupSignMessages = {|
  _: 'toggleSupergroupSignMessages',
  /** Identifier of the channel */
  supergroup_id?: number,
  /** New value of sign_messages */
  sign_messages?: boolean,
|}

/**
 * Toggles whether the message history of a supergroup is available to new members;
 * requires appropriate administrator rights in the supergroup.
 */
export type toggleSupergroupIsAllHistoryAvailable = {|
  _: 'toggleSupergroupIsAllHistoryAvailable',
  /** The identifier of the supergroup */
  supergroup_id?: number,
  /** The new value of is_all_history_available */
  is_all_history_available?: boolean,
|}

/**
 * Changes information about a supergroup or channel; requires appropriate administrator
 * rights
 */
export type setSupergroupDescription = {|
  _: 'setSupergroupDescription',
  /** Identifier of the supergroup or channel */
  supergroup_id?: number,
  /** New supergroup or channel description; 0-255 characters */
  description?: string,
|}

/**
 * Pins a message in a supergroup or channel; requires appropriate administrator rights
 * in the supergroup or channel
 */
export type pinSupergroupMessage = {|
  _: 'pinSupergroupMessage',
  /** Identifier of the supergroup or channel */
  supergroup_id?: number,
  /** Identifier of the new pinned message */
  message_id?: number,
  /** True, if there should be no notification about the pinned message */
  disable_notification?: boolean,
|}

/**
 * Removes the pinned message from a supergroup or channel; requires appropriate administrator
 * rights in the supergroup or channel
 */
export type unpinSupergroupMessage = {|
  _: 'unpinSupergroupMessage',
  /** Identifier of the supergroup or channel */
  supergroup_id?: number,
|}

/**
 * Reports some messages from a user in a supergroup as spam; requires administrator
 * rights in the supergroup
 */
export type reportSupergroupSpam = {|
  _: 'reportSupergroupSpam',
  /** Supergroup identifier */
  supergroup_id?: number,
  /** User identifier */
  user_id?: number,
  /** Identifiers of messages sent in the supergroup by the user. This list must be non-empty */
  message_ids?: number[],
|}

/**
 * Returns information about members or banned users in a supergroup or channel. Can
 * be used only if SupergroupFullInfo.can_get_members == true; additionally, administrator
 * privileges may be required for some filters
 */
export type getSupergroupMembers = {|
  _: 'getSupergroupMembers',
  /** Identifier of the supergroup or channel */
  supergroup_id?: number,
  /** The type of users to return. By default, supergroupMembersRecent */
  filter?: SupergroupMembersFilterOptional,
  /** Number of users to skip */
  offset?: number,
  /** The maximum number of users be returned; up to 200 */
  limit?: number,
|}

/**
 * Deletes a supergroup or channel along with all messages in the corresponding chat.
 * This will release the supergroup or channel username and remove all members; requires
 * creator privileges in the supergroup or channel. Chats with more than 1000 members
 * can't be deleted using this method
 */
export type deleteSupergroup = {|
  _: 'deleteSupergroup',
  /** Identifier of the supergroup or channel */
  supergroup_id?: number,
|}

/** Closes a secret chat, effectively transfering its state to secretChatStateClosed */
export type closeSecretChat = {|
  _: 'closeSecretChat',
  /** Secret chat identifier */
  secret_chat_id?: number,
|}

/**
 * Returns a list of service actions taken by chat members and administrators in the
 * last 48 hours. Available only in supergroups and channels. Requires administrator
 * rights. Returns results in reverse chronological order (i. e., in order of decreasing
 * event_id)
 */
export type getChatEventLog = {|
  _: 'getChatEventLog',
  /** Chat identifier */
  chat_id?: number,
  /** Search query by which to filter events */
  query?: string,
  /**
   * Identifier of an event from which to return results. Use 0 to get results from the
   * latest events
   */
  from_event_id?: (number | string),
  /** Maximum number of events to return; up to 100 */
  limit?: number,
  /** The types of events to return. By default, all types will be returned */
  filters?: chatEventLogFiltersOptional,
  /**
   * User identifiers by which to filter events. By default, events relating to all users
   * will be returned
   */
  user_ids?: number[],
|}

/**
 * Returns an invoice payment form. This method should be called when the user presses
 * inlineKeyboardButtonBuy
 */
export type getPaymentForm = {|
  _: 'getPaymentForm',
  /** Chat identifier of the Invoice message */
  chat_id?: number,
  /** Message identifier */
  message_id?: number,
|}

/**
 * Validates the order information provided by a user and returns the available shipping
 * options for a flexible invoice
 */
export type validateOrderInfo = {|
  _: 'validateOrderInfo',
  /** Chat identifier of the Invoice message */
  chat_id?: number,
  /** Message identifier */
  message_id?: number,
  /** The order information, provided by the user */
  order_info?: orderInfoOptional,
  /** True, if the order information can be saved */
  allow_save?: boolean,
|}

/** Sends a filled-out payment form to the bot for final verification */
export type sendPaymentForm = {|
  _: 'sendPaymentForm',
  /** Chat identifier of the Invoice message */
  chat_id?: number,
  /** Message identifier */
  message_id?: number,
  /** Identifier returned by ValidateOrderInfo, or an empty string */
  order_info_id?: string,
  /** Identifier of a chosen shipping option, if applicable */
  shipping_option_id?: string,
  /** The credentials chosen by user for payment */
  credentials?: InputCredentialsOptional,
|}

/** Returns information about a successful payment */
export type getPaymentReceipt = {|
  _: 'getPaymentReceipt',
  /** Chat identifier of the PaymentSuccessful message */
  chat_id?: number,
  /** Message identifier */
  message_id?: number,
|}

/** Returns saved order info, if any */
export type getSavedOrderInfo = {|
  _: 'getSavedOrderInfo',
|}

/** Deletes saved order info */
export type deleteSavedOrderInfo = {|
  _: 'deleteSavedOrderInfo',
|}

/** Deletes saved credentials for all payment provider bots */
export type deleteSavedCredentials = {|
  _: 'deleteSavedCredentials',
|}

/** Returns a user that can be contacted to get support */
export type getSupportUser = {|
  _: 'getSupportUser',
|}

/** Returns background wallpapers */
export type getWallpapers = {|
  _: 'getWallpapers',
|}

/**
 * Returns information about the current localization target. This is an offline request
 * if only_local is true
 */
export type getLocalizationTargetInfo = {|
  _: 'getLocalizationTargetInfo',
  /** If true, returns only locally available information without sending network requests */
  only_local?: boolean,
|}

/**
 * Returns strings from a language pack in the current localization target by their
 * keys
 */
export type getLanguagePackStrings = {|
  _: 'getLanguagePackStrings',
  /** Language pack identifier of the strings to be returned */
  language_pack_id?: string,
  /**
   * Language pack keys of the strings to be returned; leave empty to request all available
   * strings
   */
  keys?: string[],
|}

/** Adds or changes a custom language pack to the current localization target */
export type setCustomLanguagePack = {|
  _: 'setCustomLanguagePack',
  /**
   * Information about the language pack. Language pack ID must start with 'X', consist
   * only of English letters, digits and hyphens, and must not exceed 64 characters
   */
  info?: languagePackInfoOptional,
  /** Strings of the new language pack */
  strings?: languagePackStringOptional[],
|}

/** Edits information about a custom language pack in the current localization target */
export type editCustomLanguagePackInfo = {|
  _: 'editCustomLanguagePackInfo',
  /** New information about the custom language pack */
  info?: languagePackInfoOptional,
|}

/** Adds, edits or deletes a string in a custom language pack */
export type setCustomLanguagePackString = {|
  _: 'setCustomLanguagePackString',
  /**
   * Identifier of a previously added custom language pack in the current localization
   * target
   */
  language_pack_id?: string,
  /** New language pack string */
  new_string?: languagePackStringOptional,
|}

/**
 * Deletes all information about a language pack in the current localization target.
 * The language pack that is currently in use can't be deleted
 */
export type deleteLanguagePack = {|
  _: 'deleteLanguagePack',
  /** Identifier of the language pack to delete */
  language_pack_id?: string,
|}

/** Registers the currently used device for receiving push notifications */
export type registerDevice = {|
  _: 'registerDevice',
  /** Device token */
  device_token?: DeviceTokenOptional,
  /** List of at most 100 user identifiers of other users currently using the client */
  other_user_ids?: number[],
|}

/** Returns t.me URLs recently visited by a newly registered user */
export type getRecentlyVisitedTMeUrls = {|
  _: 'getRecentlyVisitedTMeUrls',
  /** Google Play referrer to identify the user */
  referrer?: string,
|}

/** Changes user privacy settings */
export type setUserPrivacySettingRules = {|
  _: 'setUserPrivacySettingRules',
  /** The privacy setting */
  setting?: UserPrivacySettingOptional,
  /** The new privacy rules */
  rules?: userPrivacySettingRulesOptional,
|}

/** Returns the current privacy settings */
export type getUserPrivacySettingRules = {|
  _: 'getUserPrivacySettingRules',
  /** The privacy setting */
  setting?: UserPrivacySettingOptional,
|}

/**
 * Returns the value of an option by its name. (Check the list of available options
 * on https://core.telegram.org/tdlib/options.) Can be called before authorization
 */
export type getOption = {|
  _: 'getOption',
  /** The name of the option */
  name?: string,
|}

/**
 * Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.)
 * Only writable options can be set. Can be called before authorization
 */
export type setOption = {|
  _: 'setOption',
  /** The name of the option */
  name?: string,
  /** The new value of the option */
  value?: OptionValueOptional,
|}

/**
 * Changes the period of inactivity after which the account of the current user will
 * automatically be deleted
 */
export type setAccountTtl = {|
  _: 'setAccountTtl',
  /** New account TTL */
  ttl?: accountTtlOptional,
|}

/**
 * Returns the period of inactivity after which the account of the current user will
 * automatically be deleted
 */
export type getAccountTtl = {|
  _: 'getAccountTtl',
|}

/**
 * Deletes the account of the current user, deleting all information associated with
 * the user from the server. The phone number of the account can be used to create a
 * new account. Can be called before authorization when the current authorization state
 * is authorizationStateWaitPassword
 */
export type deleteAccount = {|
  _: 'deleteAccount',
  /** The reason why the account was deleted; optional */
  reason?: string,
|}

/** Returns information on whether the current chat can be reported as spam */
export type getChatReportSpamState = {|
  _: 'getChatReportSpamState',
  /** Chat identifier */
  chat_id?: number,
|}

/**
 * Used to let the server know whether a chat is spam or not. Can be used only if ChatReportSpamState.can_report_spam
 * is true. After this request, ChatReportSpamState.can_report_spam becomes false forever
 */
export type changeChatReportSpamState = {|
  _: 'changeChatReportSpamState',
  /** Chat identifier */
  chat_id?: number,
  /** If true, the chat will be reported as spam; otherwise it will be marked as not spam */
  is_spam_chat?: boolean,
|}

/**
 * Reports a chat to the Telegram moderators. Supported only for supergroups, channels,
 * or private chats with bots, since other chats can't be checked by moderators
 */
export type reportChat = {|
  _: 'reportChat',
  /** Chat identifier */
  chat_id?: number,
  /** The reason for reporting the chat */
  reason?: ChatReportReasonOptional,
  /** Identifiers of reported messages, if any */
  message_ids?: number[],
|}

/** Returns storage usage statistics */
export type getStorageStatistics = {|
  _: 'getStorageStatistics',
  /**
   * Maximum number of chats with the largest storage usage for which separate statistics
   * should be returned. All other chats will be grouped in entries with chat_id == 0.
   * If the chat info database is not used, the chat_limit is ignored and is always set
   * to 0
   */
  chat_limit?: number,
|}

/** Quickly returns approximate storage usage statistics */
export type getStorageStatisticsFast = {|
  _: 'getStorageStatisticsFast',
|}

/**
 * Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics.
 * Secret thumbnails can't be deleted
 */
export type optimizeStorage = {|
  _: 'optimizeStorage',
  /** Limit on the total size of files after deletion. Pass -1 to use the default limit */
  size?: number,
  /**
   * Limit on the time that has passed since the last time a file was accessed (or creation
   * time for some filesystems). Pass -1 to use the default limit
   */
  ttl?: number,
  /** Limit on the total count of files after deletion. Pass -1 to use the default limit */
  count?: number,
  /**
   * The amount of time after the creation of a file during which it can't be deleted,
   * in seconds. Pass -1 to use the default value
   */
  immunity_delay?: number,
  /**
   * If not empty, only files with the given type(s) are considered. By default, all types
   * except thumbnails, profile photos, stickers and wallpapers are deleted
   */
  file_types?: FileTypeOptional[],
  /**
   * If not empty, only files from the given chats are considered. Use 0 as chat identifier
   * to delete files not belonging to any chat (e.g., profile photos)
   */
  chat_ids?: number[],
  /**
   * If not empty, files from the given chats are excluded. Use 0 as chat identifier to
   * exclude all files not belonging to any chat (e.g., profile photos)
   */
  exclude_chat_ids?: number[],
  /** Same as in getStorageStatistics. Affects only returned statistics */
  chat_limit?: number,
|}

/**
 * Sets the current network type. Can be called before authorization. Calling this method
 * forces all network connections to reopen, mitigating the delay in switching between
 * different networks, so it should be called whenever the network is changed, even
 * if the network type remains the same. Network type is used to check whether the library
 * can use the network at all and also for collecting detailed network data usage statistics
 */
export type setNetworkType = {|
  _: 'setNetworkType',
  /** The new network type. By default, networkTypeOther */
  type?: NetworkTypeOptional,
|}

/** Returns network data usage statistics. Can be called before authorization */
export type getNetworkStatistics = {|
  _: 'getNetworkStatistics',
  /** If true, returns only data for the current library launch */
  only_current?: boolean,
|}

/** Adds the specified data to data usage statistics. Can be called before authorization */
export type addNetworkStatistics = {|
  _: 'addNetworkStatistics',
  /** The network statistics entry with the data to be added to statistics */
  entry?: NetworkStatisticsEntryOptional,
|}

/** Resets all network data usage statistics to zero. Can be called before authorization */
export type resetNetworkStatistics = {|
  _: 'resetNetworkStatistics',
|}

/** Returns one of the available Telegram Passport elements */
export type getPassportElement = {|
  _: 'getPassportElement',
  /** Telegram Passport element type */
  type?: PassportElementTypeOptional,
  /** Password of the current user */
  password?: string,
|}

/** Returns all available Telegram Passport elements */
export type getAllPassportElements = {|
  _: 'getAllPassportElements',
  /** Password of the current user */
  password?: string,
|}

/**
 * Adds an element to the user's Telegram Passport. May return an error with a message
 * "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number
 * or the chosen email address must be verified first
 */
export type setPassportElement = {|
  _: 'setPassportElement',
  /** Input Telegram Passport element */
  element?: InputPassportElementOptional,
  /** Password of the current user */
  password?: string,
|}

/** Deletes a Telegram Passport element */
export type deletePassportElement = {|
  _: 'deletePassportElement',
  /** Element type */
  type?: PassportElementTypeOptional,
|}

/**
 * Informs the user that some of the elements in their Telegram Passport contain errors;
 * for bots only. The user will not be able to resend the elements, until the errors
 * are fixed
 */
export type setPassportElementErrors = {|
  _: 'setPassportElementErrors',
  /** User identifier */
  user_id?: number,
  /** The errors */
  errors?: inputPassportElementErrorOptional[],
|}

/**
 * Returns an IETF language tag of the language preferred in the country, which should
 * be used to fill native fields in Telegram Passport personal details. Returns a 404
 * error if unknown
 */
export type getPreferredCountryLanguage = {|
  _: 'getPreferredCountryLanguage',
  /** A two-letter ISO 3166-1 alpha-2 country code */
  country_code?: string,
|}

/** Sends a code to verify a phone number to be added to a user's Telegram Passport */
export type sendPhoneNumberVerificationCode = {|
  _: 'sendPhoneNumberVerificationCode',
  /** The phone number of the user, in international format */
  phone_number?: string,
  /**
   * Pass true if the authentication code may be sent via flash call to the specified
   * phone number
   */
  allow_flash_call?: boolean,
  /**
   * Pass true if the phone number is used on the current device. Ignored if allow_flash_call
   * is false
   */
  is_current_phone_number?: boolean,
|}

/** Re-sends the code to verify a phone number to be added to a user's Telegram Passport */
export type resendPhoneNumberVerificationCode = {|
  _: 'resendPhoneNumberVerificationCode',
|}

/** Checks the phone number verification code for Telegram Passport */
export type checkPhoneNumberVerificationCode = {|
  _: 'checkPhoneNumberVerificationCode',
  /** Verification code */
  code?: string,
|}

/** Sends a code to verify an email address to be added to a user's Telegram Passport */
export type sendEmailAddressVerificationCode = {|
  _: 'sendEmailAddressVerificationCode',
  /** Email address */
  email_address?: string,
|}

/** Re-sends the code to verify an email address to be added to a user's Telegram Passport */
export type resendEmailAddressVerificationCode = {|
  _: 'resendEmailAddressVerificationCode',
|}

/** Checks the email address verification code for Telegram Passport */
export type checkEmailAddressVerificationCode = {|
  _: 'checkEmailAddressVerificationCode',
  /** Verification code */
  code?: string,
|}

/** Returns a Telegram Passport authorization form for sharing data with a service */
export type getPassportAuthorizationForm = {|
  _: 'getPassportAuthorizationForm',
  /** User identifier of the service's bot */
  bot_user_id?: number,
  /** Telegram Passport element types requested by the service */
  scope?: string,
  /** Service's public_key */
  public_key?: string,
  /** Authorization form nonce provided by the service */
  nonce?: string,
  /** Password of the current user */
  password?: string,
|}

/** Sends a Telegram Passport authorization form, effectively sharing data with the service */
export type sendPassportAuthorizationForm = {|
  _: 'sendPassportAuthorizationForm',
  /** Authorization form identifier */
  autorization_form_id?: number,
  /**
   * Types of Telegram Passport elements chosen by user to complete the authorization
   * form
   */
  types?: PassportElementTypeOptional[],
|}

/**
 * Sends phone number confirmation code. Should be called when user presses "https://t.me/confirmphone?phone=*******&hash=**********"
 * or "tg://confirmphone?phone=*******&hash=**********" link
 */
export type sendPhoneNumberConfirmationCode = {|
  _: 'sendPhoneNumberConfirmationCode',
  /** Value of the "hash" parameter from the link */
  hash?: string,
  /** Value of the "phone" parameter from the link */
  phone_number?: string,
  /**
   * Pass true if the authentication code may be sent via flash call to the specified
   * phone number
   */
  allow_flash_call?: boolean,
  /**
   * Pass true if the phone number is used on the current device. Ignored if allow_flash_call
   * is false
   */
  is_current_phone_number?: boolean,
|}

/** Resends phone number confirmation code */
export type resendPhoneNumberConfirmationCode = {|
  _: 'resendPhoneNumberConfirmationCode',
|}

/** Checks phone number confirmation code */
export type checkPhoneNumberConfirmationCode = {|
  _: 'checkPhoneNumberConfirmationCode',
  /** The phone number confirmation code */
  code?: string,
|}

/**
 * Informs the server about the number of pending bot updates if they haven't been processed
 * for a long time; for bots only
 */
export type setBotUpdatesStatus = {|
  _: 'setBotUpdatesStatus',
  /** The number of pending updates */
  pending_update_count?: number,
  /** The last error message */
  error_message?: string,
|}

/** Uploads a PNG image with a sticker; for bots only; returns the uploaded file */
export type uploadStickerFile = {|
  _: 'uploadStickerFile',
  /** Sticker file owner */
  user_id?: number,
  /** PNG image with the sticker; must be up to 512 kB in size and fit in 512x512 square */
  png_sticker?: InputFileOptional,
|}

/** Creates a new sticker set; for bots only. Returns the newly created sticker set */
export type createNewStickerSet = {|
  _: 'createNewStickerSet',
  /** Sticker set owner */
  user_id?: number,
  /** Sticker set title; 1-64 characters */
  title?: string,
  /**
   * Sticker set name. Can contain only English letters, digits and underscores. Must
   * end with *"_by_<bot username>"* (*<bot_username>* is case insensitive); 1-64 characters
   */
  name?: string,
  /** True, if stickers are masks */
  is_masks?: boolean,
  /** List of stickers to be added to the set */
  stickers?: inputStickerOptional[],
|}

/** Adds a new sticker to a set; for bots only. Returns the sticker set */
export type addStickerToSet = {|
  _: 'addStickerToSet',
  /** Sticker set owner */
  user_id?: number,
  /** Sticker set name */
  name?: string,
  /** Sticker to add to the set */
  sticker?: inputStickerOptional,
|}

/**
 * Changes the position of a sticker in the set to which it belongs; for bots only.
 * The sticker set must have been created by the bot
 */
export type setStickerPositionInSet = {|
  _: 'setStickerPositionInSet',
  /** Sticker */
  sticker?: InputFileOptional,
  /** New position of the sticker in the set, zero-based */
  position?: number,
|}

/**
 * Removes a sticker from the set to which it belongs; for bots only. The sticker set
 * must have been created by the bot
 */
export type removeStickerFromSet = {|
  _: 'removeStickerFromSet',
  /** Sticker */
  sticker?: InputFileOptional,
|}

/**
 * Returns information about a file with a map thumbnail in PNG format. Only map thumbnail
 * files with size less than 1MB can be downloaded
 */
export type getMapThumbnailFile = {|
  _: 'getMapThumbnailFile',
  /** Location of the map center */
  location?: locationOptional,
  /** Map zoom level; 13-20 */
  zoom?: number,
  /** Map width in pixels before applying scale; 16-1024 */
  width?: number,
  /** Map height in pixels before applying scale; 16-1024 */
  height?: number,
  /** Map scale; 1-3 */
  scale?: number,
  /** Identifier of a chat, in which the thumbnail will be shown. Use 0 if unknown */
  chat_id?: number,
|}

/** Accepts Telegram terms of services */
export type acceptTermsOfService = {|
  _: 'acceptTermsOfService',
  /** Terms of service identifier */
  terms_of_service_id?: string,
|}

/** Sends a custom request; for bots only */
export type sendCustomRequest = {|
  _: 'sendCustomRequest',
  /** The method name */
  method?: string,
  /** JSON-serialized method parameters */
  parameters?: string,
|}

/** Answers a custom query; for bots only */
export type answerCustomQuery = {|
  _: 'answerCustomQuery',
  /** Identifier of a custom query */
  custom_query_id?: (number | string),
  /** JSON-serialized answer to the query */
  data?: string,
|}

/**
 * Succeeds after a specified amount of time has passed. Can be called before authorization.
 * Can be called before initialization
 */
export type setAlarm = {|
  _: 'setAlarm',
  /** Number of seconds before the function returns */
  seconds?: number,
|}

/**
 * Uses current user IP to found his country. Returns two-letter ISO 3166-1 alpha-2
 * country code. Can be called before authorization
 */
export type getCountryCode = {|
  _: 'getCountryCode',
|}

/**
 * Returns the default text for invitation messages to be used as a placeholder when
 * the current user invites friends to Telegram
 */
export type getInviteText = {|
  _: 'getInviteText',
|}

/**
 * Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature"
 * or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links.
 * Can be called before authorization
 */
export type getDeepLinkInfo = {|
  _: 'getDeepLinkInfo',
  /** The link */
  link?: string,
|}

/** Adds a proxy server for network requests. Can be called before authorization */
export type addProxy = {|
  _: 'addProxy',
  /** Proxy server IP address */
  server?: string,
  /** Proxy server port */
  port?: number,
  /** True, if the proxy should be enabled */
  enable?: boolean,
  /** Proxy type */
  type?: ProxyTypeOptional,
|}

/** Edits an existing proxy server for network requests. Can be called before authorization */
export type editProxy = {|
  _: 'editProxy',
  /** Proxy identifier */
  proxy_id?: number,
  /** Proxy server IP address */
  server?: string,
  /** Proxy server port */
  port?: number,
  /** True, if the proxy should be enabled */
  enable?: boolean,
  /** Proxy type */
  type?: ProxyTypeOptional,
|}

/** Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization */
export type enableProxy = {|
  _: 'enableProxy',
  /** Proxy identifier */
  proxy_id?: number,
|}

/** Disables the currently enabled proxy. Can be called before authorization */
export type disableProxy = {|
  _: 'disableProxy',
|}

/** Removes a proxy server. Can be called before authorization */
export type removeProxy = {|
  _: 'removeProxy',
  /** Proxy identifier */
  proxy_id?: number,
|}

/** Returns list of proxies that are currently set up. Can be called before authorization */
export type getProxies = {|
  _: 'getProxies',
|}

/**
 * Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5
 * and MTProto proxies. Can be called before authorization
 */
export type getProxyLink = {|
  _: 'getProxyLink',
  /** Proxy identifier */
  proxy_id?: number,
|}

/**
 * Computes time needed to receive a response from a Telegram server through a proxy.
 * Can be called before authorization
 */
export type pingProxy = {|
  _: 'pingProxy',
  /** Proxy identifier. Use 0 to ping a Telegram server without a proxy */
  proxy_id?: number,
|}

/** Does nothing; for testing only */
export type testCallEmpty = {|
  _: 'testCallEmpty',
|}

/** Returns the received string; for testing only */
export type testCallString = {|
  _: 'testCallString',
  /** String to return */
  x?: string,
|}

/** Returns the received bytes; for testing only */
export type testCallBytes = {|
  _: 'testCallBytes',
  /** Bytes to return */
  x?: string,
|}

/** Returns the received vector of numbers; for testing only */
export type testCallVectorInt = {|
  _: 'testCallVectorInt',
  /** Vector of numbers to return */
  x?: number[],
|}

/** Returns the received vector of objects containing a number; for testing only */
export type testCallVectorIntObject = {|
  _: 'testCallVectorIntObject',
  /** Vector of objects to return */
  x?: testIntOptional[],
|}

/** For testing only request. Returns the received vector of strings; for testing only */
export type testCallVectorString = {|
  _: 'testCallVectorString',
  /** Vector of strings to return */
  x?: string[],
|}

/** Returns the received vector of objects containing a string; for testing only */
export type testCallVectorStringObject = {|
  _: 'testCallVectorStringObject',
  /** Vector of objects to return */
  x?: testStringOptional[],
|}

/** Returns the squared received number; for testing only */
export type testSquareInt = {|
  _: 'testSquareInt',
  /** Number to square */
  x?: number,
|}

/** Sends a simple network request to the Telegram servers; for testing only */
export type testNetwork = {|
  _: 'testNetwork',
|}

/** Forces an updates.getDifference call to the Telegram servers; for testing only */
export type testGetDifference = {|
  _: 'testGetDifference',
|}

/** Does nothing and ensures that the Update object is used; for testing only */
export type testUseUpdate = {|
  _: 'testUseUpdate',
|}

/** Does nothing and ensures that the Error object is used; for testing only */
export type testUseError = {|
  _: 'testUseError',
|}

// ----

export type Error =
  | error

export type ErrorOptional =
  | errorOptional

export type Ok =
  | ok

export type OkOptional =
  | okOptional

export type TdlibParameters =
  | tdlibParameters

export type TdlibParametersOptional =
  | tdlibParametersOptional

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
export type AuthenticationCodeTypeOptional =
  | authenticationCodeTypeTelegramMessageOptional
  | authenticationCodeTypeSmsOptional
  | authenticationCodeTypeCallOptional
  | authenticationCodeTypeFlashCallOptional

export type AuthenticationCodeInfo =
  | authenticationCodeInfo

export type AuthenticationCodeInfoOptional =
  | authenticationCodeInfoOptional

export type EmailAddressAuthenticationCodeInfo =
  | emailAddressAuthenticationCodeInfo

export type EmailAddressAuthenticationCodeInfoOptional =
  | emailAddressAuthenticationCodeInfoOptional

export type TextEntity =
  | textEntity

export type TextEntityOptional =
  | textEntityOptional

export type TextEntities =
  | textEntities

export type TextEntitiesOptional =
  | textEntitiesOptional

export type FormattedText =
  | formattedText

export type FormattedTextOptional =
  | formattedTextOptional

export type TermsOfService =
  | termsOfService

export type TermsOfServiceOptional =
  | termsOfServiceOptional

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
export type AuthorizationStateOptional =
  | authorizationStateWaitTdlibParametersOptional
  | authorizationStateWaitEncryptionKeyOptional
  | authorizationStateWaitPhoneNumberOptional
  | authorizationStateWaitCodeOptional
  | authorizationStateWaitPasswordOptional
  | authorizationStateReadyOptional
  | authorizationStateLoggingOutOptional
  | authorizationStateClosingOptional
  | authorizationStateClosedOptional

export type PasswordState =
  | passwordState

export type PasswordStateOptional =
  | passwordStateOptional

export type RecoveryEmailAddress =
  | recoveryEmailAddress

export type RecoveryEmailAddressOptional =
  | recoveryEmailAddressOptional

export type TemporaryPasswordState =
  | temporaryPasswordState

export type TemporaryPasswordStateOptional =
  | temporaryPasswordStateOptional

export type LocalFile =
  | localFile

export type LocalFileOptional =
  | localFileOptional

export type RemoteFile =
  | remoteFile

export type RemoteFileOptional =
  | remoteFileOptional

export type File =
  | file

export type FileOptional =
  | fileOptional

/** Points to a file */
export type InputFile =
  | inputFileId
  | inputFileRemote
  | inputFileLocal
  | inputFileGenerated

/** Points to a file */
export type InputFileOptional =
  | inputFileIdOptional
  | inputFileRemoteOptional
  | inputFileLocalOptional
  | inputFileGeneratedOptional

export type PhotoSize =
  | photoSize

export type PhotoSizeOptional =
  | photoSizeOptional

/** Part of the face, relative to which a mask should be placed */
export type MaskPoint =
  | maskPointForehead
  | maskPointEyes
  | maskPointMouth
  | maskPointChin

/** Part of the face, relative to which a mask should be placed */
export type MaskPointOptional =
  | maskPointForeheadOptional
  | maskPointEyesOptional
  | maskPointMouthOptional
  | maskPointChinOptional

export type MaskPosition =
  | maskPosition

export type MaskPositionOptional =
  | maskPositionOptional

export type Animation =
  | animation

export type AnimationOptional =
  | animationOptional

export type Audio =
  | audio

export type AudioOptional =
  | audioOptional

export type Document =
  | document

export type DocumentOptional =
  | documentOptional

export type Photo =
  | photo

export type PhotoOptional =
  | photoOptional

export type Sticker =
  | sticker

export type StickerOptional =
  | stickerOptional

export type Video =
  | video

export type VideoOptional =
  | videoOptional

export type VideoNote =
  | videoNote

export type VideoNoteOptional =
  | videoNoteOptional

export type VoiceNote =
  | voiceNote

export type VoiceNoteOptional =
  | voiceNoteOptional

export type Contact =
  | contact

export type ContactOptional =
  | contactOptional

export type Location =
  | location

export type LocationOptional =
  | locationOptional

export type Venue =
  | venue

export type VenueOptional =
  | venueOptional

export type Game =
  | game

export type GameOptional =
  | gameOptional

export type ProfilePhoto =
  | profilePhoto

export type ProfilePhotoOptional =
  | profilePhotoOptional

export type ChatPhoto =
  | chatPhoto

export type ChatPhotoOptional =
  | chatPhotoOptional

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
export type LinkStateOptional =
  | linkStateNoneOptional
  | linkStateKnowsPhoneNumberOptional
  | linkStateIsContactOptional

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
export type UserTypeOptional =
  | userTypeRegularOptional
  | userTypeDeletedOptional
  | userTypeBotOptional
  | userTypeUnknownOptional

export type BotCommand =
  | botCommand

export type BotCommandOptional =
  | botCommandOptional

export type BotInfo =
  | botInfo

export type BotInfoOptional =
  | botInfoOptional

export type User =
  | user

export type UserOptional =
  | userOptional

export type UserFullInfo =
  | userFullInfo

export type UserFullInfoOptional =
  | userFullInfoOptional

export type UserProfilePhotos =
  | userProfilePhotos

export type UserProfilePhotosOptional =
  | userProfilePhotosOptional

export type Users =
  | users

export type UsersOptional =
  | usersOptional

/** Provides information about the status of a member in a chat */
export type ChatMemberStatus =
  | chatMemberStatusCreator
  | chatMemberStatusAdministrator
  | chatMemberStatusMember
  | chatMemberStatusRestricted
  | chatMemberStatusLeft
  | chatMemberStatusBanned

/** Provides information about the status of a member in a chat */
export type ChatMemberStatusOptional =
  | chatMemberStatusCreatorOptional
  | chatMemberStatusAdministratorOptional
  | chatMemberStatusMemberOptional
  | chatMemberStatusRestrictedOptional
  | chatMemberStatusLeftOptional
  | chatMemberStatusBannedOptional

export type ChatMember =
  | chatMember

export type ChatMemberOptional =
  | chatMemberOptional

export type ChatMembers =
  | chatMembers

export type ChatMembersOptional =
  | chatMembersOptional

/** Specifies the kind of chat members to return in searchChatMembers */
export type ChatMembersFilter =
  | chatMembersFilterAdministrators
  | chatMembersFilterMembers
  | chatMembersFilterRestricted
  | chatMembersFilterBanned
  | chatMembersFilterBots

/** Specifies the kind of chat members to return in searchChatMembers */
export type ChatMembersFilterOptional =
  | chatMembersFilterAdministratorsOptional
  | chatMembersFilterMembersOptional
  | chatMembersFilterRestrictedOptional
  | chatMembersFilterBannedOptional
  | chatMembersFilterBotsOptional

/** Specifies the kind of chat members to return in getSupergroupMembers */
export type SupergroupMembersFilter =
  | supergroupMembersFilterRecent
  | supergroupMembersFilterAdministrators
  | supergroupMembersFilterSearch
  | supergroupMembersFilterRestricted
  | supergroupMembersFilterBanned
  | supergroupMembersFilterBots

/** Specifies the kind of chat members to return in getSupergroupMembers */
export type SupergroupMembersFilterOptional =
  | supergroupMembersFilterRecentOptional
  | supergroupMembersFilterAdministratorsOptional
  | supergroupMembersFilterSearchOptional
  | supergroupMembersFilterRestrictedOptional
  | supergroupMembersFilterBannedOptional
  | supergroupMembersFilterBotsOptional

export type BasicGroup =
  | basicGroup

export type BasicGroupOptional =
  | basicGroupOptional

export type BasicGroupFullInfo =
  | basicGroupFullInfo

export type BasicGroupFullInfoOptional =
  | basicGroupFullInfoOptional

export type Supergroup =
  | supergroup

export type SupergroupOptional =
  | supergroupOptional

export type SupergroupFullInfo =
  | supergroupFullInfo

export type SupergroupFullInfoOptional =
  | supergroupFullInfoOptional

/** Describes the current secret chat state */
export type SecretChatState =
  | secretChatStatePending
  | secretChatStateReady
  | secretChatStateClosed

/** Describes the current secret chat state */
export type SecretChatStateOptional =
  | secretChatStatePendingOptional
  | secretChatStateReadyOptional
  | secretChatStateClosedOptional

export type SecretChat =
  | secretChat

export type SecretChatOptional =
  | secretChatOptional

/** Contains information about the initial sender of a forwarded message */
export type MessageForwardInfo =
  | messageForwardedFromUser
  | messageForwardedPost

/** Contains information about the initial sender of a forwarded message */
export type MessageForwardInfoOptional =
  | messageForwardedFromUserOptional
  | messageForwardedPostOptional

/** Contains information about the sending state of the message */
export type MessageSendingState =
  | messageSendingStatePending
  | messageSendingStateFailed

/** Contains information about the sending state of the message */
export type MessageSendingStateOptional =
  | messageSendingStatePendingOptional
  | messageSendingStateFailedOptional

export type Message =
  | message

export type MessageOptional =
  | messageOptional

export type Messages =
  | messages

export type MessagesOptional =
  | messagesOptional

export type FoundMessages =
  | foundMessages

export type FoundMessagesOptional =
  | foundMessagesOptional

/** Describes the types of chats to which notification settings are applied */
export type NotificationSettingsScope =
  | notificationSettingsScopePrivateChats
  | notificationSettingsScopeGroupChats

/** Describes the types of chats to which notification settings are applied */
export type NotificationSettingsScopeOptional =
  | notificationSettingsScopePrivateChatsOptional
  | notificationSettingsScopeGroupChatsOptional

export type ChatNotificationSettings =
  | chatNotificationSettings

export type ChatNotificationSettingsOptional =
  | chatNotificationSettingsOptional

export type ScopeNotificationSettings =
  | scopeNotificationSettings

export type ScopeNotificationSettingsOptional =
  | scopeNotificationSettingsOptional

export type DraftMessage =
  | draftMessage

export type DraftMessageOptional =
  | draftMessageOptional

/** Describes the type of a chat */
export type ChatType =
  | chatTypePrivate
  | chatTypeBasicGroup
  | chatTypeSupergroup
  | chatTypeSecret

/** Describes the type of a chat */
export type ChatTypeOptional =
  | chatTypePrivateOptional
  | chatTypeBasicGroupOptional
  | chatTypeSupergroupOptional
  | chatTypeSecretOptional

export type Chat =
  | chat

export type ChatOptional =
  | chatOptional

export type Chats =
  | chats

export type ChatsOptional =
  | chatsOptional

export type ChatInviteLink =
  | chatInviteLink

export type ChatInviteLinkOptional =
  | chatInviteLinkOptional

export type ChatInviteLinkInfo =
  | chatInviteLinkInfo

export type ChatInviteLinkInfoOptional =
  | chatInviteLinkInfoOptional

/** Describes a keyboard button type */
export type KeyboardButtonType =
  | keyboardButtonTypeText
  | keyboardButtonTypeRequestPhoneNumber
  | keyboardButtonTypeRequestLocation

/** Describes a keyboard button type */
export type KeyboardButtonTypeOptional =
  | keyboardButtonTypeTextOptional
  | keyboardButtonTypeRequestPhoneNumberOptional
  | keyboardButtonTypeRequestLocationOptional

export type KeyboardButton =
  | keyboardButton

export type KeyboardButtonOptional =
  | keyboardButtonOptional

/** Describes the type of an inline keyboard button */
export type InlineKeyboardButtonType =
  | inlineKeyboardButtonTypeUrl
  | inlineKeyboardButtonTypeCallback
  | inlineKeyboardButtonTypeCallbackGame
  | inlineKeyboardButtonTypeSwitchInline
  | inlineKeyboardButtonTypeBuy

/** Describes the type of an inline keyboard button */
export type InlineKeyboardButtonTypeOptional =
  | inlineKeyboardButtonTypeUrlOptional
  | inlineKeyboardButtonTypeCallbackOptional
  | inlineKeyboardButtonTypeCallbackGameOptional
  | inlineKeyboardButtonTypeSwitchInlineOptional
  | inlineKeyboardButtonTypeBuyOptional

export type InlineKeyboardButton =
  | inlineKeyboardButton

export type InlineKeyboardButtonOptional =
  | inlineKeyboardButtonOptional

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
export type ReplyMarkupOptional =
  | replyMarkupRemoveKeyboardOptional
  | replyMarkupForceReplyOptional
  | replyMarkupShowKeyboardOptional
  | replyMarkupInlineKeyboardOptional

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
  | richTexts

/** Describes a text object inside an instant-view web page */
export type RichTextOptional =
  | richTextPlainOptional
  | richTextBoldOptional
  | richTextItalicOptional
  | richTextUnderlineOptional
  | richTextStrikethroughOptional
  | richTextFixedOptional
  | richTextUrlOptional
  | richTextEmailAddressOptional
  | richTextsOptional

/** Describes a block of an instant view web page */
export type PageBlock =
  | pageBlockTitle
  | pageBlockSubtitle
  | pageBlockAuthorDate
  | pageBlockHeader
  | pageBlockSubheader
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

/** Describes a block of an instant view web page */
export type PageBlockOptional =
  | pageBlockTitleOptional
  | pageBlockSubtitleOptional
  | pageBlockAuthorDateOptional
  | pageBlockHeaderOptional
  | pageBlockSubheaderOptional
  | pageBlockParagraphOptional
  | pageBlockPreformattedOptional
  | pageBlockFooterOptional
  | pageBlockDividerOptional
  | pageBlockAnchorOptional
  | pageBlockListOptional
  | pageBlockBlockQuoteOptional
  | pageBlockPullQuoteOptional
  | pageBlockAnimationOptional
  | pageBlockAudioOptional
  | pageBlockPhotoOptional
  | pageBlockVideoOptional
  | pageBlockCoverOptional
  | pageBlockEmbeddedOptional
  | pageBlockEmbeddedPostOptional
  | pageBlockCollageOptional
  | pageBlockSlideshowOptional
  | pageBlockChatLinkOptional

export type WebPageInstantView =
  | webPageInstantView

export type WebPageInstantViewOptional =
  | webPageInstantViewOptional

export type WebPage =
  | webPage

export type WebPageOptional =
  | webPageOptional

export type Address =
  | address

export type AddressOptional =
  | addressOptional

export type LabeledPricePart =
  | labeledPricePart

export type LabeledPricePartOptional =
  | labeledPricePartOptional

export type Invoice =
  | invoice

export type InvoiceOptional =
  | invoiceOptional

export type OrderInfo =
  | orderInfo

export type OrderInfoOptional =
  | orderInfoOptional

export type ShippingOption =
  | shippingOption

export type ShippingOptionOptional =
  | shippingOptionOptional

export type SavedCredentials =
  | savedCredentials

export type SavedCredentialsOptional =
  | savedCredentialsOptional

/** Contains information about the payment method chosen by the user */
export type InputCredentials =
  | inputCredentialsSaved
  | inputCredentialsNew
  | inputCredentialsAndroidPay
  | inputCredentialsApplePay

/** Contains information about the payment method chosen by the user */
export type InputCredentialsOptional =
  | inputCredentialsSavedOptional
  | inputCredentialsNewOptional
  | inputCredentialsAndroidPayOptional
  | inputCredentialsApplePayOptional

export type PaymentsProviderStripe =
  | paymentsProviderStripe

export type PaymentsProviderStripeOptional =
  | paymentsProviderStripeOptional

export type PaymentForm =
  | paymentForm

export type PaymentFormOptional =
  | paymentFormOptional

export type ValidatedOrderInfo =
  | validatedOrderInfo

export type ValidatedOrderInfoOptional =
  | validatedOrderInfoOptional

export type PaymentResult =
  | paymentResult

export type PaymentResultOptional =
  | paymentResultOptional

export type PaymentReceipt =
  | paymentReceipt

export type PaymentReceiptOptional =
  | paymentReceiptOptional

export type DatedFile =
  | datedFile

export type DatedFileOptional =
  | datedFileOptional

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
export type PassportElementTypeOptional =
  | passportElementTypePersonalDetailsOptional
  | passportElementTypePassportOptional
  | passportElementTypeDriverLicenseOptional
  | passportElementTypeIdentityCardOptional
  | passportElementTypeInternalPassportOptional
  | passportElementTypeAddressOptional
  | passportElementTypeUtilityBillOptional
  | passportElementTypeBankStatementOptional
  | passportElementTypeRentalAgreementOptional
  | passportElementTypePassportRegistrationOptional
  | passportElementTypeTemporaryRegistrationOptional
  | passportElementTypePhoneNumberOptional
  | passportElementTypeEmailAddressOptional

export type Date =
  | date

export type DateOptional =
  | dateOptional

export type PersonalDetails =
  | personalDetails

export type PersonalDetailsOptional =
  | personalDetailsOptional

export type IdentityDocument =
  | identityDocument

export type IdentityDocumentOptional =
  | identityDocumentOptional

export type InputIdentityDocument =
  | inputIdentityDocument

export type InputIdentityDocumentOptional =
  | inputIdentityDocumentOptional

export type PersonalDocument =
  | personalDocument

export type PersonalDocumentOptional =
  | personalDocumentOptional

export type InputPersonalDocument =
  | inputPersonalDocument

export type InputPersonalDocumentOptional =
  | inputPersonalDocumentOptional

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
export type PassportElementOptional =
  | passportElementPersonalDetailsOptional
  | passportElementPassportOptional
  | passportElementDriverLicenseOptional
  | passportElementIdentityCardOptional
  | passportElementInternalPassportOptional
  | passportElementAddressOptional
  | passportElementUtilityBillOptional
  | passportElementBankStatementOptional
  | passportElementRentalAgreementOptional
  | passportElementPassportRegistrationOptional
  | passportElementTemporaryRegistrationOptional
  | passportElementPhoneNumberOptional
  | passportElementEmailAddressOptional

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
export type InputPassportElementOptional =
  | inputPassportElementPersonalDetailsOptional
  | inputPassportElementPassportOptional
  | inputPassportElementDriverLicenseOptional
  | inputPassportElementIdentityCardOptional
  | inputPassportElementInternalPassportOptional
  | inputPassportElementAddressOptional
  | inputPassportElementUtilityBillOptional
  | inputPassportElementBankStatementOptional
  | inputPassportElementRentalAgreementOptional
  | inputPassportElementPassportRegistrationOptional
  | inputPassportElementTemporaryRegistrationOptional
  | inputPassportElementPhoneNumberOptional
  | inputPassportElementEmailAddressOptional

export type PassportElements =
  | passportElements

export type PassportElementsOptional =
  | passportElementsOptional

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
export type PassportElementErrorSourceOptional =
  | passportElementErrorSourceUnspecifiedOptional
  | passportElementErrorSourceDataFieldOptional
  | passportElementErrorSourceFrontSideOptional
  | passportElementErrorSourceReverseSideOptional
  | passportElementErrorSourceSelfieOptional
  | passportElementErrorSourceTranslationFileOptional
  | passportElementErrorSourceTranslationFilesOptional
  | passportElementErrorSourceFileOptional
  | passportElementErrorSourceFilesOptional

export type PassportElementError =
  | passportElementError

export type PassportElementErrorOptional =
  | passportElementErrorOptional

export type PassportSuitableElement =
  | passportSuitableElement

export type PassportSuitableElementOptional =
  | passportSuitableElementOptional

export type PassportRequiredElement =
  | passportRequiredElement

export type PassportRequiredElementOptional =
  | passportRequiredElementOptional

export type PassportAuthorizationForm =
  | passportAuthorizationForm

export type PassportAuthorizationFormOptional =
  | passportAuthorizationFormOptional

export type EncryptedCredentials =
  | encryptedCredentials

export type EncryptedCredentialsOptional =
  | encryptedCredentialsOptional

export type EncryptedPassportElement =
  | encryptedPassportElement

export type EncryptedPassportElementOptional =
  | encryptedPassportElementOptional

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
export type InputPassportElementErrorSourceOptional =
  | inputPassportElementErrorSourceUnspecifiedOptional
  | inputPassportElementErrorSourceDataFieldOptional
  | inputPassportElementErrorSourceFrontSideOptional
  | inputPassportElementErrorSourceReverseSideOptional
  | inputPassportElementErrorSourceSelfieOptional
  | inputPassportElementErrorSourceTranslationFileOptional
  | inputPassportElementErrorSourceTranslationFilesOptional
  | inputPassportElementErrorSourceFileOptional
  | inputPassportElementErrorSourceFilesOptional

export type InputPassportElementError =
  | inputPassportElementError

export type InputPassportElementErrorOptional =
  | inputPassportElementErrorOptional

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
export type MessageContentOptional =
  | messageTextOptional
  | messageAnimationOptional
  | messageAudioOptional
  | messageDocumentOptional
  | messagePhotoOptional
  | messageExpiredPhotoOptional
  | messageStickerOptional
  | messageVideoOptional
  | messageExpiredVideoOptional
  | messageVideoNoteOptional
  | messageVoiceNoteOptional
  | messageLocationOptional
  | messageVenueOptional
  | messageContactOptional
  | messageGameOptional
  | messageInvoiceOptional
  | messageCallOptional
  | messageBasicGroupChatCreateOptional
  | messageSupergroupChatCreateOptional
  | messageChatChangeTitleOptional
  | messageChatChangePhotoOptional
  | messageChatDeletePhotoOptional
  | messageChatAddMembersOptional
  | messageChatJoinByLinkOptional
  | messageChatDeleteMemberOptional
  | messageChatUpgradeToOptional
  | messageChatUpgradeFromOptional
  | messagePinMessageOptional
  | messageScreenshotTakenOptional
  | messageChatSetTtlOptional
  | messageCustomServiceActionOptional
  | messageGameScoreOptional
  | messagePaymentSuccessfulOptional
  | messagePaymentSuccessfulBotOptional
  | messageContactRegisteredOptional
  | messageWebsiteConnectedOptional
  | messagePassportDataSentOptional
  | messagePassportDataReceivedOptional
  | messageUnsupportedOptional

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
export type TextEntityTypeOptional =
  | textEntityTypeMentionOptional
  | textEntityTypeHashtagOptional
  | textEntityTypeCashtagOptional
  | textEntityTypeBotCommandOptional
  | textEntityTypeUrlOptional
  | textEntityTypeEmailAddressOptional
  | textEntityTypeBoldOptional
  | textEntityTypeItalicOptional
  | textEntityTypeCodeOptional
  | textEntityTypePreOptional
  | textEntityTypePreCodeOptional
  | textEntityTypeTextUrlOptional
  | textEntityTypeMentionNameOptional
  | textEntityTypePhoneNumberOptional

export type InputThumbnail =
  | inputThumbnail

export type InputThumbnailOptional =
  | inputThumbnailOptional

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
  | inputMessageForwarded

/** The content of a message to send */
export type InputMessageContentOptional =
  | inputMessageTextOptional
  | inputMessageAnimationOptional
  | inputMessageAudioOptional
  | inputMessageDocumentOptional
  | inputMessagePhotoOptional
  | inputMessageStickerOptional
  | inputMessageVideoOptional
  | inputMessageVideoNoteOptional
  | inputMessageVoiceNoteOptional
  | inputMessageLocationOptional
  | inputMessageVenueOptional
  | inputMessageContactOptional
  | inputMessageGameOptional
  | inputMessageInvoiceOptional
  | inputMessageForwardedOptional

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
export type SearchMessagesFilterOptional =
  | searchMessagesFilterEmptyOptional
  | searchMessagesFilterAnimationOptional
  | searchMessagesFilterAudioOptional
  | searchMessagesFilterDocumentOptional
  | searchMessagesFilterPhotoOptional
  | searchMessagesFilterVideoOptional
  | searchMessagesFilterVoiceNoteOptional
  | searchMessagesFilterPhotoAndVideoOptional
  | searchMessagesFilterUrlOptional
  | searchMessagesFilterChatPhotoOptional
  | searchMessagesFilterCallOptional
  | searchMessagesFilterMissedCallOptional
  | searchMessagesFilterVideoNoteOptional
  | searchMessagesFilterVoiceAndVideoNoteOptional
  | searchMessagesFilterMentionOptional
  | searchMessagesFilterUnreadMentionOptional

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
export type ChatActionOptional =
  | chatActionTypingOptional
  | chatActionRecordingVideoOptional
  | chatActionUploadingVideoOptional
  | chatActionRecordingVoiceNoteOptional
  | chatActionUploadingVoiceNoteOptional
  | chatActionUploadingPhotoOptional
  | chatActionUploadingDocumentOptional
  | chatActionChoosingLocationOptional
  | chatActionChoosingContactOptional
  | chatActionStartPlayingGameOptional
  | chatActionRecordingVideoNoteOptional
  | chatActionUploadingVideoNoteOptional
  | chatActionCancelOptional

/** Describes the last time the user was online */
export type UserStatus =
  | userStatusEmpty
  | userStatusOnline
  | userStatusOffline
  | userStatusRecently
  | userStatusLastWeek
  | userStatusLastMonth

/** Describes the last time the user was online */
export type UserStatusOptional =
  | userStatusEmptyOptional
  | userStatusOnlineOptional
  | userStatusOfflineOptional
  | userStatusRecentlyOptional
  | userStatusLastWeekOptional
  | userStatusLastMonthOptional

export type Stickers =
  | stickers

export type StickersOptional =
  | stickersOptional

export type StickerEmojis =
  | stickerEmojis

export type StickerEmojisOptional =
  | stickerEmojisOptional

export type StickerSet =
  | stickerSet

export type StickerSetOptional =
  | stickerSetOptional

export type StickerSetInfo =
  | stickerSetInfo

export type StickerSetInfoOptional =
  | stickerSetInfoOptional

export type StickerSets =
  | stickerSets

export type StickerSetsOptional =
  | stickerSetsOptional

/** Describes the reason why a call was discarded */
export type CallDiscardReason =
  | callDiscardReasonEmpty
  | callDiscardReasonMissed
  | callDiscardReasonDeclined
  | callDiscardReasonDisconnected
  | callDiscardReasonHungUp

/** Describes the reason why a call was discarded */
export type CallDiscardReasonOptional =
  | callDiscardReasonEmptyOptional
  | callDiscardReasonMissedOptional
  | callDiscardReasonDeclinedOptional
  | callDiscardReasonDisconnectedOptional
  | callDiscardReasonHungUpOptional

export type CallProtocol =
  | callProtocol

export type CallProtocolOptional =
  | callProtocolOptional

export type CallConnection =
  | callConnection

export type CallConnectionOptional =
  | callConnectionOptional

export type CallId =
  | callId

export type CallIdOptional =
  | callIdOptional

/** Describes the current call state */
export type CallState =
  | callStatePending
  | callStateExchangingKeys
  | callStateReady
  | callStateHangingUp
  | callStateDiscarded
  | callStateError

/** Describes the current call state */
export type CallStateOptional =
  | callStatePendingOptional
  | callStateExchangingKeysOptional
  | callStateReadyOptional
  | callStateHangingUpOptional
  | callStateDiscardedOptional
  | callStateErrorOptional

export type Call =
  | call

export type CallOptional =
  | callOptional

export type Animations =
  | animations

export type AnimationsOptional =
  | animationsOptional

export type ImportedContacts =
  | importedContacts

export type ImportedContactsOptional =
  | importedContactsOptional

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
export type InputInlineQueryResultOptional =
  | inputInlineQueryResultAnimatedGifOptional
  | inputInlineQueryResultAnimatedMpeg4Optional
  | inputInlineQueryResultArticleOptional
  | inputInlineQueryResultAudioOptional
  | inputInlineQueryResultContactOptional
  | inputInlineQueryResultDocumentOptional
  | inputInlineQueryResultGameOptional
  | inputInlineQueryResultLocationOptional
  | inputInlineQueryResultPhotoOptional
  | inputInlineQueryResultStickerOptional
  | inputInlineQueryResultVenueOptional
  | inputInlineQueryResultVideoOptional
  | inputInlineQueryResultVoiceNoteOptional

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
export type InlineQueryResultOptional =
  | inlineQueryResultArticleOptional
  | inlineQueryResultContactOptional
  | inlineQueryResultLocationOptional
  | inlineQueryResultVenueOptional
  | inlineQueryResultGameOptional
  | inlineQueryResultAnimationOptional
  | inlineQueryResultAudioOptional
  | inlineQueryResultDocumentOptional
  | inlineQueryResultPhotoOptional
  | inlineQueryResultStickerOptional
  | inlineQueryResultVideoOptional
  | inlineQueryResultVoiceNoteOptional

export type InlineQueryResults =
  | inlineQueryResults

export type InlineQueryResultsOptional =
  | inlineQueryResultsOptional

/** Represents a payload of a callback query */
export type CallbackQueryPayload =
  | callbackQueryPayloadData
  | callbackQueryPayloadGame

/** Represents a payload of a callback query */
export type CallbackQueryPayloadOptional =
  | callbackQueryPayloadDataOptional
  | callbackQueryPayloadGameOptional

export type CallbackQueryAnswer =
  | callbackQueryAnswer

export type CallbackQueryAnswerOptional =
  | callbackQueryAnswerOptional

export type CustomRequestResult =
  | customRequestResult

export type CustomRequestResultOptional =
  | customRequestResultOptional

export type GameHighScore =
  | gameHighScore

export type GameHighScoreOptional =
  | gameHighScoreOptional

export type GameHighScores =
  | gameHighScores

export type GameHighScoresOptional =
  | gameHighScoresOptional

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
export type ChatEventActionOptional =
  | chatEventMessageEditedOptional
  | chatEventMessageDeletedOptional
  | chatEventMessagePinnedOptional
  | chatEventMessageUnpinnedOptional
  | chatEventMemberJoinedOptional
  | chatEventMemberLeftOptional
  | chatEventMemberInvitedOptional
  | chatEventMemberPromotedOptional
  | chatEventMemberRestrictedOptional
  | chatEventTitleChangedOptional
  | chatEventDescriptionChangedOptional
  | chatEventUsernameChangedOptional
  | chatEventPhotoChangedOptional
  | chatEventInvitesToggledOptional
  | chatEventSignMessagesToggledOptional
  | chatEventStickerSetChangedOptional
  | chatEventIsAllHistoryAvailableToggledOptional

export type ChatEvent =
  | chatEvent

export type ChatEventOptional =
  | chatEventOptional

export type ChatEvents =
  | chatEvents

export type ChatEventsOptional =
  | chatEventsOptional

export type ChatEventLogFilters =
  | chatEventLogFilters

export type ChatEventLogFiltersOptional =
  | chatEventLogFiltersOptional

/** Represents the value of a string in a language pack */
export type LanguagePackStringValue =
  | languagePackStringValueOrdinary
  | languagePackStringValuePluralized
  | languagePackStringValueDeleted

/** Represents the value of a string in a language pack */
export type LanguagePackStringValueOptional =
  | languagePackStringValueOrdinaryOptional
  | languagePackStringValuePluralizedOptional
  | languagePackStringValueDeletedOptional

export type LanguagePackString =
  | languagePackString

export type LanguagePackStringOptional =
  | languagePackStringOptional

export type LanguagePackStrings =
  | languagePackStrings

export type LanguagePackStringsOptional =
  | languagePackStringsOptional

export type LanguagePackInfo =
  | languagePackInfo

export type LanguagePackInfoOptional =
  | languagePackInfoOptional

export type LocalizationTargetInfo =
  | localizationTargetInfo

export type LocalizationTargetInfoOptional =
  | localizationTargetInfoOptional

/**
 * Represents a data needed to subscribe for push notifications. To use specific push
 * notification service, you must specify the correct application platform and upload
 * valid server authentication data at https://my.telegram.org
 */
export type DeviceToken =
  | deviceTokenGoogleCloudMessaging
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
 * Represents a data needed to subscribe for push notifications. To use specific push
 * notification service, you must specify the correct application platform and upload
 * valid server authentication data at https://my.telegram.org
 */
export type DeviceTokenOptional =
  | deviceTokenGoogleCloudMessagingOptional
  | deviceTokenApplePushOptional
  | deviceTokenApplePushVoIPOptional
  | deviceTokenWindowsPushOptional
  | deviceTokenMicrosoftPushOptional
  | deviceTokenMicrosoftPushVoIPOptional
  | deviceTokenWebPushOptional
  | deviceTokenSimplePushOptional
  | deviceTokenUbuntuPushOptional
  | deviceTokenBlackBerryPushOptional
  | deviceTokenTizenPushOptional

export type Wallpaper =
  | wallpaper

export type WallpaperOptional =
  | wallpaperOptional

export type Wallpapers =
  | wallpapers

export type WallpapersOptional =
  | wallpapersOptional

export type Hashtags =
  | hashtags

export type HashtagsOptional =
  | hashtagsOptional

/** Represents result of checking whether a username can be set for a chat */
export type CheckChatUsernameResult =
  | checkChatUsernameResultOk
  | checkChatUsernameResultUsernameInvalid
  | checkChatUsernameResultUsernameOccupied
  | checkChatUsernameResultPublicChatsTooMuch
  | checkChatUsernameResultPublicGroupsUnavailable

/** Represents result of checking whether a username can be set for a chat */
export type CheckChatUsernameResultOptional =
  | checkChatUsernameResultOkOptional
  | checkChatUsernameResultUsernameInvalidOptional
  | checkChatUsernameResultUsernameOccupiedOptional
  | checkChatUsernameResultPublicChatsTooMuchOptional
  | checkChatUsernameResultPublicGroupsUnavailableOptional

/** Represents the value of an option */
export type OptionValue =
  | optionValueBoolean
  | optionValueEmpty
  | optionValueInteger
  | optionValueString

/** Represents the value of an option */
export type OptionValueOptional =
  | optionValueBooleanOptional
  | optionValueEmptyOptional
  | optionValueIntegerOptional
  | optionValueStringOptional

/** Represents a single rule for managing privacy settings */
export type UserPrivacySettingRule =
  | userPrivacySettingRuleAllowAll
  | userPrivacySettingRuleAllowContacts
  | userPrivacySettingRuleAllowUsers
  | userPrivacySettingRuleRestrictAll
  | userPrivacySettingRuleRestrictContacts
  | userPrivacySettingRuleRestrictUsers

/** Represents a single rule for managing privacy settings */
export type UserPrivacySettingRuleOptional =
  | userPrivacySettingRuleAllowAllOptional
  | userPrivacySettingRuleAllowContactsOptional
  | userPrivacySettingRuleAllowUsersOptional
  | userPrivacySettingRuleRestrictAllOptional
  | userPrivacySettingRuleRestrictContactsOptional
  | userPrivacySettingRuleRestrictUsersOptional

export type UserPrivacySettingRules =
  | userPrivacySettingRules

export type UserPrivacySettingRulesOptional =
  | userPrivacySettingRulesOptional

/** Describes available user privacy settings */
export type UserPrivacySetting =
  | userPrivacySettingShowStatus
  | userPrivacySettingAllowChatInvites
  | userPrivacySettingAllowCalls

/** Describes available user privacy settings */
export type UserPrivacySettingOptional =
  | userPrivacySettingShowStatusOptional
  | userPrivacySettingAllowChatInvitesOptional
  | userPrivacySettingAllowCallsOptional

export type AccountTtl =
  | accountTtl

export type AccountTtlOptional =
  | accountTtlOptional

export type Session =
  | session

export type SessionOptional =
  | sessionOptional

export type Sessions =
  | sessions

export type SessionsOptional =
  | sessionsOptional

export type ConnectedWebsite =
  | connectedWebsite

export type ConnectedWebsiteOptional =
  | connectedWebsiteOptional

export type ConnectedWebsites =
  | connectedWebsites

export type ConnectedWebsitesOptional =
  | connectedWebsitesOptional

export type ChatReportSpamState =
  | chatReportSpamState

export type ChatReportSpamStateOptional =
  | chatReportSpamStateOptional

/** Describes the reason why a chat is reported */
export type ChatReportReason =
  | chatReportReasonSpam
  | chatReportReasonViolence
  | chatReportReasonPornography
  | chatReportReasonCopyright
  | chatReportReasonCustom

/** Describes the reason why a chat is reported */
export type ChatReportReasonOptional =
  | chatReportReasonSpamOptional
  | chatReportReasonViolenceOptional
  | chatReportReasonPornographyOptional
  | chatReportReasonCopyrightOptional
  | chatReportReasonCustomOptional

export type PublicMessageLink =
  | publicMessageLink

export type PublicMessageLinkOptional =
  | publicMessageLinkOptional

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
export type FileTypeOptional =
  | fileTypeNoneOptional
  | fileTypeAnimationOptional
  | fileTypeAudioOptional
  | fileTypeDocumentOptional
  | fileTypePhotoOptional
  | fileTypeProfilePhotoOptional
  | fileTypeSecretOptional
  | fileTypeSecretThumbnailOptional
  | fileTypeSecureOptional
  | fileTypeStickerOptional
  | fileTypeThumbnailOptional
  | fileTypeUnknownOptional
  | fileTypeVideoOptional
  | fileTypeVideoNoteOptional
  | fileTypeVoiceNoteOptional
  | fileTypeWallpaperOptional

export type StorageStatisticsByFileType =
  | storageStatisticsByFileType

export type StorageStatisticsByFileTypeOptional =
  | storageStatisticsByFileTypeOptional

export type StorageStatisticsByChat =
  | storageStatisticsByChat

export type StorageStatisticsByChatOptional =
  | storageStatisticsByChatOptional

export type StorageStatistics =
  | storageStatistics

export type StorageStatisticsOptional =
  | storageStatisticsOptional

export type StorageStatisticsFast =
  | storageStatisticsFast

export type StorageStatisticsFastOptional =
  | storageStatisticsFastOptional

/** Represents the type of a network */
export type NetworkType =
  | networkTypeNone
  | networkTypeMobile
  | networkTypeMobileRoaming
  | networkTypeWiFi
  | networkTypeOther

/** Represents the type of a network */
export type NetworkTypeOptional =
  | networkTypeNoneOptional
  | networkTypeMobileOptional
  | networkTypeMobileRoamingOptional
  | networkTypeWiFiOptional
  | networkTypeOtherOptional

/** Contains statistics about network usage */
export type NetworkStatisticsEntry =
  | networkStatisticsEntryFile
  | networkStatisticsEntryCall

/** Contains statistics about network usage */
export type NetworkStatisticsEntryOptional =
  | networkStatisticsEntryFileOptional
  | networkStatisticsEntryCallOptional

export type NetworkStatistics =
  | networkStatistics

export type NetworkStatisticsOptional =
  | networkStatisticsOptional

/** Describes the current state of the connection to Telegram servers */
export type ConnectionState =
  | connectionStateWaitingForNetwork
  | connectionStateConnectingToProxy
  | connectionStateConnecting
  | connectionStateUpdating
  | connectionStateReady

/** Describes the current state of the connection to Telegram servers */
export type ConnectionStateOptional =
  | connectionStateWaitingForNetworkOptional
  | connectionStateConnectingToProxyOptional
  | connectionStateConnectingOptional
  | connectionStateUpdatingOptional
  | connectionStateReadyOptional

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
export type TopChatCategoryOptional =
  | topChatCategoryUsersOptional
  | topChatCategoryBotsOptional
  | topChatCategoryGroupsOptional
  | topChatCategoryChannelsOptional
  | topChatCategoryInlineBotsOptional
  | topChatCategoryCallsOptional

/** Describes the type of a URL linking to an internal Telegram entity */
export type TMeUrlType =
  | tMeUrlTypeUser
  | tMeUrlTypeSupergroup
  | tMeUrlTypeChatInvite
  | tMeUrlTypeStickerSet

/** Describes the type of a URL linking to an internal Telegram entity */
export type TMeUrlTypeOptional =
  | tMeUrlTypeUserOptional
  | tMeUrlTypeSupergroupOptional
  | tMeUrlTypeChatInviteOptional
  | tMeUrlTypeStickerSetOptional

export type TMeUrl =
  | tMeUrl

export type TMeUrlOptional =
  | tMeUrlOptional

export type TMeUrls =
  | tMeUrls

export type TMeUrlsOptional =
  | tMeUrlsOptional

export type Count =
  | count

export type CountOptional =
  | countOptional

export type Text =
  | text

export type TextOptional =
  | textOptional

export type Seconds =
  | seconds

export type SecondsOptional =
  | secondsOptional

export type DeepLinkInfo =
  | deepLinkInfo

export type DeepLinkInfoOptional =
  | deepLinkInfoOptional

/** Describes the way the text should be parsed for TextEntities */
export type TextParseMode =
  | textParseModeMarkdown
  | textParseModeHTML

/** Describes the way the text should be parsed for TextEntities */
export type TextParseModeOptional =
  | textParseModeMarkdownOptional
  | textParseModeHTMLOptional

/** Describes the type of the proxy server */
export type ProxyType =
  | proxyTypeSocks5
  | proxyTypeHttp
  | proxyTypeMtproto

/** Describes the type of the proxy server */
export type ProxyTypeOptional =
  | proxyTypeSocks5Optional
  | proxyTypeHttpOptional
  | proxyTypeMtprotoOptional

export type Proxy =
  | proxy

export type ProxyOptional =
  | proxyOptional

export type Proxies =
  | proxies

export type ProxiesOptional =
  | proxiesOptional

export type InputSticker =
  | inputSticker

export type InputStickerOptional =
  | inputStickerOptional

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
  | updateChatReplyMarkup
  | updateChatDraftMessage
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

/** Contains notifications about data changes */
export type UpdateOptional =
  | updateAuthorizationStateOptional
  | updateNewMessageOptional
  | updateMessageSendAcknowledgedOptional
  | updateMessageSendSucceededOptional
  | updateMessageSendFailedOptional
  | updateMessageContentOptional
  | updateMessageEditedOptional
  | updateMessageViewsOptional
  | updateMessageContentOpenedOptional
  | updateMessageMentionReadOptional
  | updateNewChatOptional
  | updateChatTitleOptional
  | updateChatPhotoOptional
  | updateChatLastMessageOptional
  | updateChatOrderOptional
  | updateChatIsPinnedOptional
  | updateChatIsMarkedAsUnreadOptional
  | updateChatIsSponsoredOptional
  | updateChatDefaultDisableNotificationOptional
  | updateChatReadInboxOptional
  | updateChatReadOutboxOptional
  | updateChatUnreadMentionCountOptional
  | updateChatNotificationSettingsOptional
  | updateScopeNotificationSettingsOptional
  | updateChatReplyMarkupOptional
  | updateChatDraftMessageOptional
  | updateDeleteMessagesOptional
  | updateUserChatActionOptional
  | updateUserStatusOptional
  | updateUserOptional
  | updateBasicGroupOptional
  | updateSupergroupOptional
  | updateSecretChatOptional
  | updateUserFullInfoOptional
  | updateBasicGroupFullInfoOptional
  | updateSupergroupFullInfoOptional
  | updateServiceNotificationOptional
  | updateFileOptional
  | updateFileGenerationStartOptional
  | updateFileGenerationStopOptional
  | updateCallOptional
  | updateUserPrivacySettingRulesOptional
  | updateUnreadMessageCountOptional
  | updateUnreadChatCountOptional
  | updateOptionOptional
  | updateInstalledStickerSetsOptional
  | updateTrendingStickerSetsOptional
  | updateRecentStickersOptional
  | updateFavoriteStickersOptional
  | updateSavedAnimationsOptional
  | updateLanguagePackStringsOptional
  | updateConnectionStateOptional
  | updateTermsOfServiceOptional
  | updateNewInlineQueryOptional
  | updateNewChosenInlineResultOptional
  | updateNewCallbackQueryOptional
  | updateNewInlineCallbackQueryOptional
  | updateNewShippingQueryOptional
  | updateNewPreCheckoutQueryOptional
  | updateNewCustomEventOptional
  | updateNewCustomQueryOptional

export type TestInt =
  | testInt

export type TestIntOptional =
  | testIntOptional

export type TestString =
  | testString

export type TestStringOptional =
  | testStringOptional

export type TestBytes =
  | testBytes

export type TestBytesOptional =
  | testBytesOptional

export type TestVectorInt =
  | testVectorInt

export type TestVectorIntOptional =
  | testVectorIntOptional

export type TestVectorIntObject =
  | testVectorIntObject

export type TestVectorIntObjectOptional =
  | testVectorIntObjectOptional

export type TestVectorString =
  | testVectorString

export type TestVectorStringOptional =
  | testVectorStringOptional

export type TestVectorStringObject =
  | testVectorStringObject

export type TestVectorStringObjectOptional =
  | testVectorStringObjectOptional

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
  | setDatabaseEncryptionKey
  | getPasswordState
  | setPassword
  | getRecoveryEmailAddress
  | setRecoveryEmailAddress
  | requestPasswordRecovery
  | recoverPassword
  | createTemporaryPassword
  | getTemporaryPasswordState
  | processDcUpdate
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
  | getPublicMessageLink
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
  | joinChat
  | leaveChat
  | addChatMember
  | addChatMembers
  | setChatMemberStatus
  | getChatMember
  | searchChatMembers
  | getChatAdministrators
  | clearAllDraftMessages
  | getScopeNotificationSettings
  | setScopeNotificationSettings
  | resetAllNotificationSettings
  | setPinnedChats
  | downloadFile
  | cancelDownloadFile
  | uploadFile
  | cancelUploadFile
  | setFileGenerationProgress
  | finishFileGeneration
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
  | pinSupergroupMessage
  | unpinSupergroupMessage
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
  | getLanguagePackStrings
  | setCustomLanguagePack
  | editCustomLanguagePackInfo
  | setCustomLanguagePackString
  | deleteLanguagePack
  | registerDevice
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
  | getStorageStatistics
  | getStorageStatisticsFast
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
  | addProxy
  | editProxy
  | enableProxy
  | disableProxy
  | removeProxy
  | getProxies
  | getProxyLink
  | pingProxy
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
  | ProfilePhoto
  | ChatPhoto
  | LinkState
  | UserType
  | BotCommand
  | BotInfo
  | User
  | UserFullInfo
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
  | Wallpaper
  | Wallpapers
  | Hashtags
  | CheckChatUsernameResult
  | OptionValue
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
  | FileType
  | StorageStatisticsByFileType
  | StorageStatisticsByChat
  | StorageStatistics
  | StorageStatisticsFast
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
  | TestInt
  | TestString
  | TestBytes
  | TestVectorInt
  | TestVectorIntObject
  | TestVectorString
  | TestVectorStringObject

export type TDObjectOptional =
  | ErrorOptional
  | OkOptional
  | TdlibParametersOptional
  | AuthenticationCodeTypeOptional
  | AuthenticationCodeInfoOptional
  | EmailAddressAuthenticationCodeInfoOptional
  | TextEntityOptional
  | TextEntitiesOptional
  | FormattedTextOptional
  | TermsOfServiceOptional
  | AuthorizationStateOptional
  | PasswordStateOptional
  | RecoveryEmailAddressOptional
  | TemporaryPasswordStateOptional
  | LocalFileOptional
  | RemoteFileOptional
  | FileOptional
  | InputFileOptional
  | PhotoSizeOptional
  | MaskPointOptional
  | MaskPositionOptional
  | AnimationOptional
  | AudioOptional
  | DocumentOptional
  | PhotoOptional
  | StickerOptional
  | VideoOptional
  | VideoNoteOptional
  | VoiceNoteOptional
  | ContactOptional
  | LocationOptional
  | VenueOptional
  | GameOptional
  | ProfilePhotoOptional
  | ChatPhotoOptional
  | LinkStateOptional
  | UserTypeOptional
  | BotCommandOptional
  | BotInfoOptional
  | UserOptional
  | UserFullInfoOptional
  | UserProfilePhotosOptional
  | UsersOptional
  | ChatMemberStatusOptional
  | ChatMemberOptional
  | ChatMembersOptional
  | ChatMembersFilterOptional
  | SupergroupMembersFilterOptional
  | BasicGroupOptional
  | BasicGroupFullInfoOptional
  | SupergroupOptional
  | SupergroupFullInfoOptional
  | SecretChatStateOptional
  | SecretChatOptional
  | MessageForwardInfoOptional
  | MessageSendingStateOptional
  | MessageOptional
  | MessagesOptional
  | FoundMessagesOptional
  | NotificationSettingsScopeOptional
  | ChatNotificationSettingsOptional
  | ScopeNotificationSettingsOptional
  | DraftMessageOptional
  | ChatTypeOptional
  | ChatOptional
  | ChatsOptional
  | ChatInviteLinkOptional
  | ChatInviteLinkInfoOptional
  | KeyboardButtonTypeOptional
  | KeyboardButtonOptional
  | InlineKeyboardButtonTypeOptional
  | InlineKeyboardButtonOptional
  | ReplyMarkupOptional
  | RichTextOptional
  | PageBlockOptional
  | WebPageInstantViewOptional
  | WebPageOptional
  | AddressOptional
  | LabeledPricePartOptional
  | InvoiceOptional
  | OrderInfoOptional
  | ShippingOptionOptional
  | SavedCredentialsOptional
  | InputCredentialsOptional
  | PaymentsProviderStripeOptional
  | PaymentFormOptional
  | ValidatedOrderInfoOptional
  | PaymentResultOptional
  | PaymentReceiptOptional
  | DatedFileOptional
  | PassportElementTypeOptional
  | DateOptional
  | PersonalDetailsOptional
  | IdentityDocumentOptional
  | InputIdentityDocumentOptional
  | PersonalDocumentOptional
  | InputPersonalDocumentOptional
  | PassportElementOptional
  | InputPassportElementOptional
  | PassportElementsOptional
  | PassportElementErrorSourceOptional
  | PassportElementErrorOptional
  | PassportSuitableElementOptional
  | PassportRequiredElementOptional
  | PassportAuthorizationFormOptional
  | EncryptedCredentialsOptional
  | EncryptedPassportElementOptional
  | InputPassportElementErrorSourceOptional
  | InputPassportElementErrorOptional
  | MessageContentOptional
  | TextEntityTypeOptional
  | InputThumbnailOptional
  | InputMessageContentOptional
  | SearchMessagesFilterOptional
  | ChatActionOptional
  | UserStatusOptional
  | StickersOptional
  | StickerEmojisOptional
  | StickerSetOptional
  | StickerSetInfoOptional
  | StickerSetsOptional
  | CallDiscardReasonOptional
  | CallProtocolOptional
  | CallConnectionOptional
  | CallIdOptional
  | CallStateOptional
  | CallOptional
  | AnimationsOptional
  | ImportedContactsOptional
  | InputInlineQueryResultOptional
  | InlineQueryResultOptional
  | InlineQueryResultsOptional
  | CallbackQueryPayloadOptional
  | CallbackQueryAnswerOptional
  | CustomRequestResultOptional
  | GameHighScoreOptional
  | GameHighScoresOptional
  | ChatEventActionOptional
  | ChatEventOptional
  | ChatEventsOptional
  | ChatEventLogFiltersOptional
  | LanguagePackStringValueOptional
  | LanguagePackStringOptional
  | LanguagePackStringsOptional
  | LanguagePackInfoOptional
  | LocalizationTargetInfoOptional
  | DeviceTokenOptional
  | WallpaperOptional
  | WallpapersOptional
  | HashtagsOptional
  | CheckChatUsernameResultOptional
  | OptionValueOptional
  | UserPrivacySettingRuleOptional
  | UserPrivacySettingRulesOptional
  | UserPrivacySettingOptional
  | AccountTtlOptional
  | SessionOptional
  | SessionsOptional
  | ConnectedWebsiteOptional
  | ConnectedWebsitesOptional
  | ChatReportSpamStateOptional
  | ChatReportReasonOptional
  | PublicMessageLinkOptional
  | FileTypeOptional
  | StorageStatisticsByFileTypeOptional
  | StorageStatisticsByChatOptional
  | StorageStatisticsOptional
  | StorageStatisticsFastOptional
  | NetworkTypeOptional
  | NetworkStatisticsEntryOptional
  | NetworkStatisticsOptional
  | ConnectionStateOptional
  | TopChatCategoryOptional
  | TMeUrlTypeOptional
  | TMeUrlOptional
  | TMeUrlsOptional
  | CountOptional
  | TextOptional
  | SecondsOptional
  | DeepLinkInfoOptional
  | TextParseModeOptional
  | ProxyTypeOptional
  | ProxyOptional
  | ProxiesOptional
  | InputStickerOptional
  | UpdateOptional
  | TestIntOptional
  | TestStringOptional
  | TestBytesOptional
  | TestVectorIntOptional
  | TestVectorIntObjectOptional
  | TestVectorStringOptional
  | TestVectorStringObjectOptional

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
  & ((query: setDatabaseEncryptionKey) => Promise<Ok>)
  & ((query: getPasswordState) => Promise<PasswordState>)
  & ((query: setPassword) => Promise<PasswordState>)
  & ((query: getRecoveryEmailAddress) => Promise<RecoveryEmailAddress>)
  & ((query: setRecoveryEmailAddress) => Promise<PasswordState>)
  & ((query: requestPasswordRecovery) => Promise<EmailAddressAuthenticationCodeInfo>)
  & ((query: recoverPassword) => Promise<PasswordState>)
  & ((query: createTemporaryPassword) => Promise<TemporaryPasswordState>)
  & ((query: getTemporaryPasswordState) => Promise<TemporaryPasswordState>)
  & ((query: processDcUpdate) => Promise<Ok>)
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
  & ((query: getPublicMessageLink) => Promise<PublicMessageLink>)
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
  & ((query: joinChat) => Promise<Ok>)
  & ((query: leaveChat) => Promise<Ok>)
  & ((query: addChatMember) => Promise<Ok>)
  & ((query: addChatMembers) => Promise<Ok>)
  & ((query: setChatMemberStatus) => Promise<Ok>)
  & ((query: getChatMember) => Promise<ChatMember>)
  & ((query: searchChatMembers) => Promise<ChatMembers>)
  & ((query: getChatAdministrators) => Promise<Users>)
  & ((query: clearAllDraftMessages) => Promise<Ok>)
  & ((query: getScopeNotificationSettings) => Promise<ScopeNotificationSettings>)
  & ((query: setScopeNotificationSettings) => Promise<Ok>)
  & ((query: resetAllNotificationSettings) => Promise<Ok>)
  & ((query: setPinnedChats) => Promise<Ok>)
  & ((query: downloadFile) => Promise<File>)
  & ((query: cancelDownloadFile) => Promise<Ok>)
  & ((query: uploadFile) => Promise<File>)
  & ((query: cancelUploadFile) => Promise<Ok>)
  & ((query: setFileGenerationProgress) => Promise<Ok>)
  & ((query: finishFileGeneration) => Promise<Ok>)
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
  & ((query: pinSupergroupMessage) => Promise<Ok>)
  & ((query: unpinSupergroupMessage) => Promise<Ok>)
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
  & ((query: getLanguagePackStrings) => Promise<LanguagePackStrings>)
  & ((query: setCustomLanguagePack) => Promise<Ok>)
  & ((query: editCustomLanguagePackInfo) => Promise<Ok>)
  & ((query: setCustomLanguagePackString) => Promise<Ok>)
  & ((query: deleteLanguagePack) => Promise<Ok>)
  & ((query: registerDevice) => Promise<Ok>)
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
  & ((query: getStorageStatistics) => Promise<StorageStatistics>)
  & ((query: getStorageStatisticsFast) => Promise<StorageStatisticsFast>)
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
  & ((query: addProxy) => Promise<Proxy>)
  & ((query: editProxy) => Promise<Proxy>)
  & ((query: enableProxy) => Promise<Ok>)
  & ((query: disableProxy) => Promise<Ok>)
  & ((query: removeProxy) => Promise<Ok>)
  & ((query: getProxies) => Promise<Proxies>)
  & ((query: getProxyLink) => Promise<Text>)
  & ((query: pingProxy) => Promise<Seconds>)
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
  & ((query: setDatabaseEncryptionKey) => Ok | error | null)
  & ((query: getPasswordState) => PasswordState | error | null)
  & ((query: setPassword) => PasswordState | error | null)
  & ((query: getRecoveryEmailAddress) => RecoveryEmailAddress | error | null)
  & ((query: setRecoveryEmailAddress) => PasswordState | error | null)
  & ((query: requestPasswordRecovery) => EmailAddressAuthenticationCodeInfo | error | null)
  & ((query: recoverPassword) => PasswordState | error | null)
  & ((query: createTemporaryPassword) => TemporaryPasswordState | error | null)
  & ((query: getTemporaryPasswordState) => TemporaryPasswordState | error | null)
  & ((query: processDcUpdate) => Ok | error | null)
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
  & ((query: getPublicMessageLink) => PublicMessageLink | error | null)
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
  & ((query: joinChat) => Ok | error | null)
  & ((query: leaveChat) => Ok | error | null)
  & ((query: addChatMember) => Ok | error | null)
  & ((query: addChatMembers) => Ok | error | null)
  & ((query: setChatMemberStatus) => Ok | error | null)
  & ((query: getChatMember) => ChatMember | error | null)
  & ((query: searchChatMembers) => ChatMembers | error | null)
  & ((query: getChatAdministrators) => Users | error | null)
  & ((query: clearAllDraftMessages) => Ok | error | null)
  & ((query: getScopeNotificationSettings) => ScopeNotificationSettings | error | null)
  & ((query: setScopeNotificationSettings) => Ok | error | null)
  & ((query: resetAllNotificationSettings) => Ok | error | null)
  & ((query: setPinnedChats) => Ok | error | null)
  & ((query: downloadFile) => File | error | null)
  & ((query: cancelDownloadFile) => Ok | error | null)
  & ((query: uploadFile) => File | error | null)
  & ((query: cancelUploadFile) => Ok | error | null)
  & ((query: setFileGenerationProgress) => Ok | error | null)
  & ((query: finishFileGeneration) => Ok | error | null)
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
  & ((query: pinSupergroupMessage) => Ok | error | null)
  & ((query: unpinSupergroupMessage) => Ok | error | null)
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
  & ((query: getLanguagePackStrings) => LanguagePackStrings | error | null)
  & ((query: setCustomLanguagePack) => Ok | error | null)
  & ((query: editCustomLanguagePackInfo) => Ok | error | null)
  & ((query: setCustomLanguagePackString) => Ok | error | null)
  & ((query: deleteLanguagePack) => Ok | error | null)
  & ((query: registerDevice) => Ok | error | null)
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
  & ((query: getStorageStatistics) => StorageStatistics | error | null)
  & ((query: getStorageStatisticsFast) => StorageStatisticsFast | error | null)
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
  & ((query: addProxy) => Proxy | error | null)
  & ((query: editProxy) => Proxy | error | null)
  & ((query: enableProxy) => Ok | error | null)
  & ((query: disableProxy) => Ok | error | null)
  & ((query: removeProxy) => Ok | error | null)
  & ((query: getProxies) => Proxies | error | null)
  & ((query: getProxyLink) => Text | error | null)
  & ((query: pingProxy) => Seconds | error | null)
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
import type { Future } from 'fluture'

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
  & ((query: setDatabaseEncryptionKey) => Future<error, Ok>)
  & ((query: getPasswordState) => Future<error, PasswordState>)
  & ((query: setPassword) => Future<error, PasswordState>)
  & ((query: getRecoveryEmailAddress) => Future<error, RecoveryEmailAddress>)
  & ((query: setRecoveryEmailAddress) => Future<error, PasswordState>)
  & ((query: requestPasswordRecovery) => Future<error, EmailAddressAuthenticationCodeInfo>)
  & ((query: recoverPassword) => Future<error, PasswordState>)
  & ((query: createTemporaryPassword) => Future<error, TemporaryPasswordState>)
  & ((query: getTemporaryPasswordState) => Future<error, TemporaryPasswordState>)
  & ((query: processDcUpdate) => Future<error, Ok>)
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
  & ((query: getPublicMessageLink) => Future<error, PublicMessageLink>)
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
  & ((query: joinChat) => Future<error, Ok>)
  & ((query: leaveChat) => Future<error, Ok>)
  & ((query: addChatMember) => Future<error, Ok>)
  & ((query: addChatMembers) => Future<error, Ok>)
  & ((query: setChatMemberStatus) => Future<error, Ok>)
  & ((query: getChatMember) => Future<error, ChatMember>)
  & ((query: searchChatMembers) => Future<error, ChatMembers>)
  & ((query: getChatAdministrators) => Future<error, Users>)
  & ((query: clearAllDraftMessages) => Future<error, Ok>)
  & ((query: getScopeNotificationSettings) => Future<error, ScopeNotificationSettings>)
  & ((query: setScopeNotificationSettings) => Future<error, Ok>)
  & ((query: resetAllNotificationSettings) => Future<error, Ok>)
  & ((query: setPinnedChats) => Future<error, Ok>)
  & ((query: downloadFile) => Future<error, File>)
  & ((query: cancelDownloadFile) => Future<error, Ok>)
  & ((query: uploadFile) => Future<error, File>)
  & ((query: cancelUploadFile) => Future<error, Ok>)
  & ((query: setFileGenerationProgress) => Future<error, Ok>)
  & ((query: finishFileGeneration) => Future<error, Ok>)
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
  & ((query: pinSupergroupMessage) => Future<error, Ok>)
  & ((query: unpinSupergroupMessage) => Future<error, Ok>)
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
  & ((query: getLanguagePackStrings) => Future<error, LanguagePackStrings>)
  & ((query: setCustomLanguagePack) => Future<error, Ok>)
  & ((query: editCustomLanguagePackInfo) => Future<error, Ok>)
  & ((query: setCustomLanguagePackString) => Future<error, Ok>)
  & ((query: deleteLanguagePack) => Future<error, Ok>)
  & ((query: registerDevice) => Future<error, Ok>)
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
  & ((query: getStorageStatistics) => Future<error, StorageStatistics>)
  & ((query: getStorageStatisticsFast) => Future<error, StorageStatisticsFast>)
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
  & ((query: addProxy) => Future<error, Proxy>)
  & ((query: editProxy) => Future<error, Proxy>)
  & ((query: enableProxy) => Future<error, Ok>)
  & ((query: disableProxy) => Future<error, Ok>)
  & ((query: removeProxy) => Future<error, Ok>)
  & ((query: getProxies) => Future<error, Proxies>)
  & ((query: getProxyLink) => Future<error, Text>)
  & ((query: pingProxy) => Future<error, Seconds>)
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
