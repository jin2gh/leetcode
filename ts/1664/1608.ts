// 计数 + 后缀和
function specialArray(nums: number[]): number {
  const len = nums.length
  const cnts = new Array(len + 1).fill(0)
  for (const v of nums) {
    if (v >= len) cnts[len] += 1
    else cnts[v] += 1
  }
  for (let i = len; i >= 0; --i) {
    if (i < len) cnts[i] += cnts[i + 1]
    if (cnts[i] === i) return i
  }
  return -1
};


// 二分查找
function specialArray1(nums: number[]): number {
  let l = 1,
      r = nums.length,
      m = 0,
      cnt = 0
  while (l <= r) {
    m = l + ((r - l) >> 1)
    cnt = nums.reduce((cnt, val) => {
      if (val >= m) cnt += 1
      return cnt
    }, 0)
    if (m === cnt) return m
    if (m > cnt) r = m - 1
    else l = m + 1
  }
  return -1
};