// @flow

const path = require('path')

const { TDLib: TDLibFFI } = require('../packages/tdl-tdlib-ffi')
const { TDLib: TDLibAddon } = require('../packages/tdl-tdlib-addon')
const { Client } = require('../packages/tdl')

/*:: import type { ITDLibJSON } from '../packages/tdl-shared' */

const defaultLibtdjson = (() => {
  switch (process.platform) {
    case 'win32': return 'tdjson.dll'
    case 'darwin': return 'libtdjson.dylib'
    default: return 'libtdjson.so'
  }
})()

const libtdjsonPath = process.env.LIBTDJSON_PATH || defaultLibtdjson

const libtdjson = path.join(__dirname, '..', libtdjsonPath)

describe.each([
  ['tdl-tdlib-ffi', new TDLibFFI(libtdjson)],
  ['tdl-tdlib-addon', new TDLibAddon(libtdjson)]
])('Client (%s):', (name, tdlib/*: ITDLibJSON*/) => {
  const client = new Client(tdlib, {
    apiId: 222,
    apiHash: 'test',
    disableAuth: true
  })

  client.on('error', e => console.error(`${name} error`, e))

  client.on('update', u => {
    console.log(`${name} update`, u)
    const cond = u._ === 'updateAuthorizationState'
      && u.authorization_state._ === 'authorizationStateClosed'
    if (cond)
      client.destroy()
  })

  beforeAll(() => client.connect())

  afterAll(() => client.close())

  test('authorizationStateWaitTdlibParameters received', () => new Promise(resolve => {
    const fn = u => {
      if (u._ !== 'updateAuthorizationState') return
      if (u.authorization_state._ === 'authorizationStateWaitTdlibParameters') {
        client.off('update', fn)
        resolve()
      }
    }
    client.on('update', fn)
  }))

  test('invoke(testCallString) should response with the same value', async () => {
    const response = await client.invoke({ _: 'testCallString', x: 'hi' })
    await expect(response).toStrictEqual({ _: 'testString', value: 'hi' })
  })

  test('invoke(testReturnError) should fail with the same error', () => {
    const error = { _: 'error', code: 222, message: 'hi-error' }
    const responseP = client.invoke({ _: 'testReturnError', error })
    return expect(responseP).rejects.toStrictEqual(error)
  })

  test('execute(getTextEntities) should synchronously return a textEntities object', () => {
    const response = client.execute({ _: 'getTextEntities', text: 'hi @mybot' })
    expect(response).toBeObject()
    expect(response).toContainEntry(['_', 'textEntities'])
  })
})
