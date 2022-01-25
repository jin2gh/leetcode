// 哈希表
function containsDuplicate(nums: number[]): boolean {
  const ht = {}
  for (const v of nums) {
    if (ht[v]) return true
    ht[v] = 1
  }
  return false
};