function findEvenNumbers(digits: number[]): number[] {
  const res: number[] = [], nums = new Array(10).fill(0)
  for (const v of digits) {
    nums[v] += 1
  }
  if (nums[0] === digits.length) return res
  let hasEven = false
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i]) {
      hasEven = true
      break
    }
  }
  if (hasEven) {
    for (let i = 100; i < 1000; i += 2) {
      const temps = new Array(10).fill(0)
      let tmp = i, valid = true
      while (tmp) {
        let n = tmp % 10
        temps[n] += 1
        if (temps[n] > nums[n]) {
          valid = false
          break
        }
        tmp = Math.floor(tmp / 10)
      }
      if (valid) res.push(i)
    }
  }
  return res
};