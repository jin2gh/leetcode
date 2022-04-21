function isPerfectSquare(num: number): boolean {
  let l = 1,
      r = num > 4 ? num >> 1 : num,
      m = 0,
      square = 0
  while (l <= r) {
    m = l + ((r - l) >> 1)
    square = m * m
    if (square === num) return true
    if (square < num) l = m + 1
    else r = m - 1
  }
  return false
};