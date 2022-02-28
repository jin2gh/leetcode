function printNumbers(n: number): number[] {
  const max = tenPow(n)
  const ans: number[] = []
  for (let i = 0; i < max; i++) {
    ans.push(i)
  }
  return ans
};

function tenPow(n: number): number {
  let num = 1, i = 0
  while (i < n) {
    num *= 10
    i += 1
  }
  return num
}