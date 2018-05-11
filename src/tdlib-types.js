// @flow

// TDLib 1.2.0

export type accountTtl = {
  _: 'accountTtl',
  days: number,
}

export type accountTtlOptional = {|
  _: 'accountTtl',
  days?: number,
|}

export type animation = {
  _: 'animation',
  duration: number,
  width: number,
  height: number,
  file_name: string,
  mime_type: string,
  thumbnail: photoSize,
  animation: file,
}

export type animationOptional = {|
  _: 'animation',
  duration?: number,
  width?: number,
  height?: number,
  file_name?: string,
  mime_type?: string,
  thumbnail?: photoSizeOptional,
  animation?: fileOptional,
|}

export type animations = {
  _: 'animations',
  animations: animation[],
}

export type animationsOptional = {|
  _: 'animations',
  animations?: animationOptional[],
|}

export type audio = {
  _: 'audio',
  duration: number,
  title: string,
  performer: string,
  file_name: string,
  mime_type: string,
  album_cover_thumbnail: photoSize,
  audio: file,
}

export type audioOptional = {|
  _: 'audio',
  duration?: number,
  title?: string,
  performer?: string,
  file_name?: string,
  mime_type?: string,
  album_cover_thumbnail?: photoSizeOptional,
  audio?: fileOptional,
|}

export type authenticationCodeInfo = {
  _: 'authenticationCodeInfo',
  phone_number: string,
  type: AuthenticationCodeType,
  next_type: AuthenticationCodeType,
  timeout: number,
}

export type authenticationCodeInfoOptional = {|
  _: 'authenticationCodeInfo',
  phone_number?: string,
  type?: AuthenticationCodeTypeOptional,
  next_type?: AuthenticationCodeTypeOptional,
  timeout?: number,
|}

export type authenticationCodeTypeTelegramMessage = {
  _: 'authenticationCodeTypeTelegramMessage',
  length: number,
}

export type authenticationCodeTypeTelegramMessageOptional = {|
  _: 'authenticationCodeTypeTelegramMessage',
  length?: number,
|}

export type authenticationCodeTypeSms = {
  _: 'authenticationCodeTypeSms',
  length: number,
}

export type authenticationCodeTypeSmsOptional = {|
  _: 'authenticationCodeTypeSms',
  length?: number,
|}

export type authenticationCodeTypeCall = {
  _: 'authenticationCodeTypeCall',
  length: number,
}

export type authenticationCodeTypeCallOptional = {|
  _: 'authenticationCodeTypeCall',
  length?: number,
|}

export type authenticationCodeTypeFlashCall = {
  _: 'authenticationCodeTypeFlashCall',
  pattern: string,
}

export type authenticationCodeTypeFlashCallOptional = {|
  _: 'authenticationCodeTypeFlashCall',
  pattern?: string,
|}

export type authorizationStateWaitTdlibParameters = {
  _: 'authorizationStateWaitTdlibParameters',
}

export type authorizationStateWaitTdlibParametersOptional = {|
  _: 'authorizationStateWaitTdlibParameters',
|}

export type authorizationStateWaitEncryptionKey = {
  _: 'authorizationStateWaitEncryptionKey',
  is_encrypted: boolean,
}

export type authorizationStateWaitEncryptionKeyOptional = {|
  _: 'authorizationStateWaitEncryptionKey',
  is_encrypted?: boolean,
|}

export type authorizationStateWaitPhoneNumber = {
  _: 'authorizationStateWaitPhoneNumber',
}

export type authorizationStateWaitPhoneNumberOptional = {|
  _: 'authorizationStateWaitPhoneNumber',
|}

export type authorizationStateWaitCode = {
  _: 'authorizationStateWaitCode',
  is_registered: boolean,
  code_info: authenticationCodeInfo,
}

export type authorizationStateWaitCodeOptional = {|
  _: 'authorizationStateWaitCode',
  is_registered?: boolean,
  code_info?: authenticationCodeInfoOptional,
|}

export type authorizationStateWaitPassword = {
  _: 'authorizationStateWaitPassword',
  password_hint: string,
  has_recovery_email_address: boolean,
  recovery_email_address_pattern: string,
}

export type authorizationStateWaitPasswordOptional = {|
  _: 'authorizationStateWaitPassword',
  password_hint?: string,
  has_recovery_email_address?: boolean,
  recovery_email_address_pattern?: string,
|}

export type authorizationStateReady = {
  _: 'authorizationStateReady',
}

export type authorizationStateReadyOptional = {|
  _: 'authorizationStateReady',
|}

export type authorizationStateLoggingOut = {
  _: 'authorizationStateLoggingOut',
}

export type authorizationStateLoggingOutOptional = {|
  _: 'authorizationStateLoggingOut',
|}

export type authorizationStateClosing = {
  _: 'authorizationStateClosing',
}

export type authorizationStateClosingOptional = {|
  _: 'authorizationStateClosing',
|}

export type authorizationStateClosed = {
  _: 'authorizationStateClosed',
}

export type authorizationStateClosedOptional = {|
  _: 'authorizationStateClosed',
|}

export type basicGroup = {
  _: 'basicGroup',
  id: number,
  member_count: number,
  status: ChatMemberStatus,
  everyone_is_administrator: boolean,
  is_active: boolean,
  upgraded_to_supergroup_id: number,
}

export type basicGroupOptional = {|
  _: 'basicGroup',
  id?: number,
  member_count?: number,
  status?: ChatMemberStatusOptional,
  everyone_is_administrator?: boolean,
  is_active?: boolean,
  upgraded_to_supergroup_id?: number,
|}

export type basicGroupFullInfo = {
  _: 'basicGroupFullInfo',
  creator_user_id: number,
  members: chatMember[],
  invite_link: string,
}

export type basicGroupFullInfoOptional = {|
  _: 'basicGroupFullInfo',
  creator_user_id?: number,
  members?: chatMemberOptional[],
  invite_link?: string,
|}

export type botCommand = {
  _: 'botCommand',
  command: string,
  description: string,
}

export type botCommandOptional = {|
  _: 'botCommand',
  command?: string,
  description?: string,
|}

export type botInfo = {
  _: 'botInfo',
  description: string,
  commands: botCommand[],
}

export type botInfoOptional = {|
  _: 'botInfo',
  description?: string,
  commands?: botCommandOptional[],
|}

export type call = {
  _: 'call',
  id: number,
  user_id: number,
  is_outgoing: boolean,
  state: CallState,
}

export type callOptional = {|
  _: 'call',
  id?: number,
  user_id?: number,
  is_outgoing?: boolean,
  state?: CallStateOptional,
|}

export type callConnection = {
  _: 'callConnection',
  id: number,
  ip: string,
  ipv6: string,
  port: number,
  peer_tag: string,
}

export type callConnectionOptional = {|
  _: 'callConnection',
  id?: number,
  ip?: string,
  ipv6?: string,
  port?: number,
  peer_tag?: string,
|}

export type callDiscardReasonEmpty = {
  _: 'callDiscardReasonEmpty',
}

export type callDiscardReasonEmptyOptional = {|
  _: 'callDiscardReasonEmpty',
|}

export type callDiscardReasonMissed = {
  _: 'callDiscardReasonMissed',
}

export type callDiscardReasonMissedOptional = {|
  _: 'callDiscardReasonMissed',
|}

export type callDiscardReasonDeclined = {
  _: 'callDiscardReasonDeclined',
}

export type callDiscardReasonDeclinedOptional = {|
  _: 'callDiscardReasonDeclined',
|}

export type callDiscardReasonDisconnected = {
  _: 'callDiscardReasonDisconnected',
}

export type callDiscardReasonDisconnectedOptional = {|
  _: 'callDiscardReasonDisconnected',
|}

export type callDiscardReasonHungUp = {
  _: 'callDiscardReasonHungUp',
}

export type callDiscardReasonHungUpOptional = {|
  _: 'callDiscardReasonHungUp',
|}

export type callId = {
  _: 'callId',
  id: number,
}

export type callIdOptional = {|
  _: 'callId',
  id?: number,
|}

export type callProtocol = {
  _: 'callProtocol',
  udp_p2p: boolean,
  udp_reflector: boolean,
  min_layer: number,
  max_layer: number,
}

export type callProtocolOptional = {|
  _: 'callProtocol',
  udp_p2p?: boolean,
  udp_reflector?: boolean,
  min_layer?: number,
  max_layer?: number,
|}

export type callStatePending = {
  _: 'callStatePending',
  is_created: boolean,
  is_received: boolean,
}

export type callStatePendingOptional = {|
  _: 'callStatePending',
  is_created?: boolean,
  is_received?: boolean,
|}

export type callStateExchangingKeys = {
  _: 'callStateExchangingKeys',
}

export type callStateExchangingKeysOptional = {|
  _: 'callStateExchangingKeys',
|}

export type callStateReady = {
  _: 'callStateReady',
  protocol: callProtocol,
  connections: callConnection[],
  config: string,
  encryption_key: string,
  emojis: string,
}

export type callStateReadyOptional = {|
  _: 'callStateReady',
  protocol?: callProtocolOptional,
  connections?: callConnectionOptional[],
  config?: string,
  encryption_key?: string,
  emojis?: string,
|}

export type callStateHangingUp = {
  _: 'callStateHangingUp',
}

export type callStateHangingUpOptional = {|
  _: 'callStateHangingUp',
|}

export type callStateDiscarded = {
  _: 'callStateDiscarded',
  reason: CallDiscardReason,
  need_rating: boolean,
  need_debug_information: boolean,
}

export type callStateDiscardedOptional = {|
  _: 'callStateDiscarded',
  reason?: CallDiscardReasonOptional,
  need_rating?: boolean,
  need_debug_information?: boolean,
|}

export type callStateError = {
  _: 'callStateError',
  error: error,
}

export type callStateErrorOptional = {|
  _: 'callStateError',
  error?: errorOptional,
|}

export type callbackQueryAnswer = {
  _: 'callbackQueryAnswer',
  text: string,
  show_alert: boolean,
  url: string,
}

export type callbackQueryAnswerOptional = {|
  _: 'callbackQueryAnswer',
  text?: string,
  show_alert?: boolean,
  url?: string,
|}

export type callbackQueryPayloadData = {
  _: 'callbackQueryPayloadData',
  data: string,
}

export type callbackQueryPayloadDataOptional = {|
  _: 'callbackQueryPayloadData',
  data?: string,
|}

export type callbackQueryPayloadGame = {
  _: 'callbackQueryPayloadGame',
  game_short_name: string,
}

export type callbackQueryPayloadGameOptional = {|
  _: 'callbackQueryPayloadGame',
  game_short_name?: string,
|}

export type chat = {
  _: 'chat',
  id: number,
  type: ChatType,
  title: string,
  photo: chatPhoto,
  last_message: message,
  order: number,
  is_pinned: boolean,
  can_be_reported: boolean,
  unread_count: number,
  last_read_inbox_message_id: number,
  last_read_outbox_message_id: number,
  unread_mention_count: number,
  notification_settings: notificationSettings,
  reply_markup_message_id: number,
  draft_message: draftMessage,
  client_data: string,
}

export type chatOptional = {|
  _: 'chat',
  id?: number,
  type?: ChatTypeOptional,
  title?: string,
  photo?: chatPhotoOptional,
  last_message?: messageOptional,
  order?: number,
  is_pinned?: boolean,
  can_be_reported?: boolean,
  unread_count?: number,
  last_read_inbox_message_id?: number,
  last_read_outbox_message_id?: number,
  unread_mention_count?: number,
  notification_settings?: notificationSettingsOptional,
  reply_markup_message_id?: number,
  draft_message?: draftMessageOptional,
  client_data?: string,
|}

export type chatActionTyping = {
  _: 'chatActionTyping',
}

export type chatActionTypingOptional = {|
  _: 'chatActionTyping',
|}

export type chatActionRecordingVideo = {
  _: 'chatActionRecordingVideo',
}

export type chatActionRecordingVideoOptional = {|
  _: 'chatActionRecordingVideo',
|}

export type chatActionUploadingVideo = {
  _: 'chatActionUploadingVideo',
  progress: number,
}

export type chatActionUploadingVideoOptional = {|
  _: 'chatActionUploadingVideo',
  progress?: number,
|}

export type chatActionRecordingVoiceNote = {
  _: 'chatActionRecordingVoiceNote',
}

export type chatActionRecordingVoiceNoteOptional = {|
  _: 'chatActionRecordingVoiceNote',
|}

export type chatActionUploadingVoiceNote = {
  _: 'chatActionUploadingVoiceNote',
  progress: number,
}

export type chatActionUploadingVoiceNoteOptional = {|
  _: 'chatActionUploadingVoiceNote',
  progress?: number,
|}

export type chatActionUploadingPhoto = {
  _: 'chatActionUploadingPhoto',
  progress: number,
}

export type chatActionUploadingPhotoOptional = {|
  _: 'chatActionUploadingPhoto',
  progress?: number,
|}

export type chatActionUploadingDocument = {
  _: 'chatActionUploadingDocument',
  progress: number,
}

export type chatActionUploadingDocumentOptional = {|
  _: 'chatActionUploadingDocument',
  progress?: number,
|}

export type chatActionChoosingLocation = {
  _: 'chatActionChoosingLocation',
}

export type chatActionChoosingLocationOptional = {|
  _: 'chatActionChoosingLocation',
|}

export type chatActionChoosingContact = {
  _: 'chatActionChoosingContact',
}

export type chatActionChoosingContactOptional = {|
  _: 'chatActionChoosingContact',
|}

export type chatActionStartPlayingGame = {
  _: 'chatActionStartPlayingGame',
}

export type chatActionStartPlayingGameOptional = {|
  _: 'chatActionStartPlayingGame',
|}

export type chatActionRecordingVideoNote = {
  _: 'chatActionRecordingVideoNote',
}

export type chatActionRecordingVideoNoteOptional = {|
  _: 'chatActionRecordingVideoNote',
|}

export type chatActionUploadingVideoNote = {
  _: 'chatActionUploadingVideoNote',
  progress: number,
}

export type chatActionUploadingVideoNoteOptional = {|
  _: 'chatActionUploadingVideoNote',
  progress?: number,
|}

export type chatActionCancel = {
  _: 'chatActionCancel',
}

export type chatActionCancelOptional = {|
  _: 'chatActionCancel',
|}

export type chatEvent = {
  _: 'chatEvent',
  id: number,
  date: number,
  user_id: number,
  action: ChatEventAction,
}

export type chatEventOptional = {|
  _: 'chatEvent',
  id?: number,
  date?: number,
  user_id?: number,
  action?: ChatEventActionOptional,
|}

export type chatEventMessageEdited = {
  _: 'chatEventMessageEdited',
  old_message: message,
  new_message: message,
}

export type chatEventMessageEditedOptional = {|
  _: 'chatEventMessageEdited',
  old_message?: messageOptional,
  new_message?: messageOptional,
|}

export type chatEventMessageDeleted = {
  _: 'chatEventMessageDeleted',
  message: message,
}

export type chatEventMessageDeletedOptional = {|
  _: 'chatEventMessageDeleted',
  message?: messageOptional,
|}

export type chatEventMessagePinned = {
  _: 'chatEventMessagePinned',
  message: message,
}

export type chatEventMessagePinnedOptional = {|
  _: 'chatEventMessagePinned',
  message?: messageOptional,
|}

export type chatEventMessageUnpinned = {
  _: 'chatEventMessageUnpinned',
}

export type chatEventMessageUnpinnedOptional = {|
  _: 'chatEventMessageUnpinned',
|}

export type chatEventMemberJoined = {
  _: 'chatEventMemberJoined',
}

export type chatEventMemberJoinedOptional = {|
  _: 'chatEventMemberJoined',
|}

export type chatEventMemberLeft = {
  _: 'chatEventMemberLeft',
}

export type chatEventMemberLeftOptional = {|
  _: 'chatEventMemberLeft',
|}

export type chatEventMemberInvited = {
  _: 'chatEventMemberInvited',
  user_id: number,
  status: ChatMemberStatus,
}

export type chatEventMemberInvitedOptional = {|
  _: 'chatEventMemberInvited',
  user_id?: number,
  status?: ChatMemberStatusOptional,
|}

export type chatEventMemberPromoted = {
  _: 'chatEventMemberPromoted',
  user_id: number,
  old_status: ChatMemberStatus,
  new_status: ChatMemberStatus,
}

export type chatEventMemberPromotedOptional = {|
  _: 'chatEventMemberPromoted',
  user_id?: number,
  old_status?: ChatMemberStatusOptional,
  new_status?: ChatMemberStatusOptional,
|}

export type chatEventMemberRestricted = {
  _: 'chatEventMemberRestricted',
  user_id: number,
  old_status: ChatMemberStatus,
  new_status: ChatMemberStatus,
}

export type chatEventMemberRestrictedOptional = {|
  _: 'chatEventMemberRestricted',
  user_id?: number,
  old_status?: ChatMemberStatusOptional,
  new_status?: ChatMemberStatusOptional,
|}

export type chatEventTitleChanged = {
  _: 'chatEventTitleChanged',
  old_title: string,
  new_title: string,
}

export type chatEventTitleChangedOptional = {|
  _: 'chatEventTitleChanged',
  old_title?: string,
  new_title?: string,
|}

export type chatEventDescriptionChanged = {
  _: 'chatEventDescriptionChanged',
  old_description: string,
  new_description: string,
}

export type chatEventDescriptionChangedOptional = {|
  _: 'chatEventDescriptionChanged',
  old_description?: string,
  new_description?: string,
|}

export type chatEventUsernameChanged = {
  _: 'chatEventUsernameChanged',
  old_username: string,
  new_username: string,
}

export type chatEventUsernameChangedOptional = {|
  _: 'chatEventUsernameChanged',
  old_username?: string,
  new_username?: string,
|}

export type chatEventPhotoChanged = {
  _: 'chatEventPhotoChanged',
  old_photo: chatPhoto,
  new_photo: chatPhoto,
}

export type chatEventPhotoChangedOptional = {|
  _: 'chatEventPhotoChanged',
  old_photo?: chatPhotoOptional,
  new_photo?: chatPhotoOptional,
|}

export type chatEventInvitesToggled = {
  _: 'chatEventInvitesToggled',
  anyone_can_invite: boolean,
}

export type chatEventInvitesToggledOptional = {|
  _: 'chatEventInvitesToggled',
  anyone_can_invite?: boolean,
|}

export type chatEventSignMessagesToggled = {
  _: 'chatEventSignMessagesToggled',
  sign_messages: boolean,
}

export type chatEventSignMessagesToggledOptional = {|
  _: 'chatEventSignMessagesToggled',
  sign_messages?: boolean,
|}

export type chatEventStickerSetChanged = {
  _: 'chatEventStickerSetChanged',
  old_sticker_set_id: number,
  new_sticker_set_id: number,
}

export type chatEventStickerSetChangedOptional = {|
  _: 'chatEventStickerSetChanged',
  old_sticker_set_id?: number,
  new_sticker_set_id?: number,
|}

export type chatEventIsAllHistoryAvailableToggled = {
  _: 'chatEventIsAllHistoryAvailableToggled',
  is_all_history_available: boolean,
}

export type chatEventIsAllHistoryAvailableToggledOptional = {|
  _: 'chatEventIsAllHistoryAvailableToggled',
  is_all_history_available?: boolean,
|}

export type chatEventLogFilters = {
  _: 'chatEventLogFilters',
  message_edits: boolean,
  message_deletions: boolean,
  message_pins: boolean,
  member_joins: boolean,
  member_leaves: boolean,
  member_invites: boolean,
  member_promotions: boolean,
  member_restrictions: boolean,
  info_changes: boolean,
  setting_changes: boolean,
}

export type chatEventLogFiltersOptional = {|
  _: 'chatEventLogFilters',
  message_edits?: boolean,
  message_deletions?: boolean,
  message_pins?: boolean,
  member_joins?: boolean,
  member_leaves?: boolean,
  member_invites?: boolean,
  member_promotions?: boolean,
  member_restrictions?: boolean,
  info_changes?: boolean,
  setting_changes?: boolean,
|}

export type chatEvents = {
  _: 'chatEvents',
  events: chatEvent[],
}

export type chatEventsOptional = {|
  _: 'chatEvents',
  events?: chatEventOptional[],
|}

export type chatInviteLink = {
  _: 'chatInviteLink',
  invite_link: string,
}

export type chatInviteLinkOptional = {|
  _: 'chatInviteLink',
  invite_link?: string,
|}

export type chatInviteLinkInfo = {
  _: 'chatInviteLinkInfo',
  chat_id: number,
  type: ChatType,
  title: string,
  photo: chatPhoto,
  member_count: number,
  member_user_ids: number,
  is_public: boolean,
}

export type chatInviteLinkInfoOptional = {|
  _: 'chatInviteLinkInfo',
  chat_id?: number,
  type?: ChatTypeOptional,
  title?: string,
  photo?: chatPhotoOptional,
  member_count?: number,
  member_user_ids?: number,
  is_public?: boolean,
|}

export type chatMember = {
  _: 'chatMember',
  user_id: number,
  inviter_user_id: number,
  joined_chat_date: number,
  status: ChatMemberStatus,
  bot_info: botInfo,
}

export type chatMemberOptional = {|
  _: 'chatMember',
  user_id?: number,
  inviter_user_id?: number,
  joined_chat_date?: number,
  status?: ChatMemberStatusOptional,
  bot_info?: botInfoOptional,
|}

export type chatMemberStatusCreator = {
  _: 'chatMemberStatusCreator',
  is_member: boolean,
}

export type chatMemberStatusCreatorOptional = {|
  _: 'chatMemberStatusCreator',
  is_member?: boolean,
|}

export type chatMemberStatusAdministrator = {
  _: 'chatMemberStatusAdministrator',
  can_be_edited: boolean,
  can_change_info: boolean,
  can_post_messages: boolean,
  can_edit_messages: boolean,
  can_delete_messages: boolean,
  can_invite_users: boolean,
  can_restrict_members: boolean,
  can_pin_messages: boolean,
  can_promote_members: boolean,
}

export type chatMemberStatusAdministratorOptional = {|
  _: 'chatMemberStatusAdministrator',
  can_be_edited?: boolean,
  can_change_info?: boolean,
  can_post_messages?: boolean,
  can_edit_messages?: boolean,
  can_delete_messages?: boolean,
  can_invite_users?: boolean,
  can_restrict_members?: boolean,
  can_pin_messages?: boolean,
  can_promote_members?: boolean,
|}

export type chatMemberStatusMember = {
  _: 'chatMemberStatusMember',
}

export type chatMemberStatusMemberOptional = {|
  _: 'chatMemberStatusMember',
|}

export type chatMemberStatusRestricted = {
  _: 'chatMemberStatusRestricted',
  is_member: boolean,
  restricted_until_date: number,
  can_send_messages: boolean,
  can_send_media_messages: boolean,
  can_send_other_messages: boolean,
  can_add_web_page_previews: boolean,
}

export type chatMemberStatusRestrictedOptional = {|
  _: 'chatMemberStatusRestricted',
  is_member?: boolean,
  restricted_until_date?: number,
  can_send_messages?: boolean,
  can_send_media_messages?: boolean,
  can_send_other_messages?: boolean,
  can_add_web_page_previews?: boolean,
|}

export type chatMemberStatusLeft = {
  _: 'chatMemberStatusLeft',
}

export type chatMemberStatusLeftOptional = {|
  _: 'chatMemberStatusLeft',
|}

export type chatMemberStatusBanned = {
  _: 'chatMemberStatusBanned',
  banned_until_date: number,
}

export type chatMemberStatusBannedOptional = {|
  _: 'chatMemberStatusBanned',
  banned_until_date?: number,
|}

export type chatMembers = {
  _: 'chatMembers',
  total_count: number,
  members: chatMember[],
}

export type chatMembersOptional = {|
  _: 'chatMembers',
  total_count?: number,
  members?: chatMemberOptional[],
|}

export type chatPhoto = {
  _: 'chatPhoto',
  small: file,
  big: file,
}

export type chatPhotoOptional = {|
  _: 'chatPhoto',
  small?: fileOptional,
  big?: fileOptional,
|}

export type chatReportReasonSpam = {
  _: 'chatReportReasonSpam',
}

export type chatReportReasonSpamOptional = {|
  _: 'chatReportReasonSpam',
|}

export type chatReportReasonViolence = {
  _: 'chatReportReasonViolence',
}

export type chatReportReasonViolenceOptional = {|
  _: 'chatReportReasonViolence',
|}

export type chatReportReasonPornography = {
  _: 'chatReportReasonPornography',
}

export type chatReportReasonPornographyOptional = {|
  _: 'chatReportReasonPornography',
|}

export type chatReportReasonCustom = {
  _: 'chatReportReasonCustom',
  text: string,
}

export type chatReportReasonCustomOptional = {|
  _: 'chatReportReasonCustom',
  text?: string,
|}

export type chatReportSpamState = {
  _: 'chatReportSpamState',
  can_report_spam: boolean,
}

export type chatReportSpamStateOptional = {|
  _: 'chatReportSpamState',
  can_report_spam?: boolean,
|}

export type chatTypePrivate = {
  _: 'chatTypePrivate',
  user_id: number,
}

export type chatTypePrivateOptional = {|
  _: 'chatTypePrivate',
  user_id?: number,
|}

export type chatTypeBasicGroup = {
  _: 'chatTypeBasicGroup',
  basic_group_id: number,
}

export type chatTypeBasicGroupOptional = {|
  _: 'chatTypeBasicGroup',
  basic_group_id?: number,
|}

export type chatTypeSupergroup = {
  _: 'chatTypeSupergroup',
  supergroup_id: number,
  is_channel: boolean,
}

export type chatTypeSupergroupOptional = {|
  _: 'chatTypeSupergroup',
  supergroup_id?: number,
  is_channel?: boolean,
|}

export type chatTypeSecret = {
  _: 'chatTypeSecret',
  secret_chat_id: number,
  user_id: number,
}

export type chatTypeSecretOptional = {|
  _: 'chatTypeSecret',
  secret_chat_id?: number,
  user_id?: number,
|}

export type chats = {
  _: 'chats',
  chat_ids: number,
}

export type chatsOptional = {|
  _: 'chats',
  chat_ids?: number,
|}

export type checkChatUsernameResultOk = {
  _: 'checkChatUsernameResultOk',
}

export type checkChatUsernameResultOkOptional = {|
  _: 'checkChatUsernameResultOk',
|}

export type checkChatUsernameResultUsernameInvalid = {
  _: 'checkChatUsernameResultUsernameInvalid',
}

export type checkChatUsernameResultUsernameInvalidOptional = {|
  _: 'checkChatUsernameResultUsernameInvalid',
|}

export type checkChatUsernameResultUsernameOccupied = {
  _: 'checkChatUsernameResultUsernameOccupied',
}

export type checkChatUsernameResultUsernameOccupiedOptional = {|
  _: 'checkChatUsernameResultUsernameOccupied',
|}

export type checkChatUsernameResultPublicChatsTooMuch = {
  _: 'checkChatUsernameResultPublicChatsTooMuch',
}

export type checkChatUsernameResultPublicChatsTooMuchOptional = {|
  _: 'checkChatUsernameResultPublicChatsTooMuch',
|}

export type checkChatUsernameResultPublicGroupsUnavailable = {
  _: 'checkChatUsernameResultPublicGroupsUnavailable',
}

export type checkChatUsernameResultPublicGroupsUnavailableOptional = {|
  _: 'checkChatUsernameResultPublicGroupsUnavailable',
|}

export type connectedWebsite = {
  _: 'connectedWebsite',
  id: number,
  domain_name: string,
  bot_user_id: number,
  browser: string,
  platform: string,
  log_in_date: number,
  last_active_date: number,
  ip: string,
  location: string,
}

export type connectedWebsiteOptional = {|
  _: 'connectedWebsite',
  id?: number,
  domain_name?: string,
  bot_user_id?: number,
  browser?: string,
  platform?: string,
  log_in_date?: number,
  last_active_date?: number,
  ip?: string,
  location?: string,
|}

export type connectedWebsites = {
  _: 'connectedWebsites',
  websites: connectedWebsite[],
}

export type connectedWebsitesOptional = {|
  _: 'connectedWebsites',
  websites?: connectedWebsiteOptional[],
|}

export type connectionStateWaitingForNetwork = {
  _: 'connectionStateWaitingForNetwork',
}

export type connectionStateWaitingForNetworkOptional = {|
  _: 'connectionStateWaitingForNetwork',
|}

export type connectionStateConnectingToProxy = {
  _: 'connectionStateConnectingToProxy',
}

export type connectionStateConnectingToProxyOptional = {|
  _: 'connectionStateConnectingToProxy',
|}

export type connectionStateConnecting = {
  _: 'connectionStateConnecting',
}

export type connectionStateConnectingOptional = {|
  _: 'connectionStateConnecting',
|}

export type connectionStateUpdating = {
  _: 'connectionStateUpdating',
}

export type connectionStateUpdatingOptional = {|
  _: 'connectionStateUpdating',
|}

export type connectionStateReady = {
  _: 'connectionStateReady',
}

export type connectionStateReadyOptional = {|
  _: 'connectionStateReady',
|}

export type contact = {
  _: 'contact',
  phone_number: string,
  first_name: string,
  last_name: string,
  user_id: number,
}

export type contactOptional = {|
  _: 'contact',
  phone_number?: string,
  first_name?: string,
  last_name?: string,
  user_id?: number,
|}

export type count = {
  _: 'count',
  count: number,
}

export type countOptional = {|
  _: 'count',
  count?: number,
|}

export type customRequestResult = {
  _: 'customRequestResult',
  result: string,
}

export type customRequestResultOptional = {|
  _: 'customRequestResult',
  result?: string,
|}

export type deviceTokenGoogleCloudMessaging = {
  _: 'deviceTokenGoogleCloudMessaging',
  token: string,
}

export type deviceTokenGoogleCloudMessagingOptional = {|
  _: 'deviceTokenGoogleCloudMessaging',
  token?: string,
|}

export type deviceTokenApplePush = {
  _: 'deviceTokenApplePush',
  device_token: string,
  is_app_sandbox: boolean,
}

export type deviceTokenApplePushOptional = {|
  _: 'deviceTokenApplePush',
  device_token?: string,
  is_app_sandbox?: boolean,
|}

export type deviceTokenApplePushVoIP = {
  _: 'deviceTokenApplePushVoIP',
  device_token: string,
  is_app_sandbox: boolean,
}

export type deviceTokenApplePushVoIPOptional = {|
  _: 'deviceTokenApplePushVoIP',
  device_token?: string,
  is_app_sandbox?: boolean,
|}

export type deviceTokenWindowsPush = {
  _: 'deviceTokenWindowsPush',
  access_token: string,
}

export type deviceTokenWindowsPushOptional = {|
  _: 'deviceTokenWindowsPush',
  access_token?: string,
|}

export type deviceTokenMicrosoftPush = {
  _: 'deviceTokenMicrosoftPush',
  channel_uri: string,
}

export type deviceTokenMicrosoftPushOptional = {|
  _: 'deviceTokenMicrosoftPush',
  channel_uri?: string,
|}

export type deviceTokenMicrosoftPushVoIP = {
  _: 'deviceTokenMicrosoftPushVoIP',
  channel_uri: string,
}

export type deviceTokenMicrosoftPushVoIPOptional = {|
  _: 'deviceTokenMicrosoftPushVoIP',
  channel_uri?: string,
|}

export type deviceTokenWebPush = {
  _: 'deviceTokenWebPush',
  endpoint: string,
  p256dh_base64url: string,
  auth_base64url: string,
}

export type deviceTokenWebPushOptional = {|
  _: 'deviceTokenWebPush',
  endpoint?: string,
  p256dh_base64url?: string,
  auth_base64url?: string,
|}

export type deviceTokenSimplePush = {
  _: 'deviceTokenSimplePush',
  endpoint: string,
}

export type deviceTokenSimplePushOptional = {|
  _: 'deviceTokenSimplePush',
  endpoint?: string,
|}

export type deviceTokenUbuntuPush = {
  _: 'deviceTokenUbuntuPush',
  token: string,
}

export type deviceTokenUbuntuPushOptional = {|
  _: 'deviceTokenUbuntuPush',
  token?: string,
|}

export type deviceTokenBlackBerryPush = {
  _: 'deviceTokenBlackBerryPush',
  token: string,
}

export type deviceTokenBlackBerryPushOptional = {|
  _: 'deviceTokenBlackBerryPush',
  token?: string,
|}

export type deviceTokenTizenPush = {
  _: 'deviceTokenTizenPush',
  reg_id: string,
}

export type deviceTokenTizenPushOptional = {|
  _: 'deviceTokenTizenPush',
  reg_id?: string,
|}

export type document = {
  _: 'document',
  file_name: string,
  mime_type: string,
  thumbnail: photoSize,
  document: file,
}

export type documentOptional = {|
  _: 'document',
  file_name?: string,
  mime_type?: string,
  thumbnail?: photoSizeOptional,
  document?: fileOptional,
|}

export type draftMessage = {
  _: 'draftMessage',
  reply_to_message_id: number,
  input_message_text: InputMessageContent,
}

export type draftMessageOptional = {|
  _: 'draftMessage',
  reply_to_message_id?: number,
  input_message_text?: InputMessageContentOptional,
|}

export type error = {
  _: 'error',
  code: number,
  message: string,
}

export type errorOptional = {|
  _: 'error',
  code?: number,
  message?: string,
|}

export type file = {
  _: 'file',
  id: number,
  size: number,
  expected_size: number,
  local: localFile,
  remote: remoteFile,
}

export type fileOptional = {|
  _: 'file',
  id?: number,
  size?: number,
  expected_size?: number,
  local?: localFileOptional,
  remote?: remoteFileOptional,
|}

export type fileTypeNone = {
  _: 'fileTypeNone',
}

export type fileTypeNoneOptional = {|
  _: 'fileTypeNone',
|}

export type fileTypeAnimation = {
  _: 'fileTypeAnimation',
}

export type fileTypeAnimationOptional = {|
  _: 'fileTypeAnimation',
|}

export type fileTypeAudio = {
  _: 'fileTypeAudio',
}

export type fileTypeAudioOptional = {|
  _: 'fileTypeAudio',
|}

export type fileTypeDocument = {
  _: 'fileTypeDocument',
}

export type fileTypeDocumentOptional = {|
  _: 'fileTypeDocument',
|}

export type fileTypePhoto = {
  _: 'fileTypePhoto',
}

export type fileTypePhotoOptional = {|
  _: 'fileTypePhoto',
|}

export type fileTypeProfilePhoto = {
  _: 'fileTypeProfilePhoto',
}

export type fileTypeProfilePhotoOptional = {|
  _: 'fileTypeProfilePhoto',
|}

export type fileTypeSecret = {
  _: 'fileTypeSecret',
}

export type fileTypeSecretOptional = {|
  _: 'fileTypeSecret',
|}

export type fileTypeSticker = {
  _: 'fileTypeSticker',
}

export type fileTypeStickerOptional = {|
  _: 'fileTypeSticker',
|}

export type fileTypeThumbnail = {
  _: 'fileTypeThumbnail',
}

export type fileTypeThumbnailOptional = {|
  _: 'fileTypeThumbnail',
|}

export type fileTypeUnknown = {
  _: 'fileTypeUnknown',
}

export type fileTypeUnknownOptional = {|
  _: 'fileTypeUnknown',
|}

export type fileTypeVideo = {
  _: 'fileTypeVideo',
}

export type fileTypeVideoOptional = {|
  _: 'fileTypeVideo',
|}

export type fileTypeVideoNote = {
  _: 'fileTypeVideoNote',
}

export type fileTypeVideoNoteOptional = {|
  _: 'fileTypeVideoNote',
|}

export type fileTypeVoiceNote = {
  _: 'fileTypeVoiceNote',
}

export type fileTypeVoiceNoteOptional = {|
  _: 'fileTypeVoiceNote',
|}

export type fileTypeWallpaper = {
  _: 'fileTypeWallpaper',
}

export type fileTypeWallpaperOptional = {|
  _: 'fileTypeWallpaper',
|}

export type fileTypeSecretThumbnail = {
  _: 'fileTypeSecretThumbnail',
}

export type fileTypeSecretThumbnailOptional = {|
  _: 'fileTypeSecretThumbnail',
|}

export type formattedText = {
  _: 'formattedText',
  text: string,
  entities: textEntity[],
}

export type formattedTextOptional = {|
  _: 'formattedText',
  text?: string,
  entities?: textEntityOptional[],
|}

export type foundMessages = {
  _: 'foundMessages',
  messages: message[],
  next_from_search_id: number,
}

export type foundMessagesOptional = {|
  _: 'foundMessages',
  messages?: messageOptional[],
  next_from_search_id?: number,
|}

export type game = {
  _: 'game',
  id: number,
  short_name: string,
  title: string,
  text: formattedText,
  description: string,
  photo: photo,
  animation: animation,
}

export type gameOptional = {|
  _: 'game',
  id?: number,
  short_name?: string,
  title?: string,
  text?: formattedTextOptional,
  description?: string,
  photo?: photoOptional,
  animation?: animationOptional,
|}

export type gameHighScore = {
  _: 'gameHighScore',
  position: number,
  user_id: number,
  score: number,
}

export type gameHighScoreOptional = {|
  _: 'gameHighScore',
  position?: number,
  user_id?: number,
  score?: number,
|}

export type gameHighScores = {
  _: 'gameHighScores',
  scores: gameHighScore[],
}

export type gameHighScoresOptional = {|
  _: 'gameHighScores',
  scores?: gameHighScoreOptional[],
|}

export type hashtags = {
  _: 'hashtags',
  hashtags: string,
}

export type hashtagsOptional = {|
  _: 'hashtags',
  hashtags?: string,
|}

export type importedContacts = {
  _: 'importedContacts',
  user_ids: number,
  importer_count: number,
}

export type importedContactsOptional = {|
  _: 'importedContacts',
  user_ids?: number,
  importer_count?: number,
|}

