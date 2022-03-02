// DFS + 栈
function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length, n = grid[0].length
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]],
        stack: number[][] = []
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        let sum = 1
        stack.push([i, j])
        grid[i][j] = 0
        while (stack.length) {
          const pos = stack.pop()
          for (const d of dirs) {
            const nx = pos[0] + d[0], ny = pos[1] + d[1]
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
              sum += 1
              stack.push([nx, ny])
              grid[nx][ny] = 0
            }
          }
        }
        ans = Math.max(ans, sum)
      }
    }
  }
  return ans
};