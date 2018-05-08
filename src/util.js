// @flow

import { map } from 'ramda'

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
  const newObj = obj[oldKey] ? renameKey(oldKey, newKey, obj) : obj

  const fn = e => (e && typeof e === 'object')
    ? deepRenameKey(oldKey, newKey, e)
    : e

  return map(fn, newObj)
}

// mutable
export const deepRenameKey_ = (
  oldKey: string,
  newKey: string,
  obj: Object
): Object => {
  if (obj[oldKey]) renameKey_(oldKey, newKey, obj)

  Object.values(obj).forEach(e => {
    if (e && typeof e === 'object') {
      deepRenameKey_(oldKey, newKey, e)
    }
  })

  return obj
}
