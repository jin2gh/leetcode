function exchange(nums: number[]): number[] {
  let l = 0, r = nums.length - 1, tmp
  while (l < r) {
    while (nums[l] % 2 === 1) {
      l += 1
    }
    while (nums[r] % 2 === 0) {
      r -= 1
    }
    if (l < r) {
      tmp = nums[r]
      nums[r--] = nums[l]
      nums[l++] = tmp
    }
  }
  return nums
};