// @flow

import type { tdlibParameters$Input } from 'tdlib-types'

export type TDLibParameters = $Rest<tdlibParameters$Input, {| _: 'tdlibParameters' |}>

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
  databaseDirectory: string,
  filesDirectory: string,
  databaseEncryptionKey: string,
  verbosityLevel: number,
  receiveTimeout: number,
  skipOldUpdates: boolean,
  useTestDc: boolean,
  useMutableRename: boolean,
  useDefaultVerbosityLevel: boolean,
  disableAuth: boolean,
  tdlibParameters: TDLibParameters
}
