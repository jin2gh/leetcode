import { TreeNode } from '../class'

// 递归
function isSymmetric(root: TreeNode | null): boolean {
  const check = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) return true
    if (!left || !right) return false
    return left.val === right.val && check(left.left, right.right) && check(right.left, left.right)
  }
  if (root) {
    return check(root.left, root.right)
  }
  return true
};

// 迭代
function isSymmetric1(root: TreeNode | null): boolean {
  const check = (left: TreeNode | null, right: TreeNode | null) => {
    const queue: (TreeNode | null)[] = [left, right]
    while (queue.length) {
      const l = queue.shift()
      const r = queue.shift()
      if (!l && !r) continue
      if ((!l || !r ) || (l.val !== r.val)) return false
      queue.push(l.left, r.right)
      queue.push(l.right, r.left)
    }
    return true
  }

  if (root) {
    return check(root.left, root.right)
  }
  return true
}