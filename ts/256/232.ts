class MyQueue {
  inStack: number[] = []
  outStack: number[] = []
  constructor() {}

  push(x: number): void {
    this.inStack.push(x)
  }

  pop(): number {
    if (!this.outStack.length) {
      this.move()
    }
    return this.outStack.pop() as number
  }

  peek(): number {
    if (!this.outStack.length) {
      this.move()
    }
    return this.outStack[this.outStack.length - 1]
  }

  empty(): boolean {
    return !this.inStack.length && !this.outStack.length
  }

  move(): void {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop() as number)
    }
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */