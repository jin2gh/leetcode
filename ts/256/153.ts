export function findMin(nums: number[]): number {
  let l = 0, r = nums.length - 1
  if (nums[l] < nums[r]) return nums[l]
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < nums[r]) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return nums[l]
};