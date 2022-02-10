function generateMatrix(n: number): number[][] {
  const ans: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0)),
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]],
        max = n * n
  let i = 0, j = 0, di = 0, num = 1
  while (num <= max) {
    const ni = i + dirs[di][0], nj = j + dirs[di][1]
    ans[i][j] = num
    num += 1
    if (ni < 0 || ni >= n || nj < 0 || nj >= n || ans[ni][nj]) {
      di = (di + 1) % 4
    }
    i += dirs[di][0]
    j += dirs[di][1]
  }
  return ans
};