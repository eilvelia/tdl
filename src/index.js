// @flow

import { Client } from './Client'
import { TDLib } from './TDLib'

export {
  Client,
  Client as TDL,
  Client as Tdl,
  TDLib
}

export default Client

export type { TDLibClient } from './TDLib'

export type {
  ConfigType,
  StrictConfigType,
  LoginDetails,
  StrictLoginDetails,
  TDLibParameters,
  LoginUser,
  LoginBot
} from './types'

export type {
  On,
  Emit
} from './Client'
