from typing import List

class Solution:
    def minCount(self, coins: List[int]) -> int:
        cnt = 0
        for v in coins:
            cnt += (v + 1) // 2

        return cnt