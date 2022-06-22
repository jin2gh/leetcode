from typing import List

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
        m, n, l = len(board), len(board[0]), len(word)

        def dfs(x: int, y: int, pos: int) -> bool:
            if pos == l - 1: return True
            pos += 1
            tmp = board[x][y]
            board[x][y] = '0'

            for d in dirs:
                nx, ny = x + d[0], y + d[1]
                if nx >= 0 and nx < m and ny >= 0 and ny < n and board[nx][ny] == word[pos]:
                    if dfs(nx, ny, pos): return True

            board[x][y] = tmp
            return False


        for i in range(m):
            for j in range(n):
                if board[i][j] == word[0]:
                    if dfs(i, j, 0): return True

        return False