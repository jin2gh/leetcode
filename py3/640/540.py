from typing import List

class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            m = l + (r - l) // 2
            m -= m & 1
            if nums[m] == nums[m + 1]:
                l = m + 2
            else:
                r = m
        return nums[r]