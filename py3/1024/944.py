from typing import List

class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        m, n = len(strs), len(strs[0])
        ans = 0
        for i in range(n):
            tmp = strs[0][i]
            for j in range(1, m):
                if strs[j][i] >= tmp:
                    tmp = strs[j][i]
                else:
                    ans += 1
                    break
        return ans