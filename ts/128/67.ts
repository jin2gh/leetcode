function addBinary(a: string, b: string): string {
  let i = a.length,
      j = b.length,
      len = i > j ? i : j,
      carry = 0
  const ans: number[] = new Array(len), MOD = 2

  while (i > 0 || j > 0) {
    const c1 = i ? +a.charAt(--i) : 0
    const c2 = j ? +b.charAt(--j) : 0
    const n = c1 + c2 + carry
    ans[--len] = (n % MOD)
    carry = n >= MOD ? 1 : 0
  }

  return (carry || '') + ans.join('')
};