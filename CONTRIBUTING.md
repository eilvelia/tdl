# Contributing



## Getting started

1. Fork the repository and create your branch from `develop` (not `master`).
2. Install all dependencies (`npm install`).
3. Make your changes.
4. Build the code (`npm run build`).
5. Run tests and ensure your code passes lint (`npm test`).
6. Create a pull request to `develop` branch.

## Debugging

`tdl` uses [`debug`](https://github.com/visionmedia/debug#readme).

Namespaces:

- `tdl:client`
- `tdl:client:emitter`
- `tdl:client:response`
- `tdl:client:request`
- `tdl-tdlib-ffi`
- `tdl-tdlib-addon`
- `tdl-tdlib-wasm`

Command example:

```console
$ DEBUG=tdl:client,tdl:client:request node index.js
```
