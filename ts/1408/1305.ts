import { TreeNode } from '../class'
import { iterativeInorderTraversal as inorder } from '../128/94'

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const nums1 = inorder(root1), nums2 = inorder(root2)
  const ans = [], m = nums1.length, n = nums2.length
  let i = 0, j = 0
  while (i < m || j < n) {
    if (i === m) {
      while (j < n) {
        ans.push(nums2[j++])
      }
      break
    }
    if (j === n) {
      while (i < m) {
        ans.push(nums1[i++])
      }
      break
    }
    if (nums1[i] < nums2[j]) ans.push(nums1[i++])
    else ans.push(nums2[j++])
  }
  return ans
};