const { swap } = require('../utils')

const partitionRight = (arr, left ,right) => { // 分区操作，以最右边为基准值
  let pivot = right // 设定基准值（pivot）
  let start = left
  for (let i = left; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, start)
      start += 1
    }
  }

  swap(arr, pivot, start)
  return start
}

/**
 * 快速排序 - Child
 * @param {*} nums
 */
const quickSort = (nums, left = 0, right) => {
  const l = nums.length
  right = right || l - 1

  if (left < right) {
    let partitionIndex = partitionRight(nums, left, right)
    quickSort(nums, left, partitionIndex - 1)
    quickSort(nums, partitionIndex + 1, right)
  }
}


const nums = [580, 460, 497, 923, 441, 392, 209, 631, 248, 146]
quickSort(nums)
console.log(nums)