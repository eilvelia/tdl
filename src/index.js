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

export type {
  ConfigType,
  StrictConfigType,
  LoginDetails,
  StrictLoginDetails
} from './types'

export type {
  On,
  Emit
} from './Client'
