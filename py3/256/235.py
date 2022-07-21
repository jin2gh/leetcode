# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if p.val > q.val: return self.lowestCommonAncestor(root, q, p)
        ptr = root
        while ptr:
            if ptr.val < p.val: ptr = ptr.right
            elif ptr.val > q.val: ptr = ptr.left
            else: break
        return ptr