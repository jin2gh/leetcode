// 等差数列求和
function totalMoney(n: number): number {
  const c = Math.floor(n / 7)
  const d = n % 7
  const week1 = (1 + 7) * 7 / 2
  const week_c = week1 + 7 * (c - 1)
  let sum = gs(week1, week_c, c)
  if (d) {
    sum += gs(c + 1, c + d, d)
  }
  return sum
};

function gs(n1: number, n2: number, n: number): number {
  return (n1 + n2) * n / 2
}