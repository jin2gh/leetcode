function minTimeToVisitAllPoints(points: number[][]): number {
  const ri = points.length - 1
  let cnt = 0
  for (let i = 0; i < ri; ++i) {
    cnt += Math.max(Math.abs(points[i + 1][0] - points[i][0]), Math.abs(points[i + 1][1] - points[i][1]))
  }
  return cnt;
};