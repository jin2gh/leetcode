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
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum1 = function(nums, target) {
  const hash = {}
  for(let i = 0; i < nums.length; i++) {
    const another = target - nums[i]
    if (hash[another] >= 0) {
      return [hash[another], i]
    }
    hash[nums[i]] = i
  }
}