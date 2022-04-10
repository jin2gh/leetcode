class MyCircularQueue {
  queue: number[]
  size: number
  front: number
  rear: number
  constructor(k: number) {
    this.queue = new Array(k + 1)
    this.size = k + 1
    this.front = 0
    this.rear = 0
  }

  enQueue(value: number): boolean {
    const next = (this.rear + 1) % this.size
    if (next === this.front) return false
    this.queue[this.rear] = value
    this.rear = next
    return true
  }

  deQueue(): boolean {
    if (this.rear === this.front) return false
    this.queue[this.front] = null
    this.front = (this.front + 1) % this.size
    return true
  }

  Front(): number {
    return this.queue[this.front] ?? -1
  }

  Rear(): number {
    let last = this.rear ? this.rear : this.queue.length
    return this.queue[last - 1] ?? -1
  }

  isEmpty(): boolean {
    return this.front === this.rear
  }

  isFull(): boolean {
    return (this.rear + 1) % this.size === this.front
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */