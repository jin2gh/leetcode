// 模拟
function compressString(S: string): string {
  const len: number = S.length
  if (!len) return S
  let s: string = S[0], count: number = 1
  for (let i = 1; i < len; i++) {
    if (S[i] === s[s.length - 1]) {
      count += 1
    } else {
      s += count + S[i]
      count = 1
    }
  }
  s += count

  return s.length >= len ? S : s
};