from typing import List

class Solution:
    def fraction(self, cont: List[int]) -> List[int]:
        i = len(cont) - 1
        n, m = 1, cont[i]
        i -= 1
        while i >= 0:
            tmp = cont[i] * m + n
            n = m
            m = tmp
            i -= 1

        return [m, n]