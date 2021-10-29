// 选择排序
const selectionSort = nums => {
  const l = nums.length
  for (let i = 0; i < l - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j < l; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j
      }
    }

    [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]]
  }
}