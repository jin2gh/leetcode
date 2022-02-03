import { TreeNode } from '../class'

// 递归
function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const preorder = (node: TreeNode | null): void => {
    if (!node) return
    res.push(node.val)
    preorder(node.left)
    preorder(node.right)
  }
  preorder(root)
  return res
};

/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
 function preorderTraversal1(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: TreeNode[] = []
  if (root) {
    stack.push(root)
    while (stack.length) {
      const node = stack.pop()
      if (!node) continue
      if (node.val) res.push(node.val)
      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
    }
  }
  return res
};