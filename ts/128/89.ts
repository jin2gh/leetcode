// 反射排列
function grayCode(n: number): number[] {
  const res: number[] = [0]
  for (let i = 1; i <= n; i++) {
    const idx: number = res.length - 1
    for (let j = idx; j >= 0; j--) {
      res.push(1 << (i - 1) | res[j]) // 1 << (i - 1) 获取对应位数的二进制
    }
  }
  return res
}