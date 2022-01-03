/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isBalanced = function(root) {
  const height = node => {
    if (!node) return 0
    let lh = height(node.left)
    let rh = height(node.right)
    if (lh === -1 || rh === -1 || Math.abs(lh - rh) > 1) {
      return -1
    }
    return Math.max(lh, rh) + 1
  }
  return 0 <= height(root)
}