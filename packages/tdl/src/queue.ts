// The queue implementation is taken from Node.js
// https://github.com/nodejs/node/blob/bae03c4e30f927676203f61ff5a34fe0a0c0bbc9/lib/internal/fixed_queue.js
// The authors are Node.js contributors, MIT license.

const kSize = 2048
const kMask = kSize - 1

class FixedCircularBuffer<T> {
  private bottom: number = 0
  private top: number = 0
  private list: (T | undefined)[] = new Array(kSize)
  public next: FixedCircularBuffer<T> | null = null

  constructor() {}

  isEmpty() {
    return this.top === this.bottom
  }

  isFull() {
    return ((this.top + 1) & kMask) === this.bottom
  }

  push(data: T) {
    this.list[this.top] = data
    this.top = (this.top + 1) & kMask
  }

  shift(): T | null {
    const nextItem = this.list[this.bottom]
    if (nextItem === undefined)
      return null
    this.list[this.bottom] = undefined
    this.bottom = (this.bottom + 1) & kMask
    return nextItem
  }
}

export class Queue<T> {
  private head: FixedCircularBuffer<T>
  private tail: FixedCircularBuffer<T>

  constructor() {
    this.head = this.tail = new FixedCircularBuffer()
  }

  isEmpty(): boolean {
    return this.head.isEmpty()
  }

  push(data: T) {
    if (this.head.isFull()) {
      // Head is full: Creates a new queue, sets the old queue's `.next` to it,
      // and sets it as the new main queue.
      this.head = this.head.next = new FixedCircularBuffer()
    }
    this.head.push(data)
  }

  shift(): T | null {
    const tail = this.tail
    const next = tail.shift()
    if (tail.isEmpty() && tail.next !== null) {
      // If there is another queue, it forms the new tail.
      this.tail = tail.next
      tail.next = null
    }
    return next
  }
}
