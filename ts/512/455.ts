function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  const gl = g.length, sl = s.length
  let [count, i, j] = [0, 0, 0]
  while(i < gl && j < sl) {
    if (g[i] <= s[j]) {
      count += 1
      i += 1
    }
    j += 1
  }
  return count
};