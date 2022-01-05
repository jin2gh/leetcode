// 双指针
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i: number = m - 1, j: number = n -1, index: number = m + n - 1
  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[index--] = nums1[i--]
    } else {
      nums1[index--] = nums2[j--]
    }
  }
}