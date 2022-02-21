function pushDominoes(dominoes: string): string {
  const ans = [...dominoes], len = ans.length
  let left = 'L', i = 0
  while (i < len) {
    let j = i
    while (j < len && ans[j] === '.') j += 1
    const right = j < len ? ans[j] : 'R'
    if (left === right) {
      while (i < j) {
        ans[i++] = left
      }
    } else if (left === 'R' && right === 'L') {
      let k = j - 1
      while (i < k) {
        ans[i++] = left
        ans[k--] = right
      }
    }
    i = j + 1
    left = right
  }
  return ans.join('')
};