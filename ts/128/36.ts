// 哈希表
function isValidSudoku(board: string[][]): boolean {
  const rows: number[][] = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const cols: number[][] = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const boxes: number[][][] = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const s = board[i][j]
      if (s !== '.') {
        let n = +s - 1
        rows[i][n] += 1
        cols[j][n] += 1
        let bi = Math.floor(i / 3), bj = Math.floor(j / 3)
        boxes[bi][bj][n] += 1
        if (rows[i][n] > 1 || cols[j][n] > 1 || boxes[bi][bj][n] > 1) return false
      }
    }
  }

  return true
}