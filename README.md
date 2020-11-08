## tdl

[![npm](https://img.shields.io/npm/v/tdl.svg)](https://www.npmjs.com/package/tdl)
[![CI](https://github.com/Bannerets/tdl/workflows/Build%20and%20test/badge.svg)](https://github.com/Bannerets/tdl/actions?query=workflow%3A%22Build+and+test%22)

A JavaScript wrapper for [TDLib][] (Telegram Database library), version 1.4.0 or newer.

[TDLib]: https://github.com/tdlib/td

### Table of Contents

- [Installation](#installation)
- [Requirements](#requirements)
- [API](#api)
- [Log in as a bot](#log-in-as-a-bot)
- [Options](#options)
- [Typings](#typings)
- [WebAssembly](#webassembly)
- [Architecture notes](#architecture-notes)
- [Can I create multiple clients?](#can-i-create-multiple-clients)
- [Examples](#examples)
- [Contributing](#contributing)
- [Windows](#windows)

---

<a name="installation"></a>
### Installation

1. Build TDLib (https://github.com/tdlib/td#building)
2. `npm install tdl tdl-tdlib-ffi` (install both)

You can also use third-party pre-built binaries:

- [tdlib.native](https://github.com/ForNeVeR/tdlib.native/releases)

---

<a name="requirements"></a>
### Requirements

- Node.js v10+
- A C++ compiler and Python installed
- The tdjson shared library (`libtdjson.so` on Linux, `libtdjson.dylib` on macOS, `tdjson.dll` on Windows)

Note that Node.js exports OpenSSL symbols.
If libtdjson is linked dynamically against openssl, it will use openssl symbols from the Node.js binary, not from your system.
Therefore libtdjson's openssl version should be compatible with the openssl version Node.js statically linked against (`process.versions.openssl`).

<!-- Node.js contains openssl headers, so you can add an option like `-DOPENSSL_INCLUDE_DIR=<path-to-node>/include/node/` to the TDLib build. -->

---

<a name="api"></a>
### API

##### `new Client(tdlibInstance, options) => Client`

```javascript
// Example in Node.js:
const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-ffi')

const client = new Client(new TDLib(), {
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef', // Your api_hash
})
```

`api_id` and `api_hash` can be obtained at https://my.telegram.org/.

You can specify the path to `libtdjson` in the `TDLib` constructor's argument.
It is (almost) directly passed to [`dlopen`][dlopen] / [`LoadLibrary`][ll].
Check your OS documentation to see where it searches for the library.

[dlopen]: https://www.man7.org/linux/man-pages/man3/dlopen.3.html
[ll]: https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryw

##### `client.connect() => Promise<undefined>`

You can use the `connect` method to initialize and connect your client with Telegram.
Returns a promise.

```javascript
await client.connect()
```

##### `client.login(fn?: () => LoginDetails) => Promise<undefined>`

```javascript
await client.login()
```

By default, `tdl` asks the user for the phone number, auth code, and password (if specified) in the console.
You can pass your functions:

```javascript
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

The `getName` function is called if the user is not registered.

Also see the `LoginDetails` interface in the [Options](#options) section.

It is possible to not use the `client.login` helper and implement login process manually.

This function requires TDLib v1.5.0+ to work.

##### `client.connectAndLogin(fn?: () => LoginDetails) => Promise<undefined>`

Same as `client.connect().then(() => client.login(fn))`.

##### `client.on(event: string, callback: Function) => Client`

##### `client.addListener(event: string, callback: Function) => Client`

Attach an event listener to receive the updates.

```javascript
client.on('update', console.log)
client.on('error', console.error)
```

Ideally you should always have a listener on `client.on('error')`.

##### `client.once(event: string, callback: Function) => Client`

Add a one-time listener.

##### `client.off(event: string, listener: Function, once?: boolean) => Client`

##### `client.removeListener(event: string, listener: Function, once?: boolean) => Client`

Remove an event listener.

```javascript
const listener = v => {
  console.log('New update.', v)
  client.off('update', listener)
}
client.on('update', listener)
```

You can consider using reactive libraries like RxJS or [most][] for convenient event processing.

[most]: https://github.com/cujojs/most

##### `client.invoke(query: Object) => Promise<Object>`

Asynchronously send a message to Telegram and receive a response.<br>
Returns a promise, which resolves with the response, or rejects with an error.

The API list can be found at https://core.telegram.org/tdlib/docs/annotated.html (more convenient one: https://hexdocs.pm/tdlib/TDLib.Method.html).<br>
Note that tdl renames `@type` to `_`.

```javascript
const chats = await client.invoke({
  _: 'getChats',
  offset_order: '9223372036854775807',
  offset_chat_id: 0,
  limit: 100
})
```

```javascript
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

Synchronously send a message to Telegram and receive a response. Only a few methods can be called using this function.

```javascript
const res = client.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})
```

##### `client.close() => Promise<undefined>`

Close the TDLib instance.

This method sends `{ _: 'close' }` and waits until the client gets destroyed.

```javascript
await client.close()
```

##### `client.setLogFatalErrorCallback(fn: (null | Function)) => undefined`

Set the callback that will be called when a TDLib fatal error happens.

See the [TDLib doc](https://core.telegram.org/tdlib/docs/td__log_8h.html#addebe91c4525817a6d2b448634c19d71).

```javascript
client.setLogFatalErrorCallback(
  errorMessage => console.error('Fatal error:', errorMessage)
)
```

#### Low-level TDLib API

See [TDLib_API.md](TDLib_API.md).

---

<a name="log-in-as-a-bot"></a>
### Log in as a bot

```javascript
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
// The interface of the options you can pass to the Client constructor:
type Options = {
  apiId: number, // Can be obtained at https://my.telegram.org
  apiHash: string, // Can be obtained at https://my.telegram.org
  databaseDirectory: string, // Relative path (default is '_td_database')
  filesDirectory: string, // Relative path (default is '_td_files')
  databaseEncryptionKey: string, // Optional key for database encryption
  verbosityLevel: number, // Verbosity level (default is 2)
  useTestDc: boolean, // Use telegram dev server (default is false)
  // Advanced options:
  skipOldUpdates: boolean, // Don't emit old updates on launch
  receiveTimeout: number,
  useMutableRename: boolean,
  useDefaultVerbosityLevel: boolean,
  disableAuth: boolean,
  tdlibParameters: Object // Raw TDLib parameters
}

// The `login` function accepts one of these two objects:
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

Only `apiId` and `apiHash` are required fields. Any other field can be omitted.

About `tdlibParameters` option: see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1tdlib_parameters.html.

Default `tdlibParameters`:

```javascript
tdlibParameters: {
  use_message_database: true,
  use_secret_chats: false,
  system_language_code: 'en',
  application_version: '1.0',
  device_model: 'Unknown device',
  system_version: 'Unknown',
  enable_storage_optimizer: true
}
```

---

<a name="typings"></a>
### Typings

`tdl` fully supports [Flow][] and [TypeScript][] out of the box.\
Typings are generated from the [td_api.tl][td-scheme] scheme in the TDLib repository.

You can import the TDLib types:

```typescript
import type { updateMessageViews, messageInvoice /* ... */ } from 'tdl/types/tdlib'
```

Current built-in typings are for TDLib v1.6.0.

The typings can be generated for the appropriate TDLib version using `tdlib-typings` in [packages/tdlib-typings/](packages/tdlib-typings/)

**Warning**: TDLib typings do not follow SemVer, just as TDLib itself doesn't. You can consider using `~` instead of `^` in your `package.json` dependencies.

[Flow]: https://flow.org/
[TypeScript]: https://www.typescriptlang.org/

[td-scheme]: https://github.com/tdlib/td/blob/f3480b94d7d86c0e02ad5cc3418eace3d6b09857/td/generate/scheme/td_api.tl

---

<a name="webassembly"></a>
### WebAssembly

`tdl` also has an experimental wrapper for tdlib in wasm, see [tdl-tdlib-wasm/](packages/tdl-tdlib-wasm/).

---

<a name="architecture-notes"></a>
### Architecture notes

The library is designed to work with different "backends",
their interface is described in [TDLib_API.md](TDLib_API.md) file.
So the same main wrapper can be used with node ffi, with node addons,
and in the browser with webassembly.

Available "backends" in the `tdl` repository:

- [tdl-tdlib-ffi](packages/tdl-tdlib-ffi/)
- [tdl-tdlib-addon](packages/tdl-tdlib-addon/)
- [tdl-tdlib-wasm](packages/tdl-tdlib-wasm/) (experimental)

You can easily substitute one with another, since they follow the same interface.

---

<a name="can-i-create-multiple-clients"></a>
### Can I create multiple clients?

With `tdl-tdlib-ffi` it's not possible to use multiple clients simultaneously in one process, see [#18][]. If you try, it will result in use after free. You can create multiple processes using [child_process.fork][]. You also can "pause" clients that you don't currently need via `client.pause()` and `client.resume()` functions.

[#18]: https://github.com/Bannerets/tdl/issues/18
[child_process.fork]: https://nodejs.org/dist/latest-v14.x/docs/api/child_process.html#child_process_child_process_fork_modulepath_args_options

You can use multiple clients with `tdl-tdlib-addon` if the number of clients < [UV_THREADPOOL_SIZE](http://docs.libuv.org/en/v1.x/threadpool.html).

---

<a name="examples"></a>
### Examples

See the [examples/](examples/) directory.

---

<a name="contributing"></a>
### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

<a name="windows"></a>
### Windows

`tdl-tdlib-ffi` and `tdl-tdlib-addon` depend on node-gyp, which may be difficult to install on Windows. You should install Visual Studio (or just Build Tools) and Python first. E.g. see https://gist.github.com/jtrefry/fd0ea70a89e2c3b7779c, https://github.com/Microsoft/nodejs-guidelines/blob/dd5074c/windows-environment.md#compiling-native-addon-modules. npm also has [`windows-build-tools` package](https://github.com/felixrieseberg/windows-build-tools).
