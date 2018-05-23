const { Client, TDLib } = require('tdl')

const API_ID = 2222 // Your api_id
const API_HASH = 'YOUR_API_HASH'

const PHONE_NUMBER_1 = '+000'
const PHONE_NUMBER_2 = '+111'

const tdlib = new TDLib('libtdjson')

const client1 = new Client({
  tdlibInstance: tdlib,
  apiId: API_ID,
  apiHash: API_HASH,
  loginDetails: {
    phoneNumber: PHONE_NUMBER_1
  },
  databaseDirectory: '_td_database1',
  filesDirectory: '_td_files1'
})

const client2 = new Client({
  tdlibInstance: tdlib,
  apiId: API_ID,
  apiHash: API_HASH,
  loginDetails: {
    phoneNumber: PHONE_NUMBER_2
  },
  databaseDirectory: '_td_database2',
  filesDirectory: '_td_files2'
})

client1.on('error', console.error)
client2.on('error', console.error)

main()

async function main() {
  await client1.connect()
  await client2.connect()
}
