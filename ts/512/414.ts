function thirdMax(nums: number[]): number {
  const len = nums.length
  let x1 = nums[0], x2, x3
  for (let i = 1; i < len; ++i) {
    if (nums[i] > x1) {
      x3 = x2
      x2 = x1
      x1 = nums[i]
    } else if (nums[i] < x1) {
      if (x2 !== undefined) {
        if (nums[i] > x2) {
          x3 = x2
          x2 = nums[i]
        } else if (nums[i] < x2) {
          if (x3 !== undefined) x3 = Math.max(x3, nums[i])
          else x3 = nums[i]
        }
      } else {
        x2 = nums[i]
      }
    }
  }
  return x3 === undefined ? x1 : x3
};