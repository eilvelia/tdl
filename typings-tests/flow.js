// @flow

import * as tdl from '../packages/tdl'
import * as Td from '../packages/tdlib-types'
import { getTdjson } from '../packages/prebuilt-tdlib'
import * as Future from 'fluture'

const { TdlError } = tdl

tdl.configure({ tdjson: 'libtdjson.dylib', libPrefix: '/usr/local/lib' })
tdl.configure({ verbosityLevel: 'default' })
tdl.configure({ libPrefix: __dirname })
tdl.configure({ libPrefix: '' })
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
tdl.createClient({ bare: true })
tdl.createClient({ apiId: 2, apiHash: 'hash', receiveTimeout: 10 })
// $FlowExpectedError[incompatible-call]
tdl.createClient()

tdl.init()

tdl.execute({
  _: 'getTextEntities',
  text: '@telegram /test_command https://telegram.org telegram.me'
})

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

  client.setLogFatalErrorCallback(a => console.log(a))
  client.setLogFatalErrorCallback(null)
  // $FlowExpectedError[incompatible-call]
  client.setLogFatalErrorCallback('1234')

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

client
  .on('error', e => console.log('error', e))
  .on('auth-not-needed', () => {})
  .on('auth-needed', () => {})

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
  if (e instanceof TdlError) {
    console.log((e: TdlError))
    console.log(e.err)
    // $FlowExpectedError[prop-missing]
    console.log(e.ab)
    return
  }
  console.log(e.message)
  // $FlowExpectedError[prop-missing]
  console.log(e.abc)
})

client.removeListener('update', () => {})
client.removeListener('update', () => {}, true)
client.removeListener('update', () => {}, false)
// $FlowExpectedError[incompatible-call]
client.removeListener('update', () => {}, 'abc')
// $FlowExpectedError[incompatible-call]
client.removeListener('myevent', () => {})
// $FlowExpectedError[incompatible-call]
client.removeListener('update', 'abc')

client.emit('auth-needed')

main().catch(console.error)

// Td.formattedText <: Td.formattedText$Input
declare var fmt: Td.formattedText
const fmtInp: Td.formattedText$Input = fmt

// subtyping should also work correctly with 'may be null' fields
declare var authCode: Td.authenticationCodeInfo
const authCodeInp: Td.authenticationCodeInfo$Input = authCode

const invokeFuture: Td.InvokeFuture = (Future.encaseP(client.invoke): any)

invokeFuture({
  _: 'searchPublicChat',
  username: 'username'
})
  .map((e: Td.Chat) => e.title)
  .mapRej((e: Td.error) => e)
  .fork(console.error, (e: string) => console.log(e))

invokeFuture({
  _: 'searchPublicChat',
  username: 'username'
})
  // $FlowExpectedError[incompatible-call]
  .map((e: number) => e)

const oldclient = new tdl.Client({}, { apiId: 2, apiHash: 'hash' })
oldclient.invoke({ _: 'getMe' })
const oldclient2 = tdl.Client.create({}, { apiId: 2, apiHash: 'hash' })
