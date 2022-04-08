// 贪心
function maxProfit(prices: number[]): number {
  const len = prices.length
  let max: number = 0
  for (let i = 1; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1]
    }
  }
  return max
};