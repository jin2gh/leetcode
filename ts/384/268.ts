function missingNumber(nums: number[]): number {
  const n = nums.length, total = n * (n + 1) / 2
  let sum = 0
  for (const v of nums) {
    sum += v
  }
  return total - sum
};