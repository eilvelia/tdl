## TDLib API

Low-level TDLib API.

```js
const { TDLib } = require('tdl')
```

---

##### `constructor: (libraryFile: string) => TDLib`

```js
const tdlib = new TDLib('/Users/user/testproject/libtdjson')
```

##### `create: () => Promise<TDLibClient>`

```js
const client = await tdlib.create()
```

[Docs](https://core.telegram.org/tdlib/docs/td__json__client_8h.html#a45cd6979ada11b7690d9dcb1ddc841a0)

##### `send: (client: TDLibClient, query: Object) => Promise<void>`

[Docs](https://core.telegram.org/tdlib/docs/classtd_1_1_client.html#a1a6f9cbe607ce76ff869493833c1224d)

##### `receive: (client: TDLibClient, timeout: number) => Promise<Object | null>`

[Docs](https://core.telegram.org/tdlib/docs/classtd_1_1_client.html#a128bb17ada87f4a1522f56428706cfd6)

##### `execute: (client: TDLibClient, query: Object) => Object | null`

[Docs](https://core.telegram.org/tdlib/docs/classtd_1_1_client.html#a6500da45fe520151a774fbd69f30ec30)

##### `destroy: (client: TDLibClient) => void`

```js
tdlib.destroy(client)
```

[Docs](https://core.telegram.org/tdlib/docs/td__json__client_8h.html#a75c765a44f3bdf6a724d90c2e7f75ecf)

##### `setLogFilePath: (path: string) => number`

[Docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#a4b098540dd3957b60a67600cba3ebd7f)

##### `setLogMaxFileSize: (maxFileSize: number | string) => void`

[Docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#adcbe44e62e16d65eb4c7503aabe264b3)

##### `setLogVerbosityLevel: (verbosity: number) => void`

[Docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#a8cd6fada30eb227c667fc9a10464ae50)

##### `setLogFatalErrorCallback: (fn: (errorMessage: string) => void) => void`

[Docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#addebe91c4525817a6d2b448634c19d71)
