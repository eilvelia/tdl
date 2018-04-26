## tglib

TDLib (Telegram Database library) bindings for Node.js

-----

### Getting started

1. Build the binary (https://github.com/tdlib/td#building)
2. `npm i -S tglib`

-----

### APIs

tglib provide some useful methods that makes your Telegram app development easier.

```js
const client = new Client({
  apiId: 'YOUR_API_ID',
  apiHash: 'YOUR_API_HASH',
  phoneNumber: 'YOUR_PHONE_NUMBER',
})
```


#### ![](https://placehold.it/12/efcf39/000?text=+) Low Level APIs

##### `client.connect()` -> Promise -> Void

This API is provided by tglib, you can use this API to initialize and connect your client with Telegram.

```js
await client.connect()
```

##### `client.on(event, callback)` -> Void

This API is provided by tglib, you can use this API to attach an event listener for iterating updates.

```js
client.on('_update', console.log.bind(console))
client.on('_error', console.error.bind(console))
```

##### `client._send(query)` -> Promise -> Object

This API is provided by TDLib, you can use this API to send asynchronous message to Telegram.

```js
await client._send({
  '@type': 'sendMessage',
  'chat_id': -123456789,
  'input_message_content': {
    '@type': 'inputMessageText',
    'text': {
      '@type': 'formattedText',
      'text': '👻',
    },
  },
})
```

##### `client._execute(query)` -> Promise -> Object

This API is provided by TDLib, you can use this API to execute synchronous action to Telegram.

```js
await client._execute({
  '@type': 'getTextEntities',
  'text': '@telegram /test_command https://telegram.org telegram.me',
})
```

##### `client._destroy()` -> Promise -> Void

This API is provided by TDLib, you can use this API to destroy the client.

```js
await client._destroy()
```

##### `client.fetch(query)` -> Promise -> Object

This API is provided by tglib, you can use this API to send asynchronous message to Telegram and receive response.

```js
const chats = await client.fetch({
  '@type': 'getChats',
  'offset_order': '9223372036854775807',
  'offset_chat_id': 0,
  'limit': 100,
})
```

#### ![](https://placehold.it/12/3abc64/000?text=+) High Level APIs

WIP

-----

### Requirements

- TDLib binary
- Node.js 10 preferred (minimum >= 9.0.0)
> Note: If you are using Node.js 9.x, you may encounter a warning message `Warning: N-API is an experimental feature and could change at any time.`, this can be suppressed by upgrading to version 10.

-----

### License

tglib uses the same license as TDLib. See [tdlib/td](https://github.com/tdlib/td) for more information.
