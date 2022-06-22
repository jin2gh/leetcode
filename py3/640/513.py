from collections import deque
from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    # BFS
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        ans = None
        if not root: return ans
        que = deque()
        que.append(root)
        while que:
            node = que.popleft()
            if node.right: que.append(node.right)
            if node.left: que.append(node.left)
            ans = node.val

        return ans