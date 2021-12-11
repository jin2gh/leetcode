/**
 * 哈希表
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
  let sum = 0, ht = {}
  for (const val of stones) {
    if (ht[val]) {
      ht[val] += 1
    } else {
      ht[val] = 1
    }
  }
  for (const val of jewels) {
    if (ht[val]) {
      sum += ht[val]
    }
  }
  return sum
}