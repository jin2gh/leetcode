function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const ans: number[][] = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    const idx = ans.length - 1
    if (ans[idx][1] >= intervals[i][0]) {
      if (ans[idx][1] < intervals[i][1]) ans[idx][1] = intervals[i][1]
    } else {
      ans.push(intervals[i])
    }
  }
  return ans
};