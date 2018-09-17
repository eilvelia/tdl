// NOTE: Multiple clients on the same process may cause
//       `terminating with uncaught exception of type Napi::Error` error.

const { Client, TDLib } = require('tdl')

const API_ID = 2222 // Your api_id
const API_HASH = 'YOUR_API_HASH'

const CLIENT1_AUTH = { phoneNumber: '+000' }
const CLIENT2_AUTH = { phoneNumber: '+111' }

const tdlib = new TDLib('libtdjson')

const client1 = Client.fromTDLib(tdlib, {
  apiId: API_ID,
  apiHash: API_HASH,
  databaseDirectory: '_td_database1',
  filesDirectory: '_td_files1'
})

const client2 = Client.fromTDLib(tdlib, {
  apiId: API_ID,
  apiHash: API_HASH,
  databaseDirectory: '_td_database2',
  filesDirectory: '_td_files2'
})

client1.on('error', e => console.error('Client1 error', e))
client2.on('error', e => console.error('Client2 error', e))

main()

async function main() {
  await Promise.all([ client1.connect(), client2.connect() ])
  await Promise.all([
    client1.login(() => CLIENT1_AUTH),
    client2.login(() => CLIENT2_AUTH)
  ])
  // ...
}
