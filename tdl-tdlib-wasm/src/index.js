// @flow

// Experimental.

import Debug from 'debug'

import type { ITDLibJSON, TDLibClient } from 'tdl-shared'
/*:: import { makeTDLibClient } from 'tdl-shared' */

const debug = Debug('tdl-tdlib-wasm')

type Module = {
  // TODO:
  cwrap(name: string, returns: any, args: any[]): Function
}

type TDFunctions = {
  td_create: () => TDLibClient,
  td_destroy: (TDLibClient) => void,
  td_send: (TDLibClient, string) => void,
  td_execute: (TDLibClient, string) => string,
  td_receive: (TDLibClient) => string,
  td_set_verbosity: (number) => void
}

const delay = x => new Promise(resolve => setTimeout(resolve, x))

export class TDLib implements ITDLibJSON {
  _tdlib: TDFunctions

  constructor (module: Module) {
    this._tdlib = {
      td_create: module.cwrap('td_create', 'number', []),
      td_destroy: module.cwrap('td_destroy', null, ['number']),
      td_send: module.cwrap('td_send', null, ['number', 'string']),
      td_execute: module.cwrap('td_execute', 'string', ['number', 'string']),
      td_receive: module.cwrap('td_receive', 'string', ['number']),
      td_set_verbosity: module.cwrap('td_set_verbosity', null, ['number'])
    }
  }

  async create (): Promise<TDLibClient> {
    debug('create')
    return /*:: makeTDLibClient */ (this._tdlib.td_create())
  }

  send (client: TDLibClient, query: Object): void {
    this._tdlib.td_send(client, JSON.stringify(query))
  }

  async receive (client: TDLibClient): Promise<Object | null> {
    const response = this._tdlib.td_receive(client)
    if (!response) {
      await delay(100)
      return null
    }
    return JSON.parse(response)
  }

  execute (client: TDLibClient, query: Object): Object | null {
    const response = this._tdlib.td_execute(client, JSON.stringify(query))
    if (!response) return null
    return JSON.parse(response)
  }

  destroy (client: TDLibClient): void {
    debug('destroy', client)
    this._tdlib.td_destroy(client)
  }

  setLogFilePath (/*:: path: string */): number {
    throw new Error('setLogFilePath doesn\'t supported')
  }

  setLogMaxFileSize (/*:: maxFileSize: number | string */): void {
    throw new Error('setLogMaxFileSize doesn\'t supported')
  }

  setLogVerbosityLevel (verbosity: number): void {
    debug('setLogVerbosityLevel', verbosity)
    this._tdlib.td_set_verbosity(verbosity)
  }

  setLogFatalErrorCallback (/*:: fn: null | (errorMessage: string) => void */): void {
    throw new Error('setLogFatalErrorCallback doesn\'t supported')
  }
}
