function missingNumber(nums: number[]): number {
  let l = 0, r = nums.length - 1, m = 0
  while (l <= r) {
    m = l + ((r - l) >> 1)
    if (m === nums[m]) l = m + 1
    else r = m - 1
  }
  return l
};