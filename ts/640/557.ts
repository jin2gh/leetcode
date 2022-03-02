function reverseWords(s: string): string {
  const cs: string[] = []
  let l = 0, r = -1
  for (const c of s) {
    if (c === ' ') {
      while (l < r) {
        const tmp = cs[r]
        cs[r--] = cs[l]
        cs[l++] = tmp
      }
      r = cs.length
      l = r + 1
    }
    cs.push(c)
    r += 1
  }

  while (l < r) {
    const tmp = cs[r]
    cs[r--] = cs[l]
    cs[l++] = tmp
  }
  return cs.join('')
};