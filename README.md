# tdl &nbsp; [![npm](https://img.shields.io/npm/v/tdl.svg)](https://www.npmjs.com/package/tdl) [![CI](https://github.com/Bannerets/tdl/actions/workflows/ci.yml/badge.svg)](https://github.com/Bannerets/tdl/actions/workflows/ci.yml)

`tdl` is a fairly simple JavaScript wrapper for [TDLib][] (Telegram Database library),
a library to create [Telegram][] clients or bots.

TDLib version 1.5.0 or newer is required.

[TDLib]: https://github.com/tdlib/td
[Telegram]: https://telegram.org/

- [Requirements](#requirements)
- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)
- [Types](#types)
- [Creating multiple clients](#creating-multiple-clients)
- [Possible errors](#possible-errors)

<a name="requirements"></a>
## Requirements

- Node.js v12.11.0 or newer (>= v16 recommended)
- The tdjson shared library (`libtdjson.so` on Linux, `libtdjson.dylib` on macOS, `tdjson.dll` on Windows)
- In some cases, a C++ compiler and Python installed to build the node addon[^1]

[^1]: `tdl` is packaged with pre-built addons for Windows (x86_64), GNU/Linux (x86_64, glibc >= 2.17), and macOS (x86_64, aarch64). If a pre-built binary is not available for your system, then the node addon will be built using node-gyp, requiring Python and a C++ toolchain (C++14 is required) to be installed (on Windows, MSVS or Build Tools). Pass `--build-from-source` to never use the pre-built binaries. Note that macOS aarch64 binaries aren't tested.

<a name="installation"></a>
## Installation

1. Build TDLib (https://github.com/tdlib/td#building) or install pre-built
   libraries
2. Run `npm install tdl`
3. (optional) If you use TypeScript, types for TDLib are installed separately,
   see the [Types](#types) section

To use `tdl`, you need to get TDLib first. The tdjson shared library should be
present in the system search paths (otherwise the path to libtdjson can be
specified manually).

> **Note**: When building TDLib, the libraries can be installed into the system
> using `cmake --install .` (optionally specify the `--prefix` option, the
> default is `/usr/local`) after TDLib has been built successfully. This command
> may require `sudo`.

### prebuilt-tdlib

Instead of building TDLib from source, you can possibly install pre-built TDLib libraries distributed through the `prebuilt-tdlib` npm package. To install `prebuilt-tdlib` for e.g. TDLib v1.8.19, run `npm install prebuilt-tdlib@td-1.8.19` (the available versions of `prebuilt-tdlib` can be found by running `npm info prebuilt-tdlib dist-tags`). An example of using libraries from `prebuilt-tdlib` is present in the section below. The supported systems are x86_64 GNU/Linux, x86_64 & arm64 macOS, and x86_64 Windows. See the README of [prebuilt-tdlib][] for additional information.

[prebuilt-tdlib]: packages/prebuilt-tdlib/README.md

<a name="getting-started"></a>
## Getting started

```javascript
const tdl = require('tdl')

// If libtdjson is not present in the system search paths, the path to the
// libtdjson shared library can be set manually, e.g.:
//   tdl.configure({ tdjson: '/usr/local/lib/libtdjson.dylib' })
// The library prefix can be set separate from the library name,
// example to search for libtdjson in the directory of the current script:
//   tdl.configure({ libdir: __dirname })

// Instead of building TDLib yourself, the aforementioned prebuilt-tdlib can be used as follows:
//   const { getTdjson } = require('prebuilt-tdlib')
//   tdl.configure({ tdjson: getTdjson() })

const client = tdl.createClient({
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef' // Your api_hash
})
// Passing apiId and apiHash is mandatory, these values can be obtained at https://my.telegram.org/

client.on('error', console.error)

// Aside of receiving responses to your requests, the server can push to you
// events called "updates" which ar received as follows:
client.on('update', update => {
  console.log('Got update:', update)
})

async function main () {
  // Log in to a Telegram account. By default, with no arguments, this function will ask
  // for phone number etc. in the console. Instead of logging in as a normal user,
  // it's also possible to log in as a bot using `client.loginAsBot('<TOKEN>')`.
  await client.login()

  // Invoke a TDLib method. The information regarding TDLib method list and
  // documentation is below this code block.
  const me = await client.invoke({ _: 'getMe' })
  console.log('My user:', me)

  // Invoke some other TDLib method.
  const chats = await client.invoke({
    _: 'getChats',
    chat_list: { _: 'chatListMain' },
    limit: 10
  })
  console.log('A part of my chat list:', chats)

  // Close the instance so that TDLib exits gracefully and the JS runtime can finish the process.
  await client.close()
}

main().catch(console.error)
```

The API list of TDLib methods, which are called using `client.invoke`, can be found at, e.g.:
- https://core.telegram.org/tdlib/docs/annotated.html (possibly outdated)
- or in the [td_api.tl][] file in the TDLib repository.

[td_api.tl]: https://github.com/tdlib/td/blob/66234ae2537a99ec0eaf7b0857245a6e5c2d2bc9/td/generate/scheme/td_api.tl

In the TDLib documentation, the `bytes` type means a **base64-encoded** string.
`int64` accepts either a number or a string, pass string for large numbers.
`int32`, `int53`, and `double` are the number JS type. If TypeScript types are
installed, note that the types are annotated with jsdoc comments, and the
documentation can be browsed directly in the `.d.ts` file or in the
autocompletion menu.

See also https://core.telegram.org/tdlib/getting-started for some basic
information on how to use TDLib (tdl handles the authorization part with
`client.login`). Note that the TDLib JSON interface actually sends a `@type`
field, but tdl renames it to `_`.

<!-- TODO: Add a guide on how to read the tl scheme or similar? -->

Some short examples are available in the [examples/](examples/) directory.

<a name="api"></a>
## API

> **Note**: A more exhaustive documentation is available in the
> [TypeScript typings](packages/tdl/index.d.ts) file.

#### `tdl.configure(options: TDLibConfiguration) => void`

Configure several parameters such as libtdjson name or verbosity level. This
function should be called before `tdl.createClient` or `tdl.execute`.

```javascript
tdl.configure({
  // Path to the library. By default, it is 'tdjson.dll' on Windows,
  // 'libtdjson.dylib' on macOS, or 'libtdjson.so' otherwise.
  tdjson: 'libtdjson.so',
  // Path to the library directory. By default, it is empty string.
  libdir: '/usr/local/lib',
  // Verbosity level of TDLib. By default, it is 2.
  verbosityLevel: 3,
  // Experimental option. Disabled by default.
  useNewTdjsonInterface: false
})
```

Some examples:
- `tdl.configure({ tdjson: '/root/libtdjson.so', verbosityLevel: 5 })`
- `tdl.configure({ tdjson: 'libtdjson.dylib.1.8.6', libdir: '/usr/local/lib' })`
- `tdl.configure({ libdir: __dirname })`
- `tdl.configure({ tdjson: require('prebuilt-tdlib').getTdjson() })`

The path concatenation of `libdir` + `tdjson` is directly passed to
[`dlopen`][dlopen] (Unix) or [`LoadLibrary`][LoadLibraryW] (Windows). Check your
OS documentation to find out where the shared library will be searched for.

#### `tdl.createClient(options: ClientOptions) => Client`

Create a TDLib client.

```javascript
const client = tdl.createClient({
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef' // Your api_hash
  // ... other options ...
})
```

The interface of the options that can be passed here:

```typescript
type ClientOptions = {
  apiId: number, // Can be obtained at https://my.telegram.org
  apiHash: string, // Can be obtained at https://my.telegram.org
  databaseDirectory: string, // Relative path (defaults to '_td_database')
  filesDirectory: string, // Relative path (defaults to '_td_files')
  databaseEncryptionKey: string, // Optional key for database encryption
  useTestDc: boolean, // Use test telegram server (defaults to false)
  tdlibParameters: Object, // Raw TDLib parameters
  // Advanced options:
  bare: boolean,
  skipOldUpdates: boolean
}
```

Of these fields, only `apiId` and `apiHash` are required. Any other field can be
omitted.

The `tdlibParameters` option is described in
https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1tdlib_parameters.html.

By default, in tdl, `tdlibParameters` is set to:

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

In a real application, you probably want to change `device_model` and other
parameters.

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

`client.login` supports only a subset of authentication methods available on
Telegram. It is possible (and advisable for larger apps) not to use the
`client.login` helper and implement the authorization process manually, handling
`authorizationStateWaitPhoneNumber` and other updates.

This function accepts the following interface:

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

You can consider using reactive libraries like RxJS or most.js for convenient event processing.

Some other rarely-used events also exist and are described in the TypeScript interface.

`client.addListener` is an alias for `client.on`.

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

For the information regarding TDLib API list, see the "Getting started" section
of this README.

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

#### `tdl.execute(query: Object) => (Object | null)`

Call a TDLib method synchronously. This function can be used only with the
methods marked as "can be called synchronously" in the TDLib documentation.

```javascript
const res = tdl.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})
```

#### `client.execute(query: Object) => (Object | null)`

Same as `tdl.execute`.

#### `client.close() => Promise<void>`

Close the TDLib client.

```javascript
await client.close()
```

---

For the full API, see the [index.d.ts](packages/tdl/index.d.ts) file.

<a name="types"></a>
## Types

While `tdl` works with any TDLib version (above the requirement), the TypeScript
types have to be installed specifically for the TDLib version you use. This can
be done via a small `tdl-install-types` utility, which downloads and generates
types for you. It can be called using `npx tdl-install-types` without
manually installing.

```console
$ npx tdl-install-types [<options>] [<target>]
```

It can generate types given a tdjson library (e.g. `npx tdl-install-types ./libtdjson.so`), a TDLib git ref (examples: `npx tdl-install-types v1.8.0`, `npx tdl-install-types master`, `npx tdl-install-types 2de39ffffe71dc41c538e66085658d21cecbae08`), or a td_api.tl file (`npx tdl-install-types td_api.tl`). When called without arguments, it will try to use `require('prebuilt-tdlib').getTdjson()` as the target. By default, the types are generated into a `tdlib-types.d.ts` file that you can git-commit.

See `npx tdl-install-types@latest --help` for additional information.

The types can be imported by using the `tdlib-types` module name:

```typescript
import type * as Td from 'tdlib-types'
// And use as: Td.message, Td.user, ...
```

It is considerably more convenient to use `tdl` with TypeScript, which enables
full autocompletion for the TDLib methods and objects along with the
documentation.

Note that when using `npx`, the version of `tdl-install-types` might be outdated
if you are not appending the `@latest` tag. You can also install the utility
globally or per-project as a dev dependency.

<a name="creating-multiple-clients"></a>
## Creating multiple clients

The current limitation is that the number of created clients should not exceed
[UV_THREADPOOL_SIZE][] (as for now, the default is 4, max is 1024).

When `useNewTdjsonInterface` (experimental option) is set to true in
`tdl.configure`, this limitation does not apply.

[UV_THREADPOOL_SIZE]: http://docs.libuv.org/en/v1.x/threadpool.html

<a name="possible-errors"></a>
## Possible errors

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

The cause of the segfault might be the same as above.
