from typing import List

class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        n = len(mat)
        ans, i, j = 0, 0, n - 1
        while i < n:
            ans += mat[i][i]
            if i != j:
                ans += mat[i][j]
            i += 1
            j -= 1
        return ans