function divide(dividend: number, divisor: number): number {
  const MAX = 2147483647
  let negative = false
  if (dividend < 0) {
    negative = true
    dividend = -dividend
  }
  if (divisor < 0) {
    negative = !negative
    divisor = -divisor
  }

  let sum = 0
  while (dividend >= divisor) {
    let tmp = divisor, cnt = 1
    while (dividend >= tmp) {
      sum += cnt
      dividend -= tmp
      cnt += cnt
      tmp += tmp
    }
  }

  if (negative) return 0 - sum
  return sum > MAX ? MAX : sum
};