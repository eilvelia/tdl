// @flow

import { Client } from './client'
import { TDLib } from './tdlib'

export {
  Client,
  Client as TDL,
  Client as Tdl,
  TDLib
}

export default Client

export type { TDLibClient } from './tdlib'

export type {
  ConfigType,
  StrictConfigType,
  LoginDetails,
  StrictLoginDetails,
  TDLibParameters,
  LoginUser,
  LoginBot,
  TDLibInterface
} from './types'

export type {
  On,
  Emit
} from './client'
