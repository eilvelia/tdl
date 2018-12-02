// @flow

import Debug from 'debug'

import type { TDLibClient, ITDLibJSON } from 'tdl-shared'

const debug = Debug('tdl-tdlib-addon')

export class TDLib implements ITDLibJSON {
  +_addon: Object

  constructor (path: string = '../build/Release/td.node') {
    debug('constructor')
    // $FlowOff
    this._addon = require(path)
    // console.log(this._addon)
  }

  async create (): Promise<TDLibClient> {
    debug('create')
    return this._addon.td_client_create()
  }

  async send (client: TDLibClient, query: Object): Promise<void> {
    this._addon.td_client_send(client, JSON.stringify(query))
  }

  // async receive (client: TDLibClient, timeout: number): Promise<Object | null> {
  //   const res = await this._addon.td_client_receive(client, timeout)
  //   if (!res) return null
  //   return JSON.parse(res)
  // }

  receive (client: TDLibClient, timeout: number): Promise<Object | null> {
    return new Promise((resolve, reject) => {
      this._addon.td_client_receive(client, timeout, (err, res) => {
        if (err) return reject(err)
        if (!res) return resolve(null)
        resolve(JSON.parse(res))
      })
    })
  }

  execute (client: TDLibClient, query: Object): Object | null {
    const res = this._addon.td_client_execute(client, JSON.stringify(query))
    if (!res) return null
    return JSON.parse(res)
  }

  destroy (client: TDLibClient): void {
    debug('destroy')
    this._addon.td_client_destroy(client)
  }

  setLogFilePath (path: string): number {
    debug('setLogFilePath', path)
    return this._addon.td_set_file_path(path)
  }

  setLogMaxFileSize (maxFileSize: number | string): void {
    debug('setLogMaxFileSize', maxFileSize)
    this._addon.td_set_max_file_size(maxFileSize.toString())
  }

  setLogVerbosityLevel (verbosity: number): void {
    debug('setLogVerbosityLevel', verbosity)
    this._addon.td_set_verbosity_level(verbosity)
  }

  setLogFatalErrorCallback (fn: null | (errorMessage: string) => void): void {
    if (fn == null)
      this._addon.remove_fatal_callback(null)
    else
      throw new Error('setLogFatalErrorCallback is not supported')
  }
}
