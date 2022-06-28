# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def dfs(node):
            if not node: return 0
            ht_left = dfs(node.left)
            ht_right = dfs(node.right)
            if ht_left == -1 or ht_right == -1 or abs(ht_left - ht_right) > 1: return -1
            return max(ht_left, ht_right) + 1

        return dfs(root) >= 0