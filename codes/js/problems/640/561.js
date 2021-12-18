/**
 * 排序
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
  let n = 0
  nums.sort((a, b) => a - b)
  for(let i = 0; i < nums.length; i += 2) {
    n += nums[i]
  }
  return n
}