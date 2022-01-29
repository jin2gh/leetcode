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

// 使用标记变量
function setZeroes1(matrix: number[][]): void {
  let m = matrix.length, n = matrix[0].length
  let row0 = false, col0 = false
  for (let i = 0; i < m; i++) {
    if (!matrix[i][0]) {
      col0 = true
      break
    }
  }
  for (let j = 0; j < n; j++) {
    if (!matrix[0][j]) {
      row0 = true
      break
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][j]) matrix[i][0] = matrix[0][j] = 0
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][0] || !matrix[0][j]) {
        matrix[i][j] = 0
      }
    }
  }

  if (row0) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0
    }
  }

  if (col0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }
};