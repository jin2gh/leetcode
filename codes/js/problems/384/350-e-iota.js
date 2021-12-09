// intersection-of-two-arrays-ii
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1)
  }
  const ht = {}, res = []
  for (const val of nums1) {
    if (ht[val]) {
      ht[val] += 1
    } else {
      ht[val] = 1
    }
  }
  for (const val of nums2) {
    if (ht[val] > 0) {
      ht[val] -= 1
      res.push(val)
    }
  }

  return res
};