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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  const res = []
  const dfs = (node, path) => {
    if (node) {
      path += node.val
      if (!node.left && !node.right) {
        res.push(path)
      } else {
        path += '->'
        dfs(node.left, path)
        dfs(node.right, path)
      }
    }
  }
  dfs(root, '')
  return res
};