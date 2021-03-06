import { NAryTreeNode } from '../class'

function preorder(root: NAryTreeNode | null): number[] {
  const ans: number[] = []

  const dfs = (node: NAryTreeNode | null): void => {
    if (!node) return
    ans.push(node.val)
    for (const child of node.children) {
      dfs(child)
    }
  }
  dfs(root)
  return ans
};