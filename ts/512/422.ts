function findDuplicates(nums: number[]): number[] {
  const res = []
  for (const v of nums) {
    const idx = Math.abs(v) - 1
    if (nums[idx] < 0) res.push(idx + 1)
    nums[idx] = -nums[idx]
  }
  return res
};