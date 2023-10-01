// @flow

import path from 'path'
import nodeGypBuild from 'node-gyp-build'
import type { Tdjson } from './client'

const packageDir = path.join(__dirname, '..')

let loaded = false

export function loadAddon (libraryFile: string): Tdjson {
  if (loaded) throw Error('The node addon is already loaded')
  const addon = nodeGypBuild(packageDir)
  addon.loadTdjson(libraryFile)
  loaded = true
  return {
    create: addon.create,
    send: addon.send,
    receive: addon.receive,
    execute: addon.execute,
    destroy: addon.destroy,
    setLogFatalErrorCallback: addon.setLogFatalErrorCallback,
    setLogMessageCallback: addon.setLogMessageCallback
  }
}
