import { TreeNode } from '../class'

function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null {
  if (p.val > q.val) return lowestCommonAncestor(root, q, p)
  let node: TreeNode | null = root
  while (node) {
    if (node.val >= p.val && node.val <= q.val) return node
    if (node.val <= p.val) {
      node = node.right
    } else if (node.val >= q.val) {
      node = node.left
    }
  }
  return node
};