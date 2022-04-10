function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map = {}, res: number[] = []
  for (const v of arr1) {
    if (map[v]) map[v] += 1
    else map[v] = 1
  }
  for (const v of arr2) {
    while(map[v] > 0) {
      res.push(v)
      map[v] -= 1
    }
  }
  for (const key in map) {
    while(map[key]) {
      res.push(+key)
      map[key] -= 1
    }
  }
  return res
};