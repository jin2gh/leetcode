function plusOne(digits: number[]): number[] {
  const max_i = digits.length - 1
  for (let i = max_i; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1
      break
    }
    digits[i] = 0
    if (i === 0) {
      digits.unshift(1)
      break
    }
  }
  return digits
};