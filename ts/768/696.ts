function countBinarySubstrings(s: string): number {
  const len = s.length
  let i = 0, ans = 0, last = 0
  while (i < len) {
    let cnt = 0, tmp = s[i]
    while (i < len && s[i] === tmp) {
      cnt += 1
      i += 1
    }
    ans += Math.min(last, cnt)
    last = cnt
  }
  return ans
};