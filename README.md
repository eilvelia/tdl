## tdl

[![npm](https://img.shields.io/npm/v/tdl.svg)](https://www.npmjs.com/package/tdl)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/Bannerets/tdl.svg)](https://github.com/Bannerets/tdl)
[![node](https://img.shields.io/node/v/tdl.svg)](https://github.com/Bannerets/tdl)
[![Build Status](https://travis-ci.org/Bannerets/tdl.svg?branch=master)](https://travis-ci.org/Bannerets/tdl)

TDLib (Telegram Database library) bindings for Node.js

-----

### Getting started

1. Build the binary (https://github.com/tdlib/td#building)
2. `npm install tdl`

-----

### APIs

##### `new Client(options: Object) -> Client`

```js
const { Client } = require('tdl')

const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH',
  loginDetails: {
    phoneNumber: 'YOUR_PHONE_NUMBER'
  }
})
```

##### `client.connect(beforeAuth?: () => Promise) -> Promise<void>`

You can use this API to initialize and connect your client with Telegram.

```js
await client.connect()
```

`beforeAuth` function is called before auth begins.

```js
client.connect(async () => {
  // ...
})
```

##### `client.on(event: string, callback: Function) -> Client`

You can use this API to attach an event listener for iterating updates.

```js
client.on('update', console.log)
client.on('error', console.error)
```

##### `client.invoke(query: Object) -> Promise<Object>`

You can use this API to send asynchronous message to Telegram and receive response.  
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

##### `client.execute(query: Object) -> ?Object`

You can use this API to send synchronous message to Telegram and receive response.

```js
const res = client.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})
```

##### `client.destroy() -> void`

You can use this API to destroy the client.

```js
client.destroy()
```

##### `client.setLogFilePath(path: string) -> number`

See [docs](https://core.telegram.org/tdlib/docs/classtd_1_1_log.html#a8c8aadc9360af6e1cf2673954dcf9aea).

##### `client.setLogMaxFileSize(maxFileSize: number | string) -> void`

Sets maximum size of the file to where the internal TDLib log is written before the file will be auto-rotated.   Unused if log is not written to a file. Defaults to 10 MB.

See [docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#adcbe44e62e16d65eb4c7503aabe264b3).

##### `client.setLogVerbosityLevel(verbosityLevel: number) -> void`

See [docs](https://core.telegram.org/tdlib/docs/classtd_1_1_log.html#a9dd71044a37db700da89001c96b978c3).

##### `client.setLogFatalErrorCallback(fn: Function) -> void`

See [docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#addebe91c4525817a6d2b448634c19d71).

##### `client.invokeFuture(query: Object) -> Future<Object, Object>`

Same as `client.invoke`, but returns [Future](https://github.com/fluture-js/Fluture) instead of Promise.

#### Low-level TDLib APIs

See [TDLib_API.md](TDLib_API.md).

-----

### Login as a bot

```js
const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH',
  loginDetails: {
    type: 'bot',
    token: 'YOUR_BOT_TOKEN'
  }
})

await client.connect()
```

-----

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
  logFilePath: string, // Relative path
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
  logFilePath: '', // (don't write to file)
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

-----

### Typings

`tdl` supports [Flow](https://flow.org/) and [TypeScript](https://www.typescriptlang.org/) out of the box.

-----

### Examples

See [examples/](examples) folder.

-----

### Requirements

- TDLib binary
- Node.js 10 preferred (minimum >= 8.6.0)
> Note: If you are using Node.js 8.x-9.x, you may encounter a warning message `Warning: N-API is an experimental feature and could change at any time.`, this can be suppressed by upgrading to version 10.

-----

### Fork

This is a fork of [nodegin/tglib](https://github.com/nodegin/tglib).
