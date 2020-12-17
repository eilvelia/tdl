# tdl-tdlib-addon

[![npm](https://img.shields.io/npm/v/tdl-tdlib-addon.svg)](https://www.npmjs.com/package/tdl-tdlib-addon)

Node.js N-API addon that provides bindings to [TDLib][]'s libtdjson.

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
const { TDLib } = require('tdl-tdlib-addon')
```

##### constructor: `new TDLib(libraryFile?: string, addonPath?: string)`

`libraryFile` is the filename that will be passed to [`dlopen`](https://www.man7.org/linux/man-pages/man3/dlopen.3.html) ([`LoadLibraryW`](https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryw) on Windows).

By default `libraryFile` is
`tdjson.dll` on Windows,
`libtdjson.dylib` on macOS,
and `libtdjson.so` on a different OS.

Examples:

```javascript
new TDLib()
new TDLib('libtdjson.so')
new TDLib('libtdjson.dylib')
new TDLib('libtdjson.so', '../build/Release/td.node')
```

---

For other API see `TDLib_API.md` in the `tdl` repository root.
