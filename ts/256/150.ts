function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  for (const v of tokens) {
    const last = stack.length - 1
    switch(v) {
      case '+':
        stack[last - 1] += stack[last]
        stack.pop()
        break
      case '-':
        stack[last - 1] -= stack[last]
        stack.pop()
        break
      case '*':
        stack[last - 1] *= stack[last]
        stack.pop()
        break
      case '/':
        const n = stack[last - 1] / stack[last]
        stack[last - 1] = n > 0 ? Math.floor(n) : Math.ceil(n)
        stack.pop()
        break
      default:
        stack.push(+v)
        break
    }
  }
  return stack.pop()
};