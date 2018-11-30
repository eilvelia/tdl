// @flow

import ffi from 'ffi-napi'
import ref from 'ref-napi'
import Debug from 'debug'

import type { TDLibClient, ITDLibJSON } from 'tdl-shared'

const debug = Debug('tdl-tdlib-ffi')

const buildQuery = (query: Object) => {
  const buffer = Buffer.from(JSON.stringify(query) + '\0', 'utf-8')
  // $FlowOff
  buffer.type = ref.types.CString
  return buffer
}

/* eslint-disable no-multi-spaces, key-spacing, comma-spacing */

const defaultLibraryName = process.platform === 'win32' ? 'tdjson' : 'libtdjson'

export class TDLib implements ITDLibJSON {
  +_tdlib: Object

  constructor (libraryFile: string = defaultLibraryName) {
    debug('constructor', libraryFile)

    this._tdlib = ffi.Library(
      libraryFile,
      {
        'td_json_client_create'          : ['pointer', []],
        'td_json_client_send'            : ['void'   , ['pointer', 'string']],
        'td_json_client_receive'         : ['string' , ['pointer', 'double']],
        'td_json_client_execute'         : ['string' , ['pointer', 'string']],
        'td_json_client_destroy'         : ['void'   , ['pointer']],
        'td_set_log_file_path'           : ['int'    , ['string']],
        'td_set_log_max_file_size'       : ['void'   , ['int64']],
        'td_set_log_verbosity_level'     : ['void'   , ['int']],
        'td_set_log_fatal_error_callback': ['void'   , ['pointer']]
      })
  }

  create (): Promise<TDLibClient> {
    debug('create')
    return new Promise((resolve, reject) => {
      this._tdlib.td_json_client_create.async((err, client) => {
        if (err) return reject(err)
        resolve(client)
      })
    })
  }

  send (client: TDLibClient, query: Object): Promise<void> {
    return new Promise((resolve, reject) => {
      this._tdlib.td_json_client_send.async(client, buildQuery(query), err => {
        if (err) return reject(err)
        resolve()
      })
    })
  }

  receive (client: TDLibClient, timeout: number): Promise<Object | null> {
    return new Promise((resolve, reject) => {
      this._tdlib.td_json_client_receive.async(client, timeout, (err, res) => {
        if (err) return reject(err)
        if (!res) return resolve(null)
        resolve(JSON.parse(res))
      })
    })
  }

  execute (client: TDLibClient, query: Object): Object | null {
    const res = this._tdlib.td_json_client_execute(client, buildQuery(query))
    if (!res) return null
    return JSON.parse(res)
  }

  destroy (client: TDLibClient): void {
    debug('destroy')
    this._tdlib.td_json_client_destroy(client)
  }

  setLogFilePath (path: string): number {
    debug('setLogFilePath', path)
    return this._tdlib.td_set_log_file_path(path)
  }

  setLogMaxFileSize (maxFileSize: number | string): void {
    debug('setLogMaxFileSize', maxFileSize)
    this._tdlib.td_set_log_max_file_size(maxFileSize)
  }

  setLogVerbosityLevel (verbosity: number): void {
    debug('setLogVerbosityLevel', verbosity)
    this._tdlib.td_set_log_verbosity_level(verbosity)
  }

  setLogFatalErrorCallback (fn: null | (errorMessage: string) => void): void {
    if (fn == null) {
      this._tdlib.td_set_log_fatal_error_callback(null)
    } else {
      this._tdlib.td_set_log_fatal_error_callback(
        ffi.Callback('void', ['string'], fn))
    }
  }
}
