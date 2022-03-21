// 数学
function integerBreak(n: number): number {
  if (n < 4) return n - 1

  const remainder = n % 3, quotient = Math.floor(n / 3)
  if (remainder === 0) return Math.pow(3, quotient)
  if (remainder === 1) return Math.pow(3, quotient - 1) * 4
  return Math.pow(3, quotient) * 2
};