// 模拟
function addDigits(num: number): number {
  while (num >= 10) {
    let n = 0
    while (num > 0) {
      n += num % 10
      num = Math.floor(num / 10)
    }
    num = n
  }
  return num
};

// 数学
function addDigits1(num: number): number {
  if (num < 10) return num
  return num % 9 || 9
};