## Prebuilt TDLib

This package distributes pre-built [TDLib][] shared libraries through npm.
The libraries are built on GitHub Actions: [prebuilt-tdlib.yml][].

[TDLib]: https://github.com/tdlib/td
[prebuilt-tdlib.yml]: ../../.github/workflows/prebuilt-tdlib.yml

The shared libraries are statically linked against OpenSSL and zlib to prevent
compatibility issues in Node.js.

Supported systems are GNU/Linux x86_64, macOS x86_64, Windows x86_64.

On Linux, TDLib is built on Ubuntu 20.04 and requires glibc version >= 2.31 to
be installed on your system.

Note that M1 Macs are not supported yet.

To install `prebuilt-tdlib` for e.g. TDLib v1.8.0, run:

```console
$ npm install prebuilt-tdlib@td-1.8.0
```

### Usage

The `prebuilt-tdlib` package exports a single function `getTdjson`, which
returns the path to the `tdjson` shared library.

```javascript
const { getTdjson } = require('prebuilt-tdlib')
console.log(getTdjson())
// Prints a path like:
// '/home/user/proj/node_modules/prebuilt-tdlib/prebuilds/tdlib-linux-x64/libtdjson.so'
```

This package can be used with, for example, [`tdl`][tdl]. You can pass the
path to the `TDLib` constructor:

[tdl]: https://github.com/Bannerets/tdl

```javascript
const { TDLib } = require('tdl-tdlib-addon')
const { getTdjson } = require('prebuilt-tdlib')
/* ... */ new TDLib(getTdjson()) /* ... */
```

### Versioning

Because TDLib does not follow Semver, to not require the users to manually
specify the exact version of `prebuilt-tdlib` in their `package.json`, the TDLib
version is packed into a single minor version.

`prebuilt-tdlib` is published to npm under versions `0.xyyyzzz.v`, where

- `x`, `y`, `z` correspond to the `x.y.z` TDLib version (e.g., 1.8.0). The
  leading zeros are appended to `y` and `z` (y=`8` becomes y=`008`).
- `v` corresponds to the version of `prebuilt-tdlib` itself, these updates can
  contain fixes in case some of the builds were broken or include new pre-built
  libraries for other platforms.
- The major version is always `0`.

E.g. the npm release for TDLib `v1.8.5` is `0.1008005.0`.

For convenience, `td-X` dist-tags are available. To install `prebuilt-tdlib` for
TDLib v1.8.5, just run `npm install prebuilt-tdlib@td-1.8.5`, or
`npm install prebuilt-tdlib@td-1.8.0` for TDLib v1.8.0. This will automatically
install the needed version of `prebuilt-tdlib`.

Additionaly, TDLib's versioning is weird, and some of the `prebuilt-tdlib`
releases are not tied to a specific tag release in the TDLib repository.

### npm tags

[![npm](https://img.shields.io/npm/v/prebuilt-tdlib/latest.svg)](https://www.npmjs.com/package/prebuilt-tdlib)<br>
[![npm](https://img.shields.io/npm/v/prebuilt-tdlib/beta.svg)](https://www.npmjs.com/package/prebuilt-tdlib)<br>
[![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.8.5.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.8.5) (tdlib commit [d9cfcf88fe4ad06dae1716ce8f66bbeb7f9491d9](https://github.com/tdlib/td/commit/d9cfcf88fe4ad06dae1716ce8f66bbeb7f9491d9))<br>
[![npm](https://img.shields.io/npm/v/prebuilt-tdlib/td-1.8.0.svg)](https://www.npmjs.com/package/prebuilt-tdlib/v/td-1.8.0)<br>
