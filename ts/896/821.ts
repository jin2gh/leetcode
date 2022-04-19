function shortestToChar(s: string, c: string): number[] {
  const len = s.length
  const ans: number[] = new Array(len)
  for (let i = 0, idx = -len; i < len; ++i) {
    if (s[i] === c) idx = i
    ans[i] = i - idx
  }

  for (let i = len - 1, idx = 2 * len; i >= 0; --i) {
    if (s[i] === c) idx = i
    ans[i] = Math.min(ans[i], idx - i)
  }
  return ans
};