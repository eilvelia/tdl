## tdl

[![npm](https://img.shields.io/npm/v/tdl.svg)](https://www.npmjs.com/package/tdl)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/Bannerets/tdl.svg)](https://github.com/Bannerets/tdl)
[![node](https://img.shields.io/node/v/tdl.svg)](https://github.com/Bannerets/tdl)
[![Build Status](https://travis-ci.org/Bannerets/tdl.svg?branch=master)](https://travis-ci.org/Bannerets/tdl)

[TDLib][tdlib-getting-started] (Telegram Database library) bindings for Node.js.

[tdlib-getting-started]: https://core.telegram.org/tdlib/getting-started

---

### Getting started

1. Build the binary (https://github.com/tdlib/td#building)
2. `npm install tdl`

---

### API

##### `new Client(options: Object) => Client`

```js
const { Client } = require('tdl')

const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef', // Your api_hash
  loginDetails: {
    phoneNumber: 'YOUR_PHONE_NUMBER'
  }
})
```

`api_id` and `api_hash` can be obtained at https://my.telegram.org/.

##### `client.connect(beforeAuth?: () => Promise) => Promise<void>`

You can use this method to initialize and connect your client with Telegram.  
Returns promise.

```js
await client.connect()
```

`beforeAuth` function is called before auth begins.

```js
client.connect(async () => {
  // ...
})
```

##### `client.on(event: string, callback: Function) => Client`

##### `client.once(event: string, callback: Function) => Client`

Attach an event listener for iterating updates.

```js
client.on('update', console.log)
client.on('error', console.error)
```

##### `client.removeListener(event: string, listener: Function, once?: boolean) => Client`

Remove an event listener.

```js
const listener = v => {
  console.log('New update.', v)
  client.removeListener('update', listener)
}
client.on('update', listener)
```

##### `client.invoke(query: Object) => Promise<Object>`

Send asynchronous message to Telegram and receive response.  
Resolves with response, or rejects with an error.

```js
const chats = await client.invoke({
  _: 'getChats',
  offset_order: '9223372036854775807',
  offset_chat_id: 0,
  limit: 100
})
```

```js
await client.invoke({
  _: 'sendMessage',
  chat_id: 123456789,
  input_message_content: {
    _: 'inputMessageText',
    text: {
      _: 'formattedText',
      text: '👻'
    }
  }
})
```

##### `client.execute(query: Object) => (Object | null)`

Send synchronous message to Telegram and receive response.

```js
const res = client.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})
```

##### `client.destroy() => void`

Destroy the client.

```js
client.destroy()
```

##### `client.setLogFilePath(path: string) => number`

Sets the path to the file to where the internal TDLib log will be written. By default TDLib writes logs to stderr or an OS specific log. Use this method to write the log to a file instead.

See [docs](https://core.telegram.org/tdlib/docs/classtd_1_1_log.html#a038b57d66436f9f367f5c77360e8254b).

##### `client.setLogMaxFileSize(maxFileSize: (number | string)) => void`

Sets maximum size of the file to where the internal TDLib log is written before the file will be auto-rotated.   Unused if log is not written to a file. Defaults to 10 MB.

See [docs](https://core.telegram.org/tdlib/docs/classtd_1_1_log.html#a749ea8521373bbe9f5c30f58bc591016).

##### `client.setLogVerbosityLevel(verbosityLevel: number) => void`

Sets the verbosity level of the internal logging of TDLib.  
Default is 2.

See [docs](https://core.telegram.org/tdlib/docs/classtd_1_1_log.html#a0f683bd572154f7b4c8b4f973ea3395f).

##### `client.setLogFatalErrorCallback(fn: Function) => void`

Sets the callback that will be called when a fatal error happens. None of the TDLib methods can be called from the callback. The TDLib will crash as soon as callback returns. By default the callback is not set.

```js
client.setLogFatalErrorCallback(errorMessage =>
  console.error('Fatal error:', errorMessage)
)
```

See [docs](https://core.telegram.org/tdlib/docs/classtd_1_1_log.html#ab2c5a70ac5ca1f952d979f9fa4b2ba82).

##### `client.invokeFuture(query: Object) => Future`

Same as `client.invoke`, but returns [Future][] instead of Promise.

[Future]: https://github.com/fluture-js/Fluture

#### Low-level TDLib APIs

See [TDLib_API.md](TDLib_API.md).

---

### Login as a bot

```js
const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef', // Your api_hash
  loginDetails: {
    type: 'bot',
    token: 'YOUR_BOT_TOKEN' // Token from @BotFather
  }
})

await client.connect()
```

---

### Options

```typescript
type Options = {
  apiId: number, // Can be obtained at https://my.telegram.org
  apiHash: string, // Can be obtained at https://my.telegram.org
  loginDetails: {
    type: 'user',
    phoneNumber: string,
    getAuthCode: (retry?: boolean) => Promise<string>,
    getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
    getName: () => Promise<{ firstName: string, lastName?: string }>
  } | {
    type: 'bot',
    token: string
  },
  binaryPath: string, // Path to tdlib binary, relative path
  databaseDirectory: string, // Relative path
  filesDirectory: string, // Relative path
  verbosityLevel: number,
  skipOldUpdates: boolean, // Don't emit old updates
  useTestDc: boolean, // Use telegram dev server
  useMutableRename: boolean, // Enable in production
  tdlibParameters: Object, // See https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1tdlib_parameters.html
  tdlibInstance: TDLib
}
```

Any empty fields may just not be specified.

##### Defaults

```javascript
{
  loginDetails: {
    type: 'user',
    getAuthCode, // read from stdin
    getPassword,  // read from stdin
    getName // read from stdin
  }
  binaryPath: 'libtdjson',
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  verbosityLevel: 2,
  skipOldUpdates: false,
  useTestDc: false,
  useMutableRename: false,
  tdlibParameters: {
    use_message_database: true,
    use_secret_chats: false,
    system_language_code: 'en',
    application_version: '1.0',
    device_model: 'tdlib',
    system_version: 'node',
    enable_storage_optimizer: true
  }
}
```

---

### Typings

`tdl` supports [Flow][] and [TypeScript][] out of the box.  
Typings are generated from [td_api.tl][td-scheme] scheme using [tdlib-typings][].

[Flow]: https://flow.org/
[TypeScript]: https://www.typescriptlang.org/

[td-scheme]: https://github.com/tdlib/td/blob/6129ebf39439647e277e88d9d43a2f897ffee63c/td/generate/scheme/td_api.tl
[tdlib-typings]: https://github.com/Bannerets/tdlib-typings

---

### Examples

See [examples/](examples) folder.

---

### Requirements

- TDLib binary
- Node.js 10 preferred (minimum >= 8.6.0)
> Note: If you are using Node.js 8.x-9.x, you may encounter a warning message `Warning: N-API is an experimental feature and could change at any time.`, this can be suppressed by upgrading to version 10.

You can also you use prebuilt binaries:

- [tdlib.native](https://github.com/ForNeVeR/tdlib.native/releases)

---

#### Fork

This project is a fork of [nodegin/tglib](https://github.com/nodegin/tglib).
