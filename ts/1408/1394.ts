function findLucky(arr: number[]): number {
  const map = new Map<number, number>()
  let ans = -1
  for (const v of arr) {
    map.set(v, (map.get(v) || 0) + 1)
  }

  for (const [k, v] of map.entries()) {
    if (k === v) ans = k > ans ? k : ans
  }

  return ans
};