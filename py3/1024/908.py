from typing import List

class Solution:
    def smallestRangeI(self, nums: List[int], k: int) -> int:
        max_n, min_n = max(nums), min(nums)
        diff = max_n - min_n - k * 2
        if diff > 0:
            return diff
        return 0