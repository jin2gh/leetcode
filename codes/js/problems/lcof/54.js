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
 * @param {number} k
 * @return {number}
 */
const kthLargest = function(root, k) {
  const res = []
  const dfs = (node) => {
    if (!node) return
    dfs(node.left)
    res.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  return res[res.length - k]
};