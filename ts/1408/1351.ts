// Z 形查找
function countNegatives(grid: number[][]): number {
  const m = grid.length, n = grid[0].length
  let cnt = 0, i = 0, j = n - 1
  while (i < m && j >= 0) {
    if (grid[i][j] < 0) {
      cnt += m - i
      j -= 1
    } else i += 1
  }
  return cnt
};