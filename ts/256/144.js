/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function(root) {
  const res = []
  const preorder = node => {
    if (!node) return
    res.push(node.val)
    preorder(node.left)
    preorder(node.right)
  }
  preorder(root)
  return res
}

/**
 * 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal1 = function(root) {
  const res = []
  const stack = []
  if (root) {
    stack.push(root)
    while(stack.length) {
      let node = stack.pop()
      if (node.val !== null) res.push(node.val)
      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
    }
  }
  return res
}