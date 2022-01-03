/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  let str=''
  for(let i=n;i<s.length;++i) {
    str+=s[i]
  }
  for(let i=0;i<n;++i) {
    str+=s[i]
  }
  return str
}