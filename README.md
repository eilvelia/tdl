## tdl

[![npm](https://img.shields.io/npm/v/tdl.svg)](https://www.npmjs.com/package/tdl)
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/Bannerets/tdl.svg)](https://github.com/Bannerets/tdl)
[![node](https://img.shields.io/node/v/tdl.svg)](https://github.com/Bannerets/tdl)
[![Build Status](https://travis-ci.org/Bannerets/tdl.svg?branch=master)](https://travis-ci.org/Bannerets/tdl)

TDLib (Telegram Database library) bindings for Node.js

-----

### Getting started

1. Build the binary (https://github.com/tdlib/td#building)
2. `npm install tdl`

-----

### APIs

##### `new Client(options) -> Client`

```js
const { Client } = require('tdl')

const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH',
  loginDetails: {
    phoneNumber: 'YOUR_PHONE_NUMBER'
  }
})
```

##### `client.connect() -> Promise<void>`

You can use this API to initialize and connect your client with Telegram.

```js
await client.connect()
```

##### `client.on(event, callback) -> void`

You can use this API to attach an event listener for iterating updates.

```js
client.on('update', console.log)
client.on('error', console.error)
```

##### `client.invoke(query) -> Promise<Object>`

You can use this API to send asynchronous message to Telegram and receive response.  
Resolves with response, or rejects with an error.

```js
const chats = await client.invoke({
  _: 'getChats',
  offset_order: 0,
  offset_chat_id: 0,
  limit: 100
})
```

```js
await client.invoke({
  _: 'sendMessage',
  chat_id: 123456789,
  input_message_content: {
    _: 'inputMessageText',
    text: {
      _: 'formattedText',
      text: '👻'
    }
  }
})
```

##### `client.execute(query) -> ?Object`

You can use this API to send synchronous message to Telegram and receive response.

```js
const res = client.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})
```

##### `client.destroy() -> void`

You can use this API to destroy the client.

```js
client.destroy()
```

-----

### Login as a bot

```js
const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH',
  loginDetails: {
    type: 'bot',
    token: 'YOUR_BOT_TOKEN'
  }
})

await client.connect()
```

-----

### Options

```typescript
type Options = {
  apiId: number,
  apiHash: string,
  loginDetails: {
    type: 'user',
    phoneNumber: string,
    getAuthCode: (retry?: boolean) => Promise<string>,
    getPassword: (passwordHint: string, retry?: boolean) => Promise<string>
  } | {
    type: 'bot',
    token: string
  },
  binaryPath: string, // relative path
  databaseDirectory: string, // relative path
  filesDirectory: string, // relative path
  logFilePath: string, // relative path
  verbosityLevel: number,
  skipOldUpdates: boolean,
  dev: boolean, // Use telegram dev server
  useMutableRename: boolean,
  tdlibParameters: Object, // See https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1tdlib_parameters.html
  tdlibInstance: TDLib
}
```

Any empty fields may just not be specified.

##### Defaults

```javascript
{
  loginDetails: {
    type: 'user',
    getAuthCode, // read from stdin
    getPassword  // read from stdin
  }
  binaryPath: 'libtdjson',
  databaseDirectory: '_td_database',
  filesDirectory: '_td_files',
  logFilePath: '', // (don't write to file)
  verbosityLevel: 2,
  skipOldUpdates: false,
  dev: false,
  useMutableRename: false,
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

### Fork

This is a fork of [nodegin/tglib](https://github.com/nodegin/tglib).
