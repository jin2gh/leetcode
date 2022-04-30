from typing import List

class Solution:
    def arraySign(self, nums: List[int]) -> int:
        flag = 1
        for v in nums:
            if v == 0:
                return 0
            if v < 0:
                flag = -flag
        return flag