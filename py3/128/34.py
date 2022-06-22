from typing import List

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def searchIndex(nums, target, isLast):
            l, r = 0, len(nums) - 1
            while l <= r:
                m = l + (r - l) // 2
                if nums[m] == target:
                    if isLast:
                        l = m + 1
                    else:
                        r = m - 1
                elif nums[m] > target:
                    r = m - 1
                else:
                    l = m + 1
            if isLast:
                return r
            return l

        first = searchIndex(nums, target, False)
        last = searchIndex(nums, target, True)
        if first <= last and nums[first] == target:
            return [first, last]
        return [-1, -1]
