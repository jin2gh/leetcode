# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def countNodes(self, root: TreeNode) -> int:
        if not root:
            return 0
        lv = 0
        ptr = root
        while ptr:
            lv += 1
            ptr = ptr.left

        l, r = 2 ** (lv - 1), 2 ** lv - 1
        while l < r:
            m = l + (r - l + 1) // 2
            if self.search_node(root, lv, m):
                l = m
            else:
                r = m - 1

        return l


    def search_node(self, root: TreeNode, level: int, target: int):
        b = 1 << (level - 2)
        ptr = root
        while ptr and b > 0:
            if b & target:
                ptr = ptr.right
            else:
                ptr = ptr.left
            b >>= 1

        return ptr != None