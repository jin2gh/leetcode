import { ListNode } from '../class'

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(-1, head)
  let cur = dummy
  while(cur && cur.next) {
    if (cur.next.val == val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return dummy.next
};