function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0, cnt = 0
  for (const v of nums) {
    if (v === 1) cnt += 1
    else cnt = 0
    max = Math.max(max, cnt)
  }
  return max
};