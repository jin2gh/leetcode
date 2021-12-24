/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  //   return s.replace(/\s/g, '%20')
  let s1 = ''
  for(let i = 0;i < s.length; i++) {
    if (s[i] === ' ') {
      s1 += '%20'
    } else {
      s1 += s[i]
    }
  }
  return s = s1
}