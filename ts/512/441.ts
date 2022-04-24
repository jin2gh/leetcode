function arrangeCoins(n: number): number {
  const max = n * 2
  let l = 0, r = n, m = 0, ans = 0
  while (l <= r) {
    m = l + ((r - l) >> 1)
    if (m * (m + 1) <= max) {
      ans = m
      l = m + 1
    }
    else r = m - 1
  }
  return ans
};