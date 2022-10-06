// @flow

const path = require('path')
const { Client } = require('../../packages/tdl')
const { TDLib, defaultLibraryFile } = require('../../packages/tdl-tdlib-addon')

const fromRoot = p => path.join(__dirname, '..', '..', p)

const libtdjson = process.env.TEST_PREBUILT === '1'
  ? require('../../packages/prebuilt-tdlib').getTdjson()
  : fromRoot(process.env.LIBTDJSON_PATH || defaultLibraryFile)

describe('Client with tdl-tdlib-addon', () => {
  const tdlib = new TDLib(libtdjson)
  const backend = 'tdl-tdlib-addon'

  const client = new Client(tdlib, {
    apiId: 222,
    apiHash: 'test',
    disableAuth: true
  })

  client.on('error', e => console.error(`[${backend}] error`, e))

  client.on('update', u => {
    console.log(`[${backend}] update`, u)
    const closed = u._ === 'updateAuthorizationState'
      && u.authorization_state._ === 'authorizationStateClosed'
    if (closed)
      client.destroy()
  })

  // beforeAll(() => client.connect())
  afterAll(() => client.close())

  test('authorizationStateWaitTdlibParameters has been received', () => new Promise(resolve => {
    const fn = u => {
      if (u._ !== 'updateAuthorizationState') return
      if (u.authorization_state._ === 'authorizationStateWaitTdlibParameters') {
        client.off('update', fn)
        resolve()
      }
    }
    client.on('update', fn)
  }))

  test('invoke(testCallString) should respond with the same value', async () => {
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
