function sumOddLengthSubarrays(arr: number[]): number {
  const n = arr.length
  let sum = 0
  for (let i = 0; i < n; ++i) {
    const cntLeft = i, cntRight = n - i - 1
    const oddLeft = (cntLeft + 1) >> 1
    const oddRight = (cntRight + 1) >> 1
    const leftEven = (cntLeft >> 1) + 1
    const rightEven = (cntRight >> 1) + 1
    sum += arr[i] * (oddLeft * oddRight + leftEven * rightEven)
  }
  return sum
};