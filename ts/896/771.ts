function numJewelsInStones(jewels: string, stones: string): number {
  let sum = 0, ht = {}
  for (const v of stones) {
    if (ht[v]) ht[v] += 1
    else ht[v] = 1
  }
  for (const v of jewels) {
    if (ht[v]) sum += ht[v]
  }
  return sum
};