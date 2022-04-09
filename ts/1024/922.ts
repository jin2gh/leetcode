import { swap } from '../utils'

function sortArrayByParityII(nums: number[]): number[] {
  const len = nums.length
  for (let l = 0, r = 1; l < len; l += 2) {
    if (nums[l] % 2) {
      while (nums[r] % 2) {
        r += 2
      }
      swap(nums, l, r)
    }
  }
  return nums
};