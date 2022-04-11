function findKthPositive(arr: number[], k: number): number {
  if (arr[0] > k) return k
  let l = 0, r = arr.length - 1, m = 0
  while (l <= r) {
    m = l + ((r - l) >> 1)
    const miss = arr[m] - m - 1
    if (miss >= k) r = m - 1
    else l = m + 1
  }
  return k + l // arr[l - 1] + k - (arr[l - 1] - (l - 1)  - 1)
};