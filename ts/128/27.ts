function removeElement(nums: number[], val: number): number {
  let l = 0
  for (const v of nums) {
    if (v !== val) {
      nums[l] = v
      l += 1
    }
  }
  return l
};