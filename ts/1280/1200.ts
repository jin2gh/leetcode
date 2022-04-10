function minimumAbsDifference(arr: number[]): number[][] {
  const len = arr.length
  arr.sort((a, b) => a - b)
  let min = arr[1] - arr[0], res: number[][] = [[arr[0], arr[1]]]
  for (let i = 2; i < len; ++i) {
    const diff = arr[i] - arr[i - 1]
    if (min > diff) {
      min = diff
      res = [[arr[i - 1], arr[i]]]
    } else if (min === diff) {
      res.push([arr[i - 1], arr[i]])
    }
  }
  return res
};