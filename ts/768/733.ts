// DFS
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  if (image[sr][sc] === newColor) return image
  const m = image.length, n = image[0].length
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  const target = image[sr][sc]
  const dfs = (x: number, y: number): void => {
    image[x][y] = newColor
    for (const d of dirs) {
      const nx = x + d[0], ny = y + d[1]
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && image[nx][ny] === target) {
        dfs(nx, ny)
      }
    }
  }
  dfs(sr, sc)
  return image
};