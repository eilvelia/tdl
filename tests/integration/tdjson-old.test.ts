import { describe } from 'vitest'
import { addTests } from './test'

describe('tdl + tdjson (useOldTdjsonInterface = true)', () => {
  addTests(true)
})
