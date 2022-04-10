function findTheDifference(s: string, t: string): string {
  const ht = {}
  for (const c of s) {
    if (ht[c]) ht[c] += 1
    else ht[c] = 1
  }
  for (const c of t) {
    if (!ht[c]) return c
    ht[c] -= 1
  }
  return ''
};