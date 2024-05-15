import { describe } from 'vitest'
import { addTests } from './shared'

describe('tdl + tdjson (useOldTdjsonInterface = true)', () => {
  addTests(true)
})
