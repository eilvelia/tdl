# tdl-tdlib-addon

[![npm](https://img.shields.io/npm/v/tdl-tdlib-addon.svg)](https://www.npmjs.com/package/tdl-tdlib-addon)

Experimental wrapper that uses node addons instead of node ffi.

It is meant to use with the `tdl` package.

## Installation

```console
$ npm install tdl tdl-tdlib-addon
```

## API

```javascript
const { TDLib } = require('tdl-tdlib-addon')
```

##### constructor: `new TDLib(path?: string)`

```javascript
new TDLib()
new TDLib('../build/Release/td.node')
```

---

For other API see `TDLib_API.md` in the `tdl` repository root.
