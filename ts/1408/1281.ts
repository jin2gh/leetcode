function subtractProductAndSum(n: number): number {
  let sum = 0, product = 1
  while (n > 0) {
    const num = n % 10
    sum += num
    product *= num
    n = Math.floor(n / 10)
  }
  return product - sum
};