import { describe, expect, test, beforeAll, afterAll } from 'vitest'
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

  test('configure() after initialization should throw', () => {
    expect(() => tdl.configure({ verbosityLevel: 2 }))
      .toThrow('TDLib is already initialized; too late to configure')
  })

  test('createClient without apiId should throw TypeError', () => {
    expect(() => tdl.createClient({ apiHash: 'hash' } as any))
      .toThrow(TypeError)
  })

  test('createClient without apiHash should throw TypeError', () => {
    expect(() => tdl.createClient({ apiId: 123 } as any))
      .toThrow(TypeError)
  })

  test('non-Error thrown in update listener should be emitted as UnknownError', () => {
    return new Promise<void>((resolve, reject) => {
      const client = tdl.createBareClient()
      client.once('update', () => {
        throw 'not an error'
      })
      client.on('error', e => {
        try {
          expect(e).toBeInstanceOf(tdl.UnknownError)
          expect((e as any).err).toBe('not an error')
          expect(e.message).toBe('not an error')
          client.close().then(resolve)
        } catch (err) {
          reject(err)
        }
      })
    })
  })

  test('close() on an already-closed client should resolve', async () => {
    const client = tdl.createBareClient()
    expect(client.isClosed()).toBe(false)
    await client.close()
    expect(client.isClosed()).toBe(true)
    // Second close should resolve immediately
    await client.close()
    expect(client.isClosed()).toBe(true)
  })

  test('invoke on a closed client should throw', async () => {
    const client = tdl.createBareClient()
    await client.close()
    expect(() =>
      client.invoke({ _: 'testCallString', x: 'after-close' })
    ).toThrow('closed')
  })

  test('login() on a closed client should reject', async () => {
    const client = tdl.createBareClient()
    await client.close()
    await expect(client.login()).rejects.toThrow('The client is closed')
  })

  test('iterUpdates() on a closed client should throw', async () => {
    const client = tdl.createBareClient()
    await client.close()
    expect(() => client.iterUpdates()).toThrow('The client is closed')
  })

  test('iterUpdates() should finish on authorizationStateClosed', async () => {
    const client = tdl.createBareClient()
    client.on('error', () => {})
    const iter = client.iterUpdates()
    await client.close()
    // Drain updates until the iterator finishes due to authorizationStateClosed
    while (true) {
      const result = await iter.next()
      if (result.done) break
    }
    expect(client.isClosed()).toBe(true)
  })

  test('getVersion() before version is received should throw', () => {
    const client = tdl.createBareClient()
    expect(() => client.getVersion()).toThrow('Unknown TDLib version')
    client.on('error', () => {})
    client.close()
  })

  describe('bare client', () => {
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

    afterAll(async () => {
      await client.close()
      expect(client.isClosed()).toBe(true)
    })

    test('The client should not be closed', () => {
      expect(client.isClosed()).toBe(false)
    })

    test('authorizationStateWaitTdlibParameters has been received', () => {
      return expectUpdate(u => u._ === 'updateAuthorizationState'
        && u?.authorization_state._ === 'authorizationStateWaitTdlibParameters')
    }, 2000)

    test('getVersion() should return a version string', () => {
      const version = client.getVersion()
      expect(version).toBeTypeOf('string')
      expect(version).toMatch(/^1\./)
    })

    test('invoke(testCallString) should echo the string', async () => {
      const response = await client.invoke({ _: 'testCallString', x: 'hi' })
      expect(response).toStrictEqual({ _: 'testString', value: 'hi' })
    })

    test('invoke(testReturnError) should fail with the same error', async () => {
      const error = { _: 'error', code: 222, message: 'hi-error' } as const
      const responseP = client.invoke({ _: 'testReturnError', error })
      await expect(responseP).rejects.toBeInstanceOf(tdl.TDLibError)
      return expect(responseP).rejects.toMatchObject(error)
    })

    test('invoke(testCallEmpty) should return ok', async () => {
      const response = await client.invoke({ _: 'testCallEmpty' })
      expect(response).toStrictEqual({ _: 'ok' })
    })

    test('invoke(testCallVectorInt) should echo the vector', async () => {
      const response = await client.invoke({ _: 'testCallVectorInt', x: [1, 2, 3] })
      expect(response).toStrictEqual({ _: 'testVectorInt', value: [1, 2, 3] })
    })

    test('invoke(testCallVectorString) should echo the vector', async () => {
      const response = await client.invoke({ _: 'testCallVectorString', x: ['a', 'b'] })
      expect(response).toStrictEqual({ _: 'testVectorString', value: ['a', 'b'] })
    })

     test('execute(getTextEntities) should synchronously return a textEntities object', () => {
      const response = client.execute({ _: 'getTextEntities', text: 'hi @mybot' })
      expect(response).toMatchObject({ _: 'textEntities' })
    })

    test('multiple concurrent invokes should resolve correctly', async () => {
      const inputs = Array.from({ length: 20 }, (_, i) => `concurrent-${i}`)
      const promises = inputs.map(x => client.invoke({ _: 'testCallString', x }))
      const results = await Promise.all(promises)
      for (let i = 0; i < inputs.length; i++)
        expect(results[i]).toStrictEqual({ _: 'testString', value: inputs[i] })
    })

    test('TDLibError should have correct properties', async () => {
      const error = { _: 'error', code: 404, message: 'not found' } as const
      try {
        await client.invoke({ _: 'testReturnError', error })
        expect.unreachable()
      } catch (e: any) {
        expect(e).toBeInstanceOf(tdl.TDLibError)
        expect(e.code).toBe(404)
        expect(e.message).toBe('not found')
        expect(e._).toBe('error')
        expect(e.name).toBe('TDLibError')
        expect(e.toString()).toBe('TDLibError: 404 not found')
      }
    })

    test('on() should return the client for chaining', () => {
      const fn = () => {}
      const result = client.on('update', fn)
      expect(result).toBe(client)
      client.off('update', fn)
    })

    test('once() should fire the listener only once', () => {
      let count = 0
      client.once('update', () => { count++ })
      // Manually emit to test once behavior without relying on TDLib updates
      client.emit('update', { _: 'updateOption', name: 'test1', value: { _: 'optionValueEmpty' } } as any)
      client.emit('update', { _: 'updateOption', name: 'test2', value: { _: 'optionValueEmpty' } } as any)
      expect(count).toBe(1)
    })

    test('off() should remove a listener and return true', () => {
      const fn = () => {}
      client.on('update', fn)
      expect(client.off('update', fn)).toBe(true)
      // Removing again should return false
      expect(client.off('update', fn)).toBe(false)
    })

    test('addListener and removeListener should be aliases of on and off', () => {
      expect(client.addListener).toBe(client.on)
      expect(client.removeListener).toBe(client.off)
    })

    test('once() with the same function should not add duplicates', () => {
      const fn = () => {}
      client.once('update', fn)
      client.once('update', fn)
      // off should return true (it was added), but only one removal needed
      expect(client.off('update', fn)).toBe(true)
      expect(client.off('update', fn)).toBe(false)
    })

    test('iterUpdates().return() should finish the iterator', async () => {
      const iter = client.iterUpdates()
      const result = await iter.return!()
      expect(result).toStrictEqual({ done: true, value: undefined })
      // Subsequent next() should also be done
      const result2 = await iter.next()
      expect(result2).toStrictEqual({ done: true, value: undefined })
    })

    test('iterUpdates() should yield updates', async () => {
      const iter = client.iterUpdates()
      // Call next() first so it blocks, then emit to resolve the deferred promise
      const p = iter.next()
      client.emit('update', { _: 'updateOption', name: 'iter_test', value: { _: 'optionValueEmpty' } } as any)
      const { done, value } = await p
      expect(done).toBe(false)
      expect(value).toMatchObject({ _: 'updateOption', name: 'iter_test' })
      await iter.return!()
    })

    test('iterUpdates() should yield queued updates', async () => {
      const iter = client.iterUpdates()
      // Emit before calling next(): update goes into the unconsumed queue
      client.emit('update', { _: 'updateOption', name: 'queued', value: { _: 'optionValueEmpty' } } as any)
      const { done, value } = await iter.next()
      expect(done).toBe(false)
      expect(value).toMatchObject({ _: 'updateOption', name: 'queued' })
      await iter.return!()
    })

    test('for await...of iterUpdates() should work', async () => {
      const iter = client.iterUpdates()
      const received: Td.Update[] = []
      const update1 = { _: 'updateOption', name: 'for_await_1', value: { _: 'optionValueEmpty' } } as any
      const update2 = { _: 'updateOption', name: 'for_await_2', value: { _: 'optionValueEmpty' } } as any
      client.emit('update', update1)
      client.emit('update', update2)
      for await (const u of iter) {
        received.push(u)
        if (received.length >= 2) break
      }
      expect(received).toHaveLength(2)
      expect(received[0]).toMatchObject({ name: 'for_await_1' })
      expect(received[1]).toMatchObject({ name: 'for_await_2' })
    })

    test('calling iterUpdates().next() twice concurrently should throw', async () => {
      const iter = client.iterUpdates()
      // First call will block waiting for an update
      const p1 = iter.next()
      expect(() => iter.next()).toThrow('Cannot call next() twice in succession')
      // Clean up: finish the iterator so p1 resolves
      await iter.return!()
      await p1
    })

    test('two bare clients should work independently', async () => {
      const client2 = tdl.createBareClient()
      client2.on('error', e => console.error('client2 error', e))
      const [r1, r2] = await Promise.all([
        client.invoke({ _: 'testCallString', x: 'client1' }),
        client2.invoke({ _: 'testCallString', x: 'client2' })
      ])
      expect(r1).toStrictEqual({ _: 'testString', value: 'client1' })
      expect(r2).toStrictEqual({ _: 'testString', value: 'client2' })
      await client2.close()
    })
  })
}
