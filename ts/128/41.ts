// 原地交换
function firstMissingPositive(nums: number[]): number {
  const len = nums.length
  let i = 0
  while (i < len) {
    if (nums[i] > 0 && nums[nums[i] - 1] !== nums[i]) {
      let tmp = nums[i]
      nums[i] = nums[tmp - 1]
      nums[tmp - 1] = tmp
    } else {
      i += 1
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] - 1 !== i) return i + 1
  }
  return len + 1
};