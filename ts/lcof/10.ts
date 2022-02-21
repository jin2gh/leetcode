/**
 * 10-I
 */

export function fib(n: number): number {
  if (n < 2) return n
  const M: number = 1000000007
  let s1: number = 0, s2: number = 1, temp: number
  for (let i = 2; i <= n; i++) {
    temp = s2
    s2 = (s1 + s2) % M
    s1 = temp
  }
  return s2
}


/**
 * 10-II
 */

function numWays(n: number): number {
  let f1 = 1, f2 = 1, tmp
  const MOD = 1000000007
  for (let i = 1; i < n; i++) {
    tmp = f2
    f2 = (f1 + f2) % MOD
    f1 = tmp
  }
  return f2
};