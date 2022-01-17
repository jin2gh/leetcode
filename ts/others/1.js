const step = (a, b) => `${a}-->${b}`
/**
 * 汉诺塔
 * @param {Number} n 盘子个数
 * @param {String | Number} a 当前塔
 * @param {String | Number} b 暂存塔
 * @param {String | Number} c 目标塔
 * @return {Array} 移动步骤
 */
function hanoi (n, a, b, c, res = []) {
  if (n === 1) {
    res.push(step(a, c))
  } else {
    hanoi(n - 1, a, c, b, res)
    hanoi(1, a, b, c, res)
    hanoi(n - 1, b, a, c, res)
  }
  return res
}