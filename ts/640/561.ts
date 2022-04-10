function arrayPairSum(nums: number[]): number {
  const len = nums.length
  let n = 0
  nums.sort((a, b) => a - b)
  for(let i = 0; i < len; i += 2) {
    n += nums[i]
  }
  return n
};