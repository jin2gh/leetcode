function countOdds(low: number, high: number): number {
  let cnt = high - low + 1
  if (cnt % 2) {
    if (low % 2 && high % 2) cnt += 1
    else cnt -= 1
  }
  return cnt / 2
};