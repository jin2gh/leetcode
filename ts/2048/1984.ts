function minimumDifference(nums: number[], k: number): number {
  const len = nums.length
  nums.sort((a, b) => a - b)
  let min = +Infinity
  const n = k - 1
  for (let i = n; i < len; i++) {
    min = Math.min(nums[i] - nums[i - n], min)
  }
  return min
};