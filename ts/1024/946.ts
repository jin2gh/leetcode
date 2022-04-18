function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const n = pushed.length, stack = []
  for (let i = 0, j = 0; i < n; ++i) {
    stack.push(pushed[i])
    while (stack.length > 0 && j < n && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j += 1
    }
  }
  return stack.length === 0
};