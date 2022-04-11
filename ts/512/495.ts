function findPoisonedDuration(timeSeries: number[], duration: number): number {
  const len = timeSeries.length
  let cnt = 0
  for (let i = 0; i < len; ++i) {
    if (i === 0) {
      cnt += duration
      continue
    }
    cnt += Math.min(timeSeries[i] - timeSeries[i - 1], duration)
  }
  return cnt
};