/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
  if (!preorder.length) return null
  let root = new TreeNode(preorder[0])
  const stack = [root]
  let idx = 0
  for (let i = 1; i < preorder.length; i++) {
    let preorderVal = preorder[i]
    let node = stack[stack.length - 1]
    if (node.val !== inorder[idx]) {
      node.left = new TreeNode(preorderVal)
      stack.push(node.left)
    } else {
      while (stack.length && stack[stack.length - 1].val === inorder[idx]) {
        node = stack.pop()
        idx += 1
      }
      node.right = new TreeNode(preorderVal)
      stack.push(node.right)
    }
  }
  return root
}