// 二分 + 递归
function myPow(x: number, n: number): number {
  const pow = (x: number, n: number): number => {
    if (n === 0) return 1
    let half = pow(x, n >>> 1)
    if (n % 2) return half * half * x
    return half * half
  }
  if (n >= 0) return pow(x, n)
  return 1 / pow(x, -n)
};

// 二分 + 迭代
function myPow1(x: number, n: number): number {
  const pow = (x: number, n: number): number => {
    let ans = 1
    while (n > 0) {
      if (n & 1) ans *= x
      x *= x
      n >>= 1
    }
    return ans
  }
  if (n >= 0) return pow(x, n)
  return 1 / pow(x, -n)
};