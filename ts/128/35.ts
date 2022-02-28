function searchInsert(nums: number[], target: number): number {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    const m = l + ((r - l) >> 1)
    if (nums[m] === target) return m
    if (nums[m] < target) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return l
};