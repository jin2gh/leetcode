import { isLowercase } from '../utils'

// 分治
function longestNiceSubstring(s: string): string {
  const sLen = s.length
  if (sLen < 2) return ''
  const num_a = 'a'.charCodeAt(0), num_A = 'A'.charCodeAt(0)
  let maxPos = 0, maxLen = 0

  const dfs = (s: string, start: number, end: number): void => {
    if (start >= end) return
    let lower = 0, upper = 0
    for (let i = start; i <= end; i++) {
      if (isLowercase(s[i])) {
        lower |= 1 << (s.charCodeAt(i) - num_a)
      } else {
        upper |= 1 << (s.charCodeAt(i) - num_A)
      }
    }
    if (lower === upper) {
      const len = end - start + 1
      if (maxLen < len) {
        maxPos = start
        maxLen = len
      }
      return
    }

    const valid = lower & upper // 具有大小写的字符
    let idx = start
    while (idx <= end) {
      start = idx
      while (idx <= end && (valid & (1 << (s.charAt(idx).toLowerCase().charCodeAt(0) - num_a)))) {
        idx += 1
      }
      dfs(s, start, idx - 1)
      idx += 1
    }
  }

  dfs(s, 0, sLen - 1)

  return s.substring(maxPos, maxPos + maxLen)
};