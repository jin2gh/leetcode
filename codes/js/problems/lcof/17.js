const tenPow = function(n, val = 1) {
  if(n) {
    return tenPow(n - 1, val * 10)
  }
  return val
}

/**
 * @param {number} n
 * @return {number[]}
 */
const printNumbers = function(n) {
  // let max = Math.pow(10, n)
  let max = tenPow(n)
  let arr = []
  for(let i = 1; i < max; i++) {
    arr.push(i)
  }
  return arr
}