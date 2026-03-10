import { test, expect } from 'vitest'
// @ts-expect-error
import { Version } from '../dist/version.js'

test('constructor parses major.minor.patch', () => {
  const v = new Version('1.8.6')
  expect(v.toString()).toBe('1.8.6')
})

test('constructor defaults patch to 0', () => {
  const v = new Version('1.8')
  expect(v.toString()).toBe('1.8.0')
})

test('constructor throws on invalid version', () => {
  expect(() => new Version('')).toThrow('Invalid TDLib version')
  expect(() => new Version('abc')).toThrow('Invalid TDLib version')
  expect(() => new Version('1')).toThrow('Invalid TDLib version')
})

test('eq', () => {
  expect(new Version('1.8.6').eq(new Version('1.8.6'))).toBe(true)
  expect(new Version('1.8.6').eq(new Version('1.8.7'))).toBe(false)
  expect(new Version('1.8.6').eq(new Version('1.9.6'))).toBe(false)
  expect(new Version('1.8.6').eq(new Version('2.8.6'))).toBe(false)
})

test('gt', () => {
  expect(new Version('2.0.0').gt(new Version('1.0.0'))).toBe(true)
  expect(new Version('1.9.0').gt(new Version('1.8.0'))).toBe(true)
  expect(new Version('1.8.7').gt(new Version('1.8.6'))).toBe(true)
  expect(new Version('1.8.6').gt(new Version('1.8.6'))).toBe(false)
  expect(new Version('1.8.6').gt(new Version('1.8.7'))).toBe(false)
  expect(new Version('1.8.6').gt(new Version('1.9.0'))).toBe(false)
  expect(new Version('1.8.6').gt(new Version('2.0.0'))).toBe(false)
})

test('lt', () => {
  expect(new Version('1.0.0').lt(new Version('2.0.0'))).toBe(true)
  expect(new Version('1.8.0').lt(new Version('1.9.0'))).toBe(true)
  expect(new Version('1.8.6').lt(new Version('1.8.7'))).toBe(true)
  expect(new Version('1.8.6').lt(new Version('1.8.6'))).toBe(false)
  expect(new Version('1.8.7').lt(new Version('1.8.6'))).toBe(false)
  expect(new Version('1.9.0').lt(new Version('1.8.6'))).toBe(false)
  expect(new Version('2.0.0').lt(new Version('1.8.6'))).toBe(false)
})

test('gte', () => {
  expect(new Version('2.0.0').gte(new Version('1.0.0'))).toBe(true)
  expect(new Version('1.9.0').gte(new Version('1.8.0'))).toBe(true)
  expect(new Version('1.8.7').gte(new Version('1.8.6'))).toBe(true)
  expect(new Version('1.8.6').gte(new Version('1.8.6'))).toBe(true)
  expect(new Version('1.8.6').gte(new Version('1.8.7'))).toBe(false)
  expect(new Version('1.8.6').gte(new Version('1.9.0'))).toBe(false)
  expect(new Version('1.8.6').gte(new Version('2.0.0'))).toBe(false)
})

test('lte', () => {
  expect(new Version('1.0.0').lte(new Version('2.0.0'))).toBe(true)
  expect(new Version('1.8.0').lte(new Version('1.9.0'))).toBe(true)
  expect(new Version('1.8.6').lte(new Version('1.8.7'))).toBe(true)
  expect(new Version('1.8.6').lte(new Version('1.8.6'))).toBe(true)
  expect(new Version('1.8.7').lte(new Version('1.8.6'))).toBe(false)
  expect(new Version('1.9.0').lte(new Version('1.8.6'))).toBe(false)
  expect(new Version('2.0.0').lte(new Version('1.8.6'))).toBe(false)
})
