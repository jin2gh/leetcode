function numRookCaptures(board: string[][]): number {
  const dirs = [[-1, 0], [0, 1], [1, 0], [0,  -1]], n = 8
  let rx, ry, cnt = 0
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] === 'R') {
        rx = i
        ry = j
        break
      }
    }
  }
  for (const d of dirs) {
    for (let i = 0; ; ++i) {
      let x = rx + d[0] * i, y = ry + d[1] * i
      if (x === n || y === n || x < 0 || y < 0 || board[x][y] === 'B') break
      if (board[x][y] === 'p') {
        cnt += 1
        break
      }
    }
  }

  return cnt
};