## TDLib JSON API

Low-level TDLib API.

```js
const { TDLib } = require('tdl-tdlib-addon')
```

See interface declarations in [tdl-shared/index.js.flow](packages/tdl-shared/index.js.flow).

---

##### `create: () => TDLibClient`

```js
const client = await tdlib.create()
```

[Docs](https://core.telegram.org/tdlib/docs/td__json__client_8h.html#a45cd6979ada11b7690d9dcb1ddc841a0)

##### `send: (client: TDLibClient, query: Object) => void`

```js
tdlib.send(client, {
  '@type': 'sendMessage',
  chat_id: 123456789,
  input_message_content: {
    '@type': 'inputMessageText',
    text: {
      '@type': 'formattedText',
      text: '👻'
    }
  }
})
```

[Docs](https://core.telegram.org/tdlib/docs/td__json__client_8h.html#a1fea1f986bf950d19eee3032c24cce83)

##### `receive: (client: TDLibClient, timeout: number) => Promise<Object | null>`

```js
const response = await tdlib.receive(client, 10)
```

[Docs](https://core.telegram.org/tdlib/docs/td__json__client_8h.html#a9e0cb36bfa2bc2249905aebd7d07a4ac)

##### `execute: (client: null | TDLibClient, query: Object) => Object | null`

```js
const res = await tdlib.execute(client, {
  '@type': 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})
```

[Docs](https://core.telegram.org/tdlib/docs/td__json__client_8h.html#a6d6c76380793072d4a9ce3c71ba0f1cf)

##### `destroy: (client: TDLibClient) => void`

```js
tdlib.destroy(client)
```

[Docs](https://core.telegram.org/tdlib/docs/td__json__client_8h.html#a75c765a44f3bdf6a724d90c2e7f75ecf)

##### `setLogFatalErrorCallback: (fn: null | (errorMessage: string) => void) => void`

```js
tdlib.setLogFatalErrorCallback(
  errorMessage => console.error('Fatal error:', errorMessage)
)

tdlib.setLogFatalErrorCallback(null)
```

[Docs](https://core.telegram.org/tdlib/docs/td__log_8h.html#addebe91c4525817a6d2b448634c19d71)
