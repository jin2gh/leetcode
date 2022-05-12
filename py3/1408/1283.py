from typing import List
from math import ceil

class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        ans = 0
        l, r = 1, max(nums)
        while l <= r:
            m = l + (r - l) // 2
            sums = sum([ceil(v / m) for v in nums])
            if sums <= threshold:
                ans = m
                r = m - 1
            else:
                l = m + 1

        return ans
