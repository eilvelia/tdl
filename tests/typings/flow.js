// @flow

import { TDLib as Td } from '../../index'
import { Tdl } from '../../index'

;(async () => {
  var t = new Td('abc')
  var cl = await t.create()
  t.destroy(cl)
  // $ExpectError
  t.destroy({})

  t.setLogMaxFileSize(235)

  new Tdl()
  const tdl = new Tdl({ tdlibInstance: t, loginDetails: { type: 'user' } })
  await tdl.connect()

  tdl.login(() => ({
    type: 'bot',
    token: 'token'
  }))

  await tdl.login(() => ({
    type: 'user',
    phoneNumber: '+00',
    getAuthCode: () => Promise.resolve('123')
  }))

  // $ExpectError
  tdl.login(123)
  // $ExpectError
  tdl.login(() => 2)
})


import { Client, TDLib } from '../../index'

// import type { formattedText, inputMessageText } from '../../types/tdlib'

import type {
  error as Td$error,
  Chat as Td$Chat,
  Update as Td$Update
} from '../../types/tdlib'

const client = new Client({
  apiId: 222,
  apiHash: 'abc',
  useTestDc: true
})

new Client({
  tdlibInstance: new TDLib('path')
})

// $ExpectError
new Client({ useTestDc: {} })


Client.create().on('error', console.error)
Client.create({})
Client.create({ apiId: 222 })
// $ExpectError
Client.create({ apiId: {} })

Client.fromTDLib(new TDLib('abc'), {})
Client.fromTDLib(new TDLib('abc'))
// $ExpectError
Client.fromTDLib({})


client.setLogMaxFileSize(1234)
client.setLogMaxFileSize('235')
// $ExpectError
client.setLogMaxFileSize({})

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
    ;(e: Td$Update)
    // $FlowFixMe
    ;(e: number)
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

  // $ExpectError
  client.setLogFilePath(1234, 'abc', 123423)

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

  client.invokeFuture({
    _: 'searchPublicChat',
    username: 'username'
  })
    .map((e: Td$Chat) => e.title)
    .mapRej((e: Td$error) => e)
    .fork(console.error, (e: string) => console.log(e))

  client.invokeFuture({
    _: 'searchPublicChat',
    username: 'username'
  })
    // $ExpectError
    .map((e: number) => e)
})()
