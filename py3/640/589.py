from typing import List

"""
# Definition for a Node.
"""
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children

class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        ans = []
        stack = []
        if root:
            stack.append(root)
        while len(stack):
            node = stack.pop()
            ans.append(node.val)
            for v in node.children[::-1]:
                stack.append(v)

        return ans