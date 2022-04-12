function numberOfLines(widths: number[], s: string): number[] {
  const ans: number[] = [1, 0], uca = 'a'.charCodeAt(0)
  for (const c of s) {
    const w = widths[c.charCodeAt(0) - uca]
    if (ans[1] + w > 100) {
      ans[1] = w
      ans[0] += 1
    }
    else ans[1] += w
  }
  return ans
};