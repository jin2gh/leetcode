import { TreeNode } from '../class'

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const ans: number[][] = []
  if (!root) return ans

  const dfs = (node: TreeNode, target: number, paths: string = ''): void => {
    paths ? paths += `,${node.val}` : paths += node.val
    if (!node.left && !node.right && target === node.val) {
      ans.push(paths.split(',').map(v => +v))
    }
    if (node.left) dfs(node.left, target - node.val, paths)
    if (node.right) dfs(node.right, target - node.val, paths)
  }

  dfs(root, targetSum)
  return ans
};