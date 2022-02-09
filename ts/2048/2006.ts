function countKDifference(nums: number[], k: number): number {
  const ht = new Array(101).fill(0)
  let ans = 0
  for (const v of nums) {
    ans += (ht[v - k] ?? 0)
    ans += (ht[v + k] ?? 0)
    ht[v] += 1
  }
  // or
  // for (const v of nums) {
  //   ht[v] += 1
  // }
  // for (let i = 1; i < ht.length; i++) {
  //   if (i - k >= 0) ans += (ht[i] * ht[i - k])
  // }

  return ans
};