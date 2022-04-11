function transpose(matrix: number[][]): number[][] {
  const m = matrix.length, n = matrix[0].length
  const ans: number[][] = new Array(n).fill(0).map(() => new Array(m))
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      ans[j][i] = matrix[i][j]
    }
  }
  return ans
};