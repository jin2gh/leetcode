from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        l, r, n = 0, 0, len(nums)
        while r < n:
            if nums[r] != 0:
                if nums[l] == 0:
                    tmp = nums[r]
                    nums[r] = nums[l]
                    nums[l] = tmp
                l += 1
            r += 1