/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
function guessNumber(n: number): number {
  let l = 0, r = n
  while (l < r) {
    let m = l + ((r - l) >> 1)
    const ans = guess(m)
    if (ans === 0) return m
    else if (ans === 1) l = m + 1
    else r = m
  }
  return l
};