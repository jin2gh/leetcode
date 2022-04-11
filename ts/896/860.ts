function lemonadeChange(bills: number[]): boolean {
  let cnt5 = 0, cnt10 = 0
  for (let v of bills) {
    if (v === 5) cnt5 += 1
    else if (v === 10) {
      if (cnt5 === 0) return false
      cnt5 -= 1
      cnt10 += 1
    }
    else {
      if (cnt5 === 0 || (cnt10 === 0 && cnt5 < 3)) return false
      if (cnt10 && cnt5) {
        cnt10 -= 1
        cnt5 -= 1
      } else {
        cnt5 -= 3
      }
    }
  }
  return true
};