# tdl &nbsp; [![npm](https://img.shields.io/npm/v/tdl.svg)](https://www.npmjs.com/package/tdl) [![CI](https://github.com/eilvelia/tdl/actions/workflows/ci.yml/badge.svg)](https://github.com/eilvelia/tdl/actions/workflows/ci.yml)

tdl is a fairly simple JavaScript wrapper for [TDLib][] (Telegram Database library),
a library for creating [Telegram][] clients or bots.

[TDLib]: https://github.com/tdlib/td
[Telegram]: https://telegram.org/

- [Requirements](#requirements)
- [Installation](#installation)
- [Getting started](#getting-started)
- [API](#api)
- [Generating types](#generating-types)
- [Other JavaScript runtimes](#other-javascript-runtimes)
- [Troubleshooting](#troubleshooting)
- [Issue tracker](#issue-tracker)

<a name="requirements"></a>
## Requirements

- Node.js v16 or newer
- The tdjson shared library (`libtdjson.so` on Linux, `libtdjson.dylib` on macOS, `tdjson.dll` on Windows), of TDLib version 1.8.0 or newer
- In rare cases, a C++ compiler and Python installed to build the node addon[^1]

[^1]: tdl is packaged with pre-built addons for Windows (x86_64), GNU/Linux (x86_64, arm64; glibc >= 2.22), and macOS (x86_64, arm64; v11.0+). If a pre-built binary is not available for your system, then the node addon will be built using node-gyp, requiring Python and a C++ toolchain (C++14 is required) to be installed (on Windows, MSVS or Build Tools). Pass `--build-from-source` to never use the pre-built binaries. arm64 binaries are not tested in CI. Linux binaries are statically linked against libstdc++.

<a name="installation"></a>
## Installation

1. Install tdl: `npm install tdl`
2. Additionally install pre-built TDLib libraries (`npm install prebuilt-tdlib`) or
   [build][tdlib-building] TDLib yourself

To use tdl, you also need to get TDLib itself, which is dynamically loaded by
tdl. A convenient option is to use the `prebuilt-tdlib` package (which is
currently separate from tdl). Alternatively, you can build TDLib by following
its build instructions, for example in cases where `prebuilt-tdlib` is not
available for your platform, does not support the desired TDLib version, you
need a patched TDLib, or for other reasons.

> [!TIP]
> When building TDLib, the libraries can be installed into the system using
> `cmake --install .` (optionally specify the `--prefix` option, the default is
> `/usr/local`) after TDLib has been built successfully. This command may
> require `sudo`.

[tdlib-building]: https://github.com/tdlib/td#building

### prebuilt-tdlib

`prebuilt-tdlib` supports x86_64 & arm64 Linux (glibc only), x86_64 & arm64
macOS, and x86_64 Windows. An example of using libraries from `prebuilt-tdlib`
is present in the section below. See the README of [prebuilt-tdlib][] for
additional information.

[![npm](https://img.shields.io/npm/v/prebuilt-tdlib.svg?label=prebuilt-tdlib)](https://www.npmjs.com/package/prebuilt-tdlib)

[prebuilt-tdlib]: packages/prebuilt-tdlib/README.md

<a name="getting-started"></a>
## Getting started

```javascript
const tdl = require('tdl')

// Configure tdl to use the tdjson shared library from the prebuilt-tdlib
// package (should be installed separately)
const { getTdjson } = require('prebuilt-tdlib')
tdl.configure({ tdjson: getTdjson() })

// Instead of using the aforementioned prebuilt-tdlib, you can configure
// tdl to load libtdjson from specified filename, for example:
//   tdl.configure({ tdjson: '/usr/local/lib/libtdjson.dylib' })
// With no configuration, tdl loads libtdjson from the system search paths.
// The library directory can be set separate from the library name,
// example to search for libtdjson in the directory of the current script:
//   tdl.configure({ libdir: __dirname })

// Create a client. It is mandatory to pass apiId and apiHash, these can be
// obtained at https://my.telegram.org/
const client = tdl.createClient({
  apiId: 2222, // Replace with your api_id
  apiHash: '0123456789abcdef0123456789abcdef' // Replace with your api_hash
})

client.on('error', console.error)

// Aside of sending responses to your requests, TDLib pushes to you
// events called "updates", which can be received as follows:
client.on('update', update => {
  console.log('Received update:', update)
})

async function main () {
  // Log in to a Telegram account. By default, with no arguments, this function will
  // ask for phone number etc. in the console. Instead of logging in as a user,
  // it's also possible to log in as a bot using `client.loginAsBot('<TOKEN>')`.
  await client.login()

  // Call a TDLib method. The information regarding TDLib method list and
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

  // Close the instance so that TDLib exits gracefully and the JS runtime can
  // finish the process.
  await client.close()
}

main().catch(console.error)
```

Instead of using CommonJS (`require('tdl')`), one can import tdl in an
EcmaScript module through the interoperability with CommonJS:
`import * as tdl from 'tdl'` (or import only some functions:
`import { createClient } from 'tdl'`).

The API reference of the TDLib methods, which are called using `client.invoke`,
can be found at, e.g.:
- https://core.telegram.org/tdlib/docs/annotated.html,
- the [td_api.tl][] file in the TDLib repository,
- if the TypeScript types for TDLib are installed, the documentation can be
  browsed directly in the editor, using the editor's autocompletion menu or the
  `tdlib-types.d.ts` file (the types are annotated with JSDoc comments).

In the TDLib documentation, the `bytes` type means a **base64-encoded** string.
`int64` accepts either a number or a string, pass string for large numbers.
`int32`, `int53`, and `double` are the number JS type.

See also https://core.telegram.org/tdlib/getting-started for some basic
information on how to use TDLib (tdl handles the authorization part with
`client.login`). Note that the TDLib JSON interface actually sends a `@type`
field, but tdl renames it to `_`.

Some short examples are available in the [examples/](examples/) directory.

<!-- TODO: Perhaps add a guide on how to read the tl schema or similar? -->

If you use TypeScript, types for TDLib can me imported using `import type * as
Td from 'tdlib-types'`, see also [Generating types](#generating-types).

[td_api.tl]: https://github.com/tdlib/td/blob/master/td/generate/scheme/td_api.tl

<a name="api"></a>
## API

> [!NOTE]
> More exhaustive documentation can be found in the
> [TypeScript declaration file](packages/tdl/index.d.ts).

#### `tdl.configure(options: TDLibConfiguration) => void`

Configure several parameters such as libtdjson filename or verbosity level. This
function should be called before `tdl.createClient` or `tdl.execute`. Can be
called multiple times.

The possible parameters are:

```javascript
tdl.configure({
  // Path to the library. By default, it is 'tdjson.dll' on Windows,
  // 'libtdjson.dylib' on macOS, or 'libtdjson.so' otherwise.
  tdjson: 'libtdjson.so',
  // Path to the library directory. Defaults to the empty string.
  libdir: '/usr/local/lib',
  // Set the verbosity level of TDLib. Defaults to 1.
  verbosityLevel: 1,
  // Advanced options:
  useOldTdjsonInterface: false,
  receiveTimeout: 10,
})
```

Some examples:
- `tdl.configure({ tdjson: '/root/libtdjson.so', verbosityLevel: 5 })`
- `tdl.configure({ libdir: '/usr/local/lib', tdjson: 'libtdjson.dylib.1.8.6' })`
- `tdl.configure({ libdir: __dirname })` (use libtdjson from the directory of the current script, in CJS)
- `tdl.configure({ tdjson: require('prebuilt-tdlib').getTdjson() })` (use libtdjson from prebuilt-tdlib)

The path concatenation of `libdir` + `tdjson` is directly passed to
[`dlopen`][dlopen] (Unix) or [`LoadLibrary`][LoadLibraryW] (Windows).

This function must be called before TDLib is initialized, that is, before
any of `createClient` / `execute` are called.

#### `tdl.createClient(options: ClientOptions) => Client`

Create a TDLib client.

```javascript
const client = tdl.createClient({
  apiId: 2222, // Your api_id
  apiHash: '0123456789abcdef0123456789abcdef' // Your api_hash
  // ... other options ...
})
```

`createClient` accepts options of the following interface:

```typescript
type ClientOptions = {
  apiId: number, // Can be obtained at https://my.telegram.org
  apiHash: string, // Can be obtained at https://my.telegram.org
  databaseDirectory?: string, // Path, relative to cwd (defaults to '_td_database')
  filesDirectory?: string, // Path, relative to cwd (defaults to '_td_files')
  databaseEncryptionKey?: string, // Optional key for database encryption
  useTestDc?: boolean, // Use test telegram server (defaults to false)
  tdlibParameters?: Object, // Raw TDLib parameters
  skipOldUpdates?: boolean // Advanced option
}
```

Of these fields, only `apiId` and `apiHash` are required. Any other field can be
omitted. They are more thoroughly described in the documentation comments
of the TypeScript types.

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
  api_id: options.apiId,
  api_hash: options.apiHash,
  database_directory: options.databaseDirectory,
  files_directory: options.filesDirectory,
  use_test_dc: options.useTestDc
}
```

In a real application, you likely want to change `device_model` and other
parameters.

#### `client.login(arg?: LoginDetails | (() => LoginDetails)) => Promise<void>`

Attach an update handler to log you in to your Telegram account.

```javascript
await client.login()
```

By default, tdl asks the user for their phone number, auth code, and 2FA
password (if needed) on the terminal. You can override the defaults with custom
functions that return promises, for example:

```javascript
// Example
await client.login({
  async getPhoneNumber(retry) {
    if (retry) throw new Error('Invalid phone number')
    return '+9996620001'
  },
  async getAuthCode(retry) {
    if (retry) throw new Error('Invalid auth code')
    return '22222'
  },
  async getPassword(passwordHint, retry) {
    if (retry) throw new Error('Invalid password')
    return 'mypassword'
  },
  async getName() {
    return { firstName: 'John', lastName: 'Doe' }
  }
})
```

`getName` is called if the user is not signed up.

`client.login` is a pretty basic function that supports only a subset of
authentication methods available on Telegram. It is possible (and advisable for
larger apps) not to use the `client.login` helper and implement the
authorization process manually, handling `authorizationStateWaitPhoneNumber` and
other updates.

This function accepts the following interface:

```typescript
interface LoginDetails {
  getPhoneNumber?: (retry?: boolean) => Promise<string>,
  getEmailAddress?: () => Promise<string>,
  getEmailCode?: () => Promise<string>,
  confirmOnAnotherDevice?: (link: string) => void,
  getAuthCode?: (retry?: boolean) => Promise<string>,
  getPassword?: (passwordHint: string, retry?: boolean) => Promise<string>,
  getName?: () => Promise<{ firstName: string, lastName?: string }>
}
declare function login(details?: LoginDetails | (() => LoginDetails)): Promise<void>
```

`getEmailAddress` and `getEmailCode` are called in TDLib >= v1.8.6 only.

#### `client.loginAsBot(token: string | (() => string | Promise<string>)) => Promise<void>`

Instead of logging in as a user, you can log in as a bot using a bot token.

```javascript
await client.loginAsBot('YOUR_BOT_TOKEN') // Enter your token from @BotFather
```

#### `client.on(event: string, callback: Function) => Client`

Attach an event listener. The `'update'` event can be used to iterate through
received updates.

```javascript
function onUpdate (update) {
  console.log('New update:', update)
}
client.on('update', onUpdate)
client.on('error', console.error)
```

If an exception is thrown inside your event listener, it is emitted as the
`'error'` event (other things like invalid client options or potential internal
errors can also be emitted as `'error'`). Ideally, you should always have a
listener on `client.on('error')`, otherwise an unhandled promise rejection will
appear.

The other available event is `'close'`. After `close` (the
`authorizationStateClosed` update), it isn't possible to send requests and the
client should not be used anymore.

Since tdl v8.0.0, there's an alternative method to receive updates using async
iterators, see `iterUpdates` below.

`client.addListener` is an alias for `client.on`.

#### `client.once(event: string, callback: Function) => Client`

Attach a one-time listener; otherwise similar to `client.on`.

#### `client.off(event: string, listener: Function) => boolean`

Remove an event listener.

```javascript
function listener (u) {
  console.log('New update:', u)
  if (u?.authorization_state?._ === 'authorizationStateReady')
    client.off('update', listener) // Removes the listener
}
client.on('update', listener)
```

The returned value indicates whether the listener has been successfully removed
or not.

`client.removeListener` is an alias for `client.off`.

#### `client.iterUpdates() => AsyncIterableIterator<Td.Update>`

An alternative approach (added in tdl v8.0.0) to get updates is to use async
iterators instead of `client.on('update', ...)`:

```javascript
for await (const update of client.iterUpdates()) {
  console.log('Received update:', update)
  if (update._ === 'updateOption' && update.name === 'my_id') {
    console.log(`My ID is ${update.value.value}!`)
    break
  }
}
```

#### `client.invoke(query: Request) => Promise<Response>`

Call a TDLib method asynchronously. If the request fails, the promise rejects
with `TDLibError` containing the error code and error message.

For information regarding the TDLib API list, see the
[Getting started](#getting-started) section of this README.

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

#### `client.close() => Promise<void>`

Close the TDLib client.

```javascript
await client.close()
```

#### `tdl.execute(query: Request) => Td.error | Response`

Call a TDLib method synchronously. This function can be used only with the
methods marked as "can be called synchronously" in the TDLib documentation.

```javascript
const res = tdl.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})
```

`client.execute` is equivalent to `tdl.execute`.

#### `tdl.setLogMessageCallback(maxVerbosityLevel: number, cb: Function | null) => void`

Set the callback that is called when a message is added to the TDLib log. This
corresponds to the `td_set_log_message_callback` tdjson function. The callback
overrides the previously set callback.

<a name="generating-types"></a>
## Generating types

> [!TIP]
> It is generally significantly more convenient to use tdl with TypeScript,
> which enables autocompletion along with the documentation for more than 2500
> TDLib methods and structures.

While tdl works with any TDLib version (above the requirement), the TypeScript
types have to be installed specifically for the TDLib version you use. This can
be done via a small `tdl-install-types` utility, which downloads and generates
types for you. It can be called using `npx tdl-install-types` without a separate
installation step.

`prebuilt-tdlib` since td-1.8.52 (2025-08-11) already comes with TypeScript
types generated, so this section is only relevant if you do not use
`prebuilt-tdlib`, use older version of it, or need to patch the types.

```console
$ npx tdl-install-types [<options>] [<target>]
```

(Type "y" in case it asks to install the `tdl-install-types` package.)

This utility can generate types for a given tdjson library file (extracting
commit hash from the binary file), for the installed version of
prebuilt-tdlib, for a certain TDLib git ref, or for a td_api.tl file. Various
examples of using `tdl-install-types`:

```console
$ npx tdl-install-types prebuilt-tdlib # generate types for the installed prebuilt-tdlib
$ npx tdl-install-types # similar to the above one, try to install types for prebuilt-tdlib
$ npx tdl-install-types ./libtdjson.so # generate types for this shared library file in the cwd
$ npx tdl-install-types 0ada45c3618108a62806ce7d9ab435a18dac1aab # types for this TDLib commit
$ npx tdl-install-types master # types for this TDLib branch
$ npx tdl-install-types v1.8.0 # types for the git tag in the TDLib repository
$ npx tdl-install-types ./td_api.tl # generate types based on the td_api.tl file in the cwd
```

By default, the types are generated into a `tdlib-types.d.ts` file that you can
git-commit. The declaration file should be inside your TypeScript project to
work. When you update the version of TDLib, don't forget to also update the
types: it's important to keep the types in sync with the interface TDLib
actually uses.

See `npx tdl-install-types --help` for additional information.

The types can be imported by using the `tdlib-types` module name:

```typescript
import type * as Td from 'tdlib-types'
// And use as: Td.message, Td.user, ...
```

That is, a package named `tdlib-types` does not need to be installed separately.

Note that when using `npx`, the version of `tdl-install-types` might be cached
and outdated if you are not appending the `@latest` tag
(`npx tdl-install-types@latest --help`). You can also install the utility
globally or per-project as a dev dependency.

[![npm](https://img.shields.io/npm/v/tdl-install-types.svg?label=tdl-install-types)](https://www.npmjs.com/package/tdl-install-types)

<a name="other-javascript-runtimes"></a>
## Other JavaScript runtimes

Since [bun][] is Node.js-compatible and [supports Node-API][bun-napi], tdl
generally works out of the box, however the stability may not be the best yet.

[deno][] can also import tdl through the node compatibility via
`import * as tdl from 'npm:tdl'`. To use tdl in deno, you must ensure that your
deno version is 1.44.2 (2024-06-13) or greater. The Node-API implementation was
broken in older deno versions and can easily result in segfaults. There's a
small example in `examples/deno-example.ts`.

tdl depends on native libraries and cannot be used in the browser. TDLib itself,
however, can work in the browser if you compile it to WebAssembly. There is an
outdated official [tdweb][] library, for example. Previously, tdl implemented
basic browser support as well, but the idea has been dropped.

[bun]: https://bun.sh/
[bun-napi]: https://github.com/oven-sh/bun/issues/158
[deno]: https://deno.com/
[tdweb]: https://www.npmjs.com/package/tdweb

<a name="troubleshooting"></a>
## Troubleshooting

Some of the possible errors include:

### "Dynamic Loading Error"

- `Dynamic Loading Error: Win32 error 126` (Windows)
- `Dynamic Loading Error: dlopen(…) image not found` (macOS)
- `…cannot open shared object file: No such file or directory` (Linux)

The tdjson shared library or one of its dependencies (for example, libssl)
cannot be found. To troubleshoot dependency issues, try to run
`ldd libtdjson.so` on Linux or `otool -L libtdjson.dylib` on macOS. On Windows,
you can use an app like Dependency Walker.

Check the documentation of [dlopen][] (Linux), [dlopen][dlopen-macos] (macOS),
[Dynamic-Link Library Search Order][dllso] (Windows) to make sure the shared
library is present in the search paths. By default, Linux does not search in the
current working directory, while macOS does.

With `prebuilt-tdlib`, everything should work out of the box (on supported
platforms).

[dllso]: https://docs.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-search-order#standard-search-order-for-desktop-applications
[dlopen-macos]: https://developer.apple.com/library/archive/documentation/System/Conceptual/ManPages_iPhoneOS/man3/dlopen.3.html

[dlopen]: https://www.man7.org/linux/man-pages/man3/dlopen.3.html
[LoadLibraryW]: https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryw

### "No such file or directory"

- `fatal error: napi.h: no such file or directory`
- `error: no such file or directory: …/node-modules/node-addon-api`

The path to the directory in which you execute `npm install` likely contains
spaces, which is not supported by gyp:
https://github.com/nodejs/node-gyp/issues/65#issuecomment-368820565.

### Messages from certain chats are not received or are delayed

This is likely caused by missing `openChat` calls. Call the `openChat` method
with the chat from which you want to receive messages (can be called multiple
times). Also ensure that you are not using a too old version of TDLib. Search
for "openChat" in TDLib issues for more information.

### "No native build was found"

- `No native build was found for platform=…`

A pre-built node addon is not available for your system[^1], and the node addon
has not been built from source. The C and C++ compilers, `python3`, `make`
should be available on your system to build the tdl's node addon; `npm install`
(or `npm ci` or similar) should be run to build the addon. Also note that, for
example, when building a Docker container, you generally cannot just copy the
node modules from the host system.

### "tdjson is already loaded"

- `tdjson is already loaded`

If you use `node:worker_threads`, there are some caveats. tdl with the new
tdjson interface can be used in only one thread. With the old tdjson interface,
i.e. `tdl.configure({ useOldTdjsonInterface: true })`, it is possible to
use tdl in multiple worker threads, however `tdjson` and `libdir` options of
`tdl.configure` will be ignored on subsequent tdl initializations. You might
also want to set `tdl.configure({ verbosityLevel: 'default' })` so the verbosity
level is set only once. The client should not be shared to other threads.

### OpenSSL incompatibility

- `Error while reading RSA public key`

You can get this error if libtdjson is dynamically linked against OpenSSL, and
some of the symbols got resolved into Node.js instead of the system OpenSSL.
This error should not occur if you use `prebuilt-tdlib`.

Note that Node.js also uses OpenSSL (the distributed binaries are statically
linked against it) and exports the OpenSSL symbols. In the result, there are
two versions of OpenSSL in the same application. Then, using standard dlopen,
especially on Linux, most of the symbols will be resolved into libcrypto
inside the Node.js binary, not into the system libcrypto. It still can work
correctly if the versions are ABI-compatible, i.e. if TDLib is linked against an
OpenSSL version sufficiently similar to the version that Node.js uses
(`node -p "process.versions.openssl"`).

tdl tries to get around the symbol conflict issues by using `RTLD_DEEPBIND`
when available, so these issues should be rare in practice (unless you use
musl). Additionally, `prebuilt-tdlib` links OpenSSL statically into the binary
file.

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
`OPENSSL_USE_STATIC_LIBS` option in cmake) or link it against the OpenSSL
version that Node.js uses.

Another possible option is to rebuild Node.js from source, linking it
dynamically against the same system OpenSSL. That way, there is only one
instance of OpenSSL in the application. For example, using [nvm][], you can
install Node.js v18 from source on GNU/Linux via this command:

```console
$ nvm install -s 18 --shared-openssl --shared-openssl-includes=/usr/include/ --shared-openssl-libpath=/usr/lib/x86_64-linux-gnu/
```

[nvm]: https://github.com/nvm-sh/nvm

However, it's inconvenient for most users to rebuild Node.js.

Another hypothetical solution is to rebuild TDLib with the OpenSSL headers
distributed in Node.js (`<path-to-node>/include/node/`) without linking it to
anything, simply leaving the undefined symbols. Using this option, there is also
only one OpenSSL. The author hasn't checked that this works or that Node exports
all the symbols needed for TDLib. With this option, TDLib also should be rebuilt
every time Node.js updates the OpenSSL dependency.

This issue doesn't apply to Electron because it doesn't export OpenSSL symbols.

### Segmentation fault

The cause of the segfault might be the same as the above one. If tdl crashes
with segmentation fault, open an issue.

<a name="issue-tracker"></a>
## Issue tracker

Reporting bugs (besides feature requests and other stuff) is very welcome in
tdl's GitHub issue tracker. However, while the author can answer some questions
on how to use TDLib itself, they do not know the entirety of TDLib API, and it
may be better (and faster to get the response) to ask questions related to
TDLib specifics in the `t.me/tdlibchat` group.

---

[🥒](https://github.com/search?q=repo%3Atdlib%2Ftd%20cucumber&type=code)
