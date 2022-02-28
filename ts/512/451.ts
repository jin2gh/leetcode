function frequencySort(s: string): string {
  const ht = {}, buckets: string[][] = []
  let ans = ''
  for (const c of s) {
    if (ht[c]) {
      ht[c] += 1
    } else {
      ht[c] = 1
    }
  }
  for (const k in ht) {
    if (!buckets[ht[k]]) {
      buckets[ht[k]] = [k]
    } else {
      buckets[ht[k]].push(k)
    }
  }

  const idx = buckets.length - 1
  for (let i = idx; i > 0; i--) {
    if (!buckets[i]) continue
    for (const v of buckets[i]) {
      let j = i
      while (j) {
        ans += v
        j -= 1
      }
    }
  }
  return ans
};