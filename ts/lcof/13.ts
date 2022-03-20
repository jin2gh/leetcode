function movingCount(m: number, n: number, k: number): number {
  const visited: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0))
  const dirs = [[0, 1], [1, 0]]
  let i = 0, j = 0, queue = [[i, j]]
  let ans = 1
  visited[i][j] = 1
  while (queue.length) {
    const p = queue.shift()
    for (const d of dirs) {
      const nx = p[0] + d[0], ny = p[1] + d[1]
      if (nx === m || ny === n) continue
      if (visited[nx][ny] === 0) {
        if (getDigitsSum(nx) + getDigitsSum(ny) <= k) {
          queue.push([nx, ny])
          ans += 1
          visited[nx][ny] = 1
        } else {
          visited[nx][ny] = 2
        }
      }
    }
  }
  return ans
};

function getDigitsSum(num: number): number {
  let sum = 0
  while (num > 0) {
    sum += (num % 10)
    num = Math.floor(num / 10)
  }
  return sum
};