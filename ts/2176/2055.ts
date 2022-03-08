function platesBetweenCandles(s: string, queries: number[][]): number[] {
  const len = s.length
  const cnts: number[] = [], left: number[] = [], rights: number[] = []
  const ans: number[] = []
  for (let i = 0, j = len - 1, sum = 0, l = -1, r = -1; i < len; i++, j--) {
    if (s[i] === '*') sum += 1
    else if (s[i] === '|') l = i

    if (s[j] === '|') r = j
    cnts.push(sum)
    left.push(l)
    rights[j] = r
  }

  for (const v of queries) {
    const s = rights[v[0]], e = left[v[1]]
    ans.push((s !== -1 && s <= e) ? cnts[e] - cnts[s] : 0)
  }
  return ans
};