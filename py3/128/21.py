# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode(-1)
        p0 = dummy
        while l1 or l2:
            if not l1:
                p0.next = l2
                break
            if not l2:
                p0.next = l1
                break
            if l1.val < l2.val:
                p0.next = l1
                l1 = l1.next
            else:
                p0.next = l2
                l2 = l2.next
            p0 = p0.next

        return dummy.next