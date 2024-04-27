// @flow

import * as tdl from '../../packages/tdl'
import { getTdjson } from '../../packages/prebuilt-tdlib'
import type * as Td from 'tdlib-types'

const { TDLibError, UnknownError } = tdl

tdl.configure({ tdjson: 'libtdjson.dylib', libdir: '/usr/local/lib' })
tdl.configure({ verbosityLevel: 'default' })
tdl.configure({ libdir: __dirname })
tdl.configure({ libdir: '' })
tdl.configure({ tdjson: getTdjson() })

getTdjson({ libc: 'glibc' })

const client = tdl.createClient({
  apiId: 2,
  apiHash: 'hash'
})

tdl.createClient({
  apiId: 222,
  apiHash: 'abc',
  useTestDc: true,
  tdlibParameters: {
    device_model: 'unknown'
  }
})

const bareCl: tdl.Client = tdl.createBareClient()

tdl.init()

tdl.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})

tdl.setLogFatalErrorCallback(a => console.log(a))
tdl.setLogFatalErrorCallback(null)

async function main () {
  await client.login(() => ({
    type: 'user',
    getPhoneNumber: () => Promise.resolve('+1234'),
    getAuthCode: () => Promise.resolve('123')
  }))

  await client.login(() => ({
    type: 'bot',
    getToken: () => Promise.resolve('token')
  }))

  await client.login()

  await client.login(() => ({}))

  await client.login(() => ({
    getPhoneNumber: retry => retry
      ? Promise.reject('Invalid phone number')
      : Promise.resolve('+9996620001'),
    getAuthCode: retry => retry
      ? Promise.reject('Invalid auth code')
      : Promise.resolve('22222'),
    getPassword: (passwordHint, retry) => retry
      ? Promise.reject('Invalid password')
      : Promise.resolve('abcdef'),
    getName: () =>
      Promise.resolve({ firstName: 'John', lastName: 'Doe' })
  }))

  await client.loginAsBot('token')
  await client.loginAsBot(() => 'token')
  await client.loginAsBot(() => Promise.resolve('token'))

  const res = client.execute({
    _: 'getTextEntities',
    text: '@telegram /test_command https://telegram.org telegram.me'
  })
  console.log(res)

  const result = await client.invoke({
    _: 'getChats',
    chat_list: { _: 'chatListMain' },
    limit: 100
  })

  const msg = await client.invoke({
    _: 'sendMessage',
    chat_id: 123456789,
    input_message_content: {
      _: 'inputMessageText',
      text: {
        _: 'formattedText',
        text: 'Hi',
      }
    }
  })

  const user: Promise<Td.User> = client.invoke({ _: 'getMe' })

  client.invoke({
    _: 'addProxy',
    server: '127.0.0.1',
    port: 443,
    enable: true,
    type: { _: 'proxyTypeMtproto', secret: '15abcdef1234567890deadbeef123456' }
  })

  const ver: string = client.getVersion()

  await client.close()
}

client.on('error', e => console.log('error', e))

client.on('close', () => {})

client.once('update', e => {
  const e2: Td.Update = e
})

client.on('error', e => {
  if (e instanceof TDLibError) {
    console.log(e.code, e.message)
    return
  }
  console.log(e.message)
})

client.removeListener('update', () => {})

main().catch(console.error)

// Td.formattedText <: Td.formattedText$Input
declare var fmt: Td.formattedText
const fmtInp: Td.formattedText$Input = fmt
