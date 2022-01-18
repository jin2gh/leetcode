// 桶排序
function findMinDifference(timePoints: string[]): number {
  const maxCount = 24 * 60
  const len = timePoints.length
  if (len > maxCount) return 0
  const buckets: number[][] = []
  for (let i = 0; i < len; i++) {
    const time = timePoints[i]
    const idx = Number(time[0] + time[1])
    const idx1 = Number(time[3] + time[4])
    if (!buckets[idx]) {
      buckets[idx] = []
    }
    if (buckets[idx][idx1]) return 0
    buckets[idx][idx1] = 1
  }
  const l1 = buckets.length
  let min = maxCount, prev = [], first = []
  for (let i = 0; i < l1; i++) {
    const l2 = buckets[i]?.length || 0
    for (let j = 0; j < l2; j++) {
      if (buckets[i][j]) {
        if (prev.length) {
          min = Math.min(min, computeDiff([i, j], prev))
        } else {
          first = [i, j]
        }
        prev = [i, j]
      }
    }
  }
  const last = computeDiff(first, prev) + maxCount
  min = Math.min(min, last)
  return min
};

function computeDiff (next: number[], prev: number[]): number {
  return ( next[0] - prev[0]) * 60 + next[1] - prev[1]
}