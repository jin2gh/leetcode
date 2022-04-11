function threeConsecutiveOdds(arr: number[]): boolean {
  if (arr.length < 3) return false
  let cnt = 0
  for (const v of arr) {
    if (v % 2 === 1) cnt += 1
    else  cnt = 0
    if (cnt >= 3) return true
  }
  return false
};