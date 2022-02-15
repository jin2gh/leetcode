function luckyNumbers (matrix: number[][]): number[] {
  const m = matrix.length, n = matrix[0].length, range = [0, 100001]
  const rows = new Array(m).fill(range[1]), cols = new Array(n).fill(range[0])
  const ans: number[] = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rows[i] = Math.min(rows[i], matrix[i][j])
      cols[j] = Math.max(cols[j], matrix[i][j])
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] === cols[j]) {
        ans.push(matrix[i][j])
      }
    }
  }

  return ans
};