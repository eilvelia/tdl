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

declare function map<T, R>(
  xs: Array<T>,
  fn: (x: T) => R
): Array<R>
declare function map<T, R>(
  xs: { [key: string]: T },
  fn: (x: T) => R
): { [key: string]: R }
function map (obj, f) {
  if (Array.isArray(obj))
    return obj.map(f)
  const result = {}
  for (const [k, v] of Object.entries(obj))
    result[k] = f(v)
  return result
}

// immutable
export const renameKey = (
  oldKey: string,
  newKey: string,
  obj: { [k: string]: mixed }
): { [k: string]: mixed } =>
  Object.keys(obj)
    .reduce((acc, key) => ({
      ...acc,
      ...{ [key === oldKey ? newKey : key]: obj[key] }
    }), {})

// mutable
export const renameKey_ = (
  oldKey: string,
  newKey: string,
  obj: { [k: string]: mixed }
): { [k: string]: mixed } => {
  obj[newKey] = obj[oldKey]
  delete obj[oldKey]
  return obj
}

// immutable
export const deepRenameKey = (
  oldKey: string,
  newKey: string,
  obj: Object
): Object => {
  const newObj: Object = obj[oldKey] ? renameKey(oldKey, newKey, obj) : obj

  const fn = e => (e && typeof e === 'object')
    ? deepRenameKey(oldKey, newKey, e)
    : e

  return map(newObj, fn)
}

// mutable
export const deepRenameKey_ = (
  oldKey: string,
  newKey: string,
  obj: Object
): Object => {
  if (obj[oldKey]) renameKey_(oldKey, newKey, obj)

  for (const e of Object.values(obj)) {
    if (e && typeof e === 'object')
      deepRenameKey_(oldKey, newKey, e)
  }

  return obj
}
