function pivotIndex(nums: number[]): number {
  const len = nums.length
  let ls = 0, rs = 0
  for (let i = 0; i < len; ++i) {
    rs += nums[i]
  }
  for (let i = 0; i < len; ++i) {
    ls += nums[i - 1] || 0
    rs -= nums[i]
    if (ls === rs) return i
  }
  return -1
};