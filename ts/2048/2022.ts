function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (original.length !== m * n) return []
  let i: number = 0
  const res: number[][] = []
  for (let j = 0; j < m; j++) {
    res[j] = []
    for (let k = 0; k < n; k++) {
      res[j].push(original[i++])
    }
  }
  return res
};