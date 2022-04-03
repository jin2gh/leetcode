import { TreeNode } from '../class'
import { iterativeInorderTraversal as inorder } from '../128/94'

function kthLargest(root: TreeNode | null, k: number): number {
  const ans: number[] = inorder(root)
  return ans[ans.length - k]
};