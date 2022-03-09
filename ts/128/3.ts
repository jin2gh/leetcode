function lengthOfLongestSubstring(s: string): number {
  const ht = {}, len = s.length
  let ans = 0
  for (let l = 0, r = 0; r < len; r++) {
    const c = s[r]
    if (ht[c] >= 0) l = Math.max(l, ht[c])
    ans = Math.max(ans, r - l + 1)
    ht[c] = r + 1
  }
  return ans
};