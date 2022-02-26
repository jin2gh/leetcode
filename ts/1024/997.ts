function findJudge(n: number, trust: number[][]): number {
  const counts = new Array(n + 1).fill(0)
  for (const v of trust) {
    counts[v[0]] -= 1
    counts[v[1]] += 1
  }
  for (let i = 1; i <= n; i++) {
    if (counts[i] === n - 1) return i
  }
  return -1
};