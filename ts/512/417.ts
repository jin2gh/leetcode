function pacificAtlantic(heights: number[][]): number[][] {
  const m = heights.length, n = heights[0].length
  const po: boolean[][] = new Array(m).fill(0).map(() => new Array(n).fill(false)),
        ao: boolean[][] = new Array(m).fill(0).map(() => new Array(n).fill(false))
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const ans: number[][] = []
  const dfs = (x: number, y: number, ocean: boolean[][]): void => {
    if (ocean[x][y]) return
    ocean[x][y] = true
    for (const d of dirs) {
      const nx = x + d[0], ny = y + d[1]
      if (nx >= 0 && ny >= 0 && nx < m && ny < n
        && !ocean[nx][ny]
        && heights[x][y] <= heights[nx][ny]
      ) dfs(nx, ny, ocean)
    }
  }
  for (let i = 0; i < m; ++i) {
    dfs(i, 0, po)
    dfs(i, n - 1, ao)
  }
  for (let i = 0; i < n; ++i) {
    dfs(0, i, po)
    dfs(m - 1, i, ao)
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (po[i][j] && ao[i][j]) ans.push([i, j])
    }
  }

  return ans
};