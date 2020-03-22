## tdlib-typings

Generates Flow and TypeScript typings from `td_api.tl` file.

Initially was in the https://github.com/Bannerets/tdlib-typings repository.

---

### Usage

```console
$ node dist td_api.tl
```

#### Flow

```console
$ node dist td_api.tl > filename.js
```

#### TypeScript

```console
$ node dist td_api.tl --ts > filename.ts
```

---

You can get the td_api.tl from the TDLib repository.
Also you can use the `download-tl-api-tl.js` script to download it automatically.
