from collections import deque

class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        def compute(num: int) -> int:
            sum_d = 0
            while num > 0:
                sum_d += num % 10
                num //= 10
            return sum_d

        dirs = [[0, 1], [1, 0]]
        visited = [[0] * n for i in range(m)]
        que = deque()
        i, j = 0, 0
        que.append([i, j])
        visited[i][j] = 1
        cnt = 1
        while que:
            x, y = que.popleft()
            for d in dirs:
                nx, ny = x + d[0], y + d[1]
                if nx == m or ny == n: continue
                if compute(nx) + compute(ny) <= k and visited[nx][ny] == 0:
                    que.append([nx, ny])
                    cnt += 1
                    visited[nx][ny] = 1

        return cnt
