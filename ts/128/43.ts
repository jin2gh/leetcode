function multiply(num1: string, num2: string): string {
  if (num1 === '0' || num2 === '0') return '0'
  const m = num1.length, n = num2.length, max_i = m + n - 1
  const product = new Array(m + n).fill(0)
  let ans = '', start = 0
  for (let i = m - 1; i >= 0; i--) {
    const n1 = +num1.charAt(i)
    for (let j = n - 1; j >= 0; j--) {
      const n2 = +num2.charAt(j)
      product[i + j + 1] += n1 * n2
    }
  }

  for (let i = max_i; i > 0; i--) {
    product[i - 1] += Math.floor(product[i] / 10)
    product[i] %= 10
  }

  if (!product[0]) start = 1
  for (let i = start; i <= max_i; i++) {
    ans += product[i]
  }
  return ans
};