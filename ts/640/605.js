/**
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
  let f = 0, i = 0
  while(i < flowerbed.length) {
    if (flowerbed[i]) {
      i += 2
    } else {
      if (
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === (flowerbed.length - 1) || flowerbed[i + 1] === 0)
      ) {
        f += 1
        flowerbed[i] = 1
      }
      if (f >= n) {
        return true
      }
      i += 1
    }
  }
  return f >= n
}