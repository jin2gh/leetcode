function smallerNumbersThanCurrent(nums: number[]): number[] {
  const max = 101
  const buckets = new Array(max).fill(0)
  const ans: number[] = []
  for (const v of nums) {
    buckets[v] += 1
  }
  for (let i = 1; i < max; ++i) {
    buckets[i] += buckets[i - 1]
  }

  for (const v of nums) {
    ans.push(v > 0 ? buckets[v - 1] : 0)
  }

  return ans
};