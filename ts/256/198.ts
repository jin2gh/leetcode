// DP
function rob(nums: number[]): number {
  const l = nums.length,
        dp: number[] = new Array(l).fill(0)
  dp[0] = nums[0]
  if (l > 1) {
    dp[1] = Math.max(dp[0], nums[1])
  }
  for (let i = 2; i < l; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return dp[l - 1]
};

// DP + 状态压缩
function rob1(nums: number[]): number {
  const l = nums.length
  if (l < 2) return nums[0] || 0
  let first = nums[0], second = Math.max(first, nums[1])
  for (let i = 2; i < l; i++) {
    const tmp = second
    second = Math.max(first + nums[i], second)
    first = tmp
  }
  return second
};