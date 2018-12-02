import { TDLibClient, ITDLibJSON } from 'tdl-shared'

export class TDLib implements ITDLibJSON {
  constructor(path?: string)
  create(): Promise<TDLibClient>
  destroy(client: TDLibClient): undefined
  execute(client: TDLibClient, query: Object): Object | null
  receive(client: TDLibClient, timeout: number): Promise<Object | null>
  send(client: TDLibClient, query: Object): Promise<undefined>
  setLogFilePath(path: string): number
  setLogMaxFileSize(maxFileSize: number | string): undefined
  setLogVerbosityLevel(verbosity: number): undefined
  setLogFatalErrorCallback(fn: null | ((errorMessage: string) => void)): undefined
}
