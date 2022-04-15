function runningSum(nums: number[]): number[] {
  const n = nums.length
  const ans: number[] = new Array(n)
  ans[0] = nums[0]
  for (let i = 1; i < n; ++i) {
    ans[i] = ans[i - 1] + nums[i]
  }
  return ans
};