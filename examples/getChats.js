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

  const result = await client.invoke({
    _: 'getChats',
    offset_order: 0,
    offset_chat_id: 0,
    limit: 100
  })

  // latest 100 chats will be returned
  console.log(result)
}

main()
