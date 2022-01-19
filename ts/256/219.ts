// 哈希表
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const ht = {}, len = nums.length
  for (let i = 0; i < len; i++) {
    if (ht[nums[i]] >= 0) {
      if (i - ht[nums[i]] <= k) return true
    }
    ht[nums[i]] = i
  }
  return false
}