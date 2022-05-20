function findRightInterval(intervals: number[][]): number[] {
  const n = intervals.length,
        ht = new Map<number, number>(),
        ans: number[] = new Array(n).fill(-1)
  const binary_search = (intervals: number[][], st: number, target: number): number => {
    let l = st, r = intervals.length - 1, m = 0
    if (intervals[r][0] < target) return -1
    while (l < r) {
      m = l + ((r - l) >> 1)
      if (intervals[m][0] >= target) r = m
      else l = m + 1
    }
    return r
  }
  for (let i = 0; i < n; ++i) {
    ht.set(intervals[i][0], i)
  }
  intervals.sort((a, b): number => a[0] - b[0])
  for (let i = 0; i < n; ++i) {
    const idx = binary_search(intervals, i, intervals[i][1])
    if (idx >= 0) ans[ht.get(intervals[i][0])] = ht.get(intervals[idx][0])
  }
  return ans
};