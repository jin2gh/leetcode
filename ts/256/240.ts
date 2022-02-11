// 二分查找
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length, n = matrix[0].length
  const bs = (nums: number[], target: number): boolean => {
    let low = 0, high = nums.length - 1
    while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low
      if (nums[mid] === target) return true
      if (nums[mid] > target) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return false
  }
  for (let i = 0; i < m; i++) {
    if (bs(matrix[i], target)) return true
  }
  return false
};

// Z 字形查找
function searchMatrix1(matrix: number[][], target: number): boolean {
  const m = matrix.length, n = matrix[0].length
  let i = 0, j = n - 1
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) return true
    matrix[i][j] > target ? j -= 1 : i += 1
  }
  return false
};