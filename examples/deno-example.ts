// Simple deno example. Requires --allow-read --allow-env --allow-ffi.
// WARNING: May be unstable.

import * as tdl from 'npm:tdl@8'
// Also use prebuilt TDLib:
import { getTdjson } from 'npm:prebuilt-tdlib@td-1.8.27'

tdl.configure({ tdjson: getTdjson() })

const client = tdl.createClient({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

client.on('error', console.error)
client.on('update', update => {
  console.log('Got update:', update)
})

await client.loginAsBot('<BOT_TOKEN>')

const me = await client.invoke({ _: 'getMe' })
console.log('I am', me)

await client.close()
