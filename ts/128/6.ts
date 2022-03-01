// 模拟
function convert(s: string, numRows: number): string {
  const r = numRows, l = s.length
  if (r === 1 || l <= r) return s
  const c = Math.ceil(l / 2)
  const grid = new Array(r).fill(0).map(() => new Array(c))
  let x = 0, y = 0, k = 0, ans = ''
  while (k < l) {
    while (x < r && k < l) {
      grid[x++][y] = s[k++]
    }
    x -= 2
    y += 1
    while (x > 0 && k < l) {
      grid[x--][y++] = s[k++]
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j]) {
        ans += grid[i][j]
      }
    }
  }

  return ans
};

// 根据规律构造
function convert1(s: string, numRows: number): string {
  const r = numRows, l = s.length, t = 2 * r - 2
  if (r === 1 || l <= r) return s
  const ans: string[] = []
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l - i; j += t) {
      ans.push(s[i + j]) // 当前周期的第一个字符
      if (0 < i && i < r - 1 && j + t - i < l) {
        ans.push(s[j + t - i]) // 当前周期的第二个字符
      }
    }
  }

  return ans.join('')
};