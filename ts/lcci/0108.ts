/**
 Do not return anything, modify matrix in-place instead.
 */

// 使用标记数组
function setZeroes(matrix: number[][]): void {
  let m = matrix.length, n = matrix[0].length
  const rows: boolean[] = [], cols: boolean[] = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!matrix[i][j]) {
        rows[i] = true
        cols[j] = true
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0
      }
    }
  }
};