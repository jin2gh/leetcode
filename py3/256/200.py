from typing import List

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        m, n = len(grid), len(grid[0])
        ans = 0

        def dfs(x, y):
            grid[x][y] = '2'
            for dx, dy in dirs:
                nx, ny = x + dx, y + dy
                if 0 <= nx < m and 0 <= ny < n and grid[nx][ny] == '1':
                    dfs(nx, ny)

        for i in range(m):
            for j in range(n):
                if  grid[i][j] == '1':
                    ans += 1
                    dfs(i, j)

        return ans