function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const rows = mat.length, cols = mat[0].length
  if (r * c !== rows * cols) return mat
  const res: number[][] = []
  let r1 = 0, c1 = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!c1) res[r1] = []
      res[r1][c1++] = mat[i][j]
      if (c1 === c) {
        r1 += 1
        c1 = 0
      }
    }
  }
  return res
};