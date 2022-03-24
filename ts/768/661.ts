function imageSmoother(img: number[][]): number[][] {
  const m = img.length, n = img[0].length
  const dirs = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]
  const ans: number[][] = []
  for (let i = 0; i < m; i++) {
    ans[i] = []
    for (let j = 0; j < n; j++) {
      let sum = img[i][j], cnt = 1
      for (const d of dirs) {
        const x = i + d[0], y = j + d[1]
        if (x < 0 || x === m || y < 0 || y === n) continue
        cnt += 1
        sum += img[x][y]
      }
      ans[i][j] = Math.floor(sum / cnt)
    }
  }
  return ans
};