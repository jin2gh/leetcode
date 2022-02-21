function climbStairs(n: number): number {
  let f1 = 1, f2 = 1, tmp
  for (let i = 1; i < n; i++) {
    tmp = f2
    f2 += f1
    f1 = tmp
  }

  return f2
};