// 数组翻转
function rotate(nums: number[], k: number): void {
  const n = nums.length
  k %= n
  if (k === 0) return
  const reverse = (l: number, r: number): void => {
    while (l < r) {
      let tmp = nums[l]
      nums[l] = nums[r]
      nums[r] = tmp
      l += 1
      r -= 1
    }
  }
  reverse(0, n - 1)
  reverse(0, k - 1)
  reverse(k, n - 1)
};