import { TDLibClient, ITDLibJSON } from 'tdl-shared'

export class TDLib implements ITDLibJSON {
  constructor(libraryFile?: string, addonPath?: string)
  getName(): string
  create(): TDLibClient
  destroy(client: TDLibClient): void
  execute(client: null | TDLibClient, query: Object): Object | null
  receive(client: TDLibClient, timeout: number): Promise<Object | null>
  send(client: TDLibClient, query: Object): void
  setLogFatalErrorCallback(fn: null | ((errorMessage: string) => void)): void
}

export const defaultLibraryFile: string
