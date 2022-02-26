function maximumDifference(nums: number[]): number {
  const l = nums.length
  let ans = -1, min = nums[0]
  for (let i = 1; i < l; i++) {
    if (nums[i] > min) {
      ans = Math.max(ans, nums[i] - min)
    } else {
      min = nums[i]
    }
  }
  return ans
};