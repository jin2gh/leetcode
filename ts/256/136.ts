function singleNumber(nums: number[]): number {
  let n = nums[0]
  for (let i = 1; i < nums.length; i++) {
    n ^= nums[i]
  }
  return n
};