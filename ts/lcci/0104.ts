// 哈希表
function canPermutePalindrome(s: string): boolean {
  const ht = {}
  const len = s.length
  let isOne = false
  for (let i = 0; i < len; i++) {
    if (ht[s[i]]) {
      ht[s[i]] += 1
    } else {
      ht[s[i]] = 1
    }
  }
  for (const k in ht) {
    if (ht[k] % 2) {
      if (isOne) return false
      isOne = true
    }
  }
  return true
};