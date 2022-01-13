function dominantIndex(nums: number[]): number {
  const len: number = nums.length
  if (len === 1) return 0
  let max: number = nums[0], maxIdx: number = 0, second: number = 0
  for (let i = 1; i < len; i++) {
    if (nums[i] > max) {
      second = max
      max = nums[i]
      maxIdx = i
    } else if (nums[i] > second) {
      second = nums[i]
    }
  }

  return max >= (second * 2) ? maxIdx : -1
}