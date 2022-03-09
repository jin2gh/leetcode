// 位运算循环颠倒
function reverseBits(n: number): number {
  const bits = 31
  let ans = 0
  for (let i = 0; i <= bits && n > 0; i++) {
    ans |= (n & 1) << (bits - i)
    n >>>= 1
  }
  return ans >>> 0
};