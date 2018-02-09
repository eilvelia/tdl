const { Client } = require('tglib')

async function main() {
  const client = new Client({
    apiId: 'YOUR_API_ID',
    apiHash: 'YOUR_API_HASH',
    phoneNumber: 'YOUR_PHONE_NUMBER',
  })

  await client.connect()

  await client._send({
    '@type': 'sendMessage',
    'chat_id': -123456789,
    'input_message_content': {
      '@type': 'inputMessageText',
      'text': {
        '@type': 'formattedText',
        'text': 'Hi',
      },
    },
  })
}

main()
