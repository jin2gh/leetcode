import { TreeNode } from '../class'

function isBalanced(root: TreeNode | null): boolean {
  const dfs = (node: TreeNode): number => {
    if (!node) return 0
    const lh = dfs(node.left)
    const rh = dfs(node.right)
    if (lh === -1 || rh === -1 || Math.abs(lh - rh) > 1) return -1
    return Math.max(lh, rh) + 1
  }
  return dfs(root) >= 0
};