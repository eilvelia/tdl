function isObject (item: unknown): item is object {
  return item != null && typeof item === 'object' && !Array.isArray(item)
}

export function mergeDeepRight <
  A extends { [key: string]: any },
  B extends { [key: string]: any }
>(obj1: A, obj2: B): B & A {
  if (isObject(obj1) && isObject(obj2)) {
    const result: any = {}
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
  return obj2 as any
}

/** Renames `oldKey` to `newKey` deeply. The objects should not contain functions. */
export function deepRenameKey (
  oldKey: string,
  newKey: string,
  v: { readonly [key: string]: any }
): { [key: string]: any } {
  if (Array.isArray(v))
    return v.map(x => deepRenameKey(oldKey, newKey, x))
  if (typeof v === 'object' && v !== null) {
    const newObj: any = {}
    for (const k in v)
      newObj[k === oldKey ? newKey : k] = deepRenameKey(oldKey, newKey, v[k])
    return newObj
  }
  return v
}
