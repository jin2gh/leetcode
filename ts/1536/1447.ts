function simplifiedFractions(n: number): string[] {
  const ans: string[] = []
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (gcd(i, j) === 1) {
        ans.push(`${i}/${j}`)
      }
    }
  }
  return ans
};

// 求最大公约数
function gcd(a: number, b: number): number {
  if (a === 0) return b
  if (b === 0) return a
  return gcd(b, a % b)
}