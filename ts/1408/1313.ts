function decompressRLElist(nums: number[]): number[] {
  const len = nums.length, ans: number[] = []
  for (let i = 0; i < len; i += 2) {
    for (let j = 0; j < nums[i]; ++j) {
      ans.push(nums[i + 1])
    }
  }
  return ans
};