import { TDLibClient, ITDLibJSON } from 'tdl-shared'

export class TDLib implements ITDLibJSON {
  constructor(module: any)
  getName(): string
  create(): TDLibClient
  destroy(client: TDLibClient): void
  execute(client: null | TDLibClient, query: Object): Object | null
  receive(client: TDLibClient, timeout: number): Promise<Object | null>
  send(client: TDLibClient, query: Object): void
  setLogFilePath(path: string): number
  setLogMaxFileSize(maxFileSize: number | string): void
  setLogVerbosityLevel(verbosity: number): void
  setLogFatalErrorCallback(fn: null | ((errorMessage: string) => void)): void
}
