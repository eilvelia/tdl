// Fluture: https://github.com/fluture-js/Fluture

const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-ffi')
const Future = require('fluture')

const client = new Client(new TDLib(), {
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

const searchChat = username =>
  client.invokeFuture({ _: 'searchPublicChat', username })
    .map(chat => `Chat: ${chat.title}, id: ${chat.id}`)
    .mapRej(err => `Error: ${err.message}`)

const login = Future.encaseP(client.login)

Future
  .tryP(client.connect)
  .chain(() => login())
  .chain(() => searchChat('username'))
  .fork(console.error, console.log)
