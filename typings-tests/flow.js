// @flow

import { TDLib as TdFFI } from '../packages/tdl-tdlib-ffi'
import { TDLib as TdAddon } from '../packages/tdl-tdlib-addon'
import { Tdl, TdlError, Client } from '../packages/tdl'

import * as Td from '../packages/tdlib-types'

import * as Future from 'fluture'

var tdlib = new TdFFI()
var tdlibAddon = new TdAddon()

;(async () => {
  var t = new TdFFI('abc')
  var cl = await t.create()
  t.destroy(cl)
  // $ExpectError
  t.destroy({})

  new Tdl(t)
  const tdl = new Tdl(t, { loginDetails: { type: 'user' } })
  await tdl.connect()

  tdl.pause()
  tdl.resume()
  // $ExpectError
  tdl.resume(2)

  await tdl.login(() => ({
    type: 'user',
    getPhoneNumber: () => Promise.resolve('+1234'),
    getAuthCode: () => Promise.resolve('123')
  }))

  await tdl.login(() => ({
    type: 'bot',
    getToken: () => Promise.resolve('token')
  }))

  await tdl.connectAndLogin(() => ({
    type: 'bot',
    getToken: () => Promise.resolve('token')
  }))

  await tdl.login()
  await tdl.connectAndLogin()

  await tdl.login(() => ({}))

  // $ExpectError
  await tdl.login(() => ({ getToken: () => Promise.resolve('token') }))
  // $ExpectError
  await tdl.login(() => {})
  // $ExpectError
  await tdl.login(() => ({ a: 2 }))
  // $ExpectError
  await tdl.login(() => ({ type: 'abc' }))

  // $ExpectError
  tdl.login(123)
  // $ExpectError
  tdl.login(() => 2)

  await tdl.close()
})

const client = new Client(tdlib, {
  apiId: 222,
  apiHash: 'abc',
  useTestDc: true
})

new Client(tdlibAddon)

new Client(tdlib, { receiveTimeout: 10 })

// $ExpectError
new Client({ useTestDc: {} })


Client.create(tdlib).on('error', console.error)
Client.create(tdlib, {})
Client.create(tdlib, { apiId: 222 })
// $ExpectError
Client.create({ apiId: {} })

client.setLogFatalErrorCallback(a => console.log(a))
client.setLogFatalErrorCallback(null)
// $ExpectError
client.setLogFatalErrorCallback('1234')


;(async () => {
  await client.connect()
  console.log(client)

  client
    .on('error', e => console.log('error', e))
    .on('destroy', () => console.log('destroy'))
    .on('response', r => {})
    .on('auth-not-needed', () => {})
    .on('auth-needed', () => {})

  // $ExpectError
  client.on('abc')
  // $ExpectError
  client.on('error')

  client.once('update', e => {
    ;(e: Td.Update)
    // $ExpectError
    ;(e: number)
  })

  client.on('error', e => {
    if (e instanceof TdlError) {
      console.log((e: TdlError))
      console.log(e.err)
      // $ExpectError
      console.log(e.ab)
      return
    }
    console.log(e.message)
    // $ExpectError
    console.log(e.abc)
  })

  client.removeListener('update', () => {})
  client.removeListener('update', () => {}, true)
  client.removeListener('update', () => {}, false)
  // $ExpectError
  client.removeListener('update', () => {}, 'abc')
  // $ExpectError
  client.removeListener('myevent', () => {})
  // $ExpectError
  client.removeListener('update', 'abc')

  ;(client.off: typeof client.removeListener)
  ;(client.addListener: typeof client.on)
  ;(client.once: typeof client.on)

  const res = client.execute({
    _: 'getTextEntities',
    text: '@telegram /test_command https://telegram.org telegram.me'
  }); console.log(res)

  const result = await client.invoke({
    _: 'getChats',
    //offset_order: 0,
    offset_order: '2134',
    offset_chat_id: 0,
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

  await client.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })

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

  await client.connectAndLogin(() => ({
    type: 'bot',
    getToken: retry => retry
      ? Promise.reject('Token is not valid')
      : Promise.resolve('YOUR_BOT_TOKEN') // Token from @BotFather
  }))

  // Td.formattedText <: Td.formattedText$Input
  declare var fmt: Td.formattedText
  const fmtInp: Td.formattedText$Input = fmt

  // subtyping also should work correctly with 'may be null' fields
  declare var authCode: Td.authenticationCodeInfo
  const authCodeInp: Td.authenticationCodeInfo$Input = authCode

  const name: string = client.getBackendName()

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
    // $ExpectError
    .map((e: number) => e)
})()
