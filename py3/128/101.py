# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        def isEqual(A: TreeNode, B: TreeNode) -> bool:
            if not A and not B: return True
            if not A or not B or A.val != B.val: return False
            return isEqual(A.left, B.right) and isEqual(A.right, B.left)

        return isEqual(root.left, root.right) if root else True