// @flow

import path from 'path'
import Debug from 'debug'
import { Client, TdlError, type Tdjson } from './client'
import { loadAddon } from './addon'
import { deepRenameKey } from './util'
import type { Execute } from 'tdlib-types'

const debug = Debug('tdl')

let tdjsonAddon: Tdjson | null = null

// TODO: Should we export this?
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

export type TDLibConfiguration = {
  tdjson?: string,
  libdir?: string,
  verbosityLevel?: number | 'default',
  receiveTimeout?: number,
  useNewTdjsonInterface?: boolean
}

// TODO: Use Required<T> from new Flow versions
type StrictTDLibConfiguration = {
  tdjson: string,
  libdir: string,
  verbosityLevel: number | 'default',
  receiveTimeout: number,
  useNewTdjsonInterface: boolean
}

const defaultReceiveTimeout = 10

const cfg: StrictTDLibConfiguration = {
  tdjson: defaultLibraryFile,
  libdir: '',
  verbosityLevel: 2,
  receiveTimeout: defaultReceiveTimeout,
  useNewTdjsonInterface: false
}

export function configure (opts: TDLibConfiguration = {}): void {
  if (tdjsonAddon)
    throw Error('TDLib is already initialized; too late to configure')
  if (opts.tdjson != null) cfg.tdjson = opts.tdjson
  if (opts.libdir != null) cfg.libdir = opts.libdir
  if (opts.verbosityLevel != null) cfg.verbosityLevel = opts.verbosityLevel
  if (opts.receiveTimeout != null) cfg.receiveTimeout = opts.receiveTimeout
  if (opts.useNewTdjsonInterface != null) cfg.useNewTdjsonInterface = opts.useNewTdjsonInterface
}

export function init (): void {
  if (tdjsonAddon) return
  debug('Initializing the node addon')
  const lib = path.join(cfg.libdir, cfg.tdjson)
  tdjsonAddon = loadAddon(lib)
  if (cfg.verbosityLevel !== 'default') {
    debug('Executing setLogVerbosityLevel', cfg.verbosityLevel)
    const request = JSON.stringify({
      '@type': 'setLogVerbosityLevel',
      new_verbosity_level: cfg.verbosityLevel
    })
    if (cfg.useNewTdjsonInterface) tdjsonAddon.tdn.execute(request)
    else tdjsonAddon.execute(null, request)
  }
}

export const execute: Execute = function execute (request: any) {
  if (!tdjsonAddon) {
    init()
    if (!tdjsonAddon) throw Error('TDLib is uninitialized')
  }
  debug('execute', request)
  request = JSON.stringify(deepRenameKey('_', '@type', request))
  const response = cfg.useNewTdjsonInterface
    ? tdjsonAddon.tdn.execute(request)
    : tdjsonAddon.execute(null, request)
  if (response == null) return null
  return deepRenameKey('@type', '_', JSON.parse(response))
}

export function setLogMessageCallback (
  maxVerbosityLevel: number,
  callback: null | ((verbosityLevel: number, message: string) => void)
): void {
  if (!tdjsonAddon) {
    init()
    if (!tdjsonAddon) throw Error('TDLib is uninitialized')
  }
  tdjsonAddon.setLogMessageCallback(maxVerbosityLevel, callback)
}

const clientMap: Map<number, Client> = new Map()
let tdnInitialized = false
let runningReceiveLoop = false

// Loop for the new tdjson interface
async function receiveLoop () {
  debug('Starting receive loop')
  runningReceiveLoop = true
  try {
    while (true) {
      if (clientMap.size < 1) {
        debug('Stopping receive loop')
        break
      }
      // $FlowIgnore[incompatible-use]
      const responseString = await tdjsonAddon.tdn.receive()
      if (responseString == null) {
        debug('Receive loop: got empty response')
        continue
      }
      const res = JSON.parse(responseString)
      const clientId = res['@client_id']
      const client = clientId != null ? clientMap.get(clientId) : undefined
      if (client == null) {
        debug(`Cannot find client_id ${clientId}`)
        continue
      }
      delete res['@client_id'] // Note that delete is somewhat slow
      client.handleReceive(res)
    }
  } finally {
    runningReceiveLoop = false
  }
}

export function createClient (opts: any): Client {
  if (!tdjsonAddon) {
    init()
    if (!tdjsonAddon) throw Error('TDLib is uninitialized')
  }
  if (cfg.useNewTdjsonInterface) {
    if (!tdnInitialized) {
      tdjsonAddon.tdn.init(cfg.receiveTimeout)
      tdnInitialized = true
    }
    const onClose = () => {
      debug(`Deleting client_id ${clientId}`)
      clientMap.delete(clientId)
    }
    const client = new Client(tdjsonAddon, opts, { useTdn: true, onClose })
    const clientId = client.getClientId()
    clientMap.set(clientId, client)
    if (!runningReceiveLoop)
      receiveLoop()
    return client
  }
  if (cfg.receiveTimeout !== defaultReceiveTimeout)
    return new Client(tdjsonAddon, { ...opts, receiveTimeout: cfg.receiveTimeout })
  return new Client(tdjsonAddon, opts)
}

// TODO: We could possibly export an unsafe/unstable getRawTdjson() : Tdjson
// function that allows to access underlying tdjson functions

export { TdlError }

// For backward compatibility only.
export { Client, Client as TDL, Client as Tdl }
