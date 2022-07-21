from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        tmp = None
        stack = []
        ptr = root
        while stack or ptr:
            while ptr:
                stack.append(ptr)
                ptr = ptr.left

            node = stack.pop()
            if tmp is None: tmp = node.val
            elif tmp >= node.val: return False
            else: tmp = node.val

            if node.right: ptr = node.right

        return True