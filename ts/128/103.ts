import { TreeNode } from '../class'

// BFS
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let dir: boolean = true
  const ans: number[][] = []
  if (!root) return ans
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const item: number[] = []
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (node) {
        if (dir) {
          item.push(node.val)
        } else {
          item.unshift(node.val)
        }
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    ans.push(item)
    dir = !dir
  }

  return ans
};