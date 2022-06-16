# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def isSubStructure(self, A: TreeNode, B: TreeNode) -> bool:
        def check(A: TreeNode, B: TreeNode) -> bool:
            if not B: return True
            if not A or A.val != B.val: return False
            return check(A.left, B.left) and check(A.right, B.right)

        if not A or not B: return False
        stack = [A]
        while stack:
            pa = stack.pop()
            if pa.val == B.val:
                flag = check(pa, B)
                if flag: return True
            if pa.right: stack.append(pa.right)
            if pa.left: stack.append(pa.left)

        return False