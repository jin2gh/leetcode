/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function(ops) {
  const scores = []
  let sum = 0
  for (const val of ops) {
    let last = scores.length - 1
    switch(val) {
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
        scores.push(Number(val))
        break
    }
  }
  for (const val of scores) {
    sum += val
  }
  return sum
}

const val = calPoints(["5","2","C","D","+"])
console.log(val)
const val1 = calPoints(["5","-2","4","C","D","9","+","+"])
console.log(val1)
const val2 = calPoints(["1"])
console.log(val2)
