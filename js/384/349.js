// intersection-of-two-arrays

/**
 * 哈希表
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  let map1 = {}, res = {}
  for (let i = 0; i < nums1.length; i++) {
    if (map1[nums1[i]]) {
      map1[nums1[i]] += 1
    } else {
      map1[nums1[i]] = 1
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map1[nums2[i]]) {
      res[nums2[i]] = 1
    }
  }
  return Object.keys(res)
}