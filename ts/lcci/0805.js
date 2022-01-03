const halfSum = (a, b) => {
  if (a === 1) {
    return b
  }
  let half = halfSum(a >> 1, b)
  if (a & 1) {
    return half + half + b
  } else {
    return half + half
  }
}

/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
const multiply = function(A, B) { // A < B
  if (A > B) {
    let temp = A
    A = B
    B = temp
  }
  if (!A) {
    return 0
  }
  return halfSum(A, B)
};