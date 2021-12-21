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
 * @param {number} depth
 * @return {number}
 */
const maxDepth = function(root, depth = 0) {
  if(root) {
    depth++
    let ld = depth, rd = depth
    if(root.left) {
      ld = maxDepth(root.left, depth)
    }
    if(root.right) {
      rd = maxDepth(root.right, depth)
    }
    depth = Math.max(ld, rd)
  }
  return depth
}