const { Client } = require('tglib')

async function main() {
  const client = new Client({
    apiId: 'YOUR_API_ID',
    apiHash: 'YOUR_API_HASH',
    phoneNumber: 'YOUR_PHONE_NUMBER',
  })

  await client.connect()

  const result = await client.fetch({
    '@type': 'getChats',
    'offset_order': '9223372036854775807',
    'offset_chat_id': 0,
    'limit': 100,
  })

  // latest 100 chats will be returned
  console.log(result)
}

main()
