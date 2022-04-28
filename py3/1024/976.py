from typing import List

class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        p1, p2, p3 = 0, nums[0], nums[1]
        for v in nums[2:]:
            p1 = p2
            p2 = p3
            p3 = v
            if p2 + p3 > p1:
                return p1 + p2 + p3
        return 0