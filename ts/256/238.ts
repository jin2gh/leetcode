function productExceptSelf(nums: number[]): number[] {
  const ans: number[] = [1], len = nums.length
  let r = 1
  for (let i = 1; i < len; i++) {
    ans.push(ans[i - 1] * nums[i - 1])
  }

  for (let i = len - 2; i >= 0; i--) {
    r *= nums[i + 1]
    ans[i] *= r
  }

  return ans
};