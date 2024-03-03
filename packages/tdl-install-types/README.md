# tdl-install-types

A cli utility that generates TypeScript (and optionally Flow) types for TDLib,
potentially fetching the needed schema from the TDLib's GitHub repository.
These types can be used with the tdl library.

This utility can be launched via `npx` without manually installing it.

By default, a `tdlib-types.d.ts` file is created that you can git-commit.

## Usage

```console
$ npx tdl-install-types [<options>] [<target>]
```

Examples:

```console
$ npx tdl-install-types  # tries to use prebult-tdlib
$ npx tdl-install-types ./libtdjson.so  # generate types for this shared library
$ npx tdl-install-types 0ada45c3618108a62806ce7d9ab435a18dac1aab  # commit hash
$ npx tdl-install-types v1.8.0  # git tag in the TDLib repository
$ npx tdl-install-types ./td_api.tl  # types for the given TDLib tl schema
```

For more information, see `npx tdl-install-types --help`.
