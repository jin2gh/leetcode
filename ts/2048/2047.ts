function countValidWords(sentence: string): number {
  let str = '', count = 0, i = 0
  const idx = sentence.length - 1
  while (i <= idx) {
    if (sentence[i] !== ' ') {
      str += sentence[i]
    }
    if (i === idx || sentence[i] === ' ') {
      if (str && isVaild(str)) count += 1
      str = ''
    }
    i += 1
  }
  return count
};

function isVaild (str: string): boolean {
  if (!str) return false
  const idx = str.length - 1
  let hyphen = 0
  for (let i = 0; i <= idx; i++) {
    if (isNumber(str[i])) return false
    if (isSign(str[i]) && i < idx) return false
    if (str[i] === '-') {
      if (hyphen || !isLowerLetter(str[i - 1]) || !isLowerLetter(str[i + 1])) return false
      hyphen += 1
    }
  }
  return true
}

function isSign(s: string): boolean {
  return s === '!' || s === ',' || s === '.'
}

function isLowerLetter(s: string): boolean {
  return s >= 'a' && s <= 'z'
}

function isNumber(s: string): boolean {
  return s >= '0' && s <= '9'
}