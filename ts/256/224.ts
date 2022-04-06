function calculate(s: string): number {
  return evalRPN(infixToSuffix(s))
};

// 中缀表达式转后缀表达式，题目已说明 s 是有效的表达式
function infixToSuffix(s) {
  const signStack = []
  const tokens = []
  const weights = {
    '(': 1,
    ')': 1,
    '+': 2,
    '-': 2,
  }
  let prev = '', temp = ''
  let i = 0
  while (i < s.length) {
    if (s[i] !== ' ') {
      if (weights[s[i]]) {
        if (temp) {
          tokens.push(temp)
          temp = ''
        }
        switch(s[i]) {
          case '(':
            signStack.push(s[i])
            break
          case ')':
            for (let j = signStack.length - 1; j >= 0; j--) {
              const last = signStack.pop()
              if (last === '(') break
              tokens.push(last)
            }
            break
          default:
            if (s[i] === '-' && (!prev || prev === '(')) {
              tokens.push('0')
            }
            if (signStack.length) {
              for (let j = signStack.length - 1; j >= 0; j--) {
                if (weights[s[i]] <= weights[signStack[j]]) {
                  tokens.push(signStack.pop())
                  continue
                }
                break
              }
            }
            signStack.push(s[i])
            break
        }
      }
      else {
        temp += s[i]
      }
      prev = s[i]
    }
    i += 1
  }
  if (temp) tokens.push(temp)
  if (signStack.length) tokens.push(signStack[0])
  return tokens
}

function evalRPN(tokens) {
  const stack = []
  for (const val of tokens) {
    switch(val) {
      case '+':
      case '-':
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
  }
  stack.pop()
}