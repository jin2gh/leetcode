function reverseString(s: string[]): void {
  let l = 0, r = s.length - 1
  while (l < r) {
    const tmp = s[r]
    s[r--] = s[l]
    s[l++] = tmp
  }
};