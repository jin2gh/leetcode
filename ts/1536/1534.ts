function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  const n = arr.length
  let cnt = 0
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (Math.abs(arr[i] - arr[j]) <= a) {
        for (let k = j + 1; k < n; ++k) {
          if (
            Math.abs(arr[j] - arr[k]) <= b &&
            Math.abs(arr[i] - arr[k]) <= c
          ) cnt += 1
        }
      }
    }
  }
  return cnt
};