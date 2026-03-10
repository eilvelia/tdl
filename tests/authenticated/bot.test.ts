// This file includes tests that require telegram authentication (and also
// database creation). It takes API_ID, API_HASH, and the bot token from the
// test.cfg file. These tests are run manually only.

import { describe, test, expect, beforeEach, afterEach, beforeAll, afterAll } from 'vitest'
import * as path from 'node:path'
import * as fs from 'node:fs'
import * as fsp from 'node:fs/promises'
import * as tdl from '../../packages/tdl'
import { getTdjson } from 'prebuilt-tdlib'

const projectRoot = path.join(__dirname, '..', '..')

tdl.configure({ tdjson: getTdjson() })

const databaseDirectory = path.join(__dirname, '..', '_td_database')

const cfgLines = fs.readFileSync(path.join(projectRoot, 'test.cfg'))
  .toString()
  .trim()
  .split(/\r?\n/)
  .map(l => l.trim())

let apiId: number | undefined
let apiHash: string | undefined
let botToken: string | undefined

for (const line of cfgLines) {
  if (line[0] === '#') continue
  const [k, v] = line.split('=')
  switch (k) {
    case 'TEST_API_ID': apiId = Number(v); break
    case 'TEST_API_HASH': apiHash = v; break
    case 'TEST_BOT_TOKEN': botToken = v; break
  }
}

if (apiId == null) throw new Error('No api id')
if (apiHash == null) throw new Error('No api hash')
if (botToken == null) throw new Error('No bot token')

const createTestClient = () => {
  return tdl.createClient({
    apiId,
    apiHash,
    databaseDirectory,
    filesDirectory: databaseDirectory,
    tdlibParameters: {
        use_file_database: false,
        use_chat_info_database: false,
        use_message_database: false
      }
  })
}

const cleanDatabase = () => {
  return fsp.rm(databaseDirectory, { recursive: true, force: true })
}

describe('tdl with an authenticated client', () => {
  let client: tdl.Client

  beforeAll(async () => {
    await cleanDatabase()
  })

  beforeEach(() => {
    client = createTestClient()
  })

  afterEach(async () => {
    await client.close()
    await cleanDatabase()
  })

  test('make pre-auth request, log in successfully', async () => {
    const option = await client.invoke({
      _: 'getOption',
      name: 'message_caption_length_max'
    })
    expect(option._).toBe('optionValueInteger')
    await client.loginAsBot(botToken)
    const me = await client.invoke({ _: 'getMe' })
    expect(me).toMatchObject({
      _: 'user',
      type: { _: 'userTypeBot' },
      phone_number: ''
    })
  })

  test('can receive auth-only updates', async () => {
    (async () => {
      for await (const update of client.iterUpdates()) {
        // Can queue updates
        await new Promise(resolve => setTimeout(resolve, 50))
        if (update._ === 'updateOption' && update.name === 'my_id') {
          expect(update.value._).toBe('optionValueInteger')
          return
        }
      }
      throw new Error('Failed to receive updateOption(my_id)')
    })()
    await client.loginAsBot(() => Promise.resolve(botToken))
  })

  test('an exception in the client.on(update) handler is emitted as error', () => {
    return new Promise((resolve, reject) => {
      client.once('error', e => {
        try {
          expect(e).toBeInstanceOf(Error)
          expect(e.message).toBe('##TEST##')
          resolve(undefined)
        } catch (err) {
          reject(err)
        }
      })
      client.on('error', () => {
        // Since we are not waiting for initialization to finish, TDLib will
        // send "Request aborted"
      })
      client.once('update', () => {
        throw new Error('##TEST##')
      })
    })
  })
})

describe('tdl with a single long authenticated bot session', () => {
  let client: tdl.Client

  beforeAll(async () => {
    client = createTestClient()
    client.on('error', e => console.error('error', e))
    await client.loginAsBot(botToken)
  })

  afterAll(async () => {
    await cleanDatabase()
  })

  test('getVersion() returns a valid version string', () => {
    const version = client.getVersion()
    expect(version).toMatch(/^\d+\.\d+\.\d+$/)
  })

  test('invoke rejects with TDLibError for an invalid request', async () => {
    try {
      await client.invoke({ _: 'getChat', chat_id: 2 ** 40 })
      expect.unreachable()
    } catch (e: any) {
      expect(e).toBeInstanceOf(tdl.TDLibError)
      expect(e.code).toBeTypeOf('number')
      expect(e.message).toBeTypeOf('string')
    }
  })

  test('close event fires when client is logged out', async () => {
    let closeFired = false
    client.on('close', () => { closeFired = true })
    await client.invoke({ _: 'logOut' })
    expect(closeFired).toBe(true)
    expect(client.isClosed()).toBe(true)
  })
})
