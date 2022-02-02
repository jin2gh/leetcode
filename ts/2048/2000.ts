function reversePrefix(word: string, ch: string): string {
  let s = '', reversible = false
  for (const v of word) {
    if (reversible) {
      s += v
    } else {
      s = v + s
    }
    if (v === ch) reversible = true
  }
  if (reversible) return s
  return word
};