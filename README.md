## tdl &nbsp; [![npm](https://img.shields.io/npm/v/tdl.svg)](https://www.npmjs.com/package/tdl) [![CI](https://github.com/Bannerets/tdl/actions/workflows/ci.yml/badge.svg)](https://github.com/Bannerets/tdl/actions/workflows/ci.yml)

`tdl` is a JavaScript wrapper for [TDLib][] (Telegram Database library),
a library to create [Telegram][] clients or bots.<br>
TDLib version 1.5.0 or newer is required.

[TDLib]: https://github.com/tdlib/td
[Telegram]: https://telegram.org/

### Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [API](#api)
- [Example](#example)
- [Options](#options)
- [Typings](#typings)
- [Creating multiple clients](#creating-multiple-clients)
- [WebAssembly](#webassembly)
- [Using on Windows](#using-on-windows)
- [Possible errors](#possible-errors)

---

<a name="requirements"></a>
### Requirements

- Node.js v10.0.0 or newer
- A C++ compiler and Python installed to build the node addon
- The tdjson shared library (`libtdjson.so` on Linux, `libtdjson.dylib` on macOS, `tdjson.dll` on Windows)

<a name="installation"></a>
### Installation

1. Build TDLib (https://github.com/tdlib/td#building) or install pre-built
   libraries
2. Run `npm install tdl tdl-tdlib-addon` (install both)
3. If you use TypeScript or Flow, run `npm install -D tdlib-types@td-1.8.5` to
   get the types for TDLib

To use `tdl`, TDLib should be installed on your system. The tdjson shared
library should be present in the search paths (otherwise the path to tdjson can
be specified manually).

> **Note**: When building TDLib, the libraries can be installed into the system
> using `cmake --install .` (optionally specify the `--prefix` option, the
> default is `/usr/local`) after TDLib has been built successfully. This command
> may require `sudo`.

Alternatively, instead of building TDLib from source, you can try to use
pre-built TDLib libraries distributed through npm:
`npm install prebuilt-tdlib@td-1.8.5`. See the README of [prebuilt-tdlib][] for
more information. The pre-built libraries support x86_64 systems only. On
GNU/Linux, those require glibc >= 2.31.

---

<a name="api"></a>
### API

#### `new Client(tdlibInstance, options) => Client`

```javascript
const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

const client = new Client(new TDLib(), {
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef' // Your api_hash
})
```

`api_id` and `api_hash` can be obtained at https://my.telegram.org/.

The path to `libtdjson` can be optionally specified in the `TDLib` constructor's
argument (e.g., `new TDLib(path.join(__dirname, 'libtdjson.so'))`). It is directly passed to
[`dlopen`][dlopen] / [`LoadLibrary`][LoadLibraryW]. Check your OS documentation
to find out where it searches for a shared library.

To use the pre-built `libtdjson` from the [prebuilt-tdlib][] package, import it
and pass the result of `getTdjson()` to the `TDLib` constructor:

```javascript
// ...
const { getTdjson } = require('prebuilt-tdlib')
const tdlib = new TDLib(getTdjson())
const client = new Client(tdlib, {
// ...
```

The `Options` interface is described in [#options](#options).

[prebuilt-tdlib]: packages/prebuilt-tdlib/README.md

#### `client.login(fn?: () => LoginDetails) => Promise<void>`

Log in to your Telegram account.

```javascript
await client.login()
```

By default, `tdl` asks the user for the phone number, auth code, and 2FA
password (if needed) in the console. You can override the defaults with custom
functions, for example:

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
  getName: () => Promise.resolve({ firstName: 'John', lastName: 'Doe' })
}))
```

The `getName` function is called if the user is not signed up.

It is possible (and advisable for larger apps) not to use the `client.login`
helper and implement the authorization process manually, handling
`authorizationStateWaitPhoneNumber` and other updates. This function supports
only a subset of authentication methods available on Telegram.

The function accepts the following interface:

```typescript
type LoginDetails = {
  type?: 'user',
  getPhoneNumber?: (retry?: boolean) => Promise<string>,
  getEmailAddress?: () => Promise<string>,
  getEmailCode?: () => Promise<string>,
  confirmOnAnotherDevice?: (link: string) => void,
  getAuthCode?: (retry?: boolean) => Promise<string>,
  getPassword?: (passwordHint: string, retry?: boolean) => Promise<string>,
  getName?: () => Promise<{ firstName: string, lastName?: string }>
} | {
  type: 'bot',
  getToken: (retry?: boolean) => Promise<string>
}
// Note that client.login accepts a function that returns the object, not the
// object directly. The function will not be called if the client is already
// authorized.
declare function login (fn?: () => LoginDetails): Promise<void>
```

`getEmailAddress` and `getEmailCode` are called in TDLib >= v1.8.6 only.

#### `client.loginAsBot(token: string | (() => string | Promise<string>)) => Promise<void>`

Instead of logging in as a user, you can log in as a bot by token.

```javascript
await client.loginAsBot('YOUR_BOT_TOKEN') // Enter your token from @BotFather
```

#### `client.on(event: string, callback: Function) => Client`

Attach an event listener to receive updates.

```javascript
function onUpdate (update) {
  console.log('New update:', update)
}
client.on('update', onUpdate)
client.on('error', console.error)
```

Ideally, you should always have a listener on `client.on('error')`.
There is no default listener, all errors will be ignored otherwise.

You can consider using reactive libraries like RxJS or [most][] for convenient event processing.

`client.addListener` is an alias for `client.on`.

[most]: https://github.com/cujojs/most

#### `client.once(event: string, callback: Function) => Client`

Attach a one-time listener.

#### `client.off(event: string, listener: Function, once?: boolean) => Client`

Remove an event listener.

```javascript
const listener = v => {
  console.log('New update:', v)
  client.off('update', listener) // Removes the listener
}
client.on('update', listener)
```

`client.removeListener` is an alias for `client.off`.

#### `client.invoke(query: Object) => Promise<Object>`

Call a TDLib method asynchronously. The promise can be rejected with a TDLib
object of type `_: 'error'`.

The API list can be found at https://core.telegram.org/tdlib/docs/annotated.html
or in the [td_api.tl][] file. In the tl file, the `byte` type means you should
pass a **base64-encoded** string. `int64` accepts either a number or string,
pass string for large numbers. Note that the TDLib JSON interface actually sends
a `@type` field, but `tdl` renames it to `_`.

[td_api.tl]: https://github.com/tdlib/td/blob/v1.8.0/td/generate/scheme/td_api.tl

```javascript
const chats = await client.invoke({
  _: 'getChats',
  chat_list: { _: 'chatListMain' },
  limit: 4000
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

Call a TDLib method synchronously. This function can be used only with the
methods marked as "can be called synchronously" in the TDLib documentation.

```javascript
const res = client.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})
```

#### `client.close() => Promise<void>`

Close the TDLib client.

```javascript
await client.close()
```

---

For the full API, see the [index.d.ts](packages/tdl/index.d.ts) file.

---

<a name="example"></a>
### Example

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
  await client.login()

  console.log('Me:', await client.invoke({ _: 'getMe' }))

  // ...
}

main().catch(console.error)
```

See the [examples/](examples/) directory.

---

<a name="options"></a>
### Options

The `Client` constructor accepts the following options:

```typescript
type ClientOptions = {
  apiId: number, // Can be obtained at https://my.telegram.org
  apiHash: string, // Can be obtained at https://my.telegram.org
  databaseDirectory: string, // Relative path (default is '_td_database')
  filesDirectory: string, // Relative path (default is '_td_files')
  databaseEncryptionKey: string, // Optional key for database encryption
  verbosityLevel: number | 'default', // Verbosity level (default is 2)
  useTestDc: boolean, // Use test telegram server (default is false)
  tdlibParameters: Object, // Raw TDLib parameters
  // Advanced options:
  skipOldUpdates: boolean, // Don't emit updates when connectionStateUpdating
  bare: boolean,
  receiveTimeout: number,
  useMutableRename: boolean
}
```

Of these fields, only `apiId` and `apiHash` are required. Any other field can be
omitted.

See https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1tdlib_parameters.html
for the parameters that can be specified in the `tdlibParameters` option.

The default `tdlibParameters` are:

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

The TDLib types can be imported using:

```typescript
import type { message as Td$message, user /* ... */ } from 'tdlib-types'
```

Or import all the types at once:

```typescript
import * as Td from 'tdlib-types'
// Use as: Td.message, Td.user, ...
```

The latest available typings are for TDLib v1.8.0, the typings for TDLib v1.8.5
are available under the `@beta` npm tag.

`tdlib-types` can be installed for a specific TDLib version via
`npm i -D tdlib-types@td-<TDLIB_VERSION>`. For example, to install typings for
TDLib v1.7.0 or TDLib v1.8.5, run `npm i -D tdlib-types@td-1.7.0` or `npm i -D tdlib-types@td-1.8.5`.

It is much more convenient to use `tdl` with TypeScript, which enables full
autocompletion for the TDLib methods and objects.

For more information, see the [tdlib-types][] README.

[tdlib-types]: packages/tdlib-types/README.md
[TypeScript]: https://www.typescriptlang.org/
[Flow]: https://flow.org/

---

<a name="creating-multiple-clients"></a>
### Creating multiple clients

With `tdl-tdlib-addon`, you can create multiple clients but currently the
number of created clients should not exceed [UV_THREADPOOL_SIZE][].

[UV_THREADPOOL_SIZE]: http://docs.libuv.org/en/v1.x/threadpool.html

---

<a name="webassembly"></a>
### WebAssembly

`tdl` also has an [experimental wrapper](packages/tdl-tdlib-wasm/) for TDLib
compiled to WebAssembly. To use it, install `tdl-tdlib-wasm` instead of
`tdl-tdlib-addon`. It works in the browser only.

---

In the repository, there is also an older package `tdl-tdlib-ffi` (_now deprecated_)
for Node.js, which uses `node-ffi-napi` instead of a custom node
addon. Note that `tdl-tdlib-ffi` does not work with multiple clients (that will
result in use-after-free). One advantage of using `ffi-napi` might be the
availability of prebuilt binaries for the node addon.

The library is designed to work with different "backends", which all follow the
same interface described in the [TDLib_API.md](TDLib_API.md) file (the types are
described in the `tdl-shared` package), so that it's possible to easily swap one
with another. The `tdl` package itself is platform-independent. Currently, the
present backends are `tdl-tdlib-addon` (recommended), `tdl-tdlib-ffi`
(deprecated), `tdl-tdlib-wasm` (experimental).

---

<a name="using-on-windows"></a>
### Using on Windows

The library depends on node-gyp, which may be difficult to install on Windows.
You should install Visual Studio (or just Build Tools) and Python first.
For example, see https://gist.github.com/jtrefry/fd0ea70a89e2c3b7779c,
https://github.com/Microsoft/nodejs-guidelines/blob/dd5074c/windows-environment.md#compiling-native-addon-modules.
There's also a [`windows-build-tools` package](https://github.com/felixrieseberg/windows-build-tools) on npm.

Otherwise, `tdl` works fine on Windows.

---

<a name="possible-errors"></a>
### Possible errors

- `UPDATE_APP_TO_LOGIN`

Update TDLib to v1.7.9 (v1.8.0) or newer. It is no longer possible to log in by
phone number in older versions of TDLib.

- `Dynamic Loading Error: Win32 error 126` (Windows)
- `Dynamic Loading Error: dlopen(…) image not found` (macOS)
- `…cannot open shared object file: No such file or directory` (Linux)

The tdjson shared library or one of its dependencies (for example, libssl)
cannot be found. To troubleshoot dependency issues, try to run
`ldd libtdjson.so` on Linux or `otool -L libtdjson.dylib` on macOS. On Windows,
you can use an app like Dependency Walker.

Recheck the documentation of [dlopen][] (Linux), [dlopen][dlopen-macos] (macOS),
[Dynamic-Link Library Search Order][dllso] (Windows) to make sure the shared
library is present in the search paths. By default, Linux does not search in the
current working directory, while macOS does.

[dllso]: https://docs.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-search-order#standard-search-order-for-desktop-applications
[dlopen-macos]: https://developer.apple.com/library/archive/documentation/System/Conceptual/ManPages_iPhoneOS/man3/dlopen.3.html

[dlopen]: https://www.man7.org/linux/man-pages/man3/dlopen.3.html
[LoadLibraryW]: https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryw

- `fatal error: napi.h: no such file or directory`
- `error: no such file or directory: …/node-modules/node-addon-api`

The path to the directory where you execute `npm install` likely contains
spaces, which is not supported by gyp:
https://github.com/nodejs/node-gyp/issues/65#issuecomment-368820565.

- `Error while reading RSA public key`

You can get this error if libtdjson is dynamically linked against OpenSSL and
some of the symbols got resolved to Node.js instead of the system OpenSSL.

Note that Node.js also uses OpenSSL (the distributed binaries are statically
linked against it) and exports the OpenSSL symbols. In the result, there are
two versions of OpenSSL in the same application. Then, using standard dlopen,
especially on Linux, most of the symbols will be resolved into libcrypto
inside the Node.js binary, not into the system libcrypto. It still can work
correctly if the versions are ABI-compatible, i.e. if TDLib is linked against an
OpenSSL version sufficiently similar to the version that Node.js uses
(`node -p "process.versions.openssl"`).

`tdl` tries to get around the symbol conflict issues by using `RTLD_DEEPBIND`
when available, so these issues should be rare in practice.

You can use `lldb` or `gdb` to check whether the symbols get resolved into
Node.js. For example, open `lldb -- node index.js` and set these breakpoints:

```
break set -r EVP_ -s node
break set -r AES_ -s node
break set -r BIO_ -s node
break set -r RSA_ -s node
break set -r CRYPTO_ -s node
```

It's also possible to set breakpoints inside the system OpenSSL:

```
break set -r . -s libcrypto.so.1.1
break set -r . -s libssl.so.1.1
```

To solve this issue, try to link TDLib statically against OpenSSL (the
`OPENSSL_USE_STATIC_LIBS` option in cmake) or link it against the OpenSSL version
that Node.js uses.

Another possible option is to rebuild Node.js from source, linking it
dynamically against the same system OpenSSL. That way, there is only one
instance of OpenSSL in the application. For example, using [nvm][], you can
install Node.js v16 from source on GNU/Linux via this command:

```console
$ nvm install -s 16 --shared-openssl --shared-openssl-includes=/usr/include/ --shared-openssl-libpath=/usr/lib/x86_64-linux-gnu/
```

[nvm]: https://github.com/nvm-sh/nvm

However, it's inconvenient for most users to rebuild Node.js.

Another hypothetical solution is to rebuild TDLib with the OpenSSL headers
distributed in Node.js (`<path-to-node>/include/node/`) without linking it to
anything, simply leaving the undefined symbols. Using this option, there is also
only one OpenSSL. I haven't checked that this works or that Node exports all the
symbols needed for TDLib. With this option, TDLib also should be rebuilt every
time Node.js updates the OpenSSL dependency.

This issue doesn't apply to Electron because it doesn't export the OpenSSL
symbols.

- Segmentation fault

Most likely, the cause of the segfault is the same as above.
