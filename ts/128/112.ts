import { TreeNode } from '../class'

// DFS
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root) {
    if (!root.left && !root.right) return root.val === targetSum
    const target = targetSum - root.val
    return hasPathSum(root.left, target) || hasPathSum(root.right, target)
  }

  return false
};