import { NAryTreeNode as Node } from '../class'

function levelOrder(root: Node | null): number[][] {
  const ans: number[][] = []
  const q: Node[] = []
  if (root) q.push(root)
  while (q.length) {
    const len = q.length
    const item = []
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      item.push(node.val)
      q.push(...node.children)
    }
    ans.push(item)
  }
  return ans
};