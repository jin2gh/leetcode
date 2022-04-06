function longestCommonPrefix(strs: string[]): string {
  const len = strs.length
  let prefix = '',
      flag = false // 表示某个字符串是否已经结束
  if (len === 0 || strs[0].length === 0) return prefix
  let i = 0, j = 0, c = strs[i][j]
  while (i < len) {
    if (!strs[i][j + 1]) flag = true
    if (c !== strs[i][j]) return prefix
    i += 1 // c === strs[i][j]
    if (i === len) {
      prefix += c
      if (flag) return prefix
      j += 1
      i = 0
      c = strs[i][j]
    }
  }
  return prefix
};