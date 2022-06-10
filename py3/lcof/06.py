from typing import List

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
        res = []
        ptr = head
        while ptr:
            res.append(ptr.val)
            ptr = ptr.next
        res.reverse()
        return res