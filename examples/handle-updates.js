const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-ffi')

const client = new Client(new TDLib(), {
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

client
  .on('update', update => {
    console.log('Got update:', JSON.stringify(update, null, 2))
  })
  .on('error', err => {
    console.error('Got error:', JSON.stringify(err, null, 2))
  })
  .on('destroy', () => {
    console.log('destroy event')
  })

async function main () {
  await client.connect()
  await client.login()
  // ...
}

main()
