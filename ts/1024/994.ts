function orangesRotting(grid: number[][]): number {
  const m = grid.length, n = grid[0].length
  const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let queue: number[][] = []
  let cnt = 0, ans = -1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j])
      } else if (grid[i][j] === 1) {
        cnt += 1
      }
    }
  }
  if (cnt === 0) return 0
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const p = queue.shift()
      for (const d of DIRS) {
        const nx = p[0] + d[0], ny = p[1] + d[1]
        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
          grid[nx][ny] = 2
          queue.push([nx, ny])
          cnt -= 1
        }
      }
    }
    ans += 1
  }
  if (cnt > 0) return -1
  return ans
};