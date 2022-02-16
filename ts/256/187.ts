// 哈希表
function findRepeatedDnaSequences(s: string): string[] {
  const len = s.length, L = 10
  const ans: string[] = []
  if (len < 11) return ans
  const ht = {}
  for (let i = 0; i <= len - L; i++) {
    const subStr = s.substring(i, i + L)
    if (ht[subStr]) {
      ht[subStr] += 1
    } else {
      ht[subStr] = 1
    }
    if (ht[subStr] === 2) ans.push(subStr)
  }

  return ans
};