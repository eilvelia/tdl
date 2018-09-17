const { Client } = require('tdl')

const client = new Client({
  apiId: 2222, // Your api_id
  apiHash: 'YOUR_API_HASH'
})

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

  await client.login(() => ({
    phoneNumber: 'YOUR_PHONE_NUMBER'
  }))

  // ...
}

main()
