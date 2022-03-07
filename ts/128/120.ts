// DP
function minimumTotal(triangle: number[][]): number {
  const n = triangle.length,
        dp: number[][] = [triangle[0]]
  for (let i = 1; i < n; i++) {
    dp[i] = [dp[i - 1][0] + triangle[i][0]]
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
    }
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i]
  }

  let min = +Infinity
  for (let i = 0; i < n; i++) {
    min = Math.min(dp[n - 1][i], min)
  }
  return min
};

// DP + 空间优化
function minimumTotal1(triangle: number[][]): number {
  const n = triangle.length,
        dp: number[] = new Array(n)
  dp[0] = triangle[0][0]
  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] + triangle[i][i]
    for (let j = i - 1; j > 0; j--) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j]
    }
    dp[0] += triangle[i][0]
  }

  let min = +Infinity
  for (let i = 0; i < n; i++) {
    min = Math.min(dp[i], min)
  }
  return min
};