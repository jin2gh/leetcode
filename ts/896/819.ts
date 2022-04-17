import { isLetter } from '../utils'

function mostCommonWord(paragraph: string, banned: string[]): string {
  const ht = {}
  let word = ''
  for (const v of paragraph) {
    if (isLetter(v)) word += v
    else if (word) {
      word = word.toLocaleLowerCase()
      if (ht[word]) ht[word] += 1
      else ht[word] = 1

      word = ''
    }
  }

  if (word) {
    word = word.toLocaleLowerCase()
    ht[word] ? ht[word] += 1 : ht[word] = 1
  }
  for (const v of banned) {
    if (ht[v]) ht[v] = 0
  }

  let max = '', cnt = 0
  for (const k in ht) {
    if (ht[k] > cnt) {
      cnt = ht[k]
      max = k
    }
  }
  return max
};
