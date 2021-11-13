const merge = (left, right) => {
  let temp = []
  let li= 0
  let ri = 0

  // 判断2个数组中元素大小，依次插入数组
  while (left.length > li && right.length > ri) {
    if (left[li] <= right[ri]) {
      temp.push(left[li])
      li += 1
    } else {
      temp.push(right[ri])
      ri += 1
    }
  }
  // 合并 多余数组
  return temp.concat(left.slice(li)).concat(right.slice(ri))
}

/**
 * 归并排序 - Child
 * @param {*} nums
 */
const mergeSort = (nums) => {
  const l = nums.length
  if (l < 2) return nums
  // 找到中间值
  const middle = l >> 1

  const left = arr.slice(0, middle) // 分割数组
  const right = arr.slice(middle)

  // 递归 分解 合并
  return merge(mergeSort(left), mergeSort(right))
}