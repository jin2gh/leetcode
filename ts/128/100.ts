import { TreeNode } from '../class'

// DFS
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if (p && q) {
    if (p.val === q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    return false
  }
  return false
};