function fraction(cont: number[]): number[] {
  let i: number = cont.length - 1
  let n: number = 1, m: number = cont[i--]
  while (i >= 0) {
    let tmp = cont[i] * m + n
    n = m
    m = tmp
    i -= 1
  }
  return [m, n]
}