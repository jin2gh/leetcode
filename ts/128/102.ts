import { TreeNode } from '../class'

// BFS
function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = []
  if (root) {
    const queue: TreeNode[] = [root]
    while (queue.length) {
      const item: number[] = []
      const len = queue.length
      for (let i = 0; i < len; i++) {
        const node = queue.shift()
        if (node) {
          item.push(node.val)
          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right)
        }
      }
      res.push(item)
    }
  }
  return res
};

// DFS
function levelOrder1(root: TreeNode | null): number[][] {
  const levelorder = (
    node: TreeNode | null,
    nodes: number[][] = [],
    index: number = 0
  ): number[][] => {
    if (node) {
      if (!nodes[index]) nodes[index] = []
      nodes[index].push(node.val)
      if (!node.left && !node.right) return nodes
      index += 1
      levelorder(node.left, nodes, index)
      levelorder(node.right, nodes, index)
    }

    return nodes
  }
  return levelorder(root)
};