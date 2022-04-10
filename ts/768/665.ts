function checkPossibility(nums: number[]): boolean {
  const ri = nums.length - 1
  let cnt = 0
  for (let i = 0; i < ri; ++i) {
    const cur = nums[i], next = nums[i + 1]
    if (cur > next) {
      cnt += 1
      if (cnt > 1) return false
      if (i > 0 && next < nums[i - 1]) {
        nums[i + 1] = cur
      }
    }
  }
  return true
};