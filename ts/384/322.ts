function coinChange(coins: number[], amount: number): number {
  const m = coins.length, n = amount + 1
  const dp: number[] = new Array(n).fill(n)
  dp[0] = 0
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
};