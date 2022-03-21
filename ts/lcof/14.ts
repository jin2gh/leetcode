/**
 * 14-II
 */
function cuttingRope(n: number): number {
  if (n < 4) return n - 1
  const MOD = 1000000007
  let ans = 1
  while (n > 4) {
    ans *= 3
    ans %= MOD
    n -= 3
  }
  return ans * n % MOD
};