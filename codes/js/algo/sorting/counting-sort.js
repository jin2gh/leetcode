/**
 * 计数排序
 * @param {*} nums
 * @returns
 */
const countingSort = (nums) => {
  // 1. 获取最大值和最小值的差值
  let [max, min] = [nums[0], nums[0]]
  for (let val of nums) {
    max = val > max ? val : max
    min = val < min ? val : min
  }
  let d = max - min

  // 2. 声明数组，数组长度为最大元素 + 1（数组下标 0），并填充默认值 0
  const counts = new Array(d + 1).fill(0)

  // 3. 遍历输入数组，统计元素
  for (const val of nums) {
    counts[val - min] += 1
  }

  // 4. 统计数组变形，后面的元素等于前面的元素之和
  let sum = 0
  for (let val of counts) {
    sum += val
    val = sum
  }

  // 5. 倒序遍历原始数列，从统计数组找到正确位置，输出到结果数组
  let sorted = []
  for (let i = nums.length - 1; i >= 0; i--) {
    sorted[counts[nums[i] - min] - 1] = nums[i]
    counts[nums[i] - min] -= 1
  }
  return sorted
}