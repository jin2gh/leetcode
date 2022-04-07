// 原地交换
function firstMissingPositive(nums: number[]): number {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
      let tmp = nums[i]
      nums[i] = nums[tmp - 1]
      nums[tmp - 1] = tmp
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) return i + 1
  }
  return len + 1
};