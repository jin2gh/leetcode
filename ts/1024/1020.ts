function numEnclaves(grid: number[][]): number {
  const m = grid.length, n = grid[0].length, mai = m - 1, maj = n - 1
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const matrix: (0 | 1)[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
  const q: number[][] = []
  let count = 0
  for (let i = 0; i < m; i++) {
    if (grid[i][0]) {
      matrix[i][0] = 1
      q.push([i, 0])
    }
    if (grid[i][maj]) {
      matrix[i][maj] = 1
      q.push([i, maj])
    }
  }

  for (let j = 1; j < maj; j++) {
    if (grid[0][j]) {
      matrix[0][j] = 1
      q.push([0, j])
    }
    if (grid[mai][j]) {
      matrix[mai][j] = 1
      q.push([mai, j])
    }
  }

  while (q.length) {
    const cell = q.shift() as number[]
    for (const d of dirs) {
      const ni = cell[0] + d[0], nj = cell[1] + d[1]
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] && !matrix[ni][nj]) {
        matrix[ni][nj] = 1
        q.push([ni, nj])
      }
    }
  }

  for (let i = 1; i < mai; i++) {
    for (let j = 1; j < maj; j++) {
      if (grid[i][j] && !matrix[i][j]) count += 1
    }
  }
  return count
};