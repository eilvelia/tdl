const tdl = require('tdl')
const { getTdjson } = require('prebuilt-tdlib')

tdl.configure({ tdjson: getTdjson() })

const client = tdl.createClient({
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
