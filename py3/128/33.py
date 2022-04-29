from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        ri = len(nums) - 1
        l, r = 0, ri
        while l <= r:
            m = l + (r - l) // 2
            if nums[m] == target:
                return m
            if nums[0] <= nums[m]:
                if nums[m] < target or nums[0] > target:
                    l = m + 1
                else:
                    r = m - 1
            else:
                if nums[m] > target or nums[ri] < target:
                    r = m - 1
                else:
                    l = m + 1

        return -1