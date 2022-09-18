## tdlib-types generator

Generates Flow and TypeScript typings from a `td_api.tl` file.

Initially was in the https://github.com/Bannerets/tdlib-typings repository.

---

### Usage

Build:

```console
$ npm run build -w tdlib-types
```

Run:

```console
$ node dist <version> [<filename>] [--ts] [--no-fl]
Options:
  --ts: Emit TypeScript instead of Flow
  --no-fl: Comment 'InvokeFuture' function type
```

The `version` option is used to generate a comment like `// TDLib <ver>` in the output.

Example for TypeScript:

```console
$ node dist 1.6.0 td_api.tl --ts > filename.ts
```

Example for Flow:

```console
$ node dist 1.6.0 td_api.tl > filename.js
```

---

You can get the `td_api.tl` file from the TDLib repository.<br>
The `download-scheme.js` script can be used to download it automatically given a tag name.<br>
There's also a `generate.js` script to generate both `index.d.ts` and `index.js`
for a specific TDLib version, see `./generate.js --help`.
