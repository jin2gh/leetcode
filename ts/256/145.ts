import { TreeNode } from '../class'

// 递归
function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const postorder = (node: TreeNode | null): void => {
    if (!node) return
    postorder(node.left)
    postorder(node.right)
    res.push(node.val)
  }
  postorder(root)
  return res
};

// 迭代
function postorderTraversal1(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: TreeNode[] = []
  let node: TreeNode | null = root, prev: TreeNode | null = null
  while (node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop() || null
    if (node) {
      if (!node.right || node.right === prev) {
        res.push(node.val)
        prev = node
        node = null
      } else {
        stack.push(node)
        node = node.right
      }
    }
  }
  return res
};