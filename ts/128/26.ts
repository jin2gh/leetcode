function removeDuplicates(nums: number[]): number {
  const len = nums.length
  let l = 0, r = 1
  while (r < len) {
    if (nums[l] !== nums[r]) {
      nums[l + 1] = nums[r]
      l += 1
    }
    r += 1
  }
  return l + 1
};