export type inlineKeyboardButton = {
  _: 'inlineKeyboardButton',
  text: string,
  type: InlineKeyboardButtonType,
}

export type inlineKeyboardButtonOptional = {|
  _: 'inlineKeyboardButton',
  text?: string,
  type?: InlineKeyboardButtonTypeOptional,
|}

export type inlineKeyboardButtonTypeUrl = {
  _: 'inlineKeyboardButtonTypeUrl',
  url: string,
}

export type inlineKeyboardButtonTypeUrlOptional = {|
  _: 'inlineKeyboardButtonTypeUrl',
  url?: string,
|}

export type inlineKeyboardButtonTypeCallback = {
  _: 'inlineKeyboardButtonTypeCallback',
  data: string,
}

export type inlineKeyboardButtonTypeCallbackOptional = {|
  _: 'inlineKeyboardButtonTypeCallback',
  data?: string,
|}

export type inlineKeyboardButtonTypeCallbackGame = {
  _: 'inlineKeyboardButtonTypeCallbackGame',
}

export type inlineKeyboardButtonTypeCallbackGameOptional = {|
  _: 'inlineKeyboardButtonTypeCallbackGame',
|}

export type inlineKeyboardButtonTypeSwitchInline = {
  _: 'inlineKeyboardButtonTypeSwitchInline',
  query: string,
  in_current_chat: boolean,
}

export type inlineKeyboardButtonTypeSwitchInlineOptional = {|
  _: 'inlineKeyboardButtonTypeSwitchInline',
  query?: string,
  in_current_chat?: boolean,
|}

export type inlineKeyboardButtonTypeBuy = {
  _: 'inlineKeyboardButtonTypeBuy',
}

export type inlineKeyboardButtonTypeBuyOptional = {|
  _: 'inlineKeyboardButtonTypeBuy',
|}

export type inlineQueryResultArticle = {
  _: 'inlineQueryResultArticle',
  id: string,
  url: string,
  hide_url: boolean,
  title: string,
  description: string,
  thumbnail: photoSize,
}

export type inlineQueryResultArticleOptional = {|
  _: 'inlineQueryResultArticle',
  id?: string,
  url?: string,
  hide_url?: boolean,
  title?: string,
  description?: string,
  thumbnail?: photoSizeOptional,
|}

export type inlineQueryResultContact = {
  _: 'inlineQueryResultContact',
  id: string,
  contact: contact,
  thumbnail: photoSize,
}

export type inlineQueryResultContactOptional = {|
  _: 'inlineQueryResultContact',
  id?: string,
  contact?: contactOptional,
  thumbnail?: photoSizeOptional,
|}

export type inlineQueryResultLocation = {
  _: 'inlineQueryResultLocation',
  id: string,
  location: location,
  title: string,
  thumbnail: photoSize,
}

export type inlineQueryResultLocationOptional = {|
  _: 'inlineQueryResultLocation',
  id?: string,
  location?: locationOptional,
  title?: string,
  thumbnail?: photoSizeOptional,
|}

export type inlineQueryResultVenue = {
  _: 'inlineQueryResultVenue',
  id: string,
  venue: venue,
  thumbnail: photoSize,
}

export type inlineQueryResultVenueOptional = {|
  _: 'inlineQueryResultVenue',
  id?: string,
  venue?: venueOptional,
  thumbnail?: photoSizeOptional,
|}

export type inlineQueryResultGame = {
  _: 'inlineQueryResultGame',
  id: string,
  game: game,
}

export type inlineQueryResultGameOptional = {|
  _: 'inlineQueryResultGame',
  id?: string,
  game?: gameOptional,
|}

export type inlineQueryResultAnimation = {
  _: 'inlineQueryResultAnimation',
  id: string,
  animation: animation,
  title: string,
}

export type inlineQueryResultAnimationOptional = {|
  _: 'inlineQueryResultAnimation',
  id?: string,
  animation?: animationOptional,
  title?: string,
|}

export type inlineQueryResultAudio = {
  _: 'inlineQueryResultAudio',
  id: string,
  audio: audio,
}

export type inlineQueryResultAudioOptional = {|
  _: 'inlineQueryResultAudio',
  id?: string,
  audio?: audioOptional,
|}

export type inlineQueryResultDocument = {
  _: 'inlineQueryResultDocument',
  id: string,
  document: document,
  title: string,
  description: string,
}

export type inlineQueryResultDocumentOptional = {|
  _: 'inlineQueryResultDocument',
  id?: string,
  document?: documentOptional,
  title?: string,
  description?: string,
|}

export type inlineQueryResultPhoto = {
  _: 'inlineQueryResultPhoto',
  id: string,
  photo: photo,
  title: string,
  description: string,
}

export type inlineQueryResultPhotoOptional = {|
  _: 'inlineQueryResultPhoto',
  id?: string,
  photo?: photoOptional,
  title?: string,
  description?: string,
|}

export type inlineQueryResultSticker = {
  _: 'inlineQueryResultSticker',
  id: string,
  sticker: sticker,
}

export type inlineQueryResultStickerOptional = {|
  _: 'inlineQueryResultSticker',
  id?: string,
  sticker?: stickerOptional,
|}

export type inlineQueryResultVideo = {
  _: 'inlineQueryResultVideo',
  id: string,
  video: video,
  title: string,
  description: string,
}

export type inlineQueryResultVideoOptional = {|
  _: 'inlineQueryResultVideo',
  id?: string,
  video?: videoOptional,
  title?: string,
  description?: string,
|}

export type inlineQueryResultVoiceNote = {
  _: 'inlineQueryResultVoiceNote',
  id: string,
  voice_note: voiceNote,
  title: string,
}

export type inlineQueryResultVoiceNoteOptional = {|
  _: 'inlineQueryResultVoiceNote',
  id?: string,
  voice_note?: voiceNoteOptional,
  title?: string,
|}

export type inlineQueryResults = {
  _: 'inlineQueryResults',
  inline_query_id: number,
  next_offset: string,
  results: InlineQueryResult[],
  switch_pm_text: string,
  switch_pm_parameter: string,
}

export type inlineQueryResultsOptional = {|
  _: 'inlineQueryResults',
  inline_query_id?: number,
  next_offset?: string,
  results?: InlineQueryResultOptional[],
  switch_pm_text?: string,
  switch_pm_parameter?: string,
|}

export type inputCredentialsSaved = {
  _: 'inputCredentialsSaved',
  saved_credentials_id: string,
}

export type inputCredentialsSavedOptional = {|
  _: 'inputCredentialsSaved',
  saved_credentials_id?: string,
|}

export type inputCredentialsNew = {
  _: 'inputCredentialsNew',
  data: string,
  allow_save: boolean,
}

export type inputCredentialsNewOptional = {|
  _: 'inputCredentialsNew',
  data?: string,
  allow_save?: boolean,
|}

export type inputCredentialsAndroidPay = {
  _: 'inputCredentialsAndroidPay',
  data: string,
}

export type inputCredentialsAndroidPayOptional = {|
  _: 'inputCredentialsAndroidPay',
  data?: string,
|}

export type inputCredentialsApplePay = {
  _: 'inputCredentialsApplePay',
  data: string,
}

export type inputCredentialsApplePayOptional = {|
  _: 'inputCredentialsApplePay',
  data?: string,
|}

export type inputFileId = {
  _: 'inputFileId',
  id: number,
}

export type inputFileIdOptional = {|
  _: 'inputFileId',
  id?: number,
|}

export type inputFileRemote = {
  _: 'inputFileRemote',
  id: string,
}

export type inputFileRemoteOptional = {|
  _: 'inputFileRemote',
  id?: string,
|}

export type inputFileLocal = {
  _: 'inputFileLocal',
  path: string,
}

export type inputFileLocalOptional = {|
  _: 'inputFileLocal',
  path?: string,
|}

export type inputFileGenerated = {
  _: 'inputFileGenerated',
  original_path: string,
  conversion: string,
  expected_size: number,
}

export type inputFileGeneratedOptional = {|
  _: 'inputFileGenerated',
  original_path?: string,
  conversion?: string,
  expected_size?: number,
|}

