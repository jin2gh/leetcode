function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(), ans: number[] = []
  for (const v of nums1) {
    set1.add(v)
  }
  for (const v of nums2) {
    if (set1.has(v)) {
      ans.push(v)
      set1.delete(v)
    }
  }
  return ans
};