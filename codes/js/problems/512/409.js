/**
 * 哈希表
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  if (s.length < 2) return s.length
  let len = 0, odd = false
  const ht = {}
  for (const val of s) {
    if (ht[val]) {
      ht[val] += 1
    } else {
      ht[val] = 1
    }
  }
  Object.keys(ht).forEach(item => {
    if (ht[item] % 2) {
      len += (ht[item] - 1)
      odd = true
    } else {
      len += ht[item]
    }
  })
  return odd ? len += 1 : len
};