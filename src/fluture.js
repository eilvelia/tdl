// @flow

export const tryP = (() => {
  try {
    const fluture = require('fluture')
    return fluture.tryP
  } catch (e) {
    return () => {
      throw new Error('Fluture not found')
    }
  }
})()
