// @flow

/* eslint-disable no-multi-spaces, key-spacing, comma-spacing */

import ffi from 'ffi-napi'
import ref from 'ref-napi'
import Debug from 'debug'

export opaque type TDLibClient = $ReadOnly<Object>

const debug = Debug('tdl:tdlib')

const buildQuery = (query: Object) => {
  const buffer = Buffer.from(JSON.stringify(query) + '\0', 'utf-8')
  // $FlowFixMe
  buffer.type = ref.types.CString
  return buffer
}

export class TDLib {
  +tdlib: Object

  constructor (libraryFile: string) {
    debug('binaryPath', libraryFile)

    this.tdlib = ffi.Library(
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
      this.tdlib.td_json_client_create.async((err, client) => {
        if (err) return reject(err)
        resolve(client)
      })
    })
  }

  send (client: TDLibClient, query: Object): Promise<null> {
    return new Promise((resolve, reject) => {
      this.tdlib.td_json_client_send.async(client, buildQuery(query), (err, response) => {
        if (err) return reject(err)
        resolve(response)
      })
    })
  }

  receive (client: TDLibClient, timeout: number): Promise<Object | null> {
    return new Promise((resolve, reject) => {
      this.tdlib.td_json_client_receive.async(client, timeout, (err, response) => {
        if (err) return reject(err)
        if (!response) return resolve(null)
        resolve(JSON.parse(response))
      })
    })
  }

  execute (client: TDLibClient, query: Object): Object | null {
    const response = this.tdlib.td_json_client_execute(client, buildQuery(query))
    if (!response) return null
    return JSON.parse(response)
  }

  destroy (client: TDLibClient): void {
    debug('destroy')
    this.tdlib.td_json_client_destroy(client)
  }

  setLogFilePath (path: string): number {
    debug('setLogFilePath', path)
    return this.tdlib.td_set_log_file_path(path)
  }

  setLogMaxFileSize (maxFileSize: number | string): void {
    debug('setLogMaxFileSize', maxFileSize)
    this.tdlib.td_set_log_max_file_size(maxFileSize)
  }

  setLogVerbosityLevel (verbosity: number): void {
    debug('setLogVerbosityLevel', verbosity)
    this.tdlib.td_set_log_verbosity_level(verbosity)
  }

  setLogFatalErrorCallback (fn: (errorMessage: string) => void): void {
    this.tdlib.td_set_log_fatal_error_callback(
      ffi.Callback('void', ['string'], fn))
  }
}
