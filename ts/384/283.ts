// 双指针
function moveZeroes(nums: number[]): void {
  const len = nums.length
  let l = 0, r = 0
  while (r < len) {
    if (nums[r] !== 0) {
      if (nums[l] === 0) {
        let tmp = nums[r]
        nums[r] = nums[l]
        nums[l] = tmp
      }
      l += 1
    }
    r += 1
  }
};