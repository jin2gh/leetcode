// 哈希表
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const ht = {}
  for (const v of s) {
    if (ht[v]) {
      ht[v] += 1
    } else {
      ht[v] = 1
    }
  }
  for (const v of t) {
    if (!ht[v]) return false
    ht[v] -= 1
  }

  for (const k in ht) {
    if (ht[k]) return false
  }
  return true
};