function countDigitOne(n: number): number {
  let cnt = 0
  for (let i = 1; i <= n; i *= 10) {
    cnt += Math.floor(n / (i * 10)) * i + Math.min(Math.max(n % (i * 10) - i + 1, 0), i)
  }

  return cnt
};