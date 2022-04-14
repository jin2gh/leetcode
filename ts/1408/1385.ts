function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  const n = arr2.length
  let sum = 0
  for (const v1 of arr1) {
    let cnt = 0
    for (const v2 of arr2) {
      if (Math.abs(v1 - v2) > d) cnt += 1
      if (cnt === n) sum += 1
    }
  }
  return sum
};