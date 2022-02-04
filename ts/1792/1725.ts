function countGoodRectangles(rectangles: number[][]): number {
  let count = 0, maxLen = 0
  for (const v of rectangles) {
    const r = v[0] < v[1] ? v[0] : v[1]
    if (r > maxLen) {
      maxLen = r
      count = 1
    } else if (r === maxLen) {
      count += 1
    }
  }

  return count
};