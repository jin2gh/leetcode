import { TreeNode } from '../class'

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root
  let ptr = root, ptr_p = null
  while (ptr && ptr.val !== key) {
    ptr_p = ptr
    ptr = ptr.val > key ? ptr.left : ptr.right
  }

  if (!ptr) return root // 找不到对应的 key

  if (ptr.left && ptr.right) { // 双子节点找右子树的最小值
    let min = ptr.right, min_p = ptr
    while (min.left) {
      min_p = min
      min = min.left
    }

    // 交换要删除的节点和 min 节点的值后，删除 min 节点
    ptr.val = min.val
    ptr = min
    ptr_p = min_p
  }

  let child = null
  if (ptr.left) child = ptr.left
  else if (ptr.right) child = ptr.right

  if (!ptr_p) root = child // 删除的是根节点且根节点只有一个子节点
  else if (ptr_p.left === ptr) ptr_p.left = child
  else ptr_p.right = child

  return root
};