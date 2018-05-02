## tdl

TDLib (Telegram Database library) bindings for Node.js

#### Fork

This is a fork of [nodeign/tglib](https://github.com/nodegin/tglib).

-----

### Getting started

1. Build the binary (https://github.com/tdlib/td#building)
2. `npm install tdl`

-----

### APIs

##### `new Client(options)` -> Client

```js
const { Client } = require('tdl')

const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH',
  phoneNumber: 'YOUR_PHONE_NUMBER',
})
```

##### `client.connect()` -> Promise -> Void

This API is provided by tdl, you can use this API to initialize and connect your client with Telegram.

```js
await client.connect()
```

##### `client.on(event, callback)` -> Void

This API is provided by tdl, you can use this API to attach an event listener for iterating updates.

```js
client.on('update', console.log)
client.on('error', console.error)
```

##### `client.fetch(query)` -> Promise -> Object

This API is provided by tdl, you can use this API to send asynchronous message to Telegram and receive response.

```js
const chats = await client.fetch({
  '@type': 'getChats',
  'offset_order': '9223372036854775807',
  'offset_chat_id': 0,
  'limit': 100,
})
```

##### `client.destroy()` -> Void

This API is provided by tdl, you can use this API to destroy the client.

```js
client.destroy()
```

#### ![](https://placehold.it/12/efcf39/000?text=+) Low Level APIs

##### `client._send(query)` -> Promise -> ?Object

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

##### `client._execute(query)` -> ?Object

This API is provided by TDLib, you can use this API to execute synchronous action to Telegram.

```js
client._execute({
  '@type': 'getTextEntities',
  'text': '@telegram /test_command https://telegram.org telegram.me',
})
```

##### `client._destroy()` -> Void

This API is provided by TDLib, you can use this API to destroy the client.

-----

### Options

```typescript
type Options = {
  apiId: number,
  apiHash: string,
  phoneNumber: string,
  getAuthCode: (retry?: boolean) => Promise<string>,
  getPassword: (passwordHint: string, retry?: boolean) => Promise<string>,
  binaryPath: string, // relative path
  databaseDirectory: string, // relative path
  filesDirectory: string, // relative path
  logFilePath: string, // relative path
  verbosityLevel: number,
  tdlibParameters: Object
}
```

Any empty fields may just not be specified.

##### Defaults

```javascript
{
  getAuthCode, // read from stdin
  getPassword, // read from stdin
  binaryPath: 'libtdjson',
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  logFilePath: '', // (don't write to file)
  verbosityLevel: 2,
  tdlibParameters: {
    use_message_database: true,
    use_secret_chats: false,
    system_language_code: 'en',
    application_version: '1.0',
    device_model: 'tdlib',
    system_version: 'node',
    enable_storage_optimizer: true
  }
}
```

-----

### Requirements

- TDLib binary
- Node.js 10 preferred (minimum >= 8.0.0)
> Note: If you are using Node.js 8.x-9.x, you may encounter a warning message `Warning: N-API is an experimental feature and could change at any time.`, this can be suppressed by upgrading to version 10.

-----

### License

tdl uses the same license as TDLib. See [tdlib/td](https://github.com/tdlib/td) for more information.
