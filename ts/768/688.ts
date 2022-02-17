function knightProbability(n: number, k: number, row: number, column: number): number {
  const dirs = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2],  [-1, -2]]
  const dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)))
  for (let step = 0; step <= k; step++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (step) {
          for (const d of dirs) {
            const ni = i + d[0], nj = j + d[1]
            if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
              dp[step][i][j] += dp[step - 1][ni][nj] / 8
            }
          }
        } else {
          dp[step][i][j] = 1
        }
      }
    }
  }
  return dp[k][row][column]
};