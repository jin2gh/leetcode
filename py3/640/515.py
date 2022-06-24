from collections import deque
from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        ans = []
        if not root: return ans
        que = deque()
        que.append(root)
        while que:
            n = len(que)
            max_v = float('-inf')
            for i in range(n):
                node = que.popleft()
                if node.val > max_v: max_v = node.val
                if node.left: que.append(node.left)
                if node.right: que.append(node.right)
            ans.append(max_v)

        return ans