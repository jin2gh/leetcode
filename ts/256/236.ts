import { TreeNode } from '../class'

// 递归
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || root.val === p.val || root.val === q.val) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left && right) return root
  return left || right
};