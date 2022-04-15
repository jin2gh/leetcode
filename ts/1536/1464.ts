function maxProduct(nums: number[]): number {
  const n = nums.length
  let a, b
  if (nums[0] > nums[1]) {
    a = nums[0]
    b = nums[1]
  } else {
    a = nums[1]
    b = nums[0]
  }
  for (let i = 2; i < n; ++i) {
    if (nums[i] > a) {
      b = a
      a = nums[i]
    }
    else if (nums[i] > b) b = nums[i]
  }
  return (a - 1) * (b - 1)
};