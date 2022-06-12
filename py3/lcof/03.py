from typing import List

class Solution:
    def findRepeatNumber(self, nums: List[int]) -> int:
        dic = {}
        for v in nums:
            if v in dic:
                return v
            dic[v] = 1
        return -1