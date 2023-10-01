// @flow

import path from 'path'
import nodeGypBuild from 'node-gyp-build'
import type { TdjsonClient, Tdjson } from './client'

const packageDir = path.join(__dirname, '..')

let loaded = false

export function loadAddon (libraryFile: string): Tdjson {
  if (loaded) throw Error('The node addon is already loaded')
  const addon = nodeGypBuild(packageDir)
  addon.loadTdjson(libraryFile)
  loaded = true
  function send (client: TdjsonClient, query: {...}): void {
    addon.send(client, JSON.stringify(query))
  }
  function receive (client: TdjsonClient, timeout: number): Promise<{...} | null> {
    return new Promise((resolve, reject) => {
      addon.receive(client, timeout, (err, res) => {
        if (err) return reject(err)
        if (!res) return resolve(null)
        resolve(JSON.parse(res))
      })
    })
  }
  function execute (client: null | TdjsonClient, query: {...}): {...} | null {
    const res = addon.execute(client, JSON.stringify(query))
    if (!res) return null
    return JSON.parse(res)
  }
  return {
    create: addon.create,
    send,
    receive,
    execute,
    destroy: addon.destroy,
    setLogFatalErrorCallback: addon.setLogFatalErrorCallback,
    setLogMessageCallback: addon.setLogMessageCallback
  }
}
