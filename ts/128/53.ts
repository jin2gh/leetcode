// DP
function maxSubArray(nums: number[]): number {
  let pre = 0, max = nums[0]
  for (const v of nums) {
    pre = Math.max(pre + v, v)
    max = Math.max(max, pre)
  }
  return max
};