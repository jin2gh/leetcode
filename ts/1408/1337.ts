function kWeakestRows(mat: number[][], k: number): number[] {
  const m = mat.length, n = mat[0].length
  const buckets: number[][] = new Array(m).fill(0).map(() => new Array(2).fill(0))
  const ans: number[] = []
  for (let i = 0; i < m; ++i) {
    let l = 0, r = n - 1, mid = 0
    while (l <= r) {
      mid = l + ((r - l) >> 1)
      if (mat[i][mid] === 1) l = mid + 1
      else r = mid - 1
    }
    buckets[i] = [i, l]
  }
  buckets.sort((a, b) => a[1] - b[1])

  for (let i = 0; i < k; ++i) {
    ans.push(buckets[i][0])
  }

  return ans
};