function diagonalSum(mat: number[][]): number {
  const len = mat.length
  let [sum, i, j] = [0, 0, len - 1]
  while(i < len) {
    sum += mat[i][i]
    if (i !== j) sum += mat[i][j]
    i += 1
    j -= 1
  }
  return sum
};