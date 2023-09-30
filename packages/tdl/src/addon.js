// @flow

import path from 'path'
import Debug from 'debug'
import nodeGypBuild from 'node-gyp-build'
import type { TdjsonClient, Tdjson } from './client'

const debug = Debug('tdl:addon')

let addon: any

function create (): TdjsonClient {
  debug('tdjson create')
  return addon.td_client_create()
}

function send (client: TdjsonClient, query: Object): void {
  addon.td_client_send(client, JSON.stringify(query))
}

// async function receive (client: TdjsonClient, timeout: number): Promise<Object | null> {
//   const res = await addon.td_client_receive(client, timeout)
//   if (!res) return null
//   return JSON.parse(res)
// }

function receive (client: TdjsonClient, timeout: number): Promise<Object | null> {
  return new Promise((resolve, reject) => {
    addon.td_client_receive(client, timeout, (err, res) => {
      if (err) return reject(err)
      if (!res) return resolve(null)
      resolve(JSON.parse(res))
    })
  })
}

function execute (client: null | TdjsonClient, query: Object): Object | null {
  const res = addon.td_client_execute(client, JSON.stringify(query))
  if (!res) return null
  return JSON.parse(res)
}

function destroy (client: TdjsonClient): void {
  debug('tdjson destroy')
  addon.td_client_destroy(client)
}

// Deprecated in TDLib v1.8.0.
function setLogFatalErrorCallback (fn: null | (errorMessage: string) => void): void {
  addon.td_set_fatal_error_callback(fn)
}

function setLogMessageCallback (
  maxVerbosityLevel: number,
  callback: null | (verbosityLevel: number, message: string) => void
): void {
  addon.td_set_message_callback(maxVerbosityLevel, callback)
}

export function loadAddon (libraryFile: string): Tdjson {
  if (addon != null)
    throw Error('The node addon is already loaded')
  debug('Loading the node addon')
  addon = nodeGypBuild(path.join(__dirname, '..'))
  addon.load_tdjson(libraryFile)
  return {
    create,
    send,
    receive,
    execute,
    destroy,
    setLogFatalErrorCallback,
    setLogMessageCallback
  }
}
