# tdl-tdlib-addon

[![npm](https://img.shields.io/npm/v/tdl-tdlib-addon.svg)](https://www.npmjs.com/package/tdl-tdlib-addon)

A Node.js N-API addon that provides bindings to the [TDLib][]'s libtdjson shared
library.

It is meant to be used with the [tdl][] package.

`tdl-tdlib-addon` provides TypeScript and Flow typings out of the box.

[TDLib]: https://github.com/tdlib/td
[tdl]: https://github.com/Bannerets/tdl

## Installation

```console
$ npm install tdl-tdlib-addon
```

## API

```javascript
const { TDLib, defaultLibraryFile } = require('tdl-tdlib-addon')
```

#### constructor: `new TDLib(libraryFile?: string, addonPath?: string)`

`libraryFile` is the filename that will be passed to [`dlopen`][dlopen] or
[`LoadLibraryW`][LoadLibraryW] on Windows.

[dlopen]: https://www.man7.org/linux/man-pages/man3/dlopen.3.html
[LoadLibraryW]: https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryw

By default, `libraryFile` is `tdjson.dll` on Windows, `libtdjson.dylib` on
macOS, and `libtdjson.so` on a different OS. This default value is exported as
`defaultLibraryFile`.

`addonPath` is `../build/Release/td.node` by default. This parameter generally
should not be changed.

Examples:

```javascript
new TDLib()
new TDLib('libtdjson.so')
new TDLib('libtdjson.dylib')
new TDLib('libtdjson.so', '../build/Release/td.node')
```

---

For other API see `TDLib_API.md` in the `tdl` repository root.
