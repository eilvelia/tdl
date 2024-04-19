const fs = require('fs')
const path = require('path')
const { generate } = require('../src/gen.js')

require('jest-specific-snapshot')

const schemaDir = path.join(__dirname, 'schema')

const schema180 = fs.readFileSync(path.join(schemaDir, 'v1.8.0.tl'))
  .toString()

describe('types generator', () => {
  test('should generate TypeScript types for TDLib v1.8.0', () => {
    expect(generate(schema180, 'typescript', ['// TDLib v1.8.0']))
      .toMatchSpecificSnapshot('__snapshots__/ts-tdlib-1-8-0.js.shot')
  })

  test('should generate Flow types for TDLib v1.8.0', () => {
    expect(generate(schema180, 'flow', ['// TDLib v1.8.0']))
      .toMatchSpecificSnapshot('__snapshots__/flow-tdlib-1-8-0.js.shot')
  })
})
