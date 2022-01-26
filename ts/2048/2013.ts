// 哈希表
class DetectSquares {
  ht = {}

  add(point: number[]): void {
    const x = point[0], y = point[1]
    if (!this.ht[x]) {
      this.ht[x] = {}
    }
    if (this.ht[x][y]) {
      this.ht[x][y] += 1
    } else {
      this.ht[x][y] = 1
    }
  }

  count(point: number[]): number {
    const x = point[0], y = point[1]
    let sum = 0
    if (this.ht[x]) {
      let d: number, rows = Object.keys(this.ht[x])
      for (const v of rows) {
        if (y !== Number(v)) {
          d = y - Number(v)
          let x1 = x + d, x2 = x - d
          if (this.ht[x1] && this.ht[x1][y] && this.ht[x1][v]) {
            sum += (this.ht[x1][y] * this.ht[x1][v] * this.ht[x][v])
          }
          if (this.ht[x2] && this.ht[x2][y] && this.ht[x2][v]) {
            sum += (this.ht[x2][y] * this.ht[x2][v] * this.ht[x][v])
          }
        }
      }
    }
    return sum
  }
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */