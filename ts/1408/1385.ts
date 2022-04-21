// 暴力枚举
function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  const n = arr2.length
  let sum = 0
  for (const v1 of arr1) {
    let cnt = 0
    for (const v2 of arr2) {
      if (Math.abs(v1 - v2) > d) cnt += 1
    }
    if (cnt === n) sum += 1
  }
  return sum
};

// 二分查找
function findTheDistanceValue1(arr1: number[], arr2: number[], d: number): number {
  arr2.sort((a, b) => a - b)

  const bs = (arr: number[], min: number, max: number): boolean => {
    let l = 0, r = arr2.length - 1, m = 0
    if (arr[r] <= max && arr[l] >= min) return true
    while (l <= r) {
      m = l + ((r - l) >> 1)
      if (arr[m] <= max && arr[m] >= min) return true
      if (arr[m] > max) r = m - 1
      else l = m + 1
    }
    return false
  }

  let cnt = 0
  for (const v of arr1) {
    const flag = bs(arr2, v - d, v + d)
    if (!flag) cnt += 1
  }
  return cnt
};