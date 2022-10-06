const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')
const { getTdjson } = require('prebuilt-tdlib')

const tdlib = new TDLib(getTdjson())
const client = new Client(tdlib, {
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

client.on('error', console.error)

async function main() {
  await client.login()

  console.log(await client.invoke({ _: 'getMe' }))

  await client.close()
}

main().catch(console.error)
