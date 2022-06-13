from typing import List

class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        n = 101
        buckets = [0] * n
        for v in heights:
            buckets[v] += 1
        i, cnt = 0, 0
        for j in range(1, n):
            while buckets[j] > 0:
                if j != heights[i]:
                    cnt += 1
                i += 1
                buckets[j] -= 1
        return cnt