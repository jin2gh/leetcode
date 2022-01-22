function removePalindromeSub(s: string): number {
  const len = s.length
  const mid = len >> 1
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[len - i - 1]) return 2
  }
  return 1
};