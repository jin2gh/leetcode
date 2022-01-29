function highestPeak(isWater: number[][]): number[][] {
  const m = isWater.length, n = isWater[0].length
  const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]], MIN = -1
  const height: number[][] = []
  let queue: number[][] = []
  for (let i = 0; i < m; i++) {
    height[i] = []
    for (let j = 0; j < n; j++) {
      if (isWater[i][j]) {
        height[i][j] = 0
        queue.push([i, j])
      } else {
        height[i][j] = MIN
      }
    }
  }

  while (queue.length) {
    const next: number[][] = []
    for (const point of queue) {
      const x = point[0], y = point[1]
      for (const d of DIRS) {
        const x1 = x + d[0], y1 = y + d[1]
        if (x1 >= 0 && x1 < m && y1 >= 0 && y1 < n && height[x1][y1] === MIN) {
          height[x1][y1] = height[x][y] + 1
          next.push([x1, y1])
        }
      }
    }
    queue = next
  }

  return height
};