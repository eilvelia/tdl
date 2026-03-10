import { test, expect, describe } from 'vitest'
// @ts-expect-error
import { deepRenameKey, mergeDeepRight } from '../dist/util.js'

const OBJ = Object.freeze({
  _: 'chat',
  order: '0',
  is_pinned: false,
  type: {
    _: 'chatTypeSupergroup',
    is_channel: true,
  },
  innerObjWithoutType: {
    k1: 'v1',
    k2: 'v2',
    nil: null,
    und: undefined,
  },
  nullField: null,
  undefinedField: undefined,
  numbers: 1234,
  emptyStr: '',
  typeInStr: '@type',
  underscoreInStr: '_',
  arrayTest: [
    {
      _: 'chatPermissions',
      can_send_messages: false,
      can_send_media_messages: false,
      can_send_polls: false,
      innerArray: [
        {
          _: 'type',
        },
      ],
    },
    [
      [
        {
          _: 'hello',
        },
        {},
      ],
    ],
    {
      _: 'chatNotificationSettings',
      use_default_mute_for: true,
      mute_for: 0,
    },
  ],
})

test('deepRenameKey', () => {
  const obj = { ...OBJ }
  const newObj = deepRenameKey('_', '@type', obj)
  // Should not change the original object
  expect(obj).toStrictEqual(OBJ)
  expect(newObj).toMatchInlineSnapshot(`
    {
      "@type": "chat",
      "arrayTest": [
        {
          "@type": "chatPermissions",
          "can_send_media_messages": false,
          "can_send_messages": false,
          "can_send_polls": false,
          "innerArray": [
            {
              "@type": "type",
            },
          ],
        },
        [
          [
            {
              "@type": "hello",
            },
            {},
          ],
        ],
        {
          "@type": "chatNotificationSettings",
          "mute_for": 0,
          "use_default_mute_for": true,
        },
      ],
      "emptyStr": "",
      "innerObjWithoutType": {
        "k1": "v1",
        "k2": "v2",
        "nil": null,
        "und": undefined,
      },
      "is_pinned": false,
      "nullField": null,
      "numbers": 1234,
      "order": "0",
      "type": {
        "@type": "chatTypeSupergroup",
        "is_channel": true,
      },
      "typeInStr": "@type",
      "undefinedField": undefined,
      "underscoreInStr": "_",
    }
  `)
})

describe('mergeDeepRight', () => {
  test('shallow merge prefers right-side values', () => {
    const result = mergeDeepRight({ a: 1, b: 2 }, { b: 3, c: 4 })
    expect(result).toStrictEqual({ a: 1, b: 3, c: 4 })
  })

  test('deep merge of nested objects', () => {
    const obj1 = { a: { x: 1, y: 2 }, b: 10 }
    const obj2 = { a: { y: 3, z: 4 } }
    const result = mergeDeepRight(obj1, obj2)
    expect(result).toStrictEqual({ a: { x: 1, y: 3, z: 4 }, b: 10 })
  })

  test('right-side non-object overwrites left-side object', () => {
    const result = mergeDeepRight({ a: { nested: true } }, { a: 42 })
    expect(result).toStrictEqual({ a: 42 })
  })

  test('right-side object overwrites left-side non-object', () => {
    const result = mergeDeepRight({ a: 42 }, { a: { nested: true } })
    expect(result).toStrictEqual({ a: { nested: true } })
  })

  test('arrays are not deeply merged (treated as non-objects)', () => {
    const result = mergeDeepRight({ a: [1, 2] }, { a: [3] })
    expect(result).toStrictEqual({ a: [3] })
  })

  test('does not modify the original objects', () => {
    const obj1 = { a: { x: 1 } }
    const obj2 = { a: { y: 2 } }
    mergeDeepRight(obj1, obj2)
    expect(obj1).toStrictEqual({ a: { x: 1 } })
    expect(obj2).toStrictEqual({ a: { y: 2 } })
  })

  test('returns obj2 when obj1 is not an object', () => {
    expect(mergeDeepRight(null, { a: 1 })).toStrictEqual({ a: 1 })
    expect(mergeDeepRight(undefined, { a: 1 })).toStrictEqual({ a: 1 })
  })

  test('three-level deep merge', () => {
    const obj1 = { a: { b: { c: 1, d: 2 }, e: 3 } }
    const obj2 = { a: { b: { c: 10 } } }
    const result = mergeDeepRight(obj1, obj2)
    expect(result).toStrictEqual({ a: { b: { c: 10, d: 2 }, e: 3 } })
  })
})
