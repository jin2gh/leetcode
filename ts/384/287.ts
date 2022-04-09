// 二分查找
function findDuplicate(nums: number[]): number {
  const n = nums.length
  let l = 1, r = n - 1, ans = -1
  while (l <= r) {
    let m = l + ((r - l) >> 1)
    let cnt = 0
    for (let i = 0; i < n; ++i) {
      cnt += nums[i] <= m ? 1 : 0
    }
    if (cnt <= m) l = m + 1
    else {
      r = m - 1
      ans = m
    }
  }
  return ans
};