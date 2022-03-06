function goodDaysToRobBank(security: number[], time: number): number[] {
  const ans: number[] = []
  const l = security.length
  if (l <= time * 2) return ans
  const lefts = new Array(l).fill(0), rights = new Array(l).fill(0)
  for (let i = 1; i < l; i++) {
    if (security[i] <= security[i - 1]) lefts[i] = lefts[i - 1] + 1
    if (security[l - i - 1] <= security[l - i]) rights[l - i - 1] = rights[l - i] + 1
  }
  for (let i = time; i < l - time; i++) {
    if (lefts[i] >= time && rights[i] >= time) ans.push(i)
  }
  return ans
};