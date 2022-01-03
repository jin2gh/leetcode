// backspace-string-compare
/**
 * 用栈重构字符串
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
  return operate(s) === operate(t)
};

function operate(str) {
  const s = []
  for (const val of str) {
    if (val !== '#') {
      s.push(val)
    } else if (s) {
      s.pop()
    }
  }
  return s.join('')
}