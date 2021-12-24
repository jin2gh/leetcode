/**
 * @param {TreeNode} l
 * @param {TreeNode} r
 * @return {boolean}
 */
const check = (l, r) => {
  if (!l && !r) return true
  if (!l || !r) return false
  return l.val === r.val && check(l.left, r.right) && check(r.left, l.right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return check(root.left, root.right)
}