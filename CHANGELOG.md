# Changelog

<!-- Hi! -->

## Unreleased tdl@8.0.0

- The compatibility with `tdl-tdlib-addon` is removed. The `Client` constructor
  is no longer exported. The non-deprecated API mostly remains the same.
- TDLib < v1.8.0 is no longer supported.
- Node.js < v16.0.0 is no longer supported.
- The new tdjson interface is now used by default. The `useNewTdjsonInterface`
  option in `tdl.configure` is removed; `useOldTdjsonInterface` is added
  instead.
- Added `client.iterUpdates()` to receive updates via async iterators as an
  alternative to `client.on('update', ...)`. Example:
  ```javascript
  for await (const update of client.iterUpdates()) {
    if (update._ === 'updateOption' && update.name === 'my_id') {
      console.log(`My ID is ${update.value.value}!`)
      break
    }
  }
  ```
- The semantics of `client.login` are slightly changed and simplified.
  `client.login()` can now accept the object directly besides a function
  returning the object.
- The TDLib errors are now wrapped in a new `TDLibError` class; `TdlError`
  is removed and replaced with `UnknownError`.
- Removed deprecated client options: `receiveTimeout`, `useDefaultVerbosityLevel`,
  `disableAuth`, `useMutableRename`, `verbosityLevel`.
- Removed the `bare` client option. `tdl.createBareClient(): Client` is added
  instead.
- Removed deprecated client methods: `destroy`, `pause`, `resume`, `connect`,
  `connectAndLogin`, `getBackendName`, `setLogFatalErrorCallback`
  (`tdl.setLogFatalErrorCallback` is added instead, though still deprecated).
- Removed deprecated exports: `TDL`, `Tdl`.
- Removed deprecated events: `response`, `auth-needed`, `auth-not-needed`. The
  `destroy` event is renamed to `close`.
- `client.off` now returns `boolean` instead of `void`; the `once` parameter is
  removed. (The `eventemitter3` dependency is also dropped.)
- Internal: The `tdl` client code was rewritten to TypeScript.

## Unreleased tdl-install-types@0.2.0

- Added a `--github-repo` CLI option.
- Added `-h` and `--version` aliases.
- The generator now indicates that the `bytes` parameters are base64.
- The version of `tdl-install-types` is now included in the header of the
  generated files.
- No longer generates `null` for return types of `Execute`.
- Functions not marked as synchronous are no longer generated in `Execute`.
- Added `$Function`.

## tdl@7.4.1 (2024-02-16)

- Fixed a race condition (first reported when used in bun). This was publised as
  `tdl@7.4.1-beta.0` on 2023-11-07.

## tdl@7.4.0 (2023-10-10)

- Added `tdl.setLogMessageCallback` that allows to pass a callback to the
  `td_set_log_message_callback` TDLib function using Node-API's thread-safe
  functions. (TDLib v1.8.0+ only)
- `tdl.configure`: Added an experimental option `useNewTdjsonInterface` that
  enables the use of `td_create_client_id`/`td_send`/`td_receive`/`td_execute`
  interface with a client manager and global receive loop, though the old
  interface still works well. (TDLib v1.7.0+ only)
- Changed the implementation of the old tdjson interface bindings so that the
  limitation of max `UV_THREADPOOL_SIZE` clients is lifted.
- `tdl.configure`: Added a `receiveTimeout` advanced option.
- `tdl.createClient`: `receiveTimeout` in the client options is deprecated.
- `tdl.createClient`: Deprecated the `useMutableRename` advanced option.

## tdl-install-types@0.1.0 (2023-09-26)

Initial release of a new cli utility that is now recommended to use instead of
installing the `tdlib-types` package. It can generate a `tdlib-types.d.ts` file
when given a shared library / tdlib git ref / td_api.tl file and can be called
via `npx`. (See the "Types" section in the README for more information.) Changes
were also made to the generator to make the autocompletion faster.

## tdl@7.3.2 (2023-09-21)

- Fixed `Symbol not found: node_register_module_v…` errors on some platforms.
- Fixed passing falsy values to `tdl.configure`.

## prebuilt-tdlib@td-1.8.14 (2023-06-26)

Changes were made to the building process of `prebuilt-tdlib`:

- Added support for macOS arm64 (M1 / Apple silicon); a universal binary is
  shipped.
- The linux binaries are now built on environment with glibc 2.17 instead of
  2.31 and work on older Linux distributions. Some cloud environments such as
  Amazon Linux 2 or Google Cloud Functions (nodejs <= 16) use older glibc,
  `prebuilt-tdlib` should run out of the box on these systems now.
