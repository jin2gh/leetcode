function maxNumberOfBalloons(text: string): number {
  const ht = {
    'a': 0,
    'b': 0,
    'l': 0,
    'n': 0,
    'o': 0,
  }
  let ans: number = +Infinity
  for (const v of text) {
    if (ht[v] >= 0) ht[v] += 1
  }
  ht.l >>= 1
  ht.o >>= 1

  Object.values(ht).map(v => {
    ans = Math.min(v, ans)
  })
  return ans
};