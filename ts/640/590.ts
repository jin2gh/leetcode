import { NAryTreeNode } from '../class'

function postorder(root: NAryTreeNode | null): number[] {
  const ans: number[] = []

  const dfs = (node: NAryTreeNode | null): void => {
    if (!node) return
    for (const child of node.children) {
      dfs(child)
    }
    ans.push(node.val)
  }
  dfs(root)
  return ans
};