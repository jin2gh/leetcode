function mySqrt(x: number): number {
  let l = 0, r = x, m = 0, ans = 0
  while (l <= r) {
    m = l + ((r - l) >> 1)
    if (m * m <= x) {
      ans = m
      l = m + 1
    }
    else r = m - 1
  }
  return ans
};