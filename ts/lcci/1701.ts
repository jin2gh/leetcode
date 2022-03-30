function add(a: number, b: number): number {
  if (!a || !b) return b || a
  return add(a ^ b, (a & b) << 1)
};

function add1(a: number, b: number): number {
  if (!a || !b) return b || a
  while (b !== 0) {
    let tmp = a
    a ^= b
    b = (tmp & b) << 1
  }

  return a
};