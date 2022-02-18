import { ListNode } from '../class'

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(-101, head)
  let prev: ListNode | null = dummy, cur = head
  while (cur) {
    if (cur.next && cur.val === cur.next.val) {
      const tmp = cur.val
      while (cur && cur.val === tmp) {
        cur = cur.next
      }
      prev.next = cur
    } else {
      prev = prev.next
      cur = cur.next
    }
  }
  return dummy.next
};