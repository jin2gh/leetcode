/**
 * 栈
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (s.length < 2) return false
  const pushHT = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const stack = []
  let l = 0
  for (const val of s) {
    if (pushHT[val]) {
      stack[l] = pushHT[val]
      l += 1
      continue
    }
    if (l && stack[l - 1] === val) {
      l -= 1
    } else {
      return false
    }
  }

  return l === 0
};