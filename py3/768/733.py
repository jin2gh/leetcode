from typing import List

class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        if image[sr][sc] == color: return image
        dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        m, n = len(image), len(image[0])
        old_color = image[sr][sc]
        def dfs(x: int, y: int):
            image[x][y] = color
            for d in dirs:
                nx, ny = x + d[0], y + d[1]
                if 0 <= nx < m and 0 <= ny < n and image[nx][ny] == old_color:
                    dfs(nx, ny)
        dfs(sr, sc)
        return image