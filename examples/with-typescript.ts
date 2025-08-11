import * as tdl from 'tdl'
import type * as Td from 'tdlib-types'

const client = tdl.createClient({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

client.on('error', console.error)
client.on('update', console.log)

async function main() {
  await client.login()

  console.log(await client.invoke({ _: 'getMe' }))

  await client.close()
}

main().catch(console.error)
