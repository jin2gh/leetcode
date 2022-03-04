function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length, n = mat[0].length
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const ans: number[][] = [],
        visited: (0 | 1)[][] = [],
        queue: number[][] = []
  for (let i = 0; i < m; i++) {
    ans[i] = []
    visited[i] = []
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        ans[i][j] = 0
        visited[i][j] = 1
        queue.push([i, j])
      } else {
        visited[i][j] = 0
      }
    }
  }
  while (queue.length) {
    const point = queue.shift()
    const x = point[0], y = point[1]
    for (const d of dirs) {
      const nx = x + d[0], ny = y + d[1]
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
        ans[nx][ny] = ans[x][y] + 1
        visited[nx][ny] = 1
        queue.push([nx, ny])
      }
    }
  }
  return ans
};