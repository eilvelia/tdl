// This file includes tests that require telegram authentication (and also
// database creation). It takes API_ID, API_HASH, and the bot token from the
// test.cfg file. These tests are run manually only.

/// <reference types="jest" />

import * as path from 'node:path'
import * as fs from 'node:fs'
import * as fsp from 'node:fs/promises'
import * as tdl from '../../packages/tdl'
import { getTdjson } from 'prebuilt-tdlib'

const projectRoot = path.join(__dirname, '..', '..')

tdl.configure({ tdjson: getTdjson() })

const databaseDirectory = path.join(__dirname, '..', '_td_database')
const filesDirectory = path.join(__dirname, '..', '_td_files')

const envrcLines = fs.readFileSync(path.join(projectRoot, 'test.cfg'))
  .toString()
  .trim()
  .split(/\r?\n/)
  .map(l => l.trim())

let apiId: number | undefined
let apiHash: string | undefined
let botToken: string | undefined

for (const line of envrcLines) {
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

describe('tdl with an authenticated client', () => {
  let client: tdl.Client

  beforeEach(() => {
    client = tdl.createClient({
      apiId,
      apiHash,
      databaseDirectory,
      filesDirectory,
      tdlibParameters: {
        use_file_database: false,
        use_chat_info_database: false,
        use_message_database: false
      }
    })
  })

  afterEach(async () => {
    await client.close()
    await fsp.rm(databaseDirectory, { recursive: true, force: true })
    await fsp.rm(filesDirectory, { recursive: true, force: true })
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
      phone_number: ''
    })
    expect(me.type._).toBe('userTypeBot')
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
    await client.loginAsBot(botToken)
  })

  test('an exception in the client.on(update) handler is emitted as error', () => {
    return new Promise((resolve, reject) => {
      client.once('error', e => {
        try {
          expect(e).toBeInstanceOf(Error)
          expect(e.message).toBe('##TEST##')
          console.log('RESOLVING')
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
