const { Client } = require('tglib')

async function main() {
  const client = new Client({
    apiId: 'YOUR_API_ID',
    apiHash: 'YOUR_API_HASH',
    phoneNumber: 'YOUR_PHONE_NUMBER',
  })

  client.on('_update', (update) => {
    console.log('Got update:', JSON.stringify(update, null, 2))
  })

  client.on('_error', (update) => {
    console.error('Got error:', JSON.stringify(update, null, 2))
  })

  await client.connect()
}

main()
