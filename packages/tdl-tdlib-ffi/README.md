# tdl-tdlib-ffi

[![npm](https://img.shields.io/npm/v/tdl-tdlib-ffi.svg)](https://www.npmjs.com/package/tdl-tdlib-ffi)

This is TDLib binding for Node.js. It uses node ffi (`ffi-napi` package).

It is meant to use with the `tdl` wrapper.

## Installation

```console
$ npm install tdl tdl-tdlib-ffi
```

## API

```javascript
const { TDLib } = require('tdl-tdlib-ffi')
```

##### constructor: `new TDLib(libraryFile?: string)`

```javascript
new TDLib()
new TDLib('libtdjson')
```

By default `libraryFile` is `tdjson` on Windows and `libtdjson` on a different OS.

---

For other API see `TDLib_API.md` in the `tdl` repository root.
