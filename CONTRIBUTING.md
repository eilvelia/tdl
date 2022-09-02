# Contributing

## Debugging

`tdl` uses [`debug`](https://github.com/visionmedia/debug#readme).

The following namespaces are defined:

- `tdl:client`
- `tdl:client:emitter`
- `tdl:client:response`
- `tdl:client:request`
- `tdl-tdlib-addon`
- `tdl-tdlib-ffi`
- `tdl-tdlib-wasm`

Examples:

```console
$ DEBUG=tdl* node index.js
$ DEBUG=tdl:client,tdl:client:request node index.js
```
