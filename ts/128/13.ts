function romanToInt(s: string): number {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let num = 0
  for (let i = 0, l = s.length; i < l; i++) {
    let cur = map[s[i]]
    let next = map[s[i + 1]]
    if (i < l - 1 && cur < next) {
      num -= cur
    } else {
      num += cur
    }
  }
  return num
};