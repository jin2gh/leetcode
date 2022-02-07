import { TreeNode } from '../class'
import { inorderTraversalIterative as inorder } from '../128/94'

// 中序遍历
function isValidBST(root: TreeNode): boolean {
  const vals = inorder(root)
  for (let i = 1; i < vals.length; i++) {
    if (vals[i] <= vals[i - 1]) return false
  }
  return true
};