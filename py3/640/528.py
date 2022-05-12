from typing import List
from random import randint

class Solution:

    def __init__(self, w: List[int]):
        self.pres = [w[0]]
        self.sum = w[0]
        for v in w[1:]:
            self.pres.append(self.pres[-1] + v)
            self.sum += v

    def pickIndex(self) -> int:
        target = randint(1, self.sum)
        l, r = 0, len(self.pres) - 1
        while l < r:
            m = l + (r - l) // 2
            if self.pres[m] < target:
                l = m + 1
            else:
                r = m
        return l


# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()