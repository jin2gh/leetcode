class SeqQueue {
  constructor(size) {
    this.front = 0 // 队头指针
    this.rear = 0  // 队尾指针
    this.items = new Array(size) // 数据元素
    this.size = size
  }

  get length() {
    return this.rear - this.front
  }

  enqueue(item) { // 入队
    if (this.rear === this.front) {
      throw Error('the queue is full')
    }
    this.items[this.rear] = item
    this.rear += 1
    return this.length
  }

  dequeue() { // 出队
    if (this.rear === this.front) return 0
    this.items[this.front] = null
    this.front += 1
    return this.length
  }
}


class CircylarQueue { // 循环队列
  constructor(size) {
    this.front = 0 // 队头指针
    this.rear = 0  // 队尾指针
    this.items = new Array(size + 1) // 数据元素
    this.size = size + 1
  }

  get length() {
    return (this.rear - this.front + this.size) % this.size
  }

  enqueue(item) { // 入队
    const next = (this.rear + 1) % this.size
    if (next === this.front) {
      throw Error('the queue is full')
    }
    this.items[this.rear] = item
    this.rear = next
    return this.length
  }

  dequeue() { // 出队
    if (this.rear === this.front) return 0
    this.items[this.front] = null
    this.front = (this.front + 1) % this.size
    return this.length
  }

  getHead() {
    return this.items[this.front]
  }
}
