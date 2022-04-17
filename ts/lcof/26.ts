import { TreeNode } from '../class'

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!A || !B) return false
  const stack = [A]
  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    if (node.val === B.val) {
      if (check(node, B)) return true
    }
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return false
};

function check(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!B) return true
  if (!A || A.val !== B.val) return false
  return check(A.left, B.left) && check(A.right, B.right)
}