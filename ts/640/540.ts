// 二分查找、位运算
function singleNonDuplicate(nums: number[]): number {
  let low = 0, high = nums.length - 1
  while (low < high) {
    const mid = ((high - low) >> 1) + low
    if (nums[mid] === nums[mid ^ 1]) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return nums[high]
};