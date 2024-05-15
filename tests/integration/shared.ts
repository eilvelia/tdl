import { expect, test, beforeAll, afterAll } from 'vitest'
import * as path from 'node:path'
import * as tdl from 'tdl'
import type * as Td from 'tdlib-types'

const projectRoot = path.join(__dirname, '..', '..')

if (process.env.PREBUILT_PATH) {
  const prebuiltPath = process.env.PREBUILT_PATH
  console.log(`Testing prebuilt-tdlib from '${prebuiltPath}'`)
  const prebuiltTdlib = require(path.join(projectRoot, prebuiltPath))
  tdl.configure({ tdjson: prebuiltTdlib.getTdjson() })
} else if (process.env.LIBTDJSON_PATH) {
  const tdjsonPath = process.env.LIBTDJSON_PATH
  console.log(`Testing tdjson from ${tdjsonPath}`)
  tdl.configure({ tdjson: path.resolve(projectRoot, tdjsonPath) })
} else if (process.env.LIBDIR_PATH) {
  const libdirPath = process.env.LIBDIR_PATH
  console.log(`Testing tdjson from the ${libdirPath} directory`)
  tdl.configure({ libdir: path.resolve(projectRoot, libdirPath) })
} else {
  tdl.configure({ tdjson: require('prebuilt-tdlib').getTdjson() })
}

export function addTests (oldTdjson: boolean = false) {
  if (oldTdjson)
    tdl.configure({ useOldTdjsonInterface: true })

  const client = tdl.createBareClient()
  const updates: Td.Update[] = []

  client.on('error', e => console.error('error', e))
  client.on('update', u => {
    // console.log('update', u)
    updates.push(u)
  })

  async function expectUpdate (pred: (u: Td.Update) => boolean) {
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
    expect(version).toBeTypeOf('string')
    expect(version).toMatch(/^1\./)
  })

  test('invoke(testCallString) should respond with the same value', async () => {
    const response = await client.invoke({ _: 'testCallString', x: 'hi' })
    expect(response).toStrictEqual({ _: 'testString', value: 'hi' })
  })

  test('invoke(testReturnError) should fail with the same error', async () => {
    const error = { _: 'error', code: 222, message: 'hi-error' } as const
    const responseP = client.invoke({ _: 'testReturnError', error })
    await expect(responseP).rejects.toBeInstanceOf(tdl.TDLibError)
    return expect(responseP).rejects.toMatchObject(error)
  })

  test('tdl.execute(getTextEntities) should synchronously return a textEntities object', () => {
    const response = tdl.execute({ _: 'getTextEntities', text: 'hi @mybot' })
    expect(response).toMatchObject({ _: 'textEntities' })
  })

  test('tdl.setLogMessageCallback should set the callback', () => {
    return new Promise((resolve, reject) => {
      let receivedSpecial = 0
      tdl.setLogMessageCallback(5, (verbosityLevel, message) => {
        try {
          // console.log(verbosityLevel, 'Received message:', message)
          expect(verbosityLevel).toBeTypeOf('number')
          expect(message).toBeTypeOf('string')
          if (message.includes('TDL-SPECIAL')) receivedSpecial++
          if (receivedSpecial >= 3) {
            tdl.setLogMessageCallback(5, null)
            // The process should exit with the callback attached
            tdl.setLogMessageCallback(1, () => {})
            resolve(undefined)
          }
        } catch (err) {
          reject(err)
        }
      })
      tdl.execute({ _: 'addLogMessage', verbosity_level: 1, text: 'TDL-SPECIAL 1' })
      tdl.execute({ _: 'addLogMessage', verbosity_level: 1, text: 'TDL-SPECIAL 2' })
      tdl.execute({ _: 'addLogMessage', verbosity_level: 1, text: 'TDL-SPECIAL 3' })
      // client.invoke({ _: 'addLogMessage', verbosity_level: 0, text: 'TDL-SPECIAL 3' })
    })
  }, 2000)

  test('client.execute(getTextEntities) should synchronously return a textEntities object', () => {
    const response = client.execute({ _: 'getTextEntities', text: 'hi @mybot' })
    expect(response).toMatchObject({ _: 'textEntities' })
  })
}
