/**
 Do not return anything, modify matrix in-place instead.
 */

// 两次翻转
function rotate(matrix: number[][]): void {
  const n = matrix.length, r = n >> 1
  for (let i = 0; i < r; i++) {
    let tmp = matrix[n - i - 1]
    matrix[n - i - 1] = matrix[i]
    matrix[i] = tmp
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let tmp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tmp
    }
  }
};