import { QuadTreeNode } from '../class'

function construct(grid: number[][]): QuadTreeNode | null {
  const dfs = (x: number, y: number, n: number): QuadTreeNode => {
    let flag = true
    for (let i = x; i < x + n; ++i) {
      for (let j = y; j < y + n; ++j) {
        if (grid[i][j] !== grid[x][y]) {
          flag = false
          break
        }
      }
      if (!flag) break
    }
    if (flag) return new QuadTreeNode(grid[x][y] === 1, true)
    const node = new QuadTreeNode(true, false)
    n >>= 1
    node.topLeft = dfs(x, y, n)
    node.topRight = dfs(x, y + n, n)
    node.bottomLeft = dfs(x + n, y, n)
    node.bottomRight = dfs(x + n, y + n, n)
    return node
  }
  return dfs(0, 0, grid.length)
};