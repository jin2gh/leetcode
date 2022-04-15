function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  const n = endTime.length
  let cnt = 0
  for (let i = 0; i < n; ++i) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) cnt += 1
  }
  return cnt
};