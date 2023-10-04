// @flow

const path = require('path')
const tdl = require('../../packages/tdl')

const projectRoot = path.join(__dirname, '..', '..')

let tdjson
let libdir

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
  libdir = projectRoot
}

let testName/*: string */
let createClient/*: () => tdl.Client */

const testingTdlTdlibAddon = process.env.TEST_TDL_TDLIB_ADDON === '1'
const testingNewTdjson = process.env.TEST_NEW_TDJSON === '1'
if (testingTdlTdlibAddon) {
  testName = 'tdl with tdl-tdlib-addon (backward compatibility)'
  createClient = function () {
    const { TDLib, defaultLibraryFile } = require('tdl-tdlib-addon')
    if (libdir) tdjson = path.join(projectRoot, defaultLibraryFile)
    return new tdl.Client(new TDLib(tdjson), { bare: true })
  }
} else if (testingNewTdjson) {
  const ver = tdjson && tdjson.match(/td-1\.(\d)\.0/)
  if (ver && ver[1] && Number(ver[1]) < 7) {
    console.log('TEST_NEW_TDJSON is disabled for TDLib < 1.7.0.')
    process.exit(0)
  }
  testName = 'tdl with useNewTdjsonInterface'
  createClient = function () {
    if (libdir) tdl.configure({ libdir })
    else tdl.configure({ tdjson })
    tdl.configure({ useNewTdjsonInterface: true })
    return tdl.createClient({ bare: true })
  }
} else {
  testName = 'tdl'
  createClient = function () {
    if (libdir) tdl.configure({ libdir })
    else tdl.configure({ tdjson })
    return tdl.createClient({ bare: true })
  }
}

describe(testName, () => {
  const client = createClient()
  const updates = []

  client.on('error', e => console.error('error', e))
  client.on('update', u => {
    // console.log('update', u)
    updates.push(u)
  })

  function expectUpdate (pred) {
    return new Promise(resolve => {
      for (const u of updates)
        if (pred(u)) return resolve()
      const fn = u => {
        if (pred(u)) {
          client.off('update', fn)
          resolve()
        }
      }
      client.on('update', fn)
    })
  }

  function versionGte (minMajor, minMinor) {
    let [major, minor] = client.getVersion().split('.')
    major = Number(major)
    minor = Number(minor)
    if (major < minMajor) return false
    if (major > minMajor) return true
    return minor >= minMinor
  }

  beforeAll(() => {
    return expectUpdate(u => u._ === 'updateOption' && u.name === 'version')
  }, 2000)

  afterAll(() => client.close())

  test('authorizationStateWaitTdlibParameters has been received', () => {
    return expectUpdate(u => u._ === 'updateAuthorizationState'
      && u?.authorization_state._ === 'authorizationStateWaitTdlibParameters')
  }, 2000)

  test('invoke(testCallString) should respond with the same value', async () => {
    const response = await client.invoke({ _: 'testCallString', x: 'hi' })
    await expect(response).toStrictEqual({ _: 'testString', value: 'hi' })
  })

  test('invoke(testReturnError) should fail with the same error', () => {
    const error = { _: 'error', code: 222, message: 'hi-error' }
    const responseP = client.invoke({ _: 'testReturnError', error })
    return expect(responseP).rejects.toStrictEqual(error)
  })

  if (!testingTdlTdlibAddon) {
    test('tdl.execute(getTextEntities) should synchronously return a textEntities object', () => {
      const response = tdl.execute({ _: 'getTextEntities', text: 'hi @mybot' })
      expect(response).toBeObject()
      expect(response).toContainEntry(['_', 'textEntities'])
    })

    test('tdl.setLogMessageCallback should set the callback in TDLib v1.8.0+', done => {
      if (!versionGte(1, 8)) {
        expect(() => tdl.setLogMessageCallback(5, () => {})).toThrow()
        return done()
      }
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
  }

  test('client.execute(getTextEntities) should synchronously return a textEntities object', () => {
    const response = client.execute({ _: 'getTextEntities', text: 'hi @mybot' })
    expect(response).toBeObject()
    expect(response).toContainEntry(['_', 'textEntities'])
  })
})
