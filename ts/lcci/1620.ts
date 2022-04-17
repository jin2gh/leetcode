function getValidT9Words(num: string, words: string[]): string[] {
  const table = [
    '2', '2', '2',
    '3', '3', '3',
    '4', '4', '4',
    '5', '5', '5',
    '6', '6', '6',
    '7', '7', '7', '7',
    '8', '8', '8',
    '9', '9', '9', '9'
  ]
  const len = num.length, uni_a = 'a'.charCodeAt(0)
  const res = []
  for (const w of words) {
    if (w.length === len) {
      let i = 0
      while (i < len) {
        if (table[w[i].charCodeAt(0) - uni_a] !== num[i]) break
        i += 1
      }
      if (i === len) res.push(w)
    }
  }
  return res
};