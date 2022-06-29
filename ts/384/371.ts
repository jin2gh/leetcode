function getSum(a: number, b: number): number {
  if (!a || !b) return b || a
  while (b) {
    const carry = (a & b) << 1
    a ^= b
    b = carry
  }
  return a
};

function getSum1(a: number, b: number): number {
  if (!a || !b) return b || a
  return getSum(a ^ b, (a & b) << 1)
};