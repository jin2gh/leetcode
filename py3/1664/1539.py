class Solution:
  def findKthPositive(self, arr: List[int], k: int) -> int:
    if arr[0] > k:
      return k
    l, r, m = 0, len(arr) - 1, 0
    cnt = 0
    while l <= r:
      m = l + (r - l) // 2
      if arr[m] - m - 1 >= k:
        r = m - 1
      else:
        l = m + 1
    return k + l