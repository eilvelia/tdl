// @flow

import Debug from 'debug'

import type { TDLibClient, ITDLibJSON } from 'tdl-shared'

const debug = Debug('tdl-tdlib-addon')

const defaultLibraryFile = (() => {
  switch (process.platform) {
    case 'win32':
      return 'tdjson.dll'
    case 'darwin':
      return 'libtdjson.dylib'
    default:
      return 'libtdjson.so'
  }
})()

export class TDLib implements ITDLibJSON {
  +_addon: Object

  constructor (
    libraryFile: string = defaultLibraryFile,
    addonPath: string = '../build/Release/td.node'
  ) {
    debug('constructor')
    // $FlowOff
    this._addon = require(addonPath)
    // console.log(this._addon)
    this._addon.load_tdjson(libraryFile)
  }

  async create (): Promise<TDLibClient> {
    debug('create')
    return this._addon.td_client_create()
  }

  send (client: TDLibClient, query: Object): void {
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

  execute (client: null | TDLibClient, query: Object): Object | null {
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
    this._addon.td_set_fatal_error_callback(fn)
  }
}
