## TDLib API

Low-level TDLib APIs

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

##### `send: (client: TDLibClient, query: Object) => Promise<null>`

[Docs](https://core.telegram.org/tdlib/docs/classtd_1_1_client.html#a1a6f9cbe607ce76ff869493833c1224d)

##### `receive: (client: TDLibClient, timeout: number) => Promise<Object | null>`

[Docs](https://core.telegram.org/tdlib/docs/classtd_1_1_client.html#a128bb17ada87f4a1522f56428706cfd6)

##### `execute: (client: TDLibClient, query: Object) => Object | null`

[Docs](https://core.telegram.org/tdlib/docs/classtd_1_1_client.html#a6500da45fe520151a774fbd69f30ec30)

##### `destroy: (client: TDLibClient) => void`

##### `setLogFilePath: (path: string) => number`

##### `setLogVerbosityLevel: (verbosity: number) => void`
