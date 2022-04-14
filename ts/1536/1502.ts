// 排序
function canMakeArithmeticProgression(arr: number[]): boolean {
  const n = arr.length
  if (n === 2) return true
  arr.sort((a, b) => a - b)
  for (let i = 1; i < n - 1; ++i) {
    if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) return false
  }
  return true
};

// 统计数组
function canMakeArithmeticProgression1(arr: number[]): boolean {
  const n = arr.length
  if (n === 2) return true
  const ap = new Array(n)
  let max = arr[0], min = arr[0], d
  for (let i = 1; i < n; ++i) {
    if (arr[i] > max) max = arr[i]
    else if (arr[i] < min) min = arr[i]
  }
  d = (max - min) / (n - 1)
  if (d === 0) return true
  for (let i = 0; i < n; ++i) {
    const idx = (arr[i] - min) / d
    if (ap[idx] != undefined || idx % 1) return false
    ap[idx] = arr[i]
  }

  return true
};