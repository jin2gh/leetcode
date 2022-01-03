function fib(n: number): number {
  if (n < 2) return n
  const M:number = 1000000007
  let s1: number = 0, s2: number = 1, temp: number
  for (let i = 2; i <= n; i++) {
    temp = s2
    s2 = (s1 + s2) % M
    s1 = temp
  }
  return s2
}