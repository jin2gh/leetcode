function isMonotonic(nums: number[]): boolean {
  const ri = nums.length - 1
  if (ri === 0) return true
  let up = nums[0] < nums[ri]
  for (let i = 0; i < ri; i++) {
    if (up && nums[i] > nums[i + 1]) return false
    if (!up && nums[i] < nums[i + 1]) return false
  }
  return true
};