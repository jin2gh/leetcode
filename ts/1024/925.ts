// 双指针
function isLongPressedName(name: string, typed: string): boolean {
  const l1: number = name.length, l2: number = typed.length
  if (l1 > l2) return false
  let i: number = 0, j: number = 0
  while (j < l2) {
    if (name[i] === typed[j]) {
      i += 1
      j += 1
    } else if (j && typed[j] === typed[j - 1]) {
      j += 1
    } else {
      return false
    }
  }
  return i === l1
}