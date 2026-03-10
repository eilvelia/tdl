import { test, expect } from 'vitest'
// @ts-expect-error
import { Queue } from '../dist/queue.js'

test('empty queue', () => {
  const q = new Queue()
  expect(q.isEmpty()).toBe(true)
  expect(q.shift()).toBe(null)
})

test('push and shift', () => {
  const q = new Queue()
  q.push('a')
  q.push('b')
  expect(q.isEmpty()).toBe(false)
  expect(q.shift()).toBe('a')
  expect(q.shift()).toBe('b')
  expect(q.isEmpty()).toBe(true)
  expect(q.shift()).toBe(null)
})

test('overflow into a second buffer', () => {
  const q = new Queue()
  const count = 2048 + 100
  for (let i = 0; i < count; i++)
    q.push(i)
  for (let i = 0; i < count; i++)
    expect(q.shift()).toBe(i)
  expect(q.isEmpty()).toBe(true)
  expect(q.shift()).toBe(null)
})
