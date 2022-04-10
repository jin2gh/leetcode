function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length, n = matrix[0].length
  for(let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i > 0 && j > 0 && matrix[i][j] !== matrix[i - 1][j - 1]) return false
    }
  }
  return true
};