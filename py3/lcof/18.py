# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        dummy = ListNode(-1, head)
        ptr = dummy
        while ptr.next:
            if ptr.next.val == val:
                ptr.next = ptr.next.next
                break
            ptr = ptr.next

        return dummy.next