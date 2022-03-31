function reverse(x: number): number {
  const MIN = -1 << 31, MAX = -(MIN + 1)
  let ans = 0
  while (x !== 0) {
    ans = ans * 10 + x % 10
    if (ans > MAX || ans < MIN) return 0
    x = ~~(x / 10)
  }
  return ans
};