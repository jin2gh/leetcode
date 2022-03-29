/**
 * 57-I. 双指针
 */
function twoSum(nums: number[], target: number): number[] {
  let l = 0, r = nums.length - 1
  while (l < r) {
    let n = target - nums[l]
    if (nums[r] === n) return [nums[l], nums[r]]
    if (nums[r] < n) l += 1
    else r -= 1
  }
  return []
};

/**
 * 57-II. 等差数列求和公式
 */
function findContinuousSequence(target: number): number[][] {
  const ans: number[][] = []
  let max = target >> 1
  target *= 2

  for (let i = 1; i <= max; i++) {
    const b = i * 2 - 1
    const n = (Math.sqrt(b * b + 4 * target) - b) / 2
    if (n % 1 === 0) {
      const item = []
      for (let j = 0; j < n; j++) {
        item.push(i + j)
      }
      ans.push(item)
    }
  }

  return ans
};