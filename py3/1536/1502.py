from typing import List

class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        n = len(arr)
        min_n, max_n = min(arr), max(arr)
        cnts = [0] * n
        d = (max_n - min_n) / (n - 1)

        if d % 1 > 0:
            return False
        if d == 0:
            return True
        for v in arr:
            i = (v - min_n) / d
            if i % 1 > 0:
                return False
            i = int(i)
            if cnts[i] > 0:
                return False
            cnts[int(i)] = 1
        return True