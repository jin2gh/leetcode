import { ListNode } from '../class'

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(-1, head)
  let i = 0, pre = dummy, cur
  while (i < left - 1) {
    pre = pre.next
    i += 1
  }
  cur = pre.next
  while (i < right - 1) {
    const next = cur.next
    cur.next = next.next
    next.next = pre.next
    pre.next = next
    i += 1
  }
  return dummy.next
};