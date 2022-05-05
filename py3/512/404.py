from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        def isLeafNode(node):
            return not node.left and not node.right
        ans = 0
        if root:
            if isLeafNode(root):
                return ans
            stack = [root]
            while stack:
                node = stack.pop()
                if isLeafNode(node):
                    ans += node.val
                if node.left:
                    stack.append(node.left)
                if node.right and not isLeafNode(node.right):
                    stack.append(node.right)
        return ans