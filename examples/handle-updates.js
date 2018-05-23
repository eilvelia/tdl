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
    .on('update', update => {
      console.log('Got update:', JSON.stringify(update, null, 2))
    })
    .on('error', err => {
      console.error('Got error:', JSON.stringify(err, null, 2))
    })
    .on('destroy', () => {
      console.log('destroy')
    })

  await client.connect()
}

main()
