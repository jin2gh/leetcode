import { ListNode } from "../class"

// 双指针
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(-1, head)
  let fast = head, slow = dummy, i = 0
  while (i < n) {
    fast = fast.next
    i += 1
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
};