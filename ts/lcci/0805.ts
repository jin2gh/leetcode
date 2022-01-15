function multiply(A: number, B: number): number {
  if (A > B) {
    let temp = A
    A = B
    B = temp
  }
  if (!A) return 0
  return halfSum(A, B)
}

// 对半相加
function halfSum(a, b): number {
  if (a === 1) return b
  const half = halfSum(a >> 1, b)
  if (a & 1) {
    return half + half + b
  }
  return half + half
}