import { TreeNode } from '../class'

function tree2str(root: TreeNode | null): string {
  const dfs = (node: TreeNode | null): string => {
    if (!node) return ''
    let s = `${node.val}`
    if (!node.left && !node.right) return s
    if (node.left) s += `(${dfs(node.left)})`
    else s += '()'

    if (node.right) s += `(${dfs(node.right)})`

    return s
  }

  return dfs(root)
};