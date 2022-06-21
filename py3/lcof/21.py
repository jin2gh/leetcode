from typing import List

class Solution:
    def exchange(self, nums: List[int]) -> List[int]:
        l, r = 0, len(nums) - 1
        while l < r:
            if nums[l] % 2:
                l += 1
                continue
            if nums[r] % 2 == 0:
                r -= 1
                continue
            t = nums[r]
            nums[r] = nums[l]
            nums[l] = t

        return nums