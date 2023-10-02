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
  verbosityLevel?: number | 'default'
}

// TODO: Use Required<T> from new Flow versions
type StrictTDLibConfiguration = {
  tdjson: string,
  libdir: string,
  verbosityLevel: number | 'default'
}

const cfg: StrictTDLibConfiguration = {
  tdjson: defaultLibraryFile,
  libdir: '',
  verbosityLevel: 2
}

export function configure (opts: TDLibConfiguration = {}): void {
  if (tdjsonAddon)
    throw Error('TDLib is already initialized; too late to configure')
  if (opts.tdjson != null) cfg.tdjson = opts.tdjson
  if (opts.libdir != null) cfg.libdir = opts.libdir
  if (opts.verbosityLevel != null) cfg.verbosityLevel = opts.verbosityLevel
}

export function init (): void {
  if (tdjsonAddon) return
  debug('Initializing the node addon')
  const lib = path.join(cfg.libdir, cfg.tdjson)
  tdjsonAddon = loadAddon(lib)
  if (cfg.verbosityLevel !== 'default') {
    debug('Executing setLogVerbosityLevel', cfg.verbosityLevel)
    tdjsonAddon.execute(null, {
      '@type': 'setLogVerbosityLevel',
      new_verbosity_level: cfg.verbosityLevel
    })
  }
}

export const execute: Execute = function execute (request: any) {
  if (!tdjsonAddon) {
    init()
    if (!tdjsonAddon) throw Error('TDLib is uninitialized')
  }
  debug('execute', request)
  const tdRequest = deepRenameKey('_', '@type', request)
  const tdResponse = tdjsonAddon.execute(null, tdRequest)
  if (tdResponse == null) return null
  return deepRenameKey('@type', '_', tdResponse)
}

export function createClient (opts: any): Client {
  if (!tdjsonAddon) {
    init()
    if (!tdjsonAddon) throw Error('TDLib is uninitialized')
  }
  return new Client(tdjsonAddon, opts)
}

export function setLogMessageCallback (
  maxVerbosityLevel: number,
  callback: null | (verbosityLevel: number, message: string) => void
): void {
  if (!tdjsonAddon) {
    init()
    if (!tdjsonAddon) throw Error('TDLib is uninitialized')
  }
  tdjsonAddon.setLogMessageCallback(maxVerbosityLevel, callback)
}

// TODO: We could possibly export an unsafe/unstable getRawTdjson() : Tdjson
// function that allows to access underlying tdjson functions

export { TdlError }

// For backward compatibility only.
export { Client, Client as TDL, Client as Tdl }
