function hasAlternatingBits(n: number): boolean {
  const a = n ^ (n >> 1)
  return (a & (a + 1)) === 0
};