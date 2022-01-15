export {} // 解决函数重载的提示

// 双指针
function isPalindrome(x: number): boolean {
  if (x < 0) return false
  const s = String(x)
  let i = 0, j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) return false
    i += 1
    j -= 1
  }
  return true
};