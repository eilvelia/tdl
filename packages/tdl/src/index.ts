import path from 'node:path'
import Debug from 'debug'
import { Client, TDLibError, UnknownError, type ClientOptions } from './client'
import { loadAddon, type Tdjson } from './addon'
import { deepRenameKey } from './util'
import type { Execute } from 'tdlib-types'

const debug = Debug('tdl')

let tdjsonAddon: Tdjson | null = null

const defaultLibraryFile = (() => {
  switch (process.platform) {
    case 'win32': return 'tdjson.dll'
    case 'darwin': return 'libtdjson.dylib'
    default: return 'libtdjson.so'
  }
})()

export type TDLibConfiguration = {
  tdjson?: string,
  libdir?: string,
  verbosityLevel?: number | 'default',
  receiveTimeout?: number,
  useOldTdjsonInterface?: boolean
}

const cfg: Required<TDLibConfiguration> = {
  tdjson: defaultLibraryFile,
  libdir: '',
  verbosityLevel: 1,
  receiveTimeout: 10,
  useOldTdjsonInterface: false
}

export function configure (opts: TDLibConfiguration = {}): void {
  if (tdjsonAddon)
    throw Error('TDLib is already initialized; too late to configure')
  if (opts.tdjson != null) cfg.tdjson = opts.tdjson
  if (opts.libdir != null) cfg.libdir = opts.libdir
  if (opts.verbosityLevel != null) cfg.verbosityLevel = opts.verbosityLevel
  if (opts.receiveTimeout != null) cfg.receiveTimeout = opts.receiveTimeout
  if (opts.useOldTdjsonInterface != null) cfg.useOldTdjsonInterface = opts.useOldTdjsonInterface
}

export function init (): void {
  if (tdjsonAddon != null) return
  debug('Initializing the node addon')
  const lib = path.join(cfg.libdir, cfg.tdjson)
  tdjsonAddon = loadAddon(lib)
  if (cfg.verbosityLevel !== 'default') {
    debug('Executing setLogVerbosityLevel', cfg.verbosityLevel)
    const request = JSON.stringify({
      '@type': 'setLogVerbosityLevel',
      new_verbosity_level: cfg.verbosityLevel
    })
    const response = !cfg.useOldTdjsonInterface
      ? tdjsonAddon.tdnew.execute(request)
      : tdjsonAddon.tdold.execute(null, request)
    debug('setLogVerbosityLevel response:', response)
  }
}

export const execute: Execute = function execute (request: any): any {
  if (tdjsonAddon == null) {
    init()
    if (tdjsonAddon == null) throw Error('TDLib is uninitialized')
  }
  debug('execute', request)
  request = JSON.stringify(deepRenameKey('_', '@type', request))
  const response = !cfg.useOldTdjsonInterface
    ? tdjsonAddon.tdnew.execute(request)
    : tdjsonAddon.tdold.execute(null, request)
  return deepRenameKey('@type', '_', JSON.parse(response))
}

export function setLogMessageCallback (
  maxVerbosityLevel: number,
  callback: null | ((verbosityLevel: number, message: string) => void)
): void {
  if (tdjsonAddon == null) {
    init()
    if (tdjsonAddon == null) throw Error('TDLib is uninitialized')
  }
  tdjsonAddon.setLogMessageCallback(maxVerbosityLevel, callback)
}

/** @deprecated Deprecated in TDLib v1.8.0. */
export function setLogFatalErrorCallback (
  callback: null | ((message: string) => void)
): void {
  if (tdjsonAddon == null) {
    init()
    if (tdjsonAddon == null) throw Error('TDLib is uninitialized')
  }
  tdjsonAddon.setLogFatalErrorCallback(callback)
}

const clientMap: Map<number, Client> = new Map()
let tdnInitialized = false
let runningReceiveLoop = false

// Loop for the new tdjson interface
async function receiveLoop () {
  debug('Starting tdn receive loop')
  if (tdjsonAddon == null) throw new Error('TDLib is uninitialized')
  runningReceiveLoop = true
  try {
    while (true) {
      if (clientMap.size < 1) {
        debug('Stopping receive loop')
        break
      }
      const responseString = await tdjsonAddon.tdnew.receive()
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

function createAnyClient (opts: ClientOptions, bare = false): Client {
  if (tdjsonAddon == null) {
    init()
    if (tdjsonAddon == null) throw Error('TDLib is uninitialized')
  }
  const managingOpts = {
    bare,
    receiveTimeout: cfg.receiveTimeout,
    executeFunc: execute,
    useOldTdjsonInterface: false
  }
  if (cfg.useOldTdjsonInterface) {
    const tdoManaging = { ...managingOpts, useOldTdjsonInterface: true }
    return new Client(tdjsonAddon, tdoManaging, opts)
  }
  if (!tdnInitialized) {
    tdjsonAddon.tdnew.init(cfg.receiveTimeout)
    tdnInitialized = true
  }
  const client = new Client(tdjsonAddon, managingOpts, opts)
  const clientId = client.getClientId()
  clientMap.set(clientId, client)
  client.once('close', () => {
    debug(`Deleting client_id ${clientId}`)
    clientMap.delete(clientId)
  })
  if (!runningReceiveLoop)
    receiveLoop()
  return client
}

export function createClient (opts: ClientOptions): Client {
  return createAnyClient(opts)
}

export function createBareClient (): Client {
  return createAnyClient({}, true)
}

export { TDLibError, UnknownError }

// TODO: We could possibly export an unsafe/unstable getRawTdjson() : Tdjson
// function that allows to access underlying tdjson functions
