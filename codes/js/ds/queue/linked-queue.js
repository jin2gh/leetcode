const { SinglyLinkedList } = require('../linked-list/singly-linked-list')

// TODO
class LinkedQueue {
  constructor() {
    this.front = 0
    this.rear = 0
    this.items = new SinglyLinkedList()
  }

  get length() {
    return this.items.length
  }

  enqueue(item) { // 入队
    this.items.insert(this.length + 1, item)
    this.rear = this.length
  }

  dequeue() { // 出队
    this.items.delete(1)
  }
}
