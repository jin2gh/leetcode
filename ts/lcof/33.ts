function verifyPostorder(postorder: number[]): boolean {
  const stack = [], len = postorder.length
  let root = +Infinity
  for (let i = len - 1; i >= 0; i--) {
    if (postorder[i] > root) return false
    while (stack.length && stack[stack.length - 1] > postorder[i]) {
      root = stack.pop()
    }
    stack.push(postorder[i])
  }
  return true
};