const { Client } = require('tdl')

async function main() {
  const client = new Client({
    apiId: 2222 , // Your api_id
    apiHash: 'YOUR_API_HASH',
    loginDetails: {
      phoneNumber: 'YOUR_PHONE_NUMBER'
    }
  })

  client
    .on('update', (update) => {
      console.log('Got update:', JSON.stringify(update, null, 2))
    })
    .on('error', (update) => {
      console.error('Got error:', JSON.stringify(update, null, 2))
    })

  await client.connect()
}

main()
