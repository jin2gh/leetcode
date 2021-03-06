/**
 * 枚举法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let another = target - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if(nums[j] === another) {
        return [i, j]
      }
    }
  }
}


/**
 * 哈希表
 */
function twoSum1(nums: number[], target: number): number[] {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const another:number = target - nums[i]
    if (map[another] >= 0) {
      return [map[another], i]
    }
    map[nums[i]] = i
  }
  return []
}