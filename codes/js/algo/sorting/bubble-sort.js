// 冒泡排序
const bubbleSort = (nums) => {
  const max = nums.length - 1
  for (let i = 0; i < max; i++) {
    let flag = true // 通过 flag 来判断剩下的数组元素是否已经排序
    for (let j = 0; j < max - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
        flag = false
      }
    }
    if (flag) break
  }
}