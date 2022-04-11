class OrderedStream {
  stream: string[]
  ptr: number
  constructor(n: number) {
    this.stream = new Array(n + 1)
    this.ptr = 1
  }

  insert(idKey: number, value: string): string[] {
    this.stream[idKey] = value
    const ordereds: string[] = []
    while(this.stream[this.ptr]) {
      ordereds.push(this.stream[this.ptr])
      this.ptr += 1
    }
    return ordereds
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */