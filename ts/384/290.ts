function wordPattern(pattern: string, s: string): boolean {
  const strs: string[] = s.split(' '),
        m = strs.length,
        n = pattern.length
  if (m !== n) return false
  const pht = {}, sht = {}
  let i = 0
  while (i < n) {
    if (pht[pattern[i]]) {
      if (pht[pattern[i]] !== strs[i]) return false
    } else {
      pht[pattern[i]] = strs[i]
    }

    if (sht[strs[i]]) {
      if (sht[strs[i]] !== pattern[i]) return false
    } else {
      sht[strs[i]] = pattern[i]
    }
    i += 1
  }

  return true
};