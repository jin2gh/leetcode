function addStrings(num1: string, num2: string): string {
  let i = num1.length,
      j = num2.length,
      len = i > j ? i : j,
      carry = 0
  const sum: number[] = new Array(len), MOD = 10
  while (i > 0 || j > 0) {
    const n1 = i ? +num1.charAt(--i) : 0
    const n2 = j ? +num2.charAt(--j) : 0
    const s = carry + n1 + n2
    sum[--len] = (s % MOD)
    carry = s >= MOD ? 1 : 0
  }

  return (carry || '') + sum.join('')
};