class TripleInOne {
  protected stack: number[] | null[]
  protected size: number
  protected lens: [number, number, number]
  constructor(stackSize: number) {
    this.stack = new Array(stackSize * 3)
    this.size = stackSize
    this.lens = [0, 0, 0]
  }

  getLastIdx(stackNum: number): number {
    return this.size * stackNum + this.lens[stackNum] - 1
  }

  push(stackNum: number, value: number): void {
    if (this.lens[stackNum] < this.size) {
      const idx = this.getLastIdx(stackNum) + 1
      this.stack[idx] = value
      this.lens[stackNum] += 1
    }
  }

  pop(stackNum: number): number {
    if (this.lens[stackNum]) {
      const idx = this.getLastIdx(stackNum)
      const tmp = this.stack[idx]
      this.stack[idx] = null
      this.lens[stackNum] -= 1
      return tmp as number
    }
    return -1
  }

  peek(stackNum: number): number {
    if (this.lens[stackNum]) {
      const idx = this.getLastIdx(stackNum)
      return this.stack[idx] as number
    }
    return -1
  }

  isEmpty(stackNum: number): boolean {
    return this.lens[stackNum] === 0
  }
}