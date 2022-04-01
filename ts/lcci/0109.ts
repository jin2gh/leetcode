function isFlipedString(s1: string, s2: string): boolean {
  const l1 = s1.length, l2 = s2.length
  if (l1 !== l2) return false
  const s = s2 + s2
  return s.includes(s1)
};