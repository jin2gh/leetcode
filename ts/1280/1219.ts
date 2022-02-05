function getMaximumGold(grid: number[][]): number {
  const m = grid.length, n = grid[0].length
  const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  let sum = 0

  const dfs = (x: number, y: number, gold: number): void => {
    gold += grid[x][y]
    sum = Math.max(sum, gold)

    const tmp = grid[x][y]
    grid[x][y] = 0

    for (let i = 0; i < 4; i++) {
      const nx = x + dirs[i][0]
      const ny = y + dirs[i][1]
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] > 0) {
        dfs(nx, ny, gold)
      }
    }

    grid[x][y] = tmp
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        dfs(i, j, 0)
      }
    }
  }
  return sum
};