- Restored support for older versions of macOS, >= 10.14 is currently supported.

## tdl@7.3.1 (2023-06-22)

This update introduces some significant and long-planned changes to the
interface, while retaining backward compatiblity.

- No longer need to separately install `tdl` and `tdl-tdlib-addon`; just install
  `tdl`. `tdl-tdlib-addon` is deprecated. The library is mostly focused to
  Node.js only now, deno support can be added later as a separate library. This
  simplifies tdl.
- To better reflect the distinction between TDLib-global and instance-specific
  functions, TDLib-global options are now passed in the special `configure`
  function, and `execute` is decoupled from clients. As an example:
  ```javascript
  const tdl = require('tdl')
  tdl.configure({
    tdjson: 'libtdjson.dylib',
    libdir: '/usr/local/lib',
    verbosityLevel: 3 /* the default is 2 */
  })
  tdl.execute({ _: 'setLogStream', /* ... */ })
  const client = tdl.createClient({
    apiId: /* your api id */,
    apiHash: /* your api hash */
  })
  await client.login()
  ```
  The full documentation for the `configure` function is available in the
  TypeScript typings. The old `new Client` approach is still supported but
  deprecated.
- The `verbosityLevel` client option is deprecated (moved to `tdl.configure`).
- Added pre-built binaries for the node addon using `prebuildify` and `node-gyp-build`.
- Updated README to be somewhat more user-friendly. Aside of documentation
  changes, the library also should be simpler to use now.
- The packages `tdl-tdlib-wasm` and `tdl-shared` are deprecated. Any webassembly
  support is removed.
- Deprecated `Client#getBackendName`.

Old code:

```javascript
const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')
const client = new Client(new TDLib('path/to/libtdjson'), {
  apiId,
  apiHash,
  verbosityLevel: 0,
  // ...
})
```

New code:

```javascript
const tdl = require('tdl')
tdl.configure({ tdjson: 'path/to/libtdjson', verbosityLevel: 0 })
const client = tdl.createClient({
  apiId,
  apiHash,
  // ...
})
```

If the default values of `tdjson` and `verbosityLevel` are used, then calling
`configure` is optional.

## tdl-tdlib-addon@1.2.2 (2023-03-23)

- Fixed freeing unallocated memory on app shutdown if callbacks were set.
- Updated dependencies.

## tdl@7.2.0 (2022-10-11)

- It is no longer needed to call `client.connect` or `client.connectAndLogin`,
  these functions are deprecated.
- Added a `client.loginAsBot` function.
- Added documentation to the `.d.ts` declaration file.
- Deprecated `client.setLogFatalErrorCallback` and `client.destroy`.
- Deprecated the `useDefaultVerbosityLevel` advanced option, it is replaced
  with `verbosityLevel: 'default'`.
- Renamed the `disableAuth` advanced option to `bare`, `disableAuth` is now
  deprecated.

## tdl@7.1.0 (2022-09-18)

- Added support for TDLib >= v1.8.6.
- New functions in `LoginDetails`: `getEmailAddress`, `getEmailCode`,
  `confirmOnAnotherDevice`.
- Added a `client.getVersion(): string` function, undocumented in the README for
  now.

## tdl-tdlib-addon@1.2.1 (2022-09-01)

- On Linux, `dlopen` with `RTLD_DEEPBIND` (if available) is now used instead of
  `dlmopen`. `dlmopen` was not stable enough. This fixes some segmentation
  faults on GNU/Linux.

## tdl-tdlib-addon@1.2.0 (2022-08-29)

- Exports the `defaultLibraryFile` string. It can be imported using
`const { defaultLibraryFile } = require('tdl-tdlib-addon')`.
- On GNU/Linux with glibc, `dlmopen` is used instead of `dlopen` to prevent
OpenSSL compatibility issues.

## tdl-tdlib-addon@1.1.0 (2022-07-27)

- Fixes `Check failed: result.second` errors on Node.js v16+ (and sometimes v14).
This changes the representation of the `client`.

## tdl-tdlib-addon@1.0.1 (2021-02-16)

- Fixes node-gyp's error log output when installing using npm v7.

## tdl@7.0.0 (2021-01-14)

