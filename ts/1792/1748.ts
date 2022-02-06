function sumOfUnique(nums: number[]): number {
  const ht: number[] = new Array(101).fill(0)
  let sum = 0
  for (const v of nums) {
    ht[v] += 1
  }
  for (let i = 1; i <= 100; i++) {
    if (ht[i] === 1) sum += i
  }
  return sum
};