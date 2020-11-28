## tdlib-types

[![npm](https://img.shields.io/npm/v/tdlib-types.svg)](https://www.npmjs.com/package/tdlib-types)

TypeScript / Flow types for TDLib.

You can use these types with [tdl][].

---

Naming convention:

The package is published to npm under versions `0.wxxxyyy.zvvv`.<br>
The major version is always 0, since TDLib doesn't follow semver.<br>
`x` / `y` / `z` correspond to `x.y.z` TDLib version.<br>
`w` corresponds to the version of `tdlib-types` itself, newer revisions may contain fixes for the typings, usually breaking.
`w` is always the same for all TDLib versions.<br>
`v` corresponds to the minor revision of `tdlib-types` for specific TDLib version.<br>
Leading zeros are omitted.

For example, `0.1001006.1` is types for TDLib v1.6.0 (`tdlib-types` revision 1, minor rev. 1),<br>
`0.4001007.2001` - TDLib v1.7.2 (`tdlib-types` revision 4, minor rev. 1),<br>
`0.24001004.12001` - TDLib v1.4.12 (`tdlib-types` revision 24, minor rev. 1).

There are also `td-X` npm dist-tags to conveniently install typings for appropriate TDLib versions.
For example, `npm install -D tdlib-types@td-1.6.0` or `npm install -D tdlib-types@td-1.5.0`.

The major version might be changed after revisions of the format itself.

If a new version (`w`) of `tdlib-types` is released, there will be a git tag `tdlib-types@w` in the [tdl][] repository.
There are no git tags for releases of `tdlib-types` for specific TDLib versions.

---

If you use Flow and you don't have fluture installed, add this to your `.flowconfig`:

```ini
[declarations]
<PROJECT_ROOT>/node_modules/.*
```

(`tdlib-types/.*` instead of `.*` also can be used.)

---

[tdl]: https://github.com/Bannerets/tdl

See also [GENERATOR.md](GENERATOR.md).

---

npm tags:

[![npm](https://img.shields.io/npm/v/tdlib-types/latest.svg)](https://www.npmjs.com/package/tdlib-types)<br>
[![npm](https://img.shields.io/npm/v/tdlib-types/td-1.7.0.svg)](https://www.npmjs.com/package/tdlib-types/v/td-1.7.0)<br>
[![npm](https://img.shields.io/npm/v/tdlib-types/td-1.6.0.svg)](https://www.npmjs.com/package/tdlib-types/v/td-1.6.0)<br>
[![npm](https://img.shields.io/npm/v/tdlib-types/td-1.5.0.svg)](https://www.npmjs.com/package/tdlib-types/v/td-1.5.0)<br>
