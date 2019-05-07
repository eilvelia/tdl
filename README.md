## tdl

[![npm](https://img.shields.io/npm/v/tdl.svg)](https://www.npmjs.com/package/tdl)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/Bannerets/tdl.svg)](https://github.com/Bannerets/tdl)
[![Build Status](https://travis-ci.org/Bannerets/tdl.svg?branch=master)](https://travis-ci.org/Bannerets/tdl)

JavaScript wrapper for [TDLib][tdlib-getting-started] (Telegram Database library).

[tdlib-getting-started]: https://core.telegram.org/tdlib/getting-started

### Table of Contents

- [Getting started](#getting-started)
- [API](#api)
- [Login as a bot](#login-as-a-bot)
- [Options](#options)
- [Typings](#typings)
- [Requirements](#requirements)
- [WebAssembly](#webassembly)
- [Architecture notes](#architecture-notes)
- [Examples](#examples)
- [Contributing](#contributing)

---

<a name="getting-started"></a>
### Getting started

1. Build the binary (https://github.com/tdlib/td#building)
2. `npm install tdl tdl-tdlib-ffi` (install both)

---

<a name="api"></a>
### API

##### `new Client(tdlibInstance, options) => Client`

```js
// Example in Node.js:
const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-ffi')

const client = new Client(new TDLib(), {
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef', // Your api_hash
})
```

`api_id` and `api_hash` can be obtained at https://my.telegram.org/.

##### `client.connect() => Promise<undefined>`

You can use this method to initialize and connect your client with Telegram.
Returns a promise.

```js
await client.connect()
```

##### `client.login(fn?: () => LoginDetails) => Promise<undefined>`

```js
await client.login()
```

By default, `tdl` asks user for phone number, auth code, and password (if specified) in the console.
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

It is possible to not use the `client.login` helper and implement login process manually.

##### `client.connectAndLogin(fn?: () => LoginDetails) => Promise<undefined>`

Same as `client.connect().then(() => client.login(fn))`.

##### `client.on(event: string, callback: Function) => Client`

##### `client.addListener(event: string, callback: Function) => Client`

Attach an event listener for iterating updates.

```js
client.on('update', console.log)
client.on('error', console.error)
```

Ideally you should always have a listener on `client.on('error')`.

##### `client.once(event: string, callback: Function) => Client`

Add a one-time listener.

##### `client.off(event: string, listener: Function, once?: boolean) => Client`

##### `client.removeListener(event: string, listener: Function, once?: boolean) => Client`

Remove an event listener.

```js
const listener = v => {
  console.log('New update.', v)
  client.off('update', listener)
}
client.on('update', listener)
```

You can consider using reactive libraries like [most][] or RxJS for convenient event processing.

[most]: https://github.com/cujojs/most

##### `client.invoke(query: Object) => Promise<Object>`

Send an asynchronous message to Telegram and receive a response.\
Resolves with response, or rejects with an error.

API list is available on https://core.telegram.org/tdlib/docs/annotated.html.
Note that tdl renames `@type` to `_`.

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

Send a synchronous message to Telegram and receive response.

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

Note: You need to install `fluture` (`npm install fluture`) to use `invokeFuture`.

[Future]: https://github.com/fluture-js/Fluture

#### Low-level TDLib API

See [TDLib_API.md](TDLib_API.md).

---

<a name="login-as-a-bot"></a>
### Login as a bot

```js
const client = new Client(new TDLib(), {
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
  databaseDirectory: string, // Relative path
  filesDirectory: string, // Relative path
  databaseEncryptionKey: string, // Optional key for database encryption
  verbosityLevel: number,
  useTestDc: boolean, // Use telegram dev server
  // Advanced options:
  receiveTimeout: number,
  skipOldUpdates: boolean, // Don't emit old updates
  useMutableRename: boolean,
  useDefaultVerbosityLevel: boolean,
  disableAuth: boolean,
  tdlibParameters: Object
}

type LoginDetails = {
  type: 'user',
  getPhoneNumber: (retry?: boolean) => Promise<string>,
  getAuthCode: (retry?: boolean) => Promise<string>,
  getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
  getName: () => Promise<{ firstName: string, lastName?: string }>
} | {
  type: 'bot',
  getToken: (retry?: boolean) => Promise<string>
}
```

Only `apiId` and `apiHash` are required fields. Any other field can just be not specified.

`tdlibParameters` option: See https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1tdlib_parameters.html.

##### Defaults

```javascript
options = {
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  verbosityLevel: 2,
  receiveTimeout: 10,
  skipOldUpdates: false,
  useTestDc: false,
  useMutableRename: false,
  disableAuth: false,
  tdlibParameters: {
    use_message_database: true,
    use_secret_chats: false,
    system_language_code: 'en',
    application_version: '1.0',
    device_model: 'Unknown device',
    system_version: 'Unknown',
    enable_storage_optimizer: true
  }
}
```

---

<a name="typings"></a>
### Typings

`tdl` fully supports [Flow][] and [TypeScript][] out of the box.\
Typings are generated from [td_api.tl][td-scheme] scheme using [tdlib-typings][].

You can import TDLib types:

```js
// TypeScript
import { updateMessageViews, messageInvoice /* ... */ } from 'tdl/types/tdlib'

// Flow
import type { updateMessageViews, messageInvoice /* ... */ } from 'tdl/types/tdlib'
```

**Warning**: TDLib typings do not follow SemVer.

[Flow]: https://flow.org/
[TypeScript]: https://www.typescriptlang.org/

[td-scheme]: https://github.com/tdlib/td/blob/6129ebf39439647e277e88d9d43a2f897ffee63c/td/generate/scheme/td_api.tl
[tdlib-typings]: https://github.com/Bannerets/tdlib-typings

---

<a name="requirements"></a>
### Requirements

- TDLib binary (`libtdjson.so` on Linux, `libtdjson.dylib` on macOS, `tdjson.dll` on Windows), v1.4.0 and newer.
- Node.js 10 preferred (minimum >= 8.6.0)
> Note: If you are using Node.js 8.x-9.x, you may encounter a warning message `Warning: N-API is an experimental feature and could change at any time.`, this can be suppressed by upgrading to version 10 and newer.

You can also use prebuilt binaries:

- [tdlib.native](https://github.com/ForNeVeR/tdlib.native/releases)

---

<a name="webassembly"></a>
### WebAssembly

`tdl` also has experimental wrapper for tdlib in wasm, see [tdl-tdlib-wasm/](packages/tdl-tdlib-wasm/).

---

<a name="architecture-notes"></a>
### Architecture notes

The library is designed to work with different "backends",
their interface is described in [TDLib_API.md](TDLib_API.md) file.
By this the same main wrapper can be used with node ffi, with node addons,
and in browser with WebAssembly.

Available packages in the `tdl` repository:

- [tdl-tdlib-ffi](packages/tdl-tdlib-ffi/) (mainly used)
- [tdl-tdlib-addon](tdl-tdlib-addon/) (unstable)
- [tdl-tdlib-wasm](packages/tdl-tdlib-wasm/)

You can easily substitute one with another.

---

<a name="examples"></a>
### Examples

See [examples/](examples/) folder.

---

<a name="contributing"></a>
### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---
