const { Client } = require('tdl')

async function main() {
  const client = new Client({
    apiId: 2222, // Your api_id
    apiHash: 'YOUR_API_HASH',
    loginDetails: {
      phoneNumber: 'YOUR_PHONE_NUMBER'
    }
  })

  await client.connect()

  client.invokeFuture({
    _: 'searchPublicChat',
    username: 'username'
  })
    .map(chat => `Chat: ${chat.title}, id: ${chat.id}`)
    .mapRej(err => `Error: ${err.message}`)
    .fork(console.error, console.log)
}

main()
