// 哈希表
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false
  const ht = {}
  for (const s of magazine) {
    if (ht[s]) {
      ht[s] += 1
    } else {
      ht[s] = 1
    }
  }
  for (const s of ransomNote) {
    if (!ht[s]) return false
    ht[s] -= 1
  }
  return true
};