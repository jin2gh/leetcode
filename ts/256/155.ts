class MinStack {
  protected stack: number[] = []
  protected mins: number[] = [Infinity]

  constructor() {}

  push(val: number): void {
    this.stack.push(val)
    this.mins.push(Math.min(val, this.mins[this.mins.length - 1]))
  }

  pop(): void {
    this.stack.pop()
    this.mins.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.mins[this.mins.length - 1]
  }
}