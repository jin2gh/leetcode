// 哈希表
function isUnique(astr: string): boolean {
  const map = new Map<string, number>()
  const len: number = astr.length
  for (let i = 0; i < len; i++) {
    if (map.has(astr[i])) return false
    map.set(astr[i], 1)
  }
  return true
}

// 位运算
function isUnique2(astr: string): boolean {
  let ht: number = 0
  const len: number = astr.length
  for (let i = 0; i < len; i++) {
    const flag = 1 << (astr[i].charCodeAt(0) - 97)
    if (ht & flag) return false
    ht |= flag
  }
  return true
}