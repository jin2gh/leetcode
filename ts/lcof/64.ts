function sumNums(n: number): number {
  const getSum = (n: number, sum: number): number => {
    if (n === 0) return sum
    return getSum(n - 1, sum + n)
  }
  return getSum(n, 0)
};