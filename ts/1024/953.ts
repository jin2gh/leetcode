function isAlienSorted(words: string[], order: string): boolean {
  const ht = {}, m = order.length, n = words.length
  for (let i = 0; i < m; ++i) {
    ht[order[i]] = i
  }

  for (let i = 1; i < n; ++i) {
    const w1 = words[i - 1],
          w2 = words[i],
          l1 = w1.length,
          l2 = w2.length
    for (let j = 0; j < l1; ++j) {
      if (j >= l2 || ht[w1[j]] > ht[w2[j]]) return false
      if (ht[w1[j]] < ht[w2[j]]) break
    }
  }

  return true
};