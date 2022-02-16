class CQueue {
  inStack = []
  outStack = []
  constructor() {}

  appendTail(value: number): void {
    this.inStack.push(value)
  }

  deleteHead(): number {
    if (!this.outStack.length) {
      this.move()
    }

    return this.outStack.pop() || -1
  }

  move(): void {
    while(this.inStack.length) {
      this.outStack.push(this.inStack.pop())
    }
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */