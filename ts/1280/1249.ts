function minRemoveToMakeValid(s: string): string {
  const stack = [], len = s.length
  let ans: string[] = []
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      if (stack.length) stack.pop()
      else {
        ans.push('')
        continue
      }
    }
    ans.push(s[i])
  }
  for (let i = 0; i < stack.length; i++) {
    ans[stack[i]] = ''
  }

  return ans.join('')
};