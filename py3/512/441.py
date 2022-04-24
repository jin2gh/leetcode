class Solution:
  def arrangeCoins(self, n: int) -> int:
    l, m, r = 0, 0, n
    while l <= r:
      m = l + (r - l) // 2
      if m * (m + 1) / 2 <= n:
        l = m + 1
      else:
        r = m - 1
    return l - 1