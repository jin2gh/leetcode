function canBeEqual(target: number[], arr: number[]): boolean {
  const ht = {}
  for (const v of target) {
    if (ht[v]) ht[v] += 1
    else ht[v] = 1
  }
  for (const v of arr) {
    if (!ht[v]) return false
    ht[v] -= 1
  }
  return true
};