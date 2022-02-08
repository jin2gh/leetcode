function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => (a - b))
  const ans: number[][] = [], len = nums.length
  let first, i = 0
  while (i < len - 2) {
    if (first !== nums[i]) {
      let second, third,
          j = i + 1,
          k = len - 1
      first = nums[i]
      while (j < k) {
        if (nums[i] + nums[j] > -nums[k] || third === nums[k]) {
          k -= 1
        } else if (nums[i] + nums[j] < -nums[k] || second === nums[j]) {
          j += 1
        } else if (nums[i] + nums[j] === -nums[k]) {
          second = nums[j]
          third = nums[k]
          ans.push([first, second, third])
        }
      }
    }
    i += 1
  }

  return ans
};