import { hammingWeightV1 as hammingWeight } from '../256/191'

function countPrimeSetBits(left: number, right: number): number {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
  const ht = new Array(32).fill(0)
  primes.forEach(v => ht[v] = 1)
  let cnt = 0
  for (let i = left; i <= right; i++) {
    if (ht[hammingWeight(i)] > 0) cnt += 1
  }
  return cnt
};