- **Important**: TypeScript and Flow users now need to install `tdlib-types` for the TDLib typings to work.
It is now possible to install the typings for other TDLib versions.
- `client.pause()` and `client.resume()` are now deprecated.
- Removed deprecated `client.invokeFuture`.
- Added a `client.getBackendName(): string` function.
- Dropped support for TDLib v1.4.0. TDLib v1.5.0 or newer is required now.
- Requires `tdl-shared@0.10.0`.
- Multiple documentation improvements.
- Internal:
- - Updated Flow to v0.138.0.

## tdlib-types@1 (2021-01-14)

- This is the first release of `tdlib-types`, see its [README](packages/tdlib-types/README.md).
- The TDLib typings have been split from the `tdl` package into this package.
- The generator now parses "may be null" comments.
- Added typings for TDLib v1.7.0.

## tdl-shared@0.10.0, tdl-tdlib-addon@1.0.0, tdl-tdlib-ffi@3.0.0, tdl-tdlib-wasm@0.6.0 (2021-01-14)

- Removed deprecated `setLogFilePath`, `setLogMaxFileSize`, and `setLogVerbosityLevel`.
- New method: `getName(): string`.
- `create()` now doesn't need to return a promise.

## tdl-tdlib-addon@0.8.2 (2020-12-04)

- Fixed not building on Windows.

## tdl@6.2.0 (2020-11-08)

- New method: `client.close()`, returns a promise.
- `client.invokeFuture` is deprecated.
- `tdl-tdlib-addon` is now recommended instead of `tdl-tdlib-ffi`.
Note that the libraryFile extension in tdl-tdlib-addon is mandatory (ffi-napi automatically appends the extension).
- Documentation improvements.
- Other improvements.

## tdl-tdlib-addon@0.8.0 (2020-11-08)

- Uses dlopen instead of rpath.
- Added support for `td_set_log_fatal_error_callback`.
- Major improvements.

## tdl-tdlib-ffi@2.0.1 (2020-11-08)

- Minor improvements.

## tdl-tdlib-ffi@2.0.0 (2020-06-30)

- ffi-napi updated to v3.
This adds support for Node.js v14 and drops support for Node.js older than v10.

## tdl@6.1.0 (2020-03-22)

