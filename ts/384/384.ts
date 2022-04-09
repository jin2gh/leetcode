class Solution {
  original: number[]
  nums: number[]
  constructor(nums: number[]) {
    this.original = [...nums]
    this.nums = nums
  }

  reset(): number[] {
    return this.original.map(v => v)
  }

  shuffle(): number[] {
    const l = this.nums.length
    for (let i = l - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = this.nums[i]
      this.nums[i] = this.nums[j]
      this.nums[j] = tmp
    }
    return this.nums
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */