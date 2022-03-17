function longestWord(words: string[]): string {
  words.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length
    return b.localeCompare(a)
  })

  const ht = { '': 1 }, len = words.length
  let ans = ''
  for (let i = 0; i < len; i++) {
    let pre = words[i].slice(0, -1)
    if (ht[pre]) {
      ans = words[i]
      ht[words[i]] = 1
    }
  }
  return ans
};