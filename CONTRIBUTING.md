# Contributing

## Getting started

1. Fork the repository and create a branch from `develop` (not `master`).
2. Install all dependencies (`npm install`).
3. Make your changes.
4. Build the code (`npm run build`).
5. Run tests and ensure the code passes lint (`npm test`).
6. Create a pull request to the `develop` branch.

## Debugging

`tdl` uses [`debug`](https://github.com/visionmedia/debug#readme).

There are following namespaces:

- `tdl:client`
- `tdl:client:emitter`
- `tdl:client:response`
- `tdl:client:request`
- `tdl-tdlib-addon`
- `tdl-tdlib-ffi`
- `tdl-tdlib-wasm`

Example:

```console
$ DEBUG=tdl:client,tdl:client:request node index.js
```
