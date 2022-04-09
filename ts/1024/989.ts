function addToArrayForm(num: number[], k: number): number[] {
  const ri = num.length - 1, MOD = 10
  const res: number[] = []
  for (let i = ri; i >= 0; --i) {
    let sum = num[i] + k % MOD
    k = Math.floor(k / MOD)
    if (sum >= MOD) {
      k += 1
      sum -= MOD
    }
    res.push(sum)
  }

  while (k > 0) {
    res.push(k % MOD)
    k = Math.floor(k / MOD)
  }
  return res.reverse()
};