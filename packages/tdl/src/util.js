// @flow

function isObject (item: mixed): boolean %checks {
  return item != null && typeof item === 'object' && !Array.isArray(item)
}

declare export function mergeDeepRight<A, B>(a: A, b: B): B & A
export function mergeDeepRight (obj1, obj2) {
  if (isObject(obj1) && isObject(obj2)) {
    const result = {}
    for (const key2 in obj2) {
      const val1 = obj1[key2]
      const val2 = obj2[key2]
      result[key2] = mergeDeepRight(val1, val2)
    }
    for (const key1 in obj1) {
      if (!(key1 in result))
        result[key1] = obj1[key1]
    }
    return result
  }
  return obj2
}

/** Renames `oldKey` to `newKey` deeply. The objects should not contain functions. */
export function deepRenameKey (
  oldKey: string,
  newKey: string,
  v: any
): any {
  if (Array.isArray(v))
    return v.map(x => deepRenameKey(oldKey, newKey, x))
  if (typeof v === 'object' && v !== null) {
    const newObj = {}
    for (const k in v)
      newObj[k === oldKey ? newKey : k] = deepRenameKey(oldKey, newKey, v[k])
    return newObj
  }
  return v
}

// export function deepRenameKeyNonrec (
//   oldKey: string,
//   newKey: string,
//   initObj: { +[key: string]: any }
// ): any {
//   const newInitObj = {}
//   const stack/*: any[] */ = []
//   stack.push([initObj, newInitObj])
//   let el
//   while ((el = stack.pop()) !== undefined) {
//     const [obj, newObj] = el
//     for (const k in obj) {
//       let v = obj[k]
//       if (typeof v === 'object' && v !== null) {
//         const newV = Array.isArray(v) ? new Array(v.length) : {}
//         stack.push([v, newV])
//         v = newV
//       }
//       newObj[k === oldKey ? newKey : k] = v
//     }
//   }
//   return newInitObj
// }
