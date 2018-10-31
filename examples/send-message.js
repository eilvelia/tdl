const { Client } = require('tdl')

const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

async function main() {
  await client.connect()
  await client.login()

  await client.invoke({
    _: 'sendMessage',
    chat_id: 123456789,
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
