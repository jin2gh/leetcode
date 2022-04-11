function specialArray(nums: number[]): number {
  const len = nums.length
  const cnts = new Array(len + 1).fill(0)
  for (const v of nums) {
    if (v >= len) cnts[len] += 1
    else cnts[v] += 1
  }
  for (let i = len; i >= 0; --i) {
    if (i < len)  cnts[i] += cnts[i + 1]
    if (cnts[i] === i) return i
  }
  return -1
};