import { ListNode } from '../class'

// 迭代
export function reverseList(head: ListNode | null): ListNode | null {
  let pre = null, cur = head, next = null
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};