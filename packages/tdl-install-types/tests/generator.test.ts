import { describe, test, expect } from 'vitest'
import * as fs from 'node:fs'
import * as path from 'node:path'
// @ts-expect-error
import { generate } from '../src/gen.js'

const schemaDir = path.join(__dirname, 'schema')

const schema180 = fs.readFileSync(path.join(schemaDir, 'v1.8.0.tl'))
  .toString()

describe('types generator', () => {
  test('should generate TypeScript types for TDLib v1.8.0', async () => {
    await expect(generate(schema180, 'typescript', ['// TDLib v1.8.0']))
      .toMatchFileSnapshot('__snapshots__/ts-tdlib-1-8-0.js.shot')
  })

  test('should generate Flow types for TDLib v1.8.0', async () => {
    await expect(generate(schema180, 'flow', ['// TDLib v1.8.0']))
      .toMatchFileSnapshot('__snapshots__/flow-tdlib-1-8-0.js.shot')
  })
})
