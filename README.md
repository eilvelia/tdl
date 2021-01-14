## tdl

[![npm](https://img.shields.io/npm/v/tdl.svg)](https://www.npmjs.com/package/tdl)
[![CI](https://github.com/Bannerets/tdl/workflows/Build%20and%20test/badge.svg)](https://github.com/Bannerets/tdl/actions?query=workflow%3A%22Build+and+test%22)

A JavaScript wrapper for [TDLib][] (Telegram Database library), a library to create [Telegram][] clients or bots.<br>
TDLib version 1.5.0 or newer is required.

[TDLib]: https://github.com/tdlib/td
[Telegram]: https://telegram.org/

### Table of Contents

- [Installation](#installation)
- [Requirements](#requirements)
- [API](#api)
- [Examples](#examples)
- [Log in as a bot](#log-in-as-a-bot)
- [Options](#options)
- [Typings](#typings)
- [WebAssembly](#webassembly)
- [Architecture notes](#architecture-notes)
- [Can I create multiple clients?](#can-i-create-multiple-clients)
- [Contributing](#contributing)
- [Windows](#windows)

---

<a name="installation"></a>
### Installation

1. Build TDLib (https://github.com/tdlib/td#building)
2. `npm i tdl tdl-tdlib-addon` &nbsp;(install both)
3. `npm i --save-dev tdlib-types` if you use TypeScript or Flow &nbsp;(recommended)

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
Therefore libtdjson's openssl version should be compatible with the openssl version that Node.js statically linked against (`process.versions.openssl`).<br>
If you get segmentation faults, it's most likely due to openssl incompatibility.

<!-- Node.js contains openssl headers, so you can add an option like `-DOPENSSL_INCLUDE_DIR=<path-to-node>/include/node/` to the TDLib build. -->

If you linked TDLib against system OpenSSL, you may consider rebuilding Node.js with the system openssl.<br>
For example, you can install Node.js v12 from source via [nvm][] on GNU/Linux this way:

```console
$ nvm install -s 12 --shared-openssl --shared-openssl-includes=/usr/include/ --shared-openssl-libpath=/usr/lib/x86_64-linux-gnu/
```

[nvm]: https://github.com/nvm-sh/nvm

Or you can build TDLib with the same openssl version that Node.js linked against.

This doesn't apply to Electron, since it doesn't export openssl symbols.

<!-- TODO: also doesn't apply to Windows? -->

---

<a name="api"></a>
### API

#### `new Client(tdlibInstance, options) => Client`

```javascript
// Example in Node.js:
const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

const client = new Client(new TDLib(), {
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef', // Your api_hash
})
```

`api_id` and `api_hash` can be obtained at https://my.telegram.org/.

The path to `libtdjson` can be specified in the `TDLib` constructor's argument.
It is directly passed to [`dlopen`][dlopen] / [`LoadLibrary`][ll].
Check your OS documentation to see where it searches for the library.

[dlopen]: https://www.man7.org/linux/man-pages/man3/dlopen.3.html
[ll]: https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryw

#### `client.connect() => Promise<undefined>`

Initialize and connect your client with Telegram.
Returns a promise.

```javascript
await client.connect()
```

#### `client.login(fn?: () => LoginDetails) => Promise<undefined>`

Log in to your Telegram account.

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

#### `client.connectAndLogin(fn?: () => LoginDetails) => Promise<undefined>`

Same as `client.connect().then(() => client.login(fn))`.

#### `client.on(event: string, callback: Function) => Client`

Attach an event listener to receive the updates.

```javascript
client.on('update', console.log)
client.on('error', console.error)
```

Ideally you should always have a listener on `client.on('error')`.

`client.addListener` is an alias to this function.

#### `client.once(event: string, callback: Function) => Client`

Add a one-time listener.

#### `client.off(event: string, listener: Function, once?: boolean) => Client`

Remove an event listener.

```javascript
const listener = v => {
  console.log('New update.', v)
  client.off('update', listener)
}
client.on('update', listener)
```

You can consider using reactive libraries like RxJS or [most][] for convenient event processing.

`client.removeListener` is an alias to this function.

[most]: https://github.com/cujojs/most

#### `client.invoke(query: Object) => Promise<Object>`

Asynchronously send a message to Telegram and receive a response.<br>
Returns a promise, which resolves with the response, or rejects with an error.

The API list can be found at https://core.telegram.org/tdlib/docs/annotated.html
or in the [td_api.tl][] file.
Note: the `bytes` type means you should pass a base64-encoded string.<br>
Also, tdl renames `@type` to `_`.

[td_api.tl]: https://github.com/tdlib/td/blob/eb80924dad30af4e6d8385d058bb7e847174df5e/td/generate/scheme/td_api.tl

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

#### `client.execute(query: Object) => (Object | null)`

Synchronously send a message to Telegram and receive a response.
This function can be called only with methods that are marked as "can be called synchronously" in the TDLib documentation.

```javascript
const res = client.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})
```

#### `client.close() => Promise<undefined>`

Close the TDLib instance.

This method sends `{ _: 'close' }` and waits until the client gets destroyed.

```javascript
await client.close()
```

#### `client.setLogFatalErrorCallback(fn: (null | Function)) => undefined`

Set the callback that will be called when a TDLib fatal error happens.

See the [TDLib doc](https://core.telegram.org/tdlib/docs/td__log_8h.html#addebe91c4525817a6d2b448634c19d71).

```javascript
client.setLogFatalErrorCallback(errorMessage => {
  console.error('Fatal error:', errorMessage)
})
```

#### Low-level TDLib API

See [TDLib_API.md](TDLib_API.md).

---

<a name="examples"></a>
### Examples

```javascript
const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

const client = new Client(new TDLib(), {
  apiId: 2222, // Your api_id, get it at http://my.telegram.org/
  apiHash: '0123456789abcdef0123456789abcdef' // Your api_hash
})

client.on('error', console.error)
client.on('update', update => {
  console.log('Received update:', update)
})

async function main () {
  await client.connectAndLogin()

  console.log(await client.invoke({ _: 'getMe' }))
}

main()
```

See the [examples/](examples/) directory.

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
  useTestDc: boolean, // Use test telegram server (default is false)
  tdlibParameters: Object, // Raw TDLib parameters
  // Advanced options:
  skipOldUpdates: boolean, // Don't emit old updates on launch
  receiveTimeout: number,
  useMutableRename: boolean,
  useDefaultVerbosityLevel: boolean,
  disableAuth: boolean
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

See https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1tdlib_parameters.html
for parameters that can be specified in the `tdlibParameters` option.

Default `tdlibParameters`:

```javascript
tdlibParameters: {
  use_message_database: true,
  use_secret_chats: false,
  system_language_code: 'en',
  application_version: '1.0',
  device_model: 'Unknown device',
  system_version: 'Unknown',
  enable_storage_optimizer: true,
  api_id: options.apiId,
  api_hash: options.apiHash,
  database_directory: options.databaseDirectory,
  files_directory: options.filesDirectory,
  use_test_dc: options.useTestDc
}
```

---

<a name="typings"></a>
### Typings

`tdl` fully supports [TypeScript][] and [Flow][].
`tdlib-types` should be installed to use the typings.

TDLib types can be imported using:

```typescript
import type { updateMessageViews, messageInvoice /* ... */ } from 'tdlib-types'
```

The latest available typings are for TDLib v1.7.0.

You can install typings for other TDLib versions using `npm install -D tdlib-types@td-<TDLIB_VERSION>`.
Example for TDLib v1.5.0: `npm install -D tdlib-types@td-1.5.0`.

See also [packages/tdlib-types/README.md](packages/tdlib-types/README.md).

[TypeScript]: https://www.typescriptlang.org/
[Flow]: https://flow.org/

---

<a name="webassembly"></a>
### WebAssembly

`tdl` also has an experimental wrapper for tdlib in wasm, see [packages/tdl-tdlib-wasm/](packages/tdl-tdlib-wasm/).

---

<a name="architecture-notes"></a>
### Architecture notes

The library is designed to work with different "backends",
their interface is described in [TDLib_API.md](TDLib_API.md) file.
So the same main wrapper can be used with node ffi, with node addons,
and in the browser with webassembly.

Available "backends" in the `tdl` repository:

- [tdl-tdlib-addon](packages/tdl-tdlib-addon/) (recommended)
- [tdl-tdlib-ffi](packages/tdl-tdlib-ffi/)
- [tdl-tdlib-wasm](packages/tdl-tdlib-wasm/) (experimental)

You can easily substitute one with another, since they follow the same interface.

<!-- TODO: tdl-tdlib-ffi use cases? -->

---

<a name="can-i-create-multiple-clients"></a>
### Can I create multiple clients?

You can use multiple clients with `tdl-tdlib-addon` if the number of clients < [UV_THREADPOOL_SIZE](http://docs.libuv.org/en/v1.x/threadpool.html).

With `tdl-tdlib-ffi` it's not possible to use multiple clients simultaneously in one process, see [#18][].
If you try, it will result in use after free.
You can create multiple processes using [child_process.fork][].

[#18]: https://github.com/Bannerets/tdl/issues/18
[child_process.fork]: https://nodejs.org/dist/latest-v14.x/docs/api/child_process.html#child_process_child_process_fork_modulepath_args_options

---

<a name="contributing"></a>
### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

<a name="windows"></a>
### Windows

`tdl-tdlib-ffi` and `tdl-tdlib-addon` depend on node-gyp, which may be difficult to install on Windows.
You should install Visual Studio (or just Build Tools) and Python first.
E.g. see https://gist.github.com/jtrefry/fd0ea70a89e2c3b7779c, https://github.com/Microsoft/nodejs-guidelines/blob/dd5074c/windows-environment.md#compiling-native-addon-modules.
npm also has a [`windows-build-tools` package](https://github.com/felixrieseberg/windows-build-tools).
