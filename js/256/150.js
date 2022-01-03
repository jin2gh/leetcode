// evaluate-reverse-polish-notation
/**
 * 栈
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = []
  for (const val of tokens) {
    switch(val) {
      case '+':
      case '-':
      case '*':
      case '/':
        compute(stack, val)
        break
      default:
        stack.push(Number(val))
        break
    }
  }
  return stack[0]
};

function compute(stack, type) {
  const last = stack.length - 1
  switch(type) {
    case '+':
      stack[last - 1] += stack[last]
      break
    case '-':
      stack[last - 1] -= stack[last]
      break
    case '*':
      stack[last - 1] *= stack[last]
      break
    case '/':
      stack[last - 1] = parseInt(stack[last - 1] / stack[last], 10)
      break
  }
  stack.pop()
}

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])