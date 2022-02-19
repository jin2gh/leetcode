function pancakeSort(arr: number[]): number[] {
  const ans: number[] = [], len = arr.length
  for (let n = len; n > 1; n--) {
    let idx = 0, decrease = true
    for (let i = 1; i < n; i++) {
      if (arr[idx] <= arr[i]) {
        idx = i
        decrease = false
      }
    }
    if (idx === n - 1) continue
    if (!decrease) {
      reversePancake(arr, idx)
      ans.push(idx + 1)
    }

    reversePancake(arr, n - 1)
    ans.push(n)
  }

  return ans
};

function reversePancake (arr: number[], len: number): void {
  let i = 0, j = len
  while (i < j) {
    const tmp = arr[j]
    arr[j] = arr[i]
    arr[i] = tmp
    i += 1
    j -= 1
  }
}