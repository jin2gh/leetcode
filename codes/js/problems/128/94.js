/**
 * Definition for a binary tree root.
 * function Treeroot(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 递归
 * @param {Treeroot} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  const res = []
  const inorder = node => {
    if (!node) return
    inorder(node.left)
    res.push(node.val)
    inorder(node.right)
  }
  return res
}

/**
 * 迭代
 * @param {Treeroot} root
 * @return {number[]}
 */
const inorderTraversal1 = function(root) {
  const res = []
  const stack = []
  let node = root
  while(node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    res.push(node.val)
    node = node.right
  }
  return res
}