function eraseOverlapIntervals(intervals: number[][]): number {
  const len = intervals.length
  if (len < 2) return 0
  intervals.sort((a, b) => a[1] - b[1])
  let right = intervals[0][1]
  let count = 1
  for (let i = 1; i < len; i++) {
    if (intervals[i][0] >= right) {
      count += 1
      right = intervals[i][1]
    }
  }
  return len - count
};