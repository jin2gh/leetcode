function isNumber(s: string): boolean {
  const len = s.length
  let flag_point = false, flag_in = false, flag_sign = false, flag_d = false
  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') {
      if (flag_in) return isSpace(s, i + 1, len)
      continue
    } else {
      flag_in = true
    }

    if (isSign(s[i])) {
      if (flag_sign || flag_d) return false
      flag_sign = true
      continue
    }

    if (isE(s[i])) {
      if (!isDigit(s[i - 1]) && s[i - 1] !== '.') return false
      return isInt(s, i + 1, len)
    }

    if (s[i] === '.') {
      if (flag_point) return false
      console.log(!isDigit(s[i - 1]) && !isDigit(s[i + 1]))
      if (!isDigit(s[i - 1]) && !isDigit(s[i + 1])) return false
      flag_point = true
      continue
    }

    if (isDigit(s[i])) {
      flag_d = true
      continue
    }
    return false
  }
  return flag_d
};

function isInt(s: string, start: number, end: number): boolean {
  if (start >= end) return false
  let flag_sign = false, flag_d = false
  for (let i = start; i < end; i++) {
    if (s[i] === ' ') return isSpace(s, i + 1, end) && flag_d
    if (isSign(s[i])) {
      if (flag_sign || flag_d) return false
      flag_sign = true
      continue
    }
    if (!isDigit(s[i])) return false
    flag_d = true
  }
  return flag_d
}

function isSpace(s: string, start: number, end: number): boolean {
  for (let i = start; i < end; i++) {
    if (s[i] !== ' ') return false
  }
  return true
}

function isE(s: string): boolean {
  return s === 'e' || s === 'E'
}

function isDigit(s: string): boolean {
  if (!s) return false
  return s >= '0' && s <= '9'
}

function isSign(s: string): boolean {
  return s === '+' || s === '-'
}
