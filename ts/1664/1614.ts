function maxDepth(s: string): number {
  let size: number = 0, max: number = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      size += 1
      max = Math.max(max, size)
    } else if (s[i] === ')') {
      size -= 1
    }
  }
  return max
}