function topKFrequent(nums: number[], k: number): number[] {
  const ans: number[] = []
  let ht = {}, counts: number[][] = []
  for (const v of nums) {
    if (ht[v]) {
      ht[v] += 1
    } else {
      ht[v] = 1
    }
  }

  for (let key in ht) {
    counts.push([+key, ht[key]])
  }

  counts.sort((a, b) => (b[1] - a[1]))

  for (let i = 0; i < k; i++) {
    ans.push(counts[i][0])
  }

  return ans
};