import { TreeNode } from '../class'

function kthSmallest(root: TreeNode | null, k: number): number {
  const ans: number[] = []
  const stack: TreeNode[] = []
  let node = root
  while (node || stack.length) {
    if (ans.length === k) break
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop() || null
    if (node) {
      ans.push(node.val)
      node = node.right
    }
  }
  return ans[ans.length - 1]
};