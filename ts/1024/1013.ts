function canThreePartsEqualSum(arr: number[]): boolean {
  const sum = arr.reduce((t, n) => t + n)
  if (sum % 3) return false
  const target = sum / 3, idx = arr.length - 1
  let sub = 0, i = 0
  while (i <= idx) {
    sub += arr[i++]
    if (sub === target) break
  }
  if (sub !== target) return false
  while (i < idx) {
    sub += arr[i++]
    if (sub === target * 2) return true
  }
  return false
};