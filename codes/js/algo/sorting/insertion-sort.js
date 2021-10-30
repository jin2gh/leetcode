// 插入排序
const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    let cIdx = i
    for (let j = i - 1; j >= 0; j--) {
      count += 1
      if (nums[cIdx] < nums[j]) {
        [nums[cIdx], nums[j]] = [nums[j], nums[cIdx]]
        cIdx -= 1
      } else {
        break
      }
    }
  }
}

module.exports = insertionSort