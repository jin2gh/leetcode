# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        fast, slow = head, head
        cnt = 0
        while cnt < k and fast:
            fast = fast.next
            cnt += 1

        while fast:
            fast = fast.next
            slow = slow.next

        return slow