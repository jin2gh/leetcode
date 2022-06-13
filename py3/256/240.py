from typing import List

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0]) if m != 0 else 0
        if n == 0:
            return False
        i, j = 0, n - 1
        while i < m and j < n:
            if matrix[i][j] == target:
                return True
            if matrix[i][j] < target:
                i += 1
            else:
                j -= 1
            if i < 0 or j < 0:
                break
        return False