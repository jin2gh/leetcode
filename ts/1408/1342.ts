function numberOfSteps(num: number): number {
  let count = 0
  while (num) {
    if (num % 2) {
      if (num === 1) {
        num -= 1
      } else {
        num = (num - 1) >> 1
        count += 1
      }
    } else {
      num >>= 1
    }
    count += 1
  }
  return count
};