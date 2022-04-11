function isSubsequence(s: string, t: string): boolean {
  const sl = s.length, tl = t.length
  let target = ''
  for (let i = 0, j = 0; i < sl; ++i) {
    while (j < tl) {
      if (s[i] === t[j]) {
        target += t[j++]
        break
      }
      j += 1
    }
    if (target.length < i + 1) return false
  }
  return true
};