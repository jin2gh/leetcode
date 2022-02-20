import { ListNode } from '../class'

export function middleNode(head: ListNode | null): ListNode | null {
  let fast = head, slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
};