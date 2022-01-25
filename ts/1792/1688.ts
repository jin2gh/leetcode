// 模拟
function numberOfMatches(n: number): number {
  let sum = 0
  while (n > 1) {
    n /= 2
    sum += Math.floor(n)
    n = Math.ceil(n)
  }
  return sum
};

// 数学
function numberOfMatches1(n: number): number {
  return n - 1
};