from typing import List

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        row = []
        l, r = 0, m - 1
        while l <= r:
            m = l + (r - l) // 2
            if matrix[m][0] == target:
                return True
            if matrix[m][0] > target:
                r = m - 1
            else:
                l = m + 1

        row = matrix[l - 1]
        l, r = 0, n - 1
        while l <= r:
            m = l + (r - l) // 2
            if row[m] == target:
                return True
            if row[m] < target:
                l = m + 1
            else:
                r = m - 1

        return False
