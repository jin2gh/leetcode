export function swap(nums: number[], l: number, r: number): void {
  const temp = nums[l]
  nums[l] = nums[r]
  nums[r] = temp
};