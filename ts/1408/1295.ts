function findNumbers(nums: number[]): number {
  return nums.map(i => i + '').filter(i => (i.length % 2 === 0)).length
};