import { TreeNode } from '../class'

/**
 * 32-I
 */
function levelOrder(root: TreeNode | null): number[] {
  const ans: number[] = []
  if (!root) return ans
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const node = queue.shift()
    ans.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return ans
};