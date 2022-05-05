from typing import List

class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        l, product = 0, 1
        ans = 0
        for r, v in enumerate(nums):
            product *= v
            while l <= r and product >= k:
                product //= nums[l]
                l += 1

            ans += r - l + 1
        return ans