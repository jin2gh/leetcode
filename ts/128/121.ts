function maxProfit(prices: number[]): number {
  let profit = 0, minPrice = prices[0]
  for (const v of prices) {
    if (v < minPrice) {
      minPrice = v
    } else {
      profit = Math.max(profit, v - minPrice)
    }
  }
  return profit
};