/**
 * 辅助栈
 * @param {number[]} postorder
 * @return {boolean}
 */
const verifyPostorder = function(postorder) {
  const stack = []
  let root = Infinity
  for(let i = postorder.length; i >= 0; i--) {
    if(postorder[i] > root) return false
    while(stack.length && stack[stack.length - 1] > postorder[i]) {
      root = stack.pop()
    }
    stack.push(postorder[i])
  }
  return true
}