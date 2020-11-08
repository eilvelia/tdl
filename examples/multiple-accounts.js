// NOTE: The number of clients you created shouldn't be higher than UV_THREADPOOL_SIZE

const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

const API_ID = 2222 // Your api_id
const API_HASH = '0123456789abcdef0123456789abcdef' // Your api_hash

const tdlib = new TDLib()

const client1 = new Client(tdlib, {
  apiId: API_ID,
  apiHash: API_HASH,
  databaseDirectory: '_td_database1',
  filesDirectory: '_td_files1'
})

const client2 = new Client(tdlib, {
  apiId: API_ID,
  apiHash: API_HASH,
  databaseDirectory: '_td_database2',
  filesDirectory: '_td_files2'
})

client1.on('error', e => console.error('Client1 error', e))
client2.on('error', e => console.error('Client2 error', e))

async function main() {
  await Promise.all([ client1.connect(), client2.connect() ])

  await client1.login()
  await client2.login()

  // ...
}

main()
