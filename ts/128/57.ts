function insert(intervals: number[][], newInterval: number[]): number[][] {
  const ans: number[][] = []
  let inserted = false, x = newInterval[0], y = newInterval[1]
  for (const itv of intervals) {
    if (itv[0] > y) {
      if (!inserted) {
        ans.push([x, y])
        inserted = true
      }
      ans.push(itv)
    } else if (itv[1] < x) {
      ans.push(itv)
    } else {
      x = Math.min(itv[0], x)
      y = Math.max(itv[1], y)
    }
  }
  if (!inserted) ans.push([x, y])
  return ans
};