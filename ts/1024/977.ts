function sortedSquares(nums: number[]): number[] {
  const n = nums.length, ans: number[] = new Array(n)
  let i = 0, j = n - 1, l = j
  while (i <= j) {
    let x = nums[i] * nums[i], y = nums[j] * nums[j]
    if (x >= y) {
      ans[l] = x
      i += 1
    } else {
      ans[l] = y
      j -= 1
    }
    l -= 1
  }
  return ans
};