# Pre-built TDLib &nbsp; [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/latest.svg)](https://www.npmjs.com/package/prebuilt-tdlib) [![npm](https://img.shields.io/npm/v/prebuilt-tdlib/tagged.svg)](https://www.npmjs.com/package/prebuilt-tdlib)

This package distributes pre-built [TDLib][] shared libraries through npm.
The libraries are built on GitHub Actions ([prebuilt-tdlib.yml][]) and published
using [npm publish --provenance][npm-provenance].

[TDLib]: https://github.com/tdlib/td
[prebuilt-tdlib.yml]: ../../.github/workflows/prebuilt-tdlib.yml
[npm-provenance]: https://docs.npmjs.com/generating-provenance-statements

Supported systems:
- Linux x86_64, arm64 (requires glibc >= 2.22)
- macOS x86_64, arm64 (requires macOS >= 11.0)
- Windows x86_64

To install `prebuilt-tdlib` for the latest TDLib version that `prebuilt-tdlib`
supports, run:

```console
$ npm install prebuilt-tdlib
```

To install `prebuilt-tdlib` for a specific TDLib version, e.g. TDLib v1.8.33,
run:

```console
$ npm install prebuilt-tdlib@td-1.8.33
```

`prebuilt-tdlib` can be installed for other TDLib versions, execute
`$ npm info prebuilt-tdlib dist-tags`[^1] to get the list of available versions.

[^1]: Or, with more convenient output, using jq:
      ```console
      $ npm info prebuilt-tdlib dist-tags --json | jq 'to_entries | sort_by(.value) | .[].key | select(startswith("td-"))'
      ```

The TDLib version is important: there is no backward compatibility and the
interface you use may significantly change after an update. It is, though,
recommended to use the latest TDLib version.

The shared libraries are statically linked against OpenSSL and zlib (for one, to
prevent compatibility issues in Node.js). libstdc++ is also linked statically
on Linux.

For the dependencies of TDLib (zlib and openssl), except on Windows, the
`nixpkgs-unstable` package repository is used, and the versions of those
dependencies reflect the state of `nixpkgs-unstable` at the time of building of
`prebuilt-tdlib`.

## Usage

The `prebuilt-tdlib` package exports a single function `getTdjson`, which
returns the path to the `tdjson` shared library.

```javascript
const { getTdjson } = require('prebuilt-tdlib')
console.log(getTdjson())
// Prints a path like:
// '/home/user/proj/node_modules/@prebuilt-tdlib/linux-x64-glibc/libtdjson.so'
```

This package can be used with, for example, [tdl][]. You can pass the
path to `tdl.configure` (since tdl v7.3.0):

[tdl]: https://github.com/eilvelia/tdl

```javascript
const tdl = require('tdl')
const { getTdjson } = require('prebuilt-tdlib')
tdl.configure({ tdjson: getTdjson() })
// ...
```

The pre-built libraries can also be extracted and used with any other library
or programming language.

## Versioning conventions

> This information is present mostly for maintaining `prebuilt-tdlib`,
> it is not strictly necessary for using this package.

Because TDLib does not follow SemVer, not to require the users to manually
specify the exact version of `prebuilt-tdlib` in their `package.json`, the TDLib
version is packed into a single minor version.

`prebuilt-tdlib` is published to npm under versions `0.xyyyzzz.v`, where

- `x`, `y`, `z` correspond to the `x.y.z` TDLib version (e.g., 1.8.0). The
  leading zeros are appended to `y` and `z` (y=`8` becomes y=`008`).
- `v` corresponds to the version of `prebuilt-tdlib` itself, these updates can
  contain fixes in case some of the builds were broken or include new pre-built
  libraries for other platforms.
- The major version is always `0`.

Example: the npm release for TDLib `v1.8.5` is `0.1008005.0`.

For convenience, `td-X` dist-tags are available. To install `prebuilt-tdlib` for
TDLib v1.8.5, just run `npm install prebuilt-tdlib@td-1.8.5`, or
`npm install prebuilt-tdlib@td-1.8.0` for TDLib v1.8.0. This will automatically
install the needed version of `prebuilt-tdlib`.

The releases of the `prebuilt-tdlib` npm package are not git-tagged.

Additionally, TDLib's releasing process is [unusual][], and most
`prebuilt-tdlib` releases are not connected to any tag release in the TDLib
repository. Usually, the prebuilt packages are generated based on the "Update
version to x.y.z." TDLib commit ([example][commit-example]) or, if subsequent
commits have been made before such a commit is pushed to `tdlib/td`, on the last
pushed commit. The commit hash is indicated in the prebuilt-tdlib's
package.json, see e.g. `npm info prebuilt-tdlib tdlib` (or `tdlib.commit`).

[unusual]: https://github.com/tdlib/td/issues/2215
[commit-example]: https://github.com/tdlib/td/commit/b3b63bbdc14dc377d2de6b78e5844fec1564f95d

## Changes

Changes to the building process of `prebuilt-tdlib` are noted below.

### 2024-11-17

First published as `prebuilt-tdlib@td-1.8.40`.

- Minimum macOS version is now 11.0 instead of 10.12.
- The macOS package is split into `darwin-x64` and `darwin-arm64` instead of
  using a universal binary.
- The Windows binary is built on the `windows-2022` GitHub Actions runner
  instead of `windows-2019`.

### 2024-07-19

First published as `prebuilt-tdlib@td-1.8.33`.

The building process is significantly changed in this update.

- Changed the structure of the package: instead of packing all binaries into the
  prebuilt-tdlib package, every binary is split into a separate package, and all
  the packages are specified in `optionalDependencies` of `prebuilt-tdlib`. The
  same approach is used by, e.g., esbuild and swc. This installs a binary for
  the user's system only, allowing `prebuilt-tdlib` to potentially scale for
  more architectures and libc variants. One downside is that `node_modules`
  can't simply be copied to a different platform anymore. The `prebuilds`
  directory in the `prebuilt-tdlib` package is removed.
- On macOS, TDLib is built using macOS SDK from nixpkgs, and the minimal
  supported macOS version is now 10.12 instead of 10.14. The arm64 macOS
  library is now tested in the CI using the macos-14 GitHub runner (and not
  crosscompiled anymore).
- On Linux, TDLib is now built using zig. The minimal glibc version is 2.22
  instead of 2.17.
- Added a crosscompiled prebuild for Linux arm64.

Fix (2024-07-21): Fixed codesigning on macOS arm64.

### 2024-05-08

First published as `prebuilt-tdlib@td-1.8.29`.

- Added a `tdlib: { commit: ..., version: ... }` field to `package.json`. This
  allows to query information using `npm info prebuilt-tdlib tdlib.commit`, for
  example.
- Added `commit` as an alias for `ref` to `tdlib.json`.
- The packages are now published with `--provenance`.

### 2023-09-26

First published as `prebuilt-tdlib@td-1.8.19`.

- The packages now include a `prebuilds/tdlib.json` file specifying the TDLib
  commit hash and version.

### 2023-06-26

First published as `prebuilt-tdlib@td-1.8.14`.

- Added support for macOS arm64 (M1 / Apple silicon); a universal binary is
  shipped. However, the arm64 binary is not tested in the CI.
- The Linux binaries are now built on environment with glibc 2.17 instead of
  2.31 and work on older Linux distributions. Some cloud environments such as
  Amazon Linux 2 or Google Cloud Functions (nodejs <= 16) use older glibc,
  `prebuilt-tdlib` should run out of the box on these systems now.
- Restored support for older versions of macOS, >= 10.14 is now supported.
