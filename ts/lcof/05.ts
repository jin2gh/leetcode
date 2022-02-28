function replaceSpace(s: string): string {
  let ans = ''
  for (const c of s) {
    ans += c === ' ' ? '%20' : c
  }
  return ans
};