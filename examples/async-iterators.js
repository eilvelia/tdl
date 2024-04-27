const tdl = require('tdl')

const client = tdl.createClient({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

client.on('error', console.error)

client.loginAsBot('YOUR_BOT_TOKEN')

async function main() {
  for await (const update of client.iterUpdates()) {
    if (update._ === 'updateOption' && update.name === 'my_id') {
      console.log(`My ID is ${update.value.value}!`)
      break
    }
  }
  await client.close()
}

main()
