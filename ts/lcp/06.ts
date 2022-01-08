function minCount(coins: number[]): number {
  let count: number = 0
  for (const val of coins) {
    count += Math.ceil(val / 2)
  }
  return count
}