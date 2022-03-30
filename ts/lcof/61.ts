function isStraight(nums: number[]): boolean {
  const n = 14
  const cnts: number[] = new Array(n).fill(0)
  for (const v of nums) {
    cnts[v] += 1
  }
  let min = null, max = 0
  for (let i = 1; i < n; i++) {
    if (cnts[i] > 1) return false
    if (cnts[i] > 0) {
      if (!min) min = i
      max = i
    }
  }
  return max - min < 5
};