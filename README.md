## tdl

[![npm](https://img.shields.io/npm/v/tdl.svg)](https://www.npmjs.com/package/tdl)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/Bannerets/tdl.svg)](https://github.com/Bannerets/tdl)
[![node](https://img.shields.io/node/v/tdl.svg)](https://github.com/Bannerets/tdl)
[![Build Status](https://travis-ci.org/Bannerets/tdl.svg?branch=master)](https://travis-ci.org/Bannerets/tdl)

Node.js wrapper for [TDLib][tdlib-getting-started] (Telegram Database library).

[tdlib-getting-started]: https://core.telegram.org/tdlib/getting-started

### Table of Contents

- [Getting started](#getting-started)
- [API](#api)
- [Login as a bot](#login-as-a-bot)
- [Options](#options)
- [Typings](#typings)
- [Examples](#examples)
- [Requirements](#requirements)

---

<a name="getting-started"></a>
### Getting started

1. Build the binary (https://github.com/tdlib/td#building)
2. `npm install tdl`

---

<a name="api"></a>
### API

##### `new Client(options: Object) => Client`

```js
const { Client } = require('tdl')

const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef', // Your api_hash
})
```

`api_id` and `api_hash` can be obtained at https://my.telegram.org/.

##### `client.connect() => Promise<undefined>`

You can use this method to initialize and connect your client with Telegram.  
Returns promise.

```js
await client.connect()
```

##### `client.login(fn?: () => LoginDetails) => Promise<undefined>`

```js
await client.login()
```

By default, `tdl` asks user for phone number, auth code, and password (if specified) in console.  
You can pass your functions:

```js
// Example
await client.login(() => ({
  getPhoneNumber: retry => retry
    ? Promise.reject('Invalid phone number')
    : Promise.resolve('+9996620001'),
  getAuthCode: retry => retry
    ? Promise.reject('Invalid auth code')
    : Promise.resolve('22222'),
  getPassword: (passwordHint, retry) => retry
    ? Promise.reject('Invalid password')
    : Promise.resolve('abcdef'),
  getName: () =>
    Promise.resolve({ firstName: 'John', lastName: 'Doe' })
}))
```

`getName` function is called if user is not registered.

Also see `LoginDetails` interface in [Options](#options) section.

##### `client.connectAndLogin(fn?: () => LoginDetails) => Promise<undefined>`

Same as `client.connect().then(() => client.login(fn))`.

##### `client.on(event: string, callback: Function) => Client`

##### `client.once(event: string, callback: Function) => Client`

Attach an event listener for iterating updates.

```js
client.on('update', console.log)
client.on('error', console.error)
```

Ideally you should always have a listener on `client.on('error')`.

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

##### `client.destroy() => undefined`

Destroy the client.

```js
client.destroy()
```

##### `client.setLogFilePath(path: string) => number`

Sets the path to the file to where the internal TDLib log will be written. By default TDLib writes logs to stderr or an OS specific log. Use this method to write the log to a file instead.

```js
client.setLogFilePath('log.txt')
```

See [docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#a4b098540dd3957b60a67600cba3ebd7f).

##### `client.setLogMaxFileSize(maxFileSize: (number | string)) => undefined`

Sets maximum size of the file to where the internal TDLib log is written before the file will be auto-rotated.   Unused if log is not written to a file. Defaults to 10 MB.

```js
client.setLogMaxFileSize(50000)
```

See [docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#adcbe44e62e16d65eb4c7503aabe264b3).

##### `client.setLogVerbosityLevel(verbosityLevel: number) => undefined`

Sets the verbosity level of the internal logging of TDLib.  
Default is 2.

```js
client.setLogVerbosityLevel(2)
```

See [docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#a8cd6fada30eb227c667fc9a10464ae50).

##### `client.setLogFatalErrorCallback(fn: (null | Function)) => undefined`

Sets the callback that will be called when a fatal error happens. None of the TDLib methods can be called from the callback. The TDLib will crash as soon as callback returns. By default the callback is not set.

```js
client.setLogFatalErrorCallback(
  errorMessage => console.error('Fatal error:', errorMessage)
)
```

See [docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#addebe91c4525817a6d2b448634c19d71).

##### `client.invokeFuture(query: Object) => Future`

Same as `client.invoke`, but returns [Future][] instead of Promise.

[Future]: https://github.com/fluture-js/Fluture

#### Low-level TDLib API

See [TDLib_API.md](TDLib_API.md).

---

<a name="login-as-a-bot"></a>
### Login as a bot

```js
const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef' // Your api_hash
})

await client.connectAndLogin(() => ({
  type: 'bot',
  getToken: retry => retry
    ? Promise.reject('Token is not valid')
    : Promise.resolve('YOUR_BOT_TOKEN') // Token from @BotFather
}))
```

---

<a name="options"></a>
### Options

```typescript
type Options = {
  apiId: number, // Can be obtained at https://my.telegram.org
  apiHash: string, // Can be obtained at https://my.telegram.org
  binaryPath: string, // Path to tdlib binary, relative path
  databaseDirectory: string, // Relative path
  filesDirectory: string, // Relative path
  databaseEncryptionKey: string, // Optional key for database encryption
  verbosityLevel: number,
  useTestDc: boolean, // Use telegram dev server
  // Advanced options:
  skipOldUpdates: boolean, // Don't emit old updates
  useMutableRename: boolean, // May increase performance
  useDefaultVerbosityLevel: boolean,
  tdlibParameters: Object,
  tdlibInstance: TDLib
}

type LoginDetails = {
  type: 'user',
  getPhoneNumber: (retry?: boolean) => Promise<string>,
  getAuthCode: (retry?: boolean) => Promise<string>,
  getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
  getName: () => Promise<{ firstName: string, lastName?: string }>
} | {
  type: 'bot',
  token: (retry?: boolean) => Promise<string>
}
```

Only `apiId` and `apiHash` are required fields.  
Any other fields can just be not specified.

`tdlibParameters` option: See https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1tdlib_parameters.html.

##### Defaults

```javascript
options = {
  binaryPath: 'libtdjson', // (and 'tdjson' on Windows)
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

<a name="typings"></a>
### Typings

`tdl` supports [Flow][] and [TypeScript][] out of the box.
Typings are generated from [td_api.tl][td-scheme] scheme using [tdlib-typings][].

You can import TDLib types:

```js
// TypeScript
import { updateMessageViews, messageInvoice /* ... */ } from 'tdl/types/tdlib'

// Flow
import type { updateMessageViews, messageInvoice /* ... */ } from 'tdl/types/tdlib'
```

[Flow]: https://flow.org/
[TypeScript]: https://www.typescriptlang.org/

[td-scheme]: https://github.com/tdlib/td/blob/6129ebf39439647e277e88d9d43a2f897ffee63c/td/generate/scheme/td_api.tl
[tdlib-typings]: https://github.com/Bannerets/tdlib-typings

---

<a name="examples"></a>
### Examples

See [examples/](examples) folder.

---

<a name="requirements"></a>
### Requirements

- TDLib binary (`libtdjson.so` on Linux, `libtdjson.dylib` on macOS, `tdjson.dll` on Windows)
- Node.js 10 preferred (minimum >= 8.6.0)
> Note: If you are using Node.js 8.x-9.x, you may encounter a warning message `Warning: N-API is an experimental feature and could change at any time.`, this can be suppressed by upgrading to version 10.

You can also use prebuilt binaries:

- [tdlib.native](https://github.com/ForNeVeR/tdlib.native/releases)

---
