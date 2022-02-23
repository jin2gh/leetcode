function reverseOnlyLetters(s: string): string {
  const ans: string[] = [...s]
  let i = 0, j = s.length - 1
  while (i < j) {
    while (i < j && !isLetters(ans[i])) {
      i += 1
    }
    while (i < j && !isLetters(ans[j])) {
      j -= 1
    }
    if (i >= j) break
    const tmp = ans[j]
    ans[j--] = ans[i]
    ans[i++] = tmp
  }

  return ans.join('')
};

function isLetters(c: string): boolean {
  return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}