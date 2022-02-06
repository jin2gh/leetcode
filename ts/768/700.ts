import { TreeNode } from '../class'

// 迭代
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while (root && root.val !== val) {
    if (root.val > val) {
      root = root.left
    } else {
      root = root.right
    }
  }
  return root
};