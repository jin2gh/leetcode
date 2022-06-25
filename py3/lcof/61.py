from typing import List

class Solution:
    def isStraight(self, nums: List[int]) -> bool:
        n = 14
        cnts = [0] * n
        for v in nums:
            cnts[v] += 1

        st, ed = 0, 0
        for i in range(1, n):
            if cnts[i] > 1: return False
            if cnts[i] > 0:
                if not st: st = i
                ed = i

        return ed - st < 5