from typing import List

class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        rows, cols = len(grid), len(grid[0])
        size = rows * cols
        k %= size
        ans = [[0] * cols for _ in range(rows)]
        for i, row in enumerate(grid):
            for j, v in enumerate(row):
                ans[(i + (j + k) // cols) % rows][(j + k) % cols] = v

        return ans