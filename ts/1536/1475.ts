function finalPrices(prices: number[]): number[] {
  const n = prices.length
  const stack = [], ans: number[] = new Array(n)
  let idx
  for (let i = 0; i < n; ++i) {
    while(stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      idx = stack.pop()
      ans[idx] = prices[idx] - prices[i]
    }
    stack.push(i)
  }
  while(stack.length) {
    idx = stack.pop()
    ans[idx] = prices[idx]
  }
  return ans
};