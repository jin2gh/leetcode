function average(salary: number[]): number {
  const max = Math.max(...salary)
  const min = Math.min(...salary)
  const len = salary.length
  let sum = 0
  for (const v of salary) {
    if (v === max || v === min) continue
    else sum += v
  }
  return sum / (len - 2)
};