export type inputInlineQueryResultAnimatedGif = {
  _: 'inputInlineQueryResultAnimatedGif',
  id: string,
  title: string,
  thumbnail_url: string,
  gif_url: string,
  gif_duration: number,
  gif_width: number,
  gif_height: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultAnimatedGifOptional = {|
  _: 'inputInlineQueryResultAnimatedGif',
  id?: string,
  title?: string,
  thumbnail_url?: string,
  gif_url?: string,
  gif_duration?: number,
  gif_width?: number,
  gif_height?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultAnimatedMpeg4 = {
  _: 'inputInlineQueryResultAnimatedMpeg4',
  id: string,
  title: string,
  thumbnail_url: string,
  mpeg4_url: string,
  mpeg4_duration: number,
  mpeg4_width: number,
  mpeg4_height: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultAnimatedMpeg4Optional = {|
  _: 'inputInlineQueryResultAnimatedMpeg4',
  id?: string,
  title?: string,
  thumbnail_url?: string,
  mpeg4_url?: string,
  mpeg4_duration?: number,
  mpeg4_width?: number,
  mpeg4_height?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultArticle = {
  _: 'inputInlineQueryResultArticle',
  id: string,
  url: string,
  hide_url: boolean,
  title: string,
  description: string,
  thumbnail_url: string,
  thumbnail_width: number,
  thumbnail_height: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultArticleOptional = {|
  _: 'inputInlineQueryResultArticle',
  id?: string,
  url?: string,
  hide_url?: boolean,
  title?: string,
  description?: string,
  thumbnail_url?: string,
  thumbnail_width?: number,
  thumbnail_height?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultAudio = {
  _: 'inputInlineQueryResultAudio',
  id: string,
  title: string,
  performer: string,
  audio_url: string,
  audio_duration: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultAudioOptional = {|
  _: 'inputInlineQueryResultAudio',
  id?: string,
  title?: string,
  performer?: string,
  audio_url?: string,
  audio_duration?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultContact = {
  _: 'inputInlineQueryResultContact',
  id: string,
  contact: contact,
  thumbnail_url: string,
  thumbnail_width: number,
  thumbnail_height: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultContactOptional = {|
  _: 'inputInlineQueryResultContact',
  id?: string,
  contact?: contactOptional,
  thumbnail_url?: string,
  thumbnail_width?: number,
  thumbnail_height?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultDocument = {
  _: 'inputInlineQueryResultDocument',
  id: string,
  title: string,
  description: string,
  document_url: string,
  mime_type: string,
  thumbnail_url: string,
  thumbnail_width: number,
  thumbnail_height: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultDocumentOptional = {|
  _: 'inputInlineQueryResultDocument',
  id?: string,
  title?: string,
  description?: string,
  document_url?: string,
  mime_type?: string,
  thumbnail_url?: string,
  thumbnail_width?: number,
  thumbnail_height?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultGame = {
  _: 'inputInlineQueryResultGame',
  id: string,
  game_short_name: string,
  reply_markup: ReplyMarkup,
}

export type inputInlineQueryResultGameOptional = {|
  _: 'inputInlineQueryResultGame',
  id?: string,
  game_short_name?: string,
  reply_markup?: ReplyMarkupOptional,
|}

export type inputInlineQueryResultLocation = {
  _: 'inputInlineQueryResultLocation',
  id: string,
  location: location,
  live_period: number,
  title: string,
  thumbnail_url: string,
  thumbnail_width: number,
  thumbnail_height: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultLocationOptional = {|
  _: 'inputInlineQueryResultLocation',
  id?: string,
  location?: locationOptional,
  live_period?: number,
  title?: string,
  thumbnail_url?: string,
  thumbnail_width?: number,
  thumbnail_height?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultPhoto = {
  _: 'inputInlineQueryResultPhoto',
  id: string,
  title: string,
  description: string,
  thumbnail_url: string,
  photo_url: string,
  photo_width: number,
  photo_height: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultPhotoOptional = {|
  _: 'inputInlineQueryResultPhoto',
  id?: string,
  title?: string,
  description?: string,
  thumbnail_url?: string,
  photo_url?: string,
  photo_width?: number,
  photo_height?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultSticker = {
  _: 'inputInlineQueryResultSticker',
  id: string,
  thumbnail_url: string,
  sticker_url: string,
  sticker_width: number,
  sticker_height: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultStickerOptional = {|
  _: 'inputInlineQueryResultSticker',
  id?: string,
  thumbnail_url?: string,
  sticker_url?: string,
  sticker_width?: number,
  sticker_height?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultVenue = {
  _: 'inputInlineQueryResultVenue',
  id: string,
  venue: venue,
  thumbnail_url: string,
  thumbnail_width: number,
  thumbnail_height: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultVenueOptional = {|
  _: 'inputInlineQueryResultVenue',
  id?: string,
  venue?: venueOptional,
  thumbnail_url?: string,
  thumbnail_width?: number,
  thumbnail_height?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultVideo = {
  _: 'inputInlineQueryResultVideo',
  id: string,
  title: string,
  description: string,
  thumbnail_url: string,
  video_url: string,
  mime_type: string,
  video_width: number,
  video_height: number,
  video_duration: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultVideoOptional = {|
  _: 'inputInlineQueryResultVideo',
  id?: string,
  title?: string,
  description?: string,
  thumbnail_url?: string,
  video_url?: string,
  mime_type?: string,
  video_width?: number,
  video_height?: number,
  video_duration?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputInlineQueryResultVoiceNote = {
  _: 'inputInlineQueryResultVoiceNote',
  id: string,
  title: string,
  voice_note_url: string,
  voice_note_duration: number,
  reply_markup: ReplyMarkup,
  input_message_content: InputMessageContent,
}

export type inputInlineQueryResultVoiceNoteOptional = {|
  _: 'inputInlineQueryResultVoiceNote',
  id?: string,
  title?: string,
  voice_note_url?: string,
  voice_note_duration?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type inputMessageText = {
  _: 'inputMessageText',
  text: formattedText,
  disable_web_page_preview: boolean,
  clear_draft: boolean,
}

export type inputMessageTextOptional = {|
  _: 'inputMessageText',
  text?: formattedTextOptional,
  disable_web_page_preview?: boolean,
  clear_draft?: boolean,
|}

export type inputMessageAnimation = {
  _: 'inputMessageAnimation',
  animation: InputFile,
  thumbnail: inputThumbnail,
  duration: number,
  width: number,
  height: number,
  caption: formattedText,
}

export type inputMessageAnimationOptional = {|
  _: 'inputMessageAnimation',
  animation?: InputFileOptional,
  thumbnail?: inputThumbnailOptional,
  duration?: number,
  width?: number,
  height?: number,
  caption?: formattedTextOptional,
|}

export type inputMessageAudio = {
  _: 'inputMessageAudio',
  audio: InputFile,
  album_cover_thumbnail: inputThumbnail,
  duration: number,
  title: string,
  performer: string,
  caption: formattedText,
}

export type inputMessageAudioOptional = {|
  _: 'inputMessageAudio',
  audio?: InputFileOptional,
  album_cover_thumbnail?: inputThumbnailOptional,
  duration?: number,
  title?: string,
  performer?: string,
  caption?: formattedTextOptional,
|}

export type inputMessageDocument = {
  _: 'inputMessageDocument',
  document: InputFile,
  thumbnail: inputThumbnail,
  caption: formattedText,
}

export type inputMessageDocumentOptional = {|
  _: 'inputMessageDocument',
  document?: InputFileOptional,
  thumbnail?: inputThumbnailOptional,
  caption?: formattedTextOptional,
|}

export type inputMessagePhoto = {
  _: 'inputMessagePhoto',
  photo: InputFile,
  thumbnail: inputThumbnail,
  added_sticker_file_ids: number,
  width: number,
  height: number,
  caption: formattedText,
  ttl: number,
}

export type inputMessagePhotoOptional = {|
  _: 'inputMessagePhoto',
  photo?: InputFileOptional,
  thumbnail?: inputThumbnailOptional,
  added_sticker_file_ids?: number,
  width?: number,
  height?: number,
  caption?: formattedTextOptional,
  ttl?: number,
|}

export type inputMessageSticker = {
  _: 'inputMessageSticker',
  sticker: InputFile,
  thumbnail: inputThumbnail,
  width: number,
  height: number,
}

export type inputMessageStickerOptional = {|
  _: 'inputMessageSticker',
  sticker?: InputFileOptional,
  thumbnail?: inputThumbnailOptional,
  width?: number,
  height?: number,
|}

export type inputMessageVideo = {
  _: 'inputMessageVideo',
  video: InputFile,
  thumbnail: inputThumbnail,
  added_sticker_file_ids: number,
  duration: number,
  width: number,
  height: number,
  supports_streaming: boolean,
  caption: formattedText,
  ttl: number,
}

export type inputMessageVideoOptional = {|
  _: 'inputMessageVideo',
  video?: InputFileOptional,
  thumbnail?: inputThumbnailOptional,
  added_sticker_file_ids?: number,
  duration?: number,
  width?: number,
  height?: number,
  supports_streaming?: boolean,
  caption?: formattedTextOptional,
  ttl?: number,
|}

export type inputMessageVideoNote = {
  _: 'inputMessageVideoNote',
  video_note: InputFile,
  thumbnail: inputThumbnail,
  duration: number,
  length: number,
}

export type inputMessageVideoNoteOptional = {|
  _: 'inputMessageVideoNote',
  video_note?: InputFileOptional,
  thumbnail?: inputThumbnailOptional,
  duration?: number,
  length?: number,
|}

export type inputMessageVoiceNote = {
  _: 'inputMessageVoiceNote',
  voice_note: InputFile,
  duration: number,
  waveform: string,
  caption: formattedText,
}

export type inputMessageVoiceNoteOptional = {|
  _: 'inputMessageVoiceNote',
  voice_note?: InputFileOptional,
  duration?: number,
  waveform?: string,
  caption?: formattedTextOptional,
|}

export type inputMessageLocation = {
  _: 'inputMessageLocation',
  location: location,
  live_period: number,
}

export type inputMessageLocationOptional = {|
  _: 'inputMessageLocation',
  location?: locationOptional,
  live_period?: number,
|}

export type inputMessageVenue = {
  _: 'inputMessageVenue',
  venue: venue,
}

export type inputMessageVenueOptional = {|
  _: 'inputMessageVenue',
  venue?: venueOptional,
|}

export type inputMessageContact = {
  _: 'inputMessageContact',
  contact: contact,
}

export type inputMessageContactOptional = {|
  _: 'inputMessageContact',
  contact?: contactOptional,
|}

export type inputMessageGame = {
  _: 'inputMessageGame',
  bot_user_id: number,
  game_short_name: string,
}

export type inputMessageGameOptional = {|
  _: 'inputMessageGame',
  bot_user_id?: number,
  game_short_name?: string,
|}

export type inputMessageInvoice = {
  _: 'inputMessageInvoice',
  invoice: invoice,
  title: string,
  description: string,
  photo_url: string,
  photo_size: number,
  photo_width: number,
  photo_height: number,
  payload: string,
  provider_token: string,
  provider_data: string,
  start_parameter: string,
}

export type inputMessageInvoiceOptional = {|
  _: 'inputMessageInvoice',
  invoice?: invoiceOptional,
  title?: string,
  description?: string,
  photo_url?: string,
  photo_size?: number,
  photo_width?: number,
  photo_height?: number,
  payload?: string,
  provider_token?: string,
  provider_data?: string,
  start_parameter?: string,
|}

export type inputMessageForwarded = {
  _: 'inputMessageForwarded',
  from_chat_id: number,
  message_id: number,
  in_game_share: boolean,
}

export type inputMessageForwardedOptional = {|
  _: 'inputMessageForwarded',
  from_chat_id?: number,
  message_id?: number,
  in_game_share?: boolean,
|}

export type inputSticker = {
  _: 'inputSticker',
  png_sticker: InputFile,
  emojis: string,
  mask_position: maskPosition,
}

export type inputStickerOptional = {|
  _: 'inputSticker',
  png_sticker?: InputFileOptional,
  emojis?: string,
  mask_position?: maskPositionOptional,
|}

export type inputThumbnail = {
  _: 'inputThumbnail',
  thumbnail: InputFile,
  width: number,
  height: number,
}

export type inputThumbnailOptional = {|
  _: 'inputThumbnail',
  thumbnail?: InputFileOptional,
  width?: number,
  height?: number,
|}

export type invoice = {
  _: 'invoice',
  currency: string,
  price_parts: labeledPricePart[],
  is_test: boolean,
  need_name: boolean,
  need_phone_number: boolean,
  need_email_address: boolean,
  need_shipping_address: boolean,
  send_phone_number_to_provider: boolean,
  send_email_address_to_provider: boolean,
  is_flexible: boolean,
}

export type invoiceOptional = {|
  _: 'invoice',
  currency?: string,
  price_parts?: labeledPricePartOptional[],
  is_test?: boolean,
  need_name?: boolean,
  need_phone_number?: boolean,
  need_email_address?: boolean,
  need_shipping_address?: boolean,
  send_phone_number_to_provider?: boolean,
  send_email_address_to_provider?: boolean,
  is_flexible?: boolean,
|}

export type keyboardButton = {
  _: 'keyboardButton',
  text: string,
  type: KeyboardButtonType,
}

export type keyboardButtonOptional = {|
  _: 'keyboardButton',
  text?: string,
  type?: KeyboardButtonTypeOptional,
|}

export type keyboardButtonTypeText = {
  _: 'keyboardButtonTypeText',
}

export type keyboardButtonTypeTextOptional = {|
  _: 'keyboardButtonTypeText',
|}

export type keyboardButtonTypeRequestPhoneNumber = {
  _: 'keyboardButtonTypeRequestPhoneNumber',
}

export type keyboardButtonTypeRequestPhoneNumberOptional = {|
  _: 'keyboardButtonTypeRequestPhoneNumber',
|}

export type keyboardButtonTypeRequestLocation = {
  _: 'keyboardButtonTypeRequestLocation',
}

export type keyboardButtonTypeRequestLocationOptional = {|
  _: 'keyboardButtonTypeRequestLocation',
|}

export type labeledPricePart = {
  _: 'labeledPricePart',
  label: string,
  amount: number,
}

export type labeledPricePartOptional = {|
  _: 'labeledPricePart',
  label?: string,
  amount?: number,
|}

export type linkStateNone = {
  _: 'linkStateNone',
}

export type linkStateNoneOptional = {|
  _: 'linkStateNone',
|}

export type linkStateKnowsPhoneNumber = {
  _: 'linkStateKnowsPhoneNumber',
}

export type linkStateKnowsPhoneNumberOptional = {|
  _: 'linkStateKnowsPhoneNumber',
|}

export type linkStateIsContact = {
  _: 'linkStateIsContact',
}

export type linkStateIsContactOptional = {|
  _: 'linkStateIsContact',
|}

export type localFile = {
  _: 'localFile',
  path: string,
  can_be_downloaded: boolean,
  can_be_deleted: boolean,
  is_downloading_active: boolean,
  is_downloading_completed: boolean,
  downloaded_prefix_size: number,
  downloaded_size: number,
}

export type localFileOptional = {|
  _: 'localFile',
  path?: string,
  can_be_downloaded?: boolean,
  can_be_deleted?: boolean,
  is_downloading_active?: boolean,
  is_downloading_completed?: boolean,
  downloaded_prefix_size?: number,
  downloaded_size?: number,
|}

export type location = {
  _: 'location',
  latitude: number,
  longitude: number,
}

export type locationOptional = {|
  _: 'location',
  latitude?: number,
  longitude?: number,
|}

export type maskPointForehead = {
  _: 'maskPointForehead',
}

export type maskPointForeheadOptional = {|
  _: 'maskPointForehead',
|}

export type maskPointEyes = {
  _: 'maskPointEyes',
}

export type maskPointEyesOptional = {|
  _: 'maskPointEyes',
|}

export type maskPointMouth = {
  _: 'maskPointMouth',
}

export type maskPointMouthOptional = {|
  _: 'maskPointMouth',
|}

export type maskPointChin = {
  _: 'maskPointChin',
}

export type maskPointChinOptional = {|
  _: 'maskPointChin',
|}

export type maskPosition = {
  _: 'maskPosition',
  point: MaskPoint,
  x_shift: number,
  y_shift: number,
  scale: number,
}

export type maskPositionOptional = {|
  _: 'maskPosition',
  point?: MaskPointOptional,
  x_shift?: number,
  y_shift?: number,
  scale?: number,
|}

export type message = {
  _: 'message',
  id: number,
  sender_user_id: number,
  chat_id: number,
  sending_state: MessageSendingState,
  is_outgoing: boolean,
  can_be_edited: boolean,
  can_be_forwarded: boolean,
  can_be_deleted_only_for_self: boolean,
  can_be_deleted_for_all_users: boolean,
  is_channel_post: boolean,
  contains_unread_mention: boolean,
  date: number,
  edit_date: number,
  forward_info: MessageForwardInfo,
  reply_to_message_id: number,
  ttl: number,
  ttl_expires_in: number,
  via_bot_user_id: number,
  author_signature: string,
  views: number,
  media_album_id: number,
  content: MessageContent,
  reply_markup: ReplyMarkup,
}

export type messageOptional = {|
  _: 'message',
  id?: number,
  sender_user_id?: number,
  chat_id?: number,
  sending_state?: MessageSendingStateOptional,
  is_outgoing?: boolean,
  can_be_edited?: boolean,
  can_be_forwarded?: boolean,
  can_be_deleted_only_for_self?: boolean,
  can_be_deleted_for_all_users?: boolean,
  is_channel_post?: boolean,
  contains_unread_mention?: boolean,
  date?: number,
  edit_date?: number,
  forward_info?: MessageForwardInfoOptional,
  reply_to_message_id?: number,
  ttl?: number,
  ttl_expires_in?: number,
  via_bot_user_id?: number,
  author_signature?: string,
  views?: number,
  media_album_id?: number,
  content?: MessageContentOptional,
  reply_markup?: ReplyMarkupOptional,
|}

export type messageText = {
  _: 'messageText',
  text: formattedText,
  web_page: webPage,
}

export type messageTextOptional = {|
  _: 'messageText',
  text?: formattedTextOptional,
  web_page?: webPageOptional,
|}

export type messageAnimation = {
  _: 'messageAnimation',
  animation: animation,
  caption: formattedText,
  is_secret: boolean,
}

export type messageAnimationOptional = {|
  _: 'messageAnimation',
  animation?: animationOptional,
  caption?: formattedTextOptional,
  is_secret?: boolean,
|}

export type messageAudio = {
  _: 'messageAudio',
  audio: audio,
  caption: formattedText,
}

export type messageAudioOptional = {|
  _: 'messageAudio',
  audio?: audioOptional,
  caption?: formattedTextOptional,
|}

export type messageDocument = {
  _: 'messageDocument',
  document: document,
  caption: formattedText,
}

export type messageDocumentOptional = {|
  _: 'messageDocument',
  document?: documentOptional,
  caption?: formattedTextOptional,
|}

export type messagePhoto = {
  _: 'messagePhoto',
  photo: photo,
  caption: formattedText,
  is_secret: boolean,
}

export type messagePhotoOptional = {|
  _: 'messagePhoto',
  photo?: photoOptional,
  caption?: formattedTextOptional,
  is_secret?: boolean,
|}

export type messageExpiredPhoto = {
  _: 'messageExpiredPhoto',
}

export type messageExpiredPhotoOptional = {|
  _: 'messageExpiredPhoto',
|}

export type messageSticker = {
  _: 'messageSticker',
  sticker: sticker,
}

export type messageStickerOptional = {|
  _: 'messageSticker',
  sticker?: stickerOptional,
|}

export type messageVideo = {
  _: 'messageVideo',
  video: video,
  caption: formattedText,
  is_secret: boolean,
}

export type messageVideoOptional = {|
  _: 'messageVideo',
  video?: videoOptional,
  caption?: formattedTextOptional,
  is_secret?: boolean,
|}

export type messageExpiredVideo = {
  _: 'messageExpiredVideo',
}

export type messageExpiredVideoOptional = {|
  _: 'messageExpiredVideo',
|}

export type messageVideoNote = {
  _: 'messageVideoNote',
  video_note: videoNote,
  is_viewed: boolean,
  is_secret: boolean,
}

export type messageVideoNoteOptional = {|
  _: 'messageVideoNote',
  video_note?: videoNoteOptional,
  is_viewed?: boolean,
  is_secret?: boolean,
|}

export type messageVoiceNote = {
  _: 'messageVoiceNote',
  voice_note: voiceNote,
  caption: formattedText,
  is_listened: boolean,
}

export type messageVoiceNoteOptional = {|
  _: 'messageVoiceNote',
  voice_note?: voiceNoteOptional,
  caption?: formattedTextOptional,
  is_listened?: boolean,
|}

export type messageLocation = {
  _: 'messageLocation',
  location: location,
  live_period: number,
  expires_in: number,
}

export type messageLocationOptional = {|
  _: 'messageLocation',
  location?: locationOptional,
  live_period?: number,
  expires_in?: number,
|}

export type messageVenue = {
  _: 'messageVenue',
  venue: venue,
}

export type messageVenueOptional = {|
  _: 'messageVenue',
  venue?: venueOptional,
|}

export type messageContact = {
  _: 'messageContact',
  contact: contact,
}

export type messageContactOptional = {|
  _: 'messageContact',
  contact?: contactOptional,
|}

export type messageGame = {
  _: 'messageGame',
  game: game,
}

export type messageGameOptional = {|
  _: 'messageGame',
  game?: gameOptional,
|}

export type messageInvoice = {
  _: 'messageInvoice',
  title: string,
  description: string,
  photo: photo,
  currency: string,
  total_amount: number,
  start_parameter: string,
  is_test: boolean,
  need_shipping_address: boolean,
  receipt_message_id: number,
}

export type messageInvoiceOptional = {|
  _: 'messageInvoice',
  title?: string,
  description?: string,
  photo?: photoOptional,
  currency?: string,
  total_amount?: number,
  start_parameter?: string,
  is_test?: boolean,
  need_shipping_address?: boolean,
  receipt_message_id?: number,
|}

export type messageCall = {
  _: 'messageCall',
  discard_reason: CallDiscardReason,
  duration: number,
}

export type messageCallOptional = {|
  _: 'messageCall',
  discard_reason?: CallDiscardReasonOptional,
  duration?: number,
|}

export type messageBasicGroupChatCreate = {
  _: 'messageBasicGroupChatCreate',
  title: string,
  member_user_ids: number,
}

export type messageBasicGroupChatCreateOptional = {|
  _: 'messageBasicGroupChatCreate',
  title?: string,
  member_user_ids?: number,
|}

export type messageSupergroupChatCreate = {
  _: 'messageSupergroupChatCreate',
  title: string,
}

export type messageSupergroupChatCreateOptional = {|
  _: 'messageSupergroupChatCreate',
  title?: string,
|}

export type messageChatChangeTitle = {
  _: 'messageChatChangeTitle',
  title: string,
}

export type messageChatChangeTitleOptional = {|
  _: 'messageChatChangeTitle',
  title?: string,
|}

export type messageChatChangePhoto = {
  _: 'messageChatChangePhoto',
  photo: photo,
}

export type messageChatChangePhotoOptional = {|
  _: 'messageChatChangePhoto',
  photo?: photoOptional,
|}

export type messageChatDeletePhoto = {
  _: 'messageChatDeletePhoto',
}

export type messageChatDeletePhotoOptional = {|
  _: 'messageChatDeletePhoto',
|}

export type messageChatAddMembers = {
  _: 'messageChatAddMembers',
  member_user_ids: number,
}

export type messageChatAddMembersOptional = {|
  _: 'messageChatAddMembers',
  member_user_ids?: number,
|}

export type messageChatJoinByLink = {
  _: 'messageChatJoinByLink',
}

export type messageChatJoinByLinkOptional = {|
  _: 'messageChatJoinByLink',
|}

export type messageChatDeleteMember = {
  _: 'messageChatDeleteMember',
  user_id: number,
}

export type messageChatDeleteMemberOptional = {|
  _: 'messageChatDeleteMember',
  user_id?: number,
|}

export type messageChatUpgradeTo = {
  _: 'messageChatUpgradeTo',
  supergroup_id: number,
}

export type messageChatUpgradeToOptional = {|
  _: 'messageChatUpgradeTo',
  supergroup_id?: number,
|}

export type messageChatUpgradeFrom = {
  _: 'messageChatUpgradeFrom',
  title: string,
  basic_group_id: number,
}

export type messageChatUpgradeFromOptional = {|
  _: 'messageChatUpgradeFrom',
  title?: string,
  basic_group_id?: number,
|}

export type messagePinMessage = {
  _: 'messagePinMessage',
  message_id: number,
}

export type messagePinMessageOptional = {|
  _: 'messagePinMessage',
  message_id?: number,
|}

export type messageScreenshotTaken = {
  _: 'messageScreenshotTaken',
}

export type messageScreenshotTakenOptional = {|
  _: 'messageScreenshotTaken',
|}

export type messageChatSetTtl = {
  _: 'messageChatSetTtl',
  ttl: number,
}

export type messageChatSetTtlOptional = {|
  _: 'messageChatSetTtl',
  ttl?: number,
|}

export type messageCustomServiceAction = {
  _: 'messageCustomServiceAction',
  text: string,
}

export type messageCustomServiceActionOptional = {|
  _: 'messageCustomServiceAction',
  text?: string,
|}

export type messageGameScore = {
  _: 'messageGameScore',
  game_message_id: number,
  game_id: number,
  score: number,
}

export type messageGameScoreOptional = {|
  _: 'messageGameScore',
  game_message_id?: number,
  game_id?: number,
  score?: number,
|}

export type messagePaymentSuccessful = {
  _: 'messagePaymentSuccessful',
  invoice_message_id: number,
  currency: string,
  total_amount: number,
}

export type messagePaymentSuccessfulOptional = {|
  _: 'messagePaymentSuccessful',
  invoice_message_id?: number,
  currency?: string,
  total_amount?: number,
|}

export type messagePaymentSuccessfulBot = {
  _: 'messagePaymentSuccessfulBot',
  invoice_message_id: number,
  currency: string,
  total_amount: number,
  invoice_payload: string,
  shipping_option_id: string,
  order_info: orderInfo,
  telegram_payment_charge_id: string,
  provider_payment_charge_id: string,
}

export type messagePaymentSuccessfulBotOptional = {|
  _: 'messagePaymentSuccessfulBot',
  invoice_message_id?: number,
  currency?: string,
  total_amount?: number,
  invoice_payload?: string,
  shipping_option_id?: string,
  order_info?: orderInfoOptional,
  telegram_payment_charge_id?: string,
  provider_payment_charge_id?: string,
|}

export type messageContactRegistered = {
  _: 'messageContactRegistered',
}

export type messageContactRegisteredOptional = {|
  _: 'messageContactRegistered',
|}

export type messageWebsiteConnected = {
  _: 'messageWebsiteConnected',
  domain_name: string,
}

export type messageWebsiteConnectedOptional = {|
  _: 'messageWebsiteConnected',
  domain_name?: string,
|}

export type messageUnsupported = {
  _: 'messageUnsupported',
}

export type messageUnsupportedOptional = {|
  _: 'messageUnsupported',
|}

export type messageForwardedFromUser = {
  _: 'messageForwardedFromUser',
  sender_user_id: number,
  date: number,
  forwarded_from_chat_id: number,
  forwarded_from_message_id: number,
}

export type messageForwardedFromUserOptional = {|
  _: 'messageForwardedFromUser',
  sender_user_id?: number,
  date?: number,
  forwarded_from_chat_id?: number,
  forwarded_from_message_id?: number,
|}

export type messageForwardedPost = {
  _: 'messageForwardedPost',
  chat_id: number,
  author_signature: string,
  date: number,
  message_id: number,
  forwarded_from_chat_id: number,
  forwarded_from_message_id: number,
}

export type messageForwardedPostOptional = {|
  _: 'messageForwardedPost',
  chat_id?: number,
  author_signature?: string,
  date?: number,
  message_id?: number,
  forwarded_from_chat_id?: number,
  forwarded_from_message_id?: number,
|}

export type messageSendingStatePending = {
  _: 'messageSendingStatePending',
}

export type messageSendingStatePendingOptional = {|
  _: 'messageSendingStatePending',
|}

export type messageSendingStateFailed = {
  _: 'messageSendingStateFailed',
}

export type messageSendingStateFailedOptional = {|
  _: 'messageSendingStateFailed',
|}

export type messages = {
  _: 'messages',
  total_count: number,
  messages: message[],
}

export type messagesOptional = {|
  _: 'messages',
  total_count?: number,
  messages?: messageOptional[],
|}

export type networkStatistics = {
  _: 'networkStatistics',
  since_date: number,
  entries: NetworkStatisticsEntry[],
}

export type networkStatisticsOptional = {|
  _: 'networkStatistics',
  since_date?: number,
  entries?: NetworkStatisticsEntryOptional[],
|}

export type networkStatisticsEntryFile = {
  _: 'networkStatisticsEntryFile',
  file_type: FileType,
  network_type: NetworkType,
  sent_bytes: number,
  received_bytes: number,
}

export type networkStatisticsEntryFileOptional = {|
  _: 'networkStatisticsEntryFile',
  file_type?: FileTypeOptional,
  network_type?: NetworkTypeOptional,
  sent_bytes?: number,
  received_bytes?: number,
|}

export type networkStatisticsEntryCall = {
  _: 'networkStatisticsEntryCall',
  network_type: NetworkType,
  sent_bytes: number,
  received_bytes: number,
  duration: number,
}

export type networkStatisticsEntryCallOptional = {|
  _: 'networkStatisticsEntryCall',
  network_type?: NetworkTypeOptional,
  sent_bytes?: number,
  received_bytes?: number,
  duration?: number,
|}

export type networkTypeNone = {
  _: 'networkTypeNone',
}

export type networkTypeNoneOptional = {|
  _: 'networkTypeNone',
|}

export type networkTypeMobile = {
  _: 'networkTypeMobile',
}

export type networkTypeMobileOptional = {|
  _: 'networkTypeMobile',
|}

export type networkTypeMobileRoaming = {
  _: 'networkTypeMobileRoaming',
}

export type networkTypeMobileRoamingOptional = {|
  _: 'networkTypeMobileRoaming',
|}

export type networkTypeWiFi = {
  _: 'networkTypeWiFi',
}

export type networkTypeWiFiOptional = {|
  _: 'networkTypeWiFi',
|}

export type networkTypeOther = {
  _: 'networkTypeOther',
}

export type networkTypeOtherOptional = {|
  _: 'networkTypeOther',
|}

export type notificationSettings = {
  _: 'notificationSettings',
  mute_for: number,
  sound: string,
  show_preview: boolean,
}

export type notificationSettingsOptional = {|
  _: 'notificationSettings',
  mute_for?: number,
  sound?: string,
  show_preview?: boolean,
|}

export type notificationSettingsScopeChat = {
  _: 'notificationSettingsScopeChat',
  chat_id: number,
}

export type notificationSettingsScopeChatOptional = {|
  _: 'notificationSettingsScopeChat',
  chat_id?: number,
|}

export type notificationSettingsScopePrivateChats = {
  _: 'notificationSettingsScopePrivateChats',
}

export type notificationSettingsScopePrivateChatsOptional = {|
  _: 'notificationSettingsScopePrivateChats',
|}

export type notificationSettingsScopeBasicGroupChats = {
  _: 'notificationSettingsScopeBasicGroupChats',
}

export type notificationSettingsScopeBasicGroupChatsOptional = {|
  _: 'notificationSettingsScopeBasicGroupChats',
|}

export type notificationSettingsScopeAllChats = {
  _: 'notificationSettingsScopeAllChats',
}

export type notificationSettingsScopeAllChatsOptional = {|
  _: 'notificationSettingsScopeAllChats',
|}

export type ok = {
  _: 'ok',
}

export type okOptional = {|
  _: 'ok',
|}

export type optionValueBoolean = {
  _: 'optionValueBoolean',
  value: boolean,
}

export type optionValueBooleanOptional = {|
  _: 'optionValueBoolean',
  value?: boolean,
|}

export type optionValueEmpty = {
  _: 'optionValueEmpty',
}

export type optionValueEmptyOptional = {|
  _: 'optionValueEmpty',
|}

export type optionValueInteger = {
  _: 'optionValueInteger',
  value: number,
}

export type optionValueIntegerOptional = {|
  _: 'optionValueInteger',
  value?: number,
|}

export type optionValueString = {
  _: 'optionValueString',
  value: string,
}

export type optionValueStringOptional = {|
  _: 'optionValueString',
  value?: string,
|}

export type orderInfo = {
  _: 'orderInfo',
  name: string,
  phone_number: string,
  email_address: string,
  shipping_address: shippingAddress,
}

export type orderInfoOptional = {|
  _: 'orderInfo',
  name?: string,
  phone_number?: string,
  email_address?: string,
  shipping_address?: shippingAddressOptional,
|}

export type pageBlockTitle = {
  _: 'pageBlockTitle',
  title: RichText,
}

export type pageBlockTitleOptional = {|
  _: 'pageBlockTitle',
  title?: RichTextOptional,
|}

export type pageBlockSubtitle = {
  _: 'pageBlockSubtitle',
  subtitle: RichText,
}

export type pageBlockSubtitleOptional = {|
  _: 'pageBlockSubtitle',
  subtitle?: RichTextOptional,
|}

export type pageBlockAuthorDate = {
  _: 'pageBlockAuthorDate',
  author: RichText,
  publish_date: number,
}

export type pageBlockAuthorDateOptional = {|
  _: 'pageBlockAuthorDate',
  author?: RichTextOptional,
  publish_date?: number,
|}

export type pageBlockHeader = {
  _: 'pageBlockHeader',
  header: RichText,
}

export type pageBlockHeaderOptional = {|
  _: 'pageBlockHeader',
  header?: RichTextOptional,
|}

export type pageBlockSubheader = {
  _: 'pageBlockSubheader',
  subheader: RichText,
}

export type pageBlockSubheaderOptional = {|
  _: 'pageBlockSubheader',
  subheader?: RichTextOptional,
|}

export type pageBlockParagraph = {
  _: 'pageBlockParagraph',
  text: RichText,
}

export type pageBlockParagraphOptional = {|
  _: 'pageBlockParagraph',
  text?: RichTextOptional,
|}

export type pageBlockPreformatted = {
  _: 'pageBlockPreformatted',
  text: RichText,
  language: string,
}

export type pageBlockPreformattedOptional = {|
  _: 'pageBlockPreformatted',
  text?: RichTextOptional,
  language?: string,
|}

export type pageBlockFooter = {
  _: 'pageBlockFooter',
  footer: RichText,
}

export type pageBlockFooterOptional = {|
  _: 'pageBlockFooter',
  footer?: RichTextOptional,
|}

export type pageBlockDivider = {
  _: 'pageBlockDivider',
}

export type pageBlockDividerOptional = {|
  _: 'pageBlockDivider',
|}

export type pageBlockAnchor = {
  _: 'pageBlockAnchor',
  name: string,
}

export type pageBlockAnchorOptional = {|
  _: 'pageBlockAnchor',
  name?: string,
|}

export type pageBlockList = {
  _: 'pageBlockList',
  items: RichText[],
  is_ordered: boolean,
}

export type pageBlockListOptional = {|
  _: 'pageBlockList',
  items?: RichTextOptional[],
  is_ordered?: boolean,
|}

export type pageBlockBlockQuote = {
  _: 'pageBlockBlockQuote',
  text: RichText,
  caption: RichText,
}

export type pageBlockBlockQuoteOptional = {|
  _: 'pageBlockBlockQuote',
  text?: RichTextOptional,
  caption?: RichTextOptional,
|}

export type pageBlockPullQuote = {
  _: 'pageBlockPullQuote',
  text: RichText,
  caption: RichText,
}

export type pageBlockPullQuoteOptional = {|
  _: 'pageBlockPullQuote',
  text?: RichTextOptional,
  caption?: RichTextOptional,
|}

export type pageBlockAnimation = {
  _: 'pageBlockAnimation',
  animation: animation,
  caption: RichText,
  need_autoplay: boolean,
}

export type pageBlockAnimationOptional = {|
  _: 'pageBlockAnimation',
  animation?: animationOptional,
  caption?: RichTextOptional,
  need_autoplay?: boolean,
|}

export type pageBlockAudio = {
  _: 'pageBlockAudio',
  audio: audio,
  caption: RichText,
}

export type pageBlockAudioOptional = {|
  _: 'pageBlockAudio',
  audio?: audioOptional,
  caption?: RichTextOptional,
|}

export type pageBlockPhoto = {
  _: 'pageBlockPhoto',
  photo: photo,
  caption: RichText,
}

export type pageBlockPhotoOptional = {|
  _: 'pageBlockPhoto',
  photo?: photoOptional,
  caption?: RichTextOptional,
|}

export type pageBlockVideo = {
  _: 'pageBlockVideo',
  video: video,
  caption: RichText,
  need_autoplay: boolean,
  is_looped: boolean,
}

export type pageBlockVideoOptional = {|
  _: 'pageBlockVideo',
  video?: videoOptional,
  caption?: RichTextOptional,
  need_autoplay?: boolean,
  is_looped?: boolean,
|}

export type pageBlockCover = {
  _: 'pageBlockCover',
  cover: PageBlock,
}

export type pageBlockCoverOptional = {|
  _: 'pageBlockCover',
  cover?: PageBlockOptional,
|}

export type pageBlockEmbedded = {
  _: 'pageBlockEmbedded',
  url: string,
  html: string,
  poster_photo: photo,
  width: number,
  height: number,
  caption: RichText,
  is_full_width: boolean,
  allow_scrolling: boolean,
}

export type pageBlockEmbeddedOptional = {|
  _: 'pageBlockEmbedded',
  url?: string,
  html?: string,
  poster_photo?: photoOptional,
  width?: number,
  height?: number,
  caption?: RichTextOptional,
  is_full_width?: boolean,
  allow_scrolling?: boolean,
|}

export type pageBlockEmbeddedPost = {
  _: 'pageBlockEmbeddedPost',
  url: string,
  author: string,
  author_photo: photo,
  date: number,
  page_blocks: PageBlock[],
  caption: RichText,
}

export type pageBlockEmbeddedPostOptional = {|
  _: 'pageBlockEmbeddedPost',
  url?: string,
  author?: string,
  author_photo?: photoOptional,
  date?: number,
  page_blocks?: PageBlockOptional[],
  caption?: RichTextOptional,
|}

export type pageBlockCollage = {
  _: 'pageBlockCollage',
  page_blocks: PageBlock[],
  caption: RichText,
}

export type pageBlockCollageOptional = {|
  _: 'pageBlockCollage',
  page_blocks?: PageBlockOptional[],
  caption?: RichTextOptional,
|}

export type pageBlockSlideshow = {
  _: 'pageBlockSlideshow',
  page_blocks: PageBlock[],
  caption: RichText,
}

export type pageBlockSlideshowOptional = {|
  _: 'pageBlockSlideshow',
  page_blocks?: PageBlockOptional[],
  caption?: RichTextOptional,
|}

export type pageBlockChatLink = {
  _: 'pageBlockChatLink',
  title: string,
  photo: chatPhoto,
  username: string,
}

export type pageBlockChatLinkOptional = {|
  _: 'pageBlockChatLink',
  title?: string,
  photo?: chatPhotoOptional,
  username?: string,
|}

export type passwordRecoveryInfo = {
  _: 'passwordRecoveryInfo',
  recovery_email_address_pattern: string,
}

export type passwordRecoveryInfoOptional = {|
  _: 'passwordRecoveryInfo',
  recovery_email_address_pattern?: string,
|}

export type passwordState = {
  _: 'passwordState',
  has_password: boolean,
  password_hint: string,
  has_recovery_email_address: boolean,
  unconfirmed_recovery_email_address_pattern: string,
}

export type passwordStateOptional = {|
  _: 'passwordState',
  has_password?: boolean,
  password_hint?: string,
  has_recovery_email_address?: boolean,
  unconfirmed_recovery_email_address_pattern?: string,
|}

export type paymentForm = {
  _: 'paymentForm',
  invoice: invoice,
  url: string,
  payments_provider: paymentsProviderStripe,
  saved_order_info: orderInfo,
  saved_credentials: savedCredentials,
  can_save_credentials: boolean,
  need_password: boolean,
}

export type paymentFormOptional = {|
  _: 'paymentForm',
  invoice?: invoiceOptional,
  url?: string,
  payments_provider?: paymentsProviderStripeOptional,
  saved_order_info?: orderInfoOptional,
  saved_credentials?: savedCredentialsOptional,
  can_save_credentials?: boolean,
  need_password?: boolean,
|}

export type paymentReceipt = {
  _: 'paymentReceipt',
  date: number,
  payments_provider_user_id: number,
  invoice: invoice,
  order_info: orderInfo,
  shipping_option: shippingOption,
  credentials_title: string,
}

export type paymentReceiptOptional = {|
  _: 'paymentReceipt',
  date?: number,
  payments_provider_user_id?: number,
  invoice?: invoiceOptional,
  order_info?: orderInfoOptional,
  shipping_option?: shippingOptionOptional,
  credentials_title?: string,
|}

export type paymentResult = {
  _: 'paymentResult',
  success: boolean,
  verification_url: string,
}

export type paymentResultOptional = {|
  _: 'paymentResult',
  success?: boolean,
  verification_url?: string,
|}

export type paymentsProviderStripe = {
  _: 'paymentsProviderStripe',
  publishable_key: string,
  need_country: boolean,
  need_postal_code: boolean,
  need_cardholder_name: boolean,
}

export type paymentsProviderStripeOptional = {|
  _: 'paymentsProviderStripe',
  publishable_key?: string,
  need_country?: boolean,
  need_postal_code?: boolean,
  need_cardholder_name?: boolean,
|}

export type photo = {
  _: 'photo',
  id: number,
  has_stickers: boolean,
  sizes: photoSize[],
}

export type photoOptional = {|
  _: 'photo',
  id?: number,
  has_stickers?: boolean,
  sizes?: photoSizeOptional[],
|}

export type photoSize = {
  _: 'photoSize',
  type: string,
  photo: file,
  width: number,
  height: number,
}

export type photoSizeOptional = {|
  _: 'photoSize',
  type?: string,
  photo?: fileOptional,
  width?: number,
  height?: number,
|}

export type profilePhoto = {
  _: 'profilePhoto',
  id: number,
  small: file,
  big: file,
}

export type profilePhotoOptional = {|
  _: 'profilePhoto',
  id?: number,
  small?: fileOptional,
  big?: fileOptional,
|}

export type proxyEmpty = {
  _: 'proxyEmpty',
}

export type proxyEmptyOptional = {|
  _: 'proxyEmpty',
|}

export type proxySocks5 = {
  _: 'proxySocks5',
  server: string,
  port: number,
  username: string,
  password: string,
}

export type proxySocks5Optional = {|
  _: 'proxySocks5',
  server?: string,
  port?: number,
  username?: string,
  password?: string,
|}

export type publicMessageLink = {
  _: 'publicMessageLink',
  link: string,
  html: string,
}

export type publicMessageLinkOptional = {|
  _: 'publicMessageLink',
  link?: string,
  html?: string,
|}

export type recoveryEmailAddress = {
  _: 'recoveryEmailAddress',
  recovery_email_address: string,
}

export type recoveryEmailAddressOptional = {|
  _: 'recoveryEmailAddress',
  recovery_email_address?: string,
|}

export type remoteFile = {
  _: 'remoteFile',
  id: string,
  is_uploading_active: boolean,
  is_uploading_completed: boolean,
  uploaded_size: number,
}

export type remoteFileOptional = {|
  _: 'remoteFile',
  id?: string,
  is_uploading_active?: boolean,
  is_uploading_completed?: boolean,
  uploaded_size?: number,
|}

export type replyMarkupRemoveKeyboard = {
  _: 'replyMarkupRemoveKeyboard',
  is_personal: boolean,
}

export type replyMarkupRemoveKeyboardOptional = {|
  _: 'replyMarkupRemoveKeyboard',
  is_personal?: boolean,
|}

export type replyMarkupForceReply = {
  _: 'replyMarkupForceReply',
  is_personal: boolean,
}

export type replyMarkupForceReplyOptional = {|
  _: 'replyMarkupForceReply',
  is_personal?: boolean,
|}

export type replyMarkupShowKeyboard = {
  _: 'replyMarkupShowKeyboard',
  rows: keyboardButton[][],
  resize_keyboard: boolean,
  one_time: boolean,
  is_personal: boolean,
}

export type replyMarkupShowKeyboardOptional = {|
  _: 'replyMarkupShowKeyboard',
  rows?: keyboardButtonOptional[][],
  resize_keyboard?: boolean,
  one_time?: boolean,
  is_personal?: boolean,
|}

export type replyMarkupInlineKeyboard = {
  _: 'replyMarkupInlineKeyboard',
  rows: inlineKeyboardButton[][],
}

export type replyMarkupInlineKeyboardOptional = {|
  _: 'replyMarkupInlineKeyboard',
  rows?: inlineKeyboardButtonOptional[][],
|}

export type richTextPlain = {
  _: 'richTextPlain',
  text: string,
}

export type richTextPlainOptional = {|
  _: 'richTextPlain',
  text?: string,
|}

export type richTextBold = {
  _: 'richTextBold',
  text: RichText,
}

export type richTextBoldOptional = {|
  _: 'richTextBold',
  text?: RichTextOptional,
|}

export type richTextItalic = {
  _: 'richTextItalic',
  text: RichText,
}

export type richTextItalicOptional = {|
  _: 'richTextItalic',
  text?: RichTextOptional,
|}

export type richTextUnderline = {
  _: 'richTextUnderline',
  text: RichText,
}

export type richTextUnderlineOptional = {|
  _: 'richTextUnderline',
  text?: RichTextOptional,
|}

export type richTextStrikethrough = {
  _: 'richTextStrikethrough',
  text: RichText,
}

export type richTextStrikethroughOptional = {|
  _: 'richTextStrikethrough',
  text?: RichTextOptional,
|}

export type richTextFixed = {
  _: 'richTextFixed',
  text: RichText,
}

export type richTextFixedOptional = {|
  _: 'richTextFixed',
  text?: RichTextOptional,
|}

export type richTextUrl = {
  _: 'richTextUrl',
  text: RichText,
  url: string,
}

export type richTextUrlOptional = {|
  _: 'richTextUrl',
  text?: RichTextOptional,
  url?: string,
|}

export type richTextEmailAddress = {
  _: 'richTextEmailAddress',
  text: RichText,
  email_address: string,
}

export type richTextEmailAddressOptional = {|
  _: 'richTextEmailAddress',
  text?: RichTextOptional,
  email_address?: string,
|}

export type richTexts = {
  _: 'richTexts',
  texts: RichText[],
}

export type richTextsOptional = {|
  _: 'richTexts',
  texts?: RichTextOptional[],
|}

export type savedCredentials = {
  _: 'savedCredentials',
  id: string,
  title: string,
}

export type savedCredentialsOptional = {|
  _: 'savedCredentials',
  id?: string,
  title?: string,
|}

export type searchMessagesFilterEmpty = {
  _: 'searchMessagesFilterEmpty',
}

export type searchMessagesFilterEmptyOptional = {|
  _: 'searchMessagesFilterEmpty',
|}

export type searchMessagesFilterAnimation = {
  _: 'searchMessagesFilterAnimation',
}

export type searchMessagesFilterAnimationOptional = {|
  _: 'searchMessagesFilterAnimation',
|}

export type searchMessagesFilterAudio = {
  _: 'searchMessagesFilterAudio',
}

export type searchMessagesFilterAudioOptional = {|
  _: 'searchMessagesFilterAudio',
|}

export type searchMessagesFilterDocument = {
  _: 'searchMessagesFilterDocument',
}

export type searchMessagesFilterDocumentOptional = {|
  _: 'searchMessagesFilterDocument',
|}

export type searchMessagesFilterPhoto = {
  _: 'searchMessagesFilterPhoto',
}

export type searchMessagesFilterPhotoOptional = {|
  _: 'searchMessagesFilterPhoto',
|}

export type searchMessagesFilterVideo = {
  _: 'searchMessagesFilterVideo',
}

export type searchMessagesFilterVideoOptional = {|
  _: 'searchMessagesFilterVideo',
|}

export type searchMessagesFilterVoiceNote = {
  _: 'searchMessagesFilterVoiceNote',
}

export type searchMessagesFilterVoiceNoteOptional = {|
  _: 'searchMessagesFilterVoiceNote',
|}

export type searchMessagesFilterPhotoAndVideo = {
  _: 'searchMessagesFilterPhotoAndVideo',
}

export type searchMessagesFilterPhotoAndVideoOptional = {|
  _: 'searchMessagesFilterPhotoAndVideo',
|}

export type searchMessagesFilterUrl = {
  _: 'searchMessagesFilterUrl',
}

export type searchMessagesFilterUrlOptional = {|
  _: 'searchMessagesFilterUrl',
|}

export type searchMessagesFilterChatPhoto = {
  _: 'searchMessagesFilterChatPhoto',
}

export type searchMessagesFilterChatPhotoOptional = {|
  _: 'searchMessagesFilterChatPhoto',
|}

export type searchMessagesFilterCall = {
  _: 'searchMessagesFilterCall',
}

export type searchMessagesFilterCallOptional = {|
  _: 'searchMessagesFilterCall',
|}

export type searchMessagesFilterMissedCall = {
  _: 'searchMessagesFilterMissedCall',
}

export type searchMessagesFilterMissedCallOptional = {|
  _: 'searchMessagesFilterMissedCall',
|}

export type searchMessagesFilterVideoNote = {
  _: 'searchMessagesFilterVideoNote',
}

export type searchMessagesFilterVideoNoteOptional = {|
  _: 'searchMessagesFilterVideoNote',
|}

export type searchMessagesFilterVoiceAndVideoNote = {
  _: 'searchMessagesFilterVoiceAndVideoNote',
}

export type searchMessagesFilterVoiceAndVideoNoteOptional = {|
  _: 'searchMessagesFilterVoiceAndVideoNote',
|}

export type searchMessagesFilterMention = {
  _: 'searchMessagesFilterMention',
}

export type searchMessagesFilterMentionOptional = {|
  _: 'searchMessagesFilterMention',
|}

export type searchMessagesFilterUnreadMention = {
  _: 'searchMessagesFilterUnreadMention',
}

export type searchMessagesFilterUnreadMentionOptional = {|
  _: 'searchMessagesFilterUnreadMention',
|}

export type secretChat = {
  _: 'secretChat',
  id: number,
  user_id: number,
  state: SecretChatState,
  is_outbound: boolean,
  ttl: number,
  key_hash: string,
  layer: number,
}

export type secretChatOptional = {|
  _: 'secretChat',
  id?: number,
  user_id?: number,
  state?: SecretChatStateOptional,
  is_outbound?: boolean,
  ttl?: number,
  key_hash?: string,
  layer?: number,
|}

export type secretChatStatePending = {
  _: 'secretChatStatePending',
}

export type secretChatStatePendingOptional = {|
  _: 'secretChatStatePending',
|}

export type secretChatStateReady = {
  _: 'secretChatStateReady',
}

export type secretChatStateReadyOptional = {|
  _: 'secretChatStateReady',
|}

export type secretChatStateClosed = {
  _: 'secretChatStateClosed',
}

export type secretChatStateClosedOptional = {|
  _: 'secretChatStateClosed',
|}

export type session = {
  _: 'session',
  id: number,
  is_current: boolean,
  api_id: number,
  application_name: string,
  application_version: string,
  is_official_application: boolean,
  device_model: string,
  platform: string,
  system_version: string,
  log_in_date: number,
  last_active_date: number,
  ip: string,
  country: string,
  region: string,
}

export type sessionOptional = {|
  _: 'session',
  id?: number,
  is_current?: boolean,
  api_id?: number,
  application_name?: string,
  application_version?: string,
  is_official_application?: boolean,
  device_model?: string,
  platform?: string,
  system_version?: string,
  log_in_date?: number,
  last_active_date?: number,
  ip?: string,
  country?: string,
  region?: string,
|}

export type sessions = {
  _: 'sessions',
  sessions: session[],
}

export type sessionsOptional = {|
  _: 'sessions',
  sessions?: sessionOptional[],
|}

export type shippingAddress = {
  _: 'shippingAddress',
  country_code: string,
  state: string,
  city: string,
  street_line1: string,
  street_line2: string,
  postal_code: string,
}

export type shippingAddressOptional = {|
  _: 'shippingAddress',
  country_code?: string,
  state?: string,
  city?: string,
  street_line1?: string,
  street_line2?: string,
  postal_code?: string,
|}

export type shippingOption = {
  _: 'shippingOption',
  id: string,
  title: string,
  price_parts: labeledPricePart[],
}

export type shippingOptionOptional = {|
  _: 'shippingOption',
  id?: string,
  title?: string,
  price_parts?: labeledPricePartOptional[],
|}

export type sticker = {
  _: 'sticker',
  set_id: number,
  width: number,
  height: number,
  emoji: string,
  is_mask: boolean,
  mask_position: maskPosition,
  thumbnail: photoSize,
  sticker: file,
}

export type stickerOptional = {|
  _: 'sticker',
  set_id?: number,
  width?: number,
  height?: number,
  emoji?: string,
  is_mask?: boolean,
  mask_position?: maskPositionOptional,
  thumbnail?: photoSizeOptional,
  sticker?: fileOptional,
|}

export type stickerEmojis = {
  _: 'stickerEmojis',
  emojis: string,
}

export type stickerEmojisOptional = {|
  _: 'stickerEmojis',
  emojis?: string,
|}

export type stickerSet = {
  _: 'stickerSet',
  id: number,
  title: string,
  name: string,
  is_installed: boolean,
  is_archived: boolean,
  is_official: boolean,
  is_masks: boolean,
  is_viewed: boolean,
  stickers: sticker[],
  emojis: stickerEmojis[],
}

export type stickerSetOptional = {|
  _: 'stickerSet',
  id?: number,
  title?: string,
  name?: string,
  is_installed?: boolean,
  is_archived?: boolean,
  is_official?: boolean,
  is_masks?: boolean,
  is_viewed?: boolean,
  stickers?: stickerOptional[],
  emojis?: stickerEmojisOptional[],
|}

export type stickerSetInfo = {
  _: 'stickerSetInfo',
  id: number,
  title: string,
  name: string,
  is_installed: boolean,
  is_archived: boolean,
  is_official: boolean,
  is_masks: boolean,
  is_viewed: boolean,
  size: number,
  covers: sticker[],
}

export type stickerSetInfoOptional = {|
  _: 'stickerSetInfo',
  id?: number,
  title?: string,
  name?: string,
  is_installed?: boolean,
  is_archived?: boolean,
  is_official?: boolean,
  is_masks?: boolean,
  is_viewed?: boolean,
  size?: number,
  covers?: stickerOptional[],
|}

export type stickerSets = {
  _: 'stickerSets',
  total_count: number,
  sets: stickerSetInfo[],
}

export type stickerSetsOptional = {|
  _: 'stickerSets',
  total_count?: number,
  sets?: stickerSetInfoOptional[],
|}

export type stickers = {
  _: 'stickers',
  stickers: sticker[],
}

export type stickersOptional = {|
  _: 'stickers',
  stickers?: stickerOptional[],
|}

export type storageStatistics = {
  _: 'storageStatistics',
  size: number,
  count: number,
  by_chat: storageStatisticsByChat[],
}

export type storageStatisticsOptional = {|
  _: 'storageStatistics',
  size?: number,
  count?: number,
  by_chat?: storageStatisticsByChatOptional[],
|}

export type storageStatisticsByChat = {
  _: 'storageStatisticsByChat',
  chat_id: number,
  size: number,
  count: number,
  by_file_type: storageStatisticsByFileType[],
}

export type storageStatisticsByChatOptional = {|
  _: 'storageStatisticsByChat',
  chat_id?: number,
  size?: number,
  count?: number,
  by_file_type?: storageStatisticsByFileTypeOptional[],
|}

export type storageStatisticsByFileType = {
  _: 'storageStatisticsByFileType',
  file_type: FileType,
  size: number,
  count: number,
}

export type storageStatisticsByFileTypeOptional = {|
  _: 'storageStatisticsByFileType',
  file_type?: FileTypeOptional,
  size?: number,
  count?: number,
|}

export type storageStatisticsFast = {
  _: 'storageStatisticsFast',
  files_size: number,
  file_count: number,
  database_size: number,
}

export type storageStatisticsFastOptional = {|
  _: 'storageStatisticsFast',
  files_size?: number,
  file_count?: number,
  database_size?: number,
|}

export type supergroup = {
  _: 'supergroup',
  id: number,
  username: string,
  date: number,
  status: ChatMemberStatus,
  member_count: number,
  anyone_can_invite: boolean,
  sign_messages: boolean,
  is_channel: boolean,
  is_verified: boolean,
  restriction_reason: string,
}

export type supergroupOptional = {|
  _: 'supergroup',
  id?: number,
  username?: string,
  date?: number,
  status?: ChatMemberStatusOptional,
  member_count?: number,
  anyone_can_invite?: boolean,
  sign_messages?: boolean,
  is_channel?: boolean,
  is_verified?: boolean,
  restriction_reason?: string,
|}

export type supergroupFullInfo = {
  _: 'supergroupFullInfo',
  description: string,
  member_count: number,
  administrator_count: number,
  restricted_count: number,
  banned_count: number,
  can_get_members: boolean,
  can_set_username: boolean,
  can_set_sticker_set: boolean,
  is_all_history_available: boolean,
  sticker_set_id: number,
  invite_link: string,
  pinned_message_id: number,
  upgraded_from_basic_group_id: number,
  upgraded_from_max_message_id: number,
}

export type supergroupFullInfoOptional = {|
  _: 'supergroupFullInfo',
  description?: string,
  member_count?: number,
  administrator_count?: number,
  restricted_count?: number,
  banned_count?: number,
  can_get_members?: boolean,
  can_set_username?: boolean,
  can_set_sticker_set?: boolean,
  is_all_history_available?: boolean,
  sticker_set_id?: number,
  invite_link?: string,
  pinned_message_id?: number,
  upgraded_from_basic_group_id?: number,
  upgraded_from_max_message_id?: number,
|}

export type supergroupMembersFilterRecent = {
  _: 'supergroupMembersFilterRecent',
}

export type supergroupMembersFilterRecentOptional = {|
  _: 'supergroupMembersFilterRecent',
|}

export type supergroupMembersFilterAdministrators = {
  _: 'supergroupMembersFilterAdministrators',
}

export type supergroupMembersFilterAdministratorsOptional = {|
  _: 'supergroupMembersFilterAdministrators',
|}

export type supergroupMembersFilterSearch = {
  _: 'supergroupMembersFilterSearch',
  query: string,
}

export type supergroupMembersFilterSearchOptional = {|
  _: 'supergroupMembersFilterSearch',
  query?: string,
|}

export type supergroupMembersFilterRestricted = {
  _: 'supergroupMembersFilterRestricted',
  query: string,
}

export type supergroupMembersFilterRestrictedOptional = {|
  _: 'supergroupMembersFilterRestricted',
  query?: string,
|}

export type supergroupMembersFilterBanned = {
  _: 'supergroupMembersFilterBanned',
  query: string,
}

export type supergroupMembersFilterBannedOptional = {|
  _: 'supergroupMembersFilterBanned',
  query?: string,
|}

export type supergroupMembersFilterBots = {
  _: 'supergroupMembersFilterBots',
}

export type supergroupMembersFilterBotsOptional = {|
  _: 'supergroupMembersFilterBots',
|}

export type tMeUrl = {
  _: 'tMeUrl',
  url: string,
  type: TMeUrlType,
}

export type tMeUrlOptional = {|
  _: 'tMeUrl',
  url?: string,
  type?: TMeUrlTypeOptional,
|}

export type tMeUrlTypeUser = {
  _: 'tMeUrlTypeUser',
  user_id: number,
}

export type tMeUrlTypeUserOptional = {|
  _: 'tMeUrlTypeUser',
  user_id?: number,
|}

export type tMeUrlTypeSupergroup = {
  _: 'tMeUrlTypeSupergroup',
  supergroup_id: number,
}

export type tMeUrlTypeSupergroupOptional = {|
  _: 'tMeUrlTypeSupergroup',
  supergroup_id?: number,
|}

export type tMeUrlTypeChatInvite = {
  _: 'tMeUrlTypeChatInvite',
  info: chatInviteLinkInfo,
}

export type tMeUrlTypeChatInviteOptional = {|
  _: 'tMeUrlTypeChatInvite',
  info?: chatInviteLinkInfoOptional,
|}

export type tMeUrlTypeStickerSet = {
  _: 'tMeUrlTypeStickerSet',
  sticker_set_id: number,
}

export type tMeUrlTypeStickerSetOptional = {|
  _: 'tMeUrlTypeStickerSet',
  sticker_set_id?: number,
|}

export type tMeUrls = {
  _: 'tMeUrls',
  urls: tMeUrl[],
}

export type tMeUrlsOptional = {|
  _: 'tMeUrls',
  urls?: tMeUrlOptional[],
|}

export type tdlibParameters = {
  _: 'tdlibParameters',
  use_test_dc: boolean,
  database_directory: string,
  files_directory: string,
  use_file_database: boolean,
  use_chat_info_database: boolean,
  use_message_database: boolean,
  use_secret_chats: boolean,
  api_id: number,
  api_hash: string,
  system_language_code: string,
  device_model: string,
  system_version: string,
  application_version: string,
  enable_storage_optimizer: boolean,
  ignore_file_names: boolean,
}

export type tdlibParametersOptional = {|
  _: 'tdlibParameters',
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
  ignore_file_names?: boolean,
|}

export type temporaryPasswordState = {
  _: 'temporaryPasswordState',
  has_password: boolean,
  valid_for: number,
}

export type temporaryPasswordStateOptional = {|
  _: 'temporaryPasswordState',
  has_password?: boolean,
  valid_for?: number,
|}

export type testBytes = {
  _: 'testBytes',
  value: string,
}

export type testBytesOptional = {|
  _: 'testBytes',
  value?: string,
|}

export type testInt = {
  _: 'testInt',
  value: number,
}

export type testIntOptional = {|
  _: 'testInt',
  value?: number,
|}

export type testString = {
  _: 'testString',
  value: string,
}

export type testStringOptional = {|
  _: 'testString',
  value?: string,
|}

export type testVectorInt = {
  _: 'testVectorInt',
  value: number,
}

export type testVectorIntOptional = {|
  _: 'testVectorInt',
  value?: number,
|}

export type testVectorIntObject = {
  _: 'testVectorIntObject',
  value: testInt[],
}

export type testVectorIntObjectOptional = {|
  _: 'testVectorIntObject',
  value?: testIntOptional[],
|}

export type testVectorString = {
  _: 'testVectorString',
  value: string,
}

export type testVectorStringOptional = {|
  _: 'testVectorString',
  value?: string,
|}

export type testVectorStringObject = {
  _: 'testVectorStringObject',
  value: testString[],
}

export type testVectorStringObjectOptional = {|
  _: 'testVectorStringObject',
  value?: testStringOptional[],
|}

export type text = {
  _: 'text',
  text: string,
}

export type textOptional = {|
  _: 'text',
  text?: string,
|}

export type textEntities = {
  _: 'textEntities',
  entities: textEntity[],
}

export type textEntitiesOptional = {|
  _: 'textEntities',
  entities?: textEntityOptional[],
|}

export type textEntity = {
  _: 'textEntity',
  offset: number,
  length: number,
  type: TextEntityType,
}

export type textEntityOptional = {|
  _: 'textEntity',
  offset?: number,
  length?: number,
  type?: TextEntityTypeOptional,
|}

export type textEntityTypeMention = {
  _: 'textEntityTypeMention',
}

export type textEntityTypeMentionOptional = {|
  _: 'textEntityTypeMention',
|}

export type textEntityTypeHashtag = {
  _: 'textEntityTypeHashtag',
}

export type textEntityTypeHashtagOptional = {|
  _: 'textEntityTypeHashtag',
|}

export type textEntityTypeCashtag = {
  _: 'textEntityTypeCashtag',
}

export type textEntityTypeCashtagOptional = {|
  _: 'textEntityTypeCashtag',
|}

export type textEntityTypeBotCommand = {
  _: 'textEntityTypeBotCommand',
}

export type textEntityTypeBotCommandOptional = {|
  _: 'textEntityTypeBotCommand',
|}

export type textEntityTypeUrl = {
  _: 'textEntityTypeUrl',
}

export type textEntityTypeUrlOptional = {|
  _: 'textEntityTypeUrl',
|}

export type textEntityTypeEmailAddress = {
  _: 'textEntityTypeEmailAddress',
}

export type textEntityTypeEmailAddressOptional = {|
  _: 'textEntityTypeEmailAddress',
|}

export type textEntityTypeBold = {
  _: 'textEntityTypeBold',
}

export type textEntityTypeBoldOptional = {|
  _: 'textEntityTypeBold',
|}

export type textEntityTypeItalic = {
  _: 'textEntityTypeItalic',
}

export type textEntityTypeItalicOptional = {|
  _: 'textEntityTypeItalic',
|}

export type textEntityTypeCode = {
  _: 'textEntityTypeCode',
}

export type textEntityTypeCodeOptional = {|
  _: 'textEntityTypeCode',
|}

export type textEntityTypePre = {
  _: 'textEntityTypePre',
}

export type textEntityTypePreOptional = {|
  _: 'textEntityTypePre',
|}

export type textEntityTypePreCode = {
  _: 'textEntityTypePreCode',
  language: string,
}

export type textEntityTypePreCodeOptional = {|
  _: 'textEntityTypePreCode',
  language?: string,
|}

export type textEntityTypeTextUrl = {
  _: 'textEntityTypeTextUrl',
  url: string,
}

export type textEntityTypeTextUrlOptional = {|
  _: 'textEntityTypeTextUrl',
  url?: string,
|}

export type textEntityTypeMentionName = {
  _: 'textEntityTypeMentionName',
  user_id: number,
}

export type textEntityTypeMentionNameOptional = {|
  _: 'textEntityTypeMentionName',
  user_id?: number,
|}

export type textEntityTypePhoneNumber = {
  _: 'textEntityTypePhoneNumber',
}

export type textEntityTypePhoneNumberOptional = {|
  _: 'textEntityTypePhoneNumber',
|}

export type textParseModeMarkdown = {
  _: 'textParseModeMarkdown',
}

export type textParseModeMarkdownOptional = {|
  _: 'textParseModeMarkdown',
|}

export type textParseModeHTML = {
  _: 'textParseModeHTML',
}

export type textParseModeHTMLOptional = {|
  _: 'textParseModeHTML',
|}

export type topChatCategoryUsers = {
  _: 'topChatCategoryUsers',
}

export type topChatCategoryUsersOptional = {|
  _: 'topChatCategoryUsers',
|}

export type topChatCategoryBots = {
  _: 'topChatCategoryBots',
}

export type topChatCategoryBotsOptional = {|
  _: 'topChatCategoryBots',
|}

export type topChatCategoryGroups = {
  _: 'topChatCategoryGroups',
}

export type topChatCategoryGroupsOptional = {|
  _: 'topChatCategoryGroups',
|}

export type topChatCategoryChannels = {
  _: 'topChatCategoryChannels',
}

export type topChatCategoryChannelsOptional = {|
  _: 'topChatCategoryChannels',
|}

export type topChatCategoryInlineBots = {
  _: 'topChatCategoryInlineBots',
}

export type topChatCategoryInlineBotsOptional = {|
  _: 'topChatCategoryInlineBots',
|}

export type topChatCategoryCalls = {
  _: 'topChatCategoryCalls',
}

export type topChatCategoryCallsOptional = {|
  _: 'topChatCategoryCalls',
|}

export type updateAuthorizationState = {
  _: 'updateAuthorizationState',
  authorization_state: AuthorizationState,
}

export type updateAuthorizationStateOptional = {|
  _: 'updateAuthorizationState',
  authorization_state?: AuthorizationStateOptional,
|}

export type updateNewMessage = {
  _: 'updateNewMessage',
  message: message,
  disable_notification: boolean,
  contains_mention: boolean,
}

export type updateNewMessageOptional = {|
  _: 'updateNewMessage',
  message?: messageOptional,
  disable_notification?: boolean,
  contains_mention?: boolean,
|}

export type updateMessageSendAcknowledged = {
  _: 'updateMessageSendAcknowledged',
  chat_id: number,
  message_id: number,
}

export type updateMessageSendAcknowledgedOptional = {|
  _: 'updateMessageSendAcknowledged',
  chat_id?: number,
  message_id?: number,
|}

export type updateMessageSendSucceeded = {
  _: 'updateMessageSendSucceeded',
  message: message,
  old_message_id: number,
}

export type updateMessageSendSucceededOptional = {|
  _: 'updateMessageSendSucceeded',
  message?: messageOptional,
  old_message_id?: number,
|}

export type updateMessageSendFailed = {
  _: 'updateMessageSendFailed',
  message: message,
  old_message_id: number,
  error_code: number,
  error_message: string,
}

export type updateMessageSendFailedOptional = {|
  _: 'updateMessageSendFailed',
  message?: messageOptional,
  old_message_id?: number,
  error_code?: number,
  error_message?: string,
|}

export type updateMessageContent = {
  _: 'updateMessageContent',
  chat_id: number,
  message_id: number,
  new_content: MessageContent,
}

export type updateMessageContentOptional = {|
  _: 'updateMessageContent',
  chat_id?: number,
  message_id?: number,
  new_content?: MessageContentOptional,
|}

export type updateMessageEdited = {
  _: 'updateMessageEdited',
  chat_id: number,
  message_id: number,
  edit_date: number,
  reply_markup: ReplyMarkup,
}

export type updateMessageEditedOptional = {|
  _: 'updateMessageEdited',
  chat_id?: number,
  message_id?: number,
  edit_date?: number,
  reply_markup?: ReplyMarkupOptional,
|}

export type updateMessageViews = {
  _: 'updateMessageViews',
  chat_id: number,
  message_id: number,
  views: number,
}

export type updateMessageViewsOptional = {|
  _: 'updateMessageViews',
  chat_id?: number,
  message_id?: number,
  views?: number,
|}

export type updateMessageContentOpened = {
  _: 'updateMessageContentOpened',
  chat_id: number,
  message_id: number,
}

export type updateMessageContentOpenedOptional = {|
  _: 'updateMessageContentOpened',
  chat_id?: number,
  message_id?: number,
|}

export type updateMessageMentionRead = {
  _: 'updateMessageMentionRead',
  chat_id: number,
  message_id: number,
  unread_mention_count: number,
}

export type updateMessageMentionReadOptional = {|
  _: 'updateMessageMentionRead',
  chat_id?: number,
  message_id?: number,
  unread_mention_count?: number,
|}

export type updateNewChat = {
  _: 'updateNewChat',
  chat: chat,
}

export type updateNewChatOptional = {|
  _: 'updateNewChat',
  chat?: chatOptional,
|}

export type updateChatTitle = {
  _: 'updateChatTitle',
  chat_id: number,
  title: string,
}

export type updateChatTitleOptional = {|
  _: 'updateChatTitle',
  chat_id?: number,
  title?: string,
|}

export type updateChatPhoto = {
  _: 'updateChatPhoto',
  chat_id: number,
  photo: chatPhoto,
}

export type updateChatPhotoOptional = {|
  _: 'updateChatPhoto',
  chat_id?: number,
  photo?: chatPhotoOptional,
|}

export type updateChatLastMessage = {
  _: 'updateChatLastMessage',
  chat_id: number,
  last_message: message,
  order: number,
}

export type updateChatLastMessageOptional = {|
  _: 'updateChatLastMessage',
  chat_id?: number,
  last_message?: messageOptional,
  order?: number,
|}

export type updateChatOrder = {
  _: 'updateChatOrder',
  chat_id: number,
  order: number,
}

export type updateChatOrderOptional = {|
  _: 'updateChatOrder',
  chat_id?: number,
  order?: number,
|}

export type updateChatIsPinned = {
  _: 'updateChatIsPinned',
  chat_id: number,
  is_pinned: boolean,
  order: number,
}

export type updateChatIsPinnedOptional = {|
  _: 'updateChatIsPinned',
  chat_id?: number,
  is_pinned?: boolean,
  order?: number,
|}

export type updateChatReadInbox = {
  _: 'updateChatReadInbox',
  chat_id: number,
  last_read_inbox_message_id: number,
  unread_count: number,
}

export type updateChatReadInboxOptional = {|
  _: 'updateChatReadInbox',
  chat_id?: number,
  last_read_inbox_message_id?: number,
  unread_count?: number,
|}

export type updateChatReadOutbox = {
  _: 'updateChatReadOutbox',
  chat_id: number,
  last_read_outbox_message_id: number,
}

export type updateChatReadOutboxOptional = {|
  _: 'updateChatReadOutbox',
  chat_id?: number,
  last_read_outbox_message_id?: number,
|}

export type updateChatUnreadMentionCount = {
  _: 'updateChatUnreadMentionCount',
  chat_id: number,
  unread_mention_count: number,
}

export type updateChatUnreadMentionCountOptional = {|
  _: 'updateChatUnreadMentionCount',
  chat_id?: number,
  unread_mention_count?: number,
|}

export type updateNotificationSettings = {
  _: 'updateNotificationSettings',
  scope: NotificationSettingsScope,
  notification_settings: notificationSettings,
}

export type updateNotificationSettingsOptional = {|
  _: 'updateNotificationSettings',
  scope?: NotificationSettingsScopeOptional,
  notification_settings?: notificationSettingsOptional,
|}

export type updateChatReplyMarkup = {
  _: 'updateChatReplyMarkup',
  chat_id: number,
  reply_markup_message_id: number,
}

export type updateChatReplyMarkupOptional = {|
  _: 'updateChatReplyMarkup',
  chat_id?: number,
  reply_markup_message_id?: number,
|}

export type updateChatDraftMessage = {
  _: 'updateChatDraftMessage',
  chat_id: number,
  draft_message: draftMessage,
  order: number,
}

export type updateChatDraftMessageOptional = {|
  _: 'updateChatDraftMessage',
  chat_id?: number,
  draft_message?: draftMessageOptional,
  order?: number,
|}

export type updateDeleteMessages = {
  _: 'updateDeleteMessages',
  chat_id: number,
  message_ids: number,
  is_permanent: boolean,
  from_cache: boolean,
}

export type updateDeleteMessagesOptional = {|
  _: 'updateDeleteMessages',
  chat_id?: number,
  message_ids?: number,
  is_permanent?: boolean,
  from_cache?: boolean,
|}

export type updateUserChatAction = {
  _: 'updateUserChatAction',
  chat_id: number,
  user_id: number,
  action: ChatAction,
}

export type updateUserChatActionOptional = {|
  _: 'updateUserChatAction',
  chat_id?: number,
  user_id?: number,
  action?: ChatActionOptional,
|}

export type updateUserStatus = {
  _: 'updateUserStatus',
  user_id: number,
  status: UserStatus,
}

export type updateUserStatusOptional = {|
  _: 'updateUserStatus',
  user_id?: number,
  status?: UserStatusOptional,
|}

export type updateUser = {
  _: 'updateUser',
  user: user,
}

export type updateUserOptional = {|
  _: 'updateUser',
  user?: userOptional,
|}

export type updateBasicGroup = {
  _: 'updateBasicGroup',
  basic_group: basicGroup,
}

export type updateBasicGroupOptional = {|
  _: 'updateBasicGroup',
  basic_group?: basicGroupOptional,
|}

export type updateSupergroup = {
  _: 'updateSupergroup',
  supergroup: supergroup,
}

export type updateSupergroupOptional = {|
  _: 'updateSupergroup',
  supergroup?: supergroupOptional,
|}

export type updateSecretChat = {
  _: 'updateSecretChat',
  secret_chat: secretChat,
}

export type updateSecretChatOptional = {|
  _: 'updateSecretChat',
  secret_chat?: secretChatOptional,
|}

export type updateUserFullInfo = {
  _: 'updateUserFullInfo',
  user_id: number,
  user_full_info: userFullInfo,
}

export type updateUserFullInfoOptional = {|
  _: 'updateUserFullInfo',
  user_id?: number,
  user_full_info?: userFullInfoOptional,
|}

export type updateBasicGroupFullInfo = {
  _: 'updateBasicGroupFullInfo',
  basic_group_id: number,
  basic_group_full_info: basicGroupFullInfo,
}

export type updateBasicGroupFullInfoOptional = {|
  _: 'updateBasicGroupFullInfo',
  basic_group_id?: number,
  basic_group_full_info?: basicGroupFullInfoOptional,
|}

export type updateSupergroupFullInfo = {
  _: 'updateSupergroupFullInfo',
  supergroup_id: number,
  supergroup_full_info: supergroupFullInfo,
}

export type updateSupergroupFullInfoOptional = {|
  _: 'updateSupergroupFullInfo',
  supergroup_id?: number,
  supergroup_full_info?: supergroupFullInfoOptional,
|}

export type updateServiceNotification = {
  _: 'updateServiceNotification',
  type: string,
  content: MessageContent,
}

export type updateServiceNotificationOptional = {|
  _: 'updateServiceNotification',
  type?: string,
  content?: MessageContentOptional,
|}

export type updateFile = {
  _: 'updateFile',
  file: file,
}

export type updateFileOptional = {|
  _: 'updateFile',
  file?: fileOptional,
|}

export type updateFileGenerationStart = {
  _: 'updateFileGenerationStart',
  generation_id: number,
  original_path: string,
  destination_path: string,
  conversion: string,
}

export type updateFileGenerationStartOptional = {|
  _: 'updateFileGenerationStart',
  generation_id?: number,
  original_path?: string,
  destination_path?: string,
  conversion?: string,
|}

export type updateFileGenerationStop = {
  _: 'updateFileGenerationStop',
  generation_id: number,
}

export type updateFileGenerationStopOptional = {|
  _: 'updateFileGenerationStop',
  generation_id?: number,
|}

export type updateCall = {
  _: 'updateCall',
  call: call,
}

export type updateCallOptional = {|
  _: 'updateCall',
  call?: callOptional,
|}

export type updateUserPrivacySettingRules = {
  _: 'updateUserPrivacySettingRules',
  setting: UserPrivacySetting,
  rules: userPrivacySettingRules,
}

export type updateUserPrivacySettingRulesOptional = {|
  _: 'updateUserPrivacySettingRules',
  setting?: UserPrivacySettingOptional,
  rules?: userPrivacySettingRulesOptional,
|}

export type updateUnreadMessageCount = {
  _: 'updateUnreadMessageCount',
  unread_count: number,
  unread_unmuted_count: number,
}

export type updateUnreadMessageCountOptional = {|
  _: 'updateUnreadMessageCount',
  unread_count?: number,
  unread_unmuted_count?: number,
|}

export type updateOption = {
  _: 'updateOption',
  name: string,
  value: OptionValue,
}

export type updateOptionOptional = {|
  _: 'updateOption',
  name?: string,
  value?: OptionValueOptional,
|}

export type updateInstalledStickerSets = {
  _: 'updateInstalledStickerSets',
  is_masks: boolean,
  sticker_set_ids: number,
}

export type updateInstalledStickerSetsOptional = {|
  _: 'updateInstalledStickerSets',
  is_masks?: boolean,
  sticker_set_ids?: number,
|}

export type updateTrendingStickerSets = {
  _: 'updateTrendingStickerSets',
  sticker_sets: stickerSets,
}

export type updateTrendingStickerSetsOptional = {|
  _: 'updateTrendingStickerSets',
  sticker_sets?: stickerSetsOptional,
|}

export type updateRecentStickers = {
  _: 'updateRecentStickers',
  is_attached: boolean,
  sticker_ids: number,
}

export type updateRecentStickersOptional = {|
  _: 'updateRecentStickers',
  is_attached?: boolean,
  sticker_ids?: number,
|}

export type updateFavoriteStickers = {
  _: 'updateFavoriteStickers',
  sticker_ids: number,
}

export type updateFavoriteStickersOptional = {|
  _: 'updateFavoriteStickers',
  sticker_ids?: number,
|}

export type updateSavedAnimations = {
  _: 'updateSavedAnimations',
  animation_ids: number,
}

export type updateSavedAnimationsOptional = {|
  _: 'updateSavedAnimations',
  animation_ids?: number,
|}

export type updateConnectionState = {
  _: 'updateConnectionState',
  state: ConnectionState,
}

export type updateConnectionStateOptional = {|
  _: 'updateConnectionState',
  state?: ConnectionStateOptional,
|}

export type updateNewInlineQuery = {
  _: 'updateNewInlineQuery',
  id: number,
  sender_user_id: number,
  user_location: location,
  query: string,
  offset: string,
}

export type updateNewInlineQueryOptional = {|
  _: 'updateNewInlineQuery',
  id?: number,
  sender_user_id?: number,
  user_location?: locationOptional,
  query?: string,
  offset?: string,
|}

export type updateNewChosenInlineResult = {
  _: 'updateNewChosenInlineResult',
  sender_user_id: number,
  user_location: location,
  query: string,
  result_id: string,
  inline_message_id: string,
}

export type updateNewChosenInlineResultOptional = {|
  _: 'updateNewChosenInlineResult',
  sender_user_id?: number,
  user_location?: locationOptional,
  query?: string,
  result_id?: string,
  inline_message_id?: string,
|}

export type updateNewCallbackQuery = {
  _: 'updateNewCallbackQuery',
  id: number,
  sender_user_id: number,
  chat_id: number,
  message_id: number,
  chat_instance: number,
  payload: CallbackQueryPayload,
}

export type updateNewCallbackQueryOptional = {|
  _: 'updateNewCallbackQuery',
  id?: number,
  sender_user_id?: number,
  chat_id?: number,
  message_id?: number,
  chat_instance?: number,
  payload?: CallbackQueryPayloadOptional,
|}

export type updateNewInlineCallbackQuery = {
  _: 'updateNewInlineCallbackQuery',
  id: number,
  sender_user_id: number,
  inline_message_id: string,
  chat_instance: number,
  payload: CallbackQueryPayload,
}

export type updateNewInlineCallbackQueryOptional = {|
  _: 'updateNewInlineCallbackQuery',
  id?: number,
  sender_user_id?: number,
  inline_message_id?: string,
  chat_instance?: number,
  payload?: CallbackQueryPayloadOptional,
|}

export type updateNewShippingQuery = {
  _: 'updateNewShippingQuery',
  id: number,
  sender_user_id: number,
  invoice_payload: string,
  shipping_address: shippingAddress,
}

export type updateNewShippingQueryOptional = {|
  _: 'updateNewShippingQuery',
  id?: number,
  sender_user_id?: number,
  invoice_payload?: string,
  shipping_address?: shippingAddressOptional,
|}

export type updateNewPreCheckoutQuery = {
  _: 'updateNewPreCheckoutQuery',
  id: number,
  sender_user_id: number,
  currency: string,
  total_amount: number,
  invoice_payload: string,
  shipping_option_id: string,
  order_info: orderInfo,
}

export type updateNewPreCheckoutQueryOptional = {|
  _: 'updateNewPreCheckoutQuery',
  id?: number,
  sender_user_id?: number,
  currency?: string,
  total_amount?: number,
  invoice_payload?: string,
  shipping_option_id?: string,
  order_info?: orderInfoOptional,
|}

export type updateNewCustomEvent = {
  _: 'updateNewCustomEvent',
  event: string,
}

export type updateNewCustomEventOptional = {|
  _: 'updateNewCustomEvent',
  event?: string,
|}

export type updateNewCustomQuery = {
  _: 'updateNewCustomQuery',
  id: number,
  data: string,
  timeout: number,
}

export type updateNewCustomQueryOptional = {|
  _: 'updateNewCustomQuery',
  id?: number,
  data?: string,
  timeout?: number,
|}

export type user = {
  _: 'user',
  id: number,
  first_name: string,
  last_name: string,
  username: string,
  phone_number: string,
  status: UserStatus,
  profile_photo: profilePhoto,
  outgoing_link: LinkState,
  incoming_link: LinkState,
  is_verified: boolean,
  restriction_reason: string,
  have_access: boolean,
  type: UserType,
  language_code: string,
}

export type userOptional = {|
  _: 'user',
  id?: number,
  first_name?: string,
  last_name?: string,
  username?: string,
  phone_number?: string,
  status?: UserStatusOptional,
  profile_photo?: profilePhotoOptional,
  outgoing_link?: LinkStateOptional,
  incoming_link?: LinkStateOptional,
  is_verified?: boolean,
  restriction_reason?: string,
  have_access?: boolean,
  type?: UserTypeOptional,
  language_code?: string,
|}

export type userFullInfo = {
  _: 'userFullInfo',
  is_blocked: boolean,
  can_be_called: boolean,
  has_private_calls: boolean,
  bio: string,
  share_text: string,
  group_in_common_count: number,
  bot_info: botInfo,
}

export type userFullInfoOptional = {|
  _: 'userFullInfo',
  is_blocked?: boolean,
  can_be_called?: boolean,
  has_private_calls?: boolean,
  bio?: string,
  share_text?: string,
  group_in_common_count?: number,
  bot_info?: botInfoOptional,
|}

export type userPrivacySettingShowStatus = {
  _: 'userPrivacySettingShowStatus',
}

export type userPrivacySettingShowStatusOptional = {|
  _: 'userPrivacySettingShowStatus',
|}

export type userPrivacySettingAllowChatInvites = {
  _: 'userPrivacySettingAllowChatInvites',
}

export type userPrivacySettingAllowChatInvitesOptional = {|
  _: 'userPrivacySettingAllowChatInvites',
|}

export type userPrivacySettingAllowCalls = {
  _: 'userPrivacySettingAllowCalls',
}

export type userPrivacySettingAllowCallsOptional = {|
  _: 'userPrivacySettingAllowCalls',
|}

export type userPrivacySettingRuleAllowAll = {
  _: 'userPrivacySettingRuleAllowAll',
}

export type userPrivacySettingRuleAllowAllOptional = {|
  _: 'userPrivacySettingRuleAllowAll',
|}

export type userPrivacySettingRuleAllowContacts = {
  _: 'userPrivacySettingRuleAllowContacts',
}

export type userPrivacySettingRuleAllowContactsOptional = {|
  _: 'userPrivacySettingRuleAllowContacts',
|}

export type userPrivacySettingRuleAllowUsers = {
  _: 'userPrivacySettingRuleAllowUsers',
  user_ids: number,
}

export type userPrivacySettingRuleAllowUsersOptional = {|
  _: 'userPrivacySettingRuleAllowUsers',
  user_ids?: number,
|}

export type userPrivacySettingRuleRestrictAll = {
  _: 'userPrivacySettingRuleRestrictAll',
}

export type userPrivacySettingRuleRestrictAllOptional = {|
  _: 'userPrivacySettingRuleRestrictAll',
|}

export type userPrivacySettingRuleRestrictContacts = {
  _: 'userPrivacySettingRuleRestrictContacts',
}

export type userPrivacySettingRuleRestrictContactsOptional = {|
  _: 'userPrivacySettingRuleRestrictContacts',
|}

export type userPrivacySettingRuleRestrictUsers = {
  _: 'userPrivacySettingRuleRestrictUsers',
  user_ids: number,
}

export type userPrivacySettingRuleRestrictUsersOptional = {|
  _: 'userPrivacySettingRuleRestrictUsers',
  user_ids?: number,
|}

export type userPrivacySettingRules = {
  _: 'userPrivacySettingRules',
  rules: UserPrivacySettingRule[],
}

export type userPrivacySettingRulesOptional = {|
  _: 'userPrivacySettingRules',
  rules?: UserPrivacySettingRuleOptional[],
|}

export type userProfilePhotos = {
  _: 'userProfilePhotos',
  total_count: number,
  photos: photo[],
}

export type userProfilePhotosOptional = {|
  _: 'userProfilePhotos',
  total_count?: number,
  photos?: photoOptional[],
|}

export type userStatusEmpty = {
  _: 'userStatusEmpty',
}

export type userStatusEmptyOptional = {|
  _: 'userStatusEmpty',
|}

export type userStatusOnline = {
  _: 'userStatusOnline',
  expires: number,
}

export type userStatusOnlineOptional = {|
  _: 'userStatusOnline',
  expires?: number,
|}

export type userStatusOffline = {
  _: 'userStatusOffline',
  was_online: number,
}

export type userStatusOfflineOptional = {|
  _: 'userStatusOffline',
  was_online?: number,
|}

export type userStatusRecently = {
  _: 'userStatusRecently',
}

export type userStatusRecentlyOptional = {|
  _: 'userStatusRecently',
|}

export type userStatusLastWeek = {
  _: 'userStatusLastWeek',
}

export type userStatusLastWeekOptional = {|
  _: 'userStatusLastWeek',
|}

export type userStatusLastMonth = {
  _: 'userStatusLastMonth',
}

export type userStatusLastMonthOptional = {|
  _: 'userStatusLastMonth',
|}

export type userTypeRegular = {
  _: 'userTypeRegular',
}

export type userTypeRegularOptional = {|
  _: 'userTypeRegular',
|}

export type userTypeDeleted = {
  _: 'userTypeDeleted',
}

export type userTypeDeletedOptional = {|
  _: 'userTypeDeleted',
|}

export type userTypeBot = {
  _: 'userTypeBot',
  can_join_groups: boolean,
  can_read_all_group_messages: boolean,
  is_inline: boolean,
  inline_query_placeholder: string,
  need_location: boolean,
}

export type userTypeBotOptional = {|
  _: 'userTypeBot',
  can_join_groups?: boolean,
  can_read_all_group_messages?: boolean,
  is_inline?: boolean,
  inline_query_placeholder?: string,
  need_location?: boolean,
|}

export type userTypeUnknown = {
  _: 'userTypeUnknown',
}

export type userTypeUnknownOptional = {|
  _: 'userTypeUnknown',
|}

export type users = {
  _: 'users',
  total_count: number,
  user_ids: number,
}

export type usersOptional = {|
  _: 'users',
  total_count?: number,
  user_ids?: number,
|}

export type validatedOrderInfo = {
  _: 'validatedOrderInfo',
  order_info_id: string,
  shipping_options: shippingOption[],
}

export type validatedOrderInfoOptional = {|
  _: 'validatedOrderInfo',
  order_info_id?: string,
  shipping_options?: shippingOptionOptional[],
|}

export type venue = {
  _: 'venue',
  location: location,
  title: string,
  address: string,
  provider: string,
  id: string,
}

export type venueOptional = {|
  _: 'venue',
  location?: locationOptional,
  title?: string,
  address?: string,
  provider?: string,
  id?: string,
|}

export type video = {
  _: 'video',
  duration: number,
  width: number,
  height: number,
  file_name: string,
  mime_type: string,
  has_stickers: boolean,
  supports_streaming: boolean,
  thumbnail: photoSize,
  video: file,
}

export type videoOptional = {|
  _: 'video',
  duration?: number,
  width?: number,
  height?: number,
  file_name?: string,
  mime_type?: string,
  has_stickers?: boolean,
  supports_streaming?: boolean,
  thumbnail?: photoSizeOptional,
  video?: fileOptional,
|}

export type videoNote = {
  _: 'videoNote',
  duration: number,
  length: number,
  thumbnail: photoSize,
  video: file,
}

export type videoNoteOptional = {|
  _: 'videoNote',
  duration?: number,
  length?: number,
  thumbnail?: photoSizeOptional,
  video?: fileOptional,
|}

export type voiceNote = {
  _: 'voiceNote',
  duration: number,
  waveform: string,
  mime_type: string,
  voice: file,
}

export type voiceNoteOptional = {|
  _: 'voiceNote',
  duration?: number,
  waveform?: string,
  mime_type?: string,
  voice?: fileOptional,
|}

export type wallpaper = {
  _: 'wallpaper',
  id: number,
  sizes: photoSize[],
  color: number,
}

export type wallpaperOptional = {|
  _: 'wallpaper',
  id?: number,
  sizes?: photoSizeOptional[],
  color?: number,
|}

export type wallpapers = {
  _: 'wallpapers',
  wallpapers: wallpaper[],
}

export type wallpapersOptional = {|
  _: 'wallpapers',
  wallpapers?: wallpaperOptional[],
|}

export type webPage = {
  _: 'webPage',
  url: string,
  display_url: string,
  type: string,
  site_name: string,
  title: string,
  description: string,
  photo: photo,
  embed_url: string,
  embed_type: string,
  embed_width: number,
  embed_height: number,
  duration: number,
  author: string,
  animation: animation,
  audio: audio,
  document: document,
  sticker: sticker,
  video: video,
  video_note: videoNote,
  voice_note: voiceNote,
  has_instant_view: boolean,
}

export type webPageOptional = {|
  _: 'webPage',
  url?: string,
  display_url?: string,
  type?: string,
  site_name?: string,
  title?: string,
  description?: string,
  photo?: photoOptional,
  embed_url?: string,
  embed_type?: string,
  embed_width?: number,
  embed_height?: number,
  duration?: number,
  author?: string,
  animation?: animationOptional,
  audio?: audioOptional,
  document?: documentOptional,
  sticker?: stickerOptional,
  video?: videoOptional,
  video_note?: videoNoteOptional,
  voice_note?: voiceNoteOptional,
  has_instant_view?: boolean,
|}

export type webPageInstantView = {
  _: 'webPageInstantView',
  page_blocks: PageBlock[],
  is_full: boolean,
}

export type webPageInstantViewOptional = {|
  _: 'webPageInstantView',
  page_blocks?: PageBlockOptional[],
  is_full?: boolean,
|}

export type acceptCall = {|
  _: 'acceptCall',
  call_id?: number,
  protocol?: callProtocolOptional,
|}

export type acceptCallOptional = {|
  _: 'acceptCall',
  call_id?: number,
  protocol?: callProtocolOptional,
|}

export type acceptCallReturnType = ok

export type addChatMember = {|
  _: 'addChatMember',
  chat_id?: number,
  user_id?: number,
  forward_limit?: number,
|}

export type addChatMemberOptional = {|
  _: 'addChatMember',
  chat_id?: number,
  user_id?: number,
  forward_limit?: number,
|}

export type addChatMemberReturnType = ok

export type addChatMembers = {|
  _: 'addChatMembers',
  chat_id?: number,
  user_ids?: number,
|}

export type addChatMembersOptional = {|
  _: 'addChatMembers',
  chat_id?: number,
  user_ids?: number,
|}

export type addChatMembersReturnType = ok

export type addFavoriteSticker = {|
  _: 'addFavoriteSticker',
  sticker?: InputFileOptional,
|}

export type addFavoriteStickerOptional = {|
  _: 'addFavoriteSticker',
  sticker?: InputFileOptional,
|}

export type addFavoriteStickerReturnType = ok

export type addNetworkStatistics = {|
  _: 'addNetworkStatistics',
  entry?: NetworkStatisticsEntryOptional,
|}

export type addNetworkStatisticsOptional = {|
  _: 'addNetworkStatistics',
  entry?: NetworkStatisticsEntryOptional,
|}

export type addNetworkStatisticsReturnType = ok

export type addRecentSticker = {|
  _: 'addRecentSticker',
  is_attached?: boolean,
  sticker?: InputFileOptional,
|}

export type addRecentStickerOptional = {|
  _: 'addRecentSticker',
  is_attached?: boolean,
  sticker?: InputFileOptional,
|}

export type addRecentStickerReturnType = stickers

export type addRecentlyFoundChat = {|
  _: 'addRecentlyFoundChat',
  chat_id?: number,
|}

export type addRecentlyFoundChatOptional = {|
  _: 'addRecentlyFoundChat',
  chat_id?: number,
|}

export type addRecentlyFoundChatReturnType = ok

export type addSavedAnimation = {|
  _: 'addSavedAnimation',
  animation?: InputFileOptional,
|}

export type addSavedAnimationOptional = {|
  _: 'addSavedAnimation',
  animation?: InputFileOptional,
|}

export type addSavedAnimationReturnType = ok

export type addStickerToSet = {|
  _: 'addStickerToSet',
  user_id?: number,
  name?: string,
  sticker?: inputStickerOptional,
|}

export type addStickerToSetOptional = {|
  _: 'addStickerToSet',
  user_id?: number,
  name?: string,
  sticker?: inputStickerOptional,
|}

export type addStickerToSetReturnType = stickerSet

export type answerCallbackQuery = {|
  _: 'answerCallbackQuery',
  callback_query_id?: number,
  text?: string,
  show_alert?: boolean,
  url?: string,
  cache_time?: number,
|}

export type answerCallbackQueryOptional = {|
  _: 'answerCallbackQuery',
  callback_query_id?: number,
  text?: string,
  show_alert?: boolean,
  url?: string,
  cache_time?: number,
|}

export type answerCallbackQueryReturnType = ok

export type answerCustomQuery = {|
  _: 'answerCustomQuery',
  custom_query_id?: number,
  data?: string,
|}

export type answerCustomQueryOptional = {|
  _: 'answerCustomQuery',
  custom_query_id?: number,
  data?: string,
|}

export type answerCustomQueryReturnType = ok

export type answerInlineQuery = {|
  _: 'answerInlineQuery',
  inline_query_id?: number,
  is_personal?: boolean,
  results?: InputInlineQueryResultOptional[],
  cache_time?: number,
  next_offset?: string,
  switch_pm_text?: string,
  switch_pm_parameter?: string,
|}

export type answerInlineQueryOptional = {|
  _: 'answerInlineQuery',
  inline_query_id?: number,
  is_personal?: boolean,
  results?: InputInlineQueryResultOptional[],
  cache_time?: number,
  next_offset?: string,
  switch_pm_text?: string,
  switch_pm_parameter?: string,
|}

export type answerInlineQueryReturnType = ok

export type answerPreCheckoutQuery = {|
  _: 'answerPreCheckoutQuery',
  pre_checkout_query_id?: number,
  error_message?: string,
|}

export type answerPreCheckoutQueryOptional = {|
  _: 'answerPreCheckoutQuery',
  pre_checkout_query_id?: number,
  error_message?: string,
|}

export type answerPreCheckoutQueryReturnType = ok

export type answerShippingQuery = {|
  _: 'answerShippingQuery',
  shipping_query_id?: number,
  shipping_options?: shippingOptionOptional[],
  error_message?: string,
|}

export type answerShippingQueryOptional = {|
  _: 'answerShippingQuery',
  shipping_query_id?: number,
  shipping_options?: shippingOptionOptional[],
  error_message?: string,
|}

export type answerShippingQueryReturnType = ok

export type blockUser = {|
  _: 'blockUser',
  user_id?: number,
|}

export type blockUserOptional = {|
  _: 'blockUser',
  user_id?: number,
|}

export type blockUserReturnType = ok

export type cancelDownloadFile = {|
  _: 'cancelDownloadFile',
  file_id?: number,
  only_if_pending?: boolean,
|}

export type cancelDownloadFileOptional = {|
  _: 'cancelDownloadFile',
  file_id?: number,
  only_if_pending?: boolean,
|}

export type cancelDownloadFileReturnType = ok

export type cancelUploadFile = {|
  _: 'cancelUploadFile',
  file_id?: number,
|}

export type cancelUploadFileOptional = {|
  _: 'cancelUploadFile',
  file_id?: number,
|}

export type cancelUploadFileReturnType = ok

export type changeChatReportSpamState = {|
  _: 'changeChatReportSpamState',
  chat_id?: number,
  is_spam_chat?: boolean,
|}

export type changeChatReportSpamStateOptional = {|
  _: 'changeChatReportSpamState',
  chat_id?: number,
  is_spam_chat?: boolean,
|}

export type changeChatReportSpamStateReturnType = ok

export type changeImportedContacts = {|
  _: 'changeImportedContacts',
  contacts?: contactOptional[],
|}

export type changeImportedContactsOptional = {|
  _: 'changeImportedContacts',
  contacts?: contactOptional[],
|}

export type changeImportedContactsReturnType = importedContacts

export type changePhoneNumber = {|
  _: 'changePhoneNumber',
  phone_number?: string,
  allow_flash_call?: boolean,
  is_current_phone_number?: boolean,
|}

export type changePhoneNumberOptional = {|
  _: 'changePhoneNumber',
  phone_number?: string,
  allow_flash_call?: boolean,
  is_current_phone_number?: boolean,
|}

export type changePhoneNumberReturnType = authenticationCodeInfo

export type changeStickerSet = {|
  _: 'changeStickerSet',
  set_id?: number,
  is_installed?: boolean,
  is_archived?: boolean,
|}

export type changeStickerSetOptional = {|
  _: 'changeStickerSet',
  set_id?: number,
  is_installed?: boolean,
  is_archived?: boolean,
|}

export type changeStickerSetReturnType = ok

export type checkAuthenticationBotToken = {|
  _: 'checkAuthenticationBotToken',
  token?: string,
|}

export type checkAuthenticationBotTokenOptional = {|
  _: 'checkAuthenticationBotToken',
  token?: string,
|}

export type checkAuthenticationBotTokenReturnType = ok

export type checkAuthenticationCode = {|
  _: 'checkAuthenticationCode',
  code?: string,
  first_name?: string,
  last_name?: string,
|}

export type checkAuthenticationCodeOptional = {|
  _: 'checkAuthenticationCode',
  code?: string,
  first_name?: string,
  last_name?: string,
|}

export type checkAuthenticationCodeReturnType = ok

export type checkAuthenticationPassword = {|
  _: 'checkAuthenticationPassword',
  password?: string,
|}

export type checkAuthenticationPasswordOptional = {|
  _: 'checkAuthenticationPassword',
  password?: string,
|}

export type checkAuthenticationPasswordReturnType = ok

export type checkChangePhoneNumberCode = {|
  _: 'checkChangePhoneNumberCode',
  code?: string,
|}

export type checkChangePhoneNumberCodeOptional = {|
  _: 'checkChangePhoneNumberCode',
  code?: string,
|}

export type checkChangePhoneNumberCodeReturnType = ok

export type checkChatInviteLink = {|
  _: 'checkChatInviteLink',
  invite_link?: string,
|}

export type checkChatInviteLinkOptional = {|
  _: 'checkChatInviteLink',
  invite_link?: string,
|}

export type checkChatInviteLinkReturnType = chatInviteLinkInfo

export type checkChatUsername = {|
  _: 'checkChatUsername',
  chat_id?: number,
  username?: string,
|}

export type checkChatUsernameOptional = {|
  _: 'checkChatUsername',
  chat_id?: number,
  username?: string,
|}

export type checkChatUsernameReturnType = CheckChatUsernameResult

export type checkDatabaseEncryptionKey = {|
  _: 'checkDatabaseEncryptionKey',
  encryption_key?: string,
|}

export type checkDatabaseEncryptionKeyOptional = {|
  _: 'checkDatabaseEncryptionKey',
  encryption_key?: string,
|}

export type checkDatabaseEncryptionKeyReturnType = ok

export type clearImportedContacts = {|
  _: 'clearImportedContacts',
|}

export type clearImportedContactsOptional = {|
  _: 'clearImportedContacts',
|}

export type clearImportedContactsReturnType = ok

export type clearRecentStickers = {|
  _: 'clearRecentStickers',
  is_attached?: boolean,
|}

export type clearRecentStickersOptional = {|
  _: 'clearRecentStickers',
  is_attached?: boolean,
|}

export type clearRecentStickersReturnType = ok

export type clearRecentlyFoundChats = {|
  _: 'clearRecentlyFoundChats',
|}

export type clearRecentlyFoundChatsOptional = {|
  _: 'clearRecentlyFoundChats',
|}

export type clearRecentlyFoundChatsReturnType = ok

export type close = {|
  _: 'close',
|}

export type closeOptional = {|
  _: 'close',
|}

export type closeReturnType = ok

export type closeChat = {|
  _: 'closeChat',
  chat_id?: number,
|}

export type closeChatOptional = {|
  _: 'closeChat',
  chat_id?: number,
|}

export type closeChatReturnType = ok

export type closeSecretChat = {|
  _: 'closeSecretChat',
  secret_chat_id?: number,
|}

export type closeSecretChatOptional = {|
  _: 'closeSecretChat',
  secret_chat_id?: number,
|}

export type closeSecretChatReturnType = ok

export type createBasicGroupChat = {|
  _: 'createBasicGroupChat',
  basic_group_id?: number,
  force?: boolean,
|}

export type createBasicGroupChatOptional = {|
  _: 'createBasicGroupChat',
  basic_group_id?: number,
  force?: boolean,
|}

export type createBasicGroupChatReturnType = chat

export type createCall = {|
  _: 'createCall',
  user_id?: number,
  protocol?: callProtocolOptional,
|}

export type createCallOptional = {|
  _: 'createCall',
  user_id?: number,
  protocol?: callProtocolOptional,
|}

export type createCallReturnType = callId

export type createNewBasicGroupChat = {|
  _: 'createNewBasicGroupChat',
  user_ids?: number,
  title?: string,
|}

export type createNewBasicGroupChatOptional = {|
  _: 'createNewBasicGroupChat',
  user_ids?: number,
  title?: string,
|}

export type createNewBasicGroupChatReturnType = chat

export type createNewSecretChat = {|
  _: 'createNewSecretChat',
  user_id?: number,
|}

export type createNewSecretChatOptional = {|
  _: 'createNewSecretChat',
  user_id?: number,
|}

export type createNewSecretChatReturnType = chat

export type createNewStickerSet = {|
  _: 'createNewStickerSet',
  user_id?: number,
  title?: string,
  name?: string,
  is_masks?: boolean,
  stickers?: inputStickerOptional[],
|}

export type createNewStickerSetOptional = {|
  _: 'createNewStickerSet',
  user_id?: number,
  title?: string,
  name?: string,
  is_masks?: boolean,
  stickers?: inputStickerOptional[],
|}

export type createNewStickerSetReturnType = stickerSet

export type createNewSupergroupChat = {|
  _: 'createNewSupergroupChat',
  title?: string,
  is_channel?: boolean,
  description?: string,
|}

export type createNewSupergroupChatOptional = {|
  _: 'createNewSupergroupChat',
  title?: string,
  is_channel?: boolean,
  description?: string,
|}

export type createNewSupergroupChatReturnType = chat

export type createPrivateChat = {|
  _: 'createPrivateChat',
  user_id?: number,
  force?: boolean,
|}

export type createPrivateChatOptional = {|
  _: 'createPrivateChat',
  user_id?: number,
  force?: boolean,
|}

export type createPrivateChatReturnType = chat

export type createSecretChat = {|
  _: 'createSecretChat',
  secret_chat_id?: number,
|}

export type createSecretChatOptional = {|
  _: 'createSecretChat',
  secret_chat_id?: number,
|}

export type createSecretChatReturnType = chat

export type createSupergroupChat = {|
  _: 'createSupergroupChat',
  supergroup_id?: number,
  force?: boolean,
|}

export type createSupergroupChatOptional = {|
  _: 'createSupergroupChat',
  supergroup_id?: number,
  force?: boolean,
|}

export type createSupergroupChatReturnType = chat

export type createTemporaryPassword = {|
  _: 'createTemporaryPassword',
  password?: string,
  valid_for?: number,
|}

export type createTemporaryPasswordOptional = {|
  _: 'createTemporaryPassword',
  password?: string,
  valid_for?: number,
|}

export type createTemporaryPasswordReturnType = temporaryPasswordState

export type deleteAccount = {|
  _: 'deleteAccount',
  reason?: string,
|}

export type deleteAccountOptional = {|
  _: 'deleteAccount',
  reason?: string,
|}

export type deleteAccountReturnType = ok

export type deleteChatHistory = {|
  _: 'deleteChatHistory',
  chat_id?: number,
  remove_from_chat_list?: boolean,
|}

export type deleteChatHistoryOptional = {|
  _: 'deleteChatHistory',
  chat_id?: number,
  remove_from_chat_list?: boolean,
|}

export type deleteChatHistoryReturnType = ok

export type deleteChatMessagesFromUser = {|
  _: 'deleteChatMessagesFromUser',
  chat_id?: number,
  user_id?: number,
|}

export type deleteChatMessagesFromUserOptional = {|
  _: 'deleteChatMessagesFromUser',
  chat_id?: number,
  user_id?: number,
|}

export type deleteChatMessagesFromUserReturnType = ok

export type deleteChatReplyMarkup = {|
  _: 'deleteChatReplyMarkup',
  chat_id?: number,
  message_id?: number,
|}

export type deleteChatReplyMarkupOptional = {|
  _: 'deleteChatReplyMarkup',
  chat_id?: number,
  message_id?: number,
|}

export type deleteChatReplyMarkupReturnType = ok

export type deleteFile = {|
  _: 'deleteFile',
  file_id?: number,
|}

export type deleteFileOptional = {|
  _: 'deleteFile',
  file_id?: number,
|}

export type deleteFileReturnType = ok

export type deleteMessages = {|
  _: 'deleteMessages',
  chat_id?: number,
  message_ids?: number,
  revoke?: boolean,
|}

export type deleteMessagesOptional = {|
  _: 'deleteMessages',
  chat_id?: number,
  message_ids?: number,
  revoke?: boolean,
|}

export type deleteMessagesReturnType = ok

export type deleteProfilePhoto = {|
  _: 'deleteProfilePhoto',
  profile_photo_id?: number,
|}

export type deleteProfilePhotoOptional = {|
  _: 'deleteProfilePhoto',
  profile_photo_id?: number,
|}

export type deleteProfilePhotoReturnType = ok

export type deleteSavedCredentials = {|
  _: 'deleteSavedCredentials',
|}

export type deleteSavedCredentialsOptional = {|
  _: 'deleteSavedCredentials',
|}

export type deleteSavedCredentialsReturnType = ok

export type deleteSavedOrderInfo = {|
  _: 'deleteSavedOrderInfo',
|}

export type deleteSavedOrderInfoOptional = {|
  _: 'deleteSavedOrderInfo',
|}

export type deleteSavedOrderInfoReturnType = ok

export type deleteSupergroup = {|
  _: 'deleteSupergroup',
  supergroup_id?: number,
|}

export type deleteSupergroupOptional = {|
  _: 'deleteSupergroup',
  supergroup_id?: number,
|}

export type deleteSupergroupReturnType = ok

export type destroy = {|
  _: 'destroy',
|}

export type destroyOptional = {|
  _: 'destroy',
|}

export type destroyReturnType = ok

export type discardCall = {|
  _: 'discardCall',
  call_id?: number,
  is_disconnected?: boolean,
  duration?: number,
  connection_id?: number,
|}

export type discardCallOptional = {|
  _: 'discardCall',
  call_id?: number,
  is_disconnected?: boolean,
  duration?: number,
  connection_id?: number,
|}

export type discardCallReturnType = ok

export type disconnectAllWebsites = {|
  _: 'disconnectAllWebsites',
|}

export type disconnectAllWebsitesOptional = {|
  _: 'disconnectAllWebsites',
|}

export type disconnectAllWebsitesReturnType = ok

export type disconnectWebsite = {|
  _: 'disconnectWebsite',
  website_id?: number,
|}

export type disconnectWebsiteOptional = {|
  _: 'disconnectWebsite',
  website_id?: number,
|}

export type disconnectWebsiteReturnType = ok

export type downloadFile = {|
  _: 'downloadFile',
  file_id?: number,
  priority?: number,
|}

export type downloadFileOptional = {|
  _: 'downloadFile',
  file_id?: number,
  priority?: number,
|}

export type downloadFileReturnType = file

export type editInlineMessageCaption = {|
  _: 'editInlineMessageCaption',
  inline_message_id?: string,
  reply_markup?: ReplyMarkupOptional,
  caption?: formattedTextOptional,
|}

export type editInlineMessageCaptionOptional = {|
  _: 'editInlineMessageCaption',
  inline_message_id?: string,
  reply_markup?: ReplyMarkupOptional,
  caption?: formattedTextOptional,
|}

export type editInlineMessageCaptionReturnType = ok

export type editInlineMessageLiveLocation = {|
  _: 'editInlineMessageLiveLocation',
  inline_message_id?: string,
  reply_markup?: ReplyMarkupOptional,
  location?: locationOptional,
|}

export type editInlineMessageLiveLocationOptional = {|
  _: 'editInlineMessageLiveLocation',
  inline_message_id?: string,
  reply_markup?: ReplyMarkupOptional,
  location?: locationOptional,
|}

export type editInlineMessageLiveLocationReturnType = ok

export type editInlineMessageReplyMarkup = {|
  _: 'editInlineMessageReplyMarkup',
  inline_message_id?: string,
  reply_markup?: ReplyMarkupOptional,
|}

export type editInlineMessageReplyMarkupOptional = {|
  _: 'editInlineMessageReplyMarkup',
  inline_message_id?: string,
  reply_markup?: ReplyMarkupOptional,
|}

export type editInlineMessageReplyMarkupReturnType = ok

export type editInlineMessageText = {|
  _: 'editInlineMessageText',
  inline_message_id?: string,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type editInlineMessageTextOptional = {|
  _: 'editInlineMessageText',
  inline_message_id?: string,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type editInlineMessageTextReturnType = ok

export type editMessageCaption = {|
  _: 'editMessageCaption',
  chat_id?: number,
  message_id?: number,
  reply_markup?: ReplyMarkupOptional,
  caption?: formattedTextOptional,
|}

export type editMessageCaptionOptional = {|
  _: 'editMessageCaption',
  chat_id?: number,
  message_id?: number,
  reply_markup?: ReplyMarkupOptional,
  caption?: formattedTextOptional,
|}

export type editMessageCaptionReturnType = message

export type editMessageLiveLocation = {|
  _: 'editMessageLiveLocation',
  chat_id?: number,
  message_id?: number,
  reply_markup?: ReplyMarkupOptional,
  location?: locationOptional,
|}

export type editMessageLiveLocationOptional = {|
  _: 'editMessageLiveLocation',
  chat_id?: number,
  message_id?: number,
  reply_markup?: ReplyMarkupOptional,
  location?: locationOptional,
|}

export type editMessageLiveLocationReturnType = message

export type editMessageReplyMarkup = {|
  _: 'editMessageReplyMarkup',
  chat_id?: number,
  message_id?: number,
  reply_markup?: ReplyMarkupOptional,
|}

export type editMessageReplyMarkupOptional = {|
  _: 'editMessageReplyMarkup',
  chat_id?: number,
  message_id?: number,
  reply_markup?: ReplyMarkupOptional,
|}

export type editMessageReplyMarkupReturnType = message

export type editMessageText = {|
  _: 'editMessageText',
  chat_id?: number,
  message_id?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type editMessageTextOptional = {|
  _: 'editMessageText',
  chat_id?: number,
  message_id?: number,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type editMessageTextReturnType = message

export type finishFileGeneration = {|
  _: 'finishFileGeneration',
  generation_id?: number,
  error?: errorOptional,
|}

export type finishFileGenerationOptional = {|
  _: 'finishFileGeneration',
  generation_id?: number,
  error?: errorOptional,
|}

export type finishFileGenerationReturnType = ok

export type forwardMessages = {|
  _: 'forwardMessages',
  chat_id?: number,
  from_chat_id?: number,
  message_ids?: number,
  disable_notification?: boolean,
  from_background?: boolean,
  as_album?: boolean,
|}

export type forwardMessagesOptional = {|
  _: 'forwardMessages',
  chat_id?: number,
  from_chat_id?: number,
  message_ids?: number,
  disable_notification?: boolean,
  from_background?: boolean,
  as_album?: boolean,
|}

export type forwardMessagesReturnType = messages

export type generateChatInviteLink = {|
  _: 'generateChatInviteLink',
  chat_id?: number,
|}

export type generateChatInviteLinkOptional = {|
  _: 'generateChatInviteLink',
  chat_id?: number,
|}

export type generateChatInviteLinkReturnType = chatInviteLink

export type getAccountTtl = {|
  _: 'getAccountTtl',
|}

export type getAccountTtlOptional = {|
  _: 'getAccountTtl',
|}

export type getAccountTtlReturnType = accountTtl

export type getActiveLiveLocationMessages = {|
  _: 'getActiveLiveLocationMessages',
|}

export type getActiveLiveLocationMessagesOptional = {|
  _: 'getActiveLiveLocationMessages',
|}

export type getActiveLiveLocationMessagesReturnType = messages

export type getActiveSessions = {|
  _: 'getActiveSessions',
|}

export type getActiveSessionsOptional = {|
  _: 'getActiveSessions',
|}

export type getActiveSessionsReturnType = sessions

export type getArchivedStickerSets = {|
  _: 'getArchivedStickerSets',
  is_masks?: boolean,
  offset_sticker_set_id?: number,
  limit?: number,
|}

export type getArchivedStickerSetsOptional = {|
  _: 'getArchivedStickerSets',
  is_masks?: boolean,
  offset_sticker_set_id?: number,
  limit?: number,
|}

export type getArchivedStickerSetsReturnType = stickerSets

export type getAttachedStickerSets = {|
  _: 'getAttachedStickerSets',
  file_id?: number,
|}

export type getAttachedStickerSetsOptional = {|
  _: 'getAttachedStickerSets',
  file_id?: number,
|}

export type getAttachedStickerSetsReturnType = stickerSets

export type getAuthorizationState = {|
  _: 'getAuthorizationState',
|}

export type getAuthorizationStateOptional = {|
  _: 'getAuthorizationState',
|}

export type getAuthorizationStateReturnType = AuthorizationState

export type getBasicGroup = {|
  _: 'getBasicGroup',
  basic_group_id?: number,
|}

export type getBasicGroupOptional = {|
  _: 'getBasicGroup',
  basic_group_id?: number,
|}

export type getBasicGroupReturnType = basicGroup

export type getBasicGroupFullInfo = {|
  _: 'getBasicGroupFullInfo',
  basic_group_id?: number,
|}

export type getBasicGroupFullInfoOptional = {|
  _: 'getBasicGroupFullInfo',
  basic_group_id?: number,
|}

export type getBasicGroupFullInfoReturnType = basicGroupFullInfo

export type getBlockedUsers = {|
  _: 'getBlockedUsers',
  offset?: number,
  limit?: number,
|}

export type getBlockedUsersOptional = {|
  _: 'getBlockedUsers',
  offset?: number,
  limit?: number,
|}

export type getBlockedUsersReturnType = users

export type getCallbackQueryAnswer = {|
  _: 'getCallbackQueryAnswer',
  chat_id?: number,
  message_id?: number,
  payload?: CallbackQueryPayloadOptional,
|}

export type getCallbackQueryAnswerOptional = {|
  _: 'getCallbackQueryAnswer',
  chat_id?: number,
  message_id?: number,
  payload?: CallbackQueryPayloadOptional,
|}

export type getCallbackQueryAnswerReturnType = callbackQueryAnswer

export type getChat = {|
  _: 'getChat',
  chat_id?: number,
|}

export type getChatOptional = {|
  _: 'getChat',
  chat_id?: number,
|}

export type getChatReturnType = chat

export type getChatAdministrators = {|
  _: 'getChatAdministrators',
  chat_id?: number,
|}

export type getChatAdministratorsOptional = {|
  _: 'getChatAdministrators',
  chat_id?: number,
|}

export type getChatAdministratorsReturnType = users

export type getChatEventLog = {|
  _: 'getChatEventLog',
  chat_id?: number,
  query?: string,
  from_event_id?: number,
  limit?: number,
  filters?: chatEventLogFiltersOptional,
  user_ids?: number,
|}

export type getChatEventLogOptional = {|
  _: 'getChatEventLog',
  chat_id?: number,
  query?: string,
  from_event_id?: number,
  limit?: number,
  filters?: chatEventLogFiltersOptional,
  user_ids?: number,
|}

export type getChatEventLogReturnType = chatEvents

export type getChatHistory = {|
  _: 'getChatHistory',
  chat_id?: number,
  from_message_id?: number,
  offset?: number,
  limit?: number,
  only_local?: boolean,
|}

export type getChatHistoryOptional = {|
  _: 'getChatHistory',
  chat_id?: number,
  from_message_id?: number,
  offset?: number,
  limit?: number,
  only_local?: boolean,
|}

export type getChatHistoryReturnType = messages

export type getChatMember = {|
  _: 'getChatMember',
  chat_id?: number,
  user_id?: number,
|}

export type getChatMemberOptional = {|
  _: 'getChatMember',
  chat_id?: number,
  user_id?: number,
|}

export type getChatMemberReturnType = chatMember

export type getChatMessageByDate = {|
  _: 'getChatMessageByDate',
  chat_id?: number,
  date?: number,
|}

export type getChatMessageByDateOptional = {|
  _: 'getChatMessageByDate',
  chat_id?: number,
  date?: number,
|}

export type getChatMessageByDateReturnType = message

export type getChatPinnedMessage = {|
  _: 'getChatPinnedMessage',
  chat_id?: number,
|}

export type getChatPinnedMessageOptional = {|
  _: 'getChatPinnedMessage',
  chat_id?: number,
|}

export type getChatPinnedMessageReturnType = message

export type getChatReportSpamState = {|
  _: 'getChatReportSpamState',
  chat_id?: number,
|}

export type getChatReportSpamStateOptional = {|
  _: 'getChatReportSpamState',
  chat_id?: number,
|}

export type getChatReportSpamStateReturnType = chatReportSpamState

export type getChats = {|
  _: 'getChats',
  offset_order?: number,
  offset_chat_id?: number,
  limit?: number,
|}

export type getChatsOptional = {|
  _: 'getChats',
  offset_order?: number,
  offset_chat_id?: number,
  limit?: number,
|}

export type getChatsReturnType = chats

export type getConnectedWebsites = {|
  _: 'getConnectedWebsites',
|}

export type getConnectedWebsitesOptional = {|
  _: 'getConnectedWebsites',
|}

export type getConnectedWebsitesReturnType = connectedWebsites

export type getCountryCode = {|
  _: 'getCountryCode',
|}

export type getCountryCodeOptional = {|
  _: 'getCountryCode',
|}

export type getCountryCodeReturnType = text

export type getCreatedPublicChats = {|
  _: 'getCreatedPublicChats',
|}

export type getCreatedPublicChatsOptional = {|
  _: 'getCreatedPublicChats',
|}

export type getCreatedPublicChatsReturnType = chats

export type getFavoriteStickers = {|
  _: 'getFavoriteStickers',
|}

export type getFavoriteStickersOptional = {|
  _: 'getFavoriteStickers',
|}

export type getFavoriteStickersReturnType = stickers

export type getFile = {|
  _: 'getFile',
  file_id?: number,
|}

export type getFileOptional = {|
  _: 'getFile',
  file_id?: number,
|}

export type getFileReturnType = file

export type getFileExtension = {|
  _: 'getFileExtension',
  mime_type?: string,
|}

export type getFileExtensionOptional = {|
  _: 'getFileExtension',
  mime_type?: string,
|}

export type getFileExtensionReturnType = text

export type getFileMimeType = {|
  _: 'getFileMimeType',
  file_name?: string,
|}

export type getFileMimeTypeOptional = {|
  _: 'getFileMimeType',
  file_name?: string,
|}

export type getFileMimeTypeReturnType = text

export type getGameHighScores = {|
  _: 'getGameHighScores',
  chat_id?: number,
  message_id?: number,
  user_id?: number,
|}

export type getGameHighScoresOptional = {|
  _: 'getGameHighScores',
  chat_id?: number,
  message_id?: number,
  user_id?: number,
|}

export type getGameHighScoresReturnType = gameHighScores

export type getGroupsInCommon = {|
  _: 'getGroupsInCommon',
  user_id?: number,
  offset_chat_id?: number,
  limit?: number,
|}

export type getGroupsInCommonOptional = {|
  _: 'getGroupsInCommon',
  user_id?: number,
  offset_chat_id?: number,
  limit?: number,
|}

export type getGroupsInCommonReturnType = chats

export type getImportedContactCount = {|
  _: 'getImportedContactCount',
|}

export type getImportedContactCountOptional = {|
  _: 'getImportedContactCount',
|}

export type getImportedContactCountReturnType = count

export type getInlineGameHighScores = {|
  _: 'getInlineGameHighScores',
  inline_message_id?: string,
  user_id?: number,
|}

export type getInlineGameHighScoresOptional = {|
  _: 'getInlineGameHighScores',
  inline_message_id?: string,
  user_id?: number,
|}

export type getInlineGameHighScoresReturnType = gameHighScores

export type getInlineQueryResults = {|
  _: 'getInlineQueryResults',
  bot_user_id?: number,
  chat_id?: number,
  user_location?: locationOptional,
  query?: string,
  offset?: string,
|}

export type getInlineQueryResultsOptional = {|
  _: 'getInlineQueryResults',
  bot_user_id?: number,
  chat_id?: number,
  user_location?: locationOptional,
  query?: string,
  offset?: string,
|}

export type getInlineQueryResultsReturnType = inlineQueryResults

export type getInstalledStickerSets = {|
  _: 'getInstalledStickerSets',
  is_masks?: boolean,
|}

export type getInstalledStickerSetsOptional = {|
  _: 'getInstalledStickerSets',
  is_masks?: boolean,
|}

export type getInstalledStickerSetsReturnType = stickerSets

export type getInviteText = {|
  _: 'getInviteText',
|}

export type getInviteTextOptional = {|
  _: 'getInviteText',
|}

export type getInviteTextReturnType = text

export type getMe = {|
  _: 'getMe',
|}

export type getMeOptional = {|
  _: 'getMe',
|}

export type getMeReturnType = user

export type getMessage = {|
  _: 'getMessage',
  chat_id?: number,
  message_id?: number,
|}

export type getMessageOptional = {|
  _: 'getMessage',
  chat_id?: number,
  message_id?: number,
|}

export type getMessageReturnType = message

export type getMessages = {|
  _: 'getMessages',
  chat_id?: number,
  message_ids?: number,
|}

export type getMessagesOptional = {|
  _: 'getMessages',
  chat_id?: number,
  message_ids?: number,
|}

export type getMessagesReturnType = messages

export type getNetworkStatistics = {|
  _: 'getNetworkStatistics',
  only_current?: boolean,
|}

export type getNetworkStatisticsOptional = {|
  _: 'getNetworkStatistics',
  only_current?: boolean,
|}

export type getNetworkStatisticsReturnType = networkStatistics

export type getNotificationSettings = {|
  _: 'getNotificationSettings',
  scope?: NotificationSettingsScopeOptional,
|}

export type getNotificationSettingsOptional = {|
  _: 'getNotificationSettings',
  scope?: NotificationSettingsScopeOptional,
|}

export type getNotificationSettingsReturnType = notificationSettings

export type getOption = {|
  _: 'getOption',
  name?: string,
|}

export type getOptionOptional = {|
  _: 'getOption',
  name?: string,
|}

export type getOptionReturnType = OptionValue

export type getPasswordState = {|
  _: 'getPasswordState',
|}

export type getPasswordStateOptional = {|
  _: 'getPasswordState',
|}

export type getPasswordStateReturnType = passwordState

export type getPaymentForm = {|
  _: 'getPaymentForm',
  chat_id?: number,
  message_id?: number,
|}

export type getPaymentFormOptional = {|
  _: 'getPaymentForm',
  chat_id?: number,
  message_id?: number,
|}

export type getPaymentFormReturnType = paymentForm

export type getPaymentReceipt = {|
  _: 'getPaymentReceipt',
  chat_id?: number,
  message_id?: number,
|}

export type getPaymentReceiptOptional = {|
  _: 'getPaymentReceipt',
  chat_id?: number,
  message_id?: number,
|}

export type getPaymentReceiptReturnType = paymentReceipt

export type getProxy = {|
  _: 'getProxy',
|}

export type getProxyOptional = {|
  _: 'getProxy',
|}

export type getProxyReturnType = Proxy

export type getPublicMessageLink = {|
  _: 'getPublicMessageLink',
  chat_id?: number,
  message_id?: number,
  for_album?: boolean,
|}

export type getPublicMessageLinkOptional = {|
  _: 'getPublicMessageLink',
  chat_id?: number,
  message_id?: number,
  for_album?: boolean,
|}

export type getPublicMessageLinkReturnType = publicMessageLink

export type getRecentInlineBots = {|
  _: 'getRecentInlineBots',
|}

export type getRecentInlineBotsOptional = {|
  _: 'getRecentInlineBots',
|}

export type getRecentInlineBotsReturnType = users

export type getRecentStickers = {|
  _: 'getRecentStickers',
  is_attached?: boolean,
|}

export type getRecentStickersOptional = {|
  _: 'getRecentStickers',
  is_attached?: boolean,
|}

export type getRecentStickersReturnType = stickers

export type getRecentlyVisitedTMeUrls = {|
  _: 'getRecentlyVisitedTMeUrls',
  referrer?: string,
|}

export type getRecentlyVisitedTMeUrlsOptional = {|
  _: 'getRecentlyVisitedTMeUrls',
  referrer?: string,
|}

export type getRecentlyVisitedTMeUrlsReturnType = tMeUrls

export type getRecoveryEmailAddress = {|
  _: 'getRecoveryEmailAddress',
  password?: string,
|}

export type getRecoveryEmailAddressOptional = {|
  _: 'getRecoveryEmailAddress',
  password?: string,
|}

export type getRecoveryEmailAddressReturnType = recoveryEmailAddress

export type getRemoteFile = {|
  _: 'getRemoteFile',
  remote_file_id?: string,
  file_type?: FileTypeOptional,
|}

export type getRemoteFileOptional = {|
  _: 'getRemoteFile',
  remote_file_id?: string,
  file_type?: FileTypeOptional,
|}

export type getRemoteFileReturnType = file

export type getRepliedMessage = {|
  _: 'getRepliedMessage',
  chat_id?: number,
  message_id?: number,
|}

export type getRepliedMessageOptional = {|
  _: 'getRepliedMessage',
  chat_id?: number,
  message_id?: number,
|}

export type getRepliedMessageReturnType = message

export type getSavedAnimations = {|
  _: 'getSavedAnimations',
|}

export type getSavedAnimationsOptional = {|
  _: 'getSavedAnimations',
|}

export type getSavedAnimationsReturnType = animations

export type getSavedOrderInfo = {|
  _: 'getSavedOrderInfo',
|}

export type getSavedOrderInfoOptional = {|
  _: 'getSavedOrderInfo',
|}

export type getSavedOrderInfoReturnType = orderInfo

export type getSecretChat = {|
  _: 'getSecretChat',
  secret_chat_id?: number,
|}

export type getSecretChatOptional = {|
  _: 'getSecretChat',
  secret_chat_id?: number,
|}

export type getSecretChatReturnType = secretChat

export type getStickerEmojis = {|
  _: 'getStickerEmojis',
  sticker?: InputFileOptional,
|}

export type getStickerEmojisOptional = {|
  _: 'getStickerEmojis',
  sticker?: InputFileOptional,
|}

export type getStickerEmojisReturnType = stickerEmojis

export type getStickerSet = {|
  _: 'getStickerSet',
  set_id?: number,
|}

export type getStickerSetOptional = {|
  _: 'getStickerSet',
  set_id?: number,
|}

export type getStickerSetReturnType = stickerSet

export type getStickers = {|
  _: 'getStickers',
  emoji?: string,
  limit?: number,
|}

export type getStickersOptional = {|
  _: 'getStickers',
  emoji?: string,
  limit?: number,
|}

export type getStickersReturnType = stickers

export type getStorageStatistics = {|
  _: 'getStorageStatistics',
  chat_limit?: number,
|}

export type getStorageStatisticsOptional = {|
  _: 'getStorageStatistics',
  chat_limit?: number,
|}

export type getStorageStatisticsReturnType = storageStatistics

export type getStorageStatisticsFast = {|
  _: 'getStorageStatisticsFast',
|}

export type getStorageStatisticsFastOptional = {|
  _: 'getStorageStatisticsFast',
|}

export type getStorageStatisticsFastReturnType = storageStatisticsFast

export type getSupergroup = {|
  _: 'getSupergroup',
  supergroup_id?: number,
|}

export type getSupergroupOptional = {|
  _: 'getSupergroup',
  supergroup_id?: number,
|}

export type getSupergroupReturnType = supergroup

export type getSupergroupFullInfo = {|
  _: 'getSupergroupFullInfo',
  supergroup_id?: number,
|}

export type getSupergroupFullInfoOptional = {|
  _: 'getSupergroupFullInfo',
  supergroup_id?: number,
|}

export type getSupergroupFullInfoReturnType = supergroupFullInfo

export type getSupergroupMembers = {|
  _: 'getSupergroupMembers',
  supergroup_id?: number,
  filter?: SupergroupMembersFilterOptional,
  offset?: number,
  limit?: number,
|}

export type getSupergroupMembersOptional = {|
  _: 'getSupergroupMembers',
  supergroup_id?: number,
  filter?: SupergroupMembersFilterOptional,
  offset?: number,
  limit?: number,
|}

export type getSupergroupMembersReturnType = chatMembers

export type getSupportUser = {|
  _: 'getSupportUser',
|}

export type getSupportUserOptional = {|
  _: 'getSupportUser',
|}

export type getSupportUserReturnType = user

export type getTemporaryPasswordState = {|
  _: 'getTemporaryPasswordState',
|}

export type getTemporaryPasswordStateOptional = {|
  _: 'getTemporaryPasswordState',
|}

export type getTemporaryPasswordStateReturnType = temporaryPasswordState

export type getTermsOfService = {|
  _: 'getTermsOfService',
|}

export type getTermsOfServiceOptional = {|
  _: 'getTermsOfService',
|}

export type getTermsOfServiceReturnType = text

export type getTextEntities = {|
  _: 'getTextEntities',
  text?: string,
|}

export type getTextEntitiesOptional = {|
  _: 'getTextEntities',
  text?: string,
|}

export type getTextEntitiesReturnType = textEntities

export type getTopChats = {|
  _: 'getTopChats',
  category?: TopChatCategoryOptional,
  limit?: number,
|}

export type getTopChatsOptional = {|
  _: 'getTopChats',
  category?: TopChatCategoryOptional,
  limit?: number,
|}

export type getTopChatsReturnType = chats

export type getTrendingStickerSets = {|
  _: 'getTrendingStickerSets',
|}

export type getTrendingStickerSetsOptional = {|
  _: 'getTrendingStickerSets',
|}

export type getTrendingStickerSetsReturnType = stickerSets

export type getUser = {|
  _: 'getUser',
  user_id?: number,
|}

export type getUserOptional = {|
  _: 'getUser',
  user_id?: number,
|}

export type getUserReturnType = user

export type getUserFullInfo = {|
  _: 'getUserFullInfo',
  user_id?: number,
|}

export type getUserFullInfoOptional = {|
  _: 'getUserFullInfo',
  user_id?: number,
|}

export type getUserFullInfoReturnType = userFullInfo

export type getUserPrivacySettingRules = {|
  _: 'getUserPrivacySettingRules',
  setting?: UserPrivacySettingOptional,
|}

export type getUserPrivacySettingRulesOptional = {|
  _: 'getUserPrivacySettingRules',
  setting?: UserPrivacySettingOptional,
|}

export type getUserPrivacySettingRulesReturnType = userPrivacySettingRules

export type getUserProfilePhotos = {|
  _: 'getUserProfilePhotos',
  user_id?: number,
  offset?: number,
  limit?: number,
|}

export type getUserProfilePhotosOptional = {|
  _: 'getUserProfilePhotos',
  user_id?: number,
  offset?: number,
  limit?: number,
|}

export type getUserProfilePhotosReturnType = userProfilePhotos

export type getWallpapers = {|
  _: 'getWallpapers',
|}

export type getWallpapersOptional = {|
  _: 'getWallpapers',
|}

export type getWallpapersReturnType = wallpapers

export type getWebPageInstantView = {|
  _: 'getWebPageInstantView',
  url?: string,
  force_full?: boolean,
|}

export type getWebPageInstantViewOptional = {|
  _: 'getWebPageInstantView',
  url?: string,
  force_full?: boolean,
|}

export type getWebPageInstantViewReturnType = webPageInstantView

export type getWebPagePreview = {|
  _: 'getWebPagePreview',
  text?: formattedTextOptional,
|}

export type getWebPagePreviewOptional = {|
  _: 'getWebPagePreview',
  text?: formattedTextOptional,
|}

export type getWebPagePreviewReturnType = webPage

export type importContacts = {|
  _: 'importContacts',
  contacts?: contactOptional[],
|}

export type importContactsOptional = {|
  _: 'importContacts',
  contacts?: contactOptional[],
|}

export type importContactsReturnType = importedContacts

export type joinChatByInviteLink = {|
  _: 'joinChatByInviteLink',
  invite_link?: string,
|}

export type joinChatByInviteLinkOptional = {|
  _: 'joinChatByInviteLink',
  invite_link?: string,
|}

export type joinChatByInviteLinkReturnType = chat

export type logOut = {|
  _: 'logOut',
|}

export type logOutOptional = {|
  _: 'logOut',
|}

export type logOutReturnType = ok

export type openChat = {|
  _: 'openChat',
  chat_id?: number,
|}

export type openChatOptional = {|
  _: 'openChat',
  chat_id?: number,
|}

export type openChatReturnType = ok

export type openMessageContent = {|
  _: 'openMessageContent',
  chat_id?: number,
  message_id?: number,
|}

export type openMessageContentOptional = {|
  _: 'openMessageContent',
  chat_id?: number,
  message_id?: number,
|}

export type openMessageContentReturnType = ok

export type optimizeStorage = {|
  _: 'optimizeStorage',
  size?: number,
  ttl?: number,
  count?: number,
  immunity_delay?: number,
  file_types?: FileTypeOptional[],
  chat_ids?: number,
  exclude_chat_ids?: number,
  chat_limit?: number,
|}

export type optimizeStorageOptional = {|
  _: 'optimizeStorage',
  size?: number,
  ttl?: number,
  count?: number,
  immunity_delay?: number,
  file_types?: FileTypeOptional[],
  chat_ids?: number,
  exclude_chat_ids?: number,
  chat_limit?: number,
|}

export type optimizeStorageReturnType = storageStatistics

export type parseTextEntities = {|
  _: 'parseTextEntities',
  text?: string,
  parse_mode?: TextParseModeOptional,
|}

export type parseTextEntitiesOptional = {|
  _: 'parseTextEntities',
  text?: string,
  parse_mode?: TextParseModeOptional,
|}

export type parseTextEntitiesReturnType = formattedText

export type pinSupergroupMessage = {|
  _: 'pinSupergroupMessage',
  supergroup_id?: number,
  message_id?: number,
  disable_notification?: boolean,
|}

export type pinSupergroupMessageOptional = {|
  _: 'pinSupergroupMessage',
  supergroup_id?: number,
  message_id?: number,
  disable_notification?: boolean,
|}

export type pinSupergroupMessageReturnType = ok

export type processDcUpdate = {|
  _: 'processDcUpdate',
  dc?: string,
  addr?: string,
|}

export type processDcUpdateOptional = {|
  _: 'processDcUpdate',
  dc?: string,
  addr?: string,
|}

export type processDcUpdateReturnType = ok

export type readAllChatMentions = {|
  _: 'readAllChatMentions',
  chat_id?: number,
|}

export type readAllChatMentionsOptional = {|
  _: 'readAllChatMentions',
  chat_id?: number,
|}

export type readAllChatMentionsReturnType = ok

export type recoverAuthenticationPassword = {|
  _: 'recoverAuthenticationPassword',
  recovery_code?: string,
|}

export type recoverAuthenticationPasswordOptional = {|
  _: 'recoverAuthenticationPassword',
  recovery_code?: string,
|}

export type recoverAuthenticationPasswordReturnType = ok

export type recoverPassword = {|
  _: 'recoverPassword',
  recovery_code?: string,
|}

export type recoverPasswordOptional = {|
  _: 'recoverPassword',
  recovery_code?: string,
|}

export type recoverPasswordReturnType = passwordState

export type registerDevice = {|
  _: 'registerDevice',
  device_token?: DeviceTokenOptional,
  other_user_ids?: number,
|}

export type registerDeviceOptional = {|
  _: 'registerDevice',
  device_token?: DeviceTokenOptional,
  other_user_ids?: number,
|}

export type registerDeviceReturnType = ok

export type removeContacts = {|
  _: 'removeContacts',
  user_ids?: number,
|}

export type removeContactsOptional = {|
  _: 'removeContacts',
  user_ids?: number,
|}

export type removeContactsReturnType = ok

export type removeFavoriteSticker = {|
  _: 'removeFavoriteSticker',
  sticker?: InputFileOptional,
|}

export type removeFavoriteStickerOptional = {|
  _: 'removeFavoriteSticker',
  sticker?: InputFileOptional,
|}

export type removeFavoriteStickerReturnType = ok

export type removeRecentHashtag = {|
  _: 'removeRecentHashtag',
  hashtag?: string,
|}

export type removeRecentHashtagOptional = {|
  _: 'removeRecentHashtag',
  hashtag?: string,
|}

export type removeRecentHashtagReturnType = ok

export type removeRecentSticker = {|
  _: 'removeRecentSticker',
  is_attached?: boolean,
  sticker?: InputFileOptional,
|}

export type removeRecentStickerOptional = {|
  _: 'removeRecentSticker',
  is_attached?: boolean,
  sticker?: InputFileOptional,
|}

export type removeRecentStickerReturnType = ok

export type removeRecentlyFoundChat = {|
  _: 'removeRecentlyFoundChat',
  chat_id?: number,
|}

export type removeRecentlyFoundChatOptional = {|
  _: 'removeRecentlyFoundChat',
  chat_id?: number,
|}

export type removeRecentlyFoundChatReturnType = ok

export type removeSavedAnimation = {|
  _: 'removeSavedAnimation',
  animation?: InputFileOptional,
|}

export type removeSavedAnimationOptional = {|
  _: 'removeSavedAnimation',
  animation?: InputFileOptional,
|}

export type removeSavedAnimationReturnType = ok

export type removeStickerFromSet = {|
  _: 'removeStickerFromSet',
  sticker?: InputFileOptional,
|}

export type removeStickerFromSetOptional = {|
  _: 'removeStickerFromSet',
  sticker?: InputFileOptional,
|}

export type removeStickerFromSetReturnType = ok

export type removeTopChat = {|
  _: 'removeTopChat',
  category?: TopChatCategoryOptional,
  chat_id?: number,
|}

export type removeTopChatOptional = {|
  _: 'removeTopChat',
  category?: TopChatCategoryOptional,
  chat_id?: number,
|}

export type removeTopChatReturnType = ok

export type reorderInstalledStickerSets = {|
  _: 'reorderInstalledStickerSets',
  is_masks?: boolean,
  sticker_set_ids?: number,
|}

export type reorderInstalledStickerSetsOptional = {|
  _: 'reorderInstalledStickerSets',
  is_masks?: boolean,
  sticker_set_ids?: number,
|}

export type reorderInstalledStickerSetsReturnType = ok

export type reportChat = {|
  _: 'reportChat',
  chat_id?: number,
  reason?: ChatReportReasonOptional,
  message_ids?: number,
|}

export type reportChatOptional = {|
  _: 'reportChat',
  chat_id?: number,
  reason?: ChatReportReasonOptional,
  message_ids?: number,
|}

export type reportChatReturnType = ok

export type reportSupergroupSpam = {|
  _: 'reportSupergroupSpam',
  supergroup_id?: number,
  user_id?: number,
  message_ids?: number,
|}

export type reportSupergroupSpamOptional = {|
  _: 'reportSupergroupSpam',
  supergroup_id?: number,
  user_id?: number,
  message_ids?: number,
|}

export type reportSupergroupSpamReturnType = ok

export type requestAuthenticationPasswordRecovery = {|
  _: 'requestAuthenticationPasswordRecovery',
|}

export type requestAuthenticationPasswordRecoveryOptional = {|
  _: 'requestAuthenticationPasswordRecovery',
|}

export type requestAuthenticationPasswordRecoveryReturnType = ok

export type requestPasswordRecovery = {|
  _: 'requestPasswordRecovery',
|}

export type requestPasswordRecoveryOptional = {|
  _: 'requestPasswordRecovery',
|}

export type requestPasswordRecoveryReturnType = passwordRecoveryInfo

export type resendAuthenticationCode = {|
  _: 'resendAuthenticationCode',
|}

export type resendAuthenticationCodeOptional = {|
  _: 'resendAuthenticationCode',
|}

export type resendAuthenticationCodeReturnType = ok

export type resendChangePhoneNumberCode = {|
  _: 'resendChangePhoneNumberCode',
|}

export type resendChangePhoneNumberCodeOptional = {|
  _: 'resendChangePhoneNumberCode',
|}

export type resendChangePhoneNumberCodeReturnType = authenticationCodeInfo

export type resetAllNotificationSettings = {|
  _: 'resetAllNotificationSettings',
|}

export type resetAllNotificationSettingsOptional = {|
  _: 'resetAllNotificationSettings',
|}

export type resetAllNotificationSettingsReturnType = ok

export type resetNetworkStatistics = {|
  _: 'resetNetworkStatistics',
|}

export type resetNetworkStatisticsOptional = {|
  _: 'resetNetworkStatistics',
|}

export type resetNetworkStatisticsReturnType = ok

export type searchCallMessages = {|
  _: 'searchCallMessages',
  from_message_id?: number,
  limit?: number,
  only_missed?: boolean,
|}

export type searchCallMessagesOptional = {|
  _: 'searchCallMessages',
  from_message_id?: number,
  limit?: number,
  only_missed?: boolean,
|}

export type searchCallMessagesReturnType = messages

export type searchChatMembers = {|
  _: 'searchChatMembers',
  chat_id?: number,
  query?: string,
  limit?: number,
|}

export type searchChatMembersOptional = {|
  _: 'searchChatMembers',
  chat_id?: number,
  query?: string,
  limit?: number,
|}

export type searchChatMembersReturnType = chatMembers

export type searchChatMessages = {|
  _: 'searchChatMessages',
  chat_id?: number,
  query?: string,
  sender_user_id?: number,
  from_message_id?: number,
  offset?: number,
  limit?: number,
  filter?: SearchMessagesFilterOptional,
|}

export type searchChatMessagesOptional = {|
  _: 'searchChatMessages',
  chat_id?: number,
  query?: string,
  sender_user_id?: number,
  from_message_id?: number,
  offset?: number,
  limit?: number,
  filter?: SearchMessagesFilterOptional,
|}

export type searchChatMessagesReturnType = messages

export type searchChatRecentLocationMessages = {|
  _: 'searchChatRecentLocationMessages',
  chat_id?: number,
  limit?: number,
|}

export type searchChatRecentLocationMessagesOptional = {|
  _: 'searchChatRecentLocationMessages',
  chat_id?: number,
  limit?: number,
|}

export type searchChatRecentLocationMessagesReturnType = messages

export type searchChats = {|
  _: 'searchChats',
  query?: string,
  limit?: number,
|}

export type searchChatsOptional = {|
  _: 'searchChats',
  query?: string,
  limit?: number,
|}

export type searchChatsReturnType = chats

export type searchChatsOnServer = {|
  _: 'searchChatsOnServer',
  query?: string,
  limit?: number,
|}

export type searchChatsOnServerOptional = {|
  _: 'searchChatsOnServer',
  query?: string,
  limit?: number,
|}

export type searchChatsOnServerReturnType = chats

export type searchContacts = {|
  _: 'searchContacts',
  query?: string,
  limit?: number,
|}

export type searchContactsOptional = {|
  _: 'searchContacts',
  query?: string,
  limit?: number,
|}

export type searchContactsReturnType = users

export type searchHashtags = {|
  _: 'searchHashtags',
  prefix?: string,
  limit?: number,
|}

export type searchHashtagsOptional = {|
  _: 'searchHashtags',
  prefix?: string,
  limit?: number,
|}

export type searchHashtagsReturnType = hashtags

export type searchInstalledStickerSets = {|
  _: 'searchInstalledStickerSets',
  is_masks?: boolean,
  query?: string,
  limit?: number,
|}

export type searchInstalledStickerSetsOptional = {|
  _: 'searchInstalledStickerSets',
  is_masks?: boolean,
  query?: string,
  limit?: number,
|}

export type searchInstalledStickerSetsReturnType = stickerSets

export type searchMessages = {|
  _: 'searchMessages',
  query?: string,
  offset_date?: number,
  offset_chat_id?: number,
  offset_message_id?: number,
  limit?: number,
|}

export type searchMessagesOptional = {|
  _: 'searchMessages',
  query?: string,
  offset_date?: number,
  offset_chat_id?: number,
  offset_message_id?: number,
  limit?: number,
|}

export type searchMessagesReturnType = messages

export type searchPublicChat = {|
  _: 'searchPublicChat',
  username?: string,
|}

export type searchPublicChatOptional = {|
  _: 'searchPublicChat',
  username?: string,
|}

export type searchPublicChatReturnType = chat

export type searchPublicChats = {|
  _: 'searchPublicChats',
  query?: string,
|}

export type searchPublicChatsOptional = {|
  _: 'searchPublicChats',
  query?: string,
|}

export type searchPublicChatsReturnType = chats

export type searchSecretMessages = {|
  _: 'searchSecretMessages',
  chat_id?: number,
  query?: string,
  from_search_id?: number,
  limit?: number,
  filter?: SearchMessagesFilterOptional,
|}

export type searchSecretMessagesOptional = {|
  _: 'searchSecretMessages',
  chat_id?: number,
  query?: string,
  from_search_id?: number,
  limit?: number,
  filter?: SearchMessagesFilterOptional,
|}

export type searchSecretMessagesReturnType = foundMessages

export type searchStickerSet = {|
  _: 'searchStickerSet',
  name?: string,
|}

export type searchStickerSetOptional = {|
  _: 'searchStickerSet',
  name?: string,
|}

export type searchStickerSetReturnType = stickerSet

export type searchStickerSets = {|
  _: 'searchStickerSets',
  query?: string,
|}

export type searchStickerSetsOptional = {|
  _: 'searchStickerSets',
  query?: string,
|}

export type searchStickerSetsReturnType = stickerSets

export type searchStickers = {|
  _: 'searchStickers',
  emoji?: string,
  limit?: number,
|}

export type searchStickersOptional = {|
  _: 'searchStickers',
  emoji?: string,
  limit?: number,
|}

export type searchStickersReturnType = stickers

export type sendBotStartMessage = {|
  _: 'sendBotStartMessage',
  bot_user_id?: number,
  chat_id?: number,
  parameter?: string,
|}

export type sendBotStartMessageOptional = {|
  _: 'sendBotStartMessage',
  bot_user_id?: number,
  chat_id?: number,
  parameter?: string,
|}

export type sendBotStartMessageReturnType = message

export type sendCallDebugInformation = {|
  _: 'sendCallDebugInformation',
  call_id?: number,
  debug_information?: string,
|}

export type sendCallDebugInformationOptional = {|
  _: 'sendCallDebugInformation',
  call_id?: number,
  debug_information?: string,
|}

export type sendCallDebugInformationReturnType = ok

export type sendCallRating = {|
  _: 'sendCallRating',
  call_id?: number,
  rating?: number,
  comment?: string,
|}

export type sendCallRatingOptional = {|
  _: 'sendCallRating',
  call_id?: number,
  rating?: number,
  comment?: string,
|}

export type sendCallRatingReturnType = ok

export type sendChatAction = {|
  _: 'sendChatAction',
  chat_id?: number,
  action?: ChatActionOptional,
|}

export type sendChatActionOptional = {|
  _: 'sendChatAction',
  chat_id?: number,
  action?: ChatActionOptional,
|}

export type sendChatActionReturnType = ok

export type sendChatScreenshotTakenNotification = {|
  _: 'sendChatScreenshotTakenNotification',
  chat_id?: number,
|}

export type sendChatScreenshotTakenNotificationOptional = {|
  _: 'sendChatScreenshotTakenNotification',
  chat_id?: number,
|}

export type sendChatScreenshotTakenNotificationReturnType = ok

export type sendChatSetTtlMessage = {|
  _: 'sendChatSetTtlMessage',
  chat_id?: number,
  ttl?: number,
|}

export type sendChatSetTtlMessageOptional = {|
  _: 'sendChatSetTtlMessage',
  chat_id?: number,
  ttl?: number,
|}

export type sendChatSetTtlMessageReturnType = message

export type sendCustomRequest = {|
  _: 'sendCustomRequest',
  method?: string,
  parameters?: string,
|}

export type sendCustomRequestOptional = {|
  _: 'sendCustomRequest',
  method?: string,
  parameters?: string,
|}

export type sendCustomRequestReturnType = customRequestResult

export type sendInlineQueryResultMessage = {|
  _: 'sendInlineQueryResultMessage',
  chat_id?: number,
  reply_to_message_id?: number,
  disable_notification?: boolean,
  from_background?: boolean,
  query_id?: number,
  result_id?: string,
|}

export type sendInlineQueryResultMessageOptional = {|
  _: 'sendInlineQueryResultMessage',
  chat_id?: number,
  reply_to_message_id?: number,
  disable_notification?: boolean,
  from_background?: boolean,
  query_id?: number,
  result_id?: string,
|}

export type sendInlineQueryResultMessageReturnType = message

export type sendMessage = {|
  _: 'sendMessage',
  chat_id?: number,
  reply_to_message_id?: number,
  disable_notification?: boolean,
  from_background?: boolean,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type sendMessageOptional = {|
  _: 'sendMessage',
  chat_id?: number,
  reply_to_message_id?: number,
  disable_notification?: boolean,
  from_background?: boolean,
  reply_markup?: ReplyMarkupOptional,
  input_message_content?: InputMessageContentOptional,
|}

export type sendMessageReturnType = message

export type sendMessageAlbum = {|
  _: 'sendMessageAlbum',
  chat_id?: number,
  reply_to_message_id?: number,
  disable_notification?: boolean,
  from_background?: boolean,
  input_message_contents?: InputMessageContentOptional[],
|}

export type sendMessageAlbumOptional = {|
  _: 'sendMessageAlbum',
  chat_id?: number,
  reply_to_message_id?: number,
  disable_notification?: boolean,
  from_background?: boolean,
  input_message_contents?: InputMessageContentOptional[],
|}

export type sendMessageAlbumReturnType = messages

export type sendPaymentForm = {|
  _: 'sendPaymentForm',
  chat_id?: number,
  message_id?: number,
  order_info_id?: string,
  shipping_option_id?: string,
  credentials?: InputCredentialsOptional,
|}

export type sendPaymentFormOptional = {|
  _: 'sendPaymentForm',
  chat_id?: number,
  message_id?: number,
  order_info_id?: string,
  shipping_option_id?: string,
  credentials?: InputCredentialsOptional,
|}

export type sendPaymentFormReturnType = paymentResult

export type setAccountTtl = {|
  _: 'setAccountTtl',
  ttl?: accountTtlOptional,
|}

export type setAccountTtlOptional = {|
  _: 'setAccountTtl',
  ttl?: accountTtlOptional,
|}

export type setAccountTtlReturnType = ok

export type setAlarm = {|
  _: 'setAlarm',
  seconds?: number,
|}

export type setAlarmOptional = {|
  _: 'setAlarm',
  seconds?: number,
|}

export type setAlarmReturnType = ok

export type setAuthenticationPhoneNumber = {|
  _: 'setAuthenticationPhoneNumber',
  phone_number?: string,
  allow_flash_call?: boolean,
  is_current_phone_number?: boolean,
|}

export type setAuthenticationPhoneNumberOptional = {|
  _: 'setAuthenticationPhoneNumber',
  phone_number?: string,
  allow_flash_call?: boolean,
  is_current_phone_number?: boolean,
|}

export type setAuthenticationPhoneNumberReturnType = ok

export type setBio = {|
  _: 'setBio',
  bio?: string,
|}

export type setBioOptional = {|
  _: 'setBio',
  bio?: string,
|}

export type setBioReturnType = ok

export type setBotUpdatesStatus = {|
  _: 'setBotUpdatesStatus',
  pending_update_count?: number,
  error_message?: string,
|}

export type setBotUpdatesStatusOptional = {|
  _: 'setBotUpdatesStatus',
  pending_update_count?: number,
  error_message?: string,
|}

export type setBotUpdatesStatusReturnType = ok

export type setChatClientData = {|
  _: 'setChatClientData',
  chat_id?: number,
  client_data?: string,
|}

export type setChatClientDataOptional = {|
  _: 'setChatClientData',
  chat_id?: number,
  client_data?: string,
|}

export type setChatClientDataReturnType = ok

export type setChatDraftMessage = {|
  _: 'setChatDraftMessage',
  chat_id?: number,
  draft_message?: draftMessageOptional,
|}

export type setChatDraftMessageOptional = {|
  _: 'setChatDraftMessage',
  chat_id?: number,
  draft_message?: draftMessageOptional,
|}

export type setChatDraftMessageReturnType = ok

export type setChatMemberStatus = {|
  _: 'setChatMemberStatus',
  chat_id?: number,
  user_id?: number,
  status?: ChatMemberStatusOptional,
|}

export type setChatMemberStatusOptional = {|
  _: 'setChatMemberStatus',
  chat_id?: number,
  user_id?: number,
  status?: ChatMemberStatusOptional,
|}

export type setChatMemberStatusReturnType = ok

export type setChatPhoto = {|
  _: 'setChatPhoto',
  chat_id?: number,
  photo?: InputFileOptional,
|}

export type setChatPhotoOptional = {|
  _: 'setChatPhoto',
  chat_id?: number,
  photo?: InputFileOptional,
|}

export type setChatPhotoReturnType = ok

export type setChatTitle = {|
  _: 'setChatTitle',
  chat_id?: number,
  title?: string,
|}

export type setChatTitleOptional = {|
  _: 'setChatTitle',
  chat_id?: number,
  title?: string,
|}

export type setChatTitleReturnType = ok

export type setDatabaseEncryptionKey = {|
  _: 'setDatabaseEncryptionKey',
  new_encryption_key?: string,
|}

export type setDatabaseEncryptionKeyOptional = {|
  _: 'setDatabaseEncryptionKey',
  new_encryption_key?: string,
|}

export type setDatabaseEncryptionKeyReturnType = ok

export type setFileGenerationProgress = {|
  _: 'setFileGenerationProgress',
  generation_id?: number,
  expected_size?: number,
  local_prefix_size?: number,
|}

export type setFileGenerationProgressOptional = {|
  _: 'setFileGenerationProgress',
  generation_id?: number,
  expected_size?: number,
  local_prefix_size?: number,
|}

export type setFileGenerationProgressReturnType = ok

export type setGameScore = {|
  _: 'setGameScore',
  chat_id?: number,
  message_id?: number,
  edit_message?: boolean,
  user_id?: number,
  score?: number,
  force?: boolean,
|}

export type setGameScoreOptional = {|
  _: 'setGameScore',
  chat_id?: number,
  message_id?: number,
  edit_message?: boolean,
  user_id?: number,
  score?: number,
  force?: boolean,
|}

export type setGameScoreReturnType = message

export type setInlineGameScore = {|
  _: 'setInlineGameScore',
  inline_message_id?: string,
  edit_message?: boolean,
  user_id?: number,
  score?: number,
  force?: boolean,
|}

export type setInlineGameScoreOptional = {|
  _: 'setInlineGameScore',
  inline_message_id?: string,
  edit_message?: boolean,
  user_id?: number,
  score?: number,
  force?: boolean,
|}

export type setInlineGameScoreReturnType = ok

export type setName = {|
  _: 'setName',
  first_name?: string,
  last_name?: string,
|}

export type setNameOptional = {|
  _: 'setName',
  first_name?: string,
  last_name?: string,
|}

export type setNameReturnType = ok

export type setNetworkType = {|
  _: 'setNetworkType',
  type?: NetworkTypeOptional,
|}

export type setNetworkTypeOptional = {|
  _: 'setNetworkType',
  type?: NetworkTypeOptional,
|}

export type setNetworkTypeReturnType = ok

export type setNotificationSettings = {|
  _: 'setNotificationSettings',
  scope?: NotificationSettingsScopeOptional,
  notification_settings?: notificationSettingsOptional,
|}

export type setNotificationSettingsOptional = {|
  _: 'setNotificationSettings',
  scope?: NotificationSettingsScopeOptional,
  notification_settings?: notificationSettingsOptional,
|}

export type setNotificationSettingsReturnType = ok

export type setOption = {|
  _: 'setOption',
  name?: string,
  value?: OptionValueOptional,
|}

export type setOptionOptional = {|
  _: 'setOption',
  name?: string,
  value?: OptionValueOptional,
|}

export type setOptionReturnType = ok

export type setPassword = {|
  _: 'setPassword',
  old_password?: string,
  new_password?: string,
  new_hint?: string,
  set_recovery_email_address?: boolean,
  new_recovery_email_address?: string,
|}

export type setPasswordOptional = {|
  _: 'setPassword',
  old_password?: string,
  new_password?: string,
  new_hint?: string,
  set_recovery_email_address?: boolean,
  new_recovery_email_address?: string,
|}

export type setPasswordReturnType = passwordState

export type setPinnedChats = {|
  _: 'setPinnedChats',
  chat_ids?: number,
|}

export type setPinnedChatsOptional = {|
  _: 'setPinnedChats',
  chat_ids?: number,
|}

export type setPinnedChatsReturnType = ok

export type setProfilePhoto = {|
  _: 'setProfilePhoto',
  photo?: InputFileOptional,
|}

export type setProfilePhotoOptional = {|
  _: 'setProfilePhoto',
  photo?: InputFileOptional,
|}

export type setProfilePhotoReturnType = ok

export type setProxy = {|
  _: 'setProxy',
  proxy?: ProxyOptional,
|}

export type setProxyOptional = {|
  _: 'setProxy',
  proxy?: ProxyOptional,
|}

export type setProxyReturnType = ok

export type setRecoveryEmailAddress = {|
  _: 'setRecoveryEmailAddress',
  password?: string,
  new_recovery_email_address?: string,
|}

export type setRecoveryEmailAddressOptional = {|
  _: 'setRecoveryEmailAddress',
  password?: string,
  new_recovery_email_address?: string,
|}

export type setRecoveryEmailAddressReturnType = passwordState

export type setStickerPositionInSet = {|
  _: 'setStickerPositionInSet',
  sticker?: InputFileOptional,
  position?: number,
|}

export type setStickerPositionInSetOptional = {|
  _: 'setStickerPositionInSet',
  sticker?: InputFileOptional,
  position?: number,
|}

export type setStickerPositionInSetReturnType = ok

export type setSupergroupDescription = {|
  _: 'setSupergroupDescription',
  supergroup_id?: number,
  description?: string,
|}

export type setSupergroupDescriptionOptional = {|
  _: 'setSupergroupDescription',
  supergroup_id?: number,
  description?: string,
|}

export type setSupergroupDescriptionReturnType = ok

export type setSupergroupStickerSet = {|
  _: 'setSupergroupStickerSet',
  supergroup_id?: number,
  sticker_set_id?: number,
|}

export type setSupergroupStickerSetOptional = {|
  _: 'setSupergroupStickerSet',
  supergroup_id?: number,
  sticker_set_id?: number,
|}

export type setSupergroupStickerSetReturnType = ok

export type setSupergroupUsername = {|
  _: 'setSupergroupUsername',
  supergroup_id?: number,
  username?: string,
|}

export type setSupergroupUsernameOptional = {|
  _: 'setSupergroupUsername',
  supergroup_id?: number,
  username?: string,
|}

export type setSupergroupUsernameReturnType = ok

export type setTdlibParameters = {|
  _: 'setTdlibParameters',
  parameters?: tdlibParametersOptional,
|}

export type setTdlibParametersOptional = {|
  _: 'setTdlibParameters',
  parameters?: tdlibParametersOptional,
|}

export type setTdlibParametersReturnType = ok

export type setUserPrivacySettingRules = {|
  _: 'setUserPrivacySettingRules',
  setting?: UserPrivacySettingOptional,
  rules?: userPrivacySettingRulesOptional,
|}

export type setUserPrivacySettingRulesOptional = {|
  _: 'setUserPrivacySettingRules',
  setting?: UserPrivacySettingOptional,
  rules?: userPrivacySettingRulesOptional,
|}

export type setUserPrivacySettingRulesReturnType = ok

export type setUsername = {|
  _: 'setUsername',
  username?: string,
|}

export type setUsernameOptional = {|
  _: 'setUsername',
  username?: string,
|}

export type setUsernameReturnType = ok

export type terminateAllOtherSessions = {|
  _: 'terminateAllOtherSessions',
|}

export type terminateAllOtherSessionsOptional = {|
  _: 'terminateAllOtherSessions',
|}

export type terminateAllOtherSessionsReturnType = ok

export type terminateSession = {|
  _: 'terminateSession',
  session_id?: number,
|}

export type terminateSessionOptional = {|
  _: 'terminateSession',
  session_id?: number,
|}

export type terminateSessionReturnType = ok

export type testCallBytes = {|
  _: 'testCallBytes',
  x?: string,
|}

export type testCallBytesOptional = {|
  _: 'testCallBytes',
  x?: string,
|}

export type testCallBytesReturnType = testBytes

export type testCallEmpty = {|
  _: 'testCallEmpty',
|}

export type testCallEmptyOptional = {|
  _: 'testCallEmpty',
|}

export type testCallEmptyReturnType = ok

export type testCallString = {|
  _: 'testCallString',
  x?: string,
|}

export type testCallStringOptional = {|
  _: 'testCallString',
  x?: string,
|}

export type testCallStringReturnType = testString

export type testCallVectorInt = {|
  _: 'testCallVectorInt',
  x?: number,
|}

export type testCallVectorIntOptional = {|
  _: 'testCallVectorInt',
  x?: number,
|}

export type testCallVectorIntReturnType = testVectorInt

export type testCallVectorIntObject = {|
  _: 'testCallVectorIntObject',
  x?: testIntOptional[],
|}

export type testCallVectorIntObjectOptional = {|
  _: 'testCallVectorIntObject',
  x?: testIntOptional[],
|}

export type testCallVectorIntObjectReturnType = testVectorIntObject

export type testCallVectorString = {|
  _: 'testCallVectorString',
  x?: string,
|}

export type testCallVectorStringOptional = {|
  _: 'testCallVectorString',
  x?: string,
|}

export type testCallVectorStringReturnType = testVectorString

export type testCallVectorStringObject = {|
  _: 'testCallVectorStringObject',
  x?: testStringOptional[],
|}

export type testCallVectorStringObjectOptional = {|
  _: 'testCallVectorStringObject',
  x?: testStringOptional[],
|}

export type testCallVectorStringObjectReturnType = testVectorStringObject

export type testGetDifference = {|
  _: 'testGetDifference',
|}

export type testGetDifferenceOptional = {|
  _: 'testGetDifference',
|}

export type testGetDifferenceReturnType = ok

export type testNetwork = {|
  _: 'testNetwork',
|}

export type testNetworkOptional = {|
  _: 'testNetwork',
|}

export type testNetworkReturnType = ok

export type testSquareInt = {|
  _: 'testSquareInt',
  x?: number,
|}

export type testSquareIntOptional = {|
  _: 'testSquareInt',
  x?: number,
|}

export type testSquareIntReturnType = testInt

export type testUseError = {|
  _: 'testUseError',
|}

export type testUseErrorOptional = {|
  _: 'testUseError',
|}

export type testUseErrorReturnType = error

export type testUseUpdate = {|
  _: 'testUseUpdate',
|}

export type testUseUpdateOptional = {|
  _: 'testUseUpdate',
|}

export type testUseUpdateReturnType = Update

export type toggleBasicGroupAdministrators = {|
  _: 'toggleBasicGroupAdministrators',
  basic_group_id?: number,
  everyone_is_administrator?: boolean,
|}

export type toggleBasicGroupAdministratorsOptional = {|
  _: 'toggleBasicGroupAdministrators',
  basic_group_id?: number,
  everyone_is_administrator?: boolean,
|}

export type toggleBasicGroupAdministratorsReturnType = ok

export type toggleChatIsPinned = {|
  _: 'toggleChatIsPinned',
  chat_id?: number,
  is_pinned?: boolean,
|}

export type toggleChatIsPinnedOptional = {|
  _: 'toggleChatIsPinned',
  chat_id?: number,
  is_pinned?: boolean,
|}

export type toggleChatIsPinnedReturnType = ok

export type toggleSupergroupInvites = {|
  _: 'toggleSupergroupInvites',
  supergroup_id?: number,
  anyone_can_invite?: boolean,
|}

export type toggleSupergroupInvitesOptional = {|
  _: 'toggleSupergroupInvites',
  supergroup_id?: number,
  anyone_can_invite?: boolean,
|}

export type toggleSupergroupInvitesReturnType = ok

export type toggleSupergroupIsAllHistoryAvailable = {|
  _: 'toggleSupergroupIsAllHistoryAvailable',
  supergroup_id?: number,
  is_all_history_available?: boolean,
|}

export type toggleSupergroupIsAllHistoryAvailableOptional = {|
  _: 'toggleSupergroupIsAllHistoryAvailable',
  supergroup_id?: number,
  is_all_history_available?: boolean,
|}

export type toggleSupergroupIsAllHistoryAvailableReturnType = ok

export type toggleSupergroupSignMessages = {|
  _: 'toggleSupergroupSignMessages',
  supergroup_id?: number,
  sign_messages?: boolean,
|}

export type toggleSupergroupSignMessagesOptional = {|
  _: 'toggleSupergroupSignMessages',
  supergroup_id?: number,
  sign_messages?: boolean,
|}

export type toggleSupergroupSignMessagesReturnType = ok

export type unblockUser = {|
  _: 'unblockUser',
  user_id?: number,
|}

export type unblockUserOptional = {|
  _: 'unblockUser',
  user_id?: number,
|}

export type unblockUserReturnType = ok

export type unpinSupergroupMessage = {|
  _: 'unpinSupergroupMessage',
  supergroup_id?: number,
|}

export type unpinSupergroupMessageOptional = {|
  _: 'unpinSupergroupMessage',
  supergroup_id?: number,
|}

export type unpinSupergroupMessageReturnType = ok

export type upgradeBasicGroupChatToSupergroupChat = {|
  _: 'upgradeBasicGroupChatToSupergroupChat',
  chat_id?: number,
|}

export type upgradeBasicGroupChatToSupergroupChatOptional = {|
  _: 'upgradeBasicGroupChatToSupergroupChat',
  chat_id?: number,
|}

export type upgradeBasicGroupChatToSupergroupChatReturnType = chat

export type uploadFile = {|
  _: 'uploadFile',
  file?: InputFileOptional,
  file_type?: FileTypeOptional,
  priority?: number,
|}

export type uploadFileOptional = {|
  _: 'uploadFile',
  file?: InputFileOptional,
  file_type?: FileTypeOptional,
  priority?: number,
|}

export type uploadFileReturnType = file

export type uploadStickerFile = {|
  _: 'uploadStickerFile',
  user_id?: number,
  png_sticker?: InputFileOptional,
|}

export type uploadStickerFileOptional = {|
  _: 'uploadStickerFile',
  user_id?: number,
  png_sticker?: InputFileOptional,
|}

export type uploadStickerFileReturnType = file

export type validateOrderInfo = {|
  _: 'validateOrderInfo',
  chat_id?: number,
  message_id?: number,
  order_info?: orderInfoOptional,
  allow_save?: boolean,
|}

export type validateOrderInfoOptional = {|
  _: 'validateOrderInfo',
  chat_id?: number,
  message_id?: number,
  order_info?: orderInfoOptional,
  allow_save?: boolean,
|}

export type validateOrderInfoReturnType = validatedOrderInfo

export type viewMessages = {|
  _: 'viewMessages',
  chat_id?: number,
  message_ids?: number,
  force_read?: boolean,
|}

export type viewMessagesOptional = {|
  _: 'viewMessages',
  chat_id?: number,
  message_ids?: number,
  force_read?: boolean,
|}

export type viewMessagesReturnType = ok

export type viewTrendingStickerSets = {|
  _: 'viewTrendingStickerSets',
  sticker_set_ids?: number,
|}

export type viewTrendingStickerSetsOptional = {|
  _: 'viewTrendingStickerSets',
  sticker_set_ids?: number,
|}

export type viewTrendingStickerSetsReturnType = ok

// -----------

export type TDObject =
  | accountTtl
  | animation
  | animations
  | audio
  | authenticationCodeInfo
  | basicGroup
  | basicGroupFullInfo
  | botCommand
  | botInfo
  | call
  | callConnection
  | callId
  | callProtocol
  | callbackQueryAnswer
  | chat
  | chatEvent
  | chatEventLogFilters
  | chatEvents
  | chatInviteLink
  | chatInviteLinkInfo
  | chatMember
  | chatMembers
  | chatPhoto
  | chatReportSpamState
  | chats
  | connectedWebsite
  | connectedWebsites
  | contact
  | count
  | customRequestResult
  | document
  | draftMessage
  | error
  | file
  | formattedText
  | foundMessages
  | game
  | gameHighScore
  | gameHighScores
  | hashtags
  | importedContacts
  | inlineKeyboardButton
  | inlineQueryResults
  | inputSticker
  | inputThumbnail
  | invoice
  | keyboardButton
  | labeledPricePart
  | localFile
  | location
  | maskPosition
  | message
  | messages
  | networkStatistics
  | notificationSettings
  | ok
  | orderInfo
  | passwordRecoveryInfo
  | passwordState
  | paymentForm
  | paymentReceipt
  | paymentResult
  | paymentsProviderStripe
  | photo
  | photoSize
  | profilePhoto
  | publicMessageLink
  | recoveryEmailAddress
  | remoteFile
  | savedCredentials
  | secretChat
  | session
  | sessions
  | shippingAddress
  | shippingOption
  | sticker
  | stickerEmojis
  | stickerSet
  | stickerSetInfo
  | stickerSets
  | stickers
  | storageStatistics
  | storageStatisticsByChat
  | storageStatisticsByFileType
  | storageStatisticsFast
  | supergroup
  | supergroupFullInfo
  | tMeUrl
  | tMeUrls
  | tdlibParameters
  | temporaryPasswordState
  | testBytes
  | testInt
  | testString
  | testVectorInt
  | testVectorIntObject
  | testVectorString
  | testVectorStringObject
  | text
  | textEntities
  | textEntity
  | user
  | userFullInfo
  | userPrivacySettingRules
  | userProfilePhotos
  | users
  | validatedOrderInfo
  | venue
  | video
  | videoNote
  | voiceNote
  | wallpaper
  | wallpapers
  | webPage
  | webPageInstantView

export type TDObjectOptional =
  | accountTtlOptional
  | animationOptional
  | animationsOptional
  | audioOptional
  | authenticationCodeInfoOptional
  | basicGroupOptional
  | basicGroupFullInfoOptional
  | botCommandOptional
  | botInfoOptional
  | callOptional
  | callConnectionOptional
  | callIdOptional
  | callProtocolOptional
  | callbackQueryAnswerOptional
  | chatOptional
  | chatEventOptional
  | chatEventLogFiltersOptional
  | chatEventsOptional
  | chatInviteLinkOptional
  | chatInviteLinkInfoOptional
  | chatMemberOptional
  | chatMembersOptional
  | chatPhotoOptional
  | chatReportSpamStateOptional
  | chatsOptional
  | connectedWebsiteOptional
  | connectedWebsitesOptional
  | contactOptional
  | countOptional
  | customRequestResultOptional
  | documentOptional
  | draftMessageOptional
  | errorOptional
  | fileOptional
  | formattedTextOptional
  | foundMessagesOptional
  | gameOptional
  | gameHighScoreOptional
  | gameHighScoresOptional
  | hashtagsOptional
  | importedContactsOptional
  | inlineKeyboardButtonOptional
  | inlineQueryResultsOptional
  | inputStickerOptional
  | inputThumbnailOptional
  | invoiceOptional
  | keyboardButtonOptional
  | labeledPricePartOptional
  | localFileOptional
  | locationOptional
  | maskPositionOptional
  | messageOptional
  | messagesOptional
  | networkStatisticsOptional
  | notificationSettingsOptional
  | okOptional
  | orderInfoOptional
  | passwordRecoveryInfoOptional
  | passwordStateOptional
  | paymentFormOptional
  | paymentReceiptOptional
  | paymentResultOptional
  | paymentsProviderStripeOptional
  | photoOptional
  | photoSizeOptional
  | profilePhotoOptional
  | publicMessageLinkOptional
  | recoveryEmailAddressOptional
  | remoteFileOptional
  | savedCredentialsOptional
  | secretChatOptional
  | sessionOptional
  | sessionsOptional
  | shippingAddressOptional
  | shippingOptionOptional
  | stickerOptional
  | stickerEmojisOptional
  | stickerSetOptional
  | stickerSetInfoOptional
  | stickerSetsOptional
  | stickersOptional
  | storageStatisticsOptional
  | storageStatisticsByChatOptional
  | storageStatisticsByFileTypeOptional
  | storageStatisticsFastOptional
  | supergroupOptional
  | supergroupFullInfoOptional
  | tMeUrlOptional
  | tMeUrlsOptional
  | tdlibParametersOptional
  | temporaryPasswordStateOptional
  | testBytesOptional
  | testIntOptional
  | testStringOptional
  | testVectorIntOptional
  | testVectorIntObjectOptional
  | testVectorStringOptional
  | testVectorStringObjectOptional
  | textOptional
  | textEntitiesOptional
  | textEntityOptional
  | userOptional
  | userFullInfoOptional
  | userPrivacySettingRulesOptional
  | userProfilePhotosOptional
  | usersOptional
  | validatedOrderInfoOptional
  | venueOptional
  | videoOptional
  | videoNoteOptional
  | voiceNoteOptional
  | wallpaperOptional
  | wallpapersOptional
  | webPageOptional
  | webPageInstantViewOptional

export type AuthenticationCodeType =
  | authenticationCodeTypeTelegramMessage
  | authenticationCodeTypeSms
  | authenticationCodeTypeCall
  | authenticationCodeTypeFlashCall

export type AuthenticationCodeTypeOptional =
  | authenticationCodeTypeTelegramMessageOptional
  | authenticationCodeTypeSmsOptional
  | authenticationCodeTypeCallOptional
  | authenticationCodeTypeFlashCallOptional

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

export type CallDiscardReason =
  | callDiscardReasonEmpty
  | callDiscardReasonMissed
  | callDiscardReasonDeclined
  | callDiscardReasonDisconnected
  | callDiscardReasonHungUp

export type CallDiscardReasonOptional =
  | callDiscardReasonEmptyOptional
  | callDiscardReasonMissedOptional
  | callDiscardReasonDeclinedOptional
  | callDiscardReasonDisconnectedOptional
  | callDiscardReasonHungUpOptional

export type CallState =
  | callStatePending
  | callStateExchangingKeys
  | callStateReady
  | callStateHangingUp
  | callStateDiscarded
  | callStateError

export type CallStateOptional =
  | callStatePendingOptional
  | callStateExchangingKeysOptional
  | callStateReadyOptional
  | callStateHangingUpOptional
  | callStateDiscardedOptional
  | callStateErrorOptional

export type CallbackQueryPayload =
  | callbackQueryPayloadData
  | callbackQueryPayloadGame

export type CallbackQueryPayloadOptional =
  | callbackQueryPayloadDataOptional
  | callbackQueryPayloadGameOptional

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

export type ChatMemberStatus =
  | chatMemberStatusCreator
  | chatMemberStatusAdministrator
  | chatMemberStatusMember
  | chatMemberStatusRestricted
  | chatMemberStatusLeft
  | chatMemberStatusBanned

export type ChatMemberStatusOptional =
  | chatMemberStatusCreatorOptional
  | chatMemberStatusAdministratorOptional
  | chatMemberStatusMemberOptional
  | chatMemberStatusRestrictedOptional
  | chatMemberStatusLeftOptional
  | chatMemberStatusBannedOptional

export type ChatReportReason =
  | chatReportReasonSpam
  | chatReportReasonViolence
  | chatReportReasonPornography
  | chatReportReasonCustom

export type ChatReportReasonOptional =
  | chatReportReasonSpamOptional
  | chatReportReasonViolenceOptional
  | chatReportReasonPornographyOptional
  | chatReportReasonCustomOptional

export type ChatType =
  | chatTypePrivate
  | chatTypeBasicGroup
  | chatTypeSupergroup
  | chatTypeSecret

export type ChatTypeOptional =
  | chatTypePrivateOptional
  | chatTypeBasicGroupOptional
  | chatTypeSupergroupOptional
  | chatTypeSecretOptional

export type CheckChatUsernameResult =
  | checkChatUsernameResultOk
  | checkChatUsernameResultUsernameInvalid
  | checkChatUsernameResultUsernameOccupied
  | checkChatUsernameResultPublicChatsTooMuch
  | checkChatUsernameResultPublicGroupsUnavailable

export type CheckChatUsernameResultOptional =
  | checkChatUsernameResultOkOptional
  | checkChatUsernameResultUsernameInvalidOptional
  | checkChatUsernameResultUsernameOccupiedOptional
  | checkChatUsernameResultPublicChatsTooMuchOptional
  | checkChatUsernameResultPublicGroupsUnavailableOptional

export type ConnectionState =
  | connectionStateWaitingForNetwork
  | connectionStateConnectingToProxy
  | connectionStateConnecting
  | connectionStateUpdating
  | connectionStateReady

export type ConnectionStateOptional =
  | connectionStateWaitingForNetworkOptional
  | connectionStateConnectingToProxyOptional
  | connectionStateConnectingOptional
  | connectionStateUpdatingOptional
  | connectionStateReadyOptional

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

export type FileType =
  | fileTypeNone
  | fileTypeAnimation
  | fileTypeAudio
  | fileTypeDocument
  | fileTypePhoto
  | fileTypeProfilePhoto
  | fileTypeSecret
  | fileTypeSticker
  | fileTypeThumbnail
  | fileTypeUnknown
  | fileTypeVideo
  | fileTypeVideoNote
  | fileTypeVoiceNote
  | fileTypeWallpaper
  | fileTypeSecretThumbnail

export type FileTypeOptional =
  | fileTypeNoneOptional
  | fileTypeAnimationOptional
  | fileTypeAudioOptional
  | fileTypeDocumentOptional
  | fileTypePhotoOptional
  | fileTypeProfilePhotoOptional
  | fileTypeSecretOptional
  | fileTypeStickerOptional
  | fileTypeThumbnailOptional
  | fileTypeUnknownOptional
  | fileTypeVideoOptional
  | fileTypeVideoNoteOptional
  | fileTypeVoiceNoteOptional
  | fileTypeWallpaperOptional
  | fileTypeSecretThumbnailOptional

export type InlineKeyboardButtonType =
  | inlineKeyboardButtonTypeUrl
  | inlineKeyboardButtonTypeCallback
  | inlineKeyboardButtonTypeCallbackGame
  | inlineKeyboardButtonTypeSwitchInline
  | inlineKeyboardButtonTypeBuy

export type InlineKeyboardButtonTypeOptional =
  | inlineKeyboardButtonTypeUrlOptional
  | inlineKeyboardButtonTypeCallbackOptional
  | inlineKeyboardButtonTypeCallbackGameOptional
  | inlineKeyboardButtonTypeSwitchInlineOptional
  | inlineKeyboardButtonTypeBuyOptional

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

export type InputCredentials =
  | inputCredentialsSaved
  | inputCredentialsNew
  | inputCredentialsAndroidPay
  | inputCredentialsApplePay

export type InputCredentialsOptional =
  | inputCredentialsSavedOptional
  | inputCredentialsNewOptional
  | inputCredentialsAndroidPayOptional
  | inputCredentialsApplePayOptional

export type InputFile =
  | inputFileId
  | inputFileRemote
  | inputFileLocal
  | inputFileGenerated

export type InputFileOptional =
  | inputFileIdOptional
  | inputFileRemoteOptional
  | inputFileLocalOptional
  | inputFileGeneratedOptional

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

export type KeyboardButtonType =
  | keyboardButtonTypeText
  | keyboardButtonTypeRequestPhoneNumber
  | keyboardButtonTypeRequestLocation

export type KeyboardButtonTypeOptional =
  | keyboardButtonTypeTextOptional
  | keyboardButtonTypeRequestPhoneNumberOptional
  | keyboardButtonTypeRequestLocationOptional

export type LinkState =
  | linkStateNone
  | linkStateKnowsPhoneNumber
  | linkStateIsContact

export type LinkStateOptional =
  | linkStateNoneOptional
  | linkStateKnowsPhoneNumberOptional
  | linkStateIsContactOptional

export type MaskPoint =
  | maskPointForehead
  | maskPointEyes
  | maskPointMouth
  | maskPointChin

export type MaskPointOptional =
  | maskPointForeheadOptional
  | maskPointEyesOptional
  | maskPointMouthOptional
  | maskPointChinOptional

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
  | messageUnsupported

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
  | messageUnsupportedOptional

export type MessageForwardInfo =
  | messageForwardedFromUser
  | messageForwardedPost

export type MessageForwardInfoOptional =
  | messageForwardedFromUserOptional
  | messageForwardedPostOptional

export type MessageSendingState =
  | messageSendingStatePending
  | messageSendingStateFailed

export type MessageSendingStateOptional =
  | messageSendingStatePendingOptional
  | messageSendingStateFailedOptional

export type NetworkStatisticsEntry =
  | networkStatisticsEntryFile
  | networkStatisticsEntryCall

export type NetworkStatisticsEntryOptional =
  | networkStatisticsEntryFileOptional
  | networkStatisticsEntryCallOptional

export type NetworkType =
  | networkTypeNone
  | networkTypeMobile
  | networkTypeMobileRoaming
  | networkTypeWiFi
  | networkTypeOther

export type NetworkTypeOptional =
  | networkTypeNoneOptional
  | networkTypeMobileOptional
  | networkTypeMobileRoamingOptional
  | networkTypeWiFiOptional
  | networkTypeOtherOptional

export type NotificationSettingsScope =
  | notificationSettingsScopeChat
  | notificationSettingsScopePrivateChats
  | notificationSettingsScopeBasicGroupChats
  | notificationSettingsScopeAllChats

export type NotificationSettingsScopeOptional =
  | notificationSettingsScopeChatOptional
  | notificationSettingsScopePrivateChatsOptional
  | notificationSettingsScopeBasicGroupChatsOptional
  | notificationSettingsScopeAllChatsOptional

export type OptionValue =
  | optionValueBoolean
  | optionValueEmpty
  | optionValueInteger
  | optionValueString

export type OptionValueOptional =
  | optionValueBooleanOptional
  | optionValueEmptyOptional
  | optionValueIntegerOptional
  | optionValueStringOptional

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

export type Proxy =
  | proxyEmpty
  | proxySocks5

export type ProxyOptional =
  | proxyEmptyOptional
  | proxySocks5Optional

export type ReplyMarkup =
  | replyMarkupRemoveKeyboard
  | replyMarkupForceReply
  | replyMarkupShowKeyboard
  | replyMarkupInlineKeyboard

export type ReplyMarkupOptional =
  | replyMarkupRemoveKeyboardOptional
  | replyMarkupForceReplyOptional
  | replyMarkupShowKeyboardOptional
  | replyMarkupInlineKeyboardOptional

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

export type SecretChatState =
  | secretChatStatePending
  | secretChatStateReady
  | secretChatStateClosed

export type SecretChatStateOptional =
  | secretChatStatePendingOptional
  | secretChatStateReadyOptional
  | secretChatStateClosedOptional

export type SupergroupMembersFilter =
  | supergroupMembersFilterRecent
  | supergroupMembersFilterAdministrators
  | supergroupMembersFilterSearch
  | supergroupMembersFilterRestricted
  | supergroupMembersFilterBanned
  | supergroupMembersFilterBots

export type SupergroupMembersFilterOptional =
  | supergroupMembersFilterRecentOptional
  | supergroupMembersFilterAdministratorsOptional
  | supergroupMembersFilterSearchOptional
  | supergroupMembersFilterRestrictedOptional
  | supergroupMembersFilterBannedOptional
  | supergroupMembersFilterBotsOptional

export type TMeUrlType =
  | tMeUrlTypeUser
  | tMeUrlTypeSupergroup
  | tMeUrlTypeChatInvite
  | tMeUrlTypeStickerSet

export type TMeUrlTypeOptional =
  | tMeUrlTypeUserOptional
  | tMeUrlTypeSupergroupOptional
  | tMeUrlTypeChatInviteOptional
  | tMeUrlTypeStickerSetOptional

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

export type TextParseMode =
  | textParseModeMarkdown
  | textParseModeHTML

export type TextParseModeOptional =
  | textParseModeMarkdownOptional
  | textParseModeHTMLOptional

export type TopChatCategory =
  | topChatCategoryUsers
  | topChatCategoryBots
  | topChatCategoryGroups
  | topChatCategoryChannels
  | topChatCategoryInlineBots
  | topChatCategoryCalls

export type TopChatCategoryOptional =
  | topChatCategoryUsersOptional
  | topChatCategoryBotsOptional
  | topChatCategoryGroupsOptional
  | topChatCategoryChannelsOptional
  | topChatCategoryInlineBotsOptional
  | topChatCategoryCallsOptional

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
  | updateChatReadInbox
  | updateChatReadOutbox
  | updateChatUnreadMentionCount
  | updateNotificationSettings
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
  | updateOption
  | updateInstalledStickerSets
  | updateTrendingStickerSets
  | updateRecentStickers
  | updateFavoriteStickers
  | updateSavedAnimations
  | updateConnectionState
  | updateNewInlineQuery
  | updateNewChosenInlineResult
  | updateNewCallbackQuery
  | updateNewInlineCallbackQuery
  | updateNewShippingQuery
  | updateNewPreCheckoutQuery
  | updateNewCustomEvent
  | updateNewCustomQuery

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
  | updateChatReadInboxOptional
  | updateChatReadOutboxOptional
  | updateChatUnreadMentionCountOptional
  | updateNotificationSettingsOptional
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
  | updateOptionOptional
  | updateInstalledStickerSetsOptional
  | updateTrendingStickerSetsOptional
  | updateRecentStickersOptional
  | updateFavoriteStickersOptional
  | updateSavedAnimationsOptional
  | updateConnectionStateOptional
  | updateNewInlineQueryOptional
  | updateNewChosenInlineResultOptional
  | updateNewCallbackQueryOptional
  | updateNewInlineCallbackQueryOptional
  | updateNewShippingQueryOptional
  | updateNewPreCheckoutQueryOptional
  | updateNewCustomEventOptional
  | updateNewCustomQueryOptional

export type UserPrivacySetting =
  | userPrivacySettingShowStatus
  | userPrivacySettingAllowChatInvites
  | userPrivacySettingAllowCalls

export type UserPrivacySettingOptional =
  | userPrivacySettingShowStatusOptional
  | userPrivacySettingAllowChatInvitesOptional
  | userPrivacySettingAllowCallsOptional

export type UserPrivacySettingRule =
  | userPrivacySettingRuleAllowAll
  | userPrivacySettingRuleAllowContacts
  | userPrivacySettingRuleAllowUsers
  | userPrivacySettingRuleRestrictAll
  | userPrivacySettingRuleRestrictContacts
  | userPrivacySettingRuleRestrictUsers

export type UserPrivacySettingRuleOptional =
  | userPrivacySettingRuleAllowAllOptional
  | userPrivacySettingRuleAllowContactsOptional
  | userPrivacySettingRuleAllowUsersOptional
  | userPrivacySettingRuleRestrictAllOptional
  | userPrivacySettingRuleRestrictContactsOptional
  | userPrivacySettingRuleRestrictUsersOptional

export type UserStatus =
  | userStatusEmpty
  | userStatusOnline
  | userStatusOffline
  | userStatusRecently
  | userStatusLastWeek
  | userStatusLastMonth

export type UserStatusOptional =
  | userStatusEmptyOptional
  | userStatusOnlineOptional
  | userStatusOfflineOptional
  | userStatusRecentlyOptional
  | userStatusLastWeekOptional
  | userStatusLastMonthOptional

export type UserType =
  | userTypeRegular
  | userTypeDeleted
  | userTypeBot
  | userTypeUnknown

export type UserTypeOptional =
  | userTypeRegularOptional
  | userTypeDeletedOptional
  | userTypeBotOptional
  | userTypeUnknownOptional

export type TDFunction =
  | acceptCall
  | addChatMember
  | addChatMembers
  | addFavoriteSticker
  | addNetworkStatistics
  | addRecentSticker
  | addRecentlyFoundChat
  | addSavedAnimation
  | addStickerToSet
  | answerCallbackQuery
  | answerCustomQuery
  | answerInlineQuery
  | answerPreCheckoutQuery
  | answerShippingQuery
  | blockUser
  | cancelDownloadFile
  | cancelUploadFile
  | changeChatReportSpamState
  | changeImportedContacts
  | changePhoneNumber
  | changeStickerSet
  | checkAuthenticationBotToken
  | checkAuthenticationCode
  | checkAuthenticationPassword
  | checkChangePhoneNumberCode
  | checkChatInviteLink
  | checkChatUsername
  | checkDatabaseEncryptionKey
  | clearImportedContacts
  | clearRecentStickers
  | clearRecentlyFoundChats
  | close
  | closeChat
  | closeSecretChat
  | createBasicGroupChat
  | createCall
  | createNewBasicGroupChat
  | createNewSecretChat
  | createNewStickerSet
  | createNewSupergroupChat
  | createPrivateChat
  | createSecretChat
  | createSupergroupChat
  | createTemporaryPassword
  | deleteAccount
  | deleteChatHistory
  | deleteChatMessagesFromUser
  | deleteChatReplyMarkup
  | deleteFile
  | deleteMessages
  | deleteProfilePhoto
  | deleteSavedCredentials
  | deleteSavedOrderInfo
  | deleteSupergroup
  | destroy
  | discardCall
  | disconnectAllWebsites
  | disconnectWebsite
  | downloadFile
  | editInlineMessageCaption
  | editInlineMessageLiveLocation
  | editInlineMessageReplyMarkup
  | editInlineMessageText
  | editMessageCaption
  | editMessageLiveLocation
  | editMessageReplyMarkup
  | editMessageText
  | finishFileGeneration
  | forwardMessages
  | generateChatInviteLink
  | getAccountTtl
  | getActiveLiveLocationMessages
  | getActiveSessions
  | getArchivedStickerSets
  | getAttachedStickerSets
  | getAuthorizationState
  | getBasicGroup
  | getBasicGroupFullInfo
  | getBlockedUsers
  | getCallbackQueryAnswer
  | getChat
  | getChatAdministrators
  | getChatEventLog
  | getChatHistory
  | getChatMember
  | getChatMessageByDate
  | getChatPinnedMessage
  | getChatReportSpamState
  | getChats
  | getConnectedWebsites
  | getCountryCode
  | getCreatedPublicChats
  | getFavoriteStickers
  | getFile
  | getFileExtension
  | getFileMimeType
  | getGameHighScores
  | getGroupsInCommon
  | getImportedContactCount
  | getInlineGameHighScores
  | getInlineQueryResults
  | getInstalledStickerSets
  | getInviteText
  | getMe
  | getMessage
  | getMessages
  | getNetworkStatistics
  | getNotificationSettings
  | getOption
  | getPasswordState
  | getPaymentForm
  | getPaymentReceipt
  | getProxy
  | getPublicMessageLink
  | getRecentInlineBots
  | getRecentStickers
  | getRecentlyVisitedTMeUrls
  | getRecoveryEmailAddress
  | getRemoteFile
  | getRepliedMessage
  | getSavedAnimations
  | getSavedOrderInfo
  | getSecretChat
  | getStickerEmojis
  | getStickerSet
  | getStickers
  | getStorageStatistics
  | getStorageStatisticsFast
  | getSupergroup
  | getSupergroupFullInfo
  | getSupergroupMembers
  | getSupportUser
  | getTemporaryPasswordState
  | getTermsOfService
  | getTextEntities
  | getTopChats
  | getTrendingStickerSets
  | getUser
  | getUserFullInfo
  | getUserPrivacySettingRules
  | getUserProfilePhotos
  | getWallpapers
  | getWebPageInstantView
  | getWebPagePreview
  | importContacts
  | joinChatByInviteLink
  | logOut
  | openChat
  | openMessageContent
  | optimizeStorage
  | parseTextEntities
  | pinSupergroupMessage
  | processDcUpdate
  | readAllChatMentions
  | recoverAuthenticationPassword
  | recoverPassword
  | registerDevice
  | removeContacts
  | removeFavoriteSticker
  | removeRecentHashtag
  | removeRecentSticker
  | removeRecentlyFoundChat
  | removeSavedAnimation
  | removeStickerFromSet
  | removeTopChat
  | reorderInstalledStickerSets
  | reportChat
  | reportSupergroupSpam
  | requestAuthenticationPasswordRecovery
  | requestPasswordRecovery
  | resendAuthenticationCode
  | resendChangePhoneNumberCode
  | resetAllNotificationSettings
  | resetNetworkStatistics
  | searchCallMessages
  | searchChatMembers
  | searchChatMessages
  | searchChatRecentLocationMessages
  | searchChats
  | searchChatsOnServer
  | searchContacts
  | searchHashtags
  | searchInstalledStickerSets
  | searchMessages
  | searchPublicChat
  | searchPublicChats
  | searchSecretMessages
  | searchStickerSet
  | searchStickerSets
  | searchStickers
  | sendBotStartMessage
  | sendCallDebugInformation
  | sendCallRating
  | sendChatAction
  | sendChatScreenshotTakenNotification
  | sendChatSetTtlMessage
  | sendCustomRequest
  | sendInlineQueryResultMessage
  | sendMessage
  | sendMessageAlbum
  | sendPaymentForm
  | setAccountTtl
  | setAlarm
  | setAuthenticationPhoneNumber
  | setBio
  | setBotUpdatesStatus
  | setChatClientData
  | setChatDraftMessage
  | setChatMemberStatus
  | setChatPhoto
  | setChatTitle
  | setDatabaseEncryptionKey
  | setFileGenerationProgress
  | setGameScore
  | setInlineGameScore
  | setName
  | setNetworkType
  | setNotificationSettings
  | setOption
  | setPassword
  | setPinnedChats
  | setProfilePhoto
  | setProxy
  | setRecoveryEmailAddress
  | setStickerPositionInSet
  | setSupergroupDescription
  | setSupergroupStickerSet
  | setSupergroupUsername
  | setTdlibParameters
  | setUserPrivacySettingRules
  | setUsername
  | terminateAllOtherSessions
  | terminateSession
  | testCallBytes
  | testCallEmpty
  | testCallString
  | testCallVectorInt
  | testCallVectorIntObject
  | testCallVectorString
  | testCallVectorStringObject
  | testGetDifference
  | testNetwork
  | testSquareInt
  | testUseError
  | testUseUpdate
  | toggleBasicGroupAdministrators
  | toggleChatIsPinned
  | toggleSupergroupInvites
  | toggleSupergroupIsAllHistoryAvailable
  | toggleSupergroupSignMessages
  | unblockUser
  | unpinSupergroupMessage
  | upgradeBasicGroupChatToSupergroupChat
  | uploadFile
  | uploadStickerFile
  | validateOrderInfo
  | viewMessages
  | viewTrendingStickerSets

export type TDFunctionOptional =
  | acceptCallOptional
  | addChatMemberOptional
  | addChatMembersOptional
  | addFavoriteStickerOptional
  | addNetworkStatisticsOptional
  | addRecentStickerOptional
  | addRecentlyFoundChatOptional
  | addSavedAnimationOptional
  | addStickerToSetOptional
  | answerCallbackQueryOptional
  | answerCustomQueryOptional
  | answerInlineQueryOptional
  | answerPreCheckoutQueryOptional
  | answerShippingQueryOptional
  | blockUserOptional
  | cancelDownloadFileOptional
  | cancelUploadFileOptional
  | changeChatReportSpamStateOptional
  | changeImportedContactsOptional
  | changePhoneNumberOptional
  | changeStickerSetOptional
  | checkAuthenticationBotTokenOptional
  | checkAuthenticationCodeOptional
  | checkAuthenticationPasswordOptional
  | checkChangePhoneNumberCodeOptional
  | checkChatInviteLinkOptional
  | checkChatUsernameOptional
  | checkDatabaseEncryptionKeyOptional
  | clearImportedContactsOptional
  | clearRecentStickersOptional
  | clearRecentlyFoundChatsOptional
  | closeOptional
  | closeChatOptional
  | closeSecretChatOptional
  | createBasicGroupChatOptional
  | createCallOptional
  | createNewBasicGroupChatOptional
  | createNewSecretChatOptional
  | createNewStickerSetOptional
  | createNewSupergroupChatOptional
  | createPrivateChatOptional
  | createSecretChatOptional
  | createSupergroupChatOptional
  | createTemporaryPasswordOptional
  | deleteAccountOptional
  | deleteChatHistoryOptional
  | deleteChatMessagesFromUserOptional
  | deleteChatReplyMarkupOptional
  | deleteFileOptional
  | deleteMessagesOptional
  | deleteProfilePhotoOptional
  | deleteSavedCredentialsOptional
  | deleteSavedOrderInfoOptional
  | deleteSupergroupOptional
  | destroyOptional
  | discardCallOptional
  | disconnectAllWebsitesOptional
  | disconnectWebsiteOptional
  | downloadFileOptional
  | editInlineMessageCaptionOptional
  | editInlineMessageLiveLocationOptional
  | editInlineMessageReplyMarkupOptional
  | editInlineMessageTextOptional
  | editMessageCaptionOptional
  | editMessageLiveLocationOptional
  | editMessageReplyMarkupOptional
  | editMessageTextOptional
  | finishFileGenerationOptional
  | forwardMessagesOptional
  | generateChatInviteLinkOptional
  | getAccountTtlOptional
  | getActiveLiveLocationMessagesOptional
  | getActiveSessionsOptional
  | getArchivedStickerSetsOptional
  | getAttachedStickerSetsOptional
  | getAuthorizationStateOptional
  | getBasicGroupOptional
  | getBasicGroupFullInfoOptional
  | getBlockedUsersOptional
  | getCallbackQueryAnswerOptional
  | getChatOptional
  | getChatAdministratorsOptional
  | getChatEventLogOptional
  | getChatHistoryOptional
  | getChatMemberOptional
  | getChatMessageByDateOptional
  | getChatPinnedMessageOptional
  | getChatReportSpamStateOptional
  | getChatsOptional
  | getConnectedWebsitesOptional
  | getCountryCodeOptional
  | getCreatedPublicChatsOptional
  | getFavoriteStickersOptional
  | getFileOptional
  | getFileExtensionOptional
  | getFileMimeTypeOptional
  | getGameHighScoresOptional
  | getGroupsInCommonOptional
  | getImportedContactCountOptional
  | getInlineGameHighScoresOptional
  | getInlineQueryResultsOptional
  | getInstalledStickerSetsOptional
  | getInviteTextOptional
  | getMeOptional
  | getMessageOptional
  | getMessagesOptional
  | getNetworkStatisticsOptional
  | getNotificationSettingsOptional
  | getOptionOptional
  | getPasswordStateOptional
  | getPaymentFormOptional
  | getPaymentReceiptOptional
  | getProxyOptional
  | getPublicMessageLinkOptional
  | getRecentInlineBotsOptional
  | getRecentStickersOptional
  | getRecentlyVisitedTMeUrlsOptional
  | getRecoveryEmailAddressOptional
  | getRemoteFileOptional
  | getRepliedMessageOptional
  | getSavedAnimationsOptional
  | getSavedOrderInfoOptional
  | getSecretChatOptional
  | getStickerEmojisOptional
  | getStickerSetOptional
  | getStickersOptional
  | getStorageStatisticsOptional
  | getStorageStatisticsFastOptional
  | getSupergroupOptional
  | getSupergroupFullInfoOptional
  | getSupergroupMembersOptional
  | getSupportUserOptional
  | getTemporaryPasswordStateOptional
  | getTermsOfServiceOptional
  | getTextEntitiesOptional
  | getTopChatsOptional
  | getTrendingStickerSetsOptional
  | getUserOptional
  | getUserFullInfoOptional
  | getUserPrivacySettingRulesOptional
  | getUserProfilePhotosOptional
  | getWallpapersOptional
  | getWebPageInstantViewOptional
  | getWebPagePreviewOptional
  | importContactsOptional
  | joinChatByInviteLinkOptional
  | logOutOptional
  | openChatOptional
  | openMessageContentOptional
  | optimizeStorageOptional
  | parseTextEntitiesOptional
  | pinSupergroupMessageOptional
  | processDcUpdateOptional
  | readAllChatMentionsOptional
  | recoverAuthenticationPasswordOptional
  | recoverPasswordOptional
  | registerDeviceOptional
  | removeContactsOptional
  | removeFavoriteStickerOptional
  | removeRecentHashtagOptional
  | removeRecentStickerOptional
  | removeRecentlyFoundChatOptional
  | removeSavedAnimationOptional
  | removeStickerFromSetOptional
  | removeTopChatOptional
  | reorderInstalledStickerSetsOptional
  | reportChatOptional
  | reportSupergroupSpamOptional
  | requestAuthenticationPasswordRecoveryOptional
  | requestPasswordRecoveryOptional
  | resendAuthenticationCodeOptional
  | resendChangePhoneNumberCodeOptional
  | resetAllNotificationSettingsOptional
  | resetNetworkStatisticsOptional
  | searchCallMessagesOptional
  | searchChatMembersOptional
  | searchChatMessagesOptional
  | searchChatRecentLocationMessagesOptional
  | searchChatsOptional
  | searchChatsOnServerOptional
  | searchContactsOptional
  | searchHashtagsOptional
  | searchInstalledStickerSetsOptional
  | searchMessagesOptional
  | searchPublicChatOptional
  | searchPublicChatsOptional
  | searchSecretMessagesOptional
  | searchStickerSetOptional
  | searchStickerSetsOptional
  | searchStickersOptional
  | sendBotStartMessageOptional
  | sendCallDebugInformationOptional
  | sendCallRatingOptional
  | sendChatActionOptional
  | sendChatScreenshotTakenNotificationOptional
  | sendChatSetTtlMessageOptional
  | sendCustomRequestOptional
  | sendInlineQueryResultMessageOptional
  | sendMessageOptional
  | sendMessageAlbumOptional
  | sendPaymentFormOptional
  | setAccountTtlOptional
  | setAlarmOptional
  | setAuthenticationPhoneNumberOptional
  | setBioOptional
  | setBotUpdatesStatusOptional
  | setChatClientDataOptional
  | setChatDraftMessageOptional
  | setChatMemberStatusOptional
  | setChatPhotoOptional
  | setChatTitleOptional
  | setDatabaseEncryptionKeyOptional
  | setFileGenerationProgressOptional
  | setGameScoreOptional
  | setInlineGameScoreOptional
  | setNameOptional
  | setNetworkTypeOptional
  | setNotificationSettingsOptional
  | setOptionOptional
  | setPasswordOptional
  | setPinnedChatsOptional
  | setProfilePhotoOptional
  | setProxyOptional
  | setRecoveryEmailAddressOptional
  | setStickerPositionInSetOptional
  | setSupergroupDescriptionOptional
  | setSupergroupStickerSetOptional
  | setSupergroupUsernameOptional
  | setTdlibParametersOptional
  | setUserPrivacySettingRulesOptional
  | setUsernameOptional
  | terminateAllOtherSessionsOptional
  | terminateSessionOptional
  | testCallBytesOptional
  | testCallEmptyOptional
  | testCallStringOptional
  | testCallVectorIntOptional
  | testCallVectorIntObjectOptional
  | testCallVectorStringOptional
  | testCallVectorStringObjectOptional
  | testGetDifferenceOptional
  | testNetworkOptional
  | testSquareIntOptional
  | testUseErrorOptional
  | testUseUpdateOptional
  | toggleBasicGroupAdministratorsOptional
  | toggleChatIsPinnedOptional
  | toggleSupergroupInvitesOptional
  | toggleSupergroupIsAllHistoryAvailableOptional
  | toggleSupergroupSignMessagesOptional
  | unblockUserOptional
  | unpinSupergroupMessageOptional
  | upgradeBasicGroupChatToSupergroupChatOptional
  | uploadFileOptional
  | uploadStickerFileOptional
  | validateOrderInfoOptional
  | viewMessagesOptional
  | viewTrendingStickerSetsOptional

export type Invoke =
  & ((query: acceptCallOptional) => Promise<acceptCallReturnType>)
  & ((query: addChatMemberOptional) => Promise<addChatMemberReturnType>)
  & ((query: addChatMembersOptional) => Promise<addChatMembersReturnType>)
  & ((query: addFavoriteStickerOptional) => Promise<addFavoriteStickerReturnType>)
  & ((query: addNetworkStatisticsOptional) => Promise<addNetworkStatisticsReturnType>)
  & ((query: addRecentStickerOptional) => Promise<addRecentStickerReturnType>)
  & ((query: addRecentlyFoundChatOptional) => Promise<addRecentlyFoundChatReturnType>)
  & ((query: addSavedAnimationOptional) => Promise<addSavedAnimationReturnType>)
  & ((query: addStickerToSetOptional) => Promise<addStickerToSetReturnType>)
  & ((query: answerCallbackQueryOptional) => Promise<answerCallbackQueryReturnType>)
  & ((query: answerCustomQueryOptional) => Promise<answerCustomQueryReturnType>)
  & ((query: answerInlineQueryOptional) => Promise<answerInlineQueryReturnType>)
  & ((query: answerPreCheckoutQueryOptional) => Promise<answerPreCheckoutQueryReturnType>)
  & ((query: answerShippingQueryOptional) => Promise<answerShippingQueryReturnType>)
  & ((query: blockUserOptional) => Promise<blockUserReturnType>)
  & ((query: cancelDownloadFileOptional) => Promise<cancelDownloadFileReturnType>)
  & ((query: cancelUploadFileOptional) => Promise<cancelUploadFileReturnType>)
  & ((query: changeChatReportSpamStateOptional) => Promise<changeChatReportSpamStateReturnType>)
  & ((query: changeImportedContactsOptional) => Promise<changeImportedContactsReturnType>)
  & ((query: changePhoneNumberOptional) => Promise<changePhoneNumberReturnType>)
  & ((query: changeStickerSetOptional) => Promise<changeStickerSetReturnType>)
  & ((query: checkAuthenticationBotTokenOptional) => Promise<checkAuthenticationBotTokenReturnType>)
  & ((query: checkAuthenticationCodeOptional) => Promise<checkAuthenticationCodeReturnType>)
  & ((query: checkAuthenticationPasswordOptional) => Promise<checkAuthenticationPasswordReturnType>)
  & ((query: checkChangePhoneNumberCodeOptional) => Promise<checkChangePhoneNumberCodeReturnType>)
  & ((query: checkChatInviteLinkOptional) => Promise<checkChatInviteLinkReturnType>)
  & ((query: checkChatUsernameOptional) => Promise<checkChatUsernameReturnType>)
  & ((query: checkDatabaseEncryptionKeyOptional) => Promise<checkDatabaseEncryptionKeyReturnType>)
  & ((query: clearImportedContactsOptional) => Promise<clearImportedContactsReturnType>)
  & ((query: clearRecentStickersOptional) => Promise<clearRecentStickersReturnType>)
  & ((query: clearRecentlyFoundChatsOptional) => Promise<clearRecentlyFoundChatsReturnType>)
  & ((query: closeOptional) => Promise<closeReturnType>)
  & ((query: closeChatOptional) => Promise<closeChatReturnType>)
  & ((query: closeSecretChatOptional) => Promise<closeSecretChatReturnType>)
  & ((query: createBasicGroupChatOptional) => Promise<createBasicGroupChatReturnType>)
  & ((query: createCallOptional) => Promise<createCallReturnType>)
  & ((query: createNewBasicGroupChatOptional) => Promise<createNewBasicGroupChatReturnType>)
  & ((query: createNewSecretChatOptional) => Promise<createNewSecretChatReturnType>)
  & ((query: createNewStickerSetOptional) => Promise<createNewStickerSetReturnType>)
  & ((query: createNewSupergroupChatOptional) => Promise<createNewSupergroupChatReturnType>)
  & ((query: createPrivateChatOptional) => Promise<createPrivateChatReturnType>)
  & ((query: createSecretChatOptional) => Promise<createSecretChatReturnType>)
  & ((query: createSupergroupChatOptional) => Promise<createSupergroupChatReturnType>)
  & ((query: createTemporaryPasswordOptional) => Promise<createTemporaryPasswordReturnType>)
  & ((query: deleteAccountOptional) => Promise<deleteAccountReturnType>)
  & ((query: deleteChatHistoryOptional) => Promise<deleteChatHistoryReturnType>)
  & ((query: deleteChatMessagesFromUserOptional) => Promise<deleteChatMessagesFromUserReturnType>)
  & ((query: deleteChatReplyMarkupOptional) => Promise<deleteChatReplyMarkupReturnType>)
  & ((query: deleteFileOptional) => Promise<deleteFileReturnType>)
  & ((query: deleteMessagesOptional) => Promise<deleteMessagesReturnType>)
  & ((query: deleteProfilePhotoOptional) => Promise<deleteProfilePhotoReturnType>)
  & ((query: deleteSavedCredentialsOptional) => Promise<deleteSavedCredentialsReturnType>)
  & ((query: deleteSavedOrderInfoOptional) => Promise<deleteSavedOrderInfoReturnType>)
  & ((query: deleteSupergroupOptional) => Promise<deleteSupergroupReturnType>)
  & ((query: destroyOptional) => Promise<destroyReturnType>)
  & ((query: discardCallOptional) => Promise<discardCallReturnType>)
  & ((query: disconnectAllWebsitesOptional) => Promise<disconnectAllWebsitesReturnType>)
  & ((query: disconnectWebsiteOptional) => Promise<disconnectWebsiteReturnType>)
  & ((query: downloadFileOptional) => Promise<downloadFileReturnType>)
  & ((query: editInlineMessageCaptionOptional) => Promise<editInlineMessageCaptionReturnType>)
  & ((query: editInlineMessageLiveLocationOptional) => Promise<editInlineMessageLiveLocationReturnType>)
  & ((query: editInlineMessageReplyMarkupOptional) => Promise<editInlineMessageReplyMarkupReturnType>)
  & ((query: editInlineMessageTextOptional) => Promise<editInlineMessageTextReturnType>)
  & ((query: editMessageCaptionOptional) => Promise<editMessageCaptionReturnType>)
  & ((query: editMessageLiveLocationOptional) => Promise<editMessageLiveLocationReturnType>)
  & ((query: editMessageReplyMarkupOptional) => Promise<editMessageReplyMarkupReturnType>)
  & ((query: editMessageTextOptional) => Promise<editMessageTextReturnType>)
  & ((query: finishFileGenerationOptional) => Promise<finishFileGenerationReturnType>)
  & ((query: forwardMessagesOptional) => Promise<forwardMessagesReturnType>)
  & ((query: generateChatInviteLinkOptional) => Promise<generateChatInviteLinkReturnType>)
  & ((query: getAccountTtlOptional) => Promise<getAccountTtlReturnType>)
  & ((query: getActiveLiveLocationMessagesOptional) => Promise<getActiveLiveLocationMessagesReturnType>)
  & ((query: getActiveSessionsOptional) => Promise<getActiveSessionsReturnType>)
  & ((query: getArchivedStickerSetsOptional) => Promise<getArchivedStickerSetsReturnType>)
  & ((query: getAttachedStickerSetsOptional) => Promise<getAttachedStickerSetsReturnType>)
  & ((query: getAuthorizationStateOptional) => Promise<getAuthorizationStateReturnType>)
  & ((query: getBasicGroupOptional) => Promise<getBasicGroupReturnType>)
  & ((query: getBasicGroupFullInfoOptional) => Promise<getBasicGroupFullInfoReturnType>)
  & ((query: getBlockedUsersOptional) => Promise<getBlockedUsersReturnType>)
  & ((query: getCallbackQueryAnswerOptional) => Promise<getCallbackQueryAnswerReturnType>)
  & ((query: getChatOptional) => Promise<getChatReturnType>)
  & ((query: getChatAdministratorsOptional) => Promise<getChatAdministratorsReturnType>)
  & ((query: getChatEventLogOptional) => Promise<getChatEventLogReturnType>)
  & ((query: getChatHistoryOptional) => Promise<getChatHistoryReturnType>)
  & ((query: getChatMemberOptional) => Promise<getChatMemberReturnType>)
  & ((query: getChatMessageByDateOptional) => Promise<getChatMessageByDateReturnType>)
  & ((query: getChatPinnedMessageOptional) => Promise<getChatPinnedMessageReturnType>)
  & ((query: getChatReportSpamStateOptional) => Promise<getChatReportSpamStateReturnType>)
  & ((query: getChatsOptional) => Promise<getChatsReturnType>)
  & ((query: getConnectedWebsitesOptional) => Promise<getConnectedWebsitesReturnType>)
  & ((query: getCountryCodeOptional) => Promise<getCountryCodeReturnType>)
  & ((query: getCreatedPublicChatsOptional) => Promise<getCreatedPublicChatsReturnType>)
  & ((query: getFavoriteStickersOptional) => Promise<getFavoriteStickersReturnType>)
  & ((query: getFileOptional) => Promise<getFileReturnType>)
  & ((query: getFileExtensionOptional) => Promise<getFileExtensionReturnType>)
  & ((query: getFileMimeTypeOptional) => Promise<getFileMimeTypeReturnType>)
  & ((query: getGameHighScoresOptional) => Promise<getGameHighScoresReturnType>)
  & ((query: getGroupsInCommonOptional) => Promise<getGroupsInCommonReturnType>)
  & ((query: getImportedContactCountOptional) => Promise<getImportedContactCountReturnType>)
  & ((query: getInlineGameHighScoresOptional) => Promise<getInlineGameHighScoresReturnType>)
  & ((query: getInlineQueryResultsOptional) => Promise<getInlineQueryResultsReturnType>)
  & ((query: getInstalledStickerSetsOptional) => Promise<getInstalledStickerSetsReturnType>)
  & ((query: getInviteTextOptional) => Promise<getInviteTextReturnType>)
  & ((query: getMeOptional) => Promise<getMeReturnType>)
  & ((query: getMessageOptional) => Promise<getMessageReturnType>)
  & ((query: getMessagesOptional) => Promise<getMessagesReturnType>)
  & ((query: getNetworkStatisticsOptional) => Promise<getNetworkStatisticsReturnType>)
  & ((query: getNotificationSettingsOptional) => Promise<getNotificationSettingsReturnType>)
  & ((query: getOptionOptional) => Promise<getOptionReturnType>)
  & ((query: getPasswordStateOptional) => Promise<getPasswordStateReturnType>)
  & ((query: getPaymentFormOptional) => Promise<getPaymentFormReturnType>)
  & ((query: getPaymentReceiptOptional) => Promise<getPaymentReceiptReturnType>)
  & ((query: getProxyOptional) => Promise<getProxyReturnType>)
  & ((query: getPublicMessageLinkOptional) => Promise<getPublicMessageLinkReturnType>)
  & ((query: getRecentInlineBotsOptional) => Promise<getRecentInlineBotsReturnType>)
  & ((query: getRecentStickersOptional) => Promise<getRecentStickersReturnType>)
  & ((query: getRecentlyVisitedTMeUrlsOptional) => Promise<getRecentlyVisitedTMeUrlsReturnType>)
  & ((query: getRecoveryEmailAddressOptional) => Promise<getRecoveryEmailAddressReturnType>)
  & ((query: getRemoteFileOptional) => Promise<getRemoteFileReturnType>)
  & ((query: getRepliedMessageOptional) => Promise<getRepliedMessageReturnType>)
  & ((query: getSavedAnimationsOptional) => Promise<getSavedAnimationsReturnType>)
  & ((query: getSavedOrderInfoOptional) => Promise<getSavedOrderInfoReturnType>)
  & ((query: getSecretChatOptional) => Promise<getSecretChatReturnType>)
  & ((query: getStickerEmojisOptional) => Promise<getStickerEmojisReturnType>)
  & ((query: getStickerSetOptional) => Promise<getStickerSetReturnType>)
  & ((query: getStickersOptional) => Promise<getStickersReturnType>)
  & ((query: getStorageStatisticsOptional) => Promise<getStorageStatisticsReturnType>)
  & ((query: getStorageStatisticsFastOptional) => Promise<getStorageStatisticsFastReturnType>)
  & ((query: getSupergroupOptional) => Promise<getSupergroupReturnType>)
  & ((query: getSupergroupFullInfoOptional) => Promise<getSupergroupFullInfoReturnType>)
  & ((query: getSupergroupMembersOptional) => Promise<getSupergroupMembersReturnType>)
  & ((query: getSupportUserOptional) => Promise<getSupportUserReturnType>)
  & ((query: getTemporaryPasswordStateOptional) => Promise<getTemporaryPasswordStateReturnType>)
  & ((query: getTermsOfServiceOptional) => Promise<getTermsOfServiceReturnType>)
  & ((query: getTextEntitiesOptional) => Promise<getTextEntitiesReturnType>)
  & ((query: getTopChatsOptional) => Promise<getTopChatsReturnType>)
  & ((query: getTrendingStickerSetsOptional) => Promise<getTrendingStickerSetsReturnType>)
  & ((query: getUserOptional) => Promise<getUserReturnType>)
  & ((query: getUserFullInfoOptional) => Promise<getUserFullInfoReturnType>)
  & ((query: getUserPrivacySettingRulesOptional) => Promise<getUserPrivacySettingRulesReturnType>)
  & ((query: getUserProfilePhotosOptional) => Promise<getUserProfilePhotosReturnType>)
  & ((query: getWallpapersOptional) => Promise<getWallpapersReturnType>)
  & ((query: getWebPageInstantViewOptional) => Promise<getWebPageInstantViewReturnType>)
  & ((query: getWebPagePreviewOptional) => Promise<getWebPagePreviewReturnType>)
  & ((query: importContactsOptional) => Promise<importContactsReturnType>)
  & ((query: joinChatByInviteLinkOptional) => Promise<joinChatByInviteLinkReturnType>)
  & ((query: logOutOptional) => Promise<logOutReturnType>)
  & ((query: openChatOptional) => Promise<openChatReturnType>)
  & ((query: openMessageContentOptional) => Promise<openMessageContentReturnType>)
  & ((query: optimizeStorageOptional) => Promise<optimizeStorageReturnType>)
  & ((query: parseTextEntitiesOptional) => Promise<parseTextEntitiesReturnType>)
  & ((query: pinSupergroupMessageOptional) => Promise<pinSupergroupMessageReturnType>)
  & ((query: processDcUpdateOptional) => Promise<processDcUpdateReturnType>)
  & ((query: readAllChatMentionsOptional) => Promise<readAllChatMentionsReturnType>)
  & ((query: recoverAuthenticationPasswordOptional) => Promise<recoverAuthenticationPasswordReturnType>)
  & ((query: recoverPasswordOptional) => Promise<recoverPasswordReturnType>)
  & ((query: registerDeviceOptional) => Promise<registerDeviceReturnType>)
  & ((query: removeContactsOptional) => Promise<removeContactsReturnType>)
  & ((query: removeFavoriteStickerOptional) => Promise<removeFavoriteStickerReturnType>)
  & ((query: removeRecentHashtagOptional) => Promise<removeRecentHashtagReturnType>)
  & ((query: removeRecentStickerOptional) => Promise<removeRecentStickerReturnType>)
  & ((query: removeRecentlyFoundChatOptional) => Promise<removeRecentlyFoundChatReturnType>)
  & ((query: removeSavedAnimationOptional) => Promise<removeSavedAnimationReturnType>)
  & ((query: removeStickerFromSetOptional) => Promise<removeStickerFromSetReturnType>)
  & ((query: removeTopChatOptional) => Promise<removeTopChatReturnType>)
  & ((query: reorderInstalledStickerSetsOptional) => Promise<reorderInstalledStickerSetsReturnType>)
  & ((query: reportChatOptional) => Promise<reportChatReturnType>)
  & ((query: reportSupergroupSpamOptional) => Promise<reportSupergroupSpamReturnType>)
  & ((query: requestAuthenticationPasswordRecoveryOptional) => Promise<requestAuthenticationPasswordRecoveryReturnType>)
  & ((query: requestPasswordRecoveryOptional) => Promise<requestPasswordRecoveryReturnType>)
  & ((query: resendAuthenticationCodeOptional) => Promise<resendAuthenticationCodeReturnType>)
  & ((query: resendChangePhoneNumberCodeOptional) => Promise<resendChangePhoneNumberCodeReturnType>)
  & ((query: resetAllNotificationSettingsOptional) => Promise<resetAllNotificationSettingsReturnType>)
  & ((query: resetNetworkStatisticsOptional) => Promise<resetNetworkStatisticsReturnType>)
  & ((query: searchCallMessagesOptional) => Promise<searchCallMessagesReturnType>)
  & ((query: searchChatMembersOptional) => Promise<searchChatMembersReturnType>)
  & ((query: searchChatMessagesOptional) => Promise<searchChatMessagesReturnType>)
  & ((query: searchChatRecentLocationMessagesOptional) => Promise<searchChatRecentLocationMessagesReturnType>)
  & ((query: searchChatsOptional) => Promise<searchChatsReturnType>)
  & ((query: searchChatsOnServerOptional) => Promise<searchChatsOnServerReturnType>)
  & ((query: searchContactsOptional) => Promise<searchContactsReturnType>)
  & ((query: searchHashtagsOptional) => Promise<searchHashtagsReturnType>)
  & ((query: searchInstalledStickerSetsOptional) => Promise<searchInstalledStickerSetsReturnType>)
  & ((query: searchMessagesOptional) => Promise<searchMessagesReturnType>)
  & ((query: searchPublicChatOptional) => Promise<searchPublicChatReturnType>)
  & ((query: searchPublicChatsOptional) => Promise<searchPublicChatsReturnType>)
  & ((query: searchSecretMessagesOptional) => Promise<searchSecretMessagesReturnType>)
  & ((query: searchStickerSetOptional) => Promise<searchStickerSetReturnType>)
  & ((query: searchStickerSetsOptional) => Promise<searchStickerSetsReturnType>)
  & ((query: searchStickersOptional) => Promise<searchStickersReturnType>)
  & ((query: sendBotStartMessageOptional) => Promise<sendBotStartMessageReturnType>)
  & ((query: sendCallDebugInformationOptional) => Promise<sendCallDebugInformationReturnType>)
  & ((query: sendCallRatingOptional) => Promise<sendCallRatingReturnType>)
  & ((query: sendChatActionOptional) => Promise<sendChatActionReturnType>)
  & ((query: sendChatScreenshotTakenNotificationOptional) => Promise<sendChatScreenshotTakenNotificationReturnType>)
  & ((query: sendChatSetTtlMessageOptional) => Promise<sendChatSetTtlMessageReturnType>)
  & ((query: sendCustomRequestOptional) => Promise<sendCustomRequestReturnType>)
  & ((query: sendInlineQueryResultMessageOptional) => Promise<sendInlineQueryResultMessageReturnType>)
  & ((query: sendMessageOptional) => Promise<sendMessageReturnType>)
  & ((query: sendMessageAlbumOptional) => Promise<sendMessageAlbumReturnType>)
  & ((query: sendPaymentFormOptional) => Promise<sendPaymentFormReturnType>)
  & ((query: setAccountTtlOptional) => Promise<setAccountTtlReturnType>)
  & ((query: setAlarmOptional) => Promise<setAlarmReturnType>)
  & ((query: setAuthenticationPhoneNumberOptional) => Promise<setAuthenticationPhoneNumberReturnType>)
  & ((query: setBioOptional) => Promise<setBioReturnType>)
  & ((query: setBotUpdatesStatusOptional) => Promise<setBotUpdatesStatusReturnType>)
  & ((query: setChatClientDataOptional) => Promise<setChatClientDataReturnType>)
  & ((query: setChatDraftMessageOptional) => Promise<setChatDraftMessageReturnType>)
  & ((query: setChatMemberStatusOptional) => Promise<setChatMemberStatusReturnType>)
  & ((query: setChatPhotoOptional) => Promise<setChatPhotoReturnType>)
  & ((query: setChatTitleOptional) => Promise<setChatTitleReturnType>)
  & ((query: setDatabaseEncryptionKeyOptional) => Promise<setDatabaseEncryptionKeyReturnType>)
  & ((query: setFileGenerationProgressOptional) => Promise<setFileGenerationProgressReturnType>)
  & ((query: setGameScoreOptional) => Promise<setGameScoreReturnType>)
  & ((query: setInlineGameScoreOptional) => Promise<setInlineGameScoreReturnType>)
  & ((query: setNameOptional) => Promise<setNameReturnType>)
  & ((query: setNetworkTypeOptional) => Promise<setNetworkTypeReturnType>)
  & ((query: setNotificationSettingsOptional) => Promise<setNotificationSettingsReturnType>)
  & ((query: setOptionOptional) => Promise<setOptionReturnType>)
  & ((query: setPasswordOptional) => Promise<setPasswordReturnType>)
  & ((query: setPinnedChatsOptional) => Promise<setPinnedChatsReturnType>)
  & ((query: setProfilePhotoOptional) => Promise<setProfilePhotoReturnType>)
  & ((query: setProxyOptional) => Promise<setProxyReturnType>)
  & ((query: setRecoveryEmailAddressOptional) => Promise<setRecoveryEmailAddressReturnType>)
  & ((query: setStickerPositionInSetOptional) => Promise<setStickerPositionInSetReturnType>)
  & ((query: setSupergroupDescriptionOptional) => Promise<setSupergroupDescriptionReturnType>)
  & ((query: setSupergroupStickerSetOptional) => Promise<setSupergroupStickerSetReturnType>)
  & ((query: setSupergroupUsernameOptional) => Promise<setSupergroupUsernameReturnType>)
  & ((query: setTdlibParametersOptional) => Promise<setTdlibParametersReturnType>)
  & ((query: setUserPrivacySettingRulesOptional) => Promise<setUserPrivacySettingRulesReturnType>)
  & ((query: setUsernameOptional) => Promise<setUsernameReturnType>)
  & ((query: terminateAllOtherSessionsOptional) => Promise<terminateAllOtherSessionsReturnType>)
  & ((query: terminateSessionOptional) => Promise<terminateSessionReturnType>)
  & ((query: testCallBytesOptional) => Promise<testCallBytesReturnType>)
  & ((query: testCallEmptyOptional) => Promise<testCallEmptyReturnType>)
  & ((query: testCallStringOptional) => Promise<testCallStringReturnType>)
  & ((query: testCallVectorIntOptional) => Promise<testCallVectorIntReturnType>)
  & ((query: testCallVectorIntObjectOptional) => Promise<testCallVectorIntObjectReturnType>)
  & ((query: testCallVectorStringOptional) => Promise<testCallVectorStringReturnType>)
  & ((query: testCallVectorStringObjectOptional) => Promise<testCallVectorStringObjectReturnType>)
  & ((query: testGetDifferenceOptional) => Promise<testGetDifferenceReturnType>)
  & ((query: testNetworkOptional) => Promise<testNetworkReturnType>)
  & ((query: testSquareIntOptional) => Promise<testSquareIntReturnType>)
  & ((query: testUseErrorOptional) => Promise<testUseErrorReturnType>)
  & ((query: testUseUpdateOptional) => Promise<testUseUpdateReturnType>)
  & ((query: toggleBasicGroupAdministratorsOptional) => Promise<toggleBasicGroupAdministratorsReturnType>)
  & ((query: toggleChatIsPinnedOptional) => Promise<toggleChatIsPinnedReturnType>)
  & ((query: toggleSupergroupInvitesOptional) => Promise<toggleSupergroupInvitesReturnType>)
  & ((query: toggleSupergroupIsAllHistoryAvailableOptional) => Promise<toggleSupergroupIsAllHistoryAvailableReturnType>)
  & ((query: toggleSupergroupSignMessagesOptional) => Promise<toggleSupergroupSignMessagesReturnType>)
  & ((query: unblockUserOptional) => Promise<unblockUserReturnType>)
  & ((query: unpinSupergroupMessageOptional) => Promise<unpinSupergroupMessageReturnType>)
  & ((query: upgradeBasicGroupChatToSupergroupChatOptional) => Promise<upgradeBasicGroupChatToSupergroupChatReturnType>)
  & ((query: uploadFileOptional) => Promise<uploadFileReturnType>)
  & ((query: uploadStickerFileOptional) => Promise<uploadStickerFileReturnType>)
  & ((query: validateOrderInfoOptional) => Promise<validateOrderInfoReturnType>)
  & ((query: viewMessagesOptional) => Promise<viewMessagesReturnType>)
  & ((query: viewTrendingStickerSetsOptional) => Promise<viewTrendingStickerSetsReturnType>)

export type Execute =
  & ((query: acceptCallOptional) => acceptCallReturnType | error | null)
  & ((query: addChatMemberOptional) => addChatMemberReturnType | error | null)
  & ((query: addChatMembersOptional) => addChatMembersReturnType | error | null)
  & ((query: addFavoriteStickerOptional) => addFavoriteStickerReturnType | error | null)
  & ((query: addNetworkStatisticsOptional) => addNetworkStatisticsReturnType | error | null)
  & ((query: addRecentStickerOptional) => addRecentStickerReturnType | error | null)
  & ((query: addRecentlyFoundChatOptional) => addRecentlyFoundChatReturnType | error | null)
  & ((query: addSavedAnimationOptional) => addSavedAnimationReturnType | error | null)
  & ((query: addStickerToSetOptional) => addStickerToSetReturnType | error | null)
  & ((query: answerCallbackQueryOptional) => answerCallbackQueryReturnType | error | null)
  & ((query: answerCustomQueryOptional) => answerCustomQueryReturnType | error | null)
  & ((query: answerInlineQueryOptional) => answerInlineQueryReturnType | error | null)
  & ((query: answerPreCheckoutQueryOptional) => answerPreCheckoutQueryReturnType | error | null)
  & ((query: answerShippingQueryOptional) => answerShippingQueryReturnType | error | null)
  & ((query: blockUserOptional) => blockUserReturnType | error | null)
  & ((query: cancelDownloadFileOptional) => cancelDownloadFileReturnType | error | null)
  & ((query: cancelUploadFileOptional) => cancelUploadFileReturnType | error | null)
  & ((query: changeChatReportSpamStateOptional) => changeChatReportSpamStateReturnType | error | null)
  & ((query: changeImportedContactsOptional) => changeImportedContactsReturnType | error | null)
  & ((query: changePhoneNumberOptional) => changePhoneNumberReturnType | error | null)
  & ((query: changeStickerSetOptional) => changeStickerSetReturnType | error | null)
  & ((query: checkAuthenticationBotTokenOptional) => checkAuthenticationBotTokenReturnType | error | null)
  & ((query: checkAuthenticationCodeOptional) => checkAuthenticationCodeReturnType | error | null)
  & ((query: checkAuthenticationPasswordOptional) => checkAuthenticationPasswordReturnType | error | null)
  & ((query: checkChangePhoneNumberCodeOptional) => checkChangePhoneNumberCodeReturnType | error | null)
  & ((query: checkChatInviteLinkOptional) => checkChatInviteLinkReturnType | error | null)
  & ((query: checkChatUsernameOptional) => checkChatUsernameReturnType | error | null)
  & ((query: checkDatabaseEncryptionKeyOptional) => checkDatabaseEncryptionKeyReturnType | error | null)
  & ((query: clearImportedContactsOptional) => clearImportedContactsReturnType | error | null)
  & ((query: clearRecentStickersOptional) => clearRecentStickersReturnType | error | null)
  & ((query: clearRecentlyFoundChatsOptional) => clearRecentlyFoundChatsReturnType | error | null)
  & ((query: closeOptional) => closeReturnType | error | null)
  & ((query: closeChatOptional) => closeChatReturnType | error | null)
  & ((query: closeSecretChatOptional) => closeSecretChatReturnType | error | null)
  & ((query: createBasicGroupChatOptional) => createBasicGroupChatReturnType | error | null)
  & ((query: createCallOptional) => createCallReturnType | error | null)
  & ((query: createNewBasicGroupChatOptional) => createNewBasicGroupChatReturnType | error | null)
  & ((query: createNewSecretChatOptional) => createNewSecretChatReturnType | error | null)
  & ((query: createNewStickerSetOptional) => createNewStickerSetReturnType | error | null)
  & ((query: createNewSupergroupChatOptional) => createNewSupergroupChatReturnType | error | null)
  & ((query: createPrivateChatOptional) => createPrivateChatReturnType | error | null)
  & ((query: createSecretChatOptional) => createSecretChatReturnType | error | null)
  & ((query: createSupergroupChatOptional) => createSupergroupChatReturnType | error | null)
  & ((query: createTemporaryPasswordOptional) => createTemporaryPasswordReturnType | error | null)
  & ((query: deleteAccountOptional) => deleteAccountReturnType | error | null)
  & ((query: deleteChatHistoryOptional) => deleteChatHistoryReturnType | error | null)
  & ((query: deleteChatMessagesFromUserOptional) => deleteChatMessagesFromUserReturnType | error | null)
  & ((query: deleteChatReplyMarkupOptional) => deleteChatReplyMarkupReturnType | error | null)
  & ((query: deleteFileOptional) => deleteFileReturnType | error | null)
  & ((query: deleteMessagesOptional) => deleteMessagesReturnType | error | null)
  & ((query: deleteProfilePhotoOptional) => deleteProfilePhotoReturnType | error | null)
  & ((query: deleteSavedCredentialsOptional) => deleteSavedCredentialsReturnType | error | null)
  & ((query: deleteSavedOrderInfoOptional) => deleteSavedOrderInfoReturnType | error | null)
  & ((query: deleteSupergroupOptional) => deleteSupergroupReturnType | error | null)
  & ((query: destroyOptional) => destroyReturnType | error | null)
  & ((query: discardCallOptional) => discardCallReturnType | error | null)
  & ((query: disconnectAllWebsitesOptional) => disconnectAllWebsitesReturnType | error | null)
  & ((query: disconnectWebsiteOptional) => disconnectWebsiteReturnType | error | null)
  & ((query: downloadFileOptional) => downloadFileReturnType | error | null)
  & ((query: editInlineMessageCaptionOptional) => editInlineMessageCaptionReturnType | error | null)
  & ((query: editInlineMessageLiveLocationOptional) => editInlineMessageLiveLocationReturnType | error | null)
  & ((query: editInlineMessageReplyMarkupOptional) => editInlineMessageReplyMarkupReturnType | error | null)
  & ((query: editInlineMessageTextOptional) => editInlineMessageTextReturnType | error | null)
  & ((query: editMessageCaptionOptional) => editMessageCaptionReturnType | error | null)
  & ((query: editMessageLiveLocationOptional) => editMessageLiveLocationReturnType | error | null)
  & ((query: editMessageReplyMarkupOptional) => editMessageReplyMarkupReturnType | error | null)
  & ((query: editMessageTextOptional) => editMessageTextReturnType | error | null)
  & ((query: finishFileGenerationOptional) => finishFileGenerationReturnType | error | null)
  & ((query: forwardMessagesOptional) => forwardMessagesReturnType | error | null)
  & ((query: generateChatInviteLinkOptional) => generateChatInviteLinkReturnType | error | null)
  & ((query: getAccountTtlOptional) => getAccountTtlReturnType | error | null)
  & ((query: getActiveLiveLocationMessagesOptional) => getActiveLiveLocationMessagesReturnType | error | null)
  & ((query: getActiveSessionsOptional) => getActiveSessionsReturnType | error | null)
  & ((query: getArchivedStickerSetsOptional) => getArchivedStickerSetsReturnType | error | null)
  & ((query: getAttachedStickerSetsOptional) => getAttachedStickerSetsReturnType | error | null)
  & ((query: getAuthorizationStateOptional) => getAuthorizationStateReturnType | error | null)
  & ((query: getBasicGroupOptional) => getBasicGroupReturnType | error | null)
  & ((query: getBasicGroupFullInfoOptional) => getBasicGroupFullInfoReturnType | error | null)
  & ((query: getBlockedUsersOptional) => getBlockedUsersReturnType | error | null)
  & ((query: getCallbackQueryAnswerOptional) => getCallbackQueryAnswerReturnType | error | null)
  & ((query: getChatOptional) => getChatReturnType | error | null)
  & ((query: getChatAdministratorsOptional) => getChatAdministratorsReturnType | error | null)
  & ((query: getChatEventLogOptional) => getChatEventLogReturnType | error | null)
  & ((query: getChatHistoryOptional) => getChatHistoryReturnType | error | null)
  & ((query: getChatMemberOptional) => getChatMemberReturnType | error | null)
  & ((query: getChatMessageByDateOptional) => getChatMessageByDateReturnType | error | null)
  & ((query: getChatPinnedMessageOptional) => getChatPinnedMessageReturnType | error | null)
  & ((query: getChatReportSpamStateOptional) => getChatReportSpamStateReturnType | error | null)
  & ((query: getChatsOptional) => getChatsReturnType | error | null)
  & ((query: getConnectedWebsitesOptional) => getConnectedWebsitesReturnType | error | null)
  & ((query: getCountryCodeOptional) => getCountryCodeReturnType | error | null)
  & ((query: getCreatedPublicChatsOptional) => getCreatedPublicChatsReturnType | error | null)
  & ((query: getFavoriteStickersOptional) => getFavoriteStickersReturnType | error | null)
  & ((query: getFileOptional) => getFileReturnType | error | null)
  & ((query: getFileExtensionOptional) => getFileExtensionReturnType | error | null)
  & ((query: getFileMimeTypeOptional) => getFileMimeTypeReturnType | error | null)
  & ((query: getGameHighScoresOptional) => getGameHighScoresReturnType | error | null)
  & ((query: getGroupsInCommonOptional) => getGroupsInCommonReturnType | error | null)
  & ((query: getImportedContactCountOptional) => getImportedContactCountReturnType | error | null)
  & ((query: getInlineGameHighScoresOptional) => getInlineGameHighScoresReturnType | error | null)
  & ((query: getInlineQueryResultsOptional) => getInlineQueryResultsReturnType | error | null)
  & ((query: getInstalledStickerSetsOptional) => getInstalledStickerSetsReturnType | error | null)
  & ((query: getInviteTextOptional) => getInviteTextReturnType | error | null)
  & ((query: getMeOptional) => getMeReturnType | error | null)
  & ((query: getMessageOptional) => getMessageReturnType | error | null)
  & ((query: getMessagesOptional) => getMessagesReturnType | error | null)
  & ((query: getNetworkStatisticsOptional) => getNetworkStatisticsReturnType | error | null)
  & ((query: getNotificationSettingsOptional) => getNotificationSettingsReturnType | error | null)
  & ((query: getOptionOptional) => getOptionReturnType | error | null)
  & ((query: getPasswordStateOptional) => getPasswordStateReturnType | error | null)
  & ((query: getPaymentFormOptional) => getPaymentFormReturnType | error | null)
  & ((query: getPaymentReceiptOptional) => getPaymentReceiptReturnType | error | null)
  & ((query: getProxyOptional) => getProxyReturnType | error | null)
  & ((query: getPublicMessageLinkOptional) => getPublicMessageLinkReturnType | error | null)
  & ((query: getRecentInlineBotsOptional) => getRecentInlineBotsReturnType | error | null)
  & ((query: getRecentStickersOptional) => getRecentStickersReturnType | error | null)
  & ((query: getRecentlyVisitedTMeUrlsOptional) => getRecentlyVisitedTMeUrlsReturnType | error | null)
  & ((query: getRecoveryEmailAddressOptional) => getRecoveryEmailAddressReturnType | error | null)
  & ((query: getRemoteFileOptional) => getRemoteFileReturnType | error | null)
  & ((query: getRepliedMessageOptional) => getRepliedMessageReturnType | error | null)
  & ((query: getSavedAnimationsOptional) => getSavedAnimationsReturnType | error | null)
  & ((query: getSavedOrderInfoOptional) => getSavedOrderInfoReturnType | error | null)
  & ((query: getSecretChatOptional) => getSecretChatReturnType | error | null)
  & ((query: getStickerEmojisOptional) => getStickerEmojisReturnType | error | null)
  & ((query: getStickerSetOptional) => getStickerSetReturnType | error | null)
  & ((query: getStickersOptional) => getStickersReturnType | error | null)
  & ((query: getStorageStatisticsOptional) => getStorageStatisticsReturnType | error | null)
  & ((query: getStorageStatisticsFastOptional) => getStorageStatisticsFastReturnType | error | null)
  & ((query: getSupergroupOptional) => getSupergroupReturnType | error | null)
  & ((query: getSupergroupFullInfoOptional) => getSupergroupFullInfoReturnType | error | null)
  & ((query: getSupergroupMembersOptional) => getSupergroupMembersReturnType | error | null)
  & ((query: getSupportUserOptional) => getSupportUserReturnType | error | null)
  & ((query: getTemporaryPasswordStateOptional) => getTemporaryPasswordStateReturnType | error | null)
  & ((query: getTermsOfServiceOptional) => getTermsOfServiceReturnType | error | null)
  & ((query: getTextEntitiesOptional) => getTextEntitiesReturnType | error | null)
  & ((query: getTopChatsOptional) => getTopChatsReturnType | error | null)
  & ((query: getTrendingStickerSetsOptional) => getTrendingStickerSetsReturnType | error | null)
  & ((query: getUserOptional) => getUserReturnType | error | null)
  & ((query: getUserFullInfoOptional) => getUserFullInfoReturnType | error | null)
  & ((query: getUserPrivacySettingRulesOptional) => getUserPrivacySettingRulesReturnType | error | null)
  & ((query: getUserProfilePhotosOptional) => getUserProfilePhotosReturnType | error | null)
  & ((query: getWallpapersOptional) => getWallpapersReturnType | error | null)
  & ((query: getWebPageInstantViewOptional) => getWebPageInstantViewReturnType | error | null)
  & ((query: getWebPagePreviewOptional) => getWebPagePreviewReturnType | error | null)
  & ((query: importContactsOptional) => importContactsReturnType | error | null)
  & ((query: joinChatByInviteLinkOptional) => joinChatByInviteLinkReturnType | error | null)
  & ((query: logOutOptional) => logOutReturnType | error | null)
  & ((query: openChatOptional) => openChatReturnType | error | null)
  & ((query: openMessageContentOptional) => openMessageContentReturnType | error | null)
  & ((query: optimizeStorageOptional) => optimizeStorageReturnType | error | null)
  & ((query: parseTextEntitiesOptional) => parseTextEntitiesReturnType | error | null)
  & ((query: pinSupergroupMessageOptional) => pinSupergroupMessageReturnType | error | null)
  & ((query: processDcUpdateOptional) => processDcUpdateReturnType | error | null)
  & ((query: readAllChatMentionsOptional) => readAllChatMentionsReturnType | error | null)
  & ((query: recoverAuthenticationPasswordOptional) => recoverAuthenticationPasswordReturnType | error | null)
  & ((query: recoverPasswordOptional) => recoverPasswordReturnType | error | null)
  & ((query: registerDeviceOptional) => registerDeviceReturnType | error | null)
  & ((query: removeContactsOptional) => removeContactsReturnType | error | null)
  & ((query: removeFavoriteStickerOptional) => removeFavoriteStickerReturnType | error | null)
  & ((query: removeRecentHashtagOptional) => removeRecentHashtagReturnType | error | null)
  & ((query: removeRecentStickerOptional) => removeRecentStickerReturnType | error | null)
  & ((query: removeRecentlyFoundChatOptional) => removeRecentlyFoundChatReturnType | error | null)
  & ((query: removeSavedAnimationOptional) => removeSavedAnimationReturnType | error | null)
  & ((query: removeStickerFromSetOptional) => removeStickerFromSetReturnType | error | null)
  & ((query: removeTopChatOptional) => removeTopChatReturnType | error | null)
  & ((query: reorderInstalledStickerSetsOptional) => reorderInstalledStickerSetsReturnType | error | null)
  & ((query: reportChatOptional) => reportChatReturnType | error | null)
  & ((query: reportSupergroupSpamOptional) => reportSupergroupSpamReturnType | error | null)
  & ((query: requestAuthenticationPasswordRecoveryOptional) => requestAuthenticationPasswordRecoveryReturnType | error | null)
  & ((query: requestPasswordRecoveryOptional) => requestPasswordRecoveryReturnType | error | null)
  & ((query: resendAuthenticationCodeOptional) => resendAuthenticationCodeReturnType | error | null)
  & ((query: resendChangePhoneNumberCodeOptional) => resendChangePhoneNumberCodeReturnType | error | null)
  & ((query: resetAllNotificationSettingsOptional) => resetAllNotificationSettingsReturnType | error | null)
  & ((query: resetNetworkStatisticsOptional) => resetNetworkStatisticsReturnType | error | null)
  & ((query: searchCallMessagesOptional) => searchCallMessagesReturnType | error | null)
  & ((query: searchChatMembersOptional) => searchChatMembersReturnType | error | null)
  & ((query: searchChatMessagesOptional) => searchChatMessagesReturnType | error | null)
  & ((query: searchChatRecentLocationMessagesOptional) => searchChatRecentLocationMessagesReturnType | error | null)
  & ((query: searchChatsOptional) => searchChatsReturnType | error | null)
  & ((query: searchChatsOnServerOptional) => searchChatsOnServerReturnType | error | null)
  & ((query: searchContactsOptional) => searchContactsReturnType | error | null)
  & ((query: searchHashtagsOptional) => searchHashtagsReturnType | error | null)
  & ((query: searchInstalledStickerSetsOptional) => searchInstalledStickerSetsReturnType | error | null)
  & ((query: searchMessagesOptional) => searchMessagesReturnType | error | null)
  & ((query: searchPublicChatOptional) => searchPublicChatReturnType | error | null)
  & ((query: searchPublicChatsOptional) => searchPublicChatsReturnType | error | null)
  & ((query: searchSecretMessagesOptional) => searchSecretMessagesReturnType | error | null)
  & ((query: searchStickerSetOptional) => searchStickerSetReturnType | error | null)
  & ((query: searchStickerSetsOptional) => searchStickerSetsReturnType | error | null)
  & ((query: searchStickersOptional) => searchStickersReturnType | error | null)
  & ((query: sendBotStartMessageOptional) => sendBotStartMessageReturnType | error | null)
  & ((query: sendCallDebugInformationOptional) => sendCallDebugInformationReturnType | error | null)
  & ((query: sendCallRatingOptional) => sendCallRatingReturnType | error | null)
  & ((query: sendChatActionOptional) => sendChatActionReturnType | error | null)
  & ((query: sendChatScreenshotTakenNotificationOptional) => sendChatScreenshotTakenNotificationReturnType | error | null)
  & ((query: sendChatSetTtlMessageOptional) => sendChatSetTtlMessageReturnType | error | null)
  & ((query: sendCustomRequestOptional) => sendCustomRequestReturnType | error | null)
  & ((query: sendInlineQueryResultMessageOptional) => sendInlineQueryResultMessageReturnType | error | null)
  & ((query: sendMessageOptional) => sendMessageReturnType | error | null)
  & ((query: sendMessageAlbumOptional) => sendMessageAlbumReturnType | error | null)
  & ((query: sendPaymentFormOptional) => sendPaymentFormReturnType | error | null)
  & ((query: setAccountTtlOptional) => setAccountTtlReturnType | error | null)
  & ((query: setAlarmOptional) => setAlarmReturnType | error | null)
  & ((query: setAuthenticationPhoneNumberOptional) => setAuthenticationPhoneNumberReturnType | error | null)
  & ((query: setBioOptional) => setBioReturnType | error | null)
  & ((query: setBotUpdatesStatusOptional) => setBotUpdatesStatusReturnType | error | null)
  & ((query: setChatClientDataOptional) => setChatClientDataReturnType | error | null)
  & ((query: setChatDraftMessageOptional) => setChatDraftMessageReturnType | error | null)
  & ((query: setChatMemberStatusOptional) => setChatMemberStatusReturnType | error | null)
  & ((query: setChatPhotoOptional) => setChatPhotoReturnType | error | null)
  & ((query: setChatTitleOptional) => setChatTitleReturnType | error | null)
  & ((query: setDatabaseEncryptionKeyOptional) => setDatabaseEncryptionKeyReturnType | error | null)
  & ((query: setFileGenerationProgressOptional) => setFileGenerationProgressReturnType | error | null)
  & ((query: setGameScoreOptional) => setGameScoreReturnType | error | null)
  & ((query: setInlineGameScoreOptional) => setInlineGameScoreReturnType | error | null)
  & ((query: setNameOptional) => setNameReturnType | error | null)
  & ((query: setNetworkTypeOptional) => setNetworkTypeReturnType | error | null)
  & ((query: setNotificationSettingsOptional) => setNotificationSettingsReturnType | error | null)
  & ((query: setOptionOptional) => setOptionReturnType | error | null)
  & ((query: setPasswordOptional) => setPasswordReturnType | error | null)
  & ((query: setPinnedChatsOptional) => setPinnedChatsReturnType | error | null)
  & ((query: setProfilePhotoOptional) => setProfilePhotoReturnType | error | null)
  & ((query: setProxyOptional) => setProxyReturnType | error | null)
  & ((query: setRecoveryEmailAddressOptional) => setRecoveryEmailAddressReturnType | error | null)
  & ((query: setStickerPositionInSetOptional) => setStickerPositionInSetReturnType | error | null)
  & ((query: setSupergroupDescriptionOptional) => setSupergroupDescriptionReturnType | error | null)
  & ((query: setSupergroupStickerSetOptional) => setSupergroupStickerSetReturnType | error | null)
  & ((query: setSupergroupUsernameOptional) => setSupergroupUsernameReturnType | error | null)
  & ((query: setTdlibParametersOptional) => setTdlibParametersReturnType | error | null)
  & ((query: setUserPrivacySettingRulesOptional) => setUserPrivacySettingRulesReturnType | error | null)
  & ((query: setUsernameOptional) => setUsernameReturnType | error | null)
  & ((query: terminateAllOtherSessionsOptional) => terminateAllOtherSessionsReturnType | error | null)
  & ((query: terminateSessionOptional) => terminateSessionReturnType | error | null)
  & ((query: testCallBytesOptional) => testCallBytesReturnType | error | null)
  & ((query: testCallEmptyOptional) => testCallEmptyReturnType | error | null)
  & ((query: testCallStringOptional) => testCallStringReturnType | error | null)
  & ((query: testCallVectorIntOptional) => testCallVectorIntReturnType | error | null)
  & ((query: testCallVectorIntObjectOptional) => testCallVectorIntObjectReturnType | error | null)
  & ((query: testCallVectorStringOptional) => testCallVectorStringReturnType | error | null)
  & ((query: testCallVectorStringObjectOptional) => testCallVectorStringObjectReturnType | error | null)
  & ((query: testGetDifferenceOptional) => testGetDifferenceReturnType | error | null)
  & ((query: testNetworkOptional) => testNetworkReturnType | error | null)
  & ((query: testSquareIntOptional) => testSquareIntReturnType | error | null)
  & ((query: testUseErrorOptional) => testUseErrorReturnType | error | null)
  & ((query: testUseUpdateOptional) => testUseUpdateReturnType | error | null)
  & ((query: toggleBasicGroupAdministratorsOptional) => toggleBasicGroupAdministratorsReturnType | error | null)
  & ((query: toggleChatIsPinnedOptional) => toggleChatIsPinnedReturnType | error | null)
  & ((query: toggleSupergroupInvitesOptional) => toggleSupergroupInvitesReturnType | error | null)
  & ((query: toggleSupergroupIsAllHistoryAvailableOptional) => toggleSupergroupIsAllHistoryAvailableReturnType | error | null)
  & ((query: toggleSupergroupSignMessagesOptional) => toggleSupergroupSignMessagesReturnType | error | null)
  & ((query: unblockUserOptional) => unblockUserReturnType | error | null)
  & ((query: unpinSupergroupMessageOptional) => unpinSupergroupMessageReturnType | error | null)
  & ((query: upgradeBasicGroupChatToSupergroupChatOptional) => upgradeBasicGroupChatToSupergroupChatReturnType | error | null)
  & ((query: uploadFileOptional) => uploadFileReturnType | error | null)
  & ((query: uploadStickerFileOptional) => uploadStickerFileReturnType | error | null)
  & ((query: validateOrderInfoOptional) => validateOrderInfoReturnType | error | null)
  & ((query: viewMessagesOptional) => viewMessagesReturnType | error | null)
  & ((query: viewTrendingStickerSetsOptional) => viewTrendingStickerSetsReturnType | error | null)
