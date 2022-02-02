// 栈
function isValid(s: string): boolean {
  if (s.length < 2) return false
  const stack: string[] = []
  const pushHT = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (const v of s) {
    if (pushHT[v]) {
      stack.push(pushHT[v])
      continue
    }
    if (stack[stack.length - 1] === v) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0
};