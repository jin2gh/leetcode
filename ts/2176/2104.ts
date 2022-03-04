function subArrayRanges(nums: number[]): number {
  const maxi = nums.length - 1
  let sum = 0
  for (let i = 0; i < maxi; i++) {
    let max = nums[i], min = nums[i]
    for (let j = i + 1; j <= maxi; j++) {
      if (nums[j] > max) max = nums[j]
      if (nums[j] < min) min = nums[j]
      sum += max - min
    }
  }
  return sum
};