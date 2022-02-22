import { TreeNode } from '../class'

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const root = new TreeNode(preorder[0]) // 前序遍历第一个是根节点
  const stack = [root]
  let idx = 0
  for (let i = 1; i < preorder.length; i++) {
    const pre_v = preorder[i]
    let node = stack[stack.length - 1]
    if (node.val !== inorder[idx]) {
      node.left = new TreeNode(pre_v)
      stack.push(node.left)
    } else {
      while(stack.length && stack[stack.length - 1].val === inorder[idx]) {
        node = stack.pop()
        idx += 1
      }
      node.right = new TreeNode(pre_v)
      stack.push(node.right)
    }
  }

  return root
};