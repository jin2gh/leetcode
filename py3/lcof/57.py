from typing import List

class Solution:
    # 57-I
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums) - 1
        while l < r:
            sum0 = nums[l] + nums[r]
            if sum0 == target: return [nums[l], nums[r]]
            if sum0 > target: r -= 1
            else: l += 1

        return [-1, -1]