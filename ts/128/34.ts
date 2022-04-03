function searchRange(nums: number[], target: number): number[] {
  const l = searchIndex(nums, target, true)
  if (nums[l] !== target) return [-1, -1]
  const r = searchIndex(nums, target, false)
  return [l, r]
};

function searchIndex (nums: number[], target: number, isLeft: boolean): number  {
  let l = 0, r = nums.length - 1, m = 0
  while (l <= r) {
    m = l + ((r - l) >> 1)
    if (nums[m] > target) r = m - 1
    else if (nums[m] < target) l = m + 1
    else {
      if (isLeft) r = m - 1
      else l = m + 1
    }
  }
  return isLeft ? l : r
}