function gridIllumination(n: number, lamps: number[][], queries: number[][]): number[] {
  const ans: (1 | 0)[] = []
  const row = {},
        col = {},
        diagonal = {},
        antiDiagonal = {},
        pos = new Set()
  for (const [x, y] of lamps) {
    let s = '' + x + y
    if (pos.has(s)) continue
    pos.add(s)
    row[x] ? row[x] += 1 : row[x] = 1
    col[y] ? col[y] += 1 : col[y] = 1
    diagonal[x - y] ? diagonal[x - y] += 1 : diagonal[x - y] = 1
    antiDiagonal[x + y] ? antiDiagonal[x + y] += 1 : antiDiagonal[x + y] = 1
  }
  for (const [x, y] of queries) {
    if (row[x] > 0 || col[y] > 0 || diagonal[x - y] > 0 || antiDiagonal[x + y] > 0) {
      ans.push(1)
    } else {
      ans.push(0)
    }
    for (let i = x - 1; i < x + 2; i++) {
      for (let j = y - 1; j < y + 2; j++) {
        const key = '' + i + j
        if (i < 0 || j < 0 || i >= n || j >= n || !pos.has(key)) continue
        pos.delete(key)
        row[i] -= 1
        col[j] -= 1
        diagonal[i - j] -= 1
        antiDiagonal[i + j] -= 1
      }
    }
  }
  return ans
};