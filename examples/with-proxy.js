const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-ffi')

const client = new Client(new TDLib(), {
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

client.on('error', console.error)

// Works at least in TDLib v1.3.0

async function main() {
  await client.connect()

  const proxy = await client.invoke({
    _: 'addProxy',
    server: '127.0.0.1',
    port: '443',
    enable: true,
    type: { _: 'proxyTypeMtproto', secret: '15abcdef1234567890deadbeef123456' }
  })

  console.log('Proxy:', proxy)

  await client.login()

  // ...
}

main()
