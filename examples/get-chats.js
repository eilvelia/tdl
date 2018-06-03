const { Client } = require('tdl')

const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH',
  loginDetails: {
    phoneNumber: 'YOUR_PHONE_NUMBER'
  }
})

async function main() {
  await client.connect()

  const result = await client.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })

  // latest 100 chats will be returned
  console.log(result)
}

main()
