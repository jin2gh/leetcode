// 双指针
function sortArrayByParity(nums: number[]): number[] {
  let l = 0, r= nums.length - 1
  while (l < r) {
    if (nums[l] % 2 > nums[r] % 2) {
      let tmp = nums[r]
      nums[r] = nums[l]
      nums[l] = tmp
    }
    if (nums[l] % 2 === 0) l += 1
    if (nums[r] % 2) r -= 1
  }

  return nums
};