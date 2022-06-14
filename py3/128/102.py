from collections import deque
from typing import List

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        ans, que = [], deque()
        if root:
            que.append(root)
            while que:
                len_que, items = len(que), []
                for i in range(len_que):
                    node = que.popleft()
                    items.append(node.val)
                    if node.left:
                        que.append(node.left)
                    if node.right:
                        que.append(node.right)

                ans.append(items)

        return ans