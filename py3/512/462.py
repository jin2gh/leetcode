from typing import List

class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        nums.sort()
        m = len(nums) // 2
        return sum(abs(v - nums[m]) for v in nums)