## tdlib-types

This npm package provides TypeScript and Flow types for [TDLib][].

These types can be used with [tdl][].

To install the types for e.g. TDLib v1.8.5, run:

```console
$ npm install --save-dev tdlib-types@td-1.8.5
```

The other available versions of `tdlib-types` are listed in the "npm tags"
section below. You can also see the available versions by running `$ npm info tdlib-types`.

> **Note**: If you use TypeScript and get errors in `.d.ts` files, set
> `skipLibCheck` to `true` in the `tsconfig.json` file
> (this is the default when using `tsc --init`).

[TDLib]: https://github.com/tdlib/td
[tdl]: https://github.com/Bannerets/tdl

### Verison naming

The package is published to npm under versions `0.wxxxyyyzzz.v`, where
- `x` / `y` / `z` correspond to the `x.y.z` TDLib version with leading zeros
  appended.
- `w` corresponds to the major version (the revision) of `tdlib-types` itself,
  newer revisions may contain breaking changes of the typings. `w` is
  always the same for all TDLib versions.
- `v` corresponds to the minor version of `tdlib-types` itself. `v` is specific
  to a TDLib version. These updates may include fixes in case some of the
  typings were broken.
- The major version of the npm package is always 0.

Some examples:
- `0.1001006000.0` is types for TDLib v1.6.0 (`tdlib-types` major rev. 1, patch 0).
- `0.4001007002.3` - TDLib v1.7.2 (`tdlib-types` major rev. 4, patch 3).
- `0.24001004012.1` - TDLib v1.4.12 (`tdlib-types` major rev. 24, patch 1).

This naming scheme is similar to
[prebuilt-tdlib](../prebuilt-tdlib/README.md), but a bit more
complicated.

For convenicene, `td-X` npm dist-tags are provided, so that types for the desired
TDLib version can be simply installed using, for example, `npm i -D tdlib-types@td-1.7.0`
for TDLib v1.7.0 or `npm i -D tdlib-types@td-1.8.5` for TDLib v1.8.5.

In case a major version of `tdlib-types` is released, a git tag
`tdlib-types@w` is published to the `tdl` repository. Otherwise, the releases of
`tdlib-types` are not git-tagged.

The current major version of `tdlib-types` is `1`.

In the past, a different naming scheme was used without the `patch` (`z`) tdlib
version.

---

If you use Flow and don't have fluture installed, add the following to `.flowconfig`:

```ini
[declarations]
<PROJECT_ROOT>/node_modules/.*
```

---

For information about the TL -> TypeScript/Flow translator, see
[GENERATOR.md](GENERATOR.md).

### npm tags

[![npm](https://img.shields.io/npm/v/tdlib-types/latest.svg)](https://www.npmjs.com/package/tdlib-types)<br>
[![npm](https://img.shields.io/npm/v/tdlib-types/beta.svg)](https://www.npmjs.com/package/tdlib-types)<br>
[![npm](https://img.shields.io/npm/v/tdlib-types/td-1.8.5.svg)](https://www.npmjs.com/package/tdlib-types/v/td-1.8.5) (tdlib commit [d9cfcf88fe4ad06dae1716ce8f66bbeb7f9491d9](https://github.com/tdlib/td/commit/d9cfcf88fe4ad06dae1716ce8f66bbeb7f9491d9))<br>
[![npm](https://img.shields.io/npm/v/tdlib-types/td-1.8.0.svg)](https://www.npmjs.com/package/tdlib-types/v/td-1.8.0)<br>
[![npm](https://img.shields.io/npm/v/tdlib-types/td-1.7.0.svg)](https://www.npmjs.com/package/tdlib-types/v/td-1.7.0)<br>
[![npm](https://img.shields.io/npm/v/tdlib-types/td-1.6.0.svg)](https://www.npmjs.com/package/tdlib-types/v/td-1.6.0)<br>
[![npm](https://img.shields.io/npm/v/tdlib-types/td-1.5.0.svg)](https://www.npmjs.com/package/tdlib-types/v/td-1.5.0)<br>
