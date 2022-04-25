// 双指针
function twoSum(numbers: number[], target: number): number[] {
  let l = 0, r = numbers.length - 1
  while (l < r) {
    let sum = numbers[l] + numbers[r]
    if (sum === target) return [l + 1, r + 1]
    if (sum > target) r -= 1
    else l += 1
  }
  return [-1, -1]
};


// 二分查找
function twoSum1(numbers: number[], target: number): number[] {
  const n = numbers.length
  for (let i = 0; i < n; ++i) {
    const tg = target - numbers[i]
    let l = i + 1, r = n - 1, m = 0
    while (l <= r) {
      m = l + ((r - l) >> 1)
      if (numbers[m] === tg) return [i + 1, m + 1]
      if (numbers[m] < tg) l = m + 1
      else r = m - 1
    }
  }
  return [-1, -1]
};