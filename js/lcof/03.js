/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i]
    }
    map[nums[i]] = 1
  }
  return null
}