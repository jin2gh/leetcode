function subarraySum(nums: number[], k: number): number {
  const ht = {
    0: 1,
  }
  let count = 0, sum = 0
  for (const v of nums) {
    sum += v
    if (ht[sum - k] && ht[sum - k] >= 0) {
      count += ht[sum - k]
    }
    if (ht[sum]) {
      ht[sum] += 1
    } else {
      ht[sum] = 1
    }
  }
  return count
};