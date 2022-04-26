function projectionArea(grid: number[][]): number {
  const n = grid.length
  let cnt = 0
  for (let i = 0; i < n; ++i) {
    let row_max = 0, col_max = 0
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] > row_max) row_max = grid[i][j]
      if (grid[j][i] > col_max) col_max = grid[j][i]
      if (grid[i][j] > 0) cnt += 1
    }
    cnt += row_max + col_max
  }

  return cnt
};