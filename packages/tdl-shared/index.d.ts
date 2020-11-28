
export interface TDLibClient { readonly _TDLibClientBrand: void }
export declare function makeTDLibClient (x: any): TDLibClient

export interface ITDLibJSON {
  getName(): string;
  create(): TDLibClient;
  destroy(client: TDLibClient): void;
  execute(client: null | TDLibClient, query: Object): Object | null;
  receive(client: TDLibClient, timeout: number): Promise<Object | null>;
  send(client: TDLibClient, query: Object): void;
  setLogFatalErrorCallback(fn: null | ((errorMessage: string) => void)): void;
}

export interface IAsyncTDLibJSON {
  getName(): string;
  create(): Promise<TDLibClient>;
  destroy(client: TDLibClient): Promise<void>;
  execute(client: null | TDLibClient, query: Object): Promise<Object | null>;
  receive(client: TDLibClient, timeout: number): Promise<Object | null>;
  send(client: TDLibClient, query: Object): Promise<void>;
  setLogFatalErrorCallback(fn: null | ((errorMessage: string) => void)): Promise<void>;
}
