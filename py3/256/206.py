# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        pre, cur = None, head
        while cur:
            nxt = cur.next # 存储下一个结点
            cur.next = pre # 将当前结点的 next 指针指向前一个结点
            pre = cur      # 将前一个结点的指针指向当前结点
            cur = nxt      # 将当前结点的指针指向下一个结点

        return pre