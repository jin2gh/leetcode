from typing import List

class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        def bs(nums, target):
            l, r = 0, len(nums) - 1
            while l < r:
                m = l + (r - l) // 2
                if nums[m] <= target:
                    l = m + 1
                else:
                    r = m
            return l

        prefixs = [0]
        for v in nums:
            prefixs.append(prefixs[-1] + v)
        n = len(prefixs)
        ans = n
        for i, v in enumerate(prefixs):
            idx = bs(prefixs, v - target)
            if idx > 0 and idx <= i:
                ans = min(ans, i - idx + 1)
        return ans if ans < n else 0
