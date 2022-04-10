function maximumProduct(nums: number[]): number {
  let max1, max2, max3, min1, min2
  for (let n of nums) {
    if (max1 === undefined || n >= max1) {
      max3 = max2
      max2 = max1
      max1 = n
    } else if (max2 === undefined || n >= max2) {
      max3 = max2
      max2 = n
    } else if (max3 === undefined || n >= max3) {
      max3 = n
    }

    if (min1 === undefined || n < min1) {
      min2 = min1
      min1 = n
    } else if (min2 === undefined || n < min2) {
      min2 = n
    }
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2)
};