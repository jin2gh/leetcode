function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length, n = matrix[0].length
  const ans: number[] = []
  let l = 0, t = 0, r = n - 1, b = m - 1
  while (l <= r && t <= b) {
    for (let i = l; i <= r && t <= b; i++) {
      ans.push(matrix[t][i])
    }
    t += 1

    for (let i = t; i <= b && l <= r; i++) {
      ans.push(matrix[i][r])
    }
    r -= 1

    for (let i = r; i >= l && t <= b; i--) {
      ans.push(matrix[b][i])
    }
    b -= 1

    for (let i = b; i >= t && l <= r; i--) {
      ans.push(matrix[i][l])
    }
    l += 1
  }
  return ans
};