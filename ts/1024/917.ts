import { isLetter } from '../utils'

function reverseOnlyLetters(s: string): string {
  const ans: string[] = [...s]
  let i = 0, j = s.length - 1
  while (i < j) {
    while (i < j && !isLetter(ans[i])) {
      i += 1
    }
    while (i < j && !isLetter(ans[j])) {
      j -= 1
    }
    if (i >= j) break
    const tmp = ans[j]
    ans[j--] = ans[i]
    ans[i++] = tmp
  }

  return ans.join('')
};