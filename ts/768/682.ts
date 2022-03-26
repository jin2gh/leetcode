function calPoints(ops: string[]): number {
  const scores = []
  let ans = 0
  for (const c of ops) {
    let last = scores.length - 1
    switch(c) {
      case 'C':
        scores.pop()
        break
      case 'D':
        scores.push(scores[last] * 2)
        break
      case '+':
        scores.push(scores[last] + scores[last - 1])
        break
      default:
        scores.push(+c)
        break
    }
  }
  for (const v of scores) {
    ans += v
  }
  return ans
};