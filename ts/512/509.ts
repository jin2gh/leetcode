// 尾递归
// function fib(n, fib1 = 1, fib2 = 1) {
//   if (n <= 0) return 0
//   if (n === 1) return fib1
//   if (n === 2) return fib2
//   return fib(n - 1, fib2, fib1 + fib2)
// };

// 动态规划
function fib (n: number): number {
  if (n < 2) return n
  let f0 = 0, f1 = 1, tmp: number
  for (let i = 2; i <= n; i++) {
    tmp = f1
    f1 += f0
    f0 = tmp
  }
  return f1
};

// 通项公式
function fib1 (n: number): number {
  const sqrt5 = Math.sqrt(5)
  const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n)
  return Math.round(fibN / sqrt5)
};
