# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isUnivalTree(self, root: TreeNode) -> bool:
        val = root.val
        stack = []
        ptr = root
        while ptr or stack:
            while ptr:
                if ptr.val != val:
                    return False
                stack.append(ptr)
                ptr = ptr.left
            ptr = stack.pop()
            if ptr:
                ptr = ptr.right

        return True