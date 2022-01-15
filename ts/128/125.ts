function isPalindrome(str: string): boolean {
  let s = str.replace(/\W|_/g, '').toLowerCase()
  let l = 0;
  let r = s.length - 1
  while(l < r) {
    if(s[l]!=s[r]) return false
    l++
    r--
  }
  return true
}