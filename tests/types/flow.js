// @flow

import * as tdl from '../../packages/tdl'
import { getTdjson } from '../../packages/prebuilt-tdlib'
import * as Td from 'tdlib-types'

const { TDLibError, UnknownError } = tdl

tdl.configure({ tdjson: 'libtdjson.dylib', libdir: '/usr/local/lib' })
tdl.configure({ verbosityLevel: 'default' })
tdl.configure({ libdir: __dirname })
tdl.configure({ libdir: '' })
tdl.configure({ tdjson: getTdjson() })

tdl.configure({ receiveTimeout: 10 })

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
// $FlowExpectedError[incompatible-call]
tdl.createClient()

tdl.createBareClient()

tdl.init()

tdl.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})

tdl.setLogMessageCallback(4, a => console.log(a))
tdl.setLogMessageCallback(4, null)
// $FlowExpectedError[incompatible-call]
tdl.setLogMessageCallback('1234')

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

  // $FlowExpectedError[incompatible-call]
  await client.login(() => ({ getToken: () => Promise.resolve('token') }))
  // $FlowExpectedError[incompatible-call]
  await client.login(() => {})
  // $FlowExpectedError[incompatible-call]
  await client.login(() => ({ a: 2 }))
  // $FlowExpectedError[incompatible-call]
  await client.login(() => ({ type: 'abc' }))

  // $FlowExpectedError[incompatible-call]
  client.login(123)
  // $FlowExpectedError[incompatible-call]
  client.login(() => 2)

  await client.loginAsBot('token')
  await client.loginAsBot(() => 'token')
  await client.loginAsBot(() => Promise.resolve('token'))
  // $FlowExpectedError[incompatible-call]
  await client.loginAsBot(Promise.resolve('token'))

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

// $FlowExpectedError[incompatible-call]
client.on('foo')
// $FlowExpectedError[incompatible-call]
client.on('error')

client.once('update', e => {
  ;(e: Td.Update)
  // $FlowExpectedError[incompatible-cast]
  ;(e: number)
})

client.on('error', e => {
  if (e instanceof TDLibError) {
    console.log((e: TDLibError))
    console.log(e.code, e.message)
    // $FlowExpectedError[prop-missing]
    console.log(e.ab)
    return
  }
  console.log(e.message)
  // $FlowExpectedError[prop-missing]
  console.log(e.abc)
})

client.removeListener('update', () => {})
// $FlowExpectedError[incompatible-call]
client.removeListener('update', () => {}, 'abc')
// $FlowExpectedError[incompatible-call]
client.removeListener('myevent', () => {})
// $FlowExpectedError[incompatible-call]
client.removeListener('update', 'abc')

client.emit('close')

main().catch(console.error)

// Td.formattedText <: Td.formattedText$Input
declare var fmt: Td.formattedText
const fmtInput: Td.formattedText$Input = fmt

// subtyping should also work correctly with 'may be null' fields
declare var chatFolder: Td.chatFolder
const chatFolderInput: Td.chatFolder$Input = chatFolder
