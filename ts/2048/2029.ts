function stoneGameIX(stones: number[]): boolean {
  if (stones.length > 1) {
    let c0 = 0, c1 = 0, c2 = 0
    for (const v of stones) {
      let m = v % 3
      if (m === 1) {
        c1 += 1
      } else if (m === 2) {
        c2 += 1
      } else {
        c0 += 1
      }
    }
    if (c0 % 2) {
      return c1 - c2 > 2 || c2 - c1 > 2
    }
    return c1 >= 1 && c2 >= 1
  }
  return false
};