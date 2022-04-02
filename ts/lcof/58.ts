function reverseLeftWords(s: string, n: number): string {
  const len = s.length
  let ans: string = ''
  for (let i = n; i < len; i++) {
    ans += s[i]
  }
  for (let i = 0; i < n; i++) {
    ans += s[i]
  }
  return ans
};