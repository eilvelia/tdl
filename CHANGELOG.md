# Changelog

<!-- Hi. -->

## v6.0.0

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

## v5.2.0

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

## v3.2.2

- Fixes in TDLib flow typings.
- Internal:
- - Flow updated to v0.69.0.
