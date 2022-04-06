function isMatch(s: string, p: string): boolean {
  const m = s.length, n = p.length
  const dp: boolean[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false))
  const match = (i: number, j: number) => {
    if (i === 0) return false
    return p[j - 1] === '.' || p[j - 1] === s[i - 1]
  }
  dp[0][0] = true
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        if (match(i, j - 1)) {
          dp[i][j] = dp[i - 1][j] || dp[i][j - 2]
        } else {
          dp[i][j] = dp[i][j - 2]
        }
      } else if (match(i, j)) {
        dp[i][j] = dp[i - 1][j - 1]
      }
    }
  }
  return dp[m][n]
};