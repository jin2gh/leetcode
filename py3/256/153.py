from typing import List

class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        if nums[l] < nums[r]:
            return nums[l]
        while l < r:
            m = l + (r - l) // 2
            if nums[m] > nums[m + 1]:
                return nums[m + 1]
            if nums[m] > nums[r]:
                l = m + 1
            else:
                r = m
        return nums[l]