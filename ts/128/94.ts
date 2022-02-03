import { TreeNode } from '../class'

// 递归
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const inorder = (node: TreeNode | null): void => {
    if (!node) return
    inorder(node.left)
    res.push(node.val)
    inorder(node.right)
  }
  inorder(root)
  return res
};


// 迭代
function inorderTraversal1(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: TreeNode[] = []
  let node: TreeNode | null = root
  while (node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop() || null
    if (node) {
      res.push(node.val)
      node = node.right
    }
  }
  return res
 };