/**
 * Definition for node.
 */
class NTreeNode {
  val: number
  children: NTreeNode[]
  constructor(val?: number) {
    this.val = (val===undefined ? 0 : val)
    this.children = []
  }
}

function preorder(root: NTreeNode | null): number[] {
  const ans: number[] = []
  const preorder = (node: NTreeNode | null): void => {
    if (!node) return
    ans.push(node.val)
    for (const child of node.children) {
      preorder(child)
    }
  }
  preorder(root)
  return ans
};