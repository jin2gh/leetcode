import { TreeNode } from '../class'

// BFS
function maxDepth(root: TreeNode | null): number {
  let ans = 0
  const queue = []
  if (root) queue.push(root)
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    ans += 1
  }
  return ans
};

// DFS
function maxDepthDFS(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null, depth: number = 0): number => {
    if (node) {
      depth += 1
      return Math.max(dfs(node.left, depth), dfs(node.right, depth))
    }
    return depth
  }
  return dfs(root)
};