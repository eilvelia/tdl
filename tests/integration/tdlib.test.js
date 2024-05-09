// @flow

const path = require('path')
const tdl = require('../../packages/tdl')

const projectRoot = path.join(__dirname, '..', '..')

let tdjson = null

if (process.env.PREBUILT_PATH) {
  const prebuiltPath = process.env.PREBUILT_PATH
  console.log(`Testing prebuilt-tdlib from '${prebuiltPath}'`)
  // $FlowIgnore[unsupported-syntax]
  tdjson = require(path.join(projectRoot, prebuiltPath)).getTdjson()
} else if (process.env.LIBTDJSON_PATH) {
  const tdjsonPath = process.env.LIBTDJSON_PATH
  console.log(`Testing tdjson from ${tdjsonPath}`)
  tdjson = path.isAbsolute(tdjsonPath) ? tdjsonPath : path.join(projectRoot, tdjsonPath)
} else {
  console.log('Testing tdjson from the project root')
  tdl.configure({ libdir: projectRoot })
}

if (tdjson) tdl.configure({ tdjson })

let testName = 'tdl'

if (process.env.TEST_OLD_TDJSON === '1') {
  testName += ' with useOldTdjsonInterface'
  tdl.configure({ useOldTdjsonInterface: true })
}

describe(testName, () => {
  const client = tdl.createBareClient()
  const updates = []

  client.on('error', e => console.error('error', e))
  client.on('update', u => {
    // console.log('update', u)
    updates.push(u)
  })

  async function expectUpdate (pred/*: Function */) {
    for (const u of updates)
      if (pred(u)) return
    for await (const u of client.iterUpdates())
      if (pred(u)) return
  }

  beforeAll(() => {
    return expectUpdate(u => u._ === 'updateOption' && u.name === 'version')
  }, 2000)

  afterAll(() => client.close())

  test('authorizationStateWaitTdlibParameters has been received', () => {
    return expectUpdate(u => u._ === 'updateAuthorizationState'
      && u?.authorization_state._ === 'authorizationStateWaitTdlibParameters')
  }, 2000)

  test('getVersion() should return a version string', () => {
    const version = client.getVersion()
    expect(version).toBeString()
    expect(version).toStartWith('1.')
  })

  test('invoke(testCallString) should respond with the same value', async () => {
    const response = await client.invoke({ _: 'testCallString', x: 'hi' })
    await expect(response).toStrictEqual({ _: 'testString', value: 'hi' })
  })

  test('invoke(testReturnError) should fail with the same error', async () => {
    const error = { _: 'error', code: 222, message: 'hi-error' }
    const responseP = client.invoke({ _: 'testReturnError', error })
    await expect(responseP).rejects.toBeInstanceOf(tdl.TDLibError)
    return expect(responseP).rejects.toMatchObject(error)
  })

  test('tdl.execute(getTextEntities) should synchronously return a textEntities object', () => {
    const response = tdl.execute({ _: 'getTextEntities', text: 'hi @mybot' })
    expect(response).toBeObject()
    expect(response).toContainEntry(['_', 'textEntities'])
  })

  test('tdl.setLogMessageCallback should set the callback', done => {
    let receivedSpecial = 0
    tdl.setLogMessageCallback(5, (verbosityLevel, message) => {
      try {
        // console.log(verbosityLevel, 'Received message:', message)
        expect(verbosityLevel).toBeNumber()
        expect(message).toBeString()
        if (message.includes('TDL-SPECIAL')) receivedSpecial++
        if (receivedSpecial >= 3) {
          tdl.setLogMessageCallback(5, null)
          // The process should exit with the callback attached
          tdl.setLogMessageCallback(1, () => {})
          done()
        }
      } catch (err) {
        done(err)
      }
    })
    tdl.execute({ _: 'addLogMessage', verbosity_level: 1, text: 'TDL-SPECIAL 1' })
    tdl.execute({ _: 'addLogMessage', verbosity_level: 1, text: 'TDL-SPECIAL 2' })
    tdl.execute({ _: 'addLogMessage', verbosity_level: 1, text: 'TDL-SPECIAL 3' })
    // client.invoke({ _: 'addLogMessage', verbosity_level: 0, text: 'TDL-SPECIAL 3' })
  }, 2000)

  test('client.execute(getTextEntities) should synchronously return a textEntities object', () => {
    const response = client.execute({ _: 'getTextEntities', text: 'hi @mybot' })
    expect(response).toBeObject()
    expect(response).toContainEntry(['_', 'textEntities'])
  })
})
