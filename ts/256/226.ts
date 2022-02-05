import { TreeNode } from '../class'

// DFS
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root) {
    const left = invertTree(root.left)
    const right = invertTree(root.right)
    root.left = right
    root.right = left
  }
  return root
};