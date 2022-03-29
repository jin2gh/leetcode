class MedianFinder {
  nums = []
  constructor() {}

  findIndex(num: number): number {
    const len = this.nums.length
    if (len === 0) return 0
    if (num >= this.nums[len - 1]) return len
    if (num < this.nums[0]) return 0
    let l = 0, r = len - 1
    while (l < r) {
      const m = l + ((r - l) >> 1)
      if (this.nums[m] <= num) l = m + 1
      else r = m
    }
    return l
  }

  addNum(num: number): void {
    const len = this.nums.length
    const idx = this.findIndex(num)
    for (let i = len; i > idx; i--) {
      this.nums[i] = this.nums[i - 1]
    }
    this.nums[idx] = num
  }

  findMedian(): number {
    const len = this.nums.length
    const mid = len >> 1
    return len % 2 ? this.nums[mid] : (this.nums[mid] + this.nums[mid - 1]) / 2
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */