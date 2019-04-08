import { TDLib } from '../packages/tdl-tdlib-ffi'
import { Client, TdlError } from '../packages/tdl'

const tdlib = new TDLib('str')

import {
  error as Td$error,
  Chat as Td$Chat,
  User as Td$User,
  Update as Td$Update,
  formattedText as Td$formattedText,
  formattedText$Input as Td$formattedText$Input
} from '../packages/tdl/types/tdlib'

const cl = new Client(tdlib, {
  apiId: 2234,
  apiHash: 'abcdef',
  useTestDc: false
})

new Client(tdlib, { receiveTimeout: 10 })

new Client(tdlib)

Client.create(tdlib)
Client.create(tdlib, {})

const client = cl

;(async () => {
  await cl.connect()

  await cl.login(() => ({
    type: 'user',
    getPhoneNumber: () => Promise.resolve('+1234'),
    getAuthCode: () => Promise.resolve('str')
  }))

  await cl.login(() => ({
    type: 'bot',
    getToken: () => Promise.resolve('abcdef')
  }))

  await cl.connectAndLogin(() => ({
    type: 'bot',
    getToken: () => Promise.resolve('abcdef')
  }))

  await cl.login()
  await cl.connectAndLogin()

  await cl.login(() => ({}))

  cl.pause()
  cl.resume()

  client.on('error', e => {
    if (e instanceof TdlError) {
      const a: TdlError = e
      console.log(e.err)
      return
    }
    console.log(e.message)
  })

  ;(client.off: typeof client.removeListener)
  ;(client.addListener: typeof client.on)
  ;(client.once: typeof client.on)
})()

cl.on('update', u => {
  console.log(u)
})

cl
  .on('error', e => {
    console.log(e)
  })
  .on('destroy', () => {})
  .on('response', r => {})


cl.emit('error', { _: 'error', code: 1235, message: 'MSG', })
cl.emit('destroy')
cl.emit('auth-needed')

const { on } = cl

on('destroy', () => {})

new TDLib()

;(async () => {
  const tdclient = await tdlib.create()

  const { destroy } = tdlib

  destroy(tdclient)

  tdlib.destroy({ _TDLibClientBrand: undefined })
})()

const pp: Promise<Td$User> = cl.invoke({ _: 'getMe' })

cl.invokeFuture({
  _: 'searchPublicChat',
  username: 'username'
})
  .map(chat => `Chat: ${chat.title}, id: ${chat.id}`)
  .mapRej(err => `Error: ${err.message}`)
  .fork(console.error, console.log)

client.invokeFuture({
  _: 'searchPublicChat',
  username: 'username'
})
  .map((e: Td$Chat) => e.title)
  .mapRej((e: Td$error) => e)
  .fork(console.error, (e: string) => console.log(e))

// Td$formattedText <: Td$formattedText$Input
declare var fmt: Td$formattedText
const fmtOpt: Td$formattedText$Input = fmt
