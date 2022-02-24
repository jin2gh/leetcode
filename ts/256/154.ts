// 遍历
function findMin(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return nums[i]
  }
  return nums[0]
};

// 二分查找
function findMin1(nums: number[]): number {
  let l = 0, r = nums.length - 1
  if (nums[l] < nums[r]) return nums[l]
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < nums[r]) {
      r = mid
    } else if (nums[mid] > nums[r]) {
      l = mid + 1
    } else {
      r -= 1
    }
  }
  return nums[l]
};