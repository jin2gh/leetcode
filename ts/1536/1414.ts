// 贪心
function findMinFibonacciNumbers(k: number): number {
  const fibs: number[] = []
  let a = 0, b = 1, count = 0
  while (a + b <= k) {
    let c = a + b
    fibs.push(c)
    a = b
    b = c
  }
  for (let i = fibs.length - 1; i >= 0 && k > 0; i--) {
    if (k >= fibs[i]) {
      k -= fibs[i]
      count += 1
    }
  }
  return count
};