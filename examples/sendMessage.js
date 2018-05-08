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

  await client.invoke({
    _: 'sendMessage',
    chat_id: -123456789,
    input_message_content: {
      _: 'inputMessageText',
      text: {
        _: 'formattedText',
        text: 'Hi'
      }
    }
  })
}

main()
