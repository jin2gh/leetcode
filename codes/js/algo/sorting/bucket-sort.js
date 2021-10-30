const insertionSort = require('./insertion-sort')

/**
 * 桶排序
 * @param {*} nums
 * @param {*} bucketSize
 * @returns
 */
const bucketSort = (nums, bucketSize = 5) => {
  // 1. 获取最大值和最小值
  let [max, min] = [nums[0], nums[0]]
  for (const val of nums) {
    max = val > max ? val : max
    min = val < min ? val : min
  }

  // 2. 桶的初始化
  const bucketCount = Math.floor((max - min) / bucketSize) + 1
  const buckets = new Array(bucketCount)
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }

  // 3. 利用映射函数将数据分配到各个桶中
  for (const val of nums) {
    buckets[Math.floor((val - min) / bucketSize)].push(val)
  }

  // 4. 对各个桶进行排序
  const sorted = []
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]) // 对每个桶进行排序，这里使用了插入排序
    for (let j = 0; j < buckets[i].length; j++) {
      sorted.push(buckets[i][j])
    }
  }

  return sorted
}

const arrs = [89, 77, 24, 91, 1, 18, 53, 45]
const res = bucketSort(arrs)
console.log(res)