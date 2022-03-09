// 循环位运算 &
function hammingWeight(n: number): number {
  let ans = 0
  for (let i = 0; i < 32; i++) {
    if (n & (1 << i)) ans += 1
  }
  return ans
};

// 位运算优化
function hammingWeight1(n: number): number {
  let ans = 0
  while (n) {
    n &= n - 1
    ans += 1
  }
  return ans
};