import { TreeNode } from '../class'

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  let node = root
  const target = new TreeNode(val)
  while (node) {
    if (val > node.val) {
      if (!node.right) {
        node.right = target
        break
      }
      node = node.right
    } else {
      if (node.left) {
        node.left = target
        break
      }
      node = node.left
    }
  }
  return root ? root : target
};