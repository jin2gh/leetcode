import { TreeNode } from '../class'

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let ans: (number | 'null')[] = []
  const dfs = (node: TreeNode | null): void => { // 先序遍历第一个是头节点
    if (!node) {
      ans.push('null')
      return
    }
    ans.push(node.val)
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return ans.join(',')
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const vals = data.split(',').reverse()
  const dfs = (nodes: string[]): TreeNode | null => {
    const val = nodes.pop()
    if (val === 'null') return null
    let node = new TreeNode(+val)
    node.left = dfs(nodes)
    node.right = dfs(nodes)
    return node
  }

  return dfs(vals)
};