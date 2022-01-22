function findMagicIndex(nums: number[]): number {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === i) return i
    if (i < nums[i]) {
      i = nums[i]
    } else {
      i += 1
    }
  }
  return -1
};