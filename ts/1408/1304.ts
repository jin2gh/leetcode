function sumZero(n: number): number[] {
  const ans: number[] = []
  if (n % 2) {
    ans.push(0)
    n = (n - 1) / 2
  } else n /= 2

  for (let i = 1; i <= n; ++i) {
    ans.push(-i)
    ans.push(i)
  }

  return ans
};