from collections import deque

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:
    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """
        vals = []
        def dfs(node, res):
            if not node:
                res.append('None')
                return res
            res.append(str(node.val))
            dfs(node.left, res)
            dfs(node.right, res)
            return res
        dfs(root, vals)
        return ','.join(vals)

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """
        dq = deque(data.split(','))

        def dfs(vals):
            val = vals.popleft()
            if val == 'None':
                return None
            node = TreeNode(int(val))
            node.left = dfs(vals)
            node.right = dfs(vals)
            return node

        return dfs(dq)

# Your Codec object will be instantiated and called as such:
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# tree = ser.serialize(root)
# ans = deser.deserialize(tree)
# return ans