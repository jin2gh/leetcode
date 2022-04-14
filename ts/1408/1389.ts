function createTargetArray(nums: number[], index: number[]): number[] {
  const n = nums.length
  const ans: number[] = []
  for (let i = 0; i < n; ++i) {
    const len = ans.length, idx = index[i]
    if (idx === len) {
      ans.push(nums[i])
      continue
    }
    for (let j = len; j > idx; --j) {
      ans[j] = ans[j - 1]
    }
    ans[idx] = nums[i]
  }
  return ans
};