function peakIndexInMountainArray(arr: number[]): number {
  let l = 1, r = arr.length - 2, ans = 0
  while (l <= r) {
    let m = l + ((r - l) >> 1)
    if (arr[m - 1] < arr[m]) {
      l = m + 1
      ans = m
    } else {
      r = m - 1
      ans = m - 1
    }
  }
  return ans
};