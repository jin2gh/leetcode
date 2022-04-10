function maximumWealth(accounts: number[][]): number {
  let max = 0
  for (const account of accounts) {
    let sum = 0
    for (const v of account) {
      sum += v
    }
    max = Math.max(max, sum)
  }
  return max
};