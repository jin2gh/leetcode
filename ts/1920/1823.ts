// 数学公式 1
function findTheWinner(n: number, k: number): number {
  if (k === 1) return n
  let ans = 0
  for (let i = 2; i <= n; i++) {
    ans = (ans + k) % i
  }

  return ans + 1
};

// 从 0 开始版本
// function findTheWinner(n: number, k: number): number {
//   let ans = 0
//   for (let i = 2; i <= n; i++) {
//     ans = (ans + k) % i
//   }
//   return ans
// };

// 数学公式 2
function findTheWinner1(n: number, k: number): number {
  if (k === 1) return n
  let ans = 0, i = 2
  while (i <= n) {
    if (ans + k >= i) {
      ans = (ans + k) % i
      i += 1
      continue
    }
    const s = Math.floor((i - 1 - ans - 1) / (k - 1))
    if (i + s > n) {
      ans += (n - (i - 1)) * k
      break
    }
    i += s
    ans += s * k
  }

  return ans + 1
};