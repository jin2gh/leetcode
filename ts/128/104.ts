import { TreeNode } from '../class'

// DFS
function maxDepth(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null, depth: number = 0): number => {
    if (node) {
      depth += 1
      return Math.max(dfs(node.left, depth), dfs(node.right, depth))
    }
    return depth
  }
  return dfs(root)
};