class NumArray {
  sums: number[]
  constructor(nums: number[]) {
    let sum = 0
    this.sums = [sum]
    for (const n of nums) {
      this.sums.push(sum += n)
    }
  }

  sumRange(left: number, right: number): number {
    return this.sums[right + 1] - this.sums[left]
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */