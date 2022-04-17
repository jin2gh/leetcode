// 摩尔投票法
function majorityElement(nums: number[]): number {
  let n: number = 0, count: number = 0
  for (const v of nums) {
    if (!count) {
      n = v
      count += 1
      continue
    }
    n === v ? count += 1 : count -= 1
  }
  // if (count === 0) return -1 // 不存在的情况
  return n
};