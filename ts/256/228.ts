// 双指针
function summaryRanges(nums: number[]): string[] {
  const ranges: string[] = []
  for (let l = 0, r = 0, len = nums.length; r < len; ++r) {
    if (r + 1 < len && nums[r + 1] === nums[r] + 1) continue
    if (l === r) ranges.push(`${nums[l]}`)
    else ranges.push(`${nums[l]}->${nums[r]}`)
    l = r + 1
  }
  return ranges
};