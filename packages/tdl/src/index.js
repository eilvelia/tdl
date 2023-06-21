// @flow

import path from 'path'
import Debug from 'debug'
import { Client, TdlError } from './client'
import { loadAddon } from './addon'

const debug = Debug('tdl')

let tdjsonAddon = null

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
  libPrefix?: string,
  verbosityLevel?: number | 'default'
}

// TODO: Use Required<T> from new Flow versions
type StrictTDLibConfiguration = {
  tdjson: string,
  libPrefix: string,
  verbosityLevel: number | 'default'
}

const cfg: StrictTDLibConfiguration = {
  tdjson: defaultLibraryFile,
  libPrefix: '',
  verbosityLevel: 2
}

export function configure (opts: TDLibConfiguration = {}): void {
  if (opts.tdjson) cfg.tdjson = opts.tdjson
  if (opts.libPrefix) cfg.libPrefix = opts.libPrefix
  if (opts.verbosityLevel) cfg.verbosityLevel = opts.verbosityLevel
}

export function init (): void {
  if (tdjsonAddon) return
  debug('Initializing the node addon')
  const lib = path.join(cfg.libPrefix, cfg.tdjson)
  tdjsonAddon = loadAddon(lib)
  if (cfg.verbosityLevel !== 'default') {
    debug('Executing setLogVerbosityLevel', cfg.verbosityLevel)
    tdjsonAddon.execute(null, {
      '@type': 'setLogVerbosityLevel',
      new_verbosity_level: cfg.verbosityLevel
    })
  }
}

export function execute (request: any): void {
  if (!tdjsonAddon) {
    init()
    if (!tdjsonAddon) throw Error('TDLib is uninitialized')
  }
  tdjsonAddon.execute(null, request)
}

export function createClient (opts: any): Client {
  if (!tdjsonAddon) {
    init()
    if (!tdjsonAddon) throw Error('TDLib is uninitialized')
  }
  return new Client(tdjsonAddon, opts)
}

// TODO: We could possibly export an unsafe/unstable getRawTdjson() : Tdjson
// function that allows to access underlying tdjson functions

export { TdlError }

// For backward compatibility only.
export { Client, Client as TDL, Client as Tdl }
