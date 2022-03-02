function exist(board: string[][], word: string): boolean {
  const m = board.length, n = board[0].length, l = word.length
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]], dl = dirs.length
  const dfs = (x: number, y: number, pos: number): boolean => {
    if (board[x][y] !== word.charAt(pos)) return false
    if (pos === l - 1) return true
    const tmp = board[x][y]
    board[x][y] = '0'
    pos += 1
    let res = false
    for (let i = 0; i < dl; i++) {
      const nx = x + dirs[i][0], ny = y + dirs[i][1]
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] === word[pos]) {
        if (dfs(nx, ny, pos)) {
          res = true
          break
        }
      }
    }

    board[x][y] = tmp
    return res
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true
    }
  }

  return false
};