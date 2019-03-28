import { TDLibClient, ITDLibJSON } from 'tdl-shared'

export class TDLib implements ITDLibJSON {
  constructor(libraryFile?: string)
  create(): Promise<TDLibClient>
  destroy(client: TDLibClient): void
  execute(client: TDLibClient, query: Object): Object | null
  receive(client: TDLibClient, timeout: number): Promise<Object | null>
  send(client: TDLibClient, query: Object): void
  setLogFilePath(path: string): number
  setLogMaxFileSize(maxFileSize: number | string): void
  setLogVerbosityLevel(verbosity: number): void
  setLogFatalErrorCallback(fn: null | ((errorMessage: string) => void)): void
}
