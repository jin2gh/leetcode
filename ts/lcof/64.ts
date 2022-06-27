function sumNums(n: number): number {
  let sum = 0
  const sums = (n: number): number => {
    n && sums(n - 1)
    sum += n
    return sum
  }
  return sums(n)
};