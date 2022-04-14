function getLastMoment(n: number, left: number[], right: number[]): number {
  let max = 0
  for (const v of left) {
    max = Math.max(max, v)
  }
  for (const v of right) {
    max = Math.max(max, n - v)
  }
  return max
};