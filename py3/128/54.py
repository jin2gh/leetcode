from typing import List

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        ans = []
        if not matrix or not matrix[0]: return ans

        m, n = len(matrix), len(matrix[0])
        t, r, b, l = 0, n - 1, m - 1, 0

        while l <= r and t <= b:
            for i in range(l, r + 1):
                ans.append(matrix[t][i])
            t += 1

            for i in range(t, b + 1):
                ans.append(matrix[i][r])
            r -= 1

            if t <= b:
                for i in range(r, l - 1, -1):
                    ans.append(matrix[b][i])
                b -= 1

            if l <= r:
                for i in range(b, t - 1, -1):
                    ans.append(matrix[i][l])
                l += 1

        return ans