import * as path from 'node:path'
import nodeGypBuild from 'node-gyp-build'

const packageDir = path.join(__dirname, '..')

export type TdjsonOldClient = { readonly _TdjsonClientBrand: void }

/** Old tdjson interface */
export type TdjsonOld = {
  create(receiveTimeout: number): TdjsonOldClient,
  destroy(client: TdjsonOldClient): void,
  execute(client: null | TdjsonOldClient, request: string): string,
  /** Do not call receive again until the promise is completed. */
  receive(client: TdjsonOldClient): Promise<string | null>,
  send(client: TdjsonOldClient, request: string): void
}

/** New tdjson interface */
export type TdjsonNew = {
  init(receiveTimeout: number): void,
  ref(): void,
  /** Allow the process to exit. */
  unref(): void,
  createClientId(): number,
  send(clientId: number, request: string): void,
  /** Do not call receive again until the promise is completed. */
  receive(): Promise<string | null>,
  execute(request: string): string
}

export type Tdjson = {
  tdold: TdjsonOld,
  tdnew: TdjsonNew,
  setLogMessageCallback(
    maxVerbosityLevel: number,
    callback: null | ((verbosityLevel: number, message: string) => void)
  ): void,
  /** td_set_log_fatal_error_callback is deprecated in TDLib v1.8.0. */
  setLogFatalErrorCallback(fn: null | ((errorMessage: string) => void)): void
}

let loaded = false

export function loadAddon (libraryFile: string): Tdjson {
  if (loaded) throw Error('The node addon is already loaded')
  const addon: any = nodeGypBuild(packageDir)
  addon.loadTdjson(libraryFile)
  loaded = true
  return {
    tdold: {
      create: addon.tdoCreate,
      send: addon.tdoSend,
      receive: addon.tdoReceive,
      execute: addon.tdoExecute,
      destroy: addon.tdoDestroy
    },
    tdnew: {
      init: addon.tdnInit,
      ref: addon.tdnRef,
      unref: addon.tdnUnref,
      createClientId: addon.tdnCreateClientId,
      send: addon.tdnSend,
      receive: addon.tdnReceive,
      execute: addon.tdnExecute
    },
    setLogMessageCallback: addon.setLogMessageCallback,
    setLogFatalErrorCallback: addon.setLogFatalErrorCallback
  }
}
