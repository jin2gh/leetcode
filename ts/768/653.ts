import { TreeNode } from '../class'
import { inorderTraversalIterative as inorder } from '../128/94'

function findTarget(root: TreeNode | null, k: number): boolean {
  const vals: number[] = inorder(root)
  let i = 0, j = vals.length - 1
  while (i < j) {
    let sum = vals[i] + vals[j]
    if (sum === k) return true
    sum < k ? i+= 1 : j -= 1
  }
  return false
};