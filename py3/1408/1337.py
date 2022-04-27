from typing import List

class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        def getSecond(list):
            return list[1]
        m, n = len(mat), len(mat[0])
        buckets = []
        for i in range(m):
            l, r = 0, n - 1
            while l <= r:
                m = l + (r - l) // 2
                if mat[i][m] == 1:
                    l = m + 1
                else:
                    r = m - 1
            buckets.append([i, l])

        buckets.sort(key=getSecond)

        ans = []
        for i in range(k):
            ans.append(buckets[i][0])

        return ans