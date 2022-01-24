import { ListNode } from '../class'

// 迭代
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
};