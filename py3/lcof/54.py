# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def kthLargest(self, root: TreeNode, k: int) -> int:
        stack, vals = [], []
        ptr = root
        while ptr or stack:
            while ptr:
                stack.append(ptr)
                ptr = ptr.left

            ptr = stack.pop()
            vals.append(ptr.val)
            ptr = ptr.right

        return vals[-k]