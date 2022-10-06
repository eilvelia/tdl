const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

const client = new Client(new TDLib(), {
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

client.on('error', console.error)

async function main() {
  await client.login()

  const result = await client.invoke({
    _: 'getChats',
    chat_list: { _: 'chatListMain' },
    limit: 9000
  })

  console.log(result)

  await client.close()
}

main().catch(console.error)
