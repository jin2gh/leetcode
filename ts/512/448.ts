function findDisappearedNumbers(nums: number[]): number[] {
  const len = nums.length, res: number[] = []
  for (let i = 0; i < len; ++i) {
    const n = Math.abs(nums[i])
    if (nums[n - 1] > 0) nums[n - 1] *= -1
  }
  for (let i = 0; i < len; ++i) {
    if (nums[i] > 0) res.push(i + 1)
  }
  return res
};