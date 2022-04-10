function heightChecker(heights: number[]): number {
  const n = 101
  const bucket: number[] = new Array(n).fill(0)
  let cnt = 0
  for (const h of heights) {
    bucket[h] += 1
  }
  for (let i = 1, j = 0; i < n; ++i) {
    while (bucket[i] > 0) {
      if (i !== heights[j]) cnt += 1
      j += 1
      bucket[i] -= 1
    }
  }
  return cnt
};