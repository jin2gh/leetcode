/**
 * 基数排序 LSD - Child
 * @param {array[number]} nums
 */
const radixSortLSDChild = (nums) => {
  // 1. 寻找最大值
  let max = nums[0]
  for (const val of nums) {
    max = max > val ? max : val
  }

  // 2. 获取最大的数，确定循环次数
  const maxDigitLen = String(max).length

  for (let i = 0; i < maxDigitLen; i++) {

    // 3. 初始化各个位数的桶
    const buckets = []
    for (const val of nums) {
      const digit = getDigit(val, i)
      if (!buckets[digit]) {
        buckets[digit] = []
      }
      buckets[digit].push(val)
    }

    let position = 0
    for (let j = 0; j < buckets.length; j++) {
      if (buckets[j]) {
        for (const elem of buckets[j]) {
          nums[position] = elem
          position += 1
        }
      }
    }
  }
}

/**
 * 获取数字从右到左相应位置上的数字
 * @param {number} num
 * @param {number} p
 * @returns
 */
function getDigit (num, p = 0) {
  const str = String(num)
  return str[str.length - 1 - p] || 0
}



const nums = [1123, 34, 45, 6, 789]
radixSortLSDBaby(nums)
console.log(nums)
