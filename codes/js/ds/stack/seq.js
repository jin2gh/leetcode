class Stack {
  constructor(size) {
    this.items = new Array(size)
    this.size = size
    this.top = -1
  }

  get length() {
    return this.top + 1
  }

  push(data) {
    if (this.top === (this.size - 1)) {
      throw Error('the stack is full')
    }
    this.top += 1
    this.items[this.top] = data

    return this.length
  }

  pop() {
    if (this.top === -1) {
      throw Error('this stack is empty')
    }
    const dataItem = this.items[this.top]
    this.items[this.top] = null
    this.top -= 1
    return dataItem
  }
}
