# tdl-tdlib-ffi

[![npm](https://img.shields.io/npm/v/tdl-tdlib-ffi.svg)](https://www.npmjs.com/package/tdl-tdlib-ffi)

Node.js FFI bindings to [TDLib][]'s libtdjson. Uses [node-ffi-napi][].

It is meant to be used with the [tdl][] package.

`tdl-tdlib-ffi` provides TypeScript and Flow typings out of the box.

[TDLib]: https://github.com/tdlib/td
[tdl]: https://github.com/Bannerets/tdl
[node-ffi-napi]: https://github.com/node-ffi-napi/node-ffi-napi

## Installation

```console
$ npm install tdl-tdlib-ffi
```

## API

```javascript
const { TDLib } = require('tdl-tdlib-ffi')
```

##### constructor: `new TDLib(libraryFile?: string)`

`libraryFile`'s extension can be omitted.

`node-ffi` will append the extension and pass the library name to [`dlopen`](https://www.man7.org/linux/man-pages/man3/dlopen.3.html) (or [`LoadLibraryW`](https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryw) on Windows).

By default `libraryFile` is `tdjson` on Windows and `libtdjson` on a different OS.

Examples:

```javascript
new TDLib()
new TDLib('libtdjson')
new TDLib(path.join(__dirname, 'libtdjson'))
```

---

For other API see `TDLib_API.md` in the `tdl` repository root.
