function myAtoi(s: string): number {
  const max = 2 ** 31 - 1, min = -(2 ** 31)
  const len = s.length
  let n = '', sign = ''
  for (let i = 0; i < len; i++) {
    if (isSign(s[i])) {
      if (sign || n) break
      sign = s[i]
    } else if (isInt(s[i])) {
      n += s[i]
    } else if (isSpace(s[i])) {
      if (sign || n) break
      continue
    } else {
      break
    }
  }
  if (n.length) {
    n = sign + n
    let num = Number(n)
    if (num > max) return max
    if (num < min) return min
    return num
  }
  return 0
};

function isSign(s: string): boolean {
  return s === '+' || s === '-'
}

function isInt(s: string): boolean {
  return /[0-9]/.test(s)
}

function isSpace(s: string): boolean {
  return s === ' '
}