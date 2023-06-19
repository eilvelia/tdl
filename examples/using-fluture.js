// Fluture: https://github.com/fluture-js/Fluture

// This was written for fluture v8.0

const tdl = require('tdl')
const Future = require('fluture')

const client = tdl.createClient({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

client.on('error', console.error)

// For TypeScript / Flow, `InvokeFuture` type for this function can be imported
// via `import type { InvokeFuture } from 'tdlib-types'`. Use it like this:
// `const invokeFuture = Future.encaseP(client.invoke) as InvokeFuture`
const invokeFuture = Future.encaseP(client.invoke)

const searchChat = username =>
  invokeFuture({ _: 'searchPublicChat', username })
    .map(chat => `Chat: ${chat.title}, id: ${chat.id}`)
    .mapRej(err => `Error: ${err.message}`)

Future
  .tryP(client.login)
  .chain(() => searchChat('username'))
  .fork(console.error, console.log)
