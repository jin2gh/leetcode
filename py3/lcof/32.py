from collections import deque
from typing import List

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    # 32-I
    def levelOrder(self, root: TreeNode) -> List[int]:
        ans, queue = [], deque()
        if not root:
            return ans
        queue.append(root)
        while queue:
            node = queue.popleft()
            ans.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        return ans