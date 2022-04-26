class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        n = len(grid[0])
        cnt = 0
        for row in grid:
            l, r = 0, n - 1
            while l <= r:
                m = l + (r - l) // 2
                if row[m] >= 0:
                    l = m + 1
                else:
                    r = m - 1
            cnt += n - l

        return cnt