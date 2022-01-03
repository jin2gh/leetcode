function canJump(nums: number[]): boolean {
  const max: number = nums.length - 1
  let rightmost: number = 0
  for (let i = 0; i <= max; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i])
      if (rightmost >= max) {
        return true
      }
    }
  }
  return false
}