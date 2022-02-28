function twoSum(numbers: number[], target: number): number[] {
  let l = 0, r = numbers.length - 1
  while (l < r) {
    let sum = numbers[l] + numbers[r]
    if (sum === target) return [l + 1, r + 1]
    if (sum > target) {
      r -= 1
    } else {
      l += 1
    }
  }
  return [-1, -1]
};