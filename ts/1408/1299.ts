function replaceElements(arr: number[]): number[] {
  const ri = arr.length - 1
  let max = arr[ri]
  arr[ri] = -1
  for (let i = ri - 1; i >= 0; --i) {
    if (arr[i] > max) {
      const tmp = arr[i]
      arr[i] = max
      max = tmp
    }
    else arr[i] = max
  }
  return arr
};