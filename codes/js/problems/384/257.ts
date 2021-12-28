/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   val: number
 *   left: TreeNode | null
 *   right: TreeNode | null
 *   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *   }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = []
  const dfs = (node: TreeNode | null, path: string): void => {
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
}