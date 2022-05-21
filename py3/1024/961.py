from typing import List

class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        ht = {}
        for v in nums:
            if v in ht:
                return v
            ht[v] = 1