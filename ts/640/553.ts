function optimalDivision(nums: number[]): string {
  const len = nums.length, numerator = nums[0]
  if (len === 1) return `${numerator}`
  if (len === 2) return `${numerator}/${nums[1]}`
  let denominator = `${nums[1]}`
  for (let i = 2; i < len; i++) {
    denominator += `/${nums[i]}`
  }
  return `${numerator}/(${denominator})`
};