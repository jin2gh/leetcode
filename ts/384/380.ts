class RandomizedSet {
  nums: number[] = []
  map = new Map<number, number>()
  constructor() {}

  insert(val: number): boolean {
    if (this.map.has(val)) return false
    this.nums.push(val)
    this.map.set(val, this.nums.length - 1)
    return true
  }

  remove(val: number): boolean {
    if (this.map.has(val)) {
      const idx = this.map.get(val)
      const last = this.nums.pop()
      if (this.nums.length > idx) {
        this.nums[idx] = last
        this.map.set(last, idx)
      }

      this.map.delete(val)

      return true
    }
    return false
  }

  getRandom(): number {
    const idx = Math.floor(Math.random() * this.nums.length)
    return this.nums[idx]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */