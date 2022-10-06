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

function deepRenameValue (
  oldKey: string,
  newKey: string,
  v: mixed
): any {
  if (Array.isArray(v))
    return v.map(x => deepRenameValue(oldKey, newKey, x))
  if (typeof v === 'object' && v !== null)
    return deepRenameKey(oldKey, newKey, v)
  return v
}

/** Immutable. Functions in the object are not supported */
export function deepRenameKey (
  oldKey: string,
  newKey: string,
  obj: { +[key: string]: mixed }
): any {
  const newObj = {}
  for (const [k, v] of Object.entries(obj))
    newObj[k === oldKey ? newKey : k] = deepRenameValue(oldKey, newKey, v)
  return newObj
}

/** Mutable (changes the `obj` object) */
export function deepRenameKey_ (
  oldKey: string,
  newKey: string,
  obj: { [key: string]: mixed }
): any {
  const stack: Array<{ [key: string]: mixed } | Array<mixed>> = []

  stack.push(obj)

  while (stack.length !== 0) {
    const obj = stack.pop()
    if (oldKey in obj && !Array.isArray(obj)) {
      obj[newKey] = obj[oldKey]
      // TODO: delete here may actually make it slower than the immutable version
      delete obj[oldKey]
    }
    // For better performance, we should not use Object.values
    for (const v of Object.values(obj)) {
      if (typeof v === 'object' && v !== null)
        // `v` is read-only here, but we want to mutate it
        // $FlowIgnore[incompatible-call]
        stack.push(v)
    }
  }

  return obj
}