- Adds full support for TDLib v1.6.0:
- - TDLib typings are updated to TDLib v1.6.0.
- - Registration in the `login` function now works with TDLib v1.5.0+ (and doesn't support tdlib <1.5.0). PR: [#71][].
- Several improvements to the documentation.
- Internal:
- - Moved the `tdlib-typings` project into this repository.

[#71]: https://github.com/Bannerets/tdl/pull/71

## tdl@6.0.1 (2019-05-07)

- Fixed renaming of objects in an array (see [#48][]).

[#48]: https://github.com/Bannerets/tdl/issues/48

## v6.0.0 (2019-05-02)

- **Important**: Allowed recovery from invalid phone numbers (see [#33][]). `loginDetails.phoneNumber`/`loginDetails.token` field replaced with `loginDetails.getPhoneNumber`/`loginDetails.getToken` function.
- **Important**: `new Client(options)` -> `new Client(tdlibInstance, options)`
- Splitted `tdl` into two packages: `tdl` and `tdl-tdlib-ffi`. Users should manually install both.
- Now the `tdl` core package can work in browser.
- Added the `tdl-tdlib-wasm` package.
- (very unstable) Added the `tdl-tdlib-addon` package.
- Removed static method `Client.fromTDLib`.
- Changed behaviour of `client.on('update')` and `client.on('error')`.
- `client.login()` (and `client.connectAndLogin()`) argument is optional now.
- Added `client.off` (alias of `client.removeListener`) and `client.addListener` (alias of `client.on`). `Rx.fromEvent` from RxJS 6 can now work with `tdl` out of the box. Example: `Rx.fromEvent(client, 'update')`.
- Removed `client.setLogFilePath`, `client.setLogMaxFileSize`, `client.setLogVerbosityLevel` methods, which are deprecated in TDLib.
- Added the `disableAuth` advanced option.
- Many documentation improvements.
- Added basic contributing guidelines.
- TDLib typings for TS/Flow:
- - Updated to tdlib v1.4.0.
- - Changed names of "input" kind of types: `xxxOptional` -> `xxx$Input`
- - Properties of input types are read-only now.
- - Flow: Now all types are exact. Previously, only input types were exact.
- - Flow: Now non-input types are subtypes of input.
- Other minor improvements.

[#33]: https://github.com/Bannerets/tdl/issues/33

## v5.2.0 (2018-10-24)

- Added `client.connectAndLogin` method.
- File `types/tdlib.ts` renamed to `types/tdlib.d.ts` (see [#31][]).

[#31]: https://github.com/Bannerets/tdl/issues/31

## v5.1.0

- Added `client.pause()` and `client.resume()` functions, which allow you to pause update receiving.

## v5.0.1

- Fixed [#24][].

[#24]: https://github.com/Bannerets/tdl/issues/24

## v5.0.0

- **Important**: The `client.connect` function is now splitted into two functions: `client.connect` and `client.login`. Removed `beforeAuth` argument from `client.connect` function. Removed `loginDetails` option from `Client` constructor; now `client.login` accepts a function that returns `LoginDetails`.
- Added OS detection. Now `tdl` searches for `tdjson` on Windows and for `libtdjson` on other OSes.
- Added `response` event that allows reading pure updates (i.e. "events" or "responses") that come from tdlib `client_receive()`.
- Removed `logFilePath` option. `client.setLogFilePath()` method can be used instead.
- `tdlib.send` now returns `undefined` instead of `null`.
- Added `databaseEncryptionKey` option.
- Added `useDefaultVerbosityLevel` option for advanced users. When it's set to true, `tdl` doesn't invoke `setLogVerbosityLevel` during `connect()`.
- TDLib typings updated to TDLib v1.3.0. Documentation comments added to TDLib typings.
- Many documentation improvements.
- `tdlib.setLogFatalErrorCallback` now accepts `null`.
- `client.setLogFatalErrorCallback` now accepts `null`.
- Internal:
- - Added internal package `tdl-shared` with TS / Flow types.
- - Added [`debug`](https://github.com/visionmedia/debug#readme) namespaces: `tdl:client:emitter`, `tdl:client:response`, `tdl:client:request`.
- - Many improvements of tests for TS / Flow typings.

## v4.1.0

- Added `client.removeListener` function.
- Internal:
- - Flow updated to v0.76.0.

## v4.0.0

- Added `beforeAuth` argument in `client.connect` function.
- `dev` option renamed to `useTestDc`.
- Added `Client.create` and `Client.fromTDLib` static methods.
- Added `auth-not-needed` event.
- Changed `client.on('error')` signature: `(event: 'error', listener: (err: TDError) => void) => Client` to `(event: 'error', listener: (err: TDError | Error) => void) => Client`.
- Internal:
- - Now names of private fields start with `_`.
- - Added tests for Flow typings.

## v3.8.2

- Now errors in `_loop` are correctly handled. See [#16][].

[#16]: https://github.com/Bannerets/tdl/pull/16

## v3.8.1

- Some fixes in TDlib TS typings.

## v3.8.0

- Added TypeScript typings.

## v3.7.0

- Minimum Node.js version is `8.6.0`.
- Added sign up support. Added `loginDetails.getName` function.
- Added support of previously unsupported tdjson functions:
- - Added `client.setLogMaxFileSize`.
- - Added `client.setLogFatalErrorCallback`.
- - Added `tdlib.setLogMaxFileSize`.

## v3.6.3

- Bugfixes. See [#6][].
- Internal:
- - Added `.gitattributes`.

[#6]: https://github.com/Bannerets/tdl/pull/6

## v3.6.2

- Fixed value of `main` field in `package.json`.

## v3.6.1

- Some improvements of Flow typings.

## v3.6.0

- `src/tdlib-types.js` renamed to `types/tdlib.js`.
- Added `tdlib.setLogFatalErrorCallback` method.
- Documentation: Added 'typings' and 'examples' section in README.

## v3.5.2

- Bugfixes.

## v3.5.1

- `prepublish` script in package.json replaced with `prepare` and `prepack`.
- Internal:
- - Added eslint.
- - Added `.editorconfig`.

## v3.5.0

- Added `client.invokeFuture` function.
- Added `multiple-accounts.js` and `using-fluture.js` examples.
- Added `tdlibIntance` option.
- Some documentation improvements.
- Some bugfixes.

## v3.4.0

- Added event `auth-needed`.
- Fixed arrays in TDLib flow typings.

## v3.3.0

- Added `TDLib_API.md` file.
- `inquirer` replaced with `promptly`.
- Added `useMutableRename` option.
- Travis activated. `build` badge added to README.
- Added `skipOldUpdates` option.
- Node.js `events` replaced with `eventemitter3`.

## v3.2.2 (2018-05-16)

- Fixes in TDLib flow typings.
- Internal:
- - Flow updated to v0.69.0.
