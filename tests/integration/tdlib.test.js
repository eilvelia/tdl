// @flow

const path = require('path')
const tdl = require('../../packages/tdl')

const projectRoot = path.join(__dirname, '..', '..')

let tdjson
let libPrefix

if (process.env.TEST_PREBUILT === '1') {
  console.log('Using local prebuilt-tdlib')
  tdjson = require('../../packages/prebuilt-tdlib').getTdjson()
} else if (process.env.USE_PREBUILT) {
  const prebuiltPath = process.env.USE_PREBUILT
  console.log(`Using prebuilt-tdlib from '${prebuiltPath}'`)
  // $FlowIgnore[unsupported-syntax]
  tdjson = require(path.join(projectRoot, prebuiltPath)).getTdjson()
} else if (process.env.LIBTDJSON_PATH) {
  const tdjsonPath = process.env.LIBTDJSON_PATH
  console.log(`Using tdjson from ${tdjsonPath}`)
  tdjson = path.isAbsolute(tdjsonPath) ? tdjsonPath : path.join(projectRoot, tdjsonPath)
} else {
  libPrefix = projectRoot
}

let testName/*: string */
let createClient/*: () => tdl.Client */

if (process.env.TEST_TDL_TDLIB_ADDON === '1') {
  testName = 'tdl with tdl-tdlib-addon (backward compatibility)'
  createClient = function () {
    const { TDLib, defaultLibraryFile } = require('tdl-tdlib-addon')
    if (libPrefix) tdjson = path.join(projectRoot, defaultLibraryFile)
    return new tdl.Client(new TDLib(tdjson), { bare: true })
  }
} else {
  testName = 'tdl'
  createClient = function () {
    if (libPrefix) tdl.configure({ libPrefix })
    else tdl.configure({ tdjson })
    return tdl.createClient({ bare: true })
  }
}

describe(testName, () => {
  const client = createClient()

  client.on('error', e => console.error('error', e))
  client.on('update', u => console.log('update', u))

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
