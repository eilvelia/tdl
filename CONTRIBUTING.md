# Contributing

## Debugging

`tdl` uses [`debug`](https://github.com/visionmedia/debug#readme).

The following namespaces are defined:

- `tdl`
- `tdl:client`
- `tdl:client:request`
- `tdl:client:receive`
- `tdl:client:emitter`

Examples:

```console
$ DEBUG=tdl* node index.js
$ DEBUG=tdl,tdl:addon,tdl:client,tdl:client:request node index.js
```
