function generate(numRows: number): number[][] {
  const res: number[][] = []
  for (let i = 0; i < numRows; i++) {
    res[i] = [1]
    for (let j = 1; j < i; j++) {
      res[i].push(res[i - 1][j - 1] + res[i - 1][j])
    }
    if (i) res[i].push(1)
  }
  return res
};