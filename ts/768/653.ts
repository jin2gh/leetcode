import { TreeNode } from '../class'
import { iterativeInorderTraversal as inorder } from '../128/94'

// 中序遍历 + 双指针
function findTarget(root: TreeNode | null, k: number): boolean {
  const vals: number[] = inorder(root)
  let i = 0, j = vals.length - 1
  while (i < j) {
    let sum = vals[i] + vals[j]
    if (sum === k) return true
    sum < k ? i+= 1 : j -= 1
  }
  return false
};

// dfs + 哈希表
function findTarget1(root: TreeNode | null, k: number): boolean {
  const ht = {}
  const dfs = (node: TreeNode | null): boolean => {
    if (!node) return false
    if (ht[k - node.val]) return true
    ht[node.val] = true

    return dfs(node.left) || dfs(node.right)
  }

  return dfs(root)
};