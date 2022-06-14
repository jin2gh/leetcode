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
            flag = True
            que.append(root)
            while que:
                items, len_que = [], len(que)
                for i in range(len_que):
                    node = que.popleft()
                    items.append(node.val)

                    if node.left:
                        que.append(node.left)
                    if node.right:
                        que.append(node.right)
                if flag:
                    ans.append(items)
                else:
                    ans.append(items[::-1])

                flag = not flag

        return ans