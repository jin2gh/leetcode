function longestDiverseString(a: number, b: number, c: number): string {
  const letters: [number, string][] = [[a, 'a'], [b, 'b'], [c, 'c']]
  let s = ''
  while (true) {
    let end = true
    letters.sort((a, b) => (b[0] - a[0]))
    for (const v of letters) {
      if (v[0] <= 0) break
      const l = s.length
      if (l >= 2 && s[l - 2] === v[1] && s[l - 1] === v[1]) continue
      s += v[1]
      v[0] -= 1
      end = false
      break
    }
    if (end) break
  }
  return s
};