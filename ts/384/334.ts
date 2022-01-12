// 贪心
function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) return false
  let first: number = nums[0], second: number = Infinity
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > second)  return true
    if (nums[i] > first) {
      second = nums[i]
    } else {
      first = nums[i]
    }
  }
  return false
}