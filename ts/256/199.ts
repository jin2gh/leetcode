import { TreeNode } from '../class'

// BFS
function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = []
  if (!root) return ans
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const idx = queue.length - 1
    for (let i = 0; i <= idx; i++) {
      const node = queue.shift()
      if (node) {
        if (idx === i) ans.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
  }
  return ans
};