function findBall(grid: number[][]): number[] {
  const n = grid[0].length
  const ans: number[] = []
  for (let j = 0; j < n; j++) {
    let tj = j
    for (const r of grid) {
      const d = r[tj]
      tj += d
      if (tj < 0 || tj === n || d !== r[tj]) {
        tj = -1
        break
      }
    }

    ans.push(tj)
  }
  return ans
};