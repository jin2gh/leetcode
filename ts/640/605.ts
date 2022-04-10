function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const len = flowerbed.length
  let f = 0, i = 0
  while(i < len) {
    if (flowerbed[i]) i += 2
    else {
      if (
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === (len - 1) || flowerbed[i + 1] === 0)
      ) {
        f += 1
        flowerbed[i] = 1
      }
      if (f >= n) return true
      i += 1
    }
  }
  return f >= n
};