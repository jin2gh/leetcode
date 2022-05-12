from typing import List

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        n = len(nums)
        l, r, ans = 1, n - 1, -1
        while l <= r:
            m = l + (r - l) // 2
            cnt = 0
            for v in nums:
                cnt += 1 if v <= m else 0

            if cnt <= m:
                l = m + 1
            else:
                r = m - 1
                ans = m
        return ans