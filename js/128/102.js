/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * 递归
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root, nodes = [], index = 0) {
  if (root) {
    if (nodes[index]) {
      nodes[index].push(root.val)
    } else {
      nodes[index] = [root.val]
    }
    if (!root.left && !root.right) {
      return nodes
    }
    index += 1
    if (root.left) {
      levelOrder(root.left, nodes, index)
    }
    if (root.right) {
      levelOrder(root.right, nodes, index)
    }
  }
  return nodes
}