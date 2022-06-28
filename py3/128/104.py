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
    def maxDepthBFS(self, root: Optional[TreeNode]) -> int:
        if not root: return 0
        que = deque([root])
        depth = 0
        while que:
            n = len(que)
            for _ in range(n):
                node = que.popleft()
                if node.left: que.append(node.left)
                if node.right: que.append(node.right)
            depth += 1

        return depth

    # DFS
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def dfs(node, depth):
            if not node: return depth
            depth += 1
            return max(dfs(node.left, depth), dfs(node.right, depth))

        return dfs(root, 0)