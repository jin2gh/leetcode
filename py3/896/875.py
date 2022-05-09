from typing import List
from math import ceil

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def getTime(k):
            total = 0
            for n in piles:
                total += ceil(n / k)
            return total
        l, r = 1, max(piles)
        while l < r:
            m = l + (r - l) // 2
            time = getTime(m)
            if time <= h:
                r = m
            else:
                l = m + 1
        return l