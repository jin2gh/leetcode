function partitionLabels(s: string): number[] {
  const ht = {}, len = s.length
  const ans: number[] = []
  let start = 0, end = 0
  for (let i = 0; i < len; i++) {
    ht[s[i]] = i
  }
  for (let i = 0; i < len; i++) {
    end = Math.max(ht[s[i]], end)
    if (end === i) {
      ans.push(end - start + 1)
      start = i + 1
    }
  }
  return ans
};