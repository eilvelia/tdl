const tdl = require('tdl')

const client = tdl.createClient({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

client.on('error', console.error)

async function main() {
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

  await client.close()
}

main().catch(console.error)
