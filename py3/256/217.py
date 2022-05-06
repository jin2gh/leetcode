from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        ht = {}
        for v in nums:
            if v in ht:
                return True
            ht[v] = 1
        return False