[![npm](https://img.shields.io/npm/v/tdl-tdlib-wasm.svg)](https://www.npmjs.com/package/tdl-tdlib-wasm)

Experimental wrapper. Tested with TDLib v1.3.0.

## Installation

```console
$ npm i tdl tdl-tdlib-wasm
```

## Usage

```js
import { Client } from 'tdl'
import { TDLib } from 'tdl-tdlib-wasm'

function createClient (options) {
  return new Promise(resolve => {
    Module().then(module => {
      const tdlib = new TDLib(module)
      resolve(new Client(tdlib, options))
    })
  })
}

// for testing
localStorage.debug = 'tdl:client'

async function main () {
  const client = await createClient({
    apiId: 2222, // Your api_id
    apiHash: 'YOUR_API_HASH', // Your api_hash
    useDefaultVerbosityLevel: true
  })
  
  console.log(client)
  
  await client.connectAndLogin(() => ({
    getPhoneNumber: retry => Promise.resolve(window.prompt(retry
      ? 'Invalid phone number, please re-enter:'
      : 'Please enter phone number:')),
    getAuthCode: retry => Promise.resolve(window.prompt(retry
      ? 'Wrong auth code, please re-enter:'
      : 'Please enter auth code:')),
    getPassword: (passwordHint, retry) => Promise.resolve(window.prompt(retry
      ? 'Wrong password, please re-enter:'
      : `Please enter password (${passwordHint}):`)),
    getName: () => {
      throw new Error('not supported')
    }
  }))
  
  const result = await client.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })

  // latest 100 chats will be returned
  console.log('RESULT', result)
}

main()